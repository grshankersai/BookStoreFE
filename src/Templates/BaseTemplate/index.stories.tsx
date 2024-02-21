import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import BaseTemplate, { BaseTemplateProps } from ".";

export default {
  title: "templates/BaseTemplate",
  component: BaseTemplate,
} as Meta;
const Template: StoryFn<BaseTemplateProps> = (args) => (
  <BaseTemplate {...args} />
);

export const BaseTemplateTemplate = Template.bind({});

BaseTemplateTemplate.args = {
  templateBody: <></>,
};
