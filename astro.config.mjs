import { defineConfig } from "astro/config";
import Yaml from "@rollup/plugin-yaml";

// https://astro.build/config
import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
    site: "https://astronaut.github.io",
    vite: {
        plugins: [Yaml()],
    },
    integrations: [partytown()],
});
