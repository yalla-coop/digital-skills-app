import * as T from '../../../components/Typography';
import { BackLink, Button, Grid } from '../../../components';

const { Row, Col } = Grid;

const Confirm = ({ handleDelete, loading, error }) => (
  <>
    <Row>
      <Col w={[4, 12, 12]}>
        <BackLink mb="5" />
      </Col>
    </Row>
    <Row>
      <Col w={[4, 12, 12]}>
        <T.H3 mb="5">Are you sure?</T.H3>
      </Col>
      <T.Body16 mb="5">
        Doing this will permanently delete all your details, including your
        digital score and any progress you’ve made.
      </T.Body16>
      <Col w={[4, 4, 4]}>
        <Button
          variant="primary"
          bgColor="teal"
          type="submit"
          handleClick={handleDelete}
          loading={loading}
        >
          I’m sure, delete my account
        </Button>
      </Col>
      <T.Body16 mt="5" color="red">
        {error}
      </T.Body16>
    </Row>
  </>
);

export default Confirm;
