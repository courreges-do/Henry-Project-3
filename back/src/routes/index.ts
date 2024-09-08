import { Router } from "express";
import userRoutes from "./users.routes";
import appointmentsRoutes from "./appointments.routes";

const router = Router();

router.use("/users", userRoutes);
router.use("/appointments", appointmentsRoutes);

export default router;
