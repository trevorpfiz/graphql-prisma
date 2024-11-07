import { builder } from "../../../builder";
import * as Inputs from "../../inputs";
import {
  defineMutation,
  defineMutationFunction,
  defineMutationPrismaObject,
} from "../../utils";

export const deleteOnehyper_activityMutationArgs = builder.args((t) => ({
  where: t.field({
    type: Inputs.hyper_activityWhereUniqueInput,
    required: true,
  }),
}));

export const deleteOnehyper_activityMutationObject = defineMutationFunction(
  (t) =>
    defineMutationPrismaObject({
      type: "hyper_activity",
      nullable: true,
      args: deleteOnehyper_activityMutationArgs,
      resolve: async (query, _root, args, _context, _info) =>
        await _context.prisma.hyper_activity.delete({
          where: args.where,
          ...query,
        }),
    }),
);

export const deleteOnehyper_activityMutation = defineMutation((t) => ({
  deleteOnehyper_activity: t.prismaField(
    deleteOnehyper_activityMutationObject(t),
  ),
}));
