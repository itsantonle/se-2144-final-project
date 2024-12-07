import React, {useEffect, useState} from "react"
import { manageHealth } from "../utils/interfaceUtil/healthBarUtil";
import healhBarImg from "./img/icons/health-bar1-2t.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import {timerValue, maxWidth} from "../utils/interfaceUtil/barValueUtil"
// const {isHealthyValue} = manageHealth();
import {happyValue, manageHappiness} from "../utils/interfaceUtil/happinessBarUtil";
import {manageHunger} from "../utils/interfaceUtil/hungerBarUtil";


let healthBarWidth = 340

const maxHealth = 340
const minHealth = 0
let happyVal = 100
let hungryVal = 100

export const increaseSizeHP = () => {
  if (healthBarWidth >= maxHealth) {
    console.log(`Health is already at maximum (${healthBarWidth}).`);
    return healthBarWidth
  }
  return Math.min(healthBarWidth = healthBarWidth + 17, maxHealth)
}

export const decreaseSizeHP = () => {

  if(happyVal == 0 || hungryVal == 0){
    console.log(`Health is at (${healthBarWidth}).`);
    return Math.max(healthBarWidth = healthBarWidth - 34, minHealth)
  }else if(happyVal && hungryVal == 0){
    console.log(`Health is at (${healthBarWidth}).`);
    return Math.max(healthBarWidth = healthBarWidth - 51, minHealth)
  }else{
    console.log(`Health is at (${healthBarWidth}).`);
    return Math.max(healthBarWidth = healthBarWidth - 17, minHealth)
  }
  
}


export const AnimatedHealthBar: React.FC = () => {
    // const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);

    // useEffect(() => {
    //   const timedEvent = setTimeout(() => {decreaseSizeHP()}, timerValue) //this is 2 seconds
    //   setTimer(timedEvent);
    //   return () => clearTimeout(timedEvent)
    // },[healthBarWidth])
    
    return (
        <div className="health-bar-container" style={{width: `${healthBarWidth}px`}}>
            <div className="health-bar-wrapper">
                <img src = {healhBarImg} className="health-bar-img"/>
            </div>
        </div>
    )
}