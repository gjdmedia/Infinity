(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["plumbing-details-plumbing-details-module-ngfactory"], {
    /***/
    "1wUO":
    /*!***************************************************************!*\
      !*** ./src/app/plumbing/details/plumbing-details.resolver.ts ***!
      \***************************************************************/

    /*! exports provided: plumbingDetailsResolver */

    /***/
    function wUO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "plumbingDetailsResolver", function () {
        return plumbingDetailsResolver;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _plumbing_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../plumbing.service */
      "htxY");

      var plumbingDetailsResolver = /*#__PURE__*/function () {
        function plumbingDetailsResolver(plumbingService) {
          _classCallCheck(this, plumbingDetailsResolver);

          this.plumbingService = plumbingService;
        }

        _createClass(plumbingDetailsResolver, [{
          key: "resolve",
          value: function resolve(route) {
            var itemSlug = route.paramMap.get('productId');
            var dataSource = this.plumbingService.getDetailsDataSource(itemSlug);
            var dataStore = this.plumbingService.getDetailsStore(dataSource);
            return dataStore;
          }
        }]);

        return plumbingDetailsResolver;
      }();
      /***/

    },

    /***/
    "9R2S":
    /*!***********************************************************************!*\
      !*** ./src/app/plumbing/details/plumbing-details.module.ngfactory.js ***!
      \***********************************************************************/

    /*! exports provided: plumbingDetailsPageModuleNgFactory */

    /***/
    function R2S(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "plumbingDetailsPageModuleNgFactory", function () {
        return plumbingDetailsPageModuleNgFactory;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _plumbing_details_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./plumbing-details.module */
      "9opF");
      /* harmony import */


      var _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../node_modules/@angular/router/router.ngfactory */
      "pMnS");
      /* harmony import */


      var _plumbing_details_page_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./plumbing-details.page.ngfactory */
      "MxAN");
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


      var _plumbing_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../plumbing.service */
      "htxY");
      /* harmony import */


      var _plumbing_details_resolver__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./plumbing-details.resolver */
      "1wUO");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _components_components_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../../components/components.module */
      "j1ZV");
      /* harmony import */


      var angular_pipes__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! angular-pipes */
      "J/9z");
      /* harmony import */


      var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../../pipes/pipes.module */
      "iTUp");
      /* harmony import */


      var _plumbing_details_page__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./plumbing-details.page */
      "Mzw6");
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var plumbingDetailsPageModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_plumbing_details_module__WEBPACK_IMPORTED_MODULE_1__["plumbingDetailsPageModule"], [], function (_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_router_router_lNgFactory"], _plumbing_details_page_ngfactory__WEBPACK_IMPORTED_MODULE_3__["plumbingDetailsPageNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AngularDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AngularDelegate"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"], [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AngularDelegate"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["PopoverController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["PopoverController"], [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AngularDelegate"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_n"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_n"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpXsrfTokenExtractor"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_common_http_http_g"], [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_common_http_http_e"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_common_http_http_h"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_common_http_http_h"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpXsrfTokenExtractor"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_common_http_http_f"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HTTP_INTERCEPTORS"], function (p0_0) {
          return [p0_0];
        }, [_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_common_http_http_h"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_common_http_http_d"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_common_http_http_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["XhrFactory"], null, [_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_common_http_http_d"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpXhrBackend"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpXhrBackend"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["XhrFactory"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpBackend"], null, [_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpXhrBackend"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpHandler"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["ɵHttpInterceptingHandler"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpBackend"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpHandler"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"], function (p0_0) {
          return [_shell_shell_module__WEBPACK_IMPORTED_MODULE_8__["ɵ0"](p0_0)];
        }, [_shell_config_app_shell_config__WEBPACK_IMPORTED_MODULE_9__["AppShellConfig"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _plumbing_service__WEBPACK_IMPORTED_MODULE_10__["plumbingService"], _plumbing_service__WEBPACK_IMPORTED_MODULE_10__["plumbingService"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _plumbing_details_resolver__WEBPACK_IMPORTED_MODULE_11__["plumbingDetailsResolver"], _plumbing_details_resolver__WEBPACK_IMPORTED_MODULE_11__["plumbingDetailsResolver"], [_plumbing_service__WEBPACK_IMPORTED_MODULE_10__["plumbingService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_d"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientXsrfModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientXsrfModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _shell_shell_module__WEBPACK_IMPORTED_MODULE_8__["ShellModule"], _shell_shell_module__WEBPACK_IMPORTED_MODULE_8__["ShellModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _components_components_module__WEBPACK_IMPORTED_MODULE_13__["ComponentsModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_13__["ComponentsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, angular_pipes__WEBPACK_IMPORTED_MODULE_14__["NgFloorPipeModule"], angular_pipes__WEBPACK_IMPORTED_MODULE_14__["NgFloorPipeModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_15__["PipesModule"], _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_15__["PipesModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _plumbing_details_module__WEBPACK_IMPORTED_MODULE_1__["plumbingDetailsPageModule"], _plumbing_details_module__WEBPACK_IMPORTED_MODULE_1__["plumbingDetailsPageModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_common_http_http_e"], "XSRF-TOKEN", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_common_http_http_f"], "X-XSRF-TOKEN", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_12__["ROUTES"], function () {
          return [[{
            path: "",
            component: _plumbing_details_page__WEBPACK_IMPORTED_MODULE_16__["plumbingDetailsPage"],
            resolve: {
              data: _plumbing_details_module__WEBPACK_IMPORTED_MODULE_1__["ɵ0"]
            }
          }]];
        }, [])]);
      });
      /***/

    },

    /***/
    "9opF":
    /*!*************************************************************!*\
      !*** ./src/app/plumbing/details/plumbing-details.module.ts ***!
      \*************************************************************/

    /*! exports provided: plumbingDetailsPageModule, ɵ0 */

    /***/
    function opF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "plumbingDetailsPageModule", function () {
        return plumbingDetailsPageModule;
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


      var _plumbing_details_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./plumbing-details.page */
      "Mzw6");
      /* harmony import */


      var _plumbing_details_resolver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./plumbing-details.resolver */
      "1wUO");

      var ɵ0 = _plumbing_details_resolver__WEBPACK_IMPORTED_MODULE_2__["plumbingDetailsResolver"];
      var routes = [{
        path: '',
        component: _plumbing_details_page__WEBPACK_IMPORTED_MODULE_1__["plumbingDetailsPage"],
        resolve: {
          data: ɵ0
        }
      }];

      var plumbingDetailsPageModule = function plumbingDetailsPageModule() {
        _classCallCheck(this, plumbingDetailsPageModule);
      };
      /***/

    },

    /***/
    "HMct":
    /*!************************************************************************************!*\
      !*** ./src/app/plumbing/details/styles/plumbing-details.page.scss.shim.ngstyle.js ***!
      \************************************************************************************/

    /*! exports provided: styles */

    /***/
    function HMct(module, __webpack_exports__, __webpack_require__) {
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


      var styles = ["@charset \"UTF-8\";\n[_nghost-%COMP%] {\n  --page-margin: var(--app-fair-margin);\n  --page-background: var(--app-background);\n  --page-tags-vertical-gutter: calc(var(--page-margin) / 4);\n  --page-tags-horizontal-gutter: calc(var(--page-margin) / 2);\n  --page-users-pictures-gutter: calc(var(--page-margin) / 4);\n  --page-dish-score-height: 6px;\n  --page-rating-5-color: #7ce198;\n  --page-rating-4-color: #a8e07c;\n  --page-rating-3-color: #cee07c;\n  --page-rating-2-color: #e0c77c;\n  --page-rating-1-color: #e07c7c;\n  --page-color: #ebbb00;\n  --page-color-rgb: 235,187,0;\n}\n.plumbing-details-content[_ngcontent-%COMP%] {\n  --background: var(--page-background);\n}\n.plumbing-details-content[_ngcontent-%COMP%]   .details-scores[_ngcontent-%COMP%]   .score-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.plumbing-details-content[_ngcontent-%COMP%]   .details-scores[_ngcontent-%COMP%]   .score-item[_ngcontent-%COMP%]   .score-icon[_ngcontent-%COMP%] {\n  color: var(--ion-color-medium-tint);\n  font-size: 24px;\n}\n.plumbing-details-content[_ngcontent-%COMP%]   .details-scores[_ngcontent-%COMP%]   .score-item[_ngcontent-%COMP%]   .score-value[_ngcontent-%COMP%] {\n  color: var(--ion-color-medium-tint);\n  font-size: 14px;\n  margin-left: 4px;\n}\n.plumbing-details-content[_ngcontent-%COMP%]   .image-row[_ngcontent-%COMP%] {\n  --ion-grid-column-padding: 0px;\n}\n.plumbing-details-content[_ngcontent-%COMP%]   .image-row[_ngcontent-%COMP%]   .icon-wrapper[_ngcontent-%COMP%] {\n  margin: 0px 15%;\n  display: flex;\n  height: 100%;\n  justify-content: center;\n  align-items: center;\n}\n.plumbing-details-content[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%] {\n  --ion-grid-column-padding: 0px;\n  padding: var(--page-margin);\n  padding-bottom: calc(var(--page-margin) * 2);\n}\n.plumbing-details-content[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%]   .details-name[_ngcontent-%COMP%] {\n  margin: 0px;\n  font-size: 18px;\n}\n.plumbing-details-content[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%]   .details-style[_ngcontent-%COMP%] {\n  margin-top: 5px;\n  margin-bottom: var(--page-margin);\n  font-size: 16px;\n  color: var(--ion-color-dark-tint);\n}\n.plumbing-details-content[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%]   .details-price-range[_ngcontent-%COMP%] {\n  font-size: 16px;\n  letter-spacing: 1px;\n  font-weight: 500;\n  text-align: right;\n}\n.plumbing-details-content[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%]   .details-price-range[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%] {\n  color: var(--page-color);\n}\n.plumbing-details-content[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%]   .details-price-range[_ngcontent-%COMP%]   .no-price[_ngcontent-%COMP%] {\n  color: rgba(var(--ion-color-light-shade-rgb), 0.5);\n}\n.plumbing-details-content[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%]   .restaurant-scores[_ngcontent-%COMP%]   .restaurant-score[_ngcontent-%COMP%] {\n  justify-content: center;\n}\n.plumbing-details-content[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%]   .restaurant-scores[_ngcontent-%COMP%]   .restaurant-score[_ngcontent-%COMP%]:not(:first-child) {\n  padding-left: calc(var(--page-margin) / 2);\n}\n.plumbing-details-content[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%]   .restaurant-scores[_ngcontent-%COMP%]   .restaurant-score[_ngcontent-%COMP%]:not(:last-child) {\n  padding-right: calc(var(--page-margin) / 2);\n  border-right: 1px solid var(--ion-color-light-shade);\n}\n.plumbing-details-content[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%]   .restaurant-scores[_ngcontent-%COMP%]   .restaurant-score.reviews-count[_ngcontent-%COMP%] {\n  flex: 0 1 15%;\n  justify-content: flex-end;\n}\n.plumbing-details-content[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%]   .restaurant-scores[_ngcontent-%COMP%]   .restaurant-rating[_ngcontent-%COMP%] {\n  color: var(--ion-color-lightest);\n  border-radius: var(--app-narrow-radius);\n  padding: calc(var(--page-margin) / 4) calc(var(--page-margin) / 2);\n  font-size: 12px;\n  font-weight: 600;\n  text-align: center;\n  min-width: 30px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: var(--ion-color-medium-tint);\n}\n.plumbing-details-content[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%]   .restaurant-scores[_ngcontent-%COMP%]   .restaurant-rating[ratingBase=\"1\"][_ngcontent-%COMP%] {\n  background-color: var(--page-rating-1-color);\n}\n.plumbing-details-content[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%]   .restaurant-scores[_ngcontent-%COMP%]   .restaurant-rating[ratingBase=\"2\"][_ngcontent-%COMP%] {\n  background-color: var(--page-rating-2-color);\n}\n.plumbing-details-content[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%]   .restaurant-scores[_ngcontent-%COMP%]   .restaurant-rating[ratingBase=\"3\"][_ngcontent-%COMP%] {\n  background-color: var(--page-rating-3-color);\n}\n.plumbing-details-content[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%]   .restaurant-scores[_ngcontent-%COMP%]   .restaurant-rating[ratingBase=\"4\"][_ngcontent-%COMP%] {\n  background-color: var(--page-rating-4-color);\n}\n.plumbing-details-content[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%]   .restaurant-scores[_ngcontent-%COMP%]   .restaurant-rating[ratingBase=\"5\"][_ngcontent-%COMP%] {\n  background-color: var(--page-rating-5-color);\n}\n.plumbing-details-content[_ngcontent-%COMP%]   .detail-title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 500;\n  color: var(--ion-color-dark-tint);\n  margin: 0px;\n  margin-bottom: var(--page-margin);\n}\n.plumbing-details-content[_ngcontent-%COMP%]   .open-hours-wrapper[_ngcontent-%COMP%] {\n  padding: 0px var(--page-margin) var(--page-margin);\n}\n.plumbing-details-content[_ngcontent-%COMP%]   .open-hours-wrapper[_ngcontent-%COMP%]   .schedules-list[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0px;\n  padding: 0px;\n}\n.plumbing-details-content[_ngcontent-%COMP%]   .open-hours-wrapper[_ngcontent-%COMP%]   .schedules-list[_ngcontent-%COMP%]   .open-hour-item[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--ion-color-medium-tint);\n}\n.plumbing-details-content[_ngcontent-%COMP%]   .open-hours-wrapper[_ngcontent-%COMP%]   .schedules-list[_ngcontent-%COMP%]   .open-hour-item[_ngcontent-%COMP%]    + .open-hour-item[_ngcontent-%COMP%] {\n  margin-top: calc(var(--page-margin) / 2);\n}\n.plumbing-details-content[_ngcontent-%COMP%]   .open-hours-wrapper[_ngcontent-%COMP%]   .schedules-list[_ngcontent-%COMP%]   .open-hour-item[_ngcontent-%COMP%]   .schedule-outer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 75%;\n}\n.plumbing-details-content[_ngcontent-%COMP%]   .open-hours-wrapper[_ngcontent-%COMP%]   .schedules-list[_ngcontent-%COMP%]   .open-hour-item[_ngcontent-%COMP%]   .schedule-outer[_ngcontent-%COMP%]   .schedule-day[_ngcontent-%COMP%] {\n  display: block;\n  padding-right: var(--page-margin);\n  width: 40%;\n  font-size: 14px;\n}\n.plumbing-details-content[_ngcontent-%COMP%]   .open-hours-wrapper[_ngcontent-%COMP%]   .schedules-list[_ngcontent-%COMP%]   .open-hour-item[_ngcontent-%COMP%]   .schedule-outer[_ngcontent-%COMP%]   .schedule-hours[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n}\n.plumbing-details-content[_ngcontent-%COMP%]   .open-hours-wrapper[_ngcontent-%COMP%]   .schedules-list[_ngcontent-%COMP%]   .open-hour-item[_ngcontent-%COMP%]   .schedule-outer[_ngcontent-%COMP%]   .schedule-hours[_ngcontent-%COMP%]   .schedule-separator[_ngcontent-%COMP%] {\n  margin: 0px var(--page-margin);\n  line-height: 1;\n}\n.plumbing-details-content[_ngcontent-%COMP%]   .open-hours-wrapper[_ngcontent-%COMP%]   .schedules-list[_ngcontent-%COMP%]   .open-hour-item[_ngcontent-%COMP%]   .schedule-outer[_ngcontent-%COMP%]   .schedule-hours[_ngcontent-%COMP%]   .schedule-value[_ngcontent-%COMP%] {\n  flex: 0 1 25%;\n  font-weight: 500;\n}\n.plumbing-details-content[_ngcontent-%COMP%]   .open-hours-wrapper[_ngcontent-%COMP%]   .schedules-list[_ngcontent-%COMP%]   .open-hour-item[_ngcontent-%COMP%]   .schedule-outer[_ngcontent-%COMP%]   .schedule-hours[_ngcontent-%COMP%]   .schedule-value[_ngcontent-%COMP%]:first-child {\n  text-align: start;\n}\n.plumbing-details-content[_ngcontent-%COMP%]   .open-hours-wrapper[_ngcontent-%COMP%]   .schedules-list[_ngcontent-%COMP%]   .open-hour-item[_ngcontent-%COMP%]   .schedule-outer[_ngcontent-%COMP%]   .schedule-hours[_ngcontent-%COMP%]   .schedule-value[_ngcontent-%COMP%]:last-child {\n  text-align: end;\n}\n.plumbing-details-content[_ngcontent-%COMP%]   .open-hours-wrapper[_ngcontent-%COMP%]   .schedules-list[_ngcontent-%COMP%]   .open-hour-item[_ngcontent-%COMP%]   .schedule-outer[_ngcontent-%COMP%]   .schedule-hours[_ngcontent-%COMP%]   .schedule-closed[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  font-size: 12px;\n}\n.plumbing-details-content[_ngcontent-%COMP%]   .location-wrapper[_ngcontent-%COMP%] {\n  padding: 0px 0px var(--page-margin);\n}\n.plumbing-details-content[_ngcontent-%COMP%]   .location-wrapper[_ngcontent-%COMP%]   .location-header[_ngcontent-%COMP%] {\n  padding: 0px var(--page-margin) 0px;\n  margin-bottom: calc(var(--page-margin) / 2);\n}\n.plumbing-details-content[_ngcontent-%COMP%]   .location-wrapper[_ngcontent-%COMP%]   .detail-title[_ngcontent-%COMP%] {\n  margin-bottom: 5px;\n}\n.plumbing-details-content[_ngcontent-%COMP%]   .location-wrapper[_ngcontent-%COMP%]   .location-address[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 14px;\n  color: var(--ion-color-medium-tint);\n}\n.plumbing-details-content[_ngcontent-%COMP%]   .details-tags[_ngcontent-%COMP%] {\n  --ion-grid-column-padding: 0px;\n  padding: 0px var(--page-margin) var(--page-margin);\n  justify-content: center;\n  margin-top: calc(var(--page-tags-vertical-gutter) * 2 * -1);\n}\n.plumbing-details-content[_ngcontent-%COMP%]   .details-tags[_ngcontent-%COMP%]   .tag-wrapper[_ngcontent-%COMP%] {\n  padding: calc(var(--page-tags-vertical-gutter) * 2) var(--page-tags-horizontal-gutter) 0px 0px;\n  flex-grow: 0;\n  min-width: -webkit-fit-content;\n  min-width: -moz-fit-content;\n  min-width: fit-content;\n}\n.plumbing-details-content[_ngcontent-%COMP%]   .details-tags[_ngcontent-%COMP%]   .tag-wrapper[_ngcontent-%COMP%]:last-child {\n  padding-right: 0px;\n}\n.plumbing-details-content[_ngcontent-%COMP%]   .details-tags[_ngcontent-%COMP%]   .item-tag[_ngcontent-%COMP%] {\n  display: block;\n  border-radius: var(--app-narrow-radius);\n  border: 1px solid var(--ion-color-medium-tint);\n  padding: var(--page-tags-vertical-gutter) var(--page-tags-horizontal-gutter);\n  font-size: 14px;\n  color: var(--ion-color-medium-tint);\n}\n.plumbing-details-content[_ngcontent-%COMP%]   .details-divider[_ngcontent-%COMP%] {\n  margin: 0px var(--page-margin) calc(var(--page-margin) * 2);\n  border-top: 2px solid rgba(var(--ion-color-light-shade-rgb), 0.4);\n}\n.plumbing-details-content[_ngcontent-%COMP%]   .users-pictures-wrapper[_ngcontent-%COMP%] {\n  padding: 0px var(--page-margin) var(--page-margin);\n}\n.plumbing-details-content[_ngcontent-%COMP%]   .users-pictures-wrapper[_ngcontent-%COMP%]   .pictures-row[_ngcontent-%COMP%] {\n  --ion-grid-columns: 10;\n  --ion-grid-column-padding: 0px;\n  margin: 0px calc(var(--page-users-pictures-gutter) * -1);\n}\n.plumbing-details-content[_ngcontent-%COMP%]   .users-pictures-wrapper[_ngcontent-%COMP%]   .pictures-row[_ngcontent-%COMP%]   .picture-wrapper[_ngcontent-%COMP%] {\n  padding: 0px var(--page-users-pictures-gutter);\n}\n.plumbing-details-content[_ngcontent-%COMP%]   .users-pictures-wrapper[_ngcontent-%COMP%]   .pictures-row[_ngcontent-%COMP%]   .picture-wrapper[_ngcontent-%COMP%]   .has-more-pictures[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0px;\n  bottom: 0px;\n  left: 0px;\n  right: 0px;\n  margin: 0px var(--page-users-pictures-gutter);\n  background-color: rgba(var(--page-color-rgb), 0.7);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-decoration: none;\n  z-index: 2;\n}\n.plumbing-details-content[_ngcontent-%COMP%]   .users-pictures-wrapper[_ngcontent-%COMP%]   .pictures-row[_ngcontent-%COMP%]   .picture-wrapper[_ngcontent-%COMP%]   .has-more-pictures[_ngcontent-%COMP%]   .pictures-count[_ngcontent-%COMP%] {\n  font-size: 22px;\n  color: var(--ion-color-lightest);\n  font-weight: 600;\n}\n.plumbing-details-content[_ngcontent-%COMP%]   .users-pictures-wrapper[_ngcontent-%COMP%]   .pictures-row[_ngcontent-%COMP%]   .picture-wrapper[_ngcontent-%COMP%]   .has-more-pictures[_ngcontent-%COMP%]   .pictures-count[_ngcontent-%COMP%]::before {\n  content: \"+\";\n  font-size: 26px;\n  color: var(--ion-color-lightest);\n  font-weight: 600;\n}\n.plumbing-details-content[_ngcontent-%COMP%]   .users-pictures-wrapper[_ngcontent-%COMP%]   .upload-picture-btn[_ngcontent-%COMP%] {\n  margin: calc(var(--page-margin) / 2) 0px 0px;\n}\n.plumbing-details-content[_ngcontent-%COMP%]   .popular-dishes-wrapper[_ngcontent-%COMP%] {\n  padding: 0px var(--page-margin) var(--page-margin);\n}\n.plumbing-details-content[_ngcontent-%COMP%]   .popular-dishes-wrapper[_ngcontent-%COMP%]   .popular-dish[_ngcontent-%COMP%] {\n  --ion-grid-column-padding: 0px;\n}\n.plumbing-details-content[_ngcontent-%COMP%]   .popular-dishes-wrapper[_ngcontent-%COMP%]   .popular-dish[_ngcontent-%COMP%]:not(:last-child) {\n  padding-bottom: var(--page-margin);\n}\n.plumbing-details-content[_ngcontent-%COMP%]   .popular-dishes-wrapper[_ngcontent-%COMP%]   .popular-dish[_ngcontent-%COMP%]   .dish-name[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 5px;\n  font-size: 14px;\n  color: var(--ion-color-medium-tint);\n}\n.plumbing-details-content[_ngcontent-%COMP%]   .popular-dishes-wrapper[_ngcontent-%COMP%]   .popular-dish[_ngcontent-%COMP%]   .dish-score[_ngcontent-%COMP%] {\n  --buffer-background: rgba(var(--page-color-rgb), .20);\n  --progress-background: rgba(var(--page-color-rgb), 1);\n  height: var(--page-dish-score-height);\n  border-radius: calc(var(--page-dish-score-height) / 2);\n}\n.plumbing-details-content[_ngcontent-%COMP%]   .popular-dishes-wrapper[_ngcontent-%COMP%]   .popular-dish[_ngcontent-%COMP%]   .dish-votes-count[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  justify-content: flex-end;\n}\n.plumbing-details-content[_ngcontent-%COMP%]   .popular-dishes-wrapper[_ngcontent-%COMP%]   .popular-dish[_ngcontent-%COMP%]   .dish-votes-count[_ngcontent-%COMP%]   .dish-votes-icon[_ngcontent-%COMP%] {\n  color: var(--ion-color-medium-tint);\n}\n.plumbing-details-content[_ngcontent-%COMP%]   .popular-dishes-wrapper[_ngcontent-%COMP%]   .popular-dish[_ngcontent-%COMP%]   .dish-votes-count[_ngcontent-%COMP%]   .dish-votes-value[_ngcontent-%COMP%] {\n  color: var(--ion-color-medium-tint);\n  font-size: 14px;\n  margin-right: 4px;\n}\n.plumbing-details-content[_ngcontent-%COMP%]   .reviews-wrapper[_ngcontent-%COMP%] {\n  padding: 0px var(--page-margin) var(--page-margin);\n}\n.plumbing-details-content[_ngcontent-%COMP%]   .reviews-wrapper[_ngcontent-%COMP%]   .reviews-list[_ngcontent-%COMP%] {\n  margin-bottom: calc(var(--page-margin) / 2);\n}\n.plumbing-details-content[_ngcontent-%COMP%]   .reviews-wrapper[_ngcontent-%COMP%]   .reviews-list[_ngcontent-%COMP%]   .review-item[_ngcontent-%COMP%]:not(:last-child) {\n  padding-bottom: var(--page-margin);\n}\n.plumbing-details-content[_ngcontent-%COMP%]   .reviews-wrapper[_ngcontent-%COMP%]   .reviews-list[_ngcontent-%COMP%]   .review-item[_ngcontent-%COMP%]:not(:last-child)::after {\n  content: \"\";\n  display: block;\n  margin: 5px var(--page-margin);\n  border-top: 2px solid rgba(var(--ion-color-light-shade-rgb), 0.4);\n}\n.plumbing-details-content[_ngcontent-%COMP%]   .reviews-wrapper[_ngcontent-%COMP%]   .reviews-list[_ngcontent-%COMP%]   .review-item[_ngcontent-%COMP%]   .review-user[_ngcontent-%COMP%] {\n  --ion-grid-columns: 10;\n  --ion-grid-column-padding: 0px;\n}\n.plumbing-details-content[_ngcontent-%COMP%]   .reviews-wrapper[_ngcontent-%COMP%]   .reviews-list[_ngcontent-%COMP%]   .review-item[_ngcontent-%COMP%]   .review-user[_ngcontent-%COMP%]   .user-image-wrapper[_ngcontent-%COMP%] {\n  padding-right: calc(var(--page-margin) / 2);\n}\n.plumbing-details-content[_ngcontent-%COMP%]   .reviews-wrapper[_ngcontent-%COMP%]   .reviews-list[_ngcontent-%COMP%]   .review-item[_ngcontent-%COMP%]   .review-user[_ngcontent-%COMP%]   .user-brief-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  padding-right: calc(var(--page-margin) / 2);\n}\n.plumbing-details-content[_ngcontent-%COMP%]   .reviews-wrapper[_ngcontent-%COMP%]   .reviews-list[_ngcontent-%COMP%]   .review-item[_ngcontent-%COMP%]   .review-user[_ngcontent-%COMP%]   .user-brief-wrapper[_ngcontent-%COMP%]   .review-user-name[_ngcontent-%COMP%] {\n  font-size: 16px;\n  margin: 0px;\n  font-weight: 400;\n}\n.plumbing-details-content[_ngcontent-%COMP%]   .reviews-wrapper[_ngcontent-%COMP%]   .reviews-list[_ngcontent-%COMP%]   .review-item[_ngcontent-%COMP%]   .review-user[_ngcontent-%COMP%]   .user-brief-wrapper[_ngcontent-%COMP%]   .user-scores[_ngcontent-%COMP%]   .user-score[_ngcontent-%COMP%]   .score-title[_ngcontent-%COMP%] {\n  color: var(--ion-color-medium-tint);\n  font-size: 12px;\n  margin-left: 4px;\n}\n.plumbing-details-content[_ngcontent-%COMP%]   .reviews-wrapper[_ngcontent-%COMP%]   .reviews-list[_ngcontent-%COMP%]   .review-item[_ngcontent-%COMP%]   .review-user[_ngcontent-%COMP%]   .review-info-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: flex-end;\n  min-width: 20%;\n  min-width: -webkit-fit-content;\n  min-width: -moz-fit-content;\n  min-width: fit-content;\n  flex-grow: 0;\n}\n.plumbing-details-content[_ngcontent-%COMP%]   .reviews-wrapper[_ngcontent-%COMP%]   .reviews-list[_ngcontent-%COMP%]   .review-item[_ngcontent-%COMP%]   .review-user[_ngcontent-%COMP%]   .review-info-wrapper[_ngcontent-%COMP%]   .review-date[_ngcontent-%COMP%] {\n  color: var(--ion-color-medium-tint);\n  font-size: 11px;\n  display: block;\n  width: 100%;\n  text-align: right;\n}\n.plumbing-details-content[_ngcontent-%COMP%]   .reviews-wrapper[_ngcontent-%COMP%]   .reviews-list[_ngcontent-%COMP%]   .review-item[_ngcontent-%COMP%]   .review-user[_ngcontent-%COMP%]   .review-info-wrapper[_ngcontent-%COMP%]   .review-rating[_ngcontent-%COMP%] {\n  width: 36px;\n  color: var(--ion-color-lightest);\n  border-radius: var(--app-narrow-radius);\n  padding: calc(var(--page-margin) / 4) calc(var(--page-margin) / 2);\n  font-size: 12px;\n  font-weight: 600;\n  display: block;\n  text-align: center;\n  background-color: var(--ion-color-medium-tint);\n}\n.plumbing-details-content[_ngcontent-%COMP%]   .reviews-wrapper[_ngcontent-%COMP%]   .reviews-list[_ngcontent-%COMP%]   .review-item[_ngcontent-%COMP%]   .review-user[_ngcontent-%COMP%]   .review-info-wrapper[_ngcontent-%COMP%]   .review-rating[ratingBase=\"1\"][_ngcontent-%COMP%] {\n  background-color: var(--page-rating-1-color);\n}\n.plumbing-details-content[_ngcontent-%COMP%]   .reviews-wrapper[_ngcontent-%COMP%]   .reviews-list[_ngcontent-%COMP%]   .review-item[_ngcontent-%COMP%]   .review-user[_ngcontent-%COMP%]   .review-info-wrapper[_ngcontent-%COMP%]   .review-rating[ratingBase=\"2\"][_ngcontent-%COMP%] {\n  background-color: var(--page-rating-2-color);\n}\n.plumbing-details-content[_ngcontent-%COMP%]   .reviews-wrapper[_ngcontent-%COMP%]   .reviews-list[_ngcontent-%COMP%]   .review-item[_ngcontent-%COMP%]   .review-user[_ngcontent-%COMP%]   .review-info-wrapper[_ngcontent-%COMP%]   .review-rating[ratingBase=\"3\"][_ngcontent-%COMP%] {\n  background-color: var(--page-rating-3-color);\n}\n.plumbing-details-content[_ngcontent-%COMP%]   .reviews-wrapper[_ngcontent-%COMP%]   .reviews-list[_ngcontent-%COMP%]   .review-item[_ngcontent-%COMP%]   .review-user[_ngcontent-%COMP%]   .review-info-wrapper[_ngcontent-%COMP%]   .review-rating[ratingBase=\"4\"][_ngcontent-%COMP%] {\n  background-color: var(--page-rating-4-color);\n}\n.plumbing-details-content[_ngcontent-%COMP%]   .reviews-wrapper[_ngcontent-%COMP%]   .reviews-list[_ngcontent-%COMP%]   .review-item[_ngcontent-%COMP%]   .review-user[_ngcontent-%COMP%]   .review-info-wrapper[_ngcontent-%COMP%]   .review-rating[ratingBase=\"5\"][_ngcontent-%COMP%] {\n  background-color: var(--page-rating-5-color);\n}\n.plumbing-details-content[_ngcontent-%COMP%]   .reviews-wrapper[_ngcontent-%COMP%]   .reviews-list[_ngcontent-%COMP%]   .review-item[_ngcontent-%COMP%]   .review-message[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 300;\n  line-height: 18px;\n  margin: var(--page-margin) 0px;\n}\n.plumbing-details-content[_ngcontent-%COMP%]   .reviews-wrapper[_ngcontent-%COMP%]   .reviews-list[_ngcontent-%COMP%]   .review-item[_ngcontent-%COMP%]   .review-scores[_ngcontent-%COMP%] {\n  padding: 0px var(--page-margin) var(--page-margin);\n  justify-content: space-between;\n}\n.plumbing-details-content[_ngcontent-%COMP%]   .reviews-wrapper[_ngcontent-%COMP%]   .reviews-list[_ngcontent-%COMP%]   .review-item[_ngcontent-%COMP%]   .review-scores[_ngcontent-%COMP%]   .review-score[_ngcontent-%COMP%] {\n  justify-content: center;\n}\n.plumbing-details-content[_ngcontent-%COMP%]   .reviews-wrapper[_ngcontent-%COMP%]   .reviews-list[_ngcontent-%COMP%]   .review-item[_ngcontent-%COMP%]   .review-scores[_ngcontent-%COMP%]   .review-score[_ngcontent-%COMP%]:not(:first-child) {\n  padding-left: calc(var(--page-margin) / 2);\n}\n.plumbing-details-content[_ngcontent-%COMP%]   .reviews-wrapper[_ngcontent-%COMP%]   .reviews-list[_ngcontent-%COMP%]   .review-item[_ngcontent-%COMP%]   .review-scores[_ngcontent-%COMP%]   .review-score[_ngcontent-%COMP%]:not(:last-child) {\n  padding-right: calc(var(--page-margin) / 2);\n  border-right: 1px solid var(--ion-color-light-shade);\n}\n.plumbing-details-content[_ngcontent-%COMP%]   .reviews-wrapper[_ngcontent-%COMP%]   .details-divider[_ngcontent-%COMP%] {\n  margin: 5px 0px;\n}\n.plumbing-details-content[_ngcontent-%COMP%]   .reviews-wrapper[_ngcontent-%COMP%]   .all-reviews-btn[_ngcontent-%COMP%] {\n  margin: 5px 0px;\n}\n.plumbing-details-content[_ngcontent-%COMP%]   .reviews-wrapper[_ngcontent-%COMP%]   .write-reviews-btn[_ngcontent-%COMP%] {\n  margin: var(--page-margin) 0px 0px;\n}\n.plumbing-details-content[_ngcontent-%COMP%]   .recipes-wrapper[_ngcontent-%COMP%] {\n  padding: calc(var(--page-margin) * 3) 0px;\n}\n.plumbing-details-content[_ngcontent-%COMP%]   .recipes-wrapper[_ngcontent-%COMP%]   .recipes-header[_ngcontent-%COMP%] {\n  padding: 0px var(--page-margin) 0px;\n}\n.plumbing-details-content[_ngcontent-%COMP%]   .recipes-wrapper[_ngcontent-%COMP%]   .recipes-header[_ngcontent-%COMP%]   .detail-title[_ngcontent-%COMP%] {\n  text-transform: capitalize;\n}\n.plumbing-details-content[_ngcontent-%COMP%]   .recipes-wrapper[_ngcontent-%COMP%]   .recipes-list[_ngcontent-%COMP%]   .recipe-item[_ngcontent-%COMP%]   .chef-picture-wrapper[_ngcontent-%COMP%] {\n  width: 20%;\n  margin: 0px auto;\n  margin-top: -10%;\n  margin-bottom: calc(var(--page-margin) / 2);\n}\n.plumbing-details-content[_ngcontent-%COMP%]   .recipes-wrapper[_ngcontent-%COMP%]   .recipes-list[_ngcontent-%COMP%]   .recipe-item[_ngcontent-%COMP%]   .details-divider[_ngcontent-%COMP%] {\n  margin-bottom: 0px;\n}\n.plumbing-details-content[_ngcontent-%COMP%]   .recipes-wrapper[_ngcontent-%COMP%]   .recipes-list[_ngcontent-%COMP%]   .recipe-item[_ngcontent-%COMP%]   .recipe-title[_ngcontent-%COMP%] {\n  text-align: center;\n  margin: 0px 0px calc(var(--page-margin) / 2);\n  font-weight: 400;\n  letter-spacing: 3px;\n  font-size: 18px;\n}\n.plumbing-details-content[_ngcontent-%COMP%]   .recipes-wrapper[_ngcontent-%COMP%]   .recipes-list[_ngcontent-%COMP%]   .recipe-item[_ngcontent-%COMP%]   .recipe-title[_ngcontent-%COMP%]::before, .plumbing-details-content[_ngcontent-%COMP%]   .recipes-wrapper[_ngcontent-%COMP%]   .recipes-list[_ngcontent-%COMP%]   .recipe-item[_ngcontent-%COMP%]   .recipe-title[_ngcontent-%COMP%]::after {\n  content: \"\xB7\";\n  color: var(--ion-color-dark-tint);\n  margin: 0px 2px;\n}\n.plumbing-details-content[_ngcontent-%COMP%]   .recipes-wrapper[_ngcontent-%COMP%]   .recipes-list[_ngcontent-%COMP%]   .recipe-item[_ngcontent-%COMP%]   .recipe-call-to-action[_ngcontent-%COMP%] {\n  text-align: center;\n  margin: var(--page-margin) calc(var(--page-margin) * 2);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.plumbing-details-content[_ngcontent-%COMP%]   .recipes-wrapper[_ngcontent-%COMP%]   .recipes-list[_ngcontent-%COMP%]   .recipe-item[_ngcontent-%COMP%]   .recipe-call-to-action[_ngcontent-%COMP%]   .recipe-author[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 16px;\n  min-width: 30%;\n  color: var(--ion-color-dark-tint);\n}\n.plumbing-details-content[_ngcontent-%COMP%]   .recipes-wrapper[_ngcontent-%COMP%]   .recipes-list[_ngcontent-%COMP%]   .recipe-item[_ngcontent-%COMP%]   .recipe-call-to-action[_ngcontent-%COMP%]   .recipe-name[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  font-weight: 300;\n  letter-spacing: 1px;\n  margin: calc(var(--page-margin) / 2) 0px;\n  min-width: 90%;\n}\n.plumbing-details-content[_ngcontent-%COMP%]   .recipes-wrapper[_ngcontent-%COMP%]   .recipes-list[_ngcontent-%COMP%]   .recipe-item[_ngcontent-%COMP%]   .recipe-call-to-action[_ngcontent-%COMP%]   .recipe-chef[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 14px;\n  min-width: 60%;\n  color: var(--ion-color-dark-tint);\n}\n.plumbing-details-content[_ngcontent-%COMP%]   .recipes-wrapper[_ngcontent-%COMP%]   .recipes-list[_ngcontent-%COMP%]   .recipe-item[_ngcontent-%COMP%]   .recipe-attributes[_ngcontent-%COMP%] {\n  padding: 0px var(--page-margin);\n  margin-top: var(--page-margin);\n  justify-content: center;\n}\n.plumbing-details-content[_ngcontent-%COMP%]   .recipes-wrapper[_ngcontent-%COMP%]   .recipes-list[_ngcontent-%COMP%]   .recipe-item[_ngcontent-%COMP%]   .recipe-attributes[_ngcontent-%COMP%]   .attribute-score[_ngcontent-%COMP%] {\n  justify-content: center;\n}\n.plumbing-details-content[_ngcontent-%COMP%]   .recipes-wrapper[_ngcontent-%COMP%]   .recipes-list[_ngcontent-%COMP%]   .recipe-item[_ngcontent-%COMP%]   .recipe-attributes[_ngcontent-%COMP%]   .attribute-score[_ngcontent-%COMP%]:not(:first-child) {\n  padding-left: calc(var(--page-margin) / 2);\n}\n.plumbing-details-content[_ngcontent-%COMP%]   .recipes-wrapper[_ngcontent-%COMP%]   .recipes-list[_ngcontent-%COMP%]   .recipe-item[_ngcontent-%COMP%]   .recipe-attributes[_ngcontent-%COMP%]   .attribute-score[_ngcontent-%COMP%]:not(:last-child) {\n  padding-right: calc(var(--page-margin) / 2);\n}\n.plumbing-details-content[_ngcontent-%COMP%]   .recipes-wrapper[_ngcontent-%COMP%]   .recipes-list[_ngcontent-%COMP%]   .recipe-item[_ngcontent-%COMP%]   .recipe-attributes[_ngcontent-%COMP%]   .attribute-score[_ngcontent-%COMP%]   .score-value[_ngcontent-%COMP%] {\n  text-transform: capitalize;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGx1bWJpbmcvZGV0YWlscy9zdHlsZXMvcGx1bWJpbmctZGV0YWlscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FBRWhCO0VBQ0UscUNBQUE7RUFDQSx3Q0FBQTtFQUVBLHlEQUFBO0VBQ0EsMkRBQUE7RUFDQSwwREFBQTtFQUNBLDZCQUFBO0VBRUEsOEJBQUE7RUFDQSw4QkFBQTtFQUNBLDhCQUFBO0VBQ0EsOEJBQUE7RUFDQSw4QkFBQTtFQUVBLHFCQUFBO0VBQ0EsMkJBQUE7QUFIRjtBQU9BO0VBQ0Usb0NBQUE7QUFKRjtBQU9JO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FBTE47QUFPTTtFQUNFLG1DQUFBO0VBQ0EsZUFBQTtBQUxSO0FBUU07RUFDRSxtQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQU5SO0FBV0U7RUFDRSw4QkFBQTtBQVRKO0FBV0k7RUFDRSxlQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBVE47QUFhRTtFQUNFLDhCQUFBO0VBRUEsMkJBQUE7RUFDQSw0Q0FBQTtBQVpKO0FBY0k7RUFDRSxXQUFBO0VBQ0EsZUFBQTtBQVpOO0FBZUk7RUFDRSxlQUFBO0VBQ0EsaUNBQUE7RUFDQSxlQUFBO0VBQ0EsaUNBQUE7QUFiTjtBQWdCSTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFkTjtBQWdCTTtFQUNFLHdCQUFBO0FBZFI7QUFpQk07RUFDRSxrREFBQTtBQWZSO0FBb0JNO0VBQ0UsdUJBQUE7QUFsQlI7QUFvQlE7RUFDRSwwQ0FBQTtBQWxCVjtBQXFCUTtFQUNFLDJDQUFBO0VBQ0Esb0RBQUE7QUFuQlY7QUFzQlE7RUFDRSxhQUFBO0VBQ0EseUJBQUE7QUFwQlY7QUF3Qk07RUFDRixnQ0FBQTtFQUNBLHVDQUFBO0VBQ0Esa0VBQUE7RUFDQyxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNHLGVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUVBLDhDQUFBO0FBdkJSO0FBeUJJO0VBQ0MsNENBQUE7QUF2Qkw7QUF5Qkk7RUFDQyw0Q0FBQTtBQXZCTDtBQXlCSTtFQUNDLDRDQUFBO0FBdkJMO0FBeUJJO0VBQ0MsNENBQUE7QUF2Qkw7QUF5Qkk7RUFDQyw0Q0FBQTtBQXZCTDtBQTZCRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlDQUFBO0VBQ0EsV0FBQTtFQUNBLGlDQUFBO0FBM0JKO0FBOEJFO0VBQ0Usa0RBQUE7QUE1Qko7QUE4Qkk7RUFDRSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBNUJOO0FBOEJNO0VBQ0UsZUFBQTtFQUNBLG1DQUFBO0FBNUJSO0FBOEJRO0VBQ0Usd0NBQUE7QUE1QlY7QUErQlE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLFVBQUE7QUE3QlY7QUErQlU7RUFDRSxjQUFBO0VBQ0EsaUNBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtBQTdCWjtBQWdDVTtFQUNFLE9BQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQTlCWjtBQWdDWTtFQUNFLDhCQUFBO0VBQ0EsY0FBQTtBQTlCZDtBQWlDWTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtBQS9CZDtBQWlDYztFQUNFLGlCQUFBO0FBL0JoQjtBQWlDYztFQUNFLGVBQUE7QUEvQmhCO0FBbUNZO0VBQ0UseUJBQUE7RUFDQSxlQUFBO0FBakNkO0FBeUNFO0VBQ0UsbUNBQUE7QUF2Q0o7QUF5Q0k7RUFDRSxtQ0FBQTtFQUNBLDJDQUFBO0FBdkNOO0FBMENJO0VBQ0Usa0JBQUE7QUF4Q047QUEyQ0k7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLG1DQUFBO0FBekNOO0FBNkNFO0VBQ0UsOEJBQUE7RUFFQSxrREFBQTtFQUNBLHVCQUFBO0VBQ0EsMkRBQUE7QUE1Q0o7QUE4Q0k7RUFDRSw4RkFBQTtFQUNBLFlBQUE7RUFDQSw4QkFBQTtFQUFBLDJCQUFBO0VBQUEsc0JBQUE7QUE1Q047QUE4Q007RUFDRSxrQkFBQTtBQTVDUjtBQWdESTtFQUNFLGNBQUE7RUFDQSx1Q0FBQTtFQUNBLDhDQUFBO0VBQ0EsNEVBQUE7RUFDQSxlQUFBO0VBQ0EsbUNBQUE7QUE5Q047QUFrREU7RUFDRSwyREFBQTtFQUNBLGlFQUFBO0FBaERKO0FBbURFO0VBQ0Usa0RBQUE7QUFqREo7QUFtREk7RUFDRSxzQkFBQTtFQUNBLDhCQUFBO0VBRUEsd0RBQUE7QUFsRE47QUFvRE07RUFDRSw4Q0FBQTtBQWxEUjtBQW9EUTtFQUNGLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNJLDZDQUFBO0VBQ0osa0RBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNJLHFCQUFBO0VBQ0EsVUFBQTtBQWxEVjtBQW9ETTtFQUNDLGVBQUE7RUFDQSxnQ0FBQTtFQUNBLGdCQUFBO0FBbERQO0FBb0RPO0VBQ0MsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQ0FBQTtFQUNBLGdCQUFBO0FBbERSO0FBeURJO0VBQ0UsNENBQUE7QUF2RE47QUEyREU7RUFDRSxrREFBQTtBQXpESjtBQTJESTtFQUNFLDhCQUFBO0FBekROO0FBMkRNO0VBQ0Usa0NBQUE7QUF6RFI7QUE0RE07RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUNBQUE7QUExRFI7QUE2RE07RUFDRSxxREFBQTtFQUNBLHFEQUFBO0VBRUEscUNBQUE7RUFDQSxzREFBQTtBQTVEUjtBQStETTtFQUNFLGFBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0FBN0RSO0FBK0RRO0VBQ0UsbUNBQUE7QUE3RFY7QUFnRVE7RUFDRSxtQ0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQTlEVjtBQW9FRTtFQUNFLGtEQUFBO0FBbEVKO0FBb0VJO0VBQ0UsMkNBQUE7QUFsRU47QUFxRVE7RUFDRSxrQ0FBQTtBQW5FVjtBQXFFVTtFQUNFLFdBQUE7RUFDQSxjQUFBO0VBQ0EsOEJBQUE7RUFDQSxpRUFBQTtBQW5FWjtBQXVFUTtFQUNFLHNCQUFBO0VBQ0EsOEJBQUE7QUFyRVY7QUF1RVU7RUFDRSwyQ0FBQTtBQXJFWjtBQXdFVTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0VBRUEsMkNBQUE7QUF2RVo7QUF5RVk7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FBdkVkO0FBNEVnQjtFQUNFLG1DQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBMUVsQjtBQWdGVTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0VBQ0EsOEJBQUE7RUFBQSwyQkFBQTtFQUFBLHNCQUFBO0VBQ0EsWUFBQTtBQTlFWjtBQWdGWTtFQUNFLG1DQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUE5RWQ7QUFpRlk7RUFDRSxXQUFBO0VBQ0EsZ0NBQUE7RUFDSix1Q0FBQTtFQUNBLGtFQUFBO0VBQ0MsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBRUcsOENBQUE7QUFoRmQ7QUFrRlU7RUFDQyw0Q0FBQTtBQWhGWDtBQWtGVTtFQUNDLDRDQUFBO0FBaEZYO0FBa0ZVO0VBQ0MsNENBQUE7QUFoRlg7QUFrRlU7RUFDQyw0Q0FBQTtBQWhGWDtBQWtGVTtFQUNDLDRDQUFBO0FBaEZYO0FBc0ZRO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSw4QkFBQTtBQXBGVjtBQXVGUTtFQUNFLGtEQUFBO0VBQ0EsOEJBQUE7QUFyRlY7QUF1RlU7RUFDRSx1QkFBQTtBQXJGWjtBQXVGWTtFQUNFLDBDQUFBO0FBckZkO0FBd0ZZO0VBQ0UsMkNBQUE7RUFDQSxvREFBQTtBQXRGZDtBQTZGSTtFQUNFLGVBQUE7QUEzRk47QUE4Rkk7RUFDRSxlQUFBO0FBNUZOO0FBK0ZJO0VBQ0Usa0NBQUE7QUE3Rk47QUFpR0U7RUFDRSx5Q0FBQTtBQS9GSjtBQWlHSTtFQUNFLG1DQUFBO0FBL0ZOO0FBaUdNO0VBQ0UsMEJBQUE7QUEvRlI7QUFxR1E7RUFDRSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLDJDQUFBO0FBbkdWO0FBc0dRO0VBQ0Usa0JBQUE7QUFwR1Y7QUF1R1E7RUFDRSxrQkFBQTtFQUNBLDRDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFyR1Y7QUF1R1U7RUFFRSxZQUFBO0VBQ0EsaUNBQUE7RUFDQSxlQUFBO0FBdEdaO0FBMEdRO0VBQ0Usa0JBQUE7RUFDQSx1REFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBeEdWO0FBMEdVO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsaUNBQUE7QUF4R1o7QUEyR1U7RUFDRSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx3Q0FBQTtFQUNBLGNBQUE7QUF6R1o7QUE0R1U7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxpQ0FBQTtBQTFHWjtBQThHUTtFQUNFLCtCQUFBO0VBQ0EsOEJBQUE7RUFDQSx1QkFBQTtBQTVHVjtBQThHVTtFQUNFLHVCQUFBO0FBNUdaO0FBOEdZO0VBQ0UsMENBQUE7QUE1R2Q7QUErR1k7RUFDRSwyQ0FBQTtBQTdHZDtBQWdIWTtFQUNFLDBCQUFBO0FBOUdkIiwiZmlsZSI6InNyYy9hcHAvcGx1bWJpbmcvZGV0YWlscy9zdHlsZXMvcGx1bWJpbmctZGV0YWlscy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDdXN0b20gdmFyaWFibGVzXG4vLyBOb3RlOiAgVGhlc2Ugb25lcyB3ZXJlIGFkZGVkIGJ5IHVzIGFuZCBoYXZlIG5vdGhpbmcgdG8gZG8gd2l0aCBJb25pYyBDU1MgQ3VzdG9tIFByb3BlcnRpZXNcbjpob3N0IHtcbiAgLS1wYWdlLW1hcmdpbjogdmFyKC0tYXBwLWZhaXItbWFyZ2luKTtcbiAgLS1wYWdlLWJhY2tncm91bmQ6IHZhcigtLWFwcC1iYWNrZ3JvdW5kKTtcblxuICAtLXBhZ2UtdGFncy12ZXJ0aWNhbC1ndXR0ZXI6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gNCk7XG4gIC0tcGFnZS10YWdzLWhvcml6b250YWwtZ3V0dGVyOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuICAtLXBhZ2UtdXNlcnMtcGljdHVyZXMtZ3V0dGVyOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDQpO1xuICAtLXBhZ2UtZGlzaC1zY29yZS1oZWlnaHQ6IDZweDtcblxuICAtLXBhZ2UtcmF0aW5nLTUtY29sb3I6ICM3Y2UxOTg7XG4gIC0tcGFnZS1yYXRpbmctNC1jb2xvcjogI2E4ZTA3YztcbiAgLS1wYWdlLXJhdGluZy0zLWNvbG9yOiAjY2VlMDdjO1xuICAtLXBhZ2UtcmF0aW5nLTItY29sb3I6ICNlMGM3N2M7XG4gIC0tcGFnZS1yYXRpbmctMS1jb2xvcjogI2UwN2M3YztcblxuICAtLXBhZ2UtY29sb3I6ICNlYmJiMDA7XG4gIC0tcGFnZS1jb2xvci1yZ2I6IDIzNSwxODcsMDtcbn1cblxuLy8gTm90ZTogIEFsbCB0aGUgQ1NTIHZhcmlhYmxlcyBkZWZpbmVkIGJlbG93IGFyZSBvdmVycmlkZXMgb2YgSW9uaWMgZWxlbWVudHMgQ1NTIEN1c3RvbSBQcm9wZXJ0aWVzXG4ucGx1bWJpbmctZGV0YWlscy1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1wYWdlLWJhY2tncm91bmQpO1xuXG4gIC5kZXRhaWxzLXNjb3JlcyB7XG4gICAgLnNjb3JlLWl0ZW0ge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAgIC5zY29yZS1pY29uIHtcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tdGludCk7XG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgIH1cblxuICAgICAgLnNjb3JlLXZhbHVlIHtcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tdGludCk7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDRweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuaW1hZ2Utcm93IHtcbiAgICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiAwcHg7XG5cbiAgICAuaWNvbi13cmFwcGVyIHtcbiAgICAgIG1hcmdpbjogMHB4IDE1JTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgfVxuICB9XG5cbiAgLmRlc2NyaXB0aW9uLXJvdyB7XG4gICAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMHB4O1xuXG4gICAgcGFkZGluZzogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAgIHBhZGRpbmctYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAqIDIpO1xuXG4gICAgLmRldGFpbHMtbmFtZSB7XG4gICAgICBtYXJnaW46IDBweDtcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICB9XG5cbiAgICAuZGV0YWlscy1zdHlsZSB7XG4gICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmstdGludCk7XG4gICAgfVxuXG4gICAgLmRldGFpbHMtcHJpY2UtcmFuZ2Uge1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICB0ZXh0LWFsaWduOiByaWdodDtcblxuICAgICAgLnByaWNlIHtcbiAgICAgICAgY29sb3I6IHZhcigtLXBhZ2UtY29sb3IpO1xuICAgICAgfVxuXG4gICAgICAubm8tcHJpY2Uge1xuICAgICAgICBjb2xvcjogcmdiYSh2YXIoLS1pb24tY29sb3ItbGlnaHQtc2hhZGUtcmdiKSwgLjUwKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAucmVzdGF1cmFudC1zY29yZXMge1xuICAgICAgLnJlc3RhdXJhbnQtc2NvcmUge1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgICAgICAmOm5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG4gICAgICAgIH1cblxuICAgICAgICAmOm5vdCg6bGFzdC1jaGlsZCkge1xuICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG4gICAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlKTtcbiAgICAgICAgfVxuXG4gICAgICAgICYucmV2aWV3cy1jb3VudCB7XG4gICAgICAgICAgZmxleDogMCAxIDE1JTtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5yZXN0YXVyYW50LXJhdGluZyB7XG5cdFx0XHRcdGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xuXHRcdFx0XHRib3JkZXItcmFkaXVzOiB2YXIoLS1hcHAtbmFycm93LXJhZGl1cyk7XG5cdFx0XHRcdHBhZGRpbmc6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gNCkgY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcblx0XHRcdCAgZm9udC1zaXplOiAxMnB4O1xuXHRcdFx0ICBmb250LXdlaWdodDogNjAwO1xuXHRcdFx0ICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIG1pbi13aWR0aDogMzBweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIC8vIERlZmF1bHQgY29sb3JcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS10aW50KTtcblxuXHRcdFx0XHQmW3JhdGluZ0Jhc2U9XCIxXCJdIHtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wYWdlLXJhdGluZy0xLWNvbG9yKTtcblx0XHRcdFx0fVxuXHRcdFx0XHQmW3JhdGluZ0Jhc2U9XCIyXCJdIHtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wYWdlLXJhdGluZy0yLWNvbG9yKTtcblx0XHRcdFx0fVxuXHRcdFx0XHQmW3JhdGluZ0Jhc2U9XCIzXCJdIHtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wYWdlLXJhdGluZy0zLWNvbG9yKTtcblx0XHRcdFx0fVxuXHRcdFx0XHQmW3JhdGluZ0Jhc2U9XCI0XCJdIHtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wYWdlLXJhdGluZy00LWNvbG9yKTtcblx0XHRcdFx0fVxuXHRcdFx0XHQmW3JhdGluZ0Jhc2U9XCI1XCJdIHtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wYWdlLXJhdGluZy01LWNvbG9yKTtcblx0XHRcdFx0fVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5kZXRhaWwtdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyay10aW50KTtcbiAgICBtYXJnaW46IDBweDtcbiAgICBtYXJnaW4tYm90dG9tOiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIH1cblxuICAub3Blbi1ob3Vycy13cmFwcGVyIHtcbiAgICBwYWRkaW5nOiAwcHggdmFyKC0tcGFnZS1tYXJnaW4pIHZhcigtLXBhZ2UtbWFyZ2luKTtcblxuICAgIC5zY2hlZHVsZXMtbGlzdCB7XG4gICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICBwYWRkaW5nOiAwcHg7XG5cbiAgICAgIC5vcGVuLWhvdXItaXRlbSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tdGludCk7XG5cbiAgICAgICAgJiArIC5vcGVuLWhvdXItaXRlbSB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zY2hlZHVsZS1vdXRlciB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICB3aWR0aDogNzUlO1xuXG4gICAgICAgICAgLnNjaGVkdWxlLWRheSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgICAgICAgICAgIHdpZHRoOiA0MCU7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnNjaGVkdWxlLWhvdXJzIHtcbiAgICAgICAgICAgIGZsZXg6IDE7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAgICAgICAgIC5zY2hlZHVsZS1zZXBhcmF0b3Ige1xuICAgICAgICAgICAgICBtYXJnaW46IDBweCB2YXIoLS1wYWdlLW1hcmdpbik7XG4gICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuc2NoZWR1bGUtdmFsdWUge1xuICAgICAgICAgICAgICBmbGV4OiAwIDEgMjUlO1xuICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuXG4gICAgICAgICAgICAgICY6Zmlyc3QtY2hpbGQge1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IHN0YXJ0O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogZW5kO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5zY2hlZHVsZS1jbG9zZWQge1xuICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmxvY2F0aW9uLXdyYXBwZXIge1xuICAgIHBhZGRpbmc6IDBweCAwcHggdmFyKC0tcGFnZS1tYXJnaW4pO1xuXG4gICAgLmxvY2F0aW9uLWhlYWRlciB7XG4gICAgICBwYWRkaW5nOiAwcHggdmFyKC0tcGFnZS1tYXJnaW4pIDBweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG4gICAgfVxuXG4gICAgLmRldGFpbC10aXRsZSB7XG4gICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgfVxuXG4gICAgLmxvY2F0aW9uLWFkZHJlc3Mge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS10aW50KTtcbiAgICB9XG4gIH1cblxuICAuZGV0YWlscy10YWdzIHtcbiAgICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiAwcHg7XG5cbiAgICBwYWRkaW5nOiAwcHggdmFyKC0tcGFnZS1tYXJnaW4pIHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiBjYWxjKHZhcigtLXBhZ2UtdGFncy12ZXJ0aWNhbC1ndXR0ZXIpICogMiAqIC0xKTtcblxuICAgIC50YWctd3JhcHBlciB7XG4gICAgICBwYWRkaW5nOiBjYWxjKHZhcigtLXBhZ2UtdGFncy12ZXJ0aWNhbC1ndXR0ZXIpICogMikgdmFyKC0tcGFnZS10YWdzLWhvcml6b250YWwtZ3V0dGVyKSAwcHggMHB4O1xuICAgICAgZmxleC1ncm93OiAwO1xuICAgICAgbWluLXdpZHRoOiBmaXQtY29udGVudDtcblxuICAgICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMHB4O1xuICAgICAgfVxuICAgIH1cblxuICAgIC5pdGVtLXRhZyB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWFwcC1uYXJyb3ctcmFkaXVzKTtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1tZWRpdW0tdGludCk7XG4gICAgICBwYWRkaW5nOiB2YXIoLS1wYWdlLXRhZ3MtdmVydGljYWwtZ3V0dGVyKSB2YXIoLS1wYWdlLXRhZ3MtaG9yaXpvbnRhbC1ndXR0ZXIpO1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tdGludCk7XG4gICAgfVxuICB9XG5cbiAgLmRldGFpbHMtZGl2aWRlciB7XG4gICAgbWFyZ2luOiAwcHggdmFyKC0tcGFnZS1tYXJnaW4pIGNhbGModmFyKC0tcGFnZS1tYXJnaW4pICogMik7XG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIHJnYmEodmFyKC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlLXJnYiksIC40KTtcbiAgfVxuXG4gIC51c2Vycy1waWN0dXJlcy13cmFwcGVyIHtcbiAgICBwYWRkaW5nOiAwcHggdmFyKC0tcGFnZS1tYXJnaW4pIHZhcigtLXBhZ2UtbWFyZ2luKTtcblxuICAgIC5waWN0dXJlcy1yb3cge1xuICAgICAgLS1pb24tZ3JpZC1jb2x1bW5zOiAxMDtcbiAgICAgIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcblxuICAgICAgbWFyZ2luOiAwcHggY2FsYyh2YXIoLS1wYWdlLXVzZXJzLXBpY3R1cmVzLWd1dHRlcikgKiAtMSk7XG5cbiAgICAgIC5waWN0dXJlLXdyYXBwZXIge1xuICAgICAgICBwYWRkaW5nOiAwcHggdmFyKC0tcGFnZS11c2Vycy1waWN0dXJlcy1ndXR0ZXIpO1xuXG4gICAgICAgIC5oYXMtbW9yZS1waWN0dXJlcyB7XG4gIFx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuICBcdFx0XHRcdHRvcDogMHB4O1xuICBcdFx0XHRcdGJvdHRvbTogMHB4O1xuICBcdFx0XHRcdGxlZnQ6IDBweDtcbiAgXHRcdFx0XHRyaWdodDogMHB4O1xuICAgICAgICAgIG1hcmdpbjogMHB4IHZhcigtLXBhZ2UtdXNlcnMtcGljdHVyZXMtZ3V0dGVyKTtcbiAgXHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKHZhcigtLXBhZ2UtY29sb3ItcmdiKSwgLjcwKTtcbiAgXHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuICBcdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIFx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgIHotaW5kZXg6IDI7XG5cbiAgXHRcdFx0XHQucGljdHVyZXMtY291bnQge1xuICBcdFx0XHRcdFx0Zm9udC1zaXplOiAyMnB4O1xuICBcdFx0XHRcdFx0Y29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XG4gIFx0XHRcdFx0XHRmb250LXdlaWdodDogNjAwO1xuXG4gIFx0XHRcdFx0XHQmOjpiZWZvcmUge1xuICBcdFx0XHRcdFx0XHRjb250ZW50OiAnKyc7XG4gIFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMjZweDtcbiAgXHRcdFx0XHRcdFx0Y29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XG4gIFx0XHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA2MDA7XG4gIFx0XHRcdFx0XHR9XG4gIFx0XHRcdFx0fVxuICBcdFx0XHR9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnVwbG9hZC1waWN0dXJlLWJ0biB7XG4gICAgICBtYXJnaW46IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMikgMHB4IDBweDtcbiAgICB9XG4gIH1cblxuICAucG9wdWxhci1kaXNoZXMtd3JhcHBlciB7XG4gICAgcGFkZGluZzogMHB4IHZhcigtLXBhZ2UtbWFyZ2luKSB2YXIoLS1wYWdlLW1hcmdpbik7XG5cbiAgICAucG9wdWxhci1kaXNoIHtcbiAgICAgIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcblxuICAgICAgJjpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgICAgIH1cblxuICAgICAgLmRpc2gtbmFtZSB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tdGludCk7XG4gICAgICB9XG5cbiAgICAgIC5kaXNoLXNjb3JlIHtcbiAgICAgICAgLS1idWZmZXItYmFja2dyb3VuZDogcmdiYSh2YXIoLS1wYWdlLWNvbG9yLXJnYiksIC4yMCk7XG4gICAgICAgIC0tcHJvZ3Jlc3MtYmFja2dyb3VuZDogcmdiYSh2YXIoLS1wYWdlLWNvbG9yLXJnYiksIDEpO1xuXG4gICAgICAgIGhlaWdodDogdmFyKC0tcGFnZS1kaXNoLXNjb3JlLWhlaWdodCk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IGNhbGModmFyKC0tcGFnZS1kaXNoLXNjb3JlLWhlaWdodCkgLyAyKTtcbiAgICAgIH1cblxuICAgICAgLmRpc2gtdm90ZXMtY291bnQge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG5cbiAgICAgICAgLmRpc2gtdm90ZXMtaWNvbiB7XG4gICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tdGludCk7XG4gICAgICAgIH1cblxuICAgICAgICAuZGlzaC12b3Rlcy12YWx1ZSB7XG4gICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tdGludCk7XG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogNHB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLnJldmlld3Mtd3JhcHBlciB7XG4gICAgcGFkZGluZzogMHB4IHZhcigtLXBhZ2UtbWFyZ2luKSB2YXIoLS1wYWdlLW1hcmdpbik7XG5cbiAgICAucmV2aWV3cy1saXN0IHtcbiAgICAgIG1hcmdpbi1ib3R0b206IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG5cbiAgICAgIC5yZXZpZXctaXRlbSB7XG4gICAgICAgICY6bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IHZhcigtLXBhZ2UtbWFyZ2luKTtcblxuICAgICAgICAgICY6OmFmdGVyIHtcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBtYXJnaW46IDVweCB2YXIoLS1wYWdlLW1hcmdpbik7XG4gICAgICAgICAgICBib3JkZXItdG9wOiAycHggc29saWQgcmdiYSh2YXIoLS1pb24tY29sb3ItbGlnaHQtc2hhZGUtcmdiKSwgLjQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5yZXZpZXctdXNlciB7XG4gICAgICAgICAgLS1pb24tZ3JpZC1jb2x1bW5zOiAxMDtcbiAgICAgICAgICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiAwcHg7XG5cbiAgICAgICAgICAudXNlci1pbWFnZS13cmFwcGVyIHtcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnVzZXItYnJpZWYtd3JhcHBlciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcblxuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcblxuICAgICAgICAgICAgLnJldmlldy11c2VyLW5hbWUge1xuICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAudXNlci1zY29yZXMge1xuICAgICAgICAgICAgICAudXNlci1zY29yZSB7XG4gICAgICAgICAgICAgICAgLnNjb3JlLXRpdGxlIHtcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXRpbnQpO1xuICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDRweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICAucmV2aWV3LWluZm8td3JhcHBlciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICAgICAgICAgIG1pbi13aWR0aDogMjAlO1xuICAgICAgICAgICAgbWluLXdpZHRoOiBmaXQtY29udGVudDtcbiAgICAgICAgICAgIGZsZXgtZ3JvdzogMDtcblxuICAgICAgICAgICAgLnJldmlldy1kYXRlIHtcbiAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tdGludCk7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnJldmlldy1yYXRpbmcge1xuICAgICAgICAgICAgICB3aWR0aDogMzZweDtcbiAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XG4gICAgICBcdFx0XHRcdGJvcmRlci1yYWRpdXM6IHZhcigtLWFwcC1uYXJyb3ctcmFkaXVzKTtcbiAgICAgIFx0XHRcdFx0cGFkZGluZzogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyA0KSBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuICAgICAgXHRcdFx0ICBmb250LXNpemU6IDEycHg7XG4gICAgICBcdFx0XHQgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICBcdFx0XHQgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgXHRcdFx0ICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgIC8vIERlZmF1bHQgY29sb3JcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS10aW50KTtcblxuICAgICAgXHRcdFx0XHQmW3JhdGluZ0Jhc2U9XCIxXCJdIHtcbiAgICAgIFx0XHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wYWdlLXJhdGluZy0xLWNvbG9yKTtcbiAgICAgIFx0XHRcdFx0fVxuICAgICAgXHRcdFx0XHQmW3JhdGluZ0Jhc2U9XCIyXCJdIHtcbiAgICAgIFx0XHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wYWdlLXJhdGluZy0yLWNvbG9yKTtcbiAgICAgIFx0XHRcdFx0fVxuICAgICAgXHRcdFx0XHQmW3JhdGluZ0Jhc2U9XCIzXCJdIHtcbiAgICAgIFx0XHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wYWdlLXJhdGluZy0zLWNvbG9yKTtcbiAgICAgIFx0XHRcdFx0fVxuICAgICAgXHRcdFx0XHQmW3JhdGluZ0Jhc2U9XCI0XCJdIHtcbiAgICAgIFx0XHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wYWdlLXJhdGluZy00LWNvbG9yKTtcbiAgICAgIFx0XHRcdFx0fVxuICAgICAgXHRcdFx0XHQmW3JhdGluZ0Jhc2U9XCI1XCJdIHtcbiAgICAgIFx0XHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wYWdlLXJhdGluZy01LWNvbG9yKTtcbiAgICAgIFx0XHRcdFx0fVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5yZXZpZXctbWVzc2FnZSB7XG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gICAgICAgICAgbWFyZ2luOiB2YXIoLS1wYWdlLW1hcmdpbikgMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLnJldmlldy1zY29yZXMge1xuICAgICAgICAgIHBhZGRpbmc6IDBweCB2YXIoLS1wYWdlLW1hcmdpbikgdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcblxuICAgICAgICAgIC5yZXZpZXctc2NvcmUge1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgICAgICAgICAgICY6bm90KDpmaXJzdC1jaGlsZCkge1xuICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICY6bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG4gICAgICAgICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1saWdodC1zaGFkZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmRldGFpbHMtZGl2aWRlciB7XG4gICAgICBtYXJnaW46IDVweCAwcHg7XG4gICAgfVxuXG4gICAgLmFsbC1yZXZpZXdzLWJ0biB7XG4gICAgICBtYXJnaW46IDVweCAwcHg7XG4gICAgfVxuXG4gICAgLndyaXRlLXJldmlld3MtYnRuIHtcbiAgICAgIG1hcmdpbjogdmFyKC0tcGFnZS1tYXJnaW4pIDBweCAwcHg7XG4gICAgfVxuICB9XG5cbiAgLnJlY2lwZXMtd3JhcHBlciB7XG4gICAgcGFkZGluZzogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgKiAzKSAwcHg7XG5cbiAgICAucmVjaXBlcy1oZWFkZXIge1xuICAgICAgcGFkZGluZzogMHB4IHZhcigtLXBhZ2UtbWFyZ2luKSAwcHg7XG5cbiAgICAgIC5kZXRhaWwtdGl0bGUge1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAucmVjaXBlcy1saXN0IHtcbiAgICAgIC5yZWNpcGUtaXRlbSB7XG4gICAgICAgIC5jaGVmLXBpY3R1cmUtd3JhcHBlciB7XG4gICAgICAgICAgd2lkdGg6IDIwJTtcbiAgICAgICAgICBtYXJnaW46IDBweCBhdXRvO1xuICAgICAgICAgIG1hcmdpbi10b3A6IC0xMCU7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5kZXRhaWxzLWRpdmlkZXIge1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5yZWNpcGUtdGl0bGUge1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBtYXJnaW46IDBweCAwcHggY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbiAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAzcHg7XG4gICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuXG4gICAgICAgICAgJjo6YmVmb3JlLFxuICAgICAgICAgICY6OmFmdGVyIHtcbiAgICAgICAgICAgIGNvbnRlbnQ6ICfCtyc7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmstdGludCk7XG4gICAgICAgICAgICBtYXJnaW46IDBweCAycHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLnJlY2lwZS1jYWxsLXRvLWFjdGlvbiB7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIG1hcmdpbjogdmFyKC0tcGFnZS1tYXJnaW4pIGNhbGModmFyKC0tcGFnZS1tYXJnaW4pICogMik7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAgICAgICAucmVjaXBlLWF1dGhvciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgIG1pbi13aWR0aDogMzAlO1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrLXRpbnQpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5yZWNpcGUtbmFtZSB7XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgICAgICAgICBtYXJnaW46IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMikgMHB4O1xuICAgICAgICAgICAgbWluLXdpZHRoOiA5MCU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnJlY2lwZS1jaGVmIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgbWluLXdpZHRoOiA2MCU7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmstdGludCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLnJlY2lwZS1hdHRyaWJ1dGVzIHtcbiAgICAgICAgICBwYWRkaW5nOiAwcHggdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAgICAgICAgIG1hcmdpbi10b3A6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgICAgICAgIC5hdHRyaWJ1dGUtc2NvcmUge1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgICAgICAgICAgICY6bm90KDpmaXJzdC1jaGlsZCkge1xuICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICY6bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5zY29yZS12YWx1ZSB7XG4gICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19 */"];
      /***/
    },

    /***/
    "MxAN":
    /*!*********************************************************************!*\
      !*** ./src/app/plumbing/details/plumbing-details.page.ngfactory.js ***!
      \*********************************************************************/

    /*! exports provided: RenderType_plumbingDetailsPage, View_plumbingDetailsPage_0, View_plumbingDetailsPage_Host_0, plumbingDetailsPageNgFactory */

    /***/
    function MxAN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RenderType_plumbingDetailsPage", function () {
        return RenderType_plumbingDetailsPage;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_plumbingDetailsPage_0", function () {
        return View_plumbingDetailsPage_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_plumbingDetailsPage_Host_0", function () {
        return View_plumbingDetailsPage_Host_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "plumbingDetailsPageNgFactory", function () {
        return plumbingDetailsPageNgFactory;
      });
      /* harmony import */


      var _styles_plumbing_details_page_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./styles/plumbing-details.page.scss.shim.ngstyle */
      "HMct");
      /* harmony import */


      var _styles_plumbing_details_shell_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./styles/plumbing-details.shell.scss.shim.ngstyle */
      "smlS");
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


      var _shell_text_shell_text_shell_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../shell/text-shell/text-shell.component.ngfactory */
      "TAV1");
      /* harmony import */


      var _shell_text_shell_text_shell_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../shell/text-shell/text-shell.component */
      "zK/y");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _shell_image_shell_image_shell_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../shell/image-shell/image-shell.component.ngfactory */
      "6LEC");
      /* harmony import */


      var _shell_image_shell_image_shell_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../shell/image-shell/image-shell.component */
      "2gss");
      /* harmony import */


      var _shell_aspect_ratio_aspect_ratio_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../shell/aspect-ratio/aspect-ratio.component.ngfactory */
      "M4wD");
      /* harmony import */


      var _shell_aspect_ratio_aspect_ratio_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../shell/aspect-ratio/aspect-ratio.component */
      "B7gC");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _plumbing_details_page__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./plumbing-details.page */
      "Mzw6");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var styles_plumbingDetailsPage = [_styles_plumbing_details_page_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"], _styles_plumbing_details_shell_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_1__["styles"]];

      var RenderType_plumbingDetailsPage = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵcrt"]({
        encapsulation: 0,
        styles: styles_plumbingDetailsPage,
        data: {}
      });

      function View_plumbingDetailsPage_1(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](0, 0, null, null, 56, "ion-slide", [["class", "first-slide illustration-and-decoration-slide"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonSlide_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonSlide"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](1, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonSlide"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](2, 0, null, 0, 54, "ion-row", [["class", "slide-inner-row"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonRow_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonRow"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](3, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonRow"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](4, 0, null, 0, 1, "h4", [["class", "ion-padding"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, null, ["Metres to Millimetres"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](6, 0, null, 0, 50, "ion-card", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonCard_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonCard"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](7, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCard"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](8, 0, null, 0, 9, "ion-card-header", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonCardHeader_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonCardHeader"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](9, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCardHeader"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](10, 0, null, 0, 3, "ion-card-title", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonCardTitle_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonCardTitle"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](11, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCardTitle"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](12, 0, null, 0, 1, "app-text-shell", [], [[2, "text-loaded", null]], null, null, _shell_text_shell_text_shell_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_TextShellComponent_0"], _shell_text_shell_text_shell_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_TextShellComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](13, 49152, null, 0, _shell_text_shell_text_shell_component__WEBPACK_IMPORTED_MODULE_6__["TextShellComponent"], [], {
          data: [0, "data"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](14, 0, null, 0, 3, "ion-card-subtitle", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonCardSubtitle_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonCardSubtitle"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](15, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCardSubtitle"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](16, 0, null, 0, 1, "app-text-shell", [], [[2, "text-loaded", null]], null, null, _shell_text_shell_text_shell_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_TextShellComponent_0"], _shell_text_shell_text_shell_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_TextShellComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](17, 49152, null, 0, _shell_text_shell_text_shell_component__WEBPACK_IMPORTED_MODULE_6__["TextShellComponent"], [], {
          data: [0, "data"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](18, 0, null, 0, 38, "ion-card-content", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonCardContent_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonCardContent"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](19, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCardContent"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](20, 0, null, 0, 36, "ion-slide", [["class", "first-slide illustration-and-decoration-slide"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonSlide_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonSlide"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](21, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonSlide"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](22, 0, null, 0, 34, "ion-row", [["class", "slide-inner-row"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonRow_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonRow"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](23, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonRow"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](24, 0, null, 0, 32, "form", [["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "submit"], [null, "reset"]], function (_v, en, $event) {
          var ad = true;

          if ("submit" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 26).onSubmit($event) !== false;
            ad = pd_0 && ad;
          }

          if ("reset" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 26).onReset() !== false;
            ad = pd_1 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](25, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_y"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](26, 4210688, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgForm"], [[8, null], [8, null]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ControlContainer"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgForm"]]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](28, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ControlContainer"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](29, 0, null, null, 23, "ion-list", [["class", "ion-padding"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonList_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonList"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](30, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonList"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](31, 0, null, 0, 7, "ion-item", [["class", "ion-padding"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonItem_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonItem"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](32, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonItem"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](33, 0, null, 0, 2, "ion-label", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonLabel_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonLabel"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](34, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonLabel"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, 0, ["Metres :"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](36, 0, null, 0, 0, "p", [["type", "number"]], [[8, "innerHTML", 1]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](37, 0, null, 0, 1, "p", [["style", "margin-left: 5px;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, null, ["m"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](39, 0, null, 0, 13, "ion-item", [["class", "ion-padding"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonItem_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonItem"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](40, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonItem"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](41, 0, null, 0, 2, "ion-label", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonLabel_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonLabel"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](42, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonLabel"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, 0, ["Millimetres:"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](44, 0, null, 0, 6, "ion-input", [["clear-input", ""], ["name", "convertedMetres"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "ionBlur"], [null, "ionChange"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("ionBlur" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 46)._handleBlurEvent($event.target) !== false;
            ad = pd_0 && ad;
          }

          if ("ionChange" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 46)._handleInputEvent($event.target) !== false;
            ad = pd_1 && ad;
          }

          if ("ngModelChange" === en) {
            var pd_2 = (_co.convertedMetres = $event) !== false;
            ad = pd_2 && ad;
          }

          return ad;
        }, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonInput_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonInput"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](45, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonInput"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], {
          name: [0, "name"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](46, 16384, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["TextValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NG_VALUE_ACCESSOR"], function (p0_0) {
          return [p0_0];
        }, [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["TextValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](48, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], [[2, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NG_VALUE_ACCESSOR"]]], {
          name: [0, "name"],
          model: [1, "model"]
        }, {
          update: "ngModelChange"
        }), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](50, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](51, 0, null, 0, 1, "p", [["style", "margin-left: 5px;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, null, ["mm"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](53, 0, null, null, 3, "div", [["class", "ion-padding"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](54, 0, null, null, 2, "ion-button", [["color", "secondary"], ["expand", "block"], ["type", "submit"]], null, [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.calculateM5toCM() !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonButton_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](55, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], {
          color: [0, "color"],
          expand: [1, "expand"],
          type: [2, "type"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, 0, [" Submit "]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_1 = _co.details == null ? null : _co.details.name;

          _ck(_v, 13, 0, currVal_1);

          var currVal_3 = _co.details == null ? null : _co.details.style;

          _ck(_v, 17, 0, currVal_3);

          var currVal_19 = "convertedMetres";

          _ck(_v, 45, 0, currVal_19);

          var currVal_20 = "convertedMetres";
          var currVal_21 = _co.convertedMetres;

          _ck(_v, 48, 0, currVal_20, currVal_21);

          var currVal_22 = "secondary";
          var currVal_23 = "block";
          var currVal_24 = "submit";

          _ck(_v, 55, 0, currVal_22, currVal_23, currVal_24);
        }, function (_ck, _v) {
          var _co = _v.component;

          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 13).textLoaded;

          _ck(_v, 12, 0, currVal_0);

          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 17).textLoaded;

          _ck(_v, 16, 0, currVal_2);

          var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 28).ngClassUntouched;

          var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 28).ngClassTouched;

          var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 28).ngClassPristine;

          var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 28).ngClassDirty;

          var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 28).ngClassValid;

          var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 28).ngClassInvalid;

          var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 28).ngClassPending;

          _ck(_v, 24, 0, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10);

          var currVal_11 = _co.metres;

          _ck(_v, 36, 0, currVal_11);

          var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 50).ngClassUntouched;

          var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 50).ngClassTouched;

          var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 50).ngClassPristine;

          var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 50).ngClassDirty;

          var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 50).ngClassValid;

          var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 50).ngClassInvalid;

          var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 50).ngClassPending;

          _ck(_v, 44, 0, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18);
        });
      }

      function View_plumbingDetailsPage_2(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](0, 0, null, null, 56, "ion-slide", [["class", "last-slide illustration-and-decoration-slide"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonSlide_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonSlide"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](1, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonSlide"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](2, 0, null, 0, 54, "ion-row", [["class", "slide-inner-row"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonRow_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonRow"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](3, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonRow"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](4, 0, null, 0, 1, "h4", [["class", "ion-padding"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, null, ["Centimetres to Millimetres"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](6, 0, null, 0, 50, "ion-card", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonCard_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonCard"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](7, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCard"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](8, 0, null, 0, 9, "ion-card-header", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonCardHeader_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonCardHeader"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](9, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCardHeader"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](10, 0, null, 0, 3, "ion-card-title", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonCardTitle_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonCardTitle"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](11, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCardTitle"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](12, 0, null, 0, 1, "app-text-shell", [], [[2, "text-loaded", null]], null, null, _shell_text_shell_text_shell_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_TextShellComponent_0"], _shell_text_shell_text_shell_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_TextShellComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](13, 49152, null, 0, _shell_text_shell_text_shell_component__WEBPACK_IMPORTED_MODULE_6__["TextShellComponent"], [], {
          data: [0, "data"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](14, 0, null, 0, 3, "ion-card-subtitle", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonCardSubtitle_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonCardSubtitle"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](15, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCardSubtitle"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](16, 0, null, 0, 1, "app-text-shell", [], [[2, "text-loaded", null]], null, null, _shell_text_shell_text_shell_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_TextShellComponent_0"], _shell_text_shell_text_shell_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_TextShellComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](17, 49152, null, 0, _shell_text_shell_text_shell_component__WEBPACK_IMPORTED_MODULE_6__["TextShellComponent"], [], {
          data: [0, "data"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](18, 0, null, 0, 38, "ion-card-content", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonCardContent_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonCardContent"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](19, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCardContent"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](20, 0, null, 0, 36, "ion-slide", [["class", "first-slide illustration-and-decoration-slide"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonSlide_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonSlide"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](21, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonSlide"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](22, 0, null, 0, 34, "ion-row", [["class", "slide-inner-row"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonRow_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonRow"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](23, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonRow"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](24, 0, null, 0, 32, "form", [["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "submit"], [null, "reset"]], function (_v, en, $event) {
          var ad = true;

          if ("submit" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 26).onSubmit($event) !== false;
            ad = pd_0 && ad;
          }

          if ("reset" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 26).onReset() !== false;
            ad = pd_1 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](25, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_y"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](26, 4210688, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgForm"], [[8, null], [8, null]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ControlContainer"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgForm"]]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](28, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ControlContainer"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](29, 0, null, null, 23, "ion-list", [["class", "ion-padding"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonList_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonList"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](30, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonList"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](31, 0, null, 0, 7, "ion-item", [["class", "ion-padding"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonItem_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonItem"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](32, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonItem"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](33, 0, null, 0, 2, "ion-label", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonLabel_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonLabel"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](34, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonLabel"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, 0, ["Centimetres :"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](36, 0, null, 0, 0, "p", [["type", "number"]], [[8, "innerHTML", 1]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](37, 0, null, 0, 1, "p", [["style", "margin-left: 5px;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, null, ["cm"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](39, 0, null, 0, 13, "ion-item", [["class", "ion-padding"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonItem_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonItem"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](40, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonItem"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](41, 0, null, 0, 2, "ion-label", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonLabel_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonLabel"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](42, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonLabel"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, 0, ["Millimetres :"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](44, 0, null, 0, 6, "ion-input", [["clear-input", ""], ["name", "convertedCent"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "ionBlur"], [null, "ionChange"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("ionBlur" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 46)._handleBlurEvent($event.target) !== false;
            ad = pd_0 && ad;
          }

          if ("ionChange" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 46)._handleInputEvent($event.target) !== false;
            ad = pd_1 && ad;
          }

          if ("ngModelChange" === en) {
            var pd_2 = (_co.convertedCent = $event) !== false;
            ad = pd_2 && ad;
          }

          return ad;
        }, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonInput_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonInput"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](45, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonInput"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], {
          name: [0, "name"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](46, 16384, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["TextValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NG_VALUE_ACCESSOR"], function (p0_0) {
          return [p0_0];
        }, [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["TextValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](48, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], [[2, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NG_VALUE_ACCESSOR"]]], {
          name: [0, "name"],
          model: [1, "model"]
        }, {
          update: "ngModelChange"
        }), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](50, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](51, 0, null, 0, 1, "p", [["style", "margin-left: 5px;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, null, ["mm"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](53, 0, null, null, 3, "div", [["class", "ion-padding"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](54, 0, null, null, 2, "ion-button", [["color", "secondary"], ["expand", "block"], ["type", "submit"]], null, [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.calculateM5toMM() !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonButton_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](55, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], {
          color: [0, "color"],
          expand: [1, "expand"],
          type: [2, "type"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, 0, [" Submit "]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_1 = _co.details == null ? null : _co.details.name;

          _ck(_v, 13, 0, currVal_1);

          var currVal_3 = _co.details == null ? null : _co.details.style;

          _ck(_v, 17, 0, currVal_3);

          var currVal_19 = "convertedCent";

          _ck(_v, 45, 0, currVal_19);

          var currVal_20 = "convertedCent";
          var currVal_21 = _co.convertedCent;

          _ck(_v, 48, 0, currVal_20, currVal_21);

          var currVal_22 = "secondary";
          var currVal_23 = "block";
          var currVal_24 = "submit";

          _ck(_v, 55, 0, currVal_22, currVal_23, currVal_24);
        }, function (_ck, _v) {
          var _co = _v.component;

          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 13).textLoaded;

          _ck(_v, 12, 0, currVal_0);

          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 17).textLoaded;

          _ck(_v, 16, 0, currVal_2);

          var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 28).ngClassUntouched;

          var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 28).ngClassTouched;

          var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 28).ngClassPristine;

          var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 28).ngClassDirty;

          var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 28).ngClassValid;

          var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 28).ngClassInvalid;

          var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 28).ngClassPending;

          _ck(_v, 24, 0, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10);

          var currVal_11 = _co.centimetre;

          _ck(_v, 36, 0, currVal_11);

          var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 50).ngClassUntouched;

          var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 50).ngClassTouched;

          var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 50).ngClassPristine;

          var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 50).ngClassDirty;

          var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 50).ngClassValid;

          var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 50).ngClassInvalid;

          var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 50).ngClassPending;

          _ck(_v, 44, 0, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18);
        });
      }

      function View_plumbingDetailsPage_3(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](0, 0, null, null, 65, "ion-slide", [["class", "first-slide illustration-and-decoration-slide"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonSlide_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonSlide"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](1, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonSlide"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](2, 0, null, 0, 63, "ion-row", [["class", "slide-inner-row"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonRow_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonRow"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](3, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonRow"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](4, 0, null, 0, 1, "h4", [["class", "ion-padding"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, null, ["Intro"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](6, 0, null, 0, 59, "ion-card", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonCard_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonCard"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](7, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCard"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](8, 0, null, 0, 0, "img", [["src", "/assets/images/simple_rectangle_area.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](9, 0, null, 0, 9, "ion-card-header", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonCardHeader_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonCardHeader"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](10, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCardHeader"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](11, 0, null, 0, 3, "ion-card-title", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonCardTitle_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonCardTitle"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](12, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCardTitle"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](13, 0, null, 0, 1, "app-text-shell", [], [[2, "text-loaded", null]], null, null, _shell_text_shell_text_shell_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_TextShellComponent_0"], _shell_text_shell_text_shell_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_TextShellComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](14, 49152, null, 0, _shell_text_shell_text_shell_component__WEBPACK_IMPORTED_MODULE_6__["TextShellComponent"], [], {
          data: [0, "data"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](15, 0, null, 0, 3, "ion-card-subtitle", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonCardSubtitle_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonCardSubtitle"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](16, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCardSubtitle"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](17, 0, null, 0, 1, "app-text-shell", [], [[2, "text-loaded", null]], null, null, _shell_text_shell_text_shell_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_TextShellComponent_0"], _shell_text_shell_text_shell_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_TextShellComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](18, 49152, null, 0, _shell_text_shell_text_shell_component__WEBPACK_IMPORTED_MODULE_6__["TextShellComponent"], [], {
          data: [0, "data"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](19, 0, null, 0, 46, "ion-card-content", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonCardContent_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonCardContent"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](20, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCardContent"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](21, 0, null, 0, 44, "ion-slide", [["class", "first-slide illustration-and-decoration-slide"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonSlide_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonSlide"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](22, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonSlide"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](23, 0, null, 0, 42, "ion-row", [["class", "slide-inner-row"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonRow_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonRow"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](24, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonRow"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](25, 0, null, 0, 40, "form", [["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "submit"], [null, "reset"]], function (_v, en, $event) {
          var ad = true;

          if ("submit" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 27).onSubmit($event) !== false;
            ad = pd_0 && ad;
          }

          if ("reset" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 27).onReset() !== false;
            ad = pd_1 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](26, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_y"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](27, 4210688, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgForm"], [[8, null], [8, null]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ControlContainer"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgForm"]]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](29, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ControlContainer"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](30, 0, null, null, 31, "ion-list", [["class", "ion-padding"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonList_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonList"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](31, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonList"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](32, 0, null, 0, 7, "ion-item", [["class", "ion-padding"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonItem_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonItem"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](33, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonItem"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](34, 0, null, 0, 2, "ion-label", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonLabel_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonLabel"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](35, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonLabel"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, 0, ["Side 1:"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](37, 0, null, 0, 0, "p", [["type", "number"]], [[8, "innerHTML", 1]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](38, 0, null, 0, 1, "p", [["style", "margin-left: 5px;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, null, ["mm"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](40, 0, null, 0, 7, "ion-item", [["class", "ion-padding"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonItem_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonItem"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](41, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonItem"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](42, 0, null, 0, 2, "ion-label", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonLabel_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonLabel"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](43, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonLabel"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, 0, ["Side 2:"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](45, 0, null, 0, 0, "p", [["type", "number"]], [[8, "innerHTML", 1]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](46, 0, null, 0, 1, "p", [["style", "margin-left: 5px;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, null, ["mm"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](48, 0, null, 0, 13, "ion-item", [["class", "ion-padding"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonItem_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonItem"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](49, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonItem"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](50, 0, null, 0, 2, "ion-label", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonLabel_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonLabel"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](51, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonLabel"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, 0, ["Total:"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](53, 0, null, 0, 6, "ion-input", [["clear-input", ""], ["name", "totalArea"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "ionBlur"], [null, "ionChange"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("ionBlur" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 55)._handleBlurEvent($event.target) !== false;
            ad = pd_0 && ad;
          }

          if ("ionChange" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 55)._handleInputEvent($event.target) !== false;
            ad = pd_1 && ad;
          }

          if ("ngModelChange" === en) {
            var pd_2 = (_co.totalArea = $event) !== false;
            ad = pd_2 && ad;
          }

          return ad;
        }, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonInput_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonInput"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](54, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonInput"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], {
          name: [0, "name"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](55, 16384, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["TextValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NG_VALUE_ACCESSOR"], function (p0_0) {
          return [p0_0];
        }, [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["TextValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](57, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], [[2, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NG_VALUE_ACCESSOR"]]], {
          name: [0, "name"],
          model: [1, "model"]
        }, {
          update: "ngModelChange"
        }), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](59, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](60, 0, null, 0, 1, "p", [["style", "margin-left: 5px;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, null, ["m2"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](62, 0, null, null, 3, "div", [["class", "ion-padding"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](63, 0, null, null, 2, "ion-button", [["color", "secondary"], ["expand", "block"], ["type", "submit"]], null, [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.calculateSimpleArea() !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonButton_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](64, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], {
          color: [0, "color"],
          expand: [1, "expand"],
          type: [2, "type"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, 0, [" Submit "]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_1 = _co.details == null ? null : _co.details.name;

          _ck(_v, 14, 0, currVal_1);

          var currVal_3 = _co.details == null ? null : _co.details.style;

          _ck(_v, 18, 0, currVal_3);

          var currVal_20 = "totalArea";

          _ck(_v, 54, 0, currVal_20);

          var currVal_21 = "totalArea";
          var currVal_22 = _co.totalArea;

          _ck(_v, 57, 0, currVal_21, currVal_22);

          var currVal_23 = "secondary";
          var currVal_24 = "block";
          var currVal_25 = "submit";

          _ck(_v, 64, 0, currVal_23, currVal_24, currVal_25);
        }, function (_ck, _v) {
          var _co = _v.component;

          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 14).textLoaded;

          _ck(_v, 13, 0, currVal_0);

          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 18).textLoaded;

          _ck(_v, 17, 0, currVal_2);

          var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 29).ngClassUntouched;

          var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 29).ngClassTouched;

          var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 29).ngClassPristine;

          var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 29).ngClassDirty;

          var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 29).ngClassValid;

          var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 29).ngClassInvalid;

          var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 29).ngClassPending;

          _ck(_v, 25, 0, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10);

          var currVal_11 = _co.side1;

          _ck(_v, 37, 0, currVal_11);

          var currVal_12 = _co.side2;

          _ck(_v, 45, 0, currVal_12);

          var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 59).ngClassUntouched;

          var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 59).ngClassTouched;

          var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 59).ngClassPristine;

          var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 59).ngClassDirty;

          var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 59).ngClassValid;

          var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 59).ngClassInvalid;

          var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 59).ngClassPending;

          _ck(_v, 53, 0, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19);
        });
      }

      function View_plumbingDetailsPage_4(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](0, 0, null, null, 113, "ion-slide", [["class", "last-slide illustration-and-decoration-slide"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonSlide_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonSlide"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](1, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonSlide"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](2, 0, null, 0, 111, "ion-row", [["class", "slide-inner-row"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonRow_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonRow"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](3, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonRow"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](4, 0, null, 0, 1, "h4", [["class", "ion-padding"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, null, ["Stretch"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](6, 0, null, 0, 107, "ion-card", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonCard_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonCard"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](7, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCard"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](8, 0, null, 0, 0, "img", [["src", "/assets/images/complex_rectangle.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](9, 0, null, 0, 9, "ion-card-header", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonCardHeader_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonCardHeader"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](10, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCardHeader"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](11, 0, null, 0, 3, "ion-card-title", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonCardTitle_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonCardTitle"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](12, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCardTitle"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](13, 0, null, 0, 1, "app-text-shell", [], [[2, "text-loaded", null]], null, null, _shell_text_shell_text_shell_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_TextShellComponent_0"], _shell_text_shell_text_shell_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_TextShellComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](14, 49152, null, 0, _shell_text_shell_text_shell_component__WEBPACK_IMPORTED_MODULE_6__["TextShellComponent"], [], {
          data: [0, "data"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](15, 0, null, 0, 3, "ion-card-subtitle", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonCardSubtitle_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonCardSubtitle"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](16, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCardSubtitle"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](17, 0, null, 0, 1, "app-text-shell", [], [[2, "text-loaded", null]], null, null, _shell_text_shell_text_shell_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_TextShellComponent_0"], _shell_text_shell_text_shell_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_TextShellComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](18, 49152, null, 0, _shell_text_shell_text_shell_component__WEBPACK_IMPORTED_MODULE_6__["TextShellComponent"], [], {
          data: [0, "data"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](19, 0, null, 0, 94, "ion-card-content", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonCardContent_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonCardContent"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](20, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCardContent"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](21, 0, null, 0, 92, "ion-slide", [["class", "first-slide illustration-and-decoration-slide"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonSlide_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonSlide"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](22, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonSlide"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](23, 0, null, 0, 90, "ion-row", [["class", "slide-inner-row"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonRow_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonRow"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](24, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonRow"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](25, 0, null, 0, 88, "form", [["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "submit"], [null, "reset"]], function (_v, en, $event) {
          var ad = true;

          if ("submit" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 27).onSubmit($event) !== false;
            ad = pd_0 && ad;
          }

          if ("reset" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 27).onReset() !== false;
            ad = pd_1 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](26, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_y"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](27, 4210688, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgForm"], [[8, null], [8, null]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ControlContainer"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgForm"]]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](29, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ControlContainer"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](30, 0, null, null, 79, "ion-list", [["class", "ion-padding"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonList_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonList"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](31, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonList"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](32, 0, null, 0, 7, "ion-item", [["class", "ion-padding"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonItem_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonItem"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](33, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonItem"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](34, 0, null, 0, 2, "ion-label", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonLabel_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonLabel"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](35, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonLabel"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, 0, ["Side 1:"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](37, 0, null, 0, 0, "p", [["type", "number"]], [[8, "innerHTML", 1]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](38, 0, null, 0, 1, "p", [["style", "margin-left: 5px;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, null, ["mm"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](40, 0, null, 0, 7, "ion-item", [["class", "ion-padding"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonItem_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonItem"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](41, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonItem"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](42, 0, null, 0, 2, "ion-label", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonLabel_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonLabel"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](43, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonLabel"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, 0, ["Side 2:"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](45, 0, null, 0, 0, "p", [["type", "number"]], [[8, "innerHTML", 1]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](46, 0, null, 0, 1, "p", [["style", "margin-left: 5px;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, null, ["mm"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](48, 0, null, 0, 15, "ion-item", [["class", "ion-padding"], ["type", "submit"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonItem_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonItem"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](49, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonItem"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], {
          type: [0, "type"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](50, 0, null, 0, 2, "ion-label", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonLabel_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonLabel"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](51, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonLabel"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, 0, ["Side 3:"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](53, 0, null, 0, 8, "ion-input", [["maxlength", "6"], ["name", "side3a"]], [[1, "maxlength", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "ionBlur"], [null, "ionChange"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("ionBlur" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 55)._handleBlurEvent($event.target) !== false;
            ad = pd_0 && ad;
          }

          if ("ionChange" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 55)._handleInputEvent($event.target) !== false;
            ad = pd_1 && ad;
          }

          if ("ngModelChange" === en) {
            var pd_2 = (_co.side3a = $event) !== false;
            ad = pd_2 && ad;
          }

          return ad;
        }, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonInput_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonInput"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](54, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonInput"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], {
          maxlength: [0, "maxlength"],
          name: [1, "name"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](55, 16384, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["TextValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](56, 540672, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["MaxLengthValidator"], [], {
          maxlength: [0, "maxlength"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NG_VALIDATORS"], function (p0_0) {
          return [p0_0];
        }, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["MaxLengthValidator"]]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NG_VALUE_ACCESSOR"], function (p0_0) {
          return [p0_0];
        }, [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["TextValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](59, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], [[2, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ControlContainer"]], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NG_VALIDATORS"]], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NG_VALUE_ACCESSOR"]]], {
          name: [0, "name"],
          model: [1, "model"]
        }, {
          update: "ngModelChange"
        }), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](61, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](62, 0, null, 0, 1, "p", [["style", "margin-left: 5px;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, null, ["mm"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](64, 0, null, 0, 15, "ion-item", [["class", "ion-padding"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonItem_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonItem"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](65, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonItem"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](66, 0, null, 0, 2, "ion-label", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonLabel_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonLabel"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](67, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonLabel"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, 0, ["Side 4:"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](69, 0, null, 0, 8, "ion-input", [["maxlength", "6"], ["name", "side4a"]], [[1, "maxlength", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "ionBlur"], [null, "ionChange"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("ionBlur" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 71)._handleBlurEvent($event.target) !== false;
            ad = pd_0 && ad;
          }

          if ("ionChange" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 71)._handleInputEvent($event.target) !== false;
            ad = pd_1 && ad;
          }

          if ("ngModelChange" === en) {
            var pd_2 = (_co.side4a = $event) !== false;
            ad = pd_2 && ad;
          }

          return ad;
        }, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonInput_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonInput"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](70, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonInput"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], {
          maxlength: [0, "maxlength"],
          name: [1, "name"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](71, 16384, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["TextValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](72, 540672, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["MaxLengthValidator"], [], {
          maxlength: [0, "maxlength"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NG_VALIDATORS"], function (p0_0) {
          return [p0_0];
        }, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["MaxLengthValidator"]]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NG_VALUE_ACCESSOR"], function (p0_0) {
          return [p0_0];
        }, [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["TextValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](75, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], [[2, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ControlContainer"]], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NG_VALIDATORS"]], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NG_VALUE_ACCESSOR"]]], {
          name: [0, "name"],
          model: [1, "model"]
        }, {
          update: "ngModelChange"
        }), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](77, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](78, 0, null, 0, 1, "p", [["style", "margin-left: 5px;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, null, ["mm"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](80, 0, null, 0, 7, "ion-item", [["class", "ion-padding"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonItem_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonItem"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](81, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonItem"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](82, 0, null, 0, 2, "ion-label", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonLabel_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonLabel"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](83, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonLabel"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, 0, ["Side 5:"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](85, 0, null, 0, 0, "p", [["type", "number"]], [[8, "innerHTML", 1]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](86, 0, null, 0, 1, "p", [["style", "margin-left: 5px;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, null, ["mm"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](88, 0, null, 0, 7, "ion-item", [["class", "ion-padding"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonItem_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonItem"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](89, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonItem"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](90, 0, null, 0, 2, "ion-label", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonLabel_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonLabel"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](91, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonLabel"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, 0, ["Side 6:"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](93, 0, null, 0, 0, "p", [["type", "number"]], [[8, "innerHTML", 1]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](94, 0, null, 0, 1, "p", [["style", "margin-left: 5px;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, null, ["mm"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](96, 0, null, 0, 13, "ion-item", [["class", "ion-padding"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonItem_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonItem"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](97, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonItem"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](98, 0, null, 0, 2, "ion-label", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonLabel_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonLabel"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](99, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonLabel"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, 0, ["Total:"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](101, 0, null, 0, 6, "ion-input", [["clear-input", ""], ["name", "totalArea"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "ionBlur"], [null, "ionChange"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("ionBlur" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 103)._handleBlurEvent($event.target) !== false;
            ad = pd_0 && ad;
          }

          if ("ionChange" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 103)._handleInputEvent($event.target) !== false;
            ad = pd_1 && ad;
          }

          if ("ngModelChange" === en) {
            var pd_2 = (_co.totalArea = $event) !== false;
            ad = pd_2 && ad;
          }

          return ad;
        }, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonInput_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonInput"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](102, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonInput"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], {
          name: [0, "name"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](103, 16384, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["TextValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NG_VALUE_ACCESSOR"], function (p0_0) {
          return [p0_0];
        }, [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["TextValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](105, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], [[2, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NG_VALUE_ACCESSOR"]]], {
          name: [0, "name"],
          model: [1, "model"]
        }, {
          update: "ngModelChange"
        }), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](107, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](108, 0, null, 0, 1, "p", [["style", "margin-left: 5px;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, null, ["m2"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](110, 0, null, null, 3, "div", [["class", "ion-padding"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](111, 0, null, null, 2, "ion-button", [["color", "secondary"], ["expand", "block"], ["type", "submit"]], null, [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.calculateComplexArea() !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonButton_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](112, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], {
          color: [0, "color"],
          expand: [1, "expand"],
          type: [2, "type"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, 0, [" Submit "]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_1 = _co.details == null ? null : _co.details.name;

          _ck(_v, 14, 0, currVal_1);

          var currVal_3 = _co.details == null ? null : _co.details.style;

          _ck(_v, 18, 0, currVal_3);

          var currVal_13 = "submit";

          _ck(_v, 49, 0, currVal_13);

          var currVal_22 = "6";
          var currVal_23 = "side3a";

          _ck(_v, 54, 0, currVal_22, currVal_23);

          var currVal_24 = "6";

          _ck(_v, 56, 0, currVal_24);

          var currVal_25 = "side3a";
          var currVal_26 = _co.side3a;

          _ck(_v, 59, 0, currVal_25, currVal_26);

          var currVal_35 = "6";
          var currVal_36 = "side4a";

          _ck(_v, 70, 0, currVal_35, currVal_36);

          var currVal_37 = "6";

          _ck(_v, 72, 0, currVal_37);

          var currVal_38 = "side4a";
          var currVal_39 = _co.side4a;

          _ck(_v, 75, 0, currVal_38, currVal_39);

          var currVal_49 = "totalArea";

          _ck(_v, 102, 0, currVal_49);

          var currVal_50 = "totalArea";
          var currVal_51 = _co.totalArea;

          _ck(_v, 105, 0, currVal_50, currVal_51);

          var currVal_52 = "secondary";
          var currVal_53 = "block";
          var currVal_54 = "submit";

          _ck(_v, 112, 0, currVal_52, currVal_53, currVal_54);
        }, function (_ck, _v) {
          var _co = _v.component;

          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 14).textLoaded;

          _ck(_v, 13, 0, currVal_0);

          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 18).textLoaded;

          _ck(_v, 17, 0, currVal_2);

          var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 29).ngClassUntouched;

          var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 29).ngClassTouched;

          var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 29).ngClassPristine;

          var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 29).ngClassDirty;

          var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 29).ngClassValid;

          var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 29).ngClassInvalid;

          var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 29).ngClassPending;

          _ck(_v, 25, 0, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10);

          var currVal_11 = _co.side1a;

          _ck(_v, 37, 0, currVal_11);

          var currVal_12 = _co.side2a;

          _ck(_v, 45, 0, currVal_12);

          var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 56).maxlength ? _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 56).maxlength : null;

          var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 61).ngClassUntouched;

          var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 61).ngClassTouched;

          var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 61).ngClassPristine;

          var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 61).ngClassDirty;

          var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 61).ngClassValid;

          var currVal_20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 61).ngClassInvalid;

          var currVal_21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 61).ngClassPending;

          _ck(_v, 53, 0, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19, currVal_20, currVal_21);

          var currVal_27 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 72).maxlength ? _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 72).maxlength : null;

          var currVal_28 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 77).ngClassUntouched;

          var currVal_29 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 77).ngClassTouched;

          var currVal_30 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 77).ngClassPristine;

          var currVal_31 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 77).ngClassDirty;

          var currVal_32 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 77).ngClassValid;

          var currVal_33 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 77).ngClassInvalid;

          var currVal_34 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 77).ngClassPending;

          _ck(_v, 69, 0, currVal_27, currVal_28, currVal_29, currVal_30, currVal_31, currVal_32, currVal_33, currVal_34);

          var currVal_40 = _co.side5a;

          _ck(_v, 85, 0, currVal_40);

          var currVal_41 = _co.side6a;

          _ck(_v, 93, 0, currVal_41);

          var currVal_42 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 107).ngClassUntouched;

          var currVal_43 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 107).ngClassTouched;

          var currVal_44 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 107).ngClassPristine;

          var currVal_45 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 107).ngClassDirty;

          var currVal_46 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 107).ngClassValid;

          var currVal_47 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 107).ngClassInvalid;

          var currVal_48 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 107).ngClassPending;

          _ck(_v, 101, 0, currVal_42, currVal_43, currVal_44, currVal_45, currVal_46, currVal_47, currVal_48);
        });
      }

      function View_plumbingDetailsPage_5(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](0, 0, null, null, 71, "ion-slide", [["class", "first-slide illustration-and-decoration-slide"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonSlide_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonSlide"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](1, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonSlide"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](2, 0, null, 0, 69, "ion-row", [["class", "slide-inner-row"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonRow_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonRow"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](3, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonRow"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](4, 0, null, 0, 67, "ion-card", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonCard_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonCard"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](5, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCard"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](6, 0, null, 0, 0, "img", [["src", "/assets/images/wall_area.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](7, 0, null, 0, 9, "ion-card-header", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonCardHeader_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonCardHeader"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](8, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCardHeader"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](9, 0, null, 0, 3, "ion-card-title", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonCardTitle_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonCardTitle"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](10, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCardTitle"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](11, 0, null, 0, 1, "app-text-shell", [], [[2, "text-loaded", null]], null, null, _shell_text_shell_text_shell_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_TextShellComponent_0"], _shell_text_shell_text_shell_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_TextShellComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](12, 49152, null, 0, _shell_text_shell_text_shell_component__WEBPACK_IMPORTED_MODULE_6__["TextShellComponent"], [], {
          data: [0, "data"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](13, 0, null, 0, 3, "ion-card-subtitle", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonCardSubtitle_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonCardSubtitle"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](14, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCardSubtitle"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](15, 0, null, 0, 1, "app-text-shell", [], [[2, "text-loaded", null]], null, null, _shell_text_shell_text_shell_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_TextShellComponent_0"], _shell_text_shell_text_shell_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_TextShellComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](16, 49152, null, 0, _shell_text_shell_text_shell_component__WEBPACK_IMPORTED_MODULE_6__["TextShellComponent"], [], {
          data: [0, "data"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](17, 0, null, 0, 54, "ion-card-content", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonCardContent_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonCardContent"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](18, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCardContent"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](19, 0, null, 0, 52, "ion-slide", [["class", "first-slide illustration-and-decoration-slide"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonSlide_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonSlide"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](20, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonSlide"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](21, 0, null, 0, 50, "ion-row", [["class", "slide-inner-row"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonRow_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonRow"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](22, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonRow"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](23, 0, null, 0, 48, "form", [["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "submit"], [null, "reset"]], function (_v, en, $event) {
          var ad = true;

          if ("submit" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 25).onSubmit($event) !== false;
            ad = pd_0 && ad;
          }

          if ("reset" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 25).onReset() !== false;
            ad = pd_1 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](24, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_y"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](25, 4210688, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgForm"], [[8, null], [8, null]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ControlContainer"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgForm"]]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](27, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ControlContainer"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](28, 0, null, null, 39, "ion-list", [["class", "ion-padding"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonList_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonList"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](29, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonList"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](30, 0, null, 0, 7, "ion-item", [["class", "ion-padding"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonItem_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonItem"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](31, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonItem"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](32, 0, null, 0, 2, "ion-label", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonLabel_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonLabel"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](33, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonLabel"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, 0, ["Depth :"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](35, 0, null, 0, 0, "p", [["type", "number"]], [[8, "innerHTML", 1]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](36, 0, null, 0, 1, "p", [["style", "margin-left: 5px;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, null, ["m"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](38, 0, null, 0, 7, "ion-item", [["class", "ion-padding"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonItem_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonItem"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](39, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonItem"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](40, 0, null, 0, 2, "ion-label", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonLabel_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonLabel"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](41, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonLabel"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, 0, ["Width :"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](43, 0, null, 0, 0, "p", [["type", "number"]], [[8, "innerHTML", 1]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](44, 0, null, 0, 1, "p", [["style", "margin-left: 5px;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, null, ["m"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](46, 0, null, 0, 7, "ion-item", [["class", "ion-padding"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonItem_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonItem"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](47, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonItem"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](48, 0, null, 0, 2, "ion-label", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonLabel_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonLabel"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](49, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonLabel"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, 0, ["Height :"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](51, 0, null, 0, 0, "p", [["type", "number"]], [[8, "innerHTML", 1]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](52, 0, null, 0, 1, "p", [["style", "margin-left: 5px;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, null, ["m"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](54, 0, null, 0, 13, "ion-item", [["class", "ion-padding"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonItem_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonItem"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](55, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonItem"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](56, 0, null, 0, 2, "ion-label", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonLabel_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonLabel"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](57, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonLabel"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, 0, ["Total Area :"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](59, 0, null, 0, 6, "ion-input", [["clear-input", ""], ["name", "totalWallArea"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "ionBlur"], [null, "ionChange"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("ionBlur" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 61)._handleBlurEvent($event.target) !== false;
            ad = pd_0 && ad;
          }

          if ("ionChange" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 61)._handleInputEvent($event.target) !== false;
            ad = pd_1 && ad;
          }

          if ("ngModelChange" === en) {
            var pd_2 = (_co.totalWallArea = $event) !== false;
            ad = pd_2 && ad;
          }

          return ad;
        }, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonInput_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonInput"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](60, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonInput"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], {
          name: [0, "name"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](61, 16384, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["TextValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NG_VALUE_ACCESSOR"], function (p0_0) {
          return [p0_0];
        }, [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["TextValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](63, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], [[2, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NG_VALUE_ACCESSOR"]]], {
          name: [0, "name"],
          model: [1, "model"]
        }, {
          update: "ngModelChange"
        }), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](65, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](66, 0, null, 0, 1, "p", [["style", "margin-left: 5px;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, null, ["m3"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](68, 0, null, null, 3, "div", [["class", "ion-padding"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](69, 0, null, null, 2, "ion-button", [["color", "secondary"], ["expand", "block"], ["type", "submit"]], null, [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.calculateRoomVolume() !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonButton_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](70, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], {
          color: [0, "color"],
          expand: [1, "expand"],
          type: [2, "type"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, 0, [" Submit "]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_1 = _co.details == null ? null : _co.details.name;

          _ck(_v, 12, 0, currVal_1);

          var currVal_3 = _co.details == null ? null : _co.details.style;

          _ck(_v, 16, 0, currVal_3);

          var currVal_21 = "totalWallArea";

          _ck(_v, 60, 0, currVal_21);

          var currVal_22 = "totalWallArea";
          var currVal_23 = _co.totalWallArea;

          _ck(_v, 63, 0, currVal_22, currVal_23);

          var currVal_24 = "secondary";
          var currVal_25 = "block";
          var currVal_26 = "submit";

          _ck(_v, 70, 0, currVal_24, currVal_25, currVal_26);
        }, function (_ck, _v) {
          var _co = _v.component;

          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 12).textLoaded;

          _ck(_v, 11, 0, currVal_0);

          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 16).textLoaded;

          _ck(_v, 15, 0, currVal_2);

          var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 27).ngClassUntouched;

          var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 27).ngClassTouched;

          var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 27).ngClassPristine;

          var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 27).ngClassDirty;

          var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 27).ngClassValid;

          var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 27).ngClassInvalid;

          var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 27).ngClassPending;

          _ck(_v, 23, 0, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10);

          var currVal_11 = _co.wallDepth;

          _ck(_v, 35, 0, currVal_11);

          var currVal_12 = _co.wallWidth;

          _ck(_v, 43, 0, currVal_12);

          var currVal_13 = _co.wallHeight;

          _ck(_v, 51, 0, currVal_13);

          var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 65).ngClassUntouched;

          var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 65).ngClassTouched;

          var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 65).ngClassPristine;

          var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 65).ngClassDirty;

          var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 65).ngClassValid;

          var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 65).ngClassInvalid;

          var currVal_20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 65).ngClassPending;

          _ck(_v, 59, 0, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19, currVal_20);
        });
      }

      function View_plumbingDetailsPage_6(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](0, 0, null, null, 54, "ion-slide", [["class", "first-slide illustration-and-decoration-slide"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonSlide_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonSlide"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](1, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonSlide"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](2, 0, null, 0, 52, "ion-row", [["class", "slide-inner-row"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonRow_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonRow"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](3, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonRow"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](4, 0, null, 0, 50, "ion-card", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonCard_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonCard"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](5, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCard"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](6, 0, null, 0, 9, "ion-card-header", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonCardHeader_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonCardHeader"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](7, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCardHeader"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](8, 0, null, 0, 3, "ion-card-title", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonCardTitle_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonCardTitle"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](9, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCardTitle"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](10, 0, null, 0, 1, "app-text-shell", [], [[2, "text-loaded", null]], null, null, _shell_text_shell_text_shell_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_TextShellComponent_0"], _shell_text_shell_text_shell_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_TextShellComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](11, 49152, null, 0, _shell_text_shell_text_shell_component__WEBPACK_IMPORTED_MODULE_6__["TextShellComponent"], [], {
          data: [0, "data"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](12, 0, null, 0, 3, "ion-card-subtitle", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonCardSubtitle_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonCardSubtitle"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](13, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCardSubtitle"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](14, 0, null, 0, 1, "app-text-shell", [], [[2, "text-loaded", null]], null, null, _shell_text_shell_text_shell_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_TextShellComponent_0"], _shell_text_shell_text_shell_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_TextShellComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](15, 49152, null, 0, _shell_text_shell_text_shell_component__WEBPACK_IMPORTED_MODULE_6__["TextShellComponent"], [], {
          data: [0, "data"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](16, 0, null, 0, 38, "ion-card-content", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonCardContent_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonCardContent"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](17, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCardContent"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](18, 0, null, 0, 36, "ion-slide", [["class", "first-slide illustration-and-decoration-slide"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonSlide_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonSlide"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](19, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonSlide"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](20, 0, null, 0, 34, "ion-row", [["class", "slide-inner-row"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonRow_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonRow"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](21, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonRow"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](22, 0, null, 0, 32, "form", [["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "submit"], [null, "reset"]], function (_v, en, $event) {
          var ad = true;

          if ("submit" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 24).onSubmit($event) !== false;
            ad = pd_0 && ad;
          }

          if ("reset" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 24).onReset() !== false;
            ad = pd_1 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](23, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_y"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](24, 4210688, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgForm"], [[8, null], [8, null]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ControlContainer"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgForm"]]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](26, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ControlContainer"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](27, 0, null, null, 23, "ion-list", [["class", "ion-padding"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonList_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonList"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](28, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonList"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](29, 0, null, 0, 7, "ion-item", [["class", "ion-padding"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonItem_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonItem"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](30, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonItem"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](31, 0, null, 0, 2, "ion-label", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonLabel_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonLabel"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](32, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonLabel"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, 0, ["Litres :"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](34, 0, null, 0, 0, "p", [["type", "number"]], [[8, "innerHTML", 1]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](35, 0, null, 0, 1, "p", [["style", "margin-left: 5px;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, null, ["per minute"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](37, 0, null, 0, 13, "ion-item", [["class", "ion-padding"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonItem_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonItem"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](38, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonItem"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](39, 0, null, 0, 2, "ion-label", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonLabel_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonLabel"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](40, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonLabel"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, 0, ["Litres :"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](42, 0, null, 0, 6, "ion-input", [["clear-input", ""], ["name", "litresPsec"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "ionBlur"], [null, "ionChange"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("ionBlur" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 44)._handleBlurEvent($event.target) !== false;
            ad = pd_0 && ad;
          }

          if ("ionChange" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 44)._handleInputEvent($event.target) !== false;
            ad = pd_1 && ad;
          }

          if ("ngModelChange" === en) {
            var pd_2 = (_co.litresPsec = $event) !== false;
            ad = pd_2 && ad;
          }

          return ad;
        }, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonInput_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonInput"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](43, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonInput"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], {
          name: [0, "name"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](44, 16384, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["TextValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NG_VALUE_ACCESSOR"], function (p0_0) {
          return [p0_0];
        }, [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["TextValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](46, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], [[2, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NG_VALUE_ACCESSOR"]]], {
          name: [0, "name"],
          model: [1, "model"]
        }, {
          update: "ngModelChange"
        }), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](48, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](49, 0, null, 0, 1, "p", [["style", "margin-left: 5px;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, null, ["per second"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](51, 0, null, null, 3, "div", [["class", "ion-padding"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](52, 0, null, null, 2, "ion-button", [["color", "secondary"], ["expand", "block"], ["type", "submit"]], null, [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.calculateLitres() !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonButton_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](53, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], {
          color: [0, "color"],
          expand: [1, "expand"],
          type: [2, "type"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, 0, [" Submit "]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_1 = _co.details == null ? null : _co.details.name;

          _ck(_v, 11, 0, currVal_1);

          var currVal_3 = _co.details == null ? null : _co.details.style;

          _ck(_v, 15, 0, currVal_3);

          var currVal_19 = "litresPsec";

          _ck(_v, 43, 0, currVal_19);

          var currVal_20 = "litresPsec";
          var currVal_21 = _co.litresPsec;

          _ck(_v, 46, 0, currVal_20, currVal_21);

          var currVal_22 = "secondary";
          var currVal_23 = "block";
          var currVal_24 = "submit";

          _ck(_v, 53, 0, currVal_22, currVal_23, currVal_24);
        }, function (_ck, _v) {
          var _co = _v.component;

          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 11).textLoaded;

          _ck(_v, 10, 0, currVal_0);

          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 15).textLoaded;

          _ck(_v, 14, 0, currVal_2);

          var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 26).ngClassUntouched;

          var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 26).ngClassTouched;

          var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 26).ngClassPristine;

          var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 26).ngClassDirty;

          var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 26).ngClassValid;

          var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 26).ngClassInvalid;

          var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 26).ngClassPending;

          _ck(_v, 22, 0, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10);

          var currVal_11 = _co.litresPMin;

          _ck(_v, 34, 0, currVal_11);

          var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 48).ngClassUntouched;

          var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 48).ngClassTouched;

          var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 48).ngClassPristine;

          var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 48).ngClassDirty;

          var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 48).ngClassValid;

          var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 48).ngClassInvalid;

          var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 48).ngClassPending;

          _ck(_v, 42, 0, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18);
        });
      }

      function View_plumbingDetailsPage_7(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](0, 0, null, null, 60, "ion-slide", [["class", "first-slide illustration-and-decoration-slide"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonSlide_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonSlide"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](1, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonSlide"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](2, 0, null, 0, 58, "ion-row", [["class", "slide-inner-row"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonRow_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonRow"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](3, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonRow"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](4, 0, null, 0, 56, "ion-card", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonCard_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonCard"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](5, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCard"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](6, 0, null, 0, 9, "ion-card-header", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonCardHeader_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonCardHeader"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](7, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCardHeader"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](8, 0, null, 0, 3, "ion-card-title", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonCardTitle_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonCardTitle"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](9, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCardTitle"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](10, 0, null, 0, 1, "app-text-shell", [], [[2, "text-loaded", null]], null, null, _shell_text_shell_text_shell_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_TextShellComponent_0"], _shell_text_shell_text_shell_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_TextShellComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](11, 49152, null, 0, _shell_text_shell_text_shell_component__WEBPACK_IMPORTED_MODULE_6__["TextShellComponent"], [], {
          data: [0, "data"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](12, 0, null, 0, 3, "ion-card-subtitle", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonCardSubtitle_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonCardSubtitle"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](13, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCardSubtitle"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](14, 0, null, 0, 1, "app-text-shell", [], [[2, "text-loaded", null]], null, null, _shell_text_shell_text_shell_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_TextShellComponent_0"], _shell_text_shell_text_shell_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_TextShellComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](15, 49152, null, 0, _shell_text_shell_text_shell_component__WEBPACK_IMPORTED_MODULE_6__["TextShellComponent"], [], {
          data: [0, "data"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](16, 0, null, 0, 44, "ion-card-content", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonCardContent_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonCardContent"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](17, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCardContent"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](18, 0, null, 0, 42, "ion-slide", [["class", "first-slide illustration-and-decoration-slide"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonSlide_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonSlide"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](19, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonSlide"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](20, 0, null, 0, 40, "ion-row", [["class", "slide-inner-row"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonRow_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonRow"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](21, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonRow"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](22, 0, null, 0, 38, "form", [["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "submit"], [null, "reset"]], function (_v, en, $event) {
          var ad = true;

          if ("submit" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 24).onSubmit($event) !== false;
            ad = pd_0 && ad;
          }

          if ("reset" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 24).onReset() !== false;
            ad = pd_1 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](23, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_y"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](24, 4210688, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgForm"], [[8, null], [8, null]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ControlContainer"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgForm"]]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](26, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ControlContainer"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](27, 0, null, null, 29, "ion-list", [["class", "ion-padding"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonList_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonList"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](28, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonList"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](29, 0, null, 0, 7, "ion-item", [["class", "ion-padding"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonItem_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonItem"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](30, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonItem"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](31, 0, null, 0, 2, "ion-label", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonLabel_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonLabel"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](32, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonLabel"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, 0, ["Joist thickness :"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](34, 0, null, 0, 0, "p", [["type", "number"]], [[8, "innerHTML", 1]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](35, 0, null, 0, 1, "p", [["style", "margin-left: 5px;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, null, ["mm"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](37, 0, null, 0, 5, "ion-item", [["class", "ion-padding"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonItem_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonItem"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](38, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonItem"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](39, 0, null, 0, 2, "ion-label", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonLabel_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonLabel"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](40, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonLabel"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, 0, ["Max notch depth :"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](42, 0, null, 0, 0, "p", [["type", "number"]], [[8, "innerHTML", 1]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](43, 0, null, 0, 13, "ion-item", [["class", "ion-padding"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonItem_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonItem"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](44, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonItem"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](45, 0, null, 0, 2, "ion-label", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonLabel_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonLabel"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](46, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonLabel"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, 0, ["Max pipe size :"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](48, 0, null, 0, 6, "ion-input", [["clear-input", ""], ["name", "maxPipe"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "ionBlur"], [null, "ionChange"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("ionBlur" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 50)._handleBlurEvent($event.target) !== false;
            ad = pd_0 && ad;
          }

          if ("ionChange" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 50)._handleInputEvent($event.target) !== false;
            ad = pd_1 && ad;
          }

          if ("ngModelChange" === en) {
            var pd_2 = (_co.maxPipe = $event) !== false;
            ad = pd_2 && ad;
          }

          return ad;
        }, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonInput_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonInput"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](49, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonInput"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], {
          name: [0, "name"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](50, 16384, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["TextValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NG_VALUE_ACCESSOR"], function (p0_0) {
          return [p0_0];
        }, [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["TextValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](52, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], [[2, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NG_VALUE_ACCESSOR"]]], {
          name: [0, "name"],
          model: [1, "model"]
        }, {
          update: "ngModelChange"
        }), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](54, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](55, 0, null, 0, 1, "p", [["style", "margin-left: 5px;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, null, ["mm"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](57, 0, null, null, 3, "div", [["class", "ion-padding"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](58, 0, null, null, 2, "ion-button", [["color", "secondary"], ["expand", "block"], ["type", "submit"]], null, [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.calculateJoist() !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonButton_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](59, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], {
          color: [0, "color"],
          expand: [1, "expand"],
          type: [2, "type"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, 0, [" Submit "]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_1 = _co.details == null ? null : _co.details.name;

          _ck(_v, 11, 0, currVal_1);

          var currVal_3 = _co.details == null ? null : _co.details.style;

          _ck(_v, 15, 0, currVal_3);

          var currVal_20 = "maxPipe";

          _ck(_v, 49, 0, currVal_20);

          var currVal_21 = "maxPipe";
          var currVal_22 = _co.maxPipe;

          _ck(_v, 52, 0, currVal_21, currVal_22);

          var currVal_23 = "secondary";
          var currVal_24 = "block";
          var currVal_25 = "submit";

          _ck(_v, 59, 0, currVal_23, currVal_24, currVal_25);
        }, function (_ck, _v) {
          var _co = _v.component;

          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 11).textLoaded;

          _ck(_v, 10, 0, currVal_0);

          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 15).textLoaded;

          _ck(_v, 14, 0, currVal_2);

          var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 26).ngClassUntouched;

          var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 26).ngClassTouched;

          var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 26).ngClassPristine;

          var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 26).ngClassDirty;

          var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 26).ngClassValid;

          var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 26).ngClassInvalid;

          var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 26).ngClassPending;

          _ck(_v, 22, 0, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10);

          var currVal_11 = _co.joistThickness;

          _ck(_v, 34, 0, currVal_11);

          var currVal_12 = _co.maxDepth;

          _ck(_v, 42, 0, currVal_12);

          var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 54).ngClassUntouched;

          var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 54).ngClassTouched;

          var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 54).ngClassPristine;

          var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 54).ngClassDirty;

          var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 54).ngClassValid;

          var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 54).ngClassInvalid;

          var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 54).ngClassPending;

          _ck(_v, 48, 0, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19);
        });
      }

      function View_plumbingDetailsPage_8(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](0, 0, null, null, 112, "ion-slide", [["class", "first-slide illustration-and-decoration-slide"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonSlide_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonSlide"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](1, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonSlide"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](2, 0, null, 0, 110, "ion-row", [["class", "slide-inner-row"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonRow_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonRow"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](3, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonRow"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](4, 0, null, 0, 108, "ion-card", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonCard_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonCard"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](5, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCard"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](6, 0, null, 0, 9, "ion-card-header", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonCardHeader_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonCardHeader"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](7, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCardHeader"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](8, 0, null, 0, 3, "ion-card-title", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonCardTitle_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonCardTitle"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](9, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCardTitle"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](10, 0, null, 0, 1, "app-text-shell", [], [[2, "text-loaded", null]], null, null, _shell_text_shell_text_shell_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_TextShellComponent_0"], _shell_text_shell_text_shell_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_TextShellComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](11, 49152, null, 0, _shell_text_shell_text_shell_component__WEBPACK_IMPORTED_MODULE_6__["TextShellComponent"], [], {
          data: [0, "data"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](12, 0, null, 0, 3, "ion-card-subtitle", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonCardSubtitle_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonCardSubtitle"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](13, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCardSubtitle"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](14, 0, null, 0, 1, "app-text-shell", [], [[2, "text-loaded", null]], null, null, _shell_text_shell_text_shell_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_TextShellComponent_0"], _shell_text_shell_text_shell_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_TextShellComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](15, 49152, null, 0, _shell_text_shell_text_shell_component__WEBPACK_IMPORTED_MODULE_6__["TextShellComponent"], [], {
          data: [0, "data"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](16, 0, null, 0, 96, "ion-card-content", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonCardContent_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonCardContent"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](17, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCardContent"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](18, 0, null, 0, 94, "ion-slide", [["class", "first-slide illustration-and-decoration-slide"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonSlide_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonSlide"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](19, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonSlide"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](20, 0, null, 0, 92, "ion-row", [["class", "slide-inner-row"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonRow_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonRow"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](21, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonRow"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](22, 0, null, 0, 90, "form", [["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "submit"], [null, "reset"]], function (_v, en, $event) {
          var ad = true;

          if ("submit" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 24).onSubmit($event) !== false;
            ad = pd_0 && ad;
          }

          if ("reset" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 24).onReset() !== false;
            ad = pd_1 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](23, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_y"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](24, 4210688, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgForm"], [[8, null], [8, null]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ControlContainer"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgForm"]]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](26, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ControlContainer"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](27, 0, null, null, 81, "ion-list", [["class", "ion-padding"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonList_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonList"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](28, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonList"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](29, 0, null, 0, 7, "ion-item", [["class", "ion-padding"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonItem_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonItem"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](30, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonItem"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](31, 0, null, 0, 2, "ion-label", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonLabel_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonLabel"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](32, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonLabel"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, 0, ["Diameter :"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](34, 0, null, 0, 0, "p", [["type", "number"]], [[8, "innerHTML", 1]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](35, 0, null, 0, 1, "p", [["style", "margin-left: 5px;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, null, ["mm"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](37, 0, null, 0, 7, "ion-item", [["class", "ion-padding"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonItem_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonItem"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](38, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonItem"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](39, 0, null, 0, 2, "ion-label", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonLabel_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonLabel"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](40, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonLabel"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, 0, ["Radius :"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](42, 0, null, 0, 0, "p", [["type", "number"]], [[8, "innerHTML", 1]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](43, 0, null, 0, 1, "p", [["style", "margin-left: 5px;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, null, ["mm"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](45, 0, null, 0, 13, "ion-item", [["class", "ion-padding"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonItem_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonItem"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](46, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonItem"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](47, 0, null, 0, 2, "ion-label", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonLabel_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonLabel"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](48, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonLabel"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, 0, ["Area of base :"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](50, 0, null, 0, 6, "ion-input", [["clear-input", ""], ["name", "baseArea"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "ionBlur"], [null, "ionChange"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("ionBlur" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 52)._handleBlurEvent($event.target) !== false;
            ad = pd_0 && ad;
          }

          if ("ionChange" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 52)._handleInputEvent($event.target) !== false;
            ad = pd_1 && ad;
          }

          if ("ngModelChange" === en) {
            var pd_2 = (_co.baseArea = $event) !== false;
            ad = pd_2 && ad;
          }

          return ad;
        }, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonInput_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonInput"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](51, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonInput"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], {
          name: [0, "name"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](52, 16384, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["TextValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NG_VALUE_ACCESSOR"], function (p0_0) {
          return [p0_0];
        }, [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["TextValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](54, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], [[2, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NG_VALUE_ACCESSOR"]]], {
          name: [0, "name"],
          model: [1, "model"]
        }, {
          update: "ngModelChange"
        }), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](56, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](57, 0, null, 0, 1, "p", [["style", "margin-left: 5px;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, null, ["mm2"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](59, 0, null, 0, 7, "ion-item", [["class", "ion-padding"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonItem_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonItem"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](60, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonItem"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](61, 0, null, 0, 2, "ion-label", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonLabel_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonLabel"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](62, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonLabel"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, 0, ["Height :"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](64, 0, null, 0, 0, "p", [["type", "number"]], [[8, "innerHTML", 1]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](65, 0, null, 0, 1, "p", [["style", "margin-left: 5px;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, null, ["mm"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](67, 0, null, 0, 13, "ion-item", [["class", "ion-padding"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonItem_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonItem"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](68, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonItem"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](69, 0, null, 0, 2, "ion-label", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonLabel_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonLabel"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](70, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonLabel"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, 0, ["Volume :"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](72, 0, null, 0, 6, "ion-input", [["clear-input", ""], ["name", "cylVolume"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "ionBlur"], [null, "ionChange"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("ionBlur" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 74)._handleBlurEvent($event.target) !== false;
            ad = pd_0 && ad;
          }

          if ("ionChange" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 74)._handleInputEvent($event.target) !== false;
            ad = pd_1 && ad;
          }

          if ("ngModelChange" === en) {
            var pd_2 = (_co.cylVolume = $event) !== false;
            ad = pd_2 && ad;
          }

          return ad;
        }, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonInput_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonInput"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](73, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonInput"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], {
          name: [0, "name"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](74, 16384, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["TextValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NG_VALUE_ACCESSOR"], function (p0_0) {
          return [p0_0];
        }, [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["TextValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](76, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], [[2, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NG_VALUE_ACCESSOR"]]], {
          name: [0, "name"],
          model: [1, "model"]
        }, {
          update: "ngModelChange"
        }), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](78, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](79, 0, null, 0, 1, "p", [["style", "margin-left: 5px;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, null, ["mm3"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](81, 0, null, 0, 13, "ion-item", [["class", "ion-padding"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonItem_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonItem"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](82, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonItem"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](83, 0, null, 0, 2, "ion-label", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonLabel_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonLabel"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](84, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonLabel"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, 0, ["Volume in litres :"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](86, 0, null, 0, 6, "ion-input", [["clear-input", ""], ["name", "volLitre"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "ionBlur"], [null, "ionChange"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("ionBlur" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 88)._handleBlurEvent($event.target) !== false;
            ad = pd_0 && ad;
          }

          if ("ionChange" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 88)._handleInputEvent($event.target) !== false;
            ad = pd_1 && ad;
          }

          if ("ngModelChange" === en) {
            var pd_2 = (_co.volLitre = $event) !== false;
            ad = pd_2 && ad;
          }

          return ad;
        }, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonInput_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonInput"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](87, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonInput"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], {
          name: [0, "name"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](88, 16384, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["TextValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NG_VALUE_ACCESSOR"], function (p0_0) {
          return [p0_0];
        }, [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["TextValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](90, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], [[2, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NG_VALUE_ACCESSOR"]]], {
          name: [0, "name"],
          model: [1, "model"]
        }, {
          update: "ngModelChange"
        }), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](92, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](93, 0, null, 0, 1, "p", [["style", "margin-left: 5px;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, null, ["litres"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](95, 0, null, 0, 13, "ion-item", [["class", "ion-padding"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonItem_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonItem"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](96, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonItem"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](97, 0, null, 0, 2, "ion-label", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonLabel_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonLabel"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](98, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonLabel"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, 0, ["Volume in m3 :"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](100, 0, null, 0, 6, "ion-input", [["clear-input", ""], ["name", "volM3"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "ionBlur"], [null, "ionChange"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("ionBlur" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 102)._handleBlurEvent($event.target) !== false;
            ad = pd_0 && ad;
          }

          if ("ionChange" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 102)._handleInputEvent($event.target) !== false;
            ad = pd_1 && ad;
          }

          if ("ngModelChange" === en) {
            var pd_2 = (_co.volM3 = $event) !== false;
            ad = pd_2 && ad;
          }

          return ad;
        }, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonInput_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonInput"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](101, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonInput"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], {
          name: [0, "name"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](102, 16384, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["TextValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NG_VALUE_ACCESSOR"], function (p0_0) {
          return [p0_0];
        }, [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["TextValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](104, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], [[2, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NG_VALUE_ACCESSOR"]]], {
          name: [0, "name"],
          model: [1, "model"]
        }, {
          update: "ngModelChange"
        }), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](106, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](107, 0, null, 0, 1, "p", [["style", "margin-left: 5px;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, null, ["m3"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](109, 0, null, null, 3, "div", [["class", "ion-padding"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](110, 0, null, null, 2, "ion-button", [["color", "secondary"], ["expand", "block"], ["type", "submit"]], null, [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.calculateCylinder() !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonButton_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](111, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], {
          color: [0, "color"],
          expand: [1, "expand"],
          type: [2, "type"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, 0, [" Submit "]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_1 = _co.details == null ? null : _co.details.name;

          _ck(_v, 11, 0, currVal_1);

          var currVal_3 = _co.details == null ? null : _co.details.style;

          _ck(_v, 15, 0, currVal_3);

          var currVal_20 = "baseArea";

          _ck(_v, 51, 0, currVal_20);

          var currVal_21 = "baseArea";
          var currVal_22 = _co.baseArea;

          _ck(_v, 54, 0, currVal_21, currVal_22);

          var currVal_31 = "cylVolume";

          _ck(_v, 73, 0, currVal_31);

          var currVal_32 = "cylVolume";
          var currVal_33 = _co.cylVolume;

          _ck(_v, 76, 0, currVal_32, currVal_33);

          var currVal_41 = "volLitre";

          _ck(_v, 87, 0, currVal_41);

          var currVal_42 = "volLitre";
          var currVal_43 = _co.volLitre;

          _ck(_v, 90, 0, currVal_42, currVal_43);

          var currVal_51 = "volM3";

          _ck(_v, 101, 0, currVal_51);

          var currVal_52 = "volM3";
          var currVal_53 = _co.volM3;

          _ck(_v, 104, 0, currVal_52, currVal_53);

          var currVal_54 = "secondary";
          var currVal_55 = "block";
          var currVal_56 = "submit";

          _ck(_v, 111, 0, currVal_54, currVal_55, currVal_56);
        }, function (_ck, _v) {
          var _co = _v.component;

          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 11).textLoaded;

          _ck(_v, 10, 0, currVal_0);

          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 15).textLoaded;

          _ck(_v, 14, 0, currVal_2);

          var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 26).ngClassUntouched;

          var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 26).ngClassTouched;

          var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 26).ngClassPristine;

          var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 26).ngClassDirty;

          var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 26).ngClassValid;

          var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 26).ngClassInvalid;

          var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 26).ngClassPending;

          _ck(_v, 22, 0, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10);

          var currVal_11 = _co.cylDiameter;

          _ck(_v, 34, 0, currVal_11);

          var currVal_12 = _co.cylRadius;

          _ck(_v, 42, 0, currVal_12);

          var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 56).ngClassUntouched;

          var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 56).ngClassTouched;

          var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 56).ngClassPristine;

          var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 56).ngClassDirty;

          var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 56).ngClassValid;

          var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 56).ngClassInvalid;

          var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 56).ngClassPending;

          _ck(_v, 50, 0, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19);

          var currVal_23 = _co.cylHeight;

          _ck(_v, 64, 0, currVal_23);

          var currVal_24 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 78).ngClassUntouched;

          var currVal_25 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 78).ngClassTouched;

          var currVal_26 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 78).ngClassPristine;

          var currVal_27 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 78).ngClassDirty;

          var currVal_28 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 78).ngClassValid;

          var currVal_29 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 78).ngClassInvalid;

          var currVal_30 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 78).ngClassPending;

          _ck(_v, 72, 0, currVal_24, currVal_25, currVal_26, currVal_27, currVal_28, currVal_29, currVal_30);

          var currVal_34 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 92).ngClassUntouched;

          var currVal_35 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 92).ngClassTouched;

          var currVal_36 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 92).ngClassPristine;

          var currVal_37 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 92).ngClassDirty;

          var currVal_38 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 92).ngClassValid;

          var currVal_39 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 92).ngClassInvalid;

          var currVal_40 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 92).ngClassPending;

          _ck(_v, 86, 0, currVal_34, currVal_35, currVal_36, currVal_37, currVal_38, currVal_39, currVal_40);

          var currVal_44 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 106).ngClassUntouched;

          var currVal_45 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 106).ngClassTouched;

          var currVal_46 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 106).ngClassPristine;

          var currVal_47 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 106).ngClassDirty;

          var currVal_48 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 106).ngClassValid;

          var currVal_49 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 106).ngClassInvalid;

          var currVal_50 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 106).ngClassPending;

          _ck(_v, 100, 0, currVal_44, currVal_45, currVal_46, currVal_47, currVal_48, currVal_49, currVal_50);
        });
      }

      function View_plumbingDetailsPage_9(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](0, 0, null, null, 53, "ion-slide", [["class", "first-slide illustration-and-decoration-slide"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonSlide_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonSlide"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](1, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonSlide"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](2, 0, null, 0, 51, "ion-row", [["class", "slide-inner-row"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonRow_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonRow"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](3, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonRow"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](4, 0, null, 0, 49, "ion-card", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonCard_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonCard"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](5, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCard"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](6, 0, null, 0, 9, "ion-card-header", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonCardHeader_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonCardHeader"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](7, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCardHeader"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](8, 0, null, 0, 3, "ion-card-title", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonCardTitle_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonCardTitle"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](9, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCardTitle"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](10, 0, null, 0, 1, "app-text-shell", [], [[2, "text-loaded", null]], null, null, _shell_text_shell_text_shell_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_TextShellComponent_0"], _shell_text_shell_text_shell_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_TextShellComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](11, 49152, null, 0, _shell_text_shell_text_shell_component__WEBPACK_IMPORTED_MODULE_6__["TextShellComponent"], [], {
          data: [0, "data"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](12, 0, null, 0, 3, "ion-card-subtitle", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonCardSubtitle_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonCardSubtitle"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](13, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCardSubtitle"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](14, 0, null, 0, 1, "app-text-shell", [], [[2, "text-loaded", null]], null, null, _shell_text_shell_text_shell_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_TextShellComponent_0"], _shell_text_shell_text_shell_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_TextShellComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](15, 49152, null, 0, _shell_text_shell_text_shell_component__WEBPACK_IMPORTED_MODULE_6__["TextShellComponent"], [], {
          data: [0, "data"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](16, 0, null, 0, 37, "ion-card-content", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonCardContent_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonCardContent"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](17, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCardContent"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](18, 0, null, 0, 35, "ion-slide", [["class", "first-slide illustration-and-decoration-slide"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonSlide_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonSlide"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](19, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonSlide"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](20, 0, null, 0, 33, "ion-row", [["class", "slide-inner-row"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonRow_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonRow"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](21, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonRow"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](22, 0, null, 0, 31, "form", [["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "submit"], [null, "reset"]], function (_v, en, $event) {
          var ad = true;

          if ("submit" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 24).onSubmit($event) !== false;
            ad = pd_0 && ad;
          }

          if ("reset" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 24).onReset() !== false;
            ad = pd_1 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](23, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_y"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](24, 4210688, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgForm"], [[8, null], [8, null]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ControlContainer"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgForm"]]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](26, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ControlContainer"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](27, 0, null, null, 22, "ion-list", [["class", "ion-padding"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonList_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonList"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](28, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonList"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](29, 0, null, 0, 6, "ion-item", [["class", "ion-padding"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonItem_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonItem"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](30, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonItem"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](31, 0, null, 0, 2, "ion-label", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonLabel_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonLabel"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](32, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonLabel"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, 0, ["System Pressure (m head) :"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](34, 0, null, 0, 0, "p", [["type", "number"]], [[8, "innerHTML", 1]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](35, 0, null, 0, 0, "p", [["style", "margin-left: 5px;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](36, 0, null, 0, 13, "ion-item", [["class", "ion-padding"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonItem_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonItem"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](37, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonItem"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](38, 0, null, 0, 2, "ion-label", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonLabel_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonLabel"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](39, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonLabel"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, 0, ["x Gravity (9.81)N :"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](41, 0, null, 0, 6, "ion-input", [["clear-input", ""], ["name", "sysNewton"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "ionBlur"], [null, "ionChange"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("ionBlur" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 43)._handleBlurEvent($event.target) !== false;
            ad = pd_0 && ad;
          }

          if ("ionChange" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 43)._handleInputEvent($event.target) !== false;
            ad = pd_1 && ad;
          }

          if ("ngModelChange" === en) {
            var pd_2 = (_co.sysNewton = $event) !== false;
            ad = pd_2 && ad;
          }

          return ad;
        }, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonInput_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonInput"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](42, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonInput"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], {
          name: [0, "name"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](43, 16384, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["TextValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NG_VALUE_ACCESSOR"], function (p0_0) {
          return [p0_0];
        }, [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["TextValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](45, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], [[2, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NG_VALUE_ACCESSOR"]]], {
          name: [0, "name"],
          model: [1, "model"]
        }, {
          update: "ngModelChange"
        }), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](47, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](48, 0, null, 0, 1, "p", [["style", "margin-left: 5px;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, null, ["Newtons"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](50, 0, null, null, 3, "div", [["class", "ion-padding"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](51, 0, null, null, 2, "ion-button", [["color", "secondary"], ["expand", "block"], ["type", "submit"]], null, [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.calculatePressure() !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonButton_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](52, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], {
          color: [0, "color"],
          expand: [1, "expand"],
          type: [2, "type"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, 0, [" Submit "]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_1 = _co.details == null ? null : _co.details.name;

          _ck(_v, 11, 0, currVal_1);

          var currVal_3 = _co.details == null ? null : _co.details.style;

          _ck(_v, 15, 0, currVal_3);

          var currVal_19 = "sysNewton";

          _ck(_v, 42, 0, currVal_19);

          var currVal_20 = "sysNewton";
          var currVal_21 = _co.sysNewton;

          _ck(_v, 45, 0, currVal_20, currVal_21);

          var currVal_22 = "secondary";
          var currVal_23 = "block";
          var currVal_24 = "submit";

          _ck(_v, 52, 0, currVal_22, currVal_23, currVal_24);
        }, function (_ck, _v) {
          var _co = _v.component;

          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 11).textLoaded;

          _ck(_v, 10, 0, currVal_0);

          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 15).textLoaded;

          _ck(_v, 14, 0, currVal_2);

          var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 26).ngClassUntouched;

          var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 26).ngClassTouched;

          var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 26).ngClassPristine;

          var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 26).ngClassDirty;

          var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 26).ngClassValid;

          var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 26).ngClassInvalid;

          var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 26).ngClassPending;

          _ck(_v, 22, 0, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10);

          var currVal_11 = _co.sysPressure;

          _ck(_v, 34, 0, currVal_11);

          var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 47).ngClassUntouched;

          var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 47).ngClassTouched;

          var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 47).ngClassPristine;

          var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 47).ngClassDirty;

          var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 47).ngClassValid;

          var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 47).ngClassInvalid;

          var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 47).ngClassPending;

          _ck(_v, 41, 0, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18);
        });
      }

      function View_plumbingDetailsPage_10(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](0, 0, null, null, 77, "ion-slide", [["class", "first-slide illustration-and-decoration-slide"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonSlide_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonSlide"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](1, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonSlide"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](2, 0, null, 0, 75, "ion-row", [["class", "slide-inner-row"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonRow_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonRow"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](3, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonRow"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](4, 0, null, 0, 73, "ion-card", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonCard_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonCard"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](5, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCard"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](6, 0, null, 0, 9, "ion-card-header", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonCardHeader_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonCardHeader"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](7, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCardHeader"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](8, 0, null, 0, 3, "ion-card-title", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonCardTitle_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonCardTitle"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](9, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCardTitle"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](10, 0, null, 0, 1, "app-text-shell", [], [[2, "text-loaded", null]], null, null, _shell_text_shell_text_shell_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_TextShellComponent_0"], _shell_text_shell_text_shell_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_TextShellComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](11, 49152, null, 0, _shell_text_shell_text_shell_component__WEBPACK_IMPORTED_MODULE_6__["TextShellComponent"], [], {
          data: [0, "data"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](12, 0, null, 0, 3, "ion-card-subtitle", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonCardSubtitle_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonCardSubtitle"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](13, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCardSubtitle"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](14, 0, null, 0, 1, "app-text-shell", [], [[2, "text-loaded", null]], null, null, _shell_text_shell_text_shell_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_TextShellComponent_0"], _shell_text_shell_text_shell_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_TextShellComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](15, 49152, null, 0, _shell_text_shell_text_shell_component__WEBPACK_IMPORTED_MODULE_6__["TextShellComponent"], [], {
          data: [0, "data"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](16, 0, null, 0, 61, "ion-card-content", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonCardContent_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonCardContent"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](17, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCardContent"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](18, 0, null, 0, 59, "ion-slide", [["class", "first-slide illustration-and-decoration-slide"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonSlide_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonSlide"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](19, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonSlide"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](20, 0, null, 0, 57, "ion-row", [["class", "slide-inner-row"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonRow_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonRow"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](21, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonRow"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](22, 0, null, 0, 55, "form", [["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "submit"], [null, "reset"]], function (_v, en, $event) {
          var ad = true;

          if ("submit" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 24).onSubmit($event) !== false;
            ad = pd_0 && ad;
          }

          if ("reset" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 24).onReset() !== false;
            ad = pd_1 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](23, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_y"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](24, 4210688, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgForm"], [[8, null], [8, null]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ControlContainer"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgForm"]]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](26, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ControlContainer"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](27, 0, null, null, 46, "ion-list", [["class", "ion-padding"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonList_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonList"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](28, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonList"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](29, 0, null, 0, 7, "ion-item", [["class", "ion-padding"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonItem_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonItem"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](30, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonItem"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](31, 0, null, 0, 2, "ion-label", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonLabel_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonLabel"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](32, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonLabel"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, 0, ["Length of guttering :"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](34, 0, null, 0, 0, "p", [["type", "number"]], [[8, "innerHTML", 1]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](35, 0, null, 0, 1, "p", [["style", "margin-left: 5px;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, null, ["m"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](37, 0, null, 0, 7, "ion-item", [["class", "ion-padding"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonItem_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonItem"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](38, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonItem"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](39, 0, null, 0, 2, "ion-label", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonLabel_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonLabel"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](40, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonLabel"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, 0, ["Start temp :"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](42, 0, null, 0, 0, "p", [["type", "number"]], [[8, "innerHTML", 1]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](43, 0, null, 0, 1, "p", [["style", "margin-left: 5px;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, null, ["c"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](45, 0, null, 0, 7, "ion-item", [["class", "ion-padding"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonItem_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonItem"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](46, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonItem"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](47, 0, null, 0, 2, "ion-label", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonLabel_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonLabel"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](48, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonLabel"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, 0, ["Finish temp :"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](50, 0, null, 0, 0, "p", [["type", "number"]], [[8, "innerHTML", 1]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](51, 0, null, 0, 1, "p", [["style", "margin-left: 5px;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, null, ["c"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](53, 0, null, 0, 6, "ion-item", [["class", "ion-padding"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonItem_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonItem"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](54, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonItem"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](55, 0, null, 0, 2, "ion-label", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonLabel_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonLabel"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](56, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonLabel"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, 0, ["CLE value :"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](58, 0, null, 0, 0, "p", [["type", "number"]], [[8, "innerHTML", 1]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](59, 0, null, 0, 0, "p", [["style", "margin-left: 5px;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](60, 0, null, 0, 13, "ion-item", [["class", "ion-padding"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonItem_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonItem"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](61, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonItem"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](62, 0, null, 0, 2, "ion-label", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonLabel_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonLabel"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](63, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonLabel"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, 0, ["Expansion :"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](65, 0, null, 0, 6, "ion-input", [["clear-input", ""], ["name", "expansion"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "ionBlur"], [null, "ionChange"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("ionBlur" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 67)._handleBlurEvent($event.target) !== false;
            ad = pd_0 && ad;
          }

          if ("ionChange" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 67)._handleInputEvent($event.target) !== false;
            ad = pd_1 && ad;
          }

          if ("ngModelChange" === en) {
            var pd_2 = (_co.expansion = $event) !== false;
            ad = pd_2 && ad;
          }

          return ad;
        }, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonInput_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonInput"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](66, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonInput"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], {
          name: [0, "name"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](67, 16384, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["TextValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NG_VALUE_ACCESSOR"], function (p0_0) {
          return [p0_0];
        }, [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["TextValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](69, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], [[2, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NG_VALUE_ACCESSOR"]]], {
          name: [0, "name"],
          model: [1, "model"]
        }, {
          update: "ngModelChange"
        }), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](71, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](72, 0, null, 0, 1, "p", [["style", "margin-left: 5px;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, null, ["mm"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](74, 0, null, null, 3, "div", [["class", "ion-padding"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](75, 0, null, null, 2, "ion-button", [["color", "secondary"], ["expand", "block"], ["type", "submit"]], null, [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.calculateGutter() !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonButton_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](76, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], {
          color: [0, "color"],
          expand: [1, "expand"],
          type: [2, "type"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, 0, [" Submit "]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_1 = _co.details == null ? null : _co.details.name;

          _ck(_v, 11, 0, currVal_1);

          var currVal_3 = _co.details == null ? null : _co.details.style;

          _ck(_v, 15, 0, currVal_3);

          var currVal_22 = "expansion";

          _ck(_v, 66, 0, currVal_22);

          var currVal_23 = "expansion";
          var currVal_24 = _co.expansion;

          _ck(_v, 69, 0, currVal_23, currVal_24);

          var currVal_25 = "secondary";
          var currVal_26 = "block";
          var currVal_27 = "submit";

          _ck(_v, 76, 0, currVal_25, currVal_26, currVal_27);
        }, function (_ck, _v) {
          var _co = _v.component;

          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 11).textLoaded;

          _ck(_v, 10, 0, currVal_0);

          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 15).textLoaded;

          _ck(_v, 14, 0, currVal_2);

          var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 26).ngClassUntouched;

          var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 26).ngClassTouched;

          var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 26).ngClassPristine;

          var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 26).ngClassDirty;

          var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 26).ngClassValid;

          var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 26).ngClassInvalid;

          var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 26).ngClassPending;

          _ck(_v, 22, 0, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10);

          var currVal_11 = _co.gutterLength;

          _ck(_v, 34, 0, currVal_11);

          var currVal_12 = _co.startTemp;

          _ck(_v, 42, 0, currVal_12);

          var currVal_13 = _co.finishTemp;

          _ck(_v, 50, 0, currVal_13);

          var currVal_14 = _co.cleValue;

          _ck(_v, 58, 0, currVal_14);

          var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 71).ngClassUntouched;

          var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 71).ngClassTouched;

          var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 71).ngClassPristine;

          var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 71).ngClassDirty;

          var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 71).ngClassValid;

          var currVal_20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 71).ngClassInvalid;

          var currVal_21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 71).ngClassPending;

          _ck(_v, 65, 0, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19, currVal_20, currVal_21);
        });
      }

      function View_plumbingDetailsPage_11(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](0, 0, null, null, 77, "ion-slide", [["class", "first-slide illustration-and-decoration-slide"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonSlide_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonSlide"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](1, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonSlide"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](2, 0, null, 0, 75, "ion-row", [["class", "slide-inner-row"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonRow_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonRow"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](3, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonRow"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](4, 0, null, 0, 73, "ion-card", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonCard_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonCard"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](5, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCard"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](6, 0, null, 0, 9, "ion-card-header", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonCardHeader_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonCardHeader"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](7, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCardHeader"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](8, 0, null, 0, 3, "ion-card-title", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonCardTitle_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonCardTitle"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](9, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCardTitle"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](10, 0, null, 0, 1, "app-text-shell", [], [[2, "text-loaded", null]], null, null, _shell_text_shell_text_shell_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_TextShellComponent_0"], _shell_text_shell_text_shell_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_TextShellComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](11, 49152, null, 0, _shell_text_shell_text_shell_component__WEBPACK_IMPORTED_MODULE_6__["TextShellComponent"], [], {
          data: [0, "data"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](12, 0, null, 0, 3, "ion-card-subtitle", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonCardSubtitle_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonCardSubtitle"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](13, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCardSubtitle"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](14, 0, null, 0, 1, "app-text-shell", [], [[2, "text-loaded", null]], null, null, _shell_text_shell_text_shell_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_TextShellComponent_0"], _shell_text_shell_text_shell_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_TextShellComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](15, 49152, null, 0, _shell_text_shell_text_shell_component__WEBPACK_IMPORTED_MODULE_6__["TextShellComponent"], [], {
          data: [0, "data"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](16, 0, null, 0, 61, "ion-card-content", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonCardContent_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonCardContent"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](17, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCardContent"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](18, 0, null, 0, 59, "ion-slide", [["class", "first-slide illustration-and-decoration-slide"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonSlide_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonSlide"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](19, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonSlide"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](20, 0, null, 0, 57, "ion-row", [["class", "slide-inner-row"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonRow_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonRow"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](21, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonRow"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](22, 0, null, 0, 55, "form", [["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "submit"], [null, "reset"]], function (_v, en, $event) {
          var ad = true;

          if ("submit" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 24).onSubmit($event) !== false;
            ad = pd_0 && ad;
          }

          if ("reset" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 24).onReset() !== false;
            ad = pd_1 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](23, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_y"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](24, 4210688, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgForm"], [[8, null], [8, null]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ControlContainer"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgForm"]]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](26, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ControlContainer"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](27, 0, null, null, 46, "ion-list", [["class", "ion-padding"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonList_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonList"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](28, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonList"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](29, 0, null, 0, 7, "ion-item", [["class", "ion-padding"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonItem_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonItem"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](30, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonItem"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](31, 0, null, 0, 2, "ion-label", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonLabel_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonLabel"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](32, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonLabel"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, 0, ["Volume of water :"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](34, 0, null, 0, 0, "p", [["type", "number"]], [[8, "innerHTML", 1]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](35, 0, null, 0, 1, "p", [["style", "margin-left: 5px;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, null, ["litres"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](37, 0, null, 0, 7, "ion-item", [["class", "ion-padding"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonItem_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonItem"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](38, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonItem"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](39, 0, null, 0, 2, "ion-label", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonLabel_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonLabel"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](40, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonLabel"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, 0, ["Start temp :"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](42, 0, null, 0, 0, "p", [["type", "number"]], [[8, "innerHTML", 1]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](43, 0, null, 0, 1, "p", [["style", "margin-left: 5px;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, null, ["c"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](45, 0, null, 0, 7, "ion-item", [["class", "ion-padding"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonItem_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonItem"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](46, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonItem"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](47, 0, null, 0, 2, "ion-label", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonLabel_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonLabel"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](48, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonLabel"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, 0, ["Finish (desired) temp :"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](50, 0, null, 0, 0, "p", [["type", "number"]], [[8, "innerHTML", 1]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](51, 0, null, 0, 1, "p", [["style", "margin-left: 5px;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, null, ["c"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](53, 0, null, 0, 6, "ion-item", [["class", "ion-padding"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonItem_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonItem"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](54, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonItem"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](55, 0, null, 0, 2, "ion-label", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonLabel_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonLabel"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](56, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonLabel"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, 0, ["Specific heat capacity :"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](58, 0, null, 0, 0, "p", [["type", "number"]], [[8, "innerHTML", 1]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](59, 0, null, 0, 0, "p", [["style", "margin-left: 5px;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](60, 0, null, 0, 13, "ion-item", [["class", "ion-padding"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonItem_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonItem"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](61, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonItem"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](62, 0, null, 0, 2, "ion-label", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonLabel_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonLabel"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](63, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonLabel"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, 0, ["Energy required :"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](65, 0, null, 0, 6, "ion-input", [["clear-input", ""], ["name", "energyCap"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "ionBlur"], [null, "ionChange"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("ionBlur" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 67)._handleBlurEvent($event.target) !== false;
            ad = pd_0 && ad;
          }

          if ("ionChange" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 67)._handleInputEvent($event.target) !== false;
            ad = pd_1 && ad;
          }

          if ("ngModelChange" === en) {
            var pd_2 = (_co.energyCap = $event) !== false;
            ad = pd_2 && ad;
          }

          return ad;
        }, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonInput_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonInput"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](66, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonInput"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], {
          name: [0, "name"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](67, 16384, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["TextValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NG_VALUE_ACCESSOR"], function (p0_0) {
          return [p0_0];
        }, [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["TextValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](69, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], [[2, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NG_VALUE_ACCESSOR"]]], {
          name: [0, "name"],
          model: [1, "model"]
        }, {
          update: "ngModelChange"
        }), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](71, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](72, 0, null, 0, 1, "p", [["style", "margin-left: 5px;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, null, ["kW/h"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](74, 0, null, null, 3, "div", [["class", "ion-padding"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](75, 0, null, null, 2, "ion-button", [["color", "secondary"], ["expand", "block"], ["type", "submit"]], null, [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.calculateCap() !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonButton_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](76, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], {
          color: [0, "color"],
          expand: [1, "expand"],
          type: [2, "type"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, 0, [" Submit "]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_1 = _co.details == null ? null : _co.details.name;

          _ck(_v, 11, 0, currVal_1);

          var currVal_3 = _co.details == null ? null : _co.details.style;

          _ck(_v, 15, 0, currVal_3);

          var currVal_22 = "energyCap";

          _ck(_v, 66, 0, currVal_22);

          var currVal_23 = "energyCap";
          var currVal_24 = _co.energyCap;

          _ck(_v, 69, 0, currVal_23, currVal_24);

          var currVal_25 = "secondary";
          var currVal_26 = "block";
          var currVal_27 = "submit";

          _ck(_v, 76, 0, currVal_25, currVal_26, currVal_27);
        }, function (_ck, _v) {
          var _co = _v.component;

          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 11).textLoaded;

          _ck(_v, 10, 0, currVal_0);

          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 15).textLoaded;

          _ck(_v, 14, 0, currVal_2);

          var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 26).ngClassUntouched;

          var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 26).ngClassTouched;

          var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 26).ngClassPristine;

          var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 26).ngClassDirty;

          var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 26).ngClassValid;

          var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 26).ngClassInvalid;

          var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 26).ngClassPending;

          _ck(_v, 22, 0, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10);

          var currVal_11 = _co.waterVol;

          _ck(_v, 34, 0, currVal_11);

          var currVal_12 = _co.startTempCap;

          _ck(_v, 42, 0, currVal_12);

          var currVal_13 = _co.finishTempCap;

          _ck(_v, 50, 0, currVal_13);

          var currVal_14 = _co.heatCap;

          _ck(_v, 58, 0, currVal_14);

          var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 71).ngClassUntouched;

          var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 71).ngClassTouched;

          var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 71).ngClassPristine;

          var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 71).ngClassDirty;

          var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 71).ngClassValid;

          var currVal_20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 71).ngClassInvalid;

          var currVal_21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 71).ngClassPending;

          _ck(_v, 65, 0, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19, currVal_20, currVal_21);
        });
      }

      function View_plumbingDetailsPage_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵqud"](402653184, 1, {
          slides: 0
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](1, 0, null, null, 12, "ion-header", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonHeader_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonHeader"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](2, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonHeader"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](3, 0, null, 0, 10, "ion-toolbar", [["color", "primary"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonToolbar_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonToolbar"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](4, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonToolbar"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], {
          color: [0, "color"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](5, 0, null, 0, 4, "ion-buttons", [["slot", "start"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonButtons_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonButtons"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](6, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonButtons"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](7, 0, null, 0, 2, "ion-back-button", [["defaultHref", "app/categories/plumbing"]], null, [[null, "click"]], function (_v, en, $event) {
          var ad = true;

          if ("click" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 9).onClick($event) !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonBackButton_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonBackButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](8, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonBackButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], {
          defaultHref: [0, "defaultHref"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](9, 16384, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonBackButtonDelegate"], [[2, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonRouterOutlet"]], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Config"]], {
          defaultHref: [0, "defaultHref"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](10, 0, null, 0, 3, "ion-title", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonTitle_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonTitle"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](11, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonTitle"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](12, 0, null, 0, 1, "app-text-shell", [], [[2, "text-loaded", null]], null, null, _shell_text_shell_text_shell_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_TextShellComponent_0"], _shell_text_shell_text_shell_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_TextShellComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](13, 49152, null, 0, _shell_text_shell_text_shell_component__WEBPACK_IMPORTED_MODULE_6__["TextShellComponent"], [], {
          data: [0, "data"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](14, 0, null, null, 40, "ion-content", [["class", "plumbing-details-content"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonContent_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonContent"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](15, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonContent"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](16, 0, null, 0, 14, "ion-row", [["class", "image-row"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonRow_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonRow"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](17, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonRow"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](18, 0, null, 0, 12, "ion-col", [["size", "12"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonCol_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonCol"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](19, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCol"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], {
          size: [0, "size"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](20, 0, null, 0, 10, "app-image-shell", [["animation", "spinner"], ["class", "add-overlay showcase-image"]], [[2, "img-loaded", null], [4, "backgroundImage", null], [1, "display", 0]], null, null, _shell_image_shell_image_shell_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__["View_ImageShellComponent_0"], _shell_image_shell_image_shell_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__["RenderType_ImageShellComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](21, 49152, null, 0, _shell_image_shell_image_shell_component__WEBPACK_IMPORTED_MODULE_9__["ImageShellComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["PLATFORM_ID"]], {
          display: [0, "display"],
          src: [1, "src"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](22, 0, null, 0, 8, "app-aspect-ratio", [], [[4, "padding", null]], null, null, _shell_aspect_ratio_aspect_ratio_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__["View_AspectRatioComponent_0"], _shell_aspect_ratio_aspect_ratio_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__["RenderType_AspectRatioComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](23, 49152, null, 0, _shell_aspect_ratio_aspect_ratio_component__WEBPACK_IMPORTED_MODULE_11__["AspectRatioComponent"], [], {
          ratio: [0, "ratio"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵpod"](24, {
          w: 0,
          h: 1
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](25, 0, null, 0, 5, "div", [["class", "icon-wrapper"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](26, 0, null, null, 4, "app-aspect-ratio", [], [[4, "padding", null]], null, null, _shell_aspect_ratio_aspect_ratio_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__["View_AspectRatioComponent_0"], _shell_aspect_ratio_aspect_ratio_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__["RenderType_AspectRatioComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](27, 49152, null, 0, _shell_aspect_ratio_aspect_ratio_component__WEBPACK_IMPORTED_MODULE_11__["AspectRatioComponent"], [], {
          ratio: [0, "ratio"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵpod"](28, {
          w: 0,
          h: 1
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](29, 0, null, 0, 1, "app-image-shell", [["class", "icon-image"]], [[2, "img-loaded", null], [4, "backgroundImage", null], [1, "display", 0]], null, null, _shell_image_shell_image_shell_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__["View_ImageShellComponent_0"], _shell_image_shell_image_shell_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__["RenderType_ImageShellComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](30, 49152, null, 0, _shell_image_shell_image_shell_component__WEBPACK_IMPORTED_MODULE_9__["ImageShellComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["PLATFORM_ID"]], {
          src: [0, "src"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](31, 0, null, 0, 23, "ion-slides", [["class", "walkthrough-slides"], ["pager", "true"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonSlides_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonSlides"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](32, 49152, [[1, 4]], 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonSlides"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], {
          options: [0, "options"],
          pager: [1, "pager"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵand"](16777216, null, 0, 1, null, View_plumbingDetailsPage_1)), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](34, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵand"](16777216, null, 0, 1, null, View_plumbingDetailsPage_2)), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](36, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵand"](16777216, null, 0, 1, null, View_plumbingDetailsPage_3)), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](38, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵand"](16777216, null, 0, 1, null, View_plumbingDetailsPage_4)), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](40, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵand"](16777216, null, 0, 1, null, View_plumbingDetailsPage_5)), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](42, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵand"](16777216, null, 0, 1, null, View_plumbingDetailsPage_6)), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](44, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵand"](16777216, null, 0, 1, null, View_plumbingDetailsPage_7)), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](46, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵand"](16777216, null, 0, 1, null, View_plumbingDetailsPage_8)), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](48, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵand"](16777216, null, 0, 1, null, View_plumbingDetailsPage_9)), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](50, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵand"](16777216, null, 0, 1, null, View_plumbingDetailsPage_10)), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](52, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵand"](16777216, null, 0, 1, null, View_plumbingDetailsPage_11)), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](54, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null)], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = "primary";

          _ck(_v, 4, 0, currVal_0);

          var currVal_1 = "app/categories/plumbing";

          _ck(_v, 8, 0, currVal_1);

          var currVal_2 = "app/categories/plumbing";

          _ck(_v, 9, 0, currVal_2);

          var currVal_4 = _co.details == null ? null : _co.details.name;

          _ck(_v, 13, 0, currVal_4);

          var currVal_5 = "12";

          _ck(_v, 19, 0, currVal_5);

          var currVal_9 = "cover";
          var currVal_10 = _co.details == null ? null : _co.details.showcaseImage;

          _ck(_v, 21, 0, currVal_9, currVal_10);

          var currVal_12 = _ck(_v, 24, 0, 64, 40);

          _ck(_v, 23, 0, currVal_12);

          var currVal_14 = _ck(_v, 28, 0, 1, 1);

          _ck(_v, 27, 0, currVal_14);

          var currVal_18 = _co.details == null ? null : _co.details.icon;

          _ck(_v, 30, 0, currVal_18);

          var currVal_19 = _co.slidesOptions;
          var currVal_20 = "true";

          _ck(_v, 32, 0, currVal_19, currVal_20);

          var currVal_21 = (_co.details == null ? null : _co.details.name) == "Convert";

          _ck(_v, 34, 0, currVal_21);

          var currVal_22 = (_co.details == null ? null : _co.details.name) == "Convert";

          _ck(_v, 36, 0, currVal_22);

          var currVal_23 = (_co.details == null ? null : _co.details.name) == "Area";

          _ck(_v, 38, 0, currVal_23);

          var currVal_24 = (_co.details == null ? null : _co.details.name) == "Area";

          _ck(_v, 40, 0, currVal_24);

          var currVal_25 = (_co.details == null ? null : _co.details.name) == "Room Volume";

          _ck(_v, 42, 0, currVal_25);

          var currVal_26 = (_co.details == null ? null : _co.details.name) == "Litres";

          _ck(_v, 44, 0, currVal_26);

          var currVal_27 = (_co.details == null ? null : _co.details.name) == "Joist";

          _ck(_v, 46, 0, currVal_27);

          var currVal_28 = (_co.details == null ? null : _co.details.name) == "Cylinder";

          _ck(_v, 48, 0, currVal_28);

          var currVal_29 = (_co.details == null ? null : _co.details.name) == "Water Pressure";

          _ck(_v, 50, 0, currVal_29);

          var currVal_30 = (_co.details == null ? null : _co.details.name) == "Gutter";

          _ck(_v, 52, 0, currVal_30);

          var currVal_31 = (_co.details == null ? null : _co.details.name) == "Heat Cap";

          _ck(_v, 54, 0, currVal_31);
        }, function (_ck, _v) {
          var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 13).textLoaded;

          _ck(_v, 12, 0, currVal_3);

          var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 21).imageLoaded;

          var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 21).backgroundImage;

          var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 21).display;

          _ck(_v, 20, 0, currVal_6, currVal_7, currVal_8);

          var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 23).ratioPadding;

          _ck(_v, 22, 0, currVal_11);

          var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 27).ratioPadding;

          _ck(_v, 26, 0, currVal_13);

          var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 30).imageLoaded;

          var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 30).backgroundImage;

          var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 30).display;

          _ck(_v, 29, 0, currVal_15, currVal_16, currVal_17);
        });
      }

      function View_plumbingDetailsPage_Host_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](0, 0, null, null, 1, "app-plumbing-details", [], [[2, "first-slide-active", null], [2, "last-slide-active", null], [2, "is-shell", null]], null, null, View_plumbingDetailsPage_0, RenderType_plumbingDetailsPage)), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](1, 4308992, null, 0, _plumbing_details_page__WEBPACK_IMPORTED_MODULE_13__["plumbingDetailsPage"], [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]], null, null)], function (_ck, _v) {
          _ck(_v, 1, 0);
        }, function (_ck, _v) {
          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 1).isFirstSlide;

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 1).isLastSlide;

          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 1).isShell;

          _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2);
        });
      }

      var plumbingDetailsPageNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵccf"]("app-plumbing-details", _plumbing_details_page__WEBPACK_IMPORTED_MODULE_13__["plumbingDetailsPage"], View_plumbingDetailsPage_Host_0, {}, {}, []);
      /***/

    },

    /***/
    "Mzw6":
    /*!***********************************************************!*\
      !*** ./src/app/plumbing/details/plumbing-details.page.ts ***!
      \***********************************************************/

    /*! exports provided: plumbingDetailsPage */

    /***/
    function Mzw6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "plumbingDetailsPage", function () {
        return plumbingDetailsPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "sZkV");
      /* harmony import */


      var _utils_resolver_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../utils/resolver-helper */
      "evT8");
      /* harmony import */


      var _plumbing_details_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./plumbing-details.model */
      "bKs7");

      var plumbingDetailsPage = /*#__PURE__*/function () {
        function plumbingDetailsPage(menu, route, toastController) {
          _classCallCheck(this, plumbingDetailsPage);

          this.menu = menu;
          this.route = route;
          this.toastController = toastController; // Gather all component subscription in one place. Can be one Subscription or multiple (chained using the Subscription.add() method)

          this.slidesOptions = {
            zoom: {
              toggle: false // Disable zooming to prevent weird double tap zomming on slide images

            }
          };
          this.isFirstSlide = true;
          this.isLastSlide = false;
          this.generateSides();
        }

        _createClass(plumbingDetailsPage, [{
          key: "ionViewDidEnter",
          // Disable side menu for this page
          value: function ionViewDidEnter() {
            this.menu.enable(true);
          } // Restore to default when leaving this page

        }, {
          key: "ionViewDidLeave",
          value: function ionViewDidLeave() {
            this.menu.enable(true);
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this = this;

            // ViewChild is set
            this.slides.isBeginning().then(function (isBeginning) {
              _this.isFirstSlide = isBeginning;
            });
            this.slides.isEnd().then(function (isEnd) {
              _this.isLastSlide = isEnd;
            }); // Subscribe to changes

            this.slides.ionSlideWillChange.subscribe(function (changes) {
              _this.slides.isBeginning().then(function (isBeginning) {
                _this.isFirstSlide = isBeginning;
              });

              _this.slides.isEnd().then(function (isEnd) {
                _this.isLastSlide = isEnd;
              });
            });
          }
        }, {
          key: "skipWalkthrough",
          value: function skipWalkthrough() {
            var _this2 = this;

            // Skip to the last slide
            this.slides.length().then(function (length) {
              _this2.slides.slideTo(length);
            });
          }
        }, {
          key: "generateSides",
          value: function generateSides() {
            // Convert
            var precision = 10; // 1 decimals

            this.metres = Math.floor(Math.random() * (10 * precision - 1 * precision) + 1 * precision) / (1 * precision);
            this.centimetre = Math.floor(Math.random() * 600) + 200; //Area

            this.side1 = (Math.floor(Math.random() * 100) + 1) * 100;
            this.side2 = this.side1 / 2;
            console.trace('Random: ', this.side1);
            this.side1a = (Math.floor(Math.random() * 100) + 10) * 100;
            this.side2a = this.side1a * 0.3;
            this.side2a = Math.round(this.side2a * 10) / 10;
            this.side5a = this.side1a * 0.57;
            this.side5a = Math.round(this.side5a * 10) / 10;
            this.side6a = this.side1a * 0.62;
            this.side6a = Math.round(this.side6a * 10) / 10; // Room Volume

            this.wallWidth = Math.floor(Math.random() * 10) + 3;
            this.wallDepth = this.wallWidth * 0.8;
            this.wallDepth = Math.round(this.wallDepth * 10) / 10;
            this.wallHeight = 2.5; //Litres

            this.litresPMin = Math.floor(Math.random() * 50) + 1; //Joist

            this.joistThickness = Math.floor(Math.random() * 200) + 100;
            this.maxDepth = "1 / 8"; //Cylinder

            this.cylDiameter = Math.floor(Math.random() * 500) + 400;
            this.cylHeight = this.cylDiameter * 2;
            this.cylRadius = this.cylDiameter / 2; //Water Pressure

            this.sysPressure = Math.floor(Math.random() * 20) + 1; //Gutter

            this.gutterLength = Math.floor(Math.random() * 20) + 1;
            this.finishTemp = Math.floor(Math.random() * 20) + 10;
            this.startTemp = Math.ceil(this.finishTemp * 0.4);
            this.cleValue = 0.000018; //Heat Cap

            this.waterVol = Math.floor(Math.random() * 200) + 100;
            this.finishTempCap = Math.floor(Math.random() * 95) + 40;
            this.startTempCap = Math.floor(Math.random() * 20) + 5;
            this.heatCap = 4.186;
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this3 = this;

            // On init, the route subscription is the active subscription
            this.subscriptions = this.route.data.subscribe(function (resolvedRouteData) {
              // Route subscription resolved, now the active subscription is the Observable extracted from the resolved route data
              _this3.subscriptions = _utils_resolver_helper__WEBPACK_IMPORTED_MODULE_3__["ResolverHelper"].extractData(resolvedRouteData.data, _plumbing_details_model__WEBPACK_IMPORTED_MODULE_4__["plumbingDetailsModel"]).subscribe(function (state) {
                _this3.details = state;
              }, function (error) {});
            }, function (error) {});
          }
        }, {
          key: "presentToastCorrect",
          value: function presentToastCorrect() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this4 = this;

              var toast;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.toastController.create({
                        header: 'Correct!',
                        message: 'Well Done.',
                        position: 'bottom',
                        buttons: [{
                          text: 'Next',
                          role: 'cancel',
                          handler: function handler() {
                            _this4.generateSides();

                            _this4.convertedMetres = "";
                            _this4.convertedCent = "";
                            _this4.side3 = "";
                            _this4.side4 = "";
                            _this4.side3a = "";
                            _this4.side4a = "";
                            _this4.total = "";
                            _this4.totala = "";
                            _this4.totalArea = "";
                            _this4.totalWallArea = "";
                            _this4.litresPsec = "";
                            _this4.maxPipe = "";
                            _this4.volM3 = "";
                            _this4.volLitre = "";
                            _this4.baseArea = "";
                            _this4.sysNewton = "";
                            _this4.expansion = "";
                            _this4.energyCap = "";
                          }
                        }]
                      });

                    case 2:
                      toast = _context.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "presentToastIncorrect",
          value: function presentToastIncorrect() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var toast;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.toastController.create({
                        message: 'Try again!',
                        position: 'bottom',
                        duration: 2000
                      });

                    case 2:
                      toast = _context2.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "calculateM5toCM",
          value: function calculateM5toCM() {
            var conversion = this.metres * 1000;
            conversion = Math.round(conversion * 10) / 10;

            if (conversion == this.convertedMetres) {
              console.trace('Correct!');
              this.presentToastCorrect();
            } else {
              this.presentToastIncorrect();
            }
          }
        }, {
          key: "calculateM5toMM",
          value: function calculateM5toMM() {
            var conversion = this.centimetre * 10;
            conversion = Math.round(conversion * 10) / 10;

            if (conversion == this.convertedCent) {
              console.trace('Correct!');
              this.presentToastCorrect();
            } else {
              this.presentToastIncorrect();
            }
          }
        }, {
          key: "calculateSimpleArea",
          value: function calculateSimpleArea() {
            var conversion = this.side1 * this.side2 / 1000000;
            conversion = Math.round(conversion * 100) / 100;
            console.trace(conversion);

            if (this.totalArea == conversion) {
              console.trace('Correct!');
              this.presentToastCorrect();
            } else {
              this.presentToastIncorrect();
            }
          }
        }, {
          key: "calculateComplexArea",
          value: function calculateComplexArea() {
            var s3 = this.side1a - this.side5a;
            var s4 = this.side6a - this.side2a;
            var area1 = this.side1a * this.side2a;
            var area2 = this.side4a * this.side5a;
            var conversion = (area1 + area2) / 1000000;
            conversion = Math.round(conversion * 100) / 100;
            console.trace("Side 3 " + s3 + " Side 4" + s4 + " A1 " + area1 + " A2 " + area2 + " Conversion " + conversion);

            if (this.totalArea == conversion) {
              console.trace('Correct!');
              this.presentToastCorrect();
            } else {
              this.presentToastIncorrect();
            }
          }
        }, {
          key: "calculateRoomVolume",
          value: function calculateRoomVolume() {
            var areaCubed = this.wallDepth * this.wallWidth * this.wallHeight;
            areaCubed = Math.ceil(areaCubed * 10) / 10;
            console.trace(areaCubed);

            if (this.totalWallArea == areaCubed) {
              console.trace('Correct!');
              this.presentToastCorrect();
            } else {
              this.presentToastIncorrect();
            }
          }
        }, {
          key: "calculateLitres",
          value: function calculateLitres() {
            var litres = this.litresPMin / 60;
            litres = Math.round(litres * 100) / 100;
            console.trace(litres);

            if (this.litresPsec == litres) {
              console.trace('Correct!');
              this.presentToastCorrect();
            } else {
              this.presentToastIncorrect();
            }
          }
        }, {
          key: "calculateJoist",
          value: function calculateJoist() {
            var pipe = this.joistThickness / 8;
            pipe = Math.round(pipe * 100) / 100;
            console.trace(pipe);

            if (this.maxPipe == pipe) {
              console.trace('Correct!');
              this.presentToastCorrect();
            } else {
              this.presentToastIncorrect();
            }
          }
        }, {
          key: "calculateCylinder",
          value: function calculateCylinder() {
            var area = this.cylDiameter * this.cylRadius;
            area = Math.round(area * 100) / 100;
            var vol = area * this.cylHeight;
            vol = Math.round(vol * 100) / 100;
            var volL = vol * 0.000001;
            volL = Math.round(volL * 100) / 100;
            var volMetres3 = volL / 1000;
            volMetres3 = Math.round(volMetres3 * 100) / 100;
            console.trace("Area :" + area + " Volume :" + vol + " Vol Litres" + volL + " vol m3 " + volMetres3);

            if (this.volLitre == volL && this.volM3 == volMetres3) {
              console.trace('Correct!');
              this.presentToastCorrect();
            } else {
              this.presentToastIncorrect();
            }
          }
        }, {
          key: "calculatePressure",
          value: function calculatePressure() {
            var pressure = this.sysPressure * 9.81;
            pressure = Math.round(pressure * 100) / 100;
            console.trace(pressure);

            if (pressure == this.sysNewton) {
              console.trace('Correct!');
              this.presentToastCorrect();
            } else {
              this.presentToastIncorrect();
            }
          }
        }, {
          key: "calculateGutter",
          value: function calculateGutter() {
            var tempincrease = this.finishTemp - this.startTemp;
            var expansionCalc = this.cleValue * this.gutterLength * tempincrease;
            expansionCalc = Math.round(expansionCalc * 1000 * 100) / 100;
            console.trace(expansionCalc);

            if (expansionCalc == this.expansion) {
              console.trace('Correct!');
              this.presentToastCorrect();
            } else {
              this.presentToastIncorrect();
            }
          }
        }, {
          key: "calculateCap",
          value: function calculateCap() {
            var tempincrease = this.finishTempCap - this.startTempCap;
            var expansionCalc = this.waterVol * tempincrease * this.heatCap;
            expansionCalc = Math.round(expansionCalc / 3412 * 100) / 100;
            console.trace(expansionCalc);

            if (expansionCalc == this.energyCap) {
              console.trace('Correct!');
              this.presentToastCorrect();
            } else {
              this.presentToastIncorrect();
            }
          } // NOTE: Ionic only calls ngOnDestroy if the page was popped (ex: when navigating back)
          // Since ngOnDestroy might not fire when you navigate from the current page, use ionViewWillLeave to cleanup Subscriptions

        }, {
          key: "ionViewWillLeave",
          value: function ionViewWillLeave() {
            // console.log('TravelListingPage [ionViewWillLeave]');
            this.subscriptions.unsubscribe();
          }
        }, {
          key: "isShell",
          get: function get() {
            return this.details && this.details.isShell ? true : false;
          }
        }]);

        return plumbingDetailsPage;
      }();
      /***/

    },

    /***/
    "smlS":
    /*!*************************************************************************************!*\
      !*** ./src/app/plumbing/details/styles/plumbing-details.shell.scss.shim.ngstyle.js ***!
      \*************************************************************************************/

    /*! exports provided: styles */

    /***/
    function smlS(module, __webpack_exports__, __webpack_require__) {
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


      var styles = ["[_nghost-%COMP%] {\n  --shell-color: #ebbb00;\n  --shell-color-rgb: 235,187,0;\n}\n\n.details-scores[_ngcontent-%COMP%]   .score-value[_ngcontent-%COMP%]    > app-text-shell[_ngcontent-%COMP%] {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .15);\n  --text-shell-line-height: 14px;\n  min-width: 30px;\n}\n\n.details-scores[_ngcontent-%COMP%]   .score-value[_ngcontent-%COMP%]    > app-text-shell.text-loaded[_ngcontent-%COMP%] {\n  min-width: 0px;\n}\n\napp-image-shell.showcase-image[_ngcontent-%COMP%] {\n  --image-shell-loading-background: rgba(var(--shell-color-rgb), .10);\n  --image-shell-spinner-color: rgba(var(--shell-color-rgb), .25);\n  --image-shell-overlay-background: rgba(var(--ion-color-dark-rgb), .60);\n}\n\napp-image-shell.icon-image[_ngcontent-%COMP%] {\n  --image-shell-loading-background: transparent;\n}\n\n.details-name[_ngcontent-%COMP%]    > app-text-shell[_ngcontent-%COMP%] {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .20);\n  --text-shell-line-height: 18px;\n  max-width: 30%;\n}\n\n.details-name[_ngcontent-%COMP%]    > app-text-shell.text-loaded[_ngcontent-%COMP%] {\n  max-width: unset;\n}\n\n.details-style[_ngcontent-%COMP%]    > app-text-shell[_ngcontent-%COMP%] {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .10);\n  --text-shell-line-height: 16px;\n  max-width: 50%;\n}\n\n.details-style[_ngcontent-%COMP%]    > app-text-shell.text-loaded[_ngcontent-%COMP%] {\n  max-width: unset;\n}\n\n.restaurant-rating[_ngcontent-%COMP%]    > app-text-shell[_ngcontent-%COMP%] {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .15);\n  --text-shell-line-height: 12px;\n  min-width: 20px;\n}\n\n.restaurant-rating[_ngcontent-%COMP%]    > app-text-shell.text-loaded[_ngcontent-%COMP%] {\n  min-width: 0px;\n}\n\n.schedule-day[_ngcontent-%COMP%]    > app-text-shell[_ngcontent-%COMP%] {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .10);\n  --text-shell-line-height: 14px;\n  max-width: 90%;\n}\n\n.schedule-day[_ngcontent-%COMP%]    > app-text-shell.text-loaded[_ngcontent-%COMP%] {\n  max-width: inherit;\n}\n\n.schedule-value[_ngcontent-%COMP%]    > app-text-shell[_ngcontent-%COMP%] {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .10);\n  --text-shell-line-height: 14px;\n  max-width: 100%;\n}\n\n.schedule-value[_ngcontent-%COMP%]    > app-text-shell.text-loaded[_ngcontent-%COMP%] {\n  max-width: inherit;\n}\n\n.location-address[_ngcontent-%COMP%]    > app-text-shell[_ngcontent-%COMP%] {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .10);\n  --text-shell-line-height: 14px;\n  max-width: 60%;\n}\n\n.location-address[_ngcontent-%COMP%]    > app-text-shell.text-loaded[_ngcontent-%COMP%] {\n  max-width: inherit;\n}\n\napp-image-shell.location-image[_ngcontent-%COMP%] {\n  --image-shell-loading-background: rgba(var(--shell-color-rgb), .10);\n  --image-shell-spinner-color: rgba(var(--shell-color-rgb), .25);\n}\n\n.item-tag[_ngcontent-%COMP%]    > app-text-shell[_ngcontent-%COMP%] {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .15);\n  --text-shell-line-height: 14px;\n  min-width: 50px;\n}\n\n.item-tag[_ngcontent-%COMP%]    > app-text-shell.text-loaded[_ngcontent-%COMP%] {\n  min-width: 0px;\n}\n\napp-image-shell.user-picture-image[_ngcontent-%COMP%] {\n  --image-shell-loading-background: rgba(var(--shell-color-rgb), .10);\n}\n\n.dish-name[_ngcontent-%COMP%]    > app-text-shell[_ngcontent-%COMP%] {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .10);\n  --text-shell-line-height: 14px;\n}\n\n.dish-votes-value[_ngcontent-%COMP%]    > app-text-shell[_ngcontent-%COMP%] {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .15);\n  --text-shell-line-height: 14px;\n  min-width: 30px;\n}\n\n.dish-votes-value[_ngcontent-%COMP%]    > app-text-shell.text-loaded[_ngcontent-%COMP%] {\n  min-width: 0px;\n}\n\napp-image-shell.review-user-image[_ngcontent-%COMP%] {\n  --image-shell-loading-background: rgba(var(--shell-color-rgb), .10);\n}\n\n.review-user-name[_ngcontent-%COMP%]    > app-text-shell[_ngcontent-%COMP%] {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .15);\n  --text-shell-line-height: 16px;\n  max-width: 50%;\n}\n\n.review-user-name[_ngcontent-%COMP%]    > app-text-shell.text-loaded[_ngcontent-%COMP%] {\n  max-width: inherit;\n}\n\n.review-date[_ngcontent-%COMP%]    > app-text-shell[_ngcontent-%COMP%] {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .05);\n  --text-shell-line-height: 11px;\n}\n\n.review-rating[_ngcontent-%COMP%]    > app-text-shell[_ngcontent-%COMP%] {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .15);\n  --text-shell-line-height: 12px;\n}\n\n.review-message[_ngcontent-%COMP%]    > app-text-shell[_ngcontent-%COMP%] {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .15);\n  --text-shell-line-height: 14px;\n}\n\napp-image-shell.recipe-cover-image[_ngcontent-%COMP%] {\n  --image-shell-loading-background: rgba(var(--shell-color-rgb), .20);\n}\n\napp-image-shell.chef-picture-image[_ngcontent-%COMP%] {\n  --image-shell-loading-background: var(--shell-color);\n  --image-shell-border-radius: 50%;\n  z-index: 3;\n}\n\n.recipe-author[_ngcontent-%COMP%]    > app-text-shell[_ngcontent-%COMP%] {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .10);\n  --text-shell-line-height: 16px;\n}\n\n.recipe-name[_ngcontent-%COMP%]    > app-text-shell[_ngcontent-%COMP%] {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .20);\n}\n\n.recipe-chef[_ngcontent-%COMP%]    > app-text-shell[_ngcontent-%COMP%] {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .15);\n  --text-shell-line-height: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGx1bWJpbmcvZGV0YWlscy9zdHlsZXMvcGx1bWJpbmctZGV0YWlscy5zaGVsbC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0Usc0JBQUE7RUFDQSw0QkFBQTtBQURGOztBQVlFO0VBQ0UsMERBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7QUFUSjs7QUFXSTtFQUNFLGNBQUE7QUFUTjs7QUFjQTtFQUNFLG1FQUFBO0VBQ0EsOERBQUE7RUFDQSxzRUFBQTtBQVhGOztBQWNBO0VBQ0UsNkNBQUE7QUFYRjs7QUFjQTtFQUNFLDBEQUFBO0VBQ0EsOEJBQUE7RUFDQSxjQUFBO0FBWEY7O0FBYUU7RUFDRSxnQkFBQTtBQVhKOztBQWVBO0VBQ0UsMERBQUE7RUFDQSw4QkFBQTtFQUNBLGNBQUE7QUFaRjs7QUFjRTtFQUNFLGdCQUFBO0FBWko7O0FBZ0JBO0VBQ0UsMERBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7QUFiRjs7QUFlRTtFQUNFLGNBQUE7QUFiSjs7QUFpQkE7RUFDRSwwREFBQTtFQUNBLDhCQUFBO0VBQ0EsY0FBQTtBQWRGOztBQWdCRTtFQUNFLGtCQUFBO0FBZEo7O0FBa0JBO0VBQ0UsMERBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7QUFmRjs7QUFpQkU7RUFDRSxrQkFBQTtBQWZKOztBQW1CQTtFQUNFLDBEQUFBO0VBQ0EsOEJBQUE7RUFDQSxjQUFBO0FBaEJGOztBQWtCRTtFQUNFLGtCQUFBO0FBaEJKOztBQW9CQTtFQUNFLG1FQUFBO0VBQ0EsOERBQUE7QUFqQkY7O0FBb0JBO0VBQ0UsMERBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7QUFqQkY7O0FBbUJFO0VBQ0UsY0FBQTtBQWpCSjs7QUFxQkE7RUFDRSxtRUFBQTtBQWxCRjs7QUFxQkE7RUFDRSwwREFBQTtFQUNBLDhCQUFBO0FBbEJGOztBQXFCQTtFQUNFLDBEQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0FBbEJGOztBQW9CRTtFQUNFLGNBQUE7QUFsQko7O0FBc0JBO0VBQ0UsbUVBQUE7QUFuQkY7O0FBc0JBO0VBQ0UsMERBQUE7RUFDQSw4QkFBQTtFQUNBLGNBQUE7QUFuQkY7O0FBcUJFO0VBQ0Usa0JBQUE7QUFuQko7O0FBdUJBO0VBQ0UsMERBQUE7RUFDQSw4QkFBQTtBQXBCRjs7QUF1QkE7RUFDRSwwREFBQTtFQUNBLDhCQUFBO0FBcEJGOztBQXVCQTtFQUNFLDBEQUFBO0VBQ0EsOEJBQUE7QUFwQkY7O0FBdUJBO0VBQ0UsbUVBQUE7QUFwQkY7O0FBdUJBO0VBQ0Usb0RBQUE7RUFDQSxnQ0FBQTtFQUNBLFVBQUE7QUFwQkY7O0FBdUJBO0VBQ0UsMERBQUE7RUFDQSw4QkFBQTtBQXBCRjs7QUF1QkE7RUFDRSwwREFBQTtBQXBCRjs7QUF1QkE7RUFDRSwwREFBQTtFQUNBLDhCQUFBO0FBcEJGIiwiZmlsZSI6InNyYy9hcHAvcGx1bWJpbmcvZGV0YWlscy9zdHlsZXMvcGx1bWJpbmctZGV0YWlscy5zaGVsbC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ3VzdG9tIHZhcmlhYmxlc1xuLy8gTm90ZTogIFRoZXNlIG9uZXMgd2VyZSBhZGRlZCBieSB1cyBhbmQgaGF2ZSBub3RoaW5nIHRvIGRvIHdpdGggSW9uaWMgQ1NTIEN1c3RvbSBQcm9wZXJ0aWVzXG46aG9zdCB7XG4gIC0tc2hlbGwtY29sb3I6ICNlYmJiMDA7XG4gIC0tc2hlbGwtY29sb3ItcmdiOiAyMzUsMTg3LDA7XG59XG5cbi8vIFlvdSBjYW4gYWxzbyBhcHBseSBzaGVlbCBzdHlsZXMgdG8gdGhlIGVudGlyZSBwYWdlXG46aG9zdCguaXMtc2hlbGwpIHtcbiAgLy8gaW9uLWNvbnRlbnQge1xuICAvLyAgIG9wYWNpdHk6IDAuODtcbiAgLy8gfVxufVxuXG4uZGV0YWlscy1zY29yZXMge1xuICAuc2NvcmUtdmFsdWUgPiBhcHAtdGV4dC1zaGVsbCB7XG4gICAgLS10ZXh0LXNoZWxsLWxpbmUtY29sb3I6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjE1KTtcbiAgICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDE0cHg7XG4gICAgbWluLXdpZHRoOiAzMHB4O1xuXG4gICAgJi50ZXh0LWxvYWRlZCB7XG4gICAgICBtaW4td2lkdGg6IDBweDtcbiAgICB9XG4gIH1cbn1cblxuYXBwLWltYWdlLXNoZWxsLnNob3djYXNlLWltYWdlIHtcbiAgLS1pbWFnZS1zaGVsbC1sb2FkaW5nLWJhY2tncm91bmQ6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjEwKTtcbiAgLS1pbWFnZS1zaGVsbC1zcGlubmVyLWNvbG9yOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4yNSk7XG4gIC0taW1hZ2Utc2hlbGwtb3ZlcmxheS1iYWNrZ3JvdW5kOiByZ2JhKHZhcigtLWlvbi1jb2xvci1kYXJrLXJnYiksIC42MCk7XG59XG5cbmFwcC1pbWFnZS1zaGVsbC5pY29uLWltYWdlIHtcbiAgLS1pbWFnZS1zaGVsbC1sb2FkaW5nLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG4uZGV0YWlscy1uYW1lID4gYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtbGluZS1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMjApO1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDE4cHg7XG4gIG1heC13aWR0aDogMzAlO1xuXG4gICYudGV4dC1sb2FkZWQge1xuICAgIG1heC13aWR0aDogdW5zZXQ7XG4gIH1cbn1cblxuLmRldGFpbHMtc3R5bGUgPiBhcHAtdGV4dC1zaGVsbCB7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4xMCk7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMTZweDtcbiAgbWF4LXdpZHRoOiA1MCU7XG5cbiAgJi50ZXh0LWxvYWRlZCB7XG4gICAgbWF4LXdpZHRoOiB1bnNldDtcbiAgfVxufVxuXG4ucmVzdGF1cmFudC1yYXRpbmcgPiBhcHAtdGV4dC1zaGVsbCB7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4xNSk7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMTJweDtcbiAgbWluLXdpZHRoOiAyMHB4O1xuXG4gICYudGV4dC1sb2FkZWQge1xuICAgIG1pbi13aWR0aDogMHB4O1xuICB9XG59XG5cbi5zY2hlZHVsZS1kYXkgPiBhcHAtdGV4dC1zaGVsbCB7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4xMCk7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMTRweDtcbiAgbWF4LXdpZHRoOiA5MCU7XG5cbiAgJi50ZXh0LWxvYWRlZCB7XG4gICAgbWF4LXdpZHRoOiBpbmhlcml0O1xuICB9XG59XG5cbi5zY2hlZHVsZS12YWx1ZSA+IGFwcC10ZXh0LXNoZWxsIHtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtY29sb3I6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjEwKTtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAxNHB4O1xuICBtYXgtd2lkdGg6IDEwMCU7XG5cbiAgJi50ZXh0LWxvYWRlZCB7XG4gICAgbWF4LXdpZHRoOiBpbmhlcml0O1xuICB9XG59XG5cbi5sb2NhdGlvbi1hZGRyZXNzID4gYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtbGluZS1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMTApO1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDE0cHg7XG4gIG1heC13aWR0aDogNjAlO1xuXG4gICYudGV4dC1sb2FkZWQge1xuICAgIG1heC13aWR0aDogaW5oZXJpdDtcbiAgfVxufVxuXG5hcHAtaW1hZ2Utc2hlbGwubG9jYXRpb24taW1hZ2Uge1xuICAtLWltYWdlLXNoZWxsLWxvYWRpbmctYmFja2dyb3VuZDogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMTApO1xuICAtLWltYWdlLXNoZWxsLXNwaW5uZXItY29sb3I6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjI1KTtcbn1cblxuLml0ZW0tdGFnID4gYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtbGluZS1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMTUpO1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDE0cHg7XG4gIG1pbi13aWR0aDogNTBweDtcblxuICAmLnRleHQtbG9hZGVkIHtcbiAgICBtaW4td2lkdGg6IDBweDtcbiAgfVxufVxuXG5hcHAtaW1hZ2Utc2hlbGwudXNlci1waWN0dXJlLWltYWdlIHtcbiAgLS1pbWFnZS1zaGVsbC1sb2FkaW5nLWJhY2tncm91bmQ6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjEwKTtcbn1cblxuLmRpc2gtbmFtZSA+IGFwcC10ZXh0LXNoZWxsIHtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtY29sb3I6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjEwKTtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAxNHB4O1xufVxuXG4uZGlzaC12b3Rlcy12YWx1ZSA+IGFwcC10ZXh0LXNoZWxsIHtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtY29sb3I6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjE1KTtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAxNHB4O1xuICBtaW4td2lkdGg6IDMwcHg7XG5cbiAgJi50ZXh0LWxvYWRlZCB7XG4gICAgbWluLXdpZHRoOiAwcHg7XG4gIH1cbn1cblxuYXBwLWltYWdlLXNoZWxsLnJldmlldy11c2VyLWltYWdlIHtcbiAgLS1pbWFnZS1zaGVsbC1sb2FkaW5nLWJhY2tncm91bmQ6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjEwKTtcbn1cblxuLnJldmlldy11c2VyLW5hbWUgPiBhcHAtdGV4dC1zaGVsbCB7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4xNSk7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMTZweDtcbiAgbWF4LXdpZHRoOiA1MCU7XG5cbiAgJi50ZXh0LWxvYWRlZCB7XG4gICAgbWF4LXdpZHRoOiBpbmhlcml0O1xuICB9XG59XG5cbi5yZXZpZXctZGF0ZSA+IGFwcC10ZXh0LXNoZWxsIHtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtY29sb3I6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjA1KTtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAxMXB4O1xufVxuXG4ucmV2aWV3LXJhdGluZyA+IGFwcC10ZXh0LXNoZWxsIHtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtY29sb3I6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjE1KTtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAxMnB4O1xufVxuXG4ucmV2aWV3LW1lc3NhZ2UgPiBhcHAtdGV4dC1zaGVsbCB7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4xNSk7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMTRweDtcbn1cblxuYXBwLWltYWdlLXNoZWxsLnJlY2lwZS1jb3Zlci1pbWFnZSB7XG4gIC0taW1hZ2Utc2hlbGwtbG9hZGluZy1iYWNrZ3JvdW5kOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4yMCk7XG59XG5cbmFwcC1pbWFnZS1zaGVsbC5jaGVmLXBpY3R1cmUtaW1hZ2Uge1xuICAtLWltYWdlLXNoZWxsLWxvYWRpbmctYmFja2dyb3VuZDogdmFyKC0tc2hlbGwtY29sb3IpO1xuICAtLWltYWdlLXNoZWxsLWJvcmRlci1yYWRpdXM6IDUwJTtcbiAgei1pbmRleDogMztcbn1cblxuLnJlY2lwZS1hdXRob3IgPiBhcHAtdGV4dC1zaGVsbCB7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4xMCk7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMTZweDtcbn1cblxuLnJlY2lwZS1uYW1lID4gYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtbGluZS1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMjApO1xufVxuXG4ucmVjaXBlLWNoZWYgPiBhcHAtdGV4dC1zaGVsbCB7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4xNSk7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMTRweDtcbn1cbiJdfQ== */"];
      /***/
    }
  }]);
})();
//# sourceMappingURL=plumbing-details-plumbing-details-module-ngfactory-es5.js.map