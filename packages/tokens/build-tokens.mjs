import StyleDictionary from "style-dictionary";
import { registerTransforms } from "@tokens-studio/sd-transforms";
import glob from "fast-glob";

registerTransforms(StyleDictionary, {});

const sd = new StyleDictionary({
  source: glob.sync([
    "src/**/*.json",
    "!src/lib/*.json",
    "!src/lib/$theme.json",
    "!src/lib/$metadata.json",
  ]),
  platforms: {
    css: {
      prefix: "aurora",
      buildPath: "src/lib/",
      transformGroup: "tokens-studio",
      files: [
        {
          destination: "tokens.css",
          format: "css/variables",
        },
      ],
      options: {
        showFileHeader: false,
      },
    },
    js: {
      prefix: "aurora",
      transformGroup: "tokens-studio",
      buildPath: "src/lib/",
      files: [
        {
          destination: "tokens.js",
          format: "javascript/es6",
          name: "tokens",
        },
      ],
      options: {
        showFileHeader: false,
      },
    },
    json: {
      buildPath: "src/lib/",
      prefix: "aurora",
      transformGroup: "tokens-studio",
      files: [
        {
          destination: "tokens.nested.json",
          format: "json/nested",
        },
        {
          destination: "tokens.asset.json",
          format: "json/asset",
        },
        {
          destination: "tokens.flat.json",
          format: "json/flat",
        },
        {
          destination: "tokens.json",
          format: "json",
        },
      ],
    },
    scss: {
      buildPath: "src/lib/",
      prefix: "aurora",
      transformGroup: "tokens-studio",
      options: {
        showFileHeader: false,
        outputReferences: true,
        themeable: true,
      },
      files: [
        {
          destination: "tokens.flat.scss",
          format: "scss/map-flat",
        },
        {
          destination: "tokens.deep.scss",
          format: "scss/map-deep",
        },
        {
          destination: "tokens.scss",
          format: "scss/variables",
        },
        {
          destination: "tokens.icons.scss",
          format: "scss/icons",
        },
      ],
    },
  },
});

async function run() {
  await sd.buildAllPlatforms();
}

run();
