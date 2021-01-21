import { CTA, HelpOut, DoingGreat, Newsletter, Search } from './index';
import { Row, Col } from '../Grid';

export default {
  title: 'Common components/Card',
};

// CTA
const CTAExample = (args) => (
  <Row>
    <Col w={[4, 6, 4]}>
      <CTA {...args} />
    </Col>
  </Row>
);

export const cta = CTAExample.bind({});
cta.args = {
  color: 'blue',
  title: 'What are digital skills and why are they useful?',
  text: `Digital skills help you complete tasks using information technology – like computer software and the Internet – to find, create and share information. In an increasingly online world, they've never been more important. And they're easier to master than you might think. Before we can get started, let's figure out what you already know.`,
  pathLabel: 'Text my digital skills',
  path: '/hello',
  align: 'left',
};

// CTA with Icon
const CTAExampleWithIcon = (args) => (
  <Row>
    <Col w={[4, 6, 4]}>
      <CTA {...args} />
    </Col>
  </Row>
);

export const ctaWithIcon = CTAExampleWithIcon.bind({});
ctaWithIcon.args = {
  color: 'purple',
  title: 'What are digital skills and why are they useful?',
  text: `Digital skills help you complete tasks using information technology – like computer software and the Internet – to find, create and share information. In an increasingly online world, they've never been more important. And they're easier to master than you might think. Before we can get started, let's figure out what you already know.`,
  pathLabel: 'Text my digital skills',
  path: '/hello',
  icon: { icon: 'cup', color: 'lightPurple', strokeColor: 'white' },
};

// HelpOut
const HelpOutExample = (args) => (
  <Row>
    <Col w={[4, 6, 4]}>
      <HelpOut {...args} />
    </Col>
  </Row>
);

export const helpOut = HelpOutExample.bind({});
helpOut.args = {
  color: 'purple',
  title: 'Interested in helping out?',
  text: `We're on a mission to turn technophobes into digital whizzes`,
  pathLabel: 'Find out how you can help',
  path: '/hello',
  icon: { icon: 'help', color: 'white', strokeColor: 'white' },
};

// DoingGreat
const DoingGreatExample = (args) => (
  <Row>
    <Col w={[4, 6, 4]}>
      <DoingGreat {...args} />
    </Col>
  </Row>
);

export const doingGreat = DoingGreatExample.bind({});
doingGreat.args = {
  color: 'teal',
  title: 'You’re doing great!',
  text: `We hope you’re enjoying the activities`,
  icon: { icon: 'help', color: 'white', strokeColor: 'white' },
};

// Newsletter
const NewsletterExample = (args) => (
  <Row>
    <Col w={[4, 6, 4]}>
      <Newsletter {...args} />
    </Col>
  </Row>
);

export const newsletter = NewsletterExample.bind({});
newsletter.args = {
  color: 'medPurple',
  title: 'You’re doing great!',
  text: `We hope you’re enjoying the activities`,
  icon: { icon: 'cup', color: 'lightPurple', strokeColor: 'white' },
};

// Search
const SearchExample = (args) => (
  <Row>
    <Col w={[4, 6, 4]}>
      <Search {...args} />
    </Col>
  </Row>
);

export const search = SearchExample.bind({});
search.args = {
  color: 'teal',
  btnText: 'Search',
};