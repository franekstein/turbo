import type { Meta, StoryObj } from "@storybook/react-vite";
import { Toaster } from "@workspace/ui/components/sonner";

const meta: Meta<typeof Toaster> = {
  title: "ui/Toaster",
  component: Toaster,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <Toaster richColors />,
};
