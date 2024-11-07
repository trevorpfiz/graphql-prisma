import * as Inputs from '~/graphql/__generated__/inputs';import { db } from "~/server/db";
import { builder } from '../../../../builder';
import { defineMutation, defineMutationFunction, defineMutationPrismaObject } from '../../utils';

export const createManyhyper_activity_typeMutationArgs = builder.args((t) => ({ data: t.field({ type: [Inputs.hyper_activity_typeCreateInput], required: true }) }))

export const createManyhyper_activity_typeMutationObject = defineMutationFunction((t) =>
  defineMutationPrismaObject({
    type: ['hyper_activity_type'],
    nullable: false,
    args: createManyhyper_activity_typeMutationArgs,
    resolve: async (_query, _root, args, _context, _info) =>
      await db.$transaction(args.data.map((data) => db.hyper_activity_type.create({ data }))),
  }),
);

export const createManyhyper_activity_typeMutation = defineMutation((t) => ({
  createManyhyper_activity_type: t.prismaField(createManyhyper_activity_typeMutationObject(t)),
}));
