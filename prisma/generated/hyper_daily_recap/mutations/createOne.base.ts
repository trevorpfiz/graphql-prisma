import { builder } from "../../../builder";
import * as Inputs from "../../inputs";
import {
  defineMutation,
  defineMutationFunction,
  defineMutationPrismaObject,
} from "../../utils";

export const createOnehyper_daily_recapMutationArgs = builder.args((t) => ({
  data: t.field({ type: Inputs.hyper_daily_recapCreateInput, required: true }),
}));

export const createOnehyper_daily_recapMutationObject = defineMutationFunction(
  (t) =>
    defineMutationPrismaObject({
      type: "hyper_daily_recap",
      nullable: false,
      args: createOnehyper_daily_recapMutationArgs,
      resolve: async (query, _root, args, _context, _info) =>
        await _context.prisma.hyper_daily_recap.create({
          data: args.data,
          ...query,
        }),
    }),
);

export const createOnehyper_daily_recapMutation = defineMutation((t) => ({
  createOnehyper_daily_recap: t.prismaField(
    createOnehyper_daily_recapMutationObject(t),
  ),
}));
