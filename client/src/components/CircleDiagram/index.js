import React from 'react';
import { Progress } from 'antd';
import { Container, Content } from './style';
import theme from '../../theme';
import { H1, Body16, H5 } from '../Typography';

const CircleDiagram = ({ totalScore, currentScore, progressScore }) => {
  const _progressScore = Math.round(progressScore);
  const _currentScore = Math.round(currentScore);
  return (
    <Container progressScore={_progressScore}>
      <Progress
        success={{
          percent: ((_currentScore - _progressScore) / totalScore) * 100,
          strokeColor: 'red',
        }}
        type="circle"
        strokeColor={_progressScore ? theme.colors.teal : theme.colors.blue}
        percent={
          ((_currentScore + _progressScore - _progressScore) / totalScore) * 100
        }
        strokeWidth={10}
        showInfo={false}
        strokeLinecap={'round'}
        width={220}
        trailColor={`${theme.colors.blue}10`}
      />
      <Content>
        <H1 mb="5px" color="blue">
          {_currentScore}
        </H1>
        <Body16 color="navy">out of {totalScore}</Body16>
        {!!_progressScore && (
          <H5 mt="3px" color="teal">
            +{_progressScore}
          </H5>
        )}
      </Content>
    </Container>
  );
};

export default CircleDiagram;
