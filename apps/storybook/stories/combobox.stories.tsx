import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxGroup,
  ComboboxInput,
  ComboboxItem,
  ComboboxLabel,
  ComboboxList,
} from "@workspace/ui/components/combobox";

const meta: Meta<typeof Combobox> = {
  title: "ui/Combobox",
  component: Combobox,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Combobox defaultValue="nextjs">
      <ComboboxInput placeholder="Search framework..." showClear />
      <ComboboxContent>
        <ComboboxEmpty>No framework found.</ComboboxEmpty>
        <ComboboxList>
          <ComboboxGroup>
            <ComboboxLabel>Frameworks</ComboboxLabel>
            <ComboboxItem value="nextjs">Next.js</ComboboxItem>
            <ComboboxItem value="remix">Remix</ComboboxItem>
            <ComboboxItem value="sveltekit">SvelteKit</ComboboxItem>
          </ComboboxGroup>
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  ),
};

export const Disabled: Story = {
  render: () => (
    <Combobox>
      <ComboboxInput
        disabled
        placeholder="Disabled combobox"
        showTrigger={false}
      />
      <ComboboxContent>
        <ComboboxList>
          <ComboboxItem value="disabled">Disabled</ComboboxItem>
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  ),
};
