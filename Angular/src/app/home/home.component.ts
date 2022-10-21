import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AppSettings } from '../app.module';

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
  url: string;
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
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  ip = AppSettings.API_ENDPOINT
  eventos : Observable<eventoCompleto[]>
  evs : Array<eventoCompleto>
  eventos1 : Observable<eventoCompleto[]>
  evs1 : Array<eventoCompleto>
  eventos2 : Observable<eventoCompleto[]>
  evs2 : Array<eventoCompleto>

  constructor(private http: HttpClient) {
    
  }

  ngOnInit(): void {
    this.eventos = this.http.get<eventoCompleto[]>(AppSettings.API_ENDPOINT+'evento/3')
    this.eventos.subscribe(x=>{this.evs = x as eventoCompleto[]})
    this.eventos2 = this.http.get<eventoCompleto[]>(AppSettings.API_ENDPOINT+'evento/2')
    this.eventos2.subscribe(x=>{this.evs2 = x as eventoCompleto[]})
    this.eventos1 = this.http.get<eventoCompleto[]>(AppSettings.API_ENDPOINT+'evento/1')
    this.eventos1.subscribe(x=>{this.evs1 = x as eventoCompleto[]})
  }

}
