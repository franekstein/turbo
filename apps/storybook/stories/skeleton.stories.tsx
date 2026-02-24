import type { Meta, StoryObj } from "@storybook/react-vite";
import { Skeleton } from "@workspace/ui/components/skeleton";

const meta = {
  title: "ui/Skeleton",
  component: Skeleton,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Skeleton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    className: "h-6 w-48 rounded-md",
  },
};
