import { useQuery } from "react-query"
import { getGroupsApi } from "../api"
import { QUERY_KEY } from "./QueryKey"

export const useGetGroups=()=>{
    return useQuery({
        queryKey:[QUERY_KEY.GET_GROUPS],
        queryFn:getGroupsApi
    })
}