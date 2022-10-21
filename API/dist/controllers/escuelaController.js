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
exports.eliminarEscuela = exports.modificarEscuela = exports.crearEscuela = exports.obtenerEscuela = exports.obtenerEscuelas = void 0;
const Escuela_1 = require("../entity/Escuela");
const obtenerEscuelas = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const escuela = yield Escuela_1.Escuela.find();
        return res.json(escuela);
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
});
exports.obtenerEscuelas = obtenerEscuelas;
const obtenerEscuela = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const escuela = yield Escuela_1.Escuela.findOneBy({ id: parseInt(id) });
        if (!escuela)
            return res.status(404).json({ message: "User not found" });
        return res.json(escuela);
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
});
exports.obtenerEscuela = obtenerEscuela;
const crearEscuela = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { nombre, nombreSensei, apellidoSensei, telefono } = req.body;
    const escuela = new Escuela_1.Escuela();
    escuela.nombre = nombre;
    escuela.nombreSensei = nombreSensei;
    escuela.apellidoSensei = apellidoSensei;
    escuela.telefono = telefono;
    yield escuela.save();
    return res.json(escuela);
});
exports.crearEscuela = crearEscuela;
const modificarEscuela = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const escuela = yield Escuela_1.Escuela.findOneBy({ id: parseInt(id) });
        if (!escuela)
            return res.status(404).json({ message: "No existe" });
        yield Escuela_1.Escuela.update({ id: parseInt(id) }, req.body);
        return res.sendStatus(204);
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
});
exports.modificarEscuela = modificarEscuela;
const eliminarEscuela = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const result = yield Escuela_1.Escuela.delete({ id: parseInt(id) });
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
exports.eliminarEscuela = eliminarEscuela;
