import * as Inputs from '~/graphql/__generated__/inputs';
import { db } from "~/server/db";
import { builder } from '../../../../schema/builder';
import { defineMutation, defineMutationFunction, defineMutationPrismaObject } from '../../utils';

export const upsertOnehyper_mealMutationArgs = builder.args((t) => ({
      where: t.field({ type: Inputs.hyper_mealWhereUniqueInput, required: true }),
      create: t.field({ type: Inputs.hyper_mealCreateInput, required: true }),
      update: t.field({ type: Inputs.hyper_mealUpdateInput, required: true }),
    }))

export const upsertOnehyper_mealMutationObject = defineMutationFunction((t) =>
  defineMutationPrismaObject({
    type: 'hyper_meal',
    nullable: false,
    args: upsertOnehyper_mealMutationArgs,
    resolve: async (query, _root, args, _context, _info) =>
      await db.hyper_meal.upsert({
        where: args.where,
        create: args.create,
        update: args.update,
        ...query,
      }),
  }),
);

export const upsertOnehyper_mealMutation = defineMutation((t) => ({
  upsertOnehyper_meal: t.prismaField(upsertOnehyper_mealMutationObject(t)),
}));
