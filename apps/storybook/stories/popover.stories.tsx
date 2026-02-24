import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "@workspace/ui/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@workspace/ui/components/ui/popover";

const meta = {
  title: "ui/Popover",
  component: Popover,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Popover>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger render={<Button variant="outline" />}>
        Open popover
      </PopoverTrigger>
      <PopoverContent>
        <PopoverHeader>
          <PopoverTitle>Share project</PopoverTitle>
          <PopoverDescription>
            Invite teammates with read or edit access.
          </PopoverDescription>
        </PopoverHeader>
        <Button size="sm">Copy invite link</Button>
      </PopoverContent>
    </Popover>
  ),
};

export const StartAligned: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger render={<Button>Account</Button>}>Account</PopoverTrigger>
      <PopoverContent align="start" className="w-64">
        <PopoverHeader>
          <PopoverTitle>Signed in as</PopoverTitle>
          <PopoverDescription>jane@example.com</PopoverDescription>
        </PopoverHeader>
      </PopoverContent>
    </Popover>
  ),
};
