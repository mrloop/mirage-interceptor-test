// External API, Create React App-like environment.
let browserEnvironment = {
  displayName: "browserEnvironment",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["jest-extended"],
  testMatch: [
    "**/__tests__/browser-only/main-test.js",
  ],
  transform: {
    "^.+\\.js$": "babel-jest",
  },
  transformIgnorePatterns: ['/node_modules/(?!(mirage-pretender|mirage-msw)/)'],
};

module.exports = {
  projects: [
    browserEnvironment,
  ],
};
