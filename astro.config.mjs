import { defineConfig } from "astro/config";
import partytown from "@astrojs/partytown";
import yaml from "@rollup/plugin-yaml";
import icon from "astro-icon";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://lonelyteapot.github.io/",
  vite: {
    plugins: [yaml()],
  },
  integrations: [
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    }),
    icon({
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
    tailwind(),
  ],
});
