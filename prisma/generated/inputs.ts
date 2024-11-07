// @ts-nocheck
import { builder } from "../builder";
import { Prisma } from ".prisma/client";

type Filters = {
  string: Prisma.StringFieldUpdateOperationsInput;
  nullableString: Prisma.NullableStringFieldUpdateOperationsInput;
  dateTime: Prisma.DateTimeFieldUpdateOperationsInput;
  nullableDateTime: Prisma.NullableDateTimeFieldUpdateOperationsInput;
  int: Prisma.IntFieldUpdateOperationsInput;
  nullableInt: Prisma.NullableIntFieldUpdateOperationsInput;
  bool: Prisma.BoolFieldUpdateOperationsInput;
  nullableBool: Prisma.NullableBoolFieldUpdateOperationsInput;
  bigInt: Prisma.BigIntFieldUpdateOperationsInput;
  nullableBigInt: Prisma.NullableBigIntFieldUpdateOperationsInput;
  bytes: Prisma.BytesFieldUpdateOperationsInput;
  nullableBytes: Prisma.NullableBytesFieldUpdateOperationsInput;
  float: Prisma.FloatFieldUpdateOperationsInput;
  nullableFloat: Prisma.NullableFloatFieldUpdateOperationsInput;
  decimal: Prisma.DecimalFieldUpdateOperationsInput;
  nullableDecimal: Prisma.NullableDecimalFieldUpdateOperationsInput;
};

type ApplyFilters<InputField> = {
  [F in keyof Filters]: 0 extends 1 & Filters[F]
    ? never
    : Filters[F] extends InputField
      ? Filters[F]
      : never;
}[keyof Filters];

type PrismaUpdateOperationsInputFilter<T extends object> = {
  [K in keyof T]: [ApplyFilters<T[K]>] extends [never]
    ? T[K]
    : ApplyFilters<T[K]>;
};

export const DateTime = builder.scalarType("DateTime", {
  parseValue: (value) => {
    try {
      const date = new Date(value);
      if (date.toString() === "Invalid Date") throw new Error("Invalid Date");
      return date;
    } catch (error) {
      throw new Error("Invalid Date");
    }
  },
  serialize: (value) => (value ? new Date(value) : null),
});

export const Decimal = builder.scalarType("Decimal", {
  serialize: (value) => parseFloat(value),
  parseValue: (value) => {
    try {
      return new Prisma.Decimal(parseFloat(value));
    } catch (error) {
      throw new Error("Invalid Decimal");
    }
  },
});

export const Json = builder.scalarType("Json", {
  serialize: (value) => value,
});

export const TransactionIsolationLevel = builder.enumType(
  "TransactionIsolationLevel",
  {
    values: [
      "ReadUncommitted",
      "ReadCommitted",
      "RepeatableRead",
      "Serializable",
    ] as const,
  },
);

export const UsersScalarFieldEnum = builder.enumType("UsersScalarFieldEnum", {
  values: ["id"] as const,
});

export const Hyper_activityScalarFieldEnum = builder.enumType(
  "Hyper_activityScalarFieldEnum",
  {
    values: [
      "id",
      "activity_type_id",
      "profile_id",
      "created_at",
      "updatedAt",
    ] as const,
  },
);

export const Hyper_activity_typeScalarFieldEnum = builder.enumType(
  "Hyper_activity_typeScalarFieldEnum",
  {
    values: ["id", "name"] as const,
  },
);

export const Hyper_cgm_dataScalarFieldEnum = builder.enumType(
  "Hyper_cgm_dataScalarFieldEnum",
  {
    values: [
      "id",
      "dexcom_user_id",
      "record_id",
      "system_time",
      "display_time",
      "glucose_value",
      "trend",
      "trend_rate",
      "transmitter_id",
      "transmitter_generation",
      "display_device",
      "profile_id",
      "created_at",
      "updatedAt",
      "transmitter_ticks",
      "status",
      "unit",
      "rate_unit",
    ] as const,
  },
);

export const Hyper_daily_recapScalarFieldEnum = builder.enumType(
  "Hyper_daily_recapScalarFieldEnum",
  {
    values: [
      "id",
      "date",
      "average_glucose",
      "minimum_glucose",
      "maximum_glucose",
      "glucose_variability",
      "time_in_ranges",
      "total_readings",
      "profile_id",
      "created_at",
      "updatedAt",
      "timezone",
    ] as const,
  },
);

export const Hyper_mealScalarFieldEnum = builder.enumType(
  "Hyper_mealScalarFieldEnum",
  {
    values: [
      "id",
      "meal_time",
      "carbohydrates",
      "dietary_energy",
      "dietary_sugar",
      "fiber",
      "protein",
      "total_fat",
      "profile_id",
      "created_at",
      "updatedAt",
    ] as const,
  },
);

export const Hyper_profileScalarFieldEnum = builder.enumType(
  "Hyper_profileScalarFieldEnum",
  {
    values: [
      "id",
      "name",
      "image",
      "email",
      "last_synced_time",
      "diabetes_status",
      "glucose_range_type",
    ] as const,
  },
);

export const Hyper_reportScalarFieldEnum = builder.enumType(
  "Hyper_reportScalarFieldEnum",
  {
    values: [
      "id",
      "title",
      "content",
      "profile_id",
      "created_at",
      "updatedAt",
    ] as const,
  },
);

export const SortOrder = builder.enumType("SortOrder", {
  values: ["asc", "desc"] as const,
});

export const NullableJsonNullValueInput = builder.enumType(
  "NullableJsonNullValueInput",
  {
    values: ["DbNull", "JsonNull"] as const,
  },
);

export const QueryMode = builder.enumType("QueryMode", {
  values: ["default", "insensitive"] as const,
});

export const NullsOrder = builder.enumType("NullsOrder", {
  values: ["first", "last"] as const,
});

export const JsonNullValueFilter = builder.enumType("JsonNullValueFilter", {
  values: ["DbNull", "JsonNull", "AnyNull"] as const,
});

export const diabetes_status = builder.enumType("diabetes_status", {
  values: ["none", "pre", "type1", "type2", "type3"] as const,
});

export const glucose_range_type = builder.enumType("glucose_range_type", {
  values: ["standard", "tight", "optimal"] as const,
});

export const usersWhereInputFields = (t: any) => ({
  AND: t.field({ required: false, type: [usersWhereInput] }),
  OR: t.field({ required: false, type: [usersWhereInput] }),
  NOT: t.field({ required: false, type: [usersWhereInput] }),
  id: t.field({ required: false, type: UuidFilter }),
  hyper_profile: t.field({ required: false, type: hyper_profileWhereInput }),
});
export const usersWhereInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.usersWhereInput>,
    false
  >("usersWhereInput")
  .implement({
    fields: usersWhereInputFields,
  });

export const usersOrderByWithRelationInputFields = (t: any) => ({
  id: t.field({ required: false, type: SortOrder }),
  hyper_profile: t.field({
    required: false,
    type: hyper_profileOrderByWithRelationInput,
  }),
});
export const usersOrderByWithRelationInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.usersOrderByWithRelationInput>,
    false
  >("usersOrderByWithRelationInput")
  .implement({
    fields: usersOrderByWithRelationInputFields,
  });

export const usersWhereUniqueInputFields = (t: any) => ({
  id: t.string({ required: false }),
  AND: t.field({ required: false, type: [usersWhereInput] }),
  OR: t.field({ required: false, type: [usersWhereInput] }),
  NOT: t.field({ required: false, type: [usersWhereInput] }),
  hyper_profile: t.field({ required: false, type: hyper_profileWhereInput }),
});
export const usersWhereUniqueInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.usersWhereUniqueInput>,
    false
  >("usersWhereUniqueInput")
  .implement({
    fields: usersWhereUniqueInputFields,
  });

export const usersOrderByWithAggregationInputFields = (t: any) => ({
  id: t.field({ required: false, type: SortOrder }),
  _count: t.field({ required: false, type: usersCountOrderByAggregateInput }),
  _max: t.field({ required: false, type: usersMaxOrderByAggregateInput }),
  _min: t.field({ required: false, type: usersMinOrderByAggregateInput }),
});
export const usersOrderByWithAggregationInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.usersOrderByWithAggregationInput>,
    false
  >("usersOrderByWithAggregationInput")
  .implement({
    fields: usersOrderByWithAggregationInputFields,
  });

export const usersScalarWhereWithAggregatesInputFields = (t: any) => ({
  AND: t.field({
    required: false,
    type: [usersScalarWhereWithAggregatesInput],
  }),
  OR: t.field({ required: false, type: [usersScalarWhereWithAggregatesInput] }),
  NOT: t.field({
    required: false,
    type: [usersScalarWhereWithAggregatesInput],
  }),
  id: t.field({ required: false, type: UuidWithAggregatesFilter }),
});
export const usersScalarWhereWithAggregatesInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.usersScalarWhereWithAggregatesInput>,
    false
  >("usersScalarWhereWithAggregatesInput")
  .implement({
    fields: usersScalarWhereWithAggregatesInputFields,
  });

export const hyper_activityWhereInputFields = (t: any) => ({
  AND: t.field({ required: false, type: [hyper_activityWhereInput] }),
  OR: t.field({ required: false, type: [hyper_activityWhereInput] }),
  NOT: t.field({ required: false, type: [hyper_activityWhereInput] }),
  id: t.field({ required: false, type: UuidFilter }),
  activity_type_id: t.field({ required: false, type: UuidFilter }),
  profile_id: t.field({ required: false, type: UuidFilter }),
  created_at: t.field({ required: false, type: DateTimeFilter }),
  updatedAt: t.field({ required: false, type: DateTimeNullableFilter }),
  hyper_activity_type: t.field({
    required: false,
    type: hyper_activity_typeWhereInput,
  }),
  hyper_profile: t.field({ required: false, type: hyper_profileWhereInput }),
});
export const hyper_activityWhereInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.hyper_activityWhereInput>,
    false
  >("hyper_activityWhereInput")
  .implement({
    fields: hyper_activityWhereInputFields,
  });

export const hyper_activityOrderByWithRelationInputFields = (t: any) => ({
  id: t.field({ required: false, type: SortOrder }),
  activity_type_id: t.field({ required: false, type: SortOrder }),
  profile_id: t.field({ required: false, type: SortOrder }),
  created_at: t.field({ required: false, type: SortOrder }),
  updatedAt: t.field({ required: false, type: SortOrder }),
  hyper_activity_type: t.field({
    required: false,
    type: hyper_activity_typeOrderByWithRelationInput,
  }),
  hyper_profile: t.field({
    required: false,
    type: hyper_profileOrderByWithRelationInput,
  }),
});
export const hyper_activityOrderByWithRelationInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.hyper_activityOrderByWithRelationInput>,
    false
  >("hyper_activityOrderByWithRelationInput")
  .implement({
    fields: hyper_activityOrderByWithRelationInputFields,
  });

export const hyper_activityWhereUniqueInputFields = (t: any) => ({
  id: t.string({ required: false }),
  AND: t.field({ required: false, type: [hyper_activityWhereInput] }),
  OR: t.field({ required: false, type: [hyper_activityWhereInput] }),
  NOT: t.field({ required: false, type: [hyper_activityWhereInput] }),
  activity_type_id: t.field({ required: false, type: UuidFilter }),
  profile_id: t.field({ required: false, type: UuidFilter }),
  created_at: t.field({ required: false, type: DateTimeFilter }),
  updatedAt: t.field({ required: false, type: DateTimeNullableFilter }),
  hyper_activity_type: t.field({
    required: false,
    type: hyper_activity_typeWhereInput,
  }),
  hyper_profile: t.field({ required: false, type: hyper_profileWhereInput }),
});
export const hyper_activityWhereUniqueInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.hyper_activityWhereUniqueInput>,
    false
  >("hyper_activityWhereUniqueInput")
  .implement({
    fields: hyper_activityWhereUniqueInputFields,
  });

export const hyper_activityOrderByWithAggregationInputFields = (t: any) => ({
  id: t.field({ required: false, type: SortOrder }),
  activity_type_id: t.field({ required: false, type: SortOrder }),
  profile_id: t.field({ required: false, type: SortOrder }),
  created_at: t.field({ required: false, type: SortOrder }),
  updatedAt: t.field({ required: false, type: SortOrder }),
  _count: t.field({
    required: false,
    type: hyper_activityCountOrderByAggregateInput,
  }),
  _max: t.field({
    required: false,
    type: hyper_activityMaxOrderByAggregateInput,
  }),
  _min: t.field({
    required: false,
    type: hyper_activityMinOrderByAggregateInput,
  }),
});
export const hyper_activityOrderByWithAggregationInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.hyper_activityOrderByWithAggregationInput>,
    false
  >("hyper_activityOrderByWithAggregationInput")
  .implement({
    fields: hyper_activityOrderByWithAggregationInputFields,
  });

export const hyper_activityScalarWhereWithAggregatesInputFields = (t: any) => ({
  AND: t.field({
    required: false,
    type: [hyper_activityScalarWhereWithAggregatesInput],
  }),
  OR: t.field({
    required: false,
    type: [hyper_activityScalarWhereWithAggregatesInput],
  }),
  NOT: t.field({
    required: false,
    type: [hyper_activityScalarWhereWithAggregatesInput],
  }),
  id: t.field({ required: false, type: UuidWithAggregatesFilter }),
  activity_type_id: t.field({
    required: false,
    type: UuidWithAggregatesFilter,
  }),
  profile_id: t.field({ required: false, type: UuidWithAggregatesFilter }),
  created_at: t.field({ required: false, type: DateTimeWithAggregatesFilter }),
  updatedAt: t.field({
    required: false,
    type: DateTimeNullableWithAggregatesFilter,
  }),
});
export const hyper_activityScalarWhereWithAggregatesInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.hyper_activityScalarWhereWithAggregatesInput>,
    false
  >("hyper_activityScalarWhereWithAggregatesInput")
  .implement({
    fields: hyper_activityScalarWhereWithAggregatesInputFields,
  });

export const hyper_activity_typeWhereInputFields = (t: any) => ({
  AND: t.field({ required: false, type: [hyper_activity_typeWhereInput] }),
  OR: t.field({ required: false, type: [hyper_activity_typeWhereInput] }),
  NOT: t.field({ required: false, type: [hyper_activity_typeWhereInput] }),
  id: t.field({ required: false, type: UuidFilter }),
  name: t.field({ required: false, type: StringFilter }),
  hyper_activity: t.field({
    required: false,
    type: Hyper_activityListRelationFilter,
  }),
});
export const hyper_activity_typeWhereInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.hyper_activity_typeWhereInput>,
    false
  >("hyper_activity_typeWhereInput")
  .implement({
    fields: hyper_activity_typeWhereInputFields,
  });

export const hyper_activity_typeOrderByWithRelationInputFields = (t: any) => ({
  id: t.field({ required: false, type: SortOrder }),
  name: t.field({ required: false, type: SortOrder }),
  hyper_activity: t.field({
    required: false,
    type: hyper_activityOrderByRelationAggregateInput,
  }),
});
export const hyper_activity_typeOrderByWithRelationInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.hyper_activity_typeOrderByWithRelationInput>,
    false
  >("hyper_activity_typeOrderByWithRelationInput")
  .implement({
    fields: hyper_activity_typeOrderByWithRelationInputFields,
  });

export const hyper_activity_typeWhereUniqueInputFields = (t: any) => ({
  id: t.string({ required: false }),
  name: t.string({ required: false }),
  AND: t.field({ required: false, type: [hyper_activity_typeWhereInput] }),
  OR: t.field({ required: false, type: [hyper_activity_typeWhereInput] }),
  NOT: t.field({ required: false, type: [hyper_activity_typeWhereInput] }),
  hyper_activity: t.field({
    required: false,
    type: Hyper_activityListRelationFilter,
  }),
});
export const hyper_activity_typeWhereUniqueInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.hyper_activity_typeWhereUniqueInput>,
    false
  >("hyper_activity_typeWhereUniqueInput")
  .implement({
    fields: hyper_activity_typeWhereUniqueInputFields,
  });

export const hyper_activity_typeOrderByWithAggregationInputFields = (
  t: any,
) => ({
  id: t.field({ required: false, type: SortOrder }),
  name: t.field({ required: false, type: SortOrder }),
  _count: t.field({
    required: false,
    type: hyper_activity_typeCountOrderByAggregateInput,
  }),
  _max: t.field({
    required: false,
    type: hyper_activity_typeMaxOrderByAggregateInput,
  }),
  _min: t.field({
    required: false,
    type: hyper_activity_typeMinOrderByAggregateInput,
  }),
});
export const hyper_activity_typeOrderByWithAggregationInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.hyper_activity_typeOrderByWithAggregationInput>,
    false
  >("hyper_activity_typeOrderByWithAggregationInput")
  .implement({
    fields: hyper_activity_typeOrderByWithAggregationInputFields,
  });

export const hyper_activity_typeScalarWhereWithAggregatesInputFields = (
  t: any,
) => ({
  AND: t.field({
    required: false,
    type: [hyper_activity_typeScalarWhereWithAggregatesInput],
  }),
  OR: t.field({
    required: false,
    type: [hyper_activity_typeScalarWhereWithAggregatesInput],
  }),
  NOT: t.field({
    required: false,
    type: [hyper_activity_typeScalarWhereWithAggregatesInput],
  }),
  id: t.field({ required: false, type: UuidWithAggregatesFilter }),
  name: t.field({ required: false, type: StringWithAggregatesFilter }),
});
export const hyper_activity_typeScalarWhereWithAggregatesInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.hyper_activity_typeScalarWhereWithAggregatesInput>,
    false
  >("hyper_activity_typeScalarWhereWithAggregatesInput")
  .implement({
    fields: hyper_activity_typeScalarWhereWithAggregatesInputFields,
  });

export const hyper_cgm_dataWhereInputFields = (t: any) => ({
  AND: t.field({ required: false, type: [hyper_cgm_dataWhereInput] }),
  OR: t.field({ required: false, type: [hyper_cgm_dataWhereInput] }),
  NOT: t.field({ required: false, type: [hyper_cgm_dataWhereInput] }),
  id: t.field({ required: false, type: UuidFilter }),
  dexcom_user_id: t.field({ required: false, type: StringFilter }),
  record_id: t.field({ required: false, type: StringFilter }),
  system_time: t.field({ required: false, type: DateTimeFilter }),
  display_time: t.field({ required: false, type: DateTimeFilter }),
  glucose_value: t.field({ required: false, type: IntNullableFilter }),
  trend: t.field({ required: false, type: StringNullableFilter }),
  trend_rate: t.field({ required: false, type: FloatNullableFilter }),
  transmitter_id: t.field({ required: false, type: StringNullableFilter }),
  transmitter_generation: t.field({ required: false, type: StringFilter }),
  display_device: t.field({ required: false, type: StringFilter }),
  profile_id: t.field({ required: false, type: UuidFilter }),
  created_at: t.field({ required: false, type: DateTimeFilter }),
  updatedAt: t.field({ required: false, type: DateTimeNullableFilter }),
  transmitter_ticks: t.field({ required: false, type: IntFilter }),
  status: t.field({ required: false, type: StringNullableFilter }),
  unit: t.field({ required: false, type: StringFilter }),
  rate_unit: t.field({ required: false, type: StringFilter }),
  hyper_profile: t.field({ required: false, type: hyper_profileWhereInput }),
});
export const hyper_cgm_dataWhereInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.hyper_cgm_dataWhereInput>,
    false
  >("hyper_cgm_dataWhereInput")
  .implement({
    fields: hyper_cgm_dataWhereInputFields,
  });

export const hyper_cgm_dataOrderByWithRelationInputFields = (t: any) => ({
  id: t.field({ required: false, type: SortOrder }),
  dexcom_user_id: t.field({ required: false, type: SortOrder }),
  record_id: t.field({ required: false, type: SortOrder }),
  system_time: t.field({ required: false, type: SortOrder }),
  display_time: t.field({ required: false, type: SortOrder }),
  glucose_value: t.field({ required: false, type: SortOrder }),
  trend: t.field({ required: false, type: SortOrder }),
  trend_rate: t.field({ required: false, type: SortOrder }),
  transmitter_id: t.field({ required: false, type: SortOrder }),
  transmitter_generation: t.field({ required: false, type: SortOrder }),
  display_device: t.field({ required: false, type: SortOrder }),
  profile_id: t.field({ required: false, type: SortOrder }),
  created_at: t.field({ required: false, type: SortOrder }),
  updatedAt: t.field({ required: false, type: SortOrder }),
  transmitter_ticks: t.field({ required: false, type: SortOrder }),
  status: t.field({ required: false, type: SortOrder }),
  unit: t.field({ required: false, type: SortOrder }),
  rate_unit: t.field({ required: false, type: SortOrder }),
  hyper_profile: t.field({
    required: false,
    type: hyper_profileOrderByWithRelationInput,
  }),
});
export const hyper_cgm_dataOrderByWithRelationInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.hyper_cgm_dataOrderByWithRelationInput>,
    false
  >("hyper_cgm_dataOrderByWithRelationInput")
  .implement({
    fields: hyper_cgm_dataOrderByWithRelationInputFields,
  });

export const hyper_cgm_dataWhereUniqueInputFields = (t: any) => ({
  id: t.string({ required: false }),
  record_id: t.string({ required: false }),
  AND: t.field({ required: false, type: [hyper_cgm_dataWhereInput] }),
  OR: t.field({ required: false, type: [hyper_cgm_dataWhereInput] }),
  NOT: t.field({ required: false, type: [hyper_cgm_dataWhereInput] }),
  dexcom_user_id: t.field({ required: false, type: StringFilter }),
  system_time: t.field({ required: false, type: DateTimeFilter }),
  display_time: t.field({ required: false, type: DateTimeFilter }),
  glucose_value: t.field({ required: false, type: IntNullableFilter }),
  trend: t.field({ required: false, type: StringNullableFilter }),
  trend_rate: t.field({ required: false, type: FloatNullableFilter }),
  transmitter_id: t.field({ required: false, type: StringNullableFilter }),
  transmitter_generation: t.field({ required: false, type: StringFilter }),
  display_device: t.field({ required: false, type: StringFilter }),
  profile_id: t.field({ required: false, type: UuidFilter }),
  created_at: t.field({ required: false, type: DateTimeFilter }),
  updatedAt: t.field({ required: false, type: DateTimeNullableFilter }),
  transmitter_ticks: t.field({ required: false, type: IntFilter }),
  status: t.field({ required: false, type: StringNullableFilter }),
  unit: t.field({ required: false, type: StringFilter }),
  rate_unit: t.field({ required: false, type: StringFilter }),
  hyper_profile: t.field({ required: false, type: hyper_profileWhereInput }),
});
export const hyper_cgm_dataWhereUniqueInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.hyper_cgm_dataWhereUniqueInput>,
    false
  >("hyper_cgm_dataWhereUniqueInput")
  .implement({
    fields: hyper_cgm_dataWhereUniqueInputFields,
  });

export const hyper_cgm_dataOrderByWithAggregationInputFields = (t: any) => ({
  id: t.field({ required: false, type: SortOrder }),
  dexcom_user_id: t.field({ required: false, type: SortOrder }),
  record_id: t.field({ required: false, type: SortOrder }),
  system_time: t.field({ required: false, type: SortOrder }),
  display_time: t.field({ required: false, type: SortOrder }),
  glucose_value: t.field({ required: false, type: SortOrder }),
  trend: t.field({ required: false, type: SortOrder }),
  trend_rate: t.field({ required: false, type: SortOrder }),
  transmitter_id: t.field({ required: false, type: SortOrder }),
  transmitter_generation: t.field({ required: false, type: SortOrder }),
  display_device: t.field({ required: false, type: SortOrder }),
  profile_id: t.field({ required: false, type: SortOrder }),
  created_at: t.field({ required: false, type: SortOrder }),
  updatedAt: t.field({ required: false, type: SortOrder }),
  transmitter_ticks: t.field({ required: false, type: SortOrder }),
  status: t.field({ required: false, type: SortOrder }),
  unit: t.field({ required: false, type: SortOrder }),
  rate_unit: t.field({ required: false, type: SortOrder }),
  _count: t.field({
    required: false,
    type: hyper_cgm_dataCountOrderByAggregateInput,
  }),
  _avg: t.field({
    required: false,
    type: hyper_cgm_dataAvgOrderByAggregateInput,
  }),
  _max: t.field({
    required: false,
    type: hyper_cgm_dataMaxOrderByAggregateInput,
  }),
  _min: t.field({
    required: false,
    type: hyper_cgm_dataMinOrderByAggregateInput,
  }),
  _sum: t.field({
    required: false,
    type: hyper_cgm_dataSumOrderByAggregateInput,
  }),
});
export const hyper_cgm_dataOrderByWithAggregationInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.hyper_cgm_dataOrderByWithAggregationInput>,
    false
  >("hyper_cgm_dataOrderByWithAggregationInput")
  .implement({
    fields: hyper_cgm_dataOrderByWithAggregationInputFields,
  });

export const hyper_cgm_dataScalarWhereWithAggregatesInputFields = (t: any) => ({
  AND: t.field({
    required: false,
    type: [hyper_cgm_dataScalarWhereWithAggregatesInput],
  }),
  OR: t.field({
    required: false,
    type: [hyper_cgm_dataScalarWhereWithAggregatesInput],
  }),
  NOT: t.field({
    required: false,
    type: [hyper_cgm_dataScalarWhereWithAggregatesInput],
  }),
  id: t.field({ required: false, type: UuidWithAggregatesFilter }),
  dexcom_user_id: t.field({
    required: false,
    type: StringWithAggregatesFilter,
  }),
  record_id: t.field({ required: false, type: StringWithAggregatesFilter }),
  system_time: t.field({ required: false, type: DateTimeWithAggregatesFilter }),
  display_time: t.field({
    required: false,
    type: DateTimeWithAggregatesFilter,
  }),
  glucose_value: t.field({
    required: false,
    type: IntNullableWithAggregatesFilter,
  }),
  trend: t.field({ required: false, type: StringNullableWithAggregatesFilter }),
  trend_rate: t.field({
    required: false,
    type: FloatNullableWithAggregatesFilter,
  }),
  transmitter_id: t.field({
    required: false,
    type: StringNullableWithAggregatesFilter,
  }),
  transmitter_generation: t.field({
    required: false,
    type: StringWithAggregatesFilter,
  }),
  display_device: t.field({
    required: false,
    type: StringWithAggregatesFilter,
  }),
  profile_id: t.field({ required: false, type: UuidWithAggregatesFilter }),
  created_at: t.field({ required: false, type: DateTimeWithAggregatesFilter }),
  updatedAt: t.field({
    required: false,
    type: DateTimeNullableWithAggregatesFilter,
  }),
  transmitter_ticks: t.field({
    required: false,
    type: IntWithAggregatesFilter,
  }),
  status: t.field({
    required: false,
    type: StringNullableWithAggregatesFilter,
  }),
  unit: t.field({ required: false, type: StringWithAggregatesFilter }),
  rate_unit: t.field({ required: false, type: StringWithAggregatesFilter }),
});
export const hyper_cgm_dataScalarWhereWithAggregatesInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.hyper_cgm_dataScalarWhereWithAggregatesInput>,
    false
  >("hyper_cgm_dataScalarWhereWithAggregatesInput")
  .implement({
    fields: hyper_cgm_dataScalarWhereWithAggregatesInputFields,
  });

export const hyper_daily_recapWhereInputFields = (t: any) => ({
  AND: t.field({ required: false, type: [hyper_daily_recapWhereInput] }),
  OR: t.field({ required: false, type: [hyper_daily_recapWhereInput] }),
  NOT: t.field({ required: false, type: [hyper_daily_recapWhereInput] }),
  id: t.field({ required: false, type: UuidFilter }),
  date: t.field({ required: false, type: DateTimeFilter }),
  average_glucose: t.field({ required: false, type: IntNullableFilter }),
  minimum_glucose: t.field({ required: false, type: IntNullableFilter }),
  maximum_glucose: t.field({ required: false, type: IntNullableFilter }),
  glucose_variability: t.field({
    required: false,
    type: DecimalNullableFilter,
  }),
  time_in_ranges: t.field({ required: false, type: JsonNullableFilter }),
  total_readings: t.field({ required: false, type: IntNullableFilter }),
  profile_id: t.field({ required: false, type: UuidFilter }),
  created_at: t.field({ required: false, type: DateTimeFilter }),
  updatedAt: t.field({ required: false, type: DateTimeNullableFilter }),
  timezone: t.field({ required: false, type: StringFilter }),
  hyper_profile: t.field({ required: false, type: hyper_profileWhereInput }),
});
export const hyper_daily_recapWhereInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.hyper_daily_recapWhereInput>,
    false
  >("hyper_daily_recapWhereInput")
  .implement({
    fields: hyper_daily_recapWhereInputFields,
  });

export const hyper_daily_recapOrderByWithRelationInputFields = (t: any) => ({
  id: t.field({ required: false, type: SortOrder }),
  date: t.field({ required: false, type: SortOrder }),
  average_glucose: t.field({ required: false, type: SortOrder }),
  minimum_glucose: t.field({ required: false, type: SortOrder }),
  maximum_glucose: t.field({ required: false, type: SortOrder }),
  glucose_variability: t.field({ required: false, type: SortOrder }),
  time_in_ranges: t.field({ required: false, type: SortOrder }),
  total_readings: t.field({ required: false, type: SortOrder }),
  profile_id: t.field({ required: false, type: SortOrder }),
  created_at: t.field({ required: false, type: SortOrder }),
  updatedAt: t.field({ required: false, type: SortOrder }),
  timezone: t.field({ required: false, type: SortOrder }),
  hyper_profile: t.field({
    required: false,
    type: hyper_profileOrderByWithRelationInput,
  }),
});
export const hyper_daily_recapOrderByWithRelationInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.hyper_daily_recapOrderByWithRelationInput>,
    false
  >("hyper_daily_recapOrderByWithRelationInput")
  .implement({
    fields: hyper_daily_recapOrderByWithRelationInputFields,
  });

export const hyper_daily_recapWhereUniqueInputFields = (t: any) => ({
  id: t.string({ required: false }),
  profile_id_date: t.field({
    required: false,
    type: hyper_daily_recapProfile_idDateCompoundUniqueInput,
  }),
  date_profile_id: t.field({
    required: false,
    type: hyper_daily_recapDateProfile_idCompoundUniqueInput,
  }),
  AND: t.field({ required: false, type: [hyper_daily_recapWhereInput] }),
  OR: t.field({ required: false, type: [hyper_daily_recapWhereInput] }),
  NOT: t.field({ required: false, type: [hyper_daily_recapWhereInput] }),
  date: t.field({ required: false, type: DateTimeFilter }),
  average_glucose: t.field({ required: false, type: IntNullableFilter }),
  minimum_glucose: t.field({ required: false, type: IntNullableFilter }),
  maximum_glucose: t.field({ required: false, type: IntNullableFilter }),
  glucose_variability: t.field({
    required: false,
    type: DecimalNullableFilter,
  }),
  time_in_ranges: t.field({ required: false, type: JsonNullableFilter }),
  total_readings: t.field({ required: false, type: IntNullableFilter }),
  profile_id: t.field({ required: false, type: UuidFilter }),
  created_at: t.field({ required: false, type: DateTimeFilter }),
  updatedAt: t.field({ required: false, type: DateTimeNullableFilter }),
  timezone: t.field({ required: false, type: StringFilter }),
  hyper_profile: t.field({ required: false, type: hyper_profileWhereInput }),
});
export const hyper_daily_recapWhereUniqueInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.hyper_daily_recapWhereUniqueInput>,
    false
  >("hyper_daily_recapWhereUniqueInput")
  .implement({
    fields: hyper_daily_recapWhereUniqueInputFields,
  });

export const hyper_daily_recapOrderByWithAggregationInputFields = (t: any) => ({
  id: t.field({ required: false, type: SortOrder }),
  date: t.field({ required: false, type: SortOrder }),
  average_glucose: t.field({ required: false, type: SortOrder }),
  minimum_glucose: t.field({ required: false, type: SortOrder }),
  maximum_glucose: t.field({ required: false, type: SortOrder }),
  glucose_variability: t.field({ required: false, type: SortOrder }),
  time_in_ranges: t.field({ required: false, type: SortOrder }),
  total_readings: t.field({ required: false, type: SortOrder }),
  profile_id: t.field({ required: false, type: SortOrder }),
  created_at: t.field({ required: false, type: SortOrder }),
  updatedAt: t.field({ required: false, type: SortOrder }),
  timezone: t.field({ required: false, type: SortOrder }),
  _count: t.field({
    required: false,
    type: hyper_daily_recapCountOrderByAggregateInput,
  }),
  _avg: t.field({
    required: false,
    type: hyper_daily_recapAvgOrderByAggregateInput,
  }),
  _max: t.field({
    required: false,
    type: hyper_daily_recapMaxOrderByAggregateInput,
  }),
  _min: t.field({
    required: false,
    type: hyper_daily_recapMinOrderByAggregateInput,
  }),
  _sum: t.field({
    required: false,
    type: hyper_daily_recapSumOrderByAggregateInput,
  }),
});
export const hyper_daily_recapOrderByWithAggregationInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.hyper_daily_recapOrderByWithAggregationInput>,
    false
  >("hyper_daily_recapOrderByWithAggregationInput")
  .implement({
    fields: hyper_daily_recapOrderByWithAggregationInputFields,
  });

