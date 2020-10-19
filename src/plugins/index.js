import Vue from "vue";
import GlobalComponents from "./global-components";

const allPlugins = [GlobalComponents];
export default () => {
  allPlugins.forEach((plugin) => plugin(Vue));
};
