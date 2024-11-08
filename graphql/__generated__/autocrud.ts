import * as users from './users';
import * as hyper_activity from './hyper_activity';
import * as hyper_activity_type from './hyper_activity_type';
import * as hyper_cgm_data from './hyper_cgm_data';
import * as hyper_daily_recap from './hyper_daily_recap';
import * as hyper_meal from './hyper_meal';
import * as hyper_profile from './hyper_profile';
import * as hyper_report from './hyper_report';
import { builder } from '../../schema/builder';
import * as Objects from './objects';

type Model = Objects.Model;

export const Cruds: Record<
  Objects.Model,
  {
    Object: any;
    queries: Record<string, Function>;
    mutations: Record<string, Function>;
  }
> = {
  users: {
    Object: users.usersObject,
    queries: {
      findFirst: users.findFirstusersQueryObject,
      findMany: users.findManyusersQueryObject,
      count: users.countusersQueryObject,
      findUnique: users.findUniqueusersQueryObject,
    },
    mutations: {
      createMany: users.createManyusersMutationObject,
      createOne: users.createOneusersMutationObject,
      deleteMany: users.deleteManyusersMutationObject,
      deleteOne: users.deleteOneusersMutationObject,
      updateMany: users.updateManyusersMutationObject,
      updateOne: users.updateOneusersMutationObject,
      upsertOne: users.upsertOneusersMutationObject,
    },
  },
  hyper_activity: {
    Object: hyper_activity.hyper_activityObject,
    queries: {
      findFirst: hyper_activity.findFirsthyper_activityQueryObject,
      findMany: hyper_activity.findManyhyper_activityQueryObject,
      count: hyper_activity.counthyper_activityQueryObject,
      findUnique: hyper_activity.findUniquehyper_activityQueryObject,
    },
    mutations: {
      createMany: hyper_activity.createManyhyper_activityMutationObject,
      createOne: hyper_activity.createOnehyper_activityMutationObject,
      deleteMany: hyper_activity.deleteManyhyper_activityMutationObject,
      deleteOne: hyper_activity.deleteOnehyper_activityMutationObject,
      updateMany: hyper_activity.updateManyhyper_activityMutationObject,
      updateOne: hyper_activity.updateOnehyper_activityMutationObject,
      upsertOne: hyper_activity.upsertOnehyper_activityMutationObject,
    },
  },
  hyper_activity_type: {
    Object: hyper_activity_type.hyper_activity_typeObject,
    queries: {
      findFirst: hyper_activity_type.findFirsthyper_activity_typeQueryObject,
      findMany: hyper_activity_type.findManyhyper_activity_typeQueryObject,
      count: hyper_activity_type.counthyper_activity_typeQueryObject,
      findUnique: hyper_activity_type.findUniquehyper_activity_typeQueryObject,
    },
    mutations: {
      createMany: hyper_activity_type.createManyhyper_activity_typeMutationObject,
      createOne: hyper_activity_type.createOnehyper_activity_typeMutationObject,
      deleteMany: hyper_activity_type.deleteManyhyper_activity_typeMutationObject,
      deleteOne: hyper_activity_type.deleteOnehyper_activity_typeMutationObject,
      updateMany: hyper_activity_type.updateManyhyper_activity_typeMutationObject,
      updateOne: hyper_activity_type.updateOnehyper_activity_typeMutationObject,
      upsertOne: hyper_activity_type.upsertOnehyper_activity_typeMutationObject,
    },
  },
  hyper_cgm_data: {
    Object: hyper_cgm_data.hyper_cgm_dataObject,
    queries: {
      findFirst: hyper_cgm_data.findFirsthyper_cgm_dataQueryObject,
      findMany: hyper_cgm_data.findManyhyper_cgm_dataQueryObject,
      count: hyper_cgm_data.counthyper_cgm_dataQueryObject,
      findUnique: hyper_cgm_data.findUniquehyper_cgm_dataQueryObject,
    },
    mutations: {
      createMany: hyper_cgm_data.createManyhyper_cgm_dataMutationObject,
      createOne: hyper_cgm_data.createOnehyper_cgm_dataMutationObject,
      deleteMany: hyper_cgm_data.deleteManyhyper_cgm_dataMutationObject,
      deleteOne: hyper_cgm_data.deleteOnehyper_cgm_dataMutationObject,
      updateMany: hyper_cgm_data.updateManyhyper_cgm_dataMutationObject,
      updateOne: hyper_cgm_data.updateOnehyper_cgm_dataMutationObject,
      upsertOne: hyper_cgm_data.upsertOnehyper_cgm_dataMutationObject,
    },
  },
  hyper_daily_recap: {
    Object: hyper_daily_recap.hyper_daily_recapObject,
    queries: {
      findFirst: hyper_daily_recap.findFirsthyper_daily_recapQueryObject,
      findMany: hyper_daily_recap.findManyhyper_daily_recapQueryObject,
      count: hyper_daily_recap.counthyper_daily_recapQueryObject,
      findUnique: hyper_daily_recap.findUniquehyper_daily_recapQueryObject,
    },
    mutations: {
      createMany: hyper_daily_recap.createManyhyper_daily_recapMutationObject,
      createOne: hyper_daily_recap.createOnehyper_daily_recapMutationObject,
      deleteMany: hyper_daily_recap.deleteManyhyper_daily_recapMutationObject,
      deleteOne: hyper_daily_recap.deleteOnehyper_daily_recapMutationObject,
      updateMany: hyper_daily_recap.updateManyhyper_daily_recapMutationObject,
      updateOne: hyper_daily_recap.updateOnehyper_daily_recapMutationObject,
      upsertOne: hyper_daily_recap.upsertOnehyper_daily_recapMutationObject,
    },
  },
  hyper_meal: {
    Object: hyper_meal.hyper_mealObject,
    queries: {
      findFirst: hyper_meal.findFirsthyper_mealQueryObject,
      findMany: hyper_meal.findManyhyper_mealQueryObject,
      count: hyper_meal.counthyper_mealQueryObject,
      findUnique: hyper_meal.findUniquehyper_mealQueryObject,
    },
    mutations: {
      createMany: hyper_meal.createManyhyper_mealMutationObject,
      createOne: hyper_meal.createOnehyper_mealMutationObject,
      deleteMany: hyper_meal.deleteManyhyper_mealMutationObject,
      deleteOne: hyper_meal.deleteOnehyper_mealMutationObject,
      updateMany: hyper_meal.updateManyhyper_mealMutationObject,
      updateOne: hyper_meal.updateOnehyper_mealMutationObject,
      upsertOne: hyper_meal.upsertOnehyper_mealMutationObject,
    },
  },
  hyper_profile: {
    Object: hyper_profile.hyper_profileObject,
    queries: {
      findFirst: hyper_profile.findFirsthyper_profileQueryObject,
      findMany: hyper_profile.findManyhyper_profileQueryObject,
      count: hyper_profile.counthyper_profileQueryObject,
      findUnique: hyper_profile.findUniquehyper_profileQueryObject,
    },
    mutations: {
      createMany: hyper_profile.createManyhyper_profileMutationObject,
      createOne: hyper_profile.createOnehyper_profileMutationObject,
      deleteMany: hyper_profile.deleteManyhyper_profileMutationObject,
      deleteOne: hyper_profile.deleteOnehyper_profileMutationObject,
      updateMany: hyper_profile.updateManyhyper_profileMutationObject,
      updateOne: hyper_profile.updateOnehyper_profileMutationObject,
      upsertOne: hyper_profile.upsertOnehyper_profileMutationObject,
    },
  },
  hyper_report: {
    Object: hyper_report.hyper_reportObject,
    queries: {
      findFirst: hyper_report.findFirsthyper_reportQueryObject,
      findMany: hyper_report.findManyhyper_reportQueryObject,
      count: hyper_report.counthyper_reportQueryObject,
      findUnique: hyper_report.findUniquehyper_reportQueryObject,
    },
    mutations: {
      createMany: hyper_report.createManyhyper_reportMutationObject,
      createOne: hyper_report.createOnehyper_reportMutationObject,
      deleteMany: hyper_report.deleteManyhyper_reportMutationObject,
      deleteOne: hyper_report.deleteOnehyper_reportMutationObject,
      updateMany: hyper_report.updateManyhyper_reportMutationObject,
      updateOne: hyper_report.updateOnehyper_reportMutationObject,
      upsertOne: hyper_report.upsertOnehyper_reportMutationObject,
    },
  },
};

