import { RiFolder2Line } from "@remixicon/react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "@workspace/ui/components/ui/button";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@workspace/ui/components/ui/item";

const meta = {
  title: "ui/Item",
  component: Item,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Item>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Item className="w-[560px]" variant="outline">
      <ItemMedia variant="icon">
        <RiFolder2Line />
      </ItemMedia>
      <ItemContent>
        <ItemTitle>Design System</ItemTitle>
        <ItemDescription>Shared components, tokens, and docs.</ItemDescription>
      </ItemContent>
      <ItemActions>
        <Button size="sm" variant="outline">
          Open
        </Button>
      </ItemActions>
    </Item>
  ),
};
