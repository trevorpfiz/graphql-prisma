// @ts-nocheck
import { Prisma } from '@prisma/client';

import { builder } from '../../schema/builder';

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
  [K in keyof T]: [ApplyFilters<T[K]>] extends [never] ? T[K] : ApplyFilters<T[K]>
};

export const DateTime = builder.scalarType('DateTime', {
  parseValue: (value) => {
    try {
      const date = new Date(value)
      if (date.toString() === 'Invalid Date') throw new Error('Invalid Date')
      return date
    } catch (error) {
      throw new Error('Invalid Date');
    }
  },
  serialize: (value) => value ? new Date(value) : null,
});

export const Decimal = builder.scalarType('Decimal', {
  serialize: (value) => parseFloat(value),
  parseValue: (value) => {
    try {
      return new Prisma.Decimal(parseFloat(value));
    } catch (error) {
      throw new Error('Invalid Decimal');
    }
  },
});

export const Json = builder.scalarType('Json', {
  serialize: (value) => value,
});

export const TransactionIsolationLevel = builder.enumType('TransactionIsolationLevel', {
  values: ["ReadUncommitted","ReadCommitted","RepeatableRead","Serializable"] as const,
});

export const UsersScalarFieldEnum = builder.enumType('UsersScalarFieldEnum', {
  values: ["id"] as const,
});

export const Hyper_activityScalarFieldEnum = builder.enumType('Hyper_activityScalarFieldEnum', {
  values: ["id","activity_type_id","profile_id","created_at","updatedAt"] as const,
});

export const Hyper_activity_typeScalarFieldEnum = builder.enumType('Hyper_activity_typeScalarFieldEnum', {
  values: ["id","name"] as const,
});

export const Hyper_cgm_dataScalarFieldEnum = builder.enumType('Hyper_cgm_dataScalarFieldEnum', {
  values: ["id","dexcom_user_id","record_id","system_time","display_time","glucose_value","trend","trend_rate","transmitter_id","transmitter_generation","display_device","profile_id","created_at","updatedAt","transmitter_ticks","status","unit","rate_unit"] as const,
});

export const Hyper_daily_recapScalarFieldEnum = builder.enumType('Hyper_daily_recapScalarFieldEnum', {
  values: ["id","date","average_glucose","minimum_glucose","maximum_glucose","glucose_variability","time_in_ranges","total_readings","profile_id","created_at","updatedAt","timezone"] as const,
});

export const Hyper_mealScalarFieldEnum = builder.enumType('Hyper_mealScalarFieldEnum', {
  values: ["id","meal_time","carbohydrates","dietary_energy","dietary_sugar","fiber","protein","total_fat","profile_id","created_at","updatedAt"] as const,
});

export const Hyper_profileScalarFieldEnum = builder.enumType('Hyper_profileScalarFieldEnum', {
  values: ["id","name","image","email","last_synced_time","diabetes_status","glucose_range_type"] as const,
});

export const Hyper_reportScalarFieldEnum = builder.enumType('Hyper_reportScalarFieldEnum', {
  values: ["id","title","content","profile_id","created_at","updatedAt"] as const,
});

export const SortOrder = builder.enumType('SortOrder', {
  values: ["asc","desc"] as const,
});

export const NullableJsonNullValueInput = builder.enumType('NullableJsonNullValueInput', {
  values: ["DbNull","JsonNull"] as const,
});

export const QueryMode = builder.enumType('QueryMode', {
  values: ["default","insensitive"] as const,
});

export const NullsOrder = builder.enumType('NullsOrder', {
  values: ["first","last"] as const,
});

export const JsonNullValueFilter = builder.enumType('JsonNullValueFilter', {
  values: ["DbNull","JsonNull","AnyNull"] as const,
});

export const diabetes_status = builder.enumType('diabetes_status', {
  values: ["none","pre","type1","type2","type3"] as const,
});

export const glucose_range_type = builder.enumType('glucose_range_type', {
  values: ["standard","tight","optimal"] as const,
});

export const usersWhereInputFields = (t: any) => ({
  AND: t.field({"required":false,"type":[usersWhereInput]}),
  OR: t.field({"required":false,"type":[usersWhereInput]}),
  NOT: t.field({"required":false,"type":[usersWhereInput]}),
  id: t.field({"required":false,"type":UuidFilter}),
  hyper_profile: t.field({"required":false,"type":hyper_profileWhereInput}),
});
export const usersWhereInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.usersWhereInput>, false>('usersWhereInput').implement({
  fields: usersWhereInputFields,
});

export const usersOrderByWithRelationInputFields = (t: any) => ({
  id: t.field({"required":false,"type":SortOrder}),
  hyper_profile: t.field({"required":false,"type":hyper_profileOrderByWithRelationInput}),
});
export const usersOrderByWithRelationInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.usersOrderByWithRelationInput>, false>('usersOrderByWithRelationInput').implement({
  fields: usersOrderByWithRelationInputFields,
});

export const usersWhereUniqueInputFields = (t: any) => ({
  id: t.string({"required":false}),
  AND: t.field({"required":false,"type":[usersWhereInput]}),
  OR: t.field({"required":false,"type":[usersWhereInput]}),
  NOT: t.field({"required":false,"type":[usersWhereInput]}),
  hyper_profile: t.field({"required":false,"type":hyper_profileWhereInput}),
});
export const usersWhereUniqueInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.usersWhereUniqueInput>, false>('usersWhereUniqueInput').implement({
  fields: usersWhereUniqueInputFields,
});

export const hyper_activityWhereInputFields = (t: any) => ({
  AND: t.field({"required":false,"type":[hyper_activityWhereInput]}),
  OR: t.field({"required":false,"type":[hyper_activityWhereInput]}),
  NOT: t.field({"required":false,"type":[hyper_activityWhereInput]}),
  id: t.field({"required":false,"type":UuidFilter}),
  activity_type_id: t.field({"required":false,"type":UuidFilter}),
  profile_id: t.field({"required":false,"type":UuidFilter}),
  created_at: t.field({"required":false,"type":DateTimeFilter}),
  updatedAt: t.field({"required":false,"type":DateTimeNullableFilter}),
  hyper_activity_type: t.field({"required":false,"type":hyper_activity_typeWhereInput}),
  hyper_profile: t.field({"required":false,"type":hyper_profileWhereInput}),
});
export const hyper_activityWhereInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.hyper_activityWhereInput>, false>('hyper_activityWhereInput').implement({
  fields: hyper_activityWhereInputFields,
});

export const hyper_activityOrderByWithRelationInputFields = (t: any) => ({
  id: t.field({"required":false,"type":SortOrder}),
  activity_type_id: t.field({"required":false,"type":SortOrder}),
  profile_id: t.field({"required":false,"type":SortOrder}),
  created_at: t.field({"required":false,"type":SortOrder}),
  updatedAt: t.field({"required":false,"type":SortOrder}),
  hyper_activity_type: t.field({"required":false,"type":hyper_activity_typeOrderByWithRelationInput}),
  hyper_profile: t.field({"required":false,"type":hyper_profileOrderByWithRelationInput}),
});
export const hyper_activityOrderByWithRelationInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.hyper_activityOrderByWithRelationInput>, false>('hyper_activityOrderByWithRelationInput').implement({
  fields: hyper_activityOrderByWithRelationInputFields,
});

export const hyper_activityWhereUniqueInputFields = (t: any) => ({
  id: t.string({"required":false}),
  AND: t.field({"required":false,"type":[hyper_activityWhereInput]}),
  OR: t.field({"required":false,"type":[hyper_activityWhereInput]}),
  NOT: t.field({"required":false,"type":[hyper_activityWhereInput]}),
  activity_type_id: t.field({"required":false,"type":UuidFilter}),
  profile_id: t.field({"required":false,"type":UuidFilter}),
  created_at: t.field({"required":false,"type":DateTimeFilter}),
  updatedAt: t.field({"required":false,"type":DateTimeNullableFilter}),
  hyper_activity_type: t.field({"required":false,"type":hyper_activity_typeWhereInput}),
  hyper_profile: t.field({"required":false,"type":hyper_profileWhereInput}),
});
export const hyper_activityWhereUniqueInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.hyper_activityWhereUniqueInput>, false>('hyper_activityWhereUniqueInput').implement({
  fields: hyper_activityWhereUniqueInputFields,
});

export const hyper_activity_typeWhereInputFields = (t: any) => ({
  AND: t.field({"required":false,"type":[hyper_activity_typeWhereInput]}),
  OR: t.field({"required":false,"type":[hyper_activity_typeWhereInput]}),
  NOT: t.field({"required":false,"type":[hyper_activity_typeWhereInput]}),
  id: t.field({"required":false,"type":UuidFilter}),
  name: t.field({"required":false,"type":StringFilter}),
  hyper_activity: t.field({"required":false,"type":Hyper_activityListRelationFilter}),
});
export const hyper_activity_typeWhereInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.hyper_activity_typeWhereInput>, false>('hyper_activity_typeWhereInput').implement({
  fields: hyper_activity_typeWhereInputFields,
});

export const hyper_activity_typeOrderByWithRelationInputFields = (t: any) => ({
  id: t.field({"required":false,"type":SortOrder}),
  name: t.field({"required":false,"type":SortOrder}),
  hyper_activity: t.field({"required":false,"type":hyper_activityOrderByRelationAggregateInput}),
});
export const hyper_activity_typeOrderByWithRelationInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.hyper_activity_typeOrderByWithRelationInput>, false>('hyper_activity_typeOrderByWithRelationInput').implement({
  fields: hyper_activity_typeOrderByWithRelationInputFields,
});

export const hyper_activity_typeWhereUniqueInputFields = (t: any) => ({
  id: t.string({"required":false}),
  name: t.string({"required":false}),
  AND: t.field({"required":false,"type":[hyper_activity_typeWhereInput]}),
  OR: t.field({"required":false,"type":[hyper_activity_typeWhereInput]}),
  NOT: t.field({"required":false,"type":[hyper_activity_typeWhereInput]}),
  hyper_activity: t.field({"required":false,"type":Hyper_activityListRelationFilter}),
});
export const hyper_activity_typeWhereUniqueInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.hyper_activity_typeWhereUniqueInput>, false>('hyper_activity_typeWhereUniqueInput').implement({
  fields: hyper_activity_typeWhereUniqueInputFields,
});

export const hyper_cgm_dataWhereInputFields = (t: any) => ({
  AND: t.field({"required":false,"type":[hyper_cgm_dataWhereInput]}),
  OR: t.field({"required":false,"type":[hyper_cgm_dataWhereInput]}),
  NOT: t.field({"required":false,"type":[hyper_cgm_dataWhereInput]}),
  id: t.field({"required":false,"type":UuidFilter}),
  dexcom_user_id: t.field({"required":false,"type":StringFilter}),
  record_id: t.field({"required":false,"type":StringFilter}),
  system_time: t.field({"required":false,"type":DateTimeFilter}),
  display_time: t.field({"required":false,"type":DateTimeFilter}),
  glucose_value: t.field({"required":false,"type":IntNullableFilter}),
  trend: t.field({"required":false,"type":StringNullableFilter}),
  trend_rate: t.field({"required":false,"type":FloatNullableFilter}),
  transmitter_id: t.field({"required":false,"type":StringNullableFilter}),
  transmitter_generation: t.field({"required":false,"type":StringFilter}),
  display_device: t.field({"required":false,"type":StringFilter}),
  profile_id: t.field({"required":false,"type":UuidFilter}),
  created_at: t.field({"required":false,"type":DateTimeFilter}),
  updatedAt: t.field({"required":false,"type":DateTimeNullableFilter}),
  transmitter_ticks: t.field({"required":false,"type":IntFilter}),
  status: t.field({"required":false,"type":StringNullableFilter}),
  unit: t.field({"required":false,"type":StringFilter}),
  rate_unit: t.field({"required":false,"type":StringFilter}),
  hyper_profile: t.field({"required":false,"type":hyper_profileWhereInput}),
});
export const hyper_cgm_dataWhereInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.hyper_cgm_dataWhereInput>, false>('hyper_cgm_dataWhereInput').implement({
  fields: hyper_cgm_dataWhereInputFields,
});

export const hyper_cgm_dataOrderByWithRelationInputFields = (t: any) => ({
  id: t.field({"required":false,"type":SortOrder}),
  dexcom_user_id: t.field({"required":false,"type":SortOrder}),
  record_id: t.field({"required":false,"type":SortOrder}),
  system_time: t.field({"required":false,"type":SortOrder}),
  display_time: t.field({"required":false,"type":SortOrder}),
  glucose_value: t.field({"required":false,"type":SortOrder}),
  trend: t.field({"required":false,"type":SortOrder}),
  trend_rate: t.field({"required":false,"type":SortOrder}),
  transmitter_id: t.field({"required":false,"type":SortOrder}),
  transmitter_generation: t.field({"required":false,"type":SortOrder}),
  display_device: t.field({"required":false,"type":SortOrder}),
  profile_id: t.field({"required":false,"type":SortOrder}),
  created_at: t.field({"required":false,"type":SortOrder}),
  updatedAt: t.field({"required":false,"type":SortOrder}),
  transmitter_ticks: t.field({"required":false,"type":SortOrder}),
  status: t.field({"required":false,"type":SortOrder}),
  unit: t.field({"required":false,"type":SortOrder}),
  rate_unit: t.field({"required":false,"type":SortOrder}),
  hyper_profile: t.field({"required":false,"type":hyper_profileOrderByWithRelationInput}),
});
export const hyper_cgm_dataOrderByWithRelationInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.hyper_cgm_dataOrderByWithRelationInput>, false>('hyper_cgm_dataOrderByWithRelationInput').implement({
  fields: hyper_cgm_dataOrderByWithRelationInputFields,
});

