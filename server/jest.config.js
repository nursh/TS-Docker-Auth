const { defaults: tsjPreset } = require('ts-jest/presets');
const path = require('path');


module.exports = {
  preset: '@shelf/jest-mongodb',
  transform: {
    ...tsjPreset.transform
  },
  coverageDirectory: path.join(__dirname, '../shared'),
  collectCoverageFrom: [
    '**/src/**/*.ts',
    '!**/src/types/**',
    '!**/src/utils/**',
    '!**/src/db/**'
  ]
};
