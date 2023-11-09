import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { AutenticacaoInterceptor } from './autenticacao/autenticacao.interceptor';

import { MaterialModule } from './core/material/material.module';
import { SharedModule } from './shared/shared.module';

import { HomeModule } from './home/home.module';
import { BuscaModule } from './busca/busca.module';
import { RouterModule } from '@angular/router';
import { ErroModule } from './core/erro/erro.module';
import { ErrosInterceptor } from './core/erro/erros.interceptor';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    MaterialModule,
    BuscaModule,
    ErroModule
  ],
  providers: [
    {
    provide: HTTP_INTERCEPTORS,
    useClass: AutenticacaoInterceptor,
    multi: true
  },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: ErrosInterceptor,
    multi: true
  }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
