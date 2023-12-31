import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MaterialModule } from "../core/material/material.module";
import { SharedModule } from "../shared/shared.module";
import { DepoimentosComponent } from "./depoimentos/depoimentos.component";
import { HomeComponent } from "./home.component";
import { PromocoesComponent } from "./promocoes/promocoes.component";
import { HomeRoutingModule } from "./home-routing.module";

@NgModule({
  declarations: [
    DepoimentosComponent,
    PromocoesComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,
    HomeRoutingModule
  ],

  exports: [
    DepoimentosComponent,
    PromocoesComponent,
    HomeComponent
  ]
})

export class HomeModule { }
