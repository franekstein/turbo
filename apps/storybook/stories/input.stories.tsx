import type { Meta, StoryObj } from "@storybook/react-vite";
import { Input } from "@workspace/ui/components/ui/input";

const meta = {
  title: "ui/Input",
  component: Input,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    type: {
      control: "select",
      options: ["text", "email", "password", "search", "url", "tel"],
    },
    placeholder: {
      control: "text",
    },
  },
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "name@example.com",
    type: "email",
  },
};

export const Disabled: Story = {
  args: {
    placeholder: "Disabled input",
    disabled: true,
    value: "cannot-edit@example.com",
  },
};

export const Invalid: Story = {
  args: {
    placeholder: "Enter a valid email",
    "aria-invalid": true,
    defaultValue: "invalid-email",
  },
};
