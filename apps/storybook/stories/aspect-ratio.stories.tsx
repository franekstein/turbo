import type { Meta, StoryObj } from "@storybook/react-vite";
import { AspectRatio } from "@workspace/ui/components/aspect-ratio";

const meta = {
  title: "ui/AspectRatio",
  component: AspectRatio,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof AspectRatio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    ratio: 16 / 9,
  },
  render: (args) => (
    <AspectRatio
      {...args}
      className="w-[360px] overflow-hidden rounded-lg border bg-muted/30"
    >
      <img
        alt="Gradient placeholder"
        className="size-full object-cover"
        src="https://images.unsplash.com/photo-1557683316-973673baf926?w=1200&q=80&auto=format&fit=crop"
      />
    </AspectRatio>
  ),
};

export const Square: Story = {
  args: {
    ratio: 1,
  },
  render: (args) => (
    <AspectRatio
      {...args}
      className="w-56 overflow-hidden rounded-lg border bg-muted/30"
    >
      <img
        alt="Square placeholder"
        className="size-full object-cover"
        src="https://images.unsplash.com/photo-1557682224-5b8590cd9ec5?w=800&q=80&auto=format&fit=crop"
      />
    </AspectRatio>
  ),
};
