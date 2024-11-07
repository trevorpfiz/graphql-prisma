import { builder } from "../../../builder";
import * as Inputs from "../../inputs";
import {
  defineMutation,
  defineMutationFunction,
  defineMutationPrismaObject,
} from "../../utils";

export const deleteOnehyper_activity_typeMutationArgs = builder.args((t) => ({
  where: t.field({
    type: Inputs.hyper_activity_typeWhereUniqueInput,
    required: true,
  }),
}));

export const deleteOnehyper_activity_typeMutationObject =
  defineMutationFunction((t) =>
    defineMutationPrismaObject({
      type: "hyper_activity_type",
      nullable: true,
      args: deleteOnehyper_activity_typeMutationArgs,
      resolve: async (query, _root, args, _context, _info) =>
        await _context.prisma.hyper_activity_type.delete({
          where: args.where,
          ...query,
        }),
    }),
  );

export const deleteOnehyper_activity_typeMutation = defineMutation((t) => ({
  deleteOnehyper_activity_type: t.prismaField(
    deleteOnehyper_activity_typeMutationObject(t),
  ),
}));
