import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AppSettings } from '../app.module'

interface escuelaCompleta {
  id: number;
  nombre: string;
  nombreSensei: string;
  apellidoSensei: string;
  telefono: number;
}

@Component({
  selector: 'app-registro-escuela',
  templateUrl: './registro-escuela.component.html',
  styleUrls: ['./registro-escuela.component.scss']
})
export class RegistroEscuelaComponent implements OnInit {

  escuela = {
    nombre: "",
    nombreSensei: "",
    apellidoSensei: "",
    telefono: ""
  }
  escuelas : Observable<escuelaCompleta[]>
  escs : Array<escuelaCompleta>
  
  constructor(private router:Router, private http: HttpClient) { }

  ngOnInit(): void {
    this.escuelas = this.http.get<escuelaCompleta[]>(AppSettings.API_ENDPOINT+'escuela')
    this.escuelas.subscribe(x=>{this.escs = x as escuelaCompleta[]});
    console.log(this.escs);
  }

  async registrar(){
    const resRegistro = await fetch(
      AppSettings.API_ENDPOINT+'escuela',
      {
        body: JSON.stringify(this.escuela),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST"
      }
    )
    window.location.reload()
  }

  async eliminar(id:number){
    //this.http.delete(AppSettings.API_ENDPOINT+'escuela/'+id)
    console.log(AppSettings.API_ENDPOINT+'escuela/'+id)
    //window.location.reload()
    await fetch(
      AppSettings.API_ENDPOINT+'escuela/'+id,
      {
        method: "DELETE"
      }
    )
    window.location.reload()
  }
  
}
