import * as Inputs from '~/graphql/__generated__/inputs';
import { BatchPayload } from '../../objects';
import { db } from "~/server/db";
import { builder } from '../../../../schema/builder';
import { defineMutation, defineMutationFunction, defineMutationObject } from '../../utils';

export const deleteManyhyper_reportMutationArgs = builder.args((t) => ({ where: t.field({ type: Inputs.hyper_reportWhereInput, required: true }) }))

export const deleteManyhyper_reportMutationObject = defineMutationFunction((t) =>
  defineMutationObject({
    type: BatchPayload,
    nullable: true,
    args: deleteManyhyper_reportMutationArgs,
    resolve: async (_root, args, _context, _info) =>
      await db.hyper_report.deleteMany({ where: args.where }),
  }),
);

export const deleteManyhyper_reportMutation = defineMutation((t) => ({
  deleteManyhyper_report: t.field(deleteManyhyper_reportMutationObject(t)),
}));
