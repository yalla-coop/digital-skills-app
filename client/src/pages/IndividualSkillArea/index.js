import React, { useEffect, useState } from 'react';

import { SkillAreas } from '../../api-calls';

import BackLink from '../../components/BackLink';
import { Row, Col } from '../../components/Grid';
import * as T from '../../components/Typography';
import { SkillCard } from '../../components/Card';
import { HQ } from '../../constants/nav-routes';
import Button from '../../components/Button';

import * as S from './style';
import { useParams } from 'react-router-dom';

const IndividualSkillArea = () => {
  const [skillArea, setSkillArea] = useState({ skills: [] });
  const [loading, setLoading] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [err, setErr] = useState('');
  const { id } = useParams();
  useEffect(() => {
    let mounted = true;
    async function getHqSkillsProgress() {
      setLoading(true);
      const { data, error } = await SkillAreas.getHqSkillAreaById({ id });

      if (mounted) {
        setLoading(false);
        if (error) {
          setErr(error.message);
        } else {
          setSkillArea(data);
        }
      }
    }

    getHqSkillsProgress();

    return () => {
      mounted = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(skillArea);
  return (
    <>
      <Row>
        <Col w={[4, 12, 12]}>
          <BackLink mb="5" />
        </Col>
      </Row>
      <Row>
        <Col w={[4, 12, 12]}>
          <T.H3 mb="5">{skillArea.title}</T.H3>
        </Col>
      </Row>
      <Row>
        <Col w={[4, 12, 12]}>
          <T.H4 mb="3">Skills</T.H4>
        </Col>
      </Row>
      <Row>
        <Col w={[4, 12, 12]}>
          <T.BodyR color="gray" mb="5">
            Pick a skill below to edit it and add activities.
          </T.BodyR>
        </Col>
      </Row>
      <Row>
        {loading
          ? 'Loading...'
          : skillArea.skills.map((item) => (
              <S.Col w={[4, 6, 4]} key={item.id}>
                <SkillCard
                  title={item.title}
                  activities={item.activities}
                  to={HQ.INDIVIDUAL_SKILL.replace(':id', item.id)}
                />
              </S.Col>
            ))}
      </Row>
      <Row>
        <Col w={[4, 6, 4]}>
          <Button to={HQ.ADD_NEW_ACTIVITY} mt="5">
            Add activity to a skill
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default IndividualSkillArea;
