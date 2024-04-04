import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import OrderSelect from "../components/OrderSelect";
import { Order } from "../utils/types";

const meta: Meta<typeof OrderSelect> = {
  title: "OrderSelect",
  component: OrderSelect,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    setOrder: fn(),
  },
};

export default meta;
type Story = StoryObj<typeof OrderSelect>;

export const Asc: Story = {
  args: {
    order: Order.asc,
  },
};

export const Desc: Story = {
  args: {
    order: Order.desc,
  },
};
