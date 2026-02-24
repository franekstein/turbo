import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  NativeSelect,
  NativeSelectOptGroup,
  NativeSelectOption,
} from "@workspace/ui/components/native-select";

const meta = {
  title: "ui/NativeSelect",
  component: NativeSelect,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof NativeSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <NativeSelect className="w-56" defaultValue="nextjs">
      <NativeSelectOption value="nextjs">Next.js</NativeSelectOption>
      <NativeSelectOption value="astro">Astro</NativeSelectOption>
      <NativeSelectOption value="remix">Remix</NativeSelectOption>
    </NativeSelect>
  ),
};

export const Grouped: Story = {
  render: () => (
    <NativeSelect className="w-56">
      <NativeSelectOptGroup label="Frontend">
        <NativeSelectOption value="react">React</NativeSelectOption>
        <NativeSelectOption value="vue">Vue</NativeSelectOption>
      </NativeSelectOptGroup>
      <NativeSelectOptGroup label="Backend">
        <NativeSelectOption value="node">Node.js</NativeSelectOption>
        <NativeSelectOption value="go">Go</NativeSelectOption>
      </NativeSelectOptGroup>
    </NativeSelect>
  ),
};
