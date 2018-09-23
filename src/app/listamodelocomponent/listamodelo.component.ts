import { Component } from '@angular/core';
import { modeloDatos } from './listamodel';

@Component({
    selector: 'lista-tag',
    templateUrl: './listamodelo.component.html'
})

export class listaModelo {
    
    public formato:Array<modeloDatos>;

    constructor(){
        this.formato = [
            new modeloDatos('Yamaha SZR16', 150, 2015, '$850.000COP'),
            new modeloDatos('Honda', 300, 2018, '$50.000COP'),
            new modeloDatos('Kawasaky', 1000, 2010, '$30.000COP'),
            new modeloDatos('AKT', 100, 2009, '$10.000COP')
        ];
    }

    ngOnInit(){
        console.log(this.formato);
    }

}

