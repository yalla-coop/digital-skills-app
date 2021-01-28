import { useEffect, useState } from 'react';

import { useAuth } from '../../context/auth';
import { Users } from '../../api-calls';
import { Grid, Button } from '../../components';
import { navRoutes } from '../../constants';
import * as T from '../../components/Typography';

import StatsMenuCard from './StatsMenuCard';
import Card from './Card';

const { Row, Col } = Grid;

function HqDashboard() {
  const [stats, setStats] = useState({});
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState('');
  const { user } = useAuth();

  useEffect(() => {
    let mounted = true;
    async function getHqDashboard() {
      setLoading(true);
      const { data, error } = await Users.getUserDashboard();

      if (mounted) {
        setLoading(false);
        if (error) {
          setErr(error.message);
        } else {
          setStats(data);
        }
      }
    }

    getHqDashboard();

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <div>
      <Row>
        <Col w={[4, 12, 12]}>
          <T.H3 mb="6" mbM="3">
            Welcome back {user.fullName.split(' ')[0]}
          </T.H3>
        </Col>
      </Row>
      <Row>
        <Col w={[4, 6, 4]}>
          <StatsMenuCard
            title="volunteers"
            txt="have completed assessments"
            linkTxt="See statistics"
            linkUrl={navRoutes.HQ.VOLUNTEERS}
            loading={loading}
            statNum={stats.volunteersCompletedAssessment}
            color="purple"
          />
        </Col>
      </Row>
      <Row>
        <Col w={[4, 12, 12]}>
          <T.H5 mt="1" mtM="4" mb="4" mbM="3">
            Skills
          </T.H5>
        </Col>
      </Row>
      <Row>
        <Col w={[4, 6, 4]}>
          <StatsMenuCard
            title="skills"
            txt="have been completed"
            linkTxt="See skills progress"
            linkUrl={navRoutes.HQ.SKILLS_PROGRESS || '#'}
            loading={loading}
            statNum={stats.completedSkills}
            color="teal"
          />
        </Col>

        {/* bonus feature */}
        {/* <Col w={[4, 6, 4]}>
          <StatsMenuCard
            title="skills/resources"
            txt="edited or added this week"
            linkTxt="See updates"
            linkUrl={navRoutes.HQ.RESOURCE_UPDATES || '#'}
            loading={loading}
            statNum={stats.a}
            color="blue"
          />
        </Col> */}
      </Row>
      <Row>
        <Col w={[4, 6, 4]}>
          <Button
            to={navRoutes.HQ.MANAGE_SKILLS}
            mt="3"
            mtM="4"
            mb="8"
            mbM="6"
            variant="outlined"
          >
            Manage skills
          </Button>
        </Col>
      </Row>
      <Row>
        <Col w={[4, 6, 4]}>
          <Card
            title="Activities"
            txt="Each activity a volunteer completes brings them one step closer to mastering a new skill"
            linkTxt="Add activity"
            linkUrl={navRoutes.HQ.ADD_ACTIVITY || '#'}
          />
        </Col>
        <Col w={[4, 6, 4]}>
          <Card
            title="Customise Platform"
            txt="You can change how this platform looks to make it easier for your volunteers to use "
            linkTxt="Edit design"
            linkUrl={navRoutes.HQ.EDIT_DESIGN || '#'}
          />
        </Col>
      </Row>
    </div>
  );
}

export default HqDashboard;
