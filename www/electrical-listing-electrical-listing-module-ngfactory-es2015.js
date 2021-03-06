(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["electrical-listing-electrical-listing-module-ngfactory"],{

/***/ "+7Tg":
/*!***************************************************************!*\
  !*** ./src/app/electrical/listing/electrical-listing.page.ts ***!
  \***************************************************************/
/*! exports provided: ElectricalListingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElectricalListingPage", function() { return ElectricalListingPage; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _utils_resolver_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/resolver-helper */ "evT8");
/* harmony import */ var _electrical_listing_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./electrical-listing.model */ "hQLp");



class ElectricalListingPage {
    constructor(route) {
        this.route = route;
    }
    get isShell() {
        return (this.listing && this.listing.isShell) ? true : false;
    }
    ngOnInit() {
        // On init, the route subscription is the active subscription
        this.subscriptions = this.route.data
            .subscribe((resolvedRouteData) => {
            // Route subscription resolved, now the active subscription is the Observable extracted from the resolved route data
            this.subscriptions = _utils_resolver_helper__WEBPACK_IMPORTED_MODULE_1__["ResolverHelper"].extractData(resolvedRouteData.data, _electrical_listing_model__WEBPACK_IMPORTED_MODULE_2__["ElectricalListingModel"])
                .subscribe((state) => {
                this.listing = state;
            }, (error) => { });
        }, (error) => { });
    }
    // NOTE: Ionic only calls ngOnDestroy if the page was popped (ex: when navigating back)
    // Since ngOnDestroy might not fire when you navigate from the current page, use ionViewWillLeave to cleanup Subscriptions
    ionViewWillLeave() {
        // console.log('TravelListingPage [ionViewWillLeave]');
        this.subscriptions.unsubscribe();
    }
}


/***/ }),

/***/ "GBPn":
/*!*************************************************************************!*\
  !*** ./src/app/electrical/listing/electrical-listing.page.ngfactory.js ***!
  \*************************************************************************/
/*! exports provided: RenderType_ElectricalListingPage, View_ElectricalListingPage_0, View_ElectricalListingPage_Host_0, ElectricalListingPageNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_ElectricalListingPage", function() { return RenderType_ElectricalListingPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ElectricalListingPage_0", function() { return View_ElectricalListingPage_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ElectricalListingPage_Host_0", function() { return View_ElectricalListingPage_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElectricalListingPageNgFactory", function() { return ElectricalListingPageNgFactory; });
/* harmony import */ var _styles_electrical_listing_page_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/electrical-listing.page.scss.shim.ngstyle */ "TJbQ");
/* harmony import */ var _styles_electrical_listing_shell_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/electrical-listing.shell.scss.shim.ngstyle */ "ajUR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/@ionic/angular/ionic-angular.ngfactory */ "MKJQ");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "sZkV");
/* harmony import */ var _shell_image_shell_image_shell_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shell/image-shell/image-shell.component.ngfactory */ "6LEC");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _shell_image_shell_image_shell_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shell/image-shell/image-shell.component */ "2gss");
/* harmony import */ var _shell_aspect_ratio_aspect_ratio_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shell/aspect-ratio/aspect-ratio.component.ngfactory */ "M4wD");
/* harmony import */ var _shell_aspect_ratio_aspect_ratio_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shell/aspect-ratio/aspect-ratio.component */ "B7gC");
/* harmony import */ var _shell_text_shell_text_shell_component_ngfactory__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../shell/text-shell/text-shell.component.ngfactory */ "TAV1");
/* harmony import */ var _shell_text_shell_text_shell_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../shell/text-shell/text-shell.component */ "zK/y");
/* harmony import */ var _electrical_listing_page__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./electrical-listing.page */ "+7Tg");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
 * tslint:disable
 */ 














