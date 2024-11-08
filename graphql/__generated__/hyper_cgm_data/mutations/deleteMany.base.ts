import * as Inputs from '~/graphql/__generated__/inputs';
import { BatchPayload } from '../../objects';
import { db } from "~/server/db";
import { builder } from '../../../../schema/builder';
import { defineMutation, defineMutationFunction, defineMutationObject } from '../../utils';

export const deleteManyhyper_cgm_dataMutationArgs = builder.args((t) => ({ where: t.field({ type: Inputs.hyper_cgm_dataWhereInput, required: true }) }))

export const deleteManyhyper_cgm_dataMutationObject = defineMutationFunction((t) =>
  defineMutationObject({
    type: BatchPayload,
    nullable: true,
    args: deleteManyhyper_cgm_dataMutationArgs,
    resolve: async (_root, args, _context, _info) =>
      await db.hyper_cgm_data.deleteMany({ where: args.where }),
  }),
);

export const deleteManyhyper_cgm_dataMutation = defineMutation((t) => ({
  deleteManyhyper_cgm_data: t.field(deleteManyhyper_cgm_dataMutationObject(t)),
}));
