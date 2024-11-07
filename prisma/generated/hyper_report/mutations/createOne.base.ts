import { builder } from "../../../builder";
import * as Inputs from "../../inputs";
import {
  defineMutation,
  defineMutationFunction,
  defineMutationPrismaObject,
} from "../../utils";

export const createOnehyper_reportMutationArgs = builder.args((t) => ({
  data: t.field({ type: Inputs.hyper_reportCreateInput, required: true }),
}));

export const createOnehyper_reportMutationObject = defineMutationFunction((t) =>
  defineMutationPrismaObject({
    type: "hyper_report",
    nullable: false,
    args: createOnehyper_reportMutationArgs,
    resolve: async (query, _root, args, _context, _info) =>
      await _context.prisma.hyper_report.create({ data: args.data, ...query }),
  }),
);

export const createOnehyper_reportMutation = defineMutation((t) => ({
  createOnehyper_report: t.prismaField(createOnehyper_reportMutationObject(t)),
}));
