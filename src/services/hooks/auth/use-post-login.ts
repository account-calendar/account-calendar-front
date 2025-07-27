import { QueryKey } from "@/services/constants/query-keys";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import postLogin from "@/services/fetchers/auth/post-login";
import type {
  PostLoginPayload,
  PostLoginResponse,
} from "@/services/fetchers/auth/post-login";
import { AxiosError } from "axios";

const usePostLogin = () => {
  const queryClient = useQueryClient();

  return useMutation<PostLoginResponse, AxiosError, PostLoginPayload>({
    mutationFn: postLogin,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QueryKey.User],
        refetchType: "all",
      });
    },
    onError: (error) => {},
  });
};

export default usePostLogin;
