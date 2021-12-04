import Input from './Input';

export default {
  title: '01_Atom/Input',
  component: Input,
};

const Template = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  round: '5',
};
