import React from 'react';
import { Progress } from 'antd';
import { Container, Content } from './style';
import theme from '../../theme';
import { H1, Body16, H5 } from '../Typography';

const CircleDiagram = ({ totalScore, currentScore, progressScore }) => {
  return (
    <Container progressScore={progressScore}>
      <Progress
        success={{
          percent: (currentScore / totalScore) * 100,
          strokeColor: 'red',
        }}
        type="circle"
        strokeColor={progressScore ? theme.colors.teal : theme.colors.blue}
        percent={((currentScore + progressScore) / totalScore) * 100}
        strokeWidth={10}
        showInfo={false}
        strokeLinecap={'round'}
        width={220}
        trailColor={`${theme.colors.blue}10`}
      />
      <Content>
        <H1 mb="5px" color="blue">
          {currentScore}
        </H1>
        <Body16 color="navy">out of {totalScore}</Body16>
        {!!progressScore && (
          <H5 mt="3px" color="teal">
            +{progressScore}
          </H5>
        )}
      </Content>
    </Container>
  );
};

export default CircleDiagram;
