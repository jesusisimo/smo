import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage {
	constructor(
		public navCtrl: NavController,
		private iab: InAppBrowser
		) {

  }


	navegarPagina(pagina:any){
    console.log(pagina);
    this.navCtrl.navigateForward('/tabs/principal/'+pagina);
	}


	abrirWeb(url:string, target:string){
		this.iab.create(url, target);
	}


}
