import * as Inputs from '~/graphql/__generated__/inputs';
import { db } from "~/server/db";
import { builder } from '../../../../schema/builder';
import { defineQuery, defineQueryFunction, defineQueryObject } from '../../utils';

export const counthyper_mealQueryArgs = builder.args((t) => ({
  where: t.field({ type: Inputs.hyper_mealWhereInput, required: false }),
  orderBy: t.field({ type: [Inputs.hyper_mealOrderByWithRelationInput], required: false }),
  cursor: t.field({ type: Inputs.hyper_mealWhereUniqueInput, required: false }),
  take: t.field({ type: 'Int', required: false }),
  skip: t.field({ type: 'Int', required: false }),
  distinct: t.field({ type: [Inputs.Hyper_mealScalarFieldEnum], required: false }),
}))

export const counthyper_mealQueryObject = defineQueryFunction((t) =>
  defineQueryObject({
    type: 'Int',
    nullable: false,
    args: counthyper_mealQueryArgs,
    resolve: async (_root, args, _context, _info) =>
      await db.hyper_meal.count({
        where: args.where || undefined,
        cursor: args.cursor || undefined,
        take: args.take || undefined,
        skip: args.skip || undefined,
        orderBy: args.orderBy || undefined,
      }),
  }),
);

export const counthyper_mealQuery = defineQuery((t) => ({
  counthyper_meal: t.field(counthyper_mealQueryObject(t)),
}));
