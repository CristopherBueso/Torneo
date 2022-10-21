"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.obtenerEvento = exports.crearEvento = exports.ganador = exports.obtenerInscripciones = void 0;
const Evento_1 = require("../entity/Evento");
const Inscripcion_1 = require("../entity/Inscripcion");
const obtenerInscripciones = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
    }
    catch (error) {
    }
});
exports.obtenerInscripciones = obtenerInscripciones;
const ganador = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id, idG, idP } = req.body;
    let evento = yield Evento_1.Evento.find({ where: { id: Number(id) }, relations: ['inscripcion1', 'inscripcion2'] });
    let ganador = yield Inscripcion_1.Inscripcion.findOneByOrFail({ id: parseInt(idG) });
    let perdedor = yield Inscripcion_1.Inscripcion.findOneByOrFail({ id: parseInt(idP) });
    evento[0].inscripcionG = ganador;
    evento[0].estado = 'f';
    // console.log(evento[0].inscripcion1)
    // console.log(ganador)
    // if(evento[0].inscripcion1 === ganador){
    //     perdedor = evento[0].inscripcion2
    //     ganador.estado = 'h'
    //     perdedor.estado = 'd'
    //     console.log(ganador)
    //     console.log(perdedor)
    //     await Inscripcion.update({id: evento[0].inscripcion1.id}, ganador)
    //     await Inscripcion.update({id: evento[0].inscripcion2.id}, perdedor)
    // }
    // if(evento[0].inscripcion2 == ganador){
    //     perdedor = evento[0].inscripcion1
    //     ganador.estado = 'h'
    //     perdedor.estado = 'd'
    //     console.log(ganador)
    //     console.log(perdedor)
    //     await Inscripcion.update({id: evento[0].inscripcion1.id}, ganador)
    //     await Inscripcion.update({id: evento[0].inscripcion2.id}, perdedor)
    // }
    perdedor.estado = 'd';
    ganador.estado = 'h';
    yield Inscripcion_1.Inscripcion.update({ id: parseInt(idP) }, perdedor);
    yield Inscripcion_1.Inscripcion.update({ id: parseInt(idG) }, ganador);
    yield Evento_1.Evento.update({ id: parseInt(id) }, evento[0]);
    return res.json(ganador);
});
exports.ganador = ganador;
const crearEvento = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { ring, id1, id2 } = req.body;
    const evento = new Evento_1.Evento();
    let p1 = new Inscripcion_1.Inscripcion();
    let p2 = new Inscripcion_1.Inscripcion();
    evento.estado = "a";
    evento.ring = ring;
    evento.inscripcion1 = yield Inscripcion_1.Inscripcion.findOneByOrFail({ id: parseInt(id1) });
    p1 = evento.inscripcion1;
    evento.inscripcion2 = yield Inscripcion_1.Inscripcion.findOneByOrFail({ id: parseInt(id2) });
    p2 = evento.inscripcion2;
    p1.estado = 'p';
    p2.estado = 'p';
    yield Inscripcion_1.Inscripcion.update({ id: parseInt(id1) }, p1);
    yield Inscripcion_1.Inscripcion.update({ id: parseInt(id2) }, p2);
    yield evento.save();
    return res.json(evento);
});
exports.crearEvento = crearEvento;
const obtenerEvento = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const evento = yield Evento_1.Evento.find({ where: { ring: Number(id), estado: 'a' }, relations: ['inscripcion1.participante.escuela', 'inscripcion1.tipoPelea', 'inscripcion2.participante.escuela', 'inscripcion2.tipoPelea'] });
        if (!evento)
            return res.status(404).json({ message: "User not found" });
        return res.json(evento);
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
});
exports.obtenerEvento = obtenerEvento;
