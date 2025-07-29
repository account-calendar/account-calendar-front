import type { UserDTO } from "@/services/types/auth";
import API_ROUTES from "@/services/constants/api-routes";
import { apiRequest } from "@/services/instance";

type GetUserDataResponse = UserDTO;

const getUser = async () => {
  const response = await apiRequest.get<GetUserDataResponse>(
    API_ROUTES.AUTH.USER
  );

  return response.data;
};

export default getUser;

export type { GetUserDataResponse };
