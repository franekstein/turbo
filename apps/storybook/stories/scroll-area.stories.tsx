import type { Meta, StoryObj } from "@storybook/react-vite";
import { ScrollArea } from "@workspace/ui/components/ui/scroll-area";

const meta = {
  title: "ui/ScrollArea",
  component: ScrollArea,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof ScrollArea>;

export default meta;
type Story = StoryObj<typeof meta>;

const tags = Array.from({ length: 24 }, (_, index) => `Tag ${index + 1}`);

export const Default: Story = {
  render: () => (
    <ScrollArea className="h-56 w-80 rounded-lg border p-3">
      <div className="space-y-2">
        {tags.map((tag) => (
          <div className="rounded-md border px-2 py-1 text-sm" key={tag}>
            {tag}
          </div>
        ))}
      </div>
    </ScrollArea>
  ),
};
