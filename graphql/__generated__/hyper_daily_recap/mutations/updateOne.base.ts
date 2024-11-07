import * as Inputs from '~/graphql/__generated__/inputs';import { db } from "~/server/db";
import { builder } from '../../../../builder';
import { defineMutation, defineMutationFunction, defineMutationPrismaObject } from '../../utils';

export const updateOnehyper_daily_recapMutationArgs = builder.args((t) => ({
      where: t.field({ type: Inputs.hyper_daily_recapWhereUniqueInput, required: true }),
      data: t.field({ type: Inputs.hyper_daily_recapUpdateInput, required: true }),
    }))

export const updateOnehyper_daily_recapMutationObject = defineMutationFunction((t) =>
  defineMutationPrismaObject({
    type: 'hyper_daily_recap',
    nullable: true,
    args: updateOnehyper_daily_recapMutationArgs,
    resolve: async (query, _root, args, _context, _info) =>
      await db.hyper_daily_recap.update({ where: args.where, data: args.data, ...query }),
  }),
);

export const updateOnehyper_daily_recapMutation = defineMutation((t) => ({
  updateOnehyper_daily_recap: t.prismaField(updateOnehyper_daily_recapMutationObject(t)),
}));
