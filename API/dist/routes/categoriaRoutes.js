"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const categoriaController_1 = require("../controllers/categoriaController");
const router = (0, express_1.Router)();
router.get("/categoria", categoriaController_1.obtenerCategoras);
router.get("/categoria/:id", categoriaController_1.obtenerCategoria);
router.post("/categoria", categoriaController_1.crearCategoria);
exports.default = router;