var styles_ElectricalListingPage = [_styles_electrical_listing_page_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"], _styles_electrical_listing_shell_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_1__["styles"]];
var RenderType_ElectricalListingPage = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵcrt"]({ encapsulation: 0, styles: styles_ElectricalListingPage, data: {} });

function View_ElectricalListingPage_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](0, 0, null, null, 25, "div", [["class", "listing-item"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](1, 0, null, null, 24, "ion-row", [["class", "image-row"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonRow_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonRow"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](2, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonRow"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](3, 0, null, 0, 22, "ion-col", [["size", "12"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonCol_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonCol"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](4, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCol"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], { size: [0, "size"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](5, 0, null, 0, 20, "app-image-shell", [["class", "add-overlay item-image"]], [[2, "img-loaded", null], [4, "backgroundImage", null], [1, "display", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 6).onClick() !== false);
        ad = (pd_0 && ad);
    } if (("click" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 8).onClick($event) !== false);
        ad = (pd_1 && ad);
    } return ad; }, _shell_image_shell_image_shell_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_ImageShellComponent_0"], _shell_image_shell_image_shell_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_ImageShellComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](6, 16384, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLink"], [_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵpad"](7, 2), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](8, 737280, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["RouterLinkDelegate"], [_angular_common__WEBPACK_IMPORTED_MODULE_7__["LocationStrategy"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], [2, _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLink"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](9, 49152, null, 0, _shell_image_shell_image_shell_component__WEBPACK_IMPORTED_MODULE_8__["ImageShellComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["PLATFORM_ID"]], { display: [0, "display"], src: [1, "src"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](10, 0, null, 0, 15, "app-aspect-ratio", [], [[4, "padding", null]], null, null, _shell_aspect_ratio_aspect_ratio_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__["View_AspectRatioComponent_0"], _shell_aspect_ratio_aspect_ratio_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__["RenderType_AspectRatioComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](11, 49152, null, 0, _shell_aspect_ratio_aspect_ratio_component__WEBPACK_IMPORTED_MODULE_10__["AspectRatioComponent"], [], { ratio: [0, "ratio"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵpod"](12, { w: 0, h: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](13, 0, null, 0, 12, "div", [["class", "content-inside-item-image"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](14, 0, null, null, 5, "div", [["class", "item-icon"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](15, 0, null, null, 4, "app-aspect-ratio", [], [[4, "padding", null]], null, null, _shell_aspect_ratio_aspect_ratio_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__["View_AspectRatioComponent_0"], _shell_aspect_ratio_aspect_ratio_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__["RenderType_AspectRatioComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](16, 49152, null, 0, _shell_aspect_ratio_aspect_ratio_component__WEBPACK_IMPORTED_MODULE_10__["AspectRatioComponent"], [], { ratio: [0, "ratio"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵpod"](17, { w: 0, h: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](18, 0, null, 0, 1, "app-image-shell", [["class", "icon-image"]], [[2, "img-loaded", null], [4, "backgroundImage", null], [1, "display", 0]], null, null, _shell_image_shell_image_shell_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_ImageShellComponent_0"], _shell_image_shell_image_shell_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_ImageShellComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](19, 49152, null, 0, _shell_image_shell_image_shell_component__WEBPACK_IMPORTED_MODULE_8__["ImageShellComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["PLATFORM_ID"]], { src: [0, "src"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](20, 0, null, null, 5, "div", [["class", "item-cta"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](21, 0, null, null, 2, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](22, 0, null, null, 1, "app-text-shell", [["animation", "bouncing"]], [[2, "text-loaded", null]], null, null, _shell_text_shell_text_shell_component_ngfactory__WEBPACK_IMPORTED_MODULE_11__["View_TextShellComponent_0"], _shell_text_shell_text_shell_component_ngfactory__WEBPACK_IMPORTED_MODULE_11__["RenderType_TextShellComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](23, 49152, null, 0, _shell_text_shell_text_shell_component__WEBPACK_IMPORTED_MODULE_12__["TextShellComponent"], [], { data: [0, "data"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](24, 0, null, null, 1, "ion-icon", [["class", "cta-icon"], ["name", "arrow-forward"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonIcon_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](25, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], { name: [0, "name"] }, null)], function (_ck, _v) { var currVal_0 = "12"; _ck(_v, 4, 0, currVal_0); var currVal_4 = _ck(_v, 7, 0, "/app/categories/electrical/", _v.context.$implicit.slug); _ck(_v, 6, 0, currVal_4); _ck(_v, 8, 0); var currVal_5 = "cover"; var currVal_6 = _v.context.$implicit.image; _ck(_v, 9, 0, currVal_5, currVal_6); var currVal_8 = _ck(_v, 12, 0, 3, 2); _ck(_v, 11, 0, currVal_8); var currVal_10 = _ck(_v, 17, 0, 1, 1); _ck(_v, 16, 0, currVal_10); var currVal_14 = _v.context.$implicit.icon; _ck(_v, 19, 0, currVal_14); var currVal_16 = ((((_v.context.$implicit == null) ? null : _v.context.$implicit.name) && ((_v.context.$implicit == null) ? null : _v.context.$implicit.category)) ? ((_v.context.$implicit.name + " - ") + _v.context.$implicit.category) : _v.context.$implicit.name); _ck(_v, 23, 0, currVal_16); var currVal_17 = "arrow-forward"; _ck(_v, 25, 0, currVal_17); }, function (_ck, _v) { var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 9).imageLoaded; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 9).backgroundImage; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 9).display; _ck(_v, 5, 0, currVal_1, currVal_2, currVal_3); var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 11).ratioPadding; _ck(_v, 10, 0, currVal_7); var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 16).ratioPadding; _ck(_v, 15, 0, currVal_9); var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 19).imageLoaded; var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 19).backgroundImage; var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 19).display; _ck(_v, 18, 0, currVal_11, currVal_12, currVal_13); var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 23).textLoaded; _ck(_v, 22, 0, currVal_15); }); }
