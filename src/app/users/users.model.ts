import { z } from "zod";

export enum Role {
  ADMIN = "admin",
  EDITOR = "editor",
  READER = "reader",
  GHOST = "ghost",
}
export interface User {
  id: string;
  name: string;
  email: string;
  password?: string;
  createdAt: string;
  updatedAt: string;
  role: Role;
}

export type CreateUser = Required<Pick<User, "name" | "email" | "password" | "role">>;
export type UpdateUser = Required<Pick<User, "id">> & Partial<User>;

export interface UserStateInterface {
  isLoading: boolean;
  users: User[];
  error: string | null;
}

export const SchemaUser = z.object({
  id: z.string().uuid(),
  name: z.string(),
  email: z.string(),
  password: z.string().optional(),
  createdAt: z.string(),
  updatedAt: z.string(),
  role: z.nativeEnum(Role),
});
export const SchemaUsers = z.array(SchemaUser);

// type UserInfered = z.infer<typeof SchemaUser>;
