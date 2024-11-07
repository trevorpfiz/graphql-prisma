import { builder } from "../../../builder";
import * as Inputs from "../../inputs";
import {
  defineQuery,
  defineQueryFunction,
  defineQueryPrismaObject,
} from "../../utils";

export const findUniqueusersQueryArgs = builder.args((t) => ({
  where: t.field({ type: Inputs.usersWhereUniqueInput, required: true }),
}));

export const findUniqueusersQueryObject = defineQueryFunction((t) =>
  defineQueryPrismaObject({
    type: "users",
    nullable: true,
    args: findUniqueusersQueryArgs,
    resolve: async (query, _root, args, _context, _info) =>
      await _context.prisma.users.findUnique({ where: args.where, ...query }),
  }),
);

export const findUniqueusersQuery = defineQuery((t) => ({
  findUniqueusers: t.prismaField(findUniqueusersQueryObject(t)),
}));
