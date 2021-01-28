import React from 'react';

import SkillModal from '.';

export default {
  title: 'Common Components/5- Skill Modal',
  component: SkillModal,
  argTypes: {},
};

export const Template = (args) => (
  <div style={{ marginTop: '5%', marginLeft: '5%', width: 330 }}>
    <SkillModal {...args} />
  </div>
);
