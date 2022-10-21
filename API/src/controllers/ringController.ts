import { Request, Response } from "express";
import { Inscripcion } from "../entity/Inscripcion";

export const obtenerInscripciones = async (req: Request, res: Response) => {
    try {
      const inscripciones = await Inscripcion.find({where :{estado : 'h'}, relations:['participante', 'tipoPelea', 'participante.escuela']});
      return res.json(inscripciones);
    } catch (error) {
      if (error instanceof Error) {
        return res.status(500).json({ message: error.message });
      }
    }
  };