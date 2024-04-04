import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import SortSelect from "../components/SortSelect";
import { Sort } from "../utils/types";

const meta: Meta<typeof SortSelect> = {
  title: "SortSelect",
  component: SortSelect,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    setSort: fn(),
  },
};

export default meta;
type Story = StoryObj<typeof SortSelect>;

export const Popular: Story = {
  args: {
    sort: Sort.popular,
  },
};

export const Activity: Story = {
  args: {
    sort: Sort.activity,
  },
};

export const Name: Story = {
  args: {
    sort: Sort.name,
  },
};
