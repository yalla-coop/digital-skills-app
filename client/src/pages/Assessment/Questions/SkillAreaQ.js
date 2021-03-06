import { useMediaQuery } from 'react-responsive';
import { Row, Col } from '../../../components/Grid';
import * as T from '../../../components/Typography';
import { Options } from '../../../components/Inputs';
import Button from '../../../components/Button';
import { breakpoints } from '../../../theme';

import { skillAreaQ } from './data';

const SkillAreaQ = ({
  decideSkillAreas,
  selected,
  error,
  nextQ,
  allSkillAreas,
}) => {
  const isMobile = useMediaQuery({
    query: `(max-width: ${breakpoints.mobile})`,
  });
  return (
    <>
      <Row mt={isMobile ? '4' : '7'} mb={isMobile ? '4' : '6'}>
        <Col w={[4, 12, 10]}>
          <T.BodyLB mb="3">{skillAreaQ.question}</T.BodyLB>
          <T.Body16 color="gray">(select as many as you like)</T.Body16>
        </Col>
      </Row>

      <Options
        selected={selected}
        handleChange={decideSkillAreas}
        options={allSkillAreas}
        error={error}
        multi
      />
      <Row mt="5">
        <Col w={[4, 6, 4]}>
          <Button handleClick={nextQ}>Continue</Button>
        </Col>
      </Row>
    </>
  );
};

export default SkillAreaQ;
