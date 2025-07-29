import { useQuery } from "@tanstack/react-query";
import { QueryKey } from "@/services/constants/query-keys";
import getTransactions from "@/services/fetchers/transactions/get-transactions";
import type { GetTransactionsPayload } from "@/services/fetchers/transactions/get-transactions";

export const useGetTransactions = (payload: GetTransactionsPayload) =>
  useQuery({
    queryKey: [QueryKey.Transactions, payload.params],
    queryFn: () => getTransactions(payload),
  });

export default useGetTransactions;
