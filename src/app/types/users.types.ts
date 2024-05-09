import { User } from "../users/users.model";

export interface UserStateInterface {
  isLoading: boolean;
  users: User[];
  error: string | null;
}
