import React from 'react';
import styled from '@emotion/styled';

import CircleDiagram from '.';

const Div = styled('div')`
  margin-top: 200px;
  margin-left: 50%;
  * {
    margin: 0;
  }
`;

export default {
  title: 'Common Components/3- CircleDiagram',
  component: CircleDiagram,
  argTypes: {
    totalScore: { name: 'total Score', type: { name: 'number' } },
    currentScore: { name: 'current Score', type: { name: 'number' } },
    progressScore: {
      name: 'progress Score',
      type: { name: 'number', required: false },
    },
  },
};

const Template = (args) => (
  <Div>
    <CircleDiagram {...args} />
  </Div>
);

export const CircleDiagramScoreWithProgress = Template.bind({});
CircleDiagramScoreWithProgress.args = {
  totalScore: 100,
  currentScore: 20,
  progressScore: 3,
};

export const CircleDiagramScore = Template.bind({});
CircleDiagramScore.args = {
  totalScore: 100,
  currentScore: 20,
};
