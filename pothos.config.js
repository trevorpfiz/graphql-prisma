/** @type {import('prisma-generator-pothos-codegen').Config} */
module.exports = {
  inputs: {
    prismaImporter: `import { Prisma } from '@prisma/client';`,
    outputFilePath: "./graphql/__generated__/inputs.ts",
    simple: true,
  },
  crud: {
    outputDir: "./graphql/__generated__/",
    excludeResolversContain: [],
    inputsImporter: `import * as Inputs from '~/graphql/__generated__/inputs';`,
    deleteOutputDirBeforeGenerate: true,
    exportEverythingInObjectsDotTs: false,
    prismaImporter: `import { Prisma } from '@prisma/client';`,
    resolverImports: `\nimport { db } from "~/server/db";`,
    prismaCaller: "db",
  },
  global: {
    builderLocation: "./schema/builder",
  },
};
