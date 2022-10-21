import { Router } from "express";
import {
  crearEvento,
  ganador,
  obtenerEvento
} from "../controllers/eventoController"

const router = Router();

router.post("/evento", crearEvento);

router.get("/evento/:id", obtenerEvento);

router.patch("/evento", ganador);

// router.put("/escuela/:id", modificarEscuela);

// router.delete("/escuela/:id", eliminarEscuela);

export default router;