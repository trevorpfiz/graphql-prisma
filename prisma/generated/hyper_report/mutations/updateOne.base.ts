import { builder } from "../../../builder";
import * as Inputs from "../../inputs";
import {
  defineMutation,
  defineMutationFunction,
  defineMutationPrismaObject,
} from "../../utils";

export const updateOnehyper_reportMutationArgs = builder.args((t) => ({
  where: t.field({ type: Inputs.hyper_reportWhereUniqueInput, required: true }),
  data: t.field({ type: Inputs.hyper_reportUpdateInput, required: true }),
}));

export const updateOnehyper_reportMutationObject = defineMutationFunction((t) =>
  defineMutationPrismaObject({
    type: "hyper_report",
    nullable: true,
    args: updateOnehyper_reportMutationArgs,
    resolve: async (query, _root, args, _context, _info) =>
      await _context.prisma.hyper_report.update({
        where: args.where,
        data: args.data,
        ...query,
      }),
  }),
);

export const updateOnehyper_reportMutation = defineMutation((t) => ({
  updateOnehyper_report: t.prismaField(updateOnehyper_reportMutationObject(t)),
}));
