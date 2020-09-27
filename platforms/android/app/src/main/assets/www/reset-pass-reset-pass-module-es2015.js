(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["reset-pass-reset-pass-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/login/reset-pass/reset-pass.page.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/login/reset-pass/reset-pass.page.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"humantech\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{'LOGIN.olvidecontra' | translate }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <ion-row>\n    <ion-col>\n      <ion-img src=\"./assets/img/logoH.png\" class=\"icon ion-margin\"></ion-img>\n      <ion-card class=\"ion-align-self-auto\">\n        <ion-card-content class=\"ion-text-center\">\n          <small>{{'LOGIN.escribirmail' | translate }}</small>\n          <ion-item>\n            <ion-label position=\"floating\">Email</ion-label>\n            <ion-input type=\"Email\" [(ngModel)]=\"email\"></ion-input>\n          </ion-item>\n          <ion-button color=\"primary\" (click)=\"sendLinkReset()\" expand=\"block\">\n            {{'LOGIN.enviarlink' | translate }}\n          </ion-button>\n        </ion-card-content>\n      </ion-card>\n    </ion-col>\n  </ion-row>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/modules/pages/login/reset-pass/reset-pass-routing.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/pages/login/reset-pass/reset-pass-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: ResetPassPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPassPageRoutingModule", function() { return ResetPassPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _reset_pass_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reset-pass.page */ "./src/app/modules/pages/login/reset-pass/reset-pass.page.ts");




const routes = [
    {
        path: '',
        component: _reset_pass_page__WEBPACK_IMPORTED_MODULE_3__["ResetPassPage"]
    }
];
let ResetPassPageRoutingModule = class ResetPassPageRoutingModule {
};
ResetPassPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ResetPassPageRoutingModule);



/***/ }),

/***/ "./src/app/modules/pages/login/reset-pass/reset-pass.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/modules/pages/login/reset-pass/reset-pass.module.ts ***!
  \*********************************************************************/
/*! exports provided: ResetPassPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPassPageModule", function() { return ResetPassPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _reset_pass_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reset-pass-routing.module */ "./src/app/modules/pages/login/reset-pass/reset-pass-routing.module.ts");
/* harmony import */ var _reset_pass_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reset-pass.page */ "./src/app/modules/pages/login/reset-pass/reset-pass.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");








let ResetPassPageModule = class ResetPassPageModule {
};
ResetPassPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _reset_pass_routing_module__WEBPACK_IMPORTED_MODULE_5__["ResetPassPageRoutingModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"].forChild()
        ],
        declarations: [_reset_pass_page__WEBPACK_IMPORTED_MODULE_6__["ResetPassPage"]]
    })
], ResetPassPageModule);



/***/ }),

/***/ "./src/app/modules/pages/login/reset-pass/reset-pass.page.scss":
/*!*********************************************************************!*\
  !*** ./src/app/modules/pages/login/reset-pass/reset-pass.page.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcGFnZXMvbG9naW4vcmVzZXQtcGFzcy9yZXNldC1wYXNzLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/pages/login/reset-pass/reset-pass.page.ts":
/*!*******************************************************************!*\
  !*** ./src/app/modules/pages/login/reset-pass/reset-pass.page.ts ***!
  \*******************************************************************/
/*! exports provided: ResetPassPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPassPage", function() { return ResetPassPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





let ResetPassPage = class ResetPassPage {
    constructor(authSvc, alertController, router) {
        this.authSvc = authSvc;
        this.alertController = alertController;
        this.router = router;
        this.email = "";
    }
    ngOnInit() {
    }
    presentAlert() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Correo enviado.',
                subHeader: 'Se te ha enviado un email a la casilla',
                message: 'Por favor compruebe restablezca su password y vuelva a ingresar.',
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
    notmail() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Complete su correo electronico',
                message: 'Por favor complete su correo para enviarle el link para modificar su pass.',
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
    sendLinkReset() {
        this.authSvc.resetPassword(this.email).then(() => {
            this.presentAlert();
            this.router.navigateByUrl('home/index');
        }).catch(() => {
            this.notmail();
        });
    }
};
ResetPassPage.ctorParameters = () => [
    { type: _core_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
ResetPassPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-reset-pass',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./reset-pass.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/login/reset-pass/reset-pass.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./reset-pass.page.scss */ "./src/app/modules/pages/login/reset-pass/reset-pass.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_core_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
], ResetPassPage);



/***/ })

}]);
//# sourceMappingURL=reset-pass-reset-pass-module-es2015.js.map