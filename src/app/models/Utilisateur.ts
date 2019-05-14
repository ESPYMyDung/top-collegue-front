export class Utilisateur
{
    constructor(
        public matriculeColl:string,
        public motDePasse:string,
        public photoUrl?:string
    ) {}
}