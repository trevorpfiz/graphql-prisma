import { Prisma } from '@prisma/client';
import { builder } from '../../schema/builder';

export const BatchPayload = builder.objectType(builder.objectRef<Prisma.BatchPayload>('BatchPayload'), {
  description: 'Batch payloads from prisma.',
  fields: (t) => ({
    count: t.exposeInt('count', { description: 'Prisma Batch Payload', nullable: false }),
  }),
});

export const modelNames = [
  'users',
  'hyper_activity',
  'hyper_activity_type',
  'hyper_cgm_data',
  'hyper_daily_recap',
  'hyper_meal',
  'hyper_profile',
  'hyper_report',
] as const;

export type Model = typeof modelNames[number];