export const hyper_cgm_dataWhereUniqueInputFields = (t: any) => ({
  id: t.string({"required":false}),
  record_id: t.string({"required":false}),
  AND: t.field({"required":false,"type":[hyper_cgm_dataWhereInput]}),
  OR: t.field({"required":false,"type":[hyper_cgm_dataWhereInput]}),
  NOT: t.field({"required":false,"type":[hyper_cgm_dataWhereInput]}),
  dexcom_user_id: t.field({"required":false,"type":StringFilter}),
  system_time: t.field({"required":false,"type":DateTimeFilter}),
  display_time: t.field({"required":false,"type":DateTimeFilter}),
  glucose_value: t.field({"required":false,"type":IntNullableFilter}),
  trend: t.field({"required":false,"type":StringNullableFilter}),
  trend_rate: t.field({"required":false,"type":FloatNullableFilter}),
  transmitter_id: t.field({"required":false,"type":StringNullableFilter}),
  transmitter_generation: t.field({"required":false,"type":StringFilter}),
  display_device: t.field({"required":false,"type":StringFilter}),
  profile_id: t.field({"required":false,"type":UuidFilter}),
  created_at: t.field({"required":false,"type":DateTimeFilter}),
  updatedAt: t.field({"required":false,"type":DateTimeNullableFilter}),
  transmitter_ticks: t.field({"required":false,"type":IntFilter}),
  status: t.field({"required":false,"type":StringNullableFilter}),
  unit: t.field({"required":false,"type":StringFilter}),
  rate_unit: t.field({"required":false,"type":StringFilter}),
  hyper_profile: t.field({"required":false,"type":hyper_profileWhereInput}),
});
export const hyper_cgm_dataWhereUniqueInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.hyper_cgm_dataWhereUniqueInput>, false>('hyper_cgm_dataWhereUniqueInput').implement({
  fields: hyper_cgm_dataWhereUniqueInputFields,
});

export const hyper_daily_recapWhereInputFields = (t: any) => ({
  AND: t.field({"required":false,"type":[hyper_daily_recapWhereInput]}),
  OR: t.field({"required":false,"type":[hyper_daily_recapWhereInput]}),
  NOT: t.field({"required":false,"type":[hyper_daily_recapWhereInput]}),
  id: t.field({"required":false,"type":UuidFilter}),
  date: t.field({"required":false,"type":DateTimeFilter}),
  average_glucose: t.field({"required":false,"type":IntNullableFilter}),
  minimum_glucose: t.field({"required":false,"type":IntNullableFilter}),
  maximum_glucose: t.field({"required":false,"type":IntNullableFilter}),
  glucose_variability: t.field({"required":false,"type":DecimalNullableFilter}),
  time_in_ranges: t.field({"required":false,"type":JsonNullableFilter}),
  total_readings: t.field({"required":false,"type":IntNullableFilter}),
  profile_id: t.field({"required":false,"type":UuidFilter}),
  created_at: t.field({"required":false,"type":DateTimeFilter}),
  updatedAt: t.field({"required":false,"type":DateTimeNullableFilter}),
  timezone: t.field({"required":false,"type":StringFilter}),
  hyper_profile: t.field({"required":false,"type":hyper_profileWhereInput}),
});
export const hyper_daily_recapWhereInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.hyper_daily_recapWhereInput>, false>('hyper_daily_recapWhereInput').implement({
  fields: hyper_daily_recapWhereInputFields,
});

export const hyper_daily_recapOrderByWithRelationInputFields = (t: any) => ({
  id: t.field({"required":false,"type":SortOrder}),
  date: t.field({"required":false,"type":SortOrder}),
  average_glucose: t.field({"required":false,"type":SortOrder}),
  minimum_glucose: t.field({"required":false,"type":SortOrder}),
  maximum_glucose: t.field({"required":false,"type":SortOrder}),
  glucose_variability: t.field({"required":false,"type":SortOrder}),
  time_in_ranges: t.field({"required":false,"type":SortOrder}),
  total_readings: t.field({"required":false,"type":SortOrder}),
  profile_id: t.field({"required":false,"type":SortOrder}),
  created_at: t.field({"required":false,"type":SortOrder}),
  updatedAt: t.field({"required":false,"type":SortOrder}),
  timezone: t.field({"required":false,"type":SortOrder}),
  hyper_profile: t.field({"required":false,"type":hyper_profileOrderByWithRelationInput}),
});
export const hyper_daily_recapOrderByWithRelationInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.hyper_daily_recapOrderByWithRelationInput>, false>('hyper_daily_recapOrderByWithRelationInput').implement({
  fields: hyper_daily_recapOrderByWithRelationInputFields,
});

export const hyper_daily_recapWhereUniqueInputFields = (t: any) => ({
  id: t.string({"required":false}),
  profile_id_date: t.field({"required":false,"type":hyper_daily_recapProfile_idDateCompoundUniqueInput}),
  date_profile_id: t.field({"required":false,"type":hyper_daily_recapDateProfile_idCompoundUniqueInput}),
  AND: t.field({"required":false,"type":[hyper_daily_recapWhereInput]}),
  OR: t.field({"required":false,"type":[hyper_daily_recapWhereInput]}),
  NOT: t.field({"required":false,"type":[hyper_daily_recapWhereInput]}),
  date: t.field({"required":false,"type":DateTimeFilter}),
  average_glucose: t.field({"required":false,"type":IntNullableFilter}),
  minimum_glucose: t.field({"required":false,"type":IntNullableFilter}),
  maximum_glucose: t.field({"required":false,"type":IntNullableFilter}),
  glucose_variability: t.field({"required":false,"type":DecimalNullableFilter}),
  time_in_ranges: t.field({"required":false,"type":JsonNullableFilter}),
  total_readings: t.field({"required":false,"type":IntNullableFilter}),
  profile_id: t.field({"required":false,"type":UuidFilter}),
  created_at: t.field({"required":false,"type":DateTimeFilter}),
  updatedAt: t.field({"required":false,"type":DateTimeNullableFilter}),
  timezone: t.field({"required":false,"type":StringFilter}),
  hyper_profile: t.field({"required":false,"type":hyper_profileWhereInput}),
});
export const hyper_daily_recapWhereUniqueInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.hyper_daily_recapWhereUniqueInput>, false>('hyper_daily_recapWhereUniqueInput').implement({
  fields: hyper_daily_recapWhereUniqueInputFields,
});

export const hyper_mealWhereInputFields = (t: any) => ({
  AND: t.field({"required":false,"type":[hyper_mealWhereInput]}),
  OR: t.field({"required":false,"type":[hyper_mealWhereInput]}),
  NOT: t.field({"required":false,"type":[hyper_mealWhereInput]}),
  id: t.field({"required":false,"type":UuidFilter}),
  meal_time: t.field({"required":false,"type":DateTimeFilter}),
  carbohydrates: t.field({"required":false,"type":FloatNullableFilter}),
  dietary_energy: t.field({"required":false,"type":FloatNullableFilter}),
  dietary_sugar: t.field({"required":false,"type":FloatNullableFilter}),
  fiber: t.field({"required":false,"type":FloatNullableFilter}),
  protein: t.field({"required":false,"type":FloatNullableFilter}),
  total_fat: t.field({"required":false,"type":FloatNullableFilter}),
  profile_id: t.field({"required":false,"type":UuidFilter}),
  created_at: t.field({"required":false,"type":DateTimeFilter}),
  updatedAt: t.field({"required":false,"type":DateTimeNullableFilter}),
  hyper_profile: t.field({"required":false,"type":hyper_profileWhereInput}),
});
export const hyper_mealWhereInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.hyper_mealWhereInput>, false>('hyper_mealWhereInput').implement({
  fields: hyper_mealWhereInputFields,
});

export const hyper_mealOrderByWithRelationInputFields = (t: any) => ({
  id: t.field({"required":false,"type":SortOrder}),
  meal_time: t.field({"required":false,"type":SortOrder}),
  carbohydrates: t.field({"required":false,"type":SortOrder}),
  dietary_energy: t.field({"required":false,"type":SortOrder}),
  dietary_sugar: t.field({"required":false,"type":SortOrder}),
  fiber: t.field({"required":false,"type":SortOrder}),
  protein: t.field({"required":false,"type":SortOrder}),
  total_fat: t.field({"required":false,"type":SortOrder}),
  profile_id: t.field({"required":false,"type":SortOrder}),
  created_at: t.field({"required":false,"type":SortOrder}),
  updatedAt: t.field({"required":false,"type":SortOrder}),
  hyper_profile: t.field({"required":false,"type":hyper_profileOrderByWithRelationInput}),
});
export const hyper_mealOrderByWithRelationInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.hyper_mealOrderByWithRelationInput>, false>('hyper_mealOrderByWithRelationInput').implement({
  fields: hyper_mealOrderByWithRelationInputFields,
});

export const hyper_mealWhereUniqueInputFields = (t: any) => ({
  id: t.string({"required":false}),
  AND: t.field({"required":false,"type":[hyper_mealWhereInput]}),
  OR: t.field({"required":false,"type":[hyper_mealWhereInput]}),
  NOT: t.field({"required":false,"type":[hyper_mealWhereInput]}),
  meal_time: t.field({"required":false,"type":DateTimeFilter}),
  carbohydrates: t.field({"required":false,"type":FloatNullableFilter}),
  dietary_energy: t.field({"required":false,"type":FloatNullableFilter}),
  dietary_sugar: t.field({"required":false,"type":FloatNullableFilter}),
  fiber: t.field({"required":false,"type":FloatNullableFilter}),
  protein: t.field({"required":false,"type":FloatNullableFilter}),
  total_fat: t.field({"required":false,"type":FloatNullableFilter}),
  profile_id: t.field({"required":false,"type":UuidFilter}),
  created_at: t.field({"required":false,"type":DateTimeFilter}),
  updatedAt: t.field({"required":false,"type":DateTimeNullableFilter}),
  hyper_profile: t.field({"required":false,"type":hyper_profileWhereInput}),
});
export const hyper_mealWhereUniqueInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.hyper_mealWhereUniqueInput>, false>('hyper_mealWhereUniqueInput').implement({
  fields: hyper_mealWhereUniqueInputFields,
});

export const hyper_profileWhereInputFields = (t: any) => ({
  AND: t.field({"required":false,"type":[hyper_profileWhereInput]}),
  OR: t.field({"required":false,"type":[hyper_profileWhereInput]}),
  NOT: t.field({"required":false,"type":[hyper_profileWhereInput]}),
  id: t.field({"required":false,"type":UuidFilter}),
  name: t.field({"required":false,"type":StringFilter}),
  image: t.field({"required":false,"type":StringNullableFilter}),
  email: t.field({"required":false,"type":StringNullableFilter}),
  last_synced_time: t.field({"required":false,"type":DateTimeNullableFilter}),
  diabetes_status: t.field({"required":false,"type":Enumdiabetes_statusFilter}),
  glucose_range_type: t.field({"required":false,"type":Enumglucose_range_typeFilter}),
  hyper_activity: t.field({"required":false,"type":Hyper_activityListRelationFilter}),
  hyper_cgm_data: t.field({"required":false,"type":Hyper_cgm_dataListRelationFilter}),
  hyper_daily_recap: t.field({"required":false,"type":Hyper_daily_recapListRelationFilter}),
  hyper_meal: t.field({"required":false,"type":Hyper_mealListRelationFilter}),
  users: t.field({"required":false,"type":usersWhereInput}),
  hyper_report: t.field({"required":false,"type":Hyper_reportListRelationFilter}),
});
export const hyper_profileWhereInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.hyper_profileWhereInput>, false>('hyper_profileWhereInput').implement({
  fields: hyper_profileWhereInputFields,
});

export const hyper_profileOrderByWithRelationInputFields = (t: any) => ({
  id: t.field({"required":false,"type":SortOrder}),
  name: t.field({"required":false,"type":SortOrder}),
  image: t.field({"required":false,"type":SortOrder}),
  email: t.field({"required":false,"type":SortOrder}),
  last_synced_time: t.field({"required":false,"type":SortOrder}),
  diabetes_status: t.field({"required":false,"type":SortOrder}),
  glucose_range_type: t.field({"required":false,"type":SortOrder}),
  hyper_activity: t.field({"required":false,"type":hyper_activityOrderByRelationAggregateInput}),
  hyper_cgm_data: t.field({"required":false,"type":hyper_cgm_dataOrderByRelationAggregateInput}),
  hyper_daily_recap: t.field({"required":false,"type":hyper_daily_recapOrderByRelationAggregateInput}),
  hyper_meal: t.field({"required":false,"type":hyper_mealOrderByRelationAggregateInput}),
  users: t.field({"required":false,"type":usersOrderByWithRelationInput}),
  hyper_report: t.field({"required":false,"type":hyper_reportOrderByRelationAggregateInput}),
});
export const hyper_profileOrderByWithRelationInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.hyper_profileOrderByWithRelationInput>, false>('hyper_profileOrderByWithRelationInput').implement({
  fields: hyper_profileOrderByWithRelationInputFields,
});

export const hyper_profileWhereUniqueInputFields = (t: any) => ({
  id: t.string({"required":false}),
  email: t.string({"required":false}),
  AND: t.field({"required":false,"type":[hyper_profileWhereInput]}),
  OR: t.field({"required":false,"type":[hyper_profileWhereInput]}),
  NOT: t.field({"required":false,"type":[hyper_profileWhereInput]}),
  name: t.field({"required":false,"type":StringFilter}),
  image: t.field({"required":false,"type":StringNullableFilter}),
  last_synced_time: t.field({"required":false,"type":DateTimeNullableFilter}),
  diabetes_status: t.field({"required":false,"type":Enumdiabetes_statusFilter}),
  glucose_range_type: t.field({"required":false,"type":Enumglucose_range_typeFilter}),
  hyper_activity: t.field({"required":false,"type":Hyper_activityListRelationFilter}),
  hyper_cgm_data: t.field({"required":false,"type":Hyper_cgm_dataListRelationFilter}),
  hyper_daily_recap: t.field({"required":false,"type":Hyper_daily_recapListRelationFilter}),
  hyper_meal: t.field({"required":false,"type":Hyper_mealListRelationFilter}),
  users: t.field({"required":false,"type":usersWhereInput}),
  hyper_report: t.field({"required":false,"type":Hyper_reportListRelationFilter}),
});
export const hyper_profileWhereUniqueInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.hyper_profileWhereUniqueInput>, false>('hyper_profileWhereUniqueInput').implement({
  fields: hyper_profileWhereUniqueInputFields,
});

