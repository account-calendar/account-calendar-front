import API_ROUTES from "@/services/constants/api-routes";
import { apiRequest } from "@/services/instance";
import type { TransactionInfoDTO } from "@/services/types/transactions";

type GetTransactionDateParameter = {
  date: string;
};

type GetTransactionDateResponse = {
  incomeList: TransactionInfoDTO[];
  expenseList: TransactionInfoDTO[];
};

type GetTransactionDatePayload = {
  params: GetTransactionDateParameter;
};

const getTransactionDate = async ({ params }: GetTransactionDatePayload) => {
  const response = await apiRequest.get<GetTransactionDateResponse>(
    `${API_ROUTES.TRANSACTIONS.GET}/${params.date}`
  );

  return response.data;
};

export default getTransactionDate;

export type {
  GetTransactionDateResponse,
  GetTransactionDateParameter,
  GetTransactionDatePayload,
};
