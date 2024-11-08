import * as Inputs from '~/graphql/__generated__/inputs';
import { db } from "~/server/db";
import { builder } from '../../../../schema/builder';
import { defineQuery, defineQueryFunction, defineQueryPrismaObject } from '../../utils';

export const findUniquehyper_profileQueryArgs = builder.args((t) => ({ where: t.field({ type: Inputs.hyper_profileWhereUniqueInput, required: true }) }))

export const findUniquehyper_profileQueryObject = defineQueryFunction((t) =>
  defineQueryPrismaObject({
    type: 'hyper_profile',
    nullable: true,
    args: findUniquehyper_profileQueryArgs,
    resolve: async (query, _root, args, _context, _info) =>
      await db.hyper_profile.findUnique({ where: args.where, ...query }),
  }),
);

export const findUniquehyper_profileQuery = defineQuery((t) => ({
  findUniquehyper_profile: t.prismaField(findUniquehyper_profileQueryObject(t)),
}));
