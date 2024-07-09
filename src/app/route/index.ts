import { Router } from "express";

const router = Router();

const allRoutes = [
  {
    path: "/products",
    route: "route here",
  },
];

allRoutes.forEach((route) => router.use(route.path));

export default router;
