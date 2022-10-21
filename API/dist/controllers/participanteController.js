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
exports.eliminarParticipante = exports.modificarParticipante = exports.crearParticipante = exports.obtenerParticioante = exports.obtenerParticipantes = void 0;
const Escuela_1 = require("../entity/Escuela");
const Inscripcion_1 = require("../entity/Inscripcion");
const Participante_1 = require("../entity/Participante");
const obtenerParticipantes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const participantes = yield Participante_1.Participante.find({ relations: ['escuela'] });
        return res.json(participantes);
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
});
exports.obtenerParticipantes = obtenerParticipantes;
const obtenerParticioante = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const participante = yield Participante_1.Participante.findOneBy({ id: parseInt(id) });
        if (!participante)
            return res.status(404).json({ message: "User not found" });
        return res.json(participante);
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
});
exports.obtenerParticioante = obtenerParticioante;
const crearParticipante = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { nombre, apellido, edad, escuelaId, catsInscr, url } = req.body;
    console.log(req.body);
    const participante = new Participante_1.Participante();
    let cats;
    participante.nombre = nombre;
    participante.apellido = apellido;
    participante.edad = parseInt(edad);
    participante.escuela = yield Escuela_1.Escuela.findOneByOrFail({ id: parseInt(escuelaId) });
    participante.url = url;
    cats = catsInscr;
    yield participante.save();
    cats.forEach((val) => __awaiter(void 0, void 0, void 0, function* () {
        let inscribir = new Inscripcion_1.Inscripcion;
        inscribir.participante = participante;
        inscribir.tipoPelea = val;
        inscribir.estado = "h";
        yield inscribir.save();
    }));
    return res.json();
});
exports.crearParticipante = crearParticipante;
const modificarParticipante = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const participante = yield Participante_1.Participante.findOneBy({ id: parseInt(id) });
        if (!participante)
            return res.status(404).json({ message: "Not user found" });
        yield Participante_1.Participante.update({ id: parseInt(id) }, req.body);
        return res.sendStatus(204);
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
});
exports.modificarParticipante = modificarParticipante;
const eliminarParticipante = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const result = yield Participante_1.Participante.delete({ id: parseInt(id) });
        if (result.affected === 0)
            return res.status(404).json({ message: "User not found" });
        return res.sendStatus(204);
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
});
exports.eliminarParticipante = eliminarParticipante;
