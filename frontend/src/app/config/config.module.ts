import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfigRoutingModule } from './config-routin.module';
import { ConfigComponent } from './config/config.component';


@NgModule({
  declarations: [
    ConfigComponent
],
  imports: [
    CommonModule,
    ConfigRoutingModule
  ]
})
export class ConfigModule { }