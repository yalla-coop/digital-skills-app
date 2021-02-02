import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useParams } from 'react-router-dom';
import * as S from './style';
import * as T from '../../components/Typography';
import CircleDiagram from '../../components/CircleDiagram';
import { Row, Col } from '../../components/Grid';
import Button from '../../components/Button';
import { ActivityCard } from '../../components/Card';

import { breakpoints } from '../../theme';

import { navRoutes } from '../../constants';

import { useAuth } from '../../context/auth';
import { Activities } from '../../api-calls';

import { decideColor } from '../../helpers';

const TrainingProgress = () => {
  const [completedActivities, setCompletedActivities] = useState(0);
  const [relatedActivities, setRelatedActivities] = useState([]);
  const [addedScore, setAddedScore] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [err, setErr] = useState('');

  const { skillId, activityId } = useParams();

  const isMobile = useMediaQuery({
    query: `(max-width: ${breakpoints.mobile})`,
  });

  const {
    user: { id, assessmentScore, improvementScore },
    getUserInfo,
  } = useAuth();

  useEffect(() => {
    const getActivityProgress = async () => {
      const { data, error } = await Activities.getUserActivityProgress({
        activityId,
      });
      const {
        data: activities,
        error: error2,
      } = await Activities.getRelatedActivitiesByUser({ skillId });

      if (error || error2) {
        setErr(error ? error.message : error2.message);
        setLoaded(true);
      } else {
        setCompletedActivities(data.completedActivities);
        setAddedScore(Math.round(data.addedScore));
        setRelatedActivities(activities);
        setLoaded(true);
      }
    };

    if (id) {
      getActivityProgress();
      getUserInfo();
    } else {
      setLoaded(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [skillId, activityId, id]);

  if (!loaded) return <div>loading</div>;

  return (
    <S.Wrapper>
      <S.CircleHeader color="white">
        <CircleDiagram
          totalScore={100}
          currentScore={improvementScore + assessmentScore}
          progressScore={addedScore}
        />
      </S.CircleHeader>
      {err && (
        <Row jc="center" mb="4">
          <Col w={[4, 8, 10]}>
            <T.BodyR color="red" style={{ textAlign: 'center' }}>
              {err}
            </T.BodyR>
          </Col>
        </Row>
      )}
      <Row jc="center" mb="3">
        <Col w={[4, 6, 4]} style={{ maxWidth: '420px' }}>
          <T.H4 color="black" mb="4" style={{ textAlign: 'center' }}>
            We're rolling!
          </T.H4>
          <T.BodyR
            color="black"
            mb="6"
            style={{ textAlign: isMobile ? 'left' : 'center' }}
          >
            You have completed {completedActivities}{' '}
            {completedActivities === 1 ? 'activity' : 'activities'} since
            starting your training, and your Digital Score has{' '}
            <b>increased to {Math.round(improvementScore + assessmentScore)}</b>
            . 🎉
          </T.BodyR>
          <T.H6
            color="black"
            mb="2"
            style={{ textAlign: isMobile ? 'left' : 'center' }}
          >
            What should I do next?
          </T.H6>
          <T.Body16
            color="black"
            mb="4"
            style={{ textAlign: isMobile ? 'left' : 'center' }}
          >
            Let’s keep it up while we’re on a roll. Here’s what we recommend
            working on now...
          </T.Body16>
        </Col>
      </Row>
      <S.Activities>
        {!isMobile && (
          <Row mt="7" mb="4">
            <Col w={[4, 8, 8]}>
              <T.H4 color="black">Related activities</T.H4>
            </Col>
          </Row>
        )}
        <Row mb="6" ai="stretch">
          {relatedActivities
            .slice(0, 3)
            .map(
              (
                {
                  activity,
                  title,
                  completionTime,
                  difficulty,
                  skillId: _skillId,
                },
                i
              ) => (
                <Col w={[4, 6, 4]} key={i}>
                  <ActivityCard
                    title={title}
                    to={navRoutes.GENERAL.SKILL_ACTIVITY.replace(
                      ':skillId',
                      Number(skillId) || _skillId
                    ).replace(':activityId', activity)}
                    completionTime={completionTime}
                    difficulty={difficulty}
                    color={decideColor(i)}
                  />
                </Col>
              )
            )}
        </Row>
        <Row>
          <Col w={[4, 6, 4]}>
            <Button to={navRoutes.VOLUNTEER.RECOMMENDED_SKILLS}>
              Return home
            </Button>
          </Col>
        </Row>
      </S.Activities>
    </S.Wrapper>
  );
};

export default TrainingProgress;
