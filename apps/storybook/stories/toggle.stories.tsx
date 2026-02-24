import { RiBold, RiItalic } from "@remixicon/react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Toggle } from "@workspace/ui/components/toggle";

const meta = {
  title: "ui/Toggle",
  component: Toggle,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "outline"],
    },
    size: {
      control: "select",
      options: ["default", "sm", "lg"],
    },
    children: {
      control: "text",
    },
  },
} satisfies Meta<typeof Toggle>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Bold",
    defaultPressed: true,
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
    children: "Outline",
  },
};

export const SmallWithIcon: Story = {
  args: {
    size: "sm",
  },
  render: (args) => (
    <Toggle {...args}>
      <RiItalic />
      Italic
    </Toggle>
  ),
};

export const LargeWithIcon: Story = {
  args: {
    size: "lg",
  },
  render: (args) => (
    <Toggle {...args}>
      <RiBold />
      Heading
    </Toggle>
  ),
};
