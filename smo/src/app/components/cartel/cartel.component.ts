import { Component, OnInit, Input } from '@angular/core';
import { Cartel } from 'src/app/interfaces/interfaces';
import { CartelesService } from 'src/app/services/carteles.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-cartel',
  templateUrl: './cartel.component.html',
  styleUrls: ['./cartel.component.scss'],
})
export class CartelComponent implements OnInit {
@Input() id;
cartel: Cartel[]=[];
  constructor(private cartelesServices: CartelesService,
    private modalCtrl: ModalController) { }


  ngOnInit() {
    //console.log("ID "+this.id);

  this.cartelesServices.getCartel(this.id)
    .subscribe((resp)=>{
      console.log("Resp ",resp);
      this.cartel=resp.carteles;
    });
  }
  regresar(){
    this.modalCtrl.dismiss();
  }
}
