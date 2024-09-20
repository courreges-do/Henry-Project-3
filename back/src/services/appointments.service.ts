import { ScheduleAppnmtDTO } from "../dto/ScheduleAppnmtDTO";
import { AppointmentStatus } from "../enums/AppointmentStatus";
import { Appointment } from "../entities/Appointment";
import { AppDataSource } from "../config/data-source";
import { User } from "../entities/User";

const AppointmentEntity = AppDataSource.getRepository(Appointment);

const getAllAppointmentsService = async (): Promise<Appointment[]> => {
  const allAppntmts = await AppointmentEntity.find({
    relations: { user: true },
  });
  return allAppntmts;
};

const getAppointmentByIdService = async (
  id: number
): Promise<Appointment | null> => {
  return await AppointmentEntity.findOne({
    where: { id },
    relations: { user: true },
  });
};

const scheduleAppointmentService = async (
  appnmtData: ScheduleAppnmtDTO
): Promise<Appointment | null> => {
  const { userId, date, time } = appnmtData;

  const userFound = await AppDataSource.getRepository(User).findOneBy({
    id: userId,
  });

  if (userFound) {
    const newAppnmt: Appointment = AppointmentEntity.create({
      date,
      time,
      user: userFound,
    });

    await AppointmentEntity.save(newAppnmt);
    return newAppnmt;
  }
  return null;
};

const cancelAppointmentService = async (
  id: number
): Promise<Appointment | null> => {
  const appnmt = await getAppointmentByIdService(id);
  if (appnmt) {
    appnmt.status = AppointmentStatus.CANCELLED;
    await AppointmentEntity.save(appnmt);
    return appnmt;
  } else return null;
};

export {
  getAllAppointmentsService,
  getAppointmentByIdService,
  scheduleAppointmentService,
  cancelAppointmentService,
};
