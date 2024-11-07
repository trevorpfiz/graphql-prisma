import { relations, sql } from 'drizzle-orm'
import { decimal, doublePrecision, foreignKey, integer, jsonb, pgEnum, pgTable, text, timestamp, uniqueIndex } from 'drizzle-orm/pg-core'

export const diabetes_status = pgEnum('diabetes_status', ['none', 'pre', 'type1', 'type2', 'type3'])

export const glucose_range_type = pgEnum('glucose_range_type', ['standard', 'tight', 'optimal'])

export const users = pgTable('users', {
	id: text('id').notNull().primaryKey()
});

export const hyper_activity = pgTable('hyper_activity', {
	id: text('id').notNull().primaryKey().default(sql`gen_random_uuid()`),
	activity_type_id: text('activity_type_id').notNull(),
	profile_id: text('profile_id').notNull(),
	created_at: timestamp('created_at', { precision: 3 }).notNull().defaultNow(),
	updatedAt: timestamp('updatedAt', { precision: 3 })
}, (hyper_activity) => ({
	'hyper_activity_hyper_activity_type_fkey': foreignKey({
		name: 'hyper_activity_hyper_activity_type_fkey',
		columns: [hyper_activity.activity_type_id],
		foreignColumns: [hyper_activity_type.id]
	})
		.onUpdate('cascade'),
	'hyper_activity_hyper_profile_fkey': foreignKey({
		name: 'hyper_activity_hyper_profile_fkey',
		columns: [hyper_activity.profile_id],
		foreignColumns: [hyper_profile.id]
	})
		.onUpdate('cascade')
}));

export const hyper_activity_type = pgTable('hyper_activity_type', {
	id: text('id').notNull().primaryKey().default(sql`gen_random_uuid()`),
	name: text('name').notNull().unique()
});

export const hyper_cgm_data = pgTable('hyper_cgm_data', {
	id: text('id').notNull().primaryKey().default(sql`gen_random_uuid()`),
	dexcom_user_id: text('dexcom_user_id').notNull(),
	record_id: text('record_id').notNull().unique(),
	system_time: timestamp('system_time', { precision: 3 }).notNull(),
	display_time: timestamp('display_time', { precision: 3 }).notNull(),
	glucose_value: integer('glucose_value'),
	trend: text('trend'),
	trend_rate: doublePrecision('trend_rate'),
	transmitter_id: text('transmitter_id'),
	transmitter_generation: text('transmitter_generation').notNull(),
	display_device: text('display_device').notNull(),
	profile_id: text('profile_id').notNull(),
	created_at: timestamp('created_at', { precision: 3 }).notNull().defaultNow(),
	updatedAt: timestamp('updatedAt', { precision: 3 }),
	transmitter_ticks: integer('transmitter_ticks').notNull(),
	status: text('status'),
	unit: text('unit').notNull(),
	rate_unit: text('rate_unit').notNull()
}, (hyper_cgm_data) => ({
	'hyper_cgm_data_hyper_profile_fkey': foreignKey({
		name: 'hyper_cgm_data_hyper_profile_fkey',
		columns: [hyper_cgm_data.profile_id],
		foreignColumns: [hyper_profile.id]
	})
		.onUpdate('cascade')
}));

export const hyper_daily_recap = pgTable('hyper_daily_recap', {
	id: text('id').notNull().primaryKey().default(sql`gen_random_uuid()`),
	date: timestamp('date', { precision: 3 }).notNull(),
	average_glucose: integer('average_glucose'),
	minimum_glucose: integer('minimum_glucose'),
	maximum_glucose: integer('maximum_glucose'),
	glucose_variability: decimal('glucose_variability', { precision: 65, scale: 30 }),
	time_in_ranges: jsonb('time_in_ranges'),
	total_readings: integer('total_readings'),
	profile_id: text('profile_id').notNull(),
	created_at: timestamp('created_at', { precision: 3 }).notNull().defaultNow(),
	updatedAt: timestamp('updatedAt', { precision: 3 }),
	timezone: text('timezone').notNull()
}, (hyper_daily_recap) => ({
	'hyper_daily_recap_hyper_profile_fkey': foreignKey({
		name: 'hyper_daily_recap_hyper_profile_fkey',
		columns: [hyper_daily_recap.profile_id],
		foreignColumns: [hyper_profile.id]
	})
		.onUpdate('cascade'),
	'hyper_daily_recap_profile_id_date_unique_idx': uniqueIndex('hyper_daily_recap_profile_id_date_key')
		.on(hyper_daily_recap.profile_id, hyper_daily_recap.date),
	'hyper_daily_recap_date_profile_id_unique_idx': uniqueIndex('hyper_daily_recap_date_profile_id_key')
		.on(hyper_daily_recap.date, hyper_daily_recap.profile_id)
}));

