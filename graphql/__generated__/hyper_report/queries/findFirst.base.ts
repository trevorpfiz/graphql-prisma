import * as Inputs from '~/graphql/__generated__/inputs';import { db } from "~/server/db";
import { builder } from '../../../../builder';
import { defineQuery, defineQueryFunction, defineQueryPrismaObject } from '../../utils';

export const findFirsthyper_reportQueryArgs = builder.args((t) => ({
  where: t.field({ type: Inputs.hyper_reportWhereInput, required: false }),
  orderBy: t.field({ type: [Inputs.hyper_reportOrderByWithRelationInput], required: false }),
  cursor: t.field({ type: Inputs.hyper_reportWhereUniqueInput, required: false }),
  take: t.field({ type: 'Int', required: false }),
  skip: t.field({ type: 'Int', required: false }),
  distinct: t.field({ type: [Inputs.Hyper_reportScalarFieldEnum], required: false }),
}))

export const findFirsthyper_reportQueryObject = defineQueryFunction((t) =>
  defineQueryPrismaObject({
    type: 'hyper_report',
    nullable: true,
    args: findFirsthyper_reportQueryArgs,
    resolve: async (query, _root, args, _context, _info) =>
      await db.hyper_report.findFirst({
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

export const findFirsthyper_reportQuery = defineQuery((t) => ({
  findFirsthyper_report: t.prismaField(findFirsthyper_reportQueryObject(t)),
}));
