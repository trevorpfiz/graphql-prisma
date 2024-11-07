import { builder } from "../../../builder";
import * as Inputs from "../../inputs";
import {
  defineMutation,
  defineMutationFunction,
  defineMutationPrismaObject,
} from "../../utils";

export const deleteOnehyper_reportMutationArgs = builder.args((t) => ({
  where: t.field({ type: Inputs.hyper_reportWhereUniqueInput, required: true }),
}));

export const deleteOnehyper_reportMutationObject = defineMutationFunction((t) =>
  defineMutationPrismaObject({
    type: "hyper_report",
    nullable: true,
    args: deleteOnehyper_reportMutationArgs,
    resolve: async (query, _root, args, _context, _info) =>
      await _context.prisma.hyper_report.delete({
        where: args.where,
        ...query,
      }),
  }),
);

export const deleteOnehyper_reportMutation = defineMutation((t) => ({
  deleteOnehyper_report: t.prismaField(deleteOnehyper_reportMutationObject(t)),
}));
