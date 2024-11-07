import { builder } from "../../../builder";
import * as Inputs from "../../inputs";
import {
  defineMutation,
  defineMutationFunction,
  defineMutationPrismaObject,
} from "../../utils";

export const deleteOnehyper_cgm_dataMutationArgs = builder.args((t) => ({
  where: t.field({
    type: Inputs.hyper_cgm_dataWhereUniqueInput,
    required: true,
  }),
}));

export const deleteOnehyper_cgm_dataMutationObject = defineMutationFunction(
  (t) =>
    defineMutationPrismaObject({
      type: "hyper_cgm_data",
      nullable: true,
      args: deleteOnehyper_cgm_dataMutationArgs,
      resolve: async (query, _root, args, _context, _info) =>
        await _context.prisma.hyper_cgm_data.delete({
          where: args.where,
          ...query,
        }),
    }),
);

export const deleteOnehyper_cgm_dataMutation = defineMutation((t) => ({
  deleteOnehyper_cgm_data: t.prismaField(
    deleteOnehyper_cgm_dataMutationObject(t),
  ),
}));
