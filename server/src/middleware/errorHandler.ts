import { Request, Response, NextFunction } from "express"

const errorHandlerMiddleware = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction,
): void => {
  const status = 500
  res.status(status).json({
    error: err.message,
  })
}

export default errorHandlerMiddleware