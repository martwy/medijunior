import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import TextForm from "../components/TextForm";

const meta: Meta<typeof TextForm> = {
  title: "TextForm",
  component: TextForm,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    setPage: fn(),
  },
};

export default meta;
type Story = StoryObj<typeof TextForm>;

export const Page: Story = {
  args: {
    page: 1,
    label: "Page",
  },
};

export const PageSize: Story = {
  args: {
    page: 1,
    label: "Pagesize",
  },
};
