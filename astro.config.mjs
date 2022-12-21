import { defineConfig } from "astro/config";
import Yaml from "@rollup/plugin-yaml";

// https://astro.build/config
export default defineConfig({
    vite: {
        plugins: [Yaml()],
    },
});
