import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    BaseEntity,
    ManyToOne,
    OneToMany
  } from "typeorm";
import { Evento } from "./Evento";
  import { Participante } from "./Participante";
  import { TipoPelea } from "./TipoPelea"

  @Entity()
  export class Inscripcion extends BaseEntity {

    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    estado: string;

    @ManyToOne(()=>Participante, (participante)=>participante.inscripcionPart,{onDelete: "CASCADE"})
    participante: Participante;

    @ManyToOne(type=>TipoPelea, tipoPelea=>tipoPelea.inscripcionTipo,{onDelete: "CASCADE"})
    tipoPelea: TipoPelea;

    @OneToMany(()=>Evento, (evento)=>evento.inscripcion1,{onDelete: "CASCADE"})
    evento1 : Evento[]

    @OneToMany(()=>Evento, (evento)=>evento.inscripcion2,{onDelete: "CASCADE"})
    evento2 : Evento[]

    @OneToMany(()=>Evento, (evento)=>evento.inscripcionG,{onDelete: "CASCADE"})
    eventoG : Evento[]

  }