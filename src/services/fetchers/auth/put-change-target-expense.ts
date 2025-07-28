import API_ROUTES from "@/services/constants/api-routes";
import { apiRequest } from "@/services/instance";
import type { UserDTO } from "@/services/types/auth";

type PutChangeTargetExpenseRequest = { targetExpense: number };

type PutChangeTargetExpenseResponse = UserDTO;

type PutChangeTargetExpensePayload = {
  request: PutChangeTargetExpenseRequest;
};

const putChangeTargetExpense = async ({
  request,
}: PutChangeTargetExpensePayload) => {
  const response = await apiRequest.put<
    PutChangeTargetExpenseResponse,
    PutChangeTargetExpenseRequest
  >(API_ROUTES.AUTH.CHANGE_TARGET_EXPENSE, request);

  return response;
};

export default putChangeTargetExpense;

export type {
  PutChangeTargetExpensePayload,
  PutChangeTargetExpenseResponse,
  PutChangeTargetExpenseRequest,
};
