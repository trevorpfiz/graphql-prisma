import { builder } from "../../../builder";
import * as Inputs from "../../inputs";
import {
  defineMutation,
  defineMutationFunction,
  defineMutationPrismaObject,
} from "../../utils";

export const updateOnehyper_mealMutationArgs = builder.args((t) => ({
  where: t.field({ type: Inputs.hyper_mealWhereUniqueInput, required: true }),
  data: t.field({ type: Inputs.hyper_mealUpdateInput, required: true }),
}));

export const updateOnehyper_mealMutationObject = defineMutationFunction((t) =>
  defineMutationPrismaObject({
    type: "hyper_meal",
    nullable: true,
    args: updateOnehyper_mealMutationArgs,
    resolve: async (query, _root, args, _context, _info) =>
      await _context.prisma.hyper_meal.update({
        where: args.where,
        data: args.data,
        ...query,
      }),
  }),
);

export const updateOnehyper_mealMutation = defineMutation((t) => ({
  updateOnehyper_meal: t.prismaField(updateOnehyper_mealMutationObject(t)),
}));