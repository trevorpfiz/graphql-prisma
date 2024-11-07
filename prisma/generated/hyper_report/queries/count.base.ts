import { builder } from "../../../builder";
import * as Inputs from "../../inputs";
import {
  defineQuery,
  defineQueryFunction,
  defineQueryObject,
} from "../../utils";

export const counthyper_reportQueryArgs = builder.args((t) => ({
  where: t.field({ type: Inputs.hyper_reportWhereInput, required: false }),
  orderBy: t.field({
    type: [Inputs.hyper_reportOrderByWithRelationInput],
    required: false,
  }),
  cursor: t.field({
    type: Inputs.hyper_reportWhereUniqueInput,
    required: false,
  }),
  take: t.field({ type: "Int", required: false }),
  skip: t.field({ type: "Int", required: false }),
  distinct: t.field({
    type: [Inputs.Hyper_reportScalarFieldEnum],
    required: false,
  }),
}));

export const counthyper_reportQueryObject = defineQueryFunction((t) =>
  defineQueryObject({
    type: "Int",
    nullable: false,
    args: counthyper_reportQueryArgs,
    resolve: async (_root, args, _context, _info) =>
      await _context.prisma.hyper_report.count({
        where: args.where || undefined,
        cursor: args.cursor || undefined,
        take: args.take || undefined,
        skip: args.skip || undefined,
        orderBy: args.orderBy || undefined,
      }),
  }),
);

export const counthyper_reportQuery = defineQuery((t) => ({
  counthyper_report: t.field(counthyper_reportQueryObject(t)),
}));
