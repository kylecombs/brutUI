import React from "react";
import { Meta, Story } from "@storybook/react";
import { FiStar, FiArrowRight } from "react-icons/fi";
import { Badge, BadgeProps } from "../src";
import StoryLayout from "./StoryLayout";

const meta: Meta = {
  title: "Badge",
  component: Badge,
  parameters: {
    controls: { expanded: true },
    design: {
      type: "figma",
      url: "https://www.figma.com/file/0t0pK5luEdxTorOcg92K49/My-Travel-App?node-id=49%3A21287",
    },
  },
};

export default meta;

interface Props extends BadgeProps {
  darkMode: boolean;
}

const StoryBadge: Story<Props> = (args) => (
  <StoryLayout {...args} className="inline-flex flex-col space-y-2">
    <Badge {...args} LeadingIcon={<FiStar />}>
      Label
    </Badge>

    <Badge {...args} TrailingIcon={<FiArrowRight />}>
      Label
    </Badge>
  </StoryLayout>
);

export const Default = StoryBadge.bind({});

Default.args = {
  variant: "primary",
  size: "md",
  darkMode: false,
};