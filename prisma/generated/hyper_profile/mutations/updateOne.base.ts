import { builder } from "../../../builder";
import * as Inputs from "../../inputs";
import {
  defineMutation,
  defineMutationFunction,
  defineMutationPrismaObject,
} from "../../utils";

export const updateOnehyper_profileMutationArgs = builder.args((t) => ({
  where: t.field({
    type: Inputs.hyper_profileWhereUniqueInput,
    required: true,
  }),
  data: t.field({ type: Inputs.hyper_profileUpdateInput, required: true }),
}));

export const updateOnehyper_profileMutationObject = defineMutationFunction(
  (t) =>
    defineMutationPrismaObject({
      type: "hyper_profile",
      nullable: true,
      args: updateOnehyper_profileMutationArgs,
      resolve: async (query, _root, args, _context, _info) =>
        await _context.prisma.hyper_profile.update({
          where: args.where,
          data: args.data,
          ...query,
        }),
    }),
);

export const updateOnehyper_profileMutation = defineMutation((t) => ({
  updateOnehyper_profile: t.prismaField(
    updateOnehyper_profileMutationObject(t),
  ),
}));
