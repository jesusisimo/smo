import { Injectable } from '@angular/core';
import { AjustesService } from './ajustes.service';
import { URL_SERVICIOS } from "../config/url.servicios";
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PonentesService {
  pagina: number = 0;
  ponentes: IPonente[];
  ponente: IPonente;
  constructor(
    private http: HttpClient,
    private _as:AjustesService) { }



  async getDetalles(id: string) {
    if (!this._as.online) {
      return false;
    }
    this._as.presentLoading("Cargando...");
    let url = URL_SERVICIOS + "/profesores.php?id=" + id
    let promesa = this.http.get<InterfacePonentes>(url)
      .toPromise()
      .then(data => {
        this.ponentes = data.profesores;
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

      this._as.presentLoading("Cargando...");
      let url = URL_SERVICIOS + "/profesores.php?todos&pagina=" + this.pagina;
      let promesa = this.http.get<InterfacePonentes>(url)
        .toPromise()
        .then(data => {
          this.ponentes = data.profesores;
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
    let url = URL_SERVICIOS + "/profesores.php?todos&pagina=" + this.pagina;
    let promesa = await this.http.get<InterfacePonentes>(url)
      .toPromise()
      .then(data => {
        if (data.profesores.length > 0) {
          this.ponentes.push(...data.profesores);
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

      let url = URL_SERVICIOS + "/profesores.php?search=" + variable;
      let promesa = await this.http.get<InterfacePonentes>(url)
        .toPromise()
        .then(data => {
          this.ponentes = null;
          this.ponentes = data.profesores;
          this.pagina = 1;
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
      this.cargar_todos();
      return true;
    } else {
      this.pagina = 0;
      this._as.presentLoading("Recargando...");
      let url = URL_SERVICIOS + "/profesores.php?todos&pagina=" + this.pagina + "&search=" + variable;
      let promesa = await this.http.get<InterfacePonentes>(url)
        .toPromise()
        .then(data => {
          if (data.profesores.length > 0) {
            this.ponentes = data.profesores;
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




}
