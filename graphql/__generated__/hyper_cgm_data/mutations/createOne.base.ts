import * as Inputs from '~/graphql/__generated__/inputs';import { db } from "~/server/db";
import { builder } from '../../../../builder';
import { defineMutation, defineMutationFunction, defineMutationPrismaObject } from '../../utils';

export const createOnehyper_cgm_dataMutationArgs = builder.args((t) => ({ data: t.field({ type: Inputs.hyper_cgm_dataCreateInput, required: true }) }))

export const createOnehyper_cgm_dataMutationObject = defineMutationFunction((t) =>
  defineMutationPrismaObject({
    type: 'hyper_cgm_data',
    nullable: false,
    args: createOnehyper_cgm_dataMutationArgs,
    resolve: async (query, _root, args, _context, _info) =>
      await db.hyper_cgm_data.create({ data: args.data, ...query }),
  }),
);

export const createOnehyper_cgm_dataMutation = defineMutation((t) => ({
  createOnehyper_cgm_data: t.prismaField(createOnehyper_cgm_dataMutationObject(t)),
}));
