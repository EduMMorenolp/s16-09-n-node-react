import { z } from 'zod';

export const userProjectSchema = z.object({
  userId: z.string().min(1, 'Name is required'),
  projectId: z.string().min(1,'Name is required'),
  roleId: z.string().min(1,'Name is required')
});

export type UserProjectInput = z.infer<typeof userProjectSchema>;
