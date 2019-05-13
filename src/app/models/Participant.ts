export class Participant
{
    constructor(
        public matricule:string,
        public nom:string,
        public prenom:string,
        public motDePasse:string,
        public photoUrl:string,
        public score:number,
    ) {}
}