export const hyper_daily_recapScalarWhereWithAggregatesInputFields = (
  t: any,
) => ({
  AND: t.field({
    required: false,
    type: [hyper_daily_recapScalarWhereWithAggregatesInput],
  }),
  OR: t.field({
    required: false,
    type: [hyper_daily_recapScalarWhereWithAggregatesInput],
  }),
  NOT: t.field({
    required: false,
    type: [hyper_daily_recapScalarWhereWithAggregatesInput],
  }),
  id: t.field({ required: false, type: UuidWithAggregatesFilter }),
  date: t.field({ required: false, type: DateTimeWithAggregatesFilter }),
  average_glucose: t.field({
    required: false,
    type: IntNullableWithAggregatesFilter,
  }),
  minimum_glucose: t.field({
    required: false,
    type: IntNullableWithAggregatesFilter,
  }),
  maximum_glucose: t.field({
    required: false,
    type: IntNullableWithAggregatesFilter,
  }),
  glucose_variability: t.field({
    required: false,
    type: DecimalNullableWithAggregatesFilter,
  }),
  time_in_ranges: t.field({
    required: false,
    type: JsonNullableWithAggregatesFilter,
  }),
  total_readings: t.field({
    required: false,
    type: IntNullableWithAggregatesFilter,
  }),
  profile_id: t.field({ required: false, type: UuidWithAggregatesFilter }),
  created_at: t.field({ required: false, type: DateTimeWithAggregatesFilter }),
  updatedAt: t.field({
    required: false,
    type: DateTimeNullableWithAggregatesFilter,
  }),
  timezone: t.field({ required: false, type: StringWithAggregatesFilter }),
});
export const hyper_daily_recapScalarWhereWithAggregatesInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.hyper_daily_recapScalarWhereWithAggregatesInput>,
    false
  >("hyper_daily_recapScalarWhereWithAggregatesInput")
  .implement({
    fields: hyper_daily_recapScalarWhereWithAggregatesInputFields,
  });

export const hyper_mealWhereInputFields = (t: any) => ({
  AND: t.field({ required: false, type: [hyper_mealWhereInput] }),
  OR: t.field({ required: false, type: [hyper_mealWhereInput] }),
  NOT: t.field({ required: false, type: [hyper_mealWhereInput] }),
  id: t.field({ required: false, type: UuidFilter }),
  meal_time: t.field({ required: false, type: DateTimeFilter }),
  carbohydrates: t.field({ required: false, type: FloatNullableFilter }),
  dietary_energy: t.field({ required: false, type: FloatNullableFilter }),
  dietary_sugar: t.field({ required: false, type: FloatNullableFilter }),
  fiber: t.field({ required: false, type: FloatNullableFilter }),
  protein: t.field({ required: false, type: FloatNullableFilter }),
  total_fat: t.field({ required: false, type: FloatNullableFilter }),
  profile_id: t.field({ required: false, type: UuidFilter }),
  created_at: t.field({ required: false, type: DateTimeFilter }),
  updatedAt: t.field({ required: false, type: DateTimeNullableFilter }),
  hyper_profile: t.field({ required: false, type: hyper_profileWhereInput }),
});
export const hyper_mealWhereInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.hyper_mealWhereInput>,
    false
  >("hyper_mealWhereInput")
  .implement({
    fields: hyper_mealWhereInputFields,
  });

export const hyper_mealOrderByWithRelationInputFields = (t: any) => ({
  id: t.field({ required: false, type: SortOrder }),
  meal_time: t.field({ required: false, type: SortOrder }),
  carbohydrates: t.field({ required: false, type: SortOrder }),
  dietary_energy: t.field({ required: false, type: SortOrder }),
  dietary_sugar: t.field({ required: false, type: SortOrder }),
  fiber: t.field({ required: false, type: SortOrder }),
  protein: t.field({ required: false, type: SortOrder }),
  total_fat: t.field({ required: false, type: SortOrder }),
  profile_id: t.field({ required: false, type: SortOrder }),
  created_at: t.field({ required: false, type: SortOrder }),
  updatedAt: t.field({ required: false, type: SortOrder }),
  hyper_profile: t.field({
    required: false,
    type: hyper_profileOrderByWithRelationInput,
  }),
});
export const hyper_mealOrderByWithRelationInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.hyper_mealOrderByWithRelationInput>,
    false
  >("hyper_mealOrderByWithRelationInput")
  .implement({
    fields: hyper_mealOrderByWithRelationInputFields,
  });

export const hyper_mealWhereUniqueInputFields = (t: any) => ({
  id: t.string({ required: false }),
  AND: t.field({ required: false, type: [hyper_mealWhereInput] }),
  OR: t.field({ required: false, type: [hyper_mealWhereInput] }),
  NOT: t.field({ required: false, type: [hyper_mealWhereInput] }),
  meal_time: t.field({ required: false, type: DateTimeFilter }),
  carbohydrates: t.field({ required: false, type: FloatNullableFilter }),
  dietary_energy: t.field({ required: false, type: FloatNullableFilter }),
  dietary_sugar: t.field({ required: false, type: FloatNullableFilter }),
  fiber: t.field({ required: false, type: FloatNullableFilter }),
  protein: t.field({ required: false, type: FloatNullableFilter }),
  total_fat: t.field({ required: false, type: FloatNullableFilter }),
  profile_id: t.field({ required: false, type: UuidFilter }),
  created_at: t.field({ required: false, type: DateTimeFilter }),
  updatedAt: t.field({ required: false, type: DateTimeNullableFilter }),
  hyper_profile: t.field({ required: false, type: hyper_profileWhereInput }),
});
export const hyper_mealWhereUniqueInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.hyper_mealWhereUniqueInput>,
    false
  >("hyper_mealWhereUniqueInput")
  .implement({
    fields: hyper_mealWhereUniqueInputFields,
  });

export const hyper_mealOrderByWithAggregationInputFields = (t: any) => ({
  id: t.field({ required: false, type: SortOrder }),
  meal_time: t.field({ required: false, type: SortOrder }),
  carbohydrates: t.field({ required: false, type: SortOrder }),
  dietary_energy: t.field({ required: false, type: SortOrder }),
  dietary_sugar: t.field({ required: false, type: SortOrder }),
  fiber: t.field({ required: false, type: SortOrder }),
  protein: t.field({ required: false, type: SortOrder }),
  total_fat: t.field({ required: false, type: SortOrder }),
  profile_id: t.field({ required: false, type: SortOrder }),
  created_at: t.field({ required: false, type: SortOrder }),
  updatedAt: t.field({ required: false, type: SortOrder }),
  _count: t.field({
    required: false,
    type: hyper_mealCountOrderByAggregateInput,
  }),
  _avg: t.field({ required: false, type: hyper_mealAvgOrderByAggregateInput }),
  _max: t.field({ required: false, type: hyper_mealMaxOrderByAggregateInput }),
  _min: t.field({ required: false, type: hyper_mealMinOrderByAggregateInput }),
  _sum: t.field({ required: false, type: hyper_mealSumOrderByAggregateInput }),
});
export const hyper_mealOrderByWithAggregationInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.hyper_mealOrderByWithAggregationInput>,
    false
  >("hyper_mealOrderByWithAggregationInput")
  .implement({
    fields: hyper_mealOrderByWithAggregationInputFields,
  });

export const hyper_mealScalarWhereWithAggregatesInputFields = (t: any) => ({
  AND: t.field({
    required: false,
    type: [hyper_mealScalarWhereWithAggregatesInput],
  }),
  OR: t.field({
    required: false,
    type: [hyper_mealScalarWhereWithAggregatesInput],
  }),
  NOT: t.field({
    required: false,
    type: [hyper_mealScalarWhereWithAggregatesInput],
  }),
  id: t.field({ required: false, type: UuidWithAggregatesFilter }),
  meal_time: t.field({ required: false, type: DateTimeWithAggregatesFilter }),
  carbohydrates: t.field({
    required: false,
    type: FloatNullableWithAggregatesFilter,
  }),
  dietary_energy: t.field({
    required: false,
    type: FloatNullableWithAggregatesFilter,
  }),
  dietary_sugar: t.field({
    required: false,
    type: FloatNullableWithAggregatesFilter,
  }),
  fiber: t.field({ required: false, type: FloatNullableWithAggregatesFilter }),
  protein: t.field({
    required: false,
    type: FloatNullableWithAggregatesFilter,
  }),
  total_fat: t.field({
    required: false,
    type: FloatNullableWithAggregatesFilter,
  }),
  profile_id: t.field({ required: false, type: UuidWithAggregatesFilter }),
  created_at: t.field({ required: false, type: DateTimeWithAggregatesFilter }),
  updatedAt: t.field({
    required: false,
    type: DateTimeNullableWithAggregatesFilter,
  }),
});
export const hyper_mealScalarWhereWithAggregatesInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.hyper_mealScalarWhereWithAggregatesInput>,
    false
  >("hyper_mealScalarWhereWithAggregatesInput")
  .implement({
    fields: hyper_mealScalarWhereWithAggregatesInputFields,
  });

export const hyper_profileWhereInputFields = (t: any) => ({
  AND: t.field({ required: false, type: [hyper_profileWhereInput] }),
  OR: t.field({ required: false, type: [hyper_profileWhereInput] }),
  NOT: t.field({ required: false, type: [hyper_profileWhereInput] }),
  id: t.field({ required: false, type: UuidFilter }),
  name: t.field({ required: false, type: StringFilter }),
  image: t.field({ required: false, type: StringNullableFilter }),
  email: t.field({ required: false, type: StringNullableFilter }),
  last_synced_time: t.field({ required: false, type: DateTimeNullableFilter }),
  diabetes_status: t.field({
    required: false,
    type: Enumdiabetes_statusFilter,
  }),
  glucose_range_type: t.field({
    required: false,
    type: Enumglucose_range_typeFilter,
  }),
  hyper_activity: t.field({
    required: false,
    type: Hyper_activityListRelationFilter,
  }),
  hyper_cgm_data: t.field({
    required: false,
    type: Hyper_cgm_dataListRelationFilter,
  }),
  hyper_daily_recap: t.field({
    required: false,
    type: Hyper_daily_recapListRelationFilter,
  }),
  hyper_meal: t.field({ required: false, type: Hyper_mealListRelationFilter }),
  users: t.field({ required: false, type: usersWhereInput }),
  hyper_report: t.field({
    required: false,
    type: Hyper_reportListRelationFilter,
  }),
});
export const hyper_profileWhereInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.hyper_profileWhereInput>,
    false
  >("hyper_profileWhereInput")
  .implement({
    fields: hyper_profileWhereInputFields,
  });

export const hyper_profileOrderByWithRelationInputFields = (t: any) => ({
  id: t.field({ required: false, type: SortOrder }),
  name: t.field({ required: false, type: SortOrder }),
  image: t.field({ required: false, type: SortOrder }),
  email: t.field({ required: false, type: SortOrder }),
  last_synced_time: t.field({ required: false, type: SortOrder }),
  diabetes_status: t.field({ required: false, type: SortOrder }),
  glucose_range_type: t.field({ required: false, type: SortOrder }),
  hyper_activity: t.field({
    required: false,
    type: hyper_activityOrderByRelationAggregateInput,
  }),
  hyper_cgm_data: t.field({
    required: false,
    type: hyper_cgm_dataOrderByRelationAggregateInput,
  }),
  hyper_daily_recap: t.field({
    required: false,
    type: hyper_daily_recapOrderByRelationAggregateInput,
  }),
  hyper_meal: t.field({
    required: false,
    type: hyper_mealOrderByRelationAggregateInput,
  }),
  users: t.field({ required: false, type: usersOrderByWithRelationInput }),
  hyper_report: t.field({
    required: false,
    type: hyper_reportOrderByRelationAggregateInput,
  }),
});
export const hyper_profileOrderByWithRelationInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.hyper_profileOrderByWithRelationInput>,
    false
  >("hyper_profileOrderByWithRelationInput")
  .implement({
    fields: hyper_profileOrderByWithRelationInputFields,
  });

export const hyper_profileWhereUniqueInputFields = (t: any) => ({
  id: t.string({ required: false }),
  email: t.string({ required: false }),
  AND: t.field({ required: false, type: [hyper_profileWhereInput] }),
  OR: t.field({ required: false, type: [hyper_profileWhereInput] }),
  NOT: t.field({ required: false, type: [hyper_profileWhereInput] }),
  name: t.field({ required: false, type: StringFilter }),
  image: t.field({ required: false, type: StringNullableFilter }),
  last_synced_time: t.field({ required: false, type: DateTimeNullableFilter }),
  diabetes_status: t.field({
    required: false,
    type: Enumdiabetes_statusFilter,
  }),
  glucose_range_type: t.field({
    required: false,
    type: Enumglucose_range_typeFilter,
  }),
  hyper_activity: t.field({
    required: false,
    type: Hyper_activityListRelationFilter,
  }),
  hyper_cgm_data: t.field({
    required: false,
    type: Hyper_cgm_dataListRelationFilter,
  }),
  hyper_daily_recap: t.field({
    required: false,
    type: Hyper_daily_recapListRelationFilter,
  }),
  hyper_meal: t.field({ required: false, type: Hyper_mealListRelationFilter }),
  users: t.field({ required: false, type: usersWhereInput }),
  hyper_report: t.field({
    required: false,
    type: Hyper_reportListRelationFilter,
  }),
});
export const hyper_profileWhereUniqueInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.hyper_profileWhereUniqueInput>,
    false
  >("hyper_profileWhereUniqueInput")
  .implement({
    fields: hyper_profileWhereUniqueInputFields,
  });

export const hyper_profileOrderByWithAggregationInputFields = (t: any) => ({
  id: t.field({ required: false, type: SortOrder }),
  name: t.field({ required: false, type: SortOrder }),
  image: t.field({ required: false, type: SortOrder }),
  email: t.field({ required: false, type: SortOrder }),
  last_synced_time: t.field({ required: false, type: SortOrder }),
  diabetes_status: t.field({ required: false, type: SortOrder }),
  glucose_range_type: t.field({ required: false, type: SortOrder }),
  _count: t.field({
    required: false,
    type: hyper_profileCountOrderByAggregateInput,
  }),
  _max: t.field({
    required: false,
    type: hyper_profileMaxOrderByAggregateInput,
  }),
  _min: t.field({
    required: false,
    type: hyper_profileMinOrderByAggregateInput,
  }),
});
export const hyper_profileOrderByWithAggregationInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.hyper_profileOrderByWithAggregationInput>,
    false
  >("hyper_profileOrderByWithAggregationInput")
  .implement({
    fields: hyper_profileOrderByWithAggregationInputFields,
  });

export const hyper_profileScalarWhereWithAggregatesInputFields = (t: any) => ({
  AND: t.field({
    required: false,
    type: [hyper_profileScalarWhereWithAggregatesInput],
  }),
  OR: t.field({
    required: false,
    type: [hyper_profileScalarWhereWithAggregatesInput],
  }),
  NOT: t.field({
    required: false,
    type: [hyper_profileScalarWhereWithAggregatesInput],
  }),
  id: t.field({ required: false, type: UuidWithAggregatesFilter }),
  name: t.field({ required: false, type: StringWithAggregatesFilter }),
  image: t.field({ required: false, type: StringNullableWithAggregatesFilter }),
  email: t.field({ required: false, type: StringNullableWithAggregatesFilter }),
  last_synced_time: t.field({
    required: false,
    type: DateTimeNullableWithAggregatesFilter,
  }),
  diabetes_status: t.field({
    required: false,
    type: Enumdiabetes_statusWithAggregatesFilter,
  }),
  glucose_range_type: t.field({
    required: false,
    type: Enumglucose_range_typeWithAggregatesFilter,
  }),
});
export const hyper_profileScalarWhereWithAggregatesInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.hyper_profileScalarWhereWithAggregatesInput>,
    false
  >("hyper_profileScalarWhereWithAggregatesInput")
  .implement({
    fields: hyper_profileScalarWhereWithAggregatesInputFields,
  });

export const hyper_reportWhereInputFields = (t: any) => ({
  AND: t.field({ required: false, type: [hyper_reportWhereInput] }),
  OR: t.field({ required: false, type: [hyper_reportWhereInput] }),
  NOT: t.field({ required: false, type: [hyper_reportWhereInput] }),
  id: t.field({ required: false, type: UuidFilter }),
  title: t.field({ required: false, type: StringFilter }),
  content: t.field({ required: false, type: StringNullableFilter }),
  profile_id: t.field({ required: false, type: UuidFilter }),
  created_at: t.field({ required: false, type: DateTimeFilter }),
  updatedAt: t.field({ required: false, type: DateTimeNullableFilter }),
  hyper_profile: t.field({ required: false, type: hyper_profileWhereInput }),
});
export const hyper_reportWhereInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.hyper_reportWhereInput>,
    false
  >("hyper_reportWhereInput")
  .implement({
    fields: hyper_reportWhereInputFields,
  });

export const hyper_reportOrderByWithRelationInputFields = (t: any) => ({
  id: t.field({ required: false, type: SortOrder }),
  title: t.field({ required: false, type: SortOrder }),
  content: t.field({ required: false, type: SortOrder }),
  profile_id: t.field({ required: false, type: SortOrder }),
  created_at: t.field({ required: false, type: SortOrder }),
  updatedAt: t.field({ required: false, type: SortOrder }),
  hyper_profile: t.field({
    required: false,
    type: hyper_profileOrderByWithRelationInput,
  }),
});
export const hyper_reportOrderByWithRelationInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.hyper_reportOrderByWithRelationInput>,
    false
  >("hyper_reportOrderByWithRelationInput")
  .implement({
    fields: hyper_reportOrderByWithRelationInputFields,
  });

export const hyper_reportWhereUniqueInputFields = (t: any) => ({
  id: t.string({ required: false }),
  AND: t.field({ required: false, type: [hyper_reportWhereInput] }),
  OR: t.field({ required: false, type: [hyper_reportWhereInput] }),
  NOT: t.field({ required: false, type: [hyper_reportWhereInput] }),
  title: t.field({ required: false, type: StringFilter }),
  content: t.field({ required: false, type: StringNullableFilter }),
  profile_id: t.field({ required: false, type: UuidFilter }),
  created_at: t.field({ required: false, type: DateTimeFilter }),
  updatedAt: t.field({ required: false, type: DateTimeNullableFilter }),
  hyper_profile: t.field({ required: false, type: hyper_profileWhereInput }),
});
export const hyper_reportWhereUniqueInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.hyper_reportWhereUniqueInput>,
    false
  >("hyper_reportWhereUniqueInput")
  .implement({
    fields: hyper_reportWhereUniqueInputFields,
  });

export const hyper_reportOrderByWithAggregationInputFields = (t: any) => ({
  id: t.field({ required: false, type: SortOrder }),
  title: t.field({ required: false, type: SortOrder }),
  content: t.field({ required: false, type: SortOrder }),
  profile_id: t.field({ required: false, type: SortOrder }),
  created_at: t.field({ required: false, type: SortOrder }),
  updatedAt: t.field({ required: false, type: SortOrder }),
  _count: t.field({
    required: false,
    type: hyper_reportCountOrderByAggregateInput,
  }),
  _max: t.field({
    required: false,
    type: hyper_reportMaxOrderByAggregateInput,
  }),
  _min: t.field({
    required: false,
    type: hyper_reportMinOrderByAggregateInput,
  }),
});
export const hyper_reportOrderByWithAggregationInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.hyper_reportOrderByWithAggregationInput>,
    false
  >("hyper_reportOrderByWithAggregationInput")
  .implement({
    fields: hyper_reportOrderByWithAggregationInputFields,
  });

export const hyper_reportScalarWhereWithAggregatesInputFields = (t: any) => ({
  AND: t.field({
    required: false,
    type: [hyper_reportScalarWhereWithAggregatesInput],
  }),
  OR: t.field({
    required: false,
    type: [hyper_reportScalarWhereWithAggregatesInput],
  }),
  NOT: t.field({
    required: false,
    type: [hyper_reportScalarWhereWithAggregatesInput],
  }),
  id: t.field({ required: false, type: UuidWithAggregatesFilter }),
  title: t.field({ required: false, type: StringWithAggregatesFilter }),
  content: t.field({
    required: false,
    type: StringNullableWithAggregatesFilter,
  }),
  profile_id: t.field({ required: false, type: UuidWithAggregatesFilter }),
  created_at: t.field({ required: false, type: DateTimeWithAggregatesFilter }),
  updatedAt: t.field({
    required: false,
    type: DateTimeNullableWithAggregatesFilter,
  }),
});
export const hyper_reportScalarWhereWithAggregatesInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.hyper_reportScalarWhereWithAggregatesInput>,
    false
  >("hyper_reportScalarWhereWithAggregatesInput")
  .implement({
    fields: hyper_reportScalarWhereWithAggregatesInputFields,
  });

export const usersCreateInputFields = (t: any) => ({
  id: t.string({ required: true }),
  hyper_profile: t.field({
    required: false,
    type: hyper_profileCreateNestedOneWithoutUsersInput,
  }),
});
export const usersCreateInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.usersCreateInput>,
    false
  >("usersCreateInput")
  .implement({
    fields: usersCreateInputFields,
  });

export const usersUpdateInputFields = (t: any) => ({
  id: t.field({ required: false, type: StringFieldUpdateOperationsInput }),
  hyper_profile: t.field({
    required: false,
    type: hyper_profileUpdateOneWithoutUsersNestedInput,
  }),
});
export const usersUpdateInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.usersUpdateInput>,
    false
  >("usersUpdateInput")
  .implement({
    fields: usersUpdateInputFields,
  });

export const usersCreateManyInputFields = (t: any) => ({
  id: t.string({ required: true }),
});
export const usersCreateManyInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.usersCreateManyInput>,
    false
  >("usersCreateManyInput")
  .implement({
    fields: usersCreateManyInputFields,
  });

export const usersUpdateManyMutationInputFields = (t: any) => ({
  id: t.field({ required: false, type: StringFieldUpdateOperationsInput }),
});
export const usersUpdateManyMutationInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.usersUpdateManyMutationInput>,
    false
  >("usersUpdateManyMutationInput")
  .implement({
    fields: usersUpdateManyMutationInputFields,
  });

export const hyper_activityUpdateInputFields = (t: any) => ({
  id: t.field({ required: false, type: StringFieldUpdateOperationsInput }),
  created_at: t.field({
    required: false,
    type: DateTimeFieldUpdateOperationsInput,
  }),
  updatedAt: t.field({
    required: false,
    type: NullableDateTimeFieldUpdateOperationsInput,
  }),
  hyper_activity_type: t.field({
    required: false,
    type: hyper_activity_typeUpdateOneRequiredWithoutHyper_activityNestedInput,
  }),
  hyper_profile: t.field({
    required: false,
    type: hyper_profileUpdateOneRequiredWithoutHyper_activityNestedInput,
  }),
});
export const hyper_activityUpdateInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.hyper_activityUpdateInput>,
    false
  >("hyper_activityUpdateInput")
  .implement({
    fields: hyper_activityUpdateInputFields,
  });

export const hyper_activityUpdateManyMutationInputFields = (t: any) => ({
  id: t.field({ required: false, type: StringFieldUpdateOperationsInput }),
  created_at: t.field({
    required: false,
    type: DateTimeFieldUpdateOperationsInput,
  }),
  updatedAt: t.field({
    required: false,
    type: NullableDateTimeFieldUpdateOperationsInput,
  }),
});
export const hyper_activityUpdateManyMutationInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.hyper_activityUpdateManyMutationInput>,
    false
  >("hyper_activityUpdateManyMutationInput")
  .implement({
    fields: hyper_activityUpdateManyMutationInputFields,
  });

export const hyper_activity_typeCreateInputFields = (t: any) => ({
  id: t.string({ required: false }),
  name: t.string({ required: true }),
  hyper_activity: t.field({
    required: false,
    type: hyper_activityCreateNestedManyWithoutHyper_activity_typeInput,
  }),
});
export const hyper_activity_typeCreateInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.hyper_activity_typeCreateInput>,
    false
  >("hyper_activity_typeCreateInput")
  .implement({
    fields: hyper_activity_typeCreateInputFields,
  });

export const hyper_activity_typeUpdateInputFields = (t: any) => ({
  id: t.field({ required: false, type: StringFieldUpdateOperationsInput }),
  name: t.field({ required: false, type: StringFieldUpdateOperationsInput }),
  hyper_activity: t.field({
    required: false,
    type: hyper_activityUpdateManyWithoutHyper_activity_typeNestedInput,
  }),
});
export const hyper_activity_typeUpdateInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.hyper_activity_typeUpdateInput>,
    false
  >("hyper_activity_typeUpdateInput")
  .implement({
    fields: hyper_activity_typeUpdateInputFields,
  });

export const hyper_activity_typeCreateManyInputFields = (t: any) => ({
  id: t.string({ required: false }),
  name: t.string({ required: true }),
});
export const hyper_activity_typeCreateManyInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.hyper_activity_typeCreateManyInput>,
    false
  >("hyper_activity_typeCreateManyInput")
  .implement({
    fields: hyper_activity_typeCreateManyInputFields,
  });

export const hyper_activity_typeUpdateManyMutationInputFields = (t: any) => ({
  id: t.field({ required: false, type: StringFieldUpdateOperationsInput }),
  name: t.field({ required: false, type: StringFieldUpdateOperationsInput }),
});
export const hyper_activity_typeUpdateManyMutationInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.hyper_activity_typeUpdateManyMutationInput>,
    false
  >("hyper_activity_typeUpdateManyMutationInput")
  .implement({
    fields: hyper_activity_typeUpdateManyMutationInputFields,
  });

export const hyper_cgm_dataCreateInputFields = (t: any) => ({
  id: t.string({ required: false }),
  dexcom_user_id: t.string({ required: true }),
  record_id: t.string({ required: true }),
  system_time: t.field({ required: true, type: DateTime }),
  display_time: t.field({ required: true, type: DateTime }),
  glucose_value: t.int({ required: false }),
  trend: t.string({ required: false }),
  trend_rate: t.float({ required: false }),
  transmitter_id: t.string({ required: false }),
  transmitter_generation: t.string({ required: true }),
  display_device: t.string({ required: true }),
  created_at: t.field({ required: false, type: DateTime }),
  updatedAt: t.field({ required: false, type: DateTime }),
  transmitter_ticks: t.int({ required: true }),
  status: t.string({ required: false }),
  unit: t.string({ required: true }),
  rate_unit: t.string({ required: true }),
  hyper_profile: t.field({
    required: true,
    type: hyper_profileCreateNestedOneWithoutHyper_cgm_dataInput,
  }),
});
export const hyper_cgm_dataCreateInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.hyper_cgm_dataCreateInput>,
    false
  >("hyper_cgm_dataCreateInput")
  .implement({
    fields: hyper_cgm_dataCreateInputFields,
  });

export const hyper_cgm_dataUpdateInputFields = (t: any) => ({
  id: t.field({ required: false, type: StringFieldUpdateOperationsInput }),
  dexcom_user_id: t.field({
    required: false,
    type: StringFieldUpdateOperationsInput,
  }),
  record_id: t.field({
    required: false,
    type: StringFieldUpdateOperationsInput,
  }),
  system_time: t.field({
    required: false,
    type: DateTimeFieldUpdateOperationsInput,
  }),
  display_time: t.field({
    required: false,
    type: DateTimeFieldUpdateOperationsInput,
  }),
  glucose_value: t.field({
    required: false,
    type: NullableIntFieldUpdateOperationsInput,
  }),
  trend: t.field({
    required: false,
    type: NullableStringFieldUpdateOperationsInput,
  }),
  trend_rate: t.field({
    required: false,
    type: NullableFloatFieldUpdateOperationsInput,
  }),
  transmitter_id: t.field({
    required: false,
    type: NullableStringFieldUpdateOperationsInput,
  }),
  transmitter_generation: t.field({
    required: false,
    type: StringFieldUpdateOperationsInput,
  }),
  display_device: t.field({
    required: false,
    type: StringFieldUpdateOperationsInput,
  }),
  created_at: t.field({
    required: false,
    type: DateTimeFieldUpdateOperationsInput,
  }),
  updatedAt: t.field({
    required: false,
    type: NullableDateTimeFieldUpdateOperationsInput,
  }),
  transmitter_ticks: t.field({
    required: false,
    type: IntFieldUpdateOperationsInput,
  }),
  status: t.field({
    required: false,
    type: NullableStringFieldUpdateOperationsInput,
  }),
  unit: t.field({ required: false, type: StringFieldUpdateOperationsInput }),
  rate_unit: t.field({
    required: false,
    type: StringFieldUpdateOperationsInput,
  }),
  hyper_profile: t.field({
    required: false,
    type: hyper_profileUpdateOneRequiredWithoutHyper_cgm_dataNestedInput,
  }),
});
export const hyper_cgm_dataUpdateInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.hyper_cgm_dataUpdateInput>,
    false
  >("hyper_cgm_dataUpdateInput")
  .implement({
    fields: hyper_cgm_dataUpdateInputFields,
  });

export const hyper_cgm_dataCreateManyInputFields = (t: any) => ({
  id: t.string({ required: false }),
  dexcom_user_id: t.string({ required: true }),
  record_id: t.string({ required: true }),
  system_time: t.field({ required: true, type: DateTime }),
  display_time: t.field({ required: true, type: DateTime }),
  glucose_value: t.int({ required: false }),
  trend: t.string({ required: false }),
  trend_rate: t.float({ required: false }),
  transmitter_id: t.string({ required: false }),
  transmitter_generation: t.string({ required: true }),
  display_device: t.string({ required: true }),
  profile_id: t.string({ required: true }),
  created_at: t.field({ required: false, type: DateTime }),
  updatedAt: t.field({ required: false, type: DateTime }),
  transmitter_ticks: t.int({ required: true }),
  status: t.string({ required: false }),
  unit: t.string({ required: true }),
  rate_unit: t.string({ required: true }),
});
export const hyper_cgm_dataCreateManyInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.hyper_cgm_dataCreateManyInput>,
    false
  >("hyper_cgm_dataCreateManyInput")
  .implement({
    fields: hyper_cgm_dataCreateManyInputFields,
  });

export const hyper_cgm_dataUpdateManyMutationInputFields = (t: any) => ({
  id: t.field({ required: false, type: StringFieldUpdateOperationsInput }),
  dexcom_user_id: t.field({
    required: false,
    type: StringFieldUpdateOperationsInput,
  }),
  record_id: t.field({
    required: false,
    type: StringFieldUpdateOperationsInput,
  }),
  system_time: t.field({
    required: false,
    type: DateTimeFieldUpdateOperationsInput,
  }),
  display_time: t.field({
    required: false,
    type: DateTimeFieldUpdateOperationsInput,
  }),
  glucose_value: t.field({
    required: false,
    type: NullableIntFieldUpdateOperationsInput,
  }),
  trend: t.field({
    required: false,
    type: NullableStringFieldUpdateOperationsInput,
  }),
  trend_rate: t.field({
    required: false,
    type: NullableFloatFieldUpdateOperationsInput,
  }),
  transmitter_id: t.field({
    required: false,
    type: NullableStringFieldUpdateOperationsInput,
  }),
  transmitter_generation: t.field({
    required: false,
    type: StringFieldUpdateOperationsInput,
  }),
  display_device: t.field({
    required: false,
    type: StringFieldUpdateOperationsInput,
  }),
  created_at: t.field({
    required: false,
    type: DateTimeFieldUpdateOperationsInput,
  }),
  updatedAt: t.field({
    required: false,
    type: NullableDateTimeFieldUpdateOperationsInput,
  }),
  transmitter_ticks: t.field({
    required: false,
    type: IntFieldUpdateOperationsInput,
  }),
  status: t.field({
    required: false,
    type: NullableStringFieldUpdateOperationsInput,
  }),
  unit: t.field({ required: false, type: StringFieldUpdateOperationsInput }),
  rate_unit: t.field({
    required: false,
    type: StringFieldUpdateOperationsInput,
  }),
});
export const hyper_cgm_dataUpdateManyMutationInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.hyper_cgm_dataUpdateManyMutationInput>,
    false
  >("hyper_cgm_dataUpdateManyMutationInput")
  .implement({
    fields: hyper_cgm_dataUpdateManyMutationInputFields,
  });

