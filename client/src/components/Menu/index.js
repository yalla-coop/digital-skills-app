import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { NAV_ROUTES } from '../../constants/nav-routes';
import { useAuth } from '../../context/auth';
import * as S from './style';

const Menu = ({ closeDrawer, selectedKey, setSelectedKey }) => {
  const { volunteer, HQUser } = NAV_ROUTES;
  const { user, logout: logoutApi } = useAuth();
  const [navRoutes, setNavRoutes] = useState({
    routes: volunteer.LOGGED_OUT,
    authRoutes: volunteer.LOGGED_OUT_AUTH,
  });
  const [loggingOut, setLoggingOut] = useState(false);
  const history = useHistory();

  useEffect(() => {
    const isHQ = history.location.pathname.includes('/hq');
    if (user.role === 'VOLUNTEER') {
      setNavRoutes({
        routes: volunteer.LOGGED_IN,
        authRoutes: volunteer.LOGGED_IN_AUTH,
      });
    } else if (user.role === 'HQ') {
      setNavRoutes({
        routes: HQUser.LOGGED_IN,
        authRoutes: HQUser.LOGGED_IN_AUTH,
      });
    } else if (!isHQ) {
      setNavRoutes({
        routes: volunteer.LOGGED_OUT,
        authRoutes: volunteer.LOGGED_OUT_AUTH,
      });
    } else if (isHQ) {
      setNavRoutes({
        routes: HQUser.LOGGED_OUT,
        authRoutes: HQUser.LOGGED_OUT_AUTH,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loggingOut, user]);

  const handleClick = (event, to, logout) => {
    if (typeof closeDrawer === 'function') {
      closeDrawer();
    }
    setSelectedKey(event.key);
    if (logout) {
      try {
        logoutApi();
        setLoggingOut(true);
      } catch (err) {
        console.error(err);
      }
    }
    if (to) {
      history.push(to);
    }
  };

  const styledTopics = [];
  const styledAuthTopics = [];
  navRoutes.routes.forEach(({ title, to, logout }, index) =>
    styledTopics.push(
      <S.Item key={index} onClick={(e) => handleClick(e, to, logout)}>
        {title}
      </S.Item>
    )
  );

  navRoutes.authRoutes.forEach(({ title, to, logout }, index) =>
    styledAuthTopics.push(
      <S.Item
        key={navRoutes.routes.length + index}
        onClick={(e) => handleClick(e, to, logout)}
      >
        {title}
      </S.Item>
    )
  );

  return (
    <S.Menu mode="inline" defaultSelectedKeys={[selectedKey]}>
      {styledTopics}
      <S.Divider />
      {styledAuthTopics}
    </S.Menu>
  );
};

export default Menu;
