import { Component, OnInit } from '@angular/core';
import { Utilisateur } from '../models/Utilisateur';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})
export class AuthentificationComponent implements OnInit {
  user:Utilisateur = new Utilisateur('','')
  affichage:boolean = true

  constructor(private _serv:DataService) { }

  ngOnInit() { }
  
  validerAuth()
  {
    this._serv.envoyerAuth(this.user)
      .subscribe (valeur => {},
      response => {alert(response.error)},
      () => {} );
  }

}
