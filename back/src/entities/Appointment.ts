import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { AppointmentStatus } from "../enums/AppointmentStatus";
import { User } from "./User";
import { AppointmentType } from "../enums/AppointmentType";

@Entity({
  name: "appointments",
})
export class Appointment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: "date",
  })
  date: Date;

  @Column()
  time: string;

  @Column({
    type: "enum",
    enum: AppointmentType,
  })
  type: AppointmentType;

  @Column({
    type: "enum",
    enum: AppointmentStatus,
    default: AppointmentStatus.ACTIVE,
  })
  status: AppointmentStatus;

  @ManyToOne(() => User, (user) => user.appointments)
  user: User;
}
