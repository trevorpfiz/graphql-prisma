import * as Inputs from '~/graphql/__generated__/inputs';import { db } from "~/server/db";
import { builder } from '../../../../builder';
import { defineQuery, defineQueryFunction, defineQueryPrismaObject } from '../../utils';

export const findFirsthyper_mealQueryArgs = builder.args((t) => ({
  where: t.field({ type: Inputs.hyper_mealWhereInput, required: false }),
  orderBy: t.field({ type: [Inputs.hyper_mealOrderByWithRelationInput], required: false }),
  cursor: t.field({ type: Inputs.hyper_mealWhereUniqueInput, required: false }),
  take: t.field({ type: 'Int', required: false }),
  skip: t.field({ type: 'Int', required: false }),
  distinct: t.field({ type: [Inputs.Hyper_mealScalarFieldEnum], required: false }),
}))

export const findFirsthyper_mealQueryObject = defineQueryFunction((t) =>
  defineQueryPrismaObject({
    type: 'hyper_meal',
    nullable: true,
    args: findFirsthyper_mealQueryArgs,
    resolve: async (query, _root, args, _context, _info) =>
      await db.hyper_meal.findFirst({
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

export const findFirsthyper_mealQuery = defineQuery((t) => ({
  findFirsthyper_meal: t.prismaField(findFirsthyper_mealQueryObject(t)),
}));
