import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BuscadorPageRoutingModule } from './buscador-routing.module';

import { BuscadorPage } from './buscador.page';
import { PipesModule } from 'src/app/pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BuscadorPageRoutingModule,
    PipesModule
  ],
  declarations: [BuscadorPage]
})
export class BuscadorPageModule {}
