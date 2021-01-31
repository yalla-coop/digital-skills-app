import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Row, Col } from '../../components/Grid';
import * as T from '../../components/Typography';
import * as S from './style';
import * as R from '../../constants/nav-routes';
import Icon from '../../components/Icon';
import Button from '../../components/Button';

const TestLanding = () => {
  const [assessmentExists, setAssessmentExists] = useState(false);
  const history = useHistory();

  const getAssessmentFromStorage = () => {
    const assessment = JSON.parse(localStorage.getItem('assessment'));
    if (assessment) {
      setAssessmentExists(true);
    }
  };

  const handleReset = () => {
    localStorage.removeItem('assessment');
    history.push(R.GENERAL.ASSESSMENT_STEP.replace(':step', 1));
  };

  useEffect(() => {
    getAssessmentFromStorage();
  }, []);

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
      <Row mb={assessmentExists ? '3' : '5'}>
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
          {!assessmentExists && (
            <Button to={R.GENERAL.ASSESSMENT_STEP.replace(':step', 1)}>
              Let's go!
            </Button>
          )}
        </Col>
      </Row>
      {assessmentExists && (
        <>
          <Row mb="5">
            <Col w={[4, 8, 10]}>
              <T.BodyB color="black">
                It looks like you've already completed a digital skills test.
                Would you like to return to your resuts?
              </T.BodyB>
            </Col>
          </Row>
          <Row>
            <Col w={[4, 6, 4]}>
              <Button to={R.VOLUNTEER.DASHBOARD}>Go to my results</Button>
            </Col>
            <Col w={[4, 6, 4]}>
              <Button handleClick={handleReset}>Start quiz again</Button>
            </Col>
          </Row>
        </>
      )}
    </article>
  );
};

export default TestLanding;
