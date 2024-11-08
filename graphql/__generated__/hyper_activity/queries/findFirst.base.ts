import * as Inputs from '~/graphql/__generated__/inputs';
import { db } from "~/server/db";
import { builder } from '../../../../schema/builder';
import { defineQuery, defineQueryFunction, defineQueryPrismaObject } from '../../utils';

export const findFirsthyper_activityQueryArgs = builder.args((t) => ({
  where: t.field({ type: Inputs.hyper_activityWhereInput, required: false }),
  orderBy: t.field({ type: [Inputs.hyper_activityOrderByWithRelationInput], required: false }),
  cursor: t.field({ type: Inputs.hyper_activityWhereUniqueInput, required: false }),
  take: t.field({ type: 'Int', required: false }),
  skip: t.field({ type: 'Int', required: false }),
  distinct: t.field({ type: [Inputs.Hyper_activityScalarFieldEnum], required: false }),
}))

export const findFirsthyper_activityQueryObject = defineQueryFunction((t) =>
  defineQueryPrismaObject({
    type: 'hyper_activity',
    nullable: true,
    args: findFirsthyper_activityQueryArgs,
    resolve: async (query, _root, args, _context, _info) =>
      await db.hyper_activity.findFirst({
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

export const findFirsthyper_activityQuery = defineQuery((t) => ({
  findFirsthyper_activity: t.prismaField(findFirsthyper_activityQueryObject(t)),
}));
