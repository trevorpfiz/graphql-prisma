import * as Inputs from '~/graphql/__generated__/inputs';
import { db } from "~/server/db";
import { builder } from '../../../../schema/builder';
import { defineMutation, defineMutationFunction, defineMutationPrismaObject } from '../../utils';

export const deleteOnehyper_reportMutationArgs = builder.args((t) => ({ where: t.field({ type: Inputs.hyper_reportWhereUniqueInput, required: true }) }))

export const deleteOnehyper_reportMutationObject = defineMutationFunction((t) =>
  defineMutationPrismaObject({
    type: 'hyper_report',
    nullable: true,
    args: deleteOnehyper_reportMutationArgs,
    resolve: async (query, _root, args, _context, _info) =>
      await db.hyper_report.delete({ where: args.where, ...query }),
  }),
);

export const deleteOnehyper_reportMutation = defineMutation((t) => ({
  deleteOnehyper_report: t.prismaField(deleteOnehyper_reportMutationObject(t)),
}));
