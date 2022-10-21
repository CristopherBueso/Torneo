import { Router } from "express";
import {
  obtenerInscripciones
} from "../controllers/ringController"

const router = Router();

router.get("/inscripciones", obtenerInscripciones);

// router.get("/escuela/:id", obtenerEscuela);

// router.post("/escuela", crearEscuela);

// router.put("/escuela/:id", modificarEscuela);

// router.delete("/escuela/:id", eliminarEscuela);

export default router;