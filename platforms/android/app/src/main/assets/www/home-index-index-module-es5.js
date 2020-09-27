(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-index-index-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/home/index/index.page.html":
    /*!**********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/index/index.page.html ***!
      \**********************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppHomeIndexIndexPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar color=\"humantech\">\n    <ion-title class=\"ion-text-center\">\n      {{'INDEX.hola' | translate }}\n    </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"openLanguagePopover($event)\">\n        <ion-icon name=\"flag\" slot=\"icon-only\">\n        </ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n\n  <ion-card color=\"humantech\" class=\"ion-margin-vertical\">\n    <h5 class=\"ion-padding\">{{'INDEX.hola' | translate }}{{nameUser}}</h5>\n    <ion-card-content class=\"ion-margin-vertical\">\n      <ion-item>\n        <ion-text>{{'INDEX.paso1' | translate }}</ion-text>\n      </ion-item>\n\n    </ion-card-content>\n  </ion-card>\n  <br>\n  <ion-button color=\"danger\" expand=\"block\" (click)=\"salir()\">{{'AVATAR.cerrar' | translate }}</ion-button>\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/home/index/index-routing.module.ts":
    /*!****************************************************!*\
      !*** ./src/app/home/index/index-routing.module.ts ***!
      \****************************************************/

    /*! exports provided: IndexPageRoutingModule */

    /***/
    function srcAppHomeIndexIndexRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IndexPageRoutingModule", function () {
        return IndexPageRoutingModule;
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


      var _index_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./index.page */
      "./src/app/home/index/index.page.ts");

      var routes = [{
        path: '',
        component: _index_page__WEBPACK_IMPORTED_MODULE_3__["IndexPage"]
      }];

      var IndexPageRoutingModule = function IndexPageRoutingModule() {
        _classCallCheck(this, IndexPageRoutingModule);
      };

      IndexPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], IndexPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/home/index/index.module.ts":
    /*!********************************************!*\
      !*** ./src/app/home/index/index.module.ts ***!
      \********************************************/

    /*! exports provided: IndexPageModule */

    /***/
    function srcAppHomeIndexIndexModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IndexPageModule", function () {
        return IndexPageModule;
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


      var _index_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./index-routing.module */
      "./src/app/home/index/index-routing.module.ts");
      /* harmony import */


      var _index_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./index.page */
      "./src/app/home/index/index.page.ts");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ngx-translate/core */
      "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
      /* harmony import */


      var src_app_core_core_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/core/core.module */
      "./src/app/core/core.module.ts");
      /* harmony import */


      var src_app_core_header_language_language_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/core/header/language/language.component */
      "./src/app/core/header/language/language.component.ts");

      var IndexPageModule = function IndexPageModule() {
        _classCallCheck(this, IndexPageModule);
      };

      IndexPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        entryComponents: [src_app_core_header_language_language_component__WEBPACK_IMPORTED_MODULE_9__["LanguageComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _index_routing_module__WEBPACK_IMPORTED_MODULE_5__["IndexPageRoutingModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"].forChild(), src_app_core_core_module__WEBPACK_IMPORTED_MODULE_8__["CoreModule"]],
        declarations: [_index_page__WEBPACK_IMPORTED_MODULE_6__["IndexPage"]]
      })], IndexPageModule);
      /***/
    },

    /***/
    "./src/app/home/index/index.page.scss":
    /*!********************************************!*\
      !*** ./src/app/home/index/index.page.scss ***!
      \********************************************/

    /*! exports provided: default */

    /***/
    function srcAppHomeIndexIndexPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaW5kZXgvaW5kZXgucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "./src/app/home/index/index.page.ts":
    /*!******************************************!*\
      !*** ./src/app/home/index/index.page.ts ***!
      \******************************************/

    /*! exports provided: IndexPage */

    /***/
    function srcAppHomeIndexIndexPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IndexPage", function () {
        return IndexPage;
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


      var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/core/services/auth.service */
      "./src/app/core/services/auth.service.ts");
      /* harmony import */


      var src_app_core_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/core/services/user.service */
      "./src/app/core/services/user.service.ts");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var src_app_core_header_language_language_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/core/header/language/language.component */
      "./src/app/core/header/language/language.component.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var IndexPage = /*#__PURE__*/function () {
        function IndexPage(authSvc, userSvc, popoverCtrl, router) {
          _classCallCheck(this, IndexPage);

          this.authSvc = authSvc;
          this.userSvc = userSvc;
          this.popoverCtrl = popoverCtrl;
          this.router = router;
        }

        _createClass(IndexPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.authSvc.getUserAuth().subscribe(function (user) {
              _this.uid = user.uid;

              _this.getName(_this.uid);
            });
          }
        }, {
          key: "openLanguagePopover",
          value: function openLanguagePopover(ev) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var popover;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.popoverCtrl.create({
                        component: src_app_core_header_language_language_component__WEBPACK_IMPORTED_MODULE_5__["LanguageComponent"],
                        event: ev,
                        mode: 'ios'
                      });

                    case 2:
                      popover = _context.sent;
                      _context.next = 5;
                      return popover.present();

                    case 5:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "getName",
          value: function getName(uid) {
            var _this2 = this;

            this.userSvc.getOneUser(uid).subscribe(function (user) {
              _this2.nameUser = user.name;
            });
          }
        }, {
          key: "salir",
          value: function salir() {
            this.authSvc.logout();
          }
        }]);

        return IndexPage;
      }();

      IndexPage.ctorParameters = function () {
        return [{
          type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
        }, {
          type: src_app_core_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }];
      };

      IndexPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-index',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./index.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/home/index/index.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./index.page.scss */
        "./src/app/home/index/index.page.scss"))["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], src_app_core_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])], IndexPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=home-index-index-module-es5.js.map