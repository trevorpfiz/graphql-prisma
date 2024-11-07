/** @type {import('prisma-generator-pothos-codegen').Config} */
module.exports = {
  inputs: {
    outputFilePath: "./graphql/__generated__/inputs.ts",
  },
  crud: {
    outputDir: "./graphql/__generated__/",
    inputsImporter: `import * as Inputs from '~/graphql/__generated__/inputs';`,
    resolverImports: `import { db } from "~/server/db";`,
    prismaCaller: "db",
  },
  global: {
    builderLocation: "./builder",
  },
};
