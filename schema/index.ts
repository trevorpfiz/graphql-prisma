import {
  generateAllCrud,
  // generateAllMutations,
  // generateAllObjects,
  // generateAllQueries,
  // generateAllResolvers,
} from "~/graphql/__generated__/autocrud";
import { builder } from "./builder";

generateAllCrud(); // from generated

builder.queryType({});
builder.mutationType({});

export const schema = builder.toSchema({});
