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
      // Individual icons are specified to speed up build times
      include: {
        bxl: ["flask"],
        devicon: ["androidstudio"],
        ic: ["baseline-telegram"],
        logos: ["*"],
        "material-symbols": ["*"],
        mdi: ["github"],
        "skill-icons": ["typescript"],
      },
    }),
  ],
});
