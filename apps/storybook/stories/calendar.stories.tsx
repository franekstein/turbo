import type { Meta, StoryObj } from "@storybook/react-vite";
import { Calendar } from "@workspace/ui/components/calendar";

const meta = {
  title: "ui/Calendar",
  component: Calendar,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    mode: {
      control: "select",
      options: ["single", "range", "multiple"],
    },
    captionLayout: {
      control: "select",
      options: ["label", "dropdown", "dropdown-months", "dropdown-years"],
    },
    numberOfMonths: {
      control: { type: "number", min: 1, max: 3, step: 1 },
    },
  },
} satisfies Meta<typeof Calendar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    mode: "single",
    selected: new Date(2026, 1, 24),
    className: "rounded-lg border",
  },
};

export const Range: Story = {
  args: {
    mode: "range",
    selected: {
      from: new Date(2026, 1, 18),
      to: new Date(2026, 1, 24),
    },
    numberOfMonths: 2,
    className: "rounded-lg border",
  },
};

export const DropdownCaption: Story = {
  args: {
    captionLayout: "dropdown",
    fromYear: 2020,
    toYear: 2030,
    mode: "single",
    selected: new Date(2026, 1, 24),
    className: "rounded-lg border",
  },
};
