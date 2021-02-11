import React, { useState } from 'react';
import * as S from './style';
import Icon from '../../Icon';
import theme from '../../../theme';
import Menu from '../../Menu';
import { Link, useHistory } from 'react-router-dom';
import { GENERAL, EXTERNAL } from '../../../constants/nav-routes';

const NavBar = ({ selectedKey, setSelectedKey }) => {
  const [visible, setVisible] = useState(false);
  const {
    constants: {
      navBar: { drawer },
    },
  } = theme;

  const history = useHistory();
  return (
    <>
      <S.Navbar>
        <Link to={{ pathname: EXTERNAL.SCOUTS }} target="_blank">
          <Icon icon="logo" color="black" />
        </Link>
        <S.IconContainer>
          <S.Button
            icon={<Icon icon="search" />}
            onClick={() => history.push(GENERAL.SEARCH)}
          />
          <S.Button
            icon={<Icon icon="burger" />}
            onClick={() => setVisible(true)}
          />
        </S.IconContainer>
      </S.Navbar>
      <S.Drawer
        placement="left"
        title={
          <Link to={{ pathname: EXTERNAL.SCOUTS }} target="_blank">
            <Icon icon="logo" color="white" />
          </Link>
        }
        onClose={() => setVisible(false)}
        visible={visible}
        mask={false}
        width={drawer.width}
        bodyStyle={{ background: theme.colors.blue }}
        headerStyle={{
          background: theme.colors.blue,
          border: 'none',
          height: drawer.headHeight,
        }}
        closeIcon={<Icon icon="close" color="white" />}
      >
        {
          <Menu
            closeDrawer={() => setVisible(false)}
            selectedKey={selectedKey}
            setSelectedKey={setSelectedKey}
          />
        }
      </S.Drawer>
    </>
  );
};
export default NavBar;
