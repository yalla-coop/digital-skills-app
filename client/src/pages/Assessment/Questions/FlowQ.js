import { useMediaQuery } from 'react-responsive';
import { Row, Col } from '../../../components/Grid';
import * as T from '../../../components/Typography';
import { Cards } from '../../../components/Inputs';
import Button from '../../../components/Button';
import { breakpoints } from '../../../theme';

import { flowQ } from './data';

const FlowQ = ({ decideFlow, selected, error, nextQ }) => {
  const isMobile = useMediaQuery({
    query: `(max-width: ${breakpoints.mobile})`,
  });
  return (
    <>
      <Row mt={isMobile ? '4' : '7'} mb={isMobile ? '4' : '6'}>
        <Col w={[4, 12, 10]}>
          <T.BodyLB>{flowQ.question}</T.BodyLB>
        </Col>
      </Row>

      <Cards
        handleChange={decideFlow}
        selected={selected}
        error={error}
        options={flowQ.options}
      />

      <Row mt="5">
        <Col w={[4, 12, 4]}>
          <Button handleClick={nextQ}>Continue</Button>
        </Col>
      </Row>
    </>
  );
};

export default FlowQ;
