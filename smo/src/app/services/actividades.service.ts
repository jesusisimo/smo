import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from "../config/url.servicios";
import { AjustesService } from './ajustes.service';
import { DatosService } from './datos.service';
import 'rxjs/add/operator/map';
import { promise } from 'protractor';


@Injectable({
  providedIn: 'root'
})
export class ActividadesService {
  pagina: number = 0;
  dia_actual: string;
  dias: IDia[];
  actividad: IActividad[];
  constructor(
    private http: HttpClient,
    private _as: AjustesService,
    private _ds: DatosService,
  ) { }



  async cargar_todos() {
    this._as.presentLoading("Cargando...");
    let url = await URL_SERVICIOS + "/minutoxminuto.php?todos&pagina=" + this.pagina;
    let promesa = this.http.get<InterfaceActividades>(url)
      .toPromise()
      .then(data => {
        this.dias = data.dias;
        this.dia_actual=data.diaactual;
        this.pagina = this.pagina += 1;
        this._as.loading.dismiss();
        return promesa;
      })
      .catch(error => {
        this._as.loading.dismiss();
        return Promise.reject(error);
      });
    return promesa;
}

async getDetalles(id:any) {
  this._as.presentLoading("Cargando...",0.5);
  let url = await URL_SERVICIOS + "/actividad.php?id="+id;
  let promesa = this.http.get<IDia>(url)
    .toPromise()
    .then(data => {
      this.actividad=data.actividades;
      this._as.loading.dismiss();
      return promesa;
    })
    .catch(error => {
      this._as.loading.dismiss();
      return Promise.reject(error);
    });
  return promesa;
}









}
