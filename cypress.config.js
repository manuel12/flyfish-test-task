const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const {
  addCucumberPreprocessorPlugin,
} = require("@badeball/cypress-cucumber-preprocessor");
const {
  createEsbuildPlugin,
} = require("@badeball/cypress-cucumber-preprocessor/esbuild");

async function setupNodeEvents(on, config) {
  // implement node event listeners here
  await addCucumberPreprocessorPlugin(on, config); // to allow json to be produced
  // To use esBuild for the bundler when preprocessing
  on(
    "file:preprocessor",
    createBundler({
      plugins: [createEsbuildPlugin(config)],
    })
  );
  return config;
}

module.exports = defineConfig({
  e2e: {
    specPattern: ["**/*.feature", "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}"],
    setupNodeEvents,
    screenshotOnRunFailure: false,
  },
});
