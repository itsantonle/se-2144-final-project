import { increaseVal, decreaseVal } from "./barValueUtil"
import { getValues, sendValues } from "../../components/DB_PanelLink";
import { useState, useEffect } from "react";


// const {hungerValue} = getValues(); //uncomment if DB is connected

export const hungerValue = 0

export const manageHunger = () => {
    const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);
    const [isHungryValue, setIsHungryValue] =  useState(hungerValue);

    const isEating = () => setIsHungryValue(prevValue => increaseVal(prevValue))
    const isHungry = () => setIsHungryValue(prevValue => decreaseVal(prevValue))

    const isEatingClicked = () => {  //<- triggered when food button is pressed
        isEating()
        return isHungryValue
    };

    // useEffect for timer
    useEffect(() => {
        const timedEvent = setTimeout(() => {isHungry()}, 2000) //this is 60 secs

        setTimer(timedEvent);
        return () => clearTimeout(timedEvent)
    },[isHungryValue]) 

    // useEffect for sending to DB
    useEffect(() => {
        const sendData = setInterval(() => {
            sendValues()
        }, 5000) //this is 5 seconds

        return () => clearInterval(sendData)
    },[isHungryValue])

    return {isHungryValue, isEatingClicked}
}
