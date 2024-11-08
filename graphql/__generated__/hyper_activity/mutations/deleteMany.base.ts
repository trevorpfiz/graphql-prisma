import * as Inputs from '~/graphql/__generated__/inputs';
import { BatchPayload } from '../../objects';
import { db } from "~/server/db";
import { builder } from '../../../../schema/builder';
import { defineMutation, defineMutationFunction, defineMutationObject } from '../../utils';

export const deleteManyhyper_activityMutationArgs = builder.args((t) => ({ where: t.field({ type: Inputs.hyper_activityWhereInput, required: true }) }))

export const deleteManyhyper_activityMutationObject = defineMutationFunction((t) =>
  defineMutationObject({
    type: BatchPayload,
    nullable: true,
    args: deleteManyhyper_activityMutationArgs,
    resolve: async (_root, args, _context, _info) =>
      await db.hyper_activity.deleteMany({ where: args.where }),
  }),
);

export const deleteManyhyper_activityMutation = defineMutation((t) => ({
  deleteManyhyper_activity: t.field(deleteManyhyper_activityMutationObject(t)),
}));
