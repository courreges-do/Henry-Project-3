import { Request, Response } from "express";
import {
  cancelAppointmentService,
  getAllAppointmentsService,
  getAppointmentByIdService,
  scheduleAppointmentService,
} from "../services/appointments.service";

const getAllAppointments = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const allAppointments = await getAllAppointmentsService();
  return res.status(200).json(allAppointments);
};
const getAppointmentById = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { id } = req.params;
  const appnmtById = await getAppointmentByIdService(Number(id));
  return res.status(200).json(appnmtById);
};
const scheduleNewAppointment = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { userId, date, time } = req.body;

  const newAppnmt = await scheduleAppointmentService({ userId, date, time });
  return res.status(200).json({ message: "Success", newAppnmt });
};
const cancelAppointment = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { id } = req.params;
  await cancelAppointmentService(Number(id));
  return res.status(200).json({ message: "Appointment cancelled" });
};

export {
  getAllAppointments,
  getAppointmentById,
  scheduleNewAppointment,
  cancelAppointment,
};
