import * as Inputs from '~/graphql/__generated__/inputs';import { db } from "~/server/db";
import { builder } from '../../../../builder';
import { defineQuery, defineQueryFunction, defineQueryPrismaObject } from '../../utils';

export const findFirsthyper_activity_typeQueryArgs = builder.args((t) => ({
  where: t.field({ type: Inputs.hyper_activity_typeWhereInput, required: false }),
  orderBy: t.field({ type: [Inputs.hyper_activity_typeOrderByWithRelationInput], required: false }),
  cursor: t.field({ type: Inputs.hyper_activity_typeWhereUniqueInput, required: false }),
  take: t.field({ type: 'Int', required: false }),
  skip: t.field({ type: 'Int', required: false }),
  distinct: t.field({ type: [Inputs.Hyper_activity_typeScalarFieldEnum], required: false }),
}))

export const findFirsthyper_activity_typeQueryObject = defineQueryFunction((t) =>
  defineQueryPrismaObject({
    type: 'hyper_activity_type',
    nullable: true,
    args: findFirsthyper_activity_typeQueryArgs,
    resolve: async (query, _root, args, _context, _info) =>
      await db.hyper_activity_type.findFirst({
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

export const findFirsthyper_activity_typeQuery = defineQuery((t) => ({
  findFirsthyper_activity_type: t.prismaField(findFirsthyper_activity_typeQueryObject(t)),
}));
