import Headers from './Headers';

export default {
	title: '04_Templates/Headers',
	component: Headers,
};

const Template = (args) => <Headers {...args} />;

export const Overview = Template.bind({});
Overview.args = {};
