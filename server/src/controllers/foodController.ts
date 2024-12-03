import { Request, Response } from "express"
import { StatusCodes } from "http-status-codes"
import {
  internalErrorResponse,
  successResponse,
} from "../utils/errorHandling"
import pool from "../db/connect"

export const getFood = async (req: Request, res: Response) => {
  try {
    const response = await pool.query("SELECT * FROM food")
    res.status(StatusCodes.OK).json(successResponse(response.rows[0]))
  } catch (error) {
    console.error(error)
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json(internalErrorResponse())
  }
}
