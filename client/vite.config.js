import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5175,
    proxy: {
      "/query": { target: "http://backend:3002", changeOrigin: true },
      "/health": { target: "http://backend:3002", changeOrigin: true },
    },
  },
});
