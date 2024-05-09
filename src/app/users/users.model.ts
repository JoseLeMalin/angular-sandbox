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
  password: string;
  createdAt: Date;
  updatedAt: Date;
  role: Role;
}
