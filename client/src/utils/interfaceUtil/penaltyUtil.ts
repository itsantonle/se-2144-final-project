// import { increaseVal, decreaseVal } from "./barValueUtil"

// let ItHasReachedZero = false // Tracks if the value has reached zero
// let current = 25
// const maxVal = 100

// // Store the last run timestamp
// let lastRunTimestamp: number = Date.now()

// export const deadPenaltyLogic = () => {
//   // cram all the shiz that happens if it's dead
//   // actually just cream the del
//   return "dead"
// }

// export const ranAwayPenaltyLogic = () => {
//   // cram all the shiz if it's ran away
//   return "run away"
// }

// // Function to apply a penalty if 2 hours have passed
// // too generic please specify the penalty for more concrete util
// export const applyPenalty = () => {
//   const now = Date.now()
//   const timeElapsed = now - lastRunTimestamp // Time in milliseconds

//   // Check if 2 hours (7200000 ms) have passed
//   if (timeElapsed >= 2 * 60 * 60 * 1000) {
//     current = Math.max(current - 10, 0) // Decrease by 10, ensure it doesn't go below 0
//     decreaseVal(current, maxVal) // Update the value bar visually
//     console.log(`Penalty applied. Current Value: ${current}`)
//     lastRunTimestamp = now // Reset the timestamp after applying the penalty

//     if (current === 0 && !ItHasReachedZero) {
//       handleZeroValue() // Trigger zero-value handler
//     }
//   }
// }

// // Function to simulate an activity that resets the timer and updates value
// const performActivity = () => {
//   if (ItHasReachedZero) {
//     console.warn(
//       "Value is already zero. Activity cannot be performed.",
//     )
//     return
//   }

//   current = increaseVal(current, 5, maxVal) // Increase value by 5
//   decreaseVal(current, maxVal) // Update the value bar visually
//   lastRunTimestamp = Date.now() // Reset the last run timestamp
//   console.log(`Activity performed. Current value: ${current}`)
// }

// const handleZeroValue = () => {
//   ItHasReachedZero = true
//   console.log("Value has reached zero!")

//   // Hide the sprite
//   const sprite = document.getElementById("sprite") // Assuming the sprite has an ID of "sprite"
//   if (sprite) {
//     sprite.style.display = "none" // Hides the sprite
//     console.log("The sprite has disappeared.")
//   } else {
//     console.error("Sprite element not found!")
//   }
// }

// // const willRunAway = (
// //         DBhappyval: number,
// //         DBhealthval: number,
// //         hasRunAwayPenalty: boolean,
// //       ) => {
// //         if (
// //           (hasRunAwayPenalty =
// //             false && DBhappyval < 20 && DBhealthval > 0)
// //         ) {
// //           ranAwayPenaltyLogic()
// //         }
// //         const willDie = (
// //           DBhealthval: number,
// //           hasDeadPenalty: boolean,
// //         ) => {
// //           if (hasDeadPenalty == false && DBhealthval == 0) {
// //             deadPenaltyLogic()
// //           }
// //         }

// // Periodic penalty check every minute
// setInterval(applyPenalty, 60 * 1000) // Check for penalty every 1 minute