export const hyper_reportWhereInputFields = (t: any) => ({
  AND: t.field({"required":false,"type":[hyper_reportWhereInput]}),
  OR: t.field({"required":false,"type":[hyper_reportWhereInput]}),
  NOT: t.field({"required":false,"type":[hyper_reportWhereInput]}),
  id: t.field({"required":false,"type":UuidFilter}),
  title: t.field({"required":false,"type":StringFilter}),
  content: t.field({"required":false,"type":StringNullableFilter}),
  profile_id: t.field({"required":false,"type":UuidFilter}),
  created_at: t.field({"required":false,"type":DateTimeFilter}),
  updatedAt: t.field({"required":false,"type":DateTimeNullableFilter}),
  hyper_profile: t.field({"required":false,"type":hyper_profileWhereInput}),
});
export const hyper_reportWhereInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.hyper_reportWhereInput>, false>('hyper_reportWhereInput').implement({
  fields: hyper_reportWhereInputFields,
});

export const hyper_reportOrderByWithRelationInputFields = (t: any) => ({
  id: t.field({"required":false,"type":SortOrder}),
  title: t.field({"required":false,"type":SortOrder}),
  content: t.field({"required":false,"type":SortOrder}),
  profile_id: t.field({"required":false,"type":SortOrder}),
  created_at: t.field({"required":false,"type":SortOrder}),
  updatedAt: t.field({"required":false,"type":SortOrder}),
  hyper_profile: t.field({"required":false,"type":hyper_profileOrderByWithRelationInput}),
});
export const hyper_reportOrderByWithRelationInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.hyper_reportOrderByWithRelationInput>, false>('hyper_reportOrderByWithRelationInput').implement({
  fields: hyper_reportOrderByWithRelationInputFields,
});

export const hyper_reportWhereUniqueInputFields = (t: any) => ({
  id: t.string({"required":false}),
  AND: t.field({"required":false,"type":[hyper_reportWhereInput]}),
  OR: t.field({"required":false,"type":[hyper_reportWhereInput]}),
  NOT: t.field({"required":false,"type":[hyper_reportWhereInput]}),
  title: t.field({"required":false,"type":StringFilter}),
  content: t.field({"required":false,"type":StringNullableFilter}),
  profile_id: t.field({"required":false,"type":UuidFilter}),
  created_at: t.field({"required":false,"type":DateTimeFilter}),
  updatedAt: t.field({"required":false,"type":DateTimeNullableFilter}),
  hyper_profile: t.field({"required":false,"type":hyper_profileWhereInput}),
});
export const hyper_reportWhereUniqueInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.hyper_reportWhereUniqueInput>, false>('hyper_reportWhereUniqueInput').implement({
  fields: hyper_reportWhereUniqueInputFields,
});

export const usersCreateInputFields = (t: any) => ({
  id: t.string({"required":true}),
  hyper_profile: t.field({"required":false,"type":hyper_profileCreateNestedOneWithoutUsersInput}),
});
export const usersCreateInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.usersUncheckedCreateInput>, false>('usersCreateInput').implement({
  fields: usersCreateInputFields,
});

export const usersUpdateInputFields = (t: any) => ({
  id: t.field({"required":false,"type":StringFieldUpdateOperationsInput}),
  hyper_profile: t.field({"required":false,"type":hyper_profileUpdateOneWithoutUsersNestedInput}),
});
export const usersUpdateInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.usersUncheckedUpdateInput>, false>('usersUpdateInput').implement({
  fields: usersUpdateInputFields,
});

export const usersUpdateManyMutationInputFields = (t: any) => ({
  id: t.field({"required":false,"type":StringFieldUpdateOperationsInput}),
});
export const usersUpdateManyMutationInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.usersUpdateManyMutationInput>, false>('usersUpdateManyMutationInput').implement({
  fields: usersUpdateManyMutationInputFields,
});

export const hyper_activityUpdateInputFields = (t: any) => ({
  id: t.field({"required":false,"type":StringFieldUpdateOperationsInput}),
  activity_type_id: t.field({"required":false,"type":StringFieldUpdateOperationsInput}),
  profile_id: t.field({"required":false,"type":StringFieldUpdateOperationsInput}),
  created_at: t.field({"required":false,"type":DateTimeFieldUpdateOperationsInput}),
  updatedAt: t.field({"required":false,"type":NullableDateTimeFieldUpdateOperationsInput}),
});
export const hyper_activityUpdateInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.hyper_activityUncheckedUpdateInput>, false>('hyper_activityUpdateInput').implement({
  fields: hyper_activityUpdateInputFields,
});

export const hyper_activityUpdateManyMutationInputFields = (t: any) => ({
  id: t.field({"required":false,"type":StringFieldUpdateOperationsInput}),
  created_at: t.field({"required":false,"type":DateTimeFieldUpdateOperationsInput}),
  updatedAt: t.field({"required":false,"type":NullableDateTimeFieldUpdateOperationsInput}),
});
export const hyper_activityUpdateManyMutationInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.hyper_activityUpdateManyMutationInput>, false>('hyper_activityUpdateManyMutationInput').implement({
  fields: hyper_activityUpdateManyMutationInputFields,
});

export const hyper_activity_typeCreateInputFields = (t: any) => ({
  id: t.string({"required":false}),
  name: t.string({"required":true}),
  hyper_activity: t.field({"required":false,"type":hyper_activityCreateNestedManyWithoutHyper_activity_typeInput}),
});
export const hyper_activity_typeCreateInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.hyper_activity_typeUncheckedCreateInput>, false>('hyper_activity_typeCreateInput').implement({
  fields: hyper_activity_typeCreateInputFields,
});

export const hyper_activity_typeUpdateInputFields = (t: any) => ({
  id: t.field({"required":false,"type":StringFieldUpdateOperationsInput}),
  name: t.field({"required":false,"type":StringFieldUpdateOperationsInput}),
  hyper_activity: t.field({"required":false,"type":hyper_activityUpdateManyWithoutHyper_activity_typeNestedInput}),
});
export const hyper_activity_typeUpdateInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.hyper_activity_typeUncheckedUpdateInput>, false>('hyper_activity_typeUpdateInput').implement({
  fields: hyper_activity_typeUpdateInputFields,
});

export const hyper_activity_typeUpdateManyMutationInputFields = (t: any) => ({
  id: t.field({"required":false,"type":StringFieldUpdateOperationsInput}),
  name: t.field({"required":false,"type":StringFieldUpdateOperationsInput}),
});
export const hyper_activity_typeUpdateManyMutationInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.hyper_activity_typeUpdateManyMutationInput>, false>('hyper_activity_typeUpdateManyMutationInput').implement({
  fields: hyper_activity_typeUpdateManyMutationInputFields,
});

export const hyper_cgm_dataCreateInputFields = (t: any) => ({
  id: t.string({"required":false}),
  dexcom_user_id: t.string({"required":true}),
  record_id: t.string({"required":true}),
  system_time: t.field({"required":true,"type":DateTime}),
  display_time: t.field({"required":true,"type":DateTime}),
  glucose_value: t.int({"required":false}),
  trend: t.string({"required":false}),
  trend_rate: t.float({"required":false}),
  transmitter_id: t.string({"required":false}),
  transmitter_generation: t.string({"required":true}),
  display_device: t.string({"required":true}),
  profile_id: t.string({"required":true}),
  created_at: t.field({"required":false,"type":DateTime}),
  updatedAt: t.field({"required":false,"type":DateTime}),
  transmitter_ticks: t.int({"required":true}),
  status: t.string({"required":false}),
  unit: t.string({"required":true}),
  rate_unit: t.string({"required":true}),
});
export const hyper_cgm_dataCreateInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.hyper_cgm_dataUncheckedCreateInput>, false>('hyper_cgm_dataCreateInput').implement({
  fields: hyper_cgm_dataCreateInputFields,
});

export const hyper_cgm_dataUpdateInputFields = (t: any) => ({
  id: t.field({"required":false,"type":StringFieldUpdateOperationsInput}),
  dexcom_user_id: t.field({"required":false,"type":StringFieldUpdateOperationsInput}),
  record_id: t.field({"required":false,"type":StringFieldUpdateOperationsInput}),
  system_time: t.field({"required":false,"type":DateTimeFieldUpdateOperationsInput}),
  display_time: t.field({"required":false,"type":DateTimeFieldUpdateOperationsInput}),
  glucose_value: t.field({"required":false,"type":NullableIntFieldUpdateOperationsInput}),
  trend: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  trend_rate: t.field({"required":false,"type":NullableFloatFieldUpdateOperationsInput}),
  transmitter_id: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  transmitter_generation: t.field({"required":false,"type":StringFieldUpdateOperationsInput}),
  display_device: t.field({"required":false,"type":StringFieldUpdateOperationsInput}),
  profile_id: t.field({"required":false,"type":StringFieldUpdateOperationsInput}),
  created_at: t.field({"required":false,"type":DateTimeFieldUpdateOperationsInput}),
  updatedAt: t.field({"required":false,"type":NullableDateTimeFieldUpdateOperationsInput}),
  transmitter_ticks: t.field({"required":false,"type":IntFieldUpdateOperationsInput}),
  status: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  unit: t.field({"required":false,"type":StringFieldUpdateOperationsInput}),
  rate_unit: t.field({"required":false,"type":StringFieldUpdateOperationsInput}),
});
export const hyper_cgm_dataUpdateInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.hyper_cgm_dataUncheckedUpdateInput>, false>('hyper_cgm_dataUpdateInput').implement({
  fields: hyper_cgm_dataUpdateInputFields,
});

export const hyper_cgm_dataUpdateManyMutationInputFields = (t: any) => ({
  id: t.field({"required":false,"type":StringFieldUpdateOperationsInput}),
  dexcom_user_id: t.field({"required":false,"type":StringFieldUpdateOperationsInput}),
  record_id: t.field({"required":false,"type":StringFieldUpdateOperationsInput}),
  system_time: t.field({"required":false,"type":DateTimeFieldUpdateOperationsInput}),
  display_time: t.field({"required":false,"type":DateTimeFieldUpdateOperationsInput}),
  glucose_value: t.field({"required":false,"type":NullableIntFieldUpdateOperationsInput}),
  trend: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  trend_rate: t.field({"required":false,"type":NullableFloatFieldUpdateOperationsInput}),
  transmitter_id: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  transmitter_generation: t.field({"required":false,"type":StringFieldUpdateOperationsInput}),
  display_device: t.field({"required":false,"type":StringFieldUpdateOperationsInput}),
  created_at: t.field({"required":false,"type":DateTimeFieldUpdateOperationsInput}),
  updatedAt: t.field({"required":false,"type":NullableDateTimeFieldUpdateOperationsInput}),
  transmitter_ticks: t.field({"required":false,"type":IntFieldUpdateOperationsInput}),
  status: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  unit: t.field({"required":false,"type":StringFieldUpdateOperationsInput}),
  rate_unit: t.field({"required":false,"type":StringFieldUpdateOperationsInput}),
});
export const hyper_cgm_dataUpdateManyMutationInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.hyper_cgm_dataUpdateManyMutationInput>, false>('hyper_cgm_dataUpdateManyMutationInput').implement({
  fields: hyper_cgm_dataUpdateManyMutationInputFields,
});

export const hyper_daily_recapCreateInputFields = (t: any) => ({
  id: t.string({"required":false}),
  date: t.field({"required":true,"type":DateTime}),
  average_glucose: t.int({"required":false}),
  minimum_glucose: t.int({"required":false}),
  maximum_glucose: t.int({"required":false}),
  glucose_variability: t.field({"required":false,"type":Decimal}),
  time_in_ranges: t.field({"required":false,"type":Json}),
  total_readings: t.int({"required":false}),
  profile_id: t.string({"required":true}),
  created_at: t.field({"required":false,"type":DateTime}),
  updatedAt: t.field({"required":false,"type":DateTime}),
  timezone: t.string({"required":true}),
});
export const hyper_daily_recapCreateInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.hyper_daily_recapUncheckedCreateInput>, false>('hyper_daily_recapCreateInput').implement({
  fields: hyper_daily_recapCreateInputFields,
});

export const hyper_daily_recapUpdateInputFields = (t: any) => ({
  id: t.field({"required":false,"type":StringFieldUpdateOperationsInput}),
  date: t.field({"required":false,"type":DateTimeFieldUpdateOperationsInput}),
  average_glucose: t.field({"required":false,"type":NullableIntFieldUpdateOperationsInput}),
  minimum_glucose: t.field({"required":false,"type":NullableIntFieldUpdateOperationsInput}),
  maximum_glucose: t.field({"required":false,"type":NullableIntFieldUpdateOperationsInput}),
  glucose_variability: t.field({"required":false,"type":NullableDecimalFieldUpdateOperationsInput}),
  time_in_ranges: t.field({"required":false,"type":Json}),
  total_readings: t.field({"required":false,"type":NullableIntFieldUpdateOperationsInput}),
  profile_id: t.field({"required":false,"type":StringFieldUpdateOperationsInput}),
  created_at: t.field({"required":false,"type":DateTimeFieldUpdateOperationsInput}),
  updatedAt: t.field({"required":false,"type":NullableDateTimeFieldUpdateOperationsInput}),
  timezone: t.field({"required":false,"type":StringFieldUpdateOperationsInput}),
});
export const hyper_daily_recapUpdateInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.hyper_daily_recapUncheckedUpdateInput>, false>('hyper_daily_recapUpdateInput').implement({
  fields: hyper_daily_recapUpdateInputFields,
});

export const hyper_daily_recapUpdateManyMutationInputFields = (t: any) => ({
  id: t.field({"required":false,"type":StringFieldUpdateOperationsInput}),
  date: t.field({"required":false,"type":DateTimeFieldUpdateOperationsInput}),
  average_glucose: t.field({"required":false,"type":NullableIntFieldUpdateOperationsInput}),
  minimum_glucose: t.field({"required":false,"type":NullableIntFieldUpdateOperationsInput}),
  maximum_glucose: t.field({"required":false,"type":NullableIntFieldUpdateOperationsInput}),
  glucose_variability: t.field({"required":false,"type":NullableDecimalFieldUpdateOperationsInput}),
  time_in_ranges: t.field({"required":false,"type":Json}),
  total_readings: t.field({"required":false,"type":NullableIntFieldUpdateOperationsInput}),
  created_at: t.field({"required":false,"type":DateTimeFieldUpdateOperationsInput}),
  updatedAt: t.field({"required":false,"type":NullableDateTimeFieldUpdateOperationsInput}),
  timezone: t.field({"required":false,"type":StringFieldUpdateOperationsInput}),
});
export const hyper_daily_recapUpdateManyMutationInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.hyper_daily_recapUpdateManyMutationInput>, false>('hyper_daily_recapUpdateManyMutationInput').implement({
  fields: hyper_daily_recapUpdateManyMutationInputFields,
});

