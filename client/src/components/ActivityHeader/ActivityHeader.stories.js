import React from 'react';

import ActivityHeader from '.';

export default {
  title: 'Common components/Activity Header',
  component: ActivityHeader,
  argTypes: {
    difficultyLevel: {
      control: {
        type: 'range',
        min: 1,
        max: 4,
      },
    },
  },
};

const Template = (args) => <ActivityHeader {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Using microsoft word',
  createdBy: { name: 'GCF Global', url: 'https://google.ps' },
  mobileBgColor: 'blue',
  time: 15,
  difficultyLevel: 3,
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  title: 'Using microsoft word',
  createdBy: { name: 'Scouts', icon: 'scouts' },
  mobileBgColor: 'purple',
  time: 5,
  difficultyLevel: 1,
};
