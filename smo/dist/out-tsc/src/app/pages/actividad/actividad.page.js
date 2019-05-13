import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActividadesService } from 'src/app/services/actividades.service';
import { DatosService } from '../../services/datos.service';
var ActividadPage = /** @class */ (function () {
    function ActividadPage(activeRoute, _as, _ds) {
        this.activeRoute = activeRoute;
        this._as = _as;
        this._ds = _ds;
        this.id = null;
        this.actividad = null;
        this.seccion = "1";
    }
    ActividadPage.prototype.ngOnInit = function () {
        this.id = this.activeRoute.snapshot.paramMap.get('id');
        this.esFavorito();
        this._as.getDetalles(this.id).then(function (result) {
        });
    };
    ActividadPage.prototype.guardarFavorito = function (favorito) {
        this._ds.guardarFavorito(favorito);
    };
    ActividadPage.prototype.esFavorito = function () {
        this._ds.isFavorito(this.id);
    };
    ActividadPage = tslib_1.__decorate([
        Component({
            selector: 'app-actividad',
            templateUrl: './actividad.page.html',
            styleUrls: ['./actividad.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [ActivatedRoute,
            ActividadesService,
            DatosService])
    ], ActividadPage);
    return ActividadPage;
}());
export { ActividadPage };
//# sourceMappingURL=actividad.page.js.map