import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  ManyToOne,
  OneToMany
} from "typeorm";

import { Escuela } from "./Escuela";
import { Inscripcion } from "./Inscripcion";

@Entity()
export class Participante extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  apellido: string;

  @Column()
  edad: number;

  @Column()
  url: string;

  @ManyToOne(()=> Escuela, (escuela)=>escuela.participante,{onDelete: "CASCADE"})
  escuela: Escuela;

  @OneToMany(()=> Inscripcion, (inscripcionPart)=>inscripcionPart.participante,{onDelete: "CASCADE"})
  inscripcionPart: Inscripcion[];

}
