import { Request, Response } from "express";

const getAllAppointments = async (
  req: Request,
  res: Response
): Promise<Response> => {
  return res
    .status(200)
    .json({ message: "This route will return all the appointments" });
};
const getAppointmentById = async (
  req: Request,
  res: Response
): Promise<Response> => {
  return res
    .status(200)
    .json({ message: "This route will return an appointment per id" });
};
const scheduleNewAppointment = async (
  req: Request,
  res: Response
): Promise<Response> => {
  return res
    .status(200)
    .json({ message: "This route will create a new appointment" });
};
const cancelAppointment = async (
  req: Request,
  res: Response
): Promise<Response> => {
  return res
    .status(200)
    .json({ message: "This route will cancel an appointment" });
};

export {
  getAllAppointments,
  getAppointmentById,
  scheduleNewAppointment,
  cancelAppointment,
};
