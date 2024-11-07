import * as Inputs from '~/graphql/__generated__/inputs';
import { BatchPayload } from '../../objects';import { db } from "~/server/db";
import { builder } from '../../../../builder';
import { defineMutation, defineMutationFunction, defineMutationObject } from '../../utils';

export const deleteManyhyper_daily_recapMutationArgs = builder.args((t) => ({ where: t.field({ type: Inputs.hyper_daily_recapWhereInput, required: true }) }))

export const deleteManyhyper_daily_recapMutationObject = defineMutationFunction((t) =>
  defineMutationObject({
    type: BatchPayload,
    nullable: true,
    args: deleteManyhyper_daily_recapMutationArgs,
    resolve: async (_root, args, _context, _info) =>
      await db.hyper_daily_recap.deleteMany({ where: args.where }),
  }),
);

export const deleteManyhyper_daily_recapMutation = defineMutation((t) => ({
  deleteManyhyper_daily_recap: t.field(deleteManyhyper_daily_recapMutationObject(t)),
}));
