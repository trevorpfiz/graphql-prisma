import * as Inputs from '~/graphql/__generated__/inputs';
import { db } from "~/server/db";
import { builder } from '../../../../schema/builder';
import { defineQuery, defineQueryFunction, defineQueryPrismaObject } from '../../utils';

export const findUniquehyper_daily_recapQueryArgs = builder.args((t) => ({ where: t.field({ type: Inputs.hyper_daily_recapWhereUniqueInput, required: true }) }))

export const findUniquehyper_daily_recapQueryObject = defineQueryFunction((t) =>
  defineQueryPrismaObject({
    type: 'hyper_daily_recap',
    nullable: true,
    args: findUniquehyper_daily_recapQueryArgs,
    resolve: async (query, _root, args, _context, _info) =>
      await db.hyper_daily_recap.findUnique({ where: args.where, ...query }),
  }),
);

export const findUniquehyper_daily_recapQuery = defineQuery((t) => ({
  findUniquehyper_daily_recap: t.prismaField(findUniquehyper_daily_recapQueryObject(t)),
}));
