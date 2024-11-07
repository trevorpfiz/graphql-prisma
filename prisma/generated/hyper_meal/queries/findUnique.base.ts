import { builder } from "../../../builder";
import * as Inputs from "../../inputs";
import {
  defineQuery,
  defineQueryFunction,
  defineQueryPrismaObject,
} from "../../utils";

export const findUniquehyper_mealQueryArgs = builder.args((t) => ({
  where: t.field({ type: Inputs.hyper_mealWhereUniqueInput, required: true }),
}));

export const findUniquehyper_mealQueryObject = defineQueryFunction((t) =>
  defineQueryPrismaObject({
    type: "hyper_meal",
    nullable: true,
    args: findUniquehyper_mealQueryArgs,
    resolve: async (query, _root, args, _context, _info) =>
      await _context.prisma.hyper_meal.findUnique({
        where: args.where,
        ...query,
      }),
  }),
);

export const findUniquehyper_mealQuery = defineQuery((t) => ({
  findUniquehyper_meal: t.prismaField(findUniquehyper_mealQueryObject(t)),
}));
