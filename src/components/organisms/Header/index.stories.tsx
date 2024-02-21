import { StoryFn, Meta } from "@storybook/react";
import Header from ".";

export default {
  title: "organisms/Header",
  component: Header,
} as Meta;
const Template: StoryFn = (args) => <Header />;

export const HeaderTemplate = Template.bind({});
HeaderTemplate.args = {};
