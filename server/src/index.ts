import dotenv from "dotenv"
dotenv.config()
import express from "express"
import cors from "cors"
import UsersRouter from "./routes/usersRoute"
import PetsRoute from "./routes/petsRoute"
import MoodRoute from "./routes/moodRoute"
import FoodRouter from "./routes/foodRoute"
import PenaltyRouter from "./routes/penaltiesRoute"
import { awaitConnection } from "./db/connect"
import notFoundMiddleware from "./middleware/notFound"
import errorHandlerMiddleware from "./middleware/errorHandler"

const app = express()

app.use(cors())
app.use(express.json())

// routes
app.use("/users", UsersRouter)
app.use("/pets", PetsRoute)
app.use("/moods", MoodRoute)
app.use("/food", FoodRouter)
app.use("/penalty", PenaltyRouter)

// middleware
app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)
const PORT = process.env.PORT || 3009 // add the deployed backedn application port here

const start = async (): Promise<void> => {
  try {
    await awaitConnection()
    app.listen(PORT, () => {
      console.log(
        `listing to PORT: ${PORT} \n Connection to DB SUCESS!`,
      )
    })
  } catch (error) {
    console.error("Failed connection to DB")
  }
}

start()
