import * as Inputs from '~/graphql/__generated__/inputs';
import { db } from "~/server/db";
import { builder } from '../../../../schema/builder';
import { defineMutation, defineMutationFunction, defineMutationPrismaObject } from '../../utils';

export const upsertOnehyper_activity_typeMutationArgs = builder.args((t) => ({
      where: t.field({ type: Inputs.hyper_activity_typeWhereUniqueInput, required: true }),
      create: t.field({ type: Inputs.hyper_activity_typeCreateInput, required: true }),
      update: t.field({ type: Inputs.hyper_activity_typeUpdateInput, required: true }),
    }))

export const upsertOnehyper_activity_typeMutationObject = defineMutationFunction((t) =>
  defineMutationPrismaObject({
    type: 'hyper_activity_type',
    nullable: false,
    args: upsertOnehyper_activity_typeMutationArgs,
    resolve: async (query, _root, args, _context, _info) =>
      await db.hyper_activity_type.upsert({
        where: args.where,
        create: args.create,
        update: args.update,
        ...query,
      }),
  }),
);

export const upsertOnehyper_activity_typeMutation = defineMutation((t) => ({
  upsertOnehyper_activity_type: t.prismaField(upsertOnehyper_activity_typeMutationObject(t)),
}));
