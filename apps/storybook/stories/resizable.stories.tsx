import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@workspace/ui/components/resizable";

const meta = {
  title: "ui/ResizablePanelGroup",
  component: ResizablePanelGroup,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof ResizablePanelGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <ResizablePanelGroup
      className="h-[260px] w-[640px] rounded-lg border"
      orientation="horizontal"
    >
      <ResizablePanel defaultSize={35}>
        <div className="flex h-full items-center justify-center bg-muted/30 font-medium text-sm">
          Sidebar
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={65}>
        <div className="flex h-full items-center justify-center font-medium text-sm">
          Main content
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  ),
};
