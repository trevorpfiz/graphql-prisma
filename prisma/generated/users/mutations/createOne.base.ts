import { builder } from "../../../builder";
import * as Inputs from "../../inputs";
import {
  defineMutation,
  defineMutationFunction,
  defineMutationPrismaObject,
} from "../../utils";

export const createOneusersMutationArgs = builder.args((t) => ({
  data: t.field({ type: Inputs.usersCreateInput, required: true }),
}));

export const createOneusersMutationObject = defineMutationFunction((t) =>
  defineMutationPrismaObject({
    type: "users",
    nullable: false,
    args: createOneusersMutationArgs,
    resolve: async (query, _root, args, _context, _info) =>
      await _context.prisma.users.create({ data: args.data, ...query }),
  }),
);

export const createOneusersMutation = defineMutation((t) => ({
  createOneusers: t.prismaField(createOneusersMutationObject(t)),
}));
