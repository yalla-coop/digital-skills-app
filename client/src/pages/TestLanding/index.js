import React from 'react';
import { Row, Col } from '../../components/Grid';
import * as T from '../../components/Typography';
import * as S from './style';
import * as R from '../../constants/nav-routes';
import Icon from '../../components/Icon';
import Button from '../../components/Button';

const TestLanding = () => {
  return (
    <article>
      <Row mb="5">
        <Col w={[4, 6, 8]}>
          <T.H2 mb="4">Digital skills test</T.H2>
          <T.BodyR color="gray" m="0">
            Complete this quiz to test your current skill level and get help in
            areas you find challenging. You'll be giving Bill Gates a run for
            his money in no time.
          </T.BodyR>
        </Col>
      </Row>
      <Row mb="5">
        <Col w={[4, 4, 4]}>
          <T.BodyB m="0" mb="2" color="gray">
            This will take
          </T.BodyB>
          <S.ClockWrapper mb="5">
            <Icon icon="clock" width="31" height="32" color="blue" />
            <T.BodyB m="0" ml="2" color="gray">
              10 minutes
            </T.BodyB>
          </S.ClockWrapper>
          <Button to={R.GENERAL.ASSESSMENT_STEP.replace(':step', 1)}>
            Let's go!
          </Button>
        </Col>
      </Row>
    </article>
  );
};

export default TestLanding;
