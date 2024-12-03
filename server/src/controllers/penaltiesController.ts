import { Request, Response } from "express"
import pool from "../db/connect"
import { StatusCodes } from "http-status-codes"
import {
  internalErrorResponse,
  sendError,
  successResponse,
} from "../utils/errorHandling"
import { sendNotFoundError } from "../utils/errorHandling"

export const getAllPenalties = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const response = await pool.query("SELECT * FROM penalty")
    res.status(StatusCodes.OK).json(successResponse(response.rows))
  } catch (error) {
    console.error(error)
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json(internalErrorResponse())
  }
}

export const getOnePenalty = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const { id } = req.params
  try {
    const response = await pool.query(
      "SELECT * FROM penalty WHERE penalty_id = $1",
      [id],
    )
    res.status(StatusCodes.OK).json(successResponse(response.rows[0]))
  } catch (error) {
    console.error(error)
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json(internalErrorResponse())
  }
}
// you should change this to penalty_type instead of penalty id
