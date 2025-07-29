import API_ROUTES from "@/services/constants/api-routes";
import { apiRequest } from "@/services/instance";
import type { TransactionsDTO } from "@/services/types/transactions";

type GetTransactionsParameter = {
  startDate: string;
  endDate: string;
};

type GetTransactionsResponse = TransactionsDTO;

type GetTransactionsPayload = {
  params: GetTransactionsParameter;
};

const getTransactions = async ({ params }: GetTransactionsPayload) => {
  const response = await apiRequest.get<GetTransactionsResponse>(
    API_ROUTES.TRANSACTIONS.GET,
    {
      params: {
        "start-date": params.startDate,
        "end-date": params.endDate,
      },
    }
  );

  return response.data;
};

export default getTransactions;

export type {
  GetTransactionsResponse,
  GetTransactionsParameter,
  GetTransactionsPayload,
};
