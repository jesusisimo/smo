import { Component } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})

export class TabsPage {
  slideOpts = {
		effect: 'cube',
    speed: 700,
    autoplay:true,
		loop:true
    };
  constructor(private iab: InAppBrowser){

  }
  abrirWeb(url:string){
    const browser = this.iab.create(url,'_system');
  }
}
