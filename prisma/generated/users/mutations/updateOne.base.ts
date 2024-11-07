import { builder } from "../../../builder";
import * as Inputs from "../../inputs";
import {
  defineMutation,
  defineMutationFunction,
  defineMutationPrismaObject,
} from "../../utils";

export const updateOneusersMutationArgs = builder.args((t) => ({
  where: t.field({ type: Inputs.usersWhereUniqueInput, required: true }),
  data: t.field({ type: Inputs.usersUpdateInput, required: true }),
}));

export const updateOneusersMutationObject = defineMutationFunction((t) =>
  defineMutationPrismaObject({
    type: "users",
    nullable: true,
    args: updateOneusersMutationArgs,
    resolve: async (query, _root, args, _context, _info) =>
      await _context.prisma.users.update({
        where: args.where,
        data: args.data,
        ...query,
      }),
  }),
);

export const updateOneusersMutation = defineMutation((t) => ({
  updateOneusers: t.prismaField(updateOneusersMutationObject(t)),
}));
