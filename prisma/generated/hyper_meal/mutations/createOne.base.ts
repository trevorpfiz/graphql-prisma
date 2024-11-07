import { builder } from "../../../builder";
import * as Inputs from "../../inputs";
import {
  defineMutation,
  defineMutationFunction,
  defineMutationPrismaObject,
} from "../../utils";

export const createOnehyper_mealMutationArgs = builder.args((t) => ({
  data: t.field({ type: Inputs.hyper_mealCreateInput, required: true }),
}));

export const createOnehyper_mealMutationObject = defineMutationFunction((t) =>
  defineMutationPrismaObject({
    type: "hyper_meal",
    nullable: false,
    args: createOnehyper_mealMutationArgs,
    resolve: async (query, _root, args, _context, _info) =>
      await _context.prisma.hyper_meal.create({ data: args.data, ...query }),
  }),
);

export const createOnehyper_mealMutation = defineMutation((t) => ({
  createOnehyper_meal: t.prismaField(createOnehyper_mealMutationObject(t)),
}));
