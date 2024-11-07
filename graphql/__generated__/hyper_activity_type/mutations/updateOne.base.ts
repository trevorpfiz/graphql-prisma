import * as Inputs from '~/graphql/__generated__/inputs';import { db } from "~/server/db";
import { builder } from '../../../../builder';
import { defineMutation, defineMutationFunction, defineMutationPrismaObject } from '../../utils';

export const updateOnehyper_activity_typeMutationArgs = builder.args((t) => ({
      where: t.field({ type: Inputs.hyper_activity_typeWhereUniqueInput, required: true }),
      data: t.field({ type: Inputs.hyper_activity_typeUpdateInput, required: true }),
    }))

export const updateOnehyper_activity_typeMutationObject = defineMutationFunction((t) =>
  defineMutationPrismaObject({
    type: 'hyper_activity_type',
    nullable: true,
    args: updateOnehyper_activity_typeMutationArgs,
    resolve: async (query, _root, args, _context, _info) =>
      await db.hyper_activity_type.update({ where: args.where, data: args.data, ...query }),
  }),
);

export const updateOnehyper_activity_typeMutation = defineMutation((t) => ({
  updateOnehyper_activity_type: t.prismaField(updateOnehyper_activity_typeMutationObject(t)),
}));
