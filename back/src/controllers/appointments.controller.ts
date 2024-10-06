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
  try {
    const allAppointments = await getAllAppointmentsService();
    return allAppointments.length
      ? res.status(200).json(allAppointments)
      : res
          .status(404)
          .json({ message: "There are no appointments registered" });
  } catch (error) {
    return res.status(500).json({ message: "Server error", error });
  }
};
const getAppointmentById = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { id } = req.params;
    const appnmtById = await getAppointmentByIdService(Number(id));
    return appnmtById
      ? res.status(200).json(appnmtById)
      : res.status(404).json({ error: "There is no appointment with that ID" });
  } catch (error) {
    return res.status(500).json({ message: "Server error", error });
  }
};
const scheduleNewAppointment = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { userId, date, time, type } = req.body;
    if (!userId || !date || !time || !type)
      return res
        .status(400)
        .json({ error: "Incomplete data, missing information" });
    const newAppnmt = await scheduleAppointmentService({
      userId,
      date,
      time,
      type,
    });
    return newAppnmt
      ? res.status(200).json({ message: "Success", newAppnmt })
      : res.status(400).json({ error: "The user does not exist" });
  } catch (error) {
    return res.status(500).json({ message: "Server error", error });
  }
};
const cancelAppointment = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { id } = req.params;
    const appnmt = await cancelAppointmentService(Number(id));
    return appnmt
      ? res.status(200).json(appnmt)
      : res.status(404).json({ error: "There is no appointment with that ID" });
  } catch (error) {
    return res.status(500).json({ message: "Server error", error });
  }
};

export {
  getAllAppointments,
  getAppointmentById,
  scheduleNewAppointment,
  cancelAppointment,
};
