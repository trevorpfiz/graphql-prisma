import { builder } from "../../../builder";
import * as Inputs from "../../inputs";
import {
  defineQuery,
  defineQueryFunction,
  defineQueryPrismaObject,
} from "../../utils";

export const findManyhyper_daily_recapQueryArgs = builder.args((t) => ({
  where: t.field({ type: Inputs.hyper_daily_recapWhereInput, required: false }),
  orderBy: t.field({
    type: [Inputs.hyper_daily_recapOrderByWithRelationInput],
    required: false,
  }),
  cursor: t.field({
    type: Inputs.hyper_daily_recapWhereUniqueInput,
    required: false,
  }),
  take: t.field({ type: "Int", required: false }),
  skip: t.field({ type: "Int", required: false }),
  distinct: t.field({
    type: [Inputs.Hyper_daily_recapScalarFieldEnum],
    required: false,
  }),
}));

export const findManyhyper_daily_recapQueryObject = defineQueryFunction((t) =>
  defineQueryPrismaObject({
    type: ["hyper_daily_recap"],
    nullable: false,
    args: findManyhyper_daily_recapQueryArgs,
    resolve: async (query, _root, args, _context, _info) =>
      await _context.prisma.hyper_daily_recap.findMany({
        where: args.where || undefined,
        cursor: args.cursor || undefined,
        take: args.take || undefined,
        distinct: args.distinct || undefined,
        skip: args.skip || undefined,
        orderBy: args.orderBy || undefined,
        ...query,
      }),
  }),
);

export const findManyhyper_daily_recapQuery = defineQuery((t) => ({
  findManyhyper_daily_recap: t.prismaField(
    findManyhyper_daily_recapQueryObject(t),
  ),
}));