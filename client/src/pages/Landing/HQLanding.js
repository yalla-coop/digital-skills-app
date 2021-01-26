import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { Row, Col } from '../../components/Grid';
import { CTA } from '../../components/Card';
import * as T from '../../components/Typography';
import * as R from '../../constants/nav-routes';
import { breakpoints } from '../../theme';

const Landing = () => {
  const isMobile = useMediaQuery({
    query: `(max-width: ${breakpoints.mobile})`,
  });

  return (
    <article>
      <Col w={[4, 6, 8]}>
        <T.H2 m="0" mb={isMobile ? '5' : '6'}>
          Manage volunteer platform
        </T.H2>
      </Col>
      <Row mb="3">
        <Col w={[4, 6, 4]} mb={3}>
          <CTA
            title="Manage volunteers"
            text="With this tool, you’ll be able to see how many volunteers have completed their assessment and monitor how they’re progressing"
            pathLabel="Get started"
            path={R.HQ.MANAGE_VOLUNTEERS}
            color="purple"
          />
        </Col>
        <Col w={[4, 6, 4]} mb={3}>
          <CTA
            title="Manage skills and activities"
            text="With this tool, you'll be able to see which skills your volunteers are learning, and add activities for them to complete"
            pathLabel="Get started"
            path={R.HQ.MANAGE_SKILLS}
            color="teal"
          />
        </Col>
      </Row>
    </article>
  );
};

export default Landing;
