import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CartelesService } from 'src/app/services/carteles.service';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-carteles',
  templateUrl: './carteles.page.html',
  styleUrls: ['./carteles.page.scss'],
})
export class CartelesPage implements OnInit {
  variable: string = "";
  constructor(
    public modalCtrl: ModalController,
    private _cs: CartelesService,
    private iab: InAppBrowser
  ) { }

  ngOnInit() {
    this._cs.pagina = 0;
    this._cs.carteles = [];
    this._cs.cargar_todos();
  }


  // async verCartel(id:any){
  //   const modal = await this.modalCtrl.create({
  //     component: CartelComponent,
  //     componentProps:{
  //       id
  //     }
  //   });
  //   modal.present();
  // }

  detalles(url: string) {
    let link = url;
    this.iab.create(link, '_system');
  }

  buscar(texto: any) {
    this.variable = texto.target.value;
    this._cs.buscar(this.variable);
  }

  siguiente_pagina(event) {
    this._cs.siguiente_pagina()
      .then(() => {
        event.target.complete();
        event.target.disabled = false;
      })
  }

  recargar(event) {
    this._cs.recargar(this.variable)
      .then(() => {
        event.target.complete();
        event.target.disabled = false;
      })

  }
}
