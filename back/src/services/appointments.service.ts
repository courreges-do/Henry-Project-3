import { ScheduleAppnmtDTO } from "../dto/ScheduleAppnmtDTO";
import IAppointment from "../interfaces/IAppointment";
import { AppointmentStatus } from "../enums/AppointmentStatus";

const appointmentsDB: IAppointment[] = [];
let id: number = 1;

const getAllAppointmentsService = async (): Promise<IAppointment[]> => {
  return appointmentsDB;
};

const getAppointmentByIdService = async (
  id: number
): Promise<IAppointment | undefined> => {
  return appointmentsDB.find((appnmt) => appnmt.id === Number(id));
};

const scheduleAppointmentService = async (
  appnmtData: ScheduleAppnmtDTO
): Promise<IAppointment> => {
  const { userId, date, time } = appnmtData;

  const newAppnmt: IAppointment = {
    id,
    date,
    time,
    userId,
    status: AppointmentStatus.ACTIVE,
  };

  id++;
  appointmentsDB.push(newAppnmt);
  return newAppnmt;
};

const cancelAppointmentService = async (
  id: number
): Promise<IAppointment[]> => {
  appointmentsDB.forEach((appnmt) => {
    if (appnmt.id === Number(id)) appnmt.status = AppointmentStatus.CANCELLED;
  });
  return appointmentsDB;
};

export {
  getAllAppointmentsService,
  getAppointmentByIdService,
  scheduleAppointmentService,
  cancelAppointmentService,
};
