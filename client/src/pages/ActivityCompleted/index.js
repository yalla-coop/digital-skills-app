import { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useParams } from 'react-router-dom';
import { Row, Col } from '../../components/Grid';
import * as T from '../../components/Typography';
import * as S from './style';
import { ActivityCard } from '../../components/Card';
import Button from '../../components/Button';
import { useAuth } from '../../context/auth';
import { Activities } from '../../api-calls';
import Icon from '../../components/Icon';

import { breakpoints } from '../../theme';

import { navRoutes } from '../../constants';

import { decideColor } from '../../helpers';

const ActivityCompleted = () => {
  const [progress, setProgress] = useState([]);
  const [relatedActivities, setRelatedActivities] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [err, setErr] = useState('');
  const { skillId, activityId } = useParams();
  const {
    user: { id },
  } = useAuth();

  const isMobile = useMediaQuery({
    query: `(max-width: ${breakpoints.mobile})`,
  });

  useEffect(() => {
    const getActivityProgress = async () => {
      const { data, error } = await Activities.getCompletedActivitiesById({
        skillId,
        activityId,
      });

      if (error) {
        setErr(error.message);
        setLoaded(true);
      } else {
        setProgress(data);
        setLoaded(true);
      }
    };

    const getRelatedActivities = async () => {
      const { data, error } = await Activities.getRelatedActivities({
        skillId,
        activityId,
      });

      if (error) {
        setErr(error.message);
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

  const activitiesLeft = ({ totalActivities, completedActivities }) =>
    Number(totalActivities) - Number(completedActivities);

  const decideHeader = () => {
    if (!id) return 'circleCrown';
    if (activitiesLeft(progress[0]) > 0) return 'circleStar';
    return 'cup';
  };

  if (!loaded) return <div>Loading</div>;

  return (
    <S.Wrapper>
      <S.Header>
        <Icon width={150} height={150} icon={decideHeader()} color="white" />
      </S.Header>
      {err && (
        <Row jc="center" mt="4" mb="4">
          <Col w={[4, 8, 10]}>
            <T.BodyR color="red" style={{ textAlign: 'center' }}>
              {err}
            </T.BodyR>
          </Col>
        </Row>
      )}
      <Row jc="center" mt="4" mb="4">
        <Col w={[4, 6, 4]} style={{ maxWidth: '420px' }}>
          <T.H4 color="black" style={{ textAlign: 'center' }} mb="4">
            {id ? 'Activity complete!' : 'Well done!'}
          </T.H4>
          {id ? (
            <>
              <T.BodyR color="black" mb="6">
                <b>Amazing job!</b> You're only{' '}
                <b>{progress[0] && activitiesLeft(progress[0])}</b> activities
                away from completing this skill!
              </T.BodyR>
            </>
          ) : (
            <T.BodyR color="black" mb={isMobile ? '3' : '6'}>
              This activity is an important part of mastering foundational
              digital skills to help you with all your real world tasks.
            </T.BodyR>
          )}
          {id && (
            <Button
              to={navRoutes.VOLUNTEER.PROGRESS.replace(
                ':skillId',
                skillId
              ).replace(':activityId', activityId)}
            >
              Finish
            </Button>
          )}
        </Col>
      </Row>
      {!id && (
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
            <Row mt={isMobile ? '6' : '7'} mb="4">
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
                      to={navRoutes.VOLUNTEER.INDIVIDUAL_ACTIVITY.replace(
                        ':id',
                        activity
                      )}
                      completionTime={completionTime}
                      difficulty={difficulty}
                      color={decideColor(i)}
                    />
                  </Col>
                ))}
            </Row>
            <Row>
              <Col w={[4, 6, 4]}>
                <Button to={navRoutes.GENERAL.SKILLS}>Return home</Button>
              </Col>
            </Row>
          </S.Activities>
        </>
      )}
    </S.Wrapper>
  );
};

export default ActivityCompleted;