const crudEntries = Object.entries(Cruds);

type ResolverType = "Query" | "Mutation";
function generateResolversByType(type: ResolverType, opts?: CrudOptions) {
  return crudEntries
    .filter(([modelName]) => includeModel(modelName, opts))
    .map(([modelName, config]) => {
      const resolverEntries = Object.entries(config[type === "Query" ? "queries" : "mutations"]);

      return resolverEntries.map(([operationName, resolverObjectDefiner]) => {
        const resolverName = operationName + modelName;
        const isntPrismaFieldList = ["count", "deleteMany", "updateMany"];
        const isPrismaField = !isntPrismaFieldList.includes(operationName);

        const getFields = (t: any) => {
          const field = resolverObjectDefiner(t);
          const handledField = opts?.handleResolver
            ? opts.handleResolver({
                field,
                modelName: modelName as Model,
                operationName,
                resolverName,
                t,
                isPrismaField,
                type,
              })
            : field;

          return {
            [resolverName]: isPrismaField
              ? t.prismaField(handledField)
              : t.field(handledField),
          }
        }

        return type === "Query"
          ? builder.queryFields((t) => getFields(t))
          : builder.mutationFields((t) => getFields(t));
      });
    });
}

export function generateAllObjects(opts?: CrudOptions) {
  return crudEntries
    .filter(([md]) => includeModel(md, opts))
    .map(([modelName, { Object }]) => {
      return builder.prismaObject(modelName as Model, Object); // Objects is all imports
    });
}

export function generateAllQueries(opts?: CrudOptions) {
  generateResolversByType("Query", opts);
}

export function generateAllMutations(opts?: CrudOptions) {
  generateResolversByType("Mutation", opts);
}

export function generateAllResolvers(opts?: CrudOptions) {
  generateResolversByType("Mutation", opts);
  generateResolversByType("Query", opts);
}

type CrudOptions = {
  include?: Model[];
  exclude?: Model[];
  /**
   * Caution: This is not type safe
   * Wrap all queries/mutations to override args, run extra code in resolve function (ie: throw errors, logs), apply plugins, etc.
   */
  handleResolver?: (props: {
    modelName: Model;
    field: any;
    operationName: string;
    resolverName: string;
    t: any;
    isPrismaField: boolean;
    type: ResolverType;
  }) => any;
};

const includeModel = (model: string, opts?: CrudOptions): boolean => {
  if (!opts) return true;
  if (opts.include) return opts.include.includes(model as Model);
  if (opts.exclude) return !opts.exclude.includes(model as Model);
  return true;
};

export function generateAllCrud(opts?: CrudOptions) {
  generateAllObjects(opts);
  generateAllQueries(opts);
  generateAllMutations(opts);
}
