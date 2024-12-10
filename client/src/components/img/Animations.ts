import hydraI1 from "./hydraIdle/hydra-idle1.png"
import hydraI2 from "./hydraIdle/hydra-idle2.png"
import capyI1 from "./capycornIdle/capycorn-idle1.png"
import capyI2 from "./capycornIdle/capycorn-idle2.png"
import { Texture } from "pixi.js"

const hydraIArr = [hydraI1, hydraI2]
// const hydraHArr = [hydraH1, hydraH2] // Happy
// const hydraSArr = [hydraS1, hydraS2] // Sad
// const hydraAArr = [hydraA1, hydraA2] // Angry
// const hydraDArr = [hydraD1, hydraD2] // Dead
// const hydraEArr = [hydraE1, hydraE2] // Eating

const capyIArr = [capyI1, capyI2]
// const capyHArr = [capyH1, capyH2] // Happy
// const capySArr = [capyS1, capyS2] // Sad
// const capyAArr = [capyA1, capyA2] // Angry
// const capyDArr = [capyD1, capyD2] // Dead
// const capyEArr = [capyE1, capyE2] // Eating

//change the functions name from 'fetch' to 'animFrames'
const fetch = (frames:any) => {
  const textureArr = frames.map((element:any) => Texture.from(element))
  return textureArr
}

const Hydra_Idle: Texture[] = fetch(hydraIArr)
// const Hydra_Happy: Texture[] = fetch(hydraHArr)
// const Hydra_Sad: Texture[] = fetch(hydraSArr)
// const Hydra_Angry: Texture[] = fetch(hydraAArr)
// const Hydra_Dead: Texture[] = fetch(hydraDArr)
// const Hydra_Eating: Texture[] = fetch(hydraEArr)

const Capycorn_Idle: Texture[] = fetch(capyIArr)
// const Capy_Happy: Texture[] = fetch(capyHArr)
// const Capy_Sad: Texture[] = fetch(capySArr)
// const Capy_Angry: Texture[] = fetch(capyAArr)
// const Capy_Dead: Texture[] = fetch(capyDArr)
// const Capy_Eating: Texture[] = fetch(capyEArr)

export {Hydra_Idle, Capycorn_Idle}
// Hydra_Happy, Hydra_Sad, Hydra_Angry, Hydra_Dead, Hydra_Eating
// Capy_Happy, Capy_Sad, Capy_Angry, Capy_Dead, Capy_Eating

