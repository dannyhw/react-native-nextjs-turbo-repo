import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import { Button } from "./button";

export default {
  title: "components/button",
  component: Button,
} as ComponentMeta<typeof Button>;

export const Basic: ComponentStoryObj<typeof Button> = {
  args: {
    text: "Boop",
  },
};
