import { Router } from "express";
import { ProductRoutes } from "../modules/products/products.route";

const router = Router();

const allRoutes = [
  {
    path: "/products",
    route: ProductRoutes,
  },
];

allRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
