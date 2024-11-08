import * as Inputs from '~/graphql/__generated__/inputs';
import { db } from "~/server/db";
import { builder } from '../../../../schema/builder';
import { defineMutation, defineMutationFunction, defineMutationPrismaObject } from '../../utils';

export const updateOnehyper_activityMutationArgs = builder.args((t) => ({
      where: t.field({ type: Inputs.hyper_activityWhereUniqueInput, required: true }),
      data: t.field({ type: Inputs.hyper_activityUpdateInput, required: true }),
    }))

export const updateOnehyper_activityMutationObject = defineMutationFunction((t) =>
  defineMutationPrismaObject({
    type: 'hyper_activity',
    nullable: true,
    args: updateOnehyper_activityMutationArgs,
    resolve: async (query, _root, args, _context, _info) =>
      await db.hyper_activity.update({ where: args.where, data: args.data, ...query }),
  }),
);

export const updateOnehyper_activityMutation = defineMutation((t) => ({
  updateOnehyper_activity: t.prismaField(updateOnehyper_activityMutationObject(t)),
}));
