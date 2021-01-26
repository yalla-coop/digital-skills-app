import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { Row, Col } from '../../components/Grid';
import { CTA, Search, HelpOut } from '../../components/Card';
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
          Learning digital skills
        </T.H2>
      </Col>
      <Row mb="3">
        <Col w={[4, 6, 4]} mb={3}>
          <CTA
            title="What are digital skills and why are they useful? "
            text="Digital skills help you complete tasks using information technology – like computer software and the Internet – to find, create and share information. In an increasingly online world, they've never been more important. And they're easier to master than you might think. Before we can get started, let's figure out what you already know."
            pathLabel="Test my digital skill"
            path={R.GENERAL.ASSESSMENT}
          />
        </Col>
        <Col w={[4, 6, 4]} mb={3}>
          <Search btnText="Show my how" />
        </Col>
        <Col w={[4, 6, 4]} mb={3}>
          <HelpOut
            title="Interested in helping out?"
            text="Could you share some of the skills you've learned with others?"
            pathLabel="Find out how you can help"
            path={R.GENERAL.HELP_OTHERS}
            icon={{ icon: 'help', color: 'white', strokeColor: 'white' }}
          />
        </Col>
      </Row>
    </article>
  );
};

export default Landing;
