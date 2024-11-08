import * as Inputs from '~/graphql/__generated__/inputs';
import { BatchPayload } from '../../objects';
import { db } from "~/server/db";
import { builder } from '../../../../schema/builder';
import { defineMutation, defineMutationFunction, defineMutationObject } from '../../utils';

export const updateManyhyper_reportMutationArgs = builder.args((t) => ({
      where: t.field({ type: Inputs.hyper_reportWhereInput, required: false }),
      data: t.field({ type: Inputs.hyper_reportUpdateManyMutationInput, required: true }),
    }))

export const updateManyhyper_reportMutationObject = defineMutationFunction((t) =>
  defineMutationObject({
    type: BatchPayload,
    nullable: false,
    args: updateManyhyper_reportMutationArgs,
    resolve: async (_root, args, _context, _info) =>
      await db.hyper_report.updateMany({ where: args.where || undefined, data: args.data }),
  }),
);

export const updateManyhyper_reportMutation = defineMutation((t) => ({
  updateManyhyper_report: t.field(updateManyhyper_reportMutationObject(t)),
}));
