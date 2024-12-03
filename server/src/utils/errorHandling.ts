import { Response } from "express"
import { StatusCodes } from "http-status-codes"

interface ResponseMeta {
  data?: any | null
  statusCode?: number
  message: string
  success: boolean
}

// errors
export const internalErrorResponse = (): ResponseMeta => {
  return {
    data: null,
    message: "internal server error",
    success: false,
  }
}

// request

export const successResponse = (data: any): ResponseMeta => {
  return { data, message: "sucessful get request", success: true }
}
export const successPostResponse = (data: any): ResponseMeta => {
  return { data, message: "sucessful post request", success: true }
}

export const successUpdateResponse = (data: any): ResponseMeta => {
  return { data, message: "successful update request", success: true }
}

export const sucessfulDeleteResponse = (): ResponseMeta => {
  return {
    data: null,
    message: "successful delete request",
    success: true,
  }
}
export const unsucessfulPostResponse = (): ResponseMeta => {
  return { data: null, message: "unable to create", success: false }
}
export const unsucessfulUpdateResponse = (): ResponseMeta => {
  return { data: null, message: "update failed", success: false }
}
export const unsucessfulDeleteResponse = (): ResponseMeta => {
  return { data: null, message: "delete failed", success: false }
}

export const sendError = (
  res: Response,
  statusCode: number,
  message?: string,
): void => {
  res.status(statusCode).json({
    success: false,
    message: message,
  })
}

export const sendNotFoundError = (
  res: Response,
  message: string = "No data found",
) => {
  res.status(StatusCodes.NOT_FOUND).json({
    success: false,
    message: message,
  })
}
