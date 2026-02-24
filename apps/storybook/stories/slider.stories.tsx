import type { Meta, StoryObj } from "@storybook/react-vite";
import { Slider } from "@workspace/ui/components/slider";

const meta = {
  title: "ui/Slider",
  component: Slider,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Slider>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    defaultValue: [50],
    max: 100,
    step: 1,
    className: "w-[260px]",
  },
};
