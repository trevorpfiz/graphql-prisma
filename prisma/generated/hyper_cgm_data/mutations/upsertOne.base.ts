import { builder } from "../../../builder";
import * as Inputs from "../../inputs";
import {
  defineMutation,
  defineMutationFunction,
  defineMutationPrismaObject,
} from "../../utils";

export const upsertOnehyper_cgm_dataMutationArgs = builder.args((t) => ({
  where: t.field({
    type: Inputs.hyper_cgm_dataWhereUniqueInput,
    required: true,
  }),
  create: t.field({ type: Inputs.hyper_cgm_dataCreateInput, required: true }),
  update: t.field({ type: Inputs.hyper_cgm_dataUpdateInput, required: true }),
}));

export const upsertOnehyper_cgm_dataMutationObject = defineMutationFunction(
  (t) =>
    defineMutationPrismaObject({
      type: "hyper_cgm_data",
      nullable: false,
      args: upsertOnehyper_cgm_dataMutationArgs,
      resolve: async (query, _root, args, _context, _info) =>
        await _context.prisma.hyper_cgm_data.upsert({
          where: args.where,
          create: args.create,
          update: args.update,
          ...query,
        }),
    }),
);

export const upsertOnehyper_cgm_dataMutation = defineMutation((t) => ({
  upsertOnehyper_cgm_data: t.prismaField(
    upsertOnehyper_cgm_dataMutationObject(t),
  ),
}));
