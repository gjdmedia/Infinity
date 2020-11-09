(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["maps-maps-module-ngfactory"],{

/***/ "./src/app/components/google-map/google-map.component.ngfactory.js":
/*!*************************************************************************!*\
  !*** ./src/app/components/google-map/google-map.component.ngfactory.js ***!
  \*************************************************************************/
/*! exports provided: RenderType_GoogleMapComponent, View_GoogleMapComponent_0, View_GoogleMapComponent_Host_0, GoogleMapComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_GoogleMapComponent", function() { return RenderType_GoogleMapComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_GoogleMapComponent_0", function() { return View_GoogleMapComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_GoogleMapComponent_Host_0", function() { return View_GoogleMapComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleMapComponentNgFactory", function() { return GoogleMapComponentNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _google_map_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./google-map.component */ "./src/app/components/google-map/google-map.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
 * tslint:disable
 */ 


var styles_GoogleMapComponent = [];
var RenderType_GoogleMapComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_GoogleMapComponent, data: {} });

function View_GoogleMapComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [], null, null); }
function View_GoogleMapComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "google-map", [], null, null, null, View_GoogleMapComponent_0, RenderType_GoogleMapComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, _google_map_component__WEBPACK_IMPORTED_MODULE_1__["GoogleMapComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var GoogleMapComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("google-map", _google_map_component__WEBPACK_IMPORTED_MODULE_1__["GoogleMapComponent"], View_GoogleMapComponent_Host_0, { mapOptions: "mapOptions" }, {}, []);



/***/ }),

/***/ "./src/app/components/google-map/google-map.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/google-map/google-map.component.ts ***!
  \***************************************************************/
/*! exports provided: GoogleMapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleMapComponent", function() { return GoogleMapComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");

class GoogleMapComponent {
    constructor(_elementRef) {
        this._elementRef = _elementRef;
        this.$mapReady = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._mapIdledOnce = false;
    }
    ngOnInit() {
        this.initMap();
    }
    initMap() {
        this._el = this._elementRef.nativeElement;
        this._map = new google.maps.Map(this._el, this.mapOptions);
        // Workarround for init method: try to catch the first idle event after the map creation
        // (this._mapIdledOnce). The following idle events don't matter.
        const _ready_listener = this._map.addListener('idle', () => {
            console.log('mapReady - IDLE');
            if (!this._mapIdledOnce) {
                this.$mapReady.emit(this._map);
                this._mapIdledOnce = true;
                // Stop listening to event, the map is ready
                google.maps.event.removeListener(_ready_listener);
            }
        });
    }
}


/***/ }),

/***/ "./src/app/maps/maps.module.ngfactory.js":
/*!***********************************************!*\
  !*** ./src/app/maps/maps.module.ngfactory.js ***!
  \***********************************************/
/*! exports provided: MapsPageModuleNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapsPageModuleNgFactory", function() { return MapsPageModuleNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _maps_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./maps.module */ "./src/app/maps/maps.module.ts");
/* harmony import */ var _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/@angular/router/router.ngfactory */ "./node_modules/@angular/router/router.ngfactory.js");
/* harmony import */ var _maps_page_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./maps.page.ngfactory */ "./src/app/maps/maps.page.ngfactory.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _shell_shell_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shell/shell.module */ "./src/app/shell/shell.module.ts");
/* harmony import */ var _shell_config_app_shell_config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shell/config/app-shell.config */ "./src/app/shell/config/app-shell.config.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _maps_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./maps.page */ "./src/app/maps/maps.page.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
 * tslint:disable
 */ 













var MapsPageModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_maps_module__WEBPACK_IMPORTED_MODULE_1__["MapsPageModule"], [], function (_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_router_router_lNgFactory"], _maps_page_ngfactory__WEBPACK_IMPORTED_MODULE_3__["MapsPageNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AngularDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AngularDelegate"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"], [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AngularDelegate"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["PopoverController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["PopoverController"], [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AngularDelegate"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_n"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_n"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpXsrfTokenExtractor"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_common_http_http_g"], [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_common_http_http_e"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_common_http_http_h"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_common_http_http_h"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpXsrfTokenExtractor"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_common_http_http_f"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HTTP_INTERCEPTORS"], function (p0_0) { return [p0_0]; }, [_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_common_http_http_h"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_common_http_http_d"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_common_http_http_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["XhrFactory"], null, [_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_common_http_http_d"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpXhrBackend"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpXhrBackend"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["XhrFactory"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpBackend"], null, [_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpXhrBackend"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpHandler"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["ɵHttpInterceptingHandler"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpBackend"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpHandler"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"], function (p0_0) { return [_shell_shell_module__WEBPACK_IMPORTED_MODULE_8__["ɵ0"](p0_0)]; }, [_shell_config_app_shell_config__WEBPACK_IMPORTED_MODULE_9__["AppShellConfig"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_d"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientXsrfModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientXsrfModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _shell_shell_module__WEBPACK_IMPORTED_MODULE_8__["ShellModule"], _shell_shell_module__WEBPACK_IMPORTED_MODULE_8__["ShellModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _components_components_module__WEBPACK_IMPORTED_MODULE_10__["ComponentsModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_10__["ComponentsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _maps_module__WEBPACK_IMPORTED_MODULE_1__["MapsPageModule"], _maps_module__WEBPACK_IMPORTED_MODULE_1__["MapsPageModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_common_http_http_e"], "XSRF-TOKEN", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_common_http_http_f"], "X-XSRF-TOKEN", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_11__["ROUTES"], function () { return [[{ path: "", component: _maps_page__WEBPACK_IMPORTED_MODULE_12__["MapsPage"] }]]; }, [])]); });



/***/ }),

/***/ "./src/app/maps/maps.module.ts":
/*!*************************************!*\
  !*** ./src/app/maps/maps.module.ts ***!
  \*************************************/
/*! exports provided: MapsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapsPageModule", function() { return MapsPageModule; });
class MapsPageModule {
}


/***/ }),

/***/ "./src/app/maps/maps.page.ngfactory.js":
/*!*********************************************!*\
  !*** ./src/app/maps/maps.page.ngfactory.js ***!
  \*********************************************/
/*! exports provided: RenderType_MapsPage, View_MapsPage_0, View_MapsPage_Host_0, MapsPageNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_MapsPage", function() { return RenderType_MapsPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_MapsPage_0", function() { return View_MapsPage_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_MapsPage_Host_0", function() { return View_MapsPage_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapsPageNgFactory", function() { return MapsPageNgFactory; });
/* harmony import */ var _styles_maps_page_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/maps.page.scss.shim.ngstyle */ "./src/app/maps/styles/maps.page.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/@ionic/angular/ionic-angular.ngfactory */ "./node_modules/@ionic/angular/ionic-angular.ngfactory.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _components_google_map_google_map_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/google-map/google-map.component.ngfactory */ "./src/app/components/google-map/google-map.component.ngfactory.js");
/* harmony import */ var _components_google_map_google_map_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/google-map/google-map.component */ "./src/app/components/google-map/google-map.component.ts");
/* harmony import */ var _maps_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./maps.page */ "./src/app/maps/maps.page.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
 * tslint:disable
 */ 







var styles_MapsPage = [_styles_maps_page_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_MapsPage = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_MapsPage, data: {} });

