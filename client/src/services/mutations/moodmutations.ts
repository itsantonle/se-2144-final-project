import {
    QueryClient,
    useMutation,
    useQueryClient,
  } from "@tanstack/react-query"
import Mood from "../../types/Mood"
import {
  updateMoodType,
  updateMoodCondition,
  createMood,
  updatePetMood,
  setToDefaultMood,
  deleteMood

} from "../api/moodapi"
 

export const useCreateMood = () => {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: (data: Mood) => createMood(data),

        onMutate: () => {console.log("mutate")},
        onError: () => {console.log("error")},
        onSuccess: () => {console.log("success")},

        onSettled: async (_, error) => {
        (console.log("settled"))
        error 
        ? console.log(error) 
        : await queryClient
        .invalidateQueries({ 
            queryKey: ["moods"]
        })
        }
    })
  }

  export const useUpdatePetMood = () => {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: ({
            player_uuid,
            mood_id,
        }: {
            player_uuid: string
            mood_id: number
        }) => updatePetMood(player_uuid, mood_id),

        onSettled: async (_, error, { player_uuid }) => {
            error 
                ? console.error("Error updating pet mood:", error) 
                : await queryClient.invalidateQueries({
                    queryKey: ["moods", player_uuid]
                })
        }
    })
}

export const useSetToDefaultMood = () => {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: ({
            player_uuid,
        }: {
            player_uuid: string
        }) => setToDefaultMood(player_uuid),

        onSettled: async (_, error, { player_uuid }) => {
            error 
                ? console.error("Error setting to default pet mood of happy (mood_id: 3):", error) 
                : await queryClient.invalidateQueries({
                    queryKey: ["moods", player_uuid]
                })
        }
    })
}


  export const useUpdateMoodType = () => {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: ({
            mood_id,
            mood_type,
        }: {
            mood_id: number
            mood_type: string
        }) => updateMoodType(mood_id, mood_type),

        onSettled: async (_, error) => {
            error 
                ? console.error("Error updating mood type:", error) 
                : await queryClient.invalidateQueries({
                    queryKey: ["moods"]
                })
        }
    })
}

export const useUpdateMoodCondition = () => {
  const queryClient = useQueryClient()

  return useMutation({
      mutationFn: ({
          mood_id,
          mood_condition,
      }: {
          mood_id: number
          mood_condition: string
      }) => updateMoodCondition(mood_id, mood_condition),

      onSettled: async (_, error) => {
          error 
              ? console.error("Error updating mood condition:", error) 
              : await queryClient.invalidateQueries({
                  queryKey: ["moods"]
              })
      }
  })
}

export const useDeleteMood = () => {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: (mood_id: number) => deleteMood(mood_id),

        onSuccess: () => { console.log("Successfully deleted mood.") },

        onSettled: async (_, error) => {
            error 
                ? console.error("Error deleting mood:", error) 
                : await queryClient.invalidateQueries({
                    queryKey: ["moods"]
                })
        }
    })
}