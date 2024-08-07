import { defineConfig } from "@umijs/max";
import routes from "./src/routes";

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: "@umijs/max",
  },
  routes: routes,
  npmClient: "pnpm",
  base: "/ci-test/",
  publicPath: "/ci-test/",
  exportStatic: {},
  tailwindcss: {},
});
