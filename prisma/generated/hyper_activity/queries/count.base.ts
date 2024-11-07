import { builder } from "../../../builder";
import * as Inputs from "../../inputs";
import {
  defineQuery,
  defineQueryFunction,
  defineQueryObject,
} from "../../utils";

export const counthyper_activityQueryArgs = builder.args((t) => ({
  where: t.field({ type: Inputs.hyper_activityWhereInput, required: false }),
  orderBy: t.field({
    type: [Inputs.hyper_activityOrderByWithRelationInput],
    required: false,
  }),
  cursor: t.field({
    type: Inputs.hyper_activityWhereUniqueInput,
    required: false,
  }),
  take: t.field({ type: "Int", required: false }),
  skip: t.field({ type: "Int", required: false }),
  distinct: t.field({
    type: [Inputs.Hyper_activityScalarFieldEnum],
    required: false,
  }),
}));

export const counthyper_activityQueryObject = defineQueryFunction((t) =>
  defineQueryObject({
    type: "Int",
    nullable: false,
    args: counthyper_activityQueryArgs,
    resolve: async (_root, args, _context, _info) =>
      await _context.prisma.hyper_activity.count({
        where: args.where || undefined,
        cursor: args.cursor || undefined,
        take: args.take || undefined,
        skip: args.skip || undefined,
        orderBy: args.orderBy || undefined,
      }),
  }),
);

export const counthyper_activityQuery = defineQuery((t) => ({
  counthyper_activity: t.field(counthyper_activityQueryObject(t)),
}));
