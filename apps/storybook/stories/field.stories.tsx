import type { Meta, StoryObj } from "@storybook/react-vite";
import { Checkbox } from "@workspace/ui/components/ui/checkbox";
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldTitle,
} from "@workspace/ui/components/ui/field";
import { Input } from "@workspace/ui/components/ui/input";

const meta = {
  title: "ui/Field",
  component: Field,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Field>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <FieldGroup className="w-[460px]">
      <Field>
        <FieldLabel htmlFor="email">Email</FieldLabel>
        <FieldContent>
          <Input id="email" placeholder="name@example.com" type="email" />
          <FieldDescription>We will never share your email.</FieldDescription>
        </FieldContent>
      </Field>
      <Field orientation="horizontal">
        <Checkbox id="updates" />
        <FieldContent>
          <FieldTitle>Product updates</FieldTitle>
          <FieldDescription>Receive release notes by email.</FieldDescription>
        </FieldContent>
      </Field>
    </FieldGroup>
  ),
};

export const WithError: Story = {
  render: () => (
    <Field className="w-[460px]">
      <FieldLabel htmlFor="username">Username</FieldLabel>
      <FieldContent>
        <Input aria-invalid defaultValue="taken-name" id="username" />
        <FieldError>That username is already taken.</FieldError>
      </FieldContent>
    </Field>
  ),
};
