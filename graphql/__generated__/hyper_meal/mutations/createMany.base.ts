import * as Inputs from '~/graphql/__generated__/inputs';
import { db } from "~/server/db";
import { builder } from '../../../../schema/builder';
import { defineMutation, defineMutationFunction, defineMutationPrismaObject } from '../../utils';

export const createManyhyper_mealMutationArgs = builder.args((t) => ({ data: t.field({ type: [Inputs.hyper_mealCreateInput], required: true }) }))

export const createManyhyper_mealMutationObject = defineMutationFunction((t) =>
  defineMutationPrismaObject({
    type: ['hyper_meal'],
    nullable: false,
    args: createManyhyper_mealMutationArgs,
    resolve: async (_query, _root, args, _context, _info) =>
      await db.$transaction(args.data.map((data) => db.hyper_meal.create({ data }))),
  }),
);

export const createManyhyper_mealMutation = defineMutation((t) => ({
  createManyhyper_meal: t.prismaField(createManyhyper_mealMutationObject(t)),
}));
