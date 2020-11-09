function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-firebase-user-details-module-ngfactory"], {
  /***/
  "./src/app/firebase/crud/user/details/firebase-user-details.page.ngfactory.js":
  /*!************************************************************************************!*\
    !*** ./src/app/firebase/crud/user/details/firebase-user-details.page.ngfactory.js ***!
    \************************************************************************************/

  /*! exports provided: RenderType_FirebaseUserDetailsPage, View_FirebaseUserDetailsPage_0, View_FirebaseUserDetailsPage_Host_0, FirebaseUserDetailsPageNgFactory */

  /***/
  function srcAppFirebaseCrudUserDetailsFirebaseUserDetailsPageNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_FirebaseUserDetailsPage", function () {
      return RenderType_FirebaseUserDetailsPage;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_FirebaseUserDetailsPage_0", function () {
      return View_FirebaseUserDetailsPage_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_FirebaseUserDetailsPage_Host_0", function () {
      return View_FirebaseUserDetailsPage_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FirebaseUserDetailsPageNgFactory", function () {
      return FirebaseUserDetailsPageNgFactory;
    });
    /* harmony import */


    var _styles_firebase_user_details_page_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./styles/firebase-user-details.page.scss.shim.ngstyle */
    "./src/app/firebase/crud/user/details/styles/firebase-user-details.page.scss.shim.ngstyle.js");
    /* harmony import */


    var _styles_firebase_user_details_shell_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./styles/firebase-user-details.shell.scss.shim.ngstyle */
    "./src/app/firebase/crud/user/details/styles/firebase-user-details.shell.scss.shim.ngstyle.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../../../node_modules/@ionic/angular/ionic-angular.ngfactory */
    "./node_modules/@ionic/angular/ionic-angular.ngfactory.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _shell_text_shell_text_shell_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../../shell/text-shell/text-shell.component.ngfactory */
    "./src/app/shell/text-shell/text-shell.component.ngfactory.js");
    /* harmony import */


    var _shell_text_shell_text_shell_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../../shell/text-shell/text-shell.component */
    "./src/app/shell/text-shell/text-shell.component.ts");
    /* harmony import */


    var _shell_aspect_ratio_aspect_ratio_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../../shell/aspect-ratio/aspect-ratio.component.ngfactory */
    "./src/app/shell/aspect-ratio/aspect-ratio.component.ngfactory.js");
    /* harmony import */


    var _shell_aspect_ratio_aspect_ratio_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../../shell/aspect-ratio/aspect-ratio.component */
    "./src/app/shell/aspect-ratio/aspect-ratio.component.ts");
    /* harmony import */


    var _shell_image_shell_image_shell_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../../../shell/image-shell/image-shell.component.ngfactory */
    "./src/app/shell/image-shell/image-shell.component.ngfactory.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _shell_image_shell_image_shell_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../../../../shell/image-shell/image-shell.component */
    "./src/app/shell/image-shell/image-shell.component.ts");
    /* harmony import */


    var _firebase_user_details_page__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./firebase-user-details.page */
    "./src/app/firebase/crud/user/details/firebase-user-details.page.ts");
    /* harmony import */


    var _firebase_crud_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ../../firebase-crud.service */
    "./src/app/firebase/crud/firebase-crud.service.ts");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
     * tslint:disable
     */


    var styles_FirebaseUserDetailsPage = [_styles_firebase_user_details_page_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"], _styles_firebase_user_details_shell_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_1__["styles"]];

    var RenderType_FirebaseUserDetailsPage = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵcrt"]({
      encapsulation: 0,
      styles: styles_FirebaseUserDetailsPage,
      data: {}
    });

    function View_FirebaseUserDetailsPage_1(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](0, 0, null, null, 6, "ion-item", [["class", "experience-item"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonItem_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonItem"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](1, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonItem"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](2, 0, null, 0, 2, "label", [["class", "experience-label"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](3, 0, null, null, 1, "app-text-shell", [["animation", "bouncing"]], [[2, "text-loaded", null]], null, null, _shell_text_shell_text_shell_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_TextShellComponent_0"], _shell_text_shell_text_shell_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_TextShellComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](4, 49152, null, 0, _shell_text_shell_text_shell_component__WEBPACK_IMPORTED_MODULE_6__["TextShellComponent"], [], {
        data: [0, "data"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](5, 0, null, 0, 1, "ion-icon", [["class", "experience-list-icon"], ["color", "secondary"], ["name", "checkmark"], ["slot", "start"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonIcon_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](6, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], {
        color: [0, "color"],
        name: [1, "name"]
      }, null)], function (_ck, _v) {
        var currVal_1 = _v.context.$implicit == null ? null : _v.context.$implicit.name;

        _ck(_v, 4, 0, currVal_1);

        var currVal_2 = "secondary";
        var currVal_3 = "checkmark";

        _ck(_v, 6, 0, currVal_2, currVal_3);
      }, function (_ck, _v) {
        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 4).textLoaded;

        _ck(_v, 3, 0, currVal_0);
      });
    }

    function View_FirebaseUserDetailsPage_3(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](0, 0, null, null, 12, "ion-col", [["class", "related-user-item"], ["size", "2"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonCol_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonCol"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](1, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCol"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], {
        size: [0, "size"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](2, 0, null, 0, 7, "app-aspect-ratio", [], [[4, "padding", null]], null, null, _shell_aspect_ratio_aspect_ratio_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_AspectRatioComponent_0"], _shell_aspect_ratio_aspect_ratio_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_AspectRatioComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](3, 49152, null, 0, _shell_aspect_ratio_aspect_ratio_component__WEBPACK_IMPORTED_MODULE_8__["AspectRatioComponent"], [], {
        ratio: [0, "ratio"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵpod"](4, {
        w: 0,
        h: 1
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](5, 0, null, 0, 4, "app-image-shell", [["class", "related-user-picture"]], [[2, "img-loaded", null], [4, "backgroundImage", null], [1, "display", 0]], [[null, "click"]], function (_v, en, $event) {
        var ad = true;

        if ("click" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 6).onClick() !== false;
          ad = pd_0 && ad;
        }

        if ("click" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 8).onClick($event) !== false;
          ad = pd_1 && ad;
        }

        return ad;
      }, _shell_image_shell_image_shell_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__["View_ImageShellComponent_0"], _shell_image_shell_image_shell_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__["RenderType_ImageShellComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](6, 16384, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterLink"], [_angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]], {
        routerLink: [0, "routerLink"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵpad"](7, 2), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](8, 737280, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["RouterLinkDelegate"], [_angular_common__WEBPACK_IMPORTED_MODULE_11__["LocationStrategy"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"], [2, _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterLink"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](9, 49152, null, 0, _shell_image_shell_image_shell_component__WEBPACK_IMPORTED_MODULE_12__["ImageShellComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["PLATFORM_ID"]], {
        display: [0, "display"],
        src: [1, "src"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](10, 0, null, 0, 2, "span", [["class", "related-user-name"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](11, 0, null, null, 1, "app-text-shell", [], [[2, "text-loaded", null]], null, null, _shell_text_shell_text_shell_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_TextShellComponent_0"], _shell_text_shell_text_shell_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_TextShellComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](12, 49152, null, 0, _shell_text_shell_text_shell_component__WEBPACK_IMPORTED_MODULE_6__["TextShellComponent"], [], {
        data: [0, "data"]
      }, null)], function (_ck, _v) {
        var currVal_0 = "2";

        _ck(_v, 1, 0, currVal_0);

        var currVal_2 = _ck(_v, 4, 0, 1, 1);

        _ck(_v, 3, 0, currVal_2);

        var currVal_6 = _ck(_v, 7, 0, "/firebase/crud/details", _v.context.$implicit.id);

        _ck(_v, 6, 0, currVal_6);

        _ck(_v, 8, 0);

        var currVal_7 = "cover";
        var currVal_8 = _v.context.$implicit.avatar;

        _ck(_v, 9, 0, currVal_7, currVal_8);

        var currVal_10 = _v.context.$implicit.name;

        _ck(_v, 12, 0, currVal_10);
      }, function (_ck, _v) {
        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 3).ratioPadding;

        _ck(_v, 2, 0, currVal_1);

        var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 9).imageLoaded;

        var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 9).backgroundImage;

        var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 9).display;

        _ck(_v, 5, 0, currVal_3, currVal_4, currVal_5);

        var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 12).textLoaded;

        _ck(_v, 11, 0, currVal_9);
      });
    }

    function View_FirebaseUserDetailsPage_2(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](0, 0, null, null, 6, "section", [["class", "content-section related-users-wrapper"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](1, 0, null, null, 1, "h5", [["class", "section-header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, null, ["Users with similar skills"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](3, 0, null, null, 3, "ion-row", [["class", "related-users-row"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonRow_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonRow"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](4, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonRow"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵand"](16777216, null, 0, 1, null, View_FirebaseUserDetailsPage_3)), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](6, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["IterableDiffers"]], {
        ngForOf: [0, "ngForOf"]
      }, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.relatedUsers;

        _ck(_v, 6, 0, currVal_0);
      }, null);
    }

    function View_FirebaseUserDetailsPage_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](0, 0, null, null, 16, "ion-header", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonHeader_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonHeader"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](1, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonHeader"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](2, 0, null, 0, 14, "ion-toolbar", [["color", "primary"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonToolbar_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonToolbar"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](3, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonToolbar"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], {
        color: [0, "color"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](4, 0, null, 0, 4, "ion-buttons", [["slot", "start"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonButtons_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonButtons"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](5, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonButtons"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](6, 0, null, 0, 2, "ion-back-button", [["defaultHref", "firebase/crud/listing"]], null, [[null, "click"]], function (_v, en, $event) {
        var ad = true;

        if ("click" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 8).onClick($event) !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonBackButton_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonBackButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](7, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonBackButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], {
        defaultHref: [0, "defaultHref"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](8, 16384, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonBackButtonDelegate"], [[2, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonRouterOutlet"]], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Config"]], {
        defaultHref: [0, "defaultHref"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](9, 0, null, 0, 2, "ion-title", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonTitle_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonTitle"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](10, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonTitle"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, 0, ["User Details"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](12, 0, null, 0, 4, "ion-buttons", [["slot", "end"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonButtons_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonButtons"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](13, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonButtons"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](14, 0, null, 0, 2, "ion-button", [], null, [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("click" === en) {
          var pd_0 = _co.openFirebaseUpdateModal() !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonButton_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](15, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, 0, [" Edit "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](17, 0, null, null, 82, "ion-content", [["class", "user-content"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonContent_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonContent"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](18, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonContent"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](19, 0, null, 0, 44, "ion-row", [["class", "user-info-row"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonRow_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonRow"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](20, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonRow"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](21, 0, null, 0, 6, "ion-col", [["class", "user-image-col"], ["size", "5"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonCol_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonCol"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](22, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCol"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], {
        size: [0, "size"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](23, 0, null, 0, 4, "app-aspect-ratio", [], [[4, "padding", null]], null, null, _shell_aspect_ratio_aspect_ratio_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_AspectRatioComponent_0"], _shell_aspect_ratio_aspect_ratio_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_AspectRatioComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](24, 49152, null, 0, _shell_aspect_ratio_aspect_ratio_component__WEBPACK_IMPORTED_MODULE_8__["AspectRatioComponent"], [], {
        ratio: [0, "ratio"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵpod"](25, {
        w: 0,
        h: 1
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](26, 0, null, 0, 1, "app-image-shell", [["animation", "spinner"], ["class", "user-image"]], [[2, "img-loaded", null], [4, "backgroundImage", null], [1, "display", 0]], null, null, _shell_image_shell_image_shell_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__["View_ImageShellComponent_0"], _shell_image_shell_image_shell_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__["RenderType_ImageShellComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](27, 49152, null, 0, _shell_image_shell_image_shell_component__WEBPACK_IMPORTED_MODULE_12__["ImageShellComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["PLATFORM_ID"]], {
        display: [0, "display"],
        src: [1, "src"],
        alt: [2, "alt"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](28, 0, null, 0, 7, "ion-col", [["class", "user-details-col"], ["size", "12"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonCol_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonCol"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](29, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCol"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], {
        size: [0, "size"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](30, 0, null, 0, 2, "h2", [["class", "user-name"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](31, 0, null, null, 1, "app-text-shell", [["animation", "bouncing"]], [[2, "text-loaded", null]], null, null, _shell_text_shell_text_shell_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_TextShellComponent_0"], _shell_text_shell_text_shell_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_TextShellComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](32, 49152, null, 0, _shell_text_shell_text_shell_component__WEBPACK_IMPORTED_MODULE_6__["TextShellComponent"], [], {
        data: [0, "data"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](33, 0, null, 0, 2, "span", [["class", "user-age"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](34, 0, null, null, 1, "app-text-shell", [["animation", "bouncing"]], [[2, "text-loaded", null]], null, null, _shell_text_shell_text_shell_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_TextShellComponent_0"], _shell_text_shell_text_shell_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_TextShellComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](35, 49152, null, 0, _shell_text_shell_text_shell_component__WEBPACK_IMPORTED_MODULE_6__["TextShellComponent"], [], {
        data: [0, "data"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](36, 0, null, 0, 27, "ion-col", [["class", "actions-col"], ["size", "12"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonCol_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonCol"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](37, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCol"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], {
        size: [0, "size"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](38, 0, null, 0, 25, "ion-row", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonRow_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonRow"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](39, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonRow"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](40, 0, null, 0, 5, "ion-col", [["size", "3"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonCol_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonCol"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](41, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCol"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], {
        size: [0, "size"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](42, 0, null, 0, 3, "ion-button", [["class", "action-btn"], ["color", "secondary"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonButton_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](43, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], {
        color: [0, "color"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](44, 0, null, 0, 1, "ion-icon", [["class", "btn-icon"], ["name", "mail"], ["slot", "icon-only"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonIcon_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](45, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], {
        name: [0, "name"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](46, 0, null, 0, 5, "ion-col", [["size", "3"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonCol_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonCol"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](47, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCol"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], {
        size: [0, "size"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](48, 0, null, 0, 3, "ion-button", [["class", "action-btn"], ["color", "secondary"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonButton_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](49, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], {
        color: [0, "color"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](50, 0, null, 0, 1, "ion-icon", [["class", "btn-icon"], ["name", "call"], ["slot", "icon-only"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonIcon_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](51, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], {
        name: [0, "name"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](52, 0, null, 0, 5, "ion-col", [["size", "3"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonCol_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonCol"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](53, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCol"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], {
        size: [0, "size"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](54, 0, null, 0, 3, "ion-button", [["class", "action-btn"], ["color", "secondary"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonButton_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](55, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], {
        color: [0, "color"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](56, 0, null, 0, 1, "ion-icon", [["class", "btn-icon"], ["name", "videocam"], ["slot", "icon-only"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonIcon_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](57, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], {
        name: [0, "name"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](58, 0, null, 0, 5, "ion-col", [["size", "3"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonCol_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonCol"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](59, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCol"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], {
        size: [0, "size"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](60, 0, null, 0, 3, "ion-button", [["class", "action-btn"], ["color", "secondary"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonButton_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](61, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], {
        color: [0, "color"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](62, 0, null, 0, 1, "ion-icon", [["class", "btn-icon"], ["name", "text"], ["slot", "icon-only"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonIcon_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](63, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], {
        name: [0, "name"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](64, 0, null, 0, 26, "section", [["class", "content-section user-languages-wrapper"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](65, 0, null, null, 1, "h5", [["class", "section-header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, null, ["Languages"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](67, 0, null, null, 7, "ion-row", [["class", "language-item-row"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonRow_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonRow"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](68, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonRow"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](69, 0, null, 0, 5, "ion-col", [["class", "language-item"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonCol_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonCol"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](70, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCol"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](71, 0, null, 0, 1, "span", [["class", "language-name"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, null, ["English"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](73, 0, null, 0, 1, "ion-progress-bar", [["class", "language-score"], ["type", "determinate"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonProgressBar_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonProgressBar"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](74, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonProgressBar"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], {
        type: [0, "type"],
        value: [1, "value"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](75, 0, null, null, 7, "ion-row", [["class", "language-item-row"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonRow_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonRow"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](76, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonRow"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](77, 0, null, 0, 5, "ion-col", [["class", "language-item"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonCol_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonCol"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](78, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCol"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](79, 0, null, 0, 1, "span", [["class", "language-name"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, null, ["Spanish"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](81, 0, null, 0, 1, "ion-progress-bar", [["class", "language-score"], ["type", "determinate"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonProgressBar_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonProgressBar"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](82, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonProgressBar"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], {
        type: [0, "type"],
        value: [1, "value"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](83, 0, null, null, 7, "ion-row", [["class", "language-item-row"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonRow_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonRow"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](84, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonRow"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](85, 0, null, 0, 5, "ion-col", [["class", "language-item"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonCol_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonCol"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](86, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCol"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](87, 0, null, 0, 1, "span", [["class", "language-name"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, null, ["French"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](89, 0, null, 0, 1, "ion-progress-bar", [["class", "language-score"], ["type", "determinate"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonProgressBar_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonProgressBar"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](90, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonProgressBar"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], {
        type: [0, "type"],
        value: [1, "value"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](91, 0, null, 0, 6, "section", [["class", "content-section user-experience-wrapper"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](92, 0, null, null, 1, "h5", [["class", "section-header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, null, ["Skills"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](94, 0, null, null, 3, "ion-list", [["class", "experience-list"], ["lines", "none"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonList_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonList"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](95, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonList"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], {
        lines: [0, "lines"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵand"](16777216, null, 0, 1, null, View_FirebaseUserDetailsPage_1)), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](97, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["IterableDiffers"]], {
        ngForOf: [0, "ngForOf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵand"](16777216, null, 0, 1, null, View_FirebaseUserDetailsPage_2)), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](99, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = "primary";

        _ck(_v, 3, 0, currVal_0);

        var currVal_1 = "firebase/crud/listing";

        _ck(_v, 7, 0, currVal_1);

        var currVal_2 = "firebase/crud/listing";

        _ck(_v, 8, 0, currVal_2);

        var currVal_3 = "5";

        _ck(_v, 22, 0, currVal_3);

        var currVal_5 = _ck(_v, 25, 0, 1, 1);

        _ck(_v, 24, 0, currVal_5);

        var currVal_9 = "cover";
        var currVal_10 = _co.user.avatar;
        var currVal_11 = "item image";

        _ck(_v, 27, 0, currVal_9, currVal_10, currVal_11);

        var currVal_12 = "12";

        _ck(_v, 29, 0, currVal_12);

        var currVal_14 = _co.user.name == null ? null : _co.user.name.concat(" ").concat(_co.user.lastname);

        _ck(_v, 32, 0, currVal_14);

        var currVal_16 = _co.user.age == null ? null : _co.user.age.toString().concat(" years young");

        _ck(_v, 35, 0, currVal_16);

        var currVal_17 = "12";

        _ck(_v, 37, 0, currVal_17);

        var currVal_18 = "3";

        _ck(_v, 41, 0, currVal_18);

        var currVal_19 = "secondary";

        _ck(_v, 43, 0, currVal_19);

        var currVal_20 = "mail";

        _ck(_v, 45, 0, currVal_20);

        var currVal_21 = "3";

        _ck(_v, 47, 0, currVal_21);

        var currVal_22 = "secondary";

        _ck(_v, 49, 0, currVal_22);

        var currVal_23 = "call";

        _ck(_v, 51, 0, currVal_23);

        var currVal_24 = "3";

        _ck(_v, 53, 0, currVal_24);

        var currVal_25 = "secondary";

        _ck(_v, 55, 0, currVal_25);

        var currVal_26 = "videocam";

        _ck(_v, 57, 0, currVal_26);

        var currVal_27 = "3";

        _ck(_v, 59, 0, currVal_27);

        var currVal_28 = "secondary";

        _ck(_v, 61, 0, currVal_28);

        var currVal_29 = "text";

        _ck(_v, 63, 0, currVal_29);

        var currVal_30 = "determinate";
        var currVal_31 = (_co.user.languages == null ? null : _co.user.languages.english) / 10;

        _ck(_v, 74, 0, currVal_30, currVal_31);

        var currVal_32 = "determinate";
        var currVal_33 = (_co.user.languages == null ? null : _co.user.languages.spanish) / 10;

        _ck(_v, 82, 0, currVal_32, currVal_33);

        var currVal_34 = "determinate";
        var currVal_35 = (_co.user.languages == null ? null : _co.user.languages.french) / 10;

        _ck(_v, 90, 0, currVal_34, currVal_35);

        var currVal_36 = "none";

        _ck(_v, 95, 0, currVal_36);

        var currVal_37 = _co.user.skills;

        _ck(_v, 97, 0, currVal_37);

        var currVal_38 = _co.relatedUsers.length > 0;

        _ck(_v, 99, 0, currVal_38);
      }, function (_ck, _v) {
        var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 24).ratioPadding;

        _ck(_v, 23, 0, currVal_4);

        var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 27).imageLoaded;

        var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 27).backgroundImage;

        var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 27).display;

        _ck(_v, 26, 0, currVal_6, currVal_7, currVal_8);

        var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 32).textLoaded;

        _ck(_v, 31, 0, currVal_13);

        var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 35).textLoaded;

        _ck(_v, 34, 0, currVal_15);
      });
    }

    function View_FirebaseUserDetailsPage_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](0, 0, null, null, 1, "app-firebase-user-details", [], [[2, "is-shell", null]], null, null, View_FirebaseUserDetailsPage_0, RenderType_FirebaseUserDetailsPage)), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](1, 114688, null, 0, _firebase_user_details_page__WEBPACK_IMPORTED_MODULE_13__["FirebaseUserDetailsPage"], [_firebase_crud_service__WEBPACK_IMPORTED_MODULE_14__["FirebaseCrudService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonRouterOutlet"]], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, function (_ck, _v) {
        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 1).isShell;

        _ck(_v, 0, 0, currVal_0);
      });
    }

    var FirebaseUserDetailsPageNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵccf"]("app-firebase-user-details", _firebase_user_details_page__WEBPACK_IMPORTED_MODULE_13__["FirebaseUserDetailsPage"], View_FirebaseUserDetailsPage_Host_0, {}, {}, []);
    /***/

  },

  /***/
  "./src/app/firebase/crud/user/details/firebase-user-details.page.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/firebase/crud/user/details/firebase-user-details.page.ts ***!
    \**************************************************************************/

  /*! exports provided: FirebaseUserDetailsPage */

  /***/
  function srcAppFirebaseCrudUserDetailsFirebaseUserDetailsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FirebaseUserDetailsPage", function () {
      return FirebaseUserDetailsPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _update_firebase_update_user_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../update/firebase-update-user.modal */
    "./src/app/firebase/crud/user/update/firebase-update-user.modal.ts");
    /* harmony import */


    var _firebase_crud_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../firebase-crud.service */
    "./src/app/firebase/crud/firebase-crud.service.ts");

    var FirebaseUserDetailsPage = /*#__PURE__*/function () {
      function FirebaseUserDetailsPage(firebaseCrudService, modalController, router, route, routerOutlet) {
        _classCallCheck(this, FirebaseUserDetailsPage);

        this.firebaseCrudService = firebaseCrudService;
        this.modalController = modalController;
        this.router = router;
        this.route = route;
        this.routerOutlet = routerOutlet;
      }

      _createClass(FirebaseUserDetailsPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.route.data.subscribe(function (resolvedRouteData) {
            var resolvedDataStores = resolvedRouteData['data'];
            var combinedDataStore = resolvedDataStores.user;
            var relatedUsersDataStore = resolvedDataStores.relatedUsers;
            combinedDataStore.state.subscribe(function (state) {
              _this.user = state;
            });
            relatedUsersDataStore.state.subscribe(function (state) {
              _this.relatedUsers = state;
            });
          });
        }
      }, {
        key: "openFirebaseUpdateModal",
        value: function openFirebaseUpdateModal() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var modal;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.modalController.create({
                      component: _update_firebase_update_user_modal__WEBPACK_IMPORTED_MODULE_3__["FirebaseUpdateUserModal"],
                      componentProps: {
                        'user': this.user
                      },
                      swipeToClose: true,
                      presentingElement: this.routerOutlet.nativeEl
                    });

                  case 2:
                    modal = _context.sent;
                    _context.next = 5;
                    return modal.present();

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "isShell",
        get: function get() {
          return this.user && this.user.isShell || this.relatedUsers && this.relatedUsers.isShell ? true : false;
        }
      }]);

      return FirebaseUserDetailsPage;
    }();
    /***/

  },

  /***/
  "./src/app/firebase/crud/user/details/styles/firebase-user-details.page.scss.shim.ngstyle.js":
  /*!***************************************************************************************************!*\
    !*** ./src/app/firebase/crud/user/details/styles/firebase-user-details.page.scss.shim.ngstyle.js ***!
    \***************************************************************************************************/

  /*! exports provided: styles */

  /***/
  function srcAppFirebaseCrudUserDetailsStylesFirebaseUserDetailsPageScssShimNgstyleJs(module, __webpack_exports__, __webpack_require__) {
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


    var styles = ["[_nghost-%COMP%] {\n  --page-margin: var(--app-fair-margin);\n  --page-background: var(--app-background);\n  --page-related-users-gutter: calc(var(--page-margin) / 2);\n}\n\n.user-content[_ngcontent-%COMP%] {\n  --background: var(--page-background);\n}\n\n.user-content[_ngcontent-%COMP%]   .user-info-row[_ngcontent-%COMP%] {\n  --ion-grid-column-padding: 0px;\n  padding: var(--page-margin);\n}\n\n.user-content[_ngcontent-%COMP%]   .user-info-row[_ngcontent-%COMP%]   .user-image-col[_ngcontent-%COMP%] {\n  margin: 0px auto;\n  margin-bottom: calc(var(--page-margin) / 2);\n}\n\n.user-content[_ngcontent-%COMP%]   .user-info-row[_ngcontent-%COMP%]   .user-image-col[_ngcontent-%COMP%]   .user-image[_ngcontent-%COMP%] {\n  border-radius: 50%;\n}\n\n.user-content[_ngcontent-%COMP%]   .user-info-row[_ngcontent-%COMP%]   .user-details-col[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n}\n\n.user-content[_ngcontent-%COMP%]   .user-info-row[_ngcontent-%COMP%]   .user-details-col[_ngcontent-%COMP%]   .user-name[_ngcontent-%COMP%] {\n  margin: 0px;\n  margin-bottom: calc(var(--page-margin) / 2);\n  min-width: 40%;\n}\n\n.user-content[_ngcontent-%COMP%]   .user-info-row[_ngcontent-%COMP%]   .user-details-col[_ngcontent-%COMP%]   .user-age[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 300;\n  min-width: 60%;\n}\n\n.user-content[_ngcontent-%COMP%]   .user-info-row[_ngcontent-%COMP%]   .actions-col[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: var(--page-margin);\n}\n\n.user-content[_ngcontent-%COMP%]   .user-info-row[_ngcontent-%COMP%]   .actions-col[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%] {\n  --border-radius: 50%;\n  --padding-start: 0px;\n  --padding-end: 0px;\n  width: 4ch;\n  height: 4ch;\n}\n\n.user-content[_ngcontent-%COMP%]   .user-info-row[_ngcontent-%COMP%]   .actions-col[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%]   .btn-icon[_ngcontent-%COMP%] {\n  font-size: 24px;\n}\n\n.user-content[_ngcontent-%COMP%]   .content-section[_ngcontent-%COMP%] {\n  padding: var(--page-margin);\n  border-top: solid 1px var(--ion-color-light-shade);\n}\n\n.user-content[_ngcontent-%COMP%]   .content-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%] {\n  margin-top: 0px;\n  margin-bottom: var(--page-margin);\n}\n\n.user-content[_ngcontent-%COMP%]   .user-languages-wrapper[_ngcontent-%COMP%]   .language-item-row[_ngcontent-%COMP%] {\n  --ion-grid-column-padding: 0px;\n  margin-bottom: calc(var(--page-margin) / 2);\n}\n\n.user-content[_ngcontent-%COMP%]   .user-languages-wrapper[_ngcontent-%COMP%]   .language-item-row[_ngcontent-%COMP%]   .language-item[_ngcontent-%COMP%] {\n  -webkit-padding-start: 0px;\n          padding-inline-start: 0px;\n  -webkit-padding-end: 0px;\n          padding-inline-end: 0px;\n}\n\n.user-content[_ngcontent-%COMP%]   .user-languages-wrapper[_ngcontent-%COMP%]   .language-item-row[_ngcontent-%COMP%]   .language-item[_ngcontent-%COMP%]   .language-name[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 16px;\n  font-weight: 300;\n  margin-bottom: calc(var(--page-margin) / 3);\n}\n\n.user-content[_ngcontent-%COMP%]   .user-languages-wrapper[_ngcontent-%COMP%]   .language-item-row[_ngcontent-%COMP%]   .language-item[_ngcontent-%COMP%]   .language-score[_ngcontent-%COMP%] {\n  --buffer-background: rgba(var(--ion-color-secondary-rgb), .20);\n  --progress-background: rgba(var(--ion-color-secondary-rgb), 1);\n  height: var(--page-margin);\n  border-radius: calc(var(--page-margin) / 2);\n}\n\n.user-content[_ngcontent-%COMP%]   .user-experience-wrapper[_ngcontent-%COMP%]   .experience-list[_ngcontent-%COMP%] {\n  margin: 0px;\n  padding: 0px;\n}\n\n.user-content[_ngcontent-%COMP%]   .user-experience-wrapper[_ngcontent-%COMP%]   .experience-list[_ngcontent-%COMP%]   .experience-item[_ngcontent-%COMP%] {\n  --min-height: initial;\n  --padding-start: 0px;\n  --padding-end: 0px;\n  --inner-padding-start: 0px;\n  --inner-padding-end: 0px;\n}\n\n.user-content[_ngcontent-%COMP%]   .user-experience-wrapper[_ngcontent-%COMP%]   .experience-list[_ngcontent-%COMP%]   .experience-item[_ngcontent-%COMP%]:not(:last-child) {\n  padding-bottom: calc(var(--page-margin) / 2);\n}\n\n.user-content[_ngcontent-%COMP%]   .user-experience-wrapper[_ngcontent-%COMP%]   .experience-list[_ngcontent-%COMP%]   .experience-item[_ngcontent-%COMP%]   .experience-list-icon[_ngcontent-%COMP%] {\n  margin: 0px;\n  margin-right: calc(var(--page-margin) / 2);\n}\n\n.user-content[_ngcontent-%COMP%]   .user-experience-wrapper[_ngcontent-%COMP%]   .experience-list[_ngcontent-%COMP%]   .experience-item[_ngcontent-%COMP%]   .experience-label[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 300;\n  width: 100%;\n}\n\n.user-content[_ngcontent-%COMP%]   .related-users-wrapper[_ngcontent-%COMP%]   .related-users-row[_ngcontent-%COMP%] {\n  --ion-grid-columns: 7;\n  --ion-grid-column-padding: 0px;\n  flex-wrap: nowrap;\n  overflow-x: scroll;\n  will-change: scroll-position;\n  margin-left: calc(var(--page-margin) * -1);\n  margin-right: calc(var(--page-margin) * -1);\n  -ms-overflow-style: none;\n  overflow: -moz-scrollbars-none;\n  scrollbar-width: none;\n}\n\n.user-content[_ngcontent-%COMP%]   .related-users-wrapper[_ngcontent-%COMP%]   .related-users-row[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n\n.user-content[_ngcontent-%COMP%]   .related-users-wrapper[_ngcontent-%COMP%]   .related-users-row[_ngcontent-%COMP%]::before, .user-content[_ngcontent-%COMP%]   .related-users-wrapper[_ngcontent-%COMP%]   .related-users-row[_ngcontent-%COMP%]::after {\n  content: \"\";\n  flex: 0 0 calc(var(--page-margin) - var(--page-related-users-gutter));\n}\n\n.user-content[_ngcontent-%COMP%]   .related-users-wrapper[_ngcontent-%COMP%]   .related-users-row[_ngcontent-%COMP%]   .related-user-item[_ngcontent-%COMP%] {\n  padding: 0px var(--page-related-users-gutter);\n}\n\n.user-content[_ngcontent-%COMP%]   .related-users-wrapper[_ngcontent-%COMP%]   .related-users-row[_ngcontent-%COMP%]   .related-user-item[_ngcontent-%COMP%]   .related-user-name[_ngcontent-%COMP%] {\n  display: block;\n  text-align: center;\n  margin-top: calc(var(--page-margin) / 2);\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kaWRneS9Eb2N1bWVudHMvR2l0SHViL0luZmluaXR5L3NyYy9hcHAvZmlyZWJhc2UvY3J1ZC91c2VyL2RldGFpbHMvc3R5bGVzL2ZpcmViYXNlLXVzZXItZGV0YWlscy5wYWdlLnNjc3MiLCJzcmMvYXBwL2ZpcmViYXNlL2NydWQvdXNlci9kZXRhaWxzL3N0eWxlcy9maXJlYmFzZS11c2VyLWRldGFpbHMucGFnZS5zY3NzIiwiL1VzZXJzL2RpZGd5L0RvY3VtZW50cy9HaXRIdWIvSW5maW5pdHkvc3JjL3RoZW1lL21peGlucy9zY3JvbGxiYXJzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUE7RUFDRSxxQ0FBQTtFQUNBLHdDQUFBO0VBRUEseURBQUE7QUNKRjs7QURRQTtFQUNFLG9DQUFBO0FDTEY7O0FET0U7RUFDRSw4QkFBQTtFQUVBLDJCQUFBO0FDTko7O0FEUUk7RUFDRSxnQkFBQTtFQUNBLDJDQUFBO0FDTk47O0FEUU07RUFDRSxrQkFBQTtBQ05SOztBRFVJO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ1JOOztBRFVNO0VBQ0UsV0FBQTtFQUNBLDJDQUFBO0VBQ0EsY0FBQTtBQ1JSOztBRFdNO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ1RSOztBRGFJO0VBQ0Usa0JBQUE7RUFDQSw4QkFBQTtBQ1hOOztBRGFNO0VBQ0Usb0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBRUEsVUFBQTtFQUNBLFdBQUE7QUNaUjs7QURjUTtFQUNFLGVBQUE7QUNaVjs7QURrQkU7RUFDRSwyQkFBQTtFQUNBLGtEQUFBO0FDaEJKOztBRGtCSTtFQUNFLGVBQUE7RUFDQSxpQ0FBQTtBQ2hCTjs7QURxQkk7RUFDRSw4QkFBQTtFQUVBLDJDQUFBO0FDcEJOOztBRHNCTTtFQUNFLDBCQUFBO1VBQUEseUJBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0FDcEJSOztBRHNCUTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyQ0FBQTtBQ3BCVjs7QUR1QlE7RUFDRSw4REFBQTtFQUNBLDhEQUFBO0VBRUEsMEJBQUE7RUFDQSwyQ0FBQTtBQ3RCVjs7QUQ2Qkk7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQzNCTjs7QUQ2Qk07RUFDRSxxQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtFQUNBLHdCQUFBO0FDM0JSOztBRDZCUTtFQUNFLDRDQUFBO0FDM0JWOztBRDhCUTtFQUNFLFdBQUE7RUFDQSwwQ0FBQTtBQzVCVjs7QUQrQlE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FDN0JWOztBRG9DSTtFQUNFLHFCQUFBO0VBQ0EsOEJBQUE7RUFFQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsNEJBQUE7RUFDQSwwQ0FBQTtFQUNBLDJDQUFBO0VFN0lKLHdCQUFBO0VBR0EsOEJBQUE7RUFDQSxxQkFBQTtBRHlHRjs7QUN0R0U7RUFDRSxhQUFBO0FEd0dKOztBRGlDTTtFQUVFLFdBQUE7RUFDQSxxRUFBQTtBQ2hDUjs7QURtQ007RUFDRSw2Q0FBQTtBQ2pDUjs7QURtQ1E7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSx3Q0FBQTtFQUNBLGVBQUE7QUNqQ1YiLCJmaWxlIjoic3JjL2FwcC9maXJlYmFzZS9jcnVkL3VzZXIvZGV0YWlscy9zdHlsZXMvZmlyZWJhc2UtdXNlci1kZXRhaWxzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi8uLi8uLi8uLi90aGVtZS9taXhpbnMvc2Nyb2xsYmFyc1wiO1xuXG4vLyBDdXN0b20gdmFyaWFibGVzXG4vLyBOb3RlOiAgVGhlc2Ugb25lcyB3ZXJlIGFkZGVkIGJ5IHVzIGFuZCBoYXZlIG5vdGhpbmcgdG8gZG8gd2l0aCBJb25pYyBDU1MgQ3VzdG9tIFByb3BlcnRpZXNcbjpob3N0IHtcbiAgLS1wYWdlLW1hcmdpbjogdmFyKC0tYXBwLWZhaXItbWFyZ2luKTtcbiAgLS1wYWdlLWJhY2tncm91bmQ6IHZhcigtLWFwcC1iYWNrZ3JvdW5kKTtcblxuICAtLXBhZ2UtcmVsYXRlZC11c2Vycy1ndXR0ZXI6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG59XG5cbi8vIE5vdGU6ICBBbGwgdGhlIENTUyB2YXJpYWJsZXMgZGVmaW5lZCBiZWxvdyBhcmUgb3ZlcnJpZGVzIG9mIElvbmljIGVsZW1lbnRzIENTUyBDdXN0b20gUHJvcGVydGllc1xuLnVzZXItY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tcGFnZS1iYWNrZ3JvdW5kKTtcblxuICAudXNlci1pbmZvLXJvdyB7XG4gICAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMHB4O1xuXG4gICAgcGFkZGluZzogdmFyKC0tcGFnZS1tYXJnaW4pO1xuXG4gICAgLnVzZXItaW1hZ2UtY29sIHtcbiAgICAgIG1hcmdpbjogMHB4IGF1dG87XG4gICAgICBtYXJnaW4tYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuXG4gICAgICAudXNlci1pbWFnZSB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAudXNlci1kZXRhaWxzLWNvbCB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICAgIC51c2VyLW5hbWUge1xuICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbiAgICAgICAgbWluLXdpZHRoOiA0MCU7XG4gICAgICB9XG5cbiAgICAgIC51c2VyLWFnZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgbWluLXdpZHRoOiA2MCU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmFjdGlvbnMtY29sIHtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIG1hcmdpbi10b3A6IHZhcigtLXBhZ2UtbWFyZ2luKTtcblxuICAgICAgLmFjdGlvbi1idG4ge1xuICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gICAgICAgIC0tcGFkZGluZy1lbmQ6IDBweDtcblxuICAgICAgICB3aWR0aDogNGNoO1xuICAgICAgICBoZWlnaHQ6IDRjaDtcblxuICAgICAgICAuYnRuLWljb24ge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5jb250ZW50LXNlY3Rpb24ge1xuICAgIHBhZGRpbmc6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgICBib3JkZXItdG9wOiBzb2xpZCAxcHggdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlKTtcblxuICAgIC5zZWN0aW9uLWhlYWRlciB7XG4gICAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gICAgfVxuICB9XG5cbiAgLnVzZXItbGFuZ3VhZ2VzLXdyYXBwZXIge1xuICAgIC5sYW5ndWFnZS1pdGVtLXJvdyB7XG4gICAgICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiAwcHg7XG5cbiAgICAgIG1hcmdpbi1ib3R0b206IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG5cbiAgICAgIC5sYW5ndWFnZS1pdGVtIHtcbiAgICAgICAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDBweDtcbiAgICAgICAgcGFkZGluZy1pbmxpbmUtZW5kOiAwcHg7XG5cbiAgICAgICAgLmxhbmd1YWdlLW5hbWUge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMyk7XG4gICAgICAgIH1cblxuICAgICAgICAubGFuZ3VhZ2Utc2NvcmUge1xuICAgICAgICAgIC0tYnVmZmVyLWJhY2tncm91bmQ6IHJnYmEodmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeS1yZ2IpLCAuMjApO1xuICAgICAgICAgIC0tcHJvZ3Jlc3MtYmFja2dyb3VuZDogcmdiYSh2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5LXJnYiksIDEpO1xuXG4gICAgICAgICAgaGVpZ2h0OiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC51c2VyLWV4cGVyaWVuY2Utd3JhcHBlciB7XG4gICAgLmV4cGVyaWVuY2UtbGlzdCB7XG4gICAgICBtYXJnaW46IDBweDtcbiAgICAgIHBhZGRpbmc6IDBweDtcblxuICAgICAgLmV4cGVyaWVuY2UtaXRlbSB7XG4gICAgICAgIC0tbWluLWhlaWdodDogaW5pdGlhbDtcbiAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gICAgICAgIC0tcGFkZGluZy1lbmQ6IDBweDtcbiAgICAgICAgLS1pbm5lci1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gICAgICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDBweDtcblxuICAgICAgICAmOm5vdCg6bGFzdC1jaGlsZCkge1xuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuICAgICAgICB9XG5cbiAgICAgICAgLmV4cGVyaWVuY2UtbGlzdC1pY29uIHtcbiAgICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG4gICAgICAgIH1cblxuICAgICAgICAuZXhwZXJpZW5jZS1sYWJlbCB7XG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAucmVsYXRlZC11c2Vycy13cmFwcGVyIHtcbiAgICAucmVsYXRlZC11c2Vycy1yb3cge1xuICAgICAgLS1pb24tZ3JpZC1jb2x1bW5zOiA3OyAvLyBXZSB3YW50IHRvIHNob3cgdGhyZWUgdXNlcnMgYW5kIGEgaGFsZi4gRWFjaCB1c2VyIGZpbGxzIDIgY29scyA9PiAoMy41ICogMiA9IDcgY29scylcbiAgICAgIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcblxuICAgICAgZmxleC13cmFwOiBub3dyYXA7XG4gICAgICBvdmVyZmxvdy14OiBzY3JvbGw7XG4gICAgICB3aWxsLWNoYW5nZTogc2Nyb2xsLXBvc2l0aW9uO1xuICAgICAgbWFyZ2luLWxlZnQ6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pICogLTEpO1xuICAgICAgbWFyZ2luLXJpZ2h0OiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAqIC0xKTtcblxuICAgICAgQGluY2x1ZGUgaGlkZS1zY3JvbGxiYXJzKCk7XG5cbiAgICAgICY6OmJlZm9yZSxcbiAgICAgICY6OmFmdGVyIHtcbiAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgIGZsZXg6IDAgMCBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAtIHZhcigtLXBhZ2UtcmVsYXRlZC11c2Vycy1ndXR0ZXIpKTtcbiAgICAgIH1cblxuICAgICAgLnJlbGF0ZWQtdXNlci1pdGVtIHtcbiAgICAgICAgcGFkZGluZzogMHB4IHZhcigtLXBhZ2UtcmVsYXRlZC11c2Vycy1ndXR0ZXIpO1xuXG4gICAgICAgIC5yZWxhdGVkLXVzZXItbmFtZSB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIG1hcmdpbi10b3A6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCI6aG9zdCB7XG4gIC0tcGFnZS1tYXJnaW46IHZhcigtLWFwcC1mYWlyLW1hcmdpbik7XG4gIC0tcGFnZS1iYWNrZ3JvdW5kOiB2YXIoLS1hcHAtYmFja2dyb3VuZCk7XG4gIC0tcGFnZS1yZWxhdGVkLXVzZXJzLWd1dHRlcjogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbn1cblxuLnVzZXItY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tcGFnZS1iYWNrZ3JvdW5kKTtcbn1cbi51c2VyLWNvbnRlbnQgLnVzZXItaW5mby1yb3cge1xuICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiAwcHg7XG4gIHBhZGRpbmc6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbn1cbi51c2VyLWNvbnRlbnQgLnVzZXItaW5mby1yb3cgLnVzZXItaW1hZ2UtY29sIHtcbiAgbWFyZ2luOiAwcHggYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbn1cbi51c2VyLWNvbnRlbnQgLnVzZXItaW5mby1yb3cgLnVzZXItaW1hZ2UtY29sIC51c2VyLWltYWdlIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuLnVzZXItY29udGVudCAudXNlci1pbmZvLXJvdyAudXNlci1kZXRhaWxzLWNvbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi51c2VyLWNvbnRlbnQgLnVzZXItaW5mby1yb3cgLnVzZXItZGV0YWlscy1jb2wgLnVzZXItbmFtZSB7XG4gIG1hcmdpbjogMHB4O1xuICBtYXJnaW4tYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuICBtaW4td2lkdGg6IDQwJTtcbn1cbi51c2VyLWNvbnRlbnQgLnVzZXItaW5mby1yb3cgLnVzZXItZGV0YWlscy1jb2wgLnVzZXItYWdlIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBtaW4td2lkdGg6IDYwJTtcbn1cbi51c2VyLWNvbnRlbnQgLnVzZXItaW5mby1yb3cgLmFjdGlvbnMtY29sIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiB2YXIoLS1wYWdlLW1hcmdpbik7XG59XG4udXNlci1jb250ZW50IC51c2VyLWluZm8tcm93IC5hY3Rpb25zLWNvbCAuYWN0aW9uLWJ0biB7XG4gIC0tYm9yZGVyLXJhZGl1czogNTAlO1xuICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgLS1wYWRkaW5nLWVuZDogMHB4O1xuICB3aWR0aDogNGNoO1xuICBoZWlnaHQ6IDRjaDtcbn1cbi51c2VyLWNvbnRlbnQgLnVzZXItaW5mby1yb3cgLmFjdGlvbnMtY29sIC5hY3Rpb24tYnRuIC5idG4taWNvbiB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbn1cbi51c2VyLWNvbnRlbnQgLmNvbnRlbnQtc2VjdGlvbiB7XG4gIHBhZGRpbmc6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgYm9yZGVyLXRvcDogc29saWQgMXB4IHZhcigtLWlvbi1jb2xvci1saWdodC1zaGFkZSk7XG59XG4udXNlci1jb250ZW50IC5jb250ZW50LXNlY3Rpb24gLnNlY3Rpb24taGVhZGVyIHtcbiAgbWFyZ2luLXRvcDogMHB4O1xuICBtYXJnaW4tYm90dG9tOiB2YXIoLS1wYWdlLW1hcmdpbik7XG59XG4udXNlci1jb250ZW50IC51c2VyLWxhbmd1YWdlcy13cmFwcGVyIC5sYW5ndWFnZS1pdGVtLXJvdyB7XG4gIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcbiAgbWFyZ2luLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbn1cbi51c2VyLWNvbnRlbnQgLnVzZXItbGFuZ3VhZ2VzLXdyYXBwZXIgLmxhbmd1YWdlLWl0ZW0tcm93IC5sYW5ndWFnZS1pdGVtIHtcbiAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDBweDtcbiAgcGFkZGluZy1pbmxpbmUtZW5kOiAwcHg7XG59XG4udXNlci1jb250ZW50IC51c2VyLWxhbmd1YWdlcy13cmFwcGVyIC5sYW5ndWFnZS1pdGVtLXJvdyAubGFuZ3VhZ2UtaXRlbSAubGFuZ3VhZ2UtbmFtZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIG1hcmdpbi1ib3R0b206IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMyk7XG59XG4udXNlci1jb250ZW50IC51c2VyLWxhbmd1YWdlcy13cmFwcGVyIC5sYW5ndWFnZS1pdGVtLXJvdyAubGFuZ3VhZ2UtaXRlbSAubGFuZ3VhZ2Utc2NvcmUge1xuICAtLWJ1ZmZlci1iYWNrZ3JvdW5kOiByZ2JhKHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnktcmdiKSwgLjIwKTtcbiAgLS1wcm9ncmVzcy1iYWNrZ3JvdW5kOiByZ2JhKHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnktcmdiKSwgMSk7XG4gIGhlaWdodDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICBib3JkZXItcmFkaXVzOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xufVxuLnVzZXItY29udGVudCAudXNlci1leHBlcmllbmNlLXdyYXBwZXIgLmV4cGVyaWVuY2UtbGlzdCB7XG4gIG1hcmdpbjogMHB4O1xuICBwYWRkaW5nOiAwcHg7XG59XG4udXNlci1jb250ZW50IC51c2VyLWV4cGVyaWVuY2Utd3JhcHBlciAuZXhwZXJpZW5jZS1saXN0IC5leHBlcmllbmNlLWl0ZW0ge1xuICAtLW1pbi1oZWlnaHQ6IGluaXRpYWw7XG4gIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICAtLXBhZGRpbmctZW5kOiAwcHg7XG4gIC0taW5uZXItcGFkZGluZy1zdGFydDogMHB4O1xuICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XG59XG4udXNlci1jb250ZW50IC51c2VyLWV4cGVyaWVuY2Utd3JhcHBlciAuZXhwZXJpZW5jZS1saXN0IC5leHBlcmllbmNlLWl0ZW06bm90KDpsYXN0LWNoaWxkKSB7XG4gIHBhZGRpbmctYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xufVxuLnVzZXItY29udGVudCAudXNlci1leHBlcmllbmNlLXdyYXBwZXIgLmV4cGVyaWVuY2UtbGlzdCAuZXhwZXJpZW5jZS1pdGVtIC5leHBlcmllbmNlLWxpc3QtaWNvbiB7XG4gIG1hcmdpbjogMHB4O1xuICBtYXJnaW4tcmlnaHQ6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG59XG4udXNlci1jb250ZW50IC51c2VyLWV4cGVyaWVuY2Utd3JhcHBlciAuZXhwZXJpZW5jZS1saXN0IC5leHBlcmllbmNlLWl0ZW0gLmV4cGVyaWVuY2UtbGFiZWwge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIHdpZHRoOiAxMDAlO1xufVxuLnVzZXItY29udGVudCAucmVsYXRlZC11c2Vycy13cmFwcGVyIC5yZWxhdGVkLXVzZXJzLXJvdyB7XG4gIC0taW9uLWdyaWQtY29sdW1uczogNztcbiAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMHB4O1xuICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgb3ZlcmZsb3cteDogc2Nyb2xsO1xuICB3aWxsLWNoYW5nZTogc2Nyb2xsLXBvc2l0aW9uO1xuICBtYXJnaW4tbGVmdDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgKiAtMSk7XG4gIG1hcmdpbi1yaWdodDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgKiAtMSk7XG4gIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTtcbiAgb3ZlcmZsb3c6IC1tb3otc2Nyb2xsYmFycy1ub25lO1xuICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7XG59XG4udXNlci1jb250ZW50IC5yZWxhdGVkLXVzZXJzLXdyYXBwZXIgLnJlbGF0ZWQtdXNlcnMtcm93Ojotd2Via2l0LXNjcm9sbGJhciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4udXNlci1jb250ZW50IC5yZWxhdGVkLXVzZXJzLXdyYXBwZXIgLnJlbGF0ZWQtdXNlcnMtcm93OjpiZWZvcmUsIC51c2VyLWNvbnRlbnQgLnJlbGF0ZWQtdXNlcnMtd3JhcHBlciAucmVsYXRlZC11c2Vycy1yb3c6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgZmxleDogMCAwIGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC0gdmFyKC0tcGFnZS1yZWxhdGVkLXVzZXJzLWd1dHRlcikpO1xufVxuLnVzZXItY29udGVudCAucmVsYXRlZC11c2Vycy13cmFwcGVyIC5yZWxhdGVkLXVzZXJzLXJvdyAucmVsYXRlZC11c2VyLWl0ZW0ge1xuICBwYWRkaW5nOiAwcHggdmFyKC0tcGFnZS1yZWxhdGVkLXVzZXJzLWd1dHRlcik7XG59XG4udXNlci1jb250ZW50IC5yZWxhdGVkLXVzZXJzLXdyYXBwZXIgLnJlbGF0ZWQtdXNlcnMtcm93IC5yZWxhdGVkLXVzZXItaXRlbSAucmVsYXRlZC11c2VyLW5hbWUge1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuICBmb250LXNpemU6IDE0cHg7XG59IiwiLy8gSGlkZSBzY3JvbGxiYXJzOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMzg5OTQ4MzcvMTExNjk1OVxuQG1peGluIGhpZGUtc2Nyb2xsYmFycygpIHtcbiAgLy8gSUUgMTArXG4gIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTtcblxuICAvLyBGaXJlZm94XG4gIG92ZXJmbG93OiAtbW96LXNjcm9sbGJhcnMtbm9uZTtcbiAgc2Nyb2xsYmFyLXdpZHRoOiBub25lO1xuXG4gIC8vIFNhZmFyaSBhbmQgQ2hyb21lXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG4iXX0= */"];
    /***/
  },

  /***/
  "./src/app/firebase/crud/user/details/styles/firebase-user-details.shell.scss.shim.ngstyle.js":
  /*!****************************************************************************************************!*\
    !*** ./src/app/firebase/crud/user/details/styles/firebase-user-details.shell.scss.shim.ngstyle.js ***!
    \****************************************************************************************************/

  /*! exports provided: styles */

  /***/
  function srcAppFirebaseCrudUserDetailsStylesFirebaseUserDetailsShellScssShimNgstyleJs(module, __webpack_exports__, __webpack_require__) {
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


    var styles = ["app-image-shell.user-image[_ngcontent-%COMP%] {\n  --image-shell-border-radius: 50%;\n}\n\n.user-name[_ngcontent-%COMP%]    > app-text-shell[_ngcontent-%COMP%] {\n  --text-shell-line-height: 24px;\n}\n\n.user-age[_ngcontent-%COMP%]    > app-text-shell[_ngcontent-%COMP%] {\n  --text-shell-line-height: 14px;\n}\n\n.experience-label[_ngcontent-%COMP%]    > app-text-shell[_ngcontent-%COMP%] {\n  --text-shell-line-height: 16px;\n  max-width: 40%;\n}\n\n.experience-label[_ngcontent-%COMP%]    > app-text-shell.text-loaded[_ngcontent-%COMP%] {\n  max-width: inherit;\n}\n\napp-image-shell.related-user-picture[_ngcontent-%COMP%] {\n  --image-shell-border-radius: var(--app-fair-radius);\n}\n\n.related-user-name[_ngcontent-%COMP%]    > app-text-shell[_ngcontent-%COMP%] {\n  --text-shell-line-height: 14px;\n  max-width: 80%;\n}\n\n.related-user-name[_ngcontent-%COMP%]    > app-text-shell.text-loaded[_ngcontent-%COMP%] {\n  max-width: inherit;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kaWRneS9Eb2N1bWVudHMvR2l0SHViL0luZmluaXR5L3NyYy9hcHAvZmlyZWJhc2UvY3J1ZC91c2VyL2RldGFpbHMvc3R5bGVzL2ZpcmViYXNlLXVzZXItZGV0YWlscy5zaGVsbC5zY3NzIiwic3JjL2FwcC9maXJlYmFzZS9jcnVkL3VzZXIvZGV0YWlscy9zdHlsZXMvZmlyZWJhc2UtdXNlci1kZXRhaWxzLnNoZWxsLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQ0FBQTtBQ0NGOztBREVBO0VBQ0UsOEJBQUE7QUNDRjs7QURFQTtFQUNFLDhCQUFBO0FDQ0Y7O0FERUE7RUFDRSw4QkFBQTtFQUNBLGNBQUE7QUNDRjs7QURDRTtFQUNFLGtCQUFBO0FDQ0o7O0FER0E7RUFDRSxtREFBQTtBQ0FGOztBREdBO0VBQ0UsOEJBQUE7RUFDQSxjQUFBO0FDQUY7O0FERUU7RUFDRSxrQkFBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvZmlyZWJhc2UvY3J1ZC91c2VyL2RldGFpbHMvc3R5bGVzL2ZpcmViYXNlLXVzZXItZGV0YWlscy5zaGVsbC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYXBwLWltYWdlLXNoZWxsLnVzZXItaW1hZ2Uge1xuICAtLWltYWdlLXNoZWxsLWJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLnVzZXItbmFtZSA+IGFwcC10ZXh0LXNoZWxsIHtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAyNHB4O1xufVxuXG4udXNlci1hZ2UgPiBhcHAtdGV4dC1zaGVsbCB7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMTRweDtcbn1cblxuLmV4cGVyaWVuY2UtbGFiZWwgPiBhcHAtdGV4dC1zaGVsbCB7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMTZweDtcbiAgbWF4LXdpZHRoOiA0MCU7XG5cbiAgJi50ZXh0LWxvYWRlZCB7XG4gICAgbWF4LXdpZHRoOiBpbmhlcml0O1xuICB9XG59XG5cbmFwcC1pbWFnZS1zaGVsbC5yZWxhdGVkLXVzZXItcGljdHVyZSB7XG4gIC0taW1hZ2Utc2hlbGwtYm9yZGVyLXJhZGl1czogdmFyKC0tYXBwLWZhaXItcmFkaXVzKTtcbn1cblxuLnJlbGF0ZWQtdXNlci1uYW1lID4gYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDE0cHg7XG4gIG1heC13aWR0aDogODAlO1xuXG4gICYudGV4dC1sb2FkZWQge1xuICAgIG1heC13aWR0aDogaW5oZXJpdDtcbiAgfVxufVxuIiwiYXBwLWltYWdlLXNoZWxsLnVzZXItaW1hZ2Uge1xuICAtLWltYWdlLXNoZWxsLWJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLnVzZXItbmFtZSA+IGFwcC10ZXh0LXNoZWxsIHtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAyNHB4O1xufVxuXG4udXNlci1hZ2UgPiBhcHAtdGV4dC1zaGVsbCB7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMTRweDtcbn1cblxuLmV4cGVyaWVuY2UtbGFiZWwgPiBhcHAtdGV4dC1zaGVsbCB7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMTZweDtcbiAgbWF4LXdpZHRoOiA0MCU7XG59XG4uZXhwZXJpZW5jZS1sYWJlbCA+IGFwcC10ZXh0LXNoZWxsLnRleHQtbG9hZGVkIHtcbiAgbWF4LXdpZHRoOiBpbmhlcml0O1xufVxuXG5hcHAtaW1hZ2Utc2hlbGwucmVsYXRlZC11c2VyLXBpY3R1cmUge1xuICAtLWltYWdlLXNoZWxsLWJvcmRlci1yYWRpdXM6IHZhcigtLWFwcC1mYWlyLXJhZGl1cyk7XG59XG5cbi5yZWxhdGVkLXVzZXItbmFtZSA+IGFwcC10ZXh0LXNoZWxsIHtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAxNHB4O1xuICBtYXgtd2lkdGg6IDgwJTtcbn1cbi5yZWxhdGVkLXVzZXItbmFtZSA+IGFwcC10ZXh0LXNoZWxsLnRleHQtbG9hZGVkIHtcbiAgbWF4LXdpZHRoOiBpbmhlcml0O1xufSJdfQ== */"];
    /***/
  },

  /***/
  "./src/app/firebase/crud/user/firebase-user-details.module.ngfactory.js":
  /*!******************************************************************************!*\
    !*** ./src/app/firebase/crud/user/firebase-user-details.module.ngfactory.js ***!
    \******************************************************************************/

  /*! exports provided: FirebaseUserDetailsPageModuleNgFactory */

  /***/
  function srcAppFirebaseCrudUserFirebaseUserDetailsModuleNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FirebaseUserDetailsPageModuleNgFactory", function () {
      return FirebaseUserDetailsPageModuleNgFactory;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _firebase_user_details_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./firebase-user-details.module */
    "./src/app/firebase/crud/user/firebase-user-details.module.ts");
    /* harmony import */


    var _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../../node_modules/@angular/router/router.ngfactory */
    "./node_modules/@angular/router/router.ngfactory.js");
    /* harmony import */


    var _details_firebase_user_details_page_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./details/firebase-user-details.page.ngfactory */
    "./src/app/firebase/crud/user/details/firebase-user-details.page.ngfactory.js");
    /* harmony import */


    var _update_firebase_update_user_modal_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./update/firebase-update-user.modal.ngfactory */
    "./src/app/firebase/crud/user/update/firebase-update-user.modal.ngfactory.js");
    /* harmony import */


    var _select_image_select_user_image_modal_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./select-image/select-user-image.modal.ngfactory */
    "./src/app/firebase/crud/user/select-image/select-user-image.modal.ngfactory.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _shell_shell_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../../shell/shell.module */
    "./src/app/shell/shell.module.ts");
    /* harmony import */


    var _shell_config_app_shell_config__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../../../shell/config/app-shell.config */
    "./src/app/shell/config/app-shell.config.ts");
    /* harmony import */


    var _angular_fire__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/fire */
    "./node_modules/@angular/fire/fesm2015/angular-fire.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/fesm2015/angular-fire-firestore.js");
    /* harmony import */


    var _firebase_crud_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ../firebase-crud.service */
    "./src/app/firebase/crud/firebase-crud.service.ts");
    /* harmony import */


    var _firebase_user_details_resolver__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./firebase-user-details.resolver */
    "./src/app/firebase/crud/user/firebase-user-details.resolver.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _components_components_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ../../../components/components.module */
    "./src/app/components/components.module.ts");
    /* harmony import */


    var _firebase_crud_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ../firebase-crud.module */
    "./src/app/firebase/crud/firebase-crud.module.ts");
    /* harmony import */


    var _details_firebase_user_details_page__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./details/firebase-user-details.page */
    "./src/app/firebase/crud/user/details/firebase-user-details.page.ts");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
     * tslint:disable
     */


    var FirebaseUserDetailsPageModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_firebase_user_details_module__WEBPACK_IMPORTED_MODULE_1__["FirebaseUserDetailsPageModule"], [], function (_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_router_router_lNgFactory"], _details_firebase_user_details_page_ngfactory__WEBPACK_IMPORTED_MODULE_3__["FirebaseUserDetailsPageNgFactory"], _update_firebase_update_user_modal_ngfactory__WEBPACK_IMPORTED_MODULE_4__["FirebaseUpdateUserModalNgFactory"], _select_image_select_user_image_modal_ngfactory__WEBPACK_IMPORTED_MODULE_5__["SelectUserImageModalNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_n"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_n"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["AngularDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["AngularDelegate"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ModalController"], [_ionic_angular__WEBPACK_IMPORTED_MODULE_8__["AngularDelegate"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["PopoverController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["PopoverController"], [_ionic_angular__WEBPACK_IMPORTED_MODULE_8__["AngularDelegate"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpXsrfTokenExtractor"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_common_http_http_g"], [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_common_http_http_e"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_common_http_http_h"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_common_http_http_h"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpXsrfTokenExtractor"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_common_http_http_f"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HTTP_INTERCEPTORS"], function (p0_0) {
        return [p0_0];
      }, [_angular_common_http__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_common_http_http_h"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_common_http_http_d"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_common_http_http_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["XhrFactory"], null, [_angular_common_http__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_common_http_http_d"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpXhrBackend"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpXhrBackend"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_9__["XhrFactory"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpBackend"], null, [_angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpXhrBackend"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpHandler"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["ɵHttpInterceptingHandler"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpBackend"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpHandler"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"], function (p0_0) {
        return [_shell_shell_module__WEBPACK_IMPORTED_MODULE_10__["ɵ0"](p0_0)];
      }, [_shell_config_app_shell_config__WEBPACK_IMPORTED_MODULE_11__["AppShellConfig"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_fire__WEBPACK_IMPORTED_MODULE_12__["FirebaseApp"], _angular_fire__WEBPACK_IMPORTED_MODULE_12__["ɵfirebaseAppFactory"], [_angular_fire__WEBPACK_IMPORTED_MODULE_12__["FIREBASE_OPTIONS"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], [2, _angular_fire__WEBPACK_IMPORTED_MODULE_12__["FIREBASE_APP_NAME"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_13__["AngularFirestore"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_13__["AngularFirestore"], [_angular_fire__WEBPACK_IMPORTED_MODULE_12__["FIREBASE_OPTIONS"], [2, _angular_fire__WEBPACK_IMPORTED_MODULE_12__["FIREBASE_APP_NAME"]], [2, _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_13__["ENABLE_PERSISTENCE"]], [2, _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_13__["SETTINGS"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], [2, _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_13__["PERSISTENCE_SETTINGS"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _firebase_crud_service__WEBPACK_IMPORTED_MODULE_14__["FirebaseCrudService"], _firebase_crud_service__WEBPACK_IMPORTED_MODULE_14__["FirebaseCrudService"], [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_13__["AngularFirestore"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _firebase_user_details_resolver__WEBPACK_IMPORTED_MODULE_15__["FirebaseUserDetailsResolver"], _firebase_user_details_resolver__WEBPACK_IMPORTED_MODULE_15__["FirebaseUserDetailsResolver"], [_firebase_crud_service__WEBPACK_IMPORTED_MODULE_14__["FirebaseCrudService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_d"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonicModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonicModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_16__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_16__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_16__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_16__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientXsrfModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientXsrfModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _shell_shell_module__WEBPACK_IMPORTED_MODULE_10__["ShellModule"], _shell_shell_module__WEBPACK_IMPORTED_MODULE_10__["ShellModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _components_components_module__WEBPACK_IMPORTED_MODULE_17__["ComponentsModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_17__["ComponentsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_fire__WEBPACK_IMPORTED_MODULE_12__["AngularFireModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_12__["AngularFireModule"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_13__["AngularFirestoreModule"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_13__["AngularFirestoreModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _firebase_crud_module__WEBPACK_IMPORTED_MODULE_18__["FirebaseCrudModule"], _firebase_crud_module__WEBPACK_IMPORTED_MODULE_18__["FirebaseCrudModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _firebase_user_details_module__WEBPACK_IMPORTED_MODULE_1__["FirebaseUserDetailsPageModule"], _firebase_user_details_module__WEBPACK_IMPORTED_MODULE_1__["FirebaseUserDetailsPageModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_common_http_http_e"], "XSRF-TOKEN", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_common_http_http_f"], "X-XSRF-TOKEN", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_fire__WEBPACK_IMPORTED_MODULE_12__["FIREBASE_OPTIONS"], {
        apiKey: "AIzaSyDzXROVL0ql6_SjloAmaU_a4M-bijJI5h4",
        authDomain: "infinity-generator-a8f32.firebaseapp.com",
        databaseURL: "https://infinity-generator-a8f32.firebaseio.com",
        projectId: "infinity-generator-a8f32",
        storageBucket: "infinity-generator-a8f32.appspot.com",
        messagingSenderId: "728926959507",
        appId: "1:728926959507:web:a5c8f02c4344f2eae59a66",
        measurementId: "G-SFNL15EPF8"
      }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_fire__WEBPACK_IMPORTED_MODULE_12__["FIREBASE_APP_NAME"], undefined, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_16__["ROUTES"], function () {
        return [[{
          path: "listing",
          loadChildren: _firebase_crud_module__WEBPACK_IMPORTED_MODULE_18__["ɵ0"]
        }, {
          path: "details/:id",
          loadChildren: _firebase_crud_module__WEBPACK_IMPORTED_MODULE_18__["ɵ1"]
        }], [{
          path: "",
          component: _details_firebase_user_details_page__WEBPACK_IMPORTED_MODULE_19__["FirebaseUserDetailsPage"],
          resolve: {
            data: _firebase_user_details_module__WEBPACK_IMPORTED_MODULE_1__["ɵ0"]
          }
        }]];
      }, [])]);
    });
    /***/

  },

  /***/
  "./src/app/firebase/crud/user/firebase-user-details.module.ts":
  /*!********************************************************************!*\
    !*** ./src/app/firebase/crud/user/firebase-user-details.module.ts ***!
    \********************************************************************/

  /*! exports provided: FirebaseUserDetailsPageModule, ɵ0 */

  /***/
  function srcAppFirebaseCrudUserFirebaseUserDetailsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FirebaseUserDetailsPageModule", function () {
      return FirebaseUserDetailsPageModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵ0", function () {
      return ɵ0;
    });
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _details_firebase_user_details_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./details/firebase-user-details.page */
    "./src/app/firebase/crud/user/details/firebase-user-details.page.ts");
    /* harmony import */


    var _firebase_user_details_resolver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./firebase-user-details.resolver */
    "./src/app/firebase/crud/user/firebase-user-details.resolver.ts");

    var ɵ0 = _firebase_user_details_resolver__WEBPACK_IMPORTED_MODULE_2__["FirebaseUserDetailsResolver"];
    var routes = [{
      path: '',
      component: _details_firebase_user_details_page__WEBPACK_IMPORTED_MODULE_1__["FirebaseUserDetailsPage"],
      resolve: {
        data: ɵ0
      }
    }];

    var FirebaseUserDetailsPageModule = function FirebaseUserDetailsPageModule() {
      _classCallCheck(this, FirebaseUserDetailsPageModule);
    };
    /***/

  },

  /***/
  "./src/app/firebase/crud/user/firebase-user-details.resolver.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/firebase/crud/user/firebase-user-details.resolver.ts ***!
    \**********************************************************************/

  /*! exports provided: FirebaseUserDetailsResolver */

  /***/
  function srcAppFirebaseCrudUserFirebaseUserDetailsResolverTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FirebaseUserDetailsResolver", function () {
      return FirebaseUserDetailsResolver;
    });
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _firebase_crud_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../firebase-crud.service */
    "./src/app/firebase/crud/firebase-crud.service.ts");

    var FirebaseUserDetailsResolver = /*#__PURE__*/function () {
      function FirebaseUserDetailsResolver(firebaseCrudService) {
        _classCallCheck(this, FirebaseUserDetailsResolver);

        this.firebaseCrudService = firebaseCrudService;
      }

      _createClass(FirebaseUserDetailsResolver, [{
        key: "resolve",
        value: function resolve(route) {
          var userId = route.paramMap.get('id'); // We created a FirebaseCombinedUserModel to combine the userData with the details of the userSkills (from the skills collection).
          // They are 2 different collections and we need to combine them into 1 dataSource.

          var combinedUserDataSource = this.firebaseCrudService.getCombinedUserDataSource(userId);
          var combinedUserDataStore = this.firebaseCrudService.getCombinedUserStore(combinedUserDataSource); // The user details page has a section with related users, showing users with the same skills
          // For this we created another datastore which depends on the combinedUser data store
          // The DataStore subscribes to the DataSource, to avoid creating two subscribers to the combinedUserDataSource,
          // use the combinedUserDataStore timeline instead. (The timeline is a Subject, and is intended to have many subscribers)
          // Using, and thus subscribing to the timeline won't trigger two requests to the firebase endpoint

          var relatedUsersDataSource = this.firebaseCrudService.getRelatedUsersDataSource(combinedUserDataStore.state);
          var relatedUsersDataStore = this.firebaseCrudService.getRelatedUsersStore(relatedUsersDataSource);
          return {
            user: combinedUserDataStore,
            relatedUsers: relatedUsersDataStore
          };
        }
      }]);

      return FirebaseUserDetailsResolver;
    }();
    /***/

  },

  /***/
  "./src/app/firebase/crud/user/update/firebase-update-user.modal.ngfactory.js":
  /*!***********************************************************************************!*\
    !*** ./src/app/firebase/crud/user/update/firebase-update-user.modal.ngfactory.js ***!
    \***********************************************************************************/

  /*! exports provided: RenderType_FirebaseUpdateUserModal, View_FirebaseUpdateUserModal_0, View_FirebaseUpdateUserModal_Host_0, FirebaseUpdateUserModalNgFactory */

  /***/
  function srcAppFirebaseCrudUserUpdateFirebaseUpdateUserModalNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_FirebaseUpdateUserModal", function () {
      return RenderType_FirebaseUpdateUserModal;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_FirebaseUpdateUserModal_0", function () {
      return View_FirebaseUpdateUserModal_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_FirebaseUpdateUserModal_Host_0", function () {
      return View_FirebaseUpdateUserModal_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FirebaseUpdateUserModalNgFactory", function () {
      return FirebaseUpdateUserModalNgFactory;
    });
    /* harmony import */


    var _styles_firebase_update_user_modal_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./styles/firebase-update-user.modal.scss.shim.ngstyle */
    "./src/app/firebase/crud/user/update/styles/firebase-update-user.modal.scss.shim.ngstyle.js");
    /* harmony import */


    var _styles_firebase_update_user_shell_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./styles/firebase-update-user.shell.scss.shim.ngstyle */
    "./src/app/firebase/crud/user/update/styles/firebase-update-user.shell.scss.shim.ngstyle.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../../../node_modules/@ionic/angular/ionic-angular.ngfactory */
    "./node_modules/@ionic/angular/ionic-angular.ngfactory.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _shell_aspect_ratio_aspect_ratio_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../../shell/aspect-ratio/aspect-ratio.component.ngfactory */
    "./src/app/shell/aspect-ratio/aspect-ratio.component.ngfactory.js");
    /* harmony import */


    var _shell_aspect_ratio_aspect_ratio_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../../shell/aspect-ratio/aspect-ratio.component */
    "./src/app/shell/aspect-ratio/aspect-ratio.component.ts");
    /* harmony import */


    var _shell_image_shell_image_shell_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../../shell/image-shell/image-shell.component.ngfactory */
    "./src/app/shell/image-shell/image-shell.component.ngfactory.js");
    /* harmony import */


    var _shell_image_shell_image_shell_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../../../shell/image-shell/image-shell.component */
    "./src/app/shell/image-shell/image-shell.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _firebase_update_user_modal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./firebase-update-user.modal */
    "./src/app/firebase/crud/user/update/firebase-update-user.modal.ts");
    /* harmony import */


    var _firebase_crud_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../../firebase-crud.service */
    "./src/app/firebase/crud/firebase-crud.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
     * tslint:disable
     */


    var styles_FirebaseUpdateUserModal = [_styles_firebase_update_user_modal_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"], _styles_firebase_update_user_shell_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_1__["styles"]];

    var RenderType_FirebaseUpdateUserModal = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵcrt"]({
      encapsulation: 0,
      styles: styles_FirebaseUpdateUserModal,
      data: {}
    });

    function View_FirebaseUpdateUserModal_1(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](0, 0, null, null, 14, "ion-item", [["class", "checkbox-tag rounded-tag"], ["formArrayName", "skills"], ["lines", "none"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonItem_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonItem"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](1, 212992, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormArrayName"], [[3, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ControlContainer"]], [8, null], [8, null]], {
        name: [0, "name"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ControlContainer"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormArrayName"]]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](3, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ControlContainer"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](4, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonItem"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], {
        lines: [0, "lines"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](5, 0, null, 0, 2, "ion-label", [["class", "tag-label"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonLabel_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonLabel"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](6, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonLabel"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](7, 0, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](8, 0, null, 0, 6, "ion-checkbox", [], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ionBlur"], [null, "ionChange"]], function (_v, en, $event) {
        var ad = true;

        if ("ionBlur" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 9)._handleBlurEvent($event.target) !== false;
          ad = pd_0 && ad;
        }

        if ("ionChange" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 9)._handleIonChange($event.target) !== false;
          ad = pd_1 && ad;
        }

        return ad;
      }, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonCheckbox_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonCheckbox"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](9, 16384, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["BooleanValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"], function (p0_0) {
        return [p0_0];
      }, [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["BooleanValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](11, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControlName"], [[3, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_p"]]], {
        name: [0, "name"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControlName"]]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](13, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](14, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonCheckbox"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null)], function (_ck, _v) {
        var currVal_7 = "skills";

        _ck(_v, 1, 0, currVal_7);

        var currVal_8 = "none";

        _ck(_v, 4, 0, currVal_8);

        var currVal_17 = _v.context.index;

        _ck(_v, 11, 0, currVal_17);
      }, function (_ck, _v) {
        var _co = _v.component;

        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 3).ngClassUntouched;

        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 3).ngClassTouched;

        var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 3).ngClassPristine;

        var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 3).ngClassDirty;

        var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 3).ngClassValid;

        var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 3).ngClassInvalid;

        var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 3).ngClassPending;

        _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6);

        var currVal_9 = _co.skills[_v.context.index].name;

        _ck(_v, 7, 0, currVal_9);

        var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 13).ngClassUntouched;

        var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 13).ngClassTouched;

        var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 13).ngClassPristine;

        var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 13).ngClassDirty;

        var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 13).ngClassValid;

        var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 13).ngClassInvalid;

        var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 13).ngClassPending;

        _ck(_v, 8, 0, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16);
      });
    }

    function View_FirebaseUpdateUserModal_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](0, 0, null, null, 183, "form", [["class", "update-user-form ion-page"], ["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngSubmit"], [null, "submit"], [null, "reset"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("submit" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 2).onSubmit($event) !== false;
          ad = pd_0 && ad;
        }

        if ("reset" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 2).onReset() !== false;
          ad = pd_1 && ad;
        }

        if ("ngSubmit" === en) {
          var pd_2 = _co.updateUser() !== false;
          ad = pd_2 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](1, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](2, 540672, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroupDirective"], [[8, null], [8, null]], {
        form: [0, "form"]
      }, {
        ngSubmit: "ngSubmit"
      }), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ControlContainer"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroupDirective"]]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](4, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ControlContainer"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](5, 0, null, null, 12, "ion-header", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonHeader_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonHeader"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](6, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonHeader"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](7, 0, null, 0, 10, "ion-toolbar", [["color", "primary"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonToolbar_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonToolbar"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](8, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonToolbar"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], {
        color: [0, "color"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](9, 0, null, 0, 5, "ion-buttons", [["slot", "end"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonButtons_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonButtons"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](10, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonButtons"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](11, 0, null, 0, 3, "ion-button", [], null, [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("click" === en) {
          var pd_0 = _co.dismissModal() !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonButton_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](12, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](13, 0, null, 0, 1, "ion-icon", [["name", "close"], ["slot", "icon-only"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonIcon_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](14, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], {
        name: [0, "name"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](15, 0, null, 0, 2, "ion-title", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonTitle_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonTitle"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](16, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonTitle"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, 0, ["Update User"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](18, 0, null, null, 151, "ion-content", [["class", "update-user-content"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonContent_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonContent"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](19, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonContent"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](20, 0, null, 0, 12, "ion-row", [["class", "select-user-image-row"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonRow_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonRow"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](21, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonRow"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](22, 0, null, 0, 10, "ion-col", [["class", "user-image-col"], ["size", "5"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonCol_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonCol"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](23, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonCol"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], {
        size: [0, "size"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](24, 0, null, 0, 4, "app-aspect-ratio", [], [[4, "padding", null]], null, null, _shell_aspect_ratio_aspect_ratio_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["View_AspectRatioComponent_0"], _shell_aspect_ratio_aspect_ratio_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RenderType_AspectRatioComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](25, 49152, null, 0, _shell_aspect_ratio_aspect_ratio_component__WEBPACK_IMPORTED_MODULE_7__["AspectRatioComponent"], [], {
        ratio: [0, "ratio"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵpod"](26, {
        w: 0,
        h: 1
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](27, 0, null, 0, 1, "app-image-shell", [["animation", "spinner"], ["class", "user-image"]], [[2, "img-loaded", null], [4, "backgroundImage", null], [1, "display", 0]], null, null, _shell_image_shell_image_shell_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__["View_ImageShellComponent_0"], _shell_image_shell_image_shell_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__["RenderType_ImageShellComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](28, 49152, null, 0, _shell_image_shell_image_shell_component__WEBPACK_IMPORTED_MODULE_9__["ImageShellComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["PLATFORM_ID"]], {
        display: [0, "display"],
        src: [1, "src"],
        alt: [2, "alt"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](29, 0, null, 0, 3, "ion-button", [["class", "change-image-btn"], ["color", "secondary"]], null, [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("click" === en) {
          var pd_0 = _co.changeUserImage() !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonButton_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](30, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], {
        color: [0, "color"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](31, 0, null, 0, 1, "ion-icon", [["class", "btn-icon"], ["name", "camera"], ["slot", "icon-only"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonIcon_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](32, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], {
        name: [0, "name"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](33, 0, null, 0, 72, "section", [["class", "user-details-fields fields-section"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](34, 0, null, null, 71, "ion-list", [["class", "inputs-list"], ["lines", "full"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonList_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonList"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](35, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonList"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], {
        lines: [0, "lines"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](36, 0, null, 0, 13, "ion-item", [["class", "input-item"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonItem_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonItem"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](37, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonItem"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](38, 0, null, 0, 2, "ion-label", [["color", "secondary"], ["position", "floating"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonLabel_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonLabel"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](39, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonLabel"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], {
        color: [0, "color"],
        position: [1, "position"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, 0, ["Name"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](41, 0, null, 0, 8, "ion-input", [["formControlName", "name"], ["required", ""], ["type", "text"]], [[1, "required", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ionBlur"], [null, "ionChange"]], function (_v, en, $event) {
        var ad = true;

        if ("ionBlur" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 44)._handleBlurEvent($event.target) !== false;
          ad = pd_0 && ad;
        }

        if ("ionChange" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 44)._handleInputEvent($event.target) !== false;
          ad = pd_1 && ad;
        }

        return ad;
      }, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonInput_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonInput"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](42, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], [], {
        required: [0, "required"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALIDATORS"], function (p0_0) {
        return [p0_0];
      }, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"]]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](44, 16384, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["TextValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"], function (p0_0) {
        return [p0_0];
      }, [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["TextValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](46, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControlName"], [[3, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ControlContainer"]], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALIDATORS"]], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_p"]]], {
        name: [0, "name"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControlName"]]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](48, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](49, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonInput"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], {
        required: [0, "required"],
        type: [1, "type"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](50, 0, null, 0, 13, "ion-item", [["class", "input-item"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonItem_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonItem"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](51, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonItem"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](52, 0, null, 0, 2, "ion-label", [["color", "secondary"], ["position", "floating"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonLabel_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonLabel"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](53, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonLabel"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], {
        color: [0, "color"],
        position: [1, "position"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, 0, ["Last name"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](55, 0, null, 0, 8, "ion-input", [["formControlName", "lastname"], ["required", ""], ["type", "text"]], [[1, "required", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ionBlur"], [null, "ionChange"]], function (_v, en, $event) {
        var ad = true;

        if ("ionBlur" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 58)._handleBlurEvent($event.target) !== false;
          ad = pd_0 && ad;
        }

        if ("ionChange" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 58)._handleInputEvent($event.target) !== false;
          ad = pd_1 && ad;
        }

        return ad;
      }, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonInput_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonInput"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](56, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], [], {
        required: [0, "required"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALIDATORS"], function (p0_0) {
        return [p0_0];
      }, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"]]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](58, 16384, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["TextValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"], function (p0_0) {
        return [p0_0];
      }, [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["TextValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](60, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControlName"], [[3, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ControlContainer"]], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALIDATORS"]], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_p"]]], {
        name: [0, "name"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControlName"]]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](62, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](63, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonInput"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], {
        required: [0, "required"],
        type: [1, "type"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](64, 0, null, 0, 13, "ion-item", [["class", "input-item"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonItem_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonItem"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](65, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonItem"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](66, 0, null, 0, 2, "ion-label", [["color", "secondary"], ["position", "floating"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonLabel_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonLabel"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](67, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonLabel"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], {
        color: [0, "color"],
        position: [1, "position"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, 0, ["Date of Birth"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](69, 0, null, 0, 8, "ion-datetime", [["display-format", "DD/MM/YYYY"], ["formControlName", "birthdate"], ["picker-format", "DD MMMM YYYY"], ["required", ""]], [[1, "required", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ionBlur"], [null, "ionChange"]], function (_v, en, $event) {
        var ad = true;

        if ("ionBlur" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 72)._handleBlurEvent($event.target) !== false;
          ad = pd_0 && ad;
        }

        if ("ionChange" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 72)._handleChangeEvent($event.target) !== false;
          ad = pd_1 && ad;
        }

        return ad;
      }, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonDatetime_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonDatetime"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](70, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], [], {
        required: [0, "required"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALIDATORS"], function (p0_0) {
        return [p0_0];
      }, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"]]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](72, 16384, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["SelectValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"], function (p0_0) {
        return [p0_0];
      }, [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["SelectValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](74, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControlName"], [[3, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ControlContainer"]], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALIDATORS"]], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_p"]]], {
        name: [0, "name"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControlName"]]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](76, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](77, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonDatetime"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](78, 0, null, 0, 13, "ion-item", [["class", "input-item"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonItem_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonItem"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](79, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonItem"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](80, 0, null, 0, 2, "ion-label", [["color", "secondary"], ["position", "floating"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonLabel_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonLabel"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](81, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonLabel"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], {
        color: [0, "color"],
        position: [1, "position"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, 0, ["Phone number"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](83, 0, null, 0, 8, "ion-input", [["formControlName", "phone"], ["required", ""], ["type", "tel"]], [[1, "required", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ionBlur"], [null, "ionChange"]], function (_v, en, $event) {
        var ad = true;

        if ("ionBlur" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 86)._handleBlurEvent($event.target) !== false;
          ad = pd_0 && ad;
        }

        if ("ionChange" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 86)._handleInputEvent($event.target) !== false;
          ad = pd_1 && ad;
        }

        return ad;
      }, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonInput_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonInput"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](84, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], [], {
        required: [0, "required"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALIDATORS"], function (p0_0) {
        return [p0_0];
      }, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"]]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](86, 16384, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["TextValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"], function (p0_0) {
        return [p0_0];
      }, [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["TextValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](88, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControlName"], [[3, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ControlContainer"]], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALIDATORS"]], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_p"]]], {
        name: [0, "name"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControlName"]]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](90, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](91, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonInput"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], {
        required: [0, "required"],
        type: [1, "type"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](92, 0, null, 0, 13, "ion-item", [["class", "input-item"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonItem_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonItem"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](93, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonItem"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](94, 0, null, 0, 2, "ion-label", [["color", "secondary"], ["position", "floating"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonLabel_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonLabel"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](95, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonLabel"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], {
        color: [0, "color"],
        position: [1, "position"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, 0, ["Email"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](97, 0, null, 0, 8, "ion-input", [["formControlName", "email"], ["required", ""], ["type", "email"]], [[1, "required", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ionBlur"], [null, "ionChange"]], function (_v, en, $event) {
        var ad = true;

        if ("ionBlur" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 100)._handleBlurEvent($event.target) !== false;
          ad = pd_0 && ad;
        }

        if ("ionChange" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 100)._handleInputEvent($event.target) !== false;
          ad = pd_1 && ad;
        }

        return ad;
      }, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonInput_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonInput"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](98, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], [], {
        required: [0, "required"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALIDATORS"], function (p0_0) {
        return [p0_0];
      }, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"]]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](100, 16384, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["TextValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"], function (p0_0) {
        return [p0_0];
      }, [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["TextValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](102, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControlName"], [[3, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ControlContainer"]], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALIDATORS"]], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_p"]]], {
        name: [0, "name"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControlName"]]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](104, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](105, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonInput"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], {
        required: [0, "required"],
        type: [1, "type"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](106, 0, null, 0, 6, "section", [["class", "user-experience-fields fields-section"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](107, 0, null, null, 1, "h5", [["class", "section-header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, null, ["Experience in"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](109, 0, null, null, 3, "ion-row", [["class", "checkbox-tags rounded-checkbox-tags"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonRow_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonRow"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](110, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonRow"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵand"](16777216, null, 0, 1, null, View_FirebaseUpdateUserModal_1)), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](112, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["IterableDiffers"]], {
        ngForOf: [0, "ngForOf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](113, 0, null, 0, 56, "section", [["class", "user-languages-fields fields-section"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](114, 0, null, null, 1, "h5", [["class", "section-header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, null, ["Languages"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](116, 0, null, null, 17, "ion-row", [["class", "range-item-row"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonRow_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonRow"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](117, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonRow"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](118, 0, null, 0, 6, "ion-col", [["size", "12"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonCol_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonCol"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](119, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonCol"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], {
        size: [0, "size"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](120, 0, null, 0, 4, "div", [["class", "range-header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](121, 0, null, null, 1, "span", [["class", "range-label"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, null, ["English"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](123, 0, null, null, 1, "span", [["class", "range-value"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](124, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](125, 0, null, 0, 8, "ion-col", [["size", "12"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonCol_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonCol"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](126, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonCol"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], {
        size: [0, "size"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](127, 0, null, 0, 6, "ion-range", [["class", "range-control"], ["color", "secondary"], ["formControlName", "english"], ["max", "10"], ["min", "1"], ["step", "1"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ionBlur"], [null, "ionChange"]], function (_v, en, $event) {
        var ad = true;

        if ("ionBlur" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 128)._handleBlurEvent($event.target) !== false;
          ad = pd_0 && ad;
        }

        if ("ionChange" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 128)._handleChangeEvent($event.target) !== false;
          ad = pd_1 && ad;
        }

        return ad;
      }, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonRange_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonRange"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](128, 16384, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["SelectValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"], function (p0_0) {
        return [p0_0];
      }, [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["SelectValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](130, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControlName"], [[3, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_p"]]], {
        name: [0, "name"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControlName"]]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](132, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](133, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonRange"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], {
        color: [0, "color"],
        max: [1, "max"],
        min: [2, "min"],
        step: [3, "step"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](134, 0, null, null, 17, "ion-row", [["class", "range-item-row"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonRow_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonRow"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](135, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonRow"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](136, 0, null, 0, 6, "ion-col", [["size", "12"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonCol_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonCol"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](137, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonCol"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], {
        size: [0, "size"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](138, 0, null, 0, 4, "div", [["class", "range-header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](139, 0, null, null, 1, "span", [["class", "range-label"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, null, ["Spanish"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](141, 0, null, null, 1, "span", [["class", "range-value"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](142, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](143, 0, null, 0, 8, "ion-col", [["size", "12"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonCol_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonCol"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](144, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonCol"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], {
        size: [0, "size"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](145, 0, null, 0, 6, "ion-range", [["class", "range-control"], ["color", "secondary"], ["formControlName", "spanish"], ["max", "10"], ["min", "1"], ["step", "1"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ionBlur"], [null, "ionChange"]], function (_v, en, $event) {
        var ad = true;

        if ("ionBlur" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 146)._handleBlurEvent($event.target) !== false;
          ad = pd_0 && ad;
        }

        if ("ionChange" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 146)._handleChangeEvent($event.target) !== false;
          ad = pd_1 && ad;
        }

        return ad;
      }, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonRange_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonRange"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](146, 16384, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["SelectValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"], function (p0_0) {
        return [p0_0];
      }, [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["SelectValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](148, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControlName"], [[3, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_p"]]], {
        name: [0, "name"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControlName"]]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](150, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](151, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonRange"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], {
        color: [0, "color"],
        max: [1, "max"],
        min: [2, "min"],
        step: [3, "step"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](152, 0, null, null, 17, "ion-row", [["class", "range-item-row"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonRow_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonRow"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](153, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonRow"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](154, 0, null, 0, 6, "ion-col", [["size", "12"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonCol_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonCol"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](155, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonCol"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], {
        size: [0, "size"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](156, 0, null, 0, 4, "div", [["class", "range-header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](157, 0, null, null, 1, "span", [["class", "range-label"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, null, ["French"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](159, 0, null, null, 1, "span", [["class", "range-value"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](160, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](161, 0, null, 0, 8, "ion-col", [["size", "12"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonCol_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonCol"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](162, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonCol"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], {
        size: [0, "size"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](163, 0, null, 0, 6, "ion-range", [["class", "range-control"], ["color", "secondary"], ["formControlName", "french"], ["max", "10"], ["min", "1"], ["step", "1"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ionBlur"], [null, "ionChange"]], function (_v, en, $event) {
        var ad = true;

        if ("ionBlur" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 164)._handleBlurEvent($event.target) !== false;
          ad = pd_0 && ad;
        }

        if ("ionChange" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 164)._handleChangeEvent($event.target) !== false;
          ad = pd_1 && ad;
        }

        return ad;
      }, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonRange_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonRange"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](164, 16384, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["SelectValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"], function (p0_0) {
        return [p0_0];
      }, [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["SelectValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](166, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControlName"], [[3, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_p"]]], {
        name: [0, "name"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControlName"]]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](168, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](169, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonRange"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], {
        color: [0, "color"],
        max: [1, "max"],
        min: [2, "min"],
        step: [3, "step"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](170, 0, null, null, 13, "ion-footer", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonFooter_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonFooter"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](171, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonFooter"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](172, 0, null, 0, 11, "ion-row", [["class", "form-actions-wrapper"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonRow_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonRow"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](173, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonRow"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](174, 0, null, 0, 4, "ion-col", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonCol_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonCol"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](175, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonCol"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](176, 0, null, 0, 2, "ion-button", [["class", "delete-btn"], ["color", "primary"], ["expand", "block"], ["fill", "outline"]], null, [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("click" === en) {
          var pd_0 = _co.deleteUser() !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonButton_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](177, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], {
        color: [0, "color"],
        expand: [1, "expand"],
        fill: [2, "fill"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, 0, ["DELETE"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](179, 0, null, 0, 4, "ion-col", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonCol_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonCol"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](180, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonCol"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](181, 0, null, 0, 2, "ion-button", [["class", "submit-btn"], ["color", "secondary"], ["expand", "block"], ["fill", "solid"], ["type", "submit"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonButton_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](182, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], {
        color: [0, "color"],
        disabled: [1, "disabled"],
        expand: [2, "expand"],
        fill: [3, "fill"],
        type: [4, "type"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, 0, ["UPDATE"]))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_7 = _co.updateUserForm;

        _ck(_v, 2, 0, currVal_7);

        var currVal_8 = "primary";

        _ck(_v, 8, 0, currVal_8);

        var currVal_9 = "close";

        _ck(_v, 14, 0, currVal_9);

        var currVal_10 = "5";

        _ck(_v, 23, 0, currVal_10);

        var currVal_12 = _ck(_v, 26, 0, 1, 1);

        _ck(_v, 25, 0, currVal_12);

        var currVal_16 = "cover";
        var currVal_17 = _co.selectedAvatar;
        var currVal_18 = "user image";

        _ck(_v, 28, 0, currVal_16, currVal_17, currVal_18);

        var currVal_19 = "secondary";

        _ck(_v, 30, 0, currVal_19);

        var currVal_20 = "camera";

        _ck(_v, 32, 0, currVal_20);

        var currVal_21 = "full";

        _ck(_v, 35, 0, currVal_21);

        var currVal_22 = "secondary";
        var currVal_23 = "floating";

        _ck(_v, 39, 0, currVal_22, currVal_23);

        var currVal_32 = "";

        _ck(_v, 42, 0, currVal_32);

        var currVal_33 = "name";

        _ck(_v, 46, 0, currVal_33);

        var currVal_34 = "";
        var currVal_35 = "text";

        _ck(_v, 49, 0, currVal_34, currVal_35);

        var currVal_36 = "secondary";
        var currVal_37 = "floating";

        _ck(_v, 53, 0, currVal_36, currVal_37);

        var currVal_46 = "";

        _ck(_v, 56, 0, currVal_46);

        var currVal_47 = "lastname";

        _ck(_v, 60, 0, currVal_47);

        var currVal_48 = "";
        var currVal_49 = "text";

        _ck(_v, 63, 0, currVal_48, currVal_49);

        var currVal_50 = "secondary";
        var currVal_51 = "floating";

        _ck(_v, 67, 0, currVal_50, currVal_51);

        var currVal_60 = "";

        _ck(_v, 70, 0, currVal_60);

        var currVal_61 = "birthdate";

        _ck(_v, 74, 0, currVal_61);

        var currVal_62 = "secondary";
        var currVal_63 = "floating";

        _ck(_v, 81, 0, currVal_62, currVal_63);

        var currVal_72 = "";

        _ck(_v, 84, 0, currVal_72);

        var currVal_73 = "phone";

        _ck(_v, 88, 0, currVal_73);

        var currVal_74 = "";
        var currVal_75 = "tel";

        _ck(_v, 91, 0, currVal_74, currVal_75);

        var currVal_76 = "secondary";
        var currVal_77 = "floating";

        _ck(_v, 95, 0, currVal_76, currVal_77);

        var currVal_86 = "";

        _ck(_v, 98, 0, currVal_86);

        var currVal_87 = "email";

        _ck(_v, 102, 0, currVal_87);

        var currVal_88 = "";
        var currVal_89 = "email";

        _ck(_v, 105, 0, currVal_88, currVal_89);

        var currVal_90 = _co.skillsFormArray.controls;

        _ck(_v, 112, 0, currVal_90);

        var currVal_91 = "12";

        _ck(_v, 119, 0, currVal_91);

        var currVal_93 = "12";

        _ck(_v, 126, 0, currVal_93);

        var currVal_101 = "english";

        _ck(_v, 130, 0, currVal_101);

        var currVal_102 = "secondary";
        var currVal_103 = "10";
        var currVal_104 = "1";
        var currVal_105 = "1";

        _ck(_v, 133, 0, currVal_102, currVal_103, currVal_104, currVal_105);

        var currVal_106 = "12";

        _ck(_v, 137, 0, currVal_106);

        var currVal_108 = "12";

        _ck(_v, 144, 0, currVal_108);

        var currVal_116 = "spanish";

        _ck(_v, 148, 0, currVal_116);

        var currVal_117 = "secondary";
        var currVal_118 = "10";
        var currVal_119 = "1";
        var currVal_120 = "1";

        _ck(_v, 151, 0, currVal_117, currVal_118, currVal_119, currVal_120);

        var currVal_121 = "12";

        _ck(_v, 155, 0, currVal_121);

        var currVal_123 = "12";

        _ck(_v, 162, 0, currVal_123);

        var currVal_131 = "french";

        _ck(_v, 166, 0, currVal_131);

        var currVal_132 = "secondary";
        var currVal_133 = "10";
        var currVal_134 = "1";
        var currVal_135 = "1";

        _ck(_v, 169, 0, currVal_132, currVal_133, currVal_134, currVal_135);

        var currVal_136 = "primary";
        var currVal_137 = "block";
        var currVal_138 = "outline";

        _ck(_v, 177, 0, currVal_136, currVal_137, currVal_138);

        var currVal_139 = "secondary";
        var currVal_140 = !_co.updateUserForm.valid;
        var currVal_141 = "block";
        var currVal_142 = "solid";
        var currVal_143 = "submit";

        _ck(_v, 182, 0, currVal_139, currVal_140, currVal_141, currVal_142, currVal_143);
      }, function (_ck, _v) {
        var _co = _v.component;

        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 4).ngClassUntouched;

        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 4).ngClassTouched;

        var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 4).ngClassPristine;

        var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 4).ngClassDirty;

        var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 4).ngClassValid;

        var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 4).ngClassInvalid;

        var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 4).ngClassPending;

        _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6);

        var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 25).ratioPadding;

        _ck(_v, 24, 0, currVal_11);

        var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 28).imageLoaded;

        var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 28).backgroundImage;

        var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 28).display;

        _ck(_v, 27, 0, currVal_13, currVal_14, currVal_15);

        var currVal_24 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 42).required ? "" : null;

        var currVal_25 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 48).ngClassUntouched;

        var currVal_26 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 48).ngClassTouched;

        var currVal_27 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 48).ngClassPristine;

        var currVal_28 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 48).ngClassDirty;

        var currVal_29 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 48).ngClassValid;

        var currVal_30 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 48).ngClassInvalid;

        var currVal_31 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 48).ngClassPending;

        _ck(_v, 41, 0, currVal_24, currVal_25, currVal_26, currVal_27, currVal_28, currVal_29, currVal_30, currVal_31);

        var currVal_38 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 56).required ? "" : null;

        var currVal_39 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 62).ngClassUntouched;

        var currVal_40 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 62).ngClassTouched;

        var currVal_41 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 62).ngClassPristine;

        var currVal_42 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 62).ngClassDirty;

        var currVal_43 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 62).ngClassValid;

        var currVal_44 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 62).ngClassInvalid;

        var currVal_45 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 62).ngClassPending;

        _ck(_v, 55, 0, currVal_38, currVal_39, currVal_40, currVal_41, currVal_42, currVal_43, currVal_44, currVal_45);

        var currVal_52 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 70).required ? "" : null;

        var currVal_53 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 76).ngClassUntouched;

        var currVal_54 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 76).ngClassTouched;

        var currVal_55 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 76).ngClassPristine;

        var currVal_56 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 76).ngClassDirty;

        var currVal_57 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 76).ngClassValid;

        var currVal_58 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 76).ngClassInvalid;

        var currVal_59 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 76).ngClassPending;

        _ck(_v, 69, 0, currVal_52, currVal_53, currVal_54, currVal_55, currVal_56, currVal_57, currVal_58, currVal_59);

        var currVal_64 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 84).required ? "" : null;

        var currVal_65 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 90).ngClassUntouched;

        var currVal_66 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 90).ngClassTouched;

        var currVal_67 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 90).ngClassPristine;

        var currVal_68 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 90).ngClassDirty;

        var currVal_69 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 90).ngClassValid;

        var currVal_70 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 90).ngClassInvalid;

        var currVal_71 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 90).ngClassPending;

        _ck(_v, 83, 0, currVal_64, currVal_65, currVal_66, currVal_67, currVal_68, currVal_69, currVal_70, currVal_71);

        var currVal_78 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 98).required ? "" : null;

        var currVal_79 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 104).ngClassUntouched;

        var currVal_80 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 104).ngClassTouched;

        var currVal_81 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 104).ngClassPristine;

        var currVal_82 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 104).ngClassDirty;

        var currVal_83 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 104).ngClassValid;

        var currVal_84 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 104).ngClassInvalid;

        var currVal_85 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 104).ngClassPending;

        _ck(_v, 97, 0, currVal_78, currVal_79, currVal_80, currVal_81, currVal_82, currVal_83, currVal_84, currVal_85);

        var currVal_92 = _co.changeLangValue(_co.updateUserForm.controls.english.value);

        _ck(_v, 124, 0, currVal_92);

        var currVal_94 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 132).ngClassUntouched;

        var currVal_95 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 132).ngClassTouched;

        var currVal_96 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 132).ngClassPristine;

        var currVal_97 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 132).ngClassDirty;

        var currVal_98 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 132).ngClassValid;

        var currVal_99 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 132).ngClassInvalid;

        var currVal_100 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 132).ngClassPending;

        _ck(_v, 127, 0, currVal_94, currVal_95, currVal_96, currVal_97, currVal_98, currVal_99, currVal_100);

        var currVal_107 = _co.changeLangValue(_co.updateUserForm.controls.spanish.value);

        _ck(_v, 142, 0, currVal_107);

        var currVal_109 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 150).ngClassUntouched;

        var currVal_110 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 150).ngClassTouched;

        var currVal_111 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 150).ngClassPristine;

        var currVal_112 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 150).ngClassDirty;

        var currVal_113 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 150).ngClassValid;

        var currVal_114 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 150).ngClassInvalid;

        var currVal_115 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 150).ngClassPending;

        _ck(_v, 145, 0, currVal_109, currVal_110, currVal_111, currVal_112, currVal_113, currVal_114, currVal_115);

        var currVal_122 = _co.changeLangValue(_co.updateUserForm.controls.french.value);

        _ck(_v, 160, 0, currVal_122);

        var currVal_124 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 168).ngClassUntouched;

        var currVal_125 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 168).ngClassTouched;

        var currVal_126 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 168).ngClassPristine;

        var currVal_127 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 168).ngClassDirty;

        var currVal_128 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 168).ngClassValid;

        var currVal_129 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 168).ngClassInvalid;

        var currVal_130 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 168).ngClassPending;

        _ck(_v, 163, 0, currVal_124, currVal_125, currVal_126, currVal_127, currVal_128, currVal_129, currVal_130);
      });
    }

    function View_FirebaseUpdateUserModal_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](0, 0, null, null, 1, "app-firebase-update-user", [], null, null, null, View_FirebaseUpdateUserModal_0, RenderType_FirebaseUpdateUserModal)), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](1, 114688, null, 0, _firebase_update_user_modal__WEBPACK_IMPORTED_MODULE_11__["FirebaseUpdateUserModal"], [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"], _firebase_crud_service__WEBPACK_IMPORTED_MODULE_12__["FirebaseCrudService"], _angular_router__WEBPACK_IMPORTED_MODULE_13__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, null);
    }

    var FirebaseUpdateUserModalNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵccf"]("app-firebase-update-user", _firebase_update_user_modal__WEBPACK_IMPORTED_MODULE_11__["FirebaseUpdateUserModal"], View_FirebaseUpdateUserModal_Host_0, {
      user: "user"
    }, {}, []);
    /***/

  },

  /***/
  "./src/app/firebase/crud/user/update/firebase-update-user.modal.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/firebase/crud/user/update/firebase-update-user.modal.ts ***!
    \*************************************************************************/

  /*! exports provided: FirebaseUpdateUserModal */

  /***/
  function srcAppFirebaseCrudUserUpdateFirebaseUpdateUserModalTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FirebaseUpdateUserModal", function () {
      return FirebaseUpdateUserModal;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var dayjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! dayjs */
    "./node_modules/dayjs/dayjs.min.js");
    /* harmony import */


    var dayjs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */


    var _validators_checkbox_checked_validator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../../validators/checkbox-checked.validator */
    "./src/app/validators/checkbox-checked.validator.ts");
    /* harmony import */


    var _firebase_user_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../firebase-user.model */
    "./src/app/firebase/crud/user/firebase-user.model.ts");
    /* harmony import */


    var _select_image_select_user_image_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../select-image/select-user-image.modal */
    "./src/app/firebase/crud/user/select-image/select-user-image.modal.ts");
    /* harmony import */


    var _firebase_crud_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../firebase-crud.service */
    "./src/app/firebase/crud/firebase-crud.service.ts");

    var FirebaseUpdateUserModal = /*#__PURE__*/function () {
      function FirebaseUpdateUserModal(modalController, alertController, firebaseCrudService, router, ngZone) {
        _classCallCheck(this, FirebaseUpdateUserModal);

        this.modalController = modalController;
        this.alertController = alertController;
        this.firebaseCrudService = firebaseCrudService;
        this.router = router;
        this.ngZone = ngZone;
        this.skills = [];
      }

      _createClass(FirebaseUpdateUserModal, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.selectedAvatar = this.user.avatar;
          this.updateUserForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.user.name, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            lastname: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.user.lastname, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.user.email, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.user.phone, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            birthdate: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](dayjs__WEBPACK_IMPORTED_MODULE_5__["unix"](this.user.birthdate).format('DD/MMMM/YYYY'), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            skills: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormArray"]([], _validators_checkbox_checked_validator__WEBPACK_IMPORTED_MODULE_6__["CheckboxCheckedValidator"].minSelectedCheckboxes(1)),
            spanish: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.user.languages.spanish),
            english: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.user.languages.english),
            french: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.user.languages.french)
          });
          this.firebaseCrudService.getSkills().subscribe(function (skills) {
            _this2.skills = skills; // create skill checkboxes

            _this2.skills.map(function (skill) {
              var userSkillsIds = [];

              if (_this2.user.skills) {
                userSkillsIds = _this2.user.skills.map(function (skillId) {
                  return skillId['id'];
                });
              } // set the control value to 'true' if the user already has this skill


              var control = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](userSkillsIds.includes(skill.id));

              _this2.updateUserForm.controls.skills.push(control);
            });
          });
        }
      }, {
        key: "changeLangValue",
        value: function changeLangValue(value) {
          switch (true) {
            case value <= 3:
              return 'Novice';

            case value > 3 && value <= 6:
              return 'Competent';

            case value > 6:
              return 'Expert';
          }
        }
      }, {
        key: "dismissModal",
        value: function dismissModal() {
          this.modalController.dismiss();
        }
      }, {
        key: "deleteUser",
        value: function deleteUser() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this3 = this;

            var alert;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.alertController.create({
                      header: 'Confirm',
                      message: 'Do you want to delete ' + this.user.name + '?',
                      buttons: [{
                        text: 'No',
                        role: 'cancel',
                        handler: function handler() {}
                      }, {
                        text: 'Yes',
                        handler: function handler() {
                          _this3.firebaseCrudService.deleteUser(_this3.user.id).then(function () {
                            _this3.dismissModal();

                            _this3.ngZone.run(function () {
                              return _this3.router.navigate(['firebase/crud/listing']);
                            }).then();
                          }, function (err) {
                            return console.log(err);
                          });
                        }
                      }]
                    });

                  case 2:
                    alert = _context2.sent;
                    _context2.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "updateUser",
        value: function updateUser() {
          var _this4 = this;

          this.user.avatar = this.selectedAvatar;
          this.user.name = this.updateUserForm.value.name;
          this.user.lastname = this.updateUserForm.value.lastname;
          this.user.birthdate = dayjs__WEBPACK_IMPORTED_MODULE_5__(this.updateUserForm.value.birthdate).unix(); // save it in timestamp

          this.user.phone = this.updateUserForm.value.phone;
          this.user.email = this.updateUserForm.value.email;
          this.user.languages.spanish = this.updateUserForm.value.spanish;
          this.user.languages.english = this.updateUserForm.value.english;
          this.user.languages.french = this.updateUserForm.value.french; // get the ids of the selected skills

          var selectedSkills = [];
          this.updateUserForm.value.skills.map(function (value, index) {
            if (value) {
              selectedSkills.push(_this4.skills[index].id);
            }
          });
          this.user.skills = selectedSkills;
          var _a = this.user,
              age = _a.age,
              userData = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_a, ["age"]); // we don't want to save the age in the DB because is something that changes over time

          this.firebaseCrudService.updateUser(userData).then(function () {
            return _this4.modalController.dismiss();
          }, function (err) {
            return console.log(err);
          });
        }
      }, {
        key: "changeUserImage",
        value: function changeUserImage() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var _this5 = this;

            var modal;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.t0 = this.modalController;
                    _context3.t1 = _select_image_select_user_image_modal__WEBPACK_IMPORTED_MODULE_8__["SelectUserImageModal"];
                    _context3.next = 4;
                    return this.modalController.getTop();

                  case 4:
                    _context3.t2 = _context3.sent;
                    _context3.t3 = {
                      component: _context3.t1,
                      swipeToClose: true,
                      presentingElement: _context3.t2
                    };
                    _context3.next = 8;
                    return _context3.t0.create.call(_context3.t0, _context3.t3);

                  case 8:
                    modal = _context3.sent;
                    modal.onDidDismiss().then(function (avatar) {
                      if (avatar.data != null) {
                        _this5.selectedAvatar = avatar.data.link;
                      }
                    });
                    _context3.next = 12;
                    return modal.present();

                  case 12:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "skillsFormArray",
        get: function get() {
          return this.updateUserForm.get('skills');
        }
      }]);

      return FirebaseUpdateUserModal;
    }();
    /***/

  },

  /***/
  "./src/app/firebase/crud/user/update/styles/firebase-update-user.modal.scss.shim.ngstyle.js":
  /*!**************************************************************************************************!*\
    !*** ./src/app/firebase/crud/user/update/styles/firebase-update-user.modal.scss.shim.ngstyle.js ***!
    \**************************************************************************************************/

  /*! exports provided: styles */

  /***/
  function srcAppFirebaseCrudUserUpdateStylesFirebaseUpdateUserModalScssShimNgstyleJs(module, __webpack_exports__, __webpack_require__) {
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


    var styles = ["[_nghost-%COMP%] {\n  --page-margin: var(--app-fair-margin);\n  --page-background: var(--app-background);\n  --page-background-shade: var(--app-background-shade);\n  --page-tags-gutter: 5px;\n}\n\n.update-user-content[_ngcontent-%COMP%] {\n  --background: var(--page-background);\n}\n\n.update-user-content[_ngcontent-%COMP%]   .select-user-image-row[_ngcontent-%COMP%] {\n  --ion-grid-column-padding: 0px;\n  padding: var(--page-margin);\n  background-color: var(--page-background-shade);\n}\n\n.update-user-content[_ngcontent-%COMP%]   .select-user-image-row[_ngcontent-%COMP%]   .user-image-col[_ngcontent-%COMP%] {\n  margin: 0px auto;\n  position: relative;\n}\n\n.update-user-content[_ngcontent-%COMP%]   .select-user-image-row[_ngcontent-%COMP%]   .user-image-col[_ngcontent-%COMP%]   .user-image[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  border: solid 3px var(--ion-color-lightest);\n}\n\n.update-user-content[_ngcontent-%COMP%]   .select-user-image-row[_ngcontent-%COMP%]   .change-image-btn[_ngcontent-%COMP%] {\n  --border-radius: 50%;\n  --padding-start: 0px;\n  --padding-end: 0px;\n  position: absolute;\n  right: 0px;\n  bottom: var(--page-margin);\n  z-index: 3;\n  width: 4ch;\n  height: 4ch;\n  margin: 0px;\n}\n\n.update-user-content[_ngcontent-%COMP%]   .select-user-image-row[_ngcontent-%COMP%]   .change-image-btn[_ngcontent-%COMP%]   .btn-icon[_ngcontent-%COMP%] {\n  font-size: 26px;\n}\n\n.update-user-content[_ngcontent-%COMP%]   .fields-section[_ngcontent-%COMP%] {\n  padding: var(--page-margin) 0px;\n  border-bottom: calc(var(--page-margin) * 2) solid var(--page-background-shade);\n}\n\n.update-user-content[_ngcontent-%COMP%]   .fields-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%] {\n  padding: 0px var(--page-margin);\n  margin-top: 0px;\n  margin-bottom: var(--page-margin);\n}\n\n.update-user-content[_ngcontent-%COMP%]   .user-details-fields[_ngcontent-%COMP%]   .inputs-list[_ngcontent-%COMP%] {\n  padding: 0px var(--page-margin);\n}\n\n.update-user-content[_ngcontent-%COMP%]   .user-details-fields[_ngcontent-%COMP%]   .input-item[_ngcontent-%COMP%] {\n  --padding-start: 0px;\n  --padding-end: 0px;\n  --inner-padding-start: 0px;\n  --inner-padding-end: 0px;\n}\n\n.update-user-content[_ngcontent-%COMP%]   .user-experience-fields[_ngcontent-%COMP%]   .checkbox-tags[_ngcontent-%COMP%] {\n  padding: 0px calc(var(--page-margin) - var(--page-tags-gutter));\n  --checkbox-tag-color: #000;\n  --checkbox-tag-background: #FFF;\n  --checkbox-tag-active-color: #FFF;\n  --checkbox-tag-active-background: #000;\n}\n\n.update-user-content[_ngcontent-%COMP%]   .user-experience-fields[_ngcontent-%COMP%]   .checkbox-tags[_ngcontent-%COMP%]   .checkbox-tag[_ngcontent-%COMP%] {\n  --padding-start: 0px;\n  --inner-padding-end: 8px;\n  --inner-padding-start: 8px;\n  --ion-item-background: var(--checkbox-tag-background);\n  --ion-item-color: var(--checkbox-tag-color);\n}\n\n.update-user-content[_ngcontent-%COMP%]   .user-experience-fields[_ngcontent-%COMP%]   .checkbox-tags[_ngcontent-%COMP%]   .checkbox-tag.rounded-tag[_ngcontent-%COMP%] {\n  --border-radius: 2.2rem;\n}\n\n.update-user-content[_ngcontent-%COMP%]   .user-experience-fields[_ngcontent-%COMP%]   .checkbox-tags[_ngcontent-%COMP%]   .checkbox-tag.item-checkbox-checked[_ngcontent-%COMP%] {\n  --ion-item-background: var(--checkbox-tag-active-background);\n  --ion-item-color: var(--checkbox-tag-active-color);\n}\n\n.update-user-content[_ngcontent-%COMP%]   .user-experience-fields[_ngcontent-%COMP%]   .checkbox-tags[_ngcontent-%COMP%]   .checkbox-tag.item-interactive-disabled[_ngcontent-%COMP%] {\n  opacity: 0.5;\n}\n\n.update-user-content[_ngcontent-%COMP%]   .user-experience-fields[_ngcontent-%COMP%]   .checkbox-tags[_ngcontent-%COMP%]   .checkbox-tag.item-interactive-disabled[_ngcontent-%COMP%]   .tag-label[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n\n.update-user-content[_ngcontent-%COMP%]   .user-experience-fields[_ngcontent-%COMP%]   .checkbox-tags[_ngcontent-%COMP%]   .checkbox-tag[_ngcontent-%COMP%]   .tag-label[_ngcontent-%COMP%] {\n  margin: 5px;\n  font-size: 14px;\n  font-weight: 500;\n  letter-spacing: 0.2px;\n  text-align: center;\n}\n\n.update-user-content[_ngcontent-%COMP%]   .user-experience-fields[_ngcontent-%COMP%]   .checkbox-tags[_ngcontent-%COMP%]   .checkbox-tag[_ngcontent-%COMP%]   ion-checkbox[_ngcontent-%COMP%] {\n  margin: 0px;\n  width: 0px;\n  --border-width: 0px;\n  height: 0px;\n  --color-checked: transparent;\n}\n\n.update-user-content[_ngcontent-%COMP%]   .user-experience-fields[_ngcontent-%COMP%]   .checkbox-tags[_ngcontent-%COMP%]   .checkbox-tag[_ngcontent-%COMP%] {\n  padding: 0px var(--page-tags-gutter);\n  margin: var(--page-tags-gutter) 0px;\n}\n\n.update-user-content[_ngcontent-%COMP%]   .user-experience-fields[_ngcontent-%COMP%]   .checkbox-tags.rounded-checkbox-tags[_ngcontent-%COMP%] {\n  background-color: var(--ion-color-lightest);\n}\n\n.update-user-content[_ngcontent-%COMP%]   .user-experience-fields[_ngcontent-%COMP%]   .checkbox-tags.rounded-checkbox-tags[_ngcontent-%COMP%]   .checkbox-tag[_ngcontent-%COMP%] {\n  --border-width: 2px;\n  --border-style: solid;\n  --border-color: var(--ion-color-medium-shade);\n  --checkbox-tag-color: var(--ion-color-medium-shade);\n  --checkbox-tag-background: var(--ion-color-lightest);\n  --checkbox-tag-active-color: var(--ion-color-lightest);\n  --checkbox-tag-active-background: var(--ion-color-darkest);\n}\n\n.update-user-content[_ngcontent-%COMP%]   .user-experience-fields[_ngcontent-%COMP%]   .checkbox-tags.rounded-checkbox-tags[_ngcontent-%COMP%]   .checkbox-tag.item-checkbox-checked[_ngcontent-%COMP%] {\n  --border-color: var(--ion-color-darkest);\n}\n\n.update-user-content[_ngcontent-%COMP%]   .user-languages-fields[_ngcontent-%COMP%] {\n  padding-bottom: 0px;\n}\n\n.update-user-content[_ngcontent-%COMP%]   .user-languages-fields[_ngcontent-%COMP%]   .range-item-row[_ngcontent-%COMP%] {\n  --ion-grid-column-padding: 0px;\n  padding-top: var(--page-margin);\n  -webkit-padding-start: var(--page-margin);\n          padding-inline-start: var(--page-margin);\n  -webkit-padding-end: var(--page-margin);\n          padding-inline-end: var(--page-margin);\n  box-shadow: inset 0 6px 3px -8px var(--ion-color-darkest);\n}\n\n.update-user-content[_ngcontent-%COMP%]   .user-languages-fields[_ngcontent-%COMP%]   .range-item-row[_ngcontent-%COMP%]   .range-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  padding-bottom: calc(var(--page-margin) / 2);\n}\n\n.update-user-content[_ngcontent-%COMP%]   .user-languages-fields[_ngcontent-%COMP%]   .range-item-row[_ngcontent-%COMP%]   .range-header[_ngcontent-%COMP%]   .range-value[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  letter-spacing: 0.2px;\n  color: var(--ion-color-medium-shade);\n}\n\n.update-user-content[_ngcontent-%COMP%]   .user-languages-fields[_ngcontent-%COMP%]   .range-item-row[_ngcontent-%COMP%]   .range-header[_ngcontent-%COMP%]   .range-label[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n  letter-spacing: 0.2px;\n  color: var(--ion-color-medium-shade);\n}\n\n.update-user-content[_ngcontent-%COMP%]   .user-languages-fields[_ngcontent-%COMP%]   .range-item-row[_ngcontent-%COMP%]   .range-control[_ngcontent-%COMP%] {\n  --ion-text-color: var(--ion-color-medium-shade);\n  padding-top: 0px;\n  padding-bottom: 0px;\n}\n\n.form-actions-wrapper[_ngcontent-%COMP%] {\n  --ion-grid-column-padding: calc(var(--page-margin) / 2);\n  padding: calc(var(--page-margin) / 2);\n}\n\n.form-actions-wrapper[_ngcontent-%COMP%]   .submit-btn[_ngcontent-%COMP%] {\n  margin: 0px;\n}\n\n.form-actions-wrapper[_ngcontent-%COMP%]   .delete-btn[_ngcontent-%COMP%] {\n  margin: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kaWRneS9Eb2N1bWVudHMvR2l0SHViL0luZmluaXR5L3NyYy9hcHAvZmlyZWJhc2UvY3J1ZC91c2VyL3VwZGF0ZS9zdHlsZXMvZmlyZWJhc2UtdXBkYXRlLXVzZXIubW9kYWwuc2NzcyIsInNyYy9hcHAvZmlyZWJhc2UvY3J1ZC91c2VyL3VwZGF0ZS9zdHlsZXMvZmlyZWJhc2UtdXBkYXRlLXVzZXIubW9kYWwuc2NzcyIsIi9Vc2Vycy9kaWRneS9Eb2N1bWVudHMvR2l0SHViL0luZmluaXR5L3NyYy90aGVtZS9taXhpbnMvaW5wdXRzL2NoZWNrYm94LXRhZy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UscUNBQUE7RUFDQSx3Q0FBQTtFQUVBLG9EQUFBO0VBQ0EsdUJBQUE7QUNGRjs7QURLQTtFQUNFLG9DQUFBO0FDRkY7O0FESUU7RUFDRSw4QkFBQTtFQUVBLDJCQUFBO0VBQ0EsOENBQUE7QUNISjs7QURLSTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7QUNITjs7QURLTTtFQUNFLGtCQUFBO0VBQ0EsMkNBQUE7QUNIUjs7QURPSTtFQUNFLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUVBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLDBCQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQ05OOztBRFFNO0VBQ0UsZUFBQTtBQ05SOztBRFdFO0VBQ0UsK0JBQUE7RUFDQSw4RUFBQTtBQ1RKOztBRFdJO0VBQ0UsK0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUNBQUE7QUNUTjs7QURjSTtFQUNFLCtCQUFBO0FDWk47O0FEZUk7RUFDRSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7RUFDQSx3QkFBQTtBQ2JOOztBRGtCSTtFQUNFLCtEQUFBO0VFeEVKLDBCQUFBO0VBQ0EsK0JBQUE7RUFDQSxpQ0FBQTtFQUNBLHNDQUFBO0FEeURGOztBQ3ZEQztFQUVDLG9CQUFBO0VBQ0Usd0JBQUE7RUFDRiwwQkFBQTtFQUNBLHFEQUFBO0VBQ0UsMkNBQUE7QUR3REo7O0FDdERJO0VBQ0QsdUJBQUE7QUR3REg7O0FDckRFO0VBQ0ksNERBQUE7RUFDQSxrREFBQTtBRHVETjs7QUNwREk7RUFDRSxZQUFBO0FEc0ROOztBQ3BETTtFQUVFLFVBQUE7QURxRFI7O0FDakRFO0VBQ0MsV0FBQTtFQUNHLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QURtRE47O0FDaERFO0VBQ0MsV0FBQTtFQUVBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFFQSw0QkFBQTtBRGdESDs7QURsQk07RUFDRSxvQ0FBQTtFQUNBLG1DQUFBO0FDb0JSOztBRGhCTTtFQUNFLDJDQUFBO0FDa0JSOztBRGhCUTtFQUNFLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSw2Q0FBQTtFQUNBLG1EQUFBO0VBQ0Esb0RBQUE7RUFDQSxzREFBQTtFQUNBLDBEQUFBO0FDa0JWOztBRGhCVTtFQUNFLHdDQUFBO0FDa0JaOztBRFhFO0VBQ0UsbUJBQUE7QUNhSjs7QURYSTtFQUNFLDhCQUFBO0VBRUEsK0JBQUE7RUFDQSx5Q0FBQTtVQUFBLHdDQUFBO0VBQ0EsdUNBQUE7VUFBQSxzQ0FBQTtFQUVBLHlEQUFBO0FDV047O0FEVE07RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSw0Q0FBQTtBQ1dSOztBRFRRO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxvQ0FBQTtBQ1dWOztBRFJRO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxvQ0FBQTtBQ1VWOztBRE5NO0VBRUUsK0NBQUE7RUFFQSxnQkFBQTtFQUNBLG1CQUFBO0FDTVI7O0FEQUE7RUFDRSx1REFBQTtFQUVBLHFDQUFBO0FDRUY7O0FEQUU7RUFDRSxXQUFBO0FDRUo7O0FEQ0U7RUFDRSxXQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9maXJlYmFzZS9jcnVkL3VzZXIvdXBkYXRlL3N0eWxlcy9maXJlYmFzZS11cGRhdGUtdXNlci5tb2RhbC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uLy4uLy4uLy4uL3RoZW1lL21peGlucy9pbnB1dHMvY2hlY2tib3gtdGFnXCI7XG5cbjpob3N0IHtcbiAgLS1wYWdlLW1hcmdpbjogdmFyKC0tYXBwLWZhaXItbWFyZ2luKTtcbiAgLS1wYWdlLWJhY2tncm91bmQ6IHZhcigtLWFwcC1iYWNrZ3JvdW5kKTtcblxuICAtLXBhZ2UtYmFja2dyb3VuZC1zaGFkZTogdmFyKC0tYXBwLWJhY2tncm91bmQtc2hhZGUpO1xuICAtLXBhZ2UtdGFncy1ndXR0ZXI6IDVweDtcbn1cblxuLnVwZGF0ZS11c2VyLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLXBhZ2UtYmFja2dyb3VuZCk7XG5cbiAgLnNlbGVjdC11c2VyLWltYWdlLXJvdyB7XG4gICAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMHB4O1xuXG4gICAgcGFkZGluZzogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBhZ2UtYmFja2dyb3VuZC1zaGFkZSk7XG5cbiAgICAudXNlci1pbWFnZS1jb2wge1xuICAgICAgbWFyZ2luOiAwcHggYXV0bztcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICAgLnVzZXItaW1hZ2Uge1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIGJvcmRlcjogc29saWQgM3B4IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmNoYW5nZS1pbWFnZS1idG4ge1xuICAgICAgLS1ib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgICAgIC0tcGFkZGluZy1lbmQ6IDBweDtcblxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgcmlnaHQ6IDBweDtcbiAgICAgIGJvdHRvbTogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAgICAgei1pbmRleDogMztcbiAgICAgIHdpZHRoOiA0Y2g7XG4gICAgICBoZWlnaHQ6IDRjaDtcbiAgICAgIG1hcmdpbjogMHB4O1xuXG4gICAgICAuYnRuLWljb24ge1xuICAgICAgICBmb250LXNpemU6IDI2cHg7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmZpZWxkcy1zZWN0aW9uIHtcbiAgICBwYWRkaW5nOiB2YXIoLS1wYWdlLW1hcmdpbikgMHB4O1xuICAgIGJvcmRlci1ib3R0b206IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pICogMikgc29saWQgdmFyKC0tcGFnZS1iYWNrZ3JvdW5kLXNoYWRlKTtcblxuICAgIC5zZWN0aW9uLWhlYWRlciB7XG4gICAgICBwYWRkaW5nOiAwcHggdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAgICAgbWFyZ2luLXRvcDogMHB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAgIH1cbiAgfVxuXG4gIC51c2VyLWRldGFpbHMtZmllbGRzIHtcbiAgICAuaW5wdXRzLWxpc3Qge1xuICAgICAgcGFkZGluZzogMHB4IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgICB9XG5cbiAgICAuaW5wdXQtaXRlbSB7XG4gICAgICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgICAgIC0tcGFkZGluZy1lbmQ6IDBweDtcbiAgICAgIC0taW5uZXItcGFkZGluZy1zdGFydDogMHB4O1xuICAgICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMHB4O1xuICAgIH1cbiAgfVxuXG4gIC51c2VyLWV4cGVyaWVuY2UtZmllbGRzIHtcbiAgICAuY2hlY2tib3gtdGFncyB7XG4gICAgICBwYWRkaW5nOiAwcHggY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLSB2YXIoLS1wYWdlLXRhZ3MtZ3V0dGVyKSk7XG5cbiAgICAgIEBpbmNsdWRlIGNoZWNrYm94LXRhZygpO1xuXG4gICAgICAuY2hlY2tib3gtdGFnIHtcbiAgICAgICAgcGFkZGluZzogMHB4IHZhcigtLXBhZ2UtdGFncy1ndXR0ZXIpO1xuICAgICAgICBtYXJnaW46IHZhcigtLXBhZ2UtdGFncy1ndXR0ZXIpIDBweDtcbiAgICAgIH1cblxuICAgICAgLy8gQWRkIGEgZGVlcGVyIHNlbGVjdG9yIHRvIG92ZXJyaWRlIGRlZmF1bHQgY29sb3JzXG4gICAgICAmLnJvdW5kZWQtY2hlY2tib3gtdGFncyB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XG5cbiAgICAgICAgLmNoZWNrYm94LXRhZyB7XG4gICAgICAgICAgLS1ib3JkZXItd2lkdGg6IDJweDtcbiAgICAgICAgICAtLWJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgICAgICAgLS1ib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGUpO1xuICAgICAgICAgIC0tY2hlY2tib3gtdGFnLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcbiAgICAgICAgICAtLWNoZWNrYm94LXRhZy1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xuICAgICAgICAgIC0tY2hlY2tib3gtdGFnLWFjdGl2ZS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcbiAgICAgICAgICAtLWNoZWNrYm94LXRhZy1hY3RpdmUtYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWRhcmtlc3QpO1xuXG4gICAgICAgICAgJi5pdGVtLWNoZWNrYm94LWNoZWNrZWQge1xuICAgICAgICAgICAgLS1ib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrZXN0KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAudXNlci1sYW5ndWFnZXMtZmllbGRzIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xuXG4gICAgLnJhbmdlLWl0ZW0tcm93IHtcbiAgICAgIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcblxuICAgICAgcGFkZGluZy10b3A6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgICAgIHBhZGRpbmctaW5saW5lLXN0YXJ0OiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gICAgICBwYWRkaW5nLWlubGluZS1lbmQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgICAgIC8vIGJveC1zaGFkb3cgYXQgdGhlIHRvcFxuICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCA2cHggM3B4IC04cHggIHZhcigtLWlvbi1jb2xvci1kYXJrZXN0KTtcblxuICAgICAgLnJhbmdlLWhlYWRlciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG5cbiAgICAgICAgLnJhbmdlLXZhbHVlIHtcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XG4gICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgLnJhbmdlLWxhYmVsIHtcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XG4gICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGUpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5yYW5nZS1jb250cm9sIHtcbiAgICAgICAgLy8gb3ZlcnJpZGUgdGhlIHBpbiBjb2xvclxuICAgICAgICAtLWlvbi10ZXh0LWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcblxuICAgICAgICBwYWRkaW5nLXRvcDogMHB4O1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4uZm9ybS1hY3Rpb25zLXdyYXBwZXIge1xuICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuXG4gIHBhZGRpbmc6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG5cbiAgLnN1Ym1pdC1idG4ge1xuICAgIG1hcmdpbjogMHB4O1xuICB9XG5cbiAgLmRlbGV0ZS1idG4ge1xuICAgIG1hcmdpbjogMHB4O1xuICB9XG59XG4iLCI6aG9zdCB7XG4gIC0tcGFnZS1tYXJnaW46IHZhcigtLWFwcC1mYWlyLW1hcmdpbik7XG4gIC0tcGFnZS1iYWNrZ3JvdW5kOiB2YXIoLS1hcHAtYmFja2dyb3VuZCk7XG4gIC0tcGFnZS1iYWNrZ3JvdW5kLXNoYWRlOiB2YXIoLS1hcHAtYmFja2dyb3VuZC1zaGFkZSk7XG4gIC0tcGFnZS10YWdzLWd1dHRlcjogNXB4O1xufVxuXG4udXBkYXRlLXVzZXItY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tcGFnZS1iYWNrZ3JvdW5kKTtcbn1cbi51cGRhdGUtdXNlci1jb250ZW50IC5zZWxlY3QtdXNlci1pbWFnZS1yb3cge1xuICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiAwcHg7XG4gIHBhZGRpbmc6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFnZS1iYWNrZ3JvdW5kLXNoYWRlKTtcbn1cbi51cGRhdGUtdXNlci1jb250ZW50IC5zZWxlY3QtdXNlci1pbWFnZS1yb3cgLnVzZXItaW1hZ2UtY29sIHtcbiAgbWFyZ2luOiAwcHggYXV0bztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnVwZGF0ZS11c2VyLWNvbnRlbnQgLnNlbGVjdC11c2VyLWltYWdlLXJvdyAudXNlci1pbWFnZS1jb2wgLnVzZXItaW1hZ2Uge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlcjogc29saWQgM3B4IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XG59XG4udXBkYXRlLXVzZXItY29udGVudCAuc2VsZWN0LXVzZXItaW1hZ2Utcm93IC5jaGFuZ2UtaW1hZ2UtYnRuIHtcbiAgLS1ib3JkZXItcmFkaXVzOiA1MCU7XG4gIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICAtLXBhZGRpbmctZW5kOiAwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDBweDtcbiAgYm90dG9tOiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIHotaW5kZXg6IDM7XG4gIHdpZHRoOiA0Y2g7XG4gIGhlaWdodDogNGNoO1xuICBtYXJnaW46IDBweDtcbn1cbi51cGRhdGUtdXNlci1jb250ZW50IC5zZWxlY3QtdXNlci1pbWFnZS1yb3cgLmNoYW5nZS1pbWFnZS1idG4gLmJ0bi1pY29uIHtcbiAgZm9udC1zaXplOiAyNnB4O1xufVxuLnVwZGF0ZS11c2VyLWNvbnRlbnQgLmZpZWxkcy1zZWN0aW9uIHtcbiAgcGFkZGluZzogdmFyKC0tcGFnZS1tYXJnaW4pIDBweDtcbiAgYm9yZGVyLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgKiAyKSBzb2xpZCB2YXIoLS1wYWdlLWJhY2tncm91bmQtc2hhZGUpO1xufVxuLnVwZGF0ZS11c2VyLWNvbnRlbnQgLmZpZWxkcy1zZWN0aW9uIC5zZWN0aW9uLWhlYWRlciB7XG4gIHBhZGRpbmc6IDBweCB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0tcGFnZS1tYXJnaW4pO1xufVxuLnVwZGF0ZS11c2VyLWNvbnRlbnQgLnVzZXItZGV0YWlscy1maWVsZHMgLmlucHV0cy1saXN0IHtcbiAgcGFkZGluZzogMHB4IHZhcigtLXBhZ2UtbWFyZ2luKTtcbn1cbi51cGRhdGUtdXNlci1jb250ZW50IC51c2VyLWRldGFpbHMtZmllbGRzIC5pbnB1dC1pdGVtIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gIC0tcGFkZGluZy1lbmQ6IDBweDtcbiAgLS1pbm5lci1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDBweDtcbn1cbi51cGRhdGUtdXNlci1jb250ZW50IC51c2VyLWV4cGVyaWVuY2UtZmllbGRzIC5jaGVja2JveC10YWdzIHtcbiAgcGFkZGluZzogMHB4IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC0gdmFyKC0tcGFnZS10YWdzLWd1dHRlcikpO1xuICAtLWNoZWNrYm94LXRhZy1jb2xvcjogIzAwMDtcbiAgLS1jaGVja2JveC10YWctYmFja2dyb3VuZDogI0ZGRjtcbiAgLS1jaGVja2JveC10YWctYWN0aXZlLWNvbG9yOiAjRkZGO1xuICAtLWNoZWNrYm94LXRhZy1hY3RpdmUtYmFja2dyb3VuZDogIzAwMDtcbn1cbi51cGRhdGUtdXNlci1jb250ZW50IC51c2VyLWV4cGVyaWVuY2UtZmllbGRzIC5jaGVja2JveC10YWdzIC5jaGVja2JveC10YWcge1xuICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgLS1pbm5lci1wYWRkaW5nLWVuZDogOHB4O1xuICAtLWlubmVyLXBhZGRpbmctc3RhcnQ6IDhweDtcbiAgLS1pb24taXRlbS1iYWNrZ3JvdW5kOiB2YXIoLS1jaGVja2JveC10YWctYmFja2dyb3VuZCk7XG4gIC0taW9uLWl0ZW0tY29sb3I6IHZhcigtLWNoZWNrYm94LXRhZy1jb2xvcik7XG59XG4udXBkYXRlLXVzZXItY29udGVudCAudXNlci1leHBlcmllbmNlLWZpZWxkcyAuY2hlY2tib3gtdGFncyAuY2hlY2tib3gtdGFnLnJvdW5kZWQtdGFnIHtcbiAgLS1ib3JkZXItcmFkaXVzOiAyLjJyZW07XG59XG4udXBkYXRlLXVzZXItY29udGVudCAudXNlci1leHBlcmllbmNlLWZpZWxkcyAuY2hlY2tib3gtdGFncyAuY2hlY2tib3gtdGFnLml0ZW0tY2hlY2tib3gtY2hlY2tlZCB7XG4gIC0taW9uLWl0ZW0tYmFja2dyb3VuZDogdmFyKC0tY2hlY2tib3gtdGFnLWFjdGl2ZS1iYWNrZ3JvdW5kKTtcbiAgLS1pb24taXRlbS1jb2xvcjogdmFyKC0tY2hlY2tib3gtdGFnLWFjdGl2ZS1jb2xvcik7XG59XG4udXBkYXRlLXVzZXItY29udGVudCAudXNlci1leHBlcmllbmNlLWZpZWxkcyAuY2hlY2tib3gtdGFncyAuY2hlY2tib3gtdGFnLml0ZW0taW50ZXJhY3RpdmUtZGlzYWJsZWQge1xuICBvcGFjaXR5OiAwLjU7XG59XG4udXBkYXRlLXVzZXItY29udGVudCAudXNlci1leHBlcmllbmNlLWZpZWxkcyAuY2hlY2tib3gtdGFncyAuY2hlY2tib3gtdGFnLml0ZW0taW50ZXJhY3RpdmUtZGlzYWJsZWQgLnRhZy1sYWJlbCB7XG4gIG9wYWNpdHk6IDE7XG59XG4udXBkYXRlLXVzZXItY29udGVudCAudXNlci1leHBlcmllbmNlLWZpZWxkcyAuY2hlY2tib3gtdGFncyAuY2hlY2tib3gtdGFnIC50YWctbGFiZWwge1xuICBtYXJnaW46IDVweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi51cGRhdGUtdXNlci1jb250ZW50IC51c2VyLWV4cGVyaWVuY2UtZmllbGRzIC5jaGVja2JveC10YWdzIC5jaGVja2JveC10YWcgaW9uLWNoZWNrYm94IHtcbiAgbWFyZ2luOiAwcHg7XG4gIHdpZHRoOiAwcHg7XG4gIC0tYm9yZGVyLXdpZHRoOiAwcHg7XG4gIGhlaWdodDogMHB4O1xuICAtLWNvbG9yLWNoZWNrZWQ6IHRyYW5zcGFyZW50O1xufVxuLnVwZGF0ZS11c2VyLWNvbnRlbnQgLnVzZXItZXhwZXJpZW5jZS1maWVsZHMgLmNoZWNrYm94LXRhZ3MgLmNoZWNrYm94LXRhZyB7XG4gIHBhZGRpbmc6IDBweCB2YXIoLS1wYWdlLXRhZ3MtZ3V0dGVyKTtcbiAgbWFyZ2luOiB2YXIoLS1wYWdlLXRhZ3MtZ3V0dGVyKSAwcHg7XG59XG4udXBkYXRlLXVzZXItY29udGVudCAudXNlci1leHBlcmllbmNlLWZpZWxkcyAuY2hlY2tib3gtdGFncy5yb3VuZGVkLWNoZWNrYm94LXRhZ3Mge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xufVxuLnVwZGF0ZS11c2VyLWNvbnRlbnQgLnVzZXItZXhwZXJpZW5jZS1maWVsZHMgLmNoZWNrYm94LXRhZ3Mucm91bmRlZC1jaGVja2JveC10YWdzIC5jaGVja2JveC10YWcge1xuICAtLWJvcmRlci13aWR0aDogMnB4O1xuICAtLWJvcmRlci1zdHlsZTogc29saWQ7XG4gIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcbiAgLS1jaGVja2JveC10YWctY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGUpO1xuICAtLWNoZWNrYm94LXRhZy1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xuICAtLWNoZWNrYm94LXRhZy1hY3RpdmUtY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XG4gIC0tY2hlY2tib3gtdGFnLWFjdGl2ZS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItZGFya2VzdCk7XG59XG4udXBkYXRlLXVzZXItY29udGVudCAudXNlci1leHBlcmllbmNlLWZpZWxkcyAuY2hlY2tib3gtdGFncy5yb3VuZGVkLWNoZWNrYm94LXRhZ3MgLmNoZWNrYm94LXRhZy5pdGVtLWNoZWNrYm94LWNoZWNrZWQge1xuICAtLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmtlc3QpO1xufVxuLnVwZGF0ZS11c2VyLWNvbnRlbnQgLnVzZXItbGFuZ3VhZ2VzLWZpZWxkcyB7XG4gIHBhZGRpbmctYm90dG9tOiAwcHg7XG59XG4udXBkYXRlLXVzZXItY29udGVudCAudXNlci1sYW5ndWFnZXMtZmllbGRzIC5yYW5nZS1pdGVtLXJvdyB7XG4gIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcbiAgcGFkZGluZy10b3A6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgcGFkZGluZy1pbmxpbmUtZW5kOiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgNnB4IDNweCAtOHB4IHZhcigtLWlvbi1jb2xvci1kYXJrZXN0KTtcbn1cbi51cGRhdGUtdXNlci1jb250ZW50IC51c2VyLWxhbmd1YWdlcy1maWVsZHMgLnJhbmdlLWl0ZW0tcm93IC5yYW5nZS1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmctYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xufVxuLnVwZGF0ZS11c2VyLWNvbnRlbnQgLnVzZXItbGFuZ3VhZ2VzLWZpZWxkcyAucmFuZ2UtaXRlbS1yb3cgLnJhbmdlLWhlYWRlciAucmFuZ2UtdmFsdWUge1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjJweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGUpO1xufVxuLnVwZGF0ZS11c2VyLWNvbnRlbnQgLnVzZXItbGFuZ3VhZ2VzLWZpZWxkcyAucmFuZ2UtaXRlbS1yb3cgLnJhbmdlLWhlYWRlciAucmFuZ2UtbGFiZWwge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjJweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGUpO1xufVxuLnVwZGF0ZS11c2VyLWNvbnRlbnQgLnVzZXItbGFuZ3VhZ2VzLWZpZWxkcyAucmFuZ2UtaXRlbS1yb3cgLnJhbmdlLWNvbnRyb2wge1xuICAtLWlvbi10ZXh0LWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcbiAgcGFkZGluZy10b3A6IDBweDtcbiAgcGFkZGluZy1ib3R0b206IDBweDtcbn1cblxuLmZvcm0tYWN0aW9ucy13cmFwcGVyIHtcbiAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbiAgcGFkZGluZzogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbn1cbi5mb3JtLWFjdGlvbnMtd3JhcHBlciAuc3VibWl0LWJ0biB7XG4gIG1hcmdpbjogMHB4O1xufVxuLmZvcm0tYWN0aW9ucy13cmFwcGVyIC5kZWxldGUtYnRuIHtcbiAgbWFyZ2luOiAwcHg7XG59IiwiQG1peGluIGNoZWNrYm94LXRhZygpIHtcbiAgLy8gRGVmYXVsdCB2YWx1ZXNcbiAgLS1jaGVja2JveC10YWctY29sb3I6ICMwMDA7XG4gIC0tY2hlY2tib3gtdGFnLWJhY2tncm91bmQ6ICNGRkY7XG4gIC0tY2hlY2tib3gtdGFnLWFjdGl2ZS1jb2xvcjogI0ZGRjtcbiAgLS1jaGVja2JveC10YWctYWN0aXZlLWJhY2tncm91bmQ6ICMwMDA7XG5cblx0LmNoZWNrYm94LXRhZyB7XG4gICAgLy8gUmVzZXQgdmFsdWVzIGZyb20gSW9uaWMgKGlvbi1pdGVtKSBzdHlsZXNcblx0XHQtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgICAtLWlubmVyLXBhZGRpbmctZW5kOiA4cHg7XG5cdFx0LS1pbm5lci1wYWRkaW5nLXN0YXJ0OiA4cHg7XG5cdFx0LS1pb24taXRlbS1iYWNrZ3JvdW5kOiB2YXIoLS1jaGVja2JveC10YWctYmFja2dyb3VuZCk7XG4gICAgLS1pb24taXRlbS1jb2xvcjogdmFyKC0tY2hlY2tib3gtdGFnLWNvbG9yKTtcblxuICAgICYucm91bmRlZC10YWcge1xuXHRcdFx0LS1ib3JkZXItcmFkaXVzOiAyLjJyZW07XG5cdFx0fVxuXG5cdFx0Ji5pdGVtLWNoZWNrYm94LWNoZWNrZWQge1xuICAgICAgLS1pb24taXRlbS1iYWNrZ3JvdW5kOiB2YXIoLS1jaGVja2JveC10YWctYWN0aXZlLWJhY2tncm91bmQpO1xuICAgICAgLS1pb24taXRlbS1jb2xvcjogdmFyKC0tY2hlY2tib3gtdGFnLWFjdGl2ZS1jb2xvcik7XG5cdFx0fVxuXG4gICAgJi5pdGVtLWludGVyYWN0aXZlLWRpc2FibGVkIHtcbiAgICAgIG9wYWNpdHk6IDAuNTtcblxuICAgICAgLnRhZy1sYWJlbCB7XG4gICAgICAgIC8vIE92ZXJyaWRlIElvbmljIGRlZmF1bHQgc3R5bGVcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgIH1cbiAgICB9XG5cblx0XHQudGFnLWxhYmVsIHtcblx0XHRcdG1hcmdpbjogNXB4O1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgIGxldHRlci1zcGFjaW5nOiAwLjJweDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHR9XG5cblx0XHRpb24tY2hlY2tib3gge1xuXHRcdFx0bWFyZ2luOiAwcHg7XG5cdFx0XHQvLyBUbyBoaWRlIHRoZSAuY2hlY2tib3gtaWNvblxuXHRcdFx0d2lkdGg6IDBweDtcblx0XHRcdC0tYm9yZGVyLXdpZHRoOiAwcHg7XG5cdFx0XHRoZWlnaHQ6IDBweDtcblx0XHRcdC8vIFdlIGNhbnQgc2V0IHdpZHRoIGFuZCBoZWlnaHQgZm9yIC5jaGVja2JveC1pY29uIC5jaGVja2JveC1pbm5lciwgc28gbGV0cyBoaWRlIGl0IGNoYW5naW5nIGl0cyBjb2xvclxuXHRcdFx0LS1jb2xvci1jaGVja2VkOiB0cmFuc3BhcmVudDtcblx0XHR9XG5cdH1cbn1cbiJdfQ== */"];
    /***/
  },

  /***/
  "./src/app/firebase/crud/user/update/styles/firebase-update-user.shell.scss.shim.ngstyle.js":
  /*!**************************************************************************************************!*\
    !*** ./src/app/firebase/crud/user/update/styles/firebase-update-user.shell.scss.shim.ngstyle.js ***!
    \**************************************************************************************************/

  /*! exports provided: styles */

  /***/
  function srcAppFirebaseCrudUserUpdateStylesFirebaseUpdateUserShellScssShimNgstyleJs(module, __webpack_exports__, __webpack_require__) {
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


    var styles = ["app-image-shell.user-image[_ngcontent-%COMP%] {\n  --image-shell-border-radius: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kaWRneS9Eb2N1bWVudHMvR2l0SHViL0luZmluaXR5L3NyYy9hcHAvZmlyZWJhc2UvY3J1ZC91c2VyL3VwZGF0ZS9zdHlsZXMvZmlyZWJhc2UtdXBkYXRlLXVzZXIuc2hlbGwuc2NzcyIsInNyYy9hcHAvZmlyZWJhc2UvY3J1ZC91c2VyL3VwZGF0ZS9zdHlsZXMvZmlyZWJhc2UtdXBkYXRlLXVzZXIuc2hlbGwuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdDQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9maXJlYmFzZS9jcnVkL3VzZXIvdXBkYXRlL3N0eWxlcy9maXJlYmFzZS11cGRhdGUtdXNlci5zaGVsbC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYXBwLWltYWdlLXNoZWxsLnVzZXItaW1hZ2Uge1xuICAtLWltYWdlLXNoZWxsLWJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbiIsImFwcC1pbWFnZS1zaGVsbC51c2VyLWltYWdlIHtcbiAgLS1pbWFnZS1zaGVsbC1ib3JkZXItcmFkaXVzOiA1MCU7XG59Il19 */"];
    /***/
  },

  /***/
  "./src/app/validators/checkbox-checked.validator.ts":
  /*!**********************************************************!*\
    !*** ./src/app/validators/checkbox-checked.validator.ts ***!
    \**********************************************************/

  /*! exports provided: CheckboxCheckedValidator */

  /***/
  function srcAppValidatorsCheckboxCheckedValidatorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CheckboxCheckedValidator", function () {
      return CheckboxCheckedValidator;
    });

    var CheckboxCheckedValidator = /*#__PURE__*/function () {
      function CheckboxCheckedValidator() {
        _classCallCheck(this, CheckboxCheckedValidator);
      }

      _createClass(CheckboxCheckedValidator, null, [{
        key: "minSelectedCheckboxes",
        value: function minSelectedCheckboxes(min) {
          var validator = function validator(formArray) {
            var totalSelected = formArray.controls // get a list of checkbox values (boolean)
            .map(function (control) {
              return control.value;
            }) // total up the number of checked checkboxes
            .reduce(function (prev, next) {
              return next ? prev + next : prev;
            }, 0); // if the total is not greater than the minimum, return the error message

            return totalSelected >= min ? null : {
              required: true
            };
          };

          return validator;
        }
      }]);

      return CheckboxCheckedValidator;
    }();
    /***/

  }
}]);
//# sourceMappingURL=user-firebase-user-details-module-ngfactory-es5.js.map