function View_MapsPage_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](402653184, 1, { _GoogleMap: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 10, "ion-header", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonHeader_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonHeader"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonHeader"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, 0, 8, "ion-toolbar", [["color", "primary"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonToolbar_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonToolbar"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonToolbar"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], { color: [0, "color"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, 0, 3, "ion-buttons", [["slot", "start"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonButtons_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonButtons"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonButtons"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, 0, 1, "ion-menu-button", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonMenuButton_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonMenuButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonMenuButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, 0, 2, "ion-title", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonTitle_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonTitle"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonTitle"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["Maps & Geolocation"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 9, "ion-content", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonContent_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonContent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonContent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, 0, 5, "ion-fab", [["horizontal", "end"], ["slot", "fixed"], ["vertical", "top"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonFab_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonFab"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonFab"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], { horizontal: [0, "horizontal"], vertical: [1, "vertical"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, 0, 3, "ion-fab-button", [["color", "secondary"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.geolocateMe() !== false);
        ad = (pd_0 && ad);
    } return ad; }, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonFabButton_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonFabButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](17, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonFabButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], { color: [0, "color"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, 0, 1, "ion-icon", [["name", "locate"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonIcon_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](19, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], { name: [0, "name"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 0, null, 0, 1, "google-map", [], null, null, null, _components_google_map_google_map_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_GoogleMapComponent_0"], _components_google_map_google_map_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_GoogleMapComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](21, 114688, [[1, 4]], 0, _components_google_map_google_map_component__WEBPACK_IMPORTED_MODULE_5__["GoogleMapComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], { mapOptions: [0, "mapOptions"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = "primary"; _ck(_v, 4, 0, currVal_0); var currVal_1 = "end"; var currVal_2 = "top"; _ck(_v, 15, 0, currVal_1, currVal_2); var currVal_3 = "secondary"; _ck(_v, 17, 0, currVal_3); var currVal_4 = "locate"; _ck(_v, 19, 0, currVal_4); var currVal_5 = _co.mapOptions; _ck(_v, 21, 0, currVal_5); }, null); }
function View_MapsPage_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-maps", [], null, null, null, View_MapsPage_0, RenderType_MapsPage)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _maps_page__WEBPACK_IMPORTED_MODULE_6__["MapsPage"], [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var MapsPageNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-maps", _maps_page__WEBPACK_IMPORTED_MODULE_6__["MapsPage"], View_MapsPage_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/maps/maps.page.ts":
/*!***********************************!*\
  !*** ./src/app/maps/maps.page.ts ***!
  \***********************************/
/*! exports provided: MapsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapsPage", function() { return MapsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/core */ "./node_modules/@capacitor/core/dist/esm/index.js");
/* harmony import */ var _components_google_map_google_map_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/google-map/google-map.component */ "./src/app/components/google-map/google-map.component.ts");



const { Geolocation } = _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["Plugins"];

class MapsPage {
    constructor(loadingController) {
        this.loadingController = loadingController;
        this.mapOptions = {
            zoom: 15,
            center: { lat: -34.9199842, lng: -56.149849 }
            // uncomment the following line if you want to remove the default Map controls
            // disableDefaultUI: true
        };
    }
    ngOnInit() {
        this._GoogleMap.$mapReady.subscribe(map => {
            this.map = map;
        });
        this.createLoader();
    }
    createLoader() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loadingElement = yield this.loadingController.create({
                message: 'Trying to get your current location...'
            });
        });
    }
    presentLoader() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.loadingElement.present();
        });
    }
    dismissLoader() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.loadingElement) {
                yield this.loadingElement.dismiss();
            }
        });
    }
    geolocateMe() {
        this.presentLoader();
        Geolocation.getCurrentPosition().then(position => {
            const current_location = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
            this.map.panTo(current_location);
            // add a marker
            const marker = new google.maps.Marker({
                position: current_location,
                title: 'You are here!',
            });
            // To add the marker to the map, call setMap();
            marker.setMap(this.map);
        }).catch((error) => {
            console.log('Error getting current location', error);
        }).finally(() => this.dismissLoader());
    }
}


/***/ }),

/***/ "./src/app/maps/styles/maps.page.scss.shim.ngstyle.js":
/*!************************************************************!*\
  !*** ./src/app/maps/styles/maps.page.scss.shim.ngstyle.js ***!
  \************************************************************/
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
var styles = ["google-map[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kaWRneS9Eb2N1bWVudHMvR2l0SHViL0luZmluaXR5L3NyYy9hcHAvbWFwcy9zdHlsZXMvbWFwcy5wYWdlLnNjc3MiLCJzcmMvYXBwL21hcHMvc3R5bGVzL21hcHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9tYXBzL3N0eWxlcy9tYXBzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImdvb2dsZS1tYXAge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cbiIsImdvb2dsZS1tYXAge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn0iXX0= */"];



/***/ })

}]);
//# sourceMappingURL=maps-maps-module-ngfactory-es2015.js.map