import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { URL_SERVICIOS } from '../config/url.servicios';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { AjustesService } from './ajustes.service';
import { InterfaceCarteles, ICartel } from '../interfaces/carteles';
import { InterfaceVideos, IVideo } from '../interfaces/videos';

@Injectable({
  providedIn: 'root'
})
export class DatosService {
  carteles: ICartel[];
  videos: IVideo[];
  constructor(
    private storage: Storage,
    private http: HttpClient,
    private _as: AjustesService,
  ) { }

  actualizaciones() {
    if (this._as.online) {
      this.storage.get('carteles').then((valores) => {
        if (!valores) {
          this.guardarCarteles();
        }
      });

      this.storage.get('videos').then((valores) => {
        if (!valores) {
          this.guardarVideos();
        }
      });

    }
  }

  guardarCarteles() {
    let url = URL_SERVICIOS + "/carteles.php?getall";
    let promesa = this.http.get<InterfaceCarteles>(url)
      .toPromise()
      .then(data => {
        if (data.resultados.length > 0) {
          this.storage.set('carteles', data.resultados);
          this._as.presentToast("Carteles guardados en dispositivo");
        }
        return promesa;
      })
      .catch(error => {
        return Promise.reject(error);
      });
    return promesa;
  }

  async getCarteles() {
    let promesa = await this.storage.get('carteles').then((valores) => {
      this.carteles = valores;
      return valores;
    });
    return promesa;
  }


  guardarVideos() {
    let url = URL_SERVICIOS + "/videos.php?getall";
    let promesa = this.http.get<InterfaceVideos>(url)
      .toPromise()
      .then(data => {
        if (data.resultados.length > 0) {
          this.storage.set('videos', data.resultados);
          this._as.presentToast("Videos guardados en dispositivo");
        }
        return promesa;
      })
      .catch(error => {
        return Promise.reject(error);
      });
    return promesa;
  }

  async getVideos() {
    let promesa = await this.storage.get('videos').then((valores) => {
      this.videos = valores;
      return valores;
    });
    return promesa;
  }



}
