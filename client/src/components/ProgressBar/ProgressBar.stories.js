import React from 'react';

import ProgressBar from '.';

export default {
  title: 'Common Components/4- Progress Bar',
  component: ProgressBar,
  argTypes: {
    currentLocation: { name: 'current Location', type: { name: 'string' } },
    steps: { name: 'steps', type: { name: 'number' } },
    percent: {
      name: 'progress Percentage',
      type: { name: 'number', required: false },
    },
  },
};

const Template = (args) => <ProgressBar {...args} />;

export const QuestionProgressBar = Template.bind({});
QuestionProgressBar.args = {
  currentLocation: 'Question 2',
  steps: 17,
  percent: 12,
};
