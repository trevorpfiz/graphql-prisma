import { builder } from "../../builder";
import * as Inputs from "../inputs";
import {
  defineFieldObject,
  definePrismaObject,
  defineRelationFunction,
  defineRelationObject,
} from "../utils";

export const hyper_activity_typeObject = definePrismaObject(
  "hyper_activity_type",
  {
    description: undefined,
    findUnique: ({ id }) => ({ id }),
    fields: (t) => ({
      id: t.field(hyper_activity_typeIdFieldObject),
      name: t.field(hyper_activity_typeNameFieldObject),
      hyper_activity: t.relation(
        "hyper_activity",
        hyper_activity_typeHyper_activityFieldObject(t),
      ),
    }),
  },
);

export const hyper_activity_typeIdFieldObject = defineFieldObject(
  "hyper_activity_type",
  {
    type: "ID",
    description: undefined,
    nullable: false,
    resolve: (parent) => String(parent.id),
  },
);

export const hyper_activity_typeNameFieldObject = defineFieldObject(
  "hyper_activity_type",
  {
    type: "String",
    description: undefined,
    nullable: false,
    resolve: (parent) => parent.name,
  },
);

export const hyper_activity_typeHyper_activityFieldArgs = builder.args((t) => ({
  where: t.field({ type: Inputs.hyper_activityWhereInput, required: false }),
  orderBy: t.field({
    type: [Inputs.hyper_activityOrderByWithRelationInput],
    required: false,
  }),
  cursor: t.field({
    type: Inputs.hyper_activityWhereUniqueInput,
    required: false,
  }),
  take: t.field({ type: "Int", required: false }),
  skip: t.field({ type: "Int", required: false }),
  distinct: t.field({
    type: [Inputs.Hyper_activityScalarFieldEnum],
    required: false,
  }),
}));

export const hyper_activity_typeHyper_activityFieldObject =
  defineRelationFunction("hyper_activity_type", (t) =>
    defineRelationObject("hyper_activity_type", "hyper_activity", {
      description: undefined,
      nullable: false,
      args: hyper_activity_typeHyper_activityFieldArgs,
      query: (args) => ({
        where: args.where || undefined,
        cursor: args.cursor || undefined,
        take: args.take || undefined,
        distinct: args.distinct || undefined,
        skip: args.skip || undefined,
        orderBy: args.orderBy || undefined,
      }),
    }),
  );
