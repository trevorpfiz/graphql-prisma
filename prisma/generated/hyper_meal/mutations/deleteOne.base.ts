import { builder } from "../../../builder";
import * as Inputs from "../../inputs";
import {
  defineMutation,
  defineMutationFunction,
  defineMutationPrismaObject,
} from "../../utils";

export const deleteOnehyper_mealMutationArgs = builder.args((t) => ({
  where: t.field({ type: Inputs.hyper_mealWhereUniqueInput, required: true }),
}));

export const deleteOnehyper_mealMutationObject = defineMutationFunction((t) =>
  defineMutationPrismaObject({
    type: "hyper_meal",
    nullable: true,
    args: deleteOnehyper_mealMutationArgs,
    resolve: async (query, _root, args, _context, _info) =>
      await _context.prisma.hyper_meal.delete({ where: args.where, ...query }),
  }),
);

export const deleteOnehyper_mealMutation = defineMutation((t) => ({
  deleteOnehyper_meal: t.prismaField(deleteOnehyper_mealMutationObject(t)),
}));
