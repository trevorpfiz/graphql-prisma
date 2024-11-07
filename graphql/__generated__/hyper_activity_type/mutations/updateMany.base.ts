import * as Inputs from '~/graphql/__generated__/inputs';
import { BatchPayload } from '../../objects';import { db } from "~/server/db";
import { builder } from '../../../../builder';
import { defineMutation, defineMutationFunction, defineMutationObject } from '../../utils';

export const updateManyhyper_activity_typeMutationArgs = builder.args((t) => ({
      where: t.field({ type: Inputs.hyper_activity_typeWhereInput, required: false }),
      data: t.field({ type: Inputs.hyper_activity_typeUpdateManyMutationInput, required: true }),
    }))

export const updateManyhyper_activity_typeMutationObject = defineMutationFunction((t) =>
  defineMutationObject({
    type: BatchPayload,
    nullable: false,
    args: updateManyhyper_activity_typeMutationArgs,
    resolve: async (_root, args, _context, _info) =>
      await db.hyper_activity_type.updateMany({ where: args.where || undefined, data: args.data }),
  }),
);

export const updateManyhyper_activity_typeMutation = defineMutation((t) => ({
  updateManyhyper_activity_type: t.field(updateManyhyper_activity_typeMutationObject(t)),
}));
