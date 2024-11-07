import * as Inputs from '~/graphql/__generated__/inputs';import { db } from "~/server/db";
import { builder } from '../../../../builder';
import { defineMutation, defineMutationFunction, defineMutationPrismaObject } from '../../utils';

export const upsertOnehyper_reportMutationArgs = builder.args((t) => ({
      where: t.field({ type: Inputs.hyper_reportWhereUniqueInput, required: true }),
      create: t.field({ type: Inputs.hyper_reportCreateInput, required: true }),
      update: t.field({ type: Inputs.hyper_reportUpdateInput, required: true }),
    }))

export const upsertOnehyper_reportMutationObject = defineMutationFunction((t) =>
  defineMutationPrismaObject({
    type: 'hyper_report',
    nullable: false,
    args: upsertOnehyper_reportMutationArgs,
    resolve: async (query, _root, args, _context, _info) =>
      await db.hyper_report.upsert({
        where: args.where,
        create: args.create,
        update: args.update,
        ...query,
      }),
  }),
);

export const upsertOnehyper_reportMutation = defineMutation((t) => ({
  upsertOnehyper_report: t.prismaField(upsertOnehyper_reportMutationObject(t)),
}));
