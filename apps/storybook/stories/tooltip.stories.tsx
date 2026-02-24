import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "@workspace/ui/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@workspace/ui/components/ui/tooltip";

const meta = {
  title: "ui/Tooltip",
  component: Tooltip,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Tooltip>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <TooltipProvider delay={150}>
      <Tooltip>
        <TooltipTrigger render={<Button variant="outline" />}>
          Hover me
        </TooltipTrigger>
        <TooltipContent>View more details</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  ),
};

export const BottomPlacement: Story = {
  render: () => (
    <TooltipProvider delay={150}>
      <Tooltip>
        <TooltipTrigger render={<Button />}>Save changes</TooltipTrigger>
        <TooltipContent align="start" side="bottom">
          Persist updates to your workspace
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  ),
};
