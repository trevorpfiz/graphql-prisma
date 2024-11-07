import * as Inputs from '~/graphql/__generated__/inputs';import { db } from "~/server/db";
import { builder } from '../../../../builder';
import { defineMutation, defineMutationFunction, defineMutationPrismaObject } from '../../utils';

export const deleteOnehyper_daily_recapMutationArgs = builder.args((t) => ({ where: t.field({ type: Inputs.hyper_daily_recapWhereUniqueInput, required: true }) }))

export const deleteOnehyper_daily_recapMutationObject = defineMutationFunction((t) =>
  defineMutationPrismaObject({
    type: 'hyper_daily_recap',
    nullable: true,
    args: deleteOnehyper_daily_recapMutationArgs,
    resolve: async (query, _root, args, _context, _info) =>
      await db.hyper_daily_recap.delete({ where: args.where, ...query }),
  }),
);

export const deleteOnehyper_daily_recapMutation = defineMutation((t) => ({
  deleteOnehyper_daily_recap: t.prismaField(deleteOnehyper_daily_recapMutationObject(t)),
}));
