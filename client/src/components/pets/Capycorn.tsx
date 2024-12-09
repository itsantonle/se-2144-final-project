import { AnimatedSprite } from "@pixi/react"
import {Capycorn_Idle} from "../img/Animations"
// import {Capycorn_Happy} from "../img/Animations"
// import {Capycorn_Sad} from "../img/Animations"

// if HP >= 81 and Happy > 50 and Hunger > 50
//   Happy

// else if HP >= 51 and Happy > 50 and Hunger > 50
//  Idle

// else if HP >= 21
// Sad

// else2
// Dead

export type dimensions = { x: number; y: number; s: number }

const CapyChooser = () => {

  
}

const CapycornSprite = ({ x, y, s}: dimensions) => {
  
    
  return (
    <>
      <AnimatedSprite
        anchor={0.5}
        textures={Capycorn_Idle}
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