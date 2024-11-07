import * as Inputs from '~/graphql/__generated__/inputs';
import { BatchPayload } from '../../objects';import { db } from "~/server/db";
import { builder } from '../../../../builder';
import { defineMutation, defineMutationFunction, defineMutationObject } from '../../utils';

export const updateManyhyper_daily_recapMutationArgs = builder.args((t) => ({
      where: t.field({ type: Inputs.hyper_daily_recapWhereInput, required: false }),
      data: t.field({ type: Inputs.hyper_daily_recapUpdateManyMutationInput, required: true }),
    }))

export const updateManyhyper_daily_recapMutationObject = defineMutationFunction((t) =>
  defineMutationObject({
    type: BatchPayload,
    nullable: false,
    args: updateManyhyper_daily_recapMutationArgs,
    resolve: async (_root, args, _context, _info) =>
      await db.hyper_daily_recap.updateMany({ where: args.where || undefined, data: args.data }),
  }),
);

export const updateManyhyper_daily_recapMutation = defineMutation((t) => ({
  updateManyhyper_daily_recap: t.field(updateManyhyper_daily_recapMutationObject(t)),
}));
