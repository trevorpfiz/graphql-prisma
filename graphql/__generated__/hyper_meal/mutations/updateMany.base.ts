import * as Inputs from '~/graphql/__generated__/inputs';
import { BatchPayload } from '../../objects';import { db } from "~/server/db";
import { builder } from '../../../../builder';
import { defineMutation, defineMutationFunction, defineMutationObject } from '../../utils';

export const updateManyhyper_mealMutationArgs = builder.args((t) => ({
      where: t.field({ type: Inputs.hyper_mealWhereInput, required: false }),
      data: t.field({ type: Inputs.hyper_mealUpdateManyMutationInput, required: true }),
    }))

export const updateManyhyper_mealMutationObject = defineMutationFunction((t) =>
  defineMutationObject({
    type: BatchPayload,
    nullable: false,
    args: updateManyhyper_mealMutationArgs,
    resolve: async (_root, args, _context, _info) =>
      await db.hyper_meal.updateMany({ where: args.where || undefined, data: args.data }),
  }),
);

export const updateManyhyper_mealMutation = defineMutation((t) => ({
  updateManyhyper_meal: t.field(updateManyhyper_mealMutationObject(t)),
}));
