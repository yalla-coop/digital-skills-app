import React from 'react';

import Icon from '.';

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

export const Planning = () => (
  <Icon icon="planning" width={50} height={50} color="black" />
);

export const Office = () => (
  <Icon icon="office" width={150} height={150} color="black" />
);

export const BrokenLamp = () => (
  <Icon icon="brokenLamp" width={64} height={64} color="black" />
);

export const Camera = () => (
  <Icon icon="camera" width={64} height={64} color="black" />
);

export const File = () => (
  <Icon icon="file" width={64} height={64} color="black" />
);

export const TextFile = () => (
  <Icon icon="textFile" width={64} height={64} color="black" />
);

export const Discussion = () => (
  <Icon icon="discussion" width={64} height={64} color="black" />
);

export const ShareMedia = () => (
  <Icon icon="shareMedia" width={64} height={64} color="black" />
);

export const Backup = () => (
  <Icon icon="backup" width={64} height={64} color="black" />
);

export const Calendar = () => (
  <Icon icon="calendar" width={64} height={64} color="black" />
);

export const Notebook = () => (
  <Icon icon="notebook" width={64} height={64} color="black" />
);

export const Darts = () => (
  <Icon icon="darts" width={172} height={150} color="black" />
);

export const Crown = () => (
  <Icon icon="crown" width={172} height={150} color="black" />
);

export const Flash = () => (
  <Icon
    icon="flash"
    width={120}
    height={120}
    color="liteTeal"
    strokeColor="teal"
  />
);
export const Cup = () => (
  <Icon
    icon="cup"
    width={133}
    height={131}
    color="liteBlue"
    strokeColor="navy"
  />
);