export const hyper_meal = pgTable('hyper_meal', {
	id: text('id').notNull().primaryKey().default(sql`gen_random_uuid()`),
	meal_time: timestamp('meal_time', { precision: 3 }).notNull().defaultNow(),
	carbohydrates: doublePrecision('carbohydrates'),
	dietary_energy: doublePrecision('dietary_energy'),
	dietary_sugar: doublePrecision('dietary_sugar'),
	fiber: doublePrecision('fiber'),
	protein: doublePrecision('protein'),
	total_fat: doublePrecision('total_fat'),
	profile_id: text('profile_id').notNull(),
	created_at: timestamp('created_at', { precision: 3 }).notNull().defaultNow(),
	updatedAt: timestamp('updatedAt', { precision: 3 })
}, (hyper_meal) => ({
	'hyper_meal_hyper_profile_fkey': foreignKey({
		name: 'hyper_meal_hyper_profile_fkey',
		columns: [hyper_meal.profile_id],
		foreignColumns: [hyper_profile.id]
	})
		.onUpdate('cascade')
}));

export const hyper_profile = pgTable('hyper_profile', {
	id: text('id').notNull().primaryKey(),
	name: text('name').notNull(),
	image: text('image'),
	email: text('email').unique(),
	last_synced_time: timestamp('last_synced_time', { precision: 3 }),
	diabetes_status: diabetes_status('diabetes_status').notNull().default("none"),
	glucose_range_type: glucose_range_type('glucose_range_type').notNull().default("tight")
}, (hyper_profile) => ({
	'hyper_profile_users_fkey': foreignKey({
		name: 'hyper_profile_users_fkey',
		columns: [hyper_profile.id],
		foreignColumns: [users.id]
	})
		.onDelete('cascade')
		.onUpdate('cascade')
}));

export const hyper_report = pgTable('hyper_report', {
	id: text('id').notNull().primaryKey().default(sql`gen_random_uuid()`),
	title: text('title').notNull(),
	content: text('content'),
	profile_id: text('profile_id').notNull(),
	created_at: timestamp('created_at', { precision: 3 }).notNull().defaultNow(),
	updatedAt: timestamp('updatedAt', { precision: 3 })
}, (hyper_report) => ({
	'hyper_report_hyper_profile_fkey': foreignKey({
		name: 'hyper_report_hyper_profile_fkey',
		columns: [hyper_report.profile_id],
		foreignColumns: [hyper_profile.id]
	})
		.onUpdate('cascade')
}));

export const usersRelations = relations(users, ({ many }) => ({
	hyper_profile: many(hyper_profile, {
		relationName: 'hyper_profileTousers'
	})
}));

export const hyper_activityRelations = relations(hyper_activity, ({ one }) => ({
	hyper_activity_type: one(hyper_activity_type, {
		relationName: 'hyper_activityTohyper_activity_type',
		fields: [hyper_activity.activity_type_id],
		references: [hyper_activity_type.id]
	}),
	hyper_profile: one(hyper_profile, {
		relationName: 'hyper_activityTohyper_profile',
		fields: [hyper_activity.profile_id],
		references: [hyper_profile.id]
	})
}));

export const hyper_activity_typeRelations = relations(hyper_activity_type, ({ many }) => ({
	hyper_activity: many(hyper_activity, {
		relationName: 'hyper_activityTohyper_activity_type'
	})
}));

export const hyper_cgm_dataRelations = relations(hyper_cgm_data, ({ one }) => ({
	hyper_profile: one(hyper_profile, {
		relationName: 'hyper_cgm_dataTohyper_profile',
		fields: [hyper_cgm_data.profile_id],
		references: [hyper_profile.id]
	})
}));

export const hyper_daily_recapRelations = relations(hyper_daily_recap, ({ one }) => ({
	hyper_profile: one(hyper_profile, {
		relationName: 'hyper_daily_recapTohyper_profile',
		fields: [hyper_daily_recap.profile_id],
		references: [hyper_profile.id]
	})
}));

export const hyper_mealRelations = relations(hyper_meal, ({ one }) => ({
	hyper_profile: one(hyper_profile, {
		relationName: 'hyper_mealTohyper_profile',
		fields: [hyper_meal.profile_id],
		references: [hyper_profile.id]
	})
}));

export const hyper_profileRelations = relations(hyper_profile, ({ many, one }) => ({
	hyper_activity: many(hyper_activity, {
		relationName: 'hyper_activityTohyper_profile'
	}),
	hyper_cgm_data: many(hyper_cgm_data, {
		relationName: 'hyper_cgm_dataTohyper_profile'
	}),
	hyper_daily_recap: many(hyper_daily_recap, {
		relationName: 'hyper_daily_recapTohyper_profile'
	}),
	hyper_meal: many(hyper_meal, {
		relationName: 'hyper_mealTohyper_profile'
	}),
	users: one(users, {
		relationName: 'hyper_profileTousers',
		fields: [hyper_profile.id],
		references: [users.id]
	}),
	hyper_report: many(hyper_report, {
		relationName: 'hyper_profileTohyper_report'
	})
}));

export const hyper_reportRelations = relations(hyper_report, ({ one }) => ({
	hyper_profile: one(hyper_profile, {
		relationName: 'hyper_profileTohyper_report',
		fields: [hyper_report.profile_id],
		references: [hyper_profile.id]
	})
}));