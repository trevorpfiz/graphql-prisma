import { builder } from "../../builder";
import * as Inputs from "../inputs";
import {
  defineFieldObject,
  definePrismaObject,
  defineRelationFunction,
  defineRelationObject,
} from "../utils";

export const hyper_activityObject = definePrismaObject("hyper_activity", {
  description: undefined,
  findUnique: ({ id }) => ({ id }),
  fields: (t) => ({
    id: t.field(hyper_activityIdFieldObject),
    activity_type_id: t.field(hyper_activityActivity_type_idFieldObject),
    profile_id: t.field(hyper_activityProfile_idFieldObject),
    created_at: t.field(hyper_activityCreated_atFieldObject),
    updatedAt: t.field(hyper_activityUpdatedAtFieldObject),
    hyper_activity_type: t.relation(
      "hyper_activity_type",
      hyper_activityHyper_activity_typeFieldObject,
    ),
    hyper_profile: t.relation(
      "hyper_profile",
      hyper_activityHyper_profileFieldObject,
    ),
  }),
});

export const hyper_activityIdFieldObject = defineFieldObject("hyper_activity", {
  type: "ID",
  description: undefined,
  nullable: false,
  resolve: (parent) => String(parent.id),
});

export const hyper_activityActivity_type_idFieldObject = defineFieldObject(
  "hyper_activity",
  {
    type: "String",
    description: undefined,
    nullable: false,
    resolve: (parent) => parent.activity_type_id,
  },
);

export const hyper_activityProfile_idFieldObject = defineFieldObject(
  "hyper_activity",
  {
    type: "String",
    description: undefined,
    nullable: false,
    resolve: (parent) => parent.profile_id,
  },
);

export const hyper_activityCreated_atFieldObject = defineFieldObject(
  "hyper_activity",
  {
    type: Inputs.DateTime,
    description: undefined,
    nullable: false,
    resolve: (parent) => parent.created_at,
  },
);

export const hyper_activityUpdatedAtFieldObject = defineFieldObject(
  "hyper_activity",
  {
    type: Inputs.DateTime,
    description: undefined,
    nullable: true,
    resolve: (parent) => parent.updatedAt,
  },
);

export const hyper_activityHyper_activity_typeFieldObject =
  defineRelationObject("hyper_activity", "hyper_activity_type", {
    description: undefined,
    nullable: false,
    args: undefined,
    query: undefined,
  });

export const hyper_activityHyper_profileFieldObject = defineRelationObject(
  "hyper_activity",
  "hyper_profile",
  {
    description: undefined,
    nullable: false,
    args: undefined,
    query: undefined,
  },
);
