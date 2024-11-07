import * as Inputs from '~/graphql/__generated__/inputs';
import { BatchPayload } from '../../objects';import { db } from "~/server/db";
import { builder } from '../../../../builder';
import { defineMutation, defineMutationFunction, defineMutationObject } from '../../utils';

export const deleteManyhyper_profileMutationArgs = builder.args((t) => ({ where: t.field({ type: Inputs.hyper_profileWhereInput, required: true }) }))

export const deleteManyhyper_profileMutationObject = defineMutationFunction((t) =>
  defineMutationObject({
    type: BatchPayload,
    nullable: true,
    args: deleteManyhyper_profileMutationArgs,
    resolve: async (_root, args, _context, _info) =>
      await db.hyper_profile.deleteMany({ where: args.where }),
  }),
);

export const deleteManyhyper_profileMutation = defineMutation((t) => ({
  deleteManyhyper_profile: t.field(deleteManyhyper_profileMutationObject(t)),
}));
