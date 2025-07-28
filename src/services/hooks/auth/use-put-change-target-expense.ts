import { QueryKey } from "@/services/constants/query-keys";
import putChangeTargetExpense from "@/services/fetchers/auth/put-change-target-expense";
import type {
  PutChangeTargetExpensePayload,
  PutChangeTargetExpenseResponse,
} from "@/services/fetchers/auth/put-change-target-expense";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { AxiosError } from "axios";

const usePutChangeTargetExpense = () => {
  const queryClient = useQueryClient();

  return useMutation<
    PutChangeTargetExpenseResponse,
    AxiosError,
    PutChangeTargetExpensePayload
  >({
    mutationFn: putChangeTargetExpense,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QueryKey.User],
        refetchType: "all",
      });
    },
  });
};

export default usePutChangeTargetExpense;
