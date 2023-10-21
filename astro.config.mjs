import { defineConfig } from "astro/config";
import partytown from "@astrojs/partytown";
import yaml from "@rollup/plugin-yaml";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://lonelyteapot.github.io/",
  vite: {
    plugins: [
      yaml(),
    ],
  },
  integrations: [
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    }),
    icon({
      include: {
        mdi: ["*"],
        ic: ["*"],
        logos: ["*"],
        "material-symbols": ["*"],
        "simple-icons": ["*"],
        "vscode-icons": ["*"],
      },
    }),
  ],
});
