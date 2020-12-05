import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DevolvidoComponent } from './devolvido/devolvido.component';
import { EnvioComponent } from './envio/envio.component';
import { HomeComponent } from './home/home.component';
import { PedidoComponent } from './pedido/pedido.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'envio', component: EnvioComponent},
  { path: 'pedido', component: PedidoComponent},
  { path: 'devolvido', component: DevolvidoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
