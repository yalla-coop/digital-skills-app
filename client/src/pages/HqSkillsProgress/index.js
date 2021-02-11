import { useEffect, useState } from 'react';

import { Skills } from '../../api-calls';
import { BackLink, Grid, Button } from '../../components';
import { StatsCard } from '../../components/Card';
import * as T from '../../components/Typography';

const { Row, Col } = Grid;
const cardsData = [
  {
    key: 1,
    percentage: true,
    color: 'navy',
    txt: 'have completed a new skill since training',
  },
  {
    key: 2,
    percentage: true,
    color: 'purple',
    txt: 'of those signed up have completed an activity since training',
  },
  {
    key: 3,
    title: 'skills',
    color: 'teal',
    txt: 'have been completed by your volunteers since signing up',
  },
  {
    key: 4,
    title: 'activities',
    color: 'blue',
    txt: 'have been completed by your volunteers since signing up',
  },
];

function HqSkillsProgress() {
  const [stats, setStats] = useState({});
  const [loading, setLoading] = useState(false);
  // const [err, setErr] = useState('');

  useEffect(() => {
    let mounted = true;
    async function getHqSkillsProgress() {
      setLoading(true);
      const { data, error } = await Skills.getHqSkillsProgress();

      if (mounted) {
        setLoading(false);
        if (error) {
          // setErr(error.message);
          console.log(error);
        } else {
          setStats(data);
        }
      }
    }

    getHqSkillsProgress();

    return () => {
      mounted = false;
    };
  }, []);

  cardsData[0].statNum = stats.volunteersCompletedASkillPerc;
  cardsData[1].statNum = stats.volunteersCompletedAnActivityPerc;
  cardsData[2].statNum = stats.completedSkills;
  cardsData[3].statNum = stats.completedActivities;

  return (
    <div>
      <Row>
        <Col w={[4, 6, 12]}>
          <BackLink />
        </Col>
      </Row>
      <T.H3 mt="5" mtM="4" mb="6" mbM="4">
        Skills progress
      </T.H3>
      <Row inner>
        {cardsData.map(({ key, ..._props }) => (
          <Col key={key} w={[4, 6, 4]}>
            <StatsCard loading={loading} {..._props} />
          </Col>
        ))}
      </Row>
      <Row>
        <Col w={[4, 6, 4]}>
          <Button mt="4" variant="primary" bgColor="teal">
            Export activity data
          </Button>
        </Col>
      </Row>
    </div>
  );
}

export default HqSkillsProgress;
