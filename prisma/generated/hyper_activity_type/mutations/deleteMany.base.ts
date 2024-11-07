import { builder } from "../../../builder";
import * as Inputs from "../../inputs";
import { BatchPayload } from "../../objects";
import {
  defineMutation,
  defineMutationFunction,
  defineMutationObject,
} from "../../utils";

export const deleteManyhyper_activity_typeMutationArgs = builder.args((t) => ({
  where: t.field({
    type: Inputs.hyper_activity_typeWhereInput,
    required: true,
  }),
}));

export const deleteManyhyper_activity_typeMutationObject =
  defineMutationFunction((t) =>
    defineMutationObject({
      type: BatchPayload,
      nullable: true,
      args: deleteManyhyper_activity_typeMutationArgs,
      resolve: async (_root, args, _context, _info) =>
        await _context.prisma.hyper_activity_type.deleteMany({
          where: args.where,
        }),
    }),
  );

export const deleteManyhyper_activity_typeMutation = defineMutation((t) => ({
  deleteManyhyper_activity_type: t.field(
    deleteManyhyper_activity_typeMutationObject(t),
  ),
}));
