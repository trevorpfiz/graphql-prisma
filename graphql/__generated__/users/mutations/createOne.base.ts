import * as Inputs from '~/graphql/__generated__/inputs';import { db } from "~/server/db";
import { builder } from '../../../../builder';
import { defineMutation, defineMutationFunction, defineMutationPrismaObject } from '../../utils';

export const createOneusersMutationArgs = builder.args((t) => ({ data: t.field({ type: Inputs.usersCreateInput, required: true }) }))

export const createOneusersMutationObject = defineMutationFunction((t) =>
  defineMutationPrismaObject({
    type: 'users',
    nullable: false,
    args: createOneusersMutationArgs,
    resolve: async (query, _root, args, _context, _info) =>
      await db.users.create({ data: args.data, ...query }),
  }),
);

export const createOneusersMutation = defineMutation((t) => ({
  createOneusers: t.prismaField(createOneusersMutationObject(t)),
}));
