"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const Escuela_1 = require("./entity/Escuela");
const Evento_1 = require("./entity/Evento");
const Inscripcion_1 = require("./entity/Inscripcion");
const Participante_1 = require("./entity/Participante");
const TipoPelea_1 = require("./entity/TipoPelea");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "1234qwer",
    database: "torneo",
    synchronize: true,
    // logging: true,
    entities: [Participante_1.Participante, Escuela_1.Escuela, TipoPelea_1.TipoPelea, Inscripcion_1.Inscripcion, Evento_1.Evento],
});
