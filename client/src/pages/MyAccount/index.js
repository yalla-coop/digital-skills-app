import * as S from './style';
import * as T from './../../components/Typography';
import { Row, Col } from './../../components/Grid';
import Icon from '../../components/Icon';

import { navRoutes } from './../../constants';

const MyAccount = () => {
  return (
    <>
      <T.H3 mb="6" mbM="4">
        My Account
      </T.H3>

      <Row mt="2">
        <Col w={[3, 4, 4]}>
          <T.Link
            style={{ textDecoration: 'none' }}
            to={navRoutes.GENERAL.DELETE_ACCOUNT_CONFIRM}
          >
            <S.DeleteWrapper>
              <Icon color="gray1" icon="cross" m="0 0.5rem 0 0" />
              <T.Body16 color="gray">Delete my account</T.Body16>
            </S.DeleteWrapper>
          </T.Link>
        </Col>
      </Row>
    </>
  );
};

export default MyAccount;
