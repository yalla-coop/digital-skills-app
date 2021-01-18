import BackLink from '.';

export default {
  title: 'Common Components/BackLink',
  component: BackLink,
};

const Template = (args) => <BackLink {...args} />;
const WrappedTemplate = (args) => (
  <div style={{ background: 'green', padding: 20 }}>
    <BackLink {...args} />
  </div>
);

export const Default = Template.bind({});

export const White = WrappedTemplate.bind({});
White.args = { color: 'white', iconColor: 'white' };
