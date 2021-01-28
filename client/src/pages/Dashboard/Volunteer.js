import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Row, Col } from '../../components/Grid';
import { CTA } from '../../components/Card';
import * as T from '../../components/Typography';
import { navRoutes } from '../../constants';
import * as S from './style';
import { breakpoints } from '../../theme';
import CircleDiagram from '../../components/CircleDiagram';
import Icon from '../../components/Icon';
import { useAuth } from '../../context/auth';
import { Skills } from '../../api-calls';

const VolunteerDashboard = () => {
  const [skills, setSkills] = useState({
    alreadyHasSkills: null,
    newlyCompleted: null,
    totalSkills: null,
  });
  const [isScoreOpen, setIsScoreOpen] = useState(false);
  const [isSkillsOpen, setIsSkillsOpen] = useState(false);
  const {
    user: { id, fullName, assessmentScore, improvementScore },
  } = useAuth();

  const isMobile = useMediaQuery({
    query: `(max-width: ${breakpoints.mobile})`,
  });

  const firstName = fullName.split(' ')[0];

  useEffect(() => {
    const getUserSkillsStats = async () => {
      const { data, error } = await Skills.getUserSkillsStats();
      if (!error) {
        setSkills(data);
      }
    };

    getUserSkillsStats();
  }, []);

  return (
    <S.Wrapper>
      <Row>
        <Col w={[4, 8, 8]}>
          <T.H3 mb="4">
            {!id ? `Results are in!` : `Welcome back, ${firstName}!`}{' '}
          </T.H3>
        </Col>
        {!id && (
          <Col w={[4, 8, 8]}>
            <T.BodyR color="gray">
              Check out your personalised digital skill score! You can continue
              to improve it by taking a look at your very own course at the
              bottom of this page: it's been chosen just for you{' '}
            </T.BodyR>
          </Col>
        )}
      </Row>

      <Row jc="center">
        <Col w={[4, 6, 4]} mt="5">
          <S.Card>
            <T.H5 mt="5" mb="4">
              Your digital score
            </T.H5>
            <S.ProgressWrapper>
              <CircleDiagram
                currentScore={Math.round(improvementScore + assessmentScore)}
                progressScore={improvementScore}
                totalScore={100}
              />
            </S.ProgressWrapper>

            <S.ColouredSection color="blue">
              {isMobile && !isScoreOpen ? (
                <S.TellMeMoreButton onClick={() => setIsScoreOpen(true)}>
                  Tell me more
                </S.TellMeMoreButton>
              ) : (
                <>
                  <T.BodyR color="white">
                    Your score is based on your knowledge and confidence in the
                    digital tasks you need to complete as a volunteer.
                    <br />
                    <br />
                    Think of it as initial benchmark to help track your progress
                    as you whizz through your digital course. You'll be an
                    expert in no time.{' '}
                  </T.BodyR>
                </>
              )}
            </S.ColouredSection>
          </S.Card>
        </Col>
        <Col w={[4, 6, 4]} mt="5">
          <S.Card>
            <T.H5 mt="5" mb="4">
              Your digital skills{' '}
            </T.H5>
            <div style={{ display: 'flex' }}>
              <Icon
                width="80"
                icon="flash"
                strokeColor="teal"
                color="liteTeal"
              />
              <S.SkillNumbersWrapper>
                <T.H1 color="teal">
                  {Math.round(
                    Number(skills.newlyCompleted) +
                      Number(skills.alreadyHasSkills)
                  )}
                </T.H1>
                <T.BodyB color="gray">out of {skills.totalSkills}</T.BodyB>
              </S.SkillNumbersWrapper>
            </div>
            {skills.newlyCompleted ? (
              <T.BodyB mx="4" mb="4" color="gray">
                <Icon
                  icon="arrowUp"
                  width="16"
                  height="16"
                  color="teal"
                  m="0 .5rem 0 0"
                />
                Woo! You’ve learned{' '}
                <T.BodyB as="span" color="teal">
                  {skills.newlyCompleted}
                </T.BodyB>{' '}
                more skills since joining
              </T.BodyB>
            ) : null}
            <S.ColouredSection color="teal">
              {isMobile && !isSkillsOpen ? (
                <S.TellMeMoreButton onClick={() => setIsSkillsOpen(true)}>
                  Tell me more
                </S.TellMeMoreButton>
              ) : (
                <>
                  <T.BodyR color="white">
                    For your volunteering tasks there are {skills.totalSkills}{' '}
                    skills we recommend learning to become a digital pro, and
                    good news, based on your answers we reckon you already have{' '}
                    {skills.alreadyHasSkills} of the skills in the bag!
                  </T.BodyR>
                </>
              )}
            </S.ColouredSection>
          </S.Card>
        </Col>
        <Col w={[4, 6, 4]} mt="5">
          <CTA
            color="purple"
            icon={{
              color: 'lightPurple',
              icon: 'cup',
              strokeColor: 'white',
            }}
            path={id ? navRoutes.VOLUNTEER.SKILLS : navRoutes.VOLUNTEER.SIGNUP}
            pathLabel="Let's do this!"
            text={
              id
                ? 'Click the button below to take the next step'
                : 'Now it’s time to start skilling up and becoming a digital pro! Click get started to save your results and see recommended skills'
            }
            title="Become a champion"
          />
        </Col>
      </Row>
    </S.Wrapper>
  );
};

export default VolunteerDashboard;
