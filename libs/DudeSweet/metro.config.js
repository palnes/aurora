const path = require('path');
const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 */
const projectRoot = path.resolve(__dirname, '../..');
const monorepoRoot = __dirname;

const defaultConfig = getDefaultConfig(monorepoRoot);

const {
  resolver: { sourceExts, assetExts },
} = defaultConfig;

/*
 * @type {import('metro-config').MetroConfig}
 */
const config = {
  watchFolders: [projectRoot],
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
    babelTransformerPath: require.resolve('react-native-svg-transformer'),
  },
  resolver: {
    resolver: {
      assetExts: assetExts.filter(ext => ext !== 'svg'),
      sourceExts: [...sourceExts, 'svg'],

      nodeModulesPaths: [
        path.resolve(monorepoRoot, 'node_modules'),
        path.resolve(projectRoot, 'node_modules'),
      ],
    },
  },
};

module.exports = mergeConfig(defaultConfig, config);
