import url from "node:url";
import path from "node:path";
import assert from "node:assert";

import { config as baseConfig } from "./config.js";
const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const baseConfig = path.resolve(__dirname, "helpers", "config.js");

import launch from "./helper/launcher.js";

async function runTests(tests) {
  /**
   * Usage example: `npm run test:smoke -- customService`
   */
  const testFilter = process.argv[2];

  if (process.env.CI || testFilter) {
    const testsFiltered = testFilter ? tests.filter((test) => test.name === testFilter) : tests;

    if (testsFiltered.length === 0) {
      throw new Error(
        `No test was selected! Smoke test "${testFilter}" ` +
          `picked but only ${tests.map((test) => test.name).join(", ")} available`
      );
    }

  
    for (const test of testsFiltered) {
      await test();
    }
  } else {

    await Promise.all(
      tests.map((test) =>
        test().catch((err) => {
          throw new Error(`Smoke test failed with name ${test.name}, ${err.stack}`);
        })
      )
    );
  }
}

const mochaAsyncTestrunner = async () => {
  const { skippedSpecs } = await launch(
    "mochaAsyncTestrunner",
    path.resolve(__dirname, "helpers", "command.hook.config.js"),
    {
      spec: ["../test/specs/*.ts"],
    }
  );
  assert.strictEqual(skippedSpecs, 0);
};

(async () => {
  const smokeTests = [mochaAsyncTestrunner];

  console.log("\nRunning smoke tests...\n");
  await runTests(smokeTests);

  console.log("\nAll smoke tests passed!\n");
  process.exit(0);
})().catch((e) => {
  console.log(e.stack);

  process.exit(1);
});
