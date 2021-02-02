import { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import { Activities } from '../../api-calls';
import { navRoutes as r } from '../../constants';
import {
  BackLink,
  Grid,
  Button,
  ActivityHeader,
  Loading,
} from '../../components';
import Card from './Card';
import * as T from '../../components/Typography';
import * as S from './style';
import { useAuth } from '../../context/auth';

const { Row, Col } = Grid;

function VolunteerIndividualActivity() {
  const [activity, setActivity] = useState({});
  const [isCompleted, setIsCompleted] = useState(false);
  const [loading, setLoading] = useState(false);
  // const [err, setErr] = useState('');
  const {
    user: { assessmentScore },
  } = useAuth();
  const history = useHistory();
  const params = useParams();

  const { id, activityId: _acId, skillId } = params;
  const activityId = _acId || id;

  useEffect(() => {
    let mounted = true;
    async function getActivityById() {
      setLoading(true);
      const { data, error } = await Activities.getActivityById({
        id: activityId,
      });

      if (mounted) {
        setLoading(false);
        if (error) {
          // setErr(error.message);
          console.log(error);
        } else {
          setActivity(data);
        }
      }
    }

    async function getActivityProgress() {
      const { data, error } = await Activities.getUserActivityProgress({
        activityId,
      });

      if (error) {
        // setErr(error.message);
        console.log(error);
      } else {
        setIsCompleted(!!data.addedScore);
      }
    }

    getActivityById();
    if (assessmentScore) {
      getActivityProgress();
    }

    return () => {
      mounted = false;
    };
  }, [activityId, assessmentScore]);

  const activityCompleteUrl = r.GENERAL.ACTIVITY_COMPLETED.replace(
    ':skillId',
    skillId || 0
  ).replace(':activityId', activityId);

  const handleCompleteActivity = async () => {
    let error;
    if (assessmentScore) {
      const res = await Activities.completeActivity({ activityId });
      error = res.error;
    }

    history.push(activityCompleteUrl);
    // setErr(error.message);
    console.log(error);
  };

  return (
    <>
      <S.Wrapper pt="8">
        <BackLink />
      </S.Wrapper>
      {loading ? (
        <Loading />
      ) : (
        <>
          <ActivityHeader
            title={activity.title}
            createdBy={{
              name: activity.resourceCreatedBy,
              url: activity.resourceLink,
            }}
            mobileBgColor={'blue'}
            time={activity.completionTime}
            difficultyLevel={activity.difficulty}
          />
          <S.Wrapper pt="5" minHeight="529px">
            <Row inner>
              <Col w={[4, 6, 4]}>
                <Card
                  titleNum="1"
                  title="Complete the tutorial"
                  desc={activity.description}
                  note="Please note, clicking the button will open in a new tab"
                  linkTxt="Begin"
                  exLinkUrl={activity.resourceLink}
                  linkBgColor="blue"
                />
              </Col>
              <Col w={[4, 6, 4]}>
                <Card
                  titleNum="2"
                  title="Mark this activity as complete"
                  desc="Provide your feedback to update your Digital Score, track your progress and help your fellow volunteers!"
                  note="Please note, clicking the button will open in a new tab"
                  linkTxt={
                    assessmentScore ? 'Complete activity' : 'Provide feedback'
                  }
                  isCompleted={isCompleted}
                  linkBgColor="teal"
                  handleCompleteActivity={handleCompleteActivity}
                />
              </Col>
              {!assessmentScore && (
                <Col w={[4, 6, 4]}>
                  <S.GetStarted>
                    <T.H5 color="white" mb="3">
                      Improve your digital skills
                    </T.H5>
                    <T.BodyR color="white" mb="3">
                      Do you have to increasingly use software and online tools
                      to carry out your volunteering tasks?
                    </T.BodyR>
                    <T.BodyR color="white" mb="4">
                      Take our free digital test to find out where you need
                      help, with lessons tailored just for you to gain these
                      skills and become a pro in no time!
                    </T.BodyR>
                    <Button to={r.GENERAL.ASSESSMENT}>Get started</Button>
                  </S.GetStarted>
                </Col>
              )}
            </Row>
          </S.Wrapper>
        </>
      )}
    </>
  );
}

export default VolunteerIndividualActivity;
