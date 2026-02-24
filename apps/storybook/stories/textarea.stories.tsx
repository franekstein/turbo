import type { Meta, StoryObj } from "@storybook/react-vite";
import { Textarea } from "@workspace/ui/components/textarea";

const meta = {
  title: "ui/Textarea",
  component: Textarea,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    placeholder: {
      control: "text",
    },
    rows: {
      control: { type: "number", min: 2, max: 12, step: 1 },
    },
  },
} satisfies Meta<typeof Textarea>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "Write your message...",
    rows: 4,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    defaultValue: "This field is read-only at the moment.",
    rows: 4,
  },
};

export const Invalid: Story = {
  args: {
    "aria-invalid": true,
    defaultValue: "Too short",
    rows: 4,
  },
};
