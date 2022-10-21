import { DataSource } from "typeorm";
import { Escuela } from "./entity/Escuela";
import { Evento } from "./entity/Evento";
import { Inscripcion } from "./entity/Inscripcion";
import { Participante } from "./entity/Participante";
import { TipoPelea } from "./entity/TipoPelea";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "1234qwer",
  database: "torneo",
  synchronize: true,
  // logging: true,
  entities: [Participante, Escuela, TipoPelea, Inscripcion, Evento],
});
