import React, {useEffect, useState} from "react"
import { manageHealth } from "../utils/interfaceUtil/healthBarUtil";
import healhBarImg from "./img/icons/health-bar1-2t.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import {timerValue, maxWidth} from "../utils/interfaceUtil/barValueUtil"
// const {isHealthyValue} = manageHealth();
import {happyValue, manageHappiness} from "../utils/interfaceUtil/happinessBarUtil";
import {manageHunger} from "../utils/interfaceUtil/hungerBarUtil";


let healthBarWidth = 340
// testing
const maxHealth = 340
const minHealth = 0
let happyVal = 80 //should be fetched directly from Db
let hungryVal = 30 //should be fetched directly from Db

export const increaseSizeHP = () => {
  if (healthBarWidth >= maxHealth) {
    console.log(`Health is already at maximum (${healthBarWidth}).`);
    return healthBarWidth
  }
  return Math.min(healthBarWidth = healthBarWidth + 17, maxHealth)
}

export const decreaseSizeHP = () => {
  console.log(`Health is at (${healthBarWidth}).Deduction: 17px`);
  return Math.max(healthBarWidth = healthBarWidth - 17, minHealth)
  // if(happyVal == 0 && hungryVal == 0){
  //   console.log(`Health is at (${healthBarWidth}). Deduction: 51px`);
  //   return Math.max(healthBarWidth = healthBarWidth - 51, minHealth)
  // }else if(happyVal == 0 || hungryVal == 0){
  //   console.log(`Health is at (${healthBarWidth}).Deduction: 34px`);
  //   return Math.max(healthBarWidth = healthBarWidth - 34, minHealth)
  // }else if(happyVal <= 50 || hungryVal <= 50){
  //   console.log(`Health is at (${healthBarWidth}).Deduction: 26px`);
  //   return Math.max(healthBarWidth = healthBarWidth - 26, minHealth)
  // }else{
  //   console.log(`Health is at (${healthBarWidth}).Deduction: 17px`);
  //   return Math.max(healthBarWidth = healthBarWidth - 17, minHealth)
  // }
  
}


export const AnimatedHealthBar: React.FC = () => {
    
    return (
        <div className="health-bar-container" style={{width: `${healthBarWidth}px`}}>
            <div className="health-bar-wrapper">
                <img src = {healhBarImg} className="health-bar-img"/>
            </div>
        </div>
    )
}