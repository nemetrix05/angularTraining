// Para crear el servicio, se deben importar los siguientes modulos
import { Injectable } from '@angular/core';
// Only HTTP request
import { Http, Response, Headers } from '@angular/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';

// Siempre usar el decorador @Injectable, para usar un servicio

@Injectable()
export class httpService {
    
    // 1. Buscamos una API REST online para traer datos Ej: https://jsonplaceholder.typicode.com/
    // 2. Creamos una propiedad de tipo string que guardara la url del api en el constructor
    // 3. En el constructor llamamos el modulo http y lo guardamos dentro de una variable, es como llamar un servicio dentro del otro
    public url: string;
    public urlLocal: string;

    constructor(
        private _http:Http
    ){
        this.url = "https://jsonplaceholder.typicode.com/posts";
    }

    //4. Creamos un metodo para obtener los datos de la url y procesarlos para enviar al componente, en este metodo retornamos el modulo http y le hacemos una peticion get a la url definida en el constructor
    // 5. Con metodo map recibimos la respuesta de la peticion get. con res convertimos la respuesta en objeto json usable en Angular    
    getInfo(){
        return this._http.get(this.url).pipe(
            map(res => res.json())
        );
    }

    getInfoLocal(){
        return this._http.get('http://localhost:4200/src/app/data/data.json').pipe(
            map(res => res.json())
        );
    }

    getSomething(valor){
        return 'El servicio ha sido llamado con un valor pasado por parametro' + ' ' + valor;
    }

}