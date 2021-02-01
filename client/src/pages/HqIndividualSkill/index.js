import { useEffect, useState } from 'react';
import { Typography, Skeleton } from 'antd';
import { useParams } from 'react-router-dom';

import { BackLink, Grid, Button } from '../../components';
import Icon from '../../components/Icon';
import * as T from '../../components/Typography';
import * as S from './style';
import { Skills, Activities } from './../../api-calls';
import { navRoutes } from './../../constants';
import { SkillModal } from './../../components';

const { Row, Col } = Grid;

function HqIndividualSkill() {
  const { id } = useParams();
  const [skill, setSkill] = useState({
    title: '',
    description: '',
    loading: true,
  });
  const [activities, setActivities] = useState({ data: [], loading: true });

  useEffect(() => {
    const getData = async () => {
      const { data, error } = await Skills.getSkillById({ id });
      if (!error) {
        setSkill({ ...data, loading: false });
      }
    };

    const getActivities = async () => {
      const { data, error } = await Activities.getActivitiesBySkillId({ id });

      if (!error) {
        setActivities({ data, loading: false });
      }
    };

    getData();
    getActivities();
  }, [id]);

  return (
    <S.Wrapper>
      <BackLink />
      <Row mt="5">
        <Col w={[4, 8, 8]}>
          <T.H3>{skill.loading ? <Skeleton active /> : skill.title}</T.H3>
          <T.BodyR color="gray" mt="4" mb="4">
            {skill.loading ? <Skeleton active /> : skill.description}
          </T.BodyR>
        </Col>
        <Col w={[4, 4, 4]}>
          {!skill.loading && (
            <SkillModal
              id={skill.id}
              title={skill.title}
              description={skill.description}
              tasks={skill.tasks}
              onUpdate={setSkill}
            />
          )}
        </Col>
      </Row>
      <Row mt="5">
        <Col w={[4, 12, 12]}>
          <T.H4 mb="2">Activities</T.H4>
        </Col>
        {!activities.loading ? (
          <>
            {activities?.data?.length ? (
              activities.data.map(({ title, id }) => (
                <Col w={[4, 6, 4]} mt="3">
                  <S.ActivityCard
                    to={navRoutes.HQ.EDIT_ACTIVITY.replace(':id', id)}
                  >
                    <Typography.Paragraph
                      style={{ maxWidth: '80%', fontSize: '18px' }}
                      ellipsis={{ tooltip: title, rows: 3 }}
                    >
                      {title}
                    </Typography.Paragraph>

                    <Icon icon="edit" width="27" />
                  </S.ActivityCard>
                </Col>
              ))
            ) : (
              <Col w={[4, 12, 12]}>
                <T.Body16 color="gray" ml="2">
                  No Activities
                </T.Body16>
              </Col>
            )}
          </>
        ) : (
          [1, 2, 3].map(() => (
            <Col w={[4, 4, 4]}>
              <Skeleton.Input active size={'default'} />
            </Col>
          ))
        )}
      </Row>
      <Row>
        <Col w={[4, 6, 4]}>
          <Button
            variant="primary"
            color="blue"
            mt="9"
            to={navRoutes.HQ.ADD_ACTIVITY}
          >
            Add activity to a skill
          </Button>
        </Col>
      </Row>
    </S.Wrapper>
  );
}

export default HqIndividualSkill;
