import { User } from "../dashboard/dashboard.component";

export interface UserStateInterface {
  isLoading: boolean;
  users: User[];
  error: string | null;
}
