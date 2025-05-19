import { useQuery } from "@tanstack/react-query";
import { QueryKey } from "@/services/constants/query-keys";
import getUser, { GetUserParams } from "@/services/fetchers/user/get-user-data";

export const useGetUser = (params: GetUserParams) =>
  useQuery({
    queryKey: [QueryKey.User, params],
    queryFn: () => getUser(params),
  });

export default useGetUser;
