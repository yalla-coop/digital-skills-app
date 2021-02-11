import { Link } from 'react-router-dom';
import { Layout } from 'antd';

import theme from '../../../theme';
import { EXTERNAL } from '../../../constants/nav-routes';

import Icon from '../../Icon';
import Menu from '../../Menu';

import * as S from './style';

const SideBar = ({ color, selectedKey, setSelectedKey }) => {
  return (
    <Layout.Sider
      breakpoint={'lg'} // 768px from antd
      style={{ backgroundColor: color || theme.colors.blue }}
      collapsedWidth={0}
      trigger={null}
      width={theme.constants.sideBar.width}
    >
      <S.Container>
        <S.LogoContainer>
          <Link to={{ pathname: EXTERNAL.SCOUTS }} target="_blank">
            <Icon icon="logo" color="white" />
          </Link>
        </S.LogoContainer>
        <Menu selectedKey={selectedKey} setSelectedKey={setSelectedKey} />
      </S.Container>
    </Layout.Sider>
  );
};

export default SideBar;
