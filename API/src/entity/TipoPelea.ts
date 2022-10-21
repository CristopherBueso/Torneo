import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    BaseEntity,
    OneToMany
  } from "typeorm";
import { Inscripcion } from "./Inscripcion";
  
  @Entity()
  export class TipoPelea extends BaseEntity {
  
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    codigo: string;

    @Column()
    descripcion: string;

    @OneToMany(type => Inscripcion, inscripcionTipo => inscripcionTipo.tipoPelea,{onDelete: "CASCADE"})
    inscripcionTipo: Inscripcion[];
  
  }