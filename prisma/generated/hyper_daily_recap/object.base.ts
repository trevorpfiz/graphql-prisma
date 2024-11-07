import { builder } from "../../builder";
import * as Inputs from "../inputs";
import {
  defineFieldObject,
  definePrismaObject,
  defineRelationFunction,
  defineRelationObject,
} from "../utils";

export const hyper_daily_recapObject = definePrismaObject("hyper_daily_recap", {
  description: undefined,
  findUnique: ({ id }) => ({ id }),
  fields: (t) => ({
    id: t.field(hyper_daily_recapIdFieldObject),
    date: t.field(hyper_daily_recapDateFieldObject),
    average_glucose: t.field(hyper_daily_recapAverage_glucoseFieldObject),
    minimum_glucose: t.field(hyper_daily_recapMinimum_glucoseFieldObject),
    maximum_glucose: t.field(hyper_daily_recapMaximum_glucoseFieldObject),
    glucose_variability: t.field(
      hyper_daily_recapGlucose_variabilityFieldObject,
    ),
    time_in_ranges: t.field(hyper_daily_recapTime_in_rangesFieldObject),
    total_readings: t.field(hyper_daily_recapTotal_readingsFieldObject),
    profile_id: t.field(hyper_daily_recapProfile_idFieldObject),
    created_at: t.field(hyper_daily_recapCreated_atFieldObject),
    updatedAt: t.field(hyper_daily_recapUpdatedAtFieldObject),
    timezone: t.field(hyper_daily_recapTimezoneFieldObject),
    hyper_profile: t.relation(
      "hyper_profile",
      hyper_daily_recapHyper_profileFieldObject,
    ),
  }),
});

export const hyper_daily_recapIdFieldObject = defineFieldObject(
  "hyper_daily_recap",
  {
    type: "ID",
    description: undefined,
    nullable: false,
    resolve: (parent) => String(parent.id),
  },
);

export const hyper_daily_recapDateFieldObject = defineFieldObject(
  "hyper_daily_recap",
  {
    type: Inputs.DateTime,
    description: undefined,
    nullable: false,
    resolve: (parent) => parent.date,
  },
);

export const hyper_daily_recapAverage_glucoseFieldObject = defineFieldObject(
  "hyper_daily_recap",
  {
    type: "Int",
    description: undefined,
    nullable: true,
    resolve: (parent) => parent.average_glucose,
  },
);

export const hyper_daily_recapMinimum_glucoseFieldObject = defineFieldObject(
  "hyper_daily_recap",
  {
    type: "Int",
    description: undefined,
    nullable: true,
    resolve: (parent) => parent.minimum_glucose,
  },
);

export const hyper_daily_recapMaximum_glucoseFieldObject = defineFieldObject(
  "hyper_daily_recap",
  {
    type: "Int",
    description: undefined,
    nullable: true,
    resolve: (parent) => parent.maximum_glucose,
  },
);

export const hyper_daily_recapGlucose_variabilityFieldObject =
  defineFieldObject("hyper_daily_recap", {
    type: Inputs.Decimal,
    description: undefined,
    nullable: true,
    resolve: (parent) => parent.glucose_variability,
  });

export const hyper_daily_recapTime_in_rangesFieldObject = defineFieldObject(
  "hyper_daily_recap",
  {
    type: Inputs.Json,
    description: undefined,
    nullable: true,
    resolve: (parent) => parent.time_in_ranges,
  },
);

export const hyper_daily_recapTotal_readingsFieldObject = defineFieldObject(
  "hyper_daily_recap",
  {
    type: "Int",
    description: undefined,
    nullable: true,
    resolve: (parent) => parent.total_readings,
  },
);

export const hyper_daily_recapProfile_idFieldObject = defineFieldObject(
  "hyper_daily_recap",
  {
    type: "String",
    description: undefined,
    nullable: false,
    resolve: (parent) => parent.profile_id,
  },
);

export const hyper_daily_recapCreated_atFieldObject = defineFieldObject(
  "hyper_daily_recap",
  {
    type: Inputs.DateTime,
    description: undefined,
    nullable: false,
    resolve: (parent) => parent.created_at,
  },
);

export const hyper_daily_recapUpdatedAtFieldObject = defineFieldObject(
  "hyper_daily_recap",
  {
    type: Inputs.DateTime,
    description: undefined,
    nullable: true,
    resolve: (parent) => parent.updatedAt,
  },
);

export const hyper_daily_recapTimezoneFieldObject = defineFieldObject(
  "hyper_daily_recap",
  {
    type: "String",
    description: undefined,
    nullable: false,
    resolve: (parent) => parent.timezone,
  },
);

export const hyper_daily_recapHyper_profileFieldObject = defineRelationObject(
  "hyper_daily_recap",
  "hyper_profile",
  {
    description: undefined,
    nullable: false,
    args: undefined,
    query: undefined,
  },
);
