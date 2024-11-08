import * as Inputs from '~/graphql/__generated__/inputs';
import { db } from "~/server/db";
import { builder } from '../../../../schema/builder';
import { defineQuery, defineQueryFunction, defineQueryPrismaObject } from '../../utils';

export const findManyusersQueryArgs = builder.args((t) => ({
  where: t.field({ type: Inputs.usersWhereInput, required: false }),
  orderBy: t.field({ type: [Inputs.usersOrderByWithRelationInput], required: false }),
  cursor: t.field({ type: Inputs.usersWhereUniqueInput, required: false }),
  take: t.field({ type: 'Int', required: false }),
  skip: t.field({ type: 'Int', required: false }),
  distinct: t.field({ type: [Inputs.UsersScalarFieldEnum], required: false }),
}))

export const findManyusersQueryObject = defineQueryFunction((t) =>
  defineQueryPrismaObject({
    type: ['users'],
    nullable: false,
    args: findManyusersQueryArgs,
    resolve: async (query, _root, args, _context, _info) =>
      await db.users.findMany({
        where: args.where || undefined,
        cursor: args.cursor || undefined,
        take: args.take || undefined,
        distinct: args.distinct || undefined,
        skip: args.skip || undefined,
        orderBy: args.orderBy || undefined,
        ...query,
      }),
  }),
);

export const findManyusersQuery = defineQuery((t) => ({
  findManyusers: t.prismaField(findManyusersQueryObject(t)),
}));
