import { AppointmentType } from "../enums/AppointmentType";

export interface ScheduleAppnmtDTO {
  date: Date;
  time: string;
  type: AppointmentType;
  userId: number;
}
