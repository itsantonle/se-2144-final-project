;

import { useState } from "react"
import { useAuth } from "../../context/AuthContext"
import "./Pet-selection.scss"
import { useCreatePet } from "../../services/mutations/petmutations"
import { Pet } from "../../types/Pet"
import { toast } from "react-toastify"
import Logo from "../Logo"

interface Pets {
  name: string
  image?: string
  type: "Hydra" | "Capycorn"
}

export default function PetSelection() {
  const useCreatePetMutation = useCreatePet()
  const [selectedPet, setSelectedPet] = useState<Pets | null>(null)
  const [petName, setPetName] = useState("")
  const { signOut, user } = useAuth()

  const handleStartAdventure = () => {
    if (selectedPet && petName) {
      const newPet: Pet = {
        pet_name: petName,
        pet_type: selectedPet.type,
        player_uuid: user!.id,
      }
      useCreatePetMutation.mutate(newPet, {
        onSuccess: () => {
          toast("You've created a pet!")
        },
      })
    }
  }

  return (
    <div className="gameContainer">
      <button className="logoutButton" onClick={signOut}>
        LOG OUT
      </button>

      <Logo />
      <h2 className="chooseTitle">CHOOSE YOUR PET</h2>

      <div className="petSelection">
        <div
          className={`petCard ${selectedPet?.type === "Hydra" ? "selected" : ""}`}
          onClick={() =>
            setSelectedPet({
              type: "Hydra",
              name: "HYDRA",
              image: "/hydra.png",
            })
          }
        >
          <img src="/hydra.png" alt="Hydra" className="petImage" />
          <p className="petName">HYDRA</p>
        </div>

        <div
          className={`petCard ${selectedPet?.type === "Capycorn" ? "selected" : ""}`}
          onClick={() =>
            setSelectedPet({
              type: "Capycorn",
              name: "CAPYCORN",
              image: "/capycorn.png",
            })
          }
        >
          <img
            src="/capycorn.png"
            alt="Capycorn"
            className="petImage"
          />
          <p className="petName">CAPYCORN</p>
        </div>
      </div>
      <div></div>
      <div className="nameInputContainer">
        <input
          type="text"
          placeholder="My name Pwease"
          value={petName}
          onChange={(e) => setPetName(e.target.value)}
          className="pixelInput"
          maxLength={20}
          aria-label="Enter Pet Name"
        />

        <button
          className="startButton"
          onClick={handleStartAdventure}
          disabled={!selectedPet || !petName}
        >
          {!selectedPet
            ? "Choose your pet first"
            : !petName
              ? "Give me a Name"
              : "START"}
        </button>
      </div>
    </div>
  )
}
