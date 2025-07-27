import API_ROUTES from "@/services/constants/api-routes";
import { apiRequest } from "@/services/instance";
import type { UserDTO } from "@/services/types/auth";

type PostLoginRequest = { email: string; password: string };

type PostLoginResponse = UserDTO;

type PostLoginPayload = {
  request: PostLoginRequest;
};

const postLogin = async ({ request }: PostLoginPayload) => {
  const response = await apiRequest.post<PostLoginResponse, PostLoginRequest>(
    API_ROUTES.AUTH.LOGIN,
    request
  );

  return response;
};

export default postLogin;

export type { PostLoginPayload, PostLoginResponse, PostLoginRequest };
