import React from 'react';

import LevelIndicator from '.';

export default {
  title: 'Common components/Level Indicator',
  component: LevelIndicator,
  argTypes: {
    level: {
      control: {
        type: 'range',
        min: 1,
        max: 4,
      },
    },
  },
};

const Template = (args) => (
  <div style={{ textAlign: 'center' }}>
    <LevelIndicator {...args} />
  </div>
);

export const Small = Template.bind({});
Small.args = {
  level: 3,
  color: 'navy',
};

export const large = Template.bind({});
large.args = {
  level: 2,
  color: 'teal',
  size: 'large',
};
