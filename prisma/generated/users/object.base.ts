import { builder } from "../../builder";
import * as Inputs from "../inputs";
import {
  defineFieldObject,
  definePrismaObject,
  defineRelationFunction,
  defineRelationObject,
} from "../utils";

export const usersObject = definePrismaObject("users", {
  description: `This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.
This model contains an expression index which requires additional setup for migrations. Visit https://pris.ly/d/expression-indexes for more info.`,
  findUnique: ({ id }) => ({ id }),
  fields: (t) => ({
    id: t.field(usersIdFieldObject),
    hyper_profile: t.relation("hyper_profile", usersHyper_profileFieldObject),
  }),
});

export const usersIdFieldObject = defineFieldObject("users", {
  type: "ID",
  description: undefined,
  nullable: false,
  resolve: (parent) => String(parent.id),
});

export const usersHyper_profileFieldObject = defineRelationObject(
  "users",
  "hyper_profile",
  {
    description: undefined,
    nullable: true,
    args: undefined,
    query: undefined,
  },
);
