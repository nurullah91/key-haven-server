import mongoose, { Schema } from "mongoose";
import { TProducts } from "./products.interface";

const productSchema = new Schema(
  {
    image: { type: String, required: true },
    title: { type: String, required: true },
    brand: { type: String, required: true },
    description: { type: String, required: true },
    availableQuantity: { type: Number, required: true },
    price: { type: Number, required: true },
    isDeleted: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

productSchema.pre("find", function (next) {
  this.find({ isDeleted: { $ne: true } });

  next();
});

productSchema.pre("findOne", function (next) {
  this.find({ isDeleted: { $ne: true } });

  next();
});

productSchema.pre("findOneAndUpdate", function (next) {
  this.find({ isDeleted: { $ne: true } });

  next();
});

const Product = mongoose.model<TProducts>("Product", productSchema);

export default Product;
