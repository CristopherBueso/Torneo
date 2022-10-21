import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroEscuelaComponent } from './registro-escuela/registro-escuela.component';
import { RegistroParticipanteComponent } from './registro-participante/registro-participante.component';
import { HomeComponent } from './home/home.component';
import { RingComponent } from './ring/ring.component';
import { CatsRingComponent } from './cats-ring/cats-ring.component';
import { PeleaComponent } from './pelea/pelea.component'

const routes: Routes = [
  {path: '', redirectTo:'/home', pathMatch: 'full'},
  {path: 'registroEscuela', component: RegistroEscuelaComponent},
  {path: 'registroParticipante', component: RegistroParticipanteComponent},
  {path: 'home', component: HomeComponent},
  {path: 'ring', component: RingComponent},
  {path: 'categoriaPelea', component: CatsRingComponent},
  {path: 'peleaRing', component: PeleaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
