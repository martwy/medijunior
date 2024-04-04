import type { Meta, StoryObj } from "@storybook/react";
import Data from "../components/Data";

const meta: Meta<typeof Data> = {
  title: "Data",
  component: Data,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Data>;

export const Default: Story = {
  args: {
    items: [
      {
        count: 1615214,
        name: "c#",
      },
      {
        count: 1464528,
        name: "php",
      },
      {
        count: 1417306,
        name: "android",
      },
    ],
  },
};
