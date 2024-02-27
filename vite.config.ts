import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@locales": path.resolve(__dirname, "./src/locales"),
      "@state": path.resolve(__dirname, "./src/state"),
      "@theme": path.resolve(__dirname, "./src/styles/theme"),
      "@styles": path.resolve(__dirname, "./src/styles"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@hooks": path.resolve(__dirname, "./src/hooks"),
      "@provider": path.resolve(__dirname, "./src/provider"),
      "@modules": path.resolve(__dirname, "./src/modules"),
      "@layouts": path.resolve(__dirname, "./src/layouts"),
    },
  },
  plugins: [react()],
});