export const hyper_daily_recapCreateInputFields = (t: any) => ({
  id: t.string({ required: false }),
  date: t.field({ required: true, type: DateTime }),
  average_glucose: t.int({ required: false }),
  minimum_glucose: t.int({ required: false }),
  maximum_glucose: t.int({ required: false }),
  glucose_variability: t.field({ required: false, type: Decimal }),
  time_in_ranges: t.field({ required: false, type: Json }),
  total_readings: t.int({ required: false }),
  created_at: t.field({ required: false, type: DateTime }),
  updatedAt: t.field({ required: false, type: DateTime }),
  timezone: t.string({ required: true }),
  hyper_profile: t.field({
    required: true,
    type: hyper_profileCreateNestedOneWithoutHyper_daily_recapInput,
  }),
});
export const hyper_daily_recapCreateInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.hyper_daily_recapCreateInput>,
    false
  >("hyper_daily_recapCreateInput")
  .implement({
    fields: hyper_daily_recapCreateInputFields,
  });

export const hyper_daily_recapUpdateInputFields = (t: any) => ({
  id: t.field({ required: false, type: StringFieldUpdateOperationsInput }),
  date: t.field({ required: false, type: DateTimeFieldUpdateOperationsInput }),
  average_glucose: t.field({
    required: false,
    type: NullableIntFieldUpdateOperationsInput,
  }),
  minimum_glucose: t.field({
    required: false,
    type: NullableIntFieldUpdateOperationsInput,
  }),
  maximum_glucose: t.field({
    required: false,
    type: NullableIntFieldUpdateOperationsInput,
  }),
  glucose_variability: t.field({
    required: false,
    type: NullableDecimalFieldUpdateOperationsInput,
  }),
  time_in_ranges: t.field({ required: false, type: Json }),
  total_readings: t.field({
    required: false,
    type: NullableIntFieldUpdateOperationsInput,
  }),
  created_at: t.field({
    required: false,
    type: DateTimeFieldUpdateOperationsInput,
  }),
  updatedAt: t.field({
    required: false,
    type: NullableDateTimeFieldUpdateOperationsInput,
  }),
  timezone: t.field({
    required: false,
    type: StringFieldUpdateOperationsInput,
  }),
  hyper_profile: t.field({
    required: false,
    type: hyper_profileUpdateOneRequiredWithoutHyper_daily_recapNestedInput,
  }),
});
export const hyper_daily_recapUpdateInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.hyper_daily_recapUpdateInput>,
    false
  >("hyper_daily_recapUpdateInput")
  .implement({
    fields: hyper_daily_recapUpdateInputFields,
  });

export const hyper_daily_recapCreateManyInputFields = (t: any) => ({
  id: t.string({ required: false }),
  date: t.field({ required: true, type: DateTime }),
  average_glucose: t.int({ required: false }),
  minimum_glucose: t.int({ required: false }),
  maximum_glucose: t.int({ required: false }),
  glucose_variability: t.field({ required: false, type: Decimal }),
  time_in_ranges: t.field({ required: false, type: Json }),
  total_readings: t.int({ required: false }),
  profile_id: t.string({ required: true }),
  created_at: t.field({ required: false, type: DateTime }),
  updatedAt: t.field({ required: false, type: DateTime }),
  timezone: t.string({ required: true }),
});
export const hyper_daily_recapCreateManyInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.hyper_daily_recapCreateManyInput>,
    false
  >("hyper_daily_recapCreateManyInput")
  .implement({
    fields: hyper_daily_recapCreateManyInputFields,
  });

export const hyper_daily_recapUpdateManyMutationInputFields = (t: any) => ({
  id: t.field({ required: false, type: StringFieldUpdateOperationsInput }),
  date: t.field({ required: false, type: DateTimeFieldUpdateOperationsInput }),
  average_glucose: t.field({
    required: false,
    type: NullableIntFieldUpdateOperationsInput,
  }),
  minimum_glucose: t.field({
    required: false,
    type: NullableIntFieldUpdateOperationsInput,
  }),
  maximum_glucose: t.field({
    required: false,
    type: NullableIntFieldUpdateOperationsInput,
  }),
  glucose_variability: t.field({
    required: false,
    type: NullableDecimalFieldUpdateOperationsInput,
  }),
  time_in_ranges: t.field({ required: false, type: Json }),
  total_readings: t.field({
    required: false,
    type: NullableIntFieldUpdateOperationsInput,
  }),
  created_at: t.field({
    required: false,
    type: DateTimeFieldUpdateOperationsInput,
  }),
  updatedAt: t.field({
    required: false,
    type: NullableDateTimeFieldUpdateOperationsInput,
  }),
  timezone: t.field({
    required: false,
    type: StringFieldUpdateOperationsInput,
  }),
});
export const hyper_daily_recapUpdateManyMutationInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.hyper_daily_recapUpdateManyMutationInput>,
    false
  >("hyper_daily_recapUpdateManyMutationInput")
  .implement({
    fields: hyper_daily_recapUpdateManyMutationInputFields,
  });

export const hyper_mealCreateInputFields = (t: any) => ({
  id: t.string({ required: false }),
  meal_time: t.field({ required: false, type: DateTime }),
  carbohydrates: t.float({ required: false }),
  dietary_energy: t.float({ required: false }),
  dietary_sugar: t.float({ required: false }),
  fiber: t.float({ required: false }),
  protein: t.float({ required: false }),
  total_fat: t.float({ required: false }),
  created_at: t.field({ required: false, type: DateTime }),
  updatedAt: t.field({ required: false, type: DateTime }),
  hyper_profile: t.field({
    required: true,
    type: hyper_profileCreateNestedOneWithoutHyper_mealInput,
  }),
});
export const hyper_mealCreateInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.hyper_mealCreateInput>,
    false
  >("hyper_mealCreateInput")
  .implement({
    fields: hyper_mealCreateInputFields,
  });

export const hyper_mealUpdateInputFields = (t: any) => ({
  id: t.field({ required: false, type: StringFieldUpdateOperationsInput }),
  meal_time: t.field({
    required: false,
    type: DateTimeFieldUpdateOperationsInput,
  }),
  carbohydrates: t.field({
    required: false,
    type: NullableFloatFieldUpdateOperationsInput,
  }),
  dietary_energy: t.field({
    required: false,
    type: NullableFloatFieldUpdateOperationsInput,
  }),
  dietary_sugar: t.field({
    required: false,
    type: NullableFloatFieldUpdateOperationsInput,
  }),
  fiber: t.field({
    required: false,
    type: NullableFloatFieldUpdateOperationsInput,
  }),
  protein: t.field({
    required: false,
    type: NullableFloatFieldUpdateOperationsInput,
  }),
  total_fat: t.field({
    required: false,
    type: NullableFloatFieldUpdateOperationsInput,
  }),
  created_at: t.field({
    required: false,
    type: DateTimeFieldUpdateOperationsInput,
  }),
  updatedAt: t.field({
    required: false,
    type: NullableDateTimeFieldUpdateOperationsInput,
  }),
  hyper_profile: t.field({
    required: false,
    type: hyper_profileUpdateOneRequiredWithoutHyper_mealNestedInput,
  }),
});
export const hyper_mealUpdateInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.hyper_mealUpdateInput>,
    false
  >("hyper_mealUpdateInput")
  .implement({
    fields: hyper_mealUpdateInputFields,
  });

export const hyper_mealCreateManyInputFields = (t: any) => ({
  id: t.string({ required: false }),
  meal_time: t.field({ required: false, type: DateTime }),
  carbohydrates: t.float({ required: false }),
  dietary_energy: t.float({ required: false }),
  dietary_sugar: t.float({ required: false }),
  fiber: t.float({ required: false }),
  protein: t.float({ required: false }),
  total_fat: t.float({ required: false }),
  profile_id: t.string({ required: true }),
  created_at: t.field({ required: false, type: DateTime }),
  updatedAt: t.field({ required: false, type: DateTime }),
});
export const hyper_mealCreateManyInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.hyper_mealCreateManyInput>,
    false
  >("hyper_mealCreateManyInput")
  .implement({
    fields: hyper_mealCreateManyInputFields,
  });

export const hyper_mealUpdateManyMutationInputFields = (t: any) => ({
  id: t.field({ required: false, type: StringFieldUpdateOperationsInput }),
  meal_time: t.field({
    required: false,
    type: DateTimeFieldUpdateOperationsInput,
  }),
  carbohydrates: t.field({
    required: false,
    type: NullableFloatFieldUpdateOperationsInput,
  }),
  dietary_energy: t.field({
    required: false,
    type: NullableFloatFieldUpdateOperationsInput,
  }),
  dietary_sugar: t.field({
    required: false,
    type: NullableFloatFieldUpdateOperationsInput,
  }),
  fiber: t.field({
    required: false,
    type: NullableFloatFieldUpdateOperationsInput,
  }),
  protein: t.field({
    required: false,
    type: NullableFloatFieldUpdateOperationsInput,
  }),
  total_fat: t.field({
    required: false,
    type: NullableFloatFieldUpdateOperationsInput,
  }),
  created_at: t.field({
    required: false,
    type: DateTimeFieldUpdateOperationsInput,
  }),
  updatedAt: t.field({
    required: false,
    type: NullableDateTimeFieldUpdateOperationsInput,
  }),
});
export const hyper_mealUpdateManyMutationInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.hyper_mealUpdateManyMutationInput>,
    false
  >("hyper_mealUpdateManyMutationInput")
  .implement({
    fields: hyper_mealUpdateManyMutationInputFields,
  });

export const hyper_profileCreateInputFields = (t: any) => ({
  name: t.string({ required: true }),
  image: t.string({ required: false }),
  email: t.string({ required: false }),
  last_synced_time: t.field({ required: false, type: DateTime }),
  diabetes_status: t.field({ required: false, type: diabetes_status }),
  glucose_range_type: t.field({ required: false, type: glucose_range_type }),
  hyper_activity: t.field({
    required: false,
    type: hyper_activityCreateNestedManyWithoutHyper_profileInput,
  }),
  hyper_cgm_data: t.field({
    required: false,
    type: hyper_cgm_dataCreateNestedManyWithoutHyper_profileInput,
  }),
  hyper_daily_recap: t.field({
    required: false,
    type: hyper_daily_recapCreateNestedManyWithoutHyper_profileInput,
  }),
  hyper_meal: t.field({
    required: false,
    type: hyper_mealCreateNestedManyWithoutHyper_profileInput,
  }),
  users: t.field({
    required: true,
    type: usersCreateNestedOneWithoutHyper_profileInput,
  }),
  hyper_report: t.field({
    required: false,
    type: hyper_reportCreateNestedManyWithoutHyper_profileInput,
  }),
});
export const hyper_profileCreateInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.hyper_profileCreateInput>,
    false
  >("hyper_profileCreateInput")
  .implement({
    fields: hyper_profileCreateInputFields,
  });

export const hyper_profileUpdateInputFields = (t: any) => ({
  name: t.field({ required: false, type: StringFieldUpdateOperationsInput }),
  image: t.field({
    required: false,
    type: NullableStringFieldUpdateOperationsInput,
  }),
  email: t.field({
    required: false,
    type: NullableStringFieldUpdateOperationsInput,
  }),
  last_synced_time: t.field({
    required: false,
    type: NullableDateTimeFieldUpdateOperationsInput,
  }),
  diabetes_status: t.field({
    required: false,
    type: Enumdiabetes_statusFieldUpdateOperationsInput,
  }),
  glucose_range_type: t.field({
    required: false,
    type: Enumglucose_range_typeFieldUpdateOperationsInput,
  }),
  hyper_activity: t.field({
    required: false,
    type: hyper_activityUpdateManyWithoutHyper_profileNestedInput,
  }),
  hyper_cgm_data: t.field({
    required: false,
    type: hyper_cgm_dataUpdateManyWithoutHyper_profileNestedInput,
  }),
  hyper_daily_recap: t.field({
    required: false,
    type: hyper_daily_recapUpdateManyWithoutHyper_profileNestedInput,
  }),
  hyper_meal: t.field({
    required: false,
    type: hyper_mealUpdateManyWithoutHyper_profileNestedInput,
  }),
  users: t.field({
    required: false,
    type: usersUpdateOneRequiredWithoutHyper_profileNestedInput,
  }),
  hyper_report: t.field({
    required: false,
    type: hyper_reportUpdateManyWithoutHyper_profileNestedInput,
  }),
});
export const hyper_profileUpdateInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.hyper_profileUpdateInput>,
    false
  >("hyper_profileUpdateInput")
  .implement({
    fields: hyper_profileUpdateInputFields,
  });

export const hyper_profileCreateManyInputFields = (t: any) => ({
  id: t.string({ required: true }),
  name: t.string({ required: true }),
  image: t.string({ required: false }),
  email: t.string({ required: false }),
  last_synced_time: t.field({ required: false, type: DateTime }),
  diabetes_status: t.field({ required: false, type: diabetes_status }),
  glucose_range_type: t.field({ required: false, type: glucose_range_type }),
});
export const hyper_profileCreateManyInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.hyper_profileCreateManyInput>,
    false
  >("hyper_profileCreateManyInput")
  .implement({
    fields: hyper_profileCreateManyInputFields,
  });

export const hyper_profileUpdateManyMutationInputFields = (t: any) => ({
  name: t.field({ required: false, type: StringFieldUpdateOperationsInput }),
  image: t.field({
    required: false,
    type: NullableStringFieldUpdateOperationsInput,
  }),
  email: t.field({
    required: false,
    type: NullableStringFieldUpdateOperationsInput,
  }),
  last_synced_time: t.field({
    required: false,
    type: NullableDateTimeFieldUpdateOperationsInput,
  }),
  diabetes_status: t.field({
    required: false,
    type: Enumdiabetes_statusFieldUpdateOperationsInput,
  }),
  glucose_range_type: t.field({
    required: false,
    type: Enumglucose_range_typeFieldUpdateOperationsInput,
  }),
});
export const hyper_profileUpdateManyMutationInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.hyper_profileUpdateManyMutationInput>,
    false
  >("hyper_profileUpdateManyMutationInput")
  .implement({
    fields: hyper_profileUpdateManyMutationInputFields,
  });

export const hyper_reportCreateInputFields = (t: any) => ({
  id: t.string({ required: false }),
  title: t.string({ required: true }),
  content: t.string({ required: false }),
  created_at: t.field({ required: false, type: DateTime }),
  updatedAt: t.field({ required: false, type: DateTime }),
  hyper_profile: t.field({
    required: true,
    type: hyper_profileCreateNestedOneWithoutHyper_reportInput,
  }),
});
export const hyper_reportCreateInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.hyper_reportCreateInput>,
    false
  >("hyper_reportCreateInput")
  .implement({
    fields: hyper_reportCreateInputFields,
  });

export const hyper_reportUpdateInputFields = (t: any) => ({
  id: t.field({ required: false, type: StringFieldUpdateOperationsInput }),
  title: t.field({ required: false, type: StringFieldUpdateOperationsInput }),
  content: t.field({
    required: false,
    type: NullableStringFieldUpdateOperationsInput,
  }),
  created_at: t.field({
    required: false,
    type: DateTimeFieldUpdateOperationsInput,
  }),
  updatedAt: t.field({
    required: false,
    type: NullableDateTimeFieldUpdateOperationsInput,
  }),
  hyper_profile: t.field({
    required: false,
    type: hyper_profileUpdateOneRequiredWithoutHyper_reportNestedInput,
  }),
});
export const hyper_reportUpdateInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.hyper_reportUpdateInput>,
    false
  >("hyper_reportUpdateInput")
  .implement({
    fields: hyper_reportUpdateInputFields,
  });

export const hyper_reportCreateManyInputFields = (t: any) => ({
  id: t.string({ required: false }),
  title: t.string({ required: true }),
  content: t.string({ required: false }),
  profile_id: t.string({ required: true }),
  created_at: t.field({ required: false, type: DateTime }),
  updatedAt: t.field({ required: false, type: DateTime }),
});
export const hyper_reportCreateManyInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.hyper_reportCreateManyInput>,
    false
  >("hyper_reportCreateManyInput")
  .implement({
    fields: hyper_reportCreateManyInputFields,
  });

export const hyper_reportUpdateManyMutationInputFields = (t: any) => ({
  id: t.field({ required: false, type: StringFieldUpdateOperationsInput }),
  title: t.field({ required: false, type: StringFieldUpdateOperationsInput }),
  content: t.field({
    required: false,
    type: NullableStringFieldUpdateOperationsInput,
  }),
  created_at: t.field({
    required: false,
    type: DateTimeFieldUpdateOperationsInput,
  }),
  updatedAt: t.field({
    required: false,
    type: NullableDateTimeFieldUpdateOperationsInput,
  }),
});
export const hyper_reportUpdateManyMutationInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.hyper_reportUpdateManyMutationInput>,
    false
  >("hyper_reportUpdateManyMutationInput")
  .implement({
    fields: hyper_reportUpdateManyMutationInputFields,
  });

export const UuidFilterFields = (t: any) => ({
  equals: t.string({ required: false }),
  in: t.stringList({ required: false }),
  notIn: t.stringList({ required: false }),
  lt: t.string({ required: false }),
  lte: t.string({ required: false }),
  gt: t.string({ required: false }),
  gte: t.string({ required: false }),
  mode: t.field({ required: false, type: QueryMode }),
  not: t.field({ required: false, type: NestedUuidFilter }),
});
export const UuidFilter = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.UuidFilter>,
    false
  >("UuidFilter")
  .implement({
    fields: UuidFilterFields,
  });

export const Hyper_profileNullableRelationFilterFields = (t: any) => ({
  is: t.field({ required: false, type: hyper_profileWhereInput }),
  isNot: t.field({ required: false, type: hyper_profileWhereInput }),
});
export const Hyper_profileNullableRelationFilter = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.Hyper_profileNullableRelationFilter>,
    false
  >("Hyper_profileNullableRelationFilter")
  .implement({
    fields: Hyper_profileNullableRelationFilterFields,
  });

export const usersCountOrderByAggregateInputFields = (t: any) => ({
  id: t.field({ required: false, type: SortOrder }),
});
export const usersCountOrderByAggregateInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.usersCountOrderByAggregateInput>,
    false
  >("usersCountOrderByAggregateInput")
  .implement({
    fields: usersCountOrderByAggregateInputFields,
  });

export const usersMaxOrderByAggregateInputFields = (t: any) => ({
  id: t.field({ required: false, type: SortOrder }),
});
export const usersMaxOrderByAggregateInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.usersMaxOrderByAggregateInput>,
    false
  >("usersMaxOrderByAggregateInput")
  .implement({
    fields: usersMaxOrderByAggregateInputFields,
  });

export const usersMinOrderByAggregateInputFields = (t: any) => ({
  id: t.field({ required: false, type: SortOrder }),
});
export const usersMinOrderByAggregateInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.usersMinOrderByAggregateInput>,
    false
  >("usersMinOrderByAggregateInput")
  .implement({
    fields: usersMinOrderByAggregateInputFields,
  });

export const UuidWithAggregatesFilterFields = (t: any) => ({
  equals: t.string({ required: false }),
  in: t.stringList({ required: false }),
  notIn: t.stringList({ required: false }),
  lt: t.string({ required: false }),
  lte: t.string({ required: false }),
  gt: t.string({ required: false }),
  gte: t.string({ required: false }),
  mode: t.field({ required: false, type: QueryMode }),
  not: t.field({ required: false, type: NestedUuidWithAggregatesFilter }),
  _count: t.field({ required: false, type: NestedIntFilter }),
  _min: t.field({ required: false, type: NestedStringFilter }),
  _max: t.field({ required: false, type: NestedStringFilter }),
});
export const UuidWithAggregatesFilter = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.UuidWithAggregatesFilter>,
    false
  >("UuidWithAggregatesFilter")
  .implement({
    fields: UuidWithAggregatesFilterFields,
  });

export const DateTimeFilterFields = (t: any) => ({
  equals: t.field({ required: false, type: DateTime }),
  in: t.field({ required: false, type: [DateTime] }),
  notIn: t.field({ required: false, type: [DateTime] }),
  lt: t.field({ required: false, type: DateTime }),
  lte: t.field({ required: false, type: DateTime }),
  gt: t.field({ required: false, type: DateTime }),
  gte: t.field({ required: false, type: DateTime }),
  not: t.field({ required: false, type: NestedDateTimeFilter }),
});
export const DateTimeFilter = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.DateTimeFilter>,
    false
  >("DateTimeFilter")
  .implement({
    fields: DateTimeFilterFields,
  });

export const DateTimeNullableFilterFields = (t: any) => ({
  equals: t.field({ required: false, type: DateTime }),
  in: t.field({ required: false, type: [DateTime] }),
  notIn: t.field({ required: false, type: [DateTime] }),
  lt: t.field({ required: false, type: DateTime }),
  lte: t.field({ required: false, type: DateTime }),
  gt: t.field({ required: false, type: DateTime }),
  gte: t.field({ required: false, type: DateTime }),
  not: t.field({ required: false, type: NestedDateTimeNullableFilter }),
});
export const DateTimeNullableFilter = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.DateTimeNullableFilter>,
    false
  >("DateTimeNullableFilter")
  .implement({
    fields: DateTimeNullableFilterFields,
  });

export const Hyper_activity_typeRelationFilterFields = (t: any) => ({
  is: t.field({ required: false, type: hyper_activity_typeWhereInput }),
  isNot: t.field({ required: false, type: hyper_activity_typeWhereInput }),
});
export const Hyper_activity_typeRelationFilter = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.Hyper_activity_typeRelationFilter>,
    false
  >("Hyper_activity_typeRelationFilter")
  .implement({
    fields: Hyper_activity_typeRelationFilterFields,
  });

export const Hyper_profileRelationFilterFields = (t: any) => ({
  is: t.field({ required: false, type: hyper_profileWhereInput }),
  isNot: t.field({ required: false, type: hyper_profileWhereInput }),
});
export const Hyper_profileRelationFilter = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.Hyper_profileRelationFilter>,
    false
  >("Hyper_profileRelationFilter")
  .implement({
    fields: Hyper_profileRelationFilterFields,
  });

export const hyper_activityCountOrderByAggregateInputFields = (t: any) => ({
  id: t.field({ required: false, type: SortOrder }),
  activity_type_id: t.field({ required: false, type: SortOrder }),
  profile_id: t.field({ required: false, type: SortOrder }),
  created_at: t.field({ required: false, type: SortOrder }),
  updatedAt: t.field({ required: false, type: SortOrder }),
});
export const hyper_activityCountOrderByAggregateInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.hyper_activityCountOrderByAggregateInput>,
    false
  >("hyper_activityCountOrderByAggregateInput")
  .implement({
    fields: hyper_activityCountOrderByAggregateInputFields,
  });

export const hyper_activityMaxOrderByAggregateInputFields = (t: any) => ({
  id: t.field({ required: false, type: SortOrder }),
  activity_type_id: t.field({ required: false, type: SortOrder }),
  profile_id: t.field({ required: false, type: SortOrder }),
  created_at: t.field({ required: false, type: SortOrder }),
  updatedAt: t.field({ required: false, type: SortOrder }),
});
export const hyper_activityMaxOrderByAggregateInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.hyper_activityMaxOrderByAggregateInput>,
    false
  >("hyper_activityMaxOrderByAggregateInput")
  .implement({
    fields: hyper_activityMaxOrderByAggregateInputFields,
  });

export const hyper_activityMinOrderByAggregateInputFields = (t: any) => ({
  id: t.field({ required: false, type: SortOrder }),
  activity_type_id: t.field({ required: false, type: SortOrder }),
  profile_id: t.field({ required: false, type: SortOrder }),
  created_at: t.field({ required: false, type: SortOrder }),
  updatedAt: t.field({ required: false, type: SortOrder }),
});
export const hyper_activityMinOrderByAggregateInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.hyper_activityMinOrderByAggregateInput>,
    false
  >("hyper_activityMinOrderByAggregateInput")
  .implement({
    fields: hyper_activityMinOrderByAggregateInputFields,
  });

export const DateTimeWithAggregatesFilterFields = (t: any) => ({
  equals: t.field({ required: false, type: DateTime }),
  in: t.field({ required: false, type: [DateTime] }),
  notIn: t.field({ required: false, type: [DateTime] }),
  lt: t.field({ required: false, type: DateTime }),
  lte: t.field({ required: false, type: DateTime }),
  gt: t.field({ required: false, type: DateTime }),
  gte: t.field({ required: false, type: DateTime }),
  not: t.field({ required: false, type: NestedDateTimeWithAggregatesFilter }),
  _count: t.field({ required: false, type: NestedIntFilter }),
  _min: t.field({ required: false, type: NestedDateTimeFilter }),
  _max: t.field({ required: false, type: NestedDateTimeFilter }),
});
export const DateTimeWithAggregatesFilter = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.DateTimeWithAggregatesFilter>,
    false
  >("DateTimeWithAggregatesFilter")
  .implement({
    fields: DateTimeWithAggregatesFilterFields,
  });

export const DateTimeNullableWithAggregatesFilterFields = (t: any) => ({
  equals: t.field({ required: false, type: DateTime }),
  in: t.field({ required: false, type: [DateTime] }),
  notIn: t.field({ required: false, type: [DateTime] }),
  lt: t.field({ required: false, type: DateTime }),
  lte: t.field({ required: false, type: DateTime }),
  gt: t.field({ required: false, type: DateTime }),
  gte: t.field({ required: false, type: DateTime }),
  not: t.field({
    required: false,
    type: NestedDateTimeNullableWithAggregatesFilter,
  }),
  _count: t.field({ required: false, type: NestedIntNullableFilter }),
  _min: t.field({ required: false, type: NestedDateTimeNullableFilter }),
  _max: t.field({ required: false, type: NestedDateTimeNullableFilter }),
});
export const DateTimeNullableWithAggregatesFilter = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.DateTimeNullableWithAggregatesFilter>,
    false
  >("DateTimeNullableWithAggregatesFilter")
  .implement({
    fields: DateTimeNullableWithAggregatesFilterFields,
  });

export const StringFilterFields = (t: any) => ({
  equals: t.string({ required: false }),
  in: t.stringList({ required: false }),
  notIn: t.stringList({ required: false }),
  lt: t.string({ required: false }),
  lte: t.string({ required: false }),
  gt: t.string({ required: false }),
  gte: t.string({ required: false }),
  contains: t.string({ required: false }),
  startsWith: t.string({ required: false }),
  endsWith: t.string({ required: false }),
  mode: t.field({ required: false, type: QueryMode }),
  not: t.field({ required: false, type: NestedStringFilter }),
});
export const StringFilter = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.StringFilter>,
    false
  >("StringFilter")
  .implement({
    fields: StringFilterFields,
  });

export const Hyper_activityListRelationFilterFields = (t: any) => ({
  every: t.field({ required: false, type: hyper_activityWhereInput }),
  some: t.field({ required: false, type: hyper_activityWhereInput }),
  none: t.field({ required: false, type: hyper_activityWhereInput }),
});
export const Hyper_activityListRelationFilter = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.Hyper_activityListRelationFilter>,
    false
  >("Hyper_activityListRelationFilter")
  .implement({
    fields: Hyper_activityListRelationFilterFields,
  });

export const hyper_activityOrderByRelationAggregateInputFields = (t: any) => ({
  _count: t.field({ required: false, type: SortOrder }),
});
export const hyper_activityOrderByRelationAggregateInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.hyper_activityOrderByRelationAggregateInput>,
    false
  >("hyper_activityOrderByRelationAggregateInput")
  .implement({
    fields: hyper_activityOrderByRelationAggregateInputFields,
  });

export const hyper_activity_typeCountOrderByAggregateInputFields = (
  t: any,
) => ({
  id: t.field({ required: false, type: SortOrder }),
  name: t.field({ required: false, type: SortOrder }),
});
export const hyper_activity_typeCountOrderByAggregateInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.hyper_activity_typeCountOrderByAggregateInput>,
    false
  >("hyper_activity_typeCountOrderByAggregateInput")
  .implement({
    fields: hyper_activity_typeCountOrderByAggregateInputFields,
  });

export const hyper_activity_typeMaxOrderByAggregateInputFields = (t: any) => ({
  id: t.field({ required: false, type: SortOrder }),
  name: t.field({ required: false, type: SortOrder }),
});
export const hyper_activity_typeMaxOrderByAggregateInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.hyper_activity_typeMaxOrderByAggregateInput>,
    false
  >("hyper_activity_typeMaxOrderByAggregateInput")
  .implement({
    fields: hyper_activity_typeMaxOrderByAggregateInputFields,
  });

export const hyper_activity_typeMinOrderByAggregateInputFields = (t: any) => ({
  id: t.field({ required: false, type: SortOrder }),
  name: t.field({ required: false, type: SortOrder }),
});
export const hyper_activity_typeMinOrderByAggregateInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.hyper_activity_typeMinOrderByAggregateInput>,
    false
  >("hyper_activity_typeMinOrderByAggregateInput")
  .implement({
    fields: hyper_activity_typeMinOrderByAggregateInputFields,
  });

export const StringWithAggregatesFilterFields = (t: any) => ({
  equals: t.string({ required: false }),
  in: t.stringList({ required: false }),
  notIn: t.stringList({ required: false }),
  lt: t.string({ required: false }),
  lte: t.string({ required: false }),
  gt: t.string({ required: false }),
  gte: t.string({ required: false }),
  contains: t.string({ required: false }),
  startsWith: t.string({ required: false }),
  endsWith: t.string({ required: false }),
  mode: t.field({ required: false, type: QueryMode }),
  not: t.field({ required: false, type: NestedStringWithAggregatesFilter }),
  _count: t.field({ required: false, type: NestedIntFilter }),
  _min: t.field({ required: false, type: NestedStringFilter }),
  _max: t.field({ required: false, type: NestedStringFilter }),
});
export const StringWithAggregatesFilter = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.StringWithAggregatesFilter>,
    false
  >("StringWithAggregatesFilter")
  .implement({
    fields: StringWithAggregatesFilterFields,
  });

export const IntNullableFilterFields = (t: any) => ({
  equals: t.int({ required: false }),
  in: t.intList({ required: false }),
  notIn: t.intList({ required: false }),
  lt: t.int({ required: false }),
  lte: t.int({ required: false }),
  gt: t.int({ required: false }),
  gte: t.int({ required: false }),
  not: t.field({ required: false, type: NestedIntNullableFilter }),
});
export const IntNullableFilter = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.IntNullableFilter>,
    false
  >("IntNullableFilter")
  .implement({
    fields: IntNullableFilterFields,
  });

export const StringNullableFilterFields = (t: any) => ({
  equals: t.string({ required: false }),
  in: t.stringList({ required: false }),
  notIn: t.stringList({ required: false }),
  lt: t.string({ required: false }),
  lte: t.string({ required: false }),
  gt: t.string({ required: false }),
  gte: t.string({ required: false }),
  contains: t.string({ required: false }),
  startsWith: t.string({ required: false }),
  endsWith: t.string({ required: false }),
  mode: t.field({ required: false, type: QueryMode }),
  not: t.field({ required: false, type: NestedStringNullableFilter }),
});
export const StringNullableFilter = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.StringNullableFilter>,
    false
  >("StringNullableFilter")
  .implement({
    fields: StringNullableFilterFields,
  });

export const FloatNullableFilterFields = (t: any) => ({
  equals: t.float({ required: false }),
  in: t.floatList({ required: false }),
  notIn: t.floatList({ required: false }),
  lt: t.float({ required: false }),
  lte: t.float({ required: false }),
  gt: t.float({ required: false }),
  gte: t.float({ required: false }),
  not: t.field({ required: false, type: NestedFloatNullableFilter }),
});
export const FloatNullableFilter = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.FloatNullableFilter>,
    false
  >("FloatNullableFilter")
  .implement({
    fields: FloatNullableFilterFields,
  });

export const IntFilterFields = (t: any) => ({
  equals: t.int({ required: false }),
  in: t.intList({ required: false }),
  notIn: t.intList({ required: false }),
  lt: t.int({ required: false }),
  lte: t.int({ required: false }),
  gt: t.int({ required: false }),
  gte: t.int({ required: false }),
  not: t.field({ required: false, type: NestedIntFilter }),
});
export const IntFilter = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.IntFilter>,
    false
  >("IntFilter")
  .implement({
    fields: IntFilterFields,
  });

