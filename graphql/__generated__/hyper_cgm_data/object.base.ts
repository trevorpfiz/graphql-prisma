import * as Inputs from '~/graphql/__generated__/inputs';
import { builder } from '../../../builder';
import {
  definePrismaObject,
  defineFieldObject,
  defineRelationFunction,
  defineRelationObject,
} from '../utils';

export const hyper_cgm_dataObject = definePrismaObject('hyper_cgm_data', {
  description: undefined,
  findUnique: ({ id }) => ({ id }),
  fields: (t) => ({
    id: t.field(hyper_cgm_dataIdFieldObject),
    dexcom_user_id: t.field(hyper_cgm_dataDexcom_user_idFieldObject),
    record_id: t.field(hyper_cgm_dataRecord_idFieldObject),
    system_time: t.field(hyper_cgm_dataSystem_timeFieldObject),
    display_time: t.field(hyper_cgm_dataDisplay_timeFieldObject),
    glucose_value: t.field(hyper_cgm_dataGlucose_valueFieldObject),
    trend: t.field(hyper_cgm_dataTrendFieldObject),
    trend_rate: t.field(hyper_cgm_dataTrend_rateFieldObject),
    transmitter_id: t.field(hyper_cgm_dataTransmitter_idFieldObject),
    transmitter_generation: t.field(hyper_cgm_dataTransmitter_generationFieldObject),
    display_device: t.field(hyper_cgm_dataDisplay_deviceFieldObject),
    profile_id: t.field(hyper_cgm_dataProfile_idFieldObject),
    created_at: t.field(hyper_cgm_dataCreated_atFieldObject),
    updatedAt: t.field(hyper_cgm_dataUpdatedAtFieldObject),
    transmitter_ticks: t.field(hyper_cgm_dataTransmitter_ticksFieldObject),
    status: t.field(hyper_cgm_dataStatusFieldObject),
    unit: t.field(hyper_cgm_dataUnitFieldObject),
    rate_unit: t.field(hyper_cgm_dataRate_unitFieldObject),
    hyper_profile: t.relation('hyper_profile', hyper_cgm_dataHyper_profileFieldObject),
  }),
});

export const hyper_cgm_dataIdFieldObject = defineFieldObject('hyper_cgm_data', {
  type: "ID",
  description: undefined,
  nullable: false,
  resolve: (parent) => String(parent.id),
});

export const hyper_cgm_dataDexcom_user_idFieldObject = defineFieldObject('hyper_cgm_data', {
  type: "String",
  description: undefined,
  nullable: false,
  resolve: (parent) => parent.dexcom_user_id,
});

export const hyper_cgm_dataRecord_idFieldObject = defineFieldObject('hyper_cgm_data', {
  type: "String",
  description: undefined,
  nullable: false,
  resolve: (parent) => parent.record_id,
});

export const hyper_cgm_dataSystem_timeFieldObject = defineFieldObject('hyper_cgm_data', {
  type: Inputs.DateTime,
  description: undefined,
  nullable: false,
  resolve: (parent) => parent.system_time,
});

export const hyper_cgm_dataDisplay_timeFieldObject = defineFieldObject('hyper_cgm_data', {
  type: Inputs.DateTime,
  description: undefined,
  nullable: false,
  resolve: (parent) => parent.display_time,
});

export const hyper_cgm_dataGlucose_valueFieldObject = defineFieldObject('hyper_cgm_data', {
  type: "Int",
  description: undefined,
  nullable: true,
  resolve: (parent) => parent.glucose_value,
});

export const hyper_cgm_dataTrendFieldObject = defineFieldObject('hyper_cgm_data', {
  type: "String",
  description: undefined,
  nullable: true,
  resolve: (parent) => parent.trend,
});

export const hyper_cgm_dataTrend_rateFieldObject = defineFieldObject('hyper_cgm_data', {
  type: "Float",
  description: undefined,
  nullable: true,
  resolve: (parent) => parent.trend_rate,
});

export const hyper_cgm_dataTransmitter_idFieldObject = defineFieldObject('hyper_cgm_data', {
  type: "String",
  description: undefined,
  nullable: true,
  resolve: (parent) => parent.transmitter_id,
});

export const hyper_cgm_dataTransmitter_generationFieldObject = defineFieldObject('hyper_cgm_data', {
  type: "String",
  description: undefined,
  nullable: false,
  resolve: (parent) => parent.transmitter_generation,
});

export const hyper_cgm_dataDisplay_deviceFieldObject = defineFieldObject('hyper_cgm_data', {
  type: "String",
  description: undefined,
  nullable: false,
  resolve: (parent) => parent.display_device,
});

export const hyper_cgm_dataProfile_idFieldObject = defineFieldObject('hyper_cgm_data', {
  type: "String",
  description: undefined,
  nullable: false,
  resolve: (parent) => parent.profile_id,
});

export const hyper_cgm_dataCreated_atFieldObject = defineFieldObject('hyper_cgm_data', {
  type: Inputs.DateTime,
  description: undefined,
  nullable: false,
  resolve: (parent) => parent.created_at,
});

export const hyper_cgm_dataUpdatedAtFieldObject = defineFieldObject('hyper_cgm_data', {
  type: Inputs.DateTime,
  description: undefined,
  nullable: true,
  resolve: (parent) => parent.updatedAt,
});

export const hyper_cgm_dataTransmitter_ticksFieldObject = defineFieldObject('hyper_cgm_data', {
  type: "Int",
  description: undefined,
  nullable: false,
  resolve: (parent) => parent.transmitter_ticks,
});

export const hyper_cgm_dataStatusFieldObject = defineFieldObject('hyper_cgm_data', {
  type: "String",
  description: undefined,
  nullable: true,
  resolve: (parent) => parent.status,
});

export const hyper_cgm_dataUnitFieldObject = defineFieldObject('hyper_cgm_data', {
  type: "String",
  description: undefined,
  nullable: false,
  resolve: (parent) => parent.unit,
});

export const hyper_cgm_dataRate_unitFieldObject = defineFieldObject('hyper_cgm_data', {
  type: "String",
  description: undefined,
  nullable: false,
  resolve: (parent) => parent.rate_unit,
});

export const hyper_cgm_dataHyper_profileFieldObject = defineRelationObject('hyper_cgm_data', 'hyper_profile', {
  description: undefined,
  nullable: false,
  args: undefined,
  query: undefined,
});
