import * as Inputs from '~/graphql/__generated__/inputs';import { db } from "~/server/db";
import { builder } from '../../../../builder';
import { defineMutation, defineMutationFunction, defineMutationPrismaObject } from '../../utils';

export const createOnehyper_activity_typeMutationArgs = builder.args((t) => ({ data: t.field({ type: Inputs.hyper_activity_typeCreateInput, required: true }) }))

export const createOnehyper_activity_typeMutationObject = defineMutationFunction((t) =>
  defineMutationPrismaObject({
    type: 'hyper_activity_type',
    nullable: false,
    args: createOnehyper_activity_typeMutationArgs,
    resolve: async (query, _root, args, _context, _info) =>
      await db.hyper_activity_type.create({ data: args.data, ...query }),
  }),
);

export const createOnehyper_activity_typeMutation = defineMutation((t) => ({
  createOnehyper_activity_type: t.prismaField(createOnehyper_activity_typeMutationObject(t)),
}));
