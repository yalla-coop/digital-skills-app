import React from 'react';
import { Progress } from 'antd';
import BackLink from '../BackLink';
import { Container, Content } from './style';
import * as T from '../Typography';

const ProgressBar = ({ currentLocation, steps, percent }) => {
  return (
    <Container steps={steps}>
      <Progress percent={percent} steps={steps} strokeWidth={10} />
      <Content>
        <BackLink iconColor="teal" />
        <T.Body16B color="blue">{currentLocation}</T.Body16B>
      </Content>
    </Container>
  );
};

export default ProgressBar;
