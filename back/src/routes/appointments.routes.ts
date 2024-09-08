import { Router } from "express";
import {
  getAllAppointments,
  getAppointmentById,
  scheduleNewAppointment,
  cancelAppointment,
} from "../controllers/appointments.controller";

const router = Router();

router.get("/", getAllAppointments);
router.get("/:id", getAppointmentById);
router.post("/schedule", scheduleNewAppointment);
router.put("/cancel/:id", cancelAppointment);

export default router;
