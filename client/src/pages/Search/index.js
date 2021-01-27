import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Typography } from 'antd';

import * as S from './style';
import * as T from './../../components/Typography';
import { Row, Col } from './../../components/Grid';
import { navRoutes } from './../../constants';

import Icon from './../../components/Icon';
import { Search as SearchCommonComponent } from './../../components/Card';

import { Skills } from '../../api-calls';

const Search = () => {
  const [results, setResults] = useState([]);
  const query = new URLSearchParams(useLocation().search);

  const task = query.get('task');
  const tool = query.get('tool');

  const [isSearch, setIsSearch] = useState(() => task && tool);

  useEffect(() => {
    const getPopularTasks = async () => {
      const { data, error } = await Skills.getMostPopularTasks();

      if (!error) {
        if (setResults) {
          setResults(data);
          setIsSearch(false);
        }
      }
    };
    if (!task || !tool) {
      getPopularTasks();
    }
  }, [task, tool]);

  return (
    <S.Wrapper>
      <S.ColouredDiv>
        <Row inner>
          <Col w={[4, 8, 4]}>
            <SearchCommonComponent
              withoutPaddings
              withoutShadow
              setResults={(data) => {
                setResults(data);
                setIsSearch(true);
              }}
            />
          </Col>
        </Row>
      </S.ColouredDiv>

      <S.ResultsDiv>
        <Row mt="6" mtM="5">
          <Col w={[4, 12, 12]}>
            <T.H5 color="black">
              {isSearch
                ? `${results.length} results found`
                : 'Most popular tasks'}
            </T.H5>
            {isSearch && (
              <T.Body16 color="gray">
                Not found what you’re looking for?{' '}
                <T.Link color="gray" to={navRoutes.EXTERNAL.HELP}>
                  Ask here
                </T.Link>
              </T.Body16>
            )}
          </Col>
          {results.map(({ id, title, type, description }) => (
            <Col w={[4, 8, 4]} key={`${id} & ${type}`}>
              <S.Result
                to={`${
                  type === 'skill'
                    ? navRoutes.GENERAL.SKILL.replace(':id', id)
                    : navRoutes.GENERAL.ACTIVITY.replace(':id', id)
                }`}
              >
                <S.ResultContent>
                  <T.Link
                    title={title}
                    style={{
                      display: 'block',
                      maxWidth: '95%',
                    }}
                    to={`${
                      type === 'skill'
                        ? navRoutes.GENERAL.SKILL.replace(':id', id)
                        : navRoutes.GENERAL.ACTIVITY.replace(':id', id)
                    }`}
                  >
                    <Typography.Text
                      style={{ display: 'block', width: '100%' }}
                      ellipsis={{ tooltip: title }}
                    >
                      {title}
                    </Typography.Text>
                  </T.Link>
                  <div style={{ width: '15px' }}>
                    <Icon icon="rightRow" color="red" width="15" height="15" />
                  </div>
                </S.ResultContent>
              </S.Result>
            </Col>
          ))}
        </Row>
      </S.ResultsDiv>
    </S.Wrapper>
  );
};

export default Search;
