import * as Inputs from '~/graphql/__generated__/inputs';
import { db } from "~/server/db";
import { builder } from '../../../../schema/builder';
import { defineQuery, defineQueryFunction, defineQueryPrismaObject } from '../../utils';

export const findManyhyper_mealQueryArgs = builder.args((t) => ({
  where: t.field({ type: Inputs.hyper_mealWhereInput, required: false }),
  orderBy: t.field({ type: [Inputs.hyper_mealOrderByWithRelationInput], required: false }),
  cursor: t.field({ type: Inputs.hyper_mealWhereUniqueInput, required: false }),
  take: t.field({ type: 'Int', required: false }),
  skip: t.field({ type: 'Int', required: false }),
  distinct: t.field({ type: [Inputs.Hyper_mealScalarFieldEnum], required: false }),
}))

export const findManyhyper_mealQueryObject = defineQueryFunction((t) =>
  defineQueryPrismaObject({
    type: ['hyper_meal'],
    nullable: false,
    args: findManyhyper_mealQueryArgs,
    resolve: async (query, _root, args, _context, _info) =>
      await db.hyper_meal.findMany({
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

export const findManyhyper_mealQuery = defineQuery((t) => ({
  findManyhyper_meal: t.prismaField(findManyhyper_mealQueryObject(t)),
}));
