export class Quote {
    showDescription: boolean;
    constructor(public id:number, public addedquote:string, public description: string, public postDate: Date){
        this.showDescription=false;
    }
}
