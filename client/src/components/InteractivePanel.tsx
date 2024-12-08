import "bootstrap/dist/css/bootstrap.min.css"
import { manageHappiness } from "../utils/interfaceUtil/happinessBarUtil"
import happyStar from "../components/img/icons/happy_star.png"
import meat from "../components/img/icons/meat.png"
import feedButton from "../components/img/icons/feedButton.png"
import playButton from "../components/img/icons/playButton.png"
import { getValues } from "./DB_PanelLink"
import { manageHunger } from "../utils/interfaceUtil/hungerBarUtil"
import healthBarFrame from "./img/icons/health-bar-frame-1.png"
import { AnimatedHealthBar } from "./healthbar"
// import * as React from "react"
import { manageHealth } from "../utils/interfaceUtil/healthBarUtil"
import { usePets } from "../services/queries/petQueries"
import { useAuth } from "../context/AuthContext"

const Panel = () => {
  const { user } = useAuth()
  const pet = usePets(user!.id).data![0]

  // //Uncomment if reall DB is connected
  // const { happyValue, hungerValue, healthValue, error, loading } = getValues();

  const { isHappyValue, isPlayingClicked } = manageHappiness()
  const { isHungryValue, isEatingClicked } = manageHunger()
  const { isHealthyValue, trackIncrease } = manageHealth()

  const eatingUtils = () => {
    isEatingClicked()
    trackIncrease()
  }

  const playingutils = () => {
    isPlayingClicked()
    trackIncrease()
  }

  return (
    <div className="panel-container position-absolute top-80 start-50 translate-middle">
      <div className="counter-container">
        {/* Delete after DB implementation -------------*/}
        <div className="counter-style">
          {" "}
          <img src={happyStar} className="img-fluid" />:{" "}
          {isHappyValue}{" "}
        </div>
        <div className="counter-style">
          {" "}
          <img src={meat} className="img-fluid" />: {isHungryValue}{" "}
        </div>
        {/* --------------------------------- */}

        {/* Uncomment if real DB is connected */}
        {/* <div className = "counter-style"> <img src={happyStar} className="img-fluid" />: {loading ? 'Loading...' : error ? `Error: ${error}` :isHappyValue} </div>
                <div className = "counter-style"> <img src={meat} className="img-fluid" />: {loading ? 'Loading...' : error ? `Error: ${error}` : isHungryValue} </div> */}
      </div>

      <div className="name-bar-button-container">
        <div className="name-buttons-container">
          <textarea
            className="name-text-style"
            placeholder="pet"
            readOnly
          >
            {pet.pet_name}
          </textarea>

          <button
            className="button-style"
            type="button"
            onClick={eatingUtils}
          >
            <img src={feedButton} className="img-fluid" />
          </button>
          <button
            className="button-style"
            type="button"
            onClick={playingutils}
          >
            <img src={playButton} className="img-fluid" />
          </button>
          <button
            className="button-style"
            type="button"
            onClick={playingutils}
          >
            <img src={playButton} className="img-fluid" />
          </button>
        </div>
        <div className="health-bar-style">
          {isHealthyValue}
          <textarea
            className="HP-text-style"
            placeholder="HP:"
            readOnly
          ></textarea>
          <div>
            <img src={healthBarFrame} className="health-bar-frame" />
            <AnimatedHealthBar />
          </div>
        </div>
      </div>

      <div className="mood-container">
        <textarea
          className="mood-style"
          placeholder="Mood"
          readOnly
        ></textarea>
      </div>
    </div>
  )
}

export default Panel
