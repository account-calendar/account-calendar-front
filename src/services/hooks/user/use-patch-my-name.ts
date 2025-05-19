import { QueryKey } from "@/services/constants/query-keys";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import patchMyName, {
  PatchMyNameResponse,
} from "@/services/fetchers/user/patch-my-name";
import type { PatchMyNamePayload } from "@/services/fetchers/user/patch-my-name";
import { AxiosError } from "axios";

const usePatchMyName = () => {
  const queryClient = useQueryClient();

  return useMutation<PatchMyNameResponse, AxiosError, PatchMyNamePayload>({
    mutationFn: (payload) => patchMyName(payload),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QueryKey.User],
        refetchType: "all",
      });
    },
    onError: (error) => {},
  });
};

export default usePatchMyName;
