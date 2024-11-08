import * as Inputs from '~/graphql/__generated__/inputs';
import { db } from "~/server/db";
import { builder } from '../../../../schema/builder';
import { defineQuery, defineQueryFunction, defineQueryPrismaObject } from '../../utils';

export const findUniqueusersQueryArgs = builder.args((t) => ({ where: t.field({ type: Inputs.usersWhereUniqueInput, required: true }) }))

export const findUniqueusersQueryObject = defineQueryFunction((t) =>
  defineQueryPrismaObject({
    type: 'users',
    nullable: true,
    args: findUniqueusersQueryArgs,
    resolve: async (query, _root, args, _context, _info) =>
      await db.users.findUnique({ where: args.where, ...query }),
  }),
);

export const findUniqueusersQuery = defineQuery((t) => ({
  findUniqueusers: t.prismaField(findUniqueusersQueryObject(t)),
}));
