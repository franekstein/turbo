import { RiArrowLeftLine, RiArrowRightLine } from "@remixicon/react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "@workspace/ui/components/ui/button";
import {
  ButtonGroup,
  ButtonGroupSeparator,
  ButtonGroupText,
} from "@workspace/ui/components/ui/button-group";

const meta = {
  title: "ui/ButtonGroup",
  component: ButtonGroup,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof ButtonGroup>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <ButtonGroup>
      <Button variant="outline">
        <RiArrowLeftLine />
        Previous
      </Button>
      <Button variant="outline">Next</Button>
    </ButtonGroup>
  ),
};

export const WithTextAndSeparator: Story = {
  render: () => (
    <ButtonGroup>
      <ButtonGroupText>Page 3 of 12</ButtonGroupText>
      <ButtonGroupSeparator />
      <Button variant="outline">
        <RiArrowLeftLine />
      </Button>
      <Button variant="outline">
        <RiArrowRightLine />
      </Button>
    </ButtonGroup>
  ),
};

export const Vertical: Story = {
  render: () => (
    <ButtonGroup orientation="vertical">
      <Button variant="outline">Top</Button>
      <Button variant="outline">Middle</Button>
      <Button variant="outline">Bottom</Button>
    </ButtonGroup>
  ),
};
