import { Component, OnChanges, OnInit, PipeTransform, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { AppSettings } from '../app.module'
import { ActivatedRoute, Params } from '@angular/router';
import { FormControl } from '@angular/forms';

interface escuelaCompleta {
  id: number;
  nombre: string;
  nombreSensei: string;
  apellidoSensei: string;
  telefono: number;
}

interface participanteCompleto {
  id: number;
  nombre: string;
  apellido: string;
  edad: number;
  escuela: escuelaCompleta;
}

interface categoriaCompleta {
  id: number;
  codigo: string;
  descripcion: string;
}

interface inscripcionCompleta {
  id: number
  estado: string
  participante : participanteCompleto
  tipoPelea: categoriaCompleta
}

interface eventoCompleto {
  id: number
  estado: string
  ring: number
  inscripcion1: inscripcionCompleta
  inscripcion2: inscripcionCompleta
}

@Component({
  selector: 'app-cats-ring',
  templateUrl: './cats-ring.component.html',
  styleUrls: ['./cats-ring.component.scss']
})



export class CatsRingComponent implements OnInit, OnChanges, OnDestroy {

  cat = [
    {
      id : 0,
      codigo : "TODAS",
      isChecked : false
    },{
      id : 1,
      codigo : "FT-1",
      isChecked : false
    },
    {
      id : 2,
      codigo : "FT-2",
      isChecked : false
    },
    {
      id : 3,
      codigo : "FT-3",
      isChecked : false
    },
    {
      id : 4,
      codigo : "FT-4",
      isChecked : false
    },
    {
      id : 5,
      codigo : "FC-9",
      isChecked : false
    },
    {
      id : 6,
      codigo : "FC-10",
      isChecked : false
    },
    {
      id : 7,
      codigo : "FC-11",
      isChecked : false
    },
    {
      id : 8,
      codigo : "FC-12",
      isChecked : false
    },
    {
      id : 9,
      codigo : "AC-61",
      isChecked : false
    },
    {
      id : 10,
      codigo : "CP-17",
      isChecked : false
    },
    {
      id : 11,
      codigo : "CP-18",
      isChecked : false
    },
    {
      id : 12,
      codigo : "CP-19",
      isChecked : false
    },
    {
      id : 13,
      codigo : "CP-20",
      isChecked : false
    },
    {
      id : 14,
      codigo : "CP-21",
      isChecked : false
    },
    {
      id : 15,
      codigo : "CP-22",
      isChecked : false
    },
    {
      id : 16,
      codigo : "CP-23",
      isChecked : false
    },
    {
      id : 17,
      codigo : "CP-24",
      isChecked : false
    },
    {
      id : 18,
      codigo : "CP-25",
      isChecked : false
    },
    {
      id : 19,
      codigo : "CP-26",
      isChecked : false
    },
    {
      id : 20,
      codigo : "CP-27",
      isChecked : false
    },
    {
      id : 21,
      codigo : "CP-28",
      isChecked : false
    },
    {
      id : 22,
      codigo : "CP-29",
      isChecked : false
    },
    {
      id : 23,
      codigo : "CP-30",
      isChecked : false
    },
    {
      id : 24,
      codigo : "CP-31",
      isChecked : false
    },
    {
      id : 25,
      codigo : "CP-32",
      isChecked : false
    },
    {
      id : 26,
      codigo : "CP-33",
      isChecked : false
    },
    {
      id : 27,
      codigo : "CP-34",
      isChecked : false
    },
    {
      id : 28,
      codigo : "CP-35",
      isChecked : false
    },
    {
      id : 29,
      codigo : "CP-36",
      isChecked : false
    },
    {
      id : 30,
      codigo : "CP-38",
      isChecked : false
    },
    {
      id : 31,
      codigo : "CP-39",
      isChecked : false
    },
    {
      id : 32,
      codigo : "CP-40",
      isChecked : false
    },
    {
      id : 33,
      codigo : "CP-41",
      isChecked : false
    },
    {
      id : 34,
      codigo : "CP-42",
      isChecked : false
    },
    {
      id : 35,
      codigo : "CP-43",
      isChecked : false
    },
    {
      id : 36,
      codigo : "CP-54",
      isChecked : false
    },
    {
      id : 37,
      codigo : "CP-55",
      isChecked : false
    },
    {
      id : 38,
      codigo : "CP-56",
      isChecked : false
    },
    {
      id : 39,
      codigo : "CP-57",
      isChecked : false
    },
    {
      id : 40,
      codigo : "CP-58",
      isChecked : false
    },
    {
      id : 41,
      codigo : "CP-59",
      isChecked : false
    },
    {
      id : 42,
      codigo : "CP-60",
      isChecked : false
    },
    {
      id : 43,
      codigo : "CC-44",
      isChecked : false
    },
    {
      id : 44,
      codigo : "CC-45",
      isChecked : false
    },
    {
      id : 45,
      codigo : "CC-46",
      isChecked : false
    },
    {
      id : 46,
      codigo : "CC-47",
      isChecked : false
    },
    {
      id : 47,
      codigo : "CC-48",
      isChecked : false
    },
    {
      id : 48,
      codigo : "CC-49",
      isChecked : false
    },
    {
      id : 49,
      codigo : "CC-50",
      isChecked : false
    },
    {
      id : 50,
      codigo : "CC-51",
      isChecked : false
    },
    {
      id : 51,
      codigo : "CC-52",
      isChecked : false
    },
    {
      id : 52,
      codigo : "CC-53",
      isChecked : false
    },
    {
      id : 53,
      codigo : "EXH-54",
      isChecked : false
    },
    {
      id : 54,
      codigo : "EXH-55",
      isChecked : false
    },
    
  ]
  insxAux : inscripcionCompleta [] = []
  inscripciones: Observable<inscripcionCompleta[]>
  insc : Array<inscripcionCompleta>
  insx : inscripcionCompleta[] = []
  eventos : Observable<eventoCompleto[]>
  evs : Array<eventoCompleto>
  peleadores: inscripcionCompleta[] = []
  aux : inscripcionCompleta[] = []
  completo = false
  peleador1 : inscripcionCompleta 
  peleador2 : inscripcionCompleta
  ring : string
  peleando= false
  filter = new FormControl('', {nonNullable: true});
  dtOptions : DataTables.Settings = {}
  dtTrigger: Subject<any> = new Subject<any>();

  constructor(private http: HttpClient, private readonly route: ActivatedRoute) {}
   
  ngOnChanges(): void {
    this.eventos = this.http.get<eventoCompleto[]>(AppSettings.API_ENDPOINT+'evento/'+this.ring)
    this.eventos.subscribe(x=>{this.evs = x as eventoCompleto[]})
  }

  pelea ={
    ring : 0,
    id1 : 0,
    id2 : 0
  }

  win = {
    id : 0,
    idG : 0,
    idP : 0
  }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 2
    };
    this.http.get(AppSettings.API_ENDPOINT+'inscripciones')
      .subscribe((res: any) => {
        this.insx = res as inscripcionCompleta[];
        this.insc = res as inscripcionCompleta[];
      });
    this.route.queryParams.subscribe(
      (params: Params)=>{
        this.ring = params["ring"]
      }
    )
    this.eventos = this.http.get<eventoCompleto[]>(AppSettings.API_ENDPOINT+'evento/'+this.ring)
    this.eventos.subscribe(x=>{
      this.evs = x as eventoCompleto[]
      if(this.evs[0].ring = Number(this.ring)){
        this.completo = true
        this.peleando = true
      }
    })
    // this.inscripciones = this.http.get<inscripcionCompleta[]>(AppSettings.API_ENDPOINT+'inscripciones')
    // this.inscripciones.subscribe(x=>{this.insc = x as inscripcionCompleta[]})
    this.peleadores.push(this.insx[0])
    this.peleadores.pop()
  }

  seleccionar(index : number): void {
    if(this.peleadores.length<1){
      this.peleadores.push(this.insx[index])
    }else{
      this.completo = true
      this.peleadores.push(this.insx[index])
      console.log(this.completo)
    }
    this.aux = this.removeElement(this.insx, index)  
    this.insx = this.aux
  }

  removeElement(a:inscripcionCompleta[], index:number): inscripcionCompleta[]{
    let newArray = [...a];
    newArray.splice(index, 1);
    return newArray;
  }

  deselect(index : number){
    if(index == 0){
      this.insx.push(this.peleadores[index])
      this.peleadores.shift()
      this.completo = false
    }else{
      this.insx.push(this.peleadores[index])
      this.peleadores.pop()
      this.completo = false
    } 
  }

  seleccionarCategoria(codigo: string){
    this.insxAux = []
    this.insx = this.insc
    if(codigo != 'TODAS'){
      this.insx.forEach(element => {
      if(element.tipoPelea.codigo == codigo){
        this.insxAux.push(element)
      }
      this.insx = this.insxAux
    });
    }
    console.log(codigo)
  }

  async aPelear(){
    this.pelea.ring = Number(this.ring)
    this.pelea.id1 = Number(this.peleadores[0].id)
    this.pelea.id2 = Number(this.peleadores[1].id)
    await fetch(
      AppSettings.API_ENDPOINT+"evento",
      {
        body: JSON.stringify(this.pelea),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST"
      }
    )
    window.location.reload()
  }

  async ganador(idG:number){
    if(this.evs[0].inscripcion1.id == idG){
      this.win.idG = idG
      this.win.idP = this.evs[0].inscripcion2.id
    }if(this.evs[0].inscripcion2.id == idG){
      this.win.idG = idG
      this.win.idP = this.evs[0].inscripcion1.id
    }
    this.win.id = this.evs[0].id
    await fetch(
      AppSettings.API_ENDPOINT+"evento",
      {
        body: JSON.stringify(this.win),
        headers: {
          "Content-Type": "application/json",
        },
        method: "PATCH"
      }
    )
    window.location.reload()
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }
}
