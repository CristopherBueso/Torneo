import { Request, Response } from "express";
import { TipoPelea } from "../entity/TipoPelea";

export const obtenerCategoras = async (req:Request, res:Response)=>{
    try {
        const escuela = await TipoPelea.find();
        return res.json(escuela);
      } catch (error) {
        if (error instanceof Error) {
          return res.status(500).json({ message: error.message });
        }
      }
};

export const obtenerCategoria = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const escuela = await TipoPelea.findOneBy({ id: parseInt(id) });
  
      if (!escuela) return res.status(404).json({ message: "Categoria not found" });
  
      return res.json(escuela);
    } catch (error) {
      if (error instanceof Error) {
        return res.status(500).json({ message: error.message });
      }
    }
  };

  export const crearCategoria = async (
    req: Request,
    res: Response
  ) => {
    const { codigo, desc } = req.body;
    const categoria = new TipoPelea();
  
    categoria.codigo = codigo;
    categoria.descripcion = desc;
  
    await categoria.save();
    return res.json(categoria);
  };