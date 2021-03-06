(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["firebase-auth-firebase-auth-module-ngfactory"], {
    /***/
    "duP/":
    /*!*******************************************************!*\
      !*** ./src/app/firebase/auth/firebase-auth.module.ts ***!
      \*******************************************************/

    /*! exports provided: FirebaseAuthModule, ɵ0, ɵ1, ɵ2 */

    /***/
    function duP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FirebaseAuthModule", function () {
        return FirebaseAuthModule;
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
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "iInd");

      var ɵ0 = function ɵ0() {
        return __webpack_require__.e(
        /*! import() | sign-in-firebase-sign-in-module-ngfactory */
        "default~firebase-auth-sign-in-firebase-sign-in-module-ngfactory~sign-in-firebase-sign-in-module-ngfactory").then(__webpack_require__.bind(null,
        /*! ./sign-in/firebase-sign-in.module.ngfactory */
        "JlDp")).then(function (m) {
          return m.FirebaseSignInPageModuleNgFactory;
        });
      },
          ɵ1 = function ɵ1() {
        return Promise.all(
        /*! import() | sign-up-firebase-sign-up-module-ngfactory */
        [__webpack_require__.e("common"), __webpack_require__.e("sign-up-firebase-sign-up-module-ngfactory")]).then(__webpack_require__.bind(null,
        /*! ./sign-up/firebase-sign-up.module.ngfactory */
        "Y5ob")).then(function (m) {
          return m.FirebaseSignUpPageModuleNgFactory;
        });
      },
          ɵ2 = function ɵ2() {
        return Promise.all(
        /*! import() | profile-firebase-profile-module-ngfactory */
        [__webpack_require__.e("default~firebase-crud-firebase-crud-module-ngfactory~profile-firebase-profile-module-ngfactory"), __webpack_require__.e("profile-firebase-profile-module-ngfactory")]).then(__webpack_require__.bind(null,
        /*! ./profile/firebase-profile.module.ngfactory */
        "ebiZ")).then(function (m) {
          return m.FirebaseProfilePageModuleNgFactory;
        });
      };

      var routes = [{
        path: 'sign-in',
        loadChildren: ɵ0
      }, {
        path: 'sign-up',
        loadChildren: ɵ1
      }, {
        path: 'profile',
        loadChildren: ɵ2
      }];

      var FirebaseAuthModule = function FirebaseAuthModule() {
        _classCallCheck(this, FirebaseAuthModule);
      };
      /***/

    },

    /***/
    "iVcK":
    /*!*****************************************************************!*\
      !*** ./src/app/firebase/auth/firebase-auth.module.ngfactory.js ***!
      \*****************************************************************/

    /*! exports provided: FirebaseAuthModuleNgFactory */

    /***/
    function iVcK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FirebaseAuthModuleNgFactory", function () {
        return FirebaseAuthModuleNgFactory;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _firebase_auth_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./firebase-auth.module */
      "duP/");
      /* harmony import */


      var _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../node_modules/@angular/router/router.ngfactory */
      "pMnS");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "sZkV");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common/http */
      "IheW");
      /* harmony import */


      var _shell_shell_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../shell/shell.module */
      "ZpN7");
      /* harmony import */


      var _shell_config_app_shell_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../shell/config/app-shell.config */
      "Kt/9");
      /* harmony import */


      var _angular_fire__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/fire */
      "jmUF");
      /* harmony import */


      var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/fire/auth */
      "VRCc");
      /* harmony import */


      var _firebase_auth_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./firebase-auth.service */
      "T7tK");
      /* harmony import */


      var _components_components_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../components/components.module */
      "j1ZV");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var FirebaseAuthModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_firebase_auth_module__WEBPACK_IMPORTED_MODULE_1__["FirebaseAuthModule"], [], function (_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_router_router_lNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AngularDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AngularDelegate"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"], [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AngularDelegate"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"], [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AngularDelegate"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_n"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_n"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpXsrfTokenExtractor"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_common_http_http_g"], [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_common_http_http_e"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_common_http_http_h"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_common_http_http_h"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpXsrfTokenExtractor"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_common_http_http_f"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HTTP_INTERCEPTORS"], function (p0_0) {
          return [p0_0];
        }, [_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_common_http_http_h"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_common_http_http_d"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_common_http_http_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["XhrFactory"], null, [_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_common_http_http_d"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpXhrBackend"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpXhrBackend"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["XhrFactory"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpBackend"], null, [_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpXhrBackend"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpHandler"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["ɵHttpInterceptingHandler"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpBackend"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpHandler"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"], function (p0_0) {
          return [_shell_shell_module__WEBPACK_IMPORTED_MODULE_7__["ɵ0"](p0_0)];
        }, [_shell_config_app_shell_config__WEBPACK_IMPORTED_MODULE_8__["AppShellConfig"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_fire__WEBPACK_IMPORTED_MODULE_9__["FirebaseApp"], _angular_fire__WEBPACK_IMPORTED_MODULE_9__["ɵfirebaseAppFactory"], [_angular_fire__WEBPACK_IMPORTED_MODULE_9__["FIREBASE_OPTIONS"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], [2, _angular_fire__WEBPACK_IMPORTED_MODULE_9__["FIREBASE_APP_NAME"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_fire_auth__WEBPACK_IMPORTED_MODULE_10__["AngularFireAuth"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_10__["AngularFireAuth"], [_angular_fire__WEBPACK_IMPORTED_MODULE_9__["FIREBASE_OPTIONS"], [2, _angular_fire__WEBPACK_IMPORTED_MODULE_9__["FIREBASE_APP_NAME"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _firebase_auth_service__WEBPACK_IMPORTED_MODULE_11__["FirebaseAuthService"], _firebase_auth_service__WEBPACK_IMPORTED_MODULE_11__["FirebaseAuthService"], [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_10__["AngularFireAuth"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_d"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientXsrfModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientXsrfModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _shell_shell_module__WEBPACK_IMPORTED_MODULE_7__["ShellModule"], _shell_shell_module__WEBPACK_IMPORTED_MODULE_7__["ShellModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _components_components_module__WEBPACK_IMPORTED_MODULE_12__["ComponentsModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_12__["ComponentsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_13__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_fire__WEBPACK_IMPORTED_MODULE_9__["AngularFireModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_9__["AngularFireModule"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_fire_auth__WEBPACK_IMPORTED_MODULE_10__["AngularFireAuthModule"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_10__["AngularFireAuthModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _firebase_auth_module__WEBPACK_IMPORTED_MODULE_1__["FirebaseAuthModule"], _firebase_auth_module__WEBPACK_IMPORTED_MODULE_1__["FirebaseAuthModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_common_http_http_e"], "XSRF-TOKEN", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_common_http_http_f"], "X-XSRF-TOKEN", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_fire__WEBPACK_IMPORTED_MODULE_9__["FIREBASE_OPTIONS"], {
          apiKey: "AIzaSyA8C3UCup5woYmKF6dUhf0L2lLWkpy6X4Q",
          authDomain: "infinity-generator-9dd24.firebaseapp.com",
          databaseURL: "https://infinity-generator-9dd24.firebaseio.com",
          projectId: "infinity-generator-9dd24",
          storageBucket: "infinity-generator-9dd24.appspot.com",
          messagingSenderId: "946195882953",
          appId: "1:946195882953:web:672eb24d0c52aefc8afe18",
          measurementId: "G-43VCWT3QRP"
        }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_fire__WEBPACK_IMPORTED_MODULE_9__["FIREBASE_APP_NAME"], undefined, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_13__["ROUTES"], function () {
          return [[{
            path: "sign-in",
            loadChildren: _firebase_auth_module__WEBPACK_IMPORTED_MODULE_1__["ɵ0"]
          }, {
            path: "sign-up",
            loadChildren: _firebase_auth_module__WEBPACK_IMPORTED_MODULE_1__["ɵ1"]
          }, {
            path: "profile",
            loadChildren: _firebase_auth_module__WEBPACK_IMPORTED_MODULE_1__["ɵ2"]
          }]];
        }, [])]);
      });
      /***/

    }
  }]);
})();
//# sourceMappingURL=firebase-auth-firebase-auth-module-ngfactory-es5.js.map