import { IAdminStateSchema } from "@/entities/admin/model/types/adminTypes";
import { IUserStateSchema } from "@/entities/user/model/types/userTypes";

export interface StateSchema {
  user: IUserStateSchema;
  admin: IAdminStateSchema;
}
