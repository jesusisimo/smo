import { Injectable } from '@angular/core';
import { LoadingController, Platform, ToastController } from '@ionic/angular';
import { Network } from '@ionic-native/network/ngx';

@Injectable({
  providedIn: 'root'
})
export class AjustesService {
  loading: any;
  online:boolean=true;
  constructor(
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private platform: Platform,
    private network: Network
  ) { 
    this.checkConexion();
  }
  
  async presentLoading(mensaje:string,segundos:number=3){
   let duracion=1000*segundos;
    this.loading = await this.loadingCtrl.create({
      message: mensaje,
      duration: duracion
    });
    return this.loading.present();
  }
    
  async presentToast(mensaje:string) {
    const toast = await this.toastCtrl.create({
      message: mensaje,
      duration: 3000,
      position: 'bottom',
      color: 'dark'
    });
    toast.present();
  }

  checkConexion(){
    if( this.platform.is('cordova') ) {
      if( this.network.type === undefined || this.network.type === null || this.network.type === 'unknown') {
        this.online=false;
        //this.presentToast('No hay conexion a internet');
      } else {
        this.online=true;
      }
    } else {
      this.online=navigator.onLine;
    }
    
    let disconnectSubscription = this.network.onDisconnect().subscribe(() => {
      //this.presentToast('Se perdio la conexion a internet');
      this.online=false;
    });
    let connectSubscription = this.network.onConnect().subscribe(() => {
      this.online=true;
    });

  }
  
}
