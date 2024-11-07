import { builder } from "../../../builder";
import * as Inputs from "../../inputs";
import { BatchPayload } from "../../objects";
import {
  defineMutation,
  defineMutationFunction,
  defineMutationObject,
} from "../../utils";

export const updateManyusersMutationArgs = builder.args((t) => ({
  where: t.field({ type: Inputs.usersWhereInput, required: false }),
  data: t.field({ type: Inputs.usersUpdateManyMutationInput, required: true }),
}));

export const updateManyusersMutationObject = defineMutationFunction((t) =>
  defineMutationObject({
    type: BatchPayload,
    nullable: false,
    args: updateManyusersMutationArgs,
    resolve: async (_root, args, _context, _info) =>
      await _context.prisma.users.updateMany({
        where: args.where || undefined,
        data: args.data,
      }),
  }),
);

export const updateManyusersMutation = defineMutation((t) => ({
  updateManyusers: t.field(updateManyusersMutationObject(t)),
}));