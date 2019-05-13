import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
var TabsPage = /** @class */ (function () {
    function TabsPage(iab) {
        this.iab = iab;
        this.slideOpts = {
            effect: 'cube',
            speed: 700,
            autoplay: true,
            loop: true
        };
    }
    TabsPage.prototype.abrirWeb = function (url) {
        var browser = this.iab.create(url, '_system');
    };
    TabsPage = tslib_1.__decorate([
        Component({
            selector: 'app-tabs',
            templateUrl: 'tabs.page.html',
            styleUrls: ['tabs.page.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [InAppBrowser])
    ], TabsPage);
    return TabsPage;
}());
export { TabsPage };
//# sourceMappingURL=tabs.page.js.map