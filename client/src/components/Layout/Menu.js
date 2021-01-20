import React, { useState } from 'react';
import { Menu as AntMenu } from 'antd';

const Menu = () => {
  const [selectedKey, setSelectedKey] = useState('0');

  const topics = ['First topic', 'Second topic', 'Third topic'];
  const styledTopics = [];
  topics.forEach((topic, index) =>
    styledTopics.push(
      <AntMenu.Item key={index} onClick={(e) => setSelectedKey(e.key)}>
        {topic}
      </AntMenu.Item>
    )
  );

  return (
    <AntMenu mode="inline" selectedKeys={[selectedKey]}>
      {styledTopics}
    </AntMenu>
  );
};
export default Menu;
