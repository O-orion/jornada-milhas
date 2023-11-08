import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BuscaComponent } from './busca/busca.component';

import { AutenticacaoInterceptor } from './autenticacao/autenticacao.interceptor';

import { MaterialModule } from './core/material/material.module';
import { SharedModule } from './shared/shared.module';

import { AutenticacaoModule } from './autenticacao/autenticacao.module';
import { HomeModule } from './home/home.module';
import { BuscaModule } from './busca/busca.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AutenticacaoModule,
    SharedModule,
    MaterialModule,
    HomeModule,
    BuscaModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AutenticacaoInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