export const hyper_mealCreateInputFields = (t: any) => ({
  id: t.string({"required":false}),
  meal_time: t.field({"required":false,"type":DateTime}),
  carbohydrates: t.float({"required":false}),
  dietary_energy: t.float({"required":false}),
  dietary_sugar: t.float({"required":false}),
  fiber: t.float({"required":false}),
  protein: t.float({"required":false}),
  total_fat: t.float({"required":false}),
  profile_id: t.string({"required":true}),
  created_at: t.field({"required":false,"type":DateTime}),
  updatedAt: t.field({"required":false,"type":DateTime}),
});
export const hyper_mealCreateInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.hyper_mealUncheckedCreateInput>, false>('hyper_mealCreateInput').implement({
  fields: hyper_mealCreateInputFields,
});

export const hyper_mealUpdateInputFields = (t: any) => ({
  id: t.field({"required":false,"type":StringFieldUpdateOperationsInput}),
  meal_time: t.field({"required":false,"type":DateTimeFieldUpdateOperationsInput}),
  carbohydrates: t.field({"required":false,"type":NullableFloatFieldUpdateOperationsInput}),
  dietary_energy: t.field({"required":false,"type":NullableFloatFieldUpdateOperationsInput}),
  dietary_sugar: t.field({"required":false,"type":NullableFloatFieldUpdateOperationsInput}),
  fiber: t.field({"required":false,"type":NullableFloatFieldUpdateOperationsInput}),
  protein: t.field({"required":false,"type":NullableFloatFieldUpdateOperationsInput}),
  total_fat: t.field({"required":false,"type":NullableFloatFieldUpdateOperationsInput}),
  profile_id: t.field({"required":false,"type":StringFieldUpdateOperationsInput}),
  created_at: t.field({"required":false,"type":DateTimeFieldUpdateOperationsInput}),
  updatedAt: t.field({"required":false,"type":NullableDateTimeFieldUpdateOperationsInput}),
});
export const hyper_mealUpdateInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.hyper_mealUncheckedUpdateInput>, false>('hyper_mealUpdateInput').implement({
  fields: hyper_mealUpdateInputFields,
});

export const hyper_mealUpdateManyMutationInputFields = (t: any) => ({
  id: t.field({"required":false,"type":StringFieldUpdateOperationsInput}),
  meal_time: t.field({"required":false,"type":DateTimeFieldUpdateOperationsInput}),
  carbohydrates: t.field({"required":false,"type":NullableFloatFieldUpdateOperationsInput}),
  dietary_energy: t.field({"required":false,"type":NullableFloatFieldUpdateOperationsInput}),
  dietary_sugar: t.field({"required":false,"type":NullableFloatFieldUpdateOperationsInput}),
  fiber: t.field({"required":false,"type":NullableFloatFieldUpdateOperationsInput}),
  protein: t.field({"required":false,"type":NullableFloatFieldUpdateOperationsInput}),
  total_fat: t.field({"required":false,"type":NullableFloatFieldUpdateOperationsInput}),
  created_at: t.field({"required":false,"type":DateTimeFieldUpdateOperationsInput}),
  updatedAt: t.field({"required":false,"type":NullableDateTimeFieldUpdateOperationsInput}),
});
export const hyper_mealUpdateManyMutationInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.hyper_mealUpdateManyMutationInput>, false>('hyper_mealUpdateManyMutationInput').implement({
  fields: hyper_mealUpdateManyMutationInputFields,
});

export const hyper_profileCreateInputFields = (t: any) => ({
  id: t.string({"required":true}),
  name: t.string({"required":true}),
  image: t.string({"required":false}),
  email: t.string({"required":false}),
  last_synced_time: t.field({"required":false,"type":DateTime}),
  diabetes_status: t.field({"required":false,"type":diabetes_status}),
  glucose_range_type: t.field({"required":false,"type":glucose_range_type}),
  hyper_activity: t.field({"required":false,"type":hyper_activityCreateNestedManyWithoutHyper_profileInput}),
  hyper_cgm_data: t.field({"required":false,"type":hyper_cgm_dataCreateNestedManyWithoutHyper_profileInput}),
  hyper_daily_recap: t.field({"required":false,"type":hyper_daily_recapCreateNestedManyWithoutHyper_profileInput}),
  hyper_meal: t.field({"required":false,"type":hyper_mealCreateNestedManyWithoutHyper_profileInput}),
  hyper_report: t.field({"required":false,"type":hyper_reportCreateNestedManyWithoutHyper_profileInput}),
});
export const hyper_profileCreateInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.hyper_profileUncheckedCreateInput>, false>('hyper_profileCreateInput').implement({
  fields: hyper_profileCreateInputFields,
});

export const hyper_profileUpdateInputFields = (t: any) => ({
  id: t.field({"required":false,"type":StringFieldUpdateOperationsInput}),
  name: t.field({"required":false,"type":StringFieldUpdateOperationsInput}),
  image: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  email: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  last_synced_time: t.field({"required":false,"type":NullableDateTimeFieldUpdateOperationsInput}),
  diabetes_status: t.field({"required":false,"type":Enumdiabetes_statusFieldUpdateOperationsInput}),
  glucose_range_type: t.field({"required":false,"type":Enumglucose_range_typeFieldUpdateOperationsInput}),
  hyper_activity: t.field({"required":false,"type":hyper_activityUpdateManyWithoutHyper_profileNestedInput}),
  hyper_cgm_data: t.field({"required":false,"type":hyper_cgm_dataUpdateManyWithoutHyper_profileNestedInput}),
  hyper_daily_recap: t.field({"required":false,"type":hyper_daily_recapUpdateManyWithoutHyper_profileNestedInput}),
  hyper_meal: t.field({"required":false,"type":hyper_mealUpdateManyWithoutHyper_profileNestedInput}),
  hyper_report: t.field({"required":false,"type":hyper_reportUpdateManyWithoutHyper_profileNestedInput}),
});
export const hyper_profileUpdateInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.hyper_profileUncheckedUpdateInput>, false>('hyper_profileUpdateInput').implement({
  fields: hyper_profileUpdateInputFields,
});

export const hyper_profileUpdateManyMutationInputFields = (t: any) => ({
  name: t.field({"required":false,"type":StringFieldUpdateOperationsInput}),
  image: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  email: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  last_synced_time: t.field({"required":false,"type":NullableDateTimeFieldUpdateOperationsInput}),
  diabetes_status: t.field({"required":false,"type":Enumdiabetes_statusFieldUpdateOperationsInput}),
  glucose_range_type: t.field({"required":false,"type":Enumglucose_range_typeFieldUpdateOperationsInput}),
});
export const hyper_profileUpdateManyMutationInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.hyper_profileUpdateManyMutationInput>, false>('hyper_profileUpdateManyMutationInput').implement({
  fields: hyper_profileUpdateManyMutationInputFields,
});

export const hyper_reportCreateInputFields = (t: any) => ({
  id: t.string({"required":false}),
  title: t.string({"required":true}),
  content: t.string({"required":false}),
  profile_id: t.string({"required":true}),
  created_at: t.field({"required":false,"type":DateTime}),
  updatedAt: t.field({"required":false,"type":DateTime}),
});
export const hyper_reportCreateInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.hyper_reportUncheckedCreateInput>, false>('hyper_reportCreateInput').implement({
  fields: hyper_reportCreateInputFields,
});

export const hyper_reportUpdateInputFields = (t: any) => ({
  id: t.field({"required":false,"type":StringFieldUpdateOperationsInput}),
  title: t.field({"required":false,"type":StringFieldUpdateOperationsInput}),
  content: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  profile_id: t.field({"required":false,"type":StringFieldUpdateOperationsInput}),
  created_at: t.field({"required":false,"type":DateTimeFieldUpdateOperationsInput}),
  updatedAt: t.field({"required":false,"type":NullableDateTimeFieldUpdateOperationsInput}),
});
export const hyper_reportUpdateInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.hyper_reportUncheckedUpdateInput>, false>('hyper_reportUpdateInput').implement({
  fields: hyper_reportUpdateInputFields,
});

export const hyper_reportUpdateManyMutationInputFields = (t: any) => ({
  id: t.field({"required":false,"type":StringFieldUpdateOperationsInput}),
  title: t.field({"required":false,"type":StringFieldUpdateOperationsInput}),
  content: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  created_at: t.field({"required":false,"type":DateTimeFieldUpdateOperationsInput}),
  updatedAt: t.field({"required":false,"type":NullableDateTimeFieldUpdateOperationsInput}),
});
export const hyper_reportUpdateManyMutationInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.hyper_reportUpdateManyMutationInput>, false>('hyper_reportUpdateManyMutationInput').implement({
  fields: hyper_reportUpdateManyMutationInputFields,
});

export const UuidFilterFields = (t: any) => ({
  equals: t.string({"required":false}),
  in: t.stringList({"required":false}),
  notIn: t.stringList({"required":false}),
  lt: t.string({"required":false}),
  lte: t.string({"required":false}),
  gt: t.string({"required":false}),
  gte: t.string({"required":false}),
  mode: t.field({"required":false,"type":QueryMode}),
  not: t.field({"required":false,"type":NestedUuidFilter}),
});
export const UuidFilter = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.UuidFilter>, false>('UuidFilter').implement({
  fields: UuidFilterFields,
});

export const Hyper_profileNullableRelationFilterFields = (t: any) => ({
  is: t.field({"required":false,"type":hyper_profileWhereInput}),
  isNot: t.field({"required":false,"type":hyper_profileWhereInput}),
});
export const Hyper_profileNullableRelationFilter = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.Hyper_profileNullableRelationFilter>, false>('Hyper_profileNullableRelationFilter').implement({
  fields: Hyper_profileNullableRelationFilterFields,
});

export const UuidWithAggregatesFilterFields = (t: any) => ({
  equals: t.string({"required":false}),
  in: t.stringList({"required":false}),
  notIn: t.stringList({"required":false}),
  lt: t.string({"required":false}),
  lte: t.string({"required":false}),
  gt: t.string({"required":false}),
  gte: t.string({"required":false}),
  mode: t.field({"required":false,"type":QueryMode}),
  not: t.field({"required":false,"type":NestedUuidWithAggregatesFilter}),
  _count: t.field({"required":false,"type":NestedIntFilter}),
  _min: t.field({"required":false,"type":NestedStringFilter}),
  _max: t.field({"required":false,"type":NestedStringFilter}),
});
export const UuidWithAggregatesFilter = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.UuidWithAggregatesFilter>, false>('UuidWithAggregatesFilter').implement({
  fields: UuidWithAggregatesFilterFields,
});

export const DateTimeFilterFields = (t: any) => ({
  equals: t.field({"required":false,"type":DateTime}),
  in: t.field({"required":false,"type":[DateTime]}),
  notIn: t.field({"required":false,"type":[DateTime]}),
  lt: t.field({"required":false,"type":DateTime}),
  lte: t.field({"required":false,"type":DateTime}),
  gt: t.field({"required":false,"type":DateTime}),
  gte: t.field({"required":false,"type":DateTime}),
  not: t.field({"required":false,"type":NestedDateTimeFilter}),
});
export const DateTimeFilter = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.DateTimeFilter>, false>('DateTimeFilter').implement({
  fields: DateTimeFilterFields,
});

export const DateTimeNullableFilterFields = (t: any) => ({
  equals: t.field({"required":false,"type":DateTime}),
  in: t.field({"required":false,"type":[DateTime]}),
  notIn: t.field({"required":false,"type":[DateTime]}),
  lt: t.field({"required":false,"type":DateTime}),
  lte: t.field({"required":false,"type":DateTime}),
  gt: t.field({"required":false,"type":DateTime}),
  gte: t.field({"required":false,"type":DateTime}),
  not: t.field({"required":false,"type":NestedDateTimeNullableFilter}),
});
export const DateTimeNullableFilter = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.DateTimeNullableFilter>, false>('DateTimeNullableFilter').implement({
  fields: DateTimeNullableFilterFields,
});

export const Hyper_activity_typeRelationFilterFields = (t: any) => ({
  is: t.field({"required":false,"type":hyper_activity_typeWhereInput}),
  isNot: t.field({"required":false,"type":hyper_activity_typeWhereInput}),
});
export const Hyper_activity_typeRelationFilter = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.Hyper_activity_typeRelationFilter>, false>('Hyper_activity_typeRelationFilter').implement({
  fields: Hyper_activity_typeRelationFilterFields,
});

export const Hyper_profileRelationFilterFields = (t: any) => ({
  is: t.field({"required":false,"type":hyper_profileWhereInput}),
  isNot: t.field({"required":false,"type":hyper_profileWhereInput}),
});
export const Hyper_profileRelationFilter = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.Hyper_profileRelationFilter>, false>('Hyper_profileRelationFilter').implement({
  fields: Hyper_profileRelationFilterFields,
});

export const DateTimeWithAggregatesFilterFields = (t: any) => ({
  equals: t.field({"required":false,"type":DateTime}),
  in: t.field({"required":false,"type":[DateTime]}),
  notIn: t.field({"required":false,"type":[DateTime]}),
  lt: t.field({"required":false,"type":DateTime}),
  lte: t.field({"required":false,"type":DateTime}),
  gt: t.field({"required":false,"type":DateTime}),
  gte: t.field({"required":false,"type":DateTime}),
  not: t.field({"required":false,"type":NestedDateTimeWithAggregatesFilter}),
  _count: t.field({"required":false,"type":NestedIntFilter}),
  _min: t.field({"required":false,"type":NestedDateTimeFilter}),
  _max: t.field({"required":false,"type":NestedDateTimeFilter}),
});
export const DateTimeWithAggregatesFilter = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.DateTimeWithAggregatesFilter>, false>('DateTimeWithAggregatesFilter').implement({
  fields: DateTimeWithAggregatesFilterFields,
});

