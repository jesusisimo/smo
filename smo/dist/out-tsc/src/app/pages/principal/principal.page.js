import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
var PrincipalPage = /** @class */ (function () {
    function PrincipalPage(navCtrl, iab) {
        this.navCtrl = navCtrl;
        this.iab = iab;
    }
    PrincipalPage.prototype.navegarPagina = function (pagina) {
        console.log(pagina);
        this.navCtrl.navigateForward('/tabs/principal/' + pagina);
    };
    PrincipalPage.prototype.abrirWeb = function (url, target) {
        this.iab.create(url, target);
    };
    PrincipalPage = tslib_1.__decorate([
        Component({
            selector: 'app-principal',
            templateUrl: './principal.page.html',
            styleUrls: ['./principal.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [NavController,
            InAppBrowser])
    ], PrincipalPage);
    return PrincipalPage;
}());
export { PrincipalPage };
//# sourceMappingURL=principal.page.js.map