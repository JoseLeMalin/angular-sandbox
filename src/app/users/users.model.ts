import { Role } from "../store/reducers/users.reducers";

export interface Book {
  id: string;
  name: string;
  password: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
  role: Role;
}
