import { Component, OnInit } from '@angular/core';
import { Participant } from '../models/Participant';
import { DataService } from '../services/data.service';
import { Vote } from '../models/Vote';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {
  listeParticipant:Participant[]

  constructor(private _serv:DataService) { }

  ngOnInit()
  {        
    this._serv.afficherParticipant()
    .subscribe( coll => {this.listeParticipant = coll},
      error =>{alert('oops gallerie')} );
   }

  votePlus(mat:string)
  {
    this._serv.modifierScore(new Vote(mat, true))
    .subscribe( coll => {},
      error =>{alert('oops affichage')} );
  }

  voteMoins(mat:string)
  {
    this._serv.modifierScore(new Vote(mat, true))
    .subscribe( coll => {},
      error =>{alert('oops affichage')} );
  }

}
