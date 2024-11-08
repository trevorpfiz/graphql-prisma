import * as Inputs from '~/graphql/__generated__/inputs';
import { db } from "~/server/db";
import { builder } from '../../../../schema/builder';
import { defineMutation, defineMutationFunction, defineMutationPrismaObject } from '../../utils';

export const createManyusersMutationArgs = builder.args((t) => ({ data: t.field({ type: [Inputs.usersCreateInput], required: true }) }))

export const createManyusersMutationObject = defineMutationFunction((t) =>
  defineMutationPrismaObject({
    type: ['users'],
    nullable: false,
    args: createManyusersMutationArgs,
    resolve: async (_query, _root, args, _context, _info) =>
      await db.$transaction(args.data.map((data) => db.users.create({ data }))),
  }),
);

export const createManyusersMutation = defineMutation((t) => ({
  createManyusers: t.prismaField(createManyusersMutationObject(t)),
}));
