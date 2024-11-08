import * as Inputs from '~/graphql/__generated__/inputs';
import { db } from "~/server/db";
import { builder } from '../../../../schema/builder';
import { defineMutation, defineMutationFunction, defineMutationPrismaObject } from '../../utils';

export const upsertOnehyper_activityMutationArgs = builder.args((t) => ({
      where: t.field({ type: Inputs.hyper_activityWhereUniqueInput, required: true }),
      create: t.field({ type: Inputs.hyper_activityCreateInput, required: true }),
      update: t.field({ type: Inputs.hyper_activityUpdateInput, required: true }),
    }))

export const upsertOnehyper_activityMutationObject = defineMutationFunction((t) =>
  defineMutationPrismaObject({
    type: 'hyper_activity',
    nullable: false,
    args: upsertOnehyper_activityMutationArgs,
    resolve: async (query, _root, args, _context, _info) =>
      await db.hyper_activity.upsert({
        where: args.where,
        create: args.create,
        update: args.update,
        ...query,
      }),
  }),
);

export const upsertOnehyper_activityMutation = defineMutation((t) => ({
  upsertOnehyper_activity: t.prismaField(upsertOnehyper_activityMutationObject(t)),
}));
