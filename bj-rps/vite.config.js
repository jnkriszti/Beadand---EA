import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwind from "@";

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwind(), react()],
});
