import { Router } from "express";
import { ProductRoutes } from "../modules/products/products.route";
import { OrderRoutes } from "../modules/orders/order.route";
import { ReviewRoutes } from "../modules/reviews/review.route";

const router = Router();

const allRoutes = [
  {
    path: "/products",
    route: ProductRoutes,
  },
  {
    path: "/orders",
    route: OrderRoutes,
  },
  {
    path: "/reviews",
    route: ReviewRoutes,
  },
];

allRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
