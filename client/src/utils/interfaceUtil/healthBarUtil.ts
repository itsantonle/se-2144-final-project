import { increaseVal, decreaseVal } from "./barValueUtil"
import { getValues, sendValues } from "../../components/DB_PanelLink";
import { useState, useEffect } from "react";
import {manageHappiness} from "../interfaceUtil/happinessBarUtil";
import {manageHunger} from "../interfaceUtil/hungerBarUtil";


const healthValue = 0


export const manageHealth = () => {
    const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);
    const [isHealthyValue, setisHealthyValue] =  useState(healthValue);

    const {isHappyValue} = manageHappiness();
    const {isHungryValue} = manageHunger();

    const isCared = () => setisHealthyValue(prevValue => increaseVal(prevValue))
    const isNeglected = () => setisHealthyValue(prevValue => decreaseVal(prevValue))

    const isCaredFor = () => {   //<- should be triggered when either the hungerBar or happinessBar increases
        isCared()
        return isHealthyValue
    };

    useEffect(() => {
        const timedEvent = setTimeout(() => {isNeglected()}, 12 * 5000) //this is 5 seconds

        setTimer(timedEvent);
        return () => clearTimeout(timedEvent)
    },[isHealthyValue])
    
    useEffect(() => {
        const sendData = setInterval(() => {
            sendValues()
        }, 5000) //this is 5 seconds

        return () => clearInterval(sendData)
    },[isHealthyValue])

    return {isHealthyValue, isCaredFor}
}

