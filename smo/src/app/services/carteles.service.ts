import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RespuestaCDB } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class CartelesService {

  constructor(private http: HttpClient) { }
	pagina:number=0;
	URL_SERVICIOS="http://wsbrb-services.com/smo/servicios";
  getCarteles(){
    let url=this.URL_SERVICIOS + "/carteles.php?todos&pagina="+this.pagina;
    console.log(url);
    return this.http.get<RespuestaCDB>(url);

  }
	getCartel(id:string){
    let url=this.URL_SERVICIOS + "/cartel.php?id="+id;
    console.log(url);
    return this.http.get<RespuestaCDB>(url);

  }
  
}
