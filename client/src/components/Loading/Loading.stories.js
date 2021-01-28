import Loading from '.';

export default {
  title: 'Common Components/Loading',
  component: Loading,
};

const Template = (args) => (
  <div style={{ background: 'green', padding: 20 }}>
    <Loading {...args} />
  </div>
);

export const Default = Template.bind({});

Default.args = { color: 'white', fontSize: 52 };
