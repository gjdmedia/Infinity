function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
  /***/
  "./node_modules/@ionic/core/dist/esm/framework-delegate-d1eb6504.js":
  /*!**************************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-d1eb6504.js ***!
    \**************************************************************************/

  /*! exports provided: a, d */

  /***/
  function node_modulesIonicCoreDistEsmFrameworkDelegateD1eb6504Js(module, __webpack_exports__, __webpack_require__) {
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
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(delegate, container, component, cssClasses, componentProps) {
        var el;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!delegate) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt("return", delegate.attachViewToDom(container, component, componentProps, cssClasses));

              case 2:
                if (!(typeof component !== 'string' && !(component instanceof HTMLElement))) {
                  _context.next = 4;
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
                  _context.next = 11;
                  break;
                }

                _context.next = 11;
                return el.componentOnReady();

              case 11:
                return _context.abrupt("return", el);

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function attachComponent(_x, _x2, _x3, _x4, _x5) {
        return _ref.apply(this, arguments);
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
  "./node_modules/@ionic/core/dist/esm/haptic-da73c8fd.js":
  /*!**************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/haptic-da73c8fd.js ***!
    \**************************************************************/

  /*! exports provided: a, b, c, d, h */

  /***/
  function node_modulesIonicCoreDistEsmHapticDa73c8fdJs(module, __webpack_exports__, __webpack_require__) {
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
  "./node_modules/@ionic/core/dist/esm/spinner-configs-c78e170e.js":
  /*!***********************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-c78e170e.js ***!
    \***********************************************************************/

  /*! exports provided: S */

  /***/
  function node_modulesIonicCoreDistEsmSpinnerConfigsC78e170eJs(module, __webpack_exports__, __webpack_require__) {
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
  "./node_modules/@ionic/core/dist/esm/theme-c2dc54d9.js":
  /*!*************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/theme-c2dc54d9.js ***!
    \*************************************************************/

  /*! exports provided: c, g, h, o */

  /***/
  function node_modulesIonicCoreDistEsmThemeC2dc54d9Js(module, __webpack_exports__, __webpack_require__) {
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
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(url, ev, direction) {
        var router;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!(url != null && url[0] !== '#' && !SCHEME.test(url))) {
                  _context2.next = 5;
                  break;
                }

                router = document.querySelector('ion-router');

                if (!router) {
                  _context2.next = 5;
                  break;
                }

                if (ev != null) {
                  ev.preventDefault();
                }

                return _context2.abrupt("return", router.push(url, direction));

              case 5:
                return _context2.abrupt("return", false);

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function openURL(_x6, _x7, _x8) {
        return _ref3.apply(this, arguments);
      };
    }();
    /***/

  },

  /***/
  "./src/app/brick/brick.service.ts":
  /*!****************************************!*\
    !*** ./src/app/brick/brick.service.ts ***!
    \****************************************/

  /*! exports provided: BrickService */

  /***/
  function srcAppBrickBrickServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BrickService", function () {
      return BrickService;
    });
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _shell_data_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../shell/data-store */
    "./src/app/shell/data-store.ts");
    /* harmony import */


    var _listing_brick_listing_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./listing/brick-listing.model */
    "./src/app/brick/listing/brick-listing.model.ts");
    /* harmony import */


    var _details_brick_details_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./details/brick-details.model */
    "./src/app/brick/details/brick-details.model.ts");

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
  "./src/app/brick/details/brick-details.model.ts":
  /*!******************************************************!*\
    !*** ./src/app/brick/details/brick-details.model.ts ***!
    \******************************************************/

  /*! exports provided: BrickDetailsModel */

  /***/
  function srcAppBrickDetailsBrickDetailsModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BrickDetailsModel", function () {
      return BrickDetailsModel;
    });
    /* harmony import */


    var _shell_data_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../../shell/data-store */
    "./src/app/shell/data-store.ts");

    var BrickDetailsModel = /*#__PURE__*/function (_shell_data_store__WE) {
      _inherits(BrickDetailsModel, _shell_data_store__WE);

      var _super = _createSuper(BrickDetailsModel);

      function BrickDetailsModel() {
        var _this;

        _classCallCheck(this, BrickDetailsModel);

        _this = _super.call(this);
        _this.ratings = [{
          concept: '',
          rate: null
        }, {
          concept: '',
          rate: null
        }, {
          concept: '',
          rate: null
        }];
        _this.openHours = [{
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
        _this.tags = ['', '', ''];
        _this.usersPictures = ['', '', '', '', '', ''];
        _this.popularDishes = [{
          name: '',
          rate: null,
          votesCount: null
        }, {
          name: '',
          rate: null,
          votesCount: null
        }];
        _this.reviews = [{
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
        _this.popularRecipes = [{
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
        return _this;
      }

      return BrickDetailsModel;
    }(_shell_data_store__WEBPACK_IMPORTED_MODULE_0__["ShellModel"]);
    /***/

  },

  /***/
  "./src/app/brick/listing/brick-listing.model.ts":
  /*!******************************************************!*\
    !*** ./src/app/brick/listing/brick-listing.model.ts ***!
    \******************************************************/

  /*! exports provided: BrickItemModel, BrickListingModel */

  /***/
  function srcAppBrickListingBrickListingModelTs(module, __webpack_exports__, __webpack_require__) {
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
    "./src/app/shell/data-store.ts");

    var BrickItemModel = function BrickItemModel() {
      _classCallCheck(this, BrickItemModel);

      this.tags = ['', '', ''];
      this.pictures = ['', '', '', '', ''];
    };

    var BrickListingModel = /*#__PURE__*/function (_shell_data_store__WE2) {
      _inherits(BrickListingModel, _shell_data_store__WE2);

      var _super2 = _createSuper(BrickListingModel);

      function BrickListingModel() {
        var _this2;

        _classCallCheck(this, BrickListingModel);

        _this2 = _super2.call(this);
        _this2.items = [new BrickItemModel(), new BrickItemModel(), new BrickItemModel(), new BrickItemModel()];
        return _this2;
      }

      return BrickListingModel;
    }(_shell_data_store__WEBPACK_IMPORTED_MODULE_0__["ShellModel"]);
    /***/

  },

  /***/
  "./src/app/carpentry/carpentry.service.ts":
  /*!************************************************!*\
    !*** ./src/app/carpentry/carpentry.service.ts ***!
    \************************************************/

  /*! exports provided: CarpentryService */

  /***/
  function srcAppCarpentryCarpentryServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CarpentryService", function () {
      return CarpentryService;
    });
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _shell_data_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../shell/data-store */
    "./src/app/shell/data-store.ts");
    /* harmony import */


    var _listing_carpentry_listing_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./listing/carpentry-listing.model */
    "./src/app/carpentry/listing/carpentry-listing.model.ts");
    /* harmony import */


    var _details_carpentry_details_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./details/carpentry-details.model */
    "./src/app/carpentry/details/carpentry-details.model.ts");

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
  "./src/app/carpentry/details/carpentry-details.model.ts":
  /*!**************************************************************!*\
    !*** ./src/app/carpentry/details/carpentry-details.model.ts ***!
    \**************************************************************/

  /*! exports provided: CarpentryDetailsModel */

  /***/
  function srcAppCarpentryDetailsCarpentryDetailsModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CarpentryDetailsModel", function () {
      return CarpentryDetailsModel;
    });
    /* harmony import */


    var _shell_data_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../../shell/data-store */
    "./src/app/shell/data-store.ts");

    var CarpentryDetailsModel = /*#__PURE__*/function (_shell_data_store__WE3) {
      _inherits(CarpentryDetailsModel, _shell_data_store__WE3);

      var _super3 = _createSuper(CarpentryDetailsModel);

      function CarpentryDetailsModel() {
        var _this3;

        _classCallCheck(this, CarpentryDetailsModel);

        _this3 = _super3.call(this);
        _this3.ratings = [{
          concept: '',
          rate: null
        }, {
          concept: '',
          rate: null
        }, {
          concept: '',
          rate: null
        }];
        _this3.openHours = [{
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
        _this3.tags = ['', '', ''];
        _this3.usersPictures = ['', '', '', '', '', ''];
        _this3.popularDishes = [{
          name: '',
          rate: null,
          votesCount: null
        }, {
          name: '',
          rate: null,
          votesCount: null
        }];
        _this3.reviews = [{
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
        _this3.popularRecipes = [{
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
        return _this3;
      }

      return CarpentryDetailsModel;
    }(_shell_data_store__WEBPACK_IMPORTED_MODULE_0__["ShellModel"]);
    /***/

  },

  /***/
  "./src/app/carpentry/listing/carpentry-listing.model.ts":
  /*!**************************************************************!*\
    !*** ./src/app/carpentry/listing/carpentry-listing.model.ts ***!
    \**************************************************************/

  /*! exports provided: CarpentryItemModel, CarpentryListingModel */

  /***/
  function srcAppCarpentryListingCarpentryListingModelTs(module, __webpack_exports__, __webpack_require__) {
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
    "./src/app/shell/data-store.ts");

    var CarpentryItemModel = function CarpentryItemModel() {
      _classCallCheck(this, CarpentryItemModel);

      this.tags = ['', '', ''];
      this.pictures = ['', '', '', '', ''];
    };

    var CarpentryListingModel = /*#__PURE__*/function (_shell_data_store__WE4) {
      _inherits(CarpentryListingModel, _shell_data_store__WE4);

      var _super4 = _createSuper(CarpentryListingModel);

      function CarpentryListingModel() {
        var _this4;

        _classCallCheck(this, CarpentryListingModel);

        _this4 = _super4.call(this);
        _this4.items = [new CarpentryItemModel(), new CarpentryItemModel(), new CarpentryItemModel(), new CarpentryItemModel()];
        return _this4;
      }

      return CarpentryListingModel;
    }(_shell_data_store__WEBPACK_IMPORTED_MODULE_0__["ShellModel"]);
    /***/

  },

  /***/
  "./src/app/components/checkbox-wrapper/checkbox-wrapper.component.ngfactory.js":
  /*!*************************************************************************************!*\
    !*** ./src/app/components/checkbox-wrapper/checkbox-wrapper.component.ngfactory.js ***!
    \*************************************************************************************/

  /*! exports provided: RenderType_CheckboxWrapperComponent, View_CheckboxWrapperComponent_0, View_CheckboxWrapperComponent_Host_0, CheckboxWrapperComponentNgFactory */

  /***/
  function srcAppComponentsCheckboxWrapperCheckboxWrapperComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
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
    "./src/app/components/checkbox-wrapper/checkbox-wrapper.component.scss.shim.ngstyle.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _checkbox_wrapper_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./checkbox-wrapper.component */
    "./src/app/components/checkbox-wrapper/checkbox-wrapper.component.ts");
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
  "./src/app/components/checkbox-wrapper/checkbox-wrapper.component.scss.shim.ngstyle.js":
  /*!*********************************************************************************************!*\
    !*** ./src/app/components/checkbox-wrapper/checkbox-wrapper.component.scss.shim.ngstyle.js ***!
    \*********************************************************************************************/

  /*! exports provided: styles */

  /***/
  function srcAppComponentsCheckboxWrapperCheckboxWrapperComponentScssShimNgstyleJs(module, __webpack_exports__, __webpack_require__) {
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


    var styles = ["[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kaWRneS9Eb2N1bWVudHMvR2l0SHViL0luZmluaXR5L3NyYy9hcHAvY29tcG9uZW50cy9jaGVja2JveC13cmFwcGVyL2NoZWNrYm94LXdyYXBwZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvY2hlY2tib3gtd3JhcHBlci9jaGVja2JveC13cmFwcGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jaGVja2JveC13cmFwcGVyL2NoZWNrYm94LXdyYXBwZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuIiwiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbn0iXX0= */"];
    /***/
  },

  /***/
  "./src/app/components/checkbox-wrapper/checkbox-wrapper.component.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/components/checkbox-wrapper/checkbox-wrapper.component.ts ***!
    \***************************************************************************/

  /*! exports provided: CheckboxWrapperComponent */

  /***/
  function srcAppComponentsCheckboxWrapperCheckboxWrapperComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CheckboxWrapperComponent", function () {
      return CheckboxWrapperComponent;
    });
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js"); // Reference to the @ionic/angular Components List:
    // https://github.com/ionic-team/ionic/blob/master/angular/src/directives/proxies.ts


    var CheckboxWrapperComponent = /*#__PURE__*/function () {
      function CheckboxWrapperComponent() {
        _classCallCheck(this, CheckboxWrapperComponent);
      }

      _createClass(CheckboxWrapperComponent, [{
        key: "ngAfterContentInit",
        value: function ngAfterContentInit() {
          var _this5 = this;

          // ContentChild is set
          this.isChecked = this.checkbox.checked; // Subscribe to changes

          this.checkbox.ionChange.subscribe(function (changes) {
            _this5.isChecked = changes.detail.checked;
          });
        }
      }]);

      return CheckboxWrapperComponent;
    }();
    /***/

  },

  /***/
  "./src/app/deals/deals.service.ts":
  /*!****************************************!*\
    !*** ./src/app/deals/deals.service.ts ***!
    \****************************************/

  /*! exports provided: DealsService */

  /***/
  function srcAppDealsDealsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DealsService", function () {
      return DealsService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var dayjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! dayjs */
    "./node_modules/dayjs/dayjs.min.js");
    /* harmony import */


    var dayjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var _shell_data_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../shell/data-store */
    "./src/app/shell/data-store.ts");
    /* harmony import */


    var _listing_deals_listing_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./listing/deals-listing.model */
    "./src/app/deals/listing/deals-listing.model.ts");
    /* harmony import */


    var _details_deals_details_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./details/deals-details.model */
    "./src/app/deals/details/deals-details.model.ts");

    var DealsService = /*#__PURE__*/function () {
      function DealsService(http) {
        _classCallCheck(this, DealsService);

        this.http = http;
      }

      _createClass(DealsService, [{
        key: "getListingDataSource",
        value: function getListingDataSource() {
          var _this6 = this;

          return this.http.get('./assets/data/deals/listing.json').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) {
            // Using rest operator to divide the data (see: https://dev.to/napoleon039/how-to-use-the-spread-and-rest-operator-4jbb)
            var items = data.items,
                otherData = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(data, ["items"]);
            var itemsWithRelativeDates = items.map(function (dealItem, index) {
              // Relative date (better to showcase UI micro-interactions)
              return Object.assign(Object.assign({}, dealItem), {
                expirationDate: _this6.relativeDates[index]
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
  "./src/app/deals/details/deals-details.model.ts":
  /*!******************************************************!*\
    !*** ./src/app/deals/details/deals-details.model.ts ***!
    \******************************************************/

  /*! exports provided: DealsDetailsModel */

  /***/
  function srcAppDealsDetailsDealsDetailsModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DealsDetailsModel", function () {
      return DealsDetailsModel;
    });
    /* harmony import */


    var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! dayjs */
    "./node_modules/dayjs/dayjs.min.js");
    /* harmony import */


    var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);
    /* harmony import */


    var _shell_data_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../shell/data-store */
    "./src/app/shell/data-store.ts");

    var DealsDetailsModel = /*#__PURE__*/function (_shell_data_store__WE5) {
      _inherits(DealsDetailsModel, _shell_data_store__WE5);

      var _super5 = _createSuper(DealsDetailsModel);

      function DealsDetailsModel() {
        var _this7;

        _classCallCheck(this, DealsDetailsModel);

        _this7 = _super5.call(this);
        _this7.showcaseImages = ['', '', '']; // Default mock value
        // expirationDate = '03/03/2019';

        _this7.expirationDate = dayjs__WEBPACK_IMPORTED_MODULE_0__().add(5, 'day').format('MM/DD/YYYY HH:mm:ss');
        _this7.relatedDeals = [{
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
        return _this7;
      }

      return DealsDetailsModel;
    }(_shell_data_store__WEBPACK_IMPORTED_MODULE_1__["ShellModel"]);
    /***/

  },

  /***/
  "./src/app/deals/listing/deals-listing.model.ts":
  /*!******************************************************!*\
    !*** ./src/app/deals/listing/deals-listing.model.ts ***!
    \******************************************************/

  /*! exports provided: DealsItemModel, DealsListingModel */

  /***/
  function srcAppDealsListingDealsListingModelTs(module, __webpack_exports__, __webpack_require__) {
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
    "./node_modules/dayjs/dayjs.min.js");
    /* harmony import */


    var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);
    /* harmony import */


    var _shell_data_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../shell/data-store */
    "./src/app/shell/data-store.ts");

    var DealsItemModel = function DealsItemModel() {
      _classCallCheck(this, DealsItemModel);

      // Default mock value
      // expirationDate = '12/01/2018';
      this.expirationDate = dayjs__WEBPACK_IMPORTED_MODULE_0__().add(5, 'day').format('MM/DD/YYYY HH:mm:ss');
    };

    var DealsListingModel = /*#__PURE__*/function (_shell_data_store__WE6) {
      _inherits(DealsListingModel, _shell_data_store__WE6);

      var _super6 = _createSuper(DealsListingModel);

      function DealsListingModel() {
        var _this8;

        _classCallCheck(this, DealsListingModel);

        _this8 = _super6.call(this);
        _this8.items = [new DealsItemModel(), new DealsItemModel(), new DealsItemModel(), new DealsItemModel()];
        return _this8;
      }

      return DealsListingModel;
    }(_shell_data_store__WEBPACK_IMPORTED_MODULE_1__["ShellModel"]);
    /***/

  },

  /***/
  "./src/app/electrical/details/electrical-details.model.ts":
  /*!****************************************************************!*\
    !*** ./src/app/electrical/details/electrical-details.model.ts ***!
    \****************************************************************/

  /*! exports provided: ElectricalDetailsModel */

  /***/
  function srcAppElectricalDetailsElectricalDetailsModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ElectricalDetailsModel", function () {
      return ElectricalDetailsModel;
    });
    /* harmony import */


    var _shell_data_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../../shell/data-store */
    "./src/app/shell/data-store.ts");

    var ElectricalDetailsModel = /*#__PURE__*/function (_shell_data_store__WE7) {
      _inherits(ElectricalDetailsModel, _shell_data_store__WE7);

      var _super7 = _createSuper(ElectricalDetailsModel);

      function ElectricalDetailsModel() {
        var _this9;

        _classCallCheck(this, ElectricalDetailsModel);

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

      return ElectricalDetailsModel;
    }(_shell_data_store__WEBPACK_IMPORTED_MODULE_0__["ShellModel"]);
    /***/

  },

  /***/
  "./src/app/electrical/electrical.service.ts":
  /*!**************************************************!*\
    !*** ./src/app/electrical/electrical.service.ts ***!
    \**************************************************/

  /*! exports provided: ElectricalService */

  /***/
  function srcAppElectricalElectricalServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ElectricalService", function () {
      return ElectricalService;
    });
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _shell_data_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../shell/data-store */
    "./src/app/shell/data-store.ts");
    /* harmony import */


    var _listing_electrical_listing_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./listing/electrical-listing.model */
    "./src/app/electrical/listing/electrical-listing.model.ts");
    /* harmony import */


    var _details_electrical_details_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./details/electrical-details.model */
    "./src/app/electrical/details/electrical-details.model.ts");

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
  "./src/app/electrical/listing/electrical-listing.model.ts":
  /*!****************************************************************!*\
    !*** ./src/app/electrical/listing/electrical-listing.model.ts ***!
    \****************************************************************/

  /*! exports provided: ElectricalItemModel, ElectricalListingModel */

  /***/
  function srcAppElectricalListingElectricalListingModelTs(module, __webpack_exports__, __webpack_require__) {
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
    "./src/app/shell/data-store.ts");

    var ElectricalItemModel = function ElectricalItemModel() {
      _classCallCheck(this, ElectricalItemModel);

      this.tags = ['', '', ''];
      this.pictures = ['', '', '', '', ''];
    };

    var ElectricalListingModel = /*#__PURE__*/function (_shell_data_store__WE8) {
      _inherits(ElectricalListingModel, _shell_data_store__WE8);

      var _super8 = _createSuper(ElectricalListingModel);

      function ElectricalListingModel() {
        var _this10;

        _classCallCheck(this, ElectricalListingModel);

        _this10 = _super8.call(this);
        _this10.items = [new ElectricalItemModel(), new ElectricalItemModel(), new ElectricalItemModel(), new ElectricalItemModel()];
        return _this10;
      }

      return ElectricalListingModel;
    }(_shell_data_store__WEBPACK_IMPORTED_MODULE_0__["ShellModel"]);
    /***/

  },

  /***/
  "./src/app/fashion/details/fashion-details.model.ts":
  /*!**********************************************************!*\
    !*** ./src/app/fashion/details/fashion-details.model.ts ***!
    \**********************************************************/

  /*! exports provided: FashionDetailsModel */

  /***/
  function srcAppFashionDetailsFashionDetailsModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FashionDetailsModel", function () {
      return FashionDetailsModel;
    });
    /* harmony import */


    var _shell_data_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../../shell/data-store */
    "./src/app/shell/data-store.ts");

    var FashionDetailsModel = /*#__PURE__*/function (_shell_data_store__WE9) {
      _inherits(FashionDetailsModel, _shell_data_store__WE9);

      var _super9 = _createSuper(FashionDetailsModel);

      function FashionDetailsModel() {
        var _this11;

        _classCallCheck(this, FashionDetailsModel);

        _this11 = _super9.call(this);
        _this11.showcaseImages = [{
          type: '',
          source: ''
        }, {
          type: '',
          source: ''
        }, {
          type: '',
          source: ''
        }];
        _this11.colorVariants = [{
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
        _this11.sizeVariants = [{
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
        _this11.relatedProducts = [{
          id: null
        }, {
          id: null
        }];
        return _this11;
      }

      return FashionDetailsModel;
    }(_shell_data_store__WEBPACK_IMPORTED_MODULE_0__["ShellModel"]);
    /***/

  },

  /***/
  "./src/app/fashion/fashion.service.ts":
  /*!********************************************!*\
    !*** ./src/app/fashion/fashion.service.ts ***!
    \********************************************/

  /*! exports provided: FashionService */

  /***/
  function srcAppFashionFashionServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FashionService", function () {
      return FashionService;
    });
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _shell_data_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../shell/data-store */
    "./src/app/shell/data-store.ts");
    /* harmony import */


    var _listing_fashion_listing_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./listing/fashion-listing.model */
    "./src/app/fashion/listing/fashion-listing.model.ts");
    /* harmony import */


    var _details_fashion_details_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./details/fashion-details.model */
    "./src/app/fashion/details/fashion-details.model.ts");

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
  "./src/app/fashion/listing/fashion-listing.model.ts":
  /*!**********************************************************!*\
    !*** ./src/app/fashion/listing/fashion-listing.model.ts ***!
    \**********************************************************/

  /*! exports provided: FashionItemModel, FashionListingModel */

  /***/
  function srcAppFashionListingFashionListingModelTs(module, __webpack_exports__, __webpack_require__) {
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
    "./src/app/shell/data-store.ts");

    var FashionItemModel = function FashionItemModel() {
      _classCallCheck(this, FashionItemModel);
    };

    var FashionListingModel = /*#__PURE__*/function (_shell_data_store__WE10) {
      _inherits(FashionListingModel, _shell_data_store__WE10);

      var _super10 = _createSuper(FashionListingModel);

      function FashionListingModel() {
        var _this12;

        _classCallCheck(this, FashionListingModel);

        _this12 = _super10.call(this);
        _this12.items = [new FashionItemModel(), new FashionItemModel(), new FashionItemModel(), new FashionItemModel()];
        return _this12;
      }

      return FashionListingModel;
    }(_shell_data_store__WEBPACK_IMPORTED_MODULE_0__["ShellModel"]);
    /***/

  },

  /***/
  "./src/app/painting/details/painting-details.model.ts":
  /*!************************************************************!*\
    !*** ./src/app/painting/details/painting-details.model.ts ***!
    \************************************************************/

  /*! exports provided: PaintingDetailsModel */

  /***/
  function srcAppPaintingDetailsPaintingDetailsModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PaintingDetailsModel", function () {
      return PaintingDetailsModel;
    });
    /* harmony import */


    var _shell_data_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../../shell/data-store */
    "./src/app/shell/data-store.ts");

    var PaintingDetailsModel = /*#__PURE__*/function (_shell_data_store__WE11) {
      _inherits(PaintingDetailsModel, _shell_data_store__WE11);

      var _super11 = _createSuper(PaintingDetailsModel);

      function PaintingDetailsModel() {
        var _this13;

        _classCallCheck(this, PaintingDetailsModel);

        _this13 = _super11.call(this);
        _this13.ratings = [{
          concept: '',
          rate: null
        }, {
          concept: '',
          rate: null
        }, {
          concept: '',
          rate: null
        }];
        _this13.openHours = [{
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
        _this13.tags = ['', '', ''];
        _this13.usersPictures = ['', '', '', '', '', ''];
        _this13.popularDishes = [{
          name: '',
          rate: null,
          votesCount: null
        }, {
          name: '',
          rate: null,
          votesCount: null
        }];
        _this13.reviews = [{
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
        _this13.popularRecipes = [{
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
        return _this13;
      }

      return PaintingDetailsModel;
    }(_shell_data_store__WEBPACK_IMPORTED_MODULE_0__["ShellModel"]);
    /***/

  },

  /***/
  "./src/app/painting/listing/painting-listing.model.ts":
  /*!************************************************************!*\
    !*** ./src/app/painting/listing/painting-listing.model.ts ***!
    \************************************************************/

  /*! exports provided: PaintingItemModel, PaintingListingModel */

  /***/
  function srcAppPaintingListingPaintingListingModelTs(module, __webpack_exports__, __webpack_require__) {
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
    "./src/app/shell/data-store.ts");

    var PaintingItemModel = function PaintingItemModel() {
      _classCallCheck(this, PaintingItemModel);

      this.tags = ['', '', ''];
      this.pictures = ['', '', '', '', ''];
    };

    var PaintingListingModel = /*#__PURE__*/function (_shell_data_store__WE12) {
      _inherits(PaintingListingModel, _shell_data_store__WE12);

      var _super12 = _createSuper(PaintingListingModel);

      function PaintingListingModel() {
        var _this14;

        _classCallCheck(this, PaintingListingModel);

        _this14 = _super12.call(this);
        _this14.items = [new PaintingItemModel(), new PaintingItemModel(), new PaintingItemModel(), new PaintingItemModel()];
        return _this14;
      }

      return PaintingListingModel;
    }(_shell_data_store__WEBPACK_IMPORTED_MODULE_0__["ShellModel"]);
    /***/

  },

  /***/
  "./src/app/painting/painting.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/painting/painting.service.ts ***!
    \**********************************************/

  /*! exports provided: PaintingService */

  /***/
  function srcAppPaintingPaintingServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PaintingService", function () {
      return PaintingService;
    });
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _shell_data_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../shell/data-store */
    "./src/app/shell/data-store.ts");
    /* harmony import */


    var _listing_painting_listing_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./listing/painting-listing.model */
    "./src/app/painting/listing/painting-listing.model.ts");
    /* harmony import */


    var _details_painting_details_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./details/painting-details.model */
    "./src/app/painting/details/painting-details.model.ts");

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
  "./src/app/pipes/time-difference.pipe.ts":
  /*!***********************************************!*\
    !*** ./src/app/pipes/time-difference.pipe.ts ***!
    \***********************************************/

  /*! exports provided: TimeDifferencePipe */

  /***/
  function srcAppPipesTimeDifferencePipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TimeDifferencePipe", function () {
      return TimeDifferencePipe;
    });
    /* harmony import */


    var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! dayjs */
    "./node_modules/dayjs/dayjs.min.js");
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

  },

  /***/
  "./src/app/plumbing/details/plumbing-details.model.ts":
  /*!************************************************************!*\
    !*** ./src/app/plumbing/details/plumbing-details.model.ts ***!
    \************************************************************/

  /*! exports provided: plumbingDetailsModel */

  /***/
  function srcAppPlumbingDetailsPlumbingDetailsModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "plumbingDetailsModel", function () {
      return plumbingDetailsModel;
    });
    /* harmony import */


    var _shell_data_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../../shell/data-store */
    "./src/app/shell/data-store.ts");

    var plumbingDetailsModel = /*#__PURE__*/function (_shell_data_store__WE13) {
      _inherits(plumbingDetailsModel, _shell_data_store__WE13);

      var _super13 = _createSuper(plumbingDetailsModel);

      function plumbingDetailsModel() {
        var _this15;

        _classCallCheck(this, plumbingDetailsModel);

        _this15 = _super13.call(this);
        _this15.ratings = [{
          concept: '',
          rate: null
        }, {
          concept: '',
          rate: null
        }, {
          concept: '',
          rate: null
        }];
        _this15.openHours = [{
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
        _this15.tags = ['', '', ''];
        _this15.usersPictures = ['', '', '', '', '', ''];
        _this15.popularDishes = [{
          name: '',
          rate: null,
          votesCount: null
        }, {
          name: '',
          rate: null,
          votesCount: null
        }];
        _this15.reviews = [{
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
        _this15.popularRecipes = [{
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
        return _this15;
      }

      return plumbingDetailsModel;
    }(_shell_data_store__WEBPACK_IMPORTED_MODULE_0__["ShellModel"]);
    /***/

  },

  /***/
  "./src/app/plumbing/listing/plumbing-listing.model.ts":
  /*!************************************************************!*\
    !*** ./src/app/plumbing/listing/plumbing-listing.model.ts ***!
    \************************************************************/

  /*! exports provided: plumbingItemModel, plumbingListingModel */

  /***/
  function srcAppPlumbingListingPlumbingListingModelTs(module, __webpack_exports__, __webpack_require__) {
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
    "./src/app/shell/data-store.ts");

    var plumbingItemModel = function plumbingItemModel() {
      _classCallCheck(this, plumbingItemModel);

      this.tags = ['', '', ''];
      this.pictures = ['', '', '', '', ''];
    };

    var plumbingListingModel = /*#__PURE__*/function (_shell_data_store__WE14) {
      _inherits(plumbingListingModel, _shell_data_store__WE14);

      var _super14 = _createSuper(plumbingListingModel);

      function plumbingListingModel() {
        var _this16;

        _classCallCheck(this, plumbingListingModel);

        _this16 = _super14.call(this);
        _this16.items = [new plumbingItemModel(), new plumbingItemModel(), new plumbingItemModel(), new plumbingItemModel()];
        return _this16;
      }

      return plumbingListingModel;
    }(_shell_data_store__WEBPACK_IMPORTED_MODULE_0__["ShellModel"]);
    /***/

  },

  /***/
  "./src/app/plumbing/plumbing.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/plumbing/plumbing.service.ts ***!
    \**********************************************/

  /*! exports provided: plumbingService */

  /***/
  function srcAppPlumbingPlumbingServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "plumbingService", function () {
      return plumbingService;
    });
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _shell_data_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../shell/data-store */
    "./src/app/shell/data-store.ts");
    /* harmony import */


    var _listing_plumbing_listing_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./listing/plumbing-listing.model */
    "./src/app/plumbing/listing/plumbing-listing.model.ts");
    /* harmony import */


    var _details_plumbing_details_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./details/plumbing-details.model */
    "./src/app/plumbing/details/plumbing-details.model.ts");

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
  "./src/app/real-estate/details/real-estate-details.model.ts":
  /*!******************************************************************!*\
    !*** ./src/app/real-estate/details/real-estate-details.model.ts ***!
    \******************************************************************/

  /*! exports provided: RealEstateDetailsModel */

  /***/
  function srcAppRealEstateDetailsRealEstateDetailsModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RealEstateDetailsModel", function () {
      return RealEstateDetailsModel;
    });
    /* harmony import */


    var _shell_data_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../../shell/data-store */
    "./src/app/shell/data-store.ts");

    var RealEstateDetailsModel = /*#__PURE__*/function (_shell_data_store__WE15) {
      _inherits(RealEstateDetailsModel, _shell_data_store__WE15);

      var _super15 = _createSuper(RealEstateDetailsModel);

      function RealEstateDetailsModel() {
        var _this17;

        _classCallCheck(this, RealEstateDetailsModel);

        _this17 = _super15.call(this);
        _this17.amenities = [{
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
        return _this17;
      }

      return RealEstateDetailsModel;
    }(_shell_data_store__WEBPACK_IMPORTED_MODULE_0__["ShellModel"]);
    /***/

  },

  /***/
  "./src/app/real-estate/listing/real-estate-listing.model.ts":
  /*!******************************************************************!*\
    !*** ./src/app/real-estate/listing/real-estate-listing.model.ts ***!
    \******************************************************************/

  /*! exports provided: RealEstateItemModel, RealEstateListingModel */

  /***/
  function srcAppRealEstateListingRealEstateListingModelTs(module, __webpack_exports__, __webpack_require__) {
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
    "./src/app/shell/data-store.ts");

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

    var RealEstateListingModel = /*#__PURE__*/function (_shell_data_store__WE16) {
      _inherits(RealEstateListingModel, _shell_data_store__WE16);

      var _super16 = _createSuper(RealEstateListingModel);

      function RealEstateListingModel() {
        var _this18;

        _classCallCheck(this, RealEstateListingModel);

        _this18 = _super16.call(this);
        _this18.items = [new RealEstateItemModel(), new RealEstateItemModel(), new RealEstateItemModel(), new RealEstateItemModel()];
        return _this18;
      }

      return RealEstateListingModel;
    }(_shell_data_store__WEBPACK_IMPORTED_MODULE_0__["ShellModel"]);
    /***/

  },

  /***/
  "./src/app/real-estate/real-estate.service.ts":
  /*!****************************************************!*\
    !*** ./src/app/real-estate/real-estate.service.ts ***!
    \****************************************************/

  /*! exports provided: RealEstateService */

  /***/
  function srcAppRealEstateRealEstateServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RealEstateService", function () {
      return RealEstateService;
    });
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _shell_data_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../shell/data-store */
    "./src/app/shell/data-store.ts");
    /* harmony import */


    var _listing_real_estate_listing_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./listing/real-estate-listing.model */
    "./src/app/real-estate/listing/real-estate-listing.model.ts");
    /* harmony import */


    var _details_real_estate_details_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./details/real-estate-details.model */
    "./src/app/real-estate/details/real-estate-details.model.ts");

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
  "./src/app/roofing/details/roofing-details.model.ts":
  /*!**********************************************************!*\
    !*** ./src/app/roofing/details/roofing-details.model.ts ***!
    \**********************************************************/

  /*! exports provided: RoofingDetailsModel */

  /***/
  function srcAppRoofingDetailsRoofingDetailsModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RoofingDetailsModel", function () {
      return RoofingDetailsModel;
    });
    /* harmony import */


    var _shell_data_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../../shell/data-store */
    "./src/app/shell/data-store.ts");

    var RoofingDetailsModel = /*#__PURE__*/function (_shell_data_store__WE17) {
      _inherits(RoofingDetailsModel, _shell_data_store__WE17);

      var _super17 = _createSuper(RoofingDetailsModel);

      function RoofingDetailsModel() {
        var _this19;

        _classCallCheck(this, RoofingDetailsModel);

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

      return RoofingDetailsModel;
    }(_shell_data_store__WEBPACK_IMPORTED_MODULE_0__["ShellModel"]);
    /***/

  },

  /***/
  "./src/app/roofing/listing/roofing-listing.model.ts":
  /*!**********************************************************!*\
    !*** ./src/app/roofing/listing/roofing-listing.model.ts ***!
    \**********************************************************/

  /*! exports provided: RoofingItemModel, RoofingListingModel */

  /***/
  function srcAppRoofingListingRoofingListingModelTs(module, __webpack_exports__, __webpack_require__) {
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
    "./src/app/shell/data-store.ts");

    var RoofingItemModel = function RoofingItemModel() {
      _classCallCheck(this, RoofingItemModel);

      this.tags = ['', '', ''];
      this.pictures = ['', '', '', '', ''];
    };

    var RoofingListingModel = /*#__PURE__*/function (_shell_data_store__WE18) {
      _inherits(RoofingListingModel, _shell_data_store__WE18);

      var _super18 = _createSuper(RoofingListingModel);

      function RoofingListingModel() {
        var _this20;

        _classCallCheck(this, RoofingListingModel);

        _this20 = _super18.call(this);
        _this20.items = [new RoofingItemModel(), new RoofingItemModel(), new RoofingItemModel(), new RoofingItemModel()];
        return _this20;
      }

      return RoofingListingModel;
    }(_shell_data_store__WEBPACK_IMPORTED_MODULE_0__["ShellModel"]);
    /***/

  },

  /***/
  "./src/app/roofing/roofing.service.ts":
  /*!********************************************!*\
    !*** ./src/app/roofing/roofing.service.ts ***!
    \********************************************/

  /*! exports provided: RoofingService */

  /***/
  function srcAppRoofingRoofingServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RoofingService", function () {
      return RoofingService;
    });
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _shell_data_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../shell/data-store */
    "./src/app/shell/data-store.ts");
    /* harmony import */


    var _listing_roofing_listing_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./listing/roofing-listing.model */
    "./src/app/roofing/listing/roofing-listing.model.ts");
    /* harmony import */


    var _details_roofing_details_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./details/roofing-details.model */
    "./src/app/roofing/details/roofing-details.model.ts");

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
  "./src/app/showcase/showcase-shell.model.ts":
  /*!**************************************************!*\
    !*** ./src/app/showcase/showcase-shell.model.ts ***!
    \**************************************************/

  /*! exports provided: ShowcaseShellModel, ShowcaseShellUserModel, ShowcaseCommentModel, ShowcasePostModel, ShowcaseTaskModel, ShowcaseUser2Model, ShowcaseCompanyModel, ShowcaseCombinedTaskUserModel */

  /***/
  function srcAppShowcaseShowcaseShellModelTs(module, __webpack_exports__, __webpack_require__) {
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
    "./src/app/shell/data-store.ts");

    var ShowcaseShellModel = /*#__PURE__*/function (_shell_data_store__WE19) {
      _inherits(ShowcaseShellModel, _shell_data_store__WE19);

      var _super19 = _createSuper(ShowcaseShellModel);

      function ShowcaseShellModel() {
        _classCallCheck(this, ShowcaseShellModel);

        return _super19.call(this);
      }

      return ShowcaseShellModel;
    }(_shell_data_store__WEBPACK_IMPORTED_MODULE_0__["ShellModel"]);

    var ShowcaseShellUserModel = /*#__PURE__*/function (_shell_data_store__WE20) {
      _inherits(ShowcaseShellUserModel, _shell_data_store__WE20);

      var _super20 = _createSuper(ShowcaseShellUserModel);

      function ShowcaseShellUserModel() {
        _classCallCheck(this, ShowcaseShellUserModel);

        return _super20.call(this);
      }

      return ShowcaseShellUserModel;
    }(_shell_data_store__WEBPACK_IMPORTED_MODULE_0__["ShellModel"]);

    var ShowcaseCommentModel = /*#__PURE__*/function (_shell_data_store__WE21) {
      _inherits(ShowcaseCommentModel, _shell_data_store__WE21);

      var _super21 = _createSuper(ShowcaseCommentModel);

      function ShowcaseCommentModel() {
        _classCallCheck(this, ShowcaseCommentModel);

        return _super21.call(this);
      }

      return ShowcaseCommentModel;
    }(_shell_data_store__WEBPACK_IMPORTED_MODULE_0__["ShellModel"]);

    var ShowcasePostModel = /*#__PURE__*/function (_shell_data_store__WE22) {
      _inherits(ShowcasePostModel, _shell_data_store__WE22);

      var _super22 = _createSuper(ShowcasePostModel);

      function ShowcasePostModel() {
        _classCallCheck(this, ShowcasePostModel);

        return _super22.call(this);
      }

      return ShowcasePostModel;
    }(_shell_data_store__WEBPACK_IMPORTED_MODULE_0__["ShellModel"]);

    var ShowcaseTaskModel = /*#__PURE__*/function (_shell_data_store__WE23) {
      _inherits(ShowcaseTaskModel, _shell_data_store__WE23);

      var _super23 = _createSuper(ShowcaseTaskModel);

      function ShowcaseTaskModel() {
        _classCallCheck(this, ShowcaseTaskModel);

        return _super23.call(this);
      }

      return ShowcaseTaskModel;
    }(_shell_data_store__WEBPACK_IMPORTED_MODULE_0__["ShellModel"]);

    var ShowcaseUser2Model = /*#__PURE__*/function (_shell_data_store__WE24) {
      _inherits(ShowcaseUser2Model, _shell_data_store__WE24);

      var _super24 = _createSuper(ShowcaseUser2Model);

      function ShowcaseUser2Model() {
        _classCallCheck(this, ShowcaseUser2Model);

        return _super24.call(this);
      }

      return ShowcaseUser2Model;
    }(_shell_data_store__WEBPACK_IMPORTED_MODULE_0__["ShellModel"]);

    var ShowcaseCompanyModel = /*#__PURE__*/function (_shell_data_store__WE25) {
      _inherits(ShowcaseCompanyModel, _shell_data_store__WE25);

      var _super25 = _createSuper(ShowcaseCompanyModel);

      function ShowcaseCompanyModel() {
        _classCallCheck(this, ShowcaseCompanyModel);

        return _super25.call(this);
      }

      return ShowcaseCompanyModel;
    }(_shell_data_store__WEBPACK_IMPORTED_MODULE_0__["ShellModel"]);

    var ShowcaseCombinedTaskUserModel = /*#__PURE__*/function (_ShowcaseTaskModel) {
      _inherits(ShowcaseCombinedTaskUserModel, _ShowcaseTaskModel);

      var _super26 = _createSuper(ShowcaseCombinedTaskUserModel);

      function ShowcaseCombinedTaskUserModel() {
        _classCallCheck(this, ShowcaseCombinedTaskUserModel);

        return _super26.call(this);
      }

      return ShowcaseCombinedTaskUserModel;
    }(ShowcaseTaskModel);
    /***/

  },

  /***/
  "./src/app/showcase/showcase.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/showcase/showcase.service.ts ***!
    \**********************************************/

  /*! exports provided: ShowcaseService */

  /***/
  function srcAppShowcaseShowcaseServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShowcaseService", function () {
      return ShowcaseService;
    });
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _showcase_shell_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./showcase-shell.model */
    "./src/app/showcase/showcase-shell.model.ts");
    /* harmony import */


    var _shell_data_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../shell/data-store */
    "./src/app/shell/data-store.ts"); // tslint:disable-next-line:max-line-length


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
          var _this21 = this;

          return dependantDataSource.pipe( // Filter user values that are not shells. We need to add this filter if using the combinedUserDataStore timeline
          Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (post) {
            return !post.isShell;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["concatMap"])(function (post) {
            return _this21.http.get('https://jsonplaceholder.typicode.com/comments?postId=' + post.id);
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
          var _this22 = this;

          return this.getTasks().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["concatMap"])(function (tasks) {
            var completeTaskData = tasks.map(function (task) {
              // for each task retrun a new observable with the ShowcaseCombinedTaskUserModel
              var taskUser = _this22.getUser(task.userId);

              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["combineLatest"])([Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(task), taskUser]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (_ref4) {
                var _ref5 = _slicedToArray(_ref4, 2),
                    taskData = _ref5[0],
                    user = _ref5[1];

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
  "./src/app/travel/details/travel-details.model.ts":
  /*!********************************************************!*\
    !*** ./src/app/travel/details/travel-details.model.ts ***!
    \********************************************************/

  /*! exports provided: TravelDetailsModel */

  /***/
  function srcAppTravelDetailsTravelDetailsModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TravelDetailsModel", function () {
      return TravelDetailsModel;
    });
    /* harmony import */


    var _shell_data_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../../shell/data-store */
    "./src/app/shell/data-store.ts");

    var TravelDetailsModel = /*#__PURE__*/function (_shell_data_store__WE26) {
      _inherits(TravelDetailsModel, _shell_data_store__WE26);

      var _super27 = _createSuper(TravelDetailsModel);

      function TravelDetailsModel() {
        var _this23;

        _classCallCheck(this, TravelDetailsModel);

        _this23 = _super27.call(this);
        _this23.tags = new Array(3).fill('');
        _this23.openHours = [{
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
        _this23.whereToStay = [{
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
        _this23.whereToEat = [{
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
        _this23.relatedActivities = [{
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
        return _this23;
      }

      return TravelDetailsModel;
    }(_shell_data_store__WEBPACK_IMPORTED_MODULE_0__["ShellModel"]);
    /***/

  },

  /***/
  "./src/app/travel/listing/travel-listing.model.ts":
  /*!********************************************************!*\
    !*** ./src/app/travel/listing/travel-listing.model.ts ***!
    \********************************************************/

  /*! exports provided: TravelItemModel, TravelListingModel */

  /***/
  function srcAppTravelListingTravelListingModelTs(module, __webpack_exports__, __webpack_require__) {
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
    "./src/app/shell/data-store.ts");

    var TravelItemModel = function TravelItemModel() {
      _classCallCheck(this, TravelItemModel);
    };

    var TravelListingModel = /*#__PURE__*/function (_shell_data_store__WE27) {
      _inherits(TravelListingModel, _shell_data_store__WE27);

      var _super28 = _createSuper(TravelListingModel);

      function TravelListingModel() {
        var _this24;

        _classCallCheck(this, TravelListingModel);

        _this24 = _super28.call(this);
        _this24.items = [new TravelItemModel(), new TravelItemModel(), new TravelItemModel(), new TravelItemModel()];
        return _this24;
      }

      return TravelListingModel;
    }(_shell_data_store__WEBPACK_IMPORTED_MODULE_0__["ShellModel"]);
    /***/

  },

  /***/
  "./src/app/travel/travel.service.ts":
  /*!******************************************!*\
    !*** ./src/app/travel/travel.service.ts ***!
    \******************************************/

  /*! exports provided: TravelService */

  /***/
  function srcAppTravelTravelServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TravelService", function () {
      return TravelService;
    });
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _shell_data_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../shell/data-store */
    "./src/app/shell/data-store.ts");
    /* harmony import */


    var _listing_travel_listing_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./listing/travel-listing.model */
    "./src/app/travel/listing/travel-listing.model.ts");
    /* harmony import */


    var _details_travel_details_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./details/travel-details.model */
    "./src/app/travel/details/travel-details.model.ts");

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
  "./src/app/user/friends/user-friends.model.ts":
  /*!****************************************************!*\
    !*** ./src/app/user/friends/user-friends.model.ts ***!
    \****************************************************/

  /*! exports provided: UserFriendsModel */

  /***/
  function srcAppUserFriendsUserFriendsModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserFriendsModel", function () {
      return UserFriendsModel;
    });
    /* harmony import */


    var _shell_data_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../../shell/data-store */
    "./src/app/shell/data-store.ts");

    var UserFriendsModel = /*#__PURE__*/function (_shell_data_store__WE28) {
      _inherits(UserFriendsModel, _shell_data_store__WE28);

      var _super29 = _createSuper(UserFriendsModel);

      function UserFriendsModel() {
        var _this25;

        _classCallCheck(this, UserFriendsModel);

        _this25 = _super29.call(this);
        _this25.friends = [{
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
        _this25.followers = [{
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
        _this25.following = [{
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
        return _this25;
      }

      return UserFriendsModel;
    }(_shell_data_store__WEBPACK_IMPORTED_MODULE_0__["ShellModel"]);
    /***/

  },

  /***/
  "./src/app/user/profile/user-profile.model.ts":
  /*!****************************************************!*\
    !*** ./src/app/user/profile/user-profile.model.ts ***!
    \****************************************************/

  /*! exports provided: UserProfileModel */

  /***/
  function srcAppUserProfileUserProfileModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserProfileModel", function () {
      return UserProfileModel;
    });
    /* harmony import */


    var _shell_data_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../../shell/data-store */
    "./src/app/shell/data-store.ts");

    var UserProfileModel = /*#__PURE__*/function (_shell_data_store__WE29) {
      _inherits(UserProfileModel, _shell_data_store__WE29);

      var _super30 = _createSuper(UserProfileModel);

      function UserProfileModel() {
        var _this26;

        _classCallCheck(this, UserProfileModel);

        _this26 = _super30.call(this);
        _this26.friends = [{
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
        _this26.photos = ['', '', '', ''];
        return _this26;
      }

      return UserProfileModel;
    }(_shell_data_store__WEBPACK_IMPORTED_MODULE_0__["ShellModel"]);
    /***/

  },

  /***/
  "./src/app/user/user.service.ts":
  /*!**************************************!*\
    !*** ./src/app/user/user.service.ts ***!
    \**************************************/

  /*! exports provided: UserService */

  /***/
  function srcAppUserUserServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserService", function () {
      return UserService;
    });
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _shell_data_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../shell/data-store */
    "./src/app/shell/data-store.ts");
    /* harmony import */


    var _profile_user_profile_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./profile/user-profile.model */
    "./src/app/user/profile/user-profile.model.ts");
    /* harmony import */


    var _friends_user_friends_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./friends/user-friends.model */
    "./src/app/user/friends/user-friends.model.ts");

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
  "./src/app/validators/password.validator.ts":
  /*!**************************************************!*\
    !*** ./src/app/validators/password.validator.ts ***!
    \**************************************************/

  /*! exports provided: PasswordValidator */

  /***/
  function srcAppValidatorsPasswordValidatorTs(module, __webpack_exports__, __webpack_require__) {
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
  "./src/app/wood/details/wood-details.model.ts":
  /*!****************************************************!*\
    !*** ./src/app/wood/details/wood-details.model.ts ***!
    \****************************************************/

  /*! exports provided: woodDetailsModel */

  /***/
  function srcAppWoodDetailsWoodDetailsModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "woodDetailsModel", function () {
      return woodDetailsModel;
    });
    /* harmony import */


    var _shell_data_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../../shell/data-store */
    "./src/app/shell/data-store.ts");

    var woodDetailsModel = /*#__PURE__*/function (_shell_data_store__WE30) {
      _inherits(woodDetailsModel, _shell_data_store__WE30);

      var _super31 = _createSuper(woodDetailsModel);

      function woodDetailsModel() {
        var _this27;

        _classCallCheck(this, woodDetailsModel);

        _this27 = _super31.call(this);
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

      return woodDetailsModel;
    }(_shell_data_store__WEBPACK_IMPORTED_MODULE_0__["ShellModel"]);
    /***/

  },

  /***/
  "./src/app/wood/listing/wood-listing.model.ts":
  /*!****************************************************!*\
    !*** ./src/app/wood/listing/wood-listing.model.ts ***!
    \****************************************************/

  /*! exports provided: woodItemModel, woodListingModel */

  /***/
  function srcAppWoodListingWoodListingModelTs(module, __webpack_exports__, __webpack_require__) {
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
    "./src/app/shell/data-store.ts");

    var woodItemModel = function woodItemModel() {
      _classCallCheck(this, woodItemModel);

      this.tags = ['', '', ''];
      this.pictures = ['', '', '', '', ''];
    };

    var woodListingModel = /*#__PURE__*/function (_shell_data_store__WE31) {
      _inherits(woodListingModel, _shell_data_store__WE31);

      var _super32 = _createSuper(woodListingModel);

      function woodListingModel() {
        var _this28;

        _classCallCheck(this, woodListingModel);

        _this28 = _super32.call(this);
        _this28.items = [new woodItemModel(), new woodItemModel(), new woodItemModel(), new woodItemModel()];
        return _this28;
      }

      return woodListingModel;
    }(_shell_data_store__WEBPACK_IMPORTED_MODULE_0__["ShellModel"]);
    /***/

  },

  /***/
  "./src/app/wood/wood.service.ts":
  /*!**************************************!*\
    !*** ./src/app/wood/wood.service.ts ***!
    \**************************************/

  /*! exports provided: woodService */

  /***/
  function srcAppWoodWoodServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "woodService", function () {
      return woodService;
    });
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _shell_data_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../shell/data-store */
    "./src/app/shell/data-store.ts");
    /* harmony import */


    var _listing_wood_listing_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./listing/wood-listing.model */
    "./src/app/wood/listing/wood-listing.model.ts");
    /* harmony import */


    var _details_wood_details_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./details/wood-details.model */
    "./src/app/wood/details/wood-details.model.ts");

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

  }
}]);
//# sourceMappingURL=common-es5.js.map