export const DateTimeNullableWithAggregatesFilterFields = (t: any) => ({
  equals: t.field({"required":false,"type":DateTime}),
  in: t.field({"required":false,"type":[DateTime]}),
  notIn: t.field({"required":false,"type":[DateTime]}),
  lt: t.field({"required":false,"type":DateTime}),
  lte: t.field({"required":false,"type":DateTime}),
  gt: t.field({"required":false,"type":DateTime}),
  gte: t.field({"required":false,"type":DateTime}),
  not: t.field({"required":false,"type":NestedDateTimeNullableWithAggregatesFilter}),
  _count: t.field({"required":false,"type":NestedIntNullableFilter}),
  _min: t.field({"required":false,"type":NestedDateTimeNullableFilter}),
  _max: t.field({"required":false,"type":NestedDateTimeNullableFilter}),
});
export const DateTimeNullableWithAggregatesFilter = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.DateTimeNullableWithAggregatesFilter>, false>('DateTimeNullableWithAggregatesFilter').implement({
  fields: DateTimeNullableWithAggregatesFilterFields,
});

export const StringFilterFields = (t: any) => ({
  equals: t.string({"required":false}),
  in: t.stringList({"required":false}),
  notIn: t.stringList({"required":false}),
  lt: t.string({"required":false}),
  lte: t.string({"required":false}),
  gt: t.string({"required":false}),
  gte: t.string({"required":false}),
  contains: t.string({"required":false}),
  startsWith: t.string({"required":false}),
  endsWith: t.string({"required":false}),
  mode: t.field({"required":false,"type":QueryMode}),
  not: t.field({"required":false,"type":NestedStringFilter}),
});
export const StringFilter = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.StringFilter>, false>('StringFilter').implement({
  fields: StringFilterFields,
});

export const Hyper_activityListRelationFilterFields = (t: any) => ({
  every: t.field({"required":false,"type":hyper_activityWhereInput}),
  some: t.field({"required":false,"type":hyper_activityWhereInput}),
  none: t.field({"required":false,"type":hyper_activityWhereInput}),
});
export const Hyper_activityListRelationFilter = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.Hyper_activityListRelationFilter>, false>('Hyper_activityListRelationFilter').implement({
  fields: Hyper_activityListRelationFilterFields,
});

export const hyper_activityOrderByRelationAggregateInputFields = (t: any) => ({
  _count: t.field({"required":false,"type":SortOrder}),
});
export const hyper_activityOrderByRelationAggregateInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.hyper_activityOrderByRelationAggregateInput>, false>('hyper_activityOrderByRelationAggregateInput').implement({
  fields: hyper_activityOrderByRelationAggregateInputFields,
});

export const StringWithAggregatesFilterFields = (t: any) => ({
  equals: t.string({"required":false}),
  in: t.stringList({"required":false}),
  notIn: t.stringList({"required":false}),
  lt: t.string({"required":false}),
  lte: t.string({"required":false}),
  gt: t.string({"required":false}),
  gte: t.string({"required":false}),
  contains: t.string({"required":false}),
  startsWith: t.string({"required":false}),
  endsWith: t.string({"required":false}),
  mode: t.field({"required":false,"type":QueryMode}),
  not: t.field({"required":false,"type":NestedStringWithAggregatesFilter}),
  _count: t.field({"required":false,"type":NestedIntFilter}),
  _min: t.field({"required":false,"type":NestedStringFilter}),
  _max: t.field({"required":false,"type":NestedStringFilter}),
});
export const StringWithAggregatesFilter = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.StringWithAggregatesFilter>, false>('StringWithAggregatesFilter').implement({
  fields: StringWithAggregatesFilterFields,
});

export const IntNullableFilterFields = (t: any) => ({
  equals: t.int({"required":false}),
  in: t.intList({"required":false}),
  notIn: t.intList({"required":false}),
  lt: t.int({"required":false}),
  lte: t.int({"required":false}),
  gt: t.int({"required":false}),
  gte: t.int({"required":false}),
  not: t.field({"required":false,"type":NestedIntNullableFilter}),
});
export const IntNullableFilter = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.IntNullableFilter>, false>('IntNullableFilter').implement({
  fields: IntNullableFilterFields,
});

export const StringNullableFilterFields = (t: any) => ({
  equals: t.string({"required":false}),
  in: t.stringList({"required":false}),
  notIn: t.stringList({"required":false}),
  lt: t.string({"required":false}),
  lte: t.string({"required":false}),
  gt: t.string({"required":false}),
  gte: t.string({"required":false}),
  contains: t.string({"required":false}),
  startsWith: t.string({"required":false}),
  endsWith: t.string({"required":false}),
  mode: t.field({"required":false,"type":QueryMode}),
  not: t.field({"required":false,"type":NestedStringNullableFilter}),
});
export const StringNullableFilter = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.StringNullableFilter>, false>('StringNullableFilter').implement({
  fields: StringNullableFilterFields,
});

export const FloatNullableFilterFields = (t: any) => ({
  equals: t.float({"required":false}),
  in: t.floatList({"required":false}),
  notIn: t.floatList({"required":false}),
  lt: t.float({"required":false}),
  lte: t.float({"required":false}),
  gt: t.float({"required":false}),
  gte: t.float({"required":false}),
  not: t.field({"required":false,"type":NestedFloatNullableFilter}),
});
export const FloatNullableFilter = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.FloatNullableFilter>, false>('FloatNullableFilter').implement({
  fields: FloatNullableFilterFields,
});

export const IntFilterFields = (t: any) => ({
  equals: t.int({"required":false}),
  in: t.intList({"required":false}),
  notIn: t.intList({"required":false}),
  lt: t.int({"required":false}),
  lte: t.int({"required":false}),
  gt: t.int({"required":false}),
  gte: t.int({"required":false}),
  not: t.field({"required":false,"type":NestedIntFilter}),
});
export const IntFilter = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.IntFilter>, false>('IntFilter').implement({
  fields: IntFilterFields,
});

export const IntNullableWithAggregatesFilterFields = (t: any) => ({
  equals: t.int({"required":false}),
  in: t.intList({"required":false}),
  notIn: t.intList({"required":false}),
  lt: t.int({"required":false}),
  lte: t.int({"required":false}),
  gt: t.int({"required":false}),
  gte: t.int({"required":false}),
  not: t.field({"required":false,"type":NestedIntNullableWithAggregatesFilter}),
  _count: t.field({"required":false,"type":NestedIntNullableFilter}),
  _avg: t.field({"required":false,"type":NestedFloatNullableFilter}),
  _sum: t.field({"required":false,"type":NestedIntNullableFilter}),
  _min: t.field({"required":false,"type":NestedIntNullableFilter}),
  _max: t.field({"required":false,"type":NestedIntNullableFilter}),
});
export const IntNullableWithAggregatesFilter = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.IntNullableWithAggregatesFilter>, false>('IntNullableWithAggregatesFilter').implement({
  fields: IntNullableWithAggregatesFilterFields,
});

export const StringNullableWithAggregatesFilterFields = (t: any) => ({
  equals: t.string({"required":false}),
  in: t.stringList({"required":false}),
  notIn: t.stringList({"required":false}),
  lt: t.string({"required":false}),
  lte: t.string({"required":false}),
  gt: t.string({"required":false}),
  gte: t.string({"required":false}),
  contains: t.string({"required":false}),
  startsWith: t.string({"required":false}),
  endsWith: t.string({"required":false}),
  mode: t.field({"required":false,"type":QueryMode}),
  not: t.field({"required":false,"type":NestedStringNullableWithAggregatesFilter}),
  _count: t.field({"required":false,"type":NestedIntNullableFilter}),
  _min: t.field({"required":false,"type":NestedStringNullableFilter}),
  _max: t.field({"required":false,"type":NestedStringNullableFilter}),
});
export const StringNullableWithAggregatesFilter = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.StringNullableWithAggregatesFilter>, false>('StringNullableWithAggregatesFilter').implement({
  fields: StringNullableWithAggregatesFilterFields,
});

export const FloatNullableWithAggregatesFilterFields = (t: any) => ({
  equals: t.float({"required":false}),
  in: t.floatList({"required":false}),
  notIn: t.floatList({"required":false}),
  lt: t.float({"required":false}),
  lte: t.float({"required":false}),
  gt: t.float({"required":false}),
  gte: t.float({"required":false}),
  not: t.field({"required":false,"type":NestedFloatNullableWithAggregatesFilter}),
  _count: t.field({"required":false,"type":NestedIntNullableFilter}),
  _avg: t.field({"required":false,"type":NestedFloatNullableFilter}),
  _sum: t.field({"required":false,"type":NestedFloatNullableFilter}),
  _min: t.field({"required":false,"type":NestedFloatNullableFilter}),
  _max: t.field({"required":false,"type":NestedFloatNullableFilter}),
});
export const FloatNullableWithAggregatesFilter = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.FloatNullableWithAggregatesFilter>, false>('FloatNullableWithAggregatesFilter').implement({
  fields: FloatNullableWithAggregatesFilterFields,
});

export const IntWithAggregatesFilterFields = (t: any) => ({
  equals: t.int({"required":false}),
  in: t.intList({"required":false}),
  notIn: t.intList({"required":false}),
  lt: t.int({"required":false}),
  lte: t.int({"required":false}),
  gt: t.int({"required":false}),
  gte: t.int({"required":false}),
  not: t.field({"required":false,"type":NestedIntWithAggregatesFilter}),
  _count: t.field({"required":false,"type":NestedIntFilter}),
  _avg: t.field({"required":false,"type":NestedFloatFilter}),
  _sum: t.field({"required":false,"type":NestedIntFilter}),
  _min: t.field({"required":false,"type":NestedIntFilter}),
  _max: t.field({"required":false,"type":NestedIntFilter}),
});
export const IntWithAggregatesFilter = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.IntWithAggregatesFilter>, false>('IntWithAggregatesFilter').implement({
  fields: IntWithAggregatesFilterFields,
});

export const DecimalNullableFilterFields = (t: any) => ({
  equals: t.field({"required":false,"type":Decimal}),
  in: t.field({"required":false,"type":[Decimal]}),
  notIn: t.field({"required":false,"type":[Decimal]}),
  lt: t.field({"required":false,"type":Decimal}),
  lte: t.field({"required":false,"type":Decimal}),
  gt: t.field({"required":false,"type":Decimal}),
  gte: t.field({"required":false,"type":Decimal}),
  not: t.field({"required":false,"type":NestedDecimalNullableFilter}),
});
export const DecimalNullableFilter = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.DecimalNullableFilter>, false>('DecimalNullableFilter').implement({
  fields: DecimalNullableFilterFields,
});

export const JsonNullableFilterFields = (t: any) => ({
  equals: t.field({"required":false,"type":Json}),
  path: t.stringList({"required":false}),
  string_contains: t.string({"required":false}),
  string_starts_with: t.string({"required":false}),
  string_ends_with: t.string({"required":false}),
  array_contains: t.field({"required":false,"type":Json}),
  array_starts_with: t.field({"required":false,"type":Json}),
  array_ends_with: t.field({"required":false,"type":Json}),
  lt: t.field({"required":false,"type":Json}),
  lte: t.field({"required":false,"type":Json}),
  gt: t.field({"required":false,"type":Json}),
  gte: t.field({"required":false,"type":Json}),
  not: t.field({"required":false,"type":Json}),
});
export const JsonNullableFilter = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.JsonNullableFilter>, false>('JsonNullableFilter').implement({
  fields: JsonNullableFilterFields,
});

export const hyper_daily_recapProfile_idDateCompoundUniqueInputFields = (t: any) => ({
  profile_id: t.string({"required":true}),
  date: t.field({"required":true,"type":DateTime}),
});
export const hyper_daily_recapProfile_idDateCompoundUniqueInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.hyper_daily_recapProfile_idDateCompoundUniqueInput>, false>('hyper_daily_recapProfile_idDateCompoundUniqueInput').implement({
  fields: hyper_daily_recapProfile_idDateCompoundUniqueInputFields,
});

export const hyper_daily_recapDateProfile_idCompoundUniqueInputFields = (t: any) => ({
  date: t.field({"required":true,"type":DateTime}),
  profile_id: t.string({"required":true}),
});
export const hyper_daily_recapDateProfile_idCompoundUniqueInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.hyper_daily_recapDateProfile_idCompoundUniqueInput>, false>('hyper_daily_recapDateProfile_idCompoundUniqueInput').implement({
  fields: hyper_daily_recapDateProfile_idCompoundUniqueInputFields,
});

export const DecimalNullableWithAggregatesFilterFields = (t: any) => ({
  equals: t.field({"required":false,"type":Decimal}),
  in: t.field({"required":false,"type":[Decimal]}),
  notIn: t.field({"required":false,"type":[Decimal]}),
  lt: t.field({"required":false,"type":Decimal}),
  lte: t.field({"required":false,"type":Decimal}),
  gt: t.field({"required":false,"type":Decimal}),
  gte: t.field({"required":false,"type":Decimal}),
  not: t.field({"required":false,"type":NestedDecimalNullableWithAggregatesFilter}),
  _count: t.field({"required":false,"type":NestedIntNullableFilter}),
  _avg: t.field({"required":false,"type":NestedDecimalNullableFilter}),
  _sum: t.field({"required":false,"type":NestedDecimalNullableFilter}),
  _min: t.field({"required":false,"type":NestedDecimalNullableFilter}),
  _max: t.field({"required":false,"type":NestedDecimalNullableFilter}),
});
export const DecimalNullableWithAggregatesFilter = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.DecimalNullableWithAggregatesFilter>, false>('DecimalNullableWithAggregatesFilter').implement({
  fields: DecimalNullableWithAggregatesFilterFields,
});

