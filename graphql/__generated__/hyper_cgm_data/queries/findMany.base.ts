import * as Inputs from '~/graphql/__generated__/inputs';
import { db } from "~/server/db";
import { builder } from '../../../../schema/builder';
import { defineQuery, defineQueryFunction, defineQueryPrismaObject } from '../../utils';

export const findManyhyper_cgm_dataQueryArgs = builder.args((t) => ({
  where: t.field({ type: Inputs.hyper_cgm_dataWhereInput, required: false }),
  orderBy: t.field({ type: [Inputs.hyper_cgm_dataOrderByWithRelationInput], required: false }),
  cursor: t.field({ type: Inputs.hyper_cgm_dataWhereUniqueInput, required: false }),
  take: t.field({ type: 'Int', required: false }),
  skip: t.field({ type: 'Int', required: false }),
  distinct: t.field({ type: [Inputs.Hyper_cgm_dataScalarFieldEnum], required: false }),
}))

export const findManyhyper_cgm_dataQueryObject = defineQueryFunction((t) =>
  defineQueryPrismaObject({
    type: ['hyper_cgm_data'],
    nullable: false,
    args: findManyhyper_cgm_dataQueryArgs,
    resolve: async (query, _root, args, _context, _info) =>
      await db.hyper_cgm_data.findMany({
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

export const findManyhyper_cgm_dataQuery = defineQuery((t) => ({
  findManyhyper_cgm_data: t.prismaField(findManyhyper_cgm_dataQueryObject(t)),
}));
