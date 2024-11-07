import type PrismaTypes from "@pothos/plugin-prisma/generated";
import SchemaBuilder from "@pothos/core";
import PrismaPlugin from "@pothos/plugin-prisma";
import { Scalars } from "prisma-generator-pothos-codegen";

import { db } from "~/server/db";
import { Prisma } from ".prisma/client";

export const builder = new SchemaBuilder<{
  PrismaTypes: PrismaTypes;
  Scalars: Scalars<
    Prisma.Decimal,
    Prisma.InputJsonValue | null,
    Prisma.InputJsonValue
  >;
}>({
  plugins: [PrismaPlugin],
  prisma: {
    client: db,
    exposeDescriptions: true,
    filterConnectionTotalCount: true,
    onUnusedQuery: process.env.NODE_ENV === "production" ? null : "warn",
  },
});
