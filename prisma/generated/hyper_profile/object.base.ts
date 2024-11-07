import { builder } from "../../builder";
import * as Inputs from "../inputs";
import {
  defineFieldObject,
  definePrismaObject,
  defineRelationFunction,
  defineRelationObject,
} from "../utils";

export const hyper_profileObject = definePrismaObject("hyper_profile", {
  description: undefined,
  findUnique: ({ id }) => ({ id }),
  fields: (t) => ({
    id: t.field(hyper_profileIdFieldObject),
    name: t.field(hyper_profileNameFieldObject),
    image: t.field(hyper_profileImageFieldObject),
    email: t.field(hyper_profileEmailFieldObject),
    last_synced_time: t.field(hyper_profileLast_synced_timeFieldObject),
    diabetes_status: t.field(hyper_profileDiabetes_statusFieldObject),
    glucose_range_type: t.field(hyper_profileGlucose_range_typeFieldObject),
    hyper_activity: t.relation(
      "hyper_activity",
      hyper_profileHyper_activityFieldObject(t),
    ),
    hyper_cgm_data: t.relation(
      "hyper_cgm_data",
      hyper_profileHyper_cgm_dataFieldObject(t),
    ),
    hyper_daily_recap: t.relation(
      "hyper_daily_recap",
      hyper_profileHyper_daily_recapFieldObject(t),
    ),
    hyper_meal: t.relation("hyper_meal", hyper_profileHyper_mealFieldObject(t)),
    users: t.relation("users", hyper_profileUsersFieldObject),
    hyper_report: t.relation(
      "hyper_report",
      hyper_profileHyper_reportFieldObject(t),
    ),
  }),
});

export const hyper_profileIdFieldObject = defineFieldObject("hyper_profile", {
  type: "ID",
  description: undefined,
  nullable: false,
  resolve: (parent) => String(parent.id),
});

export const hyper_profileNameFieldObject = defineFieldObject("hyper_profile", {
  type: "String",
  description: undefined,
  nullable: false,
  resolve: (parent) => parent.name,
});

export const hyper_profileImageFieldObject = defineFieldObject(
  "hyper_profile",
  {
    type: "String",
    description: undefined,
    nullable: true,
    resolve: (parent) => parent.image,
  },
);

export const hyper_profileEmailFieldObject = defineFieldObject(
  "hyper_profile",
  {
    type: "String",
    description: undefined,
    nullable: true,
    resolve: (parent) => parent.email,
  },
);

export const hyper_profileLast_synced_timeFieldObject = defineFieldObject(
  "hyper_profile",
  {
    type: Inputs.DateTime,
    description: undefined,
    nullable: true,
    resolve: (parent) => parent.last_synced_time,
  },
);

export const hyper_profileDiabetes_statusFieldObject = defineFieldObject(
  "hyper_profile",
  {
    type: Inputs.diabetes_status,
    description: undefined,
    nullable: false,
    resolve: (parent) => parent.diabetes_status,
  },
);

export const hyper_profileGlucose_range_typeFieldObject = defineFieldObject(
  "hyper_profile",
  {
    type: Inputs.glucose_range_type,
    description: undefined,
    nullable: false,
    resolve: (parent) => parent.glucose_range_type,
  },
);

export const hyper_profileHyper_activityFieldArgs = builder.args((t) => ({
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

export const hyper_profileHyper_activityFieldObject = defineRelationFunction(
  "hyper_profile",
  (t) =>
    defineRelationObject("hyper_profile", "hyper_activity", {
      description: undefined,
      nullable: false,
      args: hyper_profileHyper_activityFieldArgs,
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

export const hyper_profileHyper_cgm_dataFieldArgs = builder.args((t) => ({
  where: t.field({ type: Inputs.hyper_cgm_dataWhereInput, required: false }),
  orderBy: t.field({
    type: [Inputs.hyper_cgm_dataOrderByWithRelationInput],
    required: false,
  }),
  cursor: t.field({
    type: Inputs.hyper_cgm_dataWhereUniqueInput,
    required: false,
  }),
  take: t.field({ type: "Int", required: false }),
  skip: t.field({ type: "Int", required: false }),
  distinct: t.field({
    type: [Inputs.Hyper_cgm_dataScalarFieldEnum],
    required: false,
  }),
}));

export const hyper_profileHyper_cgm_dataFieldObject = defineRelationFunction(
  "hyper_profile",
  (t) =>
    defineRelationObject("hyper_profile", "hyper_cgm_data", {
      description: undefined,
      nullable: false,
      args: hyper_profileHyper_cgm_dataFieldArgs,
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

export const hyper_profileHyper_daily_recapFieldArgs = builder.args((t) => ({
  where: t.field({ type: Inputs.hyper_daily_recapWhereInput, required: false }),
  orderBy: t.field({
    type: [Inputs.hyper_daily_recapOrderByWithRelationInput],
    required: false,
  }),
  cursor: t.field({
    type: Inputs.hyper_daily_recapWhereUniqueInput,
    required: false,
  }),
  take: t.field({ type: "Int", required: false }),
  skip: t.field({ type: "Int", required: false }),
  distinct: t.field({
    type: [Inputs.Hyper_daily_recapScalarFieldEnum],
    required: false,
  }),
}));

export const hyper_profileHyper_daily_recapFieldObject = defineRelationFunction(
  "hyper_profile",
  (t) =>
    defineRelationObject("hyper_profile", "hyper_daily_recap", {
      description: undefined,
      nullable: false,
      args: hyper_profileHyper_daily_recapFieldArgs,
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

export const hyper_profileHyper_mealFieldArgs = builder.args((t) => ({
  where: t.field({ type: Inputs.hyper_mealWhereInput, required: false }),
  orderBy: t.field({
    type: [Inputs.hyper_mealOrderByWithRelationInput],
    required: false,
  }),
  cursor: t.field({ type: Inputs.hyper_mealWhereUniqueInput, required: false }),
  take: t.field({ type: "Int", required: false }),
  skip: t.field({ type: "Int", required: false }),
  distinct: t.field({
    type: [Inputs.Hyper_mealScalarFieldEnum],
    required: false,
  }),
}));

export const hyper_profileHyper_mealFieldObject = defineRelationFunction(
  "hyper_profile",
  (t) =>
    defineRelationObject("hyper_profile", "hyper_meal", {
      description: undefined,
      nullable: false,
      args: hyper_profileHyper_mealFieldArgs,
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

export const hyper_profileUsersFieldObject = defineRelationObject(
  "hyper_profile",
  "users",
  {
    description: undefined,
    nullable: false,
    args: undefined,
    query: undefined,
  },
);

export const hyper_profileHyper_reportFieldArgs = builder.args((t) => ({
  where: t.field({ type: Inputs.hyper_reportWhereInput, required: false }),
  orderBy: t.field({
    type: [Inputs.hyper_reportOrderByWithRelationInput],
    required: false,
  }),
  cursor: t.field({
    type: Inputs.hyper_reportWhereUniqueInput,
    required: false,
  }),
  take: t.field({ type: "Int", required: false }),
  skip: t.field({ type: "Int", required: false }),
  distinct: t.field({
    type: [Inputs.Hyper_reportScalarFieldEnum],
    required: false,
  }),
}));

export const hyper_profileHyper_reportFieldObject = defineRelationFunction(
  "hyper_profile",
  (t) =>
    defineRelationObject("hyper_profile", "hyper_report", {
      description: undefined,
      nullable: false,
      args: hyper_profileHyper_reportFieldArgs,
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
