import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    BaseEntity,
    OneToMany
  } from "typeorm";
import { Participante } from "./Participante";
  
  @Entity()
  export class Escuela extends BaseEntity {
  
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    nombre: string;
  
    @Column()
    nombreSensei: string;

    @Column()
    apellidoSensei: string;

    @Column()
    telefono: string;

    @OneToMany(()=> Participante , (participante)=>participante.escuela,{onDelete: "CASCADE"})
    participante: Participante[]
  
  }