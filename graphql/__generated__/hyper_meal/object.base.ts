import * as Inputs from '~/graphql/__generated__/inputs';
import { builder } from '../../../builder';
import {
  definePrismaObject,
  defineFieldObject,
  defineRelationFunction,
  defineRelationObject,
} from '../utils';

export const hyper_mealObject = definePrismaObject('hyper_meal', {
  description: undefined,
  findUnique: ({ id }) => ({ id }),
  fields: (t) => ({
    id: t.field(hyper_mealIdFieldObject),
    meal_time: t.field(hyper_mealMeal_timeFieldObject),
    carbohydrates: t.field(hyper_mealCarbohydratesFieldObject),
    dietary_energy: t.field(hyper_mealDietary_energyFieldObject),
    dietary_sugar: t.field(hyper_mealDietary_sugarFieldObject),
    fiber: t.field(hyper_mealFiberFieldObject),
    protein: t.field(hyper_mealProteinFieldObject),
    total_fat: t.field(hyper_mealTotal_fatFieldObject),
    profile_id: t.field(hyper_mealProfile_idFieldObject),
    created_at: t.field(hyper_mealCreated_atFieldObject),
    updatedAt: t.field(hyper_mealUpdatedAtFieldObject),
    hyper_profile: t.relation('hyper_profile', hyper_mealHyper_profileFieldObject),
  }),
});

export const hyper_mealIdFieldObject = defineFieldObject('hyper_meal', {
  type: "ID",
  description: undefined,
  nullable: false,
  resolve: (parent) => String(parent.id),
});

export const hyper_mealMeal_timeFieldObject = defineFieldObject('hyper_meal', {
  type: Inputs.DateTime,
  description: undefined,
  nullable: false,
  resolve: (parent) => parent.meal_time,
});

export const hyper_mealCarbohydratesFieldObject = defineFieldObject('hyper_meal', {
  type: "Float",
  description: undefined,
  nullable: true,
  resolve: (parent) => parent.carbohydrates,
});

export const hyper_mealDietary_energyFieldObject = defineFieldObject('hyper_meal', {
  type: "Float",
  description: undefined,
  nullable: true,
  resolve: (parent) => parent.dietary_energy,
});

export const hyper_mealDietary_sugarFieldObject = defineFieldObject('hyper_meal', {
  type: "Float",
  description: undefined,
  nullable: true,
  resolve: (parent) => parent.dietary_sugar,
});

export const hyper_mealFiberFieldObject = defineFieldObject('hyper_meal', {
  type: "Float",
  description: undefined,
  nullable: true,
  resolve: (parent) => parent.fiber,
});

export const hyper_mealProteinFieldObject = defineFieldObject('hyper_meal', {
  type: "Float",
  description: undefined,
  nullable: true,
  resolve: (parent) => parent.protein,
});

export const hyper_mealTotal_fatFieldObject = defineFieldObject('hyper_meal', {
  type: "Float",
  description: undefined,
  nullable: true,
  resolve: (parent) => parent.total_fat,
});

export const hyper_mealProfile_idFieldObject = defineFieldObject('hyper_meal', {
  type: "String",
  description: undefined,
  nullable: false,
  resolve: (parent) => parent.profile_id,
});

export const hyper_mealCreated_atFieldObject = defineFieldObject('hyper_meal', {
  type: Inputs.DateTime,
  description: undefined,
  nullable: false,
  resolve: (parent) => parent.created_at,
});

export const hyper_mealUpdatedAtFieldObject = defineFieldObject('hyper_meal', {
  type: Inputs.DateTime,
  description: undefined,
  nullable: true,
  resolve: (parent) => parent.updatedAt,
});

export const hyper_mealHyper_profileFieldObject = defineRelationObject('hyper_meal', 'hyper_profile', {
  description: undefined,
  nullable: false,
  args: undefined,
  query: undefined,
});
