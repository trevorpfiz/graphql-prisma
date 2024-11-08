import * as Inputs from '~/graphql/__generated__/inputs';
import { db } from "~/server/db";
import { builder } from '../../../../schema/builder';
import { defineQuery, defineQueryFunction, defineQueryPrismaObject } from '../../utils';

export const findUniquehyper_mealQueryArgs = builder.args((t) => ({ where: t.field({ type: Inputs.hyper_mealWhereUniqueInput, required: true }) }))

export const findUniquehyper_mealQueryObject = defineQueryFunction((t) =>
  defineQueryPrismaObject({
    type: 'hyper_meal',
    nullable: true,
    args: findUniquehyper_mealQueryArgs,
    resolve: async (query, _root, args, _context, _info) =>
      await db.hyper_meal.findUnique({ where: args.where, ...query }),
  }),
);

export const findUniquehyper_mealQuery = defineQuery((t) => ({
  findUniquehyper_meal: t.prismaField(findUniquehyper_mealQueryObject(t)),
}));
