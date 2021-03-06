import { Component, OnInit } from '@angular/core';
import { NavController, Platform, AlertController } from '@ionic/angular';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { UsuarioService } from 'src/app/services/usuario.service';
import { AjustesService } from 'src/app/services/ajustes.service';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { DocumentViewer, DocumentViewerOptions } from '@ionic-native/document-viewer/ngx';
import { File } from '@ionic-native/file/ngx';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage {
	constructor(
		public navCtrl: NavController,
		private iab: InAppBrowser,
		private _us:UsuarioService,
		private _as:AjustesService,
		private platform: Platform,
		private file: File,
		private ft:FileTransfer,
		private fileOpener: FileOpener,
		private document: DocumentViewer,
		private alert:AlertController
		) {

  }


	async navegarPagina(pagina:any){
		console.log(pagina);
		if((pagina=="agenda" || pagina=="congresistas")&& !await this._us.tienePermiso()){
			this._as.presentAlert("Inicia sesión para ver esta sección");
			this.navCtrl.navigateRoot('/tabs/login');
		}else{
			 this.navCtrl.navigateForward('/tabs/principal/'+pagina);
		}
   
	}


	abrirWeb(url:string, target:string){
		this.iab.create(url, target);
	}
	openLocalPdf() {
    let filePath = this.file.applicationDirectory + 'www/assets';
 
    if (this.platform.is('android')) {
      let fakeName = Date.now();
      this.file.copyFile(filePath, 'programa_final.pdf', this.file.dataDirectory, `${fakeName}.pdf`).then(result => {
        this.fileOpener.open(result.nativeURL, 'application/pdf')
          .then(() => console.log('File is opened'))
          .catch(e => console.log('Error opening file', e));
      })
    } else {
      // Use Document viewer for iOS for a better UI
      const options: DocumentViewerOptions = {
        title: 'Programa'
      }
      this.document.viewDocument(`${filePath}/programa_final.pdf`, 'application/pdf', options);
    }
	}
	
	downloadAndOpenPdf() {
		let downloadUrl = 'http://www.paaocancun2019.com/wp-content/uploads/2019/05/programa_paao2.pdf';
		let path = this.file.dataDirectory;
		const transfer = this.ft.create();
	 
		transfer.download(downloadUrl, path + 'programa.pdf').then(entry => {
			let url = entry.toURL();
	 
			if (this.platform.is('ios')) {
				this.document.viewDocument(url, 'application/pdf', {});
			} else {
				this.fileOpener.open(url, 'application/pdf')
					.then(() => console.log('File is opened'))
					.catch(e => console.log('Error opening file', e));
			}
		});
	}

}
