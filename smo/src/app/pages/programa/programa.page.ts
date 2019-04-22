import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ActividadesService } from 'src/app/services/actividades.service';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-programa',
  templateUrl: './programa.page.html',
  styleUrls: ['./programa.page.scss'],
})
export class ProgramaPage implements OnInit {
  variable:string="";
  constructor(
    public modalCtrl: ModalController,
    private _as: ActividadesService,
    private iab: InAppBrowser
  ) { 
  }

  ngOnInit() {
    this._as.pagina = 0;
    this._as.dias = [];
    this._as.cargar_todos().then(
      result => console.log("Ya hay datos",result)
    );
  }


 

}
