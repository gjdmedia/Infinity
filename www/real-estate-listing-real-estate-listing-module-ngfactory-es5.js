(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["real-estate-listing-real-estate-listing-module-ngfactory"], {
    /***/
    "+Dkm":
    /*!*******************************************************************!*\
      !*** ./src/app/real-estate/listing/real-estate-listing.module.ts ***!
      \*******************************************************************/

    /*! exports provided: RealEstateListingPageModule, ɵ0 */

    /***/
    function Dkm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RealEstateListingPageModule", function () {
        return RealEstateListingPageModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵ0", function () {
        return ɵ0;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _real_estate_listing_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./real-estate-listing.page */
      "qogU");
      /* harmony import */


      var _real_estate_listing_resolver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./real-estate-listing.resolver */
      "Mab3");

      var ɵ0 = _real_estate_listing_resolver__WEBPACK_IMPORTED_MODULE_2__["RealEstateListingResolver"];
      var routes = [{
        path: '',
        component: _real_estate_listing_page__WEBPACK_IMPORTED_MODULE_1__["RealEstateListingPage"],
        resolve: {
          data: ɵ0
        }
      }];

      var RealEstateListingPageModule = function RealEstateListingPageModule() {
        _classCallCheck(this, RealEstateListingPageModule);
      };
      /***/

    },

    /***/
    "FksN":
    /*!*****************************************************************************!*\
      !*** ./src/app/real-estate/listing/real-estate-listing.module.ngfactory.js ***!
      \*****************************************************************************/

    /*! exports provided: RealEstateListingPageModuleNgFactory */

    /***/
    function FksN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RealEstateListingPageModuleNgFactory", function () {
        return RealEstateListingPageModuleNgFactory;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _real_estate_listing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./real-estate-listing.module */
      "+Dkm");
      /* harmony import */


      var _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../node_modules/@angular/router/router.ngfactory */
      "pMnS");
      /* harmony import */


      var _real_estate_listing_page_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./real-estate-listing.page.ngfactory */
      "iV4v");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "sZkV");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common/http */
      "IheW");
      /* harmony import */


      var _shell_shell_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../shell/shell.module */
      "ZpN7");
      /* harmony import */


      var _shell_config_app_shell_config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../shell/config/app-shell.config */
      "Kt/9");
      /* harmony import */


      var _real_estate_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../real-estate.service */
      "r7vE");
      /* harmony import */


      var _real_estate_listing_resolver__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./real-estate-listing.resolver */
      "Mab3");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _components_components_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../../components/components.module */
      "j1ZV");
      /* harmony import */


      var _real_estate_listing_page__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./real-estate-listing.page */
      "qogU");
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var RealEstateListingPageModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_real_estate_listing_module__WEBPACK_IMPORTED_MODULE_1__["RealEstateListingPageModule"], [], function (_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_router_router_lNgFactory"], _real_estate_listing_page_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RealEstateListingPageNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AngularDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AngularDelegate"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"], [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AngularDelegate"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["PopoverController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["PopoverController"], [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AngularDelegate"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_n"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_n"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpXsrfTokenExtractor"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_common_http_http_g"], [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_common_http_http_e"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_common_http_http_h"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_common_http_http_h"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpXsrfTokenExtractor"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_common_http_http_f"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HTTP_INTERCEPTORS"], function (p0_0) {
          return [p0_0];
        }, [_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_common_http_http_h"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_common_http_http_d"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_common_http_http_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["XhrFactory"], null, [_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_common_http_http_d"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpXhrBackend"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpXhrBackend"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["XhrFactory"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpBackend"], null, [_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpXhrBackend"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpHandler"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["ɵHttpInterceptingHandler"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpBackend"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpHandler"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"], function (p0_0) {
          return [_shell_shell_module__WEBPACK_IMPORTED_MODULE_8__["ɵ0"](p0_0)];
        }, [_shell_config_app_shell_config__WEBPACK_IMPORTED_MODULE_9__["AppShellConfig"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _real_estate_service__WEBPACK_IMPORTED_MODULE_10__["RealEstateService"], _real_estate_service__WEBPACK_IMPORTED_MODULE_10__["RealEstateService"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _real_estate_listing_resolver__WEBPACK_IMPORTED_MODULE_11__["RealEstateListingResolver"], _real_estate_listing_resolver__WEBPACK_IMPORTED_MODULE_11__["RealEstateListingResolver"], [_real_estate_service__WEBPACK_IMPORTED_MODULE_10__["RealEstateService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_d"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientXsrfModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientXsrfModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _shell_shell_module__WEBPACK_IMPORTED_MODULE_8__["ShellModule"], _shell_shell_module__WEBPACK_IMPORTED_MODULE_8__["ShellModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _components_components_module__WEBPACK_IMPORTED_MODULE_13__["ComponentsModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_13__["ComponentsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _real_estate_listing_module__WEBPACK_IMPORTED_MODULE_1__["RealEstateListingPageModule"], _real_estate_listing_module__WEBPACK_IMPORTED_MODULE_1__["RealEstateListingPageModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_common_http_http_e"], "XSRF-TOKEN", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_common_http_http_f"], "X-XSRF-TOKEN", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_12__["ROUTES"], function () {
          return [[{
            path: "",
            component: _real_estate_listing_page__WEBPACK_IMPORTED_MODULE_14__["RealEstateListingPage"],
            resolve: {
              data: _real_estate_listing_module__WEBPACK_IMPORTED_MODULE_1__["ɵ0"]
            }
          }]];
        }, [])]);
      });
      /***/

    },

    /***/
    "Mab3":
    /*!*********************************************************************!*\
      !*** ./src/app/real-estate/listing/real-estate-listing.resolver.ts ***!
      \*********************************************************************/

    /*! exports provided: RealEstateListingResolver */

    /***/
    function Mab3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RealEstateListingResolver", function () {
        return RealEstateListingResolver;
      });
      /* harmony import */


      var _real_estate_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../real-estate.service */
      "r7vE");

      var RealEstateListingResolver = /*#__PURE__*/function () {
        function RealEstateListingResolver(realEstateService) {
          _classCallCheck(this, RealEstateListingResolver);

          this.realEstateService = realEstateService;
        }

        _createClass(RealEstateListingResolver, [{
          key: "resolve",
          value: function resolve() {
            var dataSource = this.realEstateService.getListingDataSource();
            var dataStore = this.realEstateService.getListingStore(dataSource);
            return dataStore;
          }
        }]);

        return RealEstateListingResolver;
      }();
      /***/

    },

    /***/
    "TiB9":
    /*!*******************************************************************************************!*\
      !*** ./src/app/real-estate/listing/styles/real-estate-listing.shell.scss.shim.ngstyle.js ***!
      \*******************************************************************************************/

    /*! exports provided: styles */

    /***/
    function TiB9(module, __webpack_exports__, __webpack_require__) {
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


      var styles = ["[_nghost-%COMP%] {\n  --shell-color: #d9453a;\n  --shell-color-rgb: 217,69,58;\n}\n\napp-image-shell.item-picture[_ngcontent-%COMP%] {\n  --image-shell-loading-background: rgba(var(--shell-color-rgb), .10);\n  --image-shell-spinner-color: rgba(var(--shell-color-rgb), .25);\n}\n\n.item-price[_ngcontent-%COMP%]   app-text-shell[_ngcontent-%COMP%] {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .25);\n  min-width: 50px;\n  max-width: 100px;\n}\n\n.item-price[_ngcontent-%COMP%]   app-text-shell.text-loaded[_ngcontent-%COMP%] {\n  max-width: inherit;\n}\n\n.item-address[_ngcontent-%COMP%]    > app-text-shell[_ngcontent-%COMP%] {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .20);\n  --text-shell-line-height: 14px;\n  max-width: 60%;\n}\n\n.item-address[_ngcontent-%COMP%]    > app-text-shell.text-loaded[_ngcontent-%COMP%] {\n  max-width: inherit;\n}\n\n.accommodation-value[_ngcontent-%COMP%]    > app-text-shell[_ngcontent-%COMP%] {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .10);\n  --text-shell-line-height: 14px;\n  min-width: 30px;\n}\n\n.accommodation-value[_ngcontent-%COMP%]    > app-text-shell.text-loaded[_ngcontent-%COMP%] {\n  min-width: 0px;\n}\n\n.amenity-value[_ngcontent-%COMP%]    > app-text-shell[_ngcontent-%COMP%] {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .05);\n  --text-shell-line-height: 12px;\n  min-width: 50px;\n}\n\n.amenity-value[_ngcontent-%COMP%]    > app-text-shell.text-loaded[_ngcontent-%COMP%] {\n  min-width: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVhbC1lc3RhdGUvbGlzdGluZy9zdHlsZXMvcmVhbC1lc3RhdGUtbGlzdGluZy5zaGVsbC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0Usc0JBQUE7RUFDQSw0QkFBQTtBQURGOztBQVdBO0VBQ0UsbUVBQUE7RUFDQSw4REFBQTtBQVJGOztBQVdBO0VBQ0UsMERBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFSRjs7QUFVRTtFQUNFLGtCQUFBO0FBUko7O0FBWUE7RUFDRSwwREFBQTtFQUNBLDhCQUFBO0VBQ0EsY0FBQTtBQVRGOztBQVdFO0VBQ0Usa0JBQUE7QUFUSjs7QUFhQTtFQUNFLDBEQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0FBVkY7O0FBWUU7RUFDRSxjQUFBO0FBVko7O0FBY0E7RUFDRSwwREFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtBQVhGOztBQWFFO0VBQ0UsY0FBQTtBQVhKIiwiZmlsZSI6InNyYy9hcHAvcmVhbC1lc3RhdGUvbGlzdGluZy9zdHlsZXMvcmVhbC1lc3RhdGUtbGlzdGluZy5zaGVsbC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ3VzdG9tIHZhcmlhYmxlc1xuLy8gTm90ZTogIFRoZXNlIG9uZXMgd2VyZSBhZGRlZCBieSB1cyBhbmQgaGF2ZSBub3RoaW5nIHRvIGRvIHdpdGggSW9uaWMgQ1NTIEN1c3RvbSBQcm9wZXJ0aWVzXG46aG9zdCB7XG4gIC0tc2hlbGwtY29sb3I6ICNkOTQ1M2E7XG4gIC0tc2hlbGwtY29sb3ItcmdiOiAyMTcsNjksNTg7XG59XG5cbi8vIFlvdSBjYW4gYWxzbyBhcHBseSBzaGVlbCBzdHlsZXMgdG8gdGhlIGVudGlyZSBwYWdlXG46aG9zdCguaXMtc2hlbGwpIHtcbiAgLy8gaW9uLWNvbnRlbnQge1xuICAvLyAgIG9wYWNpdHk6IDAuODtcbiAgLy8gfVxufVxuXG5hcHAtaW1hZ2Utc2hlbGwuaXRlbS1waWN0dXJlIHtcbiAgLS1pbWFnZS1zaGVsbC1sb2FkaW5nLWJhY2tncm91bmQ6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjEwKTtcbiAgLS1pbWFnZS1zaGVsbC1zcGlubmVyLWNvbG9yOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4yNSk7XG59XG5cbi5pdGVtLXByaWNlIGFwcC10ZXh0LXNoZWxsIHtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtY29sb3I6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjI1KTtcbiAgbWluLXdpZHRoOiA1MHB4O1xuICBtYXgtd2lkdGg6IDEwMHB4O1xuXG4gICYudGV4dC1sb2FkZWQge1xuICAgIG1heC13aWR0aDogaW5oZXJpdDtcbiAgfVxufVxuXG4uaXRlbS1hZGRyZXNzID4gYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtbGluZS1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMjApO1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDE0cHg7XG4gIG1heC13aWR0aDogNjAlO1xuXG4gICYudGV4dC1sb2FkZWQge1xuICAgIG1heC13aWR0aDogaW5oZXJpdDtcbiAgfVxufVxuXG4uYWNjb21tb2RhdGlvbi12YWx1ZSA+IGFwcC10ZXh0LXNoZWxsIHtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtY29sb3I6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjEwKTtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAxNHB4O1xuICBtaW4td2lkdGg6IDMwcHg7XG5cbiAgJi50ZXh0LWxvYWRlZCB7XG4gICAgbWluLXdpZHRoOiAwcHg7XG4gIH1cbn1cblxuLmFtZW5pdHktdmFsdWUgPiBhcHAtdGV4dC1zaGVsbCB7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4wNSk7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMTJweDtcbiAgbWluLXdpZHRoOiA1MHB4O1xuXG4gICYudGV4dC1sb2FkZWQge1xuICAgIG1pbi13aWR0aDogMHB4O1xuICB9XG59XG4iXX0= */"];
      /***/
    },

    /***/
    "iV4v":
    /*!***************************************************************************!*\
      !*** ./src/app/real-estate/listing/real-estate-listing.page.ngfactory.js ***!
      \***************************************************************************/

    /*! exports provided: RenderType_RealEstateListingPage, View_RealEstateListingPage_0, View_RealEstateListingPage_Host_0, RealEstateListingPageNgFactory */

    /***/
    function iV4v(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RenderType_RealEstateListingPage", function () {
        return RenderType_RealEstateListingPage;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_RealEstateListingPage_0", function () {
        return View_RealEstateListingPage_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_RealEstateListingPage_Host_0", function () {
        return View_RealEstateListingPage_Host_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RealEstateListingPageNgFactory", function () {
        return RealEstateListingPageNgFactory;
      });
      /* harmony import */


      var _styles_real_estate_listing_page_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./styles/real-estate-listing.page.scss.shim.ngstyle */
      "xpvC");
      /* harmony import */


      var _styles_real_estate_listing_shell_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./styles/real-estate-listing.shell.scss.shim.ngstyle */
      "TiB9");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../node_modules/@ionic/angular/ionic-angular.ngfactory */
      "MKJQ");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "sZkV");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _shell_text_shell_text_shell_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../shell/text-shell/text-shell.component.ngfactory */
      "TAV1");
      /* harmony import */


      var _shell_text_shell_text_shell_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../shell/text-shell/text-shell.component */
      "zK/y");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _shell_image_shell_image_shell_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../shell/image-shell/image-shell.component.ngfactory */
      "6LEC");
      /* harmony import */


      var _shell_image_shell_image_shell_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../shell/image-shell/image-shell.component */
      "2gss");
      /* harmony import */


      var _shell_aspect_ratio_aspect_ratio_component_ngfactory__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../shell/aspect-ratio/aspect-ratio.component.ngfactory */
      "M4wD");
      /* harmony import */


      var _shell_aspect_ratio_aspect_ratio_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../shell/aspect-ratio/aspect-ratio.component */
      "B7gC");
      /* harmony import */


      var _real_estate_listing_page__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./real-estate-listing.page */
      "qogU");
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var styles_RealEstateListingPage = [_styles_real_estate_listing_page_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"], _styles_real_estate_listing_shell_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_1__["styles"]];

      var RenderType_RealEstateListingPage = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵcrt"]({
        encapsulation: 0,
        styles: styles_RealEstateListingPage,
        data: {}
      });

      function View_RealEstateListingPage_2(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](0, 0, null, null, 1, "ion-icon", [["class", "like-icon"], ["name", "heart"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonIcon_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](1, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], {
          name: [0, "name"]
        }, null)], function (_ck, _v) {
          var currVal_0 = "heart";

          _ck(_v, 1, 0, currVal_0);
        }, null);
      }

      function View_RealEstateListingPage_3(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](0, 0, null, null, 1, "ion-icon", [["class", "like-icon"], ["name", "heart-outline"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonIcon_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](1, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], {
          name: [0, "name"]
        }, null)], function (_ck, _v) {
          var currVal_0 = "heart-outline";

          _ck(_v, 1, 0, currVal_0);
        }, null);
      }

      function View_RealEstateListingPage_6(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](0, 0, null, null, 1, "ion-icon", [["class", "amenity-icon"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonIcon_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](1, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], {
          src: [0, "src"]
        }, null)], function (_ck, _v) {
          var currVal_0 = _v.parent.context.$implicit.icon;

          _ck(_v, 1, 0, currVal_0);
        }, null);
      }

      function View_RealEstateListingPage_5(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](0, 0, null, null, 6, "ion-col", [["class", "item-amenity"], ["size", "4"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonCol_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonCol"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](1, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCol"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], {
          size: [0, "size"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵand"](16777216, null, 0, 1, null, View_RealEstateListingPage_6)), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](3, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](4, 0, null, 0, 2, "span", [["class", "amenity-value"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](5, 0, null, null, 1, "app-text-shell", [], [[2, "text-loaded", null]], null, null, _shell_text_shell_text_shell_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["View_TextShellComponent_0"], _shell_text_shell_text_shell_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RenderType_TextShellComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](6, 49152, null, 0, _shell_text_shell_text_shell_component__WEBPACK_IMPORTED_MODULE_7__["TextShellComponent"], [], {
          data: [0, "data"]
        }, null)], function (_ck, _v) {
          var currVal_0 = "4";

          _ck(_v, 1, 0, currVal_0);

          var currVal_1 = _v.context.$implicit.icon;

          _ck(_v, 3, 0, currVal_1);

          var currVal_3 = _v.context.$implicit.name;

          _ck(_v, 6, 0, currVal_3);
        }, function (_ck, _v) {
          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 6).textLoaded;

          _ck(_v, 5, 0, currVal_2);
        });
      }

      function View_RealEstateListingPage_7(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](0, 0, null, null, 3, "ion-col", [["class", "has-more-amenities"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonCol_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonCol"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](1, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCol"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](2, 0, null, 0, 1, "span", [["class", "amenities-count"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](3, null, ["+", ""]))], null, function (_ck, _v) {
          var currVal_0 = _v.parent.parent.context.$implicit.amenities.length - 4;

          _ck(_v, 3, 0, currVal_0);
        });
      }

      function View_RealEstateListingPage_4(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](0, 0, null, null, 10, "ion-col", [["class", "amenities-col"], ["size", "12"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonCol_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonCol"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](1, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCol"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], {
          size: [0, "size"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](2, 0, null, 0, 1, "h5", [["class", "amenities-title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, null, ["Amenities"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](4, 0, null, 0, 6, "ion-row", [["class", "amenities-wrapper"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonRow_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonRow"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](5, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonRow"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](6, 0, null, 0, 4, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵand"](16777216, null, null, 1, null, View_RealEstateListingPage_5)), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](8, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["IterableDiffers"]], {
          ngForOf: [0, "ngForOf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵand"](16777216, null, null, 1, null, View_RealEstateListingPage_7)), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](10, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null)], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = "12";

          _ck(_v, 1, 0, currVal_0);

          var currVal_1 = _v.parent.context.$implicit.amenities.slice(0, 4);

          _ck(_v, 8, 0, currVal_1);

          var currVal_2 = _co.i == 3 && _v.parent.context.$implicit.amenities.length > 4;

          _ck(_v, 10, 0, currVal_2);
        }, null);
      }

      function View_RealEstateListingPage_1(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](0, 0, null, null, 77, "div", [["class", "listing-item"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](1, 0, null, null, 12, "ion-row", [["class", "image-row"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonRow_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonRow"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](2, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonRow"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](3, 0, null, 0, 10, "ion-col", [["size", "12"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonCol_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonCol"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](4, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCol"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], {
          size: [0, "size"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](5, 0, null, 0, 8, "a", [["class", "image-anchor"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) {
          var ad = true;

          if ("click" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 6).onClick($event) !== false;
            ad = pd_0 && ad;
          }

          if ("click" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 7).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false;
            ad = pd_1 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](6, 737280, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["RouterLinkDelegate"], [_angular_common__WEBPACK_IMPORTED_MODULE_5__["LocationStrategy"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"], [2, _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterLink"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](7, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["LocationStrategy"]], {
          routerLink: [0, "routerLink"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵpad"](8, 2), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](9, 0, null, null, 4, "app-image-shell", [["animation", "spinner"], ["class", "item-picture"]], [[2, "img-loaded", null], [4, "backgroundImage", null], [1, "display", 0]], null, null, _shell_image_shell_image_shell_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__["View_ImageShellComponent_0"], _shell_image_shell_image_shell_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__["RenderType_ImageShellComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](10, 49152, null, 0, _shell_image_shell_image_shell_component__WEBPACK_IMPORTED_MODULE_10__["ImageShellComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["PLATFORM_ID"]], {
          display: [0, "display"],
          src: [1, "src"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](11, 0, null, 0, 2, "app-aspect-ratio", [], [[4, "padding", null]], null, null, _shell_aspect_ratio_aspect_ratio_component_ngfactory__WEBPACK_IMPORTED_MODULE_11__["View_AspectRatioComponent_0"], _shell_aspect_ratio_aspect_ratio_component_ngfactory__WEBPACK_IMPORTED_MODULE_11__["RenderType_AspectRatioComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](12, 49152, null, 0, _shell_aspect_ratio_aspect_ratio_component__WEBPACK_IMPORTED_MODULE_12__["AspectRatioComponent"], [], {
          ratio: [0, "ratio"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵpod"](13, {
          w: 0,
          h: 1
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](14, 0, null, null, 63, "ion-row", [["class", "description-row"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonRow_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonRow"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](15, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonRow"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](16, 0, null, 0, 19, "ion-col", [["class", "details-col"], ["size", "12"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonCol_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonCol"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](17, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCol"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], {
          size: [0, "size"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](18, 0, null, 0, 17, "ion-row", [["class", "details-wrapper"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonRow_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonRow"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](19, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonRow"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](20, 0, null, 0, 9, "ion-col", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonCol_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonCol"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](21, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCol"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](22, 0, null, 0, 4, "h4", [["class", "item-price"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](23, 0, null, null, 1, "span", [["class", "price-icon"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, null, ["$"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](25, 0, null, null, 1, "app-text-shell", [], [[2, "text-loaded", null]], null, null, _shell_text_shell_text_shell_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["View_TextShellComponent_0"], _shell_text_shell_text_shell_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RenderType_TextShellComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](26, 49152, null, 0, _shell_text_shell_text_shell_component__WEBPACK_IMPORTED_MODULE_7__["TextShellComponent"], [], {
          data: [0, "data"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](27, 0, null, 0, 2, "p", [["class", "item-address"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](28, 0, null, null, 1, "app-text-shell", [], [[2, "text-loaded", null]], null, null, _shell_text_shell_text_shell_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["View_TextShellComponent_0"], _shell_text_shell_text_shell_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RenderType_TextShellComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](29, 49152, null, 0, _shell_text_shell_text_shell_component__WEBPACK_IMPORTED_MODULE_7__["TextShellComponent"], [], {
          data: [0, "data"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](30, 0, null, 0, 5, "ion-col", [["class", "bookmark-col"], ["size", "2"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonCol_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonCol"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](31, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCol"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], {
          size: [0, "size"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵand"](16777216, null, 0, 1, null, View_RealEstateListingPage_2)), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](33, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵand"](16777216, null, 0, 1, null, View_RealEstateListingPage_3)), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](35, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](36, 0, null, 0, 39, "ion-col", [["class", "accommodations-col"], ["size", "12"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonCol_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonCol"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](37, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCol"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], {
          size: [0, "size"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](38, 0, null, 0, 37, "ion-row", [["class", "accommodations-wrapper"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonRow_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonRow"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](39, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonRow"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](40, 0, null, 0, 8, "ion-col", [["class", "item-accommodation"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonCol_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonCol"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](41, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCol"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](42, 0, null, 0, 1, "ion-icon", [["class", "accommodation-icon"], ["src", "./assets/custom-icons/real-estate/guests.svg"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonIcon_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](43, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], {
          src: [0, "src"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](44, 0, null, 0, 1, "span", [["class", "accommodation-property"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, null, ["Guests"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](46, 0, null, 0, 2, "span", [["class", "accommodation-value"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](47, 0, null, null, 1, "app-text-shell", [], [[2, "text-loaded", null]], null, null, _shell_text_shell_text_shell_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["View_TextShellComponent_0"], _shell_text_shell_text_shell_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RenderType_TextShellComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](48, 49152, null, 0, _shell_text_shell_text_shell_component__WEBPACK_IMPORTED_MODULE_7__["TextShellComponent"], [], {
          data: [0, "data"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](49, 0, null, 0, 8, "ion-col", [["class", "item-accommodation"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonCol_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonCol"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](50, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCol"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](51, 0, null, 0, 1, "ion-icon", [["class", "accommodation-icon"], ["src", "./assets/custom-icons/real-estate/bedrooms.svg"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonIcon_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](52, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], {
          src: [0, "src"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](53, 0, null, 0, 1, "span", [["class", "accommodation-property"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, null, ["Bedrooms"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](55, 0, null, 0, 2, "span", [["class", "accommodation-value"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](56, 0, null, null, 1, "app-text-shell", [], [[2, "text-loaded", null]], null, null, _shell_text_shell_text_shell_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["View_TextShellComponent_0"], _shell_text_shell_text_shell_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RenderType_TextShellComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](57, 49152, null, 0, _shell_text_shell_text_shell_component__WEBPACK_IMPORTED_MODULE_7__["TextShellComponent"], [], {
          data: [0, "data"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](58, 0, null, 0, 8, "ion-col", [["class", "item-accommodation"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonCol_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonCol"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](59, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCol"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](60, 0, null, 0, 1, "ion-icon", [["class", "accommodation-icon"], ["src", "./assets/custom-icons/real-estate/bathroom.svg"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonIcon_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](61, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], {
          src: [0, "src"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](62, 0, null, 0, 1, "span", [["class", "accommodation-property"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, null, ["Bathrooms"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](64, 0, null, 0, 2, "span", [["class", "accommodation-value"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](65, 0, null, null, 1, "app-text-shell", [], [[2, "text-loaded", null]], null, null, _shell_text_shell_text_shell_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["View_TextShellComponent_0"], _shell_text_shell_text_shell_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RenderType_TextShellComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](66, 49152, null, 0, _shell_text_shell_text_shell_component__WEBPACK_IMPORTED_MODULE_7__["TextShellComponent"], [], {
          data: [0, "data"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](67, 0, null, 0, 8, "ion-col", [["class", "item-accommodation"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonCol_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonCol"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](68, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCol"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](69, 0, null, 0, 1, "ion-icon", [["class", "accommodation-icon"], ["src", "./assets/custom-icons/real-estate/patio.svg"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonIcon_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](70, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], {
          src: [0, "src"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](71, 0, null, 0, 1, "span", [["class", "accommodation-property"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, null, ["Patios"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](73, 0, null, 0, 2, "span", [["class", "accommodation-value"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](74, 0, null, null, 1, "app-text-shell", [], [[2, "text-loaded", null]], null, null, _shell_text_shell_text_shell_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["View_TextShellComponent_0"], _shell_text_shell_text_shell_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RenderType_TextShellComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](75, 49152, null, 0, _shell_text_shell_text_shell_component__WEBPACK_IMPORTED_MODULE_7__["TextShellComponent"], [], {
          data: [0, "data"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵand"](16777216, null, 0, 1, null, View_RealEstateListingPage_4)), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](77, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null)], function (_ck, _v) {
          var currVal_0 = "12";

          _ck(_v, 4, 0, currVal_0);

          _ck(_v, 6, 0);

          var currVal_3 = _ck(_v, 8, 0, "/app/categories/real-estate/", _v.context.$implicit.slug);

          _ck(_v, 7, 0, currVal_3);

          var currVal_7 = "cover";
          var currVal_8 = _v.context.$implicit.picture;

          _ck(_v, 10, 0, currVal_7, currVal_8);

          var currVal_10 = _ck(_v, 13, 0, 365, 125);

          _ck(_v, 12, 0, currVal_10);

          var currVal_11 = "12";

          _ck(_v, 17, 0, currVal_11);

          var currVal_13 = _v.context.$implicit.price;

          _ck(_v, 26, 0, currVal_13);

          var currVal_15 = _v.context.$implicit.address;

          _ck(_v, 29, 0, currVal_15);

          var currVal_16 = "2";

          _ck(_v, 31, 0, currVal_16);

          var currVal_17 = _v.context.$implicit.liked;

          _ck(_v, 33, 0, currVal_17);

          var currVal_18 = !_v.context.$implicit.liked;

          _ck(_v, 35, 0, currVal_18);

          var currVal_19 = "12";

          _ck(_v, 37, 0, currVal_19);

          var currVal_20 = "./assets/custom-icons/real-estate/guests.svg";

          _ck(_v, 43, 0, currVal_20);

          var currVal_22 = _v.context.$implicit.accommodations == null ? null : _v.context.$implicit.accommodations.guests;

          _ck(_v, 48, 0, currVal_22);

          var currVal_23 = "./assets/custom-icons/real-estate/bedrooms.svg";

          _ck(_v, 52, 0, currVal_23);

          var currVal_25 = _v.context.$implicit.accommodations == null ? null : _v.context.$implicit.accommodations.bedrooms;

          _ck(_v, 57, 0, currVal_25);

          var currVal_26 = "./assets/custom-icons/real-estate/bathroom.svg";

          _ck(_v, 61, 0, currVal_26);

          var currVal_28 = _v.context.$implicit.accommodations == null ? null : _v.context.$implicit.accommodations.bathrooms;

          _ck(_v, 66, 0, currVal_28);

          var currVal_29 = "./assets/custom-icons/real-estate/patio.svg";

          _ck(_v, 70, 0, currVal_29);

          var currVal_31 = _v.context.$implicit.accommodations == null ? null : _v.context.$implicit.accommodations.patios;

          _ck(_v, 75, 0, currVal_31);

          var currVal_32 = _v.context.$implicit.amenities;

          _ck(_v, 77, 0, currVal_32);
        }, function (_ck, _v) {
          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 7).target;

          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 7).href;

          _ck(_v, 5, 0, currVal_1, currVal_2);

          var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 10).imageLoaded;

          var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 10).backgroundImage;

          var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 10).display;

          _ck(_v, 9, 0, currVal_4, currVal_5, currVal_6);

          var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 12).ratioPadding;

          _ck(_v, 11, 0, currVal_9);

          var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 26).textLoaded;

          _ck(_v, 25, 0, currVal_12);

          var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 29).textLoaded;

          _ck(_v, 28, 0, currVal_14);

          var currVal_21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 48).textLoaded;

          _ck(_v, 47, 0, currVal_21);

          var currVal_24 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 57).textLoaded;

          _ck(_v, 56, 0, currVal_24);

          var currVal_27 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 66).textLoaded;

          _ck(_v, 65, 0, currVal_27);

          var currVal_30 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 75).textLoaded;

          _ck(_v, 74, 0, currVal_30);
        });
      }

      function View_RealEstateListingPage_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](0, 0, null, null, 11, "ion-header", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonHeader_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonHeader"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](1, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonHeader"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](2, 0, null, 0, 9, "ion-toolbar", [["color", "primary"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonToolbar_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonToolbar"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](3, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonToolbar"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], {
          color: [0, "color"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](4, 0, null, 0, 4, "ion-buttons", [["slot", "start"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonButtons_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonButtons"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](5, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonButtons"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](6, 0, null, 0, 2, "ion-back-button", [["defaultHref", "app/categories"]], null, [[null, "click"]], function (_v, en, $event) {
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
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](9, 0, null, 0, 2, "ion-title", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonTitle_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonTitle"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](10, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonTitle"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, 0, ["Real Estate Listing"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](12, 0, null, null, 3, "ion-content", [["class", "real-estate-listing-content"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonContent_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonContent"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](13, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonContent"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵand"](16777216, null, 0, 1, null, View_RealEstateListingPage_1)), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](15, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["IterableDiffers"]], {
          ngForOf: [0, "ngForOf"]
        }, null)], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = "primary";

          _ck(_v, 3, 0, currVal_0);

          var currVal_1 = "app/categories";

          _ck(_v, 7, 0, currVal_1);

          var currVal_2 = "app/categories";

          _ck(_v, 8, 0, currVal_2);

          var currVal_3 = _co.listing.items;

          _ck(_v, 15, 0, currVal_3);
        }, null);
      }

      function View_RealEstateListingPage_Host_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](0, 0, null, null, 1, "app-real-estate-listing", [], [[2, "is-shell", null]], null, null, View_RealEstateListingPage_0, RenderType_RealEstateListingPage)), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](1, 114688, null, 0, _real_estate_listing_page__WEBPACK_IMPORTED_MODULE_13__["RealEstateListingPage"], [_angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"]], null, null)], function (_ck, _v) {
          _ck(_v, 1, 0);
        }, function (_ck, _v) {
          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 1).isShell;

          _ck(_v, 0, 0, currVal_0);
        });
      }

      var RealEstateListingPageNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵccf"]("app-real-estate-listing", _real_estate_listing_page__WEBPACK_IMPORTED_MODULE_13__["RealEstateListingPage"], View_RealEstateListingPage_Host_0, {}, {}, []);
      /***/

    },

    /***/
    "qogU":
    /*!*****************************************************************!*\
      !*** ./src/app/real-estate/listing/real-estate-listing.page.ts ***!
      \*****************************************************************/

    /*! exports provided: RealEstateListingPage */

    /***/
    function qogU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RealEstateListingPage", function () {
        return RealEstateListingPage;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "iInd");

      var RealEstateListingPage = /*#__PURE__*/function () {
        function RealEstateListingPage(route) {
          _classCallCheck(this, RealEstateListingPage);

          this.route = route;
        }

        _createClass(RealEstateListingPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.route.data.subscribe(function (resolvedRouteData) {
              var listingDataStore = resolvedRouteData['data'];
              listingDataStore.state.subscribe(function (state) {
                _this.listing = state;
              }, function (error) {});
            }, function (error) {});
          }
        }, {
          key: "isShell",
          get: function get() {
            return this.listing && this.listing.isShell ? true : false;
          }
        }]);

        return RealEstateListingPage;
      }();
      /***/

    },

    /***/
    "xpvC":
    /*!******************************************************************************************!*\
      !*** ./src/app/real-estate/listing/styles/real-estate-listing.page.scss.shim.ngstyle.js ***!
      \******************************************************************************************/

    /*! exports provided: styles */

    /***/
    function xpvC(module, __webpack_exports__, __webpack_require__) {
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


      var styles = ["[_nghost-%COMP%] {\n  --page-margin: var(--app-broad-margin);\n  --page-background: var(--app-background);\n  --page-amenity-vertical-gutter: 6px;\n  --page-amenity-horizontal-gutter: 4px;\n  --page-color: #d9453a;\n}\n\n.real-estate-listing-content[_ngcontent-%COMP%] {\n  --background: var(--page-background);\n}\n\n.listing-item[_ngcontent-%COMP%]   .image-row[_ngcontent-%COMP%] {\n  --ion-grid-column-padding: 0px;\n}\n\n.listing-item[_ngcontent-%COMP%]   .image-row[_ngcontent-%COMP%]   .image-anchor[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.listing-item[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%] {\n  --ion-grid-column-padding: 0px;\n  padding-bottom: var(--page-margin);\n}\n\n.listing-item[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%]   .details-col[_ngcontent-%COMP%] {\n  padding: calc(var(--page-margin) / 2) var(--page-margin) 0px;\n}\n\n.listing-item[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%]   .details-col[_ngcontent-%COMP%]   .details-wrapper[_ngcontent-%COMP%] {\n  justify-content: space-between;\n}\n\n.listing-item[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%]   .details-col[_ngcontent-%COMP%]   .details-wrapper[_ngcontent-%COMP%]   .item-price[_ngcontent-%COMP%] {\n  margin: 0px 0px 5px;\n  font-weight: 500;\n  color: var(--ion-color-dark-tint);\n  display: flex;\n  align-items: center;\n}\n\n.listing-item[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%]   .details-col[_ngcontent-%COMP%]   .details-wrapper[_ngcontent-%COMP%]   .item-price[_ngcontent-%COMP%]   .price-icon[_ngcontent-%COMP%] {\n  margin-right: 5px;\n}\n\n.listing-item[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%]   .details-col[_ngcontent-%COMP%]   .details-wrapper[_ngcontent-%COMP%]   .item-address[_ngcontent-%COMP%] {\n  margin: 0px;\n  font-size: 14px;\n  color: var(--ion-color-medium-tint);\n}\n\n.listing-item[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%]   .details-col[_ngcontent-%COMP%]   .details-wrapper[_ngcontent-%COMP%]   .bookmark-col[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n}\n\n.listing-item[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%]   .details-col[_ngcontent-%COMP%]   .details-wrapper[_ngcontent-%COMP%]   .bookmark-col[_ngcontent-%COMP%]   .like-icon[_ngcontent-%COMP%] {\n  font-size: 32px;\n  color: var(--page-color);\n}\n\n.listing-item[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%]   .accommodations-col[_ngcontent-%COMP%] {\n  padding: 0px var(--page-margin) var(--page-margin);\n}\n\n.listing-item[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%]   .accommodations-col[_ngcontent-%COMP%]   .accommodations-wrapper[_ngcontent-%COMP%] {\n  padding-top: calc(var(--page-margin));\n}\n\n.listing-item[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%]   .accommodations-col[_ngcontent-%COMP%]   .item-accommodation[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  max-width: -webkit-fit-content;\n  max-width: -moz-fit-content;\n  max-width: fit-content;\n}\n\n.listing-item[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%]   .accommodations-col[_ngcontent-%COMP%]   .item-accommodation[_ngcontent-%COMP%]    + .item-accommodation[_ngcontent-%COMP%] {\n  padding-left: calc((var(--page-margin) / 2) * 3);\n}\n\n.listing-item[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%]   .accommodations-col[_ngcontent-%COMP%]   .item-accommodation[_ngcontent-%COMP%]   .accommodation-property[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--ion-color-medium-tint);\n}\n\n.listing-item[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%]   .accommodations-col[_ngcontent-%COMP%]   .item-accommodation[_ngcontent-%COMP%]   .accommodation-value[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-weight: 400;\n  font-size: 14px;\n  color: var(--ion-color-medium-tint);\n  margin-top: 4px;\n}\n\n.listing-item[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%]   .accommodations-col[_ngcontent-%COMP%]   .item-accommodation[_ngcontent-%COMP%]   .accommodation-name[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 12px;\n  color: var(--ion-color-medium-tint);\n}\n\n.listing-item[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%]   .accommodations-col[_ngcontent-%COMP%]   .item-accommodation[_ngcontent-%COMP%]   .accommodation-icon[_ngcontent-%COMP%] {\n  color: var(--ion-color-medium-tint);\n  font-size: 30px;\n}\n\n.listing-item[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%]   .amenities-col[_ngcontent-%COMP%] {\n  padding: 0px var(--page-margin) calc(var(--page-margin) / 2);\n  background: var(--app-background-shade);\n}\n\n.listing-item[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%]   .amenities-col[_ngcontent-%COMP%]   .amenities-title[_ngcontent-%COMP%] {\n  margin: var(--page-margin) 0px calc(var(--page-margin) / 2);\n  font-size: 12px;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  color: var(--ion-color-medium-shade);\n}\n\n.listing-item[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%]   .amenities-col[_ngcontent-%COMP%]   .amenities-wrapper[_ngcontent-%COMP%] {\n  margin: 0px calc(var(--page-amenity-horizontal-gutter) * -1);\n}\n\n.listing-item[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%]   .amenities-col[_ngcontent-%COMP%]   .amenities-wrapper[_ngcontent-%COMP%]   .item-amenity[_ngcontent-%COMP%] {\n  padding: var(--page-amenity-vertical-gutter) var(--page-amenity-horizontal-gutter);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.listing-item[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%]   .amenities-col[_ngcontent-%COMP%]   .amenities-wrapper[_ngcontent-%COMP%]   .item-amenity[_ngcontent-%COMP%]   .amenity-icon[_ngcontent-%COMP%] {\n  color: var(--ion-color-medium-tint);\n  font-size: 30px;\n  flex-shrink: 0;\n}\n\n.listing-item[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%]   .amenities-col[_ngcontent-%COMP%]   .amenities-wrapper[_ngcontent-%COMP%]   .item-amenity[_ngcontent-%COMP%]   .amenity-value[_ngcontent-%COMP%] {\n  display: block;\n  font-weight: 300;\n  font-size: 12px;\n  color: var(--ion-color-medium-tint);\n  margin-left: calc(var(--page-amenity-horizontal-gutter) * 2);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVhbC1lc3RhdGUvbGlzdGluZy9zdHlsZXMvcmVhbC1lc3RhdGUtbGlzdGluZy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxzQ0FBQTtFQUNBLHdDQUFBO0VBRUEsbUNBQUE7RUFDQSxxQ0FBQTtFQUVBLHFCQUFBO0FBSEY7O0FBT0E7RUFDRSxvQ0FBQTtBQUpGOztBQVFFO0VBQ0UsOEJBQUE7QUFMSjs7QUFPSTtFQUNFLGNBQUE7QUFMTjs7QUFTRTtFQUNFLDhCQUFBO0VBRUEsa0NBQUE7QUFSSjs7QUFVSTtFQUNFLDREQUFBO0FBUk47O0FBVU07RUFDRSw4QkFBQTtBQVJSOztBQVVRO0VBQ0UsbUJBQUE7RUFDSCxnQkFBQTtFQUNHLGlDQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBUlY7O0FBVVU7RUFDRSxpQkFBQTtBQVJaOztBQVlRO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSxtQ0FBQTtBQVZWOztBQWFRO0VBQ0UsYUFBQTtFQUNBLHlCQUFBO0FBWFY7O0FBYVU7RUFDRSxlQUFBO0VBQ0Esd0JBQUE7QUFYWjs7QUFpQkk7RUFDRSxrREFBQTtBQWZOOztBQWlCTTtFQUNFLHFDQUFBO0FBZlI7O0FBa0JNO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUFBLDJCQUFBO0VBQUEsc0JBQUE7QUFoQlI7O0FBa0JRO0VBQ0UsZ0RBQUE7QUFoQlY7O0FBbUJRO0VBQ0UsZUFBQTtFQUNBLG1DQUFBO0FBakJWOztBQW9CUTtFQUNFLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUNBQUE7RUFDQSxlQUFBO0FBbEJWOztBQXFCUTtFQUNFLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLG1DQUFBO0FBbkJWOztBQXNCUTtFQUNFLG1DQUFBO0VBQ0EsZUFBQTtBQXBCVjs7QUF5Qkk7RUFDRSw0REFBQTtFQUNBLHVDQUFBO0FBdkJOOztBQXlCTTtFQUNFLDJEQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQ0FBQTtBQXZCUjs7QUEwQk07RUFDRSw0REFBQTtBQXhCUjs7QUEwQlE7RUFDRSxrRkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBeEJWOztBQTBCVTtFQUNFLG1DQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUF4Qlo7O0FBMkJVO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLG1DQUFBO0VBQ0EsNERBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUF6QloiLCJmaWxlIjoic3JjL2FwcC9yZWFsLWVzdGF0ZS9saXN0aW5nL3N0eWxlcy9yZWFsLWVzdGF0ZS1saXN0aW5nLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEN1c3RvbSB2YXJpYWJsZXNcbi8vIE5vdGU6ICBUaGVzZSBvbmVzIHdlcmUgYWRkZWQgYnkgdXMgYW5kIGhhdmUgbm90aGluZyB0byBkbyB3aXRoIElvbmljIENTUyBDdXN0b20gUHJvcGVydGllc1xuOmhvc3Qge1xuICAtLXBhZ2UtbWFyZ2luOiB2YXIoLS1hcHAtYnJvYWQtbWFyZ2luKTtcbiAgLS1wYWdlLWJhY2tncm91bmQ6IHZhcigtLWFwcC1iYWNrZ3JvdW5kKTtcblxuICAtLXBhZ2UtYW1lbml0eS12ZXJ0aWNhbC1ndXR0ZXI6IDZweDtcbiAgLS1wYWdlLWFtZW5pdHktaG9yaXpvbnRhbC1ndXR0ZXI6IDRweDtcblxuICAtLXBhZ2UtY29sb3I6ICNkOTQ1M2E7XG59XG5cbi8vIE5vdGU6ICBBbGwgdGhlIENTUyB2YXJpYWJsZXMgZGVmaW5lZCBiZWxvdyBhcmUgb3ZlcnJpZGVzIG9mIElvbmljIGVsZW1lbnRzIENTUyBDdXN0b20gUHJvcGVydGllc1xuLnJlYWwtZXN0YXRlLWxpc3RpbmctY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tcGFnZS1iYWNrZ3JvdW5kKTtcbn1cblxuLmxpc3RpbmctaXRlbSB7XG4gIC5pbWFnZS1yb3cge1xuICAgIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcblxuICAgIC5pbWFnZS1hbmNob3Ige1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuICB9XG5cbiAgLmRlc2NyaXB0aW9uLXJvdyB7XG4gICAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMHB4O1xuXG4gICAgcGFkZGluZy1ib3R0b206IHZhcigtLXBhZ2UtbWFyZ2luKTtcblxuICAgIC5kZXRhaWxzLWNvbCB7XG4gICAgICBwYWRkaW5nOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpIHZhcigtLXBhZ2UtbWFyZ2luKSAwcHg7XG5cbiAgICAgIC5kZXRhaWxzLXdyYXBwZXIge1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cbiAgICAgICAgLml0ZW0tcHJpY2Uge1xuICAgICAgICAgIG1hcmdpbjogMHB4IDBweCA1cHg7XG4gICAgXHRcdFx0Zm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmstdGludCk7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICAgICAgLnByaWNlLWljb24ge1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLml0ZW0tYWRkcmVzcyB7XG4gICAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXRpbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgLmJvb2ttYXJrLWNvbCB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuXG4gICAgICAgICAgLmxpa2UtaWNvbiB7XG4gICAgICAgICAgICBmb250LXNpemU6IDMycHg7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tcGFnZS1jb2xvcik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmFjY29tbW9kYXRpb25zLWNvbCB7XG4gICAgICBwYWRkaW5nOiAwcHggdmFyKC0tcGFnZS1tYXJnaW4pIHZhcigtLXBhZ2UtbWFyZ2luKTtcblxuICAgICAgLmFjY29tbW9kYXRpb25zLXdyYXBwZXIge1xuICAgICAgICBwYWRkaW5nLXRvcDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikpO1xuICAgICAgfVxuXG4gICAgICAuaXRlbS1hY2NvbW1vZGF0aW9uIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgbWF4LXdpZHRoOiBmaXQtY29udGVudDtcblxuICAgICAgICAmICsgLml0ZW0tYWNjb21tb2RhdGlvbiB7XG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiBjYWxjKCh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKSAqIDMpO1xuICAgICAgICB9XG5cbiAgICAgICAgLmFjY29tbW9kYXRpb24tcHJvcGVydHkge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS10aW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5hY2NvbW1vZGF0aW9uLXZhbHVlIHtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tdGludCk7XG4gICAgICAgICAgbWFyZ2luLXRvcDogNHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmFjY29tbW9kYXRpb24tbmFtZSB7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS10aW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5hY2NvbW1vZGF0aW9uLWljb24ge1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXRpbnQpO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC5hbWVuaXRpZXMtY29sIHtcbiAgICAgIHBhZGRpbmc6IDBweCB2YXIoLS1wYWdlLW1hcmdpbikgY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWFwcC1iYWNrZ3JvdW5kLXNoYWRlKTtcblxuICAgICAgLmFtZW5pdGllcy10aXRsZSB7XG4gICAgICAgIG1hcmdpbjogdmFyKC0tcGFnZS1tYXJnaW4pIDBweCBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcbiAgICAgIH1cblxuICAgICAgLmFtZW5pdGllcy13cmFwcGVyIHtcbiAgICAgICAgbWFyZ2luOiAwcHggY2FsYyh2YXIoLS1wYWdlLWFtZW5pdHktaG9yaXpvbnRhbC1ndXR0ZXIpICogLTEpO1xuXG4gICAgICAgIC5pdGVtLWFtZW5pdHkge1xuICAgICAgICAgIHBhZGRpbmc6IHZhcigtLXBhZ2UtYW1lbml0eS12ZXJ0aWNhbC1ndXR0ZXIpIHZhcigtLXBhZ2UtYW1lbml0eS1ob3Jpem9udGFsLWd1dHRlcik7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gICAgICAgICAgLmFtZW5pdHktaWNvbiB7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS10aW50KTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgICAgICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5hbWVuaXR5LXZhbHVlIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXRpbnQpO1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IGNhbGModmFyKC0tcGFnZS1hbWVuaXR5LWhvcml6b250YWwtZ3V0dGVyKSAqIDIpO1xuICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ== */"];
      /***/
    }
  }]);
})();
//# sourceMappingURL=real-estate-listing-real-estate-listing-module-ngfactory-es5.js.map