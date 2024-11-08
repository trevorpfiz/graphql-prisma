import * as Inputs from '~/graphql/__generated__/inputs';
import { db } from "~/server/db";
import { builder } from '../../../../schema/builder';
import { defineMutation, defineMutationFunction, defineMutationPrismaObject } from '../../utils';

export const createManyhyper_activityMutationArgs = builder.args((t) => ({ data: t.field({ type: [Inputs.hyper_activityCreateInput], required: true }) }))

export const createManyhyper_activityMutationObject = defineMutationFunction((t) =>
  defineMutationPrismaObject({
    type: ['hyper_activity'],
    nullable: false,
    args: createManyhyper_activityMutationArgs,
    resolve: async (_query, _root, args, _context, _info) =>
      await db.$transaction(args.data.map((data) => db.hyper_activity.create({ data }))),
  }),
);

export const createManyhyper_activityMutation = defineMutation((t) => ({
  createManyhyper_activity: t.prismaField(createManyhyper_activityMutationObject(t)),
}));