function View_ElectricalListingPage_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](0, 0, null, null, 2, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵand"](16777216, null, null, 1, null, View_ElectricalListingPage_2)), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](2, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵand"](0, null, null, 0))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.listing.items; _ck(_v, 2, 0, currVal_0); }, null); }
function View_ElectricalListingPage_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](0, 0, null, null, 11, "ion-header", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonHeader_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonHeader"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](1, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonHeader"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](2, 0, null, 0, 9, "ion-toolbar", [["color", "primary"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonToolbar_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonToolbar"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](3, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonToolbar"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], { color: [0, "color"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](4, 0, null, 0, 4, "ion-buttons", [["slot", "start"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonButtons_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonButtons"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](5, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonButtons"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](6, 0, null, 0, 2, "ion-back-button", [["defaultHref", "app/categories"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 8).onClick($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonBackButton_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonBackButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](7, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonBackButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], { defaultHref: [0, "defaultHref"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](8, 16384, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonBackButtonDelegate"], [[2, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonRouterOutlet"]], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Config"]], { defaultHref: [0, "defaultHref"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](9, 0, null, 0, 2, "ion-title", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonTitle_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonTitle"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](10, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonTitle"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, 0, ["Electrical"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](12, 0, null, null, 3, "ion-content", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonContent_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonContent"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](13, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonContent"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵand"](16777216, null, 0, 1, null, View_ElectricalListingPage_1)), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](15, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = "primary"; _ck(_v, 3, 0, currVal_0); var currVal_1 = "app/categories"; _ck(_v, 7, 0, currVal_1); var currVal_2 = "app/categories"; _ck(_v, 8, 0, currVal_2); var currVal_3 = ((_co.listing == null) ? null : _co.listing.items); _ck(_v, 15, 0, currVal_3); }, null); }
function View_ElectricalListingPage_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](0, 0, null, null, 1, "app-electrical-listing", [], [[2, "is-shell", null]], null, null, View_ElectricalListingPage_0, RenderType_ElectricalListingPage)), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](1, 114688, null, 0, _electrical_listing_page__WEBPACK_IMPORTED_MODULE_13__["ElectricalListingPage"], [_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 1).isShell; _ck(_v, 0, 0, currVal_0); }); }
var ElectricalListingPageNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵccf"]("app-electrical-listing", _electrical_listing_page__WEBPACK_IMPORTED_MODULE_13__["ElectricalListingPage"], View_ElectricalListingPage_Host_0, {}, {}, []);



/***/ }),

/***/ "TJbQ":
/*!****************************************************************************************!*\
  !*** ./src/app/electrical/listing/styles/electrical-listing.page.scss.shim.ngstyle.js ***!
  \****************************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
 * tslint:disable
 */ 
