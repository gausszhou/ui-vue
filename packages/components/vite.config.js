import { dirname, resolve } from "node:path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: resolve(import.meta.dirname, "index.ts"),
      name: "GuiVue",
      fileName: "index"
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue",
        },
        exports: "named",
        inlineDynamicImports: true
      },
    },
  },
});
