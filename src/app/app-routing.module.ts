import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscaComponent } from './busca/busca.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'busca',
    component: BuscaComponent
  },
  {
    path: 'auth',
    loadChildren: () => import('./autenticacao/autenticacao.module').then(m => m.AutenticacaoModule )
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: '**',
    redirectTo: '/pagina-nao-encontrada',
    pathMatch: 'full'
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
