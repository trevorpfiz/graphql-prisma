import * as Inputs from '~/graphql/__generated__/inputs';
import { builder } from '../../../builder';
import {
  definePrismaObject,
  defineFieldObject,
  defineRelationFunction,
  defineRelationObject,
} from '../utils';

export const hyper_reportObject = definePrismaObject('hyper_report', {
  description: undefined,
  findUnique: ({ id }) => ({ id }),
  fields: (t) => ({
    id: t.field(hyper_reportIdFieldObject),
    title: t.field(hyper_reportTitleFieldObject),
    content: t.field(hyper_reportContentFieldObject),
    profile_id: t.field(hyper_reportProfile_idFieldObject),
    created_at: t.field(hyper_reportCreated_atFieldObject),
    updatedAt: t.field(hyper_reportUpdatedAtFieldObject),
    hyper_profile: t.relation('hyper_profile', hyper_reportHyper_profileFieldObject),
  }),
});

export const hyper_reportIdFieldObject = defineFieldObject('hyper_report', {
  type: "ID",
  description: undefined,
  nullable: false,
  resolve: (parent) => String(parent.id),
});

export const hyper_reportTitleFieldObject = defineFieldObject('hyper_report', {
  type: "String",
  description: undefined,
  nullable: false,
  resolve: (parent) => parent.title,
});

export const hyper_reportContentFieldObject = defineFieldObject('hyper_report', {
  type: "String",
  description: undefined,
  nullable: true,
  resolve: (parent) => parent.content,
});

export const hyper_reportProfile_idFieldObject = defineFieldObject('hyper_report', {
  type: "String",
  description: undefined,
  nullable: false,
  resolve: (parent) => parent.profile_id,
});

export const hyper_reportCreated_atFieldObject = defineFieldObject('hyper_report', {
  type: Inputs.DateTime,
  description: undefined,
  nullable: false,
  resolve: (parent) => parent.created_at,
});

export const hyper_reportUpdatedAtFieldObject = defineFieldObject('hyper_report', {
  type: Inputs.DateTime,
  description: undefined,
  nullable: true,
  resolve: (parent) => parent.updatedAt,
});

export const hyper_reportHyper_profileFieldObject = defineRelationObject('hyper_report', 'hyper_profile', {
  description: undefined,
  nullable: false,
  args: undefined,
  query: undefined,
});
