import { TOrder } from "./order.interface";
import Order from "./order.model";

const createOrderIntoDB = async (payload: TOrder) => {
  const result = await Order.create(payload);
  return result;
};

const getAllOrdersFromDB = async (email?: string) => {
  let filter = {};
  if (email) {
    filter = { email };
  }
  const result = await Order.find(filter);
  return result;
};

const getSingleOrderFromDB = async (id: string) => {
  const result = await Order.findById(id);

  return result;
};

const updateOrderIntoDB = async (id: string, payload: Partial<TOrder>) => {
  const result = await Order.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });

  return result;
};

const deleteOrderFromDB = async (id: string) => {
  const result = await Order.findByIdAndUpdate(
    id,
    {
      isDeleted: true,
    },
    {
      new: true,
    }
  );

  return result;
};

export const OrderServices = {
  createOrderIntoDB,
  getAllOrdersFromDB,
  getSingleOrderFromDB,
  updateOrderIntoDB,
  deleteOrderFromDB,
};
