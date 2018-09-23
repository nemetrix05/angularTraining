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
    public datos;
    public datosLocal;
    public selected;
    // para usar un servicio se le asigna una clase dentro del constructor
    constructor(
        private _httpService: httpService
    ){
        this.componentTitle = 'SERVICIOS, HTTP Y AJAX';
    }

    ngOnInit(){
        // 7. Accedemos al metodo que tiene la peticion http
        // 8. Con el metodo .suscribe generamos dos respuestas a los datos reusltado y error como un if
        this._httpService.getInfo().subscribe(
            // si llegan los datos bien
            result => {
                // le asignamos a una propiedad el resultado de la consulta http
                this.datos = result;
                if(!this.datos){
                    console.log('Servidor fuera de servicio');
                }else{
                    console.log('Servicio corriendo')
                }
                // definimos una propiedad que va a guardar los objetos del json
                // con esto sabemos lo que recibimos del servicio
                //console.log(result);
            },
            // Si no llegan bien
            error => {
                // Para que nos llegue error por defecto
                var errormsn = <any>error;
                console.log(errormsn);
            }
        );

    // Llamamos los datos desde un json local
        this._httpService.getInfoLocal().subscribe(
            result => {
                this.datosLocal = result;
                if(!this.datosLocal){
                    console.log('Servidor fuera de servicio');
                }else{
                    console.log('Servicio corriendo')
                }
            },
            error => {
                var errormsn = <any>error;
                console.log(errormsn);
            }
        );            

        console.log(this._httpService.getSomething(this.componentTitle));
    }

    cambio(datares){
        this.selected = datares;
        console.log(this.selected);
    }
}