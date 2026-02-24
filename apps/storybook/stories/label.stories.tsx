import type { Meta, StoryObj } from "@storybook/react-vite";
import { Input } from "@workspace/ui/components/ui/input";
import { Label } from "@workspace/ui/components/ui/label";

const meta = {
  title: "ui/Label",
  component: Label,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="grid w-[320px] gap-2">
      <Label htmlFor="label-email">Email</Label>
      <Input id="label-email" placeholder="name@example.com" type="email" />
    </div>
  ),
};
