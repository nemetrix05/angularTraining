import { Component } from "@angular/core";
// 1. Importamos el servicio
import { httpService } from '../appservices/httpService';

@Component({
    selector: 'http-tag',
    templateUrl: 'serviciohttp.component.html',
    styleUrls:['serviciohttp.component.css'],
    // usamos el servicio en providers
    providers: [httpService]
})

export class httpRequest {
    public componentTitle:string;
    // para usar un servicio se le asigna una clase dentro del constructor
    constructor(
        private _httpService: httpService
    ){
        this.componentTitle = 'SERVICIOS, HTTP Y AJAX';
    }

    ngOnInit(){
        console.log(this._httpService.getSomething(this.componentTitle))
    }
}