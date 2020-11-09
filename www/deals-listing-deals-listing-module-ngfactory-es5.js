function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["deals-listing-deals-listing-module-ngfactory"], {
  /***/
  "./node_modules/dayjs/plugin/relativeTime.js":
  /*!***************************************************!*\
    !*** ./node_modules/dayjs/plugin/relativeTime.js ***!
    \***************************************************/

  /*! no static exports found */

  /***/
  function node_modulesDayjsPluginRelativeTimeJs(module, exports, __webpack_require__) {
    !function (r, t) {
      true ? module.exports = t() : undefined;
    }(this, function () {
      "use strict";

      return function (r, t, e) {
        r = r || {};
        var n = t.prototype,
            o = {
          future: "in %s",
          past: "%s ago",
          s: "a few seconds",
          m: "a minute",
          mm: "%d minutes",
          h: "an hour",
          hh: "%d hours",
          d: "a day",
          dd: "%d days",
          M: "a month",
          MM: "%d months",
          y: "a year",
          yy: "%d years"
        };
        e.en.relativeTime = o;

        var d = function d(t, n, _d, i) {
          for (var u, a, s, f = _d.$locale().relativeTime || o, l = r.thresholds || [{
            l: "s",
            r: 44,
            d: "second"
          }, {
            l: "m",
            r: 89
          }, {
            l: "mm",
            r: 44,
            d: "minute"
          }, {
            l: "h",
            r: 89
          }, {
            l: "hh",
            r: 21,
            d: "hour"
          }, {
            l: "d",
            r: 35
          }, {
            l: "dd",
            r: 25,
            d: "day"
          }, {
            l: "M",
            r: 45
          }, {
            l: "MM",
            r: 10,
            d: "month"
          }, {
            l: "y",
            r: 17
          }, {
            l: "yy",
            d: "year"
          }], h = l.length, m = 0; m < h; m += 1) {
            var c = l[m];
            c.d && (u = i ? e(t).diff(_d, c.d, !0) : _d.diff(t, c.d, !0));
            var y = (r.rounding || Math.round)(Math.abs(u));

            if (s = u > 0, y <= c.r || !c.r) {
              y <= 1 && m > 0 && (c = l[m - 1]);
              var p = f[c.l];
              a = "string" == typeof p ? p.replace("%d", y) : p(y, n, c.l, s);
              break;
            }
          }

          return n ? a : (s ? f.future : f.past).replace("%s", a);
        };

        n.to = function (r, t) {
          return d(r, t, this, !0);
        }, n.from = function (r, t) {
          return d(r, t, this);
        };

        var i = function i(r) {
          return r.$u ? e.utc() : e();
        };

        n.toNow = function (r) {
          return this.to(i(this), r);
        }, n.fromNow = function (r) {
          return this.from(i(this), r);
        };
      };
    });
    /***/
  },

  /***/
  "./src/app/deals/listing/deals-listing.module.ngfactory.js":
  /*!*****************************************************************!*\
    !*** ./src/app/deals/listing/deals-listing.module.ngfactory.js ***!
    \*****************************************************************/

  /*! exports provided: DealsListingPageModuleNgFactory */

  /***/
  function srcAppDealsListingDealsListingModuleNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DealsListingPageModuleNgFactory", function () {
      return DealsListingPageModuleNgFactory;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _deals_listing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./deals-listing.module */
    "./src/app/deals/listing/deals-listing.module.ts");
    /* harmony import */


    var _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../node_modules/@angular/router/router.ngfactory */
    "./node_modules/@angular/router/router.ngfactory.js");
    /* harmony import */


    var _deals_listing_page_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./deals-listing.page.ngfactory */
    "./src/app/deals/listing/deals-listing.page.ngfactory.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _shell_shell_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../shell/shell.module */
    "./src/app/shell/shell.module.ts");
    /* harmony import */


    var _shell_config_app_shell_config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../shell/config/app-shell.config */
    "./src/app/shell/config/app-shell.config.ts");
    /* harmony import */


    var _deals_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../deals.service */
    "./src/app/deals/deals.service.ts");
    /* harmony import */


    var _deals_listing_resolver__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./deals-listing.resolver */
    "./src/app/deals/listing/deals-listing.resolver.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _components_components_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ../../components/components.module */
    "./src/app/components/components.module.ts");
    /* harmony import */


    var angular_pipes__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! angular-pipes */
    "./node_modules/angular-pipes/fesm2015/angular-pipes.js");
    /* harmony import */


    var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ../../pipes/pipes.module */
    "./src/app/pipes/pipes.module.ts");
    /* harmony import */


    var _deals_listing_page__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./deals-listing.page */
    "./src/app/deals/listing/deals-listing.page.ts");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
     * tslint:disable
     */


    var DealsListingPageModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_deals_listing_module__WEBPACK_IMPORTED_MODULE_1__["DealsListingPageModule"], [], function (_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_router_router_lNgFactory"], _deals_listing_page_ngfactory__WEBPACK_IMPORTED_MODULE_3__["DealsListingPageNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AngularDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AngularDelegate"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"], [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AngularDelegate"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["PopoverController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["PopoverController"], [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AngularDelegate"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_n"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_n"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpXsrfTokenExtractor"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_common_http_http_g"], [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_common_http_http_e"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_common_http_http_h"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_common_http_http_h"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpXsrfTokenExtractor"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_common_http_http_f"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HTTP_INTERCEPTORS"], function (p0_0) {
        return [p0_0];
      }, [_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_common_http_http_h"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_common_http_http_d"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_common_http_http_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["XhrFactory"], null, [_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_common_http_http_d"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpXhrBackend"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpXhrBackend"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["XhrFactory"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpBackend"], null, [_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpXhrBackend"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpHandler"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["ɵHttpInterceptingHandler"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpBackend"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpHandler"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"], function (p0_0) {
        return [_shell_shell_module__WEBPACK_IMPORTED_MODULE_8__["ɵ0"](p0_0)];
      }, [_shell_config_app_shell_config__WEBPACK_IMPORTED_MODULE_9__["AppShellConfig"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _deals_service__WEBPACK_IMPORTED_MODULE_10__["DealsService"], _deals_service__WEBPACK_IMPORTED_MODULE_10__["DealsService"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _deals_listing_resolver__WEBPACK_IMPORTED_MODULE_11__["DealsListingResolver"], _deals_listing_resolver__WEBPACK_IMPORTED_MODULE_11__["DealsListingResolver"], [_deals_service__WEBPACK_IMPORTED_MODULE_10__["DealsService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_d"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientXsrfModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientXsrfModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _shell_shell_module__WEBPACK_IMPORTED_MODULE_8__["ShellModule"], _shell_shell_module__WEBPACK_IMPORTED_MODULE_8__["ShellModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _components_components_module__WEBPACK_IMPORTED_MODULE_13__["ComponentsModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_13__["ComponentsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, angular_pipes__WEBPACK_IMPORTED_MODULE_14__["NgFloorPipeModule"], angular_pipes__WEBPACK_IMPORTED_MODULE_14__["NgFloorPipeModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_15__["PipesModule"], _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_15__["PipesModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _deals_listing_module__WEBPACK_IMPORTED_MODULE_1__["DealsListingPageModule"], _deals_listing_module__WEBPACK_IMPORTED_MODULE_1__["DealsListingPageModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_common_http_http_e"], "XSRF-TOKEN", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_common_http_http_f"], "X-XSRF-TOKEN", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_12__["ROUTES"], function () {
        return [[{
          path: "",
          component: _deals_listing_page__WEBPACK_IMPORTED_MODULE_16__["DealsListingPage"],
          resolve: {
            data: _deals_listing_module__WEBPACK_IMPORTED_MODULE_1__["ɵ0"]
          }
        }]];
      }, [])]);
    });
    /***/

  },

  /***/
  "./src/app/deals/listing/deals-listing.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/deals/listing/deals-listing.module.ts ***!
    \*******************************************************/

  /*! exports provided: DealsListingPageModule, ɵ0 */

  /***/
  function srcAppDealsListingDealsListingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DealsListingPageModule", function () {
      return DealsListingPageModule;
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


    var _deals_listing_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./deals-listing.page */
    "./src/app/deals/listing/deals-listing.page.ts");
    /* harmony import */


    var _deals_listing_resolver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./deals-listing.resolver */
    "./src/app/deals/listing/deals-listing.resolver.ts");

    var ɵ0 = _deals_listing_resolver__WEBPACK_IMPORTED_MODULE_2__["DealsListingResolver"];
    var routes = [{
      path: '',
      component: _deals_listing_page__WEBPACK_IMPORTED_MODULE_1__["DealsListingPage"],
      resolve: {
        data: ɵ0
      }
    }];

    var DealsListingPageModule = function DealsListingPageModule() {
      _classCallCheck(this, DealsListingPageModule);
    };
    /***/

  },

  /***/
  "./src/app/deals/listing/deals-listing.page.ngfactory.js":
  /*!***************************************************************!*\
    !*** ./src/app/deals/listing/deals-listing.page.ngfactory.js ***!
    \***************************************************************/

  /*! exports provided: RenderType_DealsListingPage, View_DealsListingPage_0, View_DealsListingPage_Host_0, DealsListingPageNgFactory */

  /***/
  function srcAppDealsListingDealsListingPageNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_DealsListingPage", function () {
      return RenderType_DealsListingPage;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_DealsListingPage_0", function () {
      return View_DealsListingPage_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_DealsListingPage_Host_0", function () {
      return View_DealsListingPage_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DealsListingPageNgFactory", function () {
      return DealsListingPageNgFactory;
    });
    /* harmony import */


    var _styles_deals_listing_page_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./styles/deals-listing.page.scss.shim.ngstyle */
    "./src/app/deals/listing/styles/deals-listing.page.scss.shim.ngstyle.js");
    /* harmony import */


    var _styles_deals_listing_shell_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./styles/deals-listing.shell.scss.shim.ngstyle */
    "./src/app/deals/listing/styles/deals-listing.shell.scss.shim.ngstyle.js");
    /* harmony import */


    var _styles_deals_listing_ios_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./styles/deals-listing.ios.scss.shim.ngstyle */
    "./src/app/deals/listing/styles/deals-listing.ios.scss.shim.ngstyle.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../node_modules/@ionic/angular/ionic-angular.ngfactory */
    "./node_modules/@ionic/angular/ionic-angular.ngfactory.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _shell_text_shell_text_shell_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../shell/text-shell/text-shell.component.ngfactory */
    "./src/app/shell/text-shell/text-shell.component.ngfactory.js");
    /* harmony import */


    var _shell_text_shell_text_shell_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../shell/text-shell/text-shell.component */
    "./src/app/shell/text-shell/text-shell.component.ts");
    /* harmony import */


    var _components_countdown_timer_countdown_timer_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../components/countdown-timer/countdown-timer.component.ngfactory */
    "./src/app/components/countdown-timer/countdown-timer.component.ngfactory.js");
    /* harmony import */


    var _components_countdown_timer_countdown_timer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../../components/countdown-timer/countdown-timer.component */
    "./src/app/components/countdown-timer/countdown-timer.component.ts");
    /* harmony import */


    var _shell_aspect_ratio_aspect_ratio_component_ngfactory__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../../shell/aspect-ratio/aspect-ratio.component.ngfactory */
    "./src/app/shell/aspect-ratio/aspect-ratio.component.ngfactory.js");
    /* harmony import */


    var _shell_aspect_ratio_aspect_ratio_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ../../shell/aspect-ratio/aspect-ratio.component */
    "./src/app/shell/aspect-ratio/aspect-ratio.component.ts");
    /* harmony import */


    var _shell_image_shell_image_shell_component_ngfactory__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ../../shell/image-shell/image-shell.component.ngfactory */
    "./src/app/shell/image-shell/image-shell.component.ngfactory.js");
    /* harmony import */


    var _shell_image_shell_image_shell_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ../../shell/image-shell/image-shell.component */
    "./src/app/shell/image-shell/image-shell.component.ts");
    /* harmony import */


    var _pipes_time_difference_pipe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ../../pipes/time-difference.pipe */
    "./src/app/pipes/time-difference.pipe.ts");
    /* harmony import */


    var _pipes_time_ago_pipe__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ../../pipes/time-ago.pipe */
    "./src/app/pipes/time-ago.pipe.ts");
    /* harmony import */


    var _deals_listing_page__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./deals-listing.page */
    "./src/app/deals/listing/deals-listing.page.ts");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
     * tslint:disable
     */


    var styles_DealsListingPage = [_styles_deals_listing_page_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"], _styles_deals_listing_shell_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_1__["styles"], _styles_deals_listing_ios_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_2__["styles"]];

    var RenderType_DealsListingPage = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵcrt"]({
      encapsulation: 0,
      styles: styles_DealsListingPage,
      data: {}
    });

    function View_DealsListingPage_3(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](0, 0, null, null, 10, "ion-col", [["class", "call-to-action-col"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_IonCol_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_IonCol"])), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](1, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonCol"], [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](2, 0, null, 0, 8, "ion-button", [["class", "claim-button"], ["color", "claim"], ["expand", "block"]], null, [[null, "click"]], function (_v, en, $event) {
        var ad = true;

        if ("click" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v, 4).onClick() !== false;
          ad = pd_0 && ad;
        }

        if ("click" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v, 6).onClick($event) !== false;
          ad = pd_1 && ad;
        }

        return ad;
      }, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_IonButton_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_IonButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](3, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]], {
        color: [0, "color"],
        expand: [1, "expand"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](4, 16384, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLink"], [_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]], {
        routerLink: [0, "routerLink"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵpad"](5, 2), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](6, 737280, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["RouterLinkDelegate"], [_angular_common__WEBPACK_IMPORTED_MODULE_7__["LocationStrategy"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], [2, _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLink"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](7, 0, null, 0, 1, "span", [["class", "button-cta"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵted"](-1, null, ["CLAIM"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](9, 0, null, 0, 1, "ion-icon", [["name", "arrow-forward"], ["slot", "end"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_IonIcon_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_IonIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](10, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]], {
        name: [0, "name"]
      }, null)], function (_ck, _v) {
        var currVal_0 = "claim";
        var currVal_1 = "block";

        _ck(_v, 3, 0, currVal_0, currVal_1);

        var currVal_2 = _ck(_v, 5, 0, "/app/categories/deals/", _v.parent.context.$implicit.slug);

        _ck(_v, 4, 0, currVal_2);

        _ck(_v, 6, 0);

        var currVal_3 = "arrow-forward";

        _ck(_v, 10, 0, currVal_3);
      }, null);
    }

    function View_DealsListingPage_4(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](0, 0, null, null, 3, "ion-col", [["class", "call-to-action-col"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_IonCol_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_IonCol"])), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](1, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonCol"], [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](2, 0, null, 0, 1, "span", [["class", "expired-cta"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵted"](-1, null, ["EXPIRED"]))], null, null);
    }

    function View_DealsListingPage_5(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](0, 0, null, null, 4, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](1, 0, null, null, 3, "span", [["class", "item-time-left"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](2, 0, null, null, 2, "app-text-shell", [], [[2, "text-loaded", null]], null, null, _shell_text_shell_text_shell_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__["View_TextShellComponent_0"], _shell_text_shell_text_shell_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__["RenderType_TextShellComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](3, 49152, null, 0, _shell_text_shell_text_shell_component__WEBPACK_IMPORTED_MODULE_9__["TextShellComponent"], [], {
        data: [0, "data"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵppd"](4, 1)], function (_ck, _v) {
        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵunv"](_v, 3, 0, _ck(_v, 4, 0, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v.parent.parent.parent, 1), _v.parent.context.$implicit.expirationDate));

        _ck(_v, 3, 0, currVal_1);
      }, function (_ck, _v) {
        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v, 3).textLoaded;

        _ck(_v, 2, 0, currVal_0);
      });
    }

    function View_DealsListingPage_6(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](0, 0, null, null, 5, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](1, 0, null, null, 4, "ion-row", [["class", "countdown-wrapper"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_IonRow_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_IonRow"])), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](2, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonRow"], [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](3, 0, null, 0, 2, "app-countdown-timer", [["class", "item-countdown"], ["fill", "inner-time"]], null, null, null, _components_countdown_timer_countdown_timer_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__["View_CountdownTimerComponent_0"], _components_countdown_timer_countdown_timer_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__["RenderType_CountdownTimerComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](4, 245760, null, 0, _components_countdown_timer_countdown_timer_component__WEBPACK_IMPORTED_MODULE_11__["CountdownTimerComponent"], [], {
        end: [0, "end"],
        units: [1, "units"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵpod"](5, {
        from: 0,
        to: 1
      })], function (_ck, _v) {
        var currVal_0 = _v.parent.context.$implicit.expirationDate;

        var currVal_1 = _ck(_v, 5, 0, "hour", "second");

        _ck(_v, 4, 0, currVal_0, currVal_1);
      }, null);
    }

    function View_DealsListingPage_2(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](0, 0, null, null, 73, "div", [["class", "listing-item"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](1, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_3__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"]], {
        klass: [0, "klass"],
        ngClass: [1, "ngClass"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵppd"](2, 1), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵppd"](3, 1), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵppd"](4, 1), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵppd"](5, 1), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵppd"](6, 1), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵppd"](7, 1), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵppd"](8, 1), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵpod"](9, {
        "ended": 0,
        "imminent-end": 1,
        "ends-soon": 2,
        "distant-end": 3
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](10, 0, null, null, 14, "ion-row", [["class", "top-row"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_IonRow_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_IonRow"])), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](11, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonRow"], [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](12, 0, null, 0, 6, "ion-col", [["class", "logo-col"], ["size", "6"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_IonCol_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_IonCol"])), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](13, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonCol"], [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]], {
        size: [0, "size"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](14, 0, null, 0, 4, "app-aspect-ratio", [], [[4, "padding", null]], null, null, _shell_aspect_ratio_aspect_ratio_component_ngfactory__WEBPACK_IMPORTED_MODULE_12__["View_AspectRatioComponent_0"], _shell_aspect_ratio_aspect_ratio_component_ngfactory__WEBPACK_IMPORTED_MODULE_12__["RenderType_AspectRatioComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](15, 49152, null, 0, _shell_aspect_ratio_aspect_ratio_component__WEBPACK_IMPORTED_MODULE_13__["AspectRatioComponent"], [], {
        ratio: [0, "ratio"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵpod"](16, {
        w: 0,
        h: 1
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](17, 0, null, 0, 1, "app-image-shell", [["animation", "spinner"], ["class", "deal-logo"]], [[2, "img-loaded", null], [4, "backgroundImage", null], [1, "display", 0]], null, null, _shell_image_shell_image_shell_component_ngfactory__WEBPACK_IMPORTED_MODULE_14__["View_ImageShellComponent_0"], _shell_image_shell_image_shell_component_ngfactory__WEBPACK_IMPORTED_MODULE_14__["RenderType_ImageShellComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](18, 49152, null, 0, _shell_image_shell_image_shell_component__WEBPACK_IMPORTED_MODULE_15__["ImageShellComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_3__["PLATFORM_ID"]], {
        src: [0, "src"],
        alt: [1, "alt"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵand"](16777216, null, 0, 2, null, View_DealsListingPage_3)), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](20, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵppd"](21, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵand"](16777216, null, 0, 2, null, View_DealsListingPage_4)), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](23, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵppd"](24, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](25, 0, null, null, 19, "ion-row", [["class", "middle-row"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_IonRow_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_IonRow"])), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](26, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonRow"], [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](27, 0, null, 0, 11, "ion-col", [["class", "info-col"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_IonCol_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_IonCol"])), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](28, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonCol"], [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](29, 0, null, 0, 6, "h4", [["class", "item-name"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](30, 0, null, null, 5, "a", [["class", "name-anchor"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) {
        var ad = true;

        if ("click" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v, 31).onClick($event) !== false;
          ad = pd_0 && ad;
        }

        if ("click" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v, 32).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false;
          ad = pd_1 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](31, 737280, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["RouterLinkDelegate"], [_angular_common__WEBPACK_IMPORTED_MODULE_7__["LocationStrategy"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], [2, _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLink"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](32, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["LocationStrategy"]], {
        routerLink: [0, "routerLink"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵpad"](33, 2), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](34, 0, null, null, 1, "app-text-shell", [["animation", "bouncing"]], [[2, "text-loaded", null]], null, null, _shell_text_shell_text_shell_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__["View_TextShellComponent_0"], _shell_text_shell_text_shell_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__["RenderType_TextShellComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](35, 49152, null, 0, _shell_text_shell_text_shell_component__WEBPACK_IMPORTED_MODULE_9__["TextShellComponent"], [], {
        data: [0, "data"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](36, 0, null, 0, 2, "p", [["class", "item-description"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](37, 0, null, null, 1, "app-text-shell", [["animation", "bouncing"], ["lines", "3"]], [[2, "text-loaded", null]], null, null, _shell_text_shell_text_shell_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__["View_TextShellComponent_0"], _shell_text_shell_text_shell_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__["RenderType_TextShellComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](38, 49152, null, 0, _shell_text_shell_text_shell_component__WEBPACK_IMPORTED_MODULE_9__["TextShellComponent"], [], {
        data: [0, "data"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](39, 0, null, 0, 5, "ion-col", [["size", "2"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_IonCol_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_IonCol"])), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](40, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonCol"], [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]], {
        size: [0, "size"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](41, 0, null, 0, 3, "ion-button", [["class", "bookmark-button"], ["color", "claim"], ["expand", "block"], ["fill", "clear"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_IonButton_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_IonButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](42, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]], {
        color: [0, "color"],
        expand: [1, "expand"],
        fill: [2, "fill"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](43, 0, null, 0, 1, "ion-icon", [["name", "pricetag"], ["slot", "icon-only"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_IonIcon_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_IonIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](44, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]], {
        name: [0, "name"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](45, 0, null, null, 28, "ion-row", [["class", "bottom-row"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_IonRow_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_IonRow"])), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](46, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonRow"], [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](47, 0, null, 0, 9, "ion-col", [["class", "code-wrapper"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_IonCol_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_IonCol"])), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](48, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonCol"], [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](49, 0, null, 0, 1, "span", [["class", "code-cta"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵted"](-1, null, ["Use this code:"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](51, 0, null, 0, 5, "span", [["class", "item-code"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](52, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_3__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"]], {
        klass: [0, "klass"],
        ngClass: [1, "ngClass"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵppd"](53, 1), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵpod"](54, {
        "expired": 0
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](55, 0, null, null, 1, "app-text-shell", [], [[2, "text-loaded", null]], null, null, _shell_text_shell_text_shell_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__["View_TextShellComponent_0"], _shell_text_shell_text_shell_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__["RenderType_TextShellComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](56, 49152, null, 0, _shell_text_shell_text_shell_component__WEBPACK_IMPORTED_MODULE_9__["TextShellComponent"], [], {
        data: [0, "data"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](57, 0, null, 0, 16, "ion-col", [["class", "time-left-wrapper"], ["size", "5"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_IonCol_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_IonCol"])), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](58, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_3__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"]], {
        klass: [0, "klass"],
        ngClass: [1, "ngClass"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵppd"](59, 1), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵppd"](60, 1), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵpod"](61, {
        "countdown-active": 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](62, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonCol"], [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]], {
        size: [0, "size"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](63, 0, null, 0, 2, "span", [["class", "expiration-cta"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵted"](64, null, ["DEAL ", ":"])), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵppd"](65, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵand"](16777216, null, 0, 3, null, View_DealsListingPage_5)), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](67, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵppd"](68, 1), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵppd"](69, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵand"](16777216, null, 0, 3, null, View_DealsListingPage_6)), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](71, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵppd"](72, 1), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵppd"](73, 1)], function (_ck, _v) {
        var currVal_0 = "listing-item";

        var currVal_1 = _ck(_v, 9, 0, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵunv"](_v, 1, 1, _ck(_v, 2, 0, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v.parent.parent, 0), _v.context.$implicit.expirationDate)) < 0, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵunv"](_v, 1, 1, _ck(_v, 3, 0, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v.parent.parent, 0), _v.context.$implicit.expirationDate)) > 0 && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵunv"](_v, 1, 1, _ck(_v, 4, 0, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v.parent.parent, 0), _v.context.$implicit.expirationDate)) <= 2, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵunv"](_v, 1, 1, _ck(_v, 5, 0, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v.parent.parent, 0), _v.context.$implicit.expirationDate)) > 0 && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵunv"](_v, 1, 1, _ck(_v, 6, 0, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v.parent.parent, 0), _v.context.$implicit.expirationDate)) > 2 && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵunv"](_v, 1, 1, _ck(_v, 7, 0, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v.parent.parent, 0), _v.context.$implicit.expirationDate)) < 10, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵunv"](_v, 1, 1, _ck(_v, 8, 0, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v.parent.parent, 0), _v.context.$implicit.expirationDate)) >= 10);

        _ck(_v, 1, 0, currVal_0, currVal_1);

        var currVal_2 = "6";

        _ck(_v, 13, 0, currVal_2);

        var currVal_4 = _ck(_v, 16, 0, 128, 32);

        _ck(_v, 15, 0, currVal_4);

        var currVal_8 = _v.context.$implicit.logo;
        var currVal_9 = "deals logo";

        _ck(_v, 18, 0, currVal_8, currVal_9);

        var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵunv"](_v, 20, 0, _ck(_v, 21, 0, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v.parent.parent, 0), _v.context.$implicit.expirationDate)) > 0;

        _ck(_v, 20, 0, currVal_10);

        var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵunv"](_v, 23, 0, _ck(_v, 24, 0, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v.parent.parent, 0), _v.context.$implicit.expirationDate)) < 0;

        _ck(_v, 23, 0, currVal_11);

        _ck(_v, 31, 0);

        var currVal_14 = _ck(_v, 33, 0, "/app/categories/deals/", _v.context.$implicit.slug);

        _ck(_v, 32, 0, currVal_14);

        var currVal_16 = _v.context.$implicit.name;

        _ck(_v, 35, 0, currVal_16);

        var currVal_18 = _v.context.$implicit.description;

        _ck(_v, 38, 0, currVal_18);

        var currVal_19 = "2";

        _ck(_v, 40, 0, currVal_19);

        var currVal_20 = "claim";
        var currVal_21 = "block";
        var currVal_22 = "clear";

        _ck(_v, 42, 0, currVal_20, currVal_21, currVal_22);

        var currVal_23 = "pricetag";

        _ck(_v, 44, 0, currVal_23);

        var currVal_24 = "item-code";

        var currVal_25 = _ck(_v, 54, 0, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵunv"](_v, 52, 1, _ck(_v, 53, 0, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v.parent.parent, 0), _v.context.$implicit.expirationDate)) < 0);

        _ck(_v, 52, 0, currVal_24, currVal_25);

        var currVal_27 = _v.context.$implicit.code;

        _ck(_v, 56, 0, currVal_27);

        var currVal_28 = "time-left-wrapper";

        var currVal_29 = _ck(_v, 61, 0, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵunv"](_v, 58, 1, _ck(_v, 59, 0, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v.parent.parent, 0), _v.context.$implicit.expirationDate)) > 0 && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵunv"](_v, 58, 1, _ck(_v, 60, 0, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v.parent.parent, 0), _v.context.$implicit.expirationDate)) <= 2);

        _ck(_v, 58, 0, currVal_28, currVal_29);

        var currVal_30 = "5";

        _ck(_v, 62, 0, currVal_30);

        var currVal_32 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵunv"](_v, 67, 0, _ck(_v, 68, 0, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v.parent.parent, 0), _v.context.$implicit.expirationDate)) < 0 || _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵunv"](_v, 67, 0, _ck(_v, 69, 0, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v.parent.parent, 0), _v.context.$implicit.expirationDate)) > 2;

        _ck(_v, 67, 0, currVal_32);

        var currVal_33 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵunv"](_v, 71, 0, _ck(_v, 72, 0, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v.parent.parent, 0), _v.context.$implicit.expirationDate)) > 0 && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵunv"](_v, 71, 0, _ck(_v, 73, 0, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v.parent.parent, 0), _v.context.$implicit.expirationDate)) <= 2;

        _ck(_v, 71, 0, currVal_33);
      }, function (_ck, _v) {
        var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v, 15).ratioPadding;

        _ck(_v, 14, 0, currVal_3);

        var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v, 18).imageLoaded;

        var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v, 18).backgroundImage;

        var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v, 18).display;

        _ck(_v, 17, 0, currVal_5, currVal_6, currVal_7);

        var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v, 32).target;

        var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v, 32).href;

        _ck(_v, 30, 0, currVal_12, currVal_13);

        var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v, 35).textLoaded;

        _ck(_v, 34, 0, currVal_15);

        var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v, 38).textLoaded;

        _ck(_v, 37, 0, currVal_17);

        var currVal_26 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v, 56).textLoaded;

        _ck(_v, 55, 0, currVal_26);

        var currVal_31 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵunv"](_v, 64, 0, _ck(_v, 65, 0, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v.parent.parent, 0), _v.context.$implicit.expirationDate)) < 0 ? "EXPIRED" : "EXPIRES IN";

        _ck(_v, 64, 0, currVal_31);
      });
    }

    function View_DealsListingPage_1(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](0, 0, null, null, 2, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵand"](16777216, null, null, 1, null, View_DealsListingPage_2)), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](2, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["IterableDiffers"]], {
        ngForOf: [0, "ngForOf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵand"](0, null, null, 0))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.listing.items;

        _ck(_v, 2, 0, currVal_0);
      }, null);
    }

    function View_DealsListingPage_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵpid"](0, _pipes_time_difference_pipe__WEBPACK_IMPORTED_MODULE_16__["TimeDifferencePipe"], []), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵpid"](0, _pipes_time_ago_pipe__WEBPACK_IMPORTED_MODULE_17__["TimeAgoPipe"], []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](2, 0, null, null, 11, "ion-header", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_IonHeader_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_IonHeader"])), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](3, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonHeader"], [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](4, 0, null, 0, 9, "ion-toolbar", [["color", "primary"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_IonToolbar_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_IonToolbar"])), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](5, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonToolbar"], [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]], {
        color: [0, "color"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](6, 0, null, 0, 4, "ion-buttons", [["slot", "start"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_IonButtons_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_IonButtons"])), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](7, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonButtons"], [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](8, 0, null, 0, 2, "ion-back-button", [["defaultHref", "app/categories"]], null, [[null, "click"]], function (_v, en, $event) {
        var ad = true;

        if ("click" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v, 10).onClick($event) !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_IonBackButton_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_IonBackButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](9, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonBackButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]], {
        defaultHref: [0, "defaultHref"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](10, 16384, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonBackButtonDelegate"], [[2, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonRouterOutlet"]], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Config"]], {
        defaultHref: [0, "defaultHref"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](11, 0, null, 0, 2, "ion-title", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_IonTitle_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_IonTitle"])), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](12, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonTitle"], [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵted"](-1, 0, ["Deals Listing"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](14, 0, null, null, 3, "ion-content", [["class", "deals-listing-content"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_IonContent_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_IonContent"])), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](15, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonContent"], [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵand"](16777216, null, 0, 1, null, View_DealsListingPage_1)), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](17, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = "primary";

        _ck(_v, 5, 0, currVal_0);

        var currVal_1 = "app/categories";

        _ck(_v, 9, 0, currVal_1);

        var currVal_2 = "app/categories";

        _ck(_v, 10, 0, currVal_2);

        var currVal_3 = _co.listing == null ? null : _co.listing.items;

        _ck(_v, 17, 0, currVal_3);
      }, null);
    }

    function View_DealsListingPage_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](0, 0, null, null, 1, "app-deals-listing", [], [[2, "is-shell", null]], null, null, View_DealsListingPage_0, RenderType_DealsListingPage)), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](1, 114688, null, 0, _deals_listing_page__WEBPACK_IMPORTED_MODULE_18__["DealsListingPage"], [_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, function (_ck, _v) {
        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v, 1).isShell;

        _ck(_v, 0, 0, currVal_0);
      });
    }

    var DealsListingPageNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵccf"]("app-deals-listing", _deals_listing_page__WEBPACK_IMPORTED_MODULE_18__["DealsListingPage"], View_DealsListingPage_Host_0, {}, {}, []);
    /***/

  },

  /***/
  "./src/app/deals/listing/deals-listing.page.ts":
  /*!*****************************************************!*\
    !*** ./src/app/deals/listing/deals-listing.page.ts ***!
    \*****************************************************/

  /*! exports provided: DealsListingPage */

  /***/
  function srcAppDealsListingDealsListingPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DealsListingPage", function () {
      return DealsListingPage;
    });
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _utils_resolver_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../utils/resolver-helper */
    "./src/app/utils/resolver-helper.ts");
    /* harmony import */


    var _deals_listing_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./deals-listing.model */
    "./src/app/deals/listing/deals-listing.model.ts");

    var DealsListingPage = /*#__PURE__*/function () {
      function DealsListingPage(route) {
        _classCallCheck(this, DealsListingPage);

        this.route = route;
      }

      _createClass(DealsListingPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          // On init, the route subscription is the active subscription
          this.subscriptions = this.route.data.subscribe(function (resolvedRouteData) {
            // Route subscription resolved, now the active subscription is the Observable extracted from the resolved route data
            _this.subscriptions = _utils_resolver_helper__WEBPACK_IMPORTED_MODULE_1__["ResolverHelper"].extractData(resolvedRouteData.data, _deals_listing_model__WEBPACK_IMPORTED_MODULE_2__["DealsListingModel"]).subscribe(function (state) {
              _this.listing = state;
            }, function (error) {});
          }, function (error) {});
        } // NOTE: Ionic only calls ngOnDestroy if the page was popped (ex: when navigating back)
        // Since ngOnDestroy might not fire when you navigate from the current page, use ionViewWillLeave to cleanup Subscriptions

      }, {
        key: "ionViewWillLeave",
        value: function ionViewWillLeave() {
          this.subscriptions.unsubscribe();
        }
      }, {
        key: "isShell",
        get: function get() {
          return this.listing && this.listing.isShell ? true : false;
        }
      }]);

      return DealsListingPage;
    }();
    /***/

  },

  /***/
  "./src/app/deals/listing/deals-listing.resolver.ts":
  /*!*********************************************************!*\
    !*** ./src/app/deals/listing/deals-listing.resolver.ts ***!
    \*********************************************************/

  /*! exports provided: DealsListingResolver */

  /***/
  function srcAppDealsListingDealsListingResolverTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DealsListingResolver", function () {
      return DealsListingResolver;
    });
    /* harmony import */


    var _deals_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../deals.service */
    "./src/app/deals/deals.service.ts");

    var DealsListingResolver = /*#__PURE__*/function () {
      function DealsListingResolver(dealsService) {
        _classCallCheck(this, DealsListingResolver);

        this.dealsService = dealsService;
      }

      _createClass(DealsListingResolver, [{
        key: "resolve",
        value: function resolve() {
          var dataSource = this.dealsService.getListingDataSource();
          var dataStore = this.dealsService.getListingStore(dataSource);
          return dataStore;
        }
      }]);

      return DealsListingResolver;
    }();
    /***/

  },

  /***/
  "./src/app/deals/listing/styles/deals-listing.ios.scss.shim.ngstyle.js":
  /*!*****************************************************************************!*\
    !*** ./src/app/deals/listing/styles/deals-listing.ios.scss.shim.ngstyle.js ***!
    \*****************************************************************************/

  /*! exports provided: styles */

  /***/
  function srcAppDealsListingStylesDealsListingIosScssShimNgstyleJs(module, __webpack_exports__, __webpack_require__) {
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


    var styles = [".ios[_nghost-%COMP%]   .claim-button[_ngcontent-%COMP%], .ios   [_nghost-%COMP%]   .claim-button[_ngcontent-%COMP%] {\n  height: 2.2em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kaWRneS9Eb2N1bWVudHMvR2l0SHViL0luZmluaXR5L3NyYy9hcHAvZGVhbHMvbGlzdGluZy9zdHlsZXMvZGVhbHMtbGlzdGluZy5pb3Muc2NzcyIsInNyYy9hcHAvZGVhbHMvbGlzdGluZy9zdHlsZXMvZGVhbHMtbGlzdGluZy5pb3Muc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFRTtFQUNFLGFBQUE7QUNESiIsImZpbGUiOiJzcmMvYXBwL2RlYWxzL2xpc3Rpbmcvc3R5bGVzL2RlYWxzLWxpc3RpbmcuaW9zLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdC1jb250ZXh0KC5pb3MpIHtcbiAgLy8gQ3VzdG9tIHBsYXRmb3JtIHN0eWxlcyBoZXJlXG4gIC5jbGFpbS1idXR0b24ge1xuICAgIGhlaWdodDogMi4yZW07XG4gIH1cbn1cbiIsIjpob3N0LWNvbnRleHQoLmlvcykgLmNsYWltLWJ1dHRvbiB7XG4gIGhlaWdodDogMi4yZW07XG59Il19 */"];
    /***/
  },

  /***/
  "./src/app/deals/listing/styles/deals-listing.page.scss.shim.ngstyle.js":
  /*!******************************************************************************!*\
    !*** ./src/app/deals/listing/styles/deals-listing.page.scss.shim.ngstyle.js ***!
    \******************************************************************************/

  /*! exports provided: styles */

  /***/
  function srcAppDealsListingStylesDealsListingPageScssShimNgstyleJs(module, __webpack_exports__, __webpack_require__) {
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


    var styles = ["[_nghost-%COMP%] {\n  --page-margin: var(--app-broad-margin);\n  --page-background: var(--app-background-shade);\n  --page-countdown-fill-shadow-color: rgba(var(--ion-color-darkest-rgb), 0.2);\n  --page-item-shadow-color: rgba(var(--ion-color-dark-rgb), .1);\n  --page-deal-code-height: 30px;\n  --page-countdown-gutter: 3px;\n  --page-expired-color: var(--ion-color-medium-tint);\n  --page-ends-soon-color: #FFAB6B;\n  --page-distant-end-color: #70DF70;\n  --page-deal-color: var(--ion-color-medium);\n  --page-deal-border-color: var(--ion-color-light-shade);\n  --page-color: #70DF70;\n  --ion-color-claim: #70DF70;\n  --ion-color-claim-rgb: 112,223,112;\n  --ion-color-claim-contrast: #FFFFFF;\n  --ion-color-claim-contrast-rgb: 255,255,255;\n  --ion-color-claim-shade: #63C463;\n  --ion-color-claim-tint: #7EE27E;\n}\n[_nghost-%COMP%]   .ion-color-claim[_ngcontent-%COMP%] {\n  --ion-color-base: var(--ion-color-claim) !important;\n  --ion-color-base-rgb: var(--ion-color-claim-rgb) !important;\n  --ion-color-contrast: var(--ion-color-claim-contrast) !important;\n  --ion-color-contrast-rgb: var(--ion-color-claim-contrast-rgb) !important;\n  --ion-color-shade: var(--ion-color-claim-shade) !important;\n  --ion-color-tint: var(--ion-color-claim-tint) !important;\n}\n.deals-listing-content[_ngcontent-%COMP%] {\n  --background: var(--page-background);\n}\n.listing-item[_ngcontent-%COMP%] {\n  background-color: var(--ion-color-lightest);\n  margin: var(--page-margin);\n  border-radius: var(--app-fair-radius);\n  box-shadow: 1px 1px 4px 1px var(--page-item-shadow-color);\n  border-bottom-style: solid;\n  border-bottom-width: calc((var(--page-margin) / 2) * 3);\n  border-bottom-color: var(--page-deal-border-color);\n}\n.listing-item.ended[_ngcontent-%COMP%] {\n  --page-deal-color: var(--page-expired-color);\n  --page-deal-border-color: var(--page-expired-color);\n  border-bottom-style: none;\n}\n.listing-item.imminent-end[_ngcontent-%COMP%] {\n  --page-deal-color: var(--page-ends-soon-color);\n  --page-deal-border-color: var(--page-distant-end-color);\n}\n.listing-item.ends-soon[_ngcontent-%COMP%] {\n  --page-deal-color: var(--page-ends-soon-color);\n  --page-deal-border-color: var(--page-ends-soon-color);\n  border-bottom-style: none;\n}\n.listing-item.distant-end[_ngcontent-%COMP%] {\n  --page-deal-color: var(--page-distant-end-color);\n  --page-deal-border-color: var(--page-distant-end-color);\n  border-bottom-style: none;\n}\n.listing-item[_ngcontent-%COMP%]   .top-row[_ngcontent-%COMP%] {\n  --ion-grid-column-padding: 0px;\n  border-bottom: 2px dashed rgba(var(--ion-color-dark-rgb), 0.1);\n  padding: calc(var(--page-margin) / 2);\n  justify-content: space-between;\n  align-items: center;\n}\n.listing-item[_ngcontent-%COMP%]   .top-row[_ngcontent-%COMP%]   .logo-col[_ngcontent-%COMP%] {\n  align-self: center;\n}\n.listing-item[_ngcontent-%COMP%]   .top-row[_ngcontent-%COMP%]   .call-to-action-col[_ngcontent-%COMP%] {\n  flex-grow: 0;\n}\n.listing-item[_ngcontent-%COMP%]   .top-row[_ngcontent-%COMP%]   .call-to-action-col[_ngcontent-%COMP%]   .expired-cta[_ngcontent-%COMP%] {\n  color: var(--page-expired-color);\n  font-size: 16px;\n  font-weight: 600;\n  letter-spacing: 0.8px;\n}\n.listing-item[_ngcontent-%COMP%]   .top-row[_ngcontent-%COMP%]   .call-to-action-col[_ngcontent-%COMP%]   .claim-button[_ngcontent-%COMP%] {\n  --box-shadow: none;\n  --border-radius: var(--app-fair-radius);\n  margin: 0px;\n}\n.listing-item[_ngcontent-%COMP%]   .top-row[_ngcontent-%COMP%]   .call-to-action-col[_ngcontent-%COMP%]   .claim-button[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n.listing-item[_ngcontent-%COMP%]   .top-row[_ngcontent-%COMP%]   .call-to-action-col[_ngcontent-%COMP%]   .claim-button[_ngcontent-%COMP%]   .button-cta[_ngcontent-%COMP%] {\n  display: block;\n  line-height: 18px;\n  font-size: 16px;\n  font-weight: 600;\n}\n.listing-item[_ngcontent-%COMP%]   .top-row[_ngcontent-%COMP%]   .call-to-action-col[_ngcontent-%COMP%]   .claim-button[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.listing-item[_ngcontent-%COMP%]   .middle-row[_ngcontent-%COMP%] {\n  --ion-grid-column-padding: 0px;\n  padding: calc(var(--page-margin) / 2);\n  padding-bottom: var(--page-margin);\n}\n.listing-item[_ngcontent-%COMP%]   .middle-row[_ngcontent-%COMP%]   .info-col[_ngcontent-%COMP%] {\n  padding-right: calc(var(--page-margin) / 2);\n}\n.listing-item[_ngcontent-%COMP%]   .middle-row[_ngcontent-%COMP%]   .item-name[_ngcontent-%COMP%] {\n  margin: 0px;\n  margin-bottom: calc(var(--page-margin) / 2);\n  color: var(--ion-color-dark-tint);\n  font-size: 16px;\n}\n.listing-item[_ngcontent-%COMP%]   .middle-row[_ngcontent-%COMP%]   .item-name[_ngcontent-%COMP%]   .name-anchor[_ngcontent-%COMP%] {\n  display: block;\n  text-decoration: none;\n}\n.listing-item[_ngcontent-%COMP%]   .middle-row[_ngcontent-%COMP%]   .item-description[_ngcontent-%COMP%] {\n  margin: 0px;\n  color: var(--ion-color-medium-tint);\n  font-size: 14px;\n}\n.listing-item[_ngcontent-%COMP%]   .middle-row[_ngcontent-%COMP%]   .bookmark-button[_ngcontent-%COMP%] {\n  --padding-start: 5px;\n  --padding-end: 5px;\n  margin: 0px;\n  font-size: 16px;\n}\n.listing-item[_ngcontent-%COMP%]   .bottom-row[_ngcontent-%COMP%] {\n  --ion-grid-column-padding: 0px;\n  padding: 0px calc(var(--page-margin) / 2) calc(var(--page-margin) / 2);\n  justify-content: space-between;\n}\n.listing-item[_ngcontent-%COMP%]   .bottom-row[_ngcontent-%COMP%]   .code-wrapper[_ngcontent-%COMP%] {\n  max-width: -webkit-fit-content;\n  max-width: -moz-fit-content;\n  max-width: fit-content;\n}\n.listing-item[_ngcontent-%COMP%]   .bottom-row[_ngcontent-%COMP%]   .code-wrapper[_ngcontent-%COMP%]   .code-cta[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 500;\n  margin-bottom: 5px;\n  display: block;\n}\n.listing-item[_ngcontent-%COMP%]   .bottom-row[_ngcontent-%COMP%]   .code-wrapper[_ngcontent-%COMP%]   .item-code[_ngcontent-%COMP%] {\n  height: var(--page-deal-code-height);\n  text-transform: uppercase;\n  padding: calc(var(--page-margin) / 4) calc(var(--page-margin) / 2);\n  border: 2px solid var(--page-color);\n  font-size: 12px;\n  font-weight: 500;\n  line-height: 1;\n  border-radius: calc(var(--page-deal-code-height) / 2);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.listing-item[_ngcontent-%COMP%]   .bottom-row[_ngcontent-%COMP%]   .code-wrapper[_ngcontent-%COMP%]   .item-code.expired[_ngcontent-%COMP%] {\n  border-color: var(--page-expired-color);\n  color: var(--page-expired-color);\n  opacity: 0.6;\n}\n.listing-item[_ngcontent-%COMP%]   .bottom-row[_ngcontent-%COMP%]   .time-left-wrapper[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  max-width: -webkit-fit-content;\n  max-width: -moz-fit-content;\n  max-width: fit-content;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: flex-end;\n}\n.listing-item[_ngcontent-%COMP%]   .bottom-row[_ngcontent-%COMP%]   .time-left-wrapper[_ngcontent-%COMP%]   .expiration-cta[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 500;\n  margin-bottom: 5px;\n  display: block;\n  text-transform: uppercase;\n  text-align: end;\n}\n.listing-item[_ngcontent-%COMP%]   .bottom-row[_ngcontent-%COMP%]   .time-left-wrapper[_ngcontent-%COMP%]:not(.countdown-active)   .item-time-left[_ngcontent-%COMP%] {\n  color: var(--page-deal-color);\n  font-size: 14px;\n  font-weight: 500;\n  display: block;\n  text-align: end;\n}\n.listing-item[_ngcontent-%COMP%]   .bottom-row[_ngcontent-%COMP%]   .time-left-wrapper.countdown-active[_ngcontent-%COMP%] {\n  display: block;\n  position: relative;\n}\n.listing-item[_ngcontent-%COMP%]   .bottom-row[_ngcontent-%COMP%]   .time-left-wrapper.countdown-active[_ngcontent-%COMP%]   .countdown-wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: flex-end;\n  position: absolute;\n  right: 0px;\n}\n.listing-item[_ngcontent-%COMP%]   .bottom-row[_ngcontent-%COMP%]   .time-left-wrapper.countdown-active[_ngcontent-%COMP%]   .countdown-wrapper[_ngcontent-%COMP%]   app-countdown-timer.item-countdown[_ngcontent-%COMP%] {\n  --countdown-time-margin: 0px;\n  --countdown-time-padding: 0px;\n  --countdown-inner-time-margin: var(--page-countdown-gutter) var(--page-countdown-gutter) 0px;\n  --countdown-inner-time-padding: calc(var(--page-margin) / 2) calc(var(--page-margin) / 4);\n  --countdown-fill-border: none;\n  --countdown-fill-border-radius: var(--app-narrow-radius);\n  --countdown-fill-background: var(--ion-color-lightest);\n  --countdown-fill-shadow: 0px 0px 5px 0px var(--page-countdown-fill-shadow-color);\n  --countdown-value-color: var(--ion-color-darkest);\n  --countdown-unit-color: var(--ion-color-medium-shade);\n  --countdown-time-flex-direction: column;\n  font-weight: 500;\n  font-size: 14px;\n  margin-right: calc(var(--page-countdown-gutter) * -1);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kaWRneS9Eb2N1bWVudHMvR2l0SHViL0luZmluaXR5L3NyYy9hcHAvZGVhbHMvbGlzdGluZy9zdHlsZXMvZGVhbHMtbGlzdGluZy5wYWdlLnNjc3MiLCJzcmMvYXBwL2RlYWxzL2xpc3Rpbmcvc3R5bGVzL2RlYWxzLWxpc3RpbmcucGFnZS5zY3NzIiwiL1VzZXJzL2RpZGd5L0RvY3VtZW50cy9HaXRIdWIvSW5maW5pdHkvc3JjL3RoZW1lL21peGlucy9pb24tY29sb3Iuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTtFQUNFLHNDQUFBO0VBQ0EsOENBQUE7RUFFQSwyRUFBQTtFQUNBLDZEQUFBO0VBQ0EsNkJBQUE7RUFDQSw0QkFBQTtFQUVBLGtEQUFBO0VBQ0EsK0JBQUE7RUFDQSxpQ0FBQTtFQUVBLDBDQUFBO0VBQ0Esc0RBQUE7RUFFQSxxQkFBQTtFQUlFLDBCQUFBO0VBQ0Esa0NBQUE7RUFDQSxtQ0FBQTtFQUNBLDJDQUFBO0VBQ0EsZ0NBQUE7RUFDQSwrQkFBQTtBQ1ZKO0FDaEJFO0VBQ0UsbURBQUE7RUFDQSwyREFBQTtFQUNBLGdFQUFBO0VBQ0Esd0VBQUE7RUFDQSwwREFBQTtFQUNBLHdEQUFBO0FEa0JKO0FET0E7RUFDRSxvQ0FBQTtBQ0pGO0FET0E7RUFxQkUsMkNBQUE7RUFDQSwwQkFBQTtFQUNBLHFDQUFBO0VBQ0EseURBQUE7RUFDQSwwQkFBQTtFQUNBLHVEQUFBO0VBQ0Esa0RBQUE7QUN4QkY7QURGRTtFQUNFLDRDQUFBO0VBQ0EsbURBQUE7RUFDQSx5QkFBQTtBQ0lKO0FERkU7RUFDRSw4Q0FBQTtFQUNBLHVEQUFBO0FDSUo7QURGRTtFQUNFLDhDQUFBO0VBQ0EscURBQUE7RUFDQSx5QkFBQTtBQ0lKO0FERkU7RUFDRSxnREFBQTtFQUNBLHVEQUFBO0VBQ0EseUJBQUE7QUNJSjtBRE9FO0VBQ0UsOEJBQUE7RUFFQSw4REFBQTtFQUNBLHFDQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQ05KO0FEUUk7RUFDRSxrQkFBQTtBQ05OO0FEU0k7RUFDRSxZQUFBO0FDUE47QURTTTtFQUNFLGdDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7QUNQUjtBRFVNO0VBQ0Usa0JBQUE7RUFDQSx1Q0FBQTtFQUVBLFdBQUE7QUNUUjtBRFdRO0VBQ0UsYUFBQTtBQ1RWO0FEWVE7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNWVjtBRGFRO0VBQ0UsZUFBQTtBQ1hWO0FEaUJFO0VBQ0UsOEJBQUE7RUFFQSxxQ0FBQTtFQUNBLGtDQUFBO0FDaEJKO0FEa0JJO0VBQ0UsMkNBQUE7QUNoQk47QURtQkk7RUFDRSxXQUFBO0VBQ0gsMkNBQUE7RUFDRyxpQ0FBQTtFQUNBLGVBQUE7QUNqQk47QURtQk07RUFDRSxjQUFBO0VBQ0EscUJBQUE7QUNqQlI7QURxQkk7RUFDRSxXQUFBO0VBQ0EsbUNBQUE7RUFDQSxlQUFBO0FDbkJOO0FEc0JJO0VBQ0Usb0JBQUE7RUFDQSxrQkFBQTtFQUVBLFdBQUE7RUFDQSxlQUFBO0FDckJOO0FEeUJFO0VBQ0UsOEJBQUE7RUFFQSxzRUFBQTtFQUNBLDhCQUFBO0FDeEJKO0FEMEJJO0VBQ0UsOEJBQUE7RUFBQSwyQkFBQTtFQUFBLHNCQUFBO0FDeEJOO0FEMEJNO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FDeEJSO0FEMkJNO0VBQ0Usb0NBQUE7RUFDQSx5QkFBQTtFQUNBLGtFQUFBO0VBQ0EsbUNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EscURBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQ3pCUjtBRDJCUTtFQUNFLHVDQUFBO0VBQ0EsZ0NBQUE7RUFDQSxZQUFBO0FDekJWO0FEOEJJO0VBQ0UsY0FBQTtFQUNBLDhCQUFBO0VBQUEsMkJBQUE7RUFBQSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0VBQ0EscUJBQUE7QUM1Qk47QUQ4Qk07RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7QUM1QlI7QURnQ1E7RUFDRSw2QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FDOUJWO0FEa0NNO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0FDaENSO0FEa0NRO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUVBLGtCQUFBO0VBQ0EsVUFBQTtBQ2pDVjtBRG1DVTtFQUNFLDRCQUFBO0VBQ0EsNkJBQUE7RUFDQSw0RkFBQTtFQUNBLHlGQUFBO0VBQ0EsNkJBQUE7RUFDQSx3REFBQTtFQUNBLHNEQUFBO0VBQ0EsZ0ZBQUE7RUFDQSxpREFBQTtFQUNBLHFEQUFBO0VBQ0EsdUNBQUE7RUFFQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxxREFBQTtBQ2xDWiIsImZpbGUiOiJzcmMvYXBwL2RlYWxzL2xpc3Rpbmcvc3R5bGVzL2RlYWxzLWxpc3RpbmcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uLy4uL3RoZW1lL21peGlucy9pb24tY29sb3JcIjtcblxuLy8gQ3VzdG9tIHZhcmlhYmxlc1xuLy8gTm90ZTogIFRoZXNlIG9uZXMgd2VyZSBhZGRlZCBieSB1cyBhbmQgaGF2ZSBub3RoaW5nIHRvIGRvIHdpdGggSW9uaWMgQ1NTIEN1c3RvbSBQcm9wZXJ0aWVzXG46aG9zdCB7XG4gIC0tcGFnZS1tYXJnaW46IHZhcigtLWFwcC1icm9hZC1tYXJnaW4pO1xuICAtLXBhZ2UtYmFja2dyb3VuZDogdmFyKC0tYXBwLWJhY2tncm91bmQtc2hhZGUpO1xuXG4gIC0tcGFnZS1jb3VudGRvd24tZmlsbC1zaGFkb3ctY29sb3I6IHJnYmEodmFyKC0taW9uLWNvbG9yLWRhcmtlc3QtcmdiKSwgMC4yKTtcbiAgLS1wYWdlLWl0ZW0tc2hhZG93LWNvbG9yOiByZ2JhKHZhcigtLWlvbi1jb2xvci1kYXJrLXJnYiksIC4xKTtcbiAgLS1wYWdlLWRlYWwtY29kZS1oZWlnaHQ6IDMwcHg7XG4gIC0tcGFnZS1jb3VudGRvd24tZ3V0dGVyOiAzcHg7XG5cbiAgLS1wYWdlLWV4cGlyZWQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tdGludCk7XG4gIC0tcGFnZS1lbmRzLXNvb24tY29sb3I6ICNGRkFCNkI7XG4gIC0tcGFnZS1kaXN0YW50LWVuZC1jb2xvcjogIzcwREY3MDtcblxuICAtLXBhZ2UtZGVhbC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gIC0tcGFnZS1kZWFsLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlKTtcblxuICAtLXBhZ2UtY29sb3I6ICM3MERGNzA7XG5cbiAgLy8gQWRkIGN1c3RvbSBjb2xvcnMgdG8gdXNlIHdpdGggW2NvbG9yXSBwcm9wZXJ0eVxuICBAaW5jbHVkZSBpb24tY29sb3IoJ2NsYWltJykge1xuICAgIC0taW9uLWNvbG9yLWNsYWltOiAjNzBERjcwO1xuICAgIC0taW9uLWNvbG9yLWNsYWltLXJnYjogMTEyLDIyMywxMTI7XG4gICAgLS1pb24tY29sb3ItY2xhaW0tY29udHJhc3Q6ICNGRkZGRkY7XG4gICAgLS1pb24tY29sb3ItY2xhaW0tY29udHJhc3QtcmdiOiAyNTUsMjU1LDI1NTtcbiAgICAtLWlvbi1jb2xvci1jbGFpbS1zaGFkZTogIzYzQzQ2MztcbiAgICAtLWlvbi1jb2xvci1jbGFpbS10aW50OiAjN0VFMjdFO1xuICB9XG59XG5cbi8vIE5vdGU6ICBBbGwgdGhlIENTUyB2YXJpYWJsZXMgZGVmaW5lZCBiZWxvdyBhcmUgb3ZlcnJpZGVzIG9mIElvbmljIGVsZW1lbnRzIENTUyBDdXN0b20gUHJvcGVydGllc1xuLmRlYWxzLWxpc3RpbmctY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tcGFnZS1iYWNrZ3JvdW5kKTtcbn1cblxuLmxpc3RpbmctaXRlbSB7XG4gICYuZW5kZWQge1xuICAgIC0tcGFnZS1kZWFsLWNvbG9yOiB2YXIoLS1wYWdlLWV4cGlyZWQtY29sb3IpO1xuICAgIC0tcGFnZS1kZWFsLWJvcmRlci1jb2xvcjogdmFyKC0tcGFnZS1leHBpcmVkLWNvbG9yKTtcbiAgICBib3JkZXItYm90dG9tLXN0eWxlOiBub25lO1xuICB9XG4gICYuaW1taW5lbnQtZW5kIHtcbiAgICAtLXBhZ2UtZGVhbC1jb2xvcjogdmFyKC0tcGFnZS1lbmRzLXNvb24tY29sb3IpO1xuICAgIC0tcGFnZS1kZWFsLWJvcmRlci1jb2xvcjogdmFyKC0tcGFnZS1kaXN0YW50LWVuZC1jb2xvcik7XG4gIH1cbiAgJi5lbmRzLXNvb24ge1xuICAgIC0tcGFnZS1kZWFsLWNvbG9yOiB2YXIoLS1wYWdlLWVuZHMtc29vbi1jb2xvcik7XG4gICAgLS1wYWdlLWRlYWwtYm9yZGVyLWNvbG9yOiB2YXIoLS1wYWdlLWVuZHMtc29vbi1jb2xvcik7XG4gICAgYm9yZGVyLWJvdHRvbS1zdHlsZTogbm9uZTtcbiAgfVxuICAmLmRpc3RhbnQtZW5kIHtcbiAgICAtLXBhZ2UtZGVhbC1jb2xvcjogdmFyKC0tcGFnZS1kaXN0YW50LWVuZC1jb2xvcik7XG4gICAgLS1wYWdlLWRlYWwtYm9yZGVyLWNvbG9yOiB2YXIoLS1wYWdlLWRpc3RhbnQtZW5kLWNvbG9yKTtcbiAgICBib3JkZXItYm90dG9tLXN0eWxlOiBub25lO1xuICB9XG5cbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcbiAgbWFyZ2luOiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWFwcC1mYWlyLXJhZGl1cyk7XG4gIGJveC1zaGFkb3c6IDFweCAxcHggNHB4IDFweCB2YXIoLS1wYWdlLWl0ZW0tc2hhZG93LWNvbG9yKTtcbiAgYm9yZGVyLWJvdHRvbS1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1ib3R0b20td2lkdGg6IGNhbGMoKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpICogMyk7XG4gIGJvcmRlci1ib3R0b20tY29sb3I6IHZhcigtLXBhZ2UtZGVhbC1ib3JkZXItY29sb3IpO1xuXG4gIC50b3Atcm93IHtcbiAgICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiAwcHg7XG5cbiAgICBib3JkZXItYm90dG9tOiAycHggZGFzaGVkIHJnYmEodmFyKC0taW9uLWNvbG9yLWRhcmstcmdiKSwgLjEpO1xuICAgIHBhZGRpbmc6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAubG9nby1jb2wge1xuICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgIH1cblxuICAgIC5jYWxsLXRvLWFjdGlvbi1jb2wge1xuICAgICAgZmxleC1ncm93OiAwO1xuXG4gICAgICAuZXhwaXJlZC1jdGEge1xuICAgICAgICBjb2xvcjogdmFyKC0tcGFnZS1leHBpcmVkLWNvbG9yKTtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC44cHg7XG4gICAgICB9XG5cbiAgICAgIC5jbGFpbS1idXR0b24ge1xuICAgICAgICAtLWJveC1zaGFkb3c6IG5vbmU7XG4gICAgICAgIC0tYm9yZGVyLXJhZGl1czogdmFyKC0tYXBwLWZhaXItcmFkaXVzKTtcblxuICAgICAgICBtYXJnaW46IDBweDtcblxuICAgICAgICAmOmZvY3VzIHtcbiAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICB9XG5cbiAgICAgICAgLmJ1dHRvbi1jdGEge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICB9XG5cbiAgICAgICAgaW9uLWljb24ge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5taWRkbGUtcm93IHtcbiAgICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiAwcHg7XG5cbiAgICBwYWRkaW5nOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuICAgIHBhZGRpbmctYm90dG9tOiB2YXIoLS1wYWdlLW1hcmdpbik7XG5cbiAgICAuaW5mby1jb2wge1xuICAgICAgcGFkZGluZy1yaWdodDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbiAgICB9XG5cbiAgICAuaXRlbS1uYW1lIHtcbiAgICAgIG1hcmdpbjogMHB4O1xuXHRcdFx0bWFyZ2luLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyay10aW50KTtcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcblxuICAgICAgLm5hbWUtYW5jaG9yIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuaXRlbS1kZXNjcmlwdGlvbiB7XG4gICAgICBtYXJnaW46IDBweDtcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXRpbnQpO1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgIH1cblxuICAgIC5ib29rbWFyay1idXR0b24ge1xuICAgICAgLS1wYWRkaW5nLXN0YXJ0OiA1cHg7XG4gICAgICAtLXBhZGRpbmctZW5kOiA1cHg7XG5cbiAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgIH1cbiAgfVxuXG4gIC5ib3R0b20tcm93IHtcbiAgICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiAwcHg7XG5cbiAgICBwYWRkaW5nOiAwcHggY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKSBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcblxuICAgIC5jb2RlLXdyYXBwZXIge1xuICAgICAgbWF4LXdpZHRoOiBmaXQtY29udGVudDtcblxuICAgICAgLmNvZGUtY3RhIHtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgfVxuXG4gICAgICAuaXRlbS1jb2RlIHtcbiAgICAgICAgaGVpZ2h0OiB2YXIoLS1wYWdlLWRlYWwtY29kZS1oZWlnaHQpO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICBwYWRkaW5nOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDQpIGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXBhZ2UtY29sb3IpO1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgICAgICBib3JkZXItcmFkaXVzOiBjYWxjKHZhcigtLXBhZ2UtZGVhbC1jb2RlLWhlaWdodCkgLyAyKTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgICAgICAgJi5leHBpcmVkIHtcbiAgICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLXBhZ2UtZXhwaXJlZC1jb2xvcik7XG4gICAgICAgICAgY29sb3I6IHZhcigtLXBhZ2UtZXhwaXJlZC1jb2xvcik7XG4gICAgICAgICAgb3BhY2l0eTogMC42O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnRpbWUtbGVmdC13cmFwcGVyIHtcbiAgICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgICAgbWF4LXdpZHRoOiBmaXQtY29udGVudDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuXG4gICAgICAuZXhwaXJhdGlvbi1jdGEge1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIHRleHQtYWxpZ246IGVuZDtcbiAgICAgIH1cblxuICAgICAgJjpub3QoLmNvdW50ZG93bi1hY3RpdmUpIHtcbiAgICAgICAgLml0ZW0tdGltZS1sZWZ0IHtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tcGFnZS1kZWFsLWNvbG9yKTtcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICB0ZXh0LWFsaWduOiBlbmQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgJi5jb3VudGRvd24tYWN0aXZlIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICAgICAuY291bnRkb3duLXdyYXBwZXIge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgICAvLyBTZXQgcG9zaXRpb24gYWJzb2x1dGUgc28gdGhhdCB0aGUgcGFyZW50IGRvZW4ndCBjb3VudCB0aGUgaGVpZ2h0IG9mIHRoaXMgZWxlbWVudC5cbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgcmlnaHQ6IDBweDtcblxuICAgICAgICAgIGFwcC1jb3VudGRvd24tdGltZXIuaXRlbS1jb3VudGRvd24ge1xuICAgICAgICAgICAgLS1jb3VudGRvd24tdGltZS1tYXJnaW46IDBweDtcbiAgICAgICAgICAgIC0tY291bnRkb3duLXRpbWUtcGFkZGluZzogMHB4O1xuICAgICAgICAgICAgLS1jb3VudGRvd24taW5uZXItdGltZS1tYXJnaW46IHZhcigtLXBhZ2UtY291bnRkb3duLWd1dHRlcikgdmFyKC0tcGFnZS1jb3VudGRvd24tZ3V0dGVyKSAwcHg7XG4gICAgICAgICAgICAtLWNvdW50ZG93bi1pbm5lci10aW1lLXBhZGRpbmc6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMikgY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyA0KTtcbiAgICAgICAgICAgIC0tY291bnRkb3duLWZpbGwtYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgLS1jb3VudGRvd24tZmlsbC1ib3JkZXItcmFkaXVzOiB2YXIoLS1hcHAtbmFycm93LXJhZGl1cyk7XG4gICAgICAgICAgICAtLWNvdW50ZG93bi1maWxsLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XG4gICAgICAgICAgICAtLWNvdW50ZG93bi1maWxsLXNoYWRvdzogMHB4IDBweCA1cHggMHB4IHZhcigtLXBhZ2UtY291bnRkb3duLWZpbGwtc2hhZG93LWNvbG9yKTtcbiAgICAgICAgICAgIC0tY291bnRkb3duLXZhbHVlLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFya2VzdCk7XG4gICAgICAgICAgICAtLWNvdW50ZG93bi11bml0LWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcbiAgICAgICAgICAgIC0tY291bnRkb3duLXRpbWUtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogY2FsYyh2YXIoLS1wYWdlLWNvdW50ZG93bi1ndXR0ZXIpICogLTEpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiOmhvc3Qge1xuICAtLXBhZ2UtbWFyZ2luOiB2YXIoLS1hcHAtYnJvYWQtbWFyZ2luKTtcbiAgLS1wYWdlLWJhY2tncm91bmQ6IHZhcigtLWFwcC1iYWNrZ3JvdW5kLXNoYWRlKTtcbiAgLS1wYWdlLWNvdW50ZG93bi1maWxsLXNoYWRvdy1jb2xvcjogcmdiYSh2YXIoLS1pb24tY29sb3ItZGFya2VzdC1yZ2IpLCAwLjIpO1xuICAtLXBhZ2UtaXRlbS1zaGFkb3ctY29sb3I6IHJnYmEodmFyKC0taW9uLWNvbG9yLWRhcmstcmdiKSwgLjEpO1xuICAtLXBhZ2UtZGVhbC1jb2RlLWhlaWdodDogMzBweDtcbiAgLS1wYWdlLWNvdW50ZG93bi1ndXR0ZXI6IDNweDtcbiAgLS1wYWdlLWV4cGlyZWQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tdGludCk7XG4gIC0tcGFnZS1lbmRzLXNvb24tY29sb3I6ICNGRkFCNkI7XG4gIC0tcGFnZS1kaXN0YW50LWVuZC1jb2xvcjogIzcwREY3MDtcbiAgLS1wYWdlLWRlYWwtY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICAtLXBhZ2UtZGVhbC1ib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodC1zaGFkZSk7XG4gIC0tcGFnZS1jb2xvcjogIzcwREY3MDtcbiAgLS1pb24tY29sb3ItY2xhaW06ICM3MERGNzA7XG4gIC0taW9uLWNvbG9yLWNsYWltLXJnYjogMTEyLDIyMywxMTI7XG4gIC0taW9uLWNvbG9yLWNsYWltLWNvbnRyYXN0OiAjRkZGRkZGO1xuICAtLWlvbi1jb2xvci1jbGFpbS1jb250cmFzdC1yZ2I6IDI1NSwyNTUsMjU1O1xuICAtLWlvbi1jb2xvci1jbGFpbS1zaGFkZTogIzYzQzQ2MztcbiAgLS1pb24tY29sb3ItY2xhaW0tdGludDogIzdFRTI3RTtcbn1cbjpob3N0IC5pb24tY29sb3ItY2xhaW0ge1xuICAtLWlvbi1jb2xvci1iYXNlOiB2YXIoLS1pb24tY29sb3ItY2xhaW0pICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLWJhc2UtcmdiOiB2YXIoLS1pb24tY29sb3ItY2xhaW0tcmdiKSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci1jb250cmFzdDogdmFyKC0taW9uLWNvbG9yLWNsYWltLWNvbnRyYXN0KSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci1jb250cmFzdC1yZ2I6IHZhcigtLWlvbi1jb2xvci1jbGFpbS1jb250cmFzdC1yZ2IpICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLXNoYWRlOiB2YXIoLS1pb24tY29sb3ItY2xhaW0tc2hhZGUpICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLXRpbnQ6IHZhcigtLWlvbi1jb2xvci1jbGFpbS10aW50KSAhaW1wb3J0YW50O1xufVxuXG4uZGVhbHMtbGlzdGluZy1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1wYWdlLWJhY2tncm91bmQpO1xufVxuXG4ubGlzdGluZy1pdGVtIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcbiAgbWFyZ2luOiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWFwcC1mYWlyLXJhZGl1cyk7XG4gIGJveC1zaGFkb3c6IDFweCAxcHggNHB4IDFweCB2YXIoLS1wYWdlLWl0ZW0tc2hhZG93LWNvbG9yKTtcbiAgYm9yZGVyLWJvdHRvbS1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1ib3R0b20td2lkdGg6IGNhbGMoKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpICogMyk7XG4gIGJvcmRlci1ib3R0b20tY29sb3I6IHZhcigtLXBhZ2UtZGVhbC1ib3JkZXItY29sb3IpO1xufVxuLmxpc3RpbmctaXRlbS5lbmRlZCB7XG4gIC0tcGFnZS1kZWFsLWNvbG9yOiB2YXIoLS1wYWdlLWV4cGlyZWQtY29sb3IpO1xuICAtLXBhZ2UtZGVhbC1ib3JkZXItY29sb3I6IHZhcigtLXBhZ2UtZXhwaXJlZC1jb2xvcik7XG4gIGJvcmRlci1ib3R0b20tc3R5bGU6IG5vbmU7XG59XG4ubGlzdGluZy1pdGVtLmltbWluZW50LWVuZCB7XG4gIC0tcGFnZS1kZWFsLWNvbG9yOiB2YXIoLS1wYWdlLWVuZHMtc29vbi1jb2xvcik7XG4gIC0tcGFnZS1kZWFsLWJvcmRlci1jb2xvcjogdmFyKC0tcGFnZS1kaXN0YW50LWVuZC1jb2xvcik7XG59XG4ubGlzdGluZy1pdGVtLmVuZHMtc29vbiB7XG4gIC0tcGFnZS1kZWFsLWNvbG9yOiB2YXIoLS1wYWdlLWVuZHMtc29vbi1jb2xvcik7XG4gIC0tcGFnZS1kZWFsLWJvcmRlci1jb2xvcjogdmFyKC0tcGFnZS1lbmRzLXNvb24tY29sb3IpO1xuICBib3JkZXItYm90dG9tLXN0eWxlOiBub25lO1xufVxuLmxpc3RpbmctaXRlbS5kaXN0YW50LWVuZCB7XG4gIC0tcGFnZS1kZWFsLWNvbG9yOiB2YXIoLS1wYWdlLWRpc3RhbnQtZW5kLWNvbG9yKTtcbiAgLS1wYWdlLWRlYWwtYm9yZGVyLWNvbG9yOiB2YXIoLS1wYWdlLWRpc3RhbnQtZW5kLWNvbG9yKTtcbiAgYm9yZGVyLWJvdHRvbS1zdHlsZTogbm9uZTtcbn1cbi5saXN0aW5nLWl0ZW0gLnRvcC1yb3cge1xuICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiAwcHg7XG4gIGJvcmRlci1ib3R0b206IDJweCBkYXNoZWQgcmdiYSh2YXIoLS1pb24tY29sb3ItZGFyay1yZ2IpLCAwLjEpO1xuICBwYWRkaW5nOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ubGlzdGluZy1pdGVtIC50b3Atcm93IC5sb2dvLWNvbCB7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cbi5saXN0aW5nLWl0ZW0gLnRvcC1yb3cgLmNhbGwtdG8tYWN0aW9uLWNvbCB7XG4gIGZsZXgtZ3JvdzogMDtcbn1cbi5saXN0aW5nLWl0ZW0gLnRvcC1yb3cgLmNhbGwtdG8tYWN0aW9uLWNvbCAuZXhwaXJlZC1jdGEge1xuICBjb2xvcjogdmFyKC0tcGFnZS1leHBpcmVkLWNvbG9yKTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBsZXR0ZXItc3BhY2luZzogMC44cHg7XG59XG4ubGlzdGluZy1pdGVtIC50b3Atcm93IC5jYWxsLXRvLWFjdGlvbi1jb2wgLmNsYWltLWJ1dHRvbiB7XG4gIC0tYm94LXNoYWRvdzogbm9uZTtcbiAgLS1ib3JkZXItcmFkaXVzOiB2YXIoLS1hcHAtZmFpci1yYWRpdXMpO1xuICBtYXJnaW46IDBweDtcbn1cbi5saXN0aW5nLWl0ZW0gLnRvcC1yb3cgLmNhbGwtdG8tYWN0aW9uLWNvbCAuY2xhaW0tYnV0dG9uOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbn1cbi5saXN0aW5nLWl0ZW0gLnRvcC1yb3cgLmNhbGwtdG8tYWN0aW9uLWNvbCAuY2xhaW0tYnV0dG9uIC5idXR0b24tY3RhIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4ubGlzdGluZy1pdGVtIC50b3Atcm93IC5jYWxsLXRvLWFjdGlvbi1jb2wgLmNsYWltLWJ1dHRvbiBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cbi5saXN0aW5nLWl0ZW0gLm1pZGRsZS1yb3cge1xuICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiAwcHg7XG4gIHBhZGRpbmc6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG4gIHBhZGRpbmctYm90dG9tOiB2YXIoLS1wYWdlLW1hcmdpbik7XG59XG4ubGlzdGluZy1pdGVtIC5taWRkbGUtcm93IC5pbmZvLWNvbCB7XG4gIHBhZGRpbmctcmlnaHQ6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG59XG4ubGlzdGluZy1pdGVtIC5taWRkbGUtcm93IC5pdGVtLW5hbWUge1xuICBtYXJnaW46IDBweDtcbiAgbWFyZ2luLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrLXRpbnQpO1xuICBmb250LXNpemU6IDE2cHg7XG59XG4ubGlzdGluZy1pdGVtIC5taWRkbGUtcm93IC5pdGVtLW5hbWUgLm5hbWUtYW5jaG9yIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi5saXN0aW5nLWl0ZW0gLm1pZGRsZS1yb3cgLml0ZW0tZGVzY3JpcHRpb24ge1xuICBtYXJnaW46IDBweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tdGludCk7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5saXN0aW5nLWl0ZW0gLm1pZGRsZS1yb3cgLmJvb2ttYXJrLWJ1dHRvbiB7XG4gIC0tcGFkZGluZy1zdGFydDogNXB4O1xuICAtLXBhZGRpbmctZW5kOiA1cHg7XG4gIG1hcmdpbjogMHB4O1xuICBmb250LXNpemU6IDE2cHg7XG59XG4ubGlzdGluZy1pdGVtIC5ib3R0b20tcm93IHtcbiAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMHB4O1xuICBwYWRkaW5nOiAwcHggY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKSBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4ubGlzdGluZy1pdGVtIC5ib3R0b20tcm93IC5jb2RlLXdyYXBwZXIge1xuICBtYXgtd2lkdGg6IGZpdC1jb250ZW50O1xufVxuLmxpc3RpbmctaXRlbSAuYm90dG9tLXJvdyAuY29kZS13cmFwcGVyIC5jb2RlLWN0YSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5saXN0aW5nLWl0ZW0gLmJvdHRvbS1yb3cgLmNvZGUtd3JhcHBlciAuaXRlbS1jb2RlIHtcbiAgaGVpZ2h0OiB2YXIoLS1wYWdlLWRlYWwtY29kZS1oZWlnaHQpO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBwYWRkaW5nOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDQpIGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXBhZ2UtY29sb3IpO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBib3JkZXItcmFkaXVzOiBjYWxjKHZhcigtLXBhZ2UtZGVhbC1jb2RlLWhlaWdodCkgLyAyKTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4ubGlzdGluZy1pdGVtIC5ib3R0b20tcm93IC5jb2RlLXdyYXBwZXIgLml0ZW0tY29kZS5leHBpcmVkIHtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1wYWdlLWV4cGlyZWQtY29sb3IpO1xuICBjb2xvcjogdmFyKC0tcGFnZS1leHBpcmVkLWNvbG9yKTtcbiAgb3BhY2l0eTogMC42O1xufVxuLmxpc3RpbmctaXRlbSAuYm90dG9tLXJvdyAudGltZS1sZWZ0LXdyYXBwZXIge1xuICBmbGV4LXNocmluazogMDtcbiAgbWF4LXdpZHRoOiBmaXQtY29udGVudDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG59XG4ubGlzdGluZy1pdGVtIC5ib3R0b20tcm93IC50aW1lLWxlZnQtd3JhcHBlciAuZXhwaXJhdGlvbi1jdGEge1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHRleHQtYWxpZ246IGVuZDtcbn1cbi5saXN0aW5nLWl0ZW0gLmJvdHRvbS1yb3cgLnRpbWUtbGVmdC13cmFwcGVyOm5vdCguY291bnRkb3duLWFjdGl2ZSkgLml0ZW0tdGltZS1sZWZ0IHtcbiAgY29sb3I6IHZhcigtLXBhZ2UtZGVhbC1jb2xvcik7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtYWxpZ246IGVuZDtcbn1cbi5saXN0aW5nLWl0ZW0gLmJvdHRvbS1yb3cgLnRpbWUtbGVmdC13cmFwcGVyLmNvdW50ZG93bi1hY3RpdmUge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmxpc3RpbmctaXRlbSAuYm90dG9tLXJvdyAudGltZS1sZWZ0LXdyYXBwZXIuY291bnRkb3duLWFjdGl2ZSAuY291bnRkb3duLXdyYXBwZXIge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMHB4O1xufVxuLmxpc3RpbmctaXRlbSAuYm90dG9tLXJvdyAudGltZS1sZWZ0LXdyYXBwZXIuY291bnRkb3duLWFjdGl2ZSAuY291bnRkb3duLXdyYXBwZXIgYXBwLWNvdW50ZG93bi10aW1lci5pdGVtLWNvdW50ZG93biB7XG4gIC0tY291bnRkb3duLXRpbWUtbWFyZ2luOiAwcHg7XG4gIC0tY291bnRkb3duLXRpbWUtcGFkZGluZzogMHB4O1xuICAtLWNvdW50ZG93bi1pbm5lci10aW1lLW1hcmdpbjogdmFyKC0tcGFnZS1jb3VudGRvd24tZ3V0dGVyKSB2YXIoLS1wYWdlLWNvdW50ZG93bi1ndXR0ZXIpIDBweDtcbiAgLS1jb3VudGRvd24taW5uZXItdGltZS1wYWRkaW5nOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpIGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gNCk7XG4gIC0tY291bnRkb3duLWZpbGwtYm9yZGVyOiBub25lO1xuICAtLWNvdW50ZG93bi1maWxsLWJvcmRlci1yYWRpdXM6IHZhcigtLWFwcC1uYXJyb3ctcmFkaXVzKTtcbiAgLS1jb3VudGRvd24tZmlsbC1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xuICAtLWNvdW50ZG93bi1maWxsLXNoYWRvdzogMHB4IDBweCA1cHggMHB4IHZhcigtLXBhZ2UtY291bnRkb3duLWZpbGwtc2hhZG93LWNvbG9yKTtcbiAgLS1jb3VudGRvd24tdmFsdWUtY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrZXN0KTtcbiAgLS1jb3VudGRvd24tdW5pdC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZSk7XG4gIC0tY291bnRkb3duLXRpbWUtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXJnaW4tcmlnaHQ6IGNhbGModmFyKC0tcGFnZS1jb3VudGRvd24tZ3V0dGVyKSAqIC0xKTtcbn0iLCJAbWl4aW4gaW9uLWNvbG9yKCRjb2xvcikge1xuICBAY29udGVudDtcblxuICAuaW9uLWNvbG9yLSN7JGNvbG9yfSB7XG4gICAgLS1pb24tY29sb3ItYmFzZTogdmFyKC0taW9uLWNvbG9yLSN7JGNvbG9yfSkgIWltcG9ydGFudDtcbiAgICAtLWlvbi1jb2xvci1iYXNlLXJnYjogdmFyKC0taW9uLWNvbG9yLSN7JGNvbG9yfS1yZ2IpICFpbXBvcnRhbnQ7XG4gICAgLS1pb24tY29sb3ItY29udHJhc3Q6IHZhcigtLWlvbi1jb2xvci0jeyRjb2xvcn0tY29udHJhc3QpICFpbXBvcnRhbnQ7XG4gICAgLS1pb24tY29sb3ItY29udHJhc3QtcmdiOiB2YXIoLS1pb24tY29sb3ItI3skY29sb3J9LWNvbnRyYXN0LXJnYikgIWltcG9ydGFudDtcbiAgICAtLWlvbi1jb2xvci1zaGFkZTogdmFyKC0taW9uLWNvbG9yLSN7JGNvbG9yfS1zaGFkZSkgIWltcG9ydGFudDtcbiAgICAtLWlvbi1jb2xvci10aW50OiB2YXIoLS1pb24tY29sb3ItI3skY29sb3J9LXRpbnQpICFpbXBvcnRhbnQ7XG4gIH1cbn1cbiJdfQ== */"];
    /***/
  },

  /***/
  "./src/app/deals/listing/styles/deals-listing.shell.scss.shim.ngstyle.js":
  /*!*******************************************************************************!*\
    !*** ./src/app/deals/listing/styles/deals-listing.shell.scss.shim.ngstyle.js ***!
    \*******************************************************************************/

  /*! exports provided: styles */

  /***/
  function srcAppDealsListingStylesDealsListingShellScssShimNgstyleJs(module, __webpack_exports__, __webpack_require__) {
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


    var styles = ["[_nghost-%COMP%] {\n  --shell-color: #70DF70;\n  --shell-color-rgb: 112,223,112;\n}\n\napp-image-shell.deal-logo[_ngcontent-%COMP%] {\n  --image-shell-loading-background: rgba(var(--shell-color-rgb), .10);\n  --image-shell-spinner-color: rgba(var(--shell-color-rgb), .30);\n  --image-shell-spinner-size: 18px;\n}\n\n.item-name[_ngcontent-%COMP%]   app-text-shell[_ngcontent-%COMP%] {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .30);\n  --text-shell-line-height: 16px;\n}\n\n.item-description[_ngcontent-%COMP%]    > app-text-shell[_ngcontent-%COMP%] {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .20);\n  --text-shell-line-height: 14px;\n}\n\n.item-code[_ngcontent-%COMP%]    > app-text-shell[_ngcontent-%COMP%] {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .15);\n  --text-shell-line-height: 14px;\n  min-width: 60px;\n}\n\n.item-code[_ngcontent-%COMP%]    > app-text-shell.text-loaded[_ngcontent-%COMP%] {\n  min-width: 0px;\n}\n\n.item-time-left[_ngcontent-%COMP%]    > app-text-shell[_ngcontent-%COMP%] {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .10);\n  --text-shell-line-height: 14px;\n  min-width: 60px;\n}\n\n.item-time-left[_ngcontent-%COMP%]    > app-text-shell.text-loaded[_ngcontent-%COMP%] {\n  min-width: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kaWRneS9Eb2N1bWVudHMvR2l0SHViL0luZmluaXR5L3NyYy9hcHAvZGVhbHMvbGlzdGluZy9zdHlsZXMvZGVhbHMtbGlzdGluZy5zaGVsbC5zY3NzIiwic3JjL2FwcC9kZWFscy9saXN0aW5nL3N0eWxlcy9kZWFscy1saXN0aW5nLnNoZWxsLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxzQkFBQTtFQUNBLDhCQUFBO0FDREY7O0FEV0E7RUFDRSxtRUFBQTtFQUNBLDhEQUFBO0VBQ0EsZ0NBQUE7QUNSRjs7QURXQTtFQUNFLDBEQUFBO0VBQ0EsOEJBQUE7QUNSRjs7QURXQTtFQUNFLDBEQUFBO0VBQ0EsOEJBQUE7QUNSRjs7QURXQTtFQUNFLDBEQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0FDUkY7O0FEVUU7RUFDRSxjQUFBO0FDUko7O0FEWUE7RUFDRSwwREFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtBQ1RGOztBRFdFO0VBQ0UsY0FBQTtBQ1RKIiwiZmlsZSI6InNyYy9hcHAvZGVhbHMvbGlzdGluZy9zdHlsZXMvZGVhbHMtbGlzdGluZy5zaGVsbC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ3VzdG9tIHZhcmlhYmxlc1xuLy8gTm90ZTogIFRoZXNlIG9uZXMgd2VyZSBhZGRlZCBieSB1cyBhbmQgaGF2ZSBub3RoaW5nIHRvIGRvIHdpdGggSW9uaWMgQ1NTIEN1c3RvbSBQcm9wZXJ0aWVzXG46aG9zdCB7XG4gIC0tc2hlbGwtY29sb3I6ICM3MERGNzA7XG4gIC0tc2hlbGwtY29sb3ItcmdiOiAxMTIsMjIzLDExMjtcbn1cblxuLy8gWW91IGNhbiBhbHNvIGFwcGx5IHNoZWVsIHN0eWxlcyB0byB0aGUgZW50aXJlIHBhZ2Vcbjpob3N0KC5pcy1zaGVsbCkge1xuICAvLyBpb24tY29udGVudCB7XG4gIC8vICAgb3BhY2l0eTogMC44O1xuICAvLyB9XG59XG5cbmFwcC1pbWFnZS1zaGVsbC5kZWFsLWxvZ28ge1xuICAtLWltYWdlLXNoZWxsLWxvYWRpbmctYmFja2dyb3VuZDogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMTApO1xuICAtLWltYWdlLXNoZWxsLXNwaW5uZXItY29sb3I6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjMwKTtcbiAgLS1pbWFnZS1zaGVsbC1zcGlubmVyLXNpemU6IDE4cHg7XG59XG5cbi5pdGVtLW5hbWUgIGFwcC10ZXh0LXNoZWxsIHtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtY29sb3I6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjMwKTtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAxNnB4O1xufVxuXG4uaXRlbS1kZXNjcmlwdGlvbiA+IGFwcC10ZXh0LXNoZWxsIHtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtY29sb3I6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjIwKTtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAxNHB4O1xufVxuXG4uaXRlbS1jb2RlID4gYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtbGluZS1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMTUpO1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDE0cHg7XG4gIG1pbi13aWR0aDogNjBweDtcblxuICAmLnRleHQtbG9hZGVkIHtcbiAgICBtaW4td2lkdGg6IDBweDtcbiAgfVxufVxuXG4uaXRlbS10aW1lLWxlZnQgPiBhcHAtdGV4dC1zaGVsbCB7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4xMCk7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMTRweDtcbiAgbWluLXdpZHRoOiA2MHB4O1xuXG4gICYudGV4dC1sb2FkZWQge1xuICAgIG1pbi13aWR0aDogMHB4O1xuICB9XG59XG4iLCI6aG9zdCB7XG4gIC0tc2hlbGwtY29sb3I6ICM3MERGNzA7XG4gIC0tc2hlbGwtY29sb3ItcmdiOiAxMTIsMjIzLDExMjtcbn1cblxuYXBwLWltYWdlLXNoZWxsLmRlYWwtbG9nbyB7XG4gIC0taW1hZ2Utc2hlbGwtbG9hZGluZy1iYWNrZ3JvdW5kOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4xMCk7XG4gIC0taW1hZ2Utc2hlbGwtc3Bpbm5lci1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMzApO1xuICAtLWltYWdlLXNoZWxsLXNwaW5uZXItc2l6ZTogMThweDtcbn1cblxuLml0ZW0tbmFtZSBhcHAtdGV4dC1zaGVsbCB7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4zMCk7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMTZweDtcbn1cblxuLml0ZW0tZGVzY3JpcHRpb24gPiBhcHAtdGV4dC1zaGVsbCB7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4yMCk7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMTRweDtcbn1cblxuLml0ZW0tY29kZSA+IGFwcC10ZXh0LXNoZWxsIHtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtY29sb3I6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjE1KTtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAxNHB4O1xuICBtaW4td2lkdGg6IDYwcHg7XG59XG4uaXRlbS1jb2RlID4gYXBwLXRleHQtc2hlbGwudGV4dC1sb2FkZWQge1xuICBtaW4td2lkdGg6IDBweDtcbn1cblxuLml0ZW0tdGltZS1sZWZ0ID4gYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtbGluZS1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMTApO1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDE0cHg7XG4gIG1pbi13aWR0aDogNjBweDtcbn1cbi5pdGVtLXRpbWUtbGVmdCA+IGFwcC10ZXh0LXNoZWxsLnRleHQtbG9hZGVkIHtcbiAgbWluLXdpZHRoOiAwcHg7XG59Il19 */"];
    /***/
  },

  /***/
  "./src/app/pipes/time-ago.pipe.ts":
  /*!****************************************!*\
    !*** ./src/app/pipes/time-ago.pipe.ts ***!
    \****************************************/

  /*! exports provided: TimeAgoPipe */

  /***/
  function srcAppPipesTimeAgoPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TimeAgoPipe", function () {
      return TimeAgoPipe;
    });
    /* harmony import */


    var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! dayjs */
    "./node_modules/dayjs/dayjs.min.js");
    /* harmony import */


    var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);
    /* harmony import */


    var dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! dayjs/plugin/relativeTime */
    "./node_modules/dayjs/plugin/relativeTime.js");
    /* harmony import */


    var dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_1__);

    var TimeAgoPipe = /*#__PURE__*/function () {
      function TimeAgoPipe() {
        _classCallCheck(this, TimeAgoPipe);
      }

      _createClass(TimeAgoPipe, [{
        key: "transform",
        value: function transform(value) {
          dayjs__WEBPACK_IMPORTED_MODULE_0__["extend"](dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_1__);
          var timeAgo = '';

          if (value) {
            var withoutSuffix = dayjs__WEBPACK_IMPORTED_MODULE_0__(value).diff(dayjs__WEBPACK_IMPORTED_MODULE_0__(), 'day') < 0 ? false : true;
            timeAgo = dayjs__WEBPACK_IMPORTED_MODULE_0__().to(dayjs__WEBPACK_IMPORTED_MODULE_0__(value), withoutSuffix);
          }

          return timeAgo;
        }
      }]);

      return TimeAgoPipe;
    }();
    /***/

  }
}]);
//# sourceMappingURL=deals-listing-deals-listing-module-ngfactory-es5.js.map