export const hyper_cgm_dataCountOrderByAggregateInputFields = (t: any) => ({
  id: t.field({ required: false, type: SortOrder }),
  dexcom_user_id: t.field({ required: false, type: SortOrder }),
  record_id: t.field({ required: false, type: SortOrder }),
  system_time: t.field({ required: false, type: SortOrder }),
  display_time: t.field({ required: false, type: SortOrder }),
  glucose_value: t.field({ required: false, type: SortOrder }),
  trend: t.field({ required: false, type: SortOrder }),
  trend_rate: t.field({ required: false, type: SortOrder }),
  transmitter_id: t.field({ required: false, type: SortOrder }),
  transmitter_generation: t.field({ required: false, type: SortOrder }),
  display_device: t.field({ required: false, type: SortOrder }),
  profile_id: t.field({ required: false, type: SortOrder }),
  created_at: t.field({ required: false, type: SortOrder }),
  updatedAt: t.field({ required: false, type: SortOrder }),
  transmitter_ticks: t.field({ required: false, type: SortOrder }),
  status: t.field({ required: false, type: SortOrder }),
  unit: t.field({ required: false, type: SortOrder }),
  rate_unit: t.field({ required: false, type: SortOrder }),
});
export const hyper_cgm_dataCountOrderByAggregateInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.hyper_cgm_dataCountOrderByAggregateInput>,
    false
  >("hyper_cgm_dataCountOrderByAggregateInput")
  .implement({
    fields: hyper_cgm_dataCountOrderByAggregateInputFields,
  });

export const hyper_cgm_dataAvgOrderByAggregateInputFields = (t: any) => ({
  glucose_value: t.field({ required: false, type: SortOrder }),
  trend_rate: t.field({ required: false, type: SortOrder }),
  transmitter_ticks: t.field({ required: false, type: SortOrder }),
});
export const hyper_cgm_dataAvgOrderByAggregateInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.hyper_cgm_dataAvgOrderByAggregateInput>,
    false
  >("hyper_cgm_dataAvgOrderByAggregateInput")
  .implement({
    fields: hyper_cgm_dataAvgOrderByAggregateInputFields,
  });

export const hyper_cgm_dataMaxOrderByAggregateInputFields = (t: any) => ({
  id: t.field({ required: false, type: SortOrder }),
  dexcom_user_id: t.field({ required: false, type: SortOrder }),
  record_id: t.field({ required: false, type: SortOrder }),
  system_time: t.field({ required: false, type: SortOrder }),
  display_time: t.field({ required: false, type: SortOrder }),
  glucose_value: t.field({ required: false, type: SortOrder }),
  trend: t.field({ required: false, type: SortOrder }),
  trend_rate: t.field({ required: false, type: SortOrder }),
  transmitter_id: t.field({ required: false, type: SortOrder }),
  transmitter_generation: t.field({ required: false, type: SortOrder }),
  display_device: t.field({ required: false, type: SortOrder }),
  profile_id: t.field({ required: false, type: SortOrder }),
  created_at: t.field({ required: false, type: SortOrder }),
  updatedAt: t.field({ required: false, type: SortOrder }),
  transmitter_ticks: t.field({ required: false, type: SortOrder }),
  status: t.field({ required: false, type: SortOrder }),
  unit: t.field({ required: false, type: SortOrder }),
  rate_unit: t.field({ required: false, type: SortOrder }),
});
export const hyper_cgm_dataMaxOrderByAggregateInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.hyper_cgm_dataMaxOrderByAggregateInput>,
    false
  >("hyper_cgm_dataMaxOrderByAggregateInput")
  .implement({
    fields: hyper_cgm_dataMaxOrderByAggregateInputFields,
  });

export const hyper_cgm_dataMinOrderByAggregateInputFields = (t: any) => ({
  id: t.field({ required: false, type: SortOrder }),
  dexcom_user_id: t.field({ required: false, type: SortOrder }),
  record_id: t.field({ required: false, type: SortOrder }),
  system_time: t.field({ required: false, type: SortOrder }),
  display_time: t.field({ required: false, type: SortOrder }),
  glucose_value: t.field({ required: false, type: SortOrder }),
  trend: t.field({ required: false, type: SortOrder }),
  trend_rate: t.field({ required: false, type: SortOrder }),
  transmitter_id: t.field({ required: false, type: SortOrder }),
  transmitter_generation: t.field({ required: false, type: SortOrder }),
  display_device: t.field({ required: false, type: SortOrder }),
  profile_id: t.field({ required: false, type: SortOrder }),
  created_at: t.field({ required: false, type: SortOrder }),
  updatedAt: t.field({ required: false, type: SortOrder }),
  transmitter_ticks: t.field({ required: false, type: SortOrder }),
  status: t.field({ required: false, type: SortOrder }),
  unit: t.field({ required: false, type: SortOrder }),
  rate_unit: t.field({ required: false, type: SortOrder }),
});
export const hyper_cgm_dataMinOrderByAggregateInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.hyper_cgm_dataMinOrderByAggregateInput>,
    false
  >("hyper_cgm_dataMinOrderByAggregateInput")
  .implement({
    fields: hyper_cgm_dataMinOrderByAggregateInputFields,
  });

export const hyper_cgm_dataSumOrderByAggregateInputFields = (t: any) => ({
  glucose_value: t.field({ required: false, type: SortOrder }),
  trend_rate: t.field({ required: false, type: SortOrder }),
  transmitter_ticks: t.field({ required: false, type: SortOrder }),
});
export const hyper_cgm_dataSumOrderByAggregateInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.hyper_cgm_dataSumOrderByAggregateInput>,
    false
  >("hyper_cgm_dataSumOrderByAggregateInput")
  .implement({
    fields: hyper_cgm_dataSumOrderByAggregateInputFields,
  });

export const IntNullableWithAggregatesFilterFields = (t: any) => ({
  equals: t.int({ required: false }),
  in: t.intList({ required: false }),
  notIn: t.intList({ required: false }),
  lt: t.int({ required: false }),
  lte: t.int({ required: false }),
  gt: t.int({ required: false }),
  gte: t.int({ required: false }),
  not: t.field({
    required: false,
    type: NestedIntNullableWithAggregatesFilter,
  }),
  _count: t.field({ required: false, type: NestedIntNullableFilter }),
  _avg: t.field({ required: false, type: NestedFloatNullableFilter }),
  _sum: t.field({ required: false, type: NestedIntNullableFilter }),
  _min: t.field({ required: false, type: NestedIntNullableFilter }),
  _max: t.field({ required: false, type: NestedIntNullableFilter }),
});
export const IntNullableWithAggregatesFilter = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.IntNullableWithAggregatesFilter>,
    false
  >("IntNullableWithAggregatesFilter")
  .implement({
    fields: IntNullableWithAggregatesFilterFields,
  });

export const StringNullableWithAggregatesFilterFields = (t: any) => ({
  equals: t.string({ required: false }),
  in: t.stringList({ required: false }),
  notIn: t.stringList({ required: false }),
  lt: t.string({ required: false }),
  lte: t.string({ required: false }),
  gt: t.string({ required: false }),
  gte: t.string({ required: false }),
  contains: t.string({ required: false }),
  startsWith: t.string({ required: false }),
  endsWith: t.string({ required: false }),
  mode: t.field({ required: false, type: QueryMode }),
  not: t.field({
    required: false,
    type: NestedStringNullableWithAggregatesFilter,
  }),
  _count: t.field({ required: false, type: NestedIntNullableFilter }),
  _min: t.field({ required: false, type: NestedStringNullableFilter }),
  _max: t.field({ required: false, type: NestedStringNullableFilter }),
});
export const StringNullableWithAggregatesFilter = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.StringNullableWithAggregatesFilter>,
    false
  >("StringNullableWithAggregatesFilter")
  .implement({
    fields: StringNullableWithAggregatesFilterFields,
  });

export const FloatNullableWithAggregatesFilterFields = (t: any) => ({
  equals: t.float({ required: false }),
  in: t.floatList({ required: false }),
  notIn: t.floatList({ required: false }),
  lt: t.float({ required: false }),
  lte: t.float({ required: false }),
  gt: t.float({ required: false }),
  gte: t.float({ required: false }),
  not: t.field({
    required: false,
    type: NestedFloatNullableWithAggregatesFilter,
  }),
  _count: t.field({ required: false, type: NestedIntNullableFilter }),
  _avg: t.field({ required: false, type: NestedFloatNullableFilter }),
  _sum: t.field({ required: false, type: NestedFloatNullableFilter }),
  _min: t.field({ required: false, type: NestedFloatNullableFilter }),
  _max: t.field({ required: false, type: NestedFloatNullableFilter }),
});
export const FloatNullableWithAggregatesFilter = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.FloatNullableWithAggregatesFilter>,
    false
  >("FloatNullableWithAggregatesFilter")
  .implement({
    fields: FloatNullableWithAggregatesFilterFields,
  });

export const IntWithAggregatesFilterFields = (t: any) => ({
  equals: t.int({ required: false }),
  in: t.intList({ required: false }),
  notIn: t.intList({ required: false }),
  lt: t.int({ required: false }),
  lte: t.int({ required: false }),
  gt: t.int({ required: false }),
  gte: t.int({ required: false }),
  not: t.field({ required: false, type: NestedIntWithAggregatesFilter }),
  _count: t.field({ required: false, type: NestedIntFilter }),
  _avg: t.field({ required: false, type: NestedFloatFilter }),
  _sum: t.field({ required: false, type: NestedIntFilter }),
  _min: t.field({ required: false, type: NestedIntFilter }),
  _max: t.field({ required: false, type: NestedIntFilter }),
});
export const IntWithAggregatesFilter = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.IntWithAggregatesFilter>,
    false
  >("IntWithAggregatesFilter")
  .implement({
    fields: IntWithAggregatesFilterFields,
  });

export const DecimalNullableFilterFields = (t: any) => ({
  equals: t.field({ required: false, type: Decimal }),
  in: t.field({ required: false, type: [Decimal] }),
  notIn: t.field({ required: false, type: [Decimal] }),
  lt: t.field({ required: false, type: Decimal }),
  lte: t.field({ required: false, type: Decimal }),
  gt: t.field({ required: false, type: Decimal }),
  gte: t.field({ required: false, type: Decimal }),
  not: t.field({ required: false, type: NestedDecimalNullableFilter }),
});
export const DecimalNullableFilter = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.DecimalNullableFilter>,
    false
  >("DecimalNullableFilter")
  .implement({
    fields: DecimalNullableFilterFields,
  });

export const JsonNullableFilterFields = (t: any) => ({
  equals: t.field({ required: false, type: Json }),
  path: t.stringList({ required: false }),
  string_contains: t.string({ required: false }),
  string_starts_with: t.string({ required: false }),
  string_ends_with: t.string({ required: false }),
  array_contains: t.field({ required: false, type: Json }),
  array_starts_with: t.field({ required: false, type: Json }),
  array_ends_with: t.field({ required: false, type: Json }),
  lt: t.field({ required: false, type: Json }),
  lte: t.field({ required: false, type: Json }),
  gt: t.field({ required: false, type: Json }),
  gte: t.field({ required: false, type: Json }),
  not: t.field({ required: false, type: Json }),
});
export const JsonNullableFilter = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.JsonNullableFilter>,
    false
  >("JsonNullableFilter")
  .implement({
    fields: JsonNullableFilterFields,
  });

export const hyper_daily_recapProfile_idDateCompoundUniqueInputFields = (
  t: any,
) => ({
  profile_id: t.string({ required: true }),
  date: t.field({ required: true, type: DateTime }),
});
export const hyper_daily_recapProfile_idDateCompoundUniqueInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.hyper_daily_recapProfile_idDateCompoundUniqueInput>,
    false
  >("hyper_daily_recapProfile_idDateCompoundUniqueInput")
  .implement({
    fields: hyper_daily_recapProfile_idDateCompoundUniqueInputFields,
  });

export const hyper_daily_recapDateProfile_idCompoundUniqueInputFields = (
  t: any,
) => ({
  date: t.field({ required: true, type: DateTime }),
  profile_id: t.string({ required: true }),
});
export const hyper_daily_recapDateProfile_idCompoundUniqueInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.hyper_daily_recapDateProfile_idCompoundUniqueInput>,
    false
  >("hyper_daily_recapDateProfile_idCompoundUniqueInput")
  .implement({
    fields: hyper_daily_recapDateProfile_idCompoundUniqueInputFields,
  });

export const hyper_daily_recapCountOrderByAggregateInputFields = (t: any) => ({
  id: t.field({ required: false, type: SortOrder }),
  date: t.field({ required: false, type: SortOrder }),
  average_glucose: t.field({ required: false, type: SortOrder }),
  minimum_glucose: t.field({ required: false, type: SortOrder }),
  maximum_glucose: t.field({ required: false, type: SortOrder }),
  glucose_variability: t.field({ required: false, type: SortOrder }),
  time_in_ranges: t.field({ required: false, type: SortOrder }),
  total_readings: t.field({ required: false, type: SortOrder }),
  profile_id: t.field({ required: false, type: SortOrder }),
  created_at: t.field({ required: false, type: SortOrder }),
  updatedAt: t.field({ required: false, type: SortOrder }),
  timezone: t.field({ required: false, type: SortOrder }),
});
export const hyper_daily_recapCountOrderByAggregateInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.hyper_daily_recapCountOrderByAggregateInput>,
    false
  >("hyper_daily_recapCountOrderByAggregateInput")
  .implement({
    fields: hyper_daily_recapCountOrderByAggregateInputFields,
  });

export const hyper_daily_recapAvgOrderByAggregateInputFields = (t: any) => ({
  average_glucose: t.field({ required: false, type: SortOrder }),
  minimum_glucose: t.field({ required: false, type: SortOrder }),
  maximum_glucose: t.field({ required: false, type: SortOrder }),
  glucose_variability: t.field({ required: false, type: SortOrder }),
  total_readings: t.field({ required: false, type: SortOrder }),
});
export const hyper_daily_recapAvgOrderByAggregateInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.hyper_daily_recapAvgOrderByAggregateInput>,
    false
  >("hyper_daily_recapAvgOrderByAggregateInput")
  .implement({
    fields: hyper_daily_recapAvgOrderByAggregateInputFields,
  });

export const hyper_daily_recapMaxOrderByAggregateInputFields = (t: any) => ({
  id: t.field({ required: false, type: SortOrder }),
  date: t.field({ required: false, type: SortOrder }),
  average_glucose: t.field({ required: false, type: SortOrder }),
  minimum_glucose: t.field({ required: false, type: SortOrder }),
  maximum_glucose: t.field({ required: false, type: SortOrder }),
  glucose_variability: t.field({ required: false, type: SortOrder }),
  total_readings: t.field({ required: false, type: SortOrder }),
  profile_id: t.field({ required: false, type: SortOrder }),
  created_at: t.field({ required: false, type: SortOrder }),
  updatedAt: t.field({ required: false, type: SortOrder }),
  timezone: t.field({ required: false, type: SortOrder }),
});
export const hyper_daily_recapMaxOrderByAggregateInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.hyper_daily_recapMaxOrderByAggregateInput>,
    false
  >("hyper_daily_recapMaxOrderByAggregateInput")
  .implement({
    fields: hyper_daily_recapMaxOrderByAggregateInputFields,
  });

export const hyper_daily_recapMinOrderByAggregateInputFields = (t: any) => ({
  id: t.field({ required: false, type: SortOrder }),
  date: t.field({ required: false, type: SortOrder }),
  average_glucose: t.field({ required: false, type: SortOrder }),
  minimum_glucose: t.field({ required: false, type: SortOrder }),
  maximum_glucose: t.field({ required: false, type: SortOrder }),
  glucose_variability: t.field({ required: false, type: SortOrder }),
  total_readings: t.field({ required: false, type: SortOrder }),
  profile_id: t.field({ required: false, type: SortOrder }),
  created_at: t.field({ required: false, type: SortOrder }),
  updatedAt: t.field({ required: false, type: SortOrder }),
  timezone: t.field({ required: false, type: SortOrder }),
});
export const hyper_daily_recapMinOrderByAggregateInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.hyper_daily_recapMinOrderByAggregateInput>,
    false
  >("hyper_daily_recapMinOrderByAggregateInput")
  .implement({
    fields: hyper_daily_recapMinOrderByAggregateInputFields,
  });

export const hyper_daily_recapSumOrderByAggregateInputFields = (t: any) => ({
  average_glucose: t.field({ required: false, type: SortOrder }),
  minimum_glucose: t.field({ required: false, type: SortOrder }),
  maximum_glucose: t.field({ required: false, type: SortOrder }),
  glucose_variability: t.field({ required: false, type: SortOrder }),
  total_readings: t.field({ required: false, type: SortOrder }),
});
export const hyper_daily_recapSumOrderByAggregateInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.hyper_daily_recapSumOrderByAggregateInput>,
    false
  >("hyper_daily_recapSumOrderByAggregateInput")
  .implement({
    fields: hyper_daily_recapSumOrderByAggregateInputFields,
  });

export const DecimalNullableWithAggregatesFilterFields = (t: any) => ({
  equals: t.field({ required: false, type: Decimal }),
  in: t.field({ required: false, type: [Decimal] }),
  notIn: t.field({ required: false, type: [Decimal] }),
  lt: t.field({ required: false, type: Decimal }),
  lte: t.field({ required: false, type: Decimal }),
  gt: t.field({ required: false, type: Decimal }),
  gte: t.field({ required: false, type: Decimal }),
  not: t.field({
    required: false,
    type: NestedDecimalNullableWithAggregatesFilter,
  }),
  _count: t.field({ required: false, type: NestedIntNullableFilter }),
  _avg: t.field({ required: false, type: NestedDecimalNullableFilter }),
  _sum: t.field({ required: false, type: NestedDecimalNullableFilter }),
  _min: t.field({ required: false, type: NestedDecimalNullableFilter }),
  _max: t.field({ required: false, type: NestedDecimalNullableFilter }),
});
export const DecimalNullableWithAggregatesFilter = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.DecimalNullableWithAggregatesFilter>,
    false
  >("DecimalNullableWithAggregatesFilter")
  .implement({
    fields: DecimalNullableWithAggregatesFilterFields,
  });

export const JsonNullableWithAggregatesFilterFields = (t: any) => ({
  equals: t.field({ required: false, type: Json }),
  path: t.stringList({ required: false }),
  string_contains: t.string({ required: false }),
  string_starts_with: t.string({ required: false }),
  string_ends_with: t.string({ required: false }),
  array_contains: t.field({ required: false, type: Json }),
  array_starts_with: t.field({ required: false, type: Json }),
  array_ends_with: t.field({ required: false, type: Json }),
  lt: t.field({ required: false, type: Json }),
  lte: t.field({ required: false, type: Json }),
  gt: t.field({ required: false, type: Json }),
  gte: t.field({ required: false, type: Json }),
  not: t.field({ required: false, type: Json }),
  _count: t.field({ required: false, type: NestedIntNullableFilter }),
  _min: t.field({ required: false, type: NestedJsonNullableFilter }),
  _max: t.field({ required: false, type: NestedJsonNullableFilter }),
});
export const JsonNullableWithAggregatesFilter = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.JsonNullableWithAggregatesFilter>,
    false
  >("JsonNullableWithAggregatesFilter")
  .implement({
    fields: JsonNullableWithAggregatesFilterFields,
  });

export const hyper_mealCountOrderByAggregateInputFields = (t: any) => ({
  id: t.field({ required: false, type: SortOrder }),
  meal_time: t.field({ required: false, type: SortOrder }),
  carbohydrates: t.field({ required: false, type: SortOrder }),
  dietary_energy: t.field({ required: false, type: SortOrder }),
  dietary_sugar: t.field({ required: false, type: SortOrder }),
  fiber: t.field({ required: false, type: SortOrder }),
  protein: t.field({ required: false, type: SortOrder }),
  total_fat: t.field({ required: false, type: SortOrder }),
  profile_id: t.field({ required: false, type: SortOrder }),
  created_at: t.field({ required: false, type: SortOrder }),
  updatedAt: t.field({ required: false, type: SortOrder }),
});
export const hyper_mealCountOrderByAggregateInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.hyper_mealCountOrderByAggregateInput>,
    false
  >("hyper_mealCountOrderByAggregateInput")
  .implement({
    fields: hyper_mealCountOrderByAggregateInputFields,
  });

export const hyper_mealAvgOrderByAggregateInputFields = (t: any) => ({
  carbohydrates: t.field({ required: false, type: SortOrder }),
  dietary_energy: t.field({ required: false, type: SortOrder }),
  dietary_sugar: t.field({ required: false, type: SortOrder }),
  fiber: t.field({ required: false, type: SortOrder }),
  protein: t.field({ required: false, type: SortOrder }),
  total_fat: t.field({ required: false, type: SortOrder }),
});
export const hyper_mealAvgOrderByAggregateInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.hyper_mealAvgOrderByAggregateInput>,
    false
  >("hyper_mealAvgOrderByAggregateInput")
  .implement({
    fields: hyper_mealAvgOrderByAggregateInputFields,
  });

export const hyper_mealMaxOrderByAggregateInputFields = (t: any) => ({
  id: t.field({ required: false, type: SortOrder }),
  meal_time: t.field({ required: false, type: SortOrder }),
  carbohydrates: t.field({ required: false, type: SortOrder }),
  dietary_energy: t.field({ required: false, type: SortOrder }),
  dietary_sugar: t.field({ required: false, type: SortOrder }),
  fiber: t.field({ required: false, type: SortOrder }),
  protein: t.field({ required: false, type: SortOrder }),
  total_fat: t.field({ required: false, type: SortOrder }),
  profile_id: t.field({ required: false, type: SortOrder }),
  created_at: t.field({ required: false, type: SortOrder }),
  updatedAt: t.field({ required: false, type: SortOrder }),
});
export const hyper_mealMaxOrderByAggregateInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.hyper_mealMaxOrderByAggregateInput>,
    false
  >("hyper_mealMaxOrderByAggregateInput")
  .implement({
    fields: hyper_mealMaxOrderByAggregateInputFields,
  });

export const hyper_mealMinOrderByAggregateInputFields = (t: any) => ({
  id: t.field({ required: false, type: SortOrder }),
  meal_time: t.field({ required: false, type: SortOrder }),
  carbohydrates: t.field({ required: false, type: SortOrder }),
  dietary_energy: t.field({ required: false, type: SortOrder }),
  dietary_sugar: t.field({ required: false, type: SortOrder }),
  fiber: t.field({ required: false, type: SortOrder }),
  protein: t.field({ required: false, type: SortOrder }),
  total_fat: t.field({ required: false, type: SortOrder }),
  profile_id: t.field({ required: false, type: SortOrder }),
  created_at: t.field({ required: false, type: SortOrder }),
  updatedAt: t.field({ required: false, type: SortOrder }),
});
export const hyper_mealMinOrderByAggregateInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.hyper_mealMinOrderByAggregateInput>,
    false
  >("hyper_mealMinOrderByAggregateInput")
  .implement({
    fields: hyper_mealMinOrderByAggregateInputFields,
  });

export const hyper_mealSumOrderByAggregateInputFields = (t: any) => ({
  carbohydrates: t.field({ required: false, type: SortOrder }),
  dietary_energy: t.field({ required: false, type: SortOrder }),
  dietary_sugar: t.field({ required: false, type: SortOrder }),
  fiber: t.field({ required: false, type: SortOrder }),
  protein: t.field({ required: false, type: SortOrder }),
  total_fat: t.field({ required: false, type: SortOrder }),
});
export const hyper_mealSumOrderByAggregateInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.hyper_mealSumOrderByAggregateInput>,
    false
  >("hyper_mealSumOrderByAggregateInput")
  .implement({
    fields: hyper_mealSumOrderByAggregateInputFields,
  });

export const Enumdiabetes_statusFilterFields = (t: any) => ({
  equals: t.field({ required: false, type: diabetes_status }),
  in: t.field({ required: false, type: [diabetes_status] }),
  notIn: t.field({ required: false, type: [diabetes_status] }),
  not: t.field({ required: false, type: diabetes_status }),
});
export const Enumdiabetes_statusFilter = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.Enumdiabetes_statusFilter>,
    false
  >("Enumdiabetes_statusFilter")
  .implement({
    fields: Enumdiabetes_statusFilterFields,
  });

export const Enumglucose_range_typeFilterFields = (t: any) => ({
  equals: t.field({ required: false, type: glucose_range_type }),
  in: t.field({ required: false, type: [glucose_range_type] }),
  notIn: t.field({ required: false, type: [glucose_range_type] }),
  not: t.field({ required: false, type: glucose_range_type }),
});
export const Enumglucose_range_typeFilter = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.Enumglucose_range_typeFilter>,
    false
  >("Enumglucose_range_typeFilter")
  .implement({
    fields: Enumglucose_range_typeFilterFields,
  });

export const Hyper_cgm_dataListRelationFilterFields = (t: any) => ({
  every: t.field({ required: false, type: hyper_cgm_dataWhereInput }),
  some: t.field({ required: false, type: hyper_cgm_dataWhereInput }),
  none: t.field({ required: false, type: hyper_cgm_dataWhereInput }),
});
export const Hyper_cgm_dataListRelationFilter = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.Hyper_cgm_dataListRelationFilter>,
    false
  >("Hyper_cgm_dataListRelationFilter")
  .implement({
    fields: Hyper_cgm_dataListRelationFilterFields,
  });

export const Hyper_daily_recapListRelationFilterFields = (t: any) => ({
  every: t.field({ required: false, type: hyper_daily_recapWhereInput }),
  some: t.field({ required: false, type: hyper_daily_recapWhereInput }),
  none: t.field({ required: false, type: hyper_daily_recapWhereInput }),
});
export const Hyper_daily_recapListRelationFilter = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.Hyper_daily_recapListRelationFilter>,
    false
  >("Hyper_daily_recapListRelationFilter")
  .implement({
    fields: Hyper_daily_recapListRelationFilterFields,
  });

export const Hyper_mealListRelationFilterFields = (t: any) => ({
  every: t.field({ required: false, type: hyper_mealWhereInput }),
  some: t.field({ required: false, type: hyper_mealWhereInput }),
  none: t.field({ required: false, type: hyper_mealWhereInput }),
});
export const Hyper_mealListRelationFilter = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.Hyper_mealListRelationFilter>,
    false
  >("Hyper_mealListRelationFilter")
  .implement({
    fields: Hyper_mealListRelationFilterFields,
  });

export const UsersRelationFilterFields = (t: any) => ({
  is: t.field({ required: false, type: usersWhereInput }),
  isNot: t.field({ required: false, type: usersWhereInput }),
});
export const UsersRelationFilter = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.UsersRelationFilter>,
    false
  >("UsersRelationFilter")
  .implement({
    fields: UsersRelationFilterFields,
  });

export const Hyper_reportListRelationFilterFields = (t: any) => ({
  every: t.field({ required: false, type: hyper_reportWhereInput }),
  some: t.field({ required: false, type: hyper_reportWhereInput }),
  none: t.field({ required: false, type: hyper_reportWhereInput }),
});
export const Hyper_reportListRelationFilter = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.Hyper_reportListRelationFilter>,
    false
  >("Hyper_reportListRelationFilter")
  .implement({
    fields: Hyper_reportListRelationFilterFields,
  });

export const hyper_cgm_dataOrderByRelationAggregateInputFields = (t: any) => ({
  _count: t.field({ required: false, type: SortOrder }),
});
export const hyper_cgm_dataOrderByRelationAggregateInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.hyper_cgm_dataOrderByRelationAggregateInput>,
    false
  >("hyper_cgm_dataOrderByRelationAggregateInput")
  .implement({
    fields: hyper_cgm_dataOrderByRelationAggregateInputFields,
  });

export const hyper_daily_recapOrderByRelationAggregateInputFields = (
  t: any,
) => ({
  _count: t.field({ required: false, type: SortOrder }),
});
export const hyper_daily_recapOrderByRelationAggregateInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.hyper_daily_recapOrderByRelationAggregateInput>,
    false
  >("hyper_daily_recapOrderByRelationAggregateInput")
  .implement({
    fields: hyper_daily_recapOrderByRelationAggregateInputFields,
  });

export const hyper_mealOrderByRelationAggregateInputFields = (t: any) => ({
  _count: t.field({ required: false, type: SortOrder }),
});
export const hyper_mealOrderByRelationAggregateInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.hyper_mealOrderByRelationAggregateInput>,
    false
  >("hyper_mealOrderByRelationAggregateInput")
  .implement({
    fields: hyper_mealOrderByRelationAggregateInputFields,
  });

export const hyper_reportOrderByRelationAggregateInputFields = (t: any) => ({
  _count: t.field({ required: false, type: SortOrder }),
});
export const hyper_reportOrderByRelationAggregateInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.hyper_reportOrderByRelationAggregateInput>,
    false
  >("hyper_reportOrderByRelationAggregateInput")
  .implement({
    fields: hyper_reportOrderByRelationAggregateInputFields,
  });

export const hyper_profileCountOrderByAggregateInputFields = (t: any) => ({
  id: t.field({ required: false, type: SortOrder }),
  name: t.field({ required: false, type: SortOrder }),
  image: t.field({ required: false, type: SortOrder }),
  email: t.field({ required: false, type: SortOrder }),
  last_synced_time: t.field({ required: false, type: SortOrder }),
  diabetes_status: t.field({ required: false, type: SortOrder }),
  glucose_range_type: t.field({ required: false, type: SortOrder }),
});
export const hyper_profileCountOrderByAggregateInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.hyper_profileCountOrderByAggregateInput>,
    false
  >("hyper_profileCountOrderByAggregateInput")
  .implement({
    fields: hyper_profileCountOrderByAggregateInputFields,
  });

export const hyper_profileMaxOrderByAggregateInputFields = (t: any) => ({
  id: t.field({ required: false, type: SortOrder }),
  name: t.field({ required: false, type: SortOrder }),
  image: t.field({ required: false, type: SortOrder }),
  email: t.field({ required: false, type: SortOrder }),
  last_synced_time: t.field({ required: false, type: SortOrder }),
  diabetes_status: t.field({ required: false, type: SortOrder }),
  glucose_range_type: t.field({ required: false, type: SortOrder }),
});
export const hyper_profileMaxOrderByAggregateInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.hyper_profileMaxOrderByAggregateInput>,
    false
  >("hyper_profileMaxOrderByAggregateInput")
  .implement({
    fields: hyper_profileMaxOrderByAggregateInputFields,
  });

export const hyper_profileMinOrderByAggregateInputFields = (t: any) => ({
  id: t.field({ required: false, type: SortOrder }),
  name: t.field({ required: false, type: SortOrder }),
  image: t.field({ required: false, type: SortOrder }),
  email: t.field({ required: false, type: SortOrder }),
  last_synced_time: t.field({ required: false, type: SortOrder }),
  diabetes_status: t.field({ required: false, type: SortOrder }),
  glucose_range_type: t.field({ required: false, type: SortOrder }),
});
export const hyper_profileMinOrderByAggregateInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.hyper_profileMinOrderByAggregateInput>,
    false
  >("hyper_profileMinOrderByAggregateInput")
  .implement({
    fields: hyper_profileMinOrderByAggregateInputFields,
  });

export const Enumdiabetes_statusWithAggregatesFilterFields = (t: any) => ({
  equals: t.field({ required: false, type: diabetes_status }),
  in: t.field({ required: false, type: [diabetes_status] }),
  notIn: t.field({ required: false, type: [diabetes_status] }),
  not: t.field({ required: false, type: diabetes_status }),
  _count: t.field({ required: false, type: NestedIntFilter }),
  _min: t.field({ required: false, type: NestedEnumdiabetes_statusFilter }),
  _max: t.field({ required: false, type: NestedEnumdiabetes_statusFilter }),
});
export const Enumdiabetes_statusWithAggregatesFilter = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.Enumdiabetes_statusWithAggregatesFilter>,
    false
  >("Enumdiabetes_statusWithAggregatesFilter")
  .implement({
    fields: Enumdiabetes_statusWithAggregatesFilterFields,
  });

export const Enumglucose_range_typeWithAggregatesFilterFields = (t: any) => ({
  equals: t.field({ required: false, type: glucose_range_type }),
  in: t.field({ required: false, type: [glucose_range_type] }),
  notIn: t.field({ required: false, type: [glucose_range_type] }),
  not: t.field({ required: false, type: glucose_range_type }),
  _count: t.field({ required: false, type: NestedIntFilter }),
  _min: t.field({ required: false, type: NestedEnumglucose_range_typeFilter }),
  _max: t.field({ required: false, type: NestedEnumglucose_range_typeFilter }),
});
export const Enumglucose_range_typeWithAggregatesFilter = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.Enumglucose_range_typeWithAggregatesFilter>,
    false
  >("Enumglucose_range_typeWithAggregatesFilter")
  .implement({
    fields: Enumglucose_range_typeWithAggregatesFilterFields,
  });

