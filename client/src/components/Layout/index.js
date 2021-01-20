import React from 'react';
import PropTypes from 'prop-types';

import General from './General';
import WithoutHeader from './WithoutHeader';
import Page from './Page';
import WithBlocks from './WithBlocks';
import Notification from './Notification';

const Layout = ({ layout, ...props }) => {
  switch (layout) {
    case 'withBlocks':
      return <WithBlocks {...props} />;
    case 'notification':
      return <Notification {...props} />;
    case 'page':
      return <Page {...props} />;
    case 'withoutHeader':
      return <WithoutHeader {...props} />;
    case 'general':
    default:
      return <General {...props} />;
  }
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
