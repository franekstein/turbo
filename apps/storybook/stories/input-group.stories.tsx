import { RiSearchLine } from "@remixicon/react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@workspace/ui/components/ui/input-group";
import { Kbd } from "@workspace/ui/components/ui/kbd";

const meta = {
  title: "ui/InputGroup",
  component: InputGroup,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof InputGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <InputGroup className="w-[420px]">
      <InputGroupAddon>
        <RiSearchLine />
      </InputGroupAddon>
      <InputGroupInput placeholder="Search projects..." />
      <InputGroupAddon align="inline-end">
        <Kbd>⌘K</Kbd>
      </InputGroupAddon>
    </InputGroup>
  ),
};

export const WithAction: Story = {
  render: () => (
    <InputGroup className="w-[420px]">
      <InputGroupInput placeholder="Invite by email" />
      <InputGroupAddon align="inline-end">
        <InputGroupButton>Send</InputGroupButton>
      </InputGroupAddon>
    </InputGroup>
  ),
};