export const JsonNullableWithAggregatesFilterFields = (t: any) => ({
  equals: t.field({"required":false,"type":Json}),
  path: t.stringList({"required":false}),
  string_contains: t.string({"required":false}),
  string_starts_with: t.string({"required":false}),
  string_ends_with: t.string({"required":false}),
  array_contains: t.field({"required":false,"type":Json}),
  array_starts_with: t.field({"required":false,"type":Json}),
  array_ends_with: t.field({"required":false,"type":Json}),
  lt: t.field({"required":false,"type":Json}),
  lte: t.field({"required":false,"type":Json}),
  gt: t.field({"required":false,"type":Json}),
  gte: t.field({"required":false,"type":Json}),
  not: t.field({"required":false,"type":Json}),
  _count: t.field({"required":false,"type":NestedIntNullableFilter}),
  _min: t.field({"required":false,"type":NestedJsonNullableFilter}),
  _max: t.field({"required":false,"type":NestedJsonNullableFilter}),
});
export const JsonNullableWithAggregatesFilter = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.JsonNullableWithAggregatesFilter>, false>('JsonNullableWithAggregatesFilter').implement({
  fields: JsonNullableWithAggregatesFilterFields,
});

export const Enumdiabetes_statusFilterFields = (t: any) => ({
  equals: t.field({"required":false,"type":diabetes_status}),
  in: t.field({"required":false,"type":[diabetes_status]}),
  notIn: t.field({"required":false,"type":[diabetes_status]}),
  not: t.field({"required":false,"type":diabetes_status}),
});
export const Enumdiabetes_statusFilter = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.Enumdiabetes_statusFilter>, false>('Enumdiabetes_statusFilter').implement({
  fields: Enumdiabetes_statusFilterFields,
});

export const Enumglucose_range_typeFilterFields = (t: any) => ({
  equals: t.field({"required":false,"type":glucose_range_type}),
  in: t.field({"required":false,"type":[glucose_range_type]}),
  notIn: t.field({"required":false,"type":[glucose_range_type]}),
  not: t.field({"required":false,"type":glucose_range_type}),
});
export const Enumglucose_range_typeFilter = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.Enumglucose_range_typeFilter>, false>('Enumglucose_range_typeFilter').implement({
  fields: Enumglucose_range_typeFilterFields,
});

export const Hyper_cgm_dataListRelationFilterFields = (t: any) => ({
  every: t.field({"required":false,"type":hyper_cgm_dataWhereInput}),
  some: t.field({"required":false,"type":hyper_cgm_dataWhereInput}),
  none: t.field({"required":false,"type":hyper_cgm_dataWhereInput}),
});
export const Hyper_cgm_dataListRelationFilter = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.Hyper_cgm_dataListRelationFilter>, false>('Hyper_cgm_dataListRelationFilter').implement({
  fields: Hyper_cgm_dataListRelationFilterFields,
});

export const Hyper_daily_recapListRelationFilterFields = (t: any) => ({
  every: t.field({"required":false,"type":hyper_daily_recapWhereInput}),
  some: t.field({"required":false,"type":hyper_daily_recapWhereInput}),
  none: t.field({"required":false,"type":hyper_daily_recapWhereInput}),
});
export const Hyper_daily_recapListRelationFilter = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.Hyper_daily_recapListRelationFilter>, false>('Hyper_daily_recapListRelationFilter').implement({
  fields: Hyper_daily_recapListRelationFilterFields,
});

export const Hyper_mealListRelationFilterFields = (t: any) => ({
  every: t.field({"required":false,"type":hyper_mealWhereInput}),
  some: t.field({"required":false,"type":hyper_mealWhereInput}),
  none: t.field({"required":false,"type":hyper_mealWhereInput}),
});
export const Hyper_mealListRelationFilter = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.Hyper_mealListRelationFilter>, false>('Hyper_mealListRelationFilter').implement({
  fields: Hyper_mealListRelationFilterFields,
});

export const UsersRelationFilterFields = (t: any) => ({
  is: t.field({"required":false,"type":usersWhereInput}),
  isNot: t.field({"required":false,"type":usersWhereInput}),
});
export const UsersRelationFilter = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.UsersRelationFilter>, false>('UsersRelationFilter').implement({
  fields: UsersRelationFilterFields,
});

export const Hyper_reportListRelationFilterFields = (t: any) => ({
  every: t.field({"required":false,"type":hyper_reportWhereInput}),
  some: t.field({"required":false,"type":hyper_reportWhereInput}),
  none: t.field({"required":false,"type":hyper_reportWhereInput}),
});
export const Hyper_reportListRelationFilter = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.Hyper_reportListRelationFilter>, false>('Hyper_reportListRelationFilter').implement({
  fields: Hyper_reportListRelationFilterFields,
});

export const hyper_cgm_dataOrderByRelationAggregateInputFields = (t: any) => ({
  _count: t.field({"required":false,"type":SortOrder}),
});
export const hyper_cgm_dataOrderByRelationAggregateInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.hyper_cgm_dataOrderByRelationAggregateInput>, false>('hyper_cgm_dataOrderByRelationAggregateInput').implement({
  fields: hyper_cgm_dataOrderByRelationAggregateInputFields,
});

export const hyper_daily_recapOrderByRelationAggregateInputFields = (t: any) => ({
  _count: t.field({"required":false,"type":SortOrder}),
});
export const hyper_daily_recapOrderByRelationAggregateInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.hyper_daily_recapOrderByRelationAggregateInput>, false>('hyper_daily_recapOrderByRelationAggregateInput').implement({
  fields: hyper_daily_recapOrderByRelationAggregateInputFields,
});

export const hyper_mealOrderByRelationAggregateInputFields = (t: any) => ({
  _count: t.field({"required":false,"type":SortOrder}),
});
export const hyper_mealOrderByRelationAggregateInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.hyper_mealOrderByRelationAggregateInput>, false>('hyper_mealOrderByRelationAggregateInput').implement({
  fields: hyper_mealOrderByRelationAggregateInputFields,
});

export const hyper_reportOrderByRelationAggregateInputFields = (t: any) => ({
  _count: t.field({"required":false,"type":SortOrder}),
});
export const hyper_reportOrderByRelationAggregateInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.hyper_reportOrderByRelationAggregateInput>, false>('hyper_reportOrderByRelationAggregateInput').implement({
  fields: hyper_reportOrderByRelationAggregateInputFields,
});

export const Enumdiabetes_statusWithAggregatesFilterFields = (t: any) => ({
  equals: t.field({"required":false,"type":diabetes_status}),
  in: t.field({"required":false,"type":[diabetes_status]}),
  notIn: t.field({"required":false,"type":[diabetes_status]}),
  not: t.field({"required":false,"type":diabetes_status}),
  _count: t.field({"required":false,"type":NestedIntFilter}),
  _min: t.field({"required":false,"type":NestedEnumdiabetes_statusFilter}),
  _max: t.field({"required":false,"type":NestedEnumdiabetes_statusFilter}),
});
export const Enumdiabetes_statusWithAggregatesFilter = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.Enumdiabetes_statusWithAggregatesFilter>, false>('Enumdiabetes_statusWithAggregatesFilter').implement({
  fields: Enumdiabetes_statusWithAggregatesFilterFields,
});

export const Enumglucose_range_typeWithAggregatesFilterFields = (t: any) => ({
  equals: t.field({"required":false,"type":glucose_range_type}),
  in: t.field({"required":false,"type":[glucose_range_type]}),
  notIn: t.field({"required":false,"type":[glucose_range_type]}),
  not: t.field({"required":false,"type":glucose_range_type}),
  _count: t.field({"required":false,"type":NestedIntFilter}),
  _min: t.field({"required":false,"type":NestedEnumglucose_range_typeFilter}),
  _max: t.field({"required":false,"type":NestedEnumglucose_range_typeFilter}),
});
export const Enumglucose_range_typeWithAggregatesFilter = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.Enumglucose_range_typeWithAggregatesFilter>, false>('Enumglucose_range_typeWithAggregatesFilter').implement({
  fields: Enumglucose_range_typeWithAggregatesFilterFields,
});

export const StringFieldUpdateOperationsInputFields = (t: any) => ({
  set: t.string({"required":false}),
});
export const StringFieldUpdateOperationsInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.StringFieldUpdateOperationsInput>, false>('StringFieldUpdateOperationsInput').implement({
  fields: StringFieldUpdateOperationsInputFields,
});

export const DateTimeFieldUpdateOperationsInputFields = (t: any) => ({
  set: t.field({"required":false,"type":DateTime}),
});
export const DateTimeFieldUpdateOperationsInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.DateTimeFieldUpdateOperationsInput>, false>('DateTimeFieldUpdateOperationsInput').implement({
  fields: DateTimeFieldUpdateOperationsInputFields,
});

export const NullableDateTimeFieldUpdateOperationsInputFields = (t: any) => ({
  set: t.field({"required":false,"type":DateTime}),
});
export const NullableDateTimeFieldUpdateOperationsInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.NullableDateTimeFieldUpdateOperationsInput>, false>('NullableDateTimeFieldUpdateOperationsInput').implement({
  fields: NullableDateTimeFieldUpdateOperationsInputFields,
});

export const hyper_activityCreateNestedManyWithoutHyper_activity_typeInputFields = (t: any) => ({
  connect: t.field({"required":false,"type":[hyper_activityWhereUniqueInput]}),
});
export const hyper_activityCreateNestedManyWithoutHyper_activity_typeInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.hyper_activityCreateNestedManyWithoutHyper_activity_typeInput>, false>('hyper_activityCreateNestedManyWithoutHyper_activity_typeInput').implement({
  fields: hyper_activityCreateNestedManyWithoutHyper_activity_typeInputFields,
});

export const hyper_activityUpdateManyWithoutHyper_activity_typeNestedInputFields = (t: any) => ({
  set: t.field({"required":false,"type":[hyper_activityWhereUniqueInput]}),
  disconnect: t.field({"required":false,"type":[hyper_activityWhereUniqueInput]}),
  connect: t.field({"required":false,"type":[hyper_activityWhereUniqueInput]}),
  // 'delete' was omitted due to `simple mode: true` found in global config
  // 'update' was omitted due to `simple mode: true` found in global config
  // 'updateMany' was omitted due to `simple mode: true` found in global config
  // 'deleteMany' was omitted due to `simple mode: true` found in global config
});
export const hyper_activityUpdateManyWithoutHyper_activity_typeNestedInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.hyper_activityUpdateManyWithoutHyper_activity_typeNestedInput>, false>('hyper_activityUpdateManyWithoutHyper_activity_typeNestedInput').implement({
  fields: hyper_activityUpdateManyWithoutHyper_activity_typeNestedInputFields,
});

export const NullableIntFieldUpdateOperationsInputFields = (t: any) => ({
  set: t.int({"required":false}),
  increment: t.int({"required":false}),
  decrement: t.int({"required":false}),
  multiply: t.int({"required":false}),
  divide: t.int({"required":false}),
});
export const NullableIntFieldUpdateOperationsInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.NullableIntFieldUpdateOperationsInput>, false>('NullableIntFieldUpdateOperationsInput').implement({
  fields: NullableIntFieldUpdateOperationsInputFields,
});

export const NullableStringFieldUpdateOperationsInputFields = (t: any) => ({
  set: t.string({"required":false}),
});
export const NullableStringFieldUpdateOperationsInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.NullableStringFieldUpdateOperationsInput>, false>('NullableStringFieldUpdateOperationsInput').implement({
  fields: NullableStringFieldUpdateOperationsInputFields,
});

export const NullableFloatFieldUpdateOperationsInputFields = (t: any) => ({
  set: t.float({"required":false}),
  increment: t.float({"required":false}),
  decrement: t.float({"required":false}),
  multiply: t.float({"required":false}),
  divide: t.float({"required":false}),
});
export const NullableFloatFieldUpdateOperationsInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.NullableFloatFieldUpdateOperationsInput>, false>('NullableFloatFieldUpdateOperationsInput').implement({
  fields: NullableFloatFieldUpdateOperationsInputFields,
});

export const IntFieldUpdateOperationsInputFields = (t: any) => ({
  set: t.int({"required":false}),
  increment: t.int({"required":false}),
  decrement: t.int({"required":false}),
  multiply: t.int({"required":false}),
  divide: t.int({"required":false}),
});
export const IntFieldUpdateOperationsInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.IntFieldUpdateOperationsInput>, false>('IntFieldUpdateOperationsInput').implement({
  fields: IntFieldUpdateOperationsInputFields,
});

export const NullableDecimalFieldUpdateOperationsInputFields = (t: any) => ({
  set: t.field({"required":false,"type":Decimal}),
  increment: t.field({"required":false,"type":Decimal}),
  decrement: t.field({"required":false,"type":Decimal}),
  multiply: t.field({"required":false,"type":Decimal}),
  divide: t.field({"required":false,"type":Decimal}),
});
export const NullableDecimalFieldUpdateOperationsInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.NullableDecimalFieldUpdateOperationsInput>, false>('NullableDecimalFieldUpdateOperationsInput').implement({
  fields: NullableDecimalFieldUpdateOperationsInputFields,
});

export const hyper_activityCreateNestedManyWithoutHyper_profileInputFields = (t: any) => ({
  connect: t.field({"required":false,"type":[hyper_activityWhereUniqueInput]}),
});
export const hyper_activityCreateNestedManyWithoutHyper_profileInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.hyper_activityCreateNestedManyWithoutHyper_profileInput>, false>('hyper_activityCreateNestedManyWithoutHyper_profileInput').implement({
  fields: hyper_activityCreateNestedManyWithoutHyper_profileInputFields,
});

export const hyper_cgm_dataCreateNestedManyWithoutHyper_profileInputFields = (t: any) => ({
  connect: t.field({"required":false,"type":[hyper_cgm_dataWhereUniqueInput]}),
  // 'create' was omitted due to `simple mode: true` found in global config
  // 'connectOrCreate' was omitted due to `simple mode: true` found in global config
  // 'createMany' was omitted due to `simple mode: true` found in global config
});
export const hyper_cgm_dataCreateNestedManyWithoutHyper_profileInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.hyper_cgm_dataCreateNestedManyWithoutHyper_profileInput>, false>('hyper_cgm_dataCreateNestedManyWithoutHyper_profileInput').implement({
  fields: hyper_cgm_dataCreateNestedManyWithoutHyper_profileInputFields,
});

