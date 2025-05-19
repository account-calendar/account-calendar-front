import { UserDTO } from "@/services/types/user";
import API_ROUTES from "@/services/constants/api-routes";
import { apiRequest } from "@/services/instance";

export type GetUserParams = {
  userId: string;
};

export type GetUserDataResponse = UserDTO;

const getUser = async ({ userId }: GetUserParams) => {
  const response = await apiRequest.get<GetUserDataResponse>(
    `${API_ROUTES.USER}/${userId}`
  );

  return response;
};

export default getUser;
