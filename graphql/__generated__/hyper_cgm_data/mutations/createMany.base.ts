import * as Inputs from '~/graphql/__generated__/inputs';import { db } from "~/server/db";
import { builder } from '../../../../builder';
import { defineMutation, defineMutationFunction, defineMutationPrismaObject } from '../../utils';

export const createManyhyper_cgm_dataMutationArgs = builder.args((t) => ({ data: t.field({ type: [Inputs.hyper_cgm_dataCreateInput], required: true }) }))

export const createManyhyper_cgm_dataMutationObject = defineMutationFunction((t) =>
  defineMutationPrismaObject({
    type: ['hyper_cgm_data'],
    nullable: false,
    args: createManyhyper_cgm_dataMutationArgs,
    resolve: async (_query, _root, args, _context, _info) =>
      await db.$transaction(args.data.map((data) => db.hyper_cgm_data.create({ data }))),
  }),
);

export const createManyhyper_cgm_dataMutation = defineMutation((t) => ({
  createManyhyper_cgm_data: t.prismaField(createManyhyper_cgm_dataMutationObject(t)),
}));
