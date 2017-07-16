import { Component, OnInit } from '@angular/core';
import { DropdownDirective } from '../directives/dropdown.directive';
import {DataStorageService} from "../services/data-storage.service";
import {Response} from "@angular/http";
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  constructor( private dataSotrageService: DataStorageService ) { }

  ngOnInit() {
  }

  onSave(){
    this.dataSotrageService.storeRecipes().subscribe(
      (response: Response) => {
        console.log(response.json());
      }
    )
  }

  onFetch(){
    this.dataSotrageService.getRecipes().subscribe(
      (data)=>{
        console.log(data);
      },
      (error)=>{

        console.log(error);
      });
  }
}
