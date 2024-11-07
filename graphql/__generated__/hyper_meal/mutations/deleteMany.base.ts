import * as Inputs from '~/graphql/__generated__/inputs';
import { BatchPayload } from '../../objects';import { db } from "~/server/db";
import { builder } from '../../../../builder';
import { defineMutation, defineMutationFunction, defineMutationObject } from '../../utils';

export const deleteManyhyper_mealMutationArgs = builder.args((t) => ({ where: t.field({ type: Inputs.hyper_mealWhereInput, required: true }) }))

export const deleteManyhyper_mealMutationObject = defineMutationFunction((t) =>
  defineMutationObject({
    type: BatchPayload,
    nullable: true,
    args: deleteManyhyper_mealMutationArgs,
    resolve: async (_root, args, _context, _info) =>
      await db.hyper_meal.deleteMany({ where: args.where }),
  }),
);

export const deleteManyhyper_mealMutation = defineMutation((t) => ({
  deleteManyhyper_meal: t.field(deleteManyhyper_mealMutationObject(t)),
}));
