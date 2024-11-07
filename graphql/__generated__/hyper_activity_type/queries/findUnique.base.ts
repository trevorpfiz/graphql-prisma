import * as Inputs from '~/graphql/__generated__/inputs';import { db } from "~/server/db";
import { builder } from '../../../../builder';
import { defineQuery, defineQueryFunction, defineQueryPrismaObject } from '../../utils';

export const findUniquehyper_activity_typeQueryArgs = builder.args((t) => ({ where: t.field({ type: Inputs.hyper_activity_typeWhereUniqueInput, required: true }) }))

export const findUniquehyper_activity_typeQueryObject = defineQueryFunction((t) =>
  defineQueryPrismaObject({
    type: 'hyper_activity_type',
    nullable: true,
    args: findUniquehyper_activity_typeQueryArgs,
    resolve: async (query, _root, args, _context, _info) =>
      await db.hyper_activity_type.findUnique({ where: args.where, ...query }),
  }),
);

export const findUniquehyper_activity_typeQuery = defineQuery((t) => ({
  findUniquehyper_activity_type: t.prismaField(findUniquehyper_activity_typeQueryObject(t)),
}));
