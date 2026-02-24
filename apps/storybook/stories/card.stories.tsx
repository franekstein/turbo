import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "@workspace/ui/components/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card";

const meta = {
  title: "ui/Card",
  component: Card,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Card className="w-[420px]">
      <CardHeader>
        <CardTitle>Pro plan</CardTitle>
        <CardDescription>For growing teams shipping weekly.</CardDescription>
        <CardAction>
          <Button size="sm" variant="outline">
            Monthly
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        Includes advanced permissions, analytics, and audit logs.
      </CardContent>
      <CardFooter>
        <Button>Upgrade</Button>
      </CardFooter>
    </Card>
  ),
};
