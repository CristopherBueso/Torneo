import { Request, Response } from "express";
import { Escuela } from "../entity/Escuela";
import { Inscripcion } from "../entity/Inscripcion";
import { Participante } from "../entity/Participante";

export const obtenerParticipantes = async (req: Request, res: Response) => {
  try {
    const participantes = await Participante.find({relations:['escuela']});
    return res.json(participantes);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

export const obtenerParticioante = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const participante = await Participante.findOneBy({ id: parseInt(id) });

    if (!participante) return res.status(404).json({ message: "User not found" });

    return res.json(participante);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

export const crearParticipante = async (req: Request, res: Response) => {
  const { nombre, apellido, edad, escuelaId, catsInscr, url } = req.body;
  console.log(req.body)
  const participante = new Participante();
  let cats : []
  participante.nombre = nombre;
  participante.apellido = apellido;
  participante.edad = parseInt(edad);
  participante.escuela = await Escuela.findOneByOrFail({ id: parseInt(escuelaId) });
  participante.url = url
  cats = catsInscr

  await participante.save();

  cats.forEach(async (val) => {
    let inscribir = new Inscripcion;
    inscribir.participante = participante
    inscribir.tipoPelea = val;
    inscribir.estado = "h"

    await inscribir.save();

  });
  return res.json();
};

export const modificarParticipante = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const participante = await Participante.findOneBy({ id: parseInt(id) });
    if (!participante) return res.status(404).json({ message: "Not user found" });

    await Participante.update({ id: parseInt(id) }, req.body);

    return res.sendStatus(204);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

export const eliminarParticipante = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const result = await Participante.delete({ id: parseInt(id) });

    if (result.affected === 0)
      return res.status(404).json({ message: "User not found" });

    return res.sendStatus(204);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};
