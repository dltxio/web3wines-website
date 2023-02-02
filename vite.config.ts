import { defineConfig, loadEnv, UserConfig } from "vite";
import react from "@vitejs/plugin-react";
import { ViteFaviconsPlugin } from "vite-plugin-favicon";

// https://vitejs.dev/config/
export default ({ mode }: UserConfig) => {
  process.env = { ...process.env, ...loadEnv(mode!, process.cwd()) };

  return defineConfig({
    plugins: [
      react(),
      ViteFaviconsPlugin({
        logo: "./src/images/WineGlass.png",
        favicons: {
          appName: "Web3 Wines",
          appDescription: "The official website for Web3 Wines",
          developerName: "Brett van Niekerk",
          developerURL: "https://github.com/brettvniekerk"
        }
      })
    ],
    define: {
      "process.env": process.env
    }
  });
};
