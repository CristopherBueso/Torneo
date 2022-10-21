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
exports.obtenerInscripciones = void 0;
const Inscripcion_1 = require("../entity/Inscripcion");
const obtenerInscripciones = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const inscripciones = yield Inscripcion_1.Inscripcion.find({ where: { estado: 'h' }, relations: ['participante', 'tipoPelea', 'participante.escuela'] });
        return res.json(inscripciones);
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
});
exports.obtenerInscripciones = obtenerInscripciones;