export const hyper_daily_recapCreateNestedManyWithoutHyper_profileInputFields = (t: any) => ({
  connect: t.field({"required":false,"type":[hyper_daily_recapWhereUniqueInput]}),
  // 'create' was omitted due to `simple mode: true` found in global config
  // 'connectOrCreate' was omitted due to `simple mode: true` found in global config
  // 'createMany' was omitted due to `simple mode: true` found in global config
});
export const hyper_daily_recapCreateNestedManyWithoutHyper_profileInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.hyper_daily_recapCreateNestedManyWithoutHyper_profileInput>, false>('hyper_daily_recapCreateNestedManyWithoutHyper_profileInput').implement({
  fields: hyper_daily_recapCreateNestedManyWithoutHyper_profileInputFields,
});

export const hyper_mealCreateNestedManyWithoutHyper_profileInputFields = (t: any) => ({
  connect: t.field({"required":false,"type":[hyper_mealWhereUniqueInput]}),
  // 'create' was omitted due to `simple mode: true` found in global config
  // 'connectOrCreate' was omitted due to `simple mode: true` found in global config
  // 'createMany' was omitted due to `simple mode: true` found in global config
});
export const hyper_mealCreateNestedManyWithoutHyper_profileInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.hyper_mealCreateNestedManyWithoutHyper_profileInput>, false>('hyper_mealCreateNestedManyWithoutHyper_profileInput').implement({
  fields: hyper_mealCreateNestedManyWithoutHyper_profileInputFields,
});

export const hyper_reportCreateNestedManyWithoutHyper_profileInputFields = (t: any) => ({
  connect: t.field({"required":false,"type":[hyper_reportWhereUniqueInput]}),
  // 'create' was omitted due to `simple mode: true` found in global config
  // 'connectOrCreate' was omitted due to `simple mode: true` found in global config
  // 'createMany' was omitted due to `simple mode: true` found in global config
});
export const hyper_reportCreateNestedManyWithoutHyper_profileInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.hyper_reportCreateNestedManyWithoutHyper_profileInput>, false>('hyper_reportCreateNestedManyWithoutHyper_profileInput').implement({
  fields: hyper_reportCreateNestedManyWithoutHyper_profileInputFields,
});

export const Enumdiabetes_statusFieldUpdateOperationsInputFields = (t: any) => ({
  set: t.field({"required":false,"type":diabetes_status}),
});
export const Enumdiabetes_statusFieldUpdateOperationsInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.Enumdiabetes_statusFieldUpdateOperationsInput>, false>('Enumdiabetes_statusFieldUpdateOperationsInput').implement({
  fields: Enumdiabetes_statusFieldUpdateOperationsInputFields,
});

export const Enumglucose_range_typeFieldUpdateOperationsInputFields = (t: any) => ({
  set: t.field({"required":false,"type":glucose_range_type}),
});
export const Enumglucose_range_typeFieldUpdateOperationsInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.Enumglucose_range_typeFieldUpdateOperationsInput>, false>('Enumglucose_range_typeFieldUpdateOperationsInput').implement({
  fields: Enumglucose_range_typeFieldUpdateOperationsInputFields,
});

export const hyper_activityUpdateManyWithoutHyper_profileNestedInputFields = (t: any) => ({
  set: t.field({"required":false,"type":[hyper_activityWhereUniqueInput]}),
  disconnect: t.field({"required":false,"type":[hyper_activityWhereUniqueInput]}),
  connect: t.field({"required":false,"type":[hyper_activityWhereUniqueInput]}),
  // 'delete' was omitted due to `simple mode: true` found in global config
  // 'update' was omitted due to `simple mode: true` found in global config
  // 'updateMany' was omitted due to `simple mode: true` found in global config
  // 'deleteMany' was omitted due to `simple mode: true` found in global config
});
export const hyper_activityUpdateManyWithoutHyper_profileNestedInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.hyper_activityUpdateManyWithoutHyper_profileNestedInput>, false>('hyper_activityUpdateManyWithoutHyper_profileNestedInput').implement({
  fields: hyper_activityUpdateManyWithoutHyper_profileNestedInputFields,
});

export const hyper_cgm_dataUpdateManyWithoutHyper_profileNestedInputFields = (t: any) => ({
  set: t.field({"required":false,"type":[hyper_cgm_dataWhereUniqueInput]}),
  disconnect: t.field({"required":false,"type":[hyper_cgm_dataWhereUniqueInput]}),
  connect: t.field({"required":false,"type":[hyper_cgm_dataWhereUniqueInput]}),
  // 'create' was omitted due to `simple mode: true` found in global config
  // 'connectOrCreate' was omitted due to `simple mode: true` found in global config
  // 'upsert' was omitted due to `simple mode: true` found in global config
  // 'createMany' was omitted due to `simple mode: true` found in global config
  // 'delete' was omitted due to `simple mode: true` found in global config
  // 'update' was omitted due to `simple mode: true` found in global config
  // 'updateMany' was omitted due to `simple mode: true` found in global config
  // 'deleteMany' was omitted due to `simple mode: true` found in global config
});
export const hyper_cgm_dataUpdateManyWithoutHyper_profileNestedInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.hyper_cgm_dataUpdateManyWithoutHyper_profileNestedInput>, false>('hyper_cgm_dataUpdateManyWithoutHyper_profileNestedInput').implement({
  fields: hyper_cgm_dataUpdateManyWithoutHyper_profileNestedInputFields,
});

export const hyper_daily_recapUpdateManyWithoutHyper_profileNestedInputFields = (t: any) => ({
  set: t.field({"required":false,"type":[hyper_daily_recapWhereUniqueInput]}),
  disconnect: t.field({"required":false,"type":[hyper_daily_recapWhereUniqueInput]}),
  connect: t.field({"required":false,"type":[hyper_daily_recapWhereUniqueInput]}),
  // 'create' was omitted due to `simple mode: true` found in global config
  // 'connectOrCreate' was omitted due to `simple mode: true` found in global config
  // 'upsert' was omitted due to `simple mode: true` found in global config
  // 'createMany' was omitted due to `simple mode: true` found in global config
  // 'delete' was omitted due to `simple mode: true` found in global config
  // 'update' was omitted due to `simple mode: true` found in global config
  // 'updateMany' was omitted due to `simple mode: true` found in global config
  // 'deleteMany' was omitted due to `simple mode: true` found in global config
});
export const hyper_daily_recapUpdateManyWithoutHyper_profileNestedInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.hyper_daily_recapUpdateManyWithoutHyper_profileNestedInput>, false>('hyper_daily_recapUpdateManyWithoutHyper_profileNestedInput').implement({
  fields: hyper_daily_recapUpdateManyWithoutHyper_profileNestedInputFields,
});

export const hyper_mealUpdateManyWithoutHyper_profileNestedInputFields = (t: any) => ({
  set: t.field({"required":false,"type":[hyper_mealWhereUniqueInput]}),
  disconnect: t.field({"required":false,"type":[hyper_mealWhereUniqueInput]}),
  connect: t.field({"required":false,"type":[hyper_mealWhereUniqueInput]}),
  // 'create' was omitted due to `simple mode: true` found in global config
  // 'connectOrCreate' was omitted due to `simple mode: true` found in global config
  // 'upsert' was omitted due to `simple mode: true` found in global config
  // 'createMany' was omitted due to `simple mode: true` found in global config
  // 'delete' was omitted due to `simple mode: true` found in global config
  // 'update' was omitted due to `simple mode: true` found in global config
  // 'updateMany' was omitted due to `simple mode: true` found in global config
  // 'deleteMany' was omitted due to `simple mode: true` found in global config
});
export const hyper_mealUpdateManyWithoutHyper_profileNestedInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.hyper_mealUpdateManyWithoutHyper_profileNestedInput>, false>('hyper_mealUpdateManyWithoutHyper_profileNestedInput').implement({
  fields: hyper_mealUpdateManyWithoutHyper_profileNestedInputFields,
});

export const hyper_reportUpdateManyWithoutHyper_profileNestedInputFields = (t: any) => ({
  set: t.field({"required":false,"type":[hyper_reportWhereUniqueInput]}),
  disconnect: t.field({"required":false,"type":[hyper_reportWhereUniqueInput]}),
  connect: t.field({"required":false,"type":[hyper_reportWhereUniqueInput]}),
  // 'create' was omitted due to `simple mode: true` found in global config
  // 'connectOrCreate' was omitted due to `simple mode: true` found in global config
  // 'upsert' was omitted due to `simple mode: true` found in global config
  // 'createMany' was omitted due to `simple mode: true` found in global config
  // 'delete' was omitted due to `simple mode: true` found in global config
  // 'update' was omitted due to `simple mode: true` found in global config
  // 'updateMany' was omitted due to `simple mode: true` found in global config
  // 'deleteMany' was omitted due to `simple mode: true` found in global config
});
export const hyper_reportUpdateManyWithoutHyper_profileNestedInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.hyper_reportUpdateManyWithoutHyper_profileNestedInput>, false>('hyper_reportUpdateManyWithoutHyper_profileNestedInput').implement({
  fields: hyper_reportUpdateManyWithoutHyper_profileNestedInputFields,
});

export const NestedUuidFilterFields = (t: any) => ({
  equals: t.string({"required":false}),
  in: t.stringList({"required":false}),
  notIn: t.stringList({"required":false}),
  lt: t.string({"required":false}),
  lte: t.string({"required":false}),
  gt: t.string({"required":false}),
  gte: t.string({"required":false}),
  not: t.field({"required":false,"type":NestedUuidFilter}),
});
export const NestedUuidFilter = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.NestedUuidFilter>, false>('NestedUuidFilter').implement({
  fields: NestedUuidFilterFields,
});

export const NestedUuidWithAggregatesFilterFields = (t: any) => ({
  equals: t.string({"required":false}),
  in: t.stringList({"required":false}),
  notIn: t.stringList({"required":false}),
  lt: t.string({"required":false}),
  lte: t.string({"required":false}),
  gt: t.string({"required":false}),
  gte: t.string({"required":false}),
  not: t.field({"required":false,"type":NestedUuidWithAggregatesFilter}),
  _count: t.field({"required":false,"type":NestedIntFilter}),
  _min: t.field({"required":false,"type":NestedStringFilter}),
  _max: t.field({"required":false,"type":NestedStringFilter}),
});
export const NestedUuidWithAggregatesFilter = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.NestedUuidWithAggregatesFilter>, false>('NestedUuidWithAggregatesFilter').implement({
  fields: NestedUuidWithAggregatesFilterFields,
});

export const NestedIntFilterFields = (t: any) => ({
  equals: t.int({"required":false}),
  in: t.intList({"required":false}),
  notIn: t.intList({"required":false}),
  lt: t.int({"required":false}),
  lte: t.int({"required":false}),
  gt: t.int({"required":false}),
  gte: t.int({"required":false}),
  not: t.field({"required":false,"type":NestedIntFilter}),
});
export const NestedIntFilter = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.NestedIntFilter>, false>('NestedIntFilter').implement({
  fields: NestedIntFilterFields,
});

export const NestedStringFilterFields = (t: any) => ({
  equals: t.string({"required":false}),
  in: t.stringList({"required":false}),
  notIn: t.stringList({"required":false}),
  lt: t.string({"required":false}),
  lte: t.string({"required":false}),
  gt: t.string({"required":false}),
  gte: t.string({"required":false}),
  contains: t.string({"required":false}),
  startsWith: t.string({"required":false}),
  endsWith: t.string({"required":false}),
  not: t.field({"required":false,"type":NestedStringFilter}),
});
export const NestedStringFilter = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.NestedStringFilter>, false>('NestedStringFilter').implement({
  fields: NestedStringFilterFields,
});

export const NestedDateTimeFilterFields = (t: any) => ({
  equals: t.field({"required":false,"type":DateTime}),
  in: t.field({"required":false,"type":[DateTime]}),
  notIn: t.field({"required":false,"type":[DateTime]}),
  lt: t.field({"required":false,"type":DateTime}),
  lte: t.field({"required":false,"type":DateTime}),
  gt: t.field({"required":false,"type":DateTime}),
  gte: t.field({"required":false,"type":DateTime}),
  not: t.field({"required":false,"type":NestedDateTimeFilter}),
});
export const NestedDateTimeFilter = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.NestedDateTimeFilter>, false>('NestedDateTimeFilter').implement({
  fields: NestedDateTimeFilterFields,
});

export const NestedDateTimeNullableFilterFields = (t: any) => ({
  equals: t.field({"required":false,"type":DateTime}),
  in: t.field({"required":false,"type":[DateTime]}),
  notIn: t.field({"required":false,"type":[DateTime]}),
  lt: t.field({"required":false,"type":DateTime}),
  lte: t.field({"required":false,"type":DateTime}),
  gt: t.field({"required":false,"type":DateTime}),
  gte: t.field({"required":false,"type":DateTime}),
  not: t.field({"required":false,"type":NestedDateTimeNullableFilter}),
});
export const NestedDateTimeNullableFilter = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.NestedDateTimeNullableFilter>, false>('NestedDateTimeNullableFilter').implement({
  fields: NestedDateTimeNullableFilterFields,
});

export const NestedDateTimeWithAggregatesFilterFields = (t: any) => ({
  equals: t.field({"required":false,"type":DateTime}),
  in: t.field({"required":false,"type":[DateTime]}),
  notIn: t.field({"required":false,"type":[DateTime]}),
  lt: t.field({"required":false,"type":DateTime}),
  lte: t.field({"required":false,"type":DateTime}),
  gt: t.field({"required":false,"type":DateTime}),
  gte: t.field({"required":false,"type":DateTime}),
  not: t.field({"required":false,"type":NestedDateTimeWithAggregatesFilter}),
  _count: t.field({"required":false,"type":NestedIntFilter}),
  _min: t.field({"required":false,"type":NestedDateTimeFilter}),
  _max: t.field({"required":false,"type":NestedDateTimeFilter}),
});
export const NestedDateTimeWithAggregatesFilter = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.NestedDateTimeWithAggregatesFilter>, false>('NestedDateTimeWithAggregatesFilter').implement({
  fields: NestedDateTimeWithAggregatesFilterFields,
});

