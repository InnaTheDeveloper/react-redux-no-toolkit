import { jsonplaceholderAxiosInstance } from "@/shared/api/jsonplaceholderAxiosInstanse";
import { GetUsersResponse, GetUsersRequest } from "../types/userServices";

class UserService {
  private userServiceEndpoint = "/users";

  async getAllUsers(params: GetUsersRequest) {
    return jsonplaceholderAxiosInstance.get<GetUsersResponse>(
      this.userServiceEndpoint
    );
  }
}

export const userServices = new UserService();
