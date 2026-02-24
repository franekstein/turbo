import { RiCalendarLine, RiSettings3Line, RiUserLine } from "@remixicon/react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@workspace/ui/components/ui/command";

const meta = {
  title: "ui/Command",
  component: Command,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Command>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Command className="w-[460px]">
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <CommandItem value="calendar">
            <RiCalendarLine />
            Calendar
            <CommandShortcut>⌘K</CommandShortcut>
          </CommandItem>
          <CommandItem value="profile">
            <RiUserLine />
            Profile
            <CommandShortcut>⌘P</CommandShortcut>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Settings">
          <CommandItem value="general">
            <RiSettings3Line />
            General settings
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  ),
};