export const hyper_reportCountOrderByAggregateInputFields = (t: any) => ({
  id: t.field({ required: false, type: SortOrder }),
  title: t.field({ required: false, type: SortOrder }),
  content: t.field({ required: false, type: SortOrder }),
  profile_id: t.field({ required: false, type: SortOrder }),
  created_at: t.field({ required: false, type: SortOrder }),
  updatedAt: t.field({ required: false, type: SortOrder }),
});
export const hyper_reportCountOrderByAggregateInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.hyper_reportCountOrderByAggregateInput>,
    false
  >("hyper_reportCountOrderByAggregateInput")
  .implement({
    fields: hyper_reportCountOrderByAggregateInputFields,
  });

export const hyper_reportMaxOrderByAggregateInputFields = (t: any) => ({
  id: t.field({ required: false, type: SortOrder }),
  title: t.field({ required: false, type: SortOrder }),
  content: t.field({ required: false, type: SortOrder }),
  profile_id: t.field({ required: false, type: SortOrder }),
  created_at: t.field({ required: false, type: SortOrder }),
  updatedAt: t.field({ required: false, type: SortOrder }),
});
export const hyper_reportMaxOrderByAggregateInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.hyper_reportMaxOrderByAggregateInput>,
    false
  >("hyper_reportMaxOrderByAggregateInput")
  .implement({
    fields: hyper_reportMaxOrderByAggregateInputFields,
  });

export const hyper_reportMinOrderByAggregateInputFields = (t: any) => ({
  id: t.field({ required: false, type: SortOrder }),
  title: t.field({ required: false, type: SortOrder }),
  content: t.field({ required: false, type: SortOrder }),
  profile_id: t.field({ required: false, type: SortOrder }),
  created_at: t.field({ required: false, type: SortOrder }),
  updatedAt: t.field({ required: false, type: SortOrder }),
});
export const hyper_reportMinOrderByAggregateInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.hyper_reportMinOrderByAggregateInput>,
    false
  >("hyper_reportMinOrderByAggregateInput")
  .implement({
    fields: hyper_reportMinOrderByAggregateInputFields,
  });

export const hyper_profileCreateNestedOneWithoutUsersInputFields = (
  t: any,
) => ({
  create: t.field({
    required: false,
    type: hyper_profileCreateWithoutUsersInput,
  }),
  connectOrCreate: t.field({
    required: false,
    type: hyper_profileCreateOrConnectWithoutUsersInput,
  }),
  connect: t.field({ required: false, type: hyper_profileWhereUniqueInput }),
});
export const hyper_profileCreateNestedOneWithoutUsersInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.hyper_profileCreateNestedOneWithoutUsersInput>,
    false
  >("hyper_profileCreateNestedOneWithoutUsersInput")
  .implement({
    fields: hyper_profileCreateNestedOneWithoutUsersInputFields,
  });

export const StringFieldUpdateOperationsInputFields = (t: any) => ({
  set: t.string({ required: false }),
});
export const StringFieldUpdateOperationsInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.StringFieldUpdateOperationsInput>,
    false
  >("StringFieldUpdateOperationsInput")
  .implement({
    fields: StringFieldUpdateOperationsInputFields,
  });

export const hyper_profileUpdateOneWithoutUsersNestedInputFields = (
  t: any,
) => ({
  create: t.field({
    required: false,
    type: hyper_profileCreateWithoutUsersInput,
  }),
  connectOrCreate: t.field({
    required: false,
    type: hyper_profileCreateOrConnectWithoutUsersInput,
  }),
  upsert: t.field({
    required: false,
    type: hyper_profileUpsertWithoutUsersInput,
  }),
  disconnect: t.field({ required: false, type: hyper_profileWhereInput }),
  delete: t.field({ required: false, type: hyper_profileWhereInput }),
  connect: t.field({ required: false, type: hyper_profileWhereUniqueInput }),
  update: t.field({
    required: false,
    type: hyper_profileUpdateToOneWithWhereWithoutUsersInput,
  }),
});
export const hyper_profileUpdateOneWithoutUsersNestedInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.hyper_profileUpdateOneWithoutUsersNestedInput>,
    false
  >("hyper_profileUpdateOneWithoutUsersNestedInput")
  .implement({
    fields: hyper_profileUpdateOneWithoutUsersNestedInputFields,
  });

export const DateTimeFieldUpdateOperationsInputFields = (t: any) => ({
  set: t.field({ required: false, type: DateTime }),
});
export const DateTimeFieldUpdateOperationsInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.DateTimeFieldUpdateOperationsInput>,
    false
  >("DateTimeFieldUpdateOperationsInput")
  .implement({
    fields: DateTimeFieldUpdateOperationsInputFields,
  });

export const NullableDateTimeFieldUpdateOperationsInputFields = (t: any) => ({
  set: t.field({ required: false, type: DateTime }),
});
export const NullableDateTimeFieldUpdateOperationsInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.NullableDateTimeFieldUpdateOperationsInput>,
    false
  >("NullableDateTimeFieldUpdateOperationsInput")
  .implement({
    fields: NullableDateTimeFieldUpdateOperationsInputFields,
  });

export const hyper_activity_typeUpdateOneRequiredWithoutHyper_activityNestedInputFields =
  (t: any) => ({
    create: t.field({
      required: false,
      type: hyper_activity_typeCreateWithoutHyper_activityInput,
    }),
    connectOrCreate: t.field({
      required: false,
      type: hyper_activity_typeCreateOrConnectWithoutHyper_activityInput,
    }),
    upsert: t.field({
      required: false,
      type: hyper_activity_typeUpsertWithoutHyper_activityInput,
    }),
    connect: t.field({
      required: false,
      type: hyper_activity_typeWhereUniqueInput,
    }),
    update: t.field({
      required: false,
      type: hyper_activity_typeUpdateToOneWithWhereWithoutHyper_activityInput,
    }),
  });
export const hyper_activity_typeUpdateOneRequiredWithoutHyper_activityNestedInput =
  builder
    .inputRef<
      PrismaUpdateOperationsInputFilter<Prisma.hyper_activity_typeUpdateOneRequiredWithoutHyper_activityNestedInput>,
      false
    >("hyper_activity_typeUpdateOneRequiredWithoutHyper_activityNestedInput")
    .implement({
      fields:
        hyper_activity_typeUpdateOneRequiredWithoutHyper_activityNestedInputFields,
    });

export const hyper_profileUpdateOneRequiredWithoutHyper_activityNestedInputFields =
  (t: any) => ({
    create: t.field({
      required: false,
      type: hyper_profileCreateWithoutHyper_activityInput,
    }),
    connectOrCreate: t.field({
      required: false,
      type: hyper_profileCreateOrConnectWithoutHyper_activityInput,
    }),
    upsert: t.field({
      required: false,
      type: hyper_profileUpsertWithoutHyper_activityInput,
    }),
    connect: t.field({ required: false, type: hyper_profileWhereUniqueInput }),
    update: t.field({
      required: false,
      type: hyper_profileUpdateToOneWithWhereWithoutHyper_activityInput,
    }),
  });
export const hyper_profileUpdateOneRequiredWithoutHyper_activityNestedInput =
  builder
    .inputRef<
      PrismaUpdateOperationsInputFilter<Prisma.hyper_profileUpdateOneRequiredWithoutHyper_activityNestedInput>,
      false
    >("hyper_profileUpdateOneRequiredWithoutHyper_activityNestedInput")
    .implement({
      fields:
        hyper_profileUpdateOneRequiredWithoutHyper_activityNestedInputFields,
    });

export const hyper_activityCreateNestedManyWithoutHyper_activity_typeInputFields =
  (t: any) => ({
    connect: t.field({
      required: false,
      type: [hyper_activityWhereUniqueInput],
    }),
  });
export const hyper_activityCreateNestedManyWithoutHyper_activity_typeInput =
  builder
    .inputRef<
      PrismaUpdateOperationsInputFilter<Prisma.hyper_activityCreateNestedManyWithoutHyper_activity_typeInput>,
      false
    >("hyper_activityCreateNestedManyWithoutHyper_activity_typeInput")
    .implement({
      fields:
        hyper_activityCreateNestedManyWithoutHyper_activity_typeInputFields,
    });

export const hyper_activityUpdateManyWithoutHyper_activity_typeNestedInputFields =
  (t: any) => ({
    set: t.field({ required: false, type: [hyper_activityWhereUniqueInput] }),
    disconnect: t.field({
      required: false,
      type: [hyper_activityWhereUniqueInput],
    }),
    delete: t.field({
      required: false,
      type: [hyper_activityWhereUniqueInput],
    }),
    connect: t.field({
      required: false,
      type: [hyper_activityWhereUniqueInput],
    }),
    update: t.field({
      required: false,
      type: [
        hyper_activityUpdateWithWhereUniqueWithoutHyper_activity_typeInput,
      ],
    }),
    updateMany: t.field({
      required: false,
      type: [hyper_activityUpdateManyWithWhereWithoutHyper_activity_typeInput],
    }),
    deleteMany: t.field({
      required: false,
      type: [hyper_activityScalarWhereInput],
    }),
  });
export const hyper_activityUpdateManyWithoutHyper_activity_typeNestedInput =
  builder
    .inputRef<
      PrismaUpdateOperationsInputFilter<Prisma.hyper_activityUpdateManyWithoutHyper_activity_typeNestedInput>,
      false
    >("hyper_activityUpdateManyWithoutHyper_activity_typeNestedInput")
    .implement({
      fields:
        hyper_activityUpdateManyWithoutHyper_activity_typeNestedInputFields,
    });

export const hyper_profileCreateNestedOneWithoutHyper_cgm_dataInputFields = (
  t: any,
) => ({
  create: t.field({
    required: false,
    type: hyper_profileCreateWithoutHyper_cgm_dataInput,
  }),
  connectOrCreate: t.field({
    required: false,
    type: hyper_profileCreateOrConnectWithoutHyper_cgm_dataInput,
  }),
  connect: t.field({ required: false, type: hyper_profileWhereUniqueInput }),
});
export const hyper_profileCreateNestedOneWithoutHyper_cgm_dataInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.hyper_profileCreateNestedOneWithoutHyper_cgm_dataInput>,
    false
  >("hyper_profileCreateNestedOneWithoutHyper_cgm_dataInput")
  .implement({
    fields: hyper_profileCreateNestedOneWithoutHyper_cgm_dataInputFields,
  });

export const NullableIntFieldUpdateOperationsInputFields = (t: any) => ({
  set: t.int({ required: false }),
  increment: t.int({ required: false }),
  decrement: t.int({ required: false }),
  multiply: t.int({ required: false }),
  divide: t.int({ required: false }),
});
export const NullableIntFieldUpdateOperationsInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.NullableIntFieldUpdateOperationsInput>,
    false
  >("NullableIntFieldUpdateOperationsInput")
  .implement({
    fields: NullableIntFieldUpdateOperationsInputFields,
  });

export const NullableStringFieldUpdateOperationsInputFields = (t: any) => ({
  set: t.string({ required: false }),
});
export const NullableStringFieldUpdateOperationsInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.NullableStringFieldUpdateOperationsInput>,
    false
  >("NullableStringFieldUpdateOperationsInput")
  .implement({
    fields: NullableStringFieldUpdateOperationsInputFields,
  });

export const NullableFloatFieldUpdateOperationsInputFields = (t: any) => ({
  set: t.float({ required: false }),
  increment: t.float({ required: false }),
  decrement: t.float({ required: false }),
  multiply: t.float({ required: false }),
  divide: t.float({ required: false }),
});
export const NullableFloatFieldUpdateOperationsInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.NullableFloatFieldUpdateOperationsInput>,
    false
  >("NullableFloatFieldUpdateOperationsInput")
  .implement({
    fields: NullableFloatFieldUpdateOperationsInputFields,
  });

export const IntFieldUpdateOperationsInputFields = (t: any) => ({
  set: t.int({ required: false }),
  increment: t.int({ required: false }),
  decrement: t.int({ required: false }),
  multiply: t.int({ required: false }),
  divide: t.int({ required: false }),
});
export const IntFieldUpdateOperationsInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.IntFieldUpdateOperationsInput>,
    false
  >("IntFieldUpdateOperationsInput")
  .implement({
    fields: IntFieldUpdateOperationsInputFields,
  });

export const hyper_profileUpdateOneRequiredWithoutHyper_cgm_dataNestedInputFields =
  (t: any) => ({
    create: t.field({
      required: false,
      type: hyper_profileCreateWithoutHyper_cgm_dataInput,
    }),
    connectOrCreate: t.field({
      required: false,
      type: hyper_profileCreateOrConnectWithoutHyper_cgm_dataInput,
    }),
    upsert: t.field({
      required: false,
      type: hyper_profileUpsertWithoutHyper_cgm_dataInput,
    }),
    connect: t.field({ required: false, type: hyper_profileWhereUniqueInput }),
    update: t.field({
      required: false,
      type: hyper_profileUpdateToOneWithWhereWithoutHyper_cgm_dataInput,
    }),
  });
export const hyper_profileUpdateOneRequiredWithoutHyper_cgm_dataNestedInput =
  builder
    .inputRef<
      PrismaUpdateOperationsInputFilter<Prisma.hyper_profileUpdateOneRequiredWithoutHyper_cgm_dataNestedInput>,
      false
    >("hyper_profileUpdateOneRequiredWithoutHyper_cgm_dataNestedInput")
    .implement({
      fields:
        hyper_profileUpdateOneRequiredWithoutHyper_cgm_dataNestedInputFields,
    });

export const hyper_profileCreateNestedOneWithoutHyper_daily_recapInputFields = (
  t: any,
) => ({
  create: t.field({
    required: false,
    type: hyper_profileCreateWithoutHyper_daily_recapInput,
  }),
  connectOrCreate: t.field({
    required: false,
    type: hyper_profileCreateOrConnectWithoutHyper_daily_recapInput,
  }),
  connect: t.field({ required: false, type: hyper_profileWhereUniqueInput }),
});
export const hyper_profileCreateNestedOneWithoutHyper_daily_recapInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.hyper_profileCreateNestedOneWithoutHyper_daily_recapInput>,
    false
  >("hyper_profileCreateNestedOneWithoutHyper_daily_recapInput")
  .implement({
    fields: hyper_profileCreateNestedOneWithoutHyper_daily_recapInputFields,
  });

export const NullableDecimalFieldUpdateOperationsInputFields = (t: any) => ({
  set: t.field({ required: false, type: Decimal }),
  increment: t.field({ required: false, type: Decimal }),
  decrement: t.field({ required: false, type: Decimal }),
  multiply: t.field({ required: false, type: Decimal }),
  divide: t.field({ required: false, type: Decimal }),
});
export const NullableDecimalFieldUpdateOperationsInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.NullableDecimalFieldUpdateOperationsInput>,
    false
  >("NullableDecimalFieldUpdateOperationsInput")
  .implement({
    fields: NullableDecimalFieldUpdateOperationsInputFields,
  });

export const hyper_profileUpdateOneRequiredWithoutHyper_daily_recapNestedInputFields =
  (t: any) => ({
    create: t.field({
      required: false,
      type: hyper_profileCreateWithoutHyper_daily_recapInput,
    }),
    connectOrCreate: t.field({
      required: false,
      type: hyper_profileCreateOrConnectWithoutHyper_daily_recapInput,
    }),
    upsert: t.field({
      required: false,
      type: hyper_profileUpsertWithoutHyper_daily_recapInput,
    }),
    connect: t.field({ required: false, type: hyper_profileWhereUniqueInput }),
    update: t.field({
      required: false,
      type: hyper_profileUpdateToOneWithWhereWithoutHyper_daily_recapInput,
    }),
  });
export const hyper_profileUpdateOneRequiredWithoutHyper_daily_recapNestedInput =
  builder
    .inputRef<
      PrismaUpdateOperationsInputFilter<Prisma.hyper_profileUpdateOneRequiredWithoutHyper_daily_recapNestedInput>,
      false
    >("hyper_profileUpdateOneRequiredWithoutHyper_daily_recapNestedInput")
    .implement({
      fields:
        hyper_profileUpdateOneRequiredWithoutHyper_daily_recapNestedInputFields,
    });

export const hyper_profileCreateNestedOneWithoutHyper_mealInputFields = (
  t: any,
) => ({
  create: t.field({
    required: false,
    type: hyper_profileCreateWithoutHyper_mealInput,
  }),
  connectOrCreate: t.field({
    required: false,
    type: hyper_profileCreateOrConnectWithoutHyper_mealInput,
  }),
  connect: t.field({ required: false, type: hyper_profileWhereUniqueInput }),
});
export const hyper_profileCreateNestedOneWithoutHyper_mealInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.hyper_profileCreateNestedOneWithoutHyper_mealInput>,
    false
  >("hyper_profileCreateNestedOneWithoutHyper_mealInput")
  .implement({
    fields: hyper_profileCreateNestedOneWithoutHyper_mealInputFields,
  });

export const hyper_profileUpdateOneRequiredWithoutHyper_mealNestedInputFields =
  (t: any) => ({
    create: t.field({
      required: false,
      type: hyper_profileCreateWithoutHyper_mealInput,
    }),
    connectOrCreate: t.field({
      required: false,
      type: hyper_profileCreateOrConnectWithoutHyper_mealInput,
    }),
    upsert: t.field({
      required: false,
      type: hyper_profileUpsertWithoutHyper_mealInput,
    }),
    connect: t.field({ required: false, type: hyper_profileWhereUniqueInput }),
    update: t.field({
      required: false,
      type: hyper_profileUpdateToOneWithWhereWithoutHyper_mealInput,
    }),
  });
export const hyper_profileUpdateOneRequiredWithoutHyper_mealNestedInput =
  builder
    .inputRef<
      PrismaUpdateOperationsInputFilter<Prisma.hyper_profileUpdateOneRequiredWithoutHyper_mealNestedInput>,
      false
    >("hyper_profileUpdateOneRequiredWithoutHyper_mealNestedInput")
    .implement({
      fields: hyper_profileUpdateOneRequiredWithoutHyper_mealNestedInputFields,
    });

export const hyper_activityCreateNestedManyWithoutHyper_profileInputFields = (
  t: any,
) => ({
  connect: t.field({ required: false, type: [hyper_activityWhereUniqueInput] }),
});
export const hyper_activityCreateNestedManyWithoutHyper_profileInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.hyper_activityCreateNestedManyWithoutHyper_profileInput>,
    false
  >("hyper_activityCreateNestedManyWithoutHyper_profileInput")
  .implement({
    fields: hyper_activityCreateNestedManyWithoutHyper_profileInputFields,
  });

export const hyper_cgm_dataCreateNestedManyWithoutHyper_profileInputFields = (
  t: any,
) => ({
  create: t.field({
    required: false,
    type: [hyper_cgm_dataCreateWithoutHyper_profileInput],
  }),
  connectOrCreate: t.field({
    required: false,
    type: [hyper_cgm_dataCreateOrConnectWithoutHyper_profileInput],
  }),
  createMany: t.field({
    required: false,
    type: hyper_cgm_dataCreateManyHyper_profileInputEnvelope,
  }),
  connect: t.field({ required: false, type: [hyper_cgm_dataWhereUniqueInput] }),
});
export const hyper_cgm_dataCreateNestedManyWithoutHyper_profileInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.hyper_cgm_dataCreateNestedManyWithoutHyper_profileInput>,
    false
  >("hyper_cgm_dataCreateNestedManyWithoutHyper_profileInput")
  .implement({
    fields: hyper_cgm_dataCreateNestedManyWithoutHyper_profileInputFields,
  });

export const hyper_daily_recapCreateNestedManyWithoutHyper_profileInputFields =
  (t: any) => ({
    create: t.field({
      required: false,
      type: [hyper_daily_recapCreateWithoutHyper_profileInput],
    }),
    connectOrCreate: t.field({
      required: false,
      type: [hyper_daily_recapCreateOrConnectWithoutHyper_profileInput],
    }),
    createMany: t.field({
      required: false,
      type: hyper_daily_recapCreateManyHyper_profileInputEnvelope,
    }),
    connect: t.field({
      required: false,
      type: [hyper_daily_recapWhereUniqueInput],
    }),
  });
export const hyper_daily_recapCreateNestedManyWithoutHyper_profileInput =
  builder
    .inputRef<
      PrismaUpdateOperationsInputFilter<Prisma.hyper_daily_recapCreateNestedManyWithoutHyper_profileInput>,
      false
    >("hyper_daily_recapCreateNestedManyWithoutHyper_profileInput")
    .implement({
      fields: hyper_daily_recapCreateNestedManyWithoutHyper_profileInputFields,
    });

export const hyper_mealCreateNestedManyWithoutHyper_profileInputFields = (
  t: any,
) => ({
  create: t.field({
    required: false,
    type: [hyper_mealCreateWithoutHyper_profileInput],
  }),
  connectOrCreate: t.field({
    required: false,
    type: [hyper_mealCreateOrConnectWithoutHyper_profileInput],
  }),
  createMany: t.field({
    required: false,
    type: hyper_mealCreateManyHyper_profileInputEnvelope,
  }),
  connect: t.field({ required: false, type: [hyper_mealWhereUniqueInput] }),
});
export const hyper_mealCreateNestedManyWithoutHyper_profileInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.hyper_mealCreateNestedManyWithoutHyper_profileInput>,
    false
  >("hyper_mealCreateNestedManyWithoutHyper_profileInput")
  .implement({
    fields: hyper_mealCreateNestedManyWithoutHyper_profileInputFields,
  });

export const usersCreateNestedOneWithoutHyper_profileInputFields = (
  t: any,
) => ({
  create: t.field({
    required: false,
    type: usersCreateWithoutHyper_profileInput,
  }),
  connectOrCreate: t.field({
    required: false,
    type: usersCreateOrConnectWithoutHyper_profileInput,
  }),
  connect: t.field({ required: false, type: usersWhereUniqueInput }),
});
export const usersCreateNestedOneWithoutHyper_profileInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.usersCreateNestedOneWithoutHyper_profileInput>,
    false
  >("usersCreateNestedOneWithoutHyper_profileInput")
  .implement({
    fields: usersCreateNestedOneWithoutHyper_profileInputFields,
  });

export const hyper_reportCreateNestedManyWithoutHyper_profileInputFields = (
  t: any,
) => ({
  create: t.field({
    required: false,
    type: [hyper_reportCreateWithoutHyper_profileInput],
  }),
  connectOrCreate: t.field({
    required: false,
    type: [hyper_reportCreateOrConnectWithoutHyper_profileInput],
  }),
  createMany: t.field({
    required: false,
    type: hyper_reportCreateManyHyper_profileInputEnvelope,
  }),
  connect: t.field({ required: false, type: [hyper_reportWhereUniqueInput] }),
});
export const hyper_reportCreateNestedManyWithoutHyper_profileInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.hyper_reportCreateNestedManyWithoutHyper_profileInput>,
    false
  >("hyper_reportCreateNestedManyWithoutHyper_profileInput")
  .implement({
    fields: hyper_reportCreateNestedManyWithoutHyper_profileInputFields,
  });

export const Enumdiabetes_statusFieldUpdateOperationsInputFields = (
  t: any,
) => ({
  set: t.field({ required: false, type: diabetes_status }),
});
export const Enumdiabetes_statusFieldUpdateOperationsInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.Enumdiabetes_statusFieldUpdateOperationsInput>,
    false
  >("Enumdiabetes_statusFieldUpdateOperationsInput")
  .implement({
    fields: Enumdiabetes_statusFieldUpdateOperationsInputFields,
  });

export const Enumglucose_range_typeFieldUpdateOperationsInputFields = (
  t: any,
) => ({
  set: t.field({ required: false, type: glucose_range_type }),
});
export const Enumglucose_range_typeFieldUpdateOperationsInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.Enumglucose_range_typeFieldUpdateOperationsInput>,
    false
  >("Enumglucose_range_typeFieldUpdateOperationsInput")
  .implement({
    fields: Enumglucose_range_typeFieldUpdateOperationsInputFields,
  });

export const hyper_activityUpdateManyWithoutHyper_profileNestedInputFields = (
  t: any,
) => ({
  set: t.field({ required: false, type: [hyper_activityWhereUniqueInput] }),
  disconnect: t.field({
    required: false,
    type: [hyper_activityWhereUniqueInput],
  }),
  delete: t.field({ required: false, type: [hyper_activityWhereUniqueInput] }),
  connect: t.field({ required: false, type: [hyper_activityWhereUniqueInput] }),
  update: t.field({
    required: false,
    type: [hyper_activityUpdateWithWhereUniqueWithoutHyper_profileInput],
  }),
  updateMany: t.field({
    required: false,
    type: [hyper_activityUpdateManyWithWhereWithoutHyper_profileInput],
  }),
  deleteMany: t.field({
    required: false,
    type: [hyper_activityScalarWhereInput],
  }),
});
export const hyper_activityUpdateManyWithoutHyper_profileNestedInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.hyper_activityUpdateManyWithoutHyper_profileNestedInput>,
    false
  >("hyper_activityUpdateManyWithoutHyper_profileNestedInput")
  .implement({
    fields: hyper_activityUpdateManyWithoutHyper_profileNestedInputFields,
  });

export const hyper_cgm_dataUpdateManyWithoutHyper_profileNestedInputFields = (
  t: any,
) => ({
  create: t.field({
    required: false,
    type: [hyper_cgm_dataCreateWithoutHyper_profileInput],
  }),
  connectOrCreate: t.field({
    required: false,
    type: [hyper_cgm_dataCreateOrConnectWithoutHyper_profileInput],
  }),
  upsert: t.field({
    required: false,
    type: [hyper_cgm_dataUpsertWithWhereUniqueWithoutHyper_profileInput],
  }),
  createMany: t.field({
    required: false,
    type: hyper_cgm_dataCreateManyHyper_profileInputEnvelope,
  }),
  set: t.field({ required: false, type: [hyper_cgm_dataWhereUniqueInput] }),
  disconnect: t.field({
    required: false,
    type: [hyper_cgm_dataWhereUniqueInput],
  }),
  delete: t.field({ required: false, type: [hyper_cgm_dataWhereUniqueInput] }),
  connect: t.field({ required: false, type: [hyper_cgm_dataWhereUniqueInput] }),
  update: t.field({
    required: false,
    type: [hyper_cgm_dataUpdateWithWhereUniqueWithoutHyper_profileInput],
  }),
  updateMany: t.field({
    required: false,
    type: [hyper_cgm_dataUpdateManyWithWhereWithoutHyper_profileInput],
  }),
  deleteMany: t.field({
    required: false,
    type: [hyper_cgm_dataScalarWhereInput],
  }),
});
export const hyper_cgm_dataUpdateManyWithoutHyper_profileNestedInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.hyper_cgm_dataUpdateManyWithoutHyper_profileNestedInput>,
    false
  >("hyper_cgm_dataUpdateManyWithoutHyper_profileNestedInput")
  .implement({
    fields: hyper_cgm_dataUpdateManyWithoutHyper_profileNestedInputFields,
  });

export const hyper_daily_recapUpdateManyWithoutHyper_profileNestedInputFields =
  (t: any) => ({
    create: t.field({
      required: false,
      type: [hyper_daily_recapCreateWithoutHyper_profileInput],
    }),
    connectOrCreate: t.field({
      required: false,
      type: [hyper_daily_recapCreateOrConnectWithoutHyper_profileInput],
    }),
    upsert: t.field({
      required: false,
      type: [hyper_daily_recapUpsertWithWhereUniqueWithoutHyper_profileInput],
    }),
    createMany: t.field({
      required: false,
      type: hyper_daily_recapCreateManyHyper_profileInputEnvelope,
    }),
    set: t.field({
      required: false,
      type: [hyper_daily_recapWhereUniqueInput],
    }),
    disconnect: t.field({
      required: false,
      type: [hyper_daily_recapWhereUniqueInput],
    }),
    delete: t.field({
      required: false,
      type: [hyper_daily_recapWhereUniqueInput],
    }),
    connect: t.field({
      required: false,
      type: [hyper_daily_recapWhereUniqueInput],
    }),
    update: t.field({
      required: false,
      type: [hyper_daily_recapUpdateWithWhereUniqueWithoutHyper_profileInput],
    }),
    updateMany: t.field({
      required: false,
      type: [hyper_daily_recapUpdateManyWithWhereWithoutHyper_profileInput],
    }),
    deleteMany: t.field({
      required: false,
      type: [hyper_daily_recapScalarWhereInput],
    }),
  });
export const hyper_daily_recapUpdateManyWithoutHyper_profileNestedInput =
  builder
    .inputRef<
      PrismaUpdateOperationsInputFilter<Prisma.hyper_daily_recapUpdateManyWithoutHyper_profileNestedInput>,
      false
    >("hyper_daily_recapUpdateManyWithoutHyper_profileNestedInput")
    .implement({
      fields: hyper_daily_recapUpdateManyWithoutHyper_profileNestedInputFields,
    });

export const hyper_mealUpdateManyWithoutHyper_profileNestedInputFields = (
  t: any,
) => ({
  create: t.field({
    required: false,
    type: [hyper_mealCreateWithoutHyper_profileInput],
  }),
  connectOrCreate: t.field({
    required: false,
    type: [hyper_mealCreateOrConnectWithoutHyper_profileInput],
  }),
  upsert: t.field({
    required: false,
    type: [hyper_mealUpsertWithWhereUniqueWithoutHyper_profileInput],
  }),
  createMany: t.field({
    required: false,
    type: hyper_mealCreateManyHyper_profileInputEnvelope,
  }),
  set: t.field({ required: false, type: [hyper_mealWhereUniqueInput] }),
  disconnect: t.field({ required: false, type: [hyper_mealWhereUniqueInput] }),
  delete: t.field({ required: false, type: [hyper_mealWhereUniqueInput] }),
  connect: t.field({ required: false, type: [hyper_mealWhereUniqueInput] }),
  update: t.field({
    required: false,
    type: [hyper_mealUpdateWithWhereUniqueWithoutHyper_profileInput],
  }),
  updateMany: t.field({
    required: false,
    type: [hyper_mealUpdateManyWithWhereWithoutHyper_profileInput],
  }),
  deleteMany: t.field({ required: false, type: [hyper_mealScalarWhereInput] }),
});
export const hyper_mealUpdateManyWithoutHyper_profileNestedInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.hyper_mealUpdateManyWithoutHyper_profileNestedInput>,
    false
  >("hyper_mealUpdateManyWithoutHyper_profileNestedInput")
  .implement({
    fields: hyper_mealUpdateManyWithoutHyper_profileNestedInputFields,
  });

export const usersUpdateOneRequiredWithoutHyper_profileNestedInputFields = (
  t: any,
) => ({
  create: t.field({
    required: false,
    type: usersCreateWithoutHyper_profileInput,
  }),
  connectOrCreate: t.field({
    required: false,
    type: usersCreateOrConnectWithoutHyper_profileInput,
  }),
  upsert: t.field({
    required: false,
    type: usersUpsertWithoutHyper_profileInput,
  }),
  connect: t.field({ required: false, type: usersWhereUniqueInput }),
  update: t.field({
    required: false,
    type: usersUpdateToOneWithWhereWithoutHyper_profileInput,
  }),
});
export const usersUpdateOneRequiredWithoutHyper_profileNestedInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.usersUpdateOneRequiredWithoutHyper_profileNestedInput>,
    false
  >("usersUpdateOneRequiredWithoutHyper_profileNestedInput")
  .implement({
    fields: usersUpdateOneRequiredWithoutHyper_profileNestedInputFields,
  });