var styles = ["[_nghost-%COMP%] {\n  --page-margin: var(--app-fair-margin);\n  --page-background: var(--app-background);\n  --page-color: #ebbb00;\n}\n\n.listing-item[_ngcontent-%COMP%] {\n  padding: 0px 0px var(--page-margin);\n  background-color: var(--page-background);\n  border-bottom: calc(var(--page-margin) / 2) solid var(--page-color);\n}\n\n.listing-item[_ngcontent-%COMP%]   .image-row[_ngcontent-%COMP%] {\n  --ion-grid-column-padding: 0px;\n}\n\n.listing-item[_ngcontent-%COMP%]   .image-row[_ngcontent-%COMP%]   .item-image[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.listing-item[_ngcontent-%COMP%]   .image-row[_ngcontent-%COMP%]   .item-image[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\n.listing-item[_ngcontent-%COMP%]   .image-row[_ngcontent-%COMP%]   .content-inside-item-image[_ngcontent-%COMP%] {\n  padding: 0px 12%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n}\n\n.listing-item[_ngcontent-%COMP%]   .image-row[_ngcontent-%COMP%]   .content-inside-item-image[_ngcontent-%COMP%]   .item-icon[_ngcontent-%COMP%] {\n  width: 54px;\n  align-self: center;\n  margin-bottom: 24px;\n}\n\n.listing-item[_ngcontent-%COMP%]   .image-row[_ngcontent-%COMP%]   .content-inside-item-image[_ngcontent-%COMP%]   .item-cta[_ngcontent-%COMP%] {\n  margin: 0px auto;\n  padding: calc(var(--page-margin) / 2) calc(var(--page-margin));\n  text-transform: uppercase;\n  font-size: 20px;\n  font-weight: 700;\n  text-align: center;\n  color: var(--ion-color-light);\n  display: flex;\n  align-items: center;\n  background-color: var(--page-color);\n  border-radius: var(--app-fair-radius);\n}\n\n.listing-item[_ngcontent-%COMP%]   .image-row[_ngcontent-%COMP%]   .content-inside-item-image[_ngcontent-%COMP%]   .item-cta[_ngcontent-%COMP%]   .cta-icon[_ngcontent-%COMP%] {\n  font-size: 26px;\n  margin-left: calc(var(--page-margin) / 2);\n}\n\n.listing-item[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%] {\n  --ion-grid-column-padding: 0px;\n  padding: var(--page-margin);\n  padding-bottom: calc(var(--page-margin) / 2);\n}\n\n.listing-item[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]   .main-info-col[_ngcontent-%COMP%] {\n  padding-right: calc(var(--page-margin) / 2);\n}\n\n.listing-item[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]   .item-name[_ngcontent-%COMP%] {\n  margin: 0px 0px var(--page-margin);\n  text-transform: capitalize;\n  font-size: 16px;\n}\n\n.listing-item[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]   .item-name[_ngcontent-%COMP%]   .name-anchor[_ngcontent-%COMP%] {\n  color: var(--ion-color-dark);\n  display: block;\n  text-decoration: none;\n}\n\n.listing-item[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]   .item-description[_ngcontent-%COMP%] {\n  margin: 0px 0px calc(var(--page-margin) / 2);\n  color: var(--ion-color-dark-shade);\n  font-size: 14px;\n  line-height: 1.3;\n}\n\n.listing-item[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]   .item-address[_ngcontent-%COMP%] {\n  margin: 0px;\n  color: var(--ion-color-dark-tint);\n  font-size: 12px;\n}\n\n.listing-item[_ngcontent-%COMP%]   .stats-row[_ngcontent-%COMP%] {\n  --ion-grid-column-padding: 0px;\n  padding: 0px var(--page-margin);\n  justify-content: flex-end;\n}\n\n.listing-item[_ngcontent-%COMP%]   .stats-row[_ngcontent-%COMP%]   .stats-icon[_ngcontent-%COMP%] {\n  font-size: 24px;\n}\n\n.listing-item[_ngcontent-%COMP%]   .stats-row[_ngcontent-%COMP%]   .item-rating[_ngcontent-%COMP%] {\n  display: inline-flex;\n  text-align: center;\n  justify-content: flex-end;\n  margin-right: 10px;\n}\n\n.listing-item[_ngcontent-%COMP%]   .stats-row[_ngcontent-%COMP%]   .item-rating[_ngcontent-%COMP%]   .rating-value[_ngcontent-%COMP%] {\n  font-size: 16px;\n  margin-right: 5px;\n  margin: auto;\n}\n\n.listing-item[_ngcontent-%COMP%]   .stats-row[_ngcontent-%COMP%]   .item-reviews[_ngcontent-%COMP%] {\n  display: inline-flex;\n  text-align: center;\n  justify-content: flex-end;\n}\n\n.listing-item[_ngcontent-%COMP%]   .stats-row[_ngcontent-%COMP%]   .item-reviews[_ngcontent-%COMP%]   .reviews-count[_ngcontent-%COMP%] {\n  font-size: 16px;\n  margin-right: 5px;\n  margin: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWxlY3RyaWNhbC9saXN0aW5nL3N0eWxlcy9lbGVjdHJpY2FsLWxpc3RpbmcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UscUNBQUE7RUFDQSx3Q0FBQTtFQUVBLHFCQUFBO0FBRkY7O0FBTUE7RUFDRSxtQ0FBQTtFQUNBLHdDQUFBO0VBQ0EsbUVBQUE7QUFIRjs7QUFLRTtFQUNFLDhCQUFBO0FBSEo7O0FBS0k7RUFDRSxlQUFBO0FBSE47O0FBS007RUFDRSxhQUFBO0FBSFI7O0FBT0k7RUFDRSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtBQUxOOztBQU9NO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFMUjs7QUFRTTtFQUNFLGdCQUFBO0VBQ0EsOERBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsNkJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQ0FBQTtFQUNBLHFDQUFBO0FBTlI7O0FBUVE7RUFDRSxlQUFBO0VBQ0EseUNBQUE7QUFOVjs7QUFZRTtFQUNFLDhCQUFBO0VBRUEsMkJBQUE7RUFDQSw0Q0FBQTtBQVhKOztBQWFJO0VBQ0UsMkNBQUE7QUFYTjs7QUFjSTtFQUNFLGtDQUFBO0VBQ0EsMEJBQUE7RUFDQSxlQUFBO0FBWk47O0FBY007RUFDRSw0QkFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtBQVpSOztBQWdCSTtFQUNFLDRDQUFBO0VBQ0Esa0NBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFkTjs7QUFpQkk7RUFDRSxXQUFBO0VBQ0EsaUNBQUE7RUFDQSxlQUFBO0FBZk47O0FBbUJFO0VBQ0UsOEJBQUE7RUFFQSwrQkFBQTtFQUNBLHlCQUFBO0FBbEJKOztBQW9CSTtFQUNFLGVBQUE7QUFsQk47O0FBcUJJO0VBQ0Usb0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUFuQk47O0FBcUJNO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQW5CUjs7QUF1Qkk7RUFDRSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUFyQk47O0FBdUJNO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQXJCUiIsImZpbGUiOiJzcmMvYXBwL2VsZWN0cmljYWwvbGlzdGluZy9zdHlsZXMvZWxlY3RyaWNhbC1saXN0aW5nLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEN1c3RvbSB2YXJpYWJsZXNcbi8vIE5vdGU6ICBUaGVzZSBvbmVzIHdlcmUgYWRkZWQgYnkgdXMgYW5kIGhhdmUgbm90aGluZyB0byBkbyB3aXRoIElvbmljIENTUyBDdXN0b20gUHJvcGVydGllc1xuOmhvc3Qge1xuICAtLXBhZ2UtbWFyZ2luOiB2YXIoLS1hcHAtZmFpci1tYXJnaW4pO1xuICAtLXBhZ2UtYmFja2dyb3VuZDogdmFyKC0tYXBwLWJhY2tncm91bmQpO1xuXG4gIC0tcGFnZS1jb2xvcjogI2ViYmIwMDtcbn1cblxuLy8gTm90ZTogIEFsbCB0aGUgQ1NTIHZhcmlhYmxlcyBkZWZpbmVkIGJlbG93IGFyZSBvdmVycmlkZXMgb2YgSW9uaWMgZWxlbWVudHMgQ1NTIEN1c3RvbSBQcm9wZXJ0aWVzXG4ubGlzdGluZy1pdGVtIHtcbiAgcGFkZGluZzogMHB4IDBweCB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBhZ2UtYmFja2dyb3VuZCk7XG4gIGJvcmRlci1ib3R0b206IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMikgc29saWQgdmFyKC0tcGFnZS1jb2xvcik7XG5cbiAgLmltYWdlLXJvdyB7XG4gICAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMHB4O1xuXG4gICAgLml0ZW0taW1hZ2Uge1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgICAmOmZvY3VzIHtcbiAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuY29udGVudC1pbnNpZGUtaXRlbS1pbWFnZSB7XG4gICAgICBwYWRkaW5nOiAwcHggMTIlO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAgICAgLml0ZW0taWNvbiB7XG4gICAgICAgIHdpZHRoOiA1NHB4O1xuICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XG4gICAgICB9XG5cbiAgICAgIC5pdGVtLWN0YSB7XG4gICAgICAgIG1hcmdpbjogMHB4IGF1dG87XG4gICAgICAgIHBhZGRpbmc6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMikgY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikpO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBhZ2UtY29sb3IpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1hcHAtZmFpci1yYWRpdXMpO1xuXG4gICAgICAgIC5jdGEtaWNvbiB7XG4gICAgICAgICAgZm9udC1zaXplOiAyNnB4O1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmluZm8tcm93IHtcbiAgICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiAwcHg7XG5cbiAgICBwYWRkaW5nOiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gICAgcGFkZGluZy1ib3R0b206IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG5cbiAgICAubWFpbi1pbmZvLWNvbCB7XG4gICAgICBwYWRkaW5nLXJpZ2h0OiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuICAgIH1cblxuICAgIC5pdGVtLW5hbWUge1xuICAgICAgbWFyZ2luOiAwcHggMHB4IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuXG4gICAgICAubmFtZS1hbmNob3Ige1xuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5pdGVtLWRlc2NyaXB0aW9uIHtcbiAgICAgIG1hcmdpbjogMHB4IDBweCBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrLXNoYWRlKTtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjM7XG4gICAgfVxuXG4gICAgLml0ZW0tYWRkcmVzcyB7XG4gICAgICBtYXJnaW46IDBweDtcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyay10aW50KTtcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICB9XG4gIH1cblxuICAuc3RhdHMtcm93IHtcbiAgICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiAwcHg7XG5cbiAgICBwYWRkaW5nOiAwcHggdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG5cbiAgICAuc3RhdHMtaWNvbiB7XG4gICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgfVxuXG4gICAgLml0ZW0tcmF0aW5nIHtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcblxuICAgICAgLnJhdGluZy12YWx1ZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuaXRlbS1yZXZpZXdzIHtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcblxuICAgICAgLnJldmlld3MtY291bnQge1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0= */"];



