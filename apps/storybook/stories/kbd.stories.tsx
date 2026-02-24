import type { Meta, StoryObj } from "@storybook/react-vite";
import { Kbd, KbdGroup } from "@workspace/ui/components/ui/kbd";

const meta = {
  title: "ui/Kbd",
  component: Kbd,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Kbd>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <KbdGroup>
      <Kbd>⌘</Kbd>
      <Kbd>K</Kbd>
    </KbdGroup>
  ),
};