export const hyper_reportUpdateManyWithoutHyper_profileNestedInputFields = (
  t: any,
) => ({
  create: t.field({
    required: false,
    type: [hyper_reportCreateWithoutHyper_profileInput],
  }),
  connectOrCreate: t.field({
    required: false,
    type: [hyper_reportCreateOrConnectWithoutHyper_profileInput],
  }),
  upsert: t.field({
    required: false,
    type: [hyper_reportUpsertWithWhereUniqueWithoutHyper_profileInput],
  }),
  createMany: t.field({
    required: false,
    type: hyper_reportCreateManyHyper_profileInputEnvelope,
  }),
  set: t.field({ required: false, type: [hyper_reportWhereUniqueInput] }),
  disconnect: t.field({
    required: false,
    type: [hyper_reportWhereUniqueInput],
  }),
  delete: t.field({ required: false, type: [hyper_reportWhereUniqueInput] }),
  connect: t.field({ required: false, type: [hyper_reportWhereUniqueInput] }),
  update: t.field({
    required: false,
    type: [hyper_reportUpdateWithWhereUniqueWithoutHyper_profileInput],
  }),
  updateMany: t.field({
    required: false,
    type: [hyper_reportUpdateManyWithWhereWithoutHyper_profileInput],
  }),
  deleteMany: t.field({
    required: false,
    type: [hyper_reportScalarWhereInput],
  }),
});
export const hyper_reportUpdateManyWithoutHyper_profileNestedInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.hyper_reportUpdateManyWithoutHyper_profileNestedInput>,
    false
  >("hyper_reportUpdateManyWithoutHyper_profileNestedInput")
  .implement({
    fields: hyper_reportUpdateManyWithoutHyper_profileNestedInputFields,
  });

export const hyper_profileCreateNestedOneWithoutHyper_reportInputFields = (
  t: any,
) => ({
  create: t.field({
    required: false,
    type: hyper_profileCreateWithoutHyper_reportInput,
  }),
  connectOrCreate: t.field({
    required: false,
    type: hyper_profileCreateOrConnectWithoutHyper_reportInput,
  }),
  connect: t.field({ required: false, type: hyper_profileWhereUniqueInput }),
});
export const hyper_profileCreateNestedOneWithoutHyper_reportInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.hyper_profileCreateNestedOneWithoutHyper_reportInput>,
    false
  >("hyper_profileCreateNestedOneWithoutHyper_reportInput")
  .implement({
    fields: hyper_profileCreateNestedOneWithoutHyper_reportInputFields,
  });

export const hyper_profileUpdateOneRequiredWithoutHyper_reportNestedInputFields =
  (t: any) => ({
    create: t.field({
      required: false,
      type: hyper_profileCreateWithoutHyper_reportInput,
    }),
    connectOrCreate: t.field({
      required: false,
      type: hyper_profileCreateOrConnectWithoutHyper_reportInput,
    }),
    upsert: t.field({
      required: false,
      type: hyper_profileUpsertWithoutHyper_reportInput,
    }),
    connect: t.field({ required: false, type: hyper_profileWhereUniqueInput }),
    update: t.field({
      required: false,
      type: hyper_profileUpdateToOneWithWhereWithoutHyper_reportInput,
    }),
  });
export const hyper_profileUpdateOneRequiredWithoutHyper_reportNestedInput =
  builder
    .inputRef<
      PrismaUpdateOperationsInputFilter<Prisma.hyper_profileUpdateOneRequiredWithoutHyper_reportNestedInput>,
      false
    >("hyper_profileUpdateOneRequiredWithoutHyper_reportNestedInput")
    .implement({
      fields:
        hyper_profileUpdateOneRequiredWithoutHyper_reportNestedInputFields,
    });

export const NestedUuidFilterFields = (t: any) => ({
  equals: t.string({ required: false }),
  in: t.stringList({ required: false }),
  notIn: t.stringList({ required: false }),
  lt: t.string({ required: false }),
  lte: t.string({ required: false }),
  gt: t.string({ required: false }),
  gte: t.string({ required: false }),
  not: t.field({ required: false, type: NestedUuidFilter }),
});
export const NestedUuidFilter = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.NestedUuidFilter>,
    false
  >("NestedUuidFilter")
  .implement({
    fields: NestedUuidFilterFields,
  });

export const NestedUuidWithAggregatesFilterFields = (t: any) => ({
  equals: t.string({ required: false }),
  in: t.stringList({ required: false }),
  notIn: t.stringList({ required: false }),
  lt: t.string({ required: false }),
  lte: t.string({ required: false }),
  gt: t.string({ required: false }),
  gte: t.string({ required: false }),
  not: t.field({ required: false, type: NestedUuidWithAggregatesFilter }),
  _count: t.field({ required: false, type: NestedIntFilter }),
  _min: t.field({ required: false, type: NestedStringFilter }),
  _max: t.field({ required: false, type: NestedStringFilter }),
});
export const NestedUuidWithAggregatesFilter = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.NestedUuidWithAggregatesFilter>,
    false
  >("NestedUuidWithAggregatesFilter")
  .implement({
    fields: NestedUuidWithAggregatesFilterFields,
  });

export const NestedIntFilterFields = (t: any) => ({
  equals: t.int({ required: false }),
  in: t.intList({ required: false }),
  notIn: t.intList({ required: false }),
  lt: t.int({ required: false }),
  lte: t.int({ required: false }),
  gt: t.int({ required: false }),
  gte: t.int({ required: false }),
  not: t.field({ required: false, type: NestedIntFilter }),
});
export const NestedIntFilter = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.NestedIntFilter>,
    false
  >("NestedIntFilter")
  .implement({
    fields: NestedIntFilterFields,
  });

export const NestedStringFilterFields = (t: any) => ({
  equals: t.string({ required: false }),
  in: t.stringList({ required: false }),
  notIn: t.stringList({ required: false }),
  lt: t.string({ required: false }),
  lte: t.string({ required: false }),
  gt: t.string({ required: false }),
  gte: t.string({ required: false }),
  contains: t.string({ required: false }),
  startsWith: t.string({ required: false }),
  endsWith: t.string({ required: false }),
  not: t.field({ required: false, type: NestedStringFilter }),
});
export const NestedStringFilter = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.NestedStringFilter>,
    false
  >("NestedStringFilter")
  .implement({
    fields: NestedStringFilterFields,
  });

export const NestedDateTimeFilterFields = (t: any) => ({
  equals: t.field({ required: false, type: DateTime }),
  in: t.field({ required: false, type: [DateTime] }),
  notIn: t.field({ required: false, type: [DateTime] }),
  lt: t.field({ required: false, type: DateTime }),
  lte: t.field({ required: false, type: DateTime }),
  gt: t.field({ required: false, type: DateTime }),
  gte: t.field({ required: false, type: DateTime }),
  not: t.field({ required: false, type: NestedDateTimeFilter }),
});
export const NestedDateTimeFilter = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.NestedDateTimeFilter>,
    false
  >("NestedDateTimeFilter")
  .implement({
    fields: NestedDateTimeFilterFields,
  });

export const NestedDateTimeNullableFilterFields = (t: any) => ({
  equals: t.field({ required: false, type: DateTime }),
  in: t.field({ required: false, type: [DateTime] }),
  notIn: t.field({ required: false, type: [DateTime] }),
  lt: t.field({ required: false, type: DateTime }),
  lte: t.field({ required: false, type: DateTime }),
  gt: t.field({ required: false, type: DateTime }),
  gte: t.field({ required: false, type: DateTime }),
  not: t.field({ required: false, type: NestedDateTimeNullableFilter }),
});
export const NestedDateTimeNullableFilter = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.NestedDateTimeNullableFilter>,
    false
  >("NestedDateTimeNullableFilter")
  .implement({
    fields: NestedDateTimeNullableFilterFields,
  });

export const NestedDateTimeWithAggregatesFilterFields = (t: any) => ({
  equals: t.field({ required: false, type: DateTime }),
  in: t.field({ required: false, type: [DateTime] }),
  notIn: t.field({ required: false, type: [DateTime] }),
  lt: t.field({ required: false, type: DateTime }),
  lte: t.field({ required: false, type: DateTime }),
  gt: t.field({ required: false, type: DateTime }),
  gte: t.field({ required: false, type: DateTime }),
  not: t.field({ required: false, type: NestedDateTimeWithAggregatesFilter }),
  _count: t.field({ required: false, type: NestedIntFilter }),
  _min: t.field({ required: false, type: NestedDateTimeFilter }),
  _max: t.field({ required: false, type: NestedDateTimeFilter }),
});
export const NestedDateTimeWithAggregatesFilter = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.NestedDateTimeWithAggregatesFilter>,
    false
  >("NestedDateTimeWithAggregatesFilter")
  .implement({
    fields: NestedDateTimeWithAggregatesFilterFields,
  });

export const NestedDateTimeNullableWithAggregatesFilterFields = (t: any) => ({
  equals: t.field({ required: false, type: DateTime }),
  in: t.field({ required: false, type: [DateTime] }),
  notIn: t.field({ required: false, type: [DateTime] }),
  lt: t.field({ required: false, type: DateTime }),
  lte: t.field({ required: false, type: DateTime }),
  gt: t.field({ required: false, type: DateTime }),
  gte: t.field({ required: false, type: DateTime }),
  not: t.field({
    required: false,
    type: NestedDateTimeNullableWithAggregatesFilter,
  }),
  _count: t.field({ required: false, type: NestedIntNullableFilter }),
  _min: t.field({ required: false, type: NestedDateTimeNullableFilter }),
  _max: t.field({ required: false, type: NestedDateTimeNullableFilter }),
});
export const NestedDateTimeNullableWithAggregatesFilter = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.NestedDateTimeNullableWithAggregatesFilter>,
    false
  >("NestedDateTimeNullableWithAggregatesFilter")
  .implement({
    fields: NestedDateTimeNullableWithAggregatesFilterFields,
  });

export const NestedIntNullableFilterFields = (t: any) => ({
  equals: t.int({ required: false }),
  in: t.intList({ required: false }),
  notIn: t.intList({ required: false }),
  lt: t.int({ required: false }),
  lte: t.int({ required: false }),
  gt: t.int({ required: false }),
  gte: t.int({ required: false }),
  not: t.field({ required: false, type: NestedIntNullableFilter }),
});
export const NestedIntNullableFilter = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.NestedIntNullableFilter>,
    false
  >("NestedIntNullableFilter")
  .implement({
    fields: NestedIntNullableFilterFields,
  });

export const NestedStringWithAggregatesFilterFields = (t: any) => ({
  equals: t.string({ required: false }),
  in: t.stringList({ required: false }),
  notIn: t.stringList({ required: false }),
  lt: t.string({ required: false }),
  lte: t.string({ required: false }),
  gt: t.string({ required: false }),
  gte: t.string({ required: false }),
  contains: t.string({ required: false }),
  startsWith: t.string({ required: false }),
  endsWith: t.string({ required: false }),
  not: t.field({ required: false, type: NestedStringWithAggregatesFilter }),
  _count: t.field({ required: false, type: NestedIntFilter }),
  _min: t.field({ required: false, type: NestedStringFilter }),
  _max: t.field({ required: false, type: NestedStringFilter }),
});
export const NestedStringWithAggregatesFilter = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.NestedStringWithAggregatesFilter>,
    false
  >("NestedStringWithAggregatesFilter")
  .implement({
    fields: NestedStringWithAggregatesFilterFields,
  });

export const NestedStringNullableFilterFields = (t: any) => ({
  equals: t.string({ required: false }),
  in: t.stringList({ required: false }),
  notIn: t.stringList({ required: false }),
  lt: t.string({ required: false }),
  lte: t.string({ required: false }),
  gt: t.string({ required: false }),
  gte: t.string({ required: false }),
  contains: t.string({ required: false }),
  startsWith: t.string({ required: false }),
  endsWith: t.string({ required: false }),
  not: t.field({ required: false, type: NestedStringNullableFilter }),
});
export const NestedStringNullableFilter = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.NestedStringNullableFilter>,
    false
  >("NestedStringNullableFilter")
  .implement({
    fields: NestedStringNullableFilterFields,
  });

export const NestedFloatNullableFilterFields = (t: any) => ({
  equals: t.float({ required: false }),
  in: t.floatList({ required: false }),
  notIn: t.floatList({ required: false }),
  lt: t.float({ required: false }),
  lte: t.float({ required: false }),
  gt: t.float({ required: false }),
  gte: t.float({ required: false }),
  not: t.field({ required: false, type: NestedFloatNullableFilter }),
});
export const NestedFloatNullableFilter = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.NestedFloatNullableFilter>,
    false
  >("NestedFloatNullableFilter")
  .implement({
    fields: NestedFloatNullableFilterFields,
  });

export const NestedIntNullableWithAggregatesFilterFields = (t: any) => ({
  equals: t.int({ required: false }),
  in: t.intList({ required: false }),
  notIn: t.intList({ required: false }),
  lt: t.int({ required: false }),
  lte: t.int({ required: false }),
  gt: t.int({ required: false }),
  gte: t.int({ required: false }),
  not: t.field({
    required: false,
    type: NestedIntNullableWithAggregatesFilter,
  }),
  _count: t.field({ required: false, type: NestedIntNullableFilter }),
  _avg: t.field({ required: false, type: NestedFloatNullableFilter }),
  _sum: t.field({ required: false, type: NestedIntNullableFilter }),
  _min: t.field({ required: false, type: NestedIntNullableFilter }),
  _max: t.field({ required: false, type: NestedIntNullableFilter }),
});
export const NestedIntNullableWithAggregatesFilter = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.NestedIntNullableWithAggregatesFilter>,
    false
  >("NestedIntNullableWithAggregatesFilter")
  .implement({
    fields: NestedIntNullableWithAggregatesFilterFields,
  });

export const NestedStringNullableWithAggregatesFilterFields = (t: any) => ({
  equals: t.string({ required: false }),
  in: t.stringList({ required: false }),
  notIn: t.stringList({ required: false }),
  lt: t.string({ required: false }),
  lte: t.string({ required: false }),
  gt: t.string({ required: false }),
  gte: t.string({ required: false }),
  contains: t.string({ required: false }),
  startsWith: t.string({ required: false }),
  endsWith: t.string({ required: false }),
  not: t.field({
    required: false,
    type: NestedStringNullableWithAggregatesFilter,
  }),
  _count: t.field({ required: false, type: NestedIntNullableFilter }),
  _min: t.field({ required: false, type: NestedStringNullableFilter }),
  _max: t.field({ required: false, type: NestedStringNullableFilter }),
});
export const NestedStringNullableWithAggregatesFilter = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.NestedStringNullableWithAggregatesFilter>,
    false
  >("NestedStringNullableWithAggregatesFilter")
  .implement({
    fields: NestedStringNullableWithAggregatesFilterFields,
  });

export const NestedFloatNullableWithAggregatesFilterFields = (t: any) => ({
  equals: t.float({ required: false }),
  in: t.floatList({ required: false }),
  notIn: t.floatList({ required: false }),
  lt: t.float({ required: false }),
  lte: t.float({ required: false }),
  gt: t.float({ required: false }),
  gte: t.float({ required: false }),
  not: t.field({
    required: false,
    type: NestedFloatNullableWithAggregatesFilter,
  }),
  _count: t.field({ required: false, type: NestedIntNullableFilter }),
  _avg: t.field({ required: false, type: NestedFloatNullableFilter }),
  _sum: t.field({ required: false, type: NestedFloatNullableFilter }),
  _min: t.field({ required: false, type: NestedFloatNullableFilter }),
  _max: t.field({ required: false, type: NestedFloatNullableFilter }),
});
export const NestedFloatNullableWithAggregatesFilter = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.NestedFloatNullableWithAggregatesFilter>,
    false
  >("NestedFloatNullableWithAggregatesFilter")
  .implement({
    fields: NestedFloatNullableWithAggregatesFilterFields,
  });

export const NestedIntWithAggregatesFilterFields = (t: any) => ({
  equals: t.int({ required: false }),
  in: t.intList({ required: false }),
  notIn: t.intList({ required: false }),
  lt: t.int({ required: false }),
  lte: t.int({ required: false }),
  gt: t.int({ required: false }),
  gte: t.int({ required: false }),
  not: t.field({ required: false, type: NestedIntWithAggregatesFilter }),
  _count: t.field({ required: false, type: NestedIntFilter }),
  _avg: t.field({ required: false, type: NestedFloatFilter }),
  _sum: t.field({ required: false, type: NestedIntFilter }),
  _min: t.field({ required: false, type: NestedIntFilter }),
  _max: t.field({ required: false, type: NestedIntFilter }),
});
export const NestedIntWithAggregatesFilter = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.NestedIntWithAggregatesFilter>,
    false
  >("NestedIntWithAggregatesFilter")
  .implement({
    fields: NestedIntWithAggregatesFilterFields,
  });

export const NestedFloatFilterFields = (t: any) => ({
  equals: t.float({ required: false }),
  in: t.floatList({ required: false }),
  notIn: t.floatList({ required: false }),
  lt: t.float({ required: false }),
  lte: t.float({ required: false }),
  gt: t.float({ required: false }),
  gte: t.float({ required: false }),
  not: t.field({ required: false, type: NestedFloatFilter }),
});
export const NestedFloatFilter = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.NestedFloatFilter>,
    false
  >("NestedFloatFilter")
  .implement({
    fields: NestedFloatFilterFields,
  });

export const NestedDecimalNullableFilterFields = (t: any) => ({
  equals: t.field({ required: false, type: Decimal }),
  in: t.field({ required: false, type: [Decimal] }),
  notIn: t.field({ required: false, type: [Decimal] }),
  lt: t.field({ required: false, type: Decimal }),
  lte: t.field({ required: false, type: Decimal }),
  gt: t.field({ required: false, type: Decimal }),
  gte: t.field({ required: false, type: Decimal }),
  not: t.field({ required: false, type: NestedDecimalNullableFilter }),
});
export const NestedDecimalNullableFilter = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.NestedDecimalNullableFilter>,
    false
  >("NestedDecimalNullableFilter")
  .implement({
    fields: NestedDecimalNullableFilterFields,
  });

export const NestedDecimalNullableWithAggregatesFilterFields = (t: any) => ({
  equals: t.field({ required: false, type: Decimal }),
  in: t.field({ required: false, type: [Decimal] }),
  notIn: t.field({ required: false, type: [Decimal] }),
  lt: t.field({ required: false, type: Decimal }),
  lte: t.field({ required: false, type: Decimal }),
  gt: t.field({ required: false, type: Decimal }),
  gte: t.field({ required: false, type: Decimal }),
  not: t.field({
    required: false,
    type: NestedDecimalNullableWithAggregatesFilter,
  }),
  _count: t.field({ required: false, type: NestedIntNullableFilter }),
  _avg: t.field({ required: false, type: NestedDecimalNullableFilter }),
  _sum: t.field({ required: false, type: NestedDecimalNullableFilter }),
  _min: t.field({ required: false, type: NestedDecimalNullableFilter }),
  _max: t.field({ required: false, type: NestedDecimalNullableFilter }),
});
export const NestedDecimalNullableWithAggregatesFilter = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.NestedDecimalNullableWithAggregatesFilter>,
    false
  >("NestedDecimalNullableWithAggregatesFilter")
  .implement({
    fields: NestedDecimalNullableWithAggregatesFilterFields,
  });

export const NestedJsonNullableFilterFields = (t: any) => ({
  equals: t.field({ required: false, type: Json }),
  path: t.stringList({ required: false }),
  string_contains: t.string({ required: false }),
  string_starts_with: t.string({ required: false }),
  string_ends_with: t.string({ required: false }),
  array_contains: t.field({ required: false, type: Json }),
  array_starts_with: t.field({ required: false, type: Json }),
  array_ends_with: t.field({ required: false, type: Json }),
  lt: t.field({ required: false, type: Json }),
  lte: t.field({ required: false, type: Json }),
  gt: t.field({ required: false, type: Json }),
  gte: t.field({ required: false, type: Json }),
  not: t.field({ required: false, type: Json }),
});
export const NestedJsonNullableFilter = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.NestedJsonNullableFilter>,
    false
  >("NestedJsonNullableFilter")
  .implement({
    fields: NestedJsonNullableFilterFields,
  });

export const NestedEnumdiabetes_statusFilterFields = (t: any) => ({
  equals: t.field({ required: false, type: diabetes_status }),
  in: t.field({ required: false, type: [diabetes_status] }),
  notIn: t.field({ required: false, type: [diabetes_status] }),
  not: t.field({ required: false, type: diabetes_status }),
});
export const NestedEnumdiabetes_statusFilter = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.NestedEnumdiabetes_statusFilter>,
    false
  >("NestedEnumdiabetes_statusFilter")
  .implement({
    fields: NestedEnumdiabetes_statusFilterFields,
  });

export const NestedEnumglucose_range_typeFilterFields = (t: any) => ({
  equals: t.field({ required: false, type: glucose_range_type }),
  in: t.field({ required: false, type: [glucose_range_type] }),
  notIn: t.field({ required: false, type: [glucose_range_type] }),
  not: t.field({ required: false, type: glucose_range_type }),
});
export const NestedEnumglucose_range_typeFilter = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.NestedEnumglucose_range_typeFilter>,
    false
  >("NestedEnumglucose_range_typeFilter")
  .implement({
    fields: NestedEnumglucose_range_typeFilterFields,
  });

export const NestedEnumdiabetes_statusWithAggregatesFilterFields = (
  t: any,
) => ({
  equals: t.field({ required: false, type: diabetes_status }),
  in: t.field({ required: false, type: [diabetes_status] }),
  notIn: t.field({ required: false, type: [diabetes_status] }),
  not: t.field({ required: false, type: diabetes_status }),
  _count: t.field({ required: false, type: NestedIntFilter }),
  _min: t.field({ required: false, type: NestedEnumdiabetes_statusFilter }),
  _max: t.field({ required: false, type: NestedEnumdiabetes_statusFilter }),
});
export const NestedEnumdiabetes_statusWithAggregatesFilter = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.NestedEnumdiabetes_statusWithAggregatesFilter>,
    false
  >("NestedEnumdiabetes_statusWithAggregatesFilter")
  .implement({
    fields: NestedEnumdiabetes_statusWithAggregatesFilterFields,
  });

export const NestedEnumglucose_range_typeWithAggregatesFilterFields = (
  t: any,
) => ({
  equals: t.field({ required: false, type: glucose_range_type }),
  in: t.field({ required: false, type: [glucose_range_type] }),
  notIn: t.field({ required: false, type: [glucose_range_type] }),
  not: t.field({ required: false, type: glucose_range_type }),
  _count: t.field({ required: false, type: NestedIntFilter }),
  _min: t.field({ required: false, type: NestedEnumglucose_range_typeFilter }),
  _max: t.field({ required: false, type: NestedEnumglucose_range_typeFilter }),
});
export const NestedEnumglucose_range_typeWithAggregatesFilter = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.NestedEnumglucose_range_typeWithAggregatesFilter>,
    false
  >("NestedEnumglucose_range_typeWithAggregatesFilter")
  .implement({
    fields: NestedEnumglucose_range_typeWithAggregatesFilterFields,
  });

export const hyper_profileCreateWithoutUsersInputFields = (t: any) => ({
  name: t.string({ required: true }),
  image: t.string({ required: false }),
  email: t.string({ required: false }),
  last_synced_time: t.field({ required: false, type: DateTime }),
  diabetes_status: t.field({ required: false, type: diabetes_status }),
  glucose_range_type: t.field({ required: false, type: glucose_range_type }),
  hyper_activity: t.field({
    required: false,
    type: hyper_activityCreateNestedManyWithoutHyper_profileInput,
  }),
  hyper_cgm_data: t.field({
    required: false,
    type: hyper_cgm_dataCreateNestedManyWithoutHyper_profileInput,
  }),
  hyper_daily_recap: t.field({
    required: false,
    type: hyper_daily_recapCreateNestedManyWithoutHyper_profileInput,
  }),
  hyper_meal: t.field({
    required: false,
    type: hyper_mealCreateNestedManyWithoutHyper_profileInput,
  }),
  hyper_report: t.field({
    required: false,
    type: hyper_reportCreateNestedManyWithoutHyper_profileInput,
  }),
});
export const hyper_profileCreateWithoutUsersInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.hyper_profileCreateWithoutUsersInput>,
    false
  >("hyper_profileCreateWithoutUsersInput")
  .implement({
    fields: hyper_profileCreateWithoutUsersInputFields,
  });

export const hyper_profileCreateOrConnectWithoutUsersInputFields = (
  t: any,
) => ({
  where: t.field({ required: true, type: hyper_profileWhereUniqueInput }),
  create: t.field({
    required: true,
    type: hyper_profileCreateWithoutUsersInput,
  }),
});
export const hyper_profileCreateOrConnectWithoutUsersInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.hyper_profileCreateOrConnectWithoutUsersInput>,
    false
  >("hyper_profileCreateOrConnectWithoutUsersInput")
  .implement({
    fields: hyper_profileCreateOrConnectWithoutUsersInputFields,
  });

export const hyper_profileUpsertWithoutUsersInputFields = (t: any) => ({
  update: t.field({
    required: true,
    type: hyper_profileUpdateWithoutUsersInput,
  }),
  create: t.field({
    required: true,
    type: hyper_profileCreateWithoutUsersInput,
  }),
  where: t.field({ required: false, type: hyper_profileWhereInput }),
});
export const hyper_profileUpsertWithoutUsersInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.hyper_profileUpsertWithoutUsersInput>,
    false
  >("hyper_profileUpsertWithoutUsersInput")
  .implement({
    fields: hyper_profileUpsertWithoutUsersInputFields,
  });

export const hyper_profileUpdateToOneWithWhereWithoutUsersInputFields = (
  t: any,
) => ({
  where: t.field({ required: false, type: hyper_profileWhereInput }),
  data: t.field({ required: true, type: hyper_profileUpdateWithoutUsersInput }),
});
export const hyper_profileUpdateToOneWithWhereWithoutUsersInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.hyper_profileUpdateToOneWithWhereWithoutUsersInput>,
    false
  >("hyper_profileUpdateToOneWithWhereWithoutUsersInput")
  .implement({
    fields: hyper_profileUpdateToOneWithWhereWithoutUsersInputFields,
  });

export const hyper_profileUpdateWithoutUsersInputFields = (t: any) => ({
  name: t.field({ required: false, type: StringFieldUpdateOperationsInput }),
  image: t.field({
    required: false,
    type: NullableStringFieldUpdateOperationsInput,
  }),
  email: t.field({
    required: false,
    type: NullableStringFieldUpdateOperationsInput,
  }),
  last_synced_time: t.field({
    required: false,
    type: NullableDateTimeFieldUpdateOperationsInput,
  }),
  diabetes_status: t.field({
    required: false,
    type: Enumdiabetes_statusFieldUpdateOperationsInput,
  }),
  glucose_range_type: t.field({
    required: false,
    type: Enumglucose_range_typeFieldUpdateOperationsInput,
  }),
  hyper_activity: t.field({
    required: false,
    type: hyper_activityUpdateManyWithoutHyper_profileNestedInput,
  }),
  hyper_cgm_data: t.field({
    required: false,
    type: hyper_cgm_dataUpdateManyWithoutHyper_profileNestedInput,
  }),
  hyper_daily_recap: t.field({
    required: false,
    type: hyper_daily_recapUpdateManyWithoutHyper_profileNestedInput,
  }),
  hyper_meal: t.field({
    required: false,
    type: hyper_mealUpdateManyWithoutHyper_profileNestedInput,
  }),
  hyper_report: t.field({
    required: false,
    type: hyper_reportUpdateManyWithoutHyper_profileNestedInput,
  }),
});
export const hyper_profileUpdateWithoutUsersInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.hyper_profileUpdateWithoutUsersInput>,
    false
  >("hyper_profileUpdateWithoutUsersInput")
  .implement({
    fields: hyper_profileUpdateWithoutUsersInputFields,
  });

export const hyper_activity_typeCreateWithoutHyper_activityInputFields = (
  t: any,
) => ({
  id: t.string({ required: false }),
  name: t.string({ required: true }),
});
export const hyper_activity_typeCreateWithoutHyper_activityInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.hyper_activity_typeCreateWithoutHyper_activityInput>,
    false
  >("hyper_activity_typeCreateWithoutHyper_activityInput")
  .implement({
    fields: hyper_activity_typeCreateWithoutHyper_activityInputFields,
  });

export const hyper_activity_typeCreateOrConnectWithoutHyper_activityInputFields =
  (t: any) => ({
    where: t.field({
      required: true,
      type: hyper_activity_typeWhereUniqueInput,
    }),
    create: t.field({
      required: true,
      type: hyper_activity_typeCreateWithoutHyper_activityInput,
    }),
  });
export const hyper_activity_typeCreateOrConnectWithoutHyper_activityInput =
  builder
    .inputRef<
      PrismaUpdateOperationsInputFilter<Prisma.hyper_activity_typeCreateOrConnectWithoutHyper_activityInput>,
      false
    >("hyper_activity_typeCreateOrConnectWithoutHyper_activityInput")
    .implement({
      fields:
        hyper_activity_typeCreateOrConnectWithoutHyper_activityInputFields,
    });

export const hyper_activity_typeUpsertWithoutHyper_activityInputFields = (
  t: any,
) => ({
  update: t.field({
    required: true,
    type: hyper_activity_typeUpdateWithoutHyper_activityInput,
  }),
  create: t.field({
    required: true,
    type: hyper_activity_typeCreateWithoutHyper_activityInput,
  }),
  where: t.field({ required: false, type: hyper_activity_typeWhereInput }),
});
export const hyper_activity_typeUpsertWithoutHyper_activityInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.hyper_activity_typeUpsertWithoutHyper_activityInput>,
    false
  >("hyper_activity_typeUpsertWithoutHyper_activityInput")
  .implement({
    fields: hyper_activity_typeUpsertWithoutHyper_activityInputFields,
  });

export const hyper_activity_typeUpdateToOneWithWhereWithoutHyper_activityInputFields =
  (t: any) => ({
    where: t.field({ required: false, type: hyper_activity_typeWhereInput }),
    data: t.field({
      required: true,
      type: hyper_activity_typeUpdateWithoutHyper_activityInput,
    }),
  });
export const hyper_activity_typeUpdateToOneWithWhereWithoutHyper_activityInput =
  builder
    .inputRef<
      PrismaUpdateOperationsInputFilter<Prisma.hyper_activity_typeUpdateToOneWithWhereWithoutHyper_activityInput>,
      false
    >("hyper_activity_typeUpdateToOneWithWhereWithoutHyper_activityInput")
    .implement({
      fields:
        hyper_activity_typeUpdateToOneWithWhereWithoutHyper_activityInputFields,
    });

export const hyper_activity_typeUpdateWithoutHyper_activityInputFields = (
  t: any,
) => ({
  id: t.field({ required: false, type: StringFieldUpdateOperationsInput }),
  name: t.field({ required: false, type: StringFieldUpdateOperationsInput }),
});
export const hyper_activity_typeUpdateWithoutHyper_activityInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.hyper_activity_typeUpdateWithoutHyper_activityInput>,
    false
  >("hyper_activity_typeUpdateWithoutHyper_activityInput")
  .implement({
    fields: hyper_activity_typeUpdateWithoutHyper_activityInputFields,
  });

export const hyper_profileCreateWithoutHyper_activityInputFields = (
  t: any,
) => ({
  name: t.string({ required: true }),
  image: t.string({ required: false }),
  email: t.string({ required: false }),
  last_synced_time: t.field({ required: false, type: DateTime }),
  diabetes_status: t.field({ required: false, type: diabetes_status }),
  glucose_range_type: t.field({ required: false, type: glucose_range_type }),
  hyper_cgm_data: t.field({
    required: false,
    type: hyper_cgm_dataCreateNestedManyWithoutHyper_profileInput,
  }),
  hyper_daily_recap: t.field({
    required: false,
    type: hyper_daily_recapCreateNestedManyWithoutHyper_profileInput,
  }),
  hyper_meal: t.field({
    required: false,
    type: hyper_mealCreateNestedManyWithoutHyper_profileInput,
  }),
  users: t.field({
    required: true,
    type: usersCreateNestedOneWithoutHyper_profileInput,
  }),
  hyper_report: t.field({
    required: false,
    type: hyper_reportCreateNestedManyWithoutHyper_profileInput,
  }),
});
export const hyper_profileCreateWithoutHyper_activityInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.hyper_profileCreateWithoutHyper_activityInput>,
    false
  >("hyper_profileCreateWithoutHyper_activityInput")
  .implement({
    fields: hyper_profileCreateWithoutHyper_activityInputFields,
  });

export const hyper_profileCreateOrConnectWithoutHyper_activityInputFields = (
  t: any,
) => ({
  where: t.field({ required: true, type: hyper_profileWhereUniqueInput }),
  create: t.field({
    required: true,
    type: hyper_profileCreateWithoutHyper_activityInput,
  }),
});
export const hyper_profileCreateOrConnectWithoutHyper_activityInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.hyper_profileCreateOrConnectWithoutHyper_activityInput>,
    false
  >("hyper_profileCreateOrConnectWithoutHyper_activityInput")
  .implement({
    fields: hyper_profileCreateOrConnectWithoutHyper_activityInputFields,
  });

