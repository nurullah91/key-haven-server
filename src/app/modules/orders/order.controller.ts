import handleAsync from "../../utils/handleAsync";
import responseSender from "../../utils/responseSender";
import httpStatus from "http-status";
import { OrderServices } from "./order.service";

const createOrder = handleAsync(async (req, res) => {
  const result = await OrderServices.createOrderIntoDB(req.body);

  responseSender(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Order is created Successfully",
    data: result,
  });
});

const getAllOrders = handleAsync(async (req, res) => {
  const email = req.query.email;
  let emailString: string | undefined = undefined;

  if (typeof email === "string") {
    emailString = email;
  }
  const result = await OrderServices.getAllOrdersFromDB(emailString);

  responseSender(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "All Order are retrieved Successfully",
    data: result,
  });
});

const getSingleOrder = handleAsync(async (req, res) => {
  const { id } = req.params;
  const result = await OrderServices.getSingleOrderFromDB(id);

  responseSender(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Order is retrieved Successfully",
    data: result,
  });
});

const updateOrder = handleAsync(async (req, res) => {
  const { id } = req.params;

  const result = await OrderServices.updateOrderIntoDB(id, req.body);

  responseSender(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Order is updated Successfully",
    data: result,
  });
});

const deleteOrder = handleAsync(async (req, res) => {
  const { id } = req.params;

  const result = OrderServices.deleteOrderFromDB(id);
  responseSender(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Order is deleted Successfully",
    data: result,
  });
});

export const OrderControllers = {
  createOrder,
  getAllOrders,
  getSingleOrder,
  updateOrder,
  deleteOrder,
};
