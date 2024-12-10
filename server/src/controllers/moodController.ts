import { Request, Response } from "express"
import pool from "../db/connect"
import { StatusCodes } from "http-status-codes"
import {
  internalErrorResponse,
  successResponse,
  successUpdateResponse,
  sucessfulDeleteResponse,
  successPostResponse,
  unsucessfulDeleteResponse,
  unsucessfulPostResponse,
  unsucessfulUpdateResponse,
} from "../utils/errorHandling"

export const getMoods = async (
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

export const updateMoodType = async (req: Request, res: Response): Promise<void> => {
  const { mood_id } = req.params;
  const { mood_type } = req.body;
  try {
    const response = await pool.query(
      `UPDATE mood
      SET mood_type = $1
      WHERE mood_id = $2`,
      [mood_type, mood_id]
    );
    res.status(StatusCodes.OK).json(successUpdateResponse(response.rows[0]));
  } catch (error) {
    console.error(error);
    res.status(StatusCodes.BAD_REQUEST).json(unsucessfulUpdateResponse());
  }
};

export const updateMoodCondition = async (req: Request, res: Response): Promise<void> => {
  const { mood_id } = req.params;
  const { mood_condition } = req.body;
  try {
    const response = await pool.query(
      `UPDATE mood
      SET mood_condition = $1
      WHERE mood_id = $2`,
      [mood_condition, mood_id]
    );
    res.status(StatusCodes.OK).json(successUpdateResponse(response.rows[0]));
  } catch (error) {
    console.error(error);
    res.status(StatusCodes.BAD_REQUEST).json(unsucessfulUpdateResponse());
  }
};



export const createMood = async (req: Request, res: Response): Promise<void> => {
  const { mood_id, mood_type, mood_condition} = req.body;
  try {
    const response = await pool.query(
      `INSERT INTO mood (mood_type, mood_type, mood_condition)
      VALUES ($1, $2, $3)`,
      [mood_id, mood_type, mood_condition]
    );
    res.status(StatusCodes.CREATED).json(successPostResponse(response.rows[0]));
  } catch (error) {
    console.error(error);
    res.status(StatusCodes.BAD_REQUEST).json(unsucessfulPostResponse());
  }
};

export const updatePetMood = async (req: Request, res: Response): Promise<void> => {
  const { player_uuid } = req.params
  const { mood_id } = req.body

  try {
    const response = await pool.query(
      `UPDATE pet 
       SET mood_id = $1 
       WHERE player_uuid = $2`,
      [mood_id, player_uuid]
    );

    res.status(StatusCodes.OK).json(successUpdateResponse(response.rows[0]));
  } catch (error) {
    console.error(error);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(internalErrorResponse());
  }
};


export const setToDefaultMood = async (req: Request, res: Response): Promise<void> => {
  const { player_uuid } = req.params;
  try {
    const response = await pool.query(
      `UPDATE pet   
       SET mood_id = 3 
       WHERE player_uuid = $1`, 
      [player_uuid]
    );

    res.status(StatusCodes.OK).json(sucessfulDeleteResponse());
    
  } catch (error) {
    console.error(error);
    res.status(StatusCodes.BAD_REQUEST).json(unsucessfulDeleteResponse());
  }
};

export const deleteMood = async (req: Request, res: Response): Promise<void> => {
  const { mood_id } = req.params;
  try {
    const response = await pool.query("DELETE FROM mood WHERE mood_id = $1", [mood_id]);

    res.status(StatusCodes.OK).json(sucessfulDeleteResponse());
    
  } catch (error) {
    console.error(error);
    res.status(StatusCodes.BAD_REQUEST).json(unsucessfulDeleteResponse());
  }
};
