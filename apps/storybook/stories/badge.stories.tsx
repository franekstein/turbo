import type { Meta, StoryObj } from "@storybook/react-vite";
import { Badge } from "@workspace/ui/components/badge";

const meta = {
  title: "ui/Badge",
  component: Badge,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      control: "select",
      options: [
        "default",
        "secondary",
        "destructive",
        "outline",
        "ghost",
        "link",
      ],
    },
    children: {
      control: "text",
    },
  },
  args: {
    children: "Default",
    variant: "default",
  },
} satisfies Meta<typeof Badge>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Default",
    variant: "default",
  },
};

export const Secondary: Story = {
  args: {
    children: "Secondary",
    variant: "secondary",
  },
};

export const Destructive: Story = {
  args: {
    children: "Destructive",
    variant: "destructive",
  },
};

export const Outline: Story = {
  args: {
    children: "Outline",
    variant: "outline",
  },
};

export const Link: Story = {
  args: {
    children: "Read docs",
    variant: "link",
  },
  render: (args) => (
    <Badge {...args}>
      <a href="https://example.com/docs">Read docs</a>
    </Badge>
  ),
};
