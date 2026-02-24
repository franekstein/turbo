import type { Meta, StoryObj } from "@storybook/react-vite";
import { Separator } from "@workspace/ui/components/separator";

const meta = {
  title: "ui/Separator",
  component: Separator,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Separator>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    className: "w-[280px]",
  },
};
