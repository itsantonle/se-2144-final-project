import { AnimatedSprite } from "@pixi/react"
import {Capycorn_Idle} from "../Animation/Animations"

export type dimensions = { x: number; y: number; s: number }

export const CapycornSprite = ({ x, y, s}: dimensions) => {
  
    
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