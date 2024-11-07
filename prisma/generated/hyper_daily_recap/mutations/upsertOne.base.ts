import { builder } from "../../../builder";
import * as Inputs from "../../inputs";
import {
  defineMutation,
  defineMutationFunction,
  defineMutationPrismaObject,
} from "../../utils";

export const upsertOnehyper_daily_recapMutationArgs = builder.args((t) => ({
  where: t.field({
    type: Inputs.hyper_daily_recapWhereUniqueInput,
    required: true,
  }),
  create: t.field({
    type: Inputs.hyper_daily_recapCreateInput,
    required: true,
  }),
  update: t.field({
    type: Inputs.hyper_daily_recapUpdateInput,
    required: true,
  }),
}));

export const upsertOnehyper_daily_recapMutationObject = defineMutationFunction(
  (t) =>
    defineMutationPrismaObject({
      type: "hyper_daily_recap",
      nullable: false,
      args: upsertOnehyper_daily_recapMutationArgs,
      resolve: async (query, _root, args, _context, _info) =>
        await _context.prisma.hyper_daily_recap.upsert({
          where: args.where,
          create: args.create,
          update: args.update,
          ...query,
        }),
    }),
);

export const upsertOnehyper_daily_recapMutation = defineMutation((t) => ({
  upsertOnehyper_daily_recap: t.prismaField(
    upsertOnehyper_daily_recapMutationObject(t),
  ),
}));
