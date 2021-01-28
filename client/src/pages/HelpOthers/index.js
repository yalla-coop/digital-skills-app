import { Typography } from 'antd';
import { useMediaQuery } from 'react-responsive';

import { Row, Col } from '../../components/Grid';
import * as T from '../../components/Typography';
import * as S from './style';
import { HelpOut, Newsletter } from '../../components/Card';
import Icon from '../../components/Icon';

import theme from '../../theme';

const signUpLink = 'http://scoutstosendlink.com';
const links = [
  {
    title: 'How to signpost residents to digital skills support',
    url:
      'https://www.digitalunite.com/technology-guides/hobbies-interests/activities-interests/how-signpost-residents-digital-skills',
  },
  {
    title: 'Being a Digital Champion',
    url:
      'https://www.digitalunite.com/news-reviews/delivering-digital-champion-success',
  },
];

const HelpOthers = () => {
  const isMobile = useMediaQuery({
    query: `(max-width: ${theme.breakpoints.mobile})`,
  });

  return (
    <>
      <Row mb={isMobile ? '3' : '6'}>
        <Col w={[4, 12, 10]}>
          <T.H2>Support others</T.H2>
        </Col>
      </Row>
      <Row>
        <Col w={[4, 12, 4]} mb="3">
          <HelpOut
            text={`Could you share some of the skills you've learned with others? Learn how you can help people in your community`}
            icon={{ icon: 'help', color: 'white', strokeColor: 'white' }}
          />
        </Col>
        <Col w={[4, 12, 4]} mb="3">
          <Newsletter
            title={`Register your interest`}
            text={`Interested helping others in the community? Register here to receive resources and tips, and more as we build this project further.`}
            hideInput
            btnText="Register"
            extLink={signUpLink}
          />
        </Col>
        <Col w={[4, 12, 8]} mt={isMobile ? '3' : '6'}>
          <T.H5 color="black">Useful links</T.H5>
          {links.map(({ title, url }) => (
            <S.Result href={url} target="_blank">
              <S.ResultContent>
                <T.Link16
                  title={title}
                  style={{
                    display: 'block',
                    maxWidth: '95%',
                  }}
                  href={url}
                  target="_blank"
                >
                  <Typography.Text
                    style={{ display: 'block', width: '100%' }}
                    ellipsis={{ tooltip: title }}
                  >
                    {title}
                  </Typography.Text>
                </T.Link16>
                <div style={{ width: '15px' }}>
                  <Icon icon="rightRow" color="black" width="15" height="15" />
                </div>
              </S.ResultContent>
            </S.Result>
          ))}
        </Col>
      </Row>
    </>
  );
};

export default HelpOthers;
