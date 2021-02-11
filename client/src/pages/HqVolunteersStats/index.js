import { useEffect, useState } from 'react';

import { Volunteers } from './../../api-calls';
import { BackLink, Grid, Button } from '../../components';
import { StatsCard } from '../../components/Card';
import * as T from '../../components/Typography';

const { Row, Col } = Grid;
const cardsData = [
  {
    key: 1,
    title: 'volunteers',
    color: 'purple',
    txt: 'have completed assessments',
  },
  {
    key: 2,
    percentage: true,
    color: 'teal',
    txt: 'of your volunteers have used digital skills since training',
  },
  {
    key: 3,
    percentage: true,
    color: 'navy',
    txt: 'of your volunteers have completed a new skill since training',
  },
  {
    key: 4,
    percentage: true,
    color: 'blue',
    txt: 'of your volunteers feel more confident after completing an activity',
  },
];

function HqVolunteersStats() {
  const [stats, setStats] = useState({});
  const [loading, setLoading] = useState(false);
  // const [err, setErr] = useState('');

  useEffect(() => {
    let mounted = true;
    async function getVolunteersStats() {
      setLoading(true);
      const { data, error } = await Volunteers.getVolunteersStats();

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

    getVolunteersStats();

    return () => {
      mounted = false;
    };
  }, []);

  cardsData[0].statNum = stats.volunteersCompletedAssessment;
  cardsData[1].statNum = stats.volunteersUsedASkillPerc;
  cardsData[2].statNum = stats.volunteersCompletedASkillPerc;
  cardsData[3].statNum = stats.volunteersFeelConfidentPerc;

  return (
    <div>
      <Row>
        <Col w={[4, 6, 12]}>
          <BackLink />
        </Col>
      </Row>
      <T.H3 mt="5" mtM="4" mb="6" mbM="4">
        My volunteers
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
          <Button mt="4" variant="primary" bgColor="purple">
            Export volunteer data
          </Button>
        </Col>
      </Row>
    </div>
  );
}

export default HqVolunteersStats;
