import { builder } from "../../../builder";
import * as Inputs from "../../inputs";
import { BatchPayload } from "../../objects";
import {
  defineMutation,
  defineMutationFunction,
  defineMutationObject,
} from "../../utils";

export const updateManyhyper_profileMutationArgs = builder.args((t) => ({
  where: t.field({ type: Inputs.hyper_profileWhereInput, required: false }),
  data: t.field({
    type: Inputs.hyper_profileUpdateManyMutationInput,
    required: true,
  }),
}));

export const updateManyhyper_profileMutationObject = defineMutationFunction(
  (t) =>
    defineMutationObject({
      type: BatchPayload,
      nullable: false,
      args: updateManyhyper_profileMutationArgs,
      resolve: async (_root, args, _context, _info) =>
        await _context.prisma.hyper_profile.updateMany({
          where: args.where || undefined,
          data: args.data,
        }),
    }),
);

export const updateManyhyper_profileMutation = defineMutation((t) => ({
  updateManyhyper_profile: t.field(updateManyhyper_profileMutationObject(t)),
}));
