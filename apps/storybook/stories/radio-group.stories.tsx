import type { Meta, StoryObj } from "@storybook/react-vite";
import { Label } from "@workspace/ui/components/ui/label";
import {
  RadioGroup,
  RadioGroupItem,
} from "@workspace/ui/components/ui/radio-group";

const meta = {
  title: "ui/RadioGroup",
  component: RadioGroup,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <RadioGroup className="w-[280px]" defaultValue="pro">
      <div className="flex items-center gap-2">
        <RadioGroupItem id="plan-free" value="free" />
        <Label htmlFor="plan-free">Free</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem id="plan-pro" value="pro" />
        <Label htmlFor="plan-pro">Pro</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem id="plan-enterprise" value="enterprise" />
        <Label htmlFor="plan-enterprise">Enterprise</Label>
      </div>
    </RadioGroup>
  ),
};
