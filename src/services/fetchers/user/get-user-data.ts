import type { UserDTO } from "@/services/types/user";
import API_ROUTES from "@/services/constants/api-routes";
import { apiRequest } from "@/services/instance";

type GetUserParams = {
  userId: string;
};

type GetUserDataPayload = {
  params: GetUserParams;
};

type GetUserDataResponse = UserDTO;

const getUser = async ({ params: { userId } }: GetUserDataPayload) => {
  const response = await apiRequest.get<GetUserDataResponse>(
    `${API_ROUTES.USER}/${userId}`
  );

  return response;
};

export default getUser;

export type { GetUserDataPayload, GetUserParams, GetUserDataResponse };
