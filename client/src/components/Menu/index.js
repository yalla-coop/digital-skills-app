import React, { useEffect, useState } from 'react';
import { useHistory, NavLink } from 'react-router-dom';
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
    if (logout) {
      try {
        logoutApi();
        setLoggingOut(true);
      } catch (err) {
        console.error(err);
      }
    }
  };

  const styledTopics = [];
  const styledAuthTopics = [];
  navRoutes.routes.forEach(({ title, to, logout }, index) =>
    styledTopics.push(
      <NavLink
        key={index}
        exact
        to={to}
        activeClassName="menu__item__selected"
        className="menu__item"
        onClick={(e) => handleClick(e, to, logout)}
      >
        {title}
      </NavLink>
    )
  );

  navRoutes.authRoutes.forEach(({ title, to, logout }, index) =>
    styledAuthTopics.push(
      <NavLink
        key={navRoutes.routes.length + index}
        exact
        to={to}
        className="menu__item"
        activeClassName={!logout && 'menu__item__selected'}
        onClick={(e) => handleClick(e, to, logout)}
      >
        {title}
      </NavLink>
    )
  );

  return (
    <S.Menu style={{ display: 'flex', flexDirection: 'column' }}>
      {styledTopics}
      <S.Divider />
      {styledAuthTopics}
    </S.Menu>
  );
};

export default Menu;
