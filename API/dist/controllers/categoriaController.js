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
exports.crearCategoria = exports.obtenerCategoria = exports.obtenerCategoras = void 0;
const TipoPelea_1 = require("../entity/TipoPelea");
const obtenerCategoras = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const escuela = yield TipoPelea_1.TipoPelea.find();
        return res.json(escuela);
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
});
exports.obtenerCategoras = obtenerCategoras;
const obtenerCategoria = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const escuela = yield TipoPelea_1.TipoPelea.findOneBy({ id: parseInt(id) });
        if (!escuela)
            return res.status(404).json({ message: "Categoria not found" });
        return res.json(escuela);
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
});
exports.obtenerCategoria = obtenerCategoria;
const crearCategoria = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { codigo, desc } = req.body;
    const categoria = new TipoPelea_1.TipoPelea();
    categoria.codigo = codigo;
    categoria.descripcion = desc;
    yield categoria.save();
    return res.json(categoria);
});
exports.crearCategoria = crearCategoria;
