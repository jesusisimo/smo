import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from "../config/url.servicios";
import { AjustesService } from './ajustes.service';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class CartelesService {

  constructor(
    private http: HttpClient,
    private _as: AjustesService
  ) { }
  pagina: number = 0;
  carteles: any[] = [];

  getDetalles(id: string) {
    this._as.presentLoading("Cargando...");
    let url = URL_SERVICIOS + "/cartel.php?id=" + id
    let promesa = this.http.get(url)
      .toPromise()
      .then(data => {
        this.carteles = data['carteles'];
        this._as.loading.dismiss();
        return data;
      })
      .catch(error => {
        this._as.loading.dismiss();
        return Promise.reject(error);
      });
    return promesa;
  }

  cargar_todos() {
    if (!this._as.online) {
      return false;
    }
    this._as.presentLoading("Cargando...");
    let url = URL_SERVICIOS + "/carteles.php?todos&pagina=" + this.pagina;
    let promesa = this.http.get(url)
      .toPromise()
      .then(data => {
        this.carteles = data['carteles'];
        this.pagina = this.pagina += 1;
        this._as.loading.dismiss();
        return data;
      })
      .catch(error => {
        this._as.loading.dismiss();
        return Promise.reject(error);
      });
    return promesa;
  }



  async siguiente_pagina() {
    if (!this._as.online) {
      return false;
    }
    let url = URL_SERVICIOS + "/carteles.php?todos&pagina=" + this.pagina;
    let promesa = await this.http.get(url)
      .toPromise()
      .then(data => {
        if (data['carteles'].length > 0) {
          this.carteles.push(...data['carteles']);
          this.pagina = this.pagina += 1;
        } else {
          this._as.presentToast("No hay mas información");
        }
        return promesa;
      })
      .catch(error => {
        this._as.presentToast("Ocurrio un error");
        return Promise.reject(error);
      });
    return promesa;
  }


  async buscar(variable: string) {

    let url = URL_SERVICIOS + "/carteles.php?search=" + variable;
    let promesa = await this.http.get(url)
      .toPromise()
      .then(data => {

        this.carteles = [];
        this.carteles = data['carteles'];
        this.pagina = this.pagina += 1;

        return promesa;
      })
      .catch(error => {
        this._as.presentToast("Ocurrio un error");
        return Promise.reject(error);
      });
    return promesa;
  }


  async recargar(variable: string) {

    if (!this._as.online) {
      return false;
    }
    this.pagina = 0;
    this._as.presentLoading("Recargando...");
    let url = URL_SERVICIOS + "/carteles.php?todos&pagina=" + this.pagina + "&search=" + variable;
    let promesa = await this.http.get(url)
      .toPromise()
      .then(data => {
        if (data['carteles'].length > 0) {
          this.carteles = data['carteles'];
          this.pagina = 1;
        } else {
          this._as.presentToast("No hay mas información");
        }
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
