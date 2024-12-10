import { useQuery } from "@tanstack/react-query"
import { getMoods } from "../api/moodapi"
import  Mood  from "../../types/Mood"

export const useMoods = (player_uuid: string) => {
  return useQuery<Mood[], Error>({
    queryKey: ["moods", player_uuid],
    queryFn: () => getMoods(),
  })
}
