import type { Meta, StoryObj } from "@storybook/react-vite";
import { Checkbox } from "@workspace/ui/components/checkbox";
import { Label } from "@workspace/ui/components/label";

const meta = {
  title: "ui/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Checkbox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Checkbox defaultChecked id="terms-default" />
      <Label htmlFor="terms-default">Accept terms and conditions</Label>
    </div>
  ),
};

export const Unchecked: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Checkbox id="terms-unchecked" />
      <Label htmlFor="terms-unchecked">Send me product updates</Label>
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Checkbox defaultChecked disabled id="terms-disabled" />
      <Label htmlFor="terms-disabled">Admin-only setting</Label>
    </div>
  ),
};
