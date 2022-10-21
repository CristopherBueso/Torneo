import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppSettings } from '../app.module'

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

interface categoriaCheck {
  id: number;
  codigo: string;
  isChecked: boolean;
}

@Component({
  selector: 'app-registro-participante',
  templateUrl: './registro-participante.component.html',
  styleUrls: ['./registro-participante.component.scss']
})
export class RegistroParticipanteComponent implements OnInit {

  participante = {
    nombre : "",
    apellido : "",
    edad : "",
    escuelaId : "",
    catsInscr : [0],
    url : ''
  }

  date : Number 
  url = ''

  participantes : Observable<participanteCompleto[]>
  parts : Array<participanteCompleto>

  escuelas : Observable<escuelaCompleta[]>
  escs : Array<escuelaCompleta>

  categorias : Observable<categoriaCompleta[]>
  cats : Array<categoriaCompleta>

  selectedItemsList : any [] = [];
  checkedIDs: number[] = [];
  catsInscr : number[] = [];

  checkboxesDataList = [
    {
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

  private fileTmp:any

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.escuelas = this.http.get<escuelaCompleta[]>(AppSettings.API_ENDPOINT+'escuela')
    this.escuelas.subscribe(x=>{this.escs = x as escuelaCompleta[]});
    this.participantes = this.http.get<participanteCompleto[]>(AppSettings.API_ENDPOINT+'participante')
    this.participantes.subscribe(x=>{this.parts = x as participanteCompleto[]})
  }

  getFile($event:any):void{
    const [file] = $event.target.files;
    this.fileTmp = {
      fileRaw:file,
      fileName:file.name
    }
  }

  async registrar(){
    const paquete = new FormData
    paquete.append('foto', this.fileTmp.fileRaw, this.fileTmp.fileName)
    this.http.post(AppSettings.API_ENDPOINT+'upload', paquete).subscribe(res=>{
      this.date = res as Number
      this.participante.url = `${this.date}.${this.fileTmp.fileName.split('.').pop()}`
      console.log(this.url)
      this.participante.catsInscr = []
      this.checkboxesDataList.forEach((value) => {
        if (value.isChecked) {
          this.participante.catsInscr.push(value.id)
        }
      });
      this.http.post(AppSettings.API_ENDPOINT+'participante', this.participante).subscribe()
      })
      
    //window.location.reload()
  }

  changeSelection() {
    this.fetchSelectedItems()
  }

  fetchSelectedItems() {
    this.selectedItemsList = this.checkboxesDataList.filter((value, index) => {
      return value.isChecked
    });
  }

  fetchCheckedIDs() {
    this.checkedIDs = []
    this.checkboxesDataList.forEach((value, index) => {
      if (value.isChecked) {
        this.checkedIDs.push(value.id);
      }
    });
  }
}
