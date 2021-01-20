import React from 'react';

import Icon, { IconMap } from '.';

export default {
  title: 'Common Components/Icon',
  component: Icon,
  argTypes: {
    color: { control: 'color' },
    width: { control: 'number' },
    height: { control: 'number' },
  },
};

const Template = (args) => <Icon {...args} />;

export const Email = Template.bind({});
Email.args = {
  icon: 'email',
  width: 50,
  height: 50,
};

export const Icons = () => (
  <div style={{ display: 'flex', flexWrap: 'wrap' }}>
    {Object.keys(IconMap).map((i) => (
      <div style={{ width: '20%', marginTop: 20 }}>
        <Icon icon={i} width={50} height={50} color="black" />
        <h4 style={{ margin: '7px 5px' }}>{i}</h4>
      </div>
    ))}
  </div>
);
