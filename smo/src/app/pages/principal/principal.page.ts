import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage {
	constructor(public navCtrl: NavController) {

  }


	navegarPagina(pagina:any){
    console.log(pagina);
    this.navCtrl.navigateForward('/tabs/principal/'+pagina);
	}


	// abrirWeb(url:string, target:string){
	// 	if(target=="_system") {
	// 		this.visitar_pagina(url);
	// 	}else{
	// 		this.navCtrl.push(WebPage, {'url':url});
	// 	}
		
	// }


}
