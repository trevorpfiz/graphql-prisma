import * as Inputs from '~/graphql/__generated__/inputs';import { db } from "~/server/db";
import { builder } from '../../../../builder';
import { defineMutation, defineMutationFunction, defineMutationPrismaObject } from '../../utils';

export const upsertOneusersMutationArgs = builder.args((t) => ({
      where: t.field({ type: Inputs.usersWhereUniqueInput, required: true }),
      create: t.field({ type: Inputs.usersCreateInput, required: true }),
      update: t.field({ type: Inputs.usersUpdateInput, required: true }),
    }))

export const upsertOneusersMutationObject = defineMutationFunction((t) =>
  defineMutationPrismaObject({
    type: 'users',
    nullable: false,
    args: upsertOneusersMutationArgs,
    resolve: async (query, _root, args, _context, _info) =>
      await db.users.upsert({
        where: args.where,
        create: args.create,
        update: args.update,
        ...query,
      }),
  }),
);

export const upsertOneusersMutation = defineMutation((t) => ({
  upsertOneusers: t.prismaField(upsertOneusersMutationObject(t)),
}));
