import * as Inputs from '~/graphql/__generated__/inputs';
import { db } from "~/server/db";
import { builder } from '../../../../schema/builder';
import { defineMutation, defineMutationFunction, defineMutationPrismaObject } from '../../utils';

export const upsertOnehyper_profileMutationArgs = builder.args((t) => ({
      where: t.field({ type: Inputs.hyper_profileWhereUniqueInput, required: true }),
      create: t.field({ type: Inputs.hyper_profileCreateInput, required: true }),
      update: t.field({ type: Inputs.hyper_profileUpdateInput, required: true }),
    }))

export const upsertOnehyper_profileMutationObject = defineMutationFunction((t) =>
  defineMutationPrismaObject({
    type: 'hyper_profile',
    nullable: false,
    args: upsertOnehyper_profileMutationArgs,
    resolve: async (query, _root, args, _context, _info) =>
      await db.hyper_profile.upsert({
        where: args.where,
        create: args.create,
        update: args.update,
        ...query,
      }),
  }),
);

export const upsertOnehyper_profileMutation = defineMutation((t) => ({
  upsertOnehyper_profile: t.prismaField(upsertOnehyper_profileMutationObject(t)),
}));
