import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActividadesService } from 'src/app/services/actividades.service';
import { DatosService } from '../../services/datos.service';


@Component({
  selector: 'app-actividad',
  templateUrl: './actividad.page.html',
  styleUrls: ['./actividad.page.scss'],
})
export class ActividadPage implements OnInit {
  id = null;
  actividad: IActividad[] = null;
  seccion = "1";
  constructor(
    private activeRoute: ActivatedRoute,
    private _as: ActividadesService,
    private _ds: DatosService
  ) { }

  ngOnInit() {

    this.id = this.activeRoute.snapshot.paramMap.get('id');
    this.esFavorito();
    this._as.getDetalles(this.id).then(
      result => {
      }
    );
  }
  guardarFavorito(favorito:any) {
    this._ds.guardarFavorito(favorito);
  }
  esFavorito(){
    this._ds.isFavorito(this.id);
  }
}
