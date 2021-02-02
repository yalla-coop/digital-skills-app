import { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useParams, useHistory, Switch } from 'react-router-dom';
import { Row, Col } from '../../components/Grid';
import * as T from '../../components/Typography';
import * as S from './style';
import { ActivityCard } from '../../components/Card';
import Button from '../../components/Button';
import { useAuth } from '../../context/auth';
import { Activities } from '../../api-calls';
import Icon from '../../components/Icon';
import validate from '../../validation/schemas/activity-feedback';

import FeedbackQs from './FeedbackQs';

import { breakpoints } from '../../theme';

import { navRoutes } from '../../constants';

import { decideColor } from '../../helpers';

const initFeedback = {
  completionTime: null,
  difficulty: 1,
  confidenceScore: 2,
  currStep: 1,
};

const ActivityCompleted = () => {
  const [progress, setProgress] = useState([{}]);
  const [relatedActivities, setRelatedActivities] = useState([]);
  const [feedback, setFeedback] = useState(initFeedback);
  const [anonFeedbackSubmitted, setAnonFeedbackSubmitted] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [err, setErr] = useState({});
  const { skillId, activityId } = useParams();
  const {
    user: { id },
  } = useAuth();
  const history = useHistory();
  const { step } = useParams();

  const isMobile = useMediaQuery({
    query: `(max-width: ${breakpoints.mobile})`,
  });

  const handleFeedback = (e) => {
    const { target, type } = e;
    if (type === 'slider')
      return setFeedback({ ...feedback, [e.name]: e.value });
    return setFeedback({
      ...feedback,
      [target.name]: Number(target.value),
    });
  };

  useEffect(() => {
    const getActivityProgress = async () => {
      const { data, error } = await Activities.getCompletedActivitiesById({
        skillId,
        activityId,
      });

      if (error) {
        setErr({ server: error.message });
        setLoaded(true);
      } else if (data.length) {
        setProgress(data);
      }
      setLoaded(true);
    };

    const getRelatedActivities = async () => {
      const { data, error } = await Activities.getRelatedActivities({
        skillId,
        activityId,
      });

      if (error) {
        setErr({ server: error.message });
        setLoaded(true);
      } else {
        setRelatedActivities(data);
        setLoaded(true);
      }
    };

    if (id) {
      getActivityProgress();
    } else {
      getRelatedActivities();
    }
  }, [skillId, activityId, id]);

  const activitiesLeft =
    progress[0] &&
    Number(progress[0]?.totalActivities) -
      Number(progress[0]?.completedActivities);

  const decideHeader = () => {
    if (!id)
      return <Icon width={150} height={150} icon="circleCrown" color="white" />;
    if (activitiesLeft > 0)
      return <Icon width={150} height={150} icon="circleStar" color="white" />;
    return (
      <Icon
        width={150}
        height={150}
        icon="trophyStar"
        strokeColor="white"
        color="transparent"
      />
    );
  };

  const handleUrl = () =>
    navRoutes.GENERAL.ACTIVITY_COMPLETED.replace(':skillId', skillId).replace(
      ':activityId',
      activityId
    );

  const decidePath = (num) => handleUrl().replace(':step', num);

  const individValidation = () => {
    const { completionTime, difficulty, confidenceScore } = feedback;
    switch (step) {
      case '1':
        if (!completionTime)
          return { completionTime: 'Please select an option' };
        break;
      case '2':
        if (!difficulty || difficulty < 1 || difficulty > 4)
          return { difficulty: 'Please select a valid option' };
        break;
      case '3':
        if (!confidenceScore || confidenceScore < 1 || confidenceScore > 3)
          return { difficulty: 'Please select a valid option' };
        break;
      default:
        return setErr({});
    }
  };

  const nextQ = () => {
    const error = individValidation();
    if (error) return setErr(error);
    if (step === '3') {
      return handleSubmit();
    }
    history.push(handleUrl().replace(':step', Number(step) + 1));
  };

  const handleSubmit = () => {
    setSubmitting(true);
    const isValid = validateFeedback();
    if (isValid) {
      submitFeedback();
    }
  };

  const submitFeedback = async () => {
    const { error } = await Activities.updateActivityWithFeedback({
      activityId,
      feedback,
    });

    if (error) {
      setErr({ httpError: error.message });
    } else {
      if (id) {
        return history.push(
          navRoutes.VOLUNTEER.PROGRESS.replace(':skillId', skillId).replace(
            ':activityId',
            activityId
          )
        );
      }
      setAnonFeedbackSubmitted(true);
      history.push(handleUrl().replace(':step', 'thank-you'));
    }
    setSubmitting(false);
  };

  const validateFeedback = () => {
    const { completionTime, difficulty, confidenceScore } = feedback;
    try {
      validate({
        completionTime,
        difficulty,
        confidenceScore,
      });
      setErr({});
      return true;
    } catch (error) {
      if (error.name === 'ValidationError') {
        setErr({ validationErrs: error.inner });
      }
      setSubmitting(false);
      return false;
    }
  };

  useEffect(() => {
    setFeedback({ ...feedback, currStep: step });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [step]);

  const { validationErrs, httpError } = err;

  const decideTitle = () => {
    if (anonFeedbackSubmitted) return 'Thank you!';
    if (!id) return 'Activity complete!';
    if (id && activitiesLeft) return 'Activity complete!';
    return "You've learned a new skill!";
  };

  if (!loaded) return <div>Loading</div>;

  return (
    <S.Wrapper>
      <S.Header>{decideHeader()}</S.Header>
      {err && err.server && err.server !== 'Unauthorized' && (
        <Row jc="center" mt="4" mb="4">
          <Col w={[4, 8, 10]}>
            <T.BodyR color="red" style={{ textAlign: 'center' }}>
              {err.server}
            </T.BodyR>
          </Col>
        </Row>
      )}
      <Row jc="center" mt="4" mb="4">
        <Col w={[4, 6, 4]} style={{ maxWidth: '420px' }}>
          <T.H4 color="gray" style={{ textAlign: 'center' }} mb="5">
            {decideTitle()}
          </T.H4>
          {id && !activitiesLeft && (
            <S.SkillWrapper mb="6">
              <Icon icon="flash" width={64} height={64} color="white" />
              <S.SkillTitle color="liteGray">{progress[0]?.title}</S.SkillTitle>
            </S.SkillWrapper>
          )}
          {id && (
            <>
              <T.BodyR color="black" mb="6">
                <b>Amazing job!</b>{' '}
                {activitiesLeft ? (
                  <>
                    You're only <b>{activitiesLeft}</b> activities away from
                    completing this skill!
                  </>
                ) : (
                  <>
                    You have completed all the activities to acquire this skill.
                    Feel your digital skills levelling up!
                  </>
                )}
              </T.BodyR>
            </>
          )}
          {!id && !anonFeedbackSubmitted && (
            <T.BodyR color="black" mb={isMobile ? '3' : '6'}>
              How did you find it? Your views can help us improve our resources,
              and empower even more people to become digital pros.
            </T.BodyR>
          )}
          {!id && anonFeedbackSubmitted && (
            <T.BodyR color="black" mb={isMobile ? '3' : '6'}>
              This activity is an important part of mastering foundational
              digital skills to help you with all your real world tasks.
            </T.BodyR>
          )}
          {!anonFeedbackSubmitted && (
            <>
              <Switch>
                <FeedbackQs
                  exact
                  path={decidePath(1)}
                  handleFeedback={handleFeedback}
                  feedback={feedback}
                  step={step}
                  error={err.completionTime}
                />
                <FeedbackQs
                  exact
                  path={decidePath(2)}
                  handleFeedback={handleFeedback}
                  feedback={feedback}
                  step={step}
                  error={err.difficulty}
                />
                <FeedbackQs
                  exact
                  path={decidePath(3)}
                  handleFeedback={handleFeedback}
                  feedback={feedback}
                  step={step}
                  error={err.confidenceScore}
                />
              </Switch>
              <Button handleClick={nextQ} loading={submitting}>
                {step < 3 ? 'Next' : 'Finish'}
              </Button>
              {validationErrs && (
                <T.Body16 mt="5" color="red">
                  You must answer all these questions. Please go back in your
                  browser and check
                </T.Body16>
              )}
              {httpError && (
                <T.Body16 mt="5" color="red">
                  {httpError}
                </T.Body16>
              )}
            </>
          )}
        </Col>
      </Row>
      {anonFeedbackSubmitted && (
        <>
          <S.Banner>
            <Row jc="center">
              <Col w={[4, 6, 4]} style={{ maxWidth: '420px' }}>
                <T.H6 color="white" mb="4" style={{ textAlign: 'center' }}>
                  Want to continue improving your skills?
                </T.H6>
                <Button to={navRoutes.GENERAL.ASSESSMENT}>Get started</Button>
              </Col>
            </Row>
          </S.Banner>
          <S.Activities>
            <Row mt="6" mtM="5" mb="4">
              <Col w={[4, 8, 8]}>
                <T.H4 color="black">Related activities</T.H4>
              </Col>
            </Row>
            <Row mb="6" ai="stretch">
              {relatedActivities
                .slice(0, 3)
                .map(({ activity, title, completionTime, difficulty }, i) => (
                  <Col w={[4, 6, 4]} key={i}>
                    <ActivityCard
                      title={title}
                      to={navRoutes.GENERAL.SKILL_ACTIVITY.replace(
                        ':skillId',
                        skillId
                      ).replace(':activityId', activity)}
                      completionTime={completionTime}
                      difficulty={difficulty}
                      color={decideColor(i)}
                    />
                  </Col>
                ))}
            </Row>
            <Row>
              <Col w={[4, 6, 4]}>
                <Button to={navRoutes.GENERAL.SKILLS} loading={submitting}>
                  Return home
                </Button>
              </Col>
            </Row>
          </S.Activities>
        </>
      )}
    </S.Wrapper>
  );
};

export default ActivityCompleted;
