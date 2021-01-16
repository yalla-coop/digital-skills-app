import React from 'react';
import { Route as RouterRoute, Redirect } from 'react-router-dom';
import Layout from './../../components/Layout';
import { navRoutes } from '../../constants/';

import { authorization } from '../../helpers';

const Loading = () => 'loading...';

const Route = (props) => {
  const {
    isMounted,
    isPrivate,
    layout,
    path,
    isLoggedIn,
    role,
    Component,
    exact,
    allowedRoles,
  } = props;

  if (!isMounted) return <Loading />;

  if (isPrivate) {
    const authorized = authorization(role, allowedRoles);

    if (isLoggedIn) {
      return (
        <Layout layout={layout} {...props}>
          <RouterRoute path={path} props exact={exact}>
            {authorized ? (
              <Component {...props} />
            ) : (
              <Redirect to={navRoutes.UNAUTHORIZED} {...props} />
            )}
          </RouterRoute>
        </Layout>
      );
    }
    return <Redirect to={navRoutes.LOGIN} />;
  }

  return (
    <Layout layout={layout} {...props}>
      <RouterRoute path={path} props exact={exact}>
        <Component {...props} />
      </RouterRoute>
    </Layout>
  );
};

export default Route;
