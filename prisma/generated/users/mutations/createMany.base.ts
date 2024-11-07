import { builder } from "../../../builder";
import * as Inputs from "../../inputs";
import {
  defineMutation,
  defineMutationFunction,
  defineMutationPrismaObject,
} from "../../utils";

export const createManyusersMutationArgs = builder.args((t) => ({
  data: t.field({ type: [Inputs.usersCreateInput], required: true }),
}));

export const createManyusersMutationObject = defineMutationFunction((t) =>
  defineMutationPrismaObject({
    type: ["users"],
    nullable: false,
    args: createManyusersMutationArgs,
    resolve: async (_query, _root, args, _context, _info) =>
      await _context.prisma.$transaction(
        args.data.map((data) => _context.prisma.users.create({ data })),
      ),
  }),
);

export const createManyusersMutation = defineMutation((t) => ({
  createManyusers: t.prismaField(createManyusersMutationObject(t)),
}));
