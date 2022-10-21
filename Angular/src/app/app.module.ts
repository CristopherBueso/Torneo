import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegistroEscuelaComponent } from './registro-escuela/registro-escuela.component';
import { RegistroParticipanteComponent } from './registro-participante/registro-participante.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { RingComponent } from './ring/ring.component';
import { CatsRingComponent } from './cats-ring/cats-ring.component';
import { PeleaComponent } from './pelea/pelea.component';
import { DataTablesModule } from "angular-datatables";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RegistroEscuelaComponent,
    RegistroParticipanteComponent,
    HomeComponent,
    RingComponent,
    CatsRingComponent,
    PeleaComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    DataTablesModule
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy }
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export class AppSettings {
  public static API_ENDPOINT='http://192.168.43.131:3000/';
}