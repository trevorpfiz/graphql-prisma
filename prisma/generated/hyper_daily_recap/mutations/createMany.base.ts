import { builder } from "../../../builder";
import * as Inputs from "../../inputs";
import {
  defineMutation,
  defineMutationFunction,
  defineMutationPrismaObject,
} from "../../utils";

export const createManyhyper_daily_recapMutationArgs = builder.args((t) => ({
  data: t.field({
    type: [Inputs.hyper_daily_recapCreateInput],
    required: true,
  }),
}));

export const createManyhyper_daily_recapMutationObject = defineMutationFunction(
  (t) =>
    defineMutationPrismaObject({
      type: ["hyper_daily_recap"],
      nullable: false,
      args: createManyhyper_daily_recapMutationArgs,
      resolve: async (_query, _root, args, _context, _info) =>
        await _context.prisma.$transaction(
          args.data.map((data) =>
            _context.prisma.hyper_daily_recap.create({ data }),
          ),
        ),
    }),
);

export const createManyhyper_daily_recapMutation = defineMutation((t) => ({
  createManyhyper_daily_recap: t.prismaField(
    createManyhyper_daily_recapMutationObject(t),
  ),
}));
