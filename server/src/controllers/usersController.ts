import { Request, Response } from "express"
import pool from "../db/connect"
import { StatusCodes } from "http-status-codes"
import hashPassword from "../utils/hashPassword"
import {
  internalErrorResponse,
  successPostResponse,
  successResponse,
  unsucessfulPostResponse,
} from "../utils/errorHandling"

export const getAllUsers = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const response = await pool.query("SELECT * FROM player")
    res.status(StatusCodes.OK).json(successResponse(response.rows))
  } catch (error) {
    console.error(error)
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json(internalErrorResponse())
  }
}
export const getOneUser = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const { id } = req.params
  try {
    const response = await pool.query(
      "SELECT * FROM player WHERE player_uuid = $1",
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
export const createUser = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const { player_uuid, player_username, player_email } = req.body
  try {
    const response = await pool.query(
      "INSERT INTO player(player_uuid, player_username, player_email) VALUES($1, $2, $3)",
      [player_uuid, player_username, player_email],
    )

    res
      .status(StatusCodes.CREATED)
      .json(successPostResponse(response.rows))
  } catch (error) {
    console.error(error)
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json(unsucessfulPostResponse())
  }
}
