/* eslint-disable */
import type { Prisma, users, hyper_activity, hyper_activity_type, hyper_cgm_data, hyper_daily_recap, hyper_meal, hyper_profile, hyper_report } from ".prisma/client";
export default interface PrismaTypes {
    users: {
        Name: "users";
        Shape: users;
        Include: Prisma.usersInclude;
        Select: Prisma.usersSelect;
        OrderBy: Prisma.usersOrderByWithRelationInput;
        WhereUnique: Prisma.usersWhereUniqueInput;
        Where: Prisma.usersWhereInput;
        Create: {};
        Update: {};
        RelationName: "hyper_profile";
        ListRelations: never;
        Relations: {
            hyper_profile: {
                Shape: hyper_profile | null;
                Name: "hyper_profile";
                Nullable: true;
            };
        };
    };
    hyper_activity: {
        Name: "hyper_activity";
        Shape: hyper_activity;
        Include: Prisma.hyper_activityInclude;
        Select: Prisma.hyper_activitySelect;
        OrderBy: Prisma.hyper_activityOrderByWithRelationInput;
        WhereUnique: Prisma.hyper_activityWhereUniqueInput;
        Where: Prisma.hyper_activityWhereInput;
        Create: {};
        Update: {};
        RelationName: "hyper_activity_type" | "hyper_profile";
        ListRelations: never;
        Relations: {
            hyper_activity_type: {
                Shape: hyper_activity_type;
                Name: "hyper_activity_type";
                Nullable: false;
            };
            hyper_profile: {
                Shape: hyper_profile;
                Name: "hyper_profile";
                Nullable: false;
            };
        };
    };
    hyper_activity_type: {
        Name: "hyper_activity_type";
        Shape: hyper_activity_type;
        Include: Prisma.hyper_activity_typeInclude;
        Select: Prisma.hyper_activity_typeSelect;
        OrderBy: Prisma.hyper_activity_typeOrderByWithRelationInput;
        WhereUnique: Prisma.hyper_activity_typeWhereUniqueInput;
        Where: Prisma.hyper_activity_typeWhereInput;
        Create: {};
        Update: {};
        RelationName: "hyper_activity";
        ListRelations: "hyper_activity";
        Relations: {
            hyper_activity: {
                Shape: hyper_activity[];
                Name: "hyper_activity";
                Nullable: false;
            };
        };
    };
    hyper_cgm_data: {
        Name: "hyper_cgm_data";
        Shape: hyper_cgm_data;
        Include: Prisma.hyper_cgm_dataInclude;
        Select: Prisma.hyper_cgm_dataSelect;
        OrderBy: Prisma.hyper_cgm_dataOrderByWithRelationInput;
        WhereUnique: Prisma.hyper_cgm_dataWhereUniqueInput;
        Where: Prisma.hyper_cgm_dataWhereInput;
        Create: {};
        Update: {};
        RelationName: "hyper_profile";
        ListRelations: never;
        Relations: {
            hyper_profile: {
                Shape: hyper_profile;
                Name: "hyper_profile";
                Nullable: false;
            };
        };
    };
    hyper_daily_recap: {
        Name: "hyper_daily_recap";
        Shape: hyper_daily_recap;
        Include: Prisma.hyper_daily_recapInclude;
        Select: Prisma.hyper_daily_recapSelect;
        OrderBy: Prisma.hyper_daily_recapOrderByWithRelationInput;
        WhereUnique: Prisma.hyper_daily_recapWhereUniqueInput;
        Where: Prisma.hyper_daily_recapWhereInput;
        Create: {};
        Update: {};
        RelationName: "hyper_profile";
        ListRelations: never;
        Relations: {
            hyper_profile: {
                Shape: hyper_profile;
                Name: "hyper_profile";
                Nullable: false;
            };
        };
    };
    hyper_meal: {
        Name: "hyper_meal";
        Shape: hyper_meal;
        Include: Prisma.hyper_mealInclude;
        Select: Prisma.hyper_mealSelect;
        OrderBy: Prisma.hyper_mealOrderByWithRelationInput;
        WhereUnique: Prisma.hyper_mealWhereUniqueInput;
        Where: Prisma.hyper_mealWhereInput;
        Create: {};
        Update: {};
        RelationName: "hyper_profile";
        ListRelations: never;
        Relations: {
            hyper_profile: {
                Shape: hyper_profile;
                Name: "hyper_profile";
                Nullable: false;
            };
        };
    };
    hyper_profile: {
        Name: "hyper_profile";
        Shape: hyper_profile;
        Include: Prisma.hyper_profileInclude;
        Select: Prisma.hyper_profileSelect;
        OrderBy: Prisma.hyper_profileOrderByWithRelationInput;
        WhereUnique: Prisma.hyper_profileWhereUniqueInput;
        Where: Prisma.hyper_profileWhereInput;
        Create: {};
        Update: {};
        RelationName: "hyper_activity" | "hyper_cgm_data" | "hyper_daily_recap" | "hyper_meal" | "users" | "hyper_report";
        ListRelations: "hyper_activity" | "hyper_cgm_data" | "hyper_daily_recap" | "hyper_meal" | "hyper_report";
        Relations: {
            hyper_activity: {
                Shape: hyper_activity[];
                Name: "hyper_activity";
                Nullable: false;
            };
            hyper_cgm_data: {
                Shape: hyper_cgm_data[];
                Name: "hyper_cgm_data";
                Nullable: false;
            };
            hyper_daily_recap: {
                Shape: hyper_daily_recap[];
                Name: "hyper_daily_recap";
                Nullable: false;
            };
            hyper_meal: {
                Shape: hyper_meal[];
                Name: "hyper_meal";
                Nullable: false;
            };
            users: {
                Shape: users;
                Name: "users";
                Nullable: false;
            };
            hyper_report: {
                Shape: hyper_report[];
                Name: "hyper_report";
                Nullable: false;
            };
        };
    };
    hyper_report: {
        Name: "hyper_report";
        Shape: hyper_report;
        Include: Prisma.hyper_reportInclude;
        Select: Prisma.hyper_reportSelect;
        OrderBy: Prisma.hyper_reportOrderByWithRelationInput;
        WhereUnique: Prisma.hyper_reportWhereUniqueInput;
        Where: Prisma.hyper_reportWhereInput;
        Create: {};
        Update: {};
        RelationName: "hyper_profile";
        ListRelations: never;
        Relations: {
            hyper_profile: {
                Shape: hyper_profile;
                Name: "hyper_profile";
                Nullable: false;
            };
        };
    };
}