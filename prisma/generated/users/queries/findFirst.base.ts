import { builder } from "../../../builder";
import * as Inputs from "../../inputs";
import {
  defineQuery,
  defineQueryFunction,
  defineQueryPrismaObject,
} from "../../utils";

export const findFirstusersQueryArgs = builder.args((t) => ({
  where: t.field({ type: Inputs.usersWhereInput, required: false }),
  orderBy: t.field({
    type: [Inputs.usersOrderByWithRelationInput],
    required: false,
  }),
  cursor: t.field({ type: Inputs.usersWhereUniqueInput, required: false }),
  take: t.field({ type: "Int", required: false }),
  skip: t.field({ type: "Int", required: false }),
  distinct: t.field({ type: [Inputs.UsersScalarFieldEnum], required: false }),
}));

export const findFirstusersQueryObject = defineQueryFunction((t) =>
  defineQueryPrismaObject({
    type: "users",
    nullable: true,
    args: findFirstusersQueryArgs,
    resolve: async (query, _root, args, _context, _info) =>
      await _context.prisma.users.findFirst({
        where: args.where || undefined,
        cursor: args.cursor || undefined,
        take: args.take || undefined,
        distinct: args.distinct || undefined,
        skip: args.skip || undefined,
        orderBy: args.orderBy || undefined,
        ...query,
      }),
  }),
);

export const findFirstusersQuery = defineQuery((t) => ({
  findFirstusers: t.prismaField(findFirstusersQueryObject(t)),
}));
