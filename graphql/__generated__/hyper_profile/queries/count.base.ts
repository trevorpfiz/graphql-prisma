import * as Inputs from '~/graphql/__generated__/inputs';
import { db } from "~/server/db";
import { builder } from '../../../../schema/builder';
import { defineQuery, defineQueryFunction, defineQueryObject } from '../../utils';

export const counthyper_profileQueryArgs = builder.args((t) => ({
  where: t.field({ type: Inputs.hyper_profileWhereInput, required: false }),
  orderBy: t.field({ type: [Inputs.hyper_profileOrderByWithRelationInput], required: false }),
  cursor: t.field({ type: Inputs.hyper_profileWhereUniqueInput, required: false }),
  take: t.field({ type: 'Int', required: false }),
  skip: t.field({ type: 'Int', required: false }),
  distinct: t.field({ type: [Inputs.Hyper_profileScalarFieldEnum], required: false }),
}))

export const counthyper_profileQueryObject = defineQueryFunction((t) =>
  defineQueryObject({
    type: 'Int',
    nullable: false,
    args: counthyper_profileQueryArgs,
    resolve: async (_root, args, _context, _info) =>
      await db.hyper_profile.count({
        where: args.where || undefined,
        cursor: args.cursor || undefined,
        take: args.take || undefined,
        skip: args.skip || undefined,
        orderBy: args.orderBy || undefined,
      }),
  }),
);

export const counthyper_profileQuery = defineQuery((t) => ({
  counthyper_profile: t.field(counthyper_profileQueryObject(t)),
}));
