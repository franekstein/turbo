import type { Meta, StoryObj } from "@storybook/react-vite";
import { Spinner } from "@workspace/ui/components/ui/spinner";

const meta = {
  title: "ui/Spinner",
  component: Spinner,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Spinner>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    "aria-label": "Loading",
  },
};
