(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-pages-registration-registration-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/registration/registration.page.html":
    /*!*********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/registration/registration.page.html ***!
      \*********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppModulesPagesRegistrationRegistrationPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"humantech\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\n    </ion-buttons>\n    <ion-title class=\"ion-text-center\">{{'REGISTRATION.registrarse' | translate }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen>\n  <ion-row>\n    <ion-col>\n      <ion-img src=\"./assets/img/logoH.png\" class=\"icon ion-margin\"></ion-img>\n      <ion-item>\n        <ion-label position=\"floating\">{{'REGISTRATION.nombre' | translate }}</ion-label>\n        <ion-input type=\"Email\" [(ngModel)]=\"name\" name=\"name\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"floating\">Email</ion-label>\n        <ion-input type=\"Email\" [(ngModel)]=\"email\" name=\"email\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"floating\">{{'REGISTRATION.password' | translate }}</ion-label>\n        <ion-input type=\"Password\" [(ngModel)]=\"password\" name=\"password\"></ion-input>\n      </ion-item>\n      <ion-button color=\"primary\" (click)=\"saveNewUser()\" expand=\"block\">\n        {{'REGISTRATION.guardar' | translate }}\n      </ion-button>\n    </ion-col>\n  </ion-row>\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/modules/pages/registration/registration-routing.module.ts":
    /*!***************************************************************************!*\
      !*** ./src/app/modules/pages/registration/registration-routing.module.ts ***!
      \***************************************************************************/

    /*! exports provided: RegistrationPageRoutingModule */

    /***/
    function srcAppModulesPagesRegistrationRegistrationRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegistrationPageRoutingModule", function () {
        return RegistrationPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _registration_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./registration.page */
      "./src/app/modules/pages/registration/registration.page.ts");

      var routes = [{
        path: '',
        component: _registration_page__WEBPACK_IMPORTED_MODULE_3__["RegistrationPage"]
      }];

      var RegistrationPageRoutingModule = function RegistrationPageRoutingModule() {
        _classCallCheck(this, RegistrationPageRoutingModule);
      };

      RegistrationPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], RegistrationPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/modules/pages/registration/registration.module.ts":
    /*!*******************************************************************!*\
      !*** ./src/app/modules/pages/registration/registration.module.ts ***!
      \*******************************************************************/

    /*! exports provided: RegistrationPageModule */

    /***/
    function srcAppModulesPagesRegistrationRegistrationModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegistrationPageModule", function () {
        return RegistrationPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _registration_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./registration-routing.module */
      "./src/app/modules/pages/registration/registration-routing.module.ts");
      /* harmony import */


      var _registration_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./registration.page */
      "./src/app/modules/pages/registration/registration.page.ts");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ngx-translate/core */
      "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

      var RegistrationPageModule = function RegistrationPageModule() {
        _classCallCheck(this, RegistrationPageModule);
      };

      RegistrationPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _registration_routing_module__WEBPACK_IMPORTED_MODULE_5__["RegistrationPageRoutingModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"].forChild()],
        declarations: [_registration_page__WEBPACK_IMPORTED_MODULE_6__["RegistrationPage"]]
      })], RegistrationPageModule);
      /***/
    },

    /***/
    "./src/app/modules/pages/registration/registration.page.scss":
    /*!*******************************************************************!*\
      !*** ./src/app/modules/pages/registration/registration.page.scss ***!
      \*******************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppModulesPagesRegistrationRegistrationPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".margin50 {\n  margin-top: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9wYWdlcy9yZWdpc3RyYXRpb24vcmVnaXN0cmF0aW9uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcGFnZXMvcmVnaXN0cmF0aW9uL3JlZ2lzdHJhdGlvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFyZ2luNTB7XG4gICAgbWFyZ2luLXRvcDogNTAlO1xuICB9Il19 */";
      /***/
    },

    /***/
    "./src/app/modules/pages/registration/registration.page.ts":
    /*!*****************************************************************!*\
      !*** ./src/app/modules/pages/registration/registration.page.ts ***!
      \*****************************************************************/

    /*! exports provided: RegistrationPage */

    /***/
    function srcAppModulesPagesRegistrationRegistrationPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegistrationPage", function () {
        return RegistrationPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../core/services/auth.service */
      "./src/app/core/services/auth.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ngx-translate/core */
      "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

      var RegistrationPage = /*#__PURE__*/function () {
        function RegistrationPage(authSvc, router, alertController, translateSvc) {
          _classCallCheck(this, RegistrationPage);

          this.authSvc = authSvc;
          this.router = router;
          this.alertController = alertController;
          this.translateSvc = translateSvc;
        }

        _createClass(RegistrationPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "presentAlert",
          value: function presentAlert() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var alert;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.alertController.create({
                        header: this.translateSvc.instant('ALERT.user'),
                        subHeader: this.translateSvc.instant('ALERT.usersub'),
                        message: this.translateSvc.instant('ALERT.usermsg'),
                        buttons: ['OK']
                      });

                    case 2:
                      alert = _context.sent;
                      _context.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "saveNewUser",
          value: function saveNewUser() {
            var _this = this;

            this.authSvc.onRegister(this.email, this.password, this.name).then(function (auth) {
              _this.presentAlert();

              _this.router.navigateByUrl('/');
            })["catch"](function (err) {
              return console.log(err);
            });
          }
        }]);

        return RegistrationPage;
      }();

      RegistrationPage.ctorParameters = function () {
        return [{
          type: _core_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]
        }];
      };

      RegistrationPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-registration',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./registration.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/registration/registration.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./registration.page.scss */
        "./src/app/modules/pages/registration/registration.page.scss"))["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_core_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]])], RegistrationPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=modules-pages-registration-registration-module-es5.js.map