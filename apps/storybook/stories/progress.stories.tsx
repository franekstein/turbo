import type { Meta, StoryObj } from "@storybook/react-vite";
import { Progress } from "@workspace/ui/components/progress";

const meta = {
  title: "ui/Progress",
  component: Progress,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Progress>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: 60,
    className: "w-[260px]",
  },
};
