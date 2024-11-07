import { builder } from "../../../builder";
import * as Inputs from "../../inputs";
import { BatchPayload } from "../../objects";
import {
  defineMutation,
  defineMutationFunction,
  defineMutationObject,
} from "../../utils";

export const updateManyhyper_activityMutationArgs = builder.args((t) => ({
  where: t.field({ type: Inputs.hyper_activityWhereInput, required: false }),
  data: t.field({
    type: Inputs.hyper_activityUpdateManyMutationInput,
    required: true,
  }),
}));

export const updateManyhyper_activityMutationObject = defineMutationFunction(
  (t) =>
    defineMutationObject({
      type: BatchPayload,
      nullable: false,
      args: updateManyhyper_activityMutationArgs,
      resolve: async (_root, args, _context, _info) =>
        await _context.prisma.hyper_activity.updateMany({
          where: args.where || undefined,
          data: args.data,
        }),
    }),
);

export const updateManyhyper_activityMutation = defineMutation((t) => ({
  updateManyhyper_activity: t.field(updateManyhyper_activityMutationObject(t)),
}));
