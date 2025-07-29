import { useQuery } from "@tanstack/react-query";
import { QueryKey } from "@/services/constants/query-keys";
import getTransactionDate from "@/services/fetchers/transactions/get-transaction-date";
import type { GetTransactionDatePayload } from "@/services/fetchers/transactions/get-transaction-date";

export const useGetTransactionDate = (payload: GetTransactionDatePayload) =>
  useQuery({
    queryKey: [QueryKey.Transactions, payload.params.date],
    queryFn: () => getTransactionDate(payload),
  });

export default useGetTransactionDate;
