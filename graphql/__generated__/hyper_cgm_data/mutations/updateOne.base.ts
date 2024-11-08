import * as Inputs from '~/graphql/__generated__/inputs';
import { db } from "~/server/db";
import { builder } from '../../../../schema/builder';
import { defineMutation, defineMutationFunction, defineMutationPrismaObject } from '../../utils';

export const updateOnehyper_cgm_dataMutationArgs = builder.args((t) => ({
      where: t.field({ type: Inputs.hyper_cgm_dataWhereUniqueInput, required: true }),
      data: t.field({ type: Inputs.hyper_cgm_dataUpdateInput, required: true }),
    }))

export const updateOnehyper_cgm_dataMutationObject = defineMutationFunction((t) =>
  defineMutationPrismaObject({
    type: 'hyper_cgm_data',
    nullable: true,
    args: updateOnehyper_cgm_dataMutationArgs,
    resolve: async (query, _root, args, _context, _info) =>
      await db.hyper_cgm_data.update({ where: args.where, data: args.data, ...query }),
  }),
);

export const updateOnehyper_cgm_dataMutation = defineMutation((t) => ({
  updateOnehyper_cgm_data: t.prismaField(updateOnehyper_cgm_dataMutationObject(t)),
}));
