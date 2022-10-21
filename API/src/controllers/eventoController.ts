import { Request, Response } from "express";
import { Evento } from "../entity/Evento";
import { Inscripcion } from "../entity/Inscripcion";

export const obtenerInscripciones = async (req: Request, res: Response) => {
    try {

    } catch (error) {

    }
};

export const ganador = async (req: Request, res: Response) => {
    const {id, idG, idP} = req.body
    let evento = await Evento.find({where:{id : Number(id)}, relations:['inscripcion1', 'inscripcion2']})
    let ganador = await Inscripcion.findOneByOrFail({ id: parseInt(idG) })
    let perdedor = await Inscripcion.findOneByOrFail({ id: parseInt(idP) })
    evento[0].inscripcionG = ganador
    evento[0].estado = 'f'
    // console.log(evento[0].inscripcion1)
    // console.log(ganador)
    // if(evento[0].inscripcion1 === ganador){
    //     perdedor = evento[0].inscripcion2
    //     ganador.estado = 'h'
    //     perdedor.estado = 'd'
    //     console.log(ganador)
    //     console.log(perdedor)
    //     await Inscripcion.update({id: evento[0].inscripcion1.id}, ganador)
    //     await Inscripcion.update({id: evento[0].inscripcion2.id}, perdedor)
    // }
    // if(evento[0].inscripcion2 == ganador){
    //     perdedor = evento[0].inscripcion1
    //     ganador.estado = 'h'
    //     perdedor.estado = 'd'
    //     console.log(ganador)
    //     console.log(perdedor)
    //     await Inscripcion.update({id: evento[0].inscripcion1.id}, ganador)
    //     await Inscripcion.update({id: evento[0].inscripcion2.id}, perdedor)
    // }
    perdedor.estado = 'd'
    ganador.estado = 'h'
    await Inscripcion.update({id: parseInt(idP)}, perdedor)
    await Inscripcion.update({id: parseInt(idG)}, ganador)
    await Evento.update({id: parseInt(id)}, evento[0])
    return res.json(ganador)
}

export const crearEvento = async (req: Request, res: Response) => {
    const { ring, id1, id2 } = req.body;
    const evento = new Evento();
    let p1 = new Inscripcion()
    let p2 = new Inscripcion()
    evento.estado = "a"
    evento.ring = ring
    evento.inscripcion1 = await Inscripcion.findOneByOrFail({ id: parseInt(id1) })
    p1 = evento.inscripcion1
    evento.inscripcion2 = await Inscripcion.findOneByOrFail({ id: parseInt(id2) })
    p2 = evento.inscripcion2

    p1.estado = 'p'
    p2.estado = 'p'

    await Inscripcion.update({ id: parseInt(id1) }, p1)
    await Inscripcion.update({ id: parseInt(id2) }, p2)

    await evento.save();
    return res.json(evento);
};

export const obtenerEvento = async (req: Request, res: Response) => {
    try {
        const {id} = req.params;
        const evento = await Evento.find({ where:{ring:Number(id), estado : 'a'}, relations:['inscripcion1.participante.escuela', 'inscripcion1.tipoPelea', 'inscripcion2.participante.escuela', 'inscripcion2.tipoPelea']});
        if (!evento) return res.status(404).json({ message: "User not found"});
  
      return res.json(evento);
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }

}