import React from 'react';

import Button from '.';

export default {
  title: 'Common components/Button',
  component: Button,
};

const Template = ({ txt, ...args }) => (
  <div style={{ maxWidth: 350, margin: '0 auto' }}>
    <Button {...args}>{txt}</Button>
  </div>
);

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
  txt: 'Primary button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
  txt: 'Secondary button',
};

export const Outlined = Template.bind({});
Outlined.args = {
  variant: 'outlined',
  txt: 'Outlined button',
};
