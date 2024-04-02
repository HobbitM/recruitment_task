import React from "react";
import SizeSelector from "../../components/SizeSelector/SizeSelector";

export default {
  component: SizeSelector,
  title: "Components/SizeSelector",
};

const Template = (args) => <SizeSelector {...args} />;

export const Small = Template.bind({});
Small.args = {
  itemsPerPage: 10,
  onChange: () => {},
};

export const Medium = Template.bind({});
Medium.args = {
  itemsPerPage: 20,
  onChange: () => {},
};

export const Large = Template.bind({});
Large.args = {
  itemsPerPage: 50,
  onChange: () => {},
};
