/** @type {import('jest').Config} */
export default {
    testEnvironment: "node",
    moduleNameMapper: {
        "^(\\.{1,2}/.*)\\.js$": "$1"
    }
};
