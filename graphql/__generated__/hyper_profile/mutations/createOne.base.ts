import * as Inputs from '~/graphql/__generated__/inputs';
import { db } from "~/server/db";
import { builder } from '../../../../schema/builder';
import { defineMutation, defineMutationFunction, defineMutationPrismaObject } from '../../utils';

export const createOnehyper_profileMutationArgs = builder.args((t) => ({ data: t.field({ type: Inputs.hyper_profileCreateInput, required: true }) }))

export const createOnehyper_profileMutationObject = defineMutationFunction((t) =>
  defineMutationPrismaObject({
    type: 'hyper_profile',
    nullable: false,
    args: createOnehyper_profileMutationArgs,
    resolve: async (query, _root, args, _context, _info) =>
      await db.hyper_profile.create({ data: args.data, ...query }),
  }),
);

export const createOnehyper_profileMutation = defineMutation((t) => ({
  createOnehyper_profile: t.prismaField(createOnehyper_profileMutationObject(t)),
}));
