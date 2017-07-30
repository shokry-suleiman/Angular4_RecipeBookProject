import { Component, OnInit } from '@angular/core';
import { DropdownDirective } from '../directives/dropdown.directive';
import {DataStorageService} from "../services/data-storage.service";
import {Response} from "@angular/http";
import {AuthService} from "../auth/auth.service";
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  constructor(private dataSotrageService: DataStorageService,
              private authService: AuthService ) {
  }

  ngOnInit() {
  }

  onSave() {
    this.dataSotrageService.storeRecipes().subscribe(
      (response: Response) => {
        console.log(response.json());
      }
    )
  }

  onFetch() {
    this.dataSotrageService.getRecipes();
  }

  isAuthenticated() {
    return this.authService.isAuthenticated();
  }
}
