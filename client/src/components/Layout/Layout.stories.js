import React from 'react';

import Layout from '../Layout';
import Example from '../../pages/Example';

export default {
  title: '1- Layout',
  component: Layout,
  argTypes: {
    color: 'pink',
  },
};

export const GeneralLayout = (args) => (
  <Layout layout="general" {...args}>
    <Example />
  </Layout>
);

export const WithoutHeaderLayout = (args) => (
  <Layout layout="withoutHeader" {...args}>
    <Example />
  </Layout>
);

export const NotificationLayout = (args) => (
  <Layout layout="notification" headerIcon="email" {...args}>
    <Example />
  </Layout>
);

export const WithBlocksLayout = (args) => (
  <Layout layout="withBlocks" leftColor="blue" rightColor="tael" {...args}>
    <Example />
  </Layout>
);

export const PageLayout = (args) => (
  <Layout layout="page" {...args}>
    <Example />
  </Layout>
);
