import { builder } from "../../../builder";
import * as Inputs from "../../inputs";
import {
  defineQuery,
  defineQueryFunction,
  defineQueryPrismaObject,
} from "../../utils";

export const findUniquehyper_activityQueryArgs = builder.args((t) => ({
  where: t.field({
    type: Inputs.hyper_activityWhereUniqueInput,
    required: true,
  }),
}));

export const findUniquehyper_activityQueryObject = defineQueryFunction((t) =>
  defineQueryPrismaObject({
    type: "hyper_activity",
    nullable: true,
    args: findUniquehyper_activityQueryArgs,
    resolve: async (query, _root, args, _context, _info) =>
      await _context.prisma.hyper_activity.findUnique({
        where: args.where,
        ...query,
      }),
  }),
);

export const findUniquehyper_activityQuery = defineQuery((t) => ({
  findUniquehyper_activity: t.prismaField(
    findUniquehyper_activityQueryObject(t),
  ),
}));
