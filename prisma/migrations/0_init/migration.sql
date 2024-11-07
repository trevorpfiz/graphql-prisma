-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "auth";

-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "public";

-- CreateEnum
CREATE TYPE "public"."diabetes_status" AS ENUM ('none', 'pre', 'type1', 'type2', 'type3');

-- CreateEnum
CREATE TYPE "public"."glucose_range_type" AS ENUM ('standard', 'tight', 'optimal');

-- CreateTable
CREATE TABLE "auth"."users" (
    "id" UUID NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."hyper_activity" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "duration" interval NOT NULL,
    "activity_type_id" UUID NOT NULL,
    "profile_id" UUID NOT NULL,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(6),

    CONSTRAINT "hyper_activity_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."hyper_activity_type" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "name" VARCHAR(50) NOT NULL,

    CONSTRAINT "hyper_activity_type_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."hyper_cgm_data" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "dexcom_user_id" VARCHAR(255) NOT NULL,
    "record_id" VARCHAR(255) NOT NULL,
    "system_time" TIMESTAMPTZ(6) NOT NULL,
    "display_time" TIMESTAMPTZ(6) NOT NULL,
    "glucose_value" INTEGER,
    "trend" VARCHAR(20),
    "trend_rate" DOUBLE PRECISION,
    "transmitter_id" VARCHAR(255),
    "transmitter_generation" VARCHAR(20) NOT NULL,
    "display_device" VARCHAR(20) NOT NULL,
    "profile_id" UUID NOT NULL,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(6),
    "transmitter_ticks" INTEGER NOT NULL,
    "status" VARCHAR(20),
    "unit" VARCHAR(10) NOT NULL,
    "rate_unit" VARCHAR(20) NOT NULL,

    CONSTRAINT "hyper_cgm_data_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."hyper_daily_recap" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "date" TIMESTAMPTZ(6) NOT NULL,
    "average_glucose" INTEGER,
    "minimum_glucose" INTEGER,
    "maximum_glucose" INTEGER,
    "glucose_variability" DECIMAL,
    "time_in_ranges" JSONB,
    "total_readings" INTEGER,
    "profile_id" UUID NOT NULL,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(6),
    "timezone" VARCHAR(50) NOT NULL,

    CONSTRAINT "hyper_daily_recap_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."hyper_meal" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "meal_time" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "carbohydrates" DOUBLE PRECISION,
    "dietary_energy" DOUBLE PRECISION,
    "dietary_sugar" DOUBLE PRECISION,
    "fiber" DOUBLE PRECISION,
    "protein" DOUBLE PRECISION,
    "total_fat" DOUBLE PRECISION,
    "profile_id" UUID NOT NULL,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(6),

    CONSTRAINT "hyper_meal_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."hyper_profile" (
    "id" UUID NOT NULL,
    "name" VARCHAR(256) NOT NULL,
    "image" VARCHAR(256),
    "email" VARCHAR(256),
    "last_synced_time" TIMESTAMPTZ(6),
    "diabetes_status" "public"."diabetes_status" NOT NULL DEFAULT 'none',
    "glucose_range_type" "public"."glucose_range_type" NOT NULL DEFAULT 'tight',

    CONSTRAINT "hyper_profile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."hyper_report" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "title" VARCHAR(256) NOT NULL,
    "content" TEXT,
    "profile_id" UUID NOT NULL,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(6),

    CONSTRAINT "hyper_report_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "hyper_activity_type_name_unique" ON "public"."hyper_activity_type"("name");

-- CreateIndex
CREATE UNIQUE INDEX "cgm_data_record_id_idx" ON "public"."hyper_cgm_data"("record_id");

-- CreateIndex
CREATE INDEX "cgm_data_profile_id_idx" ON "public"."hyper_cgm_data"("profile_id");

-- CreateIndex
CREATE UNIQUE INDEX "daily_recap_profile_id_date_idx" ON "public"."hyper_daily_recap"("profile_id", "date");

-- CreateIndex
CREATE UNIQUE INDEX "hyper_daily_recap_date_profile_id_unique" ON "public"."hyper_daily_recap"("date", "profile_id");

-- CreateIndex
CREATE UNIQUE INDEX "email_idx" ON "public"."hyper_profile"("email");

-- CreateIndex
CREATE INDEX "name_idx" ON "public"."hyper_profile"("name");

-- AddForeignKey
ALTER TABLE "public"."hyper_activity" ADD CONSTRAINT "hyper_activity_activity_type_id_hyper_activity_type_id_fk" FOREIGN KEY ("activity_type_id") REFERENCES "public"."hyper_activity_type"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "public"."hyper_activity" ADD CONSTRAINT "hyper_activity_profile_id_hyper_profile_id_fk" FOREIGN KEY ("profile_id") REFERENCES "public"."hyper_profile"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "public"."hyper_cgm_data" ADD CONSTRAINT "hyper_cgm_data_profile_id_hyper_profile_id_fk" FOREIGN KEY ("profile_id") REFERENCES "public"."hyper_profile"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "public"."hyper_daily_recap" ADD CONSTRAINT "hyper_daily_recap_profile_id_hyper_profile_id_fk" FOREIGN KEY ("profile_id") REFERENCES "public"."hyper_profile"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "public"."hyper_meal" ADD CONSTRAINT "hyper_meal_profile_id_hyper_profile_id_fk" FOREIGN KEY ("profile_id") REFERENCES "public"."hyper_profile"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "public"."hyper_profile" ADD CONSTRAINT "hyper_profile_id_users_id_fk" FOREIGN KEY ("id") REFERENCES "auth"."users"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "public"."hyper_report" ADD CONSTRAINT "hyper_report_profile_id_hyper_profile_id_fk" FOREIGN KEY ("profile_id") REFERENCES "public"."hyper_profile"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

