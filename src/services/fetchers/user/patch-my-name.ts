import API_ROUTES from "@/services/constants/api-routes";
import { apiRequest } from "@/services/instance";
import { UserDTO } from "@/services/types/user";

type PatchMyNameRequest = { name: string };

type PatchMyNameResponse = UserDTO;

type PatchMyNameParams = { id: string; request: PatchMyNameRequest };

const patchMyName = async ({ id, request }: PatchMyNameParams) => {
  const response = await apiRequest.patch<
    PatchMyNameResponse,
    PatchMyNameRequest
  >(`${API_ROUTES.USER}/name/${id}`, request);

  return response;
};

export default patchMyName;

export type { PatchMyNameParams, PatchMyNameResponse, PatchMyNameRequest };
