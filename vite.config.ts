import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    plugins: [react()],
    base: mode === "production" ? "/svg-tutorial-in-24/" : "/",
    build: {
      outDir: "docs",
    },
  };
});
