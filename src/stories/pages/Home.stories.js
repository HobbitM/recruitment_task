import React from "react";
import Home from "../../pages/Home/Home";

export default {
  component: Home,
  title: "Pages/Home",
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <div style={{ padding: "20px" }}>
        <Story />
      </div>
    ),
  ],
};

const Template = (args) => <Home {...args} />;

export const Default = Template.bind({});
Default.args = {};