/***/ }),

/***/ "ajUR":
/*!*****************************************************************************************!*\
  !*** ./src/app/electrical/listing/styles/electrical-listing.shell.scss.shim.ngstyle.js ***!
  \*****************************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
 * tslint:disable
 */ 
var styles = ["[_nghost-%COMP%] {\n  --shell-color: #ebbb00;\n  --shell-color-rgb: 0,175,255;\n}\n\napp-image-shell.item-image[_ngcontent-%COMP%] {\n  --image-shell-loading-background: rgba(var(--shell-color-rgb), .10);\n  --image-shell-overlay-background: rgba(var(--ion-color-dark-rgb), .60);\n}\n\napp-image-shell.icon-image[_ngcontent-%COMP%] {\n  --image-shell-loading-background: rgba(var(--shell-color-rgb), .15);\n}\n\n.item-name[_ngcontent-%COMP%]   app-text-shell[_ngcontent-%COMP%] {\n  --text-shell-line-height: 16px;\n  max-width: 70%;\n}\n\n.item-name[_ngcontent-%COMP%]   app-text-shell.text-loaded[_ngcontent-%COMP%] {\n  max-width: unset;\n}\n\n.item-description[_ngcontent-%COMP%]    > app-text-shell[_ngcontent-%COMP%] {\n  --text-shell-line-height: 14px;\n}\n\n.item-address[_ngcontent-%COMP%]    > app-text-shell[_ngcontent-%COMP%] {\n  --text-shell-line-height: 12px;\n  max-width: 60%;\n}\n\n.item-address[_ngcontent-%COMP%]    > app-text-shell.text-loaded[_ngcontent-%COMP%] {\n  max-width: unset;\n}\n\n.rating-value[_ngcontent-%COMP%]    > app-text-shell[_ngcontent-%COMP%] {\n  --text-shell-line-height: 16px;\n  min-width: 30px;\n}\n\n.reviews-count[_ngcontent-%COMP%]    > app-text-shell[_ngcontent-%COMP%] {\n  --text-shell-line-height: 16px;\n  min-width: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWxlY3RyaWNhbC9saXN0aW5nL3N0eWxlcy9lbGVjdHJpY2FsLWxpc3Rpbmcuc2hlbGwuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLHNCQUFBO0VBQ0EsNEJBQUE7QUFERjs7QUFXQTtFQUNFLG1FQUFBO0VBQ0Esc0VBQUE7QUFSRjs7QUFXQTtFQUNFLG1FQUFBO0FBUkY7O0FBV0E7RUFDRSw4QkFBQTtFQUNBLGNBQUE7QUFSRjs7QUFVRTtFQUNFLGdCQUFBO0FBUko7O0FBWUE7RUFDRSw4QkFBQTtBQVRGOztBQVlBO0VBQ0UsOEJBQUE7RUFDQSxjQUFBO0FBVEY7O0FBV0U7RUFDRSxnQkFBQTtBQVRKOztBQWFBO0VBQ0UsOEJBQUE7RUFDQSxlQUFBO0FBVkY7O0FBYUE7RUFDRSw4QkFBQTtFQUNBLGVBQUE7QUFWRiIsImZpbGUiOiJzcmMvYXBwL2VsZWN0cmljYWwvbGlzdGluZy9zdHlsZXMvZWxlY3RyaWNhbC1saXN0aW5nLnNoZWxsLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDdXN0b20gdmFyaWFibGVzXG4vLyBOb3RlOiAgVGhlc2Ugb25lcyB3ZXJlIGFkZGVkIGJ5IHVzIGFuZCBoYXZlIG5vdGhpbmcgdG8gZG8gd2l0aCBJb25pYyBDU1MgQ3VzdG9tIFByb3BlcnRpZXNcbjpob3N0IHtcbiAgLS1zaGVsbC1jb2xvcjogI2ViYmIwMDtcbiAgLS1zaGVsbC1jb2xvci1yZ2I6IDAsMTc1LDI1NTtcbn1cblxuLy8gWW91IGNhbiBhbHNvIGFwcGx5IHNoZWVsIHN0eWxlcyB0byB0aGUgZW50aXJlIHBhZ2Vcbjpob3N0KC5pcy1zaGVsbCkge1xuICAvLyBpb24tY29udGVudCB7XG4gIC8vICAgb3BhY2l0eTogMC44O1xuICAvLyB9XG59XG5cbmFwcC1pbWFnZS1zaGVsbC5pdGVtLWltYWdlIHtcbiAgLS1pbWFnZS1zaGVsbC1sb2FkaW5nLWJhY2tncm91bmQ6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjEwKTtcbiAgLS1pbWFnZS1zaGVsbC1vdmVybGF5LWJhY2tncm91bmQ6IHJnYmEodmFyKC0taW9uLWNvbG9yLWRhcmstcmdiKSwgLjYwKTtcbn1cblxuYXBwLWltYWdlLXNoZWxsLmljb24taW1hZ2Uge1xuICAtLWltYWdlLXNoZWxsLWxvYWRpbmctYmFja2dyb3VuZDogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMTUpO1xufVxuXG4uaXRlbS1uYW1lIGFwcC10ZXh0LXNoZWxsIHtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAxNnB4O1xuICBtYXgtd2lkdGg6IDcwJTtcblxuICAmLnRleHQtbG9hZGVkIHtcbiAgICBtYXgtd2lkdGg6IHVuc2V0O1xuICB9XG59XG5cbi5pdGVtLWRlc2NyaXB0aW9uID4gYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDE0cHg7XG59XG5cbi5pdGVtLWFkZHJlc3MgPiBhcHAtdGV4dC1zaGVsbCB7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMTJweDtcbiAgbWF4LXdpZHRoOiA2MCU7XG5cbiAgJi50ZXh0LWxvYWRlZCB7XG4gICAgbWF4LXdpZHRoOiB1bnNldDtcbiAgfVxufVxuXG4ucmF0aW5nLXZhbHVlID4gYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDE2cHg7XG4gIG1pbi13aWR0aDogMzBweDtcbn1cblxuLnJldmlld3MtY291bnQgPiBhcHAtdGV4dC1zaGVsbCB7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMTZweDtcbiAgbWluLXdpZHRoOiAzMHB4O1xufVxuIl19 */"];



