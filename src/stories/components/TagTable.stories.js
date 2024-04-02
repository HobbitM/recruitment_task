import React from "react";
import { Provider } from "react-redux";
import store from "../storybookStore";
import TagTable from "../../components/TagTable/TagTable";

export default {
  component: TagTable,
  title: "Components/TagTable",
};

const Template = (args) => (
  <Provider store={store}>
    <TagTable {...args} />
  </Provider>
);

export const Default = Template.bind({});
Default.args = {
  itemsPerPage: 10,
  currentPage: 1,
  sortField: "name",
  sortDirection: "asc",
};
