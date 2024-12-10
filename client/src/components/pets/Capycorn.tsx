import { AnimatedSprite } from "@pixi/react"
import {Capycorn_Idle} from "../img/Animations"
// import {Capycorn_Happy} from "../img/Animations"
// import {Capycorn_Sad} from "../img/Animations"
import { isHealthyValue } from "client/src/utils/interfaceUtil/healthBarUtil";
import { isHappyValue } from "client/src/utils/interfaceUtil/happinessBarUtil";
import { isHungryValue } from "client/src/utils/interfaceUtil/hungerBarUtil";

import { useState } from "react";
//'client/src/utils/interfaceUtil/healthBarUtil';
// do we have to initialized an emote variable?

// if HP >= 81 and Happy > 50 and Hunger > 50
//   Emote == Happy

// else if HP >= 51 and Happy > 50 and Hunger > 50
//  Emote == Idle

// else if HP >= 21
// Emote == Sad

// else2
// Emote == Dead

export type dimensions = { x: number; y: number; s: number }

export const CapyChooser = () => {
  const [Emote, setEmote] = useState("");

  if (isHealthyValue >= 81 && isHappyValue > 50 && isHungryValue > 50) {
    setEmote("Capycorn_Happy");
  } else if (isHealthyValue >= 51 && isHappyValue > 50 && isHungryValue > 50) {
    setEmote("Capycorn_Idle");
  } else if (isHealthyValue >= 21) {
    setEmote("Capycorn_Sad");
  } else {
    setEmote("Capycorn_Dead");
  }
  return {Emote}
}

const CapycornSprite = ({ x, y, s}: dimensions) => {
  const {Emote} = CapyChooser();
    
  return (
    <>
      <AnimatedSprite
        anchor={0.5}
        textures={Emote} // replace with Emote variable (proposed solution ini)
        isPlaying={true}
        initialFrame={0}
        animationSpeed={0.07}
        interactive
        x={x} 
        y={y}
        width={s} 
        height={s}
      />

    </>
  )
}


export default CapycornSprite