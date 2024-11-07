import * as Inputs from '~/graphql/__generated__/inputs';import { db } from "~/server/db";
import { builder } from '../../../../builder';
import { defineQuery, defineQueryFunction, defineQueryObject } from '../../utils';

export const counthyper_activity_typeQueryArgs = builder.args((t) => ({
  where: t.field({ type: Inputs.hyper_activity_typeWhereInput, required: false }),
  orderBy: t.field({ type: [Inputs.hyper_activity_typeOrderByWithRelationInput], required: false }),
  cursor: t.field({ type: Inputs.hyper_activity_typeWhereUniqueInput, required: false }),
  take: t.field({ type: 'Int', required: false }),
  skip: t.field({ type: 'Int', required: false }),
  distinct: t.field({ type: [Inputs.Hyper_activity_typeScalarFieldEnum], required: false }),
}))

export const counthyper_activity_typeQueryObject = defineQueryFunction((t) =>
  defineQueryObject({
    type: 'Int',
    nullable: false,
    args: counthyper_activity_typeQueryArgs,
    resolve: async (_root, args, _context, _info) =>
      await db.hyper_activity_type.count({
        where: args.where || undefined,
        cursor: args.cursor || undefined,
        take: args.take || undefined,
        skip: args.skip || undefined,
        orderBy: args.orderBy || undefined,
      }),
  }),
);

export const counthyper_activity_typeQuery = defineQuery((t) => ({
  counthyper_activity_type: t.field(counthyper_activity_typeQueryObject(t)),
}));