export const NestedDateTimeNullableWithAggregatesFilterFields = (t: any) => ({
  equals: t.field({"required":false,"type":DateTime}),
  in: t.field({"required":false,"type":[DateTime]}),
  notIn: t.field({"required":false,"type":[DateTime]}),
  lt: t.field({"required":false,"type":DateTime}),
  lte: t.field({"required":false,"type":DateTime}),
  gt: t.field({"required":false,"type":DateTime}),
  gte: t.field({"required":false,"type":DateTime}),
  not: t.field({"required":false,"type":NestedDateTimeNullableWithAggregatesFilter}),
  _count: t.field({"required":false,"type":NestedIntNullableFilter}),
  _min: t.field({"required":false,"type":NestedDateTimeNullableFilter}),
  _max: t.field({"required":false,"type":NestedDateTimeNullableFilter}),
});
export const NestedDateTimeNullableWithAggregatesFilter = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.NestedDateTimeNullableWithAggregatesFilter>, false>('NestedDateTimeNullableWithAggregatesFilter').implement({
  fields: NestedDateTimeNullableWithAggregatesFilterFields,
});

export const NestedIntNullableFilterFields = (t: any) => ({
  equals: t.int({"required":false}),
  in: t.intList({"required":false}),
  notIn: t.intList({"required":false}),
  lt: t.int({"required":false}),
  lte: t.int({"required":false}),
  gt: t.int({"required":false}),
  gte: t.int({"required":false}),
  not: t.field({"required":false,"type":NestedIntNullableFilter}),
});
export const NestedIntNullableFilter = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.NestedIntNullableFilter>, false>('NestedIntNullableFilter').implement({
  fields: NestedIntNullableFilterFields,
});

export const NestedStringWithAggregatesFilterFields = (t: any) => ({
  equals: t.string({"required":false}),
  in: t.stringList({"required":false}),
  notIn: t.stringList({"required":false}),
  lt: t.string({"required":false}),
  lte: t.string({"required":false}),
  gt: t.string({"required":false}),
  gte: t.string({"required":false}),
  contains: t.string({"required":false}),
  startsWith: t.string({"required":false}),
  endsWith: t.string({"required":false}),
  not: t.field({"required":false,"type":NestedStringWithAggregatesFilter}),
  _count: t.field({"required":false,"type":NestedIntFilter}),
  _min: t.field({"required":false,"type":NestedStringFilter}),
  _max: t.field({"required":false,"type":NestedStringFilter}),
});
export const NestedStringWithAggregatesFilter = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.NestedStringWithAggregatesFilter>, false>('NestedStringWithAggregatesFilter').implement({
  fields: NestedStringWithAggregatesFilterFields,
});

export const NestedStringNullableFilterFields = (t: any) => ({
  equals: t.string({"required":false}),
  in: t.stringList({"required":false}),
  notIn: t.stringList({"required":false}),
  lt: t.string({"required":false}),
  lte: t.string({"required":false}),
  gt: t.string({"required":false}),
  gte: t.string({"required":false}),
  contains: t.string({"required":false}),
  startsWith: t.string({"required":false}),
  endsWith: t.string({"required":false}),
  not: t.field({"required":false,"type":NestedStringNullableFilter}),
});
export const NestedStringNullableFilter = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.NestedStringNullableFilter>, false>('NestedStringNullableFilter').implement({
  fields: NestedStringNullableFilterFields,
});

export const NestedFloatNullableFilterFields = (t: any) => ({
  equals: t.float({"required":false}),
  in: t.floatList({"required":false}),
  notIn: t.floatList({"required":false}),
  lt: t.float({"required":false}),
  lte: t.float({"required":false}),
  gt: t.float({"required":false}),
  gte: t.float({"required":false}),
  not: t.field({"required":false,"type":NestedFloatNullableFilter}),
});
export const NestedFloatNullableFilter = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.NestedFloatNullableFilter>, false>('NestedFloatNullableFilter').implement({
  fields: NestedFloatNullableFilterFields,
});

export const NestedIntNullableWithAggregatesFilterFields = (t: any) => ({
  equals: t.int({"required":false}),
  in: t.intList({"required":false}),
  notIn: t.intList({"required":false}),
  lt: t.int({"required":false}),
  lte: t.int({"required":false}),
  gt: t.int({"required":false}),
  gte: t.int({"required":false}),
  not: t.field({"required":false,"type":NestedIntNullableWithAggregatesFilter}),
  _count: t.field({"required":false,"type":NestedIntNullableFilter}),
  _avg: t.field({"required":false,"type":NestedFloatNullableFilter}),
  _sum: t.field({"required":false,"type":NestedIntNullableFilter}),
  _min: t.field({"required":false,"type":NestedIntNullableFilter}),
  _max: t.field({"required":false,"type":NestedIntNullableFilter}),
});
export const NestedIntNullableWithAggregatesFilter = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.NestedIntNullableWithAggregatesFilter>, false>('NestedIntNullableWithAggregatesFilter').implement({
  fields: NestedIntNullableWithAggregatesFilterFields,
});

export const NestedStringNullableWithAggregatesFilterFields = (t: any) => ({
  equals: t.string({"required":false}),
  in: t.stringList({"required":false}),
  notIn: t.stringList({"required":false}),
  lt: t.string({"required":false}),
  lte: t.string({"required":false}),
  gt: t.string({"required":false}),
  gte: t.string({"required":false}),
  contains: t.string({"required":false}),
  startsWith: t.string({"required":false}),
  endsWith: t.string({"required":false}),
  not: t.field({"required":false,"type":NestedStringNullableWithAggregatesFilter}),
  _count: t.field({"required":false,"type":NestedIntNullableFilter}),
  _min: t.field({"required":false,"type":NestedStringNullableFilter}),
  _max: t.field({"required":false,"type":NestedStringNullableFilter}),
});
export const NestedStringNullableWithAggregatesFilter = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.NestedStringNullableWithAggregatesFilter>, false>('NestedStringNullableWithAggregatesFilter').implement({
  fields: NestedStringNullableWithAggregatesFilterFields,
});

export const NestedFloatNullableWithAggregatesFilterFields = (t: any) => ({
  equals: t.float({"required":false}),
  in: t.floatList({"required":false}),
  notIn: t.floatList({"required":false}),
  lt: t.float({"required":false}),
  lte: t.float({"required":false}),
  gt: t.float({"required":false}),
  gte: t.float({"required":false}),
  not: t.field({"required":false,"type":NestedFloatNullableWithAggregatesFilter}),
  _count: t.field({"required":false,"type":NestedIntNullableFilter}),
  _avg: t.field({"required":false,"type":NestedFloatNullableFilter}),
  _sum: t.field({"required":false,"type":NestedFloatNullableFilter}),
  _min: t.field({"required":false,"type":NestedFloatNullableFilter}),
  _max: t.field({"required":false,"type":NestedFloatNullableFilter}),
});
export const NestedFloatNullableWithAggregatesFilter = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.NestedFloatNullableWithAggregatesFilter>, false>('NestedFloatNullableWithAggregatesFilter').implement({
  fields: NestedFloatNullableWithAggregatesFilterFields,
});

export const NestedIntWithAggregatesFilterFields = (t: any) => ({
  equals: t.int({"required":false}),
  in: t.intList({"required":false}),
  notIn: t.intList({"required":false}),
  lt: t.int({"required":false}),
  lte: t.int({"required":false}),
  gt: t.int({"required":false}),
  gte: t.int({"required":false}),
  not: t.field({"required":false,"type":NestedIntWithAggregatesFilter}),
  _count: t.field({"required":false,"type":NestedIntFilter}),
  _avg: t.field({"required":false,"type":NestedFloatFilter}),
  _sum: t.field({"required":false,"type":NestedIntFilter}),
  _min: t.field({"required":false,"type":NestedIntFilter}),
  _max: t.field({"required":false,"type":NestedIntFilter}),
});
export const NestedIntWithAggregatesFilter = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.NestedIntWithAggregatesFilter>, false>('NestedIntWithAggregatesFilter').implement({
  fields: NestedIntWithAggregatesFilterFields,
});

export const NestedFloatFilterFields = (t: any) => ({
  equals: t.float({"required":false}),
  in: t.floatList({"required":false}),
  notIn: t.floatList({"required":false}),
  lt: t.float({"required":false}),
  lte: t.float({"required":false}),
  gt: t.float({"required":false}),
  gte: t.float({"required":false}),
  not: t.field({"required":false,"type":NestedFloatFilter}),
});
export const NestedFloatFilter = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.NestedFloatFilter>, false>('NestedFloatFilter').implement({
  fields: NestedFloatFilterFields,
});

export const NestedDecimalNullableFilterFields = (t: any) => ({
  equals: t.field({"required":false,"type":Decimal}),
  in: t.field({"required":false,"type":[Decimal]}),
  notIn: t.field({"required":false,"type":[Decimal]}),
  lt: t.field({"required":false,"type":Decimal}),
  lte: t.field({"required":false,"type":Decimal}),
  gt: t.field({"required":false,"type":Decimal}),
  gte: t.field({"required":false,"type":Decimal}),
  not: t.field({"required":false,"type":NestedDecimalNullableFilter}),
});
export const NestedDecimalNullableFilter = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.NestedDecimalNullableFilter>, false>('NestedDecimalNullableFilter').implement({
  fields: NestedDecimalNullableFilterFields,
});

export const NestedDecimalNullableWithAggregatesFilterFields = (t: any) => ({
  equals: t.field({"required":false,"type":Decimal}),
  in: t.field({"required":false,"type":[Decimal]}),
  notIn: t.field({"required":false,"type":[Decimal]}),
  lt: t.field({"required":false,"type":Decimal}),
  lte: t.field({"required":false,"type":Decimal}),
  gt: t.field({"required":false,"type":Decimal}),
  gte: t.field({"required":false,"type":Decimal}),
  not: t.field({"required":false,"type":NestedDecimalNullableWithAggregatesFilter}),
  _count: t.field({"required":false,"type":NestedIntNullableFilter}),
  _avg: t.field({"required":false,"type":NestedDecimalNullableFilter}),
  _sum: t.field({"required":false,"type":NestedDecimalNullableFilter}),
  _min: t.field({"required":false,"type":NestedDecimalNullableFilter}),
  _max: t.field({"required":false,"type":NestedDecimalNullableFilter}),
});
export const NestedDecimalNullableWithAggregatesFilter = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.NestedDecimalNullableWithAggregatesFilter>, false>('NestedDecimalNullableWithAggregatesFilter').implement({
  fields: NestedDecimalNullableWithAggregatesFilterFields,
});

export const NestedJsonNullableFilterFields = (t: any) => ({
  equals: t.field({"required":false,"type":Json}),
  path: t.stringList({"required":false}),
  string_contains: t.string({"required":false}),
  string_starts_with: t.string({"required":false}),
  string_ends_with: t.string({"required":false}),
  array_contains: t.field({"required":false,"type":Json}),
  array_starts_with: t.field({"required":false,"type":Json}),
  array_ends_with: t.field({"required":false,"type":Json}),
  lt: t.field({"required":false,"type":Json}),
  lte: t.field({"required":false,"type":Json}),
  gt: t.field({"required":false,"type":Json}),
  gte: t.field({"required":false,"type":Json}),
  not: t.field({"required":false,"type":Json}),
});
export const NestedJsonNullableFilter = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.NestedJsonNullableFilter>, false>('NestedJsonNullableFilter').implement({
  fields: NestedJsonNullableFilterFields,
});

export const NestedEnumdiabetes_statusFilterFields = (t: any) => ({
  equals: t.field({"required":false,"type":diabetes_status}),
  in: t.field({"required":false,"type":[diabetes_status]}),
  notIn: t.field({"required":false,"type":[diabetes_status]}),
  not: t.field({"required":false,"type":diabetes_status}),
});
export const NestedEnumdiabetes_statusFilter = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.NestedEnumdiabetes_statusFilter>, false>('NestedEnumdiabetes_statusFilter').implement({
  fields: NestedEnumdiabetes_statusFilterFields,
});

export const NestedEnumglucose_range_typeFilterFields = (t: any) => ({
  equals: t.field({"required":false,"type":glucose_range_type}),
  in: t.field({"required":false,"type":[glucose_range_type]}),
  notIn: t.field({"required":false,"type":[glucose_range_type]}),
  not: t.field({"required":false,"type":glucose_range_type}),
});
export const NestedEnumglucose_range_typeFilter = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.NestedEnumglucose_range_typeFilter>, false>('NestedEnumglucose_range_typeFilter').implement({
  fields: NestedEnumglucose_range_typeFilterFields,
});

export const NestedEnumdiabetes_statusWithAggregatesFilterFields = (t: any) => ({
  equals: t.field({"required":false,"type":diabetes_status}),
  in: t.field({"required":false,"type":[diabetes_status]}),
  notIn: t.field({"required":false,"type":[diabetes_status]}),
  not: t.field({"required":false,"type":diabetes_status}),
  _count: t.field({"required":false,"type":NestedIntFilter}),
  _min: t.field({"required":false,"type":NestedEnumdiabetes_statusFilter}),
  _max: t.field({"required":false,"type":NestedEnumdiabetes_statusFilter}),
});
export const NestedEnumdiabetes_statusWithAggregatesFilter = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.NestedEnumdiabetes_statusWithAggregatesFilter>, false>('NestedEnumdiabetes_statusWithAggregatesFilter').implement({
  fields: NestedEnumdiabetes_statusWithAggregatesFilterFields,
});

export const NestedEnumglucose_range_typeWithAggregatesFilterFields = (t: any) => ({
  equals: t.field({"required":false,"type":glucose_range_type}),
  in: t.field({"required":false,"type":[glucose_range_type]}),
  notIn: t.field({"required":false,"type":[glucose_range_type]}),
  not: t.field({"required":false,"type":glucose_range_type}),
  _count: t.field({"required":false,"type":NestedIntFilter}),
  _min: t.field({"required":false,"type":NestedEnumglucose_range_typeFilter}),
  _max: t.field({"required":false,"type":NestedEnumglucose_range_typeFilter}),
});
export const NestedEnumglucose_range_typeWithAggregatesFilter = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.NestedEnumglucose_range_typeWithAggregatesFilter>, false>('NestedEnumglucose_range_typeWithAggregatesFilter').implement({
  fields: NestedEnumglucose_range_typeWithAggregatesFilterFields,
});