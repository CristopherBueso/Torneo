import { Request, Response } from "express";
import { Escuela } from "../entity/Escuela";

export const obtenerEscuelas = async (req: Request, res: Response) => {
    try {
      const escuela = await Escuela.find();
      return res.json(escuela);
    } catch (error) {
      if (error instanceof Error) {
        return res.status(500).json({ message: error.message });
      }
    }
  };
  
  export const obtenerEscuela = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const escuela = await Escuela.findOneBy({ id: parseInt(id) });
  
      if (!escuela) return res.status(404).json({ message: "User not found" });
  
      return res.json(escuela);
    } catch (error) {
      if (error instanceof Error) {
        return res.status(500).json({ message: error.message });
      }
    }
  };
  
  export const crearEscuela = async (
    req: Request,
    res: Response
  ) => {
    const { nombre, nombreSensei, apellidoSensei, telefono } = req.body;
    const escuela = new Escuela();
  
    escuela.nombre = nombre;
    escuela.nombreSensei = nombreSensei;
    escuela.apellidoSensei = apellidoSensei;
    escuela.telefono = telefono
  
    await escuela.save();
    return res.json(escuela);
  };
  
  export const modificarEscuela = async (req: Request, res: Response) => {
    const { id } = req.params;
  
    try {
      const escuela = await Escuela.findOneBy({ id: parseInt(id) });
      if (!escuela) return res.status(404).json({ message: "No existe" });
  
      await Escuela.update({ id: parseInt(id) }, req.body);
  
      return res.sendStatus(204);
    } catch (error) {
      if (error instanceof Error) {
        return res.status(500).json({ message: error.message });
      }
    }
  };
  
  export const eliminarEscuela = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      const result = await Escuela.delete({ id: parseInt(id) });
  
      if (result.affected === 0)
        return res.status(404).json({ message: "User not found" });
  
      return res.sendStatus(204);
    } catch (error) {
      if (error instanceof Error) {
        return res.status(500).json({ message: error.message });
      }
    }
  };