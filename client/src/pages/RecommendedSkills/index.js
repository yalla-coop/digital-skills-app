import { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';

import { Row, Col } from '../../components/Grid';
import BackLink from '../../components/BackLink';
import * as T from '../../components/Typography';
import { RecommendSkill, CTA } from '../../components/Card';
import theme from '../../theme';
import * as S from './style';
import { decideColor } from '../../helpers';
import { Skills } from '../../api-calls';
import { navRoutes } from '../../constants';
import { useAppStore } from '../../context/appStore';

const RecommendedSkills = () => {
  const [skills, setSkills] = useState([]);
  const {
    exploreMore,
    setExploreMore,
    loadedSkills,
    setLoadedSkills,
  } = useAppStore();

  const isMobile = useMediaQuery({
    query: `(max-width: ${theme.breakpoints.mobile})`,
  });

  useEffect(() => {
    const getSkills = async () => {
      const { data, error } = await Skills.getSkills({ type: 'recommended' });
      if (!error) {
        // CURRENTLY SORT ALSO BY TOTAL ACTIVITIES TO PUT ONES WITH 0 AT BOTTOM
        data.sort(
          (a, b) =>
            b.activities.completedActivities -
              a.activities.completedActivities ||
            b.activities.totalActivities - a.activities.totalActivities
        );
        setSkills(data);
      }
    };

    getSkills();
  }, []);
  const handleLoadMore = () =>
    setLoadedSkills((_loadedSkills) => _loadedSkills + 3);

  return (
    <S.Container>
      <Row>
        <Col w={[4, 6, 12]}>
          <BackLink customLink={navRoutes.VOLUNTEER.DASHBOARD} />
        </Col>
      </Row>
      <Row>
        <Col w={[4, 6, 12]}>
          {isMobile ? (
            <T.H4 mt="5">Start here</T.H4>
          ) : (
            <T.H3 mt="5">Start here</T.H3>
          )}
        </Col>
      </Row>
      <Row>
        <Col w={[4, 6, 12]}>
          <T.BodyR mt="4" mtM="3" mb="5" mbM="4">
            We've handpicked the skills we think are most important for you to
            learn right now
          </T.BodyR>
        </Col>
      </Row>
      <Row ai="stretch">
        {skills.slice(0, 3).map((skill, index) => (
          <Col w={[4, 6, 4]} key={skill.id} mb="4">
            <RecommendSkill
              title={skill.title}
              icon={skill.icon}
              color={decideColor(index)}
              totalActivities={skill.activities.totalActivities}
              completedActivities={skill.activities.completedActivities}
              level={skill.activities.difficulty}
              id={skill.id}
            />
          </Col>
        ))}
      </Row>
      {!exploreMore && (
        <Row mt="6" ai="stretch">
          <Col w={[4, 6, 4]}>
            <CTA
              title="All Skills"
              text="Click on the button below to see all the skills we think will be beneficial"
              align="center"
              color="teal"
              pathLabel="Let's go!"
              handleClick={() => {
                handleLoadMore();
                setExploreMore(true);
              }}
            />
          </Col>
        </Row>
      )}
      {exploreMore && (
        <>
          <Row>
            <Col w={[4, 6, 12]}>
              {isMobile ? (
                <T.H4 mt="5">Keep exploring</T.H4>
              ) : (
                <T.H3 mt="5">Keep exploring</T.H3>
              )}
            </Col>
          </Row>
          <Row>
            <Col w={[4, 6, 12]}>
              <T.BodyR mt="4" mtM="3" mb="5" mbM="4">
                Here's each and every skill we think will benefit you
              </T.BodyR>
            </Col>
          </Row>
          <Row ai="stretch">
            {skills.slice(3, loadedSkills).map((skill, index) => (
              <Col w={[4, 6, 4]} key={skill.id} mb="4">
                <RecommendSkill
                  title={skill.title}
                  icon={skill.icon}
                  color={decideColor(index + 3)}
                  totalActivities={skill.activities.totalActivities}
                  completedActivities={skill.activities.completedActivities}
                  level={skill.activities.difficulty}
                  id={skill.id}
                />
              </Col>
            ))}
          </Row>
          {skills.length > loadedSkills && (
            <Row jc="center" mt="6" mtM="4">
              <Col w={[4, 4, 4]}>
                <S.LoadMoreButton
                  variant="outlined"
                  size="small"
                  handleClick={handleLoadMore}
                >
                  Load more
                </S.LoadMoreButton>
              </Col>
            </Row>
          )}
        </>
      )}
    </S.Container>
  );
};

export default RecommendedSkills;
