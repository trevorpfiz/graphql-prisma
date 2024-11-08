import * as Inputs from '~/graphql/__generated__/inputs';
import { db } from "~/server/db";
import { builder } from '../../../../schema/builder';
import { defineQuery, defineQueryFunction, defineQueryObject } from '../../utils';

export const counthyper_daily_recapQueryArgs = builder.args((t) => ({
  where: t.field({ type: Inputs.hyper_daily_recapWhereInput, required: false }),
  orderBy: t.field({ type: [Inputs.hyper_daily_recapOrderByWithRelationInput], required: false }),
  cursor: t.field({ type: Inputs.hyper_daily_recapWhereUniqueInput, required: false }),
  take: t.field({ type: 'Int', required: false }),
  skip: t.field({ type: 'Int', required: false }),
  distinct: t.field({ type: [Inputs.Hyper_daily_recapScalarFieldEnum], required: false }),
}))

export const counthyper_daily_recapQueryObject = defineQueryFunction((t) =>
  defineQueryObject({
    type: 'Int',
    nullable: false,
    args: counthyper_daily_recapQueryArgs,
    resolve: async (_root, args, _context, _info) =>
      await db.hyper_daily_recap.count({
        where: args.where || undefined,
        cursor: args.cursor || undefined,
        take: args.take || undefined,
        skip: args.skip || undefined,
        orderBy: args.orderBy || undefined,
      }),
  }),
);

export const counthyper_daily_recapQuery = defineQuery((t) => ({
  counthyper_daily_recap: t.field(counthyper_daily_recapQueryObject(t)),
}));
