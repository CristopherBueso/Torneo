import { Router } from "express";
import{ crearCategoria, obtenerCategoras, obtenerCategoria } from "../controllers/categoriaController";

const router = Router();

router.get("/categoria", obtenerCategoras);

router.get("/categoria/:id", obtenerCategoria);

router.post("/categoria", crearCategoria);

export default router;