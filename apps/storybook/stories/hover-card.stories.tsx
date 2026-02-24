import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@workspace/ui/components/ui/hover-card";

const meta = {
  title: "ui/HoverCard",
  component: HoverCard,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof HoverCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <HoverCard>
      <HoverCardTrigger className="underline underline-offset-4" href="#">
        @jane
      </HoverCardTrigger>
      <HoverCardContent>
        <div className="flex flex-col gap-1">
          <p className="font-medium">@jane</p>
          <p className="text-muted-foreground text-sm">Frontend engineer.</p>
        </div>
      </HoverCardContent>
    </HoverCard>
  ),
};
