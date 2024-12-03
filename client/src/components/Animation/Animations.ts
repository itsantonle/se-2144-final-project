import hydraI1 from "./hydraIdle/hydra-idle1.png"
import hydraI2 from "./hydraIdle/hydra-idle2.png"
import capyI1 from "./capycornIdle/capycorn-idle1.png"
import capyI2 from "./capycornIdle/capycorn-idle2.png"
import { Texture } from "pixi.js"

const hydraIArr = [hydraI1, hydraI2]
const capyIArr = [capyI1, capyI2]

const fetch = (frames:any) => {
  const textureArr = frames.map((element:any) => Texture.from(element))
  return textureArr
}

const Hydra_Idle: Texture[] = fetch(hydraIArr)
const Capycorn_Idle: Texture[] = fetch(capyIArr)

export {Hydra_Idle, Capycorn_Idle}
