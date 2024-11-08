import * as Inputs from '~/graphql/__generated__/inputs';
import { BatchPayload } from '../../objects';
import { db } from "~/server/db";
import { builder } from '../../../../schema/builder';
import { defineMutation, defineMutationFunction, defineMutationObject } from '../../utils';

export const updateManyhyper_cgm_dataMutationArgs = builder.args((t) => ({
      where: t.field({ type: Inputs.hyper_cgm_dataWhereInput, required: false }),
      data: t.field({ type: Inputs.hyper_cgm_dataUpdateManyMutationInput, required: true }),
    }))

export const updateManyhyper_cgm_dataMutationObject = defineMutationFunction((t) =>
  defineMutationObject({
    type: BatchPayload,
    nullable: false,
    args: updateManyhyper_cgm_dataMutationArgs,
    resolve: async (_root, args, _context, _info) =>
      await db.hyper_cgm_data.updateMany({ where: args.where || undefined, data: args.data }),
  }),
);

export const updateManyhyper_cgm_dataMutation = defineMutation((t) => ({
  updateManyhyper_cgm_data: t.field(updateManyhyper_cgm_dataMutationObject(t)),
}));
