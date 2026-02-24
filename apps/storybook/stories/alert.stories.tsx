import { RiErrorWarningLine, RiInformationLine } from "@remixicon/react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  Alert,
  AlertAction,
  AlertDescription,
  AlertTitle,
} from "@workspace/ui/components/ui/alert";
import { Button } from "@workspace/ui/components/ui/button";

const meta = {
  title: "ui/Alert",
  component: Alert,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Alert>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Alert className="w-[520px]">
      <RiInformationLine />
      <AlertTitle>New update available</AlertTitle>
      <AlertDescription>
        Version 2.1 includes improved performance and keyboard navigation fixes.
      </AlertDescription>
      <AlertAction>
        <Button size="sm" variant="outline">
          View changes
        </Button>
      </AlertAction>
    </Alert>
  ),
};

export const Destructive: Story = {
  render: () => (
    <Alert className="w-[520px]" variant="destructive">
      <RiErrorWarningLine />
      <AlertTitle>Action failed</AlertTitle>
      <AlertDescription>
        We could not save your changes. Please review required fields and retry.
      </AlertDescription>
    </Alert>
  ),
};
