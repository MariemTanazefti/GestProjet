export class Projet {
    id!: number;
    nom!: string;
    typeProjet!: string;
    user!: UserId[];
    equipeProjet!: string;
}
export class UserId{
    id!: string;
}