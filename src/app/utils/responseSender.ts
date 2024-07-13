import { Response } from "express";

type TResponse<T> = {
  statusCode: number;
  success: boolean;
  message?: string;
  token?: string;
  data: T;
  totalProducts?: number;
};

const responseSender = <T>(res: Response, data: TResponse<T>) => {
  res.status(data?.statusCode).json({
    success: data.success,
    statusCode: data.statusCode,
    token: data.token,
    message: data.message,
    data: data.data,
    totalProducts: data.totalProducts,
  });
};

export default responseSender;
