import { SignIn } from "./components/Auth/SignIn"
import { SignUp } from "./components/Auth/SignUp"
import { useAuth } from "./context/AuthContext"
import { useState } from "react"
import PetSelection from "./components/pet-selection/Pet-selection"
import PetStage from "./Stage"
import { usePets } from "./services/queries/petQueries"
import { ToastContainer } from "react-toastify"



export const switchPet = (testPet: any) => {
  return testPet == "Hydra" ? "Capycorn" : "Hydra"
}
// ---------------------------------------

function AuthenticatedApp() {
  const { user } = useAuth()
  const { data, isPending, isSuccess } = usePets(user!.id)

  return (
    <div className="game-wrapper">
      {/* <PetSelection /> */}
      {isPending ? (
        <p>Loading....</p>
      ) : isSuccess && data.length > 0 ? (
        <PetStage pet={data[0]} />
      ) : (
        <PetSelection />
      )}
      <ToastContainer />
    </div>
  )
}

function UnauthenticatedApp() {
  const [isSignIn, setIsSignIn] = useState(true)

  return (
    <div className="auth-container">
      <div className="auth-form-container">
        <div className="auth-toggle-container">
          <button
            onClick={() => setIsSignIn(true)}
            className={`auth-toggle-button ${isSignIn ? "active" : ""}`}
          >
            Sign In
          </button>
          <button
            onClick={() => setIsSignIn(false)}
            className={`auth-toggle-button ${!isSignIn ? "active" : ""}`}
          >
            Sign Up
          </button>
        </div>
        {isSignIn ? <SignIn /> : <SignUp />}
      </div>
    </div>
  )
}

function App() {
  const { user, loading } = useAuth()

  if (loading) {
    return <div>Loading...</div>
  }

  return user ? <AuthenticatedApp /> : <UnauthenticatedApp />
}

export default App
