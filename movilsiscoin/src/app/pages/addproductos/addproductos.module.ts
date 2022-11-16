import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddproductosPageRoutingModule } from './addproductos-routing.module';

import { AddproductosPage } from './addproductos.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddproductosPageRoutingModule,
    ComponentsModule,
    ReactiveFormsModule

  ],
  declarations: [AddproductosPage]
})
export class AddproductosPageModule { }
