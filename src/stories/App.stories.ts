import type { Meta, StoryObj } from "@storybook/react";
import App from "../components/Data";

const meta: Meta<typeof App> = {
  title: "App",
  component: App,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    items: [
      {
        count: 5,
        name: "elo",
      },
    ],
  },
};

export default meta;
type Story = StoryObj<typeof App>;

export const Default: Story = {
  args: {},
};
