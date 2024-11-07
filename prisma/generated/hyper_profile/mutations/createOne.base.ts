import { builder } from "../../../builder";
import * as Inputs from "../../inputs";
import {
  defineMutation,
  defineMutationFunction,
  defineMutationPrismaObject,
} from "../../utils";

export const createOnehyper_profileMutationArgs = builder.args((t) => ({
  data: t.field({ type: Inputs.hyper_profileCreateInput, required: true }),
}));

export const createOnehyper_profileMutationObject = defineMutationFunction(
  (t) =>
    defineMutationPrismaObject({
      type: "hyper_profile",
      nullable: false,
      args: createOnehyper_profileMutationArgs,
      resolve: async (query, _root, args, _context, _info) =>
        await _context.prisma.hyper_profile.create({
          data: args.data,
          ...query,
        }),
    }),
);

export const createOnehyper_profileMutation = defineMutation((t) => ({
  createOnehyper_profile: t.prismaField(
    createOnehyper_profileMutationObject(t),
  ),
}));
