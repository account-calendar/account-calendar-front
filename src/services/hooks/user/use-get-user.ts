import { useQuery } from "@tanstack/react-query";
import { QueryKey } from "@/services/constants/query-keys";
import getUser from "@/services/fetchers/user/get-user-data";
import type { GetUserDataPayload } from "@/services/fetchers/user/get-user-data";

export const useGetUser = (params: GetUserDataPayload) =>
  useQuery({
    queryKey: [QueryKey.User, "list", params],
    queryFn: () => getUser(params),
  });

export default useGetUser;
