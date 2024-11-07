import { builder } from "../../../builder";
import * as Inputs from "../../inputs";
import {
  defineQuery,
  defineQueryFunction,
  defineQueryObject,
} from "../../utils";

export const counthyper_cgm_dataQueryArgs = builder.args((t) => ({
  where: t.field({ type: Inputs.hyper_cgm_dataWhereInput, required: false }),
  orderBy: t.field({
    type: [Inputs.hyper_cgm_dataOrderByWithRelationInput],
    required: false,
  }),
  cursor: t.field({
    type: Inputs.hyper_cgm_dataWhereUniqueInput,
    required: false,
  }),
  take: t.field({ type: "Int", required: false }),
  skip: t.field({ type: "Int", required: false }),
  distinct: t.field({
    type: [Inputs.Hyper_cgm_dataScalarFieldEnum],
    required: false,
  }),
}));

export const counthyper_cgm_dataQueryObject = defineQueryFunction((t) =>
  defineQueryObject({
    type: "Int",
    nullable: false,
    args: counthyper_cgm_dataQueryArgs,
    resolve: async (_root, args, _context, _info) =>
      await _context.prisma.hyper_cgm_data.count({
        where: args.where || undefined,
        cursor: args.cursor || undefined,
        take: args.take || undefined,
        skip: args.skip || undefined,
        orderBy: args.orderBy || undefined,
      }),
  }),
);

export const counthyper_cgm_dataQuery = defineQuery((t) => ({
  counthyper_cgm_data: t.field(counthyper_cgm_dataQueryObject(t)),
}));
