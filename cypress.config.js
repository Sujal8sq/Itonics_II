const { defineConfig } = require("cypress");
require('dotenv').config();  // Load the .env file

module.exports = defineConfig({

  e2e: {
    setupNodeEvents(on, config) {
    },
    env: {
      ...process.env
    },
    baseUrl: "https://bookcart.azurewebsites.net/",
    chromeWebSecurity: false,
  },
  video: false,
});
