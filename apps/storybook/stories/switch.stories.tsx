import type { Meta, StoryObj } from "@storybook/react-vite";
import { Label } from "@workspace/ui/components/ui/label";
import { Switch } from "@workspace/ui/components/ui/switch";

const meta = {
  title: "ui/Switch",
  component: Switch,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    size: {
      control: "select",
      options: ["default", "sm"],
    },
  },
} satisfies Meta<typeof Switch>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Switch defaultChecked id="switch-default" />
      <Label htmlFor="switch-default">Enable notifications</Label>
    </div>
  ),
};

export const Small: Story = {
  args: {
    size: "sm",
    defaultChecked: true,
    "aria-label": "Small switch",
  },
};

export const Disabled: Story = {
  args: {
    defaultChecked: true,
    disabled: true,
    "aria-label": "Disabled switch",
  },
};
