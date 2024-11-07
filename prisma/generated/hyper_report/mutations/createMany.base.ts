import { builder } from "../../../builder";
import * as Inputs from "../../inputs";
import {
  defineMutation,
  defineMutationFunction,
  defineMutationPrismaObject,
} from "../../utils";

export const createManyhyper_reportMutationArgs = builder.args((t) => ({
  data: t.field({ type: [Inputs.hyper_reportCreateInput], required: true }),
}));

export const createManyhyper_reportMutationObject = defineMutationFunction(
  (t) =>
    defineMutationPrismaObject({
      type: ["hyper_report"],
      nullable: false,
      args: createManyhyper_reportMutationArgs,
      resolve: async (_query, _root, args, _context, _info) =>
        await _context.prisma.$transaction(
          args.data.map((data) =>
            _context.prisma.hyper_report.create({ data }),
          ),
        ),
    }),
);

export const createManyhyper_reportMutation = defineMutation((t) => ({
  createManyhyper_report: t.prismaField(
    createManyhyper_reportMutationObject(t),
  ),
}));
