import { Injectable } from '@angular/core';
import { Participant } from '../models/Participant';
import { environment } from 'src/environments/environment';
import { Utilisateur } from '../models/Utilisateur';
import { HttpClient } from '@angular/common/http';
import { Subject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Vote } from '../models/Vote';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private action = new Subject<Participant>();
  private listePhoto = new Subject<Participant[]>(); //NB : utiliser pour deux requetes differentes

  constructor(private _requete:HttpClient) { }

  // - requete GET - 
  afficherParticipant() :Observable<Participant[]>
  {
    return this._requete.get<Participant[]>(`${environment.backendUrl}/vote`, {withCredentials : true})
    .pipe(tap (colGal => this.listePhoto.next(colGal) ) )
  }

  afficherClassement() :Observable<Participant[]>
  {
    return this._requete.get<Participant[]>(`${environment.backendUrl}/classement`, {withCredentials : true})
    .pipe(tap (colGal => this.listePhoto.next(colGal) ) )
  }

  rechercherParMatricule(mat:string) :Observable<Participant>
  {
    return this._requete.get<Participant>(`${environment.backendUrl}/${mat}`, {withCredentials : true})
    .pipe(tap (col => this.action.next(col) ) ) //next c'est pour stocker la valeur, != iterator
  }

  // - requete POST - 
  envoyerAuth(user:Utilisateur)
  {
    return this._requete.post<Utilisateur>(`${environment.baseUrl}/auth`, user, {withCredentials : true});
  }

  modifierScore(bulletin:Vote)
  {
    return this._requete.post<Participant>(`${environment.backendUrl}/vote`, bulletin, {withCredentials : true});
  }

  envoyerLogout()
  {
    return this._requete.post<any>(`${environment.baseUrl}/logout`, null, {withCredentials : true});
  }

  // subject -> observable
  recupererParticipantCourant() :Observable<Participant>
  {
    return this.action.asObservable();
  }

}
