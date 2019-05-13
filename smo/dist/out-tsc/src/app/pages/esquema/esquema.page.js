import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { DocumentViewer } from '@ionic-native/document-viewer/ngx';
var EsquemaPage = /** @class */ (function () {
    function EsquemaPage(document) {
        this.document = document;
        this.slideOpts = {
            zoom: true
        };
        this.options = {
            title: 'My PDF'
        };
    }
    EsquemaPage.prototype.ngOnInit = function () {
        this.document.viewDocument('../../assets/25-May-2019-Sábado_Saturday.pdf', 'application/pdf', this.options);
    };
    EsquemaPage = tslib_1.__decorate([
        Component({
            selector: 'app-esquema',
            templateUrl: './esquema.page.html',
            styleUrls: ['./esquema.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [DocumentViewer])
    ], EsquemaPage);
    return EsquemaPage;
}());
export { EsquemaPage };
//# sourceMappingURL=esquema.page.js.map