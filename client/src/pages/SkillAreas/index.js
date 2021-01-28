import React, { useEffect, useState } from 'react';

import { SkillAreas } from './../../api-calls';

import BackLink from '../../components/BackLink';
import { Row, Col } from '../../components/Grid';
import * as T from '../../components/Typography';
import { SkillCard } from '../../components/Card';
import { HQ } from '../../constants/nav-routes';
import Button from '../../components/Button';

import * as S from './style';

const SkillAreasPage = () => {
  const [skillAreas, setSkillAreas] = useState([]);
  const [loading, setLoading] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [err, setErr] = useState('');

  useEffect(() => {
    let mounted = true;
    async function getHqSkillsProgress() {
      setLoading(true);
      const { data, error } = await SkillAreas.getHqSkillAreas();

      if (mounted) {
        setLoading(false);
        if (error) {
          setErr(error.message);
        } else {
          setSkillAreas(data);
        }
      }
    }

    getHqSkillsProgress();

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <>
      <Row>
        <Col w={[4, 6, 12]}>
          <BackLink mb="5" />
        </Col>
      </Row>
      <Row>
        <Col w={[4, 6, 12]}>
          <T.H3 mb="4">Skill areas</T.H3>
        </Col>
      </Row>
      <Row>
        <Col w={[4, 6, 12]}>
          <T.BodyR color="gray" mb={5}>
            Want to improve your skills in a particular area? Pick one below to
            find out how
          </T.BodyR>
        </Col>
      </Row>
      <Row ai="stretch">
        {loading
          ? 'Loading...'
          : skillAreas.map((item) => (
              <S.Col w={[4, 4, 4]} key={item.id}>
                <SkillCard
                  title={item.title}
                  skills={item.skills}
                  activities={item.activities}
                  to={HQ.INDIVIDUAL_SKILL_AREA.replace(':id', item.id)}
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

export default SkillAreasPage;
