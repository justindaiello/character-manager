module.exports = {
  setupFilesAfterEnv: ["./jest.setup.js"],
  moduleNameMapper: {
    "^@components(.*)$": "<rootDir>/src/components$1",
    "^@modules(.*)$": "<rootDir>/src/modules$1",
    "^@utils(.*)$": "<rootDir>/src/utils$1",
    "^@pages(.*)$": "<rootDir>/pages$1",
    "^@styles(.*)$": "<rootDir>/styles$1",
  }
};