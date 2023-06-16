import { useQuery } from "react-query";
import { fetchPlayers } from "../../api";

const STALE_TIME = 1000 * 60 * 60 * 2 // 2 hours

export function usePlayers() {
    return useQuery(['players'], () => fetchPlayers(), { staleTime: STALE_TIME, select(data) {
        return {
            ...data,
        }
    } })
}