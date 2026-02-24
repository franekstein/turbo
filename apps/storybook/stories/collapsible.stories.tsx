import { RiArrowDownSLine } from "@remixicon/react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "@workspace/ui/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@workspace/ui/components/ui/collapsible";

const meta = {
  title: "ui/Collapsible",
  component: Collapsible,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Collapsible>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Collapsible className="w-[420px] rounded-lg border p-3" defaultOpen>
      <div className="flex items-center justify-between">
        <p className="font-medium text-sm">Recent updates</p>
        <CollapsibleTrigger render={<Button size="icon-sm" variant="ghost" />}>
          <RiArrowDownSLine />
        </CollapsibleTrigger>
      </div>
      <CollapsibleContent className="pt-3 text-muted-foreground text-sm">
        Added keyboard shortcuts, improved focus states, and cleaned up docs.
      </CollapsibleContent>
    </Collapsible>
  ),
};
