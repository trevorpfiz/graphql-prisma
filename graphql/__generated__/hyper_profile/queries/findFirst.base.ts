import * as Inputs from '~/graphql/__generated__/inputs';
import { db } from "~/server/db";
import { builder } from '../../../../schema/builder';
import { defineQuery, defineQueryFunction, defineQueryPrismaObject } from '../../utils';

export const findFirsthyper_profileQueryArgs = builder.args((t) => ({
  where: t.field({ type: Inputs.hyper_profileWhereInput, required: false }),
  orderBy: t.field({ type: [Inputs.hyper_profileOrderByWithRelationInput], required: false }),
  cursor: t.field({ type: Inputs.hyper_profileWhereUniqueInput, required: false }),
  take: t.field({ type: 'Int', required: false }),
  skip: t.field({ type: 'Int', required: false }),
  distinct: t.field({ type: [Inputs.Hyper_profileScalarFieldEnum], required: false }),
}))

export const findFirsthyper_profileQueryObject = defineQueryFunction((t) =>
  defineQueryPrismaObject({
    type: 'hyper_profile',
    nullable: true,
    args: findFirsthyper_profileQueryArgs,
    resolve: async (query, _root, args, _context, _info) =>
      await db.hyper_profile.findFirst({
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

export const findFirsthyper_profileQuery = defineQuery((t) => ({
  findFirsthyper_profile: t.prismaField(findFirsthyper_profileQueryObject(t)),
}));
