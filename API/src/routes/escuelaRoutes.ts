import { Router } from "express";

import {
  obtenerEscuelas,
  obtenerEscuela,
  crearEscuela,
  modificarEscuela,
  eliminarEscuela
} from "../controllers/escuelaController"

const router = Router();

router.get("/escuela", obtenerEscuelas);

router.get("/escuela/:id", obtenerEscuela);

router.post("/escuela", crearEscuela);

router.put("/escuela/:id", modificarEscuela);

router.delete("/escuela/:id", eliminarEscuela);

export default router;
