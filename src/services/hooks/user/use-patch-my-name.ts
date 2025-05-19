import { QueryKey } from "@/services/constants/query-keys";
import patchMyName from "@/services/fetchers/user/patch-my-name";
import { PatchMyNameParams } from "@/services/fetchers/user/patch-my-name";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const usePatchMyName = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (params: PatchMyNameParams) => patchMyName(params),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QueryKey.User],
        refetchType: "all",
      });
    },
    onError: () => {},
  });
};

export default usePatchMyName;
