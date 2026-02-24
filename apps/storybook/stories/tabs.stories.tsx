import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@workspace/ui/components/ui/tabs";

const meta = {
  title: "ui/Tabs",
  component: Tabs,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Tabs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    defaultValue: "overview",
  },
  render: (args) => (
    <Tabs className="w-[520px]" {...args}>
      <TabsList>
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="members">Members</TabsTrigger>
        <TabsTrigger value="billing">Billing</TabsTrigger>
      </TabsList>
      <TabsContent value="overview">
        Project summary, activity, and quick status updates.
      </TabsContent>
      <TabsContent value="members">
        Invite teammates and manage team permissions.
      </TabsContent>
      <TabsContent value="billing">
        Update plan details, invoices, and payment methods.
      </TabsContent>
    </Tabs>
  ),
};

export const Vertical: Story = {
  args: {
    defaultValue: "profile",
    orientation: "vertical",
  },
  render: (args) => (
    <Tabs className="h-[220px] w-[520px]" {...args}>
      <TabsList variant="line">
        <TabsTrigger value="profile">Profile</TabsTrigger>
        <TabsTrigger value="security">Security</TabsTrigger>
        <TabsTrigger value="notifications">Notifications</TabsTrigger>
      </TabsList>
      <TabsContent value="profile">
        Change your personal information and avatar.
      </TabsContent>
      <TabsContent value="security">
        Manage passwords, 2FA, and active sessions.
      </TabsContent>
      <TabsContent value="notifications">
        Configure email and in-app notification settings.
      </TabsContent>
    </Tabs>
  ),
};
