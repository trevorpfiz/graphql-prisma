import * as Inputs from '~/graphql/__generated__/inputs';import { db } from "~/server/db";
import { builder } from '../../../../builder';
import { defineQuery, defineQueryFunction, defineQueryObject } from '../../utils';

export const countusersQueryArgs = builder.args((t) => ({
  where: t.field({ type: Inputs.usersWhereInput, required: false }),
  orderBy: t.field({ type: [Inputs.usersOrderByWithRelationInput], required: false }),
  cursor: t.field({ type: Inputs.usersWhereUniqueInput, required: false }),
  take: t.field({ type: 'Int', required: false }),
  skip: t.field({ type: 'Int', required: false }),
  distinct: t.field({ type: [Inputs.UsersScalarFieldEnum], required: false }),
}))

export const countusersQueryObject = defineQueryFunction((t) =>
  defineQueryObject({
    type: 'Int',
    nullable: false,
    args: countusersQueryArgs,
    resolve: async (_root, args, _context, _info) =>
      await db.users.count({
        where: args.where || undefined,
        cursor: args.cursor || undefined,
        take: args.take || undefined,
        skip: args.skip || undefined,
        orderBy: args.orderBy || undefined,
      }),
  }),
);

export const countusersQuery = defineQuery((t) => ({
  countusers: t.field(countusersQueryObject(t)),
}));
