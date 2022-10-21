import { Router } from "express";

import {
  obtenerParticipantes,
  obtenerParticioante,
  crearParticipante,
  modificarParticipante,
  eliminarParticipante
} from "../controllers/participanteController"

const router = Router();

router.get("/participante", obtenerParticipantes);

router.get("/participante/:id", obtenerParticioante);

router.post("/participante", crearParticipante);

router.put("/participante/:id", modificarParticipante);

router.delete("/participante/:id", eliminarParticipante);

export default router;
