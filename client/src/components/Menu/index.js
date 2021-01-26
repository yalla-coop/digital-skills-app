import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { NAV_ROUTES } from '../../constants/nav-routes';
import * as S from './style';

const Menu = ({ closeDrawer, user, selectedKey, setSelectedKey }) => {
  const { volunteer, HQUser } = NAV_ROUTES;

  const [navRoutes, setNavRoutes] = useState({
    routes: volunteer.LOGGED_OUT,
    authRoutes: volunteer.LOGGED_OUT_AUTH,
  });
  const history = useHistory();

  useEffect(() => {
    if (user && user.type === 'volunteer' && user.login === true) {
      setNavRoutes({
        routes: volunteer.LOGGED_IN,
        authRoutes: volunteer.LOGGED_IN_AUTH,
      });
    }
    if (user && user.type === 'volunteer' && user.login === false) {
      setNavRoutes({
        routes: volunteer.LOGGED_OUT,
        authRoutes: volunteer.LOGGED_OUT_AUTH,
      });
    }
    if (user && user.type === 'HQUser' && user.login === true) {
      setNavRoutes({
        routes: HQUser.LOGGED_OUT_AUTH,
        authRoutes: HQUser.LOGGED_IN_AUTH,
      });
    }
    if (user && user.type === 'HQUser' && user.login === false) {
      setNavRoutes({
        routes: HQUser.LOGGED_OUT,
        authRoutes: HQUser.LOGGED_OUT_AUTH,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClick = (event, to) => {
    if (typeof closeDrawer === 'function') {
      closeDrawer();
    }
    setSelectedKey(event.key);
    if (to) {
      history.push(to);
    }
  };

  const styledTopics = [];
  const styledAuthTopics = [];
  navRoutes.routes.forEach(({ title, to }, index) =>
    styledTopics.push(
      <S.Item key={index} onClick={(e) => handleClick(e, to)}>
        {title}
      </S.Item>
    )
  );

  navRoutes.authRoutes.forEach(({ title, to }, index) =>
    styledAuthTopics.push(
      <S.Item
        key={navRoutes.routes.length + index}
        onClick={(e) => handleClick(e, to)}
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
