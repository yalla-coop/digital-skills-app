import { useEffect, useState } from 'react';
import { Skeleton } from 'antd';
import { useParams } from 'react-router-dom';
import { Collapse } from 'antd';

import { BackLink, Grid } from '../../components';
import Icon from '../../components/Icon';
import * as T from '../../components/Typography';
import { DoingGreat, CTA, ActivityCard } from '../../components/Card';
import * as S from './style';
import { Skills, Activities } from '../../api-calls';
import { navRoutes } from '../../constants';
import { useAuth } from '../../context/auth';
import { decideColor } from './../../helpers';

const { Row, Col } = Grid;

function VolunteerIndividualSkill() {
  const {
    user: { assessmentScore },
  } = useAuth();
  const { id: skillId } = useParams();
  const [skill, setSkill] = useState({
    title: '',
    description: '',
    skillAreas: [],
    tasks: [],
    loading: true,
  });

  const [activities, setActivities] = useState({ data: [], loading: true });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const getData = async () => {
      const { data, error } = await Skills.getSkillById({ id: skillId });

      if (!error) {
        setSkill({ ...data, loading: false });
      }
    };

    const getActivities = async () => {
      const { data, error } = await Activities.getActivitiesBySkillId({
        id: skillId,
      });

      if (!error) {
        const completedActivities = data.filter(
          ({ status }) => status === 'completed'
        );
        setActivities({
          data,
          completedActivities: completedActivities.length,
          loading: false,
        });
      }
    };

    getData();
    getActivities();
  }, [skillId]);

  return (
    <S.Wrapper>
      <BackLink />
      <Row>
        <Col w={[4, 8, 8]}>
          <T.H3 mb="3" mt="5">
            {skill.loading ? <Skeleton active /> : skill.title}
          </T.H3>

          {skill.loading ? (
            <div style={{ display: 'flex' }}>
              <Skeleton.Button active shape={'round'} />
              <Skeleton.Button active shape={'round'} />
              <Skeleton.Button active shape={'round'} />
            </div>
          ) : (
            skill.skillAreas?.map((skillArea) => (
              <S.SkillAreasTags key={skillArea}>{skillArea}</S.SkillAreasTags>
            ))
          )}
        </Col>
      </Row>
      <Row ai="stretch">
        {assessmentScore !== null && (
          <Col w={[4, 6, 4]}>
            <S.InfoCard>
              <Icon
                icon="flash"
                strokeColor="blue"
                color="liteBlue"
                width="40"
                height="40"
              />
              <T.H3 color="blue" mx={2}>
                {activities.completedActivities}
              </T.H3>
              <T.BodyB color="gray">
                out of {activities.data.length} activities completed
              </T.BodyB>
            </S.InfoCard>
          </Col>
        )}
        <Col w={[4, 6, 4]}>
          <S.InfoCard>
            <Collapse
              defaultActiveKey={[]}
              className="custom-collapse"
              expandIconPosition="right"
              ghost
              expandIcon={({ isActive }) => (
                <Icon
                  icon="arrowDown"
                  width="24"
                  height="24"
                  rotate={isActive ? -90 : 0}
                />
              )}
            >
              <Collapse.Panel
                header="How can this help me in the real world?"
                key="1"
                className="custom-collapse-header"
              >
                <T.BodyR color="gray">{skill.description || 'N/A'}</T.BodyR>
                {skill.tasks?.length ? (
                  <T.Body16B color="teal" mt="4">
                    Volunteering tasks this can help with
                  </T.Body16B>
                ) : null}
                {skill.tasks?.map((task) => (
                  <T.Body16B color="teal" mt="4" key={task}>
                    {task}
                  </T.Body16B>
                ))}
              </Collapse.Panel>
            </Collapse>
          </S.InfoCard>
        </Col>
      </Row>
      <Row>
        <Col w={[4, 12, 12]}>
          <T.H3 mt="6" mb="4">
            Activities
          </T.H3>
          {!!activities?.data?.length && (
            <T.BodyR color="gray" mb="5">
              Complete the activities below to master this skill!
            </T.BodyR>
          )}
        </Col>
      </Row>
      <Row>
        {activities.loading && (
          <>
            <Col w={[4, 6, 4]}>
              <Skeleton.Input style={{ width: '100%' }} active size={'large'} />
            </Col>
            <Col w={[4, 6, 4]}>
              <Skeleton.Input style={{ width: '100%' }} active size={'large'} />
            </Col>
            <Col w={[4, 6, 4]}>
              <Skeleton.Input style={{ width: '100%' }} active size={'large'} />
            </Col>
          </>
        )}
        {activities?.data?.length ? (
          activities.data
            .filter(({ status }) => status !== 'completed')
            .map(({ id, title, completionTime, difficulty }, i) => (
              <Col w={[4, 6, 4]} key={`not completed ${id}`}>
                <ActivityCard
                  title={title}
                  to={navRoutes.GENERAL.SKILL_ACTIVITY.replace(
                    ':skillId',
                    skillId
                  ).replace(':activityId', id)}
                  completionTime={completionTime}
                  difficulty={difficulty}
                  color={decideColor(i)}
                />
              </Col>
            ))
        ) : (
          <Col w={[4, 12, 12]}>
            <T.Body16 color="gray" ml="2">
              No Activities
            </T.Body16>
          </Col>
        )}
      </Row>
      <Row mt="5">
        {activities.data
          .filter(({ status }) => status === 'completed')
          .map(({ id, title, completionTime }, i) => (
            <Col w={[4, 6, 4]} key={`completed ${id}`}>
              <ActivityCard
                title={title}
                to={navRoutes.GENERAL.SKILL_ACTIVITY.replace(
                  ':skillId',
                  skillId
                ).replace(':activityId', id)}
                completionTime={completionTime}
                isCompleted
                color={decideColor(i)}
              />
            </Col>
          ))}
      </Row>
      <Row>
        <Col w={[4, 6, 4]} mt="7" mb="7">
          {assessmentScore === null ? (
            <CTA
              title="Improve your digital skills"
              text={[
                'Do you have to increasingly use software and online tools to carry out your volunteering tasks?',
                'Take our free digital test to find out where you need help, with lessons tailored just for you to gain these skills and become a pro in no time!',
              ]}
              path={navRoutes.GENERAL.ASSESSMENT}
              pathLabel={'Get started'}
            />
          ) : (
            <DoingGreat
              color="teal"
              title="You’re doing great!"
              text={`We hope you’re enjoying the activities`}
              icon={{
                icon: 'help',
                color: 'white',
                strokeColor: 'white',
                height: '122',
              }}
            />
          )}
        </Col>
      </Row>
    </S.Wrapper>
  );
}

export default VolunteerIndividualSkill;
