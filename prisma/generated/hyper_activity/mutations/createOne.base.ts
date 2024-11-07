import { builder } from "../../../builder";
import * as Inputs from "../../inputs";
import {
  defineMutation,
  defineMutationFunction,
  defineMutationPrismaObject,
} from "../../utils";

export const createOnehyper_activityMutationArgs = builder.args((t) => ({
  data: t.field({ type: Inputs.hyper_activityCreateInput, required: true }),
}));

export const createOnehyper_activityMutationObject = defineMutationFunction(
  (t) =>
    defineMutationPrismaObject({
      type: "hyper_activity",
      nullable: false,
      args: createOnehyper_activityMutationArgs,
      resolve: async (query, _root, args, _context, _info) =>
        await _context.prisma.hyper_activity.create({
          data: args.data,
          ...query,
        }),
    }),
);

export const createOnehyper_activityMutation = defineMutation((t) => ({
  createOnehyper_activity: t.prismaField(
    createOnehyper_activityMutationObject(t),
  ),
}));
