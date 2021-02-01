import * as T from '../../../components/Typography';
import { Button, Grid } from '../../../components';
import { navRoutes } from '../../../constants';

const { Row, Col } = Grid;

const Success = () => {
  return (
    <>
      <Row>
        <Col w={[4, 12, 12]}>
          <T.H3 mb="5">Account Deleted</T.H3>
        </Col>
        <T.Body16 mb="5">
          This account and all related data has now been deleted.
        </T.Body16>
        <Col w={[4, 8, 8]}>
          <Button
            variant="primary"
            bgColor="teal"
            type="submit"
            to={navRoutes.GENERAL.LOGIN}
          >
            Return home
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default Success;