export const hyper_profileUpsertWithoutHyper_activityInputFields = (
  t: any,
) => ({
  update: t.field({
    required: true,
    type: hyper_profileUpdateWithoutHyper_activityInput,
  }),
  create: t.field({
    required: true,
    type: hyper_profileCreateWithoutHyper_activityInput,
  }),
  where: t.field({ required: false, type: hyper_profileWhereInput }),
});
export const hyper_profileUpsertWithoutHyper_activityInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.hyper_profileUpsertWithoutHyper_activityInput>,
    false
  >("hyper_profileUpsertWithoutHyper_activityInput")
  .implement({
    fields: hyper_profileUpsertWithoutHyper_activityInputFields,
  });

export const hyper_profileUpdateToOneWithWhereWithoutHyper_activityInputFields =
  (t: any) => ({
    where: t.field({ required: false, type: hyper_profileWhereInput }),
    data: t.field({
      required: true,
      type: hyper_profileUpdateWithoutHyper_activityInput,
    }),
  });
export const hyper_profileUpdateToOneWithWhereWithoutHyper_activityInput =
  builder
    .inputRef<
      PrismaUpdateOperationsInputFilter<Prisma.hyper_profileUpdateToOneWithWhereWithoutHyper_activityInput>,
      false
    >("hyper_profileUpdateToOneWithWhereWithoutHyper_activityInput")
    .implement({
      fields: hyper_profileUpdateToOneWithWhereWithoutHyper_activityInputFields,
    });

export const hyper_profileUpdateWithoutHyper_activityInputFields = (
  t: any,
) => ({
  name: t.field({ required: false, type: StringFieldUpdateOperationsInput }),
  image: t.field({
    required: false,
    type: NullableStringFieldUpdateOperationsInput,
  }),
  email: t.field({
    required: false,
    type: NullableStringFieldUpdateOperationsInput,
  }),
  last_synced_time: t.field({
    required: false,
    type: NullableDateTimeFieldUpdateOperationsInput,
  }),
  diabetes_status: t.field({
    required: false,
    type: Enumdiabetes_statusFieldUpdateOperationsInput,
  }),
  glucose_range_type: t.field({
    required: false,
    type: Enumglucose_range_typeFieldUpdateOperationsInput,
  }),
  hyper_cgm_data: t.field({
    required: false,
    type: hyper_cgm_dataUpdateManyWithoutHyper_profileNestedInput,
  }),
  hyper_daily_recap: t.field({
    required: false,
    type: hyper_daily_recapUpdateManyWithoutHyper_profileNestedInput,
  }),
  hyper_meal: t.field({
    required: false,
    type: hyper_mealUpdateManyWithoutHyper_profileNestedInput,
  }),
  users: t.field({
    required: false,
    type: usersUpdateOneRequiredWithoutHyper_profileNestedInput,
  }),
  hyper_report: t.field({
    required: false,
    type: hyper_reportUpdateManyWithoutHyper_profileNestedInput,
  }),
});
export const hyper_profileUpdateWithoutHyper_activityInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.hyper_profileUpdateWithoutHyper_activityInput>,
    false
  >("hyper_profileUpdateWithoutHyper_activityInput")
  .implement({
    fields: hyper_profileUpdateWithoutHyper_activityInputFields,
  });

export const hyper_activityUpdateWithWhereUniqueWithoutHyper_activity_typeInputFields =
  (t: any) => ({
    where: t.field({ required: true, type: hyper_activityWhereUniqueInput }),
    data: t.field({
      required: true,
      type: hyper_activityUpdateWithoutHyper_activity_typeInput,
    }),
  });
export const hyper_activityUpdateWithWhereUniqueWithoutHyper_activity_typeInput =
  builder
    .inputRef<
      PrismaUpdateOperationsInputFilter<Prisma.hyper_activityUpdateWithWhereUniqueWithoutHyper_activity_typeInput>,
      false
    >("hyper_activityUpdateWithWhereUniqueWithoutHyper_activity_typeInput")
    .implement({
      fields:
        hyper_activityUpdateWithWhereUniqueWithoutHyper_activity_typeInputFields,
    });

export const hyper_activityUpdateManyWithWhereWithoutHyper_activity_typeInputFields =
  (t: any) => ({
    where: t.field({ required: true, type: hyper_activityScalarWhereInput }),
    data: t.field({
      required: true,
      type: hyper_activityUpdateManyMutationInput,
    }),
  });
export const hyper_activityUpdateManyWithWhereWithoutHyper_activity_typeInput =
  builder
    .inputRef<
      PrismaUpdateOperationsInputFilter<Prisma.hyper_activityUpdateManyWithWhereWithoutHyper_activity_typeInput>,
      false
    >("hyper_activityUpdateManyWithWhereWithoutHyper_activity_typeInput")
    .implement({
      fields:
        hyper_activityUpdateManyWithWhereWithoutHyper_activity_typeInputFields,
    });

export const hyper_activityScalarWhereInputFields = (t: any) => ({
  AND: t.field({ required: false, type: [hyper_activityScalarWhereInput] }),
  OR: t.field({ required: false, type: [hyper_activityScalarWhereInput] }),
  NOT: t.field({ required: false, type: [hyper_activityScalarWhereInput] }),
  id: t.field({ required: false, type: UuidFilter }),
  activity_type_id: t.field({ required: false, type: UuidFilter }),
  profile_id: t.field({ required: false, type: UuidFilter }),
  created_at: t.field({ required: false, type: DateTimeFilter }),
  updatedAt: t.field({ required: false, type: DateTimeNullableFilter }),
});
export const hyper_activityScalarWhereInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.hyper_activityScalarWhereInput>,
    false
  >("hyper_activityScalarWhereInput")
  .implement({
    fields: hyper_activityScalarWhereInputFields,
  });

export const hyper_profileCreateWithoutHyper_cgm_dataInputFields = (
  t: any,
) => ({
  name: t.string({ required: true }),
  image: t.string({ required: false }),
  email: t.string({ required: false }),
  last_synced_time: t.field({ required: false, type: DateTime }),
  diabetes_status: t.field({ required: false, type: diabetes_status }),
  glucose_range_type: t.field({ required: false, type: glucose_range_type }),
  hyper_activity: t.field({
    required: false,
    type: hyper_activityCreateNestedManyWithoutHyper_profileInput,
  }),
  hyper_daily_recap: t.field({
    required: false,
    type: hyper_daily_recapCreateNestedManyWithoutHyper_profileInput,
  }),
  hyper_meal: t.field({
    required: false,
    type: hyper_mealCreateNestedManyWithoutHyper_profileInput,
  }),
  users: t.field({
    required: true,
    type: usersCreateNestedOneWithoutHyper_profileInput,
  }),
  hyper_report: t.field({
    required: false,
    type: hyper_reportCreateNestedManyWithoutHyper_profileInput,
  }),
});
export const hyper_profileCreateWithoutHyper_cgm_dataInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.hyper_profileCreateWithoutHyper_cgm_dataInput>,
    false
  >("hyper_profileCreateWithoutHyper_cgm_dataInput")
  .implement({
    fields: hyper_profileCreateWithoutHyper_cgm_dataInputFields,
  });

export const hyper_profileCreateOrConnectWithoutHyper_cgm_dataInputFields = (
  t: any,
) => ({
  where: t.field({ required: true, type: hyper_profileWhereUniqueInput }),
  create: t.field({
    required: true,
    type: hyper_profileCreateWithoutHyper_cgm_dataInput,
  }),
});
export const hyper_profileCreateOrConnectWithoutHyper_cgm_dataInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.hyper_profileCreateOrConnectWithoutHyper_cgm_dataInput>,
    false
  >("hyper_profileCreateOrConnectWithoutHyper_cgm_dataInput")
  .implement({
    fields: hyper_profileCreateOrConnectWithoutHyper_cgm_dataInputFields,
  });

export const hyper_profileUpsertWithoutHyper_cgm_dataInputFields = (
  t: any,
) => ({
  update: t.field({
    required: true,
    type: hyper_profileUpdateWithoutHyper_cgm_dataInput,
  }),
  create: t.field({
    required: true,
    type: hyper_profileCreateWithoutHyper_cgm_dataInput,
  }),
  where: t.field({ required: false, type: hyper_profileWhereInput }),
});
export const hyper_profileUpsertWithoutHyper_cgm_dataInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.hyper_profileUpsertWithoutHyper_cgm_dataInput>,
    false
  >("hyper_profileUpsertWithoutHyper_cgm_dataInput")
  .implement({
    fields: hyper_profileUpsertWithoutHyper_cgm_dataInputFields,
  });

export const hyper_profileUpdateToOneWithWhereWithoutHyper_cgm_dataInputFields =
  (t: any) => ({
    where: t.field({ required: false, type: hyper_profileWhereInput }),
    data: t.field({
      required: true,
      type: hyper_profileUpdateWithoutHyper_cgm_dataInput,
    }),
  });
export const hyper_profileUpdateToOneWithWhereWithoutHyper_cgm_dataInput =
  builder
    .inputRef<
      PrismaUpdateOperationsInputFilter<Prisma.hyper_profileUpdateToOneWithWhereWithoutHyper_cgm_dataInput>,
      false
    >("hyper_profileUpdateToOneWithWhereWithoutHyper_cgm_dataInput")
    .implement({
      fields: hyper_profileUpdateToOneWithWhereWithoutHyper_cgm_dataInputFields,
    });

export const hyper_profileUpdateWithoutHyper_cgm_dataInputFields = (
  t: any,
) => ({
  name: t.field({ required: false, type: StringFieldUpdateOperationsInput }),
  image: t.field({
    required: false,
    type: NullableStringFieldUpdateOperationsInput,
  }),
  email: t.field({
    required: false,
    type: NullableStringFieldUpdateOperationsInput,
  }),
  last_synced_time: t.field({
    required: false,
    type: NullableDateTimeFieldUpdateOperationsInput,
  }),
  diabetes_status: t.field({
    required: false,
    type: Enumdiabetes_statusFieldUpdateOperationsInput,
  }),
  glucose_range_type: t.field({
    required: false,
    type: Enumglucose_range_typeFieldUpdateOperationsInput,
  }),
  hyper_activity: t.field({
    required: false,
    type: hyper_activityUpdateManyWithoutHyper_profileNestedInput,
  }),
  hyper_daily_recap: t.field({
    required: false,
    type: hyper_daily_recapUpdateManyWithoutHyper_profileNestedInput,
  }),
  hyper_meal: t.field({
    required: false,
    type: hyper_mealUpdateManyWithoutHyper_profileNestedInput,
  }),
  users: t.field({
    required: false,
    type: usersUpdateOneRequiredWithoutHyper_profileNestedInput,
  }),
  hyper_report: t.field({
    required: false,
    type: hyper_reportUpdateManyWithoutHyper_profileNestedInput,
  }),
});
export const hyper_profileUpdateWithoutHyper_cgm_dataInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.hyper_profileUpdateWithoutHyper_cgm_dataInput>,
    false
  >("hyper_profileUpdateWithoutHyper_cgm_dataInput")
  .implement({
    fields: hyper_profileUpdateWithoutHyper_cgm_dataInputFields,
  });

export const hyper_profileCreateWithoutHyper_daily_recapInputFields = (
  t: any,
) => ({
  name: t.string({ required: true }),
  image: t.string({ required: false }),
  email: t.string({ required: false }),
  last_synced_time: t.field({ required: false, type: DateTime }),
  diabetes_status: t.field({ required: false, type: diabetes_status }),
  glucose_range_type: t.field({ required: false, type: glucose_range_type }),
  hyper_activity: t.field({
    required: false,
    type: hyper_activityCreateNestedManyWithoutHyper_profileInput,
  }),
  hyper_cgm_data: t.field({
    required: false,
    type: hyper_cgm_dataCreateNestedManyWithoutHyper_profileInput,
  }),
  hyper_meal: t.field({
    required: false,
    type: hyper_mealCreateNestedManyWithoutHyper_profileInput,
  }),
  users: t.field({
    required: true,
    type: usersCreateNestedOneWithoutHyper_profileInput,
  }),
  hyper_report: t.field({
    required: false,
    type: hyper_reportCreateNestedManyWithoutHyper_profileInput,
  }),
});
export const hyper_profileCreateWithoutHyper_daily_recapInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.hyper_profileCreateWithoutHyper_daily_recapInput>,
    false
  >("hyper_profileCreateWithoutHyper_daily_recapInput")
  .implement({
    fields: hyper_profileCreateWithoutHyper_daily_recapInputFields,
  });

export const hyper_profileCreateOrConnectWithoutHyper_daily_recapInputFields = (
  t: any,
) => ({
  where: t.field({ required: true, type: hyper_profileWhereUniqueInput }),
  create: t.field({
    required: true,
    type: hyper_profileCreateWithoutHyper_daily_recapInput,
  }),
});
export const hyper_profileCreateOrConnectWithoutHyper_daily_recapInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.hyper_profileCreateOrConnectWithoutHyper_daily_recapInput>,
    false
  >("hyper_profileCreateOrConnectWithoutHyper_daily_recapInput")
  .implement({
    fields: hyper_profileCreateOrConnectWithoutHyper_daily_recapInputFields,
  });

export const hyper_profileUpsertWithoutHyper_daily_recapInputFields = (
  t: any,
) => ({
  update: t.field({
    required: true,
    type: hyper_profileUpdateWithoutHyper_daily_recapInput,
  }),
  create: t.field({
    required: true,
    type: hyper_profileCreateWithoutHyper_daily_recapInput,
  }),
  where: t.field({ required: false, type: hyper_profileWhereInput }),
});
export const hyper_profileUpsertWithoutHyper_daily_recapInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.hyper_profileUpsertWithoutHyper_daily_recapInput>,
    false
  >("hyper_profileUpsertWithoutHyper_daily_recapInput")
  .implement({
    fields: hyper_profileUpsertWithoutHyper_daily_recapInputFields,
  });

export const hyper_profileUpdateToOneWithWhereWithoutHyper_daily_recapInputFields =
  (t: any) => ({
    where: t.field({ required: false, type: hyper_profileWhereInput }),
    data: t.field({
      required: true,
      type: hyper_profileUpdateWithoutHyper_daily_recapInput,
    }),
  });
export const hyper_profileUpdateToOneWithWhereWithoutHyper_daily_recapInput =
  builder
    .inputRef<
      PrismaUpdateOperationsInputFilter<Prisma.hyper_profileUpdateToOneWithWhereWithoutHyper_daily_recapInput>,
      false
    >("hyper_profileUpdateToOneWithWhereWithoutHyper_daily_recapInput")
    .implement({
      fields:
        hyper_profileUpdateToOneWithWhereWithoutHyper_daily_recapInputFields,
    });

export const hyper_profileUpdateWithoutHyper_daily_recapInputFields = (
  t: any,
) => ({
  name: t.field({ required: false, type: StringFieldUpdateOperationsInput }),
  image: t.field({
    required: false,
    type: NullableStringFieldUpdateOperationsInput,
  }),
  email: t.field({
    required: false,
    type: NullableStringFieldUpdateOperationsInput,
  }),
  last_synced_time: t.field({
    required: false,
    type: NullableDateTimeFieldUpdateOperationsInput,
  }),
  diabetes_status: t.field({
    required: false,
    type: Enumdiabetes_statusFieldUpdateOperationsInput,
  }),
  glucose_range_type: t.field({
    required: false,
    type: Enumglucose_range_typeFieldUpdateOperationsInput,
  }),
  hyper_activity: t.field({
    required: false,
    type: hyper_activityUpdateManyWithoutHyper_profileNestedInput,
  }),
  hyper_cgm_data: t.field({
    required: false,
    type: hyper_cgm_dataUpdateManyWithoutHyper_profileNestedInput,
  }),
  hyper_meal: t.field({
    required: false,
    type: hyper_mealUpdateManyWithoutHyper_profileNestedInput,
  }),
  users: t.field({
    required: false,
    type: usersUpdateOneRequiredWithoutHyper_profileNestedInput,
  }),
  hyper_report: t.field({
    required: false,
    type: hyper_reportUpdateManyWithoutHyper_profileNestedInput,
  }),
});
export const hyper_profileUpdateWithoutHyper_daily_recapInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.hyper_profileUpdateWithoutHyper_daily_recapInput>,
    false
  >("hyper_profileUpdateWithoutHyper_daily_recapInput")
  .implement({
    fields: hyper_profileUpdateWithoutHyper_daily_recapInputFields,
  });

export const hyper_profileCreateWithoutHyper_mealInputFields = (t: any) => ({
  name: t.string({ required: true }),
  image: t.string({ required: false }),
  email: t.string({ required: false }),
  last_synced_time: t.field({ required: false, type: DateTime }),
  diabetes_status: t.field({ required: false, type: diabetes_status }),
  glucose_range_type: t.field({ required: false, type: glucose_range_type }),
  hyper_activity: t.field({
    required: false,
    type: hyper_activityCreateNestedManyWithoutHyper_profileInput,
  }),
  hyper_cgm_data: t.field({
    required: false,
    type: hyper_cgm_dataCreateNestedManyWithoutHyper_profileInput,
  }),
  hyper_daily_recap: t.field({
    required: false,
    type: hyper_daily_recapCreateNestedManyWithoutHyper_profileInput,
  }),
  users: t.field({
    required: true,
    type: usersCreateNestedOneWithoutHyper_profileInput,
  }),
  hyper_report: t.field({
    required: false,
    type: hyper_reportCreateNestedManyWithoutHyper_profileInput,
  }),
});
export const hyper_profileCreateWithoutHyper_mealInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.hyper_profileCreateWithoutHyper_mealInput>,
    false
  >("hyper_profileCreateWithoutHyper_mealInput")
  .implement({
    fields: hyper_profileCreateWithoutHyper_mealInputFields,
  });

export const hyper_profileCreateOrConnectWithoutHyper_mealInputFields = (
  t: any,
) => ({
  where: t.field({ required: true, type: hyper_profileWhereUniqueInput }),
  create: t.field({
    required: true,
    type: hyper_profileCreateWithoutHyper_mealInput,
  }),
});
export const hyper_profileCreateOrConnectWithoutHyper_mealInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.hyper_profileCreateOrConnectWithoutHyper_mealInput>,
    false
  >("hyper_profileCreateOrConnectWithoutHyper_mealInput")
  .implement({
    fields: hyper_profileCreateOrConnectWithoutHyper_mealInputFields,
  });

export const hyper_profileUpsertWithoutHyper_mealInputFields = (t: any) => ({
  update: t.field({
    required: true,
    type: hyper_profileUpdateWithoutHyper_mealInput,
  }),
  create: t.field({
    required: true,
    type: hyper_profileCreateWithoutHyper_mealInput,
  }),
  where: t.field({ required: false, type: hyper_profileWhereInput }),
});
export const hyper_profileUpsertWithoutHyper_mealInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.hyper_profileUpsertWithoutHyper_mealInput>,
    false
  >("hyper_profileUpsertWithoutHyper_mealInput")
  .implement({
    fields: hyper_profileUpsertWithoutHyper_mealInputFields,
  });

export const hyper_profileUpdateToOneWithWhereWithoutHyper_mealInputFields = (
  t: any,
) => ({
  where: t.field({ required: false, type: hyper_profileWhereInput }),
  data: t.field({
    required: true,
    type: hyper_profileUpdateWithoutHyper_mealInput,
  }),
});
export const hyper_profileUpdateToOneWithWhereWithoutHyper_mealInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.hyper_profileUpdateToOneWithWhereWithoutHyper_mealInput>,
    false
  >("hyper_profileUpdateToOneWithWhereWithoutHyper_mealInput")
  .implement({
    fields: hyper_profileUpdateToOneWithWhereWithoutHyper_mealInputFields,
  });

export const hyper_profileUpdateWithoutHyper_mealInputFields = (t: any) => ({
  name: t.field({ required: false, type: StringFieldUpdateOperationsInput }),
  image: t.field({
    required: false,
    type: NullableStringFieldUpdateOperationsInput,
  }),
  email: t.field({
    required: false,
    type: NullableStringFieldUpdateOperationsInput,
  }),
  last_synced_time: t.field({
    required: false,
    type: NullableDateTimeFieldUpdateOperationsInput,
  }),
  diabetes_status: t.field({
    required: false,
    type: Enumdiabetes_statusFieldUpdateOperationsInput,
  }),
  glucose_range_type: t.field({
    required: false,
    type: Enumglucose_range_typeFieldUpdateOperationsInput,
  }),
  hyper_activity: t.field({
    required: false,
    type: hyper_activityUpdateManyWithoutHyper_profileNestedInput,
  }),
  hyper_cgm_data: t.field({
    required: false,
    type: hyper_cgm_dataUpdateManyWithoutHyper_profileNestedInput,
  }),
  hyper_daily_recap: t.field({
    required: false,
    type: hyper_daily_recapUpdateManyWithoutHyper_profileNestedInput,
  }),
  users: t.field({
    required: false,
    type: usersUpdateOneRequiredWithoutHyper_profileNestedInput,
  }),
  hyper_report: t.field({
    required: false,
    type: hyper_reportUpdateManyWithoutHyper_profileNestedInput,
  }),
});
export const hyper_profileUpdateWithoutHyper_mealInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.hyper_profileUpdateWithoutHyper_mealInput>,
    false
  >("hyper_profileUpdateWithoutHyper_mealInput")
  .implement({
    fields: hyper_profileUpdateWithoutHyper_mealInputFields,
  });

export const hyper_cgm_dataCreateWithoutHyper_profileInputFields = (
  t: any,
) => ({
  id: t.string({ required: false }),
  dexcom_user_id: t.string({ required: true }),
  record_id: t.string({ required: true }),
  system_time: t.field({ required: true, type: DateTime }),
  display_time: t.field({ required: true, type: DateTime }),
  glucose_value: t.int({ required: false }),
  trend: t.string({ required: false }),
  trend_rate: t.float({ required: false }),
  transmitter_id: t.string({ required: false }),
  transmitter_generation: t.string({ required: true }),
  display_device: t.string({ required: true }),
  created_at: t.field({ required: false, type: DateTime }),
  updatedAt: t.field({ required: false, type: DateTime }),
  transmitter_ticks: t.int({ required: true }),
  status: t.string({ required: false }),
  unit: t.string({ required: true }),
  rate_unit: t.string({ required: true }),
});
export const hyper_cgm_dataCreateWithoutHyper_profileInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.hyper_cgm_dataCreateWithoutHyper_profileInput>,
    false
  >("hyper_cgm_dataCreateWithoutHyper_profileInput")
  .implement({
    fields: hyper_cgm_dataCreateWithoutHyper_profileInputFields,
  });

export const hyper_cgm_dataCreateOrConnectWithoutHyper_profileInputFields = (
  t: any,
) => ({
  where: t.field({ required: true, type: hyper_cgm_dataWhereUniqueInput }),
  create: t.field({
    required: true,
    type: hyper_cgm_dataCreateWithoutHyper_profileInput,
  }),
});
export const hyper_cgm_dataCreateOrConnectWithoutHyper_profileInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.hyper_cgm_dataCreateOrConnectWithoutHyper_profileInput>,
    false
  >("hyper_cgm_dataCreateOrConnectWithoutHyper_profileInput")
  .implement({
    fields: hyper_cgm_dataCreateOrConnectWithoutHyper_profileInputFields,
  });

export const hyper_cgm_dataCreateManyHyper_profileInputEnvelopeFields = (
  t: any,
) => ({
  data: t.field({
    required: true,
    type: [hyper_cgm_dataCreateManyHyper_profileInput],
  }),
  skipDuplicates: t.boolean({ required: false }),
});
export const hyper_cgm_dataCreateManyHyper_profileInputEnvelope = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.hyper_cgm_dataCreateManyHyper_profileInputEnvelope>,
    false
  >("hyper_cgm_dataCreateManyHyper_profileInputEnvelope")
  .implement({
    fields: hyper_cgm_dataCreateManyHyper_profileInputEnvelopeFields,
  });

export const hyper_daily_recapCreateWithoutHyper_profileInputFields = (
  t: any,
) => ({
  id: t.string({ required: false }),
  date: t.field({ required: true, type: DateTime }),
  average_glucose: t.int({ required: false }),
  minimum_glucose: t.int({ required: false }),
  maximum_glucose: t.int({ required: false }),
  glucose_variability: t.field({ required: false, type: Decimal }),
  time_in_ranges: t.field({ required: false, type: Json }),
  total_readings: t.int({ required: false }),
  created_at: t.field({ required: false, type: DateTime }),
  updatedAt: t.field({ required: false, type: DateTime }),
  timezone: t.string({ required: true }),
});
export const hyper_daily_recapCreateWithoutHyper_profileInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.hyper_daily_recapCreateWithoutHyper_profileInput>,
    false
  >("hyper_daily_recapCreateWithoutHyper_profileInput")
  .implement({
    fields: hyper_daily_recapCreateWithoutHyper_profileInputFields,
  });

export const hyper_daily_recapCreateOrConnectWithoutHyper_profileInputFields = (
  t: any,
) => ({
  where: t.field({ required: true, type: hyper_daily_recapWhereUniqueInput }),
  create: t.field({
    required: true,
    type: hyper_daily_recapCreateWithoutHyper_profileInput,
  }),
});
export const hyper_daily_recapCreateOrConnectWithoutHyper_profileInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.hyper_daily_recapCreateOrConnectWithoutHyper_profileInput>,
    false
  >("hyper_daily_recapCreateOrConnectWithoutHyper_profileInput")
  .implement({
    fields: hyper_daily_recapCreateOrConnectWithoutHyper_profileInputFields,
  });

export const hyper_daily_recapCreateManyHyper_profileInputEnvelopeFields = (
  t: any,
) => ({
  data: t.field({
    required: true,
    type: [hyper_daily_recapCreateManyHyper_profileInput],
  }),
  skipDuplicates: t.boolean({ required: false }),
});
export const hyper_daily_recapCreateManyHyper_profileInputEnvelope = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.hyper_daily_recapCreateManyHyper_profileInputEnvelope>,
    false
  >("hyper_daily_recapCreateManyHyper_profileInputEnvelope")
  .implement({
    fields: hyper_daily_recapCreateManyHyper_profileInputEnvelopeFields,
  });

export const hyper_mealCreateWithoutHyper_profileInputFields = (t: any) => ({
  id: t.string({ required: false }),
  meal_time: t.field({ required: false, type: DateTime }),
  carbohydrates: t.float({ required: false }),
  dietary_energy: t.float({ required: false }),
  dietary_sugar: t.float({ required: false }),
  fiber: t.float({ required: false }),
  protein: t.float({ required: false }),
  total_fat: t.float({ required: false }),
  created_at: t.field({ required: false, type: DateTime }),
  updatedAt: t.field({ required: false, type: DateTime }),
});
export const hyper_mealCreateWithoutHyper_profileInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.hyper_mealCreateWithoutHyper_profileInput>,
    false
  >("hyper_mealCreateWithoutHyper_profileInput")
  .implement({
    fields: hyper_mealCreateWithoutHyper_profileInputFields,
  });

export const hyper_mealCreateOrConnectWithoutHyper_profileInputFields = (
  t: any,
) => ({
  where: t.field({ required: true, type: hyper_mealWhereUniqueInput }),
  create: t.field({
    required: true,
    type: hyper_mealCreateWithoutHyper_profileInput,
  }),
});
export const hyper_mealCreateOrConnectWithoutHyper_profileInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.hyper_mealCreateOrConnectWithoutHyper_profileInput>,
    false
  >("hyper_mealCreateOrConnectWithoutHyper_profileInput")
  .implement({
    fields: hyper_mealCreateOrConnectWithoutHyper_profileInputFields,
  });

export const hyper_mealCreateManyHyper_profileInputEnvelopeFields = (
  t: any,
) => ({
  data: t.field({
    required: true,
    type: [hyper_mealCreateManyHyper_profileInput],
  }),
  skipDuplicates: t.boolean({ required: false }),
});
export const hyper_mealCreateManyHyper_profileInputEnvelope = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.hyper_mealCreateManyHyper_profileInputEnvelope>,
    false
  >("hyper_mealCreateManyHyper_profileInputEnvelope")
  .implement({
    fields: hyper_mealCreateManyHyper_profileInputEnvelopeFields,
  });

export const usersCreateWithoutHyper_profileInputFields = (t: any) => ({
  id: t.string({ required: true }),
});
export const usersCreateWithoutHyper_profileInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.usersCreateWithoutHyper_profileInput>,
    false
  >("usersCreateWithoutHyper_profileInput")
  .implement({
    fields: usersCreateWithoutHyper_profileInputFields,
  });

export const usersCreateOrConnectWithoutHyper_profileInputFields = (
  t: any,
) => ({
  where: t.field({ required: true, type: usersWhereUniqueInput }),
  create: t.field({
    required: true,
    type: usersCreateWithoutHyper_profileInput,
  }),
});
export const usersCreateOrConnectWithoutHyper_profileInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.usersCreateOrConnectWithoutHyper_profileInput>,
    false
  >("usersCreateOrConnectWithoutHyper_profileInput")
  .implement({
    fields: usersCreateOrConnectWithoutHyper_profileInputFields,
  });

export const hyper_reportCreateWithoutHyper_profileInputFields = (t: any) => ({
  id: t.string({ required: false }),
  title: t.string({ required: true }),
  content: t.string({ required: false }),
  created_at: t.field({ required: false, type: DateTime }),
  updatedAt: t.field({ required: false, type: DateTime }),
});
export const hyper_reportCreateWithoutHyper_profileInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.hyper_reportCreateWithoutHyper_profileInput>,
    false
  >("hyper_reportCreateWithoutHyper_profileInput")
  .implement({
    fields: hyper_reportCreateWithoutHyper_profileInputFields,
  });

export const hyper_reportCreateOrConnectWithoutHyper_profileInputFields = (
  t: any,
) => ({
  where: t.field({ required: true, type: hyper_reportWhereUniqueInput }),
  create: t.field({
    required: true,
    type: hyper_reportCreateWithoutHyper_profileInput,
  }),
});
export const hyper_reportCreateOrConnectWithoutHyper_profileInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.hyper_reportCreateOrConnectWithoutHyper_profileInput>,
    false
  >("hyper_reportCreateOrConnectWithoutHyper_profileInput")
  .implement({
    fields: hyper_reportCreateOrConnectWithoutHyper_profileInputFields,
  });

export const hyper_reportCreateManyHyper_profileInputEnvelopeFields = (
  t: any,
) => ({
  data: t.field({
    required: true,
    type: [hyper_reportCreateManyHyper_profileInput],
  }),
  skipDuplicates: t.boolean({ required: false }),
});
export const hyper_reportCreateManyHyper_profileInputEnvelope = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.hyper_reportCreateManyHyper_profileInputEnvelope>,
    false
  >("hyper_reportCreateManyHyper_profileInputEnvelope")
  .implement({
    fields: hyper_reportCreateManyHyper_profileInputEnvelopeFields,
  });

export const hyper_activityUpdateWithWhereUniqueWithoutHyper_profileInputFields =
  (t: any) => ({
    where: t.field({ required: true, type: hyper_activityWhereUniqueInput }),
    data: t.field({
      required: true,
      type: hyper_activityUpdateWithoutHyper_profileInput,
    }),
  });
export const hyper_activityUpdateWithWhereUniqueWithoutHyper_profileInput =
  builder
    .inputRef<
      PrismaUpdateOperationsInputFilter<Prisma.hyper_activityUpdateWithWhereUniqueWithoutHyper_profileInput>,
      false
    >("hyper_activityUpdateWithWhereUniqueWithoutHyper_profileInput")
    .implement({
      fields:
        hyper_activityUpdateWithWhereUniqueWithoutHyper_profileInputFields,
    });

export const hyper_activityUpdateManyWithWhereWithoutHyper_profileInputFields =
  (t: any) => ({
    where: t.field({ required: true, type: hyper_activityScalarWhereInput }),
    data: t.field({
      required: true,
      type: hyper_activityUpdateManyMutationInput,
    }),
  });
export const hyper_activityUpdateManyWithWhereWithoutHyper_profileInput =
  builder
    .inputRef<
      PrismaUpdateOperationsInputFilter<Prisma.hyper_activityUpdateManyWithWhereWithoutHyper_profileInput>,
      false
    >("hyper_activityUpdateManyWithWhereWithoutHyper_profileInput")
    .implement({
      fields: hyper_activityUpdateManyWithWhereWithoutHyper_profileInputFields,
    });

export const hyper_cgm_dataUpsertWithWhereUniqueWithoutHyper_profileInputFields =
  (t: any) => ({
    where: t.field({ required: true, type: hyper_cgm_dataWhereUniqueInput }),
    update: t.field({
      required: true,
      type: hyper_cgm_dataUpdateWithoutHyper_profileInput,
    }),
    create: t.field({
      required: true,
      type: hyper_cgm_dataCreateWithoutHyper_profileInput,
    }),
  });
