module.exports = {
  preset: 'react-native',
  transformIgnorePatterns: [
    'node_modules/(?!(?:.pnpm/)?((jest-)?react-native|@react-native(-community)?|react-native-svg))',
  ],
  cacheDirectory: './node_modules/.cache/jest',
  collectCoverage: true,
};
