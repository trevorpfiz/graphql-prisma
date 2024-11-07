import * as Inputs from '~/graphql/__generated__/inputs';import { db } from "~/server/db";
import { builder } from '../../../../builder';
import { defineQuery, defineQueryFunction, defineQueryPrismaObject } from '../../utils';

export const findUniquehyper_reportQueryArgs = builder.args((t) => ({ where: t.field({ type: Inputs.hyper_reportWhereUniqueInput, required: true }) }))

export const findUniquehyper_reportQueryObject = defineQueryFunction((t) =>
  defineQueryPrismaObject({
    type: 'hyper_report',
    nullable: true,
    args: findUniquehyper_reportQueryArgs,
    resolve: async (query, _root, args, _context, _info) =>
      await db.hyper_report.findUnique({ where: args.where, ...query }),
  }),
);

export const findUniquehyper_reportQuery = defineQuery((t) => ({
  findUniquehyper_report: t.prismaField(findUniquehyper_reportQueryObject(t)),
}));
