import type { Meta, StoryObj } from "@storybook/react-vite";
import { DirectionProvider } from "@workspace/ui/components/direction";

const meta: Meta<typeof DirectionProvider> = {
  title: "ui/DirectionProvider",
  component: DirectionProvider,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    direction: "ltr",
    children: "Direction provider content",
  },
};
