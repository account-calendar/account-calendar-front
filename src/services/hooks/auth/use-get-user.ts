import { useQuery } from "@tanstack/react-query";
import { QueryKey } from "@/services/constants/query-keys";
import getUser from "@/services/fetchers/auth/get-user-data";

export const useGetUser = () =>
  useQuery({
    queryKey: [QueryKey.User],
    queryFn: getUser,
  });

export default useGetUser;
