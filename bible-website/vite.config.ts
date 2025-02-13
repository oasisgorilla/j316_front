import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 4173,
    host: "0.0.0.0",
    allowedHosts: ['oasisgorilla.ddns.net'],
  },
  plugins: [react()],
});