/***/ }),

/***/ "dmBb":
/*!*****************************************************************!*\
  !*** ./src/app/electrical/listing/electrical-listing.module.ts ***!
  \*****************************************************************/
/*! exports provided: ElectricalListingPageModule, ɵ0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElectricalListingPageModule", function() { return ElectricalListingPageModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ0", function() { return ɵ0; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _electrical_listing_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./electrical-listing.page */ "+7Tg");
/* harmony import */ var _electrical_listing_resolver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./electrical-listing.resolver */ "j3FY");



const ɵ0 = _electrical_listing_resolver__WEBPACK_IMPORTED_MODULE_2__["ElectricalListingResolver"];
const routes = [
    {
        path: '',
        component: _electrical_listing_page__WEBPACK_IMPORTED_MODULE_1__["ElectricalListingPage"],
        resolve: {
            data: ɵ0
        }
    }
];
class ElectricalListingPageModule {
}



/***/ }),

/***/ "iyTn":
/*!***************************************************************************!*\
  !*** ./src/app/electrical/listing/electrical-listing.module.ngfactory.js ***!
  \***************************************************************************/
/*! exports provided: ElectricalListingPageModuleNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElectricalListingPageModuleNgFactory", function() { return ElectricalListingPageModuleNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _electrical_listing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./electrical-listing.module */ "dmBb");
/* harmony import */ var _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/@angular/router/router.ngfactory */ "pMnS");
/* harmony import */ var _electrical_listing_page_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./electrical-listing.page.ngfactory */ "GBPn");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "sZkV");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _shell_shell_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shell/shell.module */ "ZpN7");
/* harmony import */ var _shell_config_app_shell_config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shell/config/app-shell.config */ "Kt/9");
/* harmony import */ var _electrical_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../electrical.service */ "OsGW");
/* harmony import */ var _electrical_listing_resolver__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./electrical-listing.resolver */ "j3FY");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/components.module */ "j1ZV");
/* harmony import */ var angular_pipes__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! angular-pipes */ "J/9z");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../pipes/pipes.module */ "iTUp");
/* harmony import */ var _electrical_listing_page__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./electrical-listing.page */ "+7Tg");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
 * tslint:disable
 */ 

















var ElectricalListingPageModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_electrical_listing_module__WEBPACK_IMPORTED_MODULE_1__["ElectricalListingPageModule"], [], function (_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_router_router_lNgFactory"], _electrical_listing_page_ngfactory__WEBPACK_IMPORTED_MODULE_3__["ElectricalListingPageNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AngularDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AngularDelegate"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"], [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AngularDelegate"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["PopoverController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["PopoverController"], [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AngularDelegate"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_n"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_n"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpXsrfTokenExtractor"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_common_http_http_g"], [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_common_http_http_e"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_common_http_http_h"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_common_http_http_h"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpXsrfTokenExtractor"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_common_http_http_f"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HTTP_INTERCEPTORS"], function (p0_0) { return [p0_0]; }, [_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_common_http_http_h"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_common_http_http_d"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_common_http_http_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["XhrFactory"], null, [_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_common_http_http_d"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpXhrBackend"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpXhrBackend"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["XhrFactory"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpBackend"], null, [_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpXhrBackend"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpHandler"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["ɵHttpInterceptingHandler"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpBackend"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpHandler"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"], function (p0_0) { return [_shell_shell_module__WEBPACK_IMPORTED_MODULE_8__["ɵ0"](p0_0)]; }, [_shell_config_app_shell_config__WEBPACK_IMPORTED_MODULE_9__["AppShellConfig"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _electrical_service__WEBPACK_IMPORTED_MODULE_10__["ElectricalService"], _electrical_service__WEBPACK_IMPORTED_MODULE_10__["ElectricalService"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _electrical_listing_resolver__WEBPACK_IMPORTED_MODULE_11__["ElectricalListingResolver"], _electrical_listing_resolver__WEBPACK_IMPORTED_MODULE_11__["ElectricalListingResolver"], [_electrical_service__WEBPACK_IMPORTED_MODULE_10__["ElectricalService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_d"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientXsrfModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientXsrfModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _shell_shell_module__WEBPACK_IMPORTED_MODULE_8__["ShellModule"], _shell_shell_module__WEBPACK_IMPORTED_MODULE_8__["ShellModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _components_components_module__WEBPACK_IMPORTED_MODULE_13__["ComponentsModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_13__["ComponentsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, angular_pipes__WEBPACK_IMPORTED_MODULE_14__["NgFloorPipeModule"], angular_pipes__WEBPACK_IMPORTED_MODULE_14__["NgFloorPipeModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_15__["PipesModule"], _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_15__["PipesModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _electrical_listing_module__WEBPACK_IMPORTED_MODULE_1__["ElectricalListingPageModule"], _electrical_listing_module__WEBPACK_IMPORTED_MODULE_1__["ElectricalListingPageModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_common_http_http_e"], "XSRF-TOKEN", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_common_http_http_f"], "X-XSRF-TOKEN", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_12__["ROUTES"], function () { return [[{ path: "", component: _electrical_listing_page__WEBPACK_IMPORTED_MODULE_16__["ElectricalListingPage"], resolve: { data: _electrical_listing_module__WEBPACK_IMPORTED_MODULE_1__["ɵ0"] } }]]; }, [])]); });



/***/ }),

/***/ "j3FY":
/*!*******************************************************************!*\
  !*** ./src/app/electrical/listing/electrical-listing.resolver.ts ***!
  \*******************************************************************/
/*! exports provided: ElectricalListingResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElectricalListingResolver", function() { return ElectricalListingResolver; });
/* harmony import */ var _electrical_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../electrical.service */ "OsGW");

class ElectricalListingResolver {
    constructor(electricalService) {
        this.electricalService = electricalService;
    }
    resolve() {
        const dataSource = this.electricalService.getListingDataSource();
        const dataStore = this.electricalService.getListingStore(dataSource);
        return dataStore;
    }
}


/***/ })

}]);
//# sourceMappingURL=electrical-listing-electrical-listing-module-ngfactory-es2015.js.map