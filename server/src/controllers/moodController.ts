import { Request, Response } from "express"
import pool from "../db/connect"
import { StatusCodes } from "http-status-codes"
import {
  internalErrorResponse,
  successResponse,
} from "../utils/errorHandling"

export const getAllMoods = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const response = await pool.query("SELECT * FROM mood")

    res.status(StatusCodes.OK).json(successResponse(response.rows))
  } catch (error) {
    console.log(error)
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json(internalErrorResponse())
  }
}

export const getOneMood = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const { mood_type } = req.params
  try {
    const response = await pool.query(
      "SELECT * FROM mood WHERE mood_type = $1",
      [mood_type],
    )

    res.status(StatusCodes.OK).json(successResponse(response.rows[0]))
  } catch (error) {
    console.log(error)
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json(internalErrorResponse())
  }
}
