import { jsonplaceholderAxiosInstance } from "@/shared/api/jsonplaceholderAxiosInstanse";
import { GetUsersResponse, GetUsersRequest } from "../types/usersServices";

class AdminService {
  private usersServiceEndpoint = "/users";

  async getAllUsers(_params: GetUsersRequest) {
    return jsonplaceholderAxiosInstance.get<GetUsersResponse>(
      this.usersServiceEndpoint
    );
  }
}

export const adminServices = new AdminService();
