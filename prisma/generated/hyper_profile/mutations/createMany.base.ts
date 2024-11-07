import { builder } from "../../../builder";
import * as Inputs from "../../inputs";
import {
  defineMutation,
  defineMutationFunction,
  defineMutationPrismaObject,
} from "../../utils";

export const createManyhyper_profileMutationArgs = builder.args((t) => ({
  data: t.field({ type: [Inputs.hyper_profileCreateInput], required: true }),
}));

export const createManyhyper_profileMutationObject = defineMutationFunction(
  (t) =>
    defineMutationPrismaObject({
      type: ["hyper_profile"],
      nullable: false,
      args: createManyhyper_profileMutationArgs,
      resolve: async (_query, _root, args, _context, _info) =>
        await _context.prisma.$transaction(
          args.data.map((data) =>
            _context.prisma.hyper_profile.create({ data }),
          ),
        ),
    }),
);

export const createManyhyper_profileMutation = defineMutation((t) => ({
  createManyhyper_profile: t.prismaField(
    createManyhyper_profileMutationObject(t),
  ),
}));
