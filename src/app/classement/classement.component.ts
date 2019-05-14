import { Component, OnInit } from '@angular/core';
import { Participant } from '../models/Participant';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-classement',
  templateUrl: './classement.component.html',
  styleUrls: ['./classement.component.css']
})
export class ClassementComponent implements OnInit {
  listeParticipant:Participant[]

  constructor(private _serv:DataService) { }

  ngOnInit()
  {
    this._serv.afficherClassement()
    .subscribe( coll => {this.listeParticipant = coll},
      error =>{alert('oops gallerie')} );
  }

}
