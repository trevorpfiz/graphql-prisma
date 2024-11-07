import { builder } from "../../../builder";
import * as Inputs from "../../inputs";
import {
  defineQuery,
  defineQueryFunction,
  defineQueryPrismaObject,
} from "../../utils";

export const findUniquehyper_cgm_dataQueryArgs = builder.args((t) => ({
  where: t.field({
    type: Inputs.hyper_cgm_dataWhereUniqueInput,
    required: true,
  }),
}));

export const findUniquehyper_cgm_dataQueryObject = defineQueryFunction((t) =>
  defineQueryPrismaObject({
    type: "hyper_cgm_data",
    nullable: true,
    args: findUniquehyper_cgm_dataQueryArgs,
    resolve: async (query, _root, args, _context, _info) =>
      await _context.prisma.hyper_cgm_data.findUnique({
        where: args.where,
        ...query,
      }),
  }),
);

export const findUniquehyper_cgm_dataQuery = defineQuery((t) => ({
  findUniquehyper_cgm_data: t.prismaField(
    findUniquehyper_cgm_dataQueryObject(t),
  ),
}));
