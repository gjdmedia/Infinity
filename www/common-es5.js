(function () {
  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
    /***/
    "/OzF":
    /*!****************************************************!*\
      !*** ./src/app/user/profile/user-profile.model.ts ***!
      \****************************************************/

    /*! exports provided: UserProfileModel */

    /***/
    function OzF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserProfileModel", function () {
        return UserProfileModel;
      });
      /* harmony import */


      var _shell_data_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../shell/data-store */
      "f/Ol");

      var UserProfileModel = /*#__PURE__*/function (_shell_data_store__WE) {
        _inherits(UserProfileModel, _shell_data_store__WE);

        var _super = _createSuper(UserProfileModel);

        function UserProfileModel() {
          var _this;

          _classCallCheck(this, UserProfileModel);

          _this = _super.call(this);
          _this.friends = [{
            image: '',
            name: ''
          }, {
            image: '',
            name: ''
          }, {
            image: '',
            name: ''
          }, {
            image: '',
            name: ''
          }];
          _this.photos = ['', '', '', ''];
          return _this;
        }

        return UserProfileModel;
      }(_shell_data_store__WEBPACK_IMPORTED_MODULE_0__["ShellModel"]);
      /***/

    },

    /***/
    "/pNQ":
    /*!********************************************!*\
      !*** ./src/app/fashion/fashion.service.ts ***!
      \********************************************/

    /*! exports provided: FashionService */

    /***/
    function pNQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FashionService", function () {
        return FashionService;
      });
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common/http */
      "IheW");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _shell_data_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../shell/data-store */
      "f/Ol");
      /* harmony import */


      var _listing_fashion_listing_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./listing/fashion-listing.model */
      "nfFl");
      /* harmony import */


      var _details_fashion_details_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./details/fashion-details.model */
      "W6mW");

      var FashionService = /*#__PURE__*/function () {
        function FashionService(http) {
          _classCallCheck(this, FashionService);

          this.http = http;
        }

        _createClass(FashionService, [{
          key: "getListingDataSource",
          value: function getListingDataSource() {
            return this.http.get('./assets/data/fashion/listing.json').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (data) {
              // Note: HttpClient cannot know how to instantiate a class for the returned data
              // We need to properly cast types from json data
              var listing = new _listing_fashion_listing_model__WEBPACK_IMPORTED_MODULE_3__["FashionListingModel"](); // The Object.assign() method copies all enumerable own properties from one or more source objects to a target object.
              // Note: If you have non-enummerable properties, you can try a spread operator instead. listing = {...data};
              // (see: https://scotch.io/bar-talk/copying-objects-in-javascript#toc-using-spread-elements-)

              Object.assign(listing, data);
              return listing;
            }));
          }
        }, {
          key: "getListingStore",
          value: function getListingStore(dataSource) {
            // Use cache if available
            if (!this.listingDataStore) {
              // Initialize the model specifying that it is a shell model
              var shellModel = new _listing_fashion_listing_model__WEBPACK_IMPORTED_MODULE_3__["FashionListingModel"]();
              this.listingDataStore = new _shell_data_store__WEBPACK_IMPORTED_MODULE_2__["DataStore"](shellModel); // Trigger the loading mechanism (with shell) in the dataStore

              this.listingDataStore.load(dataSource);
            }

            return this.listingDataStore;
          }
        }, {
          key: "getDetailsDataSource",
          value: function getDetailsDataSource() {
            return this.http.get('./assets/data/fashion/details.json').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (data) {
              // Note: HttpClient cannot know how to instantiate a class for the returned data
              // We need to properly cast types from json data
              var details = new _details_fashion_details_model__WEBPACK_IMPORTED_MODULE_4__["FashionDetailsModel"](); // The Object.assign() method copies all enumerable own properties from one or more source objects to a target object.
              // Note: If you have non-enummerable properties, you can try a spread operator instead. details = {...data};
              // (see: https://scotch.io/bar-talk/copying-objects-in-javascript#toc-using-spread-elements-)

              Object.assign(details, data);
              return details;
            }));
          }
        }, {
          key: "getDetailsStore",
          value: function getDetailsStore(dataSource) {
            // Use cache if available
            if (!this.detailsDataStore) {
              // Initialize the model specifying that it is a shell model
              var shellModel = new _details_fashion_details_model__WEBPACK_IMPORTED_MODULE_4__["FashionDetailsModel"]();
              this.detailsDataStore = new _shell_data_store__WEBPACK_IMPORTED_MODULE_2__["DataStore"](shellModel); // Trigger the loading mechanism (with shell) in the dataStore

              this.detailsDataStore.load(dataSource);
            }

            return this.detailsDataStore;
          }
        }]);

        return FashionService;
      }();
      /***/

    },

    /***/
    "07p5":
    /*!************************************************************************************!*\
      !*** ./src/app/terms-of-service/styles/terms-of-service.page.scss.shim.ngstyle.js ***!
      \************************************************************************************/

    /*! exports provided: styles */

    /***/
    function p5(module, __webpack_exports__, __webpack_require__) {
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


      var styles = ["[_nghost-%COMP%] {\n  --page-margin: var(--app-broad-margin);\n  --page-background: var(--app-background-shade);\n}\n\n.legal-content[_ngcontent-%COMP%] {\n  --background: var(--page-background);\n  --padding-start: var(--page-margin);\n  --padding-end: var(--page-margin);\n  --padding-top: var(--page-margin);\n  --padding-bottom: var(--page-margin);\n}\n\n.legal-content[_ngcontent-%COMP%]   .legal-title[_ngcontent-%COMP%] {\n  color: var(--ion-color-secondary);\n  margin: var(--page-margin) 0px calc(var(--page-margin) / 2);\n}\n\n.legal-content[_ngcontent-%COMP%]   .legal-text[_ngcontent-%COMP%] {\n  color: var(--ion-color-medium);\n  margin: calc(var(--page-margin) / 2) 0px var(--page-margin);\n  font-size: 14px;\n  line-height: 20px;\n  text-align: justify;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVybXMtb2Ytc2VydmljZS9zdHlsZXMvdGVybXMtb2Ytc2VydmljZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxzQ0FBQTtFQUNBLDhDQUFBO0FBREY7O0FBS0E7RUFDRSxvQ0FBQTtFQUNBLG1DQUFBO0VBQ0EsaUNBQUE7RUFDQSxpQ0FBQTtFQUNBLG9DQUFBO0FBRkY7O0FBSUU7RUFDRSxpQ0FBQTtFQUNBLDJEQUFBO0FBRko7O0FBS0U7RUFDRSw4QkFBQTtFQUNBLDJEQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUFISiIsImZpbGUiOiJzcmMvYXBwL3Rlcm1zLW9mLXNlcnZpY2Uvc3R5bGVzL3Rlcm1zLW9mLXNlcnZpY2UucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ3VzdG9tIHZhcmlhYmxlc1xuLy8gTm90ZTogIFRoZXNlIG9uZXMgd2VyZSBhZGRlZCBieSB1cyBhbmQgaGF2ZSBub3RoaW5nIHRvIGRvIHdpdGggSW9uaWMgQ1NTIEN1c3RvbSBQcm9wZXJ0aWVzXG46aG9zdCB7XG4gIC0tcGFnZS1tYXJnaW46IHZhcigtLWFwcC1icm9hZC1tYXJnaW4pO1xuICAtLXBhZ2UtYmFja2dyb3VuZDogdmFyKC0tYXBwLWJhY2tncm91bmQtc2hhZGUpO1xufVxuXG4vLyBOb3RlOiAgQWxsIHRoZSBDU1MgdmFyaWFibGVzIGRlZmluZWQgYmVsb3cgYXJlIG92ZXJyaWRlcyBvZiBJb25pYyBlbGVtZW50cyBDU1MgQ3VzdG9tIFByb3BlcnRpZXNcbi5sZWdhbC1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1wYWdlLWJhY2tncm91bmQpO1xuICAtLXBhZGRpbmctc3RhcnQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgLS1wYWRkaW5nLWVuZDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAtLXBhZGRpbmctdG9wOiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIC0tcGFkZGluZy1ib3R0b206IHZhcigtLXBhZ2UtbWFyZ2luKTtcblxuICAubGVnYWwtdGl0bGUge1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgICBtYXJnaW46IHZhcigtLXBhZ2UtbWFyZ2luKSAwcHggY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbiAgfVxuXG4gIC5sZWdhbC10ZXh0IHtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gICAgbWFyZ2luOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpIDBweCB2YXIoLS1wYWdlLW1hcmdpbik7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gIH1cbn1cbiJdfQ== */"];
      /***/
    },

    /***/
    "3vsf":
    /*!**************************************************************!*\
      !*** ./src/app/carpentry/listing/carpentry-listing.model.ts ***!
      \**************************************************************/

    /*! exports provided: CarpentryItemModel, CarpentryListingModel */

    /***/
    function vsf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CarpentryItemModel", function () {
        return CarpentryItemModel;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CarpentryListingModel", function () {
        return CarpentryListingModel;
      });
      /* harmony import */


      var _shell_data_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../shell/data-store */
      "f/Ol");

      var CarpentryItemModel = function CarpentryItemModel() {
        _classCallCheck(this, CarpentryItemModel);

        this.tags = ['', '', ''];
        this.pictures = ['', '', '', '', ''];
      };

      var CarpentryListingModel = /*#__PURE__*/function (_shell_data_store__WE2) {
        _inherits(CarpentryListingModel, _shell_data_store__WE2);

        var _super2 = _createSuper(CarpentryListingModel);

        function CarpentryListingModel() {
          var _this2;

          _classCallCheck(this, CarpentryListingModel);

          _this2 = _super2.call(this);
          _this2.items = [new CarpentryItemModel(), new CarpentryItemModel(), new CarpentryItemModel(), new CarpentryItemModel()];
          return _this2;
        }

        return CarpentryListingModel;
      }(_shell_data_store__WEBPACK_IMPORTED_MODULE_0__["ShellModel"]);
      /***/

    },

    /***/
    "5HpK":
    /*!****************************************!*\
      !*** ./src/app/brick/brick.service.ts ***!
      \****************************************/

    /*! exports provided: BrickService */

    /***/
    function HpK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BrickService", function () {
        return BrickService;
      });
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common/http */
      "IheW");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _shell_data_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../shell/data-store */
      "f/Ol");
      /* harmony import */


      var _listing_brick_listing_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./listing/brick-listing.model */
      "UQC2");
      /* harmony import */


      var _details_brick_details_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./details/brick-details.model */
      "tER8");

      var BrickService = /*#__PURE__*/function () {
        function BrickService(http) {
          _classCallCheck(this, BrickService);

          this.http = http;
        }

        _createClass(BrickService, [{
          key: "getListingDataSource",
          value: function getListingDataSource() {
            return this.http.get('./assets/data/brick/listing.json').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (data) {
              // Note: HttpClient cannot know how to instantiate a class for the returned data
              // We need to properly cast types from json data
              var listing = new _listing_brick_listing_model__WEBPACK_IMPORTED_MODULE_3__["BrickListingModel"](); // The Object.assign() method copies all enumerable own properties from one or more source objects to a target object.
              // Note: If you have non-enummerable properties, you can try a spread operator instead. listing = {...data};
              // (see: https://scotch.io/bar-talk/copying-objects-in-javascript#toc-using-spread-elements-)

              Object.assign(listing, data);
              return listing;
            }));
          }
        }, {
          key: "getListingStore",
          value: function getListingStore(dataSource) {
            // Use cache if available
            if (!this.listingDataStore) {
              // Initialize the model specifying that it is a shell model
              var shellModel = new _listing_brick_listing_model__WEBPACK_IMPORTED_MODULE_3__["BrickListingModel"]();
              this.listingDataStore = new _shell_data_store__WEBPACK_IMPORTED_MODULE_2__["DataStore"](shellModel); // Trigger the loading mechanism (with shell) in the dataStore

              this.listingDataStore.load(dataSource);
            }

            return this.listingDataStore;
          }
        }, {
          key: "getDetailsDataSource",
          value: function getDetailsDataSource(slug) {
            return this.http.get('./assets/data/brick/details.json').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["flatMap"])(function (details) {
              return details.items.filter(function (item) {
                return item.slug === slug;
              });
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (data) {
              // Note: HttpClient cannot know how to instantiate a class for the returned data
              // We need to properly cast types from json data
              var details = new _details_brick_details_model__WEBPACK_IMPORTED_MODULE_4__["BrickDetailsModel"](); // The Object.assign() method copies all enumerable own properties from one or more source objects to a target object.
              // Note: If you have non-enummerable properties, you can try a spread operator instead. details = {...data};
              // (see: https://scotch.io/bar-talk/copying-objects-in-javascript#toc-using-spread-elements-)

              Object.assign(details, data);
              return details;
            }));
          }
        }, {
          key: "getDetailsStore",
          value: function getDetailsStore(dataSource) {
            // Initialize the model specifying that it is a shell model
            var shellModel = new _details_brick_details_model__WEBPACK_IMPORTED_MODULE_4__["BrickDetailsModel"]();
            this.detailsDataStore = new _shell_data_store__WEBPACK_IMPORTED_MODULE_2__["DataStore"](shellModel); // Trigger the loading mechanism (with shell) in the dataStore

            this.detailsDataStore.load(dataSource);
            return this.detailsDataStore;
          }
        }]);

        return BrickService;
      }();
      /***/

    },

    /***/
    "5e4S":
    /*!**********************************************!*\
      !*** ./src/app/showcase/showcase.service.ts ***!
      \**********************************************/

    /*! exports provided: ShowcaseService */

    /***/
    function e4S(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ShowcaseService", function () {
        return ShowcaseService;
      });
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common/http */
      "IheW");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _showcase_shell_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./showcase-shell.model */
      "wwno");
      /* harmony import */


      var _shell_data_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../shell/data-store */
      "f/Ol"); // tslint:disable-next-line:max-line-length


      var ShowcaseService = /*#__PURE__*/function () {
        function ShowcaseService(http) {
          _classCallCheck(this, ShowcaseService);

          this.http = http;
          this.openDataStream = new rxjs__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"]();
        }

        _createClass(ShowcaseService, [{
          key: "getDataSourceWithDelay",
          value: function getDataSourceWithDelay() {
            return this.http.get('./assets/data/showcase/shell.json').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (val) {
              console.log('getData STARTED'); // tslint:disable-next-line:no-console

              console.time('getData Roundtrip');
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["delay"])(5000), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["finalize"])(function () {
              console.log('getData COMPLETED'); // tslint:disable-next-line:no-console

              console.timeEnd('getData Roundtrip');
            }));
          }
        }, {
          key: "getSimpleDataSource",
          value: function getSimpleDataSource() {
            return this.http.get('./assets/data/showcase/shell.json');
          }
        }, {
          key: "getSimpleDataStore",
          value: function getSimpleDataStore(dataSource) {
            // Use cache if available
            if (!this.showcaseDataStore) {
              // Initialize the model specifying that it is a shell model
              var shellModel = new _showcase_shell_model__WEBPACK_IMPORTED_MODULE_3__["ShowcaseShellModel"]();
              this.showcaseDataStore = new _shell_data_store__WEBPACK_IMPORTED_MODULE_4__["DataStore"](shellModel); // Trigger the loading mechanism (with shell) in the dataStore

              this.showcaseDataStore.load(dataSource);
            }

            return this.showcaseDataStore;
          }
        }, {
          key: "getListDataSource",
          value: function getListDataSource() {
            return this.http.get('https://reqres.in/api/users').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (result) {
              return result['data'];
            }));
          }
        }, {
          key: "getPaginationDataSource",
          value: function getPaginationDataSource(page) {
            return this.http.get('https://reqres.in/api/users?page=' + page).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (result) {
              return result['data'];
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (results) {
              return results.length > 0;
            }));
          }
        }, {
          key: "getMultipleDataSourceA",
          value: function getMultipleDataSourceA() {
            return this.http.get('./assets/data/travel/listing.json');
          }
        }, {
          key: "getMultipleDataSourceB",
          value: function getMultipleDataSourceB() {
            return this.http.get('./assets/data/fashion/listing.json');
          }
        }, {
          key: "getDependantDataSourcePost",
          value: function getDependantDataSourcePost() {
            return this.http.get('https://jsonplaceholder.typicode.com/posts/1');
          } // tslint:disable-next-line:max-line-length

        }, {
          key: "getDependantDataSourcePostComments",
          value: function getDependantDataSourcePostComments(dependantDataSource) {
            var _this3 = this;

            return dependantDataSource.pipe( // Filter user values that are not shells. We need to add this filter if using the combinedUserDataStore timeline
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (post) {
              return !post.isShell;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["concatMap"])(function (post) {
              return _this3.http.get('https://jsonplaceholder.typicode.com/comments?postId=' + post.id);
            }));
          }
        }, {
          key: "getUser",
          value: function getUser(userId) {
            return this.http.get('https://jsonplaceholder.typicode.com/users/' + userId);
          } // get the company details, a subset of the user data

        }, {
          key: "getUserSubsetData",
          value: function getUserSubsetData(userId) {
            var dataObservable = this.http.get('https://jsonplaceholder.typicode.com/users/' + userId);
            return dataObservable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (jsonResponse) {
              var filteredData = Object.assign({}, jsonResponse.company);
              return filteredData;
            }));
          }
        }, {
          key: "getTasks",
          value: function getTasks() {
            return this.http.get('https://jsonplaceholder.typicode.com/todos');
          } // Concat the task with the details of the user

        }, {
          key: "getCombinedTasksUserDataSource",
          value: function getCombinedTasksUserDataSource() {
            var _this4 = this;

            return this.getTasks().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["concatMap"])(function (tasks) {
              var completeTaskData = tasks.map(function (task) {
                // for each task retrun a new observable with the ShowcaseCombinedTaskUserModel
                var taskUser = _this4.getUser(task.userId);

                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["combineLatest"])([Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(task), taskUser]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (_ref) {
                  var _ref2 = _slicedToArray(_ref, 2),
                      taskData = _ref2[0],
                      user = _ref2[1];

                  return Object.assign(Object.assign({}, taskData), {
                    user: user
                  });
                }));
              });
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["forkJoin"])(completeTaskData);
            }));
          }
        }, {
          key: "getOpenDataStream",
          value: function getOpenDataStream() {
            var firstLoadData = this.getPaginationDataSource(1);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["merge"])(this.openDataStream.asObservable(), firstLoadData);
          }
        }, {
          key: "pushValuesToOpenStream",
          value: function pushValuesToOpenStream() {
            var stackedValues = this.getStackedValues();
            this.openDataStream.next(stackedValues);
          }
        }, {
          key: "getStackedValuesDataSource",
          value: function getStackedValuesDataSource() {
            var stackedValues = this.getStackedValues();
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(stackedValues).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["delay"])(3000));
          }
        }, {
          key: "getStackedValues",
          value: function getStackedValues() {
            var newUser = {
              first_name: 'Agustin',
              last_name: 'Nitsuga',
              avatar: './assets/images/user/person_1.jpg'
            }; // Get a random integer between 1 (and only 1) and 'max'

            var getRand = function getRand(max) {
              var min = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
              return Math.floor(Math.random() * max) + min;
            }; // Randomly send one, two or three users


            return Array(getRand(3)).fill(newUser);
          }
        }]);

        return ShowcaseService;
      }();
      /***/

    },

    /***/
    "6MMK":
    /*!********************************************!*\
      !*** ./src/app/roofing/roofing.service.ts ***!
      \********************************************/

    /*! exports provided: RoofingService */

    /***/
    function MMK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RoofingService", function () {
        return RoofingService;
      });
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common/http */
      "IheW");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _shell_data_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../shell/data-store */
      "f/Ol");
      /* harmony import */


      var _listing_roofing_listing_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./listing/roofing-listing.model */
      "NmiO");
      /* harmony import */


      var _details_roofing_details_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./details/roofing-details.model */
      "wCfV");

      var RoofingService = /*#__PURE__*/function () {
        function RoofingService(http) {
          _classCallCheck(this, RoofingService);

          this.http = http;
        }

        _createClass(RoofingService, [{
          key: "getListingDataSource",
          value: function getListingDataSource() {
            return this.http.get('./assets/data/roofing/listing.json').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (data) {
              // Note: HttpClient cannot know how to instantiate a class for the returned data
              // We need to properly cast types from json data
              var listing = new _listing_roofing_listing_model__WEBPACK_IMPORTED_MODULE_3__["RoofingListingModel"](); // The Object.assign() method copies all enumerable own properties from one or more source objects to a target object.
              // Note: If you have non-enummerable properties, you can try a spread operator instead. listing = {...data};
              // (see: https://scotch.io/bar-talk/copying-objects-in-javascript#toc-using-spread-elements-)

              Object.assign(listing, data);
              return listing;
            }));
          }
        }, {
          key: "getListingStore",
          value: function getListingStore(dataSource) {
            // Use cache if available
            if (!this.listingDataStore) {
              // Initialize the model specifying that it is a shell model
              var shellModel = new _listing_roofing_listing_model__WEBPACK_IMPORTED_MODULE_3__["RoofingListingModel"]();
              this.listingDataStore = new _shell_data_store__WEBPACK_IMPORTED_MODULE_2__["DataStore"](shellModel); // Trigger the loading mechanism (with shell) in the dataStore

              this.listingDataStore.load(dataSource);
            }

            return this.listingDataStore;
          }
        }, {
          key: "getDetailsDataSource",
          value: function getDetailsDataSource(slug) {
            return this.http.get('./assets/data/roofing/details.json').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["flatMap"])(function (details) {
              return details.items.filter(function (item) {
                return item.slug === slug;
              });
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (data) {
              // Note: HttpClient cannot know how to instantiate a class for the returned data
              // We need to properly cast types from json data
              var details = new _details_roofing_details_model__WEBPACK_IMPORTED_MODULE_4__["RoofingDetailsModel"](); // The Object.assign() method copies all enumerable own properties from one or more source objects to a target object.
              // Note: If you have non-enummerable properties, you can try a spread operator instead. details = {...data};
              // (see: https://scotch.io/bar-talk/copying-objects-in-javascript#toc-using-spread-elements-)

              Object.assign(details, data);
              return details;
            }));
          }
        }, {
          key: "getDetailsStore",
          value: function getDetailsStore(dataSource) {
            // Initialize the model specifying that it is a shell model
            var shellModel = new _details_roofing_details_model__WEBPACK_IMPORTED_MODULE_4__["RoofingDetailsModel"]();
            this.detailsDataStore = new _shell_data_store__WEBPACK_IMPORTED_MODULE_2__["DataStore"](shellModel); // Trigger the loading mechanism (with shell) in the dataStore

            this.detailsDataStore.load(dataSource);
            return this.detailsDataStore;
          }
        }]);

        return RoofingService;
      }();
      /***/

    },

    /***/
    "6i10":
    /*!***********************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-c78e170e.js ***!
      \***********************************************************************/

    /*! exports provided: S */

    /***/
    function i10(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "S", function () {
        return SPINNERS;
      });

      var spinners = {
        'bubbles': {
          dur: 1000,
          circles: 9,
          fn: function fn(dur, index, total) {
            var animationDelay = "".concat(dur * index / total - dur, "ms");
            var angle = 2 * Math.PI * index / total;
            return {
              r: 5,
              style: {
                'top': "".concat(9 * Math.sin(angle), "px"),
                'left': "".concat(9 * Math.cos(angle), "px"),
                'animation-delay': animationDelay
              }
            };
          }
        },
        'circles': {
          dur: 1000,
          circles: 8,
          fn: function fn(dur, index, total) {
            var step = index / total;
            var animationDelay = "".concat(dur * step - dur, "ms");
            var angle = 2 * Math.PI * step;
            return {
              r: 5,
              style: {
                'top': "".concat(9 * Math.sin(angle), "px"),
                'left': "".concat(9 * Math.cos(angle), "px"),
                'animation-delay': animationDelay
              }
            };
          }
        },
        'circular': {
          dur: 1400,
          elmDuration: true,
          circles: 1,
          fn: function fn() {
            return {
              r: 20,
              cx: 48,
              cy: 48,
              fill: 'none',
              viewBox: '24 24 48 48',
              transform: 'translate(0,0)',
              style: {}
            };
          }
        },
        'crescent': {
          dur: 750,
          circles: 1,
          fn: function fn() {
            return {
              r: 26,
              style: {}
            };
          }
        },
        'dots': {
          dur: 750,
          circles: 3,
          fn: function fn(_, index) {
            var animationDelay = -(110 * index) + 'ms';
            return {
              r: 6,
              style: {
                'left': "".concat(9 - 9 * index, "px"),
                'animation-delay': animationDelay
              }
            };
          }
        },
        'lines': {
          dur: 1000,
          lines: 12,
          fn: function fn(dur, index, total) {
            var transform = "rotate(".concat(30 * index + (index < 6 ? 180 : -180), "deg)");
            var animationDelay = "".concat(dur * index / total - dur, "ms");
            return {
              y1: 17,
              y2: 29,
              style: {
                'transform': transform,
                'animation-delay': animationDelay
              }
            };
          }
        },
        'lines-small': {
          dur: 1000,
          lines: 12,
          fn: function fn(dur, index, total) {
            var transform = "rotate(".concat(30 * index + (index < 6 ? 180 : -180), "deg)");
            var animationDelay = "".concat(dur * index / total - dur, "ms");
            return {
              y1: 12,
              y2: 20,
              style: {
                'transform': transform,
                'animation-delay': animationDelay
              }
            };
          }
        }
      };
      var SPINNERS = spinners;
      /***/
    },

    /***/
    "7d5M":
    /*!****************************************************!*\
      !*** ./src/app/user/friends/user-friends.model.ts ***!
      \****************************************************/

    /*! exports provided: UserFriendsModel */

    /***/
    function d5M(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserFriendsModel", function () {
        return UserFriendsModel;
      });
      /* harmony import */


      var _shell_data_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../shell/data-store */
      "f/Ol");

      var UserFriendsModel = /*#__PURE__*/function (_shell_data_store__WE3) {
        _inherits(UserFriendsModel, _shell_data_store__WE3);

        var _super3 = _createSuper(UserFriendsModel);

        function UserFriendsModel() {
          var _this5;

          _classCallCheck(this, UserFriendsModel);

          _this5 = _super3.call(this);
          _this5.friends = [{
            image: '',
            name: '',
            job: '',
            followers: '',
            followings: '',
            following: false
          }, {
            image: '',
            name: '',
            job: '',
            followers: '',
            followings: '',
            following: true
          }, {
            image: '',
            name: '',
            job: '',
            followers: '',
            followings: '',
            following: false
          }, {
            image: '',
            name: '',
            job: '',
            followers: '',
            followings: '',
            following: false
          }];
          _this5.followers = [{
            image: '',
            name: '',
            job: '',
            followers: '',
            followings: '',
            following: false
          }, {
            image: '',
            name: '',
            job: '',
            followers: '',
            followings: '',
            following: false
          }, {
            image: '',
            name: '',
            job: '',
            followers: '',
            followings: '',
            following: false
          }, {
            image: '',
            name: '',
            job: '',
            followers: '',
            followings: '',
            following: true
          }];
          _this5.following = [{
            image: '',
            name: '',
            job: '',
            followers: '',
            followings: '',
            following: false
          }, {
            image: '',
            name: '',
            job: '',
            followers: '',
            followings: '',
            following: false
          }, {
            image: '',
            name: '',
            job: '',
            followers: '',
            followings: '',
            following: false
          }, {
            image: '',
            name: '',
            job: '',
            followers: '',
            followings: '',
            following: false
          }];
          return _this5;
        }

        return UserFriendsModel;
      }(_shell_data_store__WEBPACK_IMPORTED_MODULE_0__["ShellModel"]);
      /***/

    },

    /***/
    "8zxt":
    /*!********************************************************!*\
      !*** ./src/app/travel/listing/travel-listing.model.ts ***!
      \********************************************************/

    /*! exports provided: TravelItemModel, TravelListingModel */

    /***/
    function zxt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TravelItemModel", function () {
        return TravelItemModel;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TravelListingModel", function () {
        return TravelListingModel;
      });
      /* harmony import */


      var _shell_data_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../shell/data-store */
      "f/Ol");

      var TravelItemModel = function TravelItemModel() {
        _classCallCheck(this, TravelItemModel);
      };

      var TravelListingModel = /*#__PURE__*/function (_shell_data_store__WE4) {
        _inherits(TravelListingModel, _shell_data_store__WE4);

        var _super4 = _createSuper(TravelListingModel);

        function TravelListingModel() {
          var _this6;

          _classCallCheck(this, TravelListingModel);

          _this6 = _super4.call(this);
          _this6.items = [new TravelItemModel(), new TravelItemModel(), new TravelItemModel(), new TravelItemModel()];
          return _this6;
        }

        return TravelListingModel;
      }(_shell_data_store__WEBPACK_IMPORTED_MODULE_0__["ShellModel"]);
      /***/

    },

    /***/
    "CpCY":
    /*!*********************************************************************!*\
      !*** ./src/app/terms-of-service/terms-of-service.page.ngfactory.js ***!
      \*********************************************************************/

    /*! exports provided: RenderType_TermsOfServicePage, View_TermsOfServicePage_0, View_TermsOfServicePage_Host_0, TermsOfServicePageNgFactory */

    /***/
    function CpCY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RenderType_TermsOfServicePage", function () {
        return RenderType_TermsOfServicePage;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_TermsOfServicePage_0", function () {
        return View_TermsOfServicePage_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_TermsOfServicePage_Host_0", function () {
        return View_TermsOfServicePage_Host_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TermsOfServicePageNgFactory", function () {
        return TermsOfServicePageNgFactory;
      });
      /* harmony import */


      var _styles_terms_of_service_page_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./styles/terms-of-service.page.scss.shim.ngstyle */
      "07p5");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../node_modules/@ionic/angular/ionic-angular.ngfactory */
      "MKJQ");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "sZkV");
      /* harmony import */


      var _terms_of_service_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./terms-of-service.page */
      "XXTH");
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var styles_TermsOfServicePage = [_styles_terms_of_service_page_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

      var RenderType_TermsOfServicePage = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
        encapsulation: 0,
        styles: styles_TermsOfServicePage,
        data: {}
      });

      function View_TermsOfServicePage_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 11, "ion-header", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonHeader_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonHeader"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonHeader"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, 0, 9, "ion-toolbar", [["color", "primary"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonToolbar_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonToolbar"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonToolbar"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], {
          color: [0, "color"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, 0, 4, "ion-buttons", [["slot", "end"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonButtons_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonButtons"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonButtons"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, 0, 2, "ion-button", [], null, [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.dismiss() !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonButton_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["Close"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, 0, 2, "ion-title", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonTitle_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonTitle"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonTitle"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, [" Terms Of Service "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 13, "ion-content", [["class", "legal-content"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonContent_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonContent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonContent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, 0, 1, "h3", [["class", "legal-title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Welcome to Ionic 5 Demo App"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, 0, 1, "p", [["class", "legal-text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, 0, 1, "h3", [["class", "legal-title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Using our services"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 0, null, 0, 1, "p", [["class", "legal-text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](22, 0, null, 0, 1, "h3", [["class", "legal-title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["About these terms"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](24, 0, null, 0, 1, "p", [["class", "legal-text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc. "]))], function (_ck, _v) {
          var currVal_0 = "primary";

          _ck(_v, 3, 0, currVal_0);
        }, null);
      }

      function View_TermsOfServicePage_Host_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-terms-of-service-page", [], null, null, null, View_TermsOfServicePage_0, RenderType_TermsOfServicePage)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _terms_of_service_page__WEBPACK_IMPORTED_MODULE_4__["TermsOfServicePage"], [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]], null, null)], null, null);
      }

      var TermsOfServicePageNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-terms-of-service-page", _terms_of_service_page__WEBPACK_IMPORTED_MODULE_4__["TermsOfServicePage"], View_TermsOfServicePage_Host_0, {}, {}, []);
      /***/

    },

    /***/
    "FUeK":
    /*!******************************************************************!*\
      !*** ./src/app/real-estate/listing/real-estate-listing.model.ts ***!
      \******************************************************************/

    /*! exports provided: RealEstateItemModel, RealEstateListingModel */

    /***/
    function FUeK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RealEstateItemModel", function () {
        return RealEstateItemModel;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RealEstateListingModel", function () {
        return RealEstateListingModel;
      });
      /* harmony import */


      var _shell_data_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../shell/data-store */
      "f/Ol");

      var RealEstateItemModel = function RealEstateItemModel() {
        _classCallCheck(this, RealEstateItemModel);

        this.amenities = [{
          name: '',
          icon: ''
        }, {
          name: '',
          icon: ''
        }];
      };

      var RealEstateListingModel = /*#__PURE__*/function (_shell_data_store__WE5) {
        _inherits(RealEstateListingModel, _shell_data_store__WE5);

        var _super5 = _createSuper(RealEstateListingModel);

        function RealEstateListingModel() {
          var _this7;

          _classCallCheck(this, RealEstateListingModel);

          _this7 = _super5.call(this);
          _this7.items = [new RealEstateItemModel(), new RealEstateItemModel(), new RealEstateItemModel(), new RealEstateItemModel()];
          return _this7;
        }

        return RealEstateListingModel;
      }(_shell_data_store__WEBPACK_IMPORTED_MODULE_0__["ShellModel"]);
      /***/

    },

    /***/
    "GBb9":
    /*!******************************************************************!*\
      !*** ./src/app/real-estate/details/real-estate-details.model.ts ***!
      \******************************************************************/

    /*! exports provided: RealEstateDetailsModel */

    /***/
    function GBb9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RealEstateDetailsModel", function () {
        return RealEstateDetailsModel;
      });
      /* harmony import */


      var _shell_data_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../shell/data-store */
      "f/Ol");

      var RealEstateDetailsModel = /*#__PURE__*/function (_shell_data_store__WE6) {
        _inherits(RealEstateDetailsModel, _shell_data_store__WE6);

        var _super6 = _createSuper(RealEstateDetailsModel);

        function RealEstateDetailsModel() {
          var _this8;

          _classCallCheck(this, RealEstateDetailsModel);

          _this8 = _super6.call(this);
          _this8.amenities = [{
            name: '',
            icon: ''
          }, {
            name: '',
            icon: ''
          }, {
            name: '',
            icon: ''
          }, {
            name: '',
            icon: ''
          }, {
            name: '',
            icon: ''
          }, {
            name: '',
            icon: ''
          }];
          return _this8;
        }

        return RealEstateDetailsModel;
      }(_shell_data_store__WEBPACK_IMPORTED_MODULE_0__["ShellModel"]);
      /***/

    },

    /***/
    "IoD4":
    /*!****************************************************!*\
      !*** ./src/app/wood/details/wood-details.model.ts ***!
      \****************************************************/

    /*! exports provided: woodDetailsModel */

    /***/
    function IoD4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "woodDetailsModel", function () {
        return woodDetailsModel;
      });
      /* harmony import */


      var _shell_data_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../shell/data-store */
      "f/Ol");

      var woodDetailsModel = /*#__PURE__*/function (_shell_data_store__WE7) {
        _inherits(woodDetailsModel, _shell_data_store__WE7);

        var _super7 = _createSuper(woodDetailsModel);

        function woodDetailsModel() {
          var _this9;

          _classCallCheck(this, woodDetailsModel);

          _this9 = _super7.call(this);
          _this9.ratings = [{
            concept: '',
            rate: null
          }, {
            concept: '',
            rate: null
          }, {
            concept: '',
            rate: null
          }];
          _this9.openHours = [{
            day: '',
            open: true,
            hourFrom: '',
            hourTo: ''
          }, {
            day: '',
            open: true,
            hourFrom: '',
            hourTo: ''
          }, {
            day: '',
            open: false,
            hourFrom: '',
            hourTo: ''
          }];
          _this9.tags = ['', '', ''];
          _this9.usersPictures = ['', '', '', '', '', ''];
          _this9.popularDishes = [{
            name: '',
            rate: null,
            votesCount: null
          }, {
            name: '',
            rate: null,
            votesCount: null
          }];
          _this9.reviews = [{
            user: {
              image: '',
              name: '',
              reviewsCount: null,
              points: null
            },
            avgRating: null,
            ratings: [{
              concept: '',
              rate: null
            }, {
              concept: '',
              rate: null
            }, {
              concept: '',
              rate: null
            }],
            publishedAt: null,
            message: ''
          }, {
            user: {
              image: '',
              name: '',
              reviewsCount: null,
              points: null
            },
            avgRating: null,
            ratings: [{
              concept: '',
              rate: null
            }, {
              concept: '',
              rate: null
            }, {
              concept: '',
              rate: null
            }],
            publishedAt: null,
            message: ''
          }, {
            user: {
              image: '',
              name: '',
              reviewsCount: null,
              points: null
            },
            avgRating: null,
            ratings: [{
              concept: '',
              rate: null
            }, {
              concept: '',
              rate: null
            }, {
              concept: '',
              rate: null
            }],
            publishedAt: null,
            message: ''
          }];
          _this9.popularRecipes = [{
            showcaseImage: '',
            name: '',
            chef: {
              name: '',
              image: ''
            },
            difficulty: '',
            time: '',
            calories: '',
            chefExtract: ''
          }];
          return _this9;
        }

        return woodDetailsModel;
      }(_shell_data_store__WEBPACK_IMPORTED_MODULE_0__["ShellModel"]);
      /***/

    },

    /***/
    "K0As":
    /*!**************************************************************!*\
      !*** ./src/app/carpentry/details/carpentry-details.model.ts ***!
      \**************************************************************/

    /*! exports provided: CarpentryDetailsModel */

    /***/
    function K0As(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CarpentryDetailsModel", function () {
        return CarpentryDetailsModel;
      });
      /* harmony import */


      var _shell_data_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../shell/data-store */
      "f/Ol");

      var CarpentryDetailsModel = /*#__PURE__*/function (_shell_data_store__WE8) {
        _inherits(CarpentryDetailsModel, _shell_data_store__WE8);

        var _super8 = _createSuper(CarpentryDetailsModel);

        function CarpentryDetailsModel() {
          var _this10;

          _classCallCheck(this, CarpentryDetailsModel);

          _this10 = _super8.call(this);
          _this10.ratings = [{
            concept: '',
            rate: null
          }, {
            concept: '',
            rate: null
          }, {
            concept: '',
            rate: null
          }];
          _this10.openHours = [{
            day: '',
            open: true,
            hourFrom: '',
            hourTo: ''
          }, {
            day: '',
            open: true,
            hourFrom: '',
            hourTo: ''
          }, {
            day: '',
            open: false,
            hourFrom: '',
            hourTo: ''
          }];
          _this10.tags = ['', '', ''];
          _this10.usersPictures = ['', '', '', '', '', ''];
          _this10.popularDishes = [{
            name: '',
            rate: null,
            votesCount: null
          }, {
            name: '',
            rate: null,
            votesCount: null
          }];
          _this10.reviews = [{
            user: {
              image: '',
              name: '',
              reviewsCount: null,
              points: null
            },
            avgRating: null,
            ratings: [{
              concept: '',
              rate: null
            }, {
              concept: '',
              rate: null
            }, {
              concept: '',
              rate: null
            }],
            publishedAt: null,
            message: ''
          }, {
            user: {
              image: '',
              name: '',
              reviewsCount: null,
              points: null
            },
            avgRating: null,
            ratings: [{
              concept: '',
              rate: null
            }, {
              concept: '',
              rate: null
            }, {
              concept: '',
              rate: null
            }],
            publishedAt: null,
            message: ''
          }, {
            user: {
              image: '',
              name: '',
              reviewsCount: null,
              points: null
            },
            avgRating: null,
            ratings: [{
              concept: '',
              rate: null
            }, {
              concept: '',
              rate: null
            }, {
              concept: '',
              rate: null
            }],
            publishedAt: null,
            message: ''
          }];
          _this10.popularRecipes = [{
            showcaseImage: '',
            name: '',
            chef: {
              name: '',
              image: ''
            },
            difficulty: '',
            time: '',
            calories: '',
            chefExtract: ''
          }];
          return _this10;
        }

        return CarpentryDetailsModel;
      }(_shell_data_store__WEBPACK_IMPORTED_MODULE_0__["ShellModel"]);
      /***/

    },

    /***/
    "Kp0C":
    /*!************************************************************!*\
      !*** ./src/app/painting/details/painting-details.model.ts ***!
      \************************************************************/

    /*! exports provided: PaintingDetailsModel */

    /***/
    function Kp0C(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaintingDetailsModel", function () {
        return PaintingDetailsModel;
      });
      /* harmony import */


      var _shell_data_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../shell/data-store */
      "f/Ol");

      var PaintingDetailsModel = /*#__PURE__*/function (_shell_data_store__WE9) {
        _inherits(PaintingDetailsModel, _shell_data_store__WE9);

        var _super9 = _createSuper(PaintingDetailsModel);

        function PaintingDetailsModel() {
          var _this11;

          _classCallCheck(this, PaintingDetailsModel);

          _this11 = _super9.call(this);
          _this11.ratings = [{
            concept: '',
            rate: null
          }, {
            concept: '',
            rate: null
          }, {
            concept: '',
            rate: null
          }];
          _this11.openHours = [{
            day: '',
            open: true,
            hourFrom: '',
            hourTo: ''
          }, {
            day: '',
            open: true,
            hourFrom: '',
            hourTo: ''
          }, {
            day: '',
            open: false,
            hourFrom: '',
            hourTo: ''
          }];
          _this11.tags = ['', '', ''];
          _this11.usersPictures = ['', '', '', '', '', ''];
          _this11.popularDishes = [{
            name: '',
            rate: null,
            votesCount: null
          }, {
            name: '',
            rate: null,
            votesCount: null
          }];
          _this11.reviews = [{
            user: {
              image: '',
              name: '',
              reviewsCount: null,
              points: null
            },
            avgRating: null,
            ratings: [{
              concept: '',
              rate: null
            }, {
              concept: '',
              rate: null
            }, {
              concept: '',
              rate: null
            }],
            publishedAt: null,
            message: ''
          }, {
            user: {
              image: '',
              name: '',
              reviewsCount: null,
              points: null
            },
            avgRating: null,
            ratings: [{
              concept: '',
              rate: null
            }, {
              concept: '',
              rate: null
            }, {
              concept: '',
              rate: null
            }],
            publishedAt: null,
            message: ''
          }, {
            user: {
              image: '',
              name: '',
              reviewsCount: null,
              points: null
            },
            avgRating: null,
            ratings: [{
              concept: '',
              rate: null
            }, {
              concept: '',
              rate: null
            }, {
              concept: '',
              rate: null
            }],
            publishedAt: null,
            message: ''
          }];
          _this11.popularRecipes = [{
            showcaseImage: '',
            name: '',
            chef: {
              name: '',
              image: ''
            },
            difficulty: '',
            time: '',
            calories: '',
            chefExtract: ''
          }];
          return _this11;
        }

        return PaintingDetailsModel;
      }(_shell_data_store__WEBPACK_IMPORTED_MODULE_0__["ShellModel"]);
      /***/

    },

    /***/
    "KwJk":
    /*!*************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/theme-c2dc54d9.js ***!
      \*************************************************************/

    /*! exports provided: c, g, h, o */

    /***/
    function KwJk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "c", function () {
        return createColorClasses;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "g", function () {
        return getClassMap;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "h", function () {
        return hostContext;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "o", function () {
        return openURL;
      });

      var hostContext = function hostContext(selector, el) {
        return el.closest(selector) !== null;
      };
      /**
       * Create the mode and color classes for the component based on the classes passed in
       */


      var createColorClasses = function createColorClasses(color) {
        return typeof color === 'string' && color.length > 0 ? _defineProperty({
          'ion-color': true
        }, "ion-color-".concat(color), true) : undefined;
      };

      var getClassList = function getClassList(classes) {
        if (classes !== undefined) {
          var array = Array.isArray(classes) ? classes : classes.split(' ');
          return array.filter(function (c) {
            return c != null;
          }).map(function (c) {
            return c.trim();
          }).filter(function (c) {
            return c !== '';
          });
        }

        return [];
      };

      var getClassMap = function getClassMap(classes) {
        var map = {};
        getClassList(classes).forEach(function (c) {
          return map[c] = true;
        });
        return map;
      };

      var SCHEME = /^[a-z][a-z0-9+\-.]*:/;

      var openURL = /*#__PURE__*/function () {
        var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(url, ev, direction) {
          var router;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  if (!(url != null && url[0] !== '#' && !SCHEME.test(url))) {
                    _context.next = 5;
                    break;
                  }

                  router = document.querySelector('ion-router');

                  if (!router) {
                    _context.next = 5;
                    break;
                  }

                  if (ev != null) {
                    ev.preventDefault();
                  }

                  return _context.abrupt("return", router.push(url, direction));

                case 5:
                  return _context.abrupt("return", false);

                case 6:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        return function openURL(_x, _x2, _x3) {
          return _ref4.apply(this, arguments);
        };
      }();
      /***/

    },

    /***/
    "NmiO":
    /*!**********************************************************!*\
      !*** ./src/app/roofing/listing/roofing-listing.model.ts ***!
      \**********************************************************/

    /*! exports provided: RoofingItemModel, RoofingListingModel */

    /***/
    function NmiO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RoofingItemModel", function () {
        return RoofingItemModel;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RoofingListingModel", function () {
        return RoofingListingModel;
      });
      /* harmony import */


      var _shell_data_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../shell/data-store */
      "f/Ol");

      var RoofingItemModel = function RoofingItemModel() {
        _classCallCheck(this, RoofingItemModel);

        this.tags = ['', '', ''];
        this.pictures = ['', '', '', '', ''];
      };

      var RoofingListingModel = /*#__PURE__*/function (_shell_data_store__WE10) {
        _inherits(RoofingListingModel, _shell_data_store__WE10);

        var _super10 = _createSuper(RoofingListingModel);

        function RoofingListingModel() {
          var _this12;

          _classCallCheck(this, RoofingListingModel);

          _this12 = _super10.call(this);
          _this12.items = [new RoofingItemModel(), new RoofingItemModel(), new RoofingItemModel(), new RoofingItemModel()];
          return _this12;
        }

        return RoofingListingModel;
      }(_shell_data_store__WEBPACK_IMPORTED_MODULE_0__["ShellModel"]);
      /***/

    },

    /***/
    "NqGI":
    /*!**************************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-d1eb6504.js ***!
      \**************************************************************************/

    /*! exports provided: a, d */

    /***/
    function NqGI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "a", function () {
        return attachComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "d", function () {
        return detachComponent;
      });

      var attachComponent = /*#__PURE__*/function () {
        var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(delegate, container, component, cssClasses, componentProps) {
          var el;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  if (!delegate) {
                    _context2.next = 2;
                    break;
                  }

                  return _context2.abrupt("return", delegate.attachViewToDom(container, component, componentProps, cssClasses));

                case 2:
                  if (!(typeof component !== 'string' && !(component instanceof HTMLElement))) {
                    _context2.next = 4;
                    break;
                  }

                  throw new Error('framework delegate is missing');

                case 4:
                  el = typeof component === 'string' ? container.ownerDocument && container.ownerDocument.createElement(component) : component;

                  if (cssClasses) {
                    cssClasses.forEach(function (c) {
                      return el.classList.add(c);
                    });
                  }

                  if (componentProps) {
                    Object.assign(el, componentProps);
                  }

                  container.appendChild(el);

                  if (!el.componentOnReady) {
                    _context2.next = 11;
                    break;
                  }

                  _context2.next = 11;
                  return el.componentOnReady();

                case 11:
                  return _context2.abrupt("return", el);

                case 12:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2);
        }));

        return function attachComponent(_x4, _x5, _x6, _x7, _x8) {
          return _ref5.apply(this, arguments);
        };
      }();

      var detachComponent = function detachComponent(delegate, element) {
        if (element) {
          if (delegate) {
            var container = element.parentElement;
            return delegate.removeViewFromDom(container, element);
          }

          element.remove();
        }

        return Promise.resolve();
      };
      /***/

    },

    /***/
    "OsGW":
    /*!**************************************************!*\
      !*** ./src/app/electrical/electrical.service.ts ***!
      \**************************************************/

    /*! exports provided: ElectricalService */

    /***/
    function OsGW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ElectricalService", function () {
        return ElectricalService;
      });
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common/http */
      "IheW");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _shell_data_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../shell/data-store */
      "f/Ol");
      /* harmony import */


      var _listing_electrical_listing_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./listing/electrical-listing.model */
      "hQLp");
      /* harmony import */


      var _details_electrical_details_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./details/electrical-details.model */
      "evBP");

      var ElectricalService = /*#__PURE__*/function () {
        function ElectricalService(http) {
          _classCallCheck(this, ElectricalService);

          this.http = http;
        }

        _createClass(ElectricalService, [{
          key: "getListingDataSource",
          value: function getListingDataSource() {
            return this.http.get('./assets/data/electrical/listing.json').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (data) {
              // Note: HttpClient cannot know how to instantiate a class for the returned data
              // We need to properly cast types from json data
              var listing = new _listing_electrical_listing_model__WEBPACK_IMPORTED_MODULE_3__["ElectricalListingModel"](); // The Object.assign() method copies all enumerable own properties from one or more source objects to a target object.
              // Note: If you have non-enummerable properties, you can try a spread operator instead. listing = {...data};
              // (see: https://scotch.io/bar-talk/copying-objects-in-javascript#toc-using-spread-elements-)

              Object.assign(listing, data);
              return listing;
            }));
          }
        }, {
          key: "getListingStore",
          value: function getListingStore(dataSource) {
            // Use cache if available
            if (!this.listingDataStore) {
              // Initialize the model specifying that it is a shell model
              var shellModel = new _listing_electrical_listing_model__WEBPACK_IMPORTED_MODULE_3__["ElectricalListingModel"]();
              this.listingDataStore = new _shell_data_store__WEBPACK_IMPORTED_MODULE_2__["DataStore"](shellModel); // Trigger the loading mechanism (with shell) in the dataStore

              this.listingDataStore.load(dataSource);
            }

            return this.listingDataStore;
          }
        }, {
          key: "getDetailsDataSource",
          value: function getDetailsDataSource(slug) {
            return this.http.get('./assets/data/electrical/details.json').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["flatMap"])(function (details) {
              return details.items.filter(function (item) {
                return item.slug === slug;
              });
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (data) {
              // Note: HttpClient cannot know how to instantiate a class for the returned data
              // We need to properly cast types from json data
              var details = new _details_electrical_details_model__WEBPACK_IMPORTED_MODULE_4__["ElectricalDetailsModel"](); // The Object.assign() method copies all enumerable own properties from one or more source objects to a target object.
              // Note: If you have non-enummerable properties, you can try a spread operator instead. details = {...data};
              // (see: https://scotch.io/bar-talk/copying-objects-in-javascript#toc-using-spread-elements-)

              Object.assign(details, data);
              return details;
            }));
          }
        }, {
          key: "getDetailsStore",
          value: function getDetailsStore(dataSource) {
            // Initialize the model specifying that it is a shell model
            var shellModel = new _details_electrical_details_model__WEBPACK_IMPORTED_MODULE_4__["ElectricalDetailsModel"]();
            this.detailsDataStore = new _shell_data_store__WEBPACK_IMPORTED_MODULE_2__["DataStore"](shellModel); // Trigger the loading mechanism (with shell) in the dataStore

            this.detailsDataStore.load(dataSource);
            return this.detailsDataStore;
          }
        }]);

        return ElectricalService;
      }();
      /***/

    },

    /***/
    "PdPT":
    /*!************************************************************!*\
      !*** ./src/app/painting/listing/painting-listing.model.ts ***!
      \************************************************************/

    /*! exports provided: PaintingItemModel, PaintingListingModel */

    /***/
    function PdPT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaintingItemModel", function () {
        return PaintingItemModel;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaintingListingModel", function () {
        return PaintingListingModel;
      });
      /* harmony import */


      var _shell_data_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../shell/data-store */
      "f/Ol");

      var PaintingItemModel = function PaintingItemModel() {
        _classCallCheck(this, PaintingItemModel);

        this.tags = ['', '', ''];
        this.pictures = ['', '', '', '', ''];
      };

      var PaintingListingModel = /*#__PURE__*/function (_shell_data_store__WE11) {
        _inherits(PaintingListingModel, _shell_data_store__WE11);

        var _super11 = _createSuper(PaintingListingModel);

        function PaintingListingModel() {
          var _this13;

          _classCallCheck(this, PaintingListingModel);

          _this13 = _super11.call(this);
          _this13.items = [new PaintingItemModel(), new PaintingItemModel(), new PaintingItemModel(), new PaintingItemModel()];
          return _this13;
        }

        return PaintingListingModel;
      }(_shell_data_store__WEBPACK_IMPORTED_MODULE_0__["ShellModel"]);
      /***/

    },

    /***/
    "QNWb":
    /*!************************************************************!*\
      !*** ./src/app/plumbing/listing/plumbing-listing.model.ts ***!
      \************************************************************/

    /*! exports provided: plumbingItemModel, plumbingListingModel */

    /***/
    function QNWb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "plumbingItemModel", function () {
        return plumbingItemModel;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "plumbingListingModel", function () {
        return plumbingListingModel;
      });
      /* harmony import */


      var _shell_data_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../shell/data-store */
      "f/Ol");

      var plumbingItemModel = function plumbingItemModel() {
        _classCallCheck(this, plumbingItemModel);

        this.tags = ['', '', ''];
        this.pictures = ['', '', '', '', ''];
      };

      var plumbingListingModel = /*#__PURE__*/function (_shell_data_store__WE12) {
        _inherits(plumbingListingModel, _shell_data_store__WE12);

        var _super12 = _createSuper(plumbingListingModel);

        function plumbingListingModel() {
          var _this14;

          _classCallCheck(this, plumbingListingModel);

          _this14 = _super12.call(this);
          _this14.items = [new plumbingItemModel(), new plumbingItemModel(), new plumbingItemModel(), new plumbingItemModel()];
          return _this14;
        }

        return plumbingListingModel;
      }(_shell_data_store__WEBPACK_IMPORTED_MODULE_0__["ShellModel"]);
      /***/

    },

    /***/
    "SQnO":
    /*!******************************************************!*\
      !*** ./src/app/deals/listing/deals-listing.model.ts ***!
      \******************************************************/

    /*! exports provided: DealsItemModel, DealsListingModel */

    /***/
    function SQnO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DealsItemModel", function () {
        return DealsItemModel;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DealsListingModel", function () {
        return DealsListingModel;
      });
      /* harmony import */


      var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! dayjs */
      "Wgwc");
      /* harmony import */


      var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var _shell_data_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../shell/data-store */
      "f/Ol");

      var DealsItemModel = function DealsItemModel() {
        _classCallCheck(this, DealsItemModel);

        // Default mock value
        // expirationDate = '12/01/2018';
        this.expirationDate = dayjs__WEBPACK_IMPORTED_MODULE_0__().add(5, 'day').format('MM/DD/YYYY HH:mm:ss');
      };

      var DealsListingModel = /*#__PURE__*/function (_shell_data_store__WE13) {
        _inherits(DealsListingModel, _shell_data_store__WE13);

        var _super13 = _createSuper(DealsListingModel);

        function DealsListingModel() {
          var _this15;

          _classCallCheck(this, DealsListingModel);

          _this15 = _super13.call(this);
          _this15.items = [new DealsItemModel(), new DealsItemModel(), new DealsItemModel(), new DealsItemModel()];
          return _this15;
        }

        return DealsListingModel;
      }(_shell_data_store__WEBPACK_IMPORTED_MODULE_1__["ShellModel"]);
      /***/

    },

    /***/
    "UG6G":
    /*!******************************************************!*\
      !*** ./src/app/deals/details/deals-details.model.ts ***!
      \******************************************************/

    /*! exports provided: DealsDetailsModel */

    /***/
    function UG6G(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DealsDetailsModel", function () {
        return DealsDetailsModel;
      });
      /* harmony import */


      var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! dayjs */
      "Wgwc");
      /* harmony import */


      var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var _shell_data_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../shell/data-store */
      "f/Ol");

      var DealsDetailsModel = /*#__PURE__*/function (_shell_data_store__WE14) {
        _inherits(DealsDetailsModel, _shell_data_store__WE14);

        var _super14 = _createSuper(DealsDetailsModel);

        function DealsDetailsModel() {
          var _this16;

          _classCallCheck(this, DealsDetailsModel);

          _this16 = _super14.call(this);
          _this16.showcaseImages = ['', '', '']; // Default mock value
          // expirationDate = '03/03/2019';

          _this16.expirationDate = dayjs__WEBPACK_IMPORTED_MODULE_0__().add(5, 'day').format('MM/DD/YYYY HH:mm:ss');
          _this16.relatedDeals = [{
            logo: '',
            name: '',
            description: ''
          }, {
            logo: '',
            name: '',
            description: ''
          }, {
            logo: '',
            name: '',
            description: ''
          }];
          return _this16;
        }

        return DealsDetailsModel;
      }(_shell_data_store__WEBPACK_IMPORTED_MODULE_1__["ShellModel"]);
      /***/

    },

    /***/
    "UQC2":
    /*!******************************************************!*\
      !*** ./src/app/brick/listing/brick-listing.model.ts ***!
      \******************************************************/

    /*! exports provided: BrickItemModel, BrickListingModel */

    /***/
    function UQC2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BrickItemModel", function () {
        return BrickItemModel;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BrickListingModel", function () {
        return BrickListingModel;
      });
      /* harmony import */


      var _shell_data_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../shell/data-store */
      "f/Ol");

      var BrickItemModel = function BrickItemModel() {
        _classCallCheck(this, BrickItemModel);

        this.tags = ['', '', ''];
        this.pictures = ['', '', '', '', ''];
      };

      var BrickListingModel = /*#__PURE__*/function (_shell_data_store__WE15) {
        _inherits(BrickListingModel, _shell_data_store__WE15);

        var _super15 = _createSuper(BrickListingModel);

        function BrickListingModel() {
          var _this17;

          _classCallCheck(this, BrickListingModel);

          _this17 = _super15.call(this);
          _this17.items = [new BrickItemModel(), new BrickItemModel(), new BrickItemModel(), new BrickItemModel()];
          return _this17;
        }

        return BrickListingModel;
      }(_shell_data_store__WEBPACK_IMPORTED_MODULE_0__["ShellModel"]);
      /***/

    },

    /***/
    "VGjC":
    /*!**************************************!*\
      !*** ./src/app/user/user.service.ts ***!
      \**************************************/

    /*! exports provided: UserService */

    /***/
    function VGjC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserService", function () {
        return UserService;
      });
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common/http */
      "IheW");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _shell_data_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../shell/data-store */
      "f/Ol");
      /* harmony import */


      var _profile_user_profile_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./profile/user-profile.model */
      "/OzF");
      /* harmony import */


      var _friends_user_friends_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./friends/user-friends.model */
      "7d5M");

      var UserService = /*#__PURE__*/function () {
        function UserService(http) {
          _classCallCheck(this, UserService);

          this.http = http;
        }

        _createClass(UserService, [{
          key: "getProfileDataSource",
          value: function getProfileDataSource() {
            return this.http.get('./assets/data/user/user-profile.json').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (data) {
              // Note: HttpClient cannot know how to instantiate a class for the returned data
              // We need to properly cast types from json data
              var profile = new _profile_user_profile_model__WEBPACK_IMPORTED_MODULE_3__["UserProfileModel"](); // The Object.assign() method copies all enumerable own properties from one or more source objects to a target object.
              // Note: If you have non-enummerable properties, you can try a spread operator instead. profile = {...data};
              // (see: https://scotch.io/bar-talk/copying-objects-in-javascript#toc-using-spread-elements-)

              Object.assign(profile, data);
              return profile;
            }));
          }
        }, {
          key: "getProfileStore",
          value: function getProfileStore(dataSource) {
            // Use cache if available
            if (!this.profileDataStore) {
              // Initialize the model specifying that it is a shell model
              var shellModel = new _profile_user_profile_model__WEBPACK_IMPORTED_MODULE_3__["UserProfileModel"]();
              this.profileDataStore = new _shell_data_store__WEBPACK_IMPORTED_MODULE_2__["DataStore"](shellModel); // Trigger the loading mechanism (with shell) in the dataStore

              this.profileDataStore.load(dataSource);
            }

            return this.profileDataStore;
          }
        }, {
          key: "getFriendsDataSource",
          value: function getFriendsDataSource() {
            return this.http.get('./assets/data/user/user-friends.json').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (data) {
              // Note: HttpClient cannot know how to instantiate a class for the returned data
              // We need to properly cast types from json data
              var friends = new _friends_user_friends_model__WEBPACK_IMPORTED_MODULE_4__["UserFriendsModel"](); // The Object.assign() method copies all enumerable own properties from one or more source objects to a target object.
              // Note: If you have non-enummerable properties, you can try a spread operator instead. friends = {...data};
              // (see: https://scotch.io/bar-talk/copying-objects-in-javascript#toc-using-spread-elements-)

              Object.assign(friends, data);
              return friends;
            }));
          }
        }, {
          key: "getFriendsStore",
          value: function getFriendsStore(dataSource) {
            // Use cache if available
            if (!this.friendsDataStore) {
              // Initialize the model specifying that it is a shell model
              var shellModel = new _friends_user_friends_model__WEBPACK_IMPORTED_MODULE_4__["UserFriendsModel"]();
              this.friendsDataStore = new _shell_data_store__WEBPACK_IMPORTED_MODULE_2__["DataStore"](shellModel); // Trigger the loading mechanism (with shell) in the dataStore

              this.friendsDataStore.load(dataSource);
            }

            return this.friendsDataStore;
          }
        }]);

        return UserService;
      }();
      /***/

    },

    /***/
    "W6mW":
    /*!**********************************************************!*\
      !*** ./src/app/fashion/details/fashion-details.model.ts ***!
      \**********************************************************/

    /*! exports provided: FashionDetailsModel */

    /***/
    function W6mW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FashionDetailsModel", function () {
        return FashionDetailsModel;
      });
      /* harmony import */


      var _shell_data_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../shell/data-store */
      "f/Ol");

      var FashionDetailsModel = /*#__PURE__*/function (_shell_data_store__WE16) {
        _inherits(FashionDetailsModel, _shell_data_store__WE16);

        var _super16 = _createSuper(FashionDetailsModel);

        function FashionDetailsModel() {
          var _this18;

          _classCallCheck(this, FashionDetailsModel);

          _this18 = _super16.call(this);
          _this18.showcaseImages = [{
            type: '',
            source: ''
          }, {
            type: '',
            source: ''
          }, {
            type: '',
            source: ''
          }];
          _this18.colorVariants = [{
            name: '',
            value: '',
            "default": false
          }, {
            name: '',
            value: '',
            "default": false
          }, {
            name: '',
            value: '',
            "default": false
          }];
          _this18.sizeVariants = [{
            name: '',
            value: '',
            "default": false
          }, {
            name: '',
            value: '',
            "default": false
          }, {
            name: '',
            value: '',
            "default": false
          }];
          _this18.relatedProducts = [{
            id: null
          }, {
            id: null
          }];
          return _this18;
        }

        return FashionDetailsModel;
      }(_shell_data_store__WEBPACK_IMPORTED_MODULE_0__["ShellModel"]);
      /***/

    },

    /***/
    "XXTH":
    /*!***********************************************************!*\
      !*** ./src/app/terms-of-service/terms-of-service.page.ts ***!
      \***********************************************************/

    /*! exports provided: TermsOfServicePage */

    /***/
    function XXTH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TermsOfServicePage", function () {
        return TermsOfServicePage;
      });
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @ionic/angular */
      "sZkV");

      var TermsOfServicePage = /*#__PURE__*/function () {
        function TermsOfServicePage(modalController) {
          _classCallCheck(this, TermsOfServicePage);

          this.modalController = modalController;
        }

        _createClass(TermsOfServicePage, [{
          key: "dismiss",
          value: function dismiss() {
            this.modalController.dismiss();
          }
        }]);

        return TermsOfServicePage;
      }();
      /***/

    },

    /***/
    "bKs7":
    /*!************************************************************!*\
      !*** ./src/app/plumbing/details/plumbing-details.model.ts ***!
      \************************************************************/

    /*! exports provided: plumbingDetailsModel */

    /***/
    function bKs7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "plumbingDetailsModel", function () {
        return plumbingDetailsModel;
      });
      /* harmony import */


      var _shell_data_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../shell/data-store */
      "f/Ol");

      var plumbingDetailsModel = /*#__PURE__*/function (_shell_data_store__WE17) {
        _inherits(plumbingDetailsModel, _shell_data_store__WE17);

        var _super17 = _createSuper(plumbingDetailsModel);

        function plumbingDetailsModel() {
          var _this19;

          _classCallCheck(this, plumbingDetailsModel);

          _this19 = _super17.call(this);
          _this19.ratings = [{
            concept: '',
            rate: null
          }, {
            concept: '',
            rate: null
          }, {
            concept: '',
            rate: null
          }];
          _this19.openHours = [{
            day: '',
            open: true,
            hourFrom: '',
            hourTo: ''
          }, {
            day: '',
            open: true,
            hourFrom: '',
            hourTo: ''
          }, {
            day: '',
            open: false,
            hourFrom: '',
            hourTo: ''
          }];
          _this19.tags = ['', '', ''];
          _this19.usersPictures = ['', '', '', '', '', ''];
          _this19.popularDishes = [{
            name: '',
            rate: null,
            votesCount: null
          }, {
            name: '',
            rate: null,
            votesCount: null
          }];
          _this19.reviews = [{
            user: {
              image: '',
              name: '',
              reviewsCount: null,
              points: null
            },
            avgRating: null,
            ratings: [{
              concept: '',
              rate: null
            }, {
              concept: '',
              rate: null
            }, {
              concept: '',
              rate: null
            }],
            publishedAt: null,
            message: ''
          }, {
            user: {
              image: '',
              name: '',
              reviewsCount: null,
              points: null
            },
            avgRating: null,
            ratings: [{
              concept: '',
              rate: null
            }, {
              concept: '',
              rate: null
            }, {
              concept: '',
              rate: null
            }],
            publishedAt: null,
            message: ''
          }, {
            user: {
              image: '',
              name: '',
              reviewsCount: null,
              points: null
            },
            avgRating: null,
            ratings: [{
              concept: '',
              rate: null
            }, {
              concept: '',
              rate: null
            }, {
              concept: '',
              rate: null
            }],
            publishedAt: null,
            message: ''
          }];
          _this19.popularRecipes = [{
            showcaseImage: '',
            name: '',
            chef: {
              name: '',
              image: ''
            },
            difficulty: '',
            time: '',
            calories: '',
            chefExtract: ''
          }];
          return _this19;
        }

        return plumbingDetailsModel;
      }(_shell_data_store__WEBPACK_IMPORTED_MODULE_0__["ShellModel"]);
      /***/

    },

    /***/
    "dgp+":
    /*!********************************************************!*\
      !*** ./src/app/travel/details/travel-details.model.ts ***!
      \********************************************************/

    /*! exports provided: TravelDetailsModel */

    /***/
    function dgp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TravelDetailsModel", function () {
        return TravelDetailsModel;
      });
      /* harmony import */


      var _shell_data_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../shell/data-store */
      "f/Ol");

      var TravelDetailsModel = /*#__PURE__*/function (_shell_data_store__WE18) {
        _inherits(TravelDetailsModel, _shell_data_store__WE18);

        var _super18 = _createSuper(TravelDetailsModel);

        function TravelDetailsModel() {
          var _this20;

          _classCallCheck(this, TravelDetailsModel);

          _this20 = _super18.call(this);
          _this20.tags = new Array(3).fill('');
          _this20.openHours = [{
            day: '',
            open: true,
            hourFrom: '',
            hourTo: ''
          }, {
            day: '',
            open: true,
            hourFrom: '',
            hourTo: ''
          }, {
            day: '',
            open: false,
            hourFrom: '',
            hourTo: ''
          }];
          _this20.whereToStay = [{
            picture: '',
            name: '',
            rating: null
          }, {
            picture: '',
            name: '',
            rating: null
          }, {
            picture: '',
            name: '',
            rating: null
          }];
          _this20.whereToEat = [{
            picture: '',
            name: '',
            rating: null
          }, {
            picture: '',
            name: '',
            rating: null
          }, {
            picture: '',
            name: '',
            rating: null
          }];
          _this20.relatedActivities = [{
            picture: '',
            name: '',
            category: '',
            rating: null
          }, {
            picture: '',
            name: '',
            category: '',
            rating: null
          }];
          return _this20;
        }

        return TravelDetailsModel;
      }(_shell_data_store__WEBPACK_IMPORTED_MODULE_0__["ShellModel"]);
      /***/

    },

    /***/
    "evBP":
    /*!****************************************************************!*\
      !*** ./src/app/electrical/details/electrical-details.model.ts ***!
      \****************************************************************/

    /*! exports provided: ElectricalDetailsModel */

    /***/
    function evBP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ElectricalDetailsModel", function () {
        return ElectricalDetailsModel;
      });
      /* harmony import */


      var _shell_data_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../shell/data-store */
      "f/Ol");

      var ElectricalDetailsModel = /*#__PURE__*/function (_shell_data_store__WE19) {
        _inherits(ElectricalDetailsModel, _shell_data_store__WE19);

        var _super19 = _createSuper(ElectricalDetailsModel);

        function ElectricalDetailsModel() {
          var _this21;

          _classCallCheck(this, ElectricalDetailsModel);

          _this21 = _super19.call(this);
          _this21.ratings = [{
            concept: '',
            rate: null
          }, {
            concept: '',
            rate: null
          }, {
            concept: '',
            rate: null
          }];
          _this21.openHours = [{
            day: '',
            open: true,
            hourFrom: '',
            hourTo: ''
          }, {
            day: '',
            open: true,
            hourFrom: '',
            hourTo: ''
          }, {
            day: '',
            open: false,
            hourFrom: '',
            hourTo: ''
          }];
          _this21.tags = ['', '', ''];
          _this21.usersPictures = ['', '', '', '', '', ''];
          _this21.popularDishes = [{
            name: '',
            rate: null,
            votesCount: null
          }, {
            name: '',
            rate: null,
            votesCount: null
          }];
          _this21.reviews = [{
            user: {
              image: '',
              name: '',
              reviewsCount: null,
              points: null
            },
            avgRating: null,
            ratings: [{
              concept: '',
              rate: null
            }, {
              concept: '',
              rate: null
            }, {
              concept: '',
              rate: null
            }],
            publishedAt: null,
            message: ''
          }, {
            user: {
              image: '',
              name: '',
              reviewsCount: null,
              points: null
            },
            avgRating: null,
            ratings: [{
              concept: '',
              rate: null
            }, {
              concept: '',
              rate: null
            }, {
              concept: '',
              rate: null
            }],
            publishedAt: null,
            message: ''
          }, {
            user: {
              image: '',
              name: '',
              reviewsCount: null,
              points: null
            },
            avgRating: null,
            ratings: [{
              concept: '',
              rate: null
            }, {
              concept: '',
              rate: null
            }, {
              concept: '',
              rate: null
            }],
            publishedAt: null,
            message: ''
          }];
          _this21.popularRecipes = [{
            showcaseImage: '',
            name: '',
            chef: {
              name: '',
              image: ''
            },
            difficulty: '',
            time: '',
            calories: '',
            chefExtract: ''
          }];
          return _this21;
        }

        return ElectricalDetailsModel;
      }(_shell_data_store__WEBPACK_IMPORTED_MODULE_0__["ShellModel"]);
      /***/

    },

    /***/
    "fLKo":
    /*!**************************************!*\
      !*** ./src/app/wood/wood.service.ts ***!
      \**************************************/

    /*! exports provided: woodService */

    /***/
    function fLKo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "woodService", function () {
        return woodService;
      });
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common/http */
      "IheW");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _shell_data_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../shell/data-store */
      "f/Ol");
      /* harmony import */


      var _listing_wood_listing_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./listing/wood-listing.model */
      "r4YO");
      /* harmony import */


      var _details_wood_details_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./details/wood-details.model */
      "IoD4");

      var woodService = /*#__PURE__*/function () {
        function woodService(http) {
          _classCallCheck(this, woodService);

          this.http = http;
        }

        _createClass(woodService, [{
          key: "getListingDataSource",
          value: function getListingDataSource() {
            return this.http.get('./assets/data/wood/listing.json').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (data) {
              // Note: HttpClient cannot know how to instantiate a class for the returned data
              // We need to properly cast types from json data
              var listing = new _listing_wood_listing_model__WEBPACK_IMPORTED_MODULE_3__["woodListingModel"](); // The Object.assign() method copies all enumerable own properties from one or more source objects to a target object.
              // Note: If you have non-enummerable properties, you can try a spread operator instead. listing = {...data};
              // (see: https://scotch.io/bar-talk/copying-objects-in-javascript#toc-using-spread-elements-)

              Object.assign(listing, data);
              return listing;
            }));
          }
        }, {
          key: "getListingStore",
          value: function getListingStore(dataSource) {
            // Use cache if available
            if (!this.listingDataStore) {
              // Initialize the model specifying that it is a shell model
              var shellModel = new _listing_wood_listing_model__WEBPACK_IMPORTED_MODULE_3__["woodListingModel"]();
              this.listingDataStore = new _shell_data_store__WEBPACK_IMPORTED_MODULE_2__["DataStore"](shellModel); // Trigger the loading mechanism (with shell) in the dataStore

              this.listingDataStore.load(dataSource);
            }

            return this.listingDataStore;
          }
        }, {
          key: "getDetailsDataSource",
          value: function getDetailsDataSource(slug) {
            return this.http.get('./assets/data/wood/details.json').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["flatMap"])(function (details) {
              return details.items.filter(function (item) {
                return item.slug === slug;
              });
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (data) {
              // Note: HttpClient cannot know how to instantiate a class for the returned data
              // We need to properly cast types from json data
              var details = new _details_wood_details_model__WEBPACK_IMPORTED_MODULE_4__["woodDetailsModel"](); // The Object.assign() method copies all enumerable own properties from one or more source objects to a target object.
              // Note: If you have non-enummerable properties, you can try a spread operator instead. details = {...data};
              // (see: https://scotch.io/bar-talk/copying-objects-in-javascript#toc-using-spread-elements-)

              Object.assign(details, data);
              return details;
            }));
          }
        }, {
          key: "getDetailsStore",
          value: function getDetailsStore(dataSource) {
            // Initialize the model specifying that it is a shell model
            var shellModel = new _details_wood_details_model__WEBPACK_IMPORTED_MODULE_4__["woodDetailsModel"]();
            this.detailsDataStore = new _shell_data_store__WEBPACK_IMPORTED_MODULE_2__["DataStore"](shellModel); // Trigger the loading mechanism (with shell) in the dataStore

            this.detailsDataStore.load(dataSource);
            return this.detailsDataStore;
          }
        }]);

        return woodService;
      }();
      /***/

    },

    /***/
    "fpyr":
    /*!***************************************************************************!*\
      !*** ./src/app/components/checkbox-wrapper/checkbox-wrapper.component.ts ***!
      \***************************************************************************/

    /*! exports provided: CheckboxWrapperComponent */

    /***/
    function fpyr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CheckboxWrapperComponent", function () {
        return CheckboxWrapperComponent;
      });
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @ionic/angular */
      "sZkV"); // Reference to the @ionic/angular Components List:
      // https://github.com/ionic-team/ionic/blob/master/angular/src/directives/proxies.ts


      var CheckboxWrapperComponent = /*#__PURE__*/function () {
        function CheckboxWrapperComponent() {
          _classCallCheck(this, CheckboxWrapperComponent);
        }

        _createClass(CheckboxWrapperComponent, [{
          key: "ngAfterContentInit",
          value: function ngAfterContentInit() {
            var _this22 = this;

            // ContentChild is set
            this.isChecked = this.checkbox.checked; // Subscribe to changes

            this.checkbox.ionChange.subscribe(function (changes) {
              _this22.isChecked = changes.detail.checked;
            });
          }
        }]);

        return CheckboxWrapperComponent;
      }();
      /***/

    },

    /***/
    "gQyH":
    /*!*********************************************************************************************!*\
      !*** ./src/app/components/checkbox-wrapper/checkbox-wrapper.component.scss.shim.ngstyle.js ***!
      \*********************************************************************************************/

    /*! exports provided: styles */

    /***/
    function gQyH(module, __webpack_exports__, __webpack_require__) {
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


      var styles = ["[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jaGVja2JveC13cmFwcGVyL2NoZWNrYm94LXdyYXBwZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NoZWNrYm94LXdyYXBwZXIvY2hlY2tib3gtd3JhcHBlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4iXX0= */"];
      /***/
    },

    /***/
    "hQLp":
    /*!****************************************************************!*\
      !*** ./src/app/electrical/listing/electrical-listing.model.ts ***!
      \****************************************************************/

    /*! exports provided: ElectricalItemModel, ElectricalListingModel */

    /***/
    function hQLp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ElectricalItemModel", function () {
        return ElectricalItemModel;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ElectricalListingModel", function () {
        return ElectricalListingModel;
      });
      /* harmony import */


      var _shell_data_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../shell/data-store */
      "f/Ol");

      var ElectricalItemModel = function ElectricalItemModel() {
        _classCallCheck(this, ElectricalItemModel);

        this.tags = ['', '', ''];
        this.pictures = ['', '', '', '', ''];
      };

      var ElectricalListingModel = /*#__PURE__*/function (_shell_data_store__WE20) {
        _inherits(ElectricalListingModel, _shell_data_store__WE20);

        var _super20 = _createSuper(ElectricalListingModel);

        function ElectricalListingModel() {
          var _this23;

          _classCallCheck(this, ElectricalListingModel);

          _this23 = _super20.call(this);
          _this23.items = [new ElectricalItemModel(), new ElectricalItemModel(), new ElectricalItemModel(), new ElectricalItemModel()];
          return _this23;
        }

        return ElectricalListingModel;
      }(_shell_data_store__WEBPACK_IMPORTED_MODULE_0__["ShellModel"]);
      /***/

    },

    /***/
    "htxY":
    /*!**********************************************!*\
      !*** ./src/app/plumbing/plumbing.service.ts ***!
      \**********************************************/

    /*! exports provided: plumbingService */

    /***/
    function htxY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "plumbingService", function () {
        return plumbingService;
      });
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common/http */
      "IheW");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _shell_data_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../shell/data-store */
      "f/Ol");
      /* harmony import */


      var _listing_plumbing_listing_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./listing/plumbing-listing.model */
      "QNWb");
      /* harmony import */


      var _details_plumbing_details_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./details/plumbing-details.model */
      "bKs7");

      var plumbingService = /*#__PURE__*/function () {
        function plumbingService(http) {
          _classCallCheck(this, plumbingService);

          this.http = http;
        }

        _createClass(plumbingService, [{
          key: "getListingDataSource",
          value: function getListingDataSource() {
            return this.http.get('./assets/data/plumbing/listing.json').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (data) {
              // Note: HttpClient cannot know how to instantiate a class for the returned data
              // We need to properly cast types from json data
              var listing = new _listing_plumbing_listing_model__WEBPACK_IMPORTED_MODULE_3__["plumbingListingModel"](); // The Object.assign() method copies all enumerable own properties from one or more source objects to a target object.
              // Note: If you have non-enummerable properties, you can try a spread operator instead. listing = {...data};
              // (see: https://scotch.io/bar-talk/copying-objects-in-javascript#toc-using-spread-elements-)

              Object.assign(listing, data);
              return listing;
            }));
          }
        }, {
          key: "getListingStore",
          value: function getListingStore(dataSource) {
            // Use cache if available
            if (!this.listingDataStore) {
              // Initialize the model specifying that it is a shell model
              var shellModel = new _listing_plumbing_listing_model__WEBPACK_IMPORTED_MODULE_3__["plumbingListingModel"]();
              this.listingDataStore = new _shell_data_store__WEBPACK_IMPORTED_MODULE_2__["DataStore"](shellModel); // Trigger the loading mechanism (with shell) in the dataStore

              this.listingDataStore.load(dataSource);
            }

            return this.listingDataStore;
          }
        }, {
          key: "getDetailsDataSource",
          value: function getDetailsDataSource(slug) {
            return this.http.get('./assets/data/plumbing/details.json').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["flatMap"])(function (details) {
              return details.items.filter(function (item) {
                return item.slug === slug;
              });
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (data) {
              // Note: HttpClient cannot know how to instantiate a class for the returned data
              // We need to properly cast types from json data
              var details = new _details_plumbing_details_model__WEBPACK_IMPORTED_MODULE_4__["plumbingDetailsModel"](); // The Object.assign() method copies all enumerable own properties from one or more source objects to a target object.
              // Note: If you have non-enummerable properties, you can try a spread operator instead. details = {...data};
              // (see: https://scotch.io/bar-talk/copying-objects-in-javascript#toc-using-spread-elements-)

              Object.assign(details, data);
              return details;
            }));
          }
        }, {
          key: "getDetailsStore",
          value: function getDetailsStore(dataSource) {
            // Initialize the model specifying that it is a shell model
            var shellModel = new _details_plumbing_details_model__WEBPACK_IMPORTED_MODULE_4__["plumbingDetailsModel"]();
            this.detailsDataStore = new _shell_data_store__WEBPACK_IMPORTED_MODULE_2__["DataStore"](shellModel); // Trigger the loading mechanism (with shell) in the dataStore

            this.detailsDataStore.load(dataSource);
            return this.detailsDataStore;
          }
        }]);

        return plumbingService;
      }();
      /***/

    },

    /***/
    "nfFl":
    /*!**********************************************************!*\
      !*** ./src/app/fashion/listing/fashion-listing.model.ts ***!
      \**********************************************************/

    /*! exports provided: FashionItemModel, FashionListingModel */

    /***/
    function nfFl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FashionItemModel", function () {
        return FashionItemModel;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FashionListingModel", function () {
        return FashionListingModel;
      });
      /* harmony import */


      var _shell_data_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../shell/data-store */
      "f/Ol");

      var FashionItemModel = function FashionItemModel() {
        _classCallCheck(this, FashionItemModel);
      };

      var FashionListingModel = /*#__PURE__*/function (_shell_data_store__WE21) {
        _inherits(FashionListingModel, _shell_data_store__WE21);

        var _super21 = _createSuper(FashionListingModel);

        function FashionListingModel() {
          var _this24;

          _classCallCheck(this, FashionListingModel);

          _this24 = _super21.call(this);
          _this24.items = [new FashionItemModel(), new FashionItemModel(), new FashionItemModel(), new FashionItemModel()];
          return _this24;
        }

        return FashionListingModel;
      }(_shell_data_store__WEBPACK_IMPORTED_MODULE_0__["ShellModel"]);
      /***/

    },

    /***/
    "r4YO":
    /*!****************************************************!*\
      !*** ./src/app/wood/listing/wood-listing.model.ts ***!
      \****************************************************/

    /*! exports provided: woodItemModel, woodListingModel */

    /***/
    function r4YO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "woodItemModel", function () {
        return woodItemModel;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "woodListingModel", function () {
        return woodListingModel;
      });
      /* harmony import */


      var _shell_data_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../shell/data-store */
      "f/Ol");

      var woodItemModel = function woodItemModel() {
        _classCallCheck(this, woodItemModel);

        this.tags = ['', '', ''];
        this.pictures = ['', '', '', '', ''];
      };

      var woodListingModel = /*#__PURE__*/function (_shell_data_store__WE22) {
        _inherits(woodListingModel, _shell_data_store__WE22);

        var _super22 = _createSuper(woodListingModel);

        function woodListingModel() {
          var _this25;

          _classCallCheck(this, woodListingModel);

          _this25 = _super22.call(this);
          _this25.items = [new woodItemModel(), new woodItemModel(), new woodItemModel(), new woodItemModel()];
          return _this25;
        }

        return woodListingModel;
      }(_shell_data_store__WEBPACK_IMPORTED_MODULE_0__["ShellModel"]);
      /***/

    },

    /***/
    "r7vE":
    /*!****************************************************!*\
      !*** ./src/app/real-estate/real-estate.service.ts ***!
      \****************************************************/

    /*! exports provided: RealEstateService */

    /***/
    function r7vE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RealEstateService", function () {
        return RealEstateService;
      });
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common/http */
      "IheW");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _shell_data_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../shell/data-store */
      "f/Ol");
      /* harmony import */


      var _listing_real_estate_listing_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./listing/real-estate-listing.model */
      "FUeK");
      /* harmony import */


      var _details_real_estate_details_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./details/real-estate-details.model */
      "GBb9");

      var RealEstateService = /*#__PURE__*/function () {
        function RealEstateService(http) {
          _classCallCheck(this, RealEstateService);

          this.http = http;
        }

        _createClass(RealEstateService, [{
          key: "getListingDataSource",
          value: function getListingDataSource() {
            return this.http.get('./assets/data/real-estate/listing.json').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (data) {
              // Note: HttpClient cannot know how to instantiate a class for the returned data
              // We need to properly cast types from json data
              var listing = new _listing_real_estate_listing_model__WEBPACK_IMPORTED_MODULE_3__["RealEstateListingModel"](); // The Object.assign() method copies all enumerable own properties from one or more source objects to a target object.
              // Note: If you have non-enummerable properties, you can try a spread operator instead. listing = {...data};
              // (see: https://scotch.io/bar-talk/copying-objects-in-javascript#toc-using-spread-elements-)

              Object.assign(listing, data);
              return listing;
            }));
          }
        }, {
          key: "getListingStore",
          value: function getListingStore(dataSource) {
            // Use cache if available
            if (!this.listingDataStore) {
              // Initialize the model specifying that it is a shell model
              var shellModel = new _listing_real_estate_listing_model__WEBPACK_IMPORTED_MODULE_3__["RealEstateListingModel"]();
              this.listingDataStore = new _shell_data_store__WEBPACK_IMPORTED_MODULE_2__["DataStore"](shellModel); // Trigger the loading mechanism (with shell) in the dataStore

              this.listingDataStore.load(dataSource);
            }

            return this.listingDataStore;
          }
        }, {
          key: "getDetailsDataSource",
          value: function getDetailsDataSource() {
            return this.http.get('./assets/data/real-estate/details.json').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (data) {
              // Note: HttpClient cannot know how to instantiate a class for the returned data
              // We need to properly cast types from json data
              var details = new _details_real_estate_details_model__WEBPACK_IMPORTED_MODULE_4__["RealEstateDetailsModel"](); // The Object.assign() method copies all enumerable own properties from one or more source objects to a target object.
              // Note: If you have non-enummerable properties, you can try a spread operator instead. details = {...data};
              // (see: https://scotch.io/bar-talk/copying-objects-in-javascript#toc-using-spread-elements-)

              Object.assign(details, data);
              return details;
            }));
          }
        }, {
          key: "getDetailsStore",
          value: function getDetailsStore(dataSource) {
            // Use cache if available
            if (!this.detailsDataStore) {
              // Initialize the model specifying that it is a shell model
              var shellModel = new _details_real_estate_details_model__WEBPACK_IMPORTED_MODULE_4__["RealEstateDetailsModel"]();
              this.detailsDataStore = new _shell_data_store__WEBPACK_IMPORTED_MODULE_2__["DataStore"](shellModel); // Trigger the loading mechanism (with shell) in the dataStore

              this.detailsDataStore.load(dataSource);
            }

            return this.detailsDataStore;
          }
        }]);

        return RealEstateService;
      }();
      /***/

    },

    /***/
    "sY96":
    /*!**************************************************!*\
      !*** ./src/app/validators/password.validator.ts ***!
      \**************************************************/

    /*! exports provided: PasswordValidator */

    /***/
    function sY96(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PasswordValidator", function () {
        return PasswordValidator;
      });

      var PasswordValidator = /*#__PURE__*/function () {
        function PasswordValidator() {
          _classCallCheck(this, PasswordValidator);
        }

        _createClass(PasswordValidator, null, [{
          key: "areNotEqual",
          // If our validation fails, we return an object with a key for the error name and a value of true.
          // Otherwise, if the validation passes, we simply return null because there is no error.
          value: function areNotEqual(formGroup) {
            var val;
            var valid = true;

            for (var key in formGroup.controls) {
              if (formGroup.controls.hasOwnProperty(key)) {
                var control = formGroup.controls[key];

                if (val === undefined) {
                  val = control.value;
                } else {
                  if (val !== control.value) {
                    valid = false;
                    break;
                  }
                }
              }
            }

            if (valid) {
              return null;
            }

            return {
              areNotEqual: true
            };
          }
        }]);

        return PasswordValidator;
      }();
      /***/

    },

    /***/
    "swtw":
    /*!**********************************************!*\
      !*** ./src/app/painting/painting.service.ts ***!
      \**********************************************/

    /*! exports provided: PaintingService */

    /***/
    function swtw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaintingService", function () {
        return PaintingService;
      });
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common/http */
      "IheW");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _shell_data_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../shell/data-store */
      "f/Ol");
      /* harmony import */


      var _listing_painting_listing_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./listing/painting-listing.model */
      "PdPT");
      /* harmony import */


      var _details_painting_details_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./details/painting-details.model */
      "Kp0C");

      var PaintingService = /*#__PURE__*/function () {
        function PaintingService(http) {
          _classCallCheck(this, PaintingService);

          this.http = http;
        }

        _createClass(PaintingService, [{
          key: "getListingDataSource",
          value: function getListingDataSource() {
            return this.http.get('./assets/data/painting/listing.json').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (data) {
              // Note: HttpClient cannot know how to instantiate a class for the returned data
              // We need to properly cast types from json data
              var listing = new _listing_painting_listing_model__WEBPACK_IMPORTED_MODULE_3__["PaintingListingModel"](); // The Object.assign() method copies all enumerable own properties from one or more source objects to a target object.
              // Note: If you have non-enummerable properties, you can try a spread operator instead. listing = {...data};
              // (see: https://scotch.io/bar-talk/copying-objects-in-javascript#toc-using-spread-elements-)

              Object.assign(listing, data);
              return listing;
            }));
          }
        }, {
          key: "getListingStore",
          value: function getListingStore(dataSource) {
            // Use cache if available
            if (!this.listingDataStore) {
              // Initialize the model specifying that it is a shell model
              var shellModel = new _listing_painting_listing_model__WEBPACK_IMPORTED_MODULE_3__["PaintingListingModel"]();
              this.listingDataStore = new _shell_data_store__WEBPACK_IMPORTED_MODULE_2__["DataStore"](shellModel); // Trigger the loading mechanism (with shell) in the dataStore

              this.listingDataStore.load(dataSource);
            }

            return this.listingDataStore;
          }
        }, {
          key: "getDetailsDataSource",
          value: function getDetailsDataSource(slug) {
            return this.http.get('./assets/data/painting/details.json').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["flatMap"])(function (details) {
              return details.items.filter(function (item) {
                return item.slug === slug;
              });
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (data) {
              // Note: HttpClient cannot know how to instantiate a class for the returned data
              // We need to properly cast types from json data
              var details = new _details_painting_details_model__WEBPACK_IMPORTED_MODULE_4__["PaintingDetailsModel"](); // The Object.assign() method copies all enumerable own properties from one or more source objects to a target object.
              // Note: If you have non-enummerable properties, you can try a spread operator instead. details = {...data};
              // (see: https://scotch.io/bar-talk/copying-objects-in-javascript#toc-using-spread-elements-)

              Object.assign(details, data);
              return details;
            }));
          }
        }, {
          key: "getDetailsStore",
          value: function getDetailsStore(dataSource) {
            // Initialize the model specifying that it is a shell model
            var shellModel = new _details_painting_details_model__WEBPACK_IMPORTED_MODULE_4__["PaintingDetailsModel"]();
            this.detailsDataStore = new _shell_data_store__WEBPACK_IMPORTED_MODULE_2__["DataStore"](shellModel); // Trigger the loading mechanism (with shell) in the dataStore

            this.detailsDataStore.load(dataSource);
            return this.detailsDataStore;
          }
        }]);

        return PaintingService;
      }();
      /***/

    },

    /***/
    "tER8":
    /*!******************************************************!*\
      !*** ./src/app/brick/details/brick-details.model.ts ***!
      \******************************************************/

    /*! exports provided: BrickDetailsModel */

    /***/
    function tER8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BrickDetailsModel", function () {
        return BrickDetailsModel;
      });
      /* harmony import */


      var _shell_data_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../shell/data-store */
      "f/Ol");

      var BrickDetailsModel = /*#__PURE__*/function (_shell_data_store__WE23) {
        _inherits(BrickDetailsModel, _shell_data_store__WE23);

        var _super23 = _createSuper(BrickDetailsModel);

        function BrickDetailsModel() {
          var _this26;

          _classCallCheck(this, BrickDetailsModel);

          _this26 = _super23.call(this);
          _this26.ratings = [{
            concept: '',
            rate: null
          }, {
            concept: '',
            rate: null
          }, {
            concept: '',
            rate: null
          }];
          _this26.openHours = [{
            day: '',
            open: true,
            hourFrom: '',
            hourTo: ''
          }, {
            day: '',
            open: true,
            hourFrom: '',
            hourTo: ''
          }, {
            day: '',
            open: false,
            hourFrom: '',
            hourTo: ''
          }];
          _this26.tags = ['', '', ''];
          _this26.usersPictures = ['', '', '', '', '', ''];
          _this26.popularDishes = [{
            name: '',
            rate: null,
            votesCount: null
          }, {
            name: '',
            rate: null,
            votesCount: null
          }];
          _this26.reviews = [{
            user: {
              image: '',
              name: '',
              reviewsCount: null,
              points: null
            },
            avgRating: null,
            ratings: [{
              concept: '',
              rate: null
            }, {
              concept: '',
              rate: null
            }, {
              concept: '',
              rate: null
            }],
            publishedAt: null,
            message: ''
          }, {
            user: {
              image: '',
              name: '',
              reviewsCount: null,
              points: null
            },
            avgRating: null,
            ratings: [{
              concept: '',
              rate: null
            }, {
              concept: '',
              rate: null
            }, {
              concept: '',
              rate: null
            }],
            publishedAt: null,
            message: ''
          }, {
            user: {
              image: '',
              name: '',
              reviewsCount: null,
              points: null
            },
            avgRating: null,
            ratings: [{
              concept: '',
              rate: null
            }, {
              concept: '',
              rate: null
            }, {
              concept: '',
              rate: null
            }],
            publishedAt: null,
            message: ''
          }];
          _this26.popularRecipes = [{
            showcaseImage: '',
            name: '',
            chef: {
              name: '',
              image: ''
            },
            difficulty: '',
            time: '',
            calories: '',
            chefExtract: ''
          }];
          return _this26;
        }

        return BrickDetailsModel;
      }(_shell_data_store__WEBPACK_IMPORTED_MODULE_0__["ShellModel"]);
      /***/

    },

    /***/
    "v0Fq":
    /*!******************************************!*\
      !*** ./src/app/travel/travel.service.ts ***!
      \******************************************/

    /*! exports provided: TravelService */

    /***/
    function v0Fq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TravelService", function () {
        return TravelService;
      });
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common/http */
      "IheW");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _shell_data_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../shell/data-store */
      "f/Ol");
      /* harmony import */


      var _listing_travel_listing_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./listing/travel-listing.model */
      "8zxt");
      /* harmony import */


      var _details_travel_details_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./details/travel-details.model */
      "dgp+");

      var TravelService = /*#__PURE__*/function () {
        function TravelService(http) {
          _classCallCheck(this, TravelService);

          this.http = http;
        }

        _createClass(TravelService, [{
          key: "getListingDataSource",
          value: function getListingDataSource() {
            return this.http.get('./assets/data/travel/listing.json').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (data) {
              // Note: HttpClient cannot know how to instantiate a class for the returned data
              // We need to properly cast types from json data
              var listing = new _listing_travel_listing_model__WEBPACK_IMPORTED_MODULE_3__["TravelListingModel"](); // The Object.assign() method copies all enumerable own properties from one or more source objects to a target object.
              // Note: If you have non-enummerable properties, you can try a spread operator instead. listing = {...data};
              // (see: https://scotch.io/bar-talk/copying-objects-in-javascript#toc-using-spread-elements-)

              Object.assign(listing, data);
              return listing;
            }));
          }
        }, {
          key: "getListingStore",
          value: function getListingStore(dataSource) {
            // Use cache if available
            if (!this.listingDataStore) {
              // Initialize the model specifying that it is a shell model
              var shellModel = new _listing_travel_listing_model__WEBPACK_IMPORTED_MODULE_3__["TravelListingModel"]();
              this.listingDataStore = new _shell_data_store__WEBPACK_IMPORTED_MODULE_2__["DataStore"](shellModel); // Trigger the loading mechanism (with shell) in the dataStore

              this.listingDataStore.load(dataSource);
            }

            return this.listingDataStore;
          }
        }, {
          key: "getDetailsDataSource",
          value: function getDetailsDataSource() {
            return this.http.get('./assets/data/travel/details.json').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (data) {
              // Note: HttpClient cannot know how to instantiate a class for the returned data
              // We need to properly cast types from json data
              var details = new _details_travel_details_model__WEBPACK_IMPORTED_MODULE_4__["TravelDetailsModel"](); // The Object.assign() method copies all enumerable own properties from one or more source objects to a target object.
              // Note: If you have non-enummerable properties, you can try a spread operator instead. details = {...data};
              // (see: https://scotch.io/bar-talk/copying-objects-in-javascript#toc-using-spread-elements-)

              Object.assign(details, data);
              return details;
            }));
          }
        }, {
          key: "getDetailsStore",
          value: function getDetailsStore(dataSource) {
            // Use cache if available
            if (!this.detailsDataStore) {
              // Initialize the model specifying that it is a shell model
              var shellModel = new _details_travel_details_model__WEBPACK_IMPORTED_MODULE_4__["TravelDetailsModel"]();
              this.detailsDataStore = new _shell_data_store__WEBPACK_IMPORTED_MODULE_2__["DataStore"](shellModel); // Trigger the loading mechanism (with shell) in the dataStore

              this.detailsDataStore.load(dataSource);
            }

            return this.detailsDataStore;
          }
        }]);

        return TravelService;
      }();
      /***/

    },

    /***/
    "wCfV":
    /*!**********************************************************!*\
      !*** ./src/app/roofing/details/roofing-details.model.ts ***!
      \**********************************************************/

    /*! exports provided: RoofingDetailsModel */

    /***/
    function wCfV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RoofingDetailsModel", function () {
        return RoofingDetailsModel;
      });
      /* harmony import */


      var _shell_data_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../shell/data-store */
      "f/Ol");

      var RoofingDetailsModel = /*#__PURE__*/function (_shell_data_store__WE24) {
        _inherits(RoofingDetailsModel, _shell_data_store__WE24);

        var _super24 = _createSuper(RoofingDetailsModel);

        function RoofingDetailsModel() {
          var _this27;

          _classCallCheck(this, RoofingDetailsModel);

          _this27 = _super24.call(this);
          _this27.ratings = [{
            concept: '',
            rate: null
          }, {
            concept: '',
            rate: null
          }, {
            concept: '',
            rate: null
          }];
          _this27.openHours = [{
            day: '',
            open: true,
            hourFrom: '',
            hourTo: ''
          }, {
            day: '',
            open: true,
            hourFrom: '',
            hourTo: ''
          }, {
            day: '',
            open: false,
            hourFrom: '',
            hourTo: ''
          }];
          _this27.tags = ['', '', ''];
          _this27.usersPictures = ['', '', '', '', '', ''];
          _this27.popularDishes = [{
            name: '',
            rate: null,
            votesCount: null
          }, {
            name: '',
            rate: null,
            votesCount: null
          }];
          _this27.reviews = [{
            user: {
              image: '',
              name: '',
              reviewsCount: null,
              points: null
            },
            avgRating: null,
            ratings: [{
              concept: '',
              rate: null
            }, {
              concept: '',
              rate: null
            }, {
              concept: '',
              rate: null
            }],
            publishedAt: null,
            message: ''
          }, {
            user: {
              image: '',
              name: '',
              reviewsCount: null,
              points: null
            },
            avgRating: null,
            ratings: [{
              concept: '',
              rate: null
            }, {
              concept: '',
              rate: null
            }, {
              concept: '',
              rate: null
            }],
            publishedAt: null,
            message: ''
          }, {
            user: {
              image: '',
              name: '',
              reviewsCount: null,
              points: null
            },
            avgRating: null,
            ratings: [{
              concept: '',
              rate: null
            }, {
              concept: '',
              rate: null
            }, {
              concept: '',
              rate: null
            }],
            publishedAt: null,
            message: ''
          }];
          _this27.popularRecipes = [{
            showcaseImage: '',
            name: '',
            chef: {
              name: '',
              image: ''
            },
            difficulty: '',
            time: '',
            calories: '',
            chefExtract: ''
          }];
          return _this27;
        }

        return RoofingDetailsModel;
      }(_shell_data_store__WEBPACK_IMPORTED_MODULE_0__["ShellModel"]);
      /***/

    },

    /***/
    "wXFO":
    /*!*************************************************************************************!*\
      !*** ./src/app/components/checkbox-wrapper/checkbox-wrapper.component.ngfactory.js ***!
      \*************************************************************************************/

    /*! exports provided: RenderType_CheckboxWrapperComponent, View_CheckboxWrapperComponent_0, View_CheckboxWrapperComponent_Host_0, CheckboxWrapperComponentNgFactory */

    /***/
    function wXFO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RenderType_CheckboxWrapperComponent", function () {
        return RenderType_CheckboxWrapperComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_CheckboxWrapperComponent_0", function () {
        return View_CheckboxWrapperComponent_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_CheckboxWrapperComponent_Host_0", function () {
        return View_CheckboxWrapperComponent_Host_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CheckboxWrapperComponentNgFactory", function () {
        return CheckboxWrapperComponentNgFactory;
      });
      /* harmony import */


      var _checkbox_wrapper_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./checkbox-wrapper.component.scss.shim.ngstyle */
      "gQyH");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _checkbox_wrapper_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./checkbox-wrapper.component */
      "fpyr");
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var styles_CheckboxWrapperComponent = [_checkbox_wrapper_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

      var RenderType_CheckboxWrapperComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
        encapsulation: 0,
        styles: styles_CheckboxWrapperComponent,
        data: {}
      });

      function View_CheckboxWrapperComponent_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵncd"](null, 0)], null, null);
      }

      function View_CheckboxWrapperComponent_Host_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "app-checkbox-wrapper", [], [[2, "checkbox-checked", null]], null, null, View_CheckboxWrapperComponent_0, RenderType_CheckboxWrapperComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 1097728, null, 1, _checkbox_wrapper_component__WEBPACK_IMPORTED_MODULE_2__["CheckboxWrapperComponent"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 1, {
          checkbox: 0
        })], null, function (_ck, _v) {
          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).isChecked;

          _ck(_v, 0, 0, currVal_0);
        });
      }

      var CheckboxWrapperComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-checkbox-wrapper", _checkbox_wrapper_component__WEBPACK_IMPORTED_MODULE_2__["CheckboxWrapperComponent"], View_CheckboxWrapperComponent_Host_0, {}, {}, ["*"]);
      /***/

    },

    /***/
    "wwno":
    /*!**************************************************!*\
      !*** ./src/app/showcase/showcase-shell.model.ts ***!
      \**************************************************/

    /*! exports provided: ShowcaseShellModel, ShowcaseShellUserModel, ShowcaseCommentModel, ShowcasePostModel, ShowcaseTaskModel, ShowcaseUser2Model, ShowcaseCompanyModel, ShowcaseCombinedTaskUserModel */

    /***/
    function wwno(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ShowcaseShellModel", function () {
        return ShowcaseShellModel;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ShowcaseShellUserModel", function () {
        return ShowcaseShellUserModel;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ShowcaseCommentModel", function () {
        return ShowcaseCommentModel;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ShowcasePostModel", function () {
        return ShowcasePostModel;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ShowcaseTaskModel", function () {
        return ShowcaseTaskModel;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ShowcaseUser2Model", function () {
        return ShowcaseUser2Model;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ShowcaseCompanyModel", function () {
        return ShowcaseCompanyModel;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ShowcaseCombinedTaskUserModel", function () {
        return ShowcaseCombinedTaskUserModel;
      });
      /* harmony import */


      var _shell_data_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../shell/data-store */
      "f/Ol");

      var ShowcaseShellModel = /*#__PURE__*/function (_shell_data_store__WE25) {
        _inherits(ShowcaseShellModel, _shell_data_store__WE25);

        var _super25 = _createSuper(ShowcaseShellModel);

        function ShowcaseShellModel() {
          _classCallCheck(this, ShowcaseShellModel);

          return _super25.call(this);
        }

        return ShowcaseShellModel;
      }(_shell_data_store__WEBPACK_IMPORTED_MODULE_0__["ShellModel"]);

      var ShowcaseShellUserModel = /*#__PURE__*/function (_shell_data_store__WE26) {
        _inherits(ShowcaseShellUserModel, _shell_data_store__WE26);

        var _super26 = _createSuper(ShowcaseShellUserModel);

        function ShowcaseShellUserModel() {
          _classCallCheck(this, ShowcaseShellUserModel);

          return _super26.call(this);
        }

        return ShowcaseShellUserModel;
      }(_shell_data_store__WEBPACK_IMPORTED_MODULE_0__["ShellModel"]);

      var ShowcaseCommentModel = /*#__PURE__*/function (_shell_data_store__WE27) {
        _inherits(ShowcaseCommentModel, _shell_data_store__WE27);

        var _super27 = _createSuper(ShowcaseCommentModel);

        function ShowcaseCommentModel() {
          _classCallCheck(this, ShowcaseCommentModel);

          return _super27.call(this);
        }

        return ShowcaseCommentModel;
      }(_shell_data_store__WEBPACK_IMPORTED_MODULE_0__["ShellModel"]);

      var ShowcasePostModel = /*#__PURE__*/function (_shell_data_store__WE28) {
        _inherits(ShowcasePostModel, _shell_data_store__WE28);

        var _super28 = _createSuper(ShowcasePostModel);

        function ShowcasePostModel() {
          _classCallCheck(this, ShowcasePostModel);

          return _super28.call(this);
        }

        return ShowcasePostModel;
      }(_shell_data_store__WEBPACK_IMPORTED_MODULE_0__["ShellModel"]);

      var ShowcaseTaskModel = /*#__PURE__*/function (_shell_data_store__WE29) {
        _inherits(ShowcaseTaskModel, _shell_data_store__WE29);

        var _super29 = _createSuper(ShowcaseTaskModel);

        function ShowcaseTaskModel() {
          _classCallCheck(this, ShowcaseTaskModel);

          return _super29.call(this);
        }

        return ShowcaseTaskModel;
      }(_shell_data_store__WEBPACK_IMPORTED_MODULE_0__["ShellModel"]);

      var ShowcaseUser2Model = /*#__PURE__*/function (_shell_data_store__WE30) {
        _inherits(ShowcaseUser2Model, _shell_data_store__WE30);

        var _super30 = _createSuper(ShowcaseUser2Model);

        function ShowcaseUser2Model() {
          _classCallCheck(this, ShowcaseUser2Model);

          return _super30.call(this);
        }

        return ShowcaseUser2Model;
      }(_shell_data_store__WEBPACK_IMPORTED_MODULE_0__["ShellModel"]);

      var ShowcaseCompanyModel = /*#__PURE__*/function (_shell_data_store__WE31) {
        _inherits(ShowcaseCompanyModel, _shell_data_store__WE31);

        var _super31 = _createSuper(ShowcaseCompanyModel);

        function ShowcaseCompanyModel() {
          _classCallCheck(this, ShowcaseCompanyModel);

          return _super31.call(this);
        }

        return ShowcaseCompanyModel;
      }(_shell_data_store__WEBPACK_IMPORTED_MODULE_0__["ShellModel"]);

      var ShowcaseCombinedTaskUserModel = /*#__PURE__*/function (_ShowcaseTaskModel) {
        _inherits(ShowcaseCombinedTaskUserModel, _ShowcaseTaskModel);

        var _super32 = _createSuper(ShowcaseCombinedTaskUserModel);

        function ShowcaseCombinedTaskUserModel() {
          _classCallCheck(this, ShowcaseCombinedTaskUserModel);

          return _super32.call(this);
        }

        return ShowcaseCombinedTaskUserModel;
      }(ShowcaseTaskModel);
      /***/

    },

    /***/
    "xBcy":
    /*!************************************************!*\
      !*** ./src/app/carpentry/carpentry.service.ts ***!
      \************************************************/

    /*! exports provided: CarpentryService */

    /***/
    function xBcy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CarpentryService", function () {
        return CarpentryService;
      });
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common/http */
      "IheW");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _shell_data_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../shell/data-store */
      "f/Ol");
      /* harmony import */


      var _listing_carpentry_listing_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./listing/carpentry-listing.model */
      "3vsf");
      /* harmony import */


      var _details_carpentry_details_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./details/carpentry-details.model */
      "K0As");

      var CarpentryService = /*#__PURE__*/function () {
        function CarpentryService(http) {
          _classCallCheck(this, CarpentryService);

          this.http = http;
        }

        _createClass(CarpentryService, [{
          key: "getListingDataSource",
          value: function getListingDataSource() {
            return this.http.get('./assets/data/carpentry/listing.json').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (data) {
              // Note: HttpClient cannot know how to instantiate a class for the returned data
              // We need to properly cast types from json data
              var listing = new _listing_carpentry_listing_model__WEBPACK_IMPORTED_MODULE_3__["CarpentryListingModel"](); // The Object.assign() method copies all enumerable own properties from one or more source objects to a target object.
              // Note: If you have non-enummerable properties, you can try a spread operator instead. listing = {...data};
              // (see: https://scotch.io/bar-talk/copying-objects-in-javascript#toc-using-spread-elements-)

              Object.assign(listing, data);
              return listing;
            }));
          }
        }, {
          key: "getListingStore",
          value: function getListingStore(dataSource) {
            // Use cache if available
            if (!this.listingDataStore) {
              // Initialize the model specifying that it is a shell model
              var shellModel = new _listing_carpentry_listing_model__WEBPACK_IMPORTED_MODULE_3__["CarpentryListingModel"]();
              this.listingDataStore = new _shell_data_store__WEBPACK_IMPORTED_MODULE_2__["DataStore"](shellModel); // Trigger the loading mechanism (with shell) in the dataStore

              this.listingDataStore.load(dataSource);
            }

            return this.listingDataStore;
          }
        }, {
          key: "getDetailsDataSource",
          value: function getDetailsDataSource(slug) {
            return this.http.get('./assets/data/carpentry/details.json').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["flatMap"])(function (details) {
              return details.items.filter(function (item) {
                return item.slug === slug;
              });
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (data) {
              // Note: HttpClient cannot know how to instantiate a class for the returned data
              // We need to properly cast types from json data
              var details = new _details_carpentry_details_model__WEBPACK_IMPORTED_MODULE_4__["CarpentryDetailsModel"](); // The Object.assign() method copies all enumerable own properties from one or more source objects to a target object.
              // Note: If you have non-enummerable properties, you can try a spread operator instead. details = {...data};
              // (see: https://scotch.io/bar-talk/copying-objects-in-javascript#toc-using-spread-elements-)

              Object.assign(details, data);
              return details;
            }));
          }
        }, {
          key: "getDetailsStore",
          value: function getDetailsStore(dataSource) {
            // Initialize the model specifying that it is a shell model
            var shellModel = new _details_carpentry_details_model__WEBPACK_IMPORTED_MODULE_4__["CarpentryDetailsModel"]();
            this.detailsDataStore = new _shell_data_store__WEBPACK_IMPORTED_MODULE_2__["DataStore"](shellModel); // Trigger the loading mechanism (with shell) in the dataStore

            this.detailsDataStore.load(dataSource);
            return this.detailsDataStore;
          }
        }]);

        return CarpentryService;
      }();
      /***/

    },

    /***/
    "xgmX":
    /*!**************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/haptic-da73c8fd.js ***!
      \**************************************************************/

    /*! exports provided: a, b, c, d, h */

    /***/
    function xgmX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "a", function () {
        return hapticImpact;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "b", function () {
        return hapticSelectionStart;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "c", function () {
        return hapticSelectionChanged;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "d", function () {
        return hapticSelectionEnd;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "h", function () {
        return hapticSelection;
      });

      var HapticEngine = {
        getEngine: function getEngine() {
          var win = window;
          return win.TapticEngine || win.Capacitor && win.Capacitor.isPluginAvailable('Haptics') && win.Capacitor.Plugins.Haptics;
        },
        available: function available() {
          return !!this.getEngine();
        },
        isCordova: function isCordova() {
          return !!window.TapticEngine;
        },
        isCapacitor: function isCapacitor() {
          var win = window;
          return !!win.Capacitor;
        },
        impact: function impact(options) {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          var style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
          engine.impact({
            style: style
          });
        },
        notification: function notification(options) {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          var style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
          engine.notification({
            style: style
          });
        },
        selection: function selection() {
          this.impact({
            style: 'light'
          });
        },
        selectionStart: function selectionStart() {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          if (this.isCapacitor()) {
            engine.selectionStart();
          } else {
            engine.gestureSelectionStart();
          }
        },
        selectionChanged: function selectionChanged() {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          if (this.isCapacitor()) {
            engine.selectionChanged();
          } else {
            engine.gestureSelectionChanged();
          }
        },
        selectionEnd: function selectionEnd() {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          if (this.isCapacitor()) {
            engine.selectionChanged();
          } else {
            engine.gestureSelectionChanged();
          }
        }
      };
      /**
       * Trigger a selection changed haptic event. Good for one-time events
       * (not for gestures)
       */

      var hapticSelection = function hapticSelection() {
        HapticEngine.selection();
      };
      /**
       * Tell the haptic engine that a gesture for a selection change is starting.
       */


      var hapticSelectionStart = function hapticSelectionStart() {
        HapticEngine.selectionStart();
      };
      /**
       * Tell the haptic engine that a selection changed during a gesture.
       */


      var hapticSelectionChanged = function hapticSelectionChanged() {
        HapticEngine.selectionChanged();
      };
      /**
       * Tell the haptic engine we are done with a gesture. This needs to be
       * called lest resources are not properly recycled.
       */


      var hapticSelectionEnd = function hapticSelectionEnd() {
        HapticEngine.selectionEnd();
      };
      /**
       * Use this to indicate success/failure/warning to the user.
       * options should be of the type `{ style: 'light' }` (or `medium`/`heavy`)
       */


      var hapticImpact = function hapticImpact(options) {
        HapticEngine.impact(options);
      };
      /***/

    },

    /***/
    "y+sA":
    /*!****************************************!*\
      !*** ./src/app/deals/deals.service.ts ***!
      \****************************************/

    /*! exports provided: DealsService */

    /***/
    function ySA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DealsService", function () {
        return DealsService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "IheW");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var dayjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! dayjs */
      "Wgwc");
      /* harmony import */


      var dayjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_3__);
      /* harmony import */


      var _shell_data_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../shell/data-store */
      "f/Ol");
      /* harmony import */


      var _listing_deals_listing_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./listing/deals-listing.model */
      "SQnO");
      /* harmony import */


      var _details_deals_details_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./details/deals-details.model */
      "UG6G");

      var DealsService = /*#__PURE__*/function () {
        function DealsService(http) {
          _classCallCheck(this, DealsService);

          this.http = http;
        }

        _createClass(DealsService, [{
          key: "getListingDataSource",
          value: function getListingDataSource() {
            var _this28 = this;

            return this.http.get('./assets/data/deals/listing.json').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) {
              // Using rest operator to divide the data (see: https://dev.to/napoleon039/how-to-use-the-spread-and-rest-operator-4jbb)
              var items = data.items,
                  otherData = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(data, ["items"]);
              var itemsWithRelativeDates = items.map(function (dealItem, index) {
                // Relative date (better to showcase UI micro-interactions)
                return Object.assign(Object.assign({}, dealItem), {
                  expirationDate: _this28.relativeDates[index]
                });
              }); // Using spread operator to concat the data (see: https://dev.to/napoleon039/how-to-use-the-spread-and-rest-operator-4jbb)

              var updatedListingData = Object.assign(Object.assign({}, otherData), {
                items: itemsWithRelativeDates
              }); // Note: HttpClient cannot know how to instantiate a class for the returned data
              // We need to properly cast types from json data

              var listing = new _listing_deals_listing_model__WEBPACK_IMPORTED_MODULE_5__["DealsListingModel"](); // The Object.assign() method copies all enumerable own properties from one or more source objects to a target object.
              // Note: If you have non-enummerable properties, you can try a spread operator instead. listing = {...data};
              // (see: https://scotch.io/bar-talk/copying-objects-in-javascript#toc-using-spread-elements-)

              Object.assign(listing, updatedListingData);
              return listing;
            }));
          }
        }, {
          key: "getListingStore",
          value: function getListingStore(dataSource) {
            // Use cache if available
            if (!this.listingDataStore) {
              // Initialize the model specifying that it is a shell model
              var shellModel = new _listing_deals_listing_model__WEBPACK_IMPORTED_MODULE_5__["DealsListingModel"]();
              this.listingDataStore = new _shell_data_store__WEBPACK_IMPORTED_MODULE_4__["DataStore"](shellModel); // Trigger the loading mechanism (with shell) in the dataStore

              this.listingDataStore.load(dataSource);
            }

            return this.listingDataStore;
          }
        }, {
          key: "getDetailsDataSource",
          value: function getDetailsDataSource() {
            return this.http.get('./assets/data/deals/details.json').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) {
              var expirationDate = dayjs__WEBPACK_IMPORTED_MODULE_3__().add(1, 'day').add(8, 'hour').add(10, 'second').format('MM/DD/YYYY HH:mm:ss');
              var updatedDetailsData = Object.assign(Object.assign({}, data), {
                expirationDate: expirationDate
              }); // Note: HttpClient cannot know how to instantiate a class for the returned data
              // We need to properly cast types from json data

              var details = new _details_deals_details_model__WEBPACK_IMPORTED_MODULE_6__["DealsDetailsModel"](); // The Object.assign() method copies all enumerable own properties from one or more source objects to a target object.
              // Note: If you have non-enummerable properties, you can try a spread operator instead. details = {...data};
              // (see: https://scotch.io/bar-talk/copying-objects-in-javascript#toc-using-spread-elements-)

              Object.assign(details, updatedDetailsData);
              return details;
            }));
          }
        }, {
          key: "getDetailsStore",
          value: function getDetailsStore(dataSource) {
            // Initialize the model specifying that it is a shell model
            var shellModel = new _details_deals_details_model__WEBPACK_IMPORTED_MODULE_6__["DealsDetailsModel"]();
            this.detailsDataStore = new _shell_data_store__WEBPACK_IMPORTED_MODULE_4__["DataStore"](shellModel); // Trigger the loading mechanism (with shell) in the dataStore

            this.detailsDataStore.load(dataSource);
            return this.detailsDataStore;
          }
        }, {
          key: "relativeDates",
          get: function get() {
            return [dayjs__WEBPACK_IMPORTED_MODULE_3__().add(1, 'day').add(8, 'hour').add(10, 'second').format('MM/DD/YYYY HH:mm:ss'), dayjs__WEBPACK_IMPORTED_MODULE_3__().add(7, 'day').format('MM/DD/YYYY'), dayjs__WEBPACK_IMPORTED_MODULE_3__().subtract(1, 'month').format('MM/DD/YYYY'), dayjs__WEBPACK_IMPORTED_MODULE_3__().add(2, 'month').format('MM/DD/YYYY')];
          }
        }]);

        return DealsService;
      }();
      /***/

    },

    /***/
    "ykzn":
    /*!***********************************************!*\
      !*** ./src/app/pipes/time-difference.pipe.ts ***!
      \***********************************************/

    /*! exports provided: TimeDifferencePipe */

    /***/
    function ykzn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TimeDifferencePipe", function () {
        return TimeDifferencePipe;
      });
      /* harmony import */


      var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! dayjs */
      "Wgwc");
      /* harmony import */


      var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);

      var TimeDifferencePipe = /*#__PURE__*/function () {
        function TimeDifferencePipe() {
          _classCallCheck(this, TimeDifferencePipe);
        }

        _createClass(TimeDifferencePipe, [{
          key: "transform",
          value: function transform(value) {
            return dayjs__WEBPACK_IMPORTED_MODULE_0__(value).diff(dayjs__WEBPACK_IMPORTED_MODULE_0__(), 'day');
          }
        }]);

        return TimeDifferencePipe;
      }();
      /***/

    }
  }]);
})();
//# sourceMappingURL=common-es5.js.map