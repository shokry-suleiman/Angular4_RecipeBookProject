import { NgModule } from '@angular/core';

import {AppRoutingModule} from "../app-routing.module";
import {SharedModule} from "../shared/shared.module";
import {HeaderComponent} from "./header/header.component";
import {HomeComponent} from "./home/home.component";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    //to add    The Router Functionality That I Use In The Header Component
    //That I Use RouterLinks
    AppRoutingModule
  ],
  exports: [
    //Because I Use AppRoutingModule In The Main Module
    AppRoutingModule,
    HeaderComponent
  ]
})
export class CoreModule { }
