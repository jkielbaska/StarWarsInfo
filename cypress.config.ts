// import { defineConfig } from "cypress";

// export default defineConfig({
//   e2e: {
//     setupNodeEvents(on, config) {
//       // implement node event listeners here
//     },
//   },
// });

import { loadEnvConfig } from "@next/env";
import { defineConfig } from "cypress";

const { combinedEnv } = loadEnvConfig(process.cwd());
export default defineConfig({
  env: combinedEnv,
  e2e: {
    baseUrl: "http://localhost:3000",
    retries: {
      runMode: 3,
    },
    viewportHeight: 1080,
    viewportWidth: 1920,
    defaultCommandTimeout: 20000,
    video: false,
    screenshotOnRunFailure: false,
  },
});