import React, { useState } from 'react';
import PropTypes from 'prop-types';

import General from './General';
import WithoutHeader from './WithoutHeader';
import Page from './Page';
import WithBlocks from './WithBlocks';
import Notification from './Notification';

const Layout = ({ layout, ...props }) => {
  const [selectedKey, setSelectedKey] = useState('0');

  switch (layout) {
    case 'withBlocks':
      return (
        <WithBlocks
          selectedKey={selectedKey}
          setSelectedKey={setSelectedKey}
          {...props}
        />
      );
    case 'notification':
      return <Notification {...props} />;
    case 'page':
      return (
        <Page
          selectedKey={selectedKey}
          setSelectedKey={setSelectedKey}
          {...props}
        />
      );
    case 'withoutHeader':
      return (
        <WithoutHeader
          selectedKey={selectedKey}
          setSelectedKey={setSelectedKey}
          {...props}
        />
      );
    case 'general':
    default:
      return (
        <General
          selectedKey={selectedKey}
          setSelectedKey={setSelectedKey}
          {...props}
        />
      );
  }
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
