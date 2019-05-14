import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private _serv:DataService) { }

  ngOnInit() {
  }

  deconnecter()
  {
    this._serv.envoyerLogout()
      .subscribe (valeur => {},
      response => {alert(response.error)},
      () => {} );
  }

}
