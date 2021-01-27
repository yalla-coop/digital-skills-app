import React from 'react';
import Share from '.';

export default {
  title: 'Common Components/Share',
  component: Share,
};

const Template = (args) => <Share {...args} />;

export const SharePage = Template.bind({});
SharePage.args = {
  text: 'Share this page',
  facebook: true,
  email: true,
  whatsapp: true,
};
