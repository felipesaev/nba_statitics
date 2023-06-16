import { useQuery } from "react-query";
import { fetchTeams } from "../../api";

const STALE_TIME = 1000 * 60 * 60 * 2 // 2 hours

export function useTeams() {
    return useQuery(['teams'], () => fetchTeams(), { staleTime: STALE_TIME, select(data) {
        return {
            ...data,
        }
    } })
}