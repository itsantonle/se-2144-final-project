import { AnimatedSprite, useTick } from "@pixi/react"

import Frames from "../Animation/Frames"
import { useState } from "react"
// import { type coord } from './Bunny'

const Asprite = () => {
  //   const [scale, setScale] = useState(1)
  const [x, setX] = useState(window.innerHeight / 2)
  const [y, setY] = useState(window.innerHeight / 2)

  //   useEffect(() => {
  //     const handlekeydown = (e: KeyboardEvent) => {
  //       if (e.key == 'ArrowUp') setY(y - speed)
  //       if (e.key == 'ArrowDown') setY(y + speed)
  //       if (e.key == 'ArrowLeft') setX(x - speed)
  //       if (e.key == 'ArrowRight') setX(x + speed)
  //     }
  //     window.addEventListener('keydown', handlekeydown)
  //     return () => {
  //       window.removeEventListener('keydown', handlekeydown)
  //     }
  //   }, [])

  useTick((delta) => {
    const speed = 50 + delta / 100
    const handlekeydown = (e: KeyboardEvent) => {
      if (e.key == "ArrowUp") setY(y - speed)
      if (e.key == "ArrowDown") setY(y + speed)
      if (e.key == "ArrowLeft") setX(x - speed)
      if (e.key == "ArrowRight") setX(x + speed)
    }

    window.addEventListener("keydown", handlekeydown)
  })

  //   const movePlayer = (e: MouseEvent) => {
  //     const mousePos: coord = { x: e.clientX, y: e.clientY }
  //     console.log(mousePos)
  //     console.log(x, y)
  //     if (mousePos.x >= x - 5) {
  //       setX(x + 5)
  //     }
  //     if (mousePos.x <= x + 5) {
  //       setX(x - 5)
  //     }
  //     if (mousePos.y >= y - 5) {
  //       setY(y + 5)
  //     }
  //     if (mousePos.y <= y + 5) {
  //       setY(y - 5)
  //     }
  //   }
  return (
    <>
      <AnimatedSprite
        anchor={0.5}
        textures={Frames}
        isPlaying={true}
        initialFrame={0}
        animationSpeed={0.1}
        // scale={scale}
        interactive
        // pointerover={() => setScale(2)}
        // pointerout={() => setScale(1)}
        // pointermove={movePlayer}
        x={x}
        y={y}
      />
    </>
  )
}

export default Asprite
