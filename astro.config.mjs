import { defineConfig } from "astro/config";
import PartytownPlugin from "@astrojs/partytown";
import YamlPlugin from "@rollup/plugin-yaml";
import IconPlugin from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://lonelyteapot.github.io/",
  vite: {
    plugins: [YamlPlugin()],
  },
  integrations: [
    PartytownPlugin({
      config: {
        forward: ["dataLayer.push"],
      },
    }),
    IconPlugin({
      include: {
        mdi: ["*"],
        ic: ["*"],
        logos: ["*"],
        "material-symbols": ["*"],
        "simple-icons": ["*"],
        "skill-icons": ["*"],
        "vscode-icons": ["*"],
      },
    }),
  ],
});
