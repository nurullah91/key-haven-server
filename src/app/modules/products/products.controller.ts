import handleAsync from "../../utils/handleAsync";
import responseSender from "../../utils/responseSender";
import { ProductServices } from "./products.service";
import httpStatus from "http-status";

const createProduct = handleAsync(async (req, res) => {
  const result = await ProductServices.createProductIntoDB(req.body);

  responseSender(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Product is created Successfully",
    data: result,
  });
});

const getAllProducts = handleAsync(async (req, res) => {
  const result = await ProductServices.getAllProductsFromDB();

  responseSender(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "All Product are retrieved Successfully",
    data: result,
  });
});

const getSingleProduct = handleAsync(async (req, res) => {
  const { id } = req.params;
  const result = await ProductServices.getSingleProductFromDB(id);

  responseSender(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Product is created Successfully",
    data: result,
  });
});

const updateProduct = handleAsync(async (req, res) => {
  const { id } = req.params;

  const result = await ProductServices.updateProductIntoDB(id, req.body);

  responseSender(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Product is created Successfully",
    data: result,
  });
});

const deleteProduct = handleAsync(async (req, res) => {
  const { id } = req.params;

  const result = ProductServices.deleteProductFromDB(id);
  responseSender(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Product is created Successfully",
    data: result,
  });
});

export const ProductControllers = {
  createProduct,
  getAllProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
};
