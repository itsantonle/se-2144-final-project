// automate hunger to decrease every 5 seconds

import "bootstrap/dist/css/bootstrap.min.css"
import {
  // useDeletePet,
  useUpdateHunger,
  // useUpdateDeath,
} from "../services/mutations/petmutations"
import { usePets } from "../services/queries/petQueries"
import { useAuth } from "../context/AuthContext"
import { useEffect } from "react"
import meat from "../components/img/icons/meat.png"
// import { useAssignPenalty } from "../services/mutations/penaltymutations"

export const HungerDisplay = () => {
  const { user } = useAuth()
  const pet = usePets(user!.id).data![0]
  const updateHungerMutation = useUpdateHunger()
  const spacer = ":‎ ‎" //:U+200E is an invisible character

  useEffect(() => {
    if (pet.hunger_status! > 0 && pet.hunger_status! <= 100) {
      const interval = setInterval(() => {
        updateHungerMutation.mutateAsync({
          player_uuid: user!.id,
          hunger_status:
            pet.hunger_status! <= 0 ? 0 : pet.hunger_status! - 5,
        })
      }, 3000) //2 seconds

      return () => clearInterval(interval)
    }
  }, [updateHungerMutation])

  return (
    <div className="counter-style">
      <img src={meat} className="img-fluid" />
      {spacer}
      {pet.hunger_status}
    </div>
  )
}
