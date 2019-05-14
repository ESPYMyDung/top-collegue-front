import { Injectable } from '@angular/core';
import { Participant } from '../models/Participant';
import { environment } from 'src/environments/environment';
import { Utilisateur } from '../models/Utilisateur';
import { HttpClient } from '@angular/common/http';
import { Subject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private action = new Subject<Participant>(); //NB : utiliser pour deux requetes differentes
  private listePhoto = new Subject<Participant[]>();

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

  // - requete PATCH - 
  modifierScore(mat:string, nvSCore:number)
  {
    return this._requete.patch<Participant>(`${environment.backendUrl}/${mat}`, nvSCore, {withCredentials : true});
  }

  // - requete POST - 
   envoyerAuth(user:Utilisateur)
  {
    return this._requete.post<Utilisateur>(`${environment.baseUrl}/auth`, user, {withCredentials : true});
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
