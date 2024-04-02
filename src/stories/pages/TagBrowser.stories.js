import React from "react";
import { Provider } from "react-redux";
import store from "../../store";

import TagBrowser from "../../pages/TagBrowser/TagBrowser";

export default {
  component: TagBrowser,
  title: "Pages/TagBrowser",
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <Provider store={store}>
        <div style={{ padding: "20px" }}>
          <Story />
        </div>
      </Provider>
    ),
  ],
};

const Template = (args) => <TagBrowser {...args} />;

export const Default = Template.bind({});
Default.args = {};
