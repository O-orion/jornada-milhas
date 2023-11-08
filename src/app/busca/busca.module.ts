import { NgModule } from "@angular/core";
import { BuscaComponent } from "./busca.component";
import { MaterialModule } from "../core/material/material.module";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [
    BuscaComponent,
  ],

  imports: [
    MaterialModule,
    SharedModule
  ],

  exports: [
    BuscaComponent
  ]

})

export class BuscaModule { }
