import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CartelComponent } from 'src/app/components/cartel/cartel.component';
import { CartelesService } from 'src/app/services/carteles.service';
import { Cartel } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-carteles',
  templateUrl: './carteles.page.html',
  styleUrls: ['./carteles.page.scss'],
})
export class CartelesPage  implements OnInit{
  listacarteles: Cartel[]=[];
  constructor(public modalCtrl:ModalController, private cartelesServices: CartelesService) { }
  
  ngOnInit(){
   console.log("listando");
    this.cartelesServices.getCarteles()
    .subscribe((resp)=>{
      console.log("Resp ",resp);
      this.listacarteles=resp.carteles;
    });
  }

	async verCartel(id:any){
    const modal = await this.modalCtrl.create({
      component: CartelComponent,
      componentProps:{
        id
      }
    });
    modal.present();
	}

}
