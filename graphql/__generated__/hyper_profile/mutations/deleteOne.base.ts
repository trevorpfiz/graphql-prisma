import * as Inputs from '~/graphql/__generated__/inputs';import { db } from "~/server/db";
import { builder } from '../../../../builder';
import { defineMutation, defineMutationFunction, defineMutationPrismaObject } from '../../utils';

export const deleteOnehyper_profileMutationArgs = builder.args((t) => ({ where: t.field({ type: Inputs.hyper_profileWhereUniqueInput, required: true }) }))

export const deleteOnehyper_profileMutationObject = defineMutationFunction((t) =>
  defineMutationPrismaObject({
    type: 'hyper_profile',
    nullable: true,
    args: deleteOnehyper_profileMutationArgs,
    resolve: async (query, _root, args, _context, _info) =>
      await db.hyper_profile.delete({ where: args.where, ...query }),
  }),
);

export const deleteOnehyper_profileMutation = defineMutation((t) => ({
  deleteOnehyper_profile: t.prismaField(deleteOnehyper_profileMutationObject(t)),
}));
