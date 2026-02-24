import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "@workspace/ui/components/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@workspace/ui/components/drawer";

const meta = {
  title: "ui/Drawer",
  component: Drawer,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Drawer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Drawer>
      <DrawerTrigger className="inline-flex h-8 items-center rounded-lg border border-input px-3 text-sm">
        Open drawer
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Create task</DrawerTitle>
          <DrawerDescription>
            Add a quick task without leaving your current context.
          </DrawerDescription>
        </DrawerHeader>
        <DrawerFooter>
          <DrawerClose className="inline-flex h-8 items-center rounded-lg border border-input px-3 text-sm">
            Cancel
          </DrawerClose>
          <Button>Create</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  ),
};

export const TopDirection: Story = {
  render: () => (
    <Drawer direction="top">
      <DrawerTrigger className="inline-flex h-8 items-center rounded-lg border border-input px-3 text-sm">
        Open top drawer
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Quick actions</DrawerTitle>
          <DrawerDescription>Pick an action to continue.</DrawerDescription>
        </DrawerHeader>
      </DrawerContent>
    </Drawer>
  ),
};
