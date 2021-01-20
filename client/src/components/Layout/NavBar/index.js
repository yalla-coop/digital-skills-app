import React, { useState } from 'react';
import { Drawer, Button } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import { Navbar as Nav } from './style';

const NavBar = ({ menu }) => {
  const [visible, setVisible] = useState(false);
  return (
    <Nav>
      <Button
        className="menu"
        type="primary"
        icon={<MenuOutlined />}
        onClick={() => setVisible(true)}
      />
      <Drawer
        title="Topics"
        placement="left"
        onClick={() => setVisible(false)}
        onClose={() => setVisible(false)}
        visible={visible}
      >
        {menu}
      </Drawer>
    </Nav>
  );
};
export default NavBar;
