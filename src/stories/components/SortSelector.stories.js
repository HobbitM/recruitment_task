import React from "react";
import SortSelector from "../../components/SortSelector/SortSelector";

export default {
  component: SortSelector,
  title: "Components/SortSelector",
};

const Template = (args) => <SortSelector {...args} />;

export const nameAsc = Template.bind({});
nameAsc.args = {
  sortField: "name",
  sortDirection: "asc",
  onSortChange: () => {},
};

export const nameDesc = Template.bind({});
nameDesc.args = {
  sortField: "name",
  sortDirection: "desc",
  onSortChange: () => {},
};

export const countAsc = Template.bind({});
countAsc.args = {
  sortField: "count",
  sortDirection: "asc",
  onSortChange: () => {},
};

export const countDesc = Template.bind({});
countDesc.args = {
  sortField: "count",
  sortDirection: "desc",
  onSortChange: () => {},
};
