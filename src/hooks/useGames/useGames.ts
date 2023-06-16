import { useQuery } from "react-query";
import { fetchGames } from "../../api";

const STALE_TIME = 1000 * 60 * 60 * 2 // 2 hours

export function useGames() {
    return useQuery(['games'], () => fetchGames(), { staleTime: STALE_TIME, select(data) {         
        return {
            ...data,
        }
    } })
}