export const hyper_cgm_dataUpsertWithWhereUniqueWithoutHyper_profileInput =
  builder
    .inputRef<
      PrismaUpdateOperationsInputFilter<Prisma.hyper_cgm_dataUpsertWithWhereUniqueWithoutHyper_profileInput>,
      false
    >("hyper_cgm_dataUpsertWithWhereUniqueWithoutHyper_profileInput")
    .implement({
      fields:
        hyper_cgm_dataUpsertWithWhereUniqueWithoutHyper_profileInputFields,
    });

export const hyper_cgm_dataUpdateWithWhereUniqueWithoutHyper_profileInputFields =
  (t: any) => ({
    where: t.field({ required: true, type: hyper_cgm_dataWhereUniqueInput }),
    data: t.field({
      required: true,
      type: hyper_cgm_dataUpdateWithoutHyper_profileInput,
    }),
  });
export const hyper_cgm_dataUpdateWithWhereUniqueWithoutHyper_profileInput =
  builder
    .inputRef<
      PrismaUpdateOperationsInputFilter<Prisma.hyper_cgm_dataUpdateWithWhereUniqueWithoutHyper_profileInput>,
      false
    >("hyper_cgm_dataUpdateWithWhereUniqueWithoutHyper_profileInput")
    .implement({
      fields:
        hyper_cgm_dataUpdateWithWhereUniqueWithoutHyper_profileInputFields,
    });

export const hyper_cgm_dataUpdateManyWithWhereWithoutHyper_profileInputFields =
  (t: any) => ({
    where: t.field({ required: true, type: hyper_cgm_dataScalarWhereInput }),
    data: t.field({
      required: true,
      type: hyper_cgm_dataUpdateManyMutationInput,
    }),
  });
export const hyper_cgm_dataUpdateManyWithWhereWithoutHyper_profileInput =
  builder
    .inputRef<
      PrismaUpdateOperationsInputFilter<Prisma.hyper_cgm_dataUpdateManyWithWhereWithoutHyper_profileInput>,
      false
    >("hyper_cgm_dataUpdateManyWithWhereWithoutHyper_profileInput")
    .implement({
      fields: hyper_cgm_dataUpdateManyWithWhereWithoutHyper_profileInputFields,
    });

export const hyper_cgm_dataScalarWhereInputFields = (t: any) => ({
  AND: t.field({ required: false, type: [hyper_cgm_dataScalarWhereInput] }),
  OR: t.field({ required: false, type: [hyper_cgm_dataScalarWhereInput] }),
  NOT: t.field({ required: false, type: [hyper_cgm_dataScalarWhereInput] }),
  id: t.field({ required: false, type: UuidFilter }),
  dexcom_user_id: t.field({ required: false, type: StringFilter }),
  record_id: t.field({ required: false, type: StringFilter }),
  system_time: t.field({ required: false, type: DateTimeFilter }),
  display_time: t.field({ required: false, type: DateTimeFilter }),
  glucose_value: t.field({ required: false, type: IntNullableFilter }),
  trend: t.field({ required: false, type: StringNullableFilter }),
  trend_rate: t.field({ required: false, type: FloatNullableFilter }),
  transmitter_id: t.field({ required: false, type: StringNullableFilter }),
  transmitter_generation: t.field({ required: false, type: StringFilter }),
  display_device: t.field({ required: false, type: StringFilter }),
  profile_id: t.field({ required: false, type: UuidFilter }),
  created_at: t.field({ required: false, type: DateTimeFilter }),
  updatedAt: t.field({ required: false, type: DateTimeNullableFilter }),
  transmitter_ticks: t.field({ required: false, type: IntFilter }),
  status: t.field({ required: false, type: StringNullableFilter }),
  unit: t.field({ required: false, type: StringFilter }),
  rate_unit: t.field({ required: false, type: StringFilter }),
});
export const hyper_cgm_dataScalarWhereInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.hyper_cgm_dataScalarWhereInput>,
    false
  >("hyper_cgm_dataScalarWhereInput")
  .implement({
    fields: hyper_cgm_dataScalarWhereInputFields,
  });

export const hyper_daily_recapUpsertWithWhereUniqueWithoutHyper_profileInputFields =
  (t: any) => ({
    where: t.field({ required: true, type: hyper_daily_recapWhereUniqueInput }),
    update: t.field({
      required: true,
      type: hyper_daily_recapUpdateWithoutHyper_profileInput,
    }),
    create: t.field({
      required: true,
      type: hyper_daily_recapCreateWithoutHyper_profileInput,
    }),
  });
export const hyper_daily_recapUpsertWithWhereUniqueWithoutHyper_profileInput =
  builder
    .inputRef<
      PrismaUpdateOperationsInputFilter<Prisma.hyper_daily_recapUpsertWithWhereUniqueWithoutHyper_profileInput>,
      false
    >("hyper_daily_recapUpsertWithWhereUniqueWithoutHyper_profileInput")
    .implement({
      fields:
        hyper_daily_recapUpsertWithWhereUniqueWithoutHyper_profileInputFields,
    });

export const hyper_daily_recapUpdateWithWhereUniqueWithoutHyper_profileInputFields =
  (t: any) => ({
    where: t.field({ required: true, type: hyper_daily_recapWhereUniqueInput }),
    data: t.field({
      required: true,
      type: hyper_daily_recapUpdateWithoutHyper_profileInput,
    }),
  });
export const hyper_daily_recapUpdateWithWhereUniqueWithoutHyper_profileInput =
  builder
    .inputRef<
      PrismaUpdateOperationsInputFilter<Prisma.hyper_daily_recapUpdateWithWhereUniqueWithoutHyper_profileInput>,
      false
    >("hyper_daily_recapUpdateWithWhereUniqueWithoutHyper_profileInput")
    .implement({
      fields:
        hyper_daily_recapUpdateWithWhereUniqueWithoutHyper_profileInputFields,
    });

export const hyper_daily_recapUpdateManyWithWhereWithoutHyper_profileInputFields =
  (t: any) => ({
    where: t.field({ required: true, type: hyper_daily_recapScalarWhereInput }),
    data: t.field({
      required: true,
      type: hyper_daily_recapUpdateManyMutationInput,
    }),
  });
export const hyper_daily_recapUpdateManyWithWhereWithoutHyper_profileInput =
  builder
    .inputRef<
      PrismaUpdateOperationsInputFilter<Prisma.hyper_daily_recapUpdateManyWithWhereWithoutHyper_profileInput>,
      false
    >("hyper_daily_recapUpdateManyWithWhereWithoutHyper_profileInput")
    .implement({
      fields:
        hyper_daily_recapUpdateManyWithWhereWithoutHyper_profileInputFields,
    });

export const hyper_daily_recapScalarWhereInputFields = (t: any) => ({
  AND: t.field({ required: false, type: [hyper_daily_recapScalarWhereInput] }),
  OR: t.field({ required: false, type: [hyper_daily_recapScalarWhereInput] }),
  NOT: t.field({ required: false, type: [hyper_daily_recapScalarWhereInput] }),
  id: t.field({ required: false, type: UuidFilter }),
  date: t.field({ required: false, type: DateTimeFilter }),
  average_glucose: t.field({ required: false, type: IntNullableFilter }),
  minimum_glucose: t.field({ required: false, type: IntNullableFilter }),
  maximum_glucose: t.field({ required: false, type: IntNullableFilter }),
  glucose_variability: t.field({
    required: false,
    type: DecimalNullableFilter,
  }),
  time_in_ranges: t.field({ required: false, type: JsonNullableFilter }),
  total_readings: t.field({ required: false, type: IntNullableFilter }),
  profile_id: t.field({ required: false, type: UuidFilter }),
  created_at: t.field({ required: false, type: DateTimeFilter }),
  updatedAt: t.field({ required: false, type: DateTimeNullableFilter }),
  timezone: t.field({ required: false, type: StringFilter }),
});
export const hyper_daily_recapScalarWhereInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.hyper_daily_recapScalarWhereInput>,
    false
  >("hyper_daily_recapScalarWhereInput")
  .implement({
    fields: hyper_daily_recapScalarWhereInputFields,
  });

export const hyper_mealUpsertWithWhereUniqueWithoutHyper_profileInputFields = (
  t: any,
) => ({
  where: t.field({ required: true, type: hyper_mealWhereUniqueInput }),
  update: t.field({
    required: true,
    type: hyper_mealUpdateWithoutHyper_profileInput,
  }),
  create: t.field({
    required: true,
    type: hyper_mealCreateWithoutHyper_profileInput,
  }),
});
export const hyper_mealUpsertWithWhereUniqueWithoutHyper_profileInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.hyper_mealUpsertWithWhereUniqueWithoutHyper_profileInput>,
    false
  >("hyper_mealUpsertWithWhereUniqueWithoutHyper_profileInput")
  .implement({
    fields: hyper_mealUpsertWithWhereUniqueWithoutHyper_profileInputFields,
  });

export const hyper_mealUpdateWithWhereUniqueWithoutHyper_profileInputFields = (
  t: any,
) => ({
  where: t.field({ required: true, type: hyper_mealWhereUniqueInput }),
  data: t.field({
    required: true,
    type: hyper_mealUpdateWithoutHyper_profileInput,
  }),
});
export const hyper_mealUpdateWithWhereUniqueWithoutHyper_profileInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.hyper_mealUpdateWithWhereUniqueWithoutHyper_profileInput>,
    false
  >("hyper_mealUpdateWithWhereUniqueWithoutHyper_profileInput")
  .implement({
    fields: hyper_mealUpdateWithWhereUniqueWithoutHyper_profileInputFields,
  });

export const hyper_mealUpdateManyWithWhereWithoutHyper_profileInputFields = (
  t: any,
) => ({
  where: t.field({ required: true, type: hyper_mealScalarWhereInput }),
  data: t.field({ required: true, type: hyper_mealUpdateManyMutationInput }),
});
export const hyper_mealUpdateManyWithWhereWithoutHyper_profileInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.hyper_mealUpdateManyWithWhereWithoutHyper_profileInput>,
    false
  >("hyper_mealUpdateManyWithWhereWithoutHyper_profileInput")
  .implement({
    fields: hyper_mealUpdateManyWithWhereWithoutHyper_profileInputFields,
  });

export const hyper_mealScalarWhereInputFields = (t: any) => ({
  AND: t.field({ required: false, type: [hyper_mealScalarWhereInput] }),
  OR: t.field({ required: false, type: [hyper_mealScalarWhereInput] }),
  NOT: t.field({ required: false, type: [hyper_mealScalarWhereInput] }),
  id: t.field({ required: false, type: UuidFilter }),
  meal_time: t.field({ required: false, type: DateTimeFilter }),
  carbohydrates: t.field({ required: false, type: FloatNullableFilter }),
  dietary_energy: t.field({ required: false, type: FloatNullableFilter }),
  dietary_sugar: t.field({ required: false, type: FloatNullableFilter }),
  fiber: t.field({ required: false, type: FloatNullableFilter }),
  protein: t.field({ required: false, type: FloatNullableFilter }),
  total_fat: t.field({ required: false, type: FloatNullableFilter }),
  profile_id: t.field({ required: false, type: UuidFilter }),
  created_at: t.field({ required: false, type: DateTimeFilter }),
  updatedAt: t.field({ required: false, type: DateTimeNullableFilter }),
});
export const hyper_mealScalarWhereInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.hyper_mealScalarWhereInput>,
    false
  >("hyper_mealScalarWhereInput")
  .implement({
    fields: hyper_mealScalarWhereInputFields,
  });

export const usersUpsertWithoutHyper_profileInputFields = (t: any) => ({
  update: t.field({
    required: true,
    type: usersUpdateWithoutHyper_profileInput,
  }),
  create: t.field({
    required: true,
    type: usersCreateWithoutHyper_profileInput,
  }),
  where: t.field({ required: false, type: usersWhereInput }),
});
export const usersUpsertWithoutHyper_profileInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.usersUpsertWithoutHyper_profileInput>,
    false
  >("usersUpsertWithoutHyper_profileInput")
  .implement({
    fields: usersUpsertWithoutHyper_profileInputFields,
  });

export const usersUpdateToOneWithWhereWithoutHyper_profileInputFields = (
  t: any,
) => ({
  where: t.field({ required: false, type: usersWhereInput }),
  data: t.field({ required: true, type: usersUpdateWithoutHyper_profileInput }),
});
export const usersUpdateToOneWithWhereWithoutHyper_profileInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.usersUpdateToOneWithWhereWithoutHyper_profileInput>,
    false
  >("usersUpdateToOneWithWhereWithoutHyper_profileInput")
  .implement({
    fields: usersUpdateToOneWithWhereWithoutHyper_profileInputFields,
  });

export const usersUpdateWithoutHyper_profileInputFields = (t: any) => ({
  id: t.field({ required: false, type: StringFieldUpdateOperationsInput }),
});
export const usersUpdateWithoutHyper_profileInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.usersUpdateWithoutHyper_profileInput>,
    false
  >("usersUpdateWithoutHyper_profileInput")
  .implement({
    fields: usersUpdateWithoutHyper_profileInputFields,
  });

export const hyper_reportUpsertWithWhereUniqueWithoutHyper_profileInputFields =
  (t: any) => ({
    where: t.field({ required: true, type: hyper_reportWhereUniqueInput }),
    update: t.field({
      required: true,
      type: hyper_reportUpdateWithoutHyper_profileInput,
    }),
    create: t.field({
      required: true,
      type: hyper_reportCreateWithoutHyper_profileInput,
    }),
  });
export const hyper_reportUpsertWithWhereUniqueWithoutHyper_profileInput =
  builder
    .inputRef<
      PrismaUpdateOperationsInputFilter<Prisma.hyper_reportUpsertWithWhereUniqueWithoutHyper_profileInput>,
      false
    >("hyper_reportUpsertWithWhereUniqueWithoutHyper_profileInput")
    .implement({
      fields: hyper_reportUpsertWithWhereUniqueWithoutHyper_profileInputFields,
    });

export const hyper_reportUpdateWithWhereUniqueWithoutHyper_profileInputFields =
  (t: any) => ({
    where: t.field({ required: true, type: hyper_reportWhereUniqueInput }),
    data: t.field({
      required: true,
      type: hyper_reportUpdateWithoutHyper_profileInput,
    }),
  });
export const hyper_reportUpdateWithWhereUniqueWithoutHyper_profileInput =
  builder
    .inputRef<
      PrismaUpdateOperationsInputFilter<Prisma.hyper_reportUpdateWithWhereUniqueWithoutHyper_profileInput>,
      false
    >("hyper_reportUpdateWithWhereUniqueWithoutHyper_profileInput")
    .implement({
      fields: hyper_reportUpdateWithWhereUniqueWithoutHyper_profileInputFields,
    });

export const hyper_reportUpdateManyWithWhereWithoutHyper_profileInputFields = (
  t: any,
) => ({
  where: t.field({ required: true, type: hyper_reportScalarWhereInput }),
  data: t.field({ required: true, type: hyper_reportUpdateManyMutationInput }),
});
export const hyper_reportUpdateManyWithWhereWithoutHyper_profileInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.hyper_reportUpdateManyWithWhereWithoutHyper_profileInput>,
    false
  >("hyper_reportUpdateManyWithWhereWithoutHyper_profileInput")
  .implement({
    fields: hyper_reportUpdateManyWithWhereWithoutHyper_profileInputFields,
  });

export const hyper_reportScalarWhereInputFields = (t: any) => ({
  AND: t.field({ required: false, type: [hyper_reportScalarWhereInput] }),
  OR: t.field({ required: false, type: [hyper_reportScalarWhereInput] }),
  NOT: t.field({ required: false, type: [hyper_reportScalarWhereInput] }),
  id: t.field({ required: false, type: UuidFilter }),
  title: t.field({ required: false, type: StringFilter }),
  content: t.field({ required: false, type: StringNullableFilter }),
  profile_id: t.field({ required: false, type: UuidFilter }),
  created_at: t.field({ required: false, type: DateTimeFilter }),
  updatedAt: t.field({ required: false, type: DateTimeNullableFilter }),
});
export const hyper_reportScalarWhereInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.hyper_reportScalarWhereInput>,
    false
  >("hyper_reportScalarWhereInput")
  .implement({
    fields: hyper_reportScalarWhereInputFields,
  });

export const hyper_profileCreateWithoutHyper_reportInputFields = (t: any) => ({
  name: t.string({ required: true }),
  image: t.string({ required: false }),
  email: t.string({ required: false }),
  last_synced_time: t.field({ required: false, type: DateTime }),
  diabetes_status: t.field({ required: false, type: diabetes_status }),
  glucose_range_type: t.field({ required: false, type: glucose_range_type }),
  hyper_activity: t.field({
    required: false,
    type: hyper_activityCreateNestedManyWithoutHyper_profileInput,
  }),
  hyper_cgm_data: t.field({
    required: false,
    type: hyper_cgm_dataCreateNestedManyWithoutHyper_profileInput,
  }),
  hyper_daily_recap: t.field({
    required: false,
    type: hyper_daily_recapCreateNestedManyWithoutHyper_profileInput,
  }),
  hyper_meal: t.field({
    required: false,
    type: hyper_mealCreateNestedManyWithoutHyper_profileInput,
  }),
  users: t.field({
    required: true,
    type: usersCreateNestedOneWithoutHyper_profileInput,
  }),
});
export const hyper_profileCreateWithoutHyper_reportInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.hyper_profileCreateWithoutHyper_reportInput>,
    false
  >("hyper_profileCreateWithoutHyper_reportInput")
  .implement({
    fields: hyper_profileCreateWithoutHyper_reportInputFields,
  });

export const hyper_profileCreateOrConnectWithoutHyper_reportInputFields = (
  t: any,
) => ({
  where: t.field({ required: true, type: hyper_profileWhereUniqueInput }),
  create: t.field({
    required: true,
    type: hyper_profileCreateWithoutHyper_reportInput,
  }),
});
export const hyper_profileCreateOrConnectWithoutHyper_reportInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.hyper_profileCreateOrConnectWithoutHyper_reportInput>,
    false
  >("hyper_profileCreateOrConnectWithoutHyper_reportInput")
  .implement({
    fields: hyper_profileCreateOrConnectWithoutHyper_reportInputFields,
  });

export const hyper_profileUpsertWithoutHyper_reportInputFields = (t: any) => ({
  update: t.field({
    required: true,
    type: hyper_profileUpdateWithoutHyper_reportInput,
  }),
  create: t.field({
    required: true,
    type: hyper_profileCreateWithoutHyper_reportInput,
  }),
  where: t.field({ required: false, type: hyper_profileWhereInput }),
});
export const hyper_profileUpsertWithoutHyper_reportInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.hyper_profileUpsertWithoutHyper_reportInput>,
    false
  >("hyper_profileUpsertWithoutHyper_reportInput")
  .implement({
    fields: hyper_profileUpsertWithoutHyper_reportInputFields,
  });

export const hyper_profileUpdateToOneWithWhereWithoutHyper_reportInputFields = (
  t: any,
) => ({
  where: t.field({ required: false, type: hyper_profileWhereInput }),
  data: t.field({
    required: true,
    type: hyper_profileUpdateWithoutHyper_reportInput,
  }),
});
export const hyper_profileUpdateToOneWithWhereWithoutHyper_reportInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.hyper_profileUpdateToOneWithWhereWithoutHyper_reportInput>,
    false
  >("hyper_profileUpdateToOneWithWhereWithoutHyper_reportInput")
  .implement({
    fields: hyper_profileUpdateToOneWithWhereWithoutHyper_reportInputFields,
  });

export const hyper_profileUpdateWithoutHyper_reportInputFields = (t: any) => ({
  name: t.field({ required: false, type: StringFieldUpdateOperationsInput }),
  image: t.field({
    required: false,
    type: NullableStringFieldUpdateOperationsInput,
  }),
  email: t.field({
    required: false,
    type: NullableStringFieldUpdateOperationsInput,
  }),
  last_synced_time: t.field({
    required: false,
    type: NullableDateTimeFieldUpdateOperationsInput,
  }),
  diabetes_status: t.field({
    required: false,
    type: Enumdiabetes_statusFieldUpdateOperationsInput,
  }),
  glucose_range_type: t.field({
    required: false,
    type: Enumglucose_range_typeFieldUpdateOperationsInput,
  }),
  hyper_activity: t.field({
    required: false,
    type: hyper_activityUpdateManyWithoutHyper_profileNestedInput,
  }),
  hyper_cgm_data: t.field({
    required: false,
    type: hyper_cgm_dataUpdateManyWithoutHyper_profileNestedInput,
  }),
  hyper_daily_recap: t.field({
    required: false,
    type: hyper_daily_recapUpdateManyWithoutHyper_profileNestedInput,
  }),
  hyper_meal: t.field({
    required: false,
    type: hyper_mealUpdateManyWithoutHyper_profileNestedInput,
  }),
  users: t.field({
    required: false,
    type: usersUpdateOneRequiredWithoutHyper_profileNestedInput,
  }),
});
export const hyper_profileUpdateWithoutHyper_reportInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.hyper_profileUpdateWithoutHyper_reportInput>,
    false
  >("hyper_profileUpdateWithoutHyper_reportInput")
  .implement({
    fields: hyper_profileUpdateWithoutHyper_reportInputFields,
  });

export const hyper_activityUpdateWithoutHyper_activity_typeInputFields = (
  t: any,
) => ({
  id: t.field({ required: false, type: StringFieldUpdateOperationsInput }),
  created_at: t.field({
    required: false,
    type: DateTimeFieldUpdateOperationsInput,
  }),
  updatedAt: t.field({
    required: false,
    type: NullableDateTimeFieldUpdateOperationsInput,
  }),
  hyper_profile: t.field({
    required: false,
    type: hyper_profileUpdateOneRequiredWithoutHyper_activityNestedInput,
  }),
});
export const hyper_activityUpdateWithoutHyper_activity_typeInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.hyper_activityUpdateWithoutHyper_activity_typeInput>,
    false
  >("hyper_activityUpdateWithoutHyper_activity_typeInput")
  .implement({
    fields: hyper_activityUpdateWithoutHyper_activity_typeInputFields,
  });

export const hyper_cgm_dataCreateManyHyper_profileInputFields = (t: any) => ({
  id: t.string({ required: false }),
  dexcom_user_id: t.string({ required: true }),
  record_id: t.string({ required: true }),
  system_time: t.field({ required: true, type: DateTime }),
  display_time: t.field({ required: true, type: DateTime }),
  glucose_value: t.int({ required: false }),
  trend: t.string({ required: false }),
  trend_rate: t.float({ required: false }),
  transmitter_id: t.string({ required: false }),
  transmitter_generation: t.string({ required: true }),
  display_device: t.string({ required: true }),
  created_at: t.field({ required: false, type: DateTime }),
  updatedAt: t.field({ required: false, type: DateTime }),
  transmitter_ticks: t.int({ required: true }),
  status: t.string({ required: false }),
  unit: t.string({ required: true }),
  rate_unit: t.string({ required: true }),
});
export const hyper_cgm_dataCreateManyHyper_profileInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.hyper_cgm_dataCreateManyHyper_profileInput>,
    false
  >("hyper_cgm_dataCreateManyHyper_profileInput")
  .implement({
    fields: hyper_cgm_dataCreateManyHyper_profileInputFields,
  });

export const hyper_daily_recapCreateManyHyper_profileInputFields = (
  t: any,
) => ({
  id: t.string({ required: false }),
  date: t.field({ required: true, type: DateTime }),
  average_glucose: t.int({ required: false }),
  minimum_glucose: t.int({ required: false }),
  maximum_glucose: t.int({ required: false }),
  glucose_variability: t.field({ required: false, type: Decimal }),
  time_in_ranges: t.field({ required: false, type: Json }),
  total_readings: t.int({ required: false }),
  created_at: t.field({ required: false, type: DateTime }),
  updatedAt: t.field({ required: false, type: DateTime }),
  timezone: t.string({ required: true }),
});
export const hyper_daily_recapCreateManyHyper_profileInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.hyper_daily_recapCreateManyHyper_profileInput>,
    false
  >("hyper_daily_recapCreateManyHyper_profileInput")
  .implement({
    fields: hyper_daily_recapCreateManyHyper_profileInputFields,
  });

export const hyper_mealCreateManyHyper_profileInputFields = (t: any) => ({
  id: t.string({ required: false }),
  meal_time: t.field({ required: false, type: DateTime }),
  carbohydrates: t.float({ required: false }),
  dietary_energy: t.float({ required: false }),
  dietary_sugar: t.float({ required: false }),
  fiber: t.float({ required: false }),
  protein: t.float({ required: false }),
  total_fat: t.float({ required: false }),
  created_at: t.field({ required: false, type: DateTime }),
  updatedAt: t.field({ required: false, type: DateTime }),
});
export const hyper_mealCreateManyHyper_profileInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.hyper_mealCreateManyHyper_profileInput>,
    false
  >("hyper_mealCreateManyHyper_profileInput")
  .implement({
    fields: hyper_mealCreateManyHyper_profileInputFields,
  });

export const hyper_reportCreateManyHyper_profileInputFields = (t: any) => ({
  id: t.string({ required: false }),
  title: t.string({ required: true }),
  content: t.string({ required: false }),
  created_at: t.field({ required: false, type: DateTime }),
  updatedAt: t.field({ required: false, type: DateTime }),
});
export const hyper_reportCreateManyHyper_profileInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.hyper_reportCreateManyHyper_profileInput>,
    false
  >("hyper_reportCreateManyHyper_profileInput")
  .implement({
    fields: hyper_reportCreateManyHyper_profileInputFields,
  });

export const hyper_activityUpdateWithoutHyper_profileInputFields = (
  t: any,
) => ({
  id: t.field({ required: false, type: StringFieldUpdateOperationsInput }),
  created_at: t.field({
    required: false,
    type: DateTimeFieldUpdateOperationsInput,
  }),
  updatedAt: t.field({
    required: false,
    type: NullableDateTimeFieldUpdateOperationsInput,
  }),
  hyper_activity_type: t.field({
    required: false,
    type: hyper_activity_typeUpdateOneRequiredWithoutHyper_activityNestedInput,
  }),
});
export const hyper_activityUpdateWithoutHyper_profileInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.hyper_activityUpdateWithoutHyper_profileInput>,
    false
  >("hyper_activityUpdateWithoutHyper_profileInput")
  .implement({
    fields: hyper_activityUpdateWithoutHyper_profileInputFields,
  });

export const hyper_cgm_dataUpdateWithoutHyper_profileInputFields = (
  t: any,
) => ({
  id: t.field({ required: false, type: StringFieldUpdateOperationsInput }),
  dexcom_user_id: t.field({
    required: false,
    type: StringFieldUpdateOperationsInput,
  }),
  record_id: t.field({
    required: false,
    type: StringFieldUpdateOperationsInput,
  }),
  system_time: t.field({
    required: false,
    type: DateTimeFieldUpdateOperationsInput,
  }),
  display_time: t.field({
    required: false,
    type: DateTimeFieldUpdateOperationsInput,
  }),
  glucose_value: t.field({
    required: false,
    type: NullableIntFieldUpdateOperationsInput,
  }),
  trend: t.field({
    required: false,
    type: NullableStringFieldUpdateOperationsInput,
  }),
  trend_rate: t.field({
    required: false,
    type: NullableFloatFieldUpdateOperationsInput,
  }),
  transmitter_id: t.field({
    required: false,
    type: NullableStringFieldUpdateOperationsInput,
  }),
  transmitter_generation: t.field({
    required: false,
    type: StringFieldUpdateOperationsInput,
  }),
  display_device: t.field({
    required: false,
    type: StringFieldUpdateOperationsInput,
  }),
  created_at: t.field({
    required: false,
    type: DateTimeFieldUpdateOperationsInput,
  }),
  updatedAt: t.field({
    required: false,
    type: NullableDateTimeFieldUpdateOperationsInput,
  }),
  transmitter_ticks: t.field({
    required: false,
    type: IntFieldUpdateOperationsInput,
  }),
  status: t.field({
    required: false,
    type: NullableStringFieldUpdateOperationsInput,
  }),
  unit: t.field({ required: false, type: StringFieldUpdateOperationsInput }),
  rate_unit: t.field({
    required: false,
    type: StringFieldUpdateOperationsInput,
  }),
});
export const hyper_cgm_dataUpdateWithoutHyper_profileInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.hyper_cgm_dataUpdateWithoutHyper_profileInput>,
    false
  >("hyper_cgm_dataUpdateWithoutHyper_profileInput")
  .implement({
    fields: hyper_cgm_dataUpdateWithoutHyper_profileInputFields,
  });

export const hyper_daily_recapUpdateWithoutHyper_profileInputFields = (
  t: any,
) => ({
  id: t.field({ required: false, type: StringFieldUpdateOperationsInput }),
  date: t.field({ required: false, type: DateTimeFieldUpdateOperationsInput }),
  average_glucose: t.field({
    required: false,
    type: NullableIntFieldUpdateOperationsInput,
  }),
  minimum_glucose: t.field({
    required: false,
    type: NullableIntFieldUpdateOperationsInput,
  }),
  maximum_glucose: t.field({
    required: false,
    type: NullableIntFieldUpdateOperationsInput,
  }),
  glucose_variability: t.field({
    required: false,
    type: NullableDecimalFieldUpdateOperationsInput,
  }),
  time_in_ranges: t.field({ required: false, type: Json }),
  total_readings: t.field({
    required: false,
    type: NullableIntFieldUpdateOperationsInput,
  }),
  created_at: t.field({
    required: false,
    type: DateTimeFieldUpdateOperationsInput,
  }),
  updatedAt: t.field({
    required: false,
    type: NullableDateTimeFieldUpdateOperationsInput,
  }),
  timezone: t.field({
    required: false,
    type: StringFieldUpdateOperationsInput,
  }),
});
export const hyper_daily_recapUpdateWithoutHyper_profileInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.hyper_daily_recapUpdateWithoutHyper_profileInput>,
    false
  >("hyper_daily_recapUpdateWithoutHyper_profileInput")
  .implement({
    fields: hyper_daily_recapUpdateWithoutHyper_profileInputFields,
  });

export const hyper_mealUpdateWithoutHyper_profileInputFields = (t: any) => ({
  id: t.field({ required: false, type: StringFieldUpdateOperationsInput }),
  meal_time: t.field({
    required: false,
    type: DateTimeFieldUpdateOperationsInput,
  }),
  carbohydrates: t.field({
    required: false,
    type: NullableFloatFieldUpdateOperationsInput,
  }),
  dietary_energy: t.field({
    required: false,
    type: NullableFloatFieldUpdateOperationsInput,
  }),
  dietary_sugar: t.field({
    required: false,
    type: NullableFloatFieldUpdateOperationsInput,
  }),
  fiber: t.field({
    required: false,
    type: NullableFloatFieldUpdateOperationsInput,
  }),
  protein: t.field({
    required: false,
    type: NullableFloatFieldUpdateOperationsInput,
  }),
  total_fat: t.field({
    required: false,
    type: NullableFloatFieldUpdateOperationsInput,
  }),
  created_at: t.field({
    required: false,
    type: DateTimeFieldUpdateOperationsInput,
  }),
  updatedAt: t.field({
    required: false,
    type: NullableDateTimeFieldUpdateOperationsInput,
  }),
});
export const hyper_mealUpdateWithoutHyper_profileInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.hyper_mealUpdateWithoutHyper_profileInput>,
    false
  >("hyper_mealUpdateWithoutHyper_profileInput")
  .implement({
    fields: hyper_mealUpdateWithoutHyper_profileInputFields,
  });

export const hyper_reportUpdateWithoutHyper_profileInputFields = (t: any) => ({
  id: t.field({ required: false, type: StringFieldUpdateOperationsInput }),
  title: t.field({ required: false, type: StringFieldUpdateOperationsInput }),
  content: t.field({
    required: false,
    type: NullableStringFieldUpdateOperationsInput,
  }),
  created_at: t.field({
    required: false,
    type: DateTimeFieldUpdateOperationsInput,
  }),
  updatedAt: t.field({
    required: false,
    type: NullableDateTimeFieldUpdateOperationsInput,
  }),
});
export const hyper_reportUpdateWithoutHyper_profileInput = builder
  .inputRef<
    PrismaUpdateOperationsInputFilter<Prisma.hyper_reportUpdateWithoutHyper_profileInput>,
    false
  >("hyper_reportUpdateWithoutHyper_profileInput")
  .implement({
    fields: hyper_reportUpdateWithoutHyper_profileInputFields,
  });
