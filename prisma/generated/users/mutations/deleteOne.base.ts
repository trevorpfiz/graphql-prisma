import { builder } from "../../../builder";
import * as Inputs from "../../inputs";
import {
  defineMutation,
  defineMutationFunction,
  defineMutationPrismaObject,
} from "../../utils";

export const deleteOneusersMutationArgs = builder.args((t) => ({
  where: t.field({ type: Inputs.usersWhereUniqueInput, required: true }),
}));

export const deleteOneusersMutationObject = defineMutationFunction((t) =>
  defineMutationPrismaObject({
    type: "users",
    nullable: true,
    args: deleteOneusersMutationArgs,
    resolve: async (query, _root, args, _context, _info) =>
      await _context.prisma.users.delete({ where: args.where, ...query }),
  }),
);

export const deleteOneusersMutation = defineMutation((t) => ({
  deleteOneusers: t.prismaField(deleteOneusersMutationObject(t)),
}));
