import {
    Entity,
    Column,
    BaseEntity,
    ManyToOne,
    PrimaryGeneratedColumn
  } from "typeorm";
  import { Inscripcion} from './Inscripcion'

@Entity()
export class Evento extends BaseEntity {

    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    estado : string;

    @Column()
    ring : number;

    @ManyToOne(()=>Inscripcion, (iscripcion)=>iscripcion.evento1,{onDelete: "CASCADE"})
    inscripcion1: Inscripcion

    @ManyToOne(()=>Inscripcion, (iscripcion)=>iscripcion.evento2,{onDelete: "CASCADE"})
    inscripcion2: Inscripcion

    @ManyToOne(()=>Inscripcion, (iscripcion)=>iscripcion.eventoG,{onDelete: "CASCADE"})
    inscripcionG: Inscripcion
}