import { AnimatedSprite } from "@pixi/react"
import {Hydra_Idle} from "../Animation/Animations"

export type dimensions = { x: number; y: number; s: number }

export const HydraSprite = ({ x, y, s}: dimensions) => {
  
    
  return (
    <>
      <AnimatedSprite
        anchor={0.5}
        textures={Hydra_Idle}
        isPlaying={true}
        initialFrame={0}
        animationSpeed={0.03}
        interactive
        x={x} 
        y={y}
        width={s} 
        height={s}
      />

    </>
  )
}

export default HydraSprite