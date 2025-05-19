import API_ROUTES from "@/services/constants/api-routes";
import { apiRequest } from "@/services/instance";
import type { UserDTO } from "@/services/types/user";

type PatchMyNameRequest = { name: string };

type PatchMyNameResponse = UserDTO;

type PatchMyNameParams = { id: string };

type PatchMyNamePayload = {
  params: PatchMyNameParams;
  request: PatchMyNameRequest;
};

const patchMyName = async ({ params: { id }, request }: PatchMyNamePayload) => {
  const response = await apiRequest.patch<
    PatchMyNameResponse,
    PatchMyNameRequest
  >(`${API_ROUTES.USER}/name/${id}`, request);

  return response;
};

export default patchMyName;

export type {
  PatchMyNamePayload,
  PatchMyNameResponse,
  PatchMyNameParams,
  PatchMyNameRequest,
};
