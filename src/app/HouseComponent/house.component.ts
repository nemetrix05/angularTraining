import { Component } from '@angular/core';

@Component({
    selector: 'direct-tv',
    templateUrl: './HouseComponent.html',
    styleUrls: ['./HouseComponent.css']
})

export class ComDirectivas{
   
    public color:string; 

    public letra:string;
    
    constructor(){
        this.color = "blue";
        this.letra = "Arial";
        this.nacional(this.letra);
    }

    // aqui mostramos los resultados en el Dom con el metodo ngOnInit
    showcon(){
        console.log(this.color);
    }

    nacional(otracosa){
        console.log('La fuente es:' + otracosa);
    }
    
}