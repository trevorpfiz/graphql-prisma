import { builder } from "../../../builder";
import * as Inputs from "../../inputs";
import { BatchPayload } from "../../objects";
import {
  defineMutation,
  defineMutationFunction,
  defineMutationObject,
} from "../../utils";

export const deleteManyusersMutationArgs = builder.args((t) => ({
  where: t.field({ type: Inputs.usersWhereInput, required: true }),
}));

export const deleteManyusersMutationObject = defineMutationFunction((t) =>
  defineMutationObject({
    type: BatchPayload,
    nullable: true,
    args: deleteManyusersMutationArgs,
    resolve: async (_root, args, _context, _info) =>
      await _context.prisma.users.deleteMany({ where: args.where }),
  }),
);

export const deleteManyusersMutation = defineMutation((t) => ({
  deleteManyusers: t.field(deleteManyusersMutationObject(t)),
}));
