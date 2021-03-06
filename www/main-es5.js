(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /Users/didgy/Documents/GitHub/Infinity/src/main.ts */
      "zUnb");
      /***/
    },

    /***/
    "1oPy":
    /*!*************************************************!*\
      !*** ./src/app/utils/history-helper.service.ts ***!
      \*************************************************/

    /*! exports provided: HistoryHelperService */

    /***/
    function oPy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HistoryHelperService", function () {
        return HistoryHelperService;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var HistoryHelperService = function HistoryHelperService(router) {
        var _this = this;

        _classCallCheck(this, HistoryHelperService);

        this.router = router;
        this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])(function (event) {
          return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_0__["NavigationEnd"];
        })).subscribe(function (_ref) {
          var urlAfterRedirects = _ref.urlAfterRedirects;
          console.log('previous URL', _this.previousUrl);
          _this.previousUrl = urlAfterRedirects;
          console.log('NEW previous URL', _this.previousUrl);
        });
      };

      HistoryHelperService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        factory: function HistoryHelperService_Factory() {
          return new HistoryHelperService(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]));
        },
        token: HistoryHelperService,
        providedIn: "root"
      });
      /***/
    },

    /***/
    "2gss":
    /*!************************************************************!*\
      !*** ./src/app/shell/image-shell/image-shell.component.ts ***!
      \************************************************************/

    /*! exports provided: ImageShellComponent */

    /***/
    function gss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ImageShellComponent", function () {
        return ImageShellComponent;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _config_app_shell_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../config/app-shell.config */
      "Kt/9");

      var ImageShellComponent = /*#__PURE__*/function () {
        function ImageShellComponent(platformId) {
          _classCallCheck(this, ImageShellComponent);

          this.platformId = platformId; // To debug shell styles, change configuration in the assets/app-shell.config.json file

          this.debugDisplay = _config_app_shell_config__WEBPACK_IMPORTED_MODULE_1__["AppShellConfig"].settings && _config_app_shell_config__WEBPACK_IMPORTED_MODULE_1__["AppShellConfig"].settings.debug ? _config_app_shell_config__WEBPACK_IMPORTED_MODULE_1__["AppShellConfig"].settings.debug : false; // tslint:disable-next-line:variable-name

          this._src = ''; // tslint:disable-next-line:variable-name

          this._alt = ''; // tslint:disable-next-line:variable-name

          this._display = '';
          this.imageLoaded = false;
        }

        _createClass(ImageShellComponent, [{
          key: "_imageLoaded",
          value: function _imageLoaded() {
            this.imageLoaded = true; // If it's a cover image then set the background-image property accordingly

            if (this._display === 'cover') {
              this.backgroundImage = 'url(' + this._src + ')';
            }
          }
        }, {
          key: "display",
          set: function set(val) {
            this._display = val !== undefined && val !== null ? val : '';
          },
          get: function get() {
            return this._display;
          }
        }, {
          key: "src",
          set: function set(val) {
            if (!this.debugDisplay) {
              this._src = val !== undefined && val !== null ? val : '';
            }

            if (this._display === 'cover') {
              // Unset the background-image
              this.backgroundImage = 'unset';
            } // Show loading indicator
            // When using SSR (Server Side Rendering), avoid the loading animation while the image resource is being loaded


            if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_0__["isPlatformServer"])(this.platformId)) {
              this.imageLoaded = true;
            } else {
              this.imageLoaded = false;
            }
          }
        }, {
          key: "alt",
          set: function set(val) {
            this._alt = val !== undefined && val !== null ? val : '';
          }
        }]);

        return ImageShellComponent;
      }();
      /***/

    },

    /***/
    "6LEC":
    /*!**********************************************************************!*\
      !*** ./src/app/shell/image-shell/image-shell.component.ngfactory.js ***!
      \**********************************************************************/

    /*! exports provided: RenderType_ImageShellComponent, View_ImageShellComponent_0, View_ImageShellComponent_Host_0, ImageShellComponentNgFactory */

    /***/
    function LEC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RenderType_ImageShellComponent", function () {
        return RenderType_ImageShellComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_ImageShellComponent_0", function () {
        return View_ImageShellComponent_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_ImageShellComponent_Host_0", function () {
        return View_ImageShellComponent_Host_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ImageShellComponentNgFactory", function () {
        return ImageShellComponentNgFactory;
      });
      /* harmony import */


      var _image_shell_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./image-shell.component.scss.shim.ngstyle */
      "tBTr");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../node_modules/@ionic/angular/ionic-angular.ngfactory */
      "MKJQ");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "sZkV");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _image_shell_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./image-shell.component */
      "2gss");
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var styles_ImageShellComponent = [_image_shell_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

      var RenderType_ImageShellComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
        encapsulation: 0,
        styles: styles_ImageShellComponent,
        data: {}
      });

      function View_ImageShellComponent_1(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵncd"](null, 0), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 0))], null, null);
      }

      function View_ImageShellComponent_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "ion-spinner", [["class", "spinner"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonSpinner_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonSpinner"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonSpinner"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 0, "img", [["class", "inner-img"]], [[8, "src", 4], [8, "alt", 0]], [[null, "load"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("load" === en) {
            var pd_0 = _co._imageLoaded() !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ImageShellComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null)], function (_ck, _v) {
          var _co = _v.component;
          var currVal_2 = _co._display === "cover";

          _ck(_v, 4, 0, currVal_2);
        }, function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co._src;
          var currVal_1 = _co._alt;

          _ck(_v, 2, 0, currVal_0, currVal_1);
        });
      }

      function View_ImageShellComponent_Host_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-image-shell", [], [[2, "img-loaded", null], [4, "backgroundImage", null], [1, "display", 0]], null, null, View_ImageShellComponent_0, RenderType_ImageShellComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _image_shell_component__WEBPACK_IMPORTED_MODULE_5__["ImageShellComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]], null, null)], null, function (_ck, _v) {
          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).imageLoaded;

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).backgroundImage;

          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).display;

          _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2);
        });
      }

      var ImageShellComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-image-shell", _image_shell_component__WEBPACK_IMPORTED_MODULE_5__["ImageShellComponent"], View_ImageShellComponent_Host_0, {
        display: "display",
        src: "src",
        alt: "alt"
      }, {}, ["*"]);
      /***/

    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // The file contents for the current environment will overwrite these during build.
      // The build system defaults to the dev environment which uses `environment.ts`, but if you do
      // `ng build --env=prod` then `environment.prod.ts` will be used instead.
      // The list of which env maps to which file can be found in `.angular-cli.json`.


      var environment = {
        production: false,
        firebase: {
          apiKey: "AIzaSyA8C3UCup5woYmKF6dUhf0L2lLWkpy6X4Q",
          authDomain: "infinity-generator-9dd24.firebaseapp.com",
          databaseURL: "https://infinity-generator-9dd24.firebaseio.com",
          projectId: "infinity-generator-9dd24",
          storageBucket: "infinity-generator-9dd24.appspot.com",
          messagingSenderId: "946195882953",
          appId: "1:946195882953:web:672eb24d0c52aefc8afe18",
          measurementId: "G-43VCWT3QRP"
        }
      };
      /*
       * In development mode, to ignore zone related error stack frames such as
       * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
       * import the following file, but please comment it out in production mode
       * because it will have performance impact when throw error
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "B7gC":
    /*!**************************************************************!*\
      !*** ./src/app/shell/aspect-ratio/aspect-ratio.component.ts ***!
      \**************************************************************/

    /*! exports provided: AspectRatioComponent */

    /***/
    function B7gC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AspectRatioComponent", function () {
        return AspectRatioComponent;
      });

      var AspectRatioComponent = /*#__PURE__*/function () {
        function AspectRatioComponent() {
          _classCallCheck(this, AspectRatioComponent);

          this.ratioPadding = '0px';
        }

        _createClass(AspectRatioComponent, [{
          key: "ratio",
          set: function set(ratio) {
            ratio = ratio !== undefined && ratio !== null ? ratio : {
              w: 1,
              h: 1
            };
            var heightRatio = ratio.h / ratio.w * 100 + '%'; // Conserve aspect ratio (see: http://stackoverflow.com/a/10441480/1116959)

            this.ratioPadding = '0px 0px ' + heightRatio + ' 0px';
          }
        }]);

        return AspectRatioComponent;
      }();
      /***/

    },

    /***/
    "Kt/9":
    /*!**************************************************!*\
      !*** ./src/app/shell/config/app-shell.config.ts ***!
      \**************************************************/

    /*! exports provided: AppShellConfig */

    /***/
    function Kt9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppShellConfig", function () {
        return AppShellConfig;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "IheW");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M"); // Inspired in: https://devblogs.microsoft.com/premier-developer/angular-how-to-editable-config-files/


      var AppShellConfig = /*#__PURE__*/function () {
        function AppShellConfig(http) {
          _classCallCheck(this, AppShellConfig);

          this.http = http;
        } // Simplified version from: https://stackoverflow.com/a/49707898/1116959


        _createClass(AppShellConfig, [{
          key: "load",
          value: function load() {
            var configFile = './assets/config/app-shell.config' + (!Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["isDevMode"])() ? '.prod' : '') + '.json';
            return this.http.get(configFile).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (configSettings) {
              AppShellConfig.settings = configSettings;
            })).toPromise()["catch"](function (error) {
              console.log("Could not load file '".concat(configFile, "'"), error);
            });
          }
        }]);

        return AppShellConfig;
      }();

      AppShellConfig.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        factory: function AppShellConfig_Factory() {
          return new AppShellConfig(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
        },
        token: AppShellConfig,
        providedIn: "root"
      });
      /***/
    },

    /***/
    "M4wD":
    /*!************************************************************************!*\
      !*** ./src/app/shell/aspect-ratio/aspect-ratio.component.ngfactory.js ***!
      \************************************************************************/

    /*! exports provided: RenderType_AspectRatioComponent, View_AspectRatioComponent_0, View_AspectRatioComponent_Host_0, AspectRatioComponentNgFactory */

    /***/
    function M4wD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RenderType_AspectRatioComponent", function () {
        return RenderType_AspectRatioComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_AspectRatioComponent_0", function () {
        return View_AspectRatioComponent_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_AspectRatioComponent_Host_0", function () {
        return View_AspectRatioComponent_Host_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AspectRatioComponentNgFactory", function () {
        return AspectRatioComponentNgFactory;
      });
      /* harmony import */


      var _aspect_ratio_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./aspect-ratio.component.scss.shim.ngstyle */
      "X8Sq");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _aspect_ratio_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./aspect-ratio.component */
      "B7gC");
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var styles_AspectRatioComponent = [_aspect_ratio_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

      var RenderType_AspectRatioComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
        encapsulation: 0,
        styles: styles_AspectRatioComponent,
        data: {}
      });

      function View_AspectRatioComponent_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "div", [["class", "content-wrapper"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵncd"](null, 0)], null, null);
      }

      function View_AspectRatioComponent_Host_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-aspect-ratio", [], [[4, "padding", null]], null, null, View_AspectRatioComponent_0, RenderType_AspectRatioComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _aspect_ratio_component__WEBPACK_IMPORTED_MODULE_2__["AspectRatioComponent"], [], null, null)], null, function (_ck, _v) {
          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).ratioPadding;

          _ck(_v, 0, 0, currVal_0);
        });
      }

      var AspectRatioComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-aspect-ratio", _aspect_ratio_component__WEBPACK_IMPORTED_MODULE_2__["AspectRatioComponent"], View_AspectRatioComponent_Host_0, {
        ratio: "ratio"
      }, {}, ["*"]);
      /***/

    },

    /***/
    "Ss9G":
    /*!*****************************************!*\
      !*** ./src/app/app.module.ngfactory.js ***!
      \*****************************************/

    /*! exports provided: AppModuleNgFactory */

    /***/
    function Ss9G(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModuleNgFactory", function () {
        return AppModuleNgFactory;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./app.module */
      "ZAI4");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../node_modules/@angular/router/router.ngfactory */
      "pMnS");
      /* harmony import */


      var _app_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./app.component.ngfactory */
      "yvrC");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/platform-browser */
      "cUpR");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      "sZkV");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _angular_fire__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/fire */
      "jmUF");
      /* harmony import */


      var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/fire/storage */
      "fMxG");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/common/http */
      "IheW");
      /* harmony import */


      var _angular_service_worker__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/service-worker */
      "3pDu");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @ngx-translate/core */
      "TSSN");
      /* harmony import */


      var _shell_shell_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./shell/shell.module */
      "ZpN7");
      /* harmony import */


      var _shell_config_app_shell_config__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./shell/config/app-shell.config */
      "Kt/9");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _components_components_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./components/components.module */
      "j1ZV");
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var AppModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"], [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]], function (_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_router_router_lNgFactory"], _app_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["AppComponentNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_r"], [[3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_x"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_t"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_ID"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_g"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_p"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_q"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["ɵDomSanitizerImpl"], [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Sanitizer"], null, [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["HAMMER_GESTURE_CONFIG"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["HammerGestureConfig"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["EVENT_MANAGER_PLUGINS"], function (p0_0, p0_1, p0_2, p1_0, p2_0, p2_1, p2_2, p2_3) {
          return [new _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["ɵDomEventsPlugin"](p0_0, p0_1, p0_2), new _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["ɵKeyEventsPlugin"](p1_0), new _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["ɵHammerGesturesPlugin"](p2_0, p2_1, p2_2, p2_3)];
        }, [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["HAMMER_GESTURE_CONFIG"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵConsole"], [2, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["HAMMER_LOADER"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["EventManager"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["EventManager"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["EVENT_MANAGER_PLUGINS"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](135680, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["ɵDomSharedStylesHost"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["ɵDomSharedStylesHost"], [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["ɵDomRendererFactory2"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["ɵDomRendererFactory2"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["EventManager"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["ɵDomSharedStylesHost"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"], null, [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["ɵDomRendererFactory2"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["ɵSharedStylesHost"], null, [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["ɵDomSharedStylesHost"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Testability"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Testability"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AngularDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AngularDelegate"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"], [_ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AngularDelegate"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["PopoverController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["PopoverController"], [_ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AngularDelegate"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_n"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_n"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_fire__WEBPACK_IMPORTED_MODULE_9__["FirebaseApp"], _angular_fire__WEBPACK_IMPORTED_MODULE_9__["ɵfirebaseAppFactory"], [_angular_fire__WEBPACK_IMPORTED_MODULE_9__["FIREBASE_OPTIONS"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], [2, _angular_fire__WEBPACK_IMPORTED_MODULE_9__["FIREBASE_APP_NAME"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_fire_storage__WEBPACK_IMPORTED_MODULE_10__["AngularFireStorage"], _angular_fire_storage__WEBPACK_IMPORTED_MODULE_10__["AngularFireStorage"], [_angular_fire__WEBPACK_IMPORTED_MODULE_9__["FIREBASE_OPTIONS"], [2, _angular_fire__WEBPACK_IMPORTED_MODULE_9__["FIREBASE_APP_NAME"]], [2, _angular_fire_storage__WEBPACK_IMPORTED_MODULE_10__["BUCKET"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_router__WEBPACK_IMPORTED_MODULE_11__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_router_router_g"], [_angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_router__WEBPACK_IMPORTED_MODULE_11__["NoPreloading"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["NoPreloading"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_router__WEBPACK_IMPORTED_MODULE_11__["PreloadingStrategy"], null, [_angular_router__WEBPACK_IMPORTED_MODULE_11__["NoPreloading"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](135680, _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterPreloader"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterPreloader"], [_angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleFactoryLoader"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["PreloadingStrategy"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_router__WEBPACK_IMPORTED_MODULE_11__["PreloadAllModules"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["PreloadAllModules"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_router__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_router_router_o"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_router_router_c"], [_angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["ViewportScroller"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["ROUTER_CONFIGURATION"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_router__WEBPACK_IMPORTED_MODULE_11__["ROUTER_INITIALIZER"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_router_router_j"], [_angular_router__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_router_router_h"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_BOOTSTRAP_LISTENER"], function (p0_0) {
          return [p0_0];
        }, [_angular_router__WEBPACK_IMPORTED_MODULE_11__["ROUTER_INITIALIZER"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpXsrfTokenExtractor"], _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_common_http_http_g"], [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_common_http_http_e"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_common_http_http_h"], _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_common_http_http_h"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpXsrfTokenExtractor"], _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_common_http_http_f"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HTTP_INTERCEPTORS"], function (p0_0) {
          return [p0_0];
        }, [_angular_common_http__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_common_http_http_h"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_common_http_http_d"], _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_common_http_http_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["XhrFactory"], null, [_angular_common_http__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_common_http_http_d"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpXhrBackend"], _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpXhrBackend"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_12__["XhrFactory"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpBackend"], null, [_angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpXhrBackend"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpHandler"], _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["ɵHttpInterceptingHandler"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpBackend"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClient"], _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClient"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpHandler"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_service_worker__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_service_worker_service_worker_a"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_service_worker_service_worker_d"], [_angular_service_worker__WEBPACK_IMPORTED_MODULE_13__["SwRegistrationOptions"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_service_worker__WEBPACK_IMPORTED_MODULE_13__["SwPush"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_13__["SwPush"], [_angular_service_worker__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_service_worker_service_worker_a"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_service_worker__WEBPACK_IMPORTED_MODULE_13__["SwUpdate"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_13__["SwUpdate"], [_angular_service_worker__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_service_worker_service_worker_a"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__["TranslateLoader"], _app_module__WEBPACK_IMPORTED_MODULE_1__["ɵ0"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClient"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__["TranslateCompiler"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__["TranslateFakeCompiler"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__["TranslateParser"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__["TranslateDefaultParser"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__["MissingTranslationHandler"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__["FakeMissingTranslationHandler"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__["TranslateStore"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__["TranslateStore"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__["TranslateService"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__["TranslateService"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__["TranslateStore"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__["TranslateLoader"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__["TranslateCompiler"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__["TranslateParser"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__["MissingTranslationHandler"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__["USE_DEFAULT_LANG"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__["USE_STORE"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__["USE_EXTEND"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__["DEFAULT_LANGUAGE"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_platform_browser_platform_browser_a"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgProbeToken"], function () {
          return [_angular_router__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_router_router_b"]()];
        }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_router__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_router_router_h"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_router_router_h"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ɵa"], undefined, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_service_worker__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_service_worker_service_worker_b"], "/ngsw-worker.js", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_service_worker__WEBPACK_IMPORTED_MODULE_13__["SwRegistrationOptions"], {
          enabled: false
        }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"], function (p0_0, p1_0, p2_0, p3_0, p3_1, p3_2, p4_0, p4_1, p4_2, p4_3) {
          return [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_platform_browser_platform_browser_m"](p0_0), _angular_router__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_router_router_i"](p1_0), _shell_shell_module__WEBPACK_IMPORTED_MODULE_15__["ɵ0"](p2_0), _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ɵf"](p3_0, p3_1, p3_2), _angular_service_worker__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_service_worker_service_worker_c"](p4_0, p4_1, p4_2, p4_3)];
        }, [[2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgProbeToken"]], _angular_router__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_router_router_h"], _shell_config_app_shell_config__WEBPACK_IMPORTED_MODULE_16__["AppShellConfig"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ɵa"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_service_worker_service_worker_b"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_13__["SwRegistrationOptions"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationInitStatus"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationInitStatus"], [[2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](131584, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵConsole"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationInitStatus"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationModule"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationModule"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["BrowserModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["BrowserModule"], [[3, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["BrowserModule"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonicModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonicModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_d"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_fire__WEBPACK_IMPORTED_MODULE_9__["AngularFireModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_9__["AngularFireModule"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_fire_storage__WEBPACK_IMPORTED_MODULE_10__["AngularFireStorageModule"], _angular_fire_storage__WEBPACK_IMPORTED_MODULE_10__["AngularFireStorageModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_router_router_a"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_router_router_e"], [[3, _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_router__WEBPACK_IMPORTED_MODULE_11__["UrlSerializer"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["DefaultUrlSerializer"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_router__WEBPACK_IMPORTED_MODULE_11__["ChildrenOutletContexts"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["ChildrenOutletContexts"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_router__WEBPACK_IMPORTED_MODULE_11__["ROUTER_CONFIGURATION"], {}, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_common__WEBPACK_IMPORTED_MODULE_5__["LocationStrategy"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_router_router_d"], [_angular_common__WEBPACK_IMPORTED_MODULE_5__["PlatformLocation"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_5__["APP_BASE_HREF"]], _angular_router__WEBPACK_IMPORTED_MODULE_11__["ROUTER_CONFIGURATION"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"], [_angular_common__WEBPACK_IMPORTED_MODULE_5__["LocationStrategy"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["PlatformLocation"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleFactoryLoader"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["SystemJsNgModuleLoader"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], [2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["SystemJsNgModuleLoaderConfig"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_11__["ROUTES"], function () {
          return [[{
            path: "",
            redirectTo: "categories",
            pathMatch: "full"
          }, {
            path: "walkthrough",
            loadChildren: _app_routing_module__WEBPACK_IMPORTED_MODULE_17__["ɵ0"]
          }, {
            path: "terms-of-service",
            loadChildren: _app_routing_module__WEBPACK_IMPORTED_MODULE_17__["ɵ1"]
          }, {
            path: "getting-started",
            loadChildren: _app_routing_module__WEBPACK_IMPORTED_MODULE_17__["ɵ2"]
          }, {
            path: "categories",
            loadChildren: _app_routing_module__WEBPACK_IMPORTED_MODULE_17__["ɵ3"]
          }, {
            path: "auth/login",
            loadChildren: _app_routing_module__WEBPACK_IMPORTED_MODULE_17__["ɵ4"]
          }, {
            path: "auth/signup",
            loadChildren: _app_routing_module__WEBPACK_IMPORTED_MODULE_17__["ɵ5"]
          }, {
            path: "auth/forgot-password",
            loadChildren: _app_routing_module__WEBPACK_IMPORTED_MODULE_17__["ɵ6"]
          }, {
            path: "app",
            loadChildren: _app_routing_module__WEBPACK_IMPORTED_MODULE_17__["ɵ7"]
          }, {
            path: "contact-card",
            loadChildren: _app_routing_module__WEBPACK_IMPORTED_MODULE_17__["ɵ8"]
          }, {
            path: "forms-and-validations",
            loadChildren: _app_routing_module__WEBPACK_IMPORTED_MODULE_17__["ɵ9"]
          }, {
            path: "forms-filters",
            loadChildren: _app_routing_module__WEBPACK_IMPORTED_MODULE_17__["ɵ10"]
          }, {
            path: "page-not-found",
            loadChildren: _app_routing_module__WEBPACK_IMPORTED_MODULE_17__["ɵ11"]
          }, {
            path: "showcase",
            loadChildren: _app_routing_module__WEBPACK_IMPORTED_MODULE_17__["ɵ12"]
          }, {
            path: "firebase/crud",
            loadChildren: _app_routing_module__WEBPACK_IMPORTED_MODULE_17__["ɵ13"]
          }, {
            path: "firebase/auth",
            loadChildren: _app_routing_module__WEBPACK_IMPORTED_MODULE_17__["ɵ14"]
          }, {
            path: "firebase/auth/sign-in",
            loadChildren: _app_routing_module__WEBPACK_IMPORTED_MODULE_17__["ɵ15"]
          }, {
            path: "maps",
            loadChildren: _app_routing_module__WEBPACK_IMPORTED_MODULE_17__["ɵ16"]
          }, {
            path: "video-playlist",
            loadChildren: _app_routing_module__WEBPACK_IMPORTED_MODULE_17__["ɵ17"]
          }, {
            path: "**",
            redirectTo: "page-not-found"
          }]];
        }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouteReuseStrategy"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonicRouteStrategy"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_router_router_f"], [_angular_router__WEBPACK_IMPORTED_MODULE_11__["UrlSerializer"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["ChildrenOutletContexts"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleFactoryLoader"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["ROUTES"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["ROUTER_CONFIGURATION"], [2, _angular_router__WEBPACK_IMPORTED_MODULE_11__["UrlHandlingStrategy"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouteReuseStrategy"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _app_routing_module__WEBPACK_IMPORTED_MODULE_17__["AppRoutingModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_17__["AppRoutingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientXsrfModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientXsrfModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _shell_shell_module__WEBPACK_IMPORTED_MODULE_15__["ShellModule"], _shell_shell_module__WEBPACK_IMPORTED_MODULE_15__["ShellModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _components_components_module__WEBPACK_IMPORTED_MODULE_18__["ComponentsModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_18__["ComponentsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_service_worker__WEBPACK_IMPORTED_MODULE_13__["ServiceWorkerModule"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_13__["ServiceWorkerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__["TranslateModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__["TranslateModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"], _app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_core__WEBPACK_IMPORTED_MODULE_0__["DEFAULT_CURRENCY_CODE"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_u"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵINJECTOR_SCOPE"], "root", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_fire__WEBPACK_IMPORTED_MODULE_9__["FIREBASE_OPTIONS"], {
          apiKey: "AIzaSyA8C3UCup5woYmKF6dUhf0L2lLWkpy6X4Q",
          authDomain: "infinity-generator-9dd24.firebaseapp.com",
          databaseURL: "https://infinity-generator-9dd24.firebaseio.com",
          projectId: "infinity-generator-9dd24",
          storageBucket: "infinity-generator-9dd24.appspot.com",
          messagingSenderId: "946195882953",
          appId: "1:946195882953:web:672eb24d0c52aefc8afe18",
          measurementId: "G-43VCWT3QRP"
        }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_fire__WEBPACK_IMPORTED_MODULE_9__["FIREBASE_APP_NAME"], undefined, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_common_http_http_e"], "XSRF-TOKEN", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_common_http_http_f"], "X-XSRF-TOKEN", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__["USE_STORE"], undefined, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__["USE_DEFAULT_LANG"], undefined, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__["USE_EXTEND"], undefined, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__["DEFAULT_LANGUAGE"], undefined, [])]);
      });
      /***/

    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _capacitor_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @capacitor/core */
      "gcOT");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ngx-translate/core */
      "TSSN");
      /* harmony import */


      var _utils_history_helper_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./utils/history-helper.service */
      "1oPy");

      var SplashScreen = _capacitor_core__WEBPACK_IMPORTED_MODULE_1__["Plugins"].SplashScreen;

      var AppComponent = /*#__PURE__*/function () {
        // Inject HistoryHelperService in the app.components.ts so its available app-wide
        function AppComponent(translate, historyHelper) {
          _classCallCheck(this, AppComponent);

          this.translate = translate;
          this.historyHelper = historyHelper;
          this.appPages = [{
            title: 'Generators',
            url: '/app/categories',
            ionicIcon: 'school-outline'
          }
          /* ,
          {
          title: 'Profile',
          url: '/app/user',
          ionicIcon: 'person-outline'
          },
          {
          title: 'Contact Card',
          url: '/contact-card',
          customIcon: './assets/custom-icons/side-menu/contact-card.svg'
          },
          {
          title: 'Notifications',
          url: '/app/notifications',
          ionicIcon: 'notifications-outline'
          } */
          ];
          this.accountPages = [{
            title: 'Log In',
            url: '/auth/login',
            ionicIcon: 'log-in-outline'
          }, {
            title: 'Sign Up',
            url: '/auth/signup',
            ionicIcon: 'person-add-outline'
          }, {
            title: 'Tutorial',
            url: '/walkthrough',
            ionicIcon: 'school-outline'
          }, {
            title: 'Getting Started',
            url: '/getting-started',
            ionicIcon: 'rocket-outline'
          }, {
            title: '404 page',
            url: '/page-not-found',
            ionicIcon: 'alert-circle-outline'
          }];
          this.textDir = 'ltr';
          this.initializeApp();
          this.setLanguage();
        }

        _createClass(AppComponent, [{
          key: "initializeApp",
          value: function initializeApp() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.prev = 0;
                      _context.next = 3;
                      return SplashScreen.hide();

                    case 3:
                      _context.next = 8;
                      break;

                    case 5:
                      _context.prev = 5;
                      _context.t0 = _context["catch"](0);
                      console.log('This is normal in a browser', _context.t0);

                    case 8:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, null, [[0, 5]]);
            }));
          }
        }, {
          key: "setLanguage",
          value: function setLanguage() {
            // this language will be used as a fallback when a translation isn't found in the current language
            this.translate.setDefaultLang('en'); // the lang to use, if the lang isn't available, it will use the current loader to get them

            this.translate.use('en'); // this is to determine the text direction depending on the selected language
            // for the purpose of this example we determine that only arabic and hebrew are RTL.
            // this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
            //   this.textDir = (event.lang === 'ar' || event.lang === 'iw') ? 'rtl' : 'ltr';
            // });
          }
        }]);

        return AppComponent;
      }();
      /***/

    },

    /***/
    "X8Sq":
    /*!********************************************************************************!*\
      !*** ./src/app/shell/aspect-ratio/aspect-ratio.component.scss.shim.ngstyle.js ***!
      \********************************************************************************/

    /*! exports provided: styles */

    /***/
    function X8Sq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "styles", function () {
        return styles;
      });
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var styles = ["[_nghost-%COMP%] {\n  display: block;\n  overflow: hidden;\n  position: relative;\n  width: 100%;\n}\n[_nghost-%COMP%]   .content-wrapper[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0px;\n  bottom: 0px;\n  left: 0px;\n  right: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hlbGwvYXNwZWN0LXJhdGlvL2FzcGVjdC1yYXRpby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQUNGO0FBQ0U7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL3NoZWxsL2FzcGVjdC1yYXRpby9hc3BlY3QtcmF0aW8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuXG4gIC5jb250ZW50LXdyYXBwZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDBweDtcbiAgICBib3R0b206IDBweDtcbiAgICBsZWZ0OiAwcHg7XG4gICAgcmlnaHQ6IDBweDtcbiAgfVxufVxuIl19 */"];
      /***/
    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: createTranslateLoader, AppModule, ɵ0 */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "createTranslateLoader", function () {
        return createTranslateLoader;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵ0", function () {
        return ɵ0;
      });
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common/http */
      "IheW");
      /* harmony import */


      var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ngx-translate/http-loader */
      "k5Gf");

      function createTranslateLoader(http) {
        return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_1__["TranslateHttpLoader"](http, './assets/i18n/', '.json');
      }

      var ɵ0 = createTranslateLoader;

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };
      /***/

    },

    /***/
    "ZpN7":
    /*!***************************************!*\
      !*** ./src/app/shell/shell.module.ts ***!
      \***************************************/

    /*! exports provided: ShellModule, ɵ0 */

    /***/
    function ZpN7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ShellModule", function () {
        return ShellModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵ0", function () {
        return ɵ0;
      });
      /* harmony import */


      var _config_app_shell_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./config/app-shell.config */
      "Kt/9");

      var ɵ0 = function ɵ0(appShellConfig) {
        return function () {
          return appShellConfig.load();
        };
      };

      var ShellModule = function ShellModule() {
        _classCallCheck(this, ShellModule);
      };
      /***/

    },

    /***/
    "crnd":
    /*!**********************************************************!*\
      !*** ./src/$$_lazy_route_resource lazy namespace object ***!
      \**********************************************************/

    /*! no static exports found */

    /***/
    function crnd(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "crnd";
      /***/
    },

    /***/
    "j1ZV":
    /*!*************************************************!*\
      !*** ./src/app/components/components.module.ts ***!
      \*************************************************/

    /*! exports provided: ComponentsModule */

    /***/
    function j1ZV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComponentsModule", function () {
        return ComponentsModule;
      });

      var ComponentsModule = function ComponentsModule() {
        _classCallCheck(this, ComponentsModule);
      };
      /***/

    },

    /***/
    "jGwf":
    /*!*****************************************************************!*\
      !*** ./src/app/side-menu/styles/side-menu.scss.shim.ngstyle.js ***!
      \*****************************************************************/

    /*! exports provided: styles */

    /***/
    function jGwf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "styles", function () {
        return styles;
      });
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var styles = ["[_nghost-%COMP%] {\n  --page-margin: var(--app-fair-margin);\n  --page-background: var(--app-background-alt-shade);\n  --page-headers-shadow-color: rgba(var(--ion-color-darkest-rgb), 0.4);\n}\n\n.app-sidemenu[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%] {\n  --padding-start: 0px;\n  --padding-end: 0px;\n  --padding-top: 0px;\n  --padding-bottom: 0px;\n  --background: var(--ion-color-dark-tint);\n}\n\n.app-sidemenu[_ngcontent-%COMP%]   ion-content[_ngcontent-%COMP%] {\n  --background: var(--page-background);\n}\n\n.app-sidemenu[_ngcontent-%COMP%]   .user-details-wrapper[_ngcontent-%COMP%] {\n  --ion-grid-column-padding: 0px;\n  color: var(--ion-color-lightest);\n  padding: var(--page-margin);\n  align-items: center;\n}\n\n.app-sidemenu[_ngcontent-%COMP%]   .user-details-wrapper[_ngcontent-%COMP%]    + .user-details-wrapper[_ngcontent-%COMP%] {\n  padding-top: 0px;\n}\n\n.app-sidemenu[_ngcontent-%COMP%]   .user-info-wrapper[_ngcontent-%COMP%] {\n  padding-left: var(--page-margin);\n}\n\n.app-sidemenu[_ngcontent-%COMP%]   .user-info-wrapper[_ngcontent-%COMP%]   .user-name[_ngcontent-%COMP%] {\n  margin: 0px 0px 5px;\n}\n\n.app-sidemenu[_ngcontent-%COMP%]   .user-info-wrapper[_ngcontent-%COMP%]   .user-handle[_ngcontent-%COMP%] {\n  color: var(--ion-color-light-shade);\n  margin: 0px;\n  font-size: 14px;\n  font-weight: 400;\n}\n\n.app-sidemenu[_ngcontent-%COMP%]   .user-stats-wrapper[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.app-sidemenu[_ngcontent-%COMP%]   .user-stats-wrapper[_ngcontent-%COMP%]   .user-stat-value[_ngcontent-%COMP%] {\n  margin-right: 5px;\n  font-weight: 500;\n}\n\n.app-sidemenu[_ngcontent-%COMP%]   .user-stats-wrapper[_ngcontent-%COMP%]   .user-stat-name[_ngcontent-%COMP%] {\n  color: var(--ion-color-light-shade);\n  font-size: 14px;\n}\n\n.app-sidemenu[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%] {\n  --ion-text-color: var(--ion-color-light-shade);\n  --ion-text-color-rgb: var(--ion-color-light-shade-rgb);\n  --ion-item-background: var(--page-background);\n  --ion-item-border-color: transparent;\n}\n\n.app-sidemenu[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-list-header[_ngcontent-%COMP%] {\n  --color: rgba(var(--ion-color-light-shade-rgb), 0.6);\n  text-transform: uppercase;\n  box-shadow: inset 0px -4px 8px -2px var(--page-headers-shadow-color);\n  -webkit-padding-start: var(--page-margin);\n          padding-inline-start: var(--page-margin);\n  font-size: 14px;\n  margin-bottom: 8px;\n}\n\n.app-sidemenu[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%] {\n  --border-width: 0px !important;\n  --padding-start: var(--page-margin);\n  --background-activated: var(--ion-color-medium);\n}\n\n.app-sidemenu[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  color: var(--ion-color-light-shade);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lkZS1tZW51L3N0eWxlcy9zaWRlLW1lbnUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLHFDQUFBO0VBQ0Esa0RBQUE7RUFFQSxvRUFBQTtBQUZGOztBQU9FO0VBQ0Usb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSx3Q0FBQTtBQUpKOztBQU9FO0VBQ0Usb0NBQUE7QUFMSjs7QUFRRTtFQUNFLDhCQUFBO0VBR0EsZ0NBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0FBUko7O0FBVUk7RUFDRSxnQkFBQTtBQVJOOztBQVlFO0VBQ0UsZ0NBQUE7QUFWSjs7QUFZSTtFQUNFLG1CQUFBO0FBVk47O0FBYUk7RUFDRSxtQ0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFYTjs7QUFlRTtFQUNFLGtCQUFBO0FBYko7O0FBZUk7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0FBYk47O0FBZ0JJO0VBQ0UsbUNBQUE7RUFDQSxlQUFBO0FBZE47O0FBbUJFO0VBQ0UsOENBQUE7RUFDQSxzREFBQTtFQUNBLDZDQUFBO0VBQ0Esb0NBQUE7QUFqQko7O0FBbUJJO0VBQ0Usb0RBQUE7RUFFQSx5QkFBQTtFQUNBLG9FQUFBO0VBQ0EseUNBQUE7VUFBQSx3Q0FBQTtFQUVBLGVBQUE7RUFDQSxrQkFBQTtBQW5CTjs7QUFzQkk7RUFDRSw4QkFBQTtFQUNBLG1DQUFBO0VBQ0EsK0NBQUE7QUFwQk47O0FBdUJJO0VBQ0UsbUNBQUE7QUFyQk4iLCJmaWxlIjoic3JjL2FwcC9zaWRlLW1lbnUvc3R5bGVzL3NpZGUtbWVudS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ3VzdG9tIHZhcmlhYmxlc1xuLy8gTm90ZTogIFRoZXNlIG9uZXMgd2VyZSBhZGRlZCBieSB1cyBhbmQgaGF2ZSBub3RoaW5nIHRvIGRvIHdpdGggSW9uaWMgQ1NTIEN1c3RvbSBQcm9wZXJ0aWVzXG46aG9zdCB7XG4gIC0tcGFnZS1tYXJnaW46IHZhcigtLWFwcC1mYWlyLW1hcmdpbik7XG4gIC0tcGFnZS1iYWNrZ3JvdW5kOiB2YXIoLS1hcHAtYmFja2dyb3VuZC1hbHQtc2hhZGUpO1xuXG4gIC0tcGFnZS1oZWFkZXJzLXNoYWRvdy1jb2xvcjogcmdiYSh2YXIoLS1pb24tY29sb3ItZGFya2VzdC1yZ2IpLCAwLjQpO1xufVxuXG4vLyBOb3RlOiAgQWxsIHRoZSBDU1MgdmFyaWFibGVzIGRlZmluZWQgYmVsb3cgYXJlIG92ZXJyaWRlcyBvZiBJb25pYyBlbGVtZW50cyBDU1MgQ3VzdG9tIFByb3BlcnRpZXNcbi5hcHAtc2lkZW1lbnUge1xuICBpb24tdG9vbGJhciB7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gICAgLS1wYWRkaW5nLWVuZDogMHB4O1xuICAgIC0tcGFkZGluZy10b3A6IDBweDtcbiAgICAtLXBhZGRpbmctYm90dG9tOiAwcHg7XG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItZGFyay10aW50KTtcbiAgfVxuXG4gIGlvbi1jb250ZW50IHtcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLXBhZ2UtYmFja2dyb3VuZCk7XG4gIH1cblxuICAudXNlci1kZXRhaWxzLXdyYXBwZXIge1xuICAgIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcblxuICAgIC8vIGJhY2tncm91bmQtY29sb3I6IHJnYmEodmFyKC0taW9uLWNvbG9yLWxpZ2h0LXJnYiksIDAuMTUpO1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xuICAgIHBhZGRpbmc6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgJiArIC51c2VyLWRldGFpbHMtd3JhcHBlciB7XG4gICAgICBwYWRkaW5nLXRvcDogMHB4O1xuICAgIH1cbiAgfVxuXG4gIC51c2VyLWluZm8td3JhcHBlciB7XG4gICAgcGFkZGluZy1sZWZ0OiB2YXIoLS1wYWdlLW1hcmdpbik7XG5cbiAgICAudXNlci1uYW1lIHtcbiAgICAgIG1hcmdpbjogMHB4IDBweCA1cHg7XG4gICAgfVxuXG4gICAgLnVzZXItaGFuZGxlIHtcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQtc2hhZGUpO1xuICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBmb250LXdlaWdodDogNDAwO1xuICAgIH1cbiAgfVxuXG4gIC51c2VyLXN0YXRzLXdyYXBwZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgIC51c2VyLXN0YXQtdmFsdWUge1xuICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgIH1cblxuICAgIC51c2VyLXN0YXQtbmFtZSB7XG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlKTtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB9XG4gIH1cblxuICAvLyBNZW51IGxpc3QgaXRlbXNcbiAgaW9uLWxpc3Qge1xuICAgIC0taW9uLXRleHQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodC1zaGFkZSk7XG4gICAgLS1pb24tdGV4dC1jb2xvci1yZ2I6IHZhcigtLWlvbi1jb2xvci1saWdodC1zaGFkZS1yZ2IpO1xuICAgIC0taW9uLWl0ZW0tYmFja2dyb3VuZDogdmFyKC0tcGFnZS1iYWNrZ3JvdW5kKTtcbiAgICAtLWlvbi1pdGVtLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG5cbiAgICBpb24tbGlzdC1oZWFkZXIge1xuICAgICAgLS1jb2xvcjogcmdiYSh2YXIoLS1pb24tY29sb3ItbGlnaHQtc2hhZGUtcmdiKSwgMC42KTtcblxuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgIGJveC1zaGFkb3c6IGluc2V0IDBweCAtNHB4IDhweCAtMnB4IHZhcigtLXBhZ2UtaGVhZGVycy1zaGFkb3ctY29sb3IpO1xuICAgICAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcblxuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICAgIH1cblxuICAgIGlvbi1pdGVtIHtcbiAgICAgIC0tYm9yZGVyLXdpZHRoOiAwcHggIWltcG9ydGFudDtcbiAgICAgIC0tcGFkZGluZy1zdGFydDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAgICAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gICAgfVxuXG4gICAgaW9uLWljb24ge1xuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodC1zaGFkZSk7XG4gICAgfVxuICB9XG59XG4iXX0= */"];
      /***/
    },

    /***/
    "kLfG":
    /*!*****************************************************************************************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
      \*****************************************************************************************************************************************/

    /*! no static exports found */

    /***/
    function kLfG(module, exports, __webpack_require__) {
      var map = {
        "./ion-action-sheet-ios.entry.js": ["bnjm", "common", 0],
        "./ion-action-sheet-md.entry.js": ["utt2", "common", 1],
        "./ion-alert-ios.entry.js": ["yaSn", "common", 2],
        "./ion-alert-md.entry.js": ["2/RY", "common", 3],
        "./ion-app_8-ios.entry.js": ["iInF", "common", 4],
        "./ion-app_8-md.entry.js": ["K9Nc", "common", 5],
        "./ion-avatar_3-ios.entry.js": ["hH1s", "common", 6],
        "./ion-avatar_3-md.entry.js": ["Jw9y", "common", 7],
        "./ion-back-button-ios.entry.js": ["ouVF", "common", 8],
        "./ion-back-button-md.entry.js": ["/joy", "common", 9],
        "./ion-backdrop-ios.entry.js": ["uJLv", 10],
        "./ion-backdrop-md.entry.js": ["fSmE", 11],
        "./ion-button_2-ios.entry.js": ["s1jK", "common", 12],
        "./ion-button_2-md.entry.js": ["Wou7", "common", 13],
        "./ion-card_5-ios.entry.js": ["qshq", "common", 14],
        "./ion-card_5-md.entry.js": ["Q1uX", "common", 15],
        "./ion-checkbox-ios.entry.js": ["059i", "common", 16],
        "./ion-checkbox-md.entry.js": ["eLfv", "common", 17],
        "./ion-chip-ios.entry.js": ["+FzG", "common", 18],
        "./ion-chip-md.entry.js": ["yRpg", "common", 19],
        "./ion-col_3.entry.js": ["/CAe", 20],
        "./ion-datetime_3-ios.entry.js": ["Z1Jy", "common", 21],
        "./ion-datetime_3-md.entry.js": ["X0Dk", "common", 22],
        "./ion-fab_3-ios.entry.js": ["wvyA", "common", 23],
        "./ion-fab_3-md.entry.js": ["NkKY", "common", 24],
        "./ion-img.entry.js": ["wHD8", 25],
        "./ion-infinite-scroll_2-ios.entry.js": ["nf6t", 26],
        "./ion-infinite-scroll_2-md.entry.js": ["lg/V", 27],
        "./ion-input-ios.entry.js": ["sdJS", "common", 28],
        "./ion-input-md.entry.js": ["uQUw", "common", 29],
        "./ion-item-option_3-ios.entry.js": ["Pa1g", "common", 30],
        "./ion-item-option_3-md.entry.js": ["KTnd", "common", 31],
        "./ion-item_8-ios.entry.js": ["Z51p", "common", 32],
        "./ion-item_8-md.entry.js": ["8bam", "common", 33],
        "./ion-loading-ios.entry.js": ["J3Yu", "common", 34],
        "./ion-loading-md.entry.js": ["N3W9", "common", 35],
        "./ion-menu_3-ios.entry.js": ["IlGI", "common", 36],
        "./ion-menu_3-md.entry.js": ["WHty", "common", 37],
        "./ion-modal-ios.entry.js": ["mgaC", "common", 38],
        "./ion-modal-md.entry.js": ["EpFf", "common", 39],
        "./ion-nav_2.entry.js": ["vnES", "common", 40],
        "./ion-popover-ios.entry.js": ["Gdks", "common", 41],
        "./ion-popover-md.entry.js": ["VgKV", "common", 42],
        "./ion-progress-bar-ios.entry.js": ["0PGG", "common", 43],
        "./ion-progress-bar-md.entry.js": ["h/Bu", "common", 44],
        "./ion-radio_2-ios.entry.js": ["5bK7", "common", 45],
        "./ion-radio_2-md.entry.js": ["pOmE", "common", 46],
        "./ion-range-ios.entry.js": ["5g9+", "common", 47],
        "./ion-range-md.entry.js": ["fD4w", "common", 48],
        "./ion-refresher_2-ios.entry.js": ["CXux", "common", 49],
        "./ion-refresher_2-md.entry.js": ["RODS", "common", 50],
        "./ion-reorder_2-ios.entry.js": ["IdzL", "common", 51],
        "./ion-reorder_2-md.entry.js": ["Ftzj", "common", 52],
        "./ion-ripple-effect.entry.js": ["STjf", 53],
        "./ion-route_4.entry.js": ["k5eQ", "common", 54],
        "./ion-searchbar-ios.entry.js": ["l0q3", "common", 55],
        "./ion-searchbar-md.entry.js": ["mLlG", "common", 56],
        "./ion-segment_2-ios.entry.js": ["Iymp", "common", 57],
        "./ion-segment_2-md.entry.js": ["3msy", "common", 58],
        "./ion-select_3-ios.entry.js": ["rYLK", "common", 59],
        "./ion-select_3-md.entry.js": ["WOXB", "common", 60],
        "./ion-slide_2-ios.entry.js": ["F/Xn", 61],
        "./ion-slide_2-md.entry.js": ["k8us", 62],
        "./ion-spinner.entry.js": ["nI0H", "common", 63],
        "./ion-split-pane-ios.entry.js": ["edcM", 64],
        "./ion-split-pane-md.entry.js": ["RyPD", 65],
        "./ion-tab-bar_2-ios.entry.js": ["DP4G", "common", 66],
        "./ion-tab-bar_2-md.entry.js": ["gaXT", "common", 67],
        "./ion-tab_2.entry.js": ["TpdJ", "common", 68],
        "./ion-text.entry.js": ["ISmu", "common", 69],
        "./ion-textarea-ios.entry.js": ["xNZy", "common", 70],
        "./ion-textarea-md.entry.js": ["p1XJ", "common", 71],
        "./ion-toast-ios.entry.js": ["XGfm", "common", 72],
        "./ion-toast-md.entry.js": ["Y/uG", "common", 73],
        "./ion-toggle-ios.entry.js": ["WbT0", "common", 74],
        "./ion-toggle-md.entry.js": ["upP9", "common", 75],
        "./ion-virtual-scroll.entry.js": ["8Mb5", 76]
      };

      function webpackAsyncContext(req) {
        if (!__webpack_require__.o(map, req)) {
          return Promise.resolve().then(function () {
            var e = new Error("Cannot find module '" + req + "'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          });
        }

        var ids = map[req],
            id = ids[0];
        return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
          return __webpack_require__(id);
        });
      }

      webpackAsyncContext.keys = function webpackAsyncContextKeys() {
        return Object.keys(map);
      };

      webpackAsyncContext.id = "kLfG";
      module.exports = webpackAsyncContext;
      /***/
    },

    /***/
    "mZ7w":
    /*!***********************************************************************!*\
      !*** ./src/app/side-menu/styles/side-menu.shell.scss.shim.ngstyle.js ***!
      \***********************************************************************/

    /*! exports provided: styles */

    /***/
    function mZ7w(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "styles", function () {
        return styles;
      });
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var styles = ["app-image-shell.user-avatar[_ngcontent-%COMP%] {\n  --image-shell-loading-background: rgba(var(--ion-color-light-rgb), 0.15);\n  --image-shell-border-radius: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lkZS1tZW51L3N0eWxlcy9zaWRlLW1lbnUuc2hlbGwuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHdFQUFBO0VBQ0EsZ0NBQUE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3NpZGUtbWVudS9zdHlsZXMvc2lkZS1tZW51LnNoZWxsLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhcHAtaW1hZ2Utc2hlbGwudXNlci1hdmF0YXIge1xuICAtLWltYWdlLXNoZWxsLWxvYWRpbmctYmFja2dyb3VuZDogcmdiYSh2YXIoLS1pb24tY29sb3ItbGlnaHQtcmdiKSwgMC4xNSk7XG4gIC0taW1hZ2Utc2hlbGwtYm9yZGVyLXJhZGl1czogNTAlO1xufVxuIl19 */"];
      /***/
    },

    /***/
    "qlRH":
    /*!****************************************************************************!*\
      !*** ./src/app/side-menu/styles/side-menu.responsive.scss.shim.ngstyle.js ***!
      \****************************************************************************/

    /*! exports provided: styles */

    /***/
    function qlRH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "styles", function () {
        return styles;
      });
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var styles = ["@media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (-webkit-min-device-pixel-ratio: 2) and (device-aspect-ratio: 2/3) {\n  .app-sidemenu[_ngcontent-%COMP%]   .user-info-wrapper[_ngcontent-%COMP%]   .user-name[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n  .app-sidemenu[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n}\n\n@media only screen and (min-device-width: 320px) and (max-device-width: 568px) and (-webkit-min-device-pixel-ratio: 2) and (device-aspect-ratio: 40/71) {\n  .interests-to-follow-slide[_ngcontent-%COMP%]   .custom-checkbox[_ngcontent-%COMP%]   .checkbox-title[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lkZS1tZW51L3N0eWxlcy9zaWRlLW1lbnUucmVzcG9uc2l2ZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtBLDRDQUFBO0FBQ0E7RUFZTTtJQUNFLGVBQUE7RUFmTjtFQW9CSTtJQUNFLGVBQUE7RUFsQk47QUFDRjtBQXVCQSxxREFBQTtBQUNBO0VBWU07SUFDRSxlQUFBO0VBaENOO0FBQ0Y7QUFxQ0Esa0RBQUE7QUFhQSxxQ0FBQTtBQWFBLGlEQUFBIiwiZmlsZSI6InNyYy9hcHAvc2lkZS1tZW51L3N0eWxlcy9zaWRlLW1lbnUucmVzcG9uc2l2ZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gKE5vdGU6IERvbid0IGNoYW5nZSB0aGUgb3JkZXIgb2YgdGhlIGRldmljZXMgYXMgaXQgbWF5IGJyZWFrIHRoZSBjb3JyZWN0IGNzcyBwcmVjZWRlbmNlKVxuXG4vLyAoc2VlOiBodHRwczovL2Nzcy10cmlja3MuY29tL3NuaXBwZXRzL2Nzcy9tZWRpYS1xdWVyaWVzLWZvci1zdGFuZGFyZC1kZXZpY2VzLyNpcGhvbmUtcXVlcmllcylcbi8vIChzZWU6IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS80Nzc1MDI2MS8xMTE2OTU5KVxuXG4vKiAtLS0tLS0tLS0tLSBpUGhvbmUgNCBhbmQgNFMgLS0tLS0tLS0tLS0gKi9cbkBtZWRpYSBvbmx5IHNjcmVlblxuICBhbmQgKG1pbi1kZXZpY2Utd2lkdGggOiAzMjBweClcbiAgYW5kIChtYXgtZGV2aWNlLXdpZHRoIDogNDgwcHgpXG4gIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAyKVxuICBhbmQgKGRldmljZS1hc3BlY3QtcmF0aW86IDIvMylcbiAgLy8gdW5jb21tZW50IGZvciBvbmx5IHBvcnRyYWl0OlxuICAvLyBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdClcbiAgLy8gdW5jb21tZW50IGZvciBvbmx5IGxhbmRzY2FwZTpcbiAgLy8gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKVxue1xuICAuYXBwLXNpZGVtZW51IHtcbiAgICAudXNlci1pbmZvLXdyYXBwZXIge1xuICAgICAgLnVzZXItbmFtZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpb24tbGlzdCB7XG4gICAgICBpb24taXRlbSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLyogLS0tLS0tLS0tLS0gaVBob25lIDUsIDVTLCA1QyBhbmQgNVNFIC0tLS0tLS0tLS0tICovXG5AbWVkaWEgb25seSBzY3JlZW5cbiAgYW5kIChtaW4tZGV2aWNlLXdpZHRoIDogMzIwcHgpXG4gIGFuZCAobWF4LWRldmljZS13aWR0aCA6IDU2OHB4KVxuICBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMilcbiAgYW5kIChkZXZpY2UtYXNwZWN0LXJhdGlvOiA0MCAvIDcxKVxuICAvLyB1bmNvbW1lbnQgZm9yIG9ubHkgcG9ydHJhaXQ6XG4gIC8vIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KVxuICAvLyB1bmNvbW1lbnQgZm9yIG9ubHkgbGFuZHNjYXBlOlxuICAvLyBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpXG57XG4gIC5pbnRlcmVzdHMtdG8tZm9sbG93LXNsaWRlIHtcbiAgICAuY3VzdG9tLWNoZWNrYm94IHtcbiAgICAgIC5jaGVja2JveC10aXRsZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLyogLS0tLS0tLS0tLS0gaVBob25lIDYsIDZTLCA3IGFuZCA4IC0tLS0tLS0tLS0tICovXG5AbWVkaWEgb25seSBzY3JlZW5cbiAgYW5kIChtaW4tZGV2aWNlLXdpZHRoIDogMzc1cHgpXG4gIGFuZCAobWF4LWRldmljZS13aWR0aCA6IDY2N3B4KVxuICBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMilcbiAgLy8gdW5jb21tZW50IGZvciBvbmx5IHBvcnRyYWl0OlxuICAvLyBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdClcbiAgLy8gdW5jb21tZW50IGZvciBvbmx5IGxhbmRzY2FwZTpcbiAgLy8gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKVxue1xuXG59XG5cbi8qIC0tLS0tLS0tLS0tIGlQaG9uZSBYIC0tLS0tLS0tLS0tICovXG5AbWVkaWEgb25seSBzY3JlZW5cbiAgYW5kIChtaW4tZGV2aWNlLXdpZHRoIDogMzc1cHgpXG4gIGFuZCAobWF4LWRldmljZS13aWR0aCA6IDgxMnB4KVxuICBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbyA6IDMpXG4gIC8vIHVuY29tbWVudCBmb3Igb25seSBwb3J0cmFpdDpcbiAgLy8gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpXG4gIC8vIHVuY29tbWVudCBmb3Igb25seSBsYW5kc2NhcGU6XG4gIC8vIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSlcbntcblxufVxuXG4vKiAtLS0tLS0tLS0tLSBpUGhvbmUgNissIDcrIGFuZCA4KyAtLS0tLS0tLS0tLSAqL1xuQG1lZGlhIG9ubHkgc2NyZWVuXG4gIGFuZCAobWluLWRldmljZS13aWR0aCA6IDQxNHB4KVxuICBhbmQgKG1heC1kZXZpY2Utd2lkdGggOiA3MzZweClcbiAgYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDMpXG4gIC8vIHVuY29tbWVudCBmb3Igb25seSBwb3J0cmFpdDpcbiAgLy8gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpXG4gIC8vIHVuY29tbWVudCBmb3Igb25seSBsYW5kc2NhcGU6XG4gIC8vIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSlcbntcblxufVxuIl19 */"];
      /***/
    },

    /***/
    "tBTr":
    /*!******************************************************************************!*\
      !*** ./src/app/shell/image-shell/image-shell.component.scss.shim.ngstyle.js ***!
      \******************************************************************************/

    /*! exports provided: styles */

    /***/
    function tBTr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "styles", function () {
        return styles;
      });
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var styles = ["[_nghost-%COMP%] {\n  --image-shell-loading-background: #EEE;\n  --image-shell-border-radius: 0px;\n  display: block;\n  position: relative;\n  height: 100%;\n  border-radius: var(--image-shell-border-radius);\n  transition: all ease-in-out 0.3s;\n  z-index: 2;\n}\n[_nghost-%COMP%]    > .spinner[_ngcontent-%COMP%] {\n  display: none;\n}\n[_nghost-%COMP%]::before {\n  content: \"\";\n  background: var(--image-shell-loading-background);\n  border-radius: var(--image-shell-border-radius);\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n[_nghost-%COMP%]:not([display=cover]) {\n  width: 100%;\n  overflow: hidden;\n}\n[_nghost-%COMP%]:not([display=cover])    > .inner-img[_ngcontent-%COMP%] {\n  transition: visibility 0s linear, opacity 0.5s linear;\n  opacity: 0;\n  visibility: hidden;\n  width: 100%;\n  height: 100%;\n  border-radius: var(--image-shell-border-radius);\n}\n[_nghost-%COMP%]:not([display=cover]).img-loaded::before {\n  display: none;\n}\n[_nghost-%COMP%]:not([display=cover]).img-loaded    > .inner-img[_ngcontent-%COMP%] {\n  opacity: 1;\n  visibility: visible;\n}\n[display=cover][_nghost-%COMP%] {\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n[display=cover][_nghost-%COMP%]::before, [display=cover][_nghost-%COMP%]    > .spinner[_ngcontent-%COMP%] {\n  z-index: -1;\n}\n[display=cover][_nghost-%COMP%]    > .inner-img[_ngcontent-%COMP%] {\n  display: none;\n  visibility: hidden;\n}\n[display=cover].img-loaded[_nghost-%COMP%]::before {\n  display: none;\n}\n[animation=gradient][_nghost-%COMP%] {\n  --image-shell-loading-background: #EEE;\n  --image-shell-animation-color: #DDD;\n}\n[animation=gradient][_nghost-%COMP%]::before {\n  background: linear-gradient(to right, var(--image-shell-loading-background) 8%, var(--image-shell-animation-color) 18%, var(--image-shell-loading-background) 33%);\n  background-size: 800px 104px;\n  -webkit-animation: animateBackground 2s ease-in-out infinite;\n          animation: animateBackground 2s ease-in-out infinite;\n}\n[animation=gradient].img-loaded[_nghost-%COMP%]::before {\n  background: none;\n  -webkit-animation: 0;\n          animation: 0;\n}\n@-webkit-keyframes animateBackground {\n  0% {\n    background-position: -468px 0;\n  }\n  100% {\n    background-position: 468px 0;\n  }\n}\n@keyframes animateBackground {\n  0% {\n    background-position: -468px 0;\n  }\n  100% {\n    background-position: 468px 0;\n  }\n}\n[animation=spinner][_nghost-%COMP%] {\n  --image-shell-spinner-size: 28px;\n  --image-shell-spinner-color: #CCC;\n}\n[animation=spinner][_nghost-%COMP%]    > .spinner[_ngcontent-%COMP%] {\n  display: block;\n  position: absolute;\n  top: calc(50% - calc(var(--image-shell-spinner-size) / 2));\n  left: calc(50% - calc(var(--image-shell-spinner-size) / 2));\n  width: var(--image-shell-spinner-size);\n  height: var(--image-shell-spinner-size);\n  font-size: var(--image-shell-spinner-size);\n  line-height: var(--image-shell-spinner-size);\n  color: var(--image-shell-spinner-color);\n}\n[animation=spinner].img-loaded[_nghost-%COMP%]    > .spinner[_ngcontent-%COMP%] {\n  display: none;\n  visibility: hidden;\n}\n.add-overlay[_nghost-%COMP%] {\n  --image-shell-overlay-background: rgba(0, 0, 0, .4);\n}\n.add-overlay.img-loaded[_nghost-%COMP%]::before {\n  display: block;\n  background: var(--image-shell-overlay-background);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hlbGwvaW1hZ2Utc2hlbGwvaW1hZ2Utc2hlbGwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQ0FBQTtFQUNBLGdDQUFBO0VBRUEsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLCtDQUFBO0VBQ0EsZ0NBQUE7RUFDQSxVQUFBO0FBQUY7QUFHRTtFQUNFLGFBQUE7QUFESjtBQUtFO0VBQ0UsV0FBQTtFQUNBLGlEQUFBO0VBQ0EsK0NBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7QUFISjtBQU1FO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0FBSko7QUFNSTtFQUNFLHFEQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSwrQ0FBQTtBQUpOO0FBU007RUFDRSxhQUFBO0FBUFI7QUFVTTtFQUNFLFVBQUE7RUFDQSxtQkFBQTtBQVJSO0FBY0U7RUFDRSxzQkFBQTtFQUNBLDRCQUFBO0FBWko7QUFlSTtFQUVFLFdBQUE7QUFkTjtBQWlCSTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtBQWZOO0FBb0JNO0VBQ0UsYUFBQTtBQWxCUjtBQXdCQTtFQUNFLHNDQUFBO0VBQ0EsbUNBQUE7QUFyQkY7QUF3QkU7RUFDRSxrS0FDRTtFQUNGLDRCQUFBO0VBQ0EsNERBQUE7VUFBQSxvREFBQTtBQXZCSjtBQTRCSTtFQUNFLGdCQUFBO0VBQ0Esb0JBQUE7VUFBQSxZQUFBO0FBMUJOO0FBOEJFO0VBQ0U7SUFDRSw2QkFBQTtFQTVCSjtFQStCRTtJQUNFLDRCQUFBO0VBN0JKO0FBQ0Y7QUFzQkU7RUFDRTtJQUNFLDZCQUFBO0VBNUJKO0VBK0JFO0lBQ0UsNEJBQUE7RUE3Qko7QUFDRjtBQWlDQTtFQUNFLGdDQUFBO0VBQ0EsaUNBQUE7QUE5QkY7QUFnQ0U7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSwwREFBQTtFQUNBLDJEQUFBO0VBQ0Esc0NBQUE7RUFDQSx1Q0FBQTtFQUNBLDBDQUFBO0VBQ0EsNENBQUE7RUFDQSx1Q0FBQTtBQTlCSjtBQWtDSTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtBQWhDTjtBQXFDQTtFQUNFLG1EQUFBO0FBbENGO0FBc0NJO0VBQ0UsY0FBQTtFQUNBLGlEQUFBO0FBcENOIiwiZmlsZSI6InNyYy9hcHAvc2hlbGwvaW1hZ2Utc2hlbGwvaW1hZ2Utc2hlbGwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIC0taW1hZ2Utc2hlbGwtbG9hZGluZy1iYWNrZ3JvdW5kOiAjRUVFO1xuICAtLWltYWdlLXNoZWxsLWJvcmRlci1yYWRpdXM6IDBweDtcblxuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWltYWdlLXNoZWxsLWJvcmRlci1yYWRpdXMpO1xuICB0cmFuc2l0aW9uOiBhbGwgZWFzZS1pbi1vdXQgLjNzO1xuICB6LWluZGV4OiAyO1xuXG4gIC8vIEJ5IGRlZmF1bHQsIGhpZGUgdGhlIHNwaW5uZXJcbiAgJiA+IC5zcGlubmVyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLy8gTG9hZGluZyBiYWNrZ3JvdW5kXG4gICY6OmJlZm9yZSB7XG4gICAgY29udGVudDogJyc7XG4gICAgYmFja2dyb3VuZDogdmFyKC0taW1hZ2Utc2hlbGwtbG9hZGluZy1iYWNrZ3JvdW5kKTtcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1pbWFnZS1zaGVsbC1ib3JkZXItcmFkaXVzKTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICB9XG5cbiAgJjpub3QoW2Rpc3BsYXk9XCJjb3ZlclwiXSkge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgICAmID4gLmlubmVyLWltZyB7XG4gICAgICB0cmFuc2l0aW9uOiB2aXNpYmlsaXR5IDBzIGxpbmVhciwgb3BhY2l0eSAuNXMgbGluZWFyO1xuICAgICAgb3BhY2l0eTogMDtcbiAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgYm9yZGVyLXJhZGl1czogdmFyKC0taW1hZ2Utc2hlbGwtYm9yZGVyLXJhZGl1cyk7XG4gICAgfVxuXG4gICAgJi5pbWctbG9hZGVkIHtcbiAgICAgIC8vIEhpZGUgbG9hZGluZyBiYWNrZ3JvdW5kIG9uY2UgdGhlIGltYWdlIGhhcyBsb2FkZWRcbiAgICAgICY6OmJlZm9yZSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG5cbiAgICAgICYgPiAuaW5uZXItaW1nIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBJZiBpdCBpcyBkaXNwbGF5OiBjb3ZlclxuICAmW2Rpc3BsYXk9XCJjb3ZlclwiXSB7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuXG4gICAgLy8gSW4gY292ZXIgZGlzcGxheSwgd2UgY2FuIGhhdmUgY29udGVudCBpbnNpZGUgdGhlIGVsZW1lbnQsIHRodXMgd2UgbmVlZCB0byBwdXQgdGhlc2UgZWxlbWVudHMgYmVuZWF0aFxuICAgICY6OmJlZm9yZSxcbiAgICAmID4gLnNwaW5uZXIge1xuICAgICAgei1pbmRleDogLTE7XG4gICAgfVxuXG4gICAgJiA+IC5pbm5lci1pbWcge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICB9XG5cbiAgICAmLmltZy1sb2FkZWQge1xuICAgICAgLy8gSGlkZSBsb2FkaW5nIGJhY2tncm91bmQgb25jZSB0aGUgaW1hZ2UgaGFzIGxvYWRlZFxuICAgICAgJjo6YmVmb3JlIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuOmhvc3QoW2FuaW1hdGlvbj1cImdyYWRpZW50XCJdKSB7XG4gIC0taW1hZ2Utc2hlbGwtbG9hZGluZy1iYWNrZ3JvdW5kOiAjRUVFO1xuICAtLWltYWdlLXNoZWxsLWFuaW1hdGlvbi1jb2xvcjogI0RERDtcblxuICAvLyBUaGUgYW5pbWF0aW9uIHRoYXQgZ29lcyBiZW5lYXRoIHRoZSBtYXNrc1xuICAmOjpiZWZvcmUge1xuICAgIGJhY2tncm91bmQ6XG4gICAgICBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLWltYWdlLXNoZWxsLWxvYWRpbmctYmFja2dyb3VuZCkgOCUsIHZhcigtLWltYWdlLXNoZWxsLWFuaW1hdGlvbi1jb2xvcikgMTglLCB2YXIoLS1pbWFnZS1zaGVsbC1sb2FkaW5nLWJhY2tncm91bmQpIDMzJSk7XG4gICAgYmFja2dyb3VuZC1zaXplOiA4MDBweCAxMDRweDtcbiAgICBhbmltYXRpb246IGFuaW1hdGVCYWNrZ3JvdW5kIDJzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xuICB9XG5cbiAgJi5pbWctbG9hZGVkIHtcbiAgICAvLyBSZXNldCBiYWNrZ3JvdW5kIGFuaW1hdGlvbiBvbmNlIHRoZSBpbWFnZSBoYXMgbG9hZGVkXG4gICAgJjo6YmVmb3JlIHtcbiAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICBhbmltYXRpb246IDA7XG4gICAgfVxuICB9XG5cbiAgQGtleWZyYW1lcyBhbmltYXRlQmFja2dyb3VuZCB7XG4gICAgMCV7XG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNDY4cHggMFxuICAgIH1cblxuICAgIDEwMCV7XG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA0NjhweCAwXG4gICAgfVxuICB9XG59XG5cbjpob3N0KFthbmltYXRpb249XCJzcGlubmVyXCJdKSB7XG4gIC0taW1hZ2Utc2hlbGwtc3Bpbm5lci1zaXplOiAyOHB4O1xuICAtLWltYWdlLXNoZWxsLXNwaW5uZXItY29sb3I6ICNDQ0M7XG5cbiAgJiA+IC5zcGlubmVyIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiBjYWxjKDUwJSAtIGNhbGModmFyKC0taW1hZ2Utc2hlbGwtc3Bpbm5lci1zaXplKSAvIDIpKTtcbiAgICBsZWZ0OiBjYWxjKDUwJSAtIGNhbGModmFyKC0taW1hZ2Utc2hlbGwtc3Bpbm5lci1zaXplKSAvIDIpKTtcbiAgICB3aWR0aDogdmFyKC0taW1hZ2Utc2hlbGwtc3Bpbm5lci1zaXplKTtcbiAgICBoZWlnaHQ6IHZhcigtLWltYWdlLXNoZWxsLXNwaW5uZXItc2l6ZSk7XG4gICAgZm9udC1zaXplOiB2YXIoLS1pbWFnZS1zaGVsbC1zcGlubmVyLXNpemUpO1xuICAgIGxpbmUtaGVpZ2h0OiB2YXIoLS1pbWFnZS1zaGVsbC1zcGlubmVyLXNpemUpO1xuICAgIGNvbG9yOiB2YXIoLS1pbWFnZS1zaGVsbC1zcGlubmVyLWNvbG9yKTtcbiAgfVxuXG4gICYuaW1nLWxvYWRlZCB7XG4gICAgJiA+IC5zcGlubmVyIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgfVxuICB9XG59XG5cbjpob3N0KC5hZGQtb3ZlcmxheSkge1xuICAtLWltYWdlLXNoZWxsLW92ZXJsYXktYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAuNCk7XG5cbiAgJi5pbWctbG9hZGVkIHtcbiAgICAvLyBBZGQgYmFja2dyb3VuZCBvdmVybGF5IGFmdGVyIHRoZSBpbWFnZSBoYXMgbG9hZGVkXG4gICAgJjo6YmVmb3JlIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0taW1hZ2Utc2hlbGwtb3ZlcmxheS1iYWNrZ3JvdW5kKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */"];
      /***/
    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule, ɵ0, ɵ1, ɵ2, ɵ3, ɵ4, ɵ5, ɵ6, ɵ7, ɵ8, ɵ9, ɵ10, ɵ11, ɵ12, ɵ13, ɵ14, ɵ15, ɵ16, ɵ17 */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵ0", function () {
        return ɵ0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵ1", function () {
        return ɵ1;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵ2", function () {
        return ɵ2;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵ3", function () {
        return ɵ3;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵ4", function () {
        return ɵ4;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵ5", function () {
        return ɵ5;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵ6", function () {
        return ɵ6;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵ7", function () {
        return ɵ7;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵ8", function () {
        return ɵ8;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵ9", function () {
        return ɵ9;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵ10", function () {
        return ɵ10;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵ11", function () {
        return ɵ11;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵ12", function () {
        return ɵ12;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵ13", function () {
        return ɵ13;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵ14", function () {
        return ɵ14;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵ15", function () {
        return ɵ15;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵ16", function () {
        return ɵ16;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵ17", function () {
        return ɵ17;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "iInd");

      var ɵ0 = function ɵ0() {
        return __webpack_require__.e(
        /*! import() | walkthrough-walkthrough-module-ngfactory */
        "walkthrough-walkthrough-module-ngfactory").then(__webpack_require__.bind(null,
        /*! ./walkthrough/walkthrough.module.ngfactory */
        "8SZI")).then(function (m) {
          return m.WalkthroughPageModuleNgFactory;
        });
      },
          ɵ1 = function ɵ1() {
        return __webpack_require__.e(
        /*! import() | terms-of-service-terms-of-service-page-ngfactory */
        "common").then(__webpack_require__.bind(null,
        /*! ./terms-of-service/terms-of-service.page.ngfactory */
        "CpCY")).then(function (m) {
          return m.TermsOfServicePageNgFactory;
        });
      },
          ɵ2 = function ɵ2() {
        return Promise.all(
        /*! import() | getting-started-getting-started-module-ngfactory */
        [__webpack_require__.e("common"), __webpack_require__.e("getting-started-getting-started-module-ngfactory")]).then(__webpack_require__.bind(null,
        /*! ./getting-started/getting-started.module.ngfactory */
        "QCMa")).then(function (m) {
          return m.GettingStartedPageModuleNgFactory;
        });
      },
          ɵ3 = function ɵ3() {
        return __webpack_require__.e(
        /*! import() | categories-categories-module-ngfactory */
        "categories-categories-module-ngfactory").then(__webpack_require__.bind(null,
        /*! ./categories/categories.module.ngfactory */
        "em4C")).then(function (m) {
          return m.CategoriesPageModuleNgFactory;
        });
      },
          ɵ4 = function ɵ4() {
        return __webpack_require__.e(
        /*! import() | login-login-module-ngfactory */
        "login-login-module-ngfactory").then(__webpack_require__.bind(null,
        /*! ./login/login.module.ngfactory */
        "f+ep")).then(function (m) {
          return m.LoginPageModuleNgFactory;
        });
      },
          ɵ5 = function ɵ5() {
        return Promise.all(
        /*! import() | signup-signup-module-ngfactory */
        [__webpack_require__.e("common"), __webpack_require__.e("signup-signup-module-ngfactory")]).then(__webpack_require__.bind(null,
        /*! ./signup/signup.module.ngfactory */
        "mH0F")).then(function (m) {
          return m.SignupPageModuleNgFactory;
        });
      },
          ɵ6 = function ɵ6() {
        return __webpack_require__.e(
        /*! import() | forgot-password-forgot-password-module-ngfactory */
        "forgot-password-forgot-password-module-ngfactory").then(__webpack_require__.bind(null,
        /*! ./forgot-password/forgot-password.module.ngfactory */
        "32z0")).then(function (m) {
          return m.ForgotPasswordPageModuleNgFactory;
        });
      },
          ɵ7 = function ɵ7() {
        return __webpack_require__.e(
        /*! import() | tabs-tabs-module-ngfactory */
        "tabs-tabs-module-ngfactory").then(__webpack_require__.bind(null,
        /*! ./tabs/tabs.module.ngfactory */
        "pZl2")).then(function (m) {
          return m.TabsPageModuleNgFactory;
        });
      },
          ɵ8 = function ɵ8() {
        return __webpack_require__.e(
        /*! import() | contact-card-contact-card-module-ngfactory */
        "contact-card-contact-card-module-ngfactory").then(__webpack_require__.bind(null,
        /*! ./contact-card/contact-card.module.ngfactory */
        "gwLR")).then(function (m) {
          return m.ContactCardPageModuleNgFactory;
        });
      },
          ɵ9 = function ɵ9() {
        return Promise.all(
        /*! import() | forms-validations-forms-validations-module-ngfactory */
        [__webpack_require__.e("default~forms-filters-forms-filters-module-ngfactory~forms-validations-forms-validations-module-ngfactory"), __webpack_require__.e("common"), __webpack_require__.e("forms-validations-forms-validations-module-ngfactory")]).then(__webpack_require__.bind(null,
        /*! ./forms/validations/forms-validations.module.ngfactory */
        "M2jU")).then(function (m) {
          return m.FormsValidationsPageModuleNgFactory;
        });
      },
          ɵ10 = function ɵ10() {
        return Promise.all(
        /*! import() | forms-filters-forms-filters-module-ngfactory */
        [__webpack_require__.e("default~forms-filters-forms-filters-module-ngfactory~forms-validations-forms-validations-module-ngfactory"), __webpack_require__.e("forms-filters-forms-filters-module-ngfactory")]).then(__webpack_require__.bind(null,
        /*! ./forms/filters/forms-filters.module.ngfactory */
        "C+p4")).then(function (m) {
          return m.FormsFiltersPageModuleNgFactory;
        });
      },
          ɵ11 = function ɵ11() {
        return __webpack_require__.e(
        /*! import() | page-not-found-page-not-found-module-ngfactory */
        "page-not-found-page-not-found-module-ngfactory").then(__webpack_require__.bind(null,
        /*! ./page-not-found/page-not-found.module.ngfactory */
        "5j6B")).then(function (m) {
          return m.PageNotFoundModuleNgFactory;
        });
      },
          ɵ12 = function ɵ12() {
        return __webpack_require__.e(
        /*! import() | showcase-showcase-module-ngfactory */
        "showcase-showcase-module-ngfactory").then(__webpack_require__.bind(null,
        /*! ./showcase/showcase.module.ngfactory */
        "lr/T")).then(function (m) {
          return m.ShowcasePageModuleNgFactory;
        });
      },
          ɵ13 = function ɵ13() {
        return Promise.all(
        /*! import() | firebase-crud-firebase-crud-module-ngfactory */
        [__webpack_require__.e("default~firebase-crud-firebase-crud-module-ngfactory~profile-firebase-profile-module-ngfactory"), __webpack_require__.e("firebase-crud-firebase-crud-module-ngfactory")]).then(__webpack_require__.bind(null,
        /*! ./firebase/crud/firebase-crud.module.ngfactory */
        "UM5W")).then(function (m) {
          return m.FirebaseCrudModuleNgFactory;
        });
      },
          ɵ14 = function ɵ14() {
        return Promise.all(
        /*! import() | firebase-auth-firebase-auth-module-ngfactory */
        [__webpack_require__.e("default~firebase-auth-firebase-auth-module-ngfactory~firebase-auth-sign-in-firebase-sign-in-module-ngfactory"), __webpack_require__.e("firebase-auth-firebase-auth-module-ngfactory")]).then(__webpack_require__.bind(null,
        /*! ./firebase/auth/firebase-auth.module.ngfactory */
        "iVcK")).then(function (m) {
          return m.FirebaseAuthModuleNgFactory;
        });
      },
          ɵ15 = function ɵ15() {
        return Promise.all(
        /*! import() | firebase-auth-sign-in-firebase-sign-in-module-ngfactory */
        [__webpack_require__.e("default~firebase-auth-firebase-auth-module-ngfactory~firebase-auth-sign-in-firebase-sign-in-module-ngfactory"), __webpack_require__.e("default~firebase-auth-sign-in-firebase-sign-in-module-ngfactory~sign-in-firebase-sign-in-module-ngfactory")]).then(__webpack_require__.bind(null,
        /*! ./firebase/auth/sign-in/firebase-sign-in.module.ngfactory */
        "JlDp")).then(function (m) {
          return m.FirebaseSignInPageModuleNgFactory;
        });
      },
          ɵ16 = function ɵ16() {
        return __webpack_require__.e(
        /*! import() | maps-maps-module-ngfactory */
        "maps-maps-module-ngfactory").then(__webpack_require__.bind(null,
        /*! ./maps/maps.module.ngfactory */
        "FSnT")).then(function (m) {
          return m.MapsPageModuleNgFactory;
        });
      },
          ɵ17 = function ɵ17() {
        return Promise.all(
        /*! import() | video-playlist-video-playlist-module-ngfactory */
        [__webpack_require__.e("default~app-shell-app-shell-module-ngfactory~brick-details-brick-details-module-ngfactory~brick-list~aa4d1bc6"), __webpack_require__.e("video-playlist-video-playlist-module-ngfactory")]).then(__webpack_require__.bind(null,
        /*! ./video-playlist/video-playlist.module.ngfactory */
        "a2F+")).then(function (m) {
          return m.VideoPlaylistPageModuleNgFactory;
        });
      };

      var routes = [{
        path: '',
        redirectTo: 'categories',
        pathMatch: 'full'
      }, {
        path: 'walkthrough',
        loadChildren: ɵ0
      }, {
        path: 'terms-of-service',
        loadChildren: ɵ1
      }, {
        path: 'getting-started',
        loadChildren: ɵ2
      }, {
        path: 'categories',
        loadChildren: ɵ3
      }, {
        path: 'auth/login',
        loadChildren: ɵ4
      }, {
        path: 'auth/signup',
        loadChildren: ɵ5
      }, {
        path: 'auth/forgot-password',
        loadChildren: ɵ6
      }, {
        path: 'app',
        loadChildren: ɵ7
      }, {
        path: 'contact-card',
        loadChildren: ɵ8
      }, {
        path: 'forms-and-validations',
        loadChildren: ɵ9
      }, {
        path: 'forms-filters',
        loadChildren: ɵ10
      }, {
        path: 'page-not-found',
        loadChildren: ɵ11
      }, {
        path: 'showcase',
        loadChildren: ɵ12
      }, {
        path: 'firebase/crud',
        loadChildren: ɵ13
      }, {
        path: 'firebase/auth',
        loadChildren: ɵ14
      }, {
        path: 'firebase/auth/sign-in',
        loadChildren: ɵ15
      }, {
        path: 'maps',
        loadChildren: ɵ16
      }, {
        path: 'video-playlist',
        loadChildren: ɵ17
      }, {
        path: '**',
        redirectTo: 'page-not-found'
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };
      /***/

    },

    /***/
    "yvrC":
    /*!********************************************!*\
      !*** ./src/app/app.component.ngfactory.js ***!
      \********************************************/

    /*! exports provided: RenderType_AppComponent, View_AppComponent_0, View_AppComponent_Host_0, AppComponentNgFactory */

    /***/
    function yvrC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RenderType_AppComponent", function () {
        return RenderType_AppComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_AppComponent_0", function () {
        return View_AppComponent_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_AppComponent_Host_0", function () {
        return View_AppComponent_Host_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponentNgFactory", function () {
        return AppComponentNgFactory;
      });
      /* harmony import */


      var _side_menu_styles_side_menu_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./side-menu/styles/side-menu.scss.shim.ngstyle */
      "jGwf");
      /* harmony import */


      var _side_menu_styles_side_menu_shell_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./side-menu/styles/side-menu.shell.scss.shim.ngstyle */
      "mZ7w");
      /* harmony import */


      var _side_menu_styles_side_menu_responsive_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./side-menu/styles/side-menu.responsive.scss.shim.ngstyle */
      "qlRH");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../node_modules/@ionic/angular/ionic-angular.ngfactory */
      "MKJQ");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "sZkV");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _shell_aspect_ratio_aspect_ratio_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./shell/aspect-ratio/aspect-ratio.component.ngfactory */
      "M4wD");
      /* harmony import */


      var _shell_aspect_ratio_aspect_ratio_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./shell/aspect-ratio/aspect-ratio.component */
      "B7gC");
      /* harmony import */


      var _shell_image_shell_image_shell_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./shell/image-shell/image-shell.component.ngfactory */
      "6LEC");
      /* harmony import */


      var _shell_image_shell_image_shell_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./shell/image-shell/image-shell.component */
      "2gss");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @ngx-translate/core */
      "TSSN");
      /* harmony import */


      var _utils_history_helper_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./utils/history-helper.service */
      "1oPy");
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var styles_AppComponent = [_side_menu_styles_side_menu_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"], _side_menu_styles_side_menu_shell_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_1__["styles"], _side_menu_styles_side_menu_responsive_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_2__["styles"]];

      var RenderType_AppComponent = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵcrt"]({
        encapsulation: 0,
        styles: styles_AppComponent,
        data: {}
      });

      function View_AppComponent_1(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](0, 0, null, null, 20, "ion-menu-toggle", [["autoHide", "false"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_IonMenuToggle_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_IonMenuToggle"])), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](1, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonMenuToggle"], [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]], {
          autoHide: [0, "autoHide"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](2, 0, null, 0, 8, "ion-item", [], null, [[null, "click"]], function (_v, en, $event) {
          var ad = true;

          if ("click" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v, 4).onClick() !== false;
            ad = pd_0 && ad;
          }

          if ("click" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v, 5).onClick($event) !== false;
            ad = pd_1 && ad;
          }

          return ad;
        }, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_IonItem_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_IonItem"])), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](3, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonItem"], [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](4, 16384, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLink"], [_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]], {
          routerLink: [0, "routerLink"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](5, 737280, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["RouterLinkDelegate"], [_angular_common__WEBPACK_IMPORTED_MODULE_7__["LocationStrategy"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], [2, _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLink"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](6, 0, null, 0, 1, "ion-icon", [["slot", "start"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_IonIcon_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_IonIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](7, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]], {
          name: [0, "name"],
          src: [1, "src"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](8, 0, null, 0, 2, "ion-label", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_IonLabel_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_IonLabel"])), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](9, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonLabel"], [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵted"](10, 0, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](11, 0, null, 0, 9, "ion-item", [], null, [[null, "click"]], function (_v, en, $event) {
          var ad = true;

          if ("click" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v, 13).onClick() !== false;
            ad = pd_0 && ad;
          }

          if ("click" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v, 15).onClick($event) !== false;
            ad = pd_1 && ad;
          }

          return ad;
        }, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_IonItem_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_IonItem"])), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](12, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonItem"], [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](13, 16384, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLink"], [_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]], {
          routerLink: [0, "routerLink"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵpad"](14, 1), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](15, 737280, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["RouterLinkDelegate"], [_angular_common__WEBPACK_IMPORTED_MODULE_7__["LocationStrategy"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], [2, _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLink"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](16, 0, null, 0, 1, "ion-icon", [["name", "videocam-outline"], ["slot", "start"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_IonIcon_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_IonIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](17, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]], {
          name: [0, "name"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](18, 0, null, 0, 2, "ion-label", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_IonLabel_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_IonLabel"])), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](19, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonLabel"], [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵted"](-1, 0, [" Video Tutorials "]))], function (_ck, _v) {
          var currVal_0 = "false";

          _ck(_v, 1, 0, currVal_0);

          var currVal_1 = _v.context.$implicit.url;

          _ck(_v, 4, 0, currVal_1);

          _ck(_v, 5, 0);

          var currVal_2 = _v.context.$implicit.ionicIcon ? _v.context.$implicit.ionicIcon : "";
          var currVal_3 = _v.context.$implicit.customIcon ? _v.context.$implicit.customIcon : "";

          _ck(_v, 7, 0, currVal_2, currVal_3);

          var currVal_5 = _ck(_v, 14, 0, "/video-playlist");

          _ck(_v, 13, 0, currVal_5);

          _ck(_v, 15, 0);

          var currVal_6 = "videocam-outline";

          _ck(_v, 17, 0, currVal_6);
        }, function (_ck, _v) {
          var currVal_4 = _v.context.$implicit.title;

          _ck(_v, 10, 0, currVal_4);
        });
      }

      function View_AppComponent_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](0, 0, null, null, 35, "ion-app", [], [[8, "dir", 0]], null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_IonApp_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_IonApp"])), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](1, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonApp"], [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](2, 0, null, 0, 33, "ion-split-pane", [["contentId", "menu-content"], ["when", "false"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_IonSplitPane_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_IonSplitPane"])), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](3, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonSplitPane"], [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]], {
          contentId: [0, "contentId"],
          when: [1, "when"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](4, 0, null, 0, 29, "ion-menu", [["class", "app-sidemenu"], ["contentId", "menu-content"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_IonMenu_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_IonMenu"])), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](5, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonMenu"], [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]], {
          contentId: [0, "contentId"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](6, 0, null, 0, 16, "ion-header", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_IonHeader_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_IonHeader"])), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](7, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonHeader"], [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](8, 0, null, 0, 14, "ion-toolbar", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_IonToolbar_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_IonToolbar"])), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](9, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonToolbar"], [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](10, 0, null, 0, 12, "ion-row", [["class", "user-details-wrapper"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_IonRow_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_IonRow"])), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](11, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonRow"], [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](12, 0, null, 0, 6, "ion-col", [["size", "4"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_IonCol_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_IonCol"])), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](13, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonCol"], [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]], {
          size: [0, "size"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](14, 0, null, 0, 4, "app-aspect-ratio", [], [[4, "padding", null]], null, null, _shell_aspect_ratio_aspect_ratio_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__["View_AspectRatioComponent_0"], _shell_aspect_ratio_aspect_ratio_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__["RenderType_AspectRatioComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](15, 49152, null, 0, _shell_aspect_ratio_aspect_ratio_component__WEBPACK_IMPORTED_MODULE_9__["AspectRatioComponent"], [], {
          ratio: [0, "ratio"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵpod"](16, {
          w: 0,
          h: 1
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](17, 0, null, 0, 1, "app-image-shell", [["animation", "spinner"], ["class", "user-avatar"]], [[2, "img-loaded", null], [4, "backgroundImage", null], [1, "display", 0]], null, null, _shell_image_shell_image_shell_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__["View_ImageShellComponent_0"], _shell_image_shell_image_shell_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__["RenderType_ImageShellComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](18, 49152, null, 0, _shell_image_shell_image_shell_component__WEBPACK_IMPORTED_MODULE_11__["ImageShellComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_3__["PLATFORM_ID"]], {
          src: [0, "src"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](19, 0, null, 0, 3, "ion-col", [["class", "user-info-wrapper"], ["size", "8"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_IonCol_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_IonCol"])), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](20, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonCol"], [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]], {
          size: [0, "size"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](21, 0, null, 0, 1, "h3", [["class", "user-name"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵted"](-1, null, ["Infinity Generator"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](23, 0, null, 0, 10, "ion-content", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_IonContent_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_IonContent"])), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](24, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonContent"], [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](25, 0, null, 0, 8, "ion-list", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_IonList_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_IonList"])), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](26, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonList"], [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](27, 0, null, 0, 4, "ion-list-header", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_IonListHeader_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_IonListHeader"])), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](28, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonListHeader"], [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](29, 0, null, 0, 2, "ion-label", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_IonLabel_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_IonLabel"])), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](30, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonLabel"], [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵted"](-1, 0, ["Learning"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵand"](16777216, null, 0, 1, null, View_AppComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](33, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["IterableDiffers"]], {
          ngForOf: [0, "ngForOf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](34, 16777216, null, 0, 1, "ion-router-outlet", [["id", "menu-content"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](35, 212992, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonRouterOutlet"], [_angular_router__WEBPACK_IMPORTED_MODULE_6__["ChildrenOutletContexts"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ComponentFactoryResolver"], [8, null], [8, null], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Config"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"], [3, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonRouterOutlet"]]], null, null)], function (_ck, _v) {
          var _co = _v.component;
          var currVal_1 = "menu-content";
          var currVal_2 = "false";

          _ck(_v, 3, 0, currVal_1, currVal_2);

          var currVal_3 = "menu-content";

          _ck(_v, 5, 0, currVal_3);

          var currVal_4 = "4";

          _ck(_v, 13, 0, currVal_4);

          var currVal_6 = _ck(_v, 16, 0, 1, 1);

          _ck(_v, 15, 0, currVal_6);

          var currVal_10 = "./assets/images/ig_logo_white.png";

          _ck(_v, 18, 0, currVal_10);

          var currVal_11 = "8";

          _ck(_v, 20, 0, currVal_11);

          var currVal_12 = _co.appPages;

          _ck(_v, 33, 0, currVal_12);

          _ck(_v, 35, 0);
        }, function (_ck, _v) {
          var _co = _v.component;

          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵinlineInterpolate"](1, "", _co.textDir, "");

          _ck(_v, 0, 0, currVal_0);

          var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v, 15).ratioPadding;

          _ck(_v, 14, 0, currVal_5);

          var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v, 18).imageLoaded;

          var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v, 18).backgroundImage;

          var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v, 18).display;

          _ck(_v, 17, 0, currVal_7, currVal_8, currVal_9);
        });
      }

      function View_AppComponent_Host_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](0, 0, null, null, 1, "app-root", [], null, null, null, View_AppComponent_0, RenderType_AppComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](1, 49152, null, 0, _app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslateService"], _utils_history_helper_service__WEBPACK_IMPORTED_MODULE_14__["HistoryHelperService"]], null, null)], null, null);
      }

      var AppComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵccf"]("app-root", _app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"], View_AppComponent_Host_0, {}, {}, []);
      /***/

    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");
      /* harmony import */


      var _app_app_module_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module.ngfactory */
      "Ss9G");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "cUpR");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModuleFactory(_app_app_module_ngfactory__WEBPACK_IMPORTED_MODULE_2__["AppModuleNgFactory"])["catch"](function (err) {
        return console.log(err);
      });
      /***/

    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map