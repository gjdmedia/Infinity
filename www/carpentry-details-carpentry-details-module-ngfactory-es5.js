(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["carpentry-details-carpentry-details-module-ngfactory"], {
    /***/
    "Khd1":
    /*!*****************************************************************!*\
      !*** ./src/app/carpentry/details/carpentry-details.resolver.ts ***!
      \*****************************************************************/

    /*! exports provided: CarpentryDetailsResolver */

    /***/
    function Khd1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CarpentryDetailsResolver", function () {
        return CarpentryDetailsResolver;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _carpentry_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../carpentry.service */
      "xBcy");

      var CarpentryDetailsResolver = /*#__PURE__*/function () {
        function CarpentryDetailsResolver(carpentryService) {
          _classCallCheck(this, CarpentryDetailsResolver);

          this.carpentryService = carpentryService;
        }

        _createClass(CarpentryDetailsResolver, [{
          key: "resolve",
          value: function resolve(route) {
            var itemSlug = route.paramMap.get('productId');
            var dataSource = this.carpentryService.getDetailsDataSource(itemSlug);
            var dataStore = this.carpentryService.getDetailsStore(dataSource);
            return dataStore;
          }
        }]);

        return CarpentryDetailsResolver;
      }();
      /***/

    },

    /***/
    "PQIa":
    /*!*************************************************************!*\
      !*** ./src/app/carpentry/details/carpentry-details.page.ts ***!
      \*************************************************************/

    /*! exports provided: CarpentryDetailsPage */

    /***/
    function PQIa(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CarpentryDetailsPage", function () {
        return CarpentryDetailsPage;
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


      var _carpentry_details_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./carpentry-details.model */
      "K0As");

      var CarpentryDetailsPage = /*#__PURE__*/function () {
        function CarpentryDetailsPage(menu, route, toastController, router) {
          _classCallCheck(this, CarpentryDetailsPage);

          this.menu = menu;
          this.route = route;
          this.toastController = toastController;
          this.router = router; // Gather all component subscription in one place. Can be one Subscription or multiple (chained using the Subscription.add() method)

          this.slidesOptions = {
            zoom: {
              toggle: false // Disable zooming to prevent weird double tap zomming on slide images

            }
          };
          this.isFirstSlide = true;
          this.isLastSlide = false;
          this.generateSides();
        }

        _createClass(CarpentryDetailsPage, [{
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
            this.side1 = Math.floor(Math.random() * 30) + 5;
            this.side2 = this.side1 / 2;
            console.trace('Random: ', this.side1);
            this.side1a = Math.floor(Math.random() * 30) + 5;
            this.side2a = this.side1a * 0.384615385;
            this.side2a = Math.round(this.side2a * 10) / 10;
            this.side5a = this.side1a * 0.57;
            this.side5a = Math.round(this.side5a * 10) / 10;
            this.side6a = this.side1a * 0.615;
            this.side6a = Math.round(this.side6a * 10) / 10;
            this.spindleThickness = Math.floor(Math.random() * 35) + 30;
            this.newelDistance = Math.floor(Math.random() * 4000) + 3000;
            this.costTimber = Math.floor(Math.random() * 500) + 30;
            this.costDelivery = Math.floor(Math.random() * 20) + 5;
            this.plasterCoverage = 2.88;
            this.timberCost = Math.floor(Math.random() * 400) + 100;
            this.screwsCost = Math.floor(Math.random() * 100) + 10;
            this.plugsCost = Math.floor(Math.random() * 100) + 10;
            this.discount = Math.floor(Math.random() * 35) + 20;
            this.joistLength = Math.floor(Math.random() * 15) + 2;
            this.numerator = Math.floor(Math.random() * 3) + 1;
            this.denominator = Math.floor(Math.random() * 8) + 4;
            this.rotAmount = this.numerator + " / " + this.denominator;
            this.radius = Math.floor(Math.random() * 300) + 10;
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this3 = this;

            // On init, the route subscription is the active subscription
            this.subscriptions = this.route.data.subscribe(function (resolvedRouteData) {
              // Route subscription resolved, now the active subscription is the Observable extracted from the resolved route data
              _this3.subscriptions = _utils_resolver_helper__WEBPACK_IMPORTED_MODULE_3__["ResolverHelper"].extractData(resolvedRouteData.data, _carpentry_details_model__WEBPACK_IMPORTED_MODULE_4__["CarpentryDetailsModel"]).subscribe(function (state) {
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

                            _this4.side3 = "";
                            _this4.side4 = "";
                            _this4.side3a = "";
                            _this4.side4a = "";
                            _this4.total = "";
                            _this4.totala = "";
                            _this4.totalArea = "";
                            _this4.totalTins = "";
                            _this4.totalXVat = "";
                            _this4.totalIncVat = "";
                            _this4.vat = "";
                            _this4.numberOfBoards = "";
                            _this4.totalPlasterArea = "";
                            _this4.totalPlasterAreaDoubled = "";
                            _this4.totalXDiscount = "";
                            _this4.discountTotal = "";
                            _this4.totalCost = "";
                            _this4.joistReplacement = "";
                            _this4.diameter = "";
                            _this4.circumference = "";
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
              var _this5 = this;

              var toast;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.toastController.create({
                        header: 'Sorry that is incorrect, retry or watch a video?',
                        // message: 'Try again',
                        position: 'bottom',
                        buttons: [{
                          text: 'Retry',
                          role: 'cancel',
                          handler: function handler() {
                            console.trace('Retry');
                          }
                        }, {
                          text: 'Video',
                          role: 'submit',
                          handler: function handler() {
                            console.trace('Video');

                            _this5.router.navigate(['video-playlist'], {
                              replaceUrl: true
                            });
                          }
                        }]
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
          key: "presentToastIncorrect7",
          value: function presentToastIncorrect7() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var toast;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.toastController.create({
                        message: 'Try again!',
                        position: 'bottom',
                        duration: 2000
                      });

                    case 2:
                      toast = _context3.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "calculateSimple",
          value: function calculateSimple() {
            if (this.total == this.side1 + this.side1 + this.side2 + this.side2) {
              console.trace('Correct!');
              this.presentToastCorrect();
            } else {
              this.presentToastIncorrect();
            }
          }
        }, {
          key: "calculateSimpleArea",
          value: function calculateSimpleArea() {
            if (this.totalArea == this.side1 * this.side2) {
              console.trace('Correct!');
              this.presentToastCorrect();
            } else {
              this.presentToastIncorrect();
            }
          }
        }, {
          key: "calculateComplexArea",
          value: function calculateComplexArea() {
            if (this.totalArea == this.side1a * this.side2a + this.side4a * this.side5a) {
              console.trace('Correct!');
              this.presentToastCorrect();
            } else {
              this.presentToastIncorrect();
            }
          }
        }, {
          key: "calculateAdvanced",
          value: function calculateAdvanced() {
            if (this.totala == this.side1a + this.side1a + this.side6a + this.side6a) {
              console.trace('Correct!');
              this.presentToastCorrect();
            } else {
              this.presentToastIncorrect();
            }
          }
        }, {
          key: "calculateSpindles",
          value: function calculateSpindles() {
            if (this.spindlesNeeded = this.newelDistance / (this.spindleThickness + 100)) {
              console.trace('Correct!');
              this.presentToastCorrect();
            } else {
              this.presentToastIncorrect();
            }
          }
        }, {
          key: "calculateSimplePaint",
          value: function calculateSimplePaint() {
            var tinsRequired = Math.round(this.totalArea / 22 * 10) / 10;
            console.trace(tinsRequired);

            if (this.totalArea == this.side1 * this.side2 && tinsRequired == this.totalTins) {
              console.trace('Correct!');
              this.presentToastCorrect();
            } else {
              this.presentToastIncorrect();
            }
          }
        }, {
          key: "calculateSimpleTimber",
          value: function calculateSimpleTimber() {
            var vatAmount = (this.costTimber + this.costDelivery) * 0.2;
            console.trace(vatAmount);

            if (this.costTimber + this.costDelivery + vatAmount == this.totalIncVat) {
              console.trace('Correct!');
              this.presentToastCorrect();
            } else {
              this.presentToastIncorrect();
            }
          }
        }, {
          key: "calculatePlasteboard",
          value: function calculatePlasteboard() {
            var requiredBoards = Math.round(this.totalPlasterAreaDoubled / 2.88 * 10) / 10;

            if (this.totalPlasterAreaDoubled == this.side2 * this.side1 * 2 && this.numberOfBoards == requiredBoards) {
              console.trace('Correct!');
              this.presentToastCorrect();
            } else {
              this.presentToastIncorrect();
            }
          }
        }, {
          key: "calculateDiscount",
          value: function calculateDiscount() {
            var subTotal = this.timberCost + this.plugsCost + this.screwsCost;
            var discAmount = subTotal * (this.discount / 100);
            discAmount = Math.ceil(discAmount * 100) / 100;
            console.trace("Subtotal = " + subTotal + "Discount = " + discAmount + " Answer : " + (subTotal - discAmount));

            if (this.totalCost == subTotal - discAmount) {
              console.trace('Correct!');
              this.presentToastCorrect();
            } else {
              this.presentToastIncorrect();
            }
          }
        }, {
          key: "calculateJoist",
          value: function calculateJoist() {
            var rotLevel = Math.round(this.joistLength * this.numerator / this.denominator * 10) / 10;
            console.trace(rotLevel + " & " + this.joistReplacement);

            if (rotLevel == this.joistReplacement) {
              console.trace('Correct!');
              this.presentToastCorrect();
            } else {
              this.presentToastIncorrect();
            }
          }
        }, {
          key: "calculateCircumference",
          value: function calculateCircumference() {
            var checkDiameter = Math.round(this.radius * 2 * 10) / 10;
            var pi = Math.round(this.diameter * 3.14159265359 * 10) / 10;
            console.trace(checkDiameter + " & " + this.diameter + " Pi " + pi);

            if (checkDiameter == this.diameter && this.circumference == pi) {
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

        return CarpentryDetailsPage;
      }();
      /***/

    },

    /***/
    "QTch":
    /*!***************************************************************************************!*\
      !*** ./src/app/carpentry/details/styles/carpentry-details.shell.scss.shim.ngstyle.js ***!
      \***************************************************************************************/

    /*! exports provided: styles */

    /***/
    function QTch(module, __webpack_exports__, __webpack_require__) {
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


      var styles = ["[_nghost-%COMP%] {\n  --shell-color: #ebbb00;\n  --shell-color-rgb: 235,187,0;\n}\n\n.details-scores[_ngcontent-%COMP%]   .score-value[_ngcontent-%COMP%]    > app-text-shell[_ngcontent-%COMP%] {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .15);\n  --text-shell-line-height: 14px;\n  min-width: 30px;\n}\n\n.details-scores[_ngcontent-%COMP%]   .score-value[_ngcontent-%COMP%]    > app-text-shell.text-loaded[_ngcontent-%COMP%] {\n  min-width: 0px;\n}\n\napp-image-shell.showcase-image[_ngcontent-%COMP%] {\n  --image-shell-loading-background: rgba(var(--shell-color-rgb), .10);\n  --image-shell-spinner-color: rgba(var(--shell-color-rgb), .25);\n  --image-shell-overlay-background: rgba(var(--ion-color-dark-rgb), .60);\n}\n\napp-image-shell.icon-image[_ngcontent-%COMP%] {\n  --image-shell-loading-background: transparent;\n}\n\n.details-name[_ngcontent-%COMP%]    > app-text-shell[_ngcontent-%COMP%] {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .20);\n  --text-shell-line-height: 18px;\n  max-width: 30%;\n}\n\n.details-name[_ngcontent-%COMP%]    > app-text-shell.text-loaded[_ngcontent-%COMP%] {\n  max-width: unset;\n}\n\n.details-style[_ngcontent-%COMP%]    > app-text-shell[_ngcontent-%COMP%] {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .10);\n  --text-shell-line-height: 16px;\n  max-width: 50%;\n}\n\n.details-style[_ngcontent-%COMP%]    > app-text-shell.text-loaded[_ngcontent-%COMP%] {\n  max-width: unset;\n}\n\n.restaurant-rating[_ngcontent-%COMP%]    > app-text-shell[_ngcontent-%COMP%] {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .15);\n  --text-shell-line-height: 12px;\n  min-width: 20px;\n}\n\n.restaurant-rating[_ngcontent-%COMP%]    > app-text-shell.text-loaded[_ngcontent-%COMP%] {\n  min-width: 0px;\n}\n\n.schedule-day[_ngcontent-%COMP%]    > app-text-shell[_ngcontent-%COMP%] {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .10);\n  --text-shell-line-height: 14px;\n  max-width: 90%;\n}\n\n.schedule-day[_ngcontent-%COMP%]    > app-text-shell.text-loaded[_ngcontent-%COMP%] {\n  max-width: inherit;\n}\n\n.schedule-value[_ngcontent-%COMP%]    > app-text-shell[_ngcontent-%COMP%] {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .10);\n  --text-shell-line-height: 14px;\n  max-width: 100%;\n}\n\n.schedule-value[_ngcontent-%COMP%]    > app-text-shell.text-loaded[_ngcontent-%COMP%] {\n  max-width: inherit;\n}\n\n.location-address[_ngcontent-%COMP%]    > app-text-shell[_ngcontent-%COMP%] {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .10);\n  --text-shell-line-height: 14px;\n  max-width: 60%;\n}\n\n.location-address[_ngcontent-%COMP%]    > app-text-shell.text-loaded[_ngcontent-%COMP%] {\n  max-width: inherit;\n}\n\napp-image-shell.location-image[_ngcontent-%COMP%] {\n  --image-shell-loading-background: rgba(var(--shell-color-rgb), .10);\n  --image-shell-spinner-color: rgba(var(--shell-color-rgb), .25);\n}\n\n.item-tag[_ngcontent-%COMP%]    > app-text-shell[_ngcontent-%COMP%] {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .15);\n  --text-shell-line-height: 14px;\n  min-width: 50px;\n}\n\n.item-tag[_ngcontent-%COMP%]    > app-text-shell.text-loaded[_ngcontent-%COMP%] {\n  min-width: 0px;\n}\n\napp-image-shell.user-picture-image[_ngcontent-%COMP%] {\n  --image-shell-loading-background: rgba(var(--shell-color-rgb), .10);\n}\n\n.dish-name[_ngcontent-%COMP%]    > app-text-shell[_ngcontent-%COMP%] {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .10);\n  --text-shell-line-height: 14px;\n}\n\n.dish-votes-value[_ngcontent-%COMP%]    > app-text-shell[_ngcontent-%COMP%] {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .15);\n  --text-shell-line-height: 14px;\n  min-width: 30px;\n}\n\n.dish-votes-value[_ngcontent-%COMP%]    > app-text-shell.text-loaded[_ngcontent-%COMP%] {\n  min-width: 0px;\n}\n\napp-image-shell.review-user-image[_ngcontent-%COMP%] {\n  --image-shell-loading-background: rgba(var(--shell-color-rgb), .10);\n}\n\n.review-user-name[_ngcontent-%COMP%]    > app-text-shell[_ngcontent-%COMP%] {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .15);\n  --text-shell-line-height: 16px;\n  max-width: 50%;\n}\n\n.review-user-name[_ngcontent-%COMP%]    > app-text-shell.text-loaded[_ngcontent-%COMP%] {\n  max-width: inherit;\n}\n\n.review-date[_ngcontent-%COMP%]    > app-text-shell[_ngcontent-%COMP%] {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .05);\n  --text-shell-line-height: 11px;\n}\n\n.review-rating[_ngcontent-%COMP%]    > app-text-shell[_ngcontent-%COMP%] {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .15);\n  --text-shell-line-height: 12px;\n}\n\n.review-message[_ngcontent-%COMP%]    > app-text-shell[_ngcontent-%COMP%] {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .15);\n  --text-shell-line-height: 14px;\n}\n\napp-image-shell.recipe-cover-image[_ngcontent-%COMP%] {\n  --image-shell-loading-background: rgba(var(--shell-color-rgb), .20);\n}\n\napp-image-shell.chef-picture-image[_ngcontent-%COMP%] {\n  --image-shell-loading-background: var(--shell-color);\n  --image-shell-border-radius: 50%;\n  z-index: 3;\n}\n\n.recipe-author[_ngcontent-%COMP%]    > app-text-shell[_ngcontent-%COMP%] {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .10);\n  --text-shell-line-height: 16px;\n}\n\n.recipe-name[_ngcontent-%COMP%]    > app-text-shell[_ngcontent-%COMP%] {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .20);\n}\n\n.recipe-chef[_ngcontent-%COMP%]    > app-text-shell[_ngcontent-%COMP%] {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .15);\n  --text-shell-line-height: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FycGVudHJ5L2RldGFpbHMvc3R5bGVzL2NhcnBlbnRyeS1kZXRhaWxzLnNoZWxsLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxzQkFBQTtFQUNBLDRCQUFBO0FBREY7O0FBWUU7RUFDRSwwREFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtBQVRKOztBQVdJO0VBQ0UsY0FBQTtBQVROOztBQWNBO0VBQ0UsbUVBQUE7RUFDQSw4REFBQTtFQUNBLHNFQUFBO0FBWEY7O0FBY0E7RUFDRSw2Q0FBQTtBQVhGOztBQWNBO0VBQ0UsMERBQUE7RUFDQSw4QkFBQTtFQUNBLGNBQUE7QUFYRjs7QUFhRTtFQUNFLGdCQUFBO0FBWEo7O0FBZUE7RUFDRSwwREFBQTtFQUNBLDhCQUFBO0VBQ0EsY0FBQTtBQVpGOztBQWNFO0VBQ0UsZ0JBQUE7QUFaSjs7QUFnQkE7RUFDRSwwREFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtBQWJGOztBQWVFO0VBQ0UsY0FBQTtBQWJKOztBQWlCQTtFQUNFLDBEQUFBO0VBQ0EsOEJBQUE7RUFDQSxjQUFBO0FBZEY7O0FBZ0JFO0VBQ0Usa0JBQUE7QUFkSjs7QUFrQkE7RUFDRSwwREFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtBQWZGOztBQWlCRTtFQUNFLGtCQUFBO0FBZko7O0FBbUJBO0VBQ0UsMERBQUE7RUFDQSw4QkFBQTtFQUNBLGNBQUE7QUFoQkY7O0FBa0JFO0VBQ0Usa0JBQUE7QUFoQko7O0FBb0JBO0VBQ0UsbUVBQUE7RUFDQSw4REFBQTtBQWpCRjs7QUFvQkE7RUFDRSwwREFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtBQWpCRjs7QUFtQkU7RUFDRSxjQUFBO0FBakJKOztBQXFCQTtFQUNFLG1FQUFBO0FBbEJGOztBQXFCQTtFQUNFLDBEQUFBO0VBQ0EsOEJBQUE7QUFsQkY7O0FBcUJBO0VBQ0UsMERBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7QUFsQkY7O0FBb0JFO0VBQ0UsY0FBQTtBQWxCSjs7QUFzQkE7RUFDRSxtRUFBQTtBQW5CRjs7QUFzQkE7RUFDRSwwREFBQTtFQUNBLDhCQUFBO0VBQ0EsY0FBQTtBQW5CRjs7QUFxQkU7RUFDRSxrQkFBQTtBQW5CSjs7QUF1QkE7RUFDRSwwREFBQTtFQUNBLDhCQUFBO0FBcEJGOztBQXVCQTtFQUNFLDBEQUFBO0VBQ0EsOEJBQUE7QUFwQkY7O0FBdUJBO0VBQ0UsMERBQUE7RUFDQSw4QkFBQTtBQXBCRjs7QUF1QkE7RUFDRSxtRUFBQTtBQXBCRjs7QUF1QkE7RUFDRSxvREFBQTtFQUNBLGdDQUFBO0VBQ0EsVUFBQTtBQXBCRjs7QUF1QkE7RUFDRSwwREFBQTtFQUNBLDhCQUFBO0FBcEJGOztBQXVCQTtFQUNFLDBEQUFBO0FBcEJGOztBQXVCQTtFQUNFLDBEQUFBO0VBQ0EsOEJBQUE7QUFwQkYiLCJmaWxlIjoic3JjL2FwcC9jYXJwZW50cnkvZGV0YWlscy9zdHlsZXMvY2FycGVudHJ5LWRldGFpbHMuc2hlbGwuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEN1c3RvbSB2YXJpYWJsZXNcbi8vIE5vdGU6ICBUaGVzZSBvbmVzIHdlcmUgYWRkZWQgYnkgdXMgYW5kIGhhdmUgbm90aGluZyB0byBkbyB3aXRoIElvbmljIENTUyBDdXN0b20gUHJvcGVydGllc1xuOmhvc3Qge1xuICAtLXNoZWxsLWNvbG9yOiAjZWJiYjAwO1xuICAtLXNoZWxsLWNvbG9yLXJnYjogMjM1LDE4NywwO1xufVxuXG4vLyBZb3UgY2FuIGFsc28gYXBwbHkgc2hlZWwgc3R5bGVzIHRvIHRoZSBlbnRpcmUgcGFnZVxuOmhvc3QoLmlzLXNoZWxsKSB7XG4gIC8vIGlvbi1jb250ZW50IHtcbiAgLy8gICBvcGFjaXR5OiAwLjg7XG4gIC8vIH1cbn1cblxuLmRldGFpbHMtc2NvcmVzIHtcbiAgLnNjb3JlLXZhbHVlID4gYXBwLXRleHQtc2hlbGwge1xuICAgIC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4xNSk7XG4gICAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAxNHB4O1xuICAgIG1pbi13aWR0aDogMzBweDtcblxuICAgICYudGV4dC1sb2FkZWQge1xuICAgICAgbWluLXdpZHRoOiAwcHg7XG4gICAgfVxuICB9XG59XG5cbmFwcC1pbWFnZS1zaGVsbC5zaG93Y2FzZS1pbWFnZSB7XG4gIC0taW1hZ2Utc2hlbGwtbG9hZGluZy1iYWNrZ3JvdW5kOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4xMCk7XG4gIC0taW1hZ2Utc2hlbGwtc3Bpbm5lci1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMjUpO1xuICAtLWltYWdlLXNoZWxsLW92ZXJsYXktYmFja2dyb3VuZDogcmdiYSh2YXIoLS1pb24tY29sb3ItZGFyay1yZ2IpLCAuNjApO1xufVxuXG5hcHAtaW1hZ2Utc2hlbGwuaWNvbi1pbWFnZSB7XG4gIC0taW1hZ2Utc2hlbGwtbG9hZGluZy1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuLmRldGFpbHMtbmFtZSA+IGFwcC10ZXh0LXNoZWxsIHtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtY29sb3I6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjIwKTtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAxOHB4O1xuICBtYXgtd2lkdGg6IDMwJTtcblxuICAmLnRleHQtbG9hZGVkIHtcbiAgICBtYXgtd2lkdGg6IHVuc2V0O1xuICB9XG59XG5cbi5kZXRhaWxzLXN0eWxlID4gYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtbGluZS1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMTApO1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDE2cHg7XG4gIG1heC13aWR0aDogNTAlO1xuXG4gICYudGV4dC1sb2FkZWQge1xuICAgIG1heC13aWR0aDogdW5zZXQ7XG4gIH1cbn1cblxuLnJlc3RhdXJhbnQtcmF0aW5nID4gYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtbGluZS1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMTUpO1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDEycHg7XG4gIG1pbi13aWR0aDogMjBweDtcblxuICAmLnRleHQtbG9hZGVkIHtcbiAgICBtaW4td2lkdGg6IDBweDtcbiAgfVxufVxuXG4uc2NoZWR1bGUtZGF5ID4gYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtbGluZS1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMTApO1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDE0cHg7XG4gIG1heC13aWR0aDogOTAlO1xuXG4gICYudGV4dC1sb2FkZWQge1xuICAgIG1heC13aWR0aDogaW5oZXJpdDtcbiAgfVxufVxuXG4uc2NoZWR1bGUtdmFsdWUgPiBhcHAtdGV4dC1zaGVsbCB7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4xMCk7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMTRweDtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuXG4gICYudGV4dC1sb2FkZWQge1xuICAgIG1heC13aWR0aDogaW5oZXJpdDtcbiAgfVxufVxuXG4ubG9jYXRpb24tYWRkcmVzcyA+IGFwcC10ZXh0LXNoZWxsIHtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtY29sb3I6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjEwKTtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAxNHB4O1xuICBtYXgtd2lkdGg6IDYwJTtcblxuICAmLnRleHQtbG9hZGVkIHtcbiAgICBtYXgtd2lkdGg6IGluaGVyaXQ7XG4gIH1cbn1cblxuYXBwLWltYWdlLXNoZWxsLmxvY2F0aW9uLWltYWdlIHtcbiAgLS1pbWFnZS1zaGVsbC1sb2FkaW5nLWJhY2tncm91bmQ6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjEwKTtcbiAgLS1pbWFnZS1zaGVsbC1zcGlubmVyLWNvbG9yOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4yNSk7XG59XG5cbi5pdGVtLXRhZyA+IGFwcC10ZXh0LXNoZWxsIHtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtY29sb3I6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjE1KTtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAxNHB4O1xuICBtaW4td2lkdGg6IDUwcHg7XG5cbiAgJi50ZXh0LWxvYWRlZCB7XG4gICAgbWluLXdpZHRoOiAwcHg7XG4gIH1cbn1cblxuYXBwLWltYWdlLXNoZWxsLnVzZXItcGljdHVyZS1pbWFnZSB7XG4gIC0taW1hZ2Utc2hlbGwtbG9hZGluZy1iYWNrZ3JvdW5kOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4xMCk7XG59XG5cbi5kaXNoLW5hbWUgPiBhcHAtdGV4dC1zaGVsbCB7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4xMCk7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMTRweDtcbn1cblxuLmRpc2gtdm90ZXMtdmFsdWUgPiBhcHAtdGV4dC1zaGVsbCB7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4xNSk7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMTRweDtcbiAgbWluLXdpZHRoOiAzMHB4O1xuXG4gICYudGV4dC1sb2FkZWQge1xuICAgIG1pbi13aWR0aDogMHB4O1xuICB9XG59XG5cbmFwcC1pbWFnZS1zaGVsbC5yZXZpZXctdXNlci1pbWFnZSB7XG4gIC0taW1hZ2Utc2hlbGwtbG9hZGluZy1iYWNrZ3JvdW5kOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4xMCk7XG59XG5cbi5yZXZpZXctdXNlci1uYW1lID4gYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtbGluZS1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMTUpO1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDE2cHg7XG4gIG1heC13aWR0aDogNTAlO1xuXG4gICYudGV4dC1sb2FkZWQge1xuICAgIG1heC13aWR0aDogaW5oZXJpdDtcbiAgfVxufVxuXG4ucmV2aWV3LWRhdGUgPiBhcHAtdGV4dC1zaGVsbCB7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4wNSk7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMTFweDtcbn1cblxuLnJldmlldy1yYXRpbmcgPiBhcHAtdGV4dC1zaGVsbCB7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4xNSk7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMTJweDtcbn1cblxuLnJldmlldy1tZXNzYWdlID4gYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtbGluZS1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMTUpO1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDE0cHg7XG59XG5cbmFwcC1pbWFnZS1zaGVsbC5yZWNpcGUtY292ZXItaW1hZ2Uge1xuICAtLWltYWdlLXNoZWxsLWxvYWRpbmctYmFja2dyb3VuZDogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMjApO1xufVxuXG5hcHAtaW1hZ2Utc2hlbGwuY2hlZi1waWN0dXJlLWltYWdlIHtcbiAgLS1pbWFnZS1zaGVsbC1sb2FkaW5nLWJhY2tncm91bmQ6IHZhcigtLXNoZWxsLWNvbG9yKTtcbiAgLS1pbWFnZS1zaGVsbC1ib3JkZXItcmFkaXVzOiA1MCU7XG4gIHotaW5kZXg6IDM7XG59XG5cbi5yZWNpcGUtYXV0aG9yID4gYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtbGluZS1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMTApO1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDE2cHg7XG59XG5cbi5yZWNpcGUtbmFtZSA+IGFwcC10ZXh0LXNoZWxsIHtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtY29sb3I6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjIwKTtcbn1cblxuLnJlY2lwZS1jaGVmID4gYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtbGluZS1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMTUpO1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDE0cHg7XG59XG4iXX0= */"];
      /***/
    },

    /***/
    "YuxA":
    /*!***************************************************************!*\
      !*** ./src/app/carpentry/details/carpentry-details.module.ts ***!
      \***************************************************************/

    /*! exports provided: CarpentryDetailsPageModule, ɵ0 */

    /***/
    function YuxA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CarpentryDetailsPageModule", function () {
        return CarpentryDetailsPageModule;
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


      var _carpentry_details_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./carpentry-details.page */
      "PQIa");
      /* harmony import */


      var _carpentry_details_resolver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./carpentry-details.resolver */
      "Khd1");

      var ɵ0 = _carpentry_details_resolver__WEBPACK_IMPORTED_MODULE_2__["CarpentryDetailsResolver"];
      var routes = [{
        path: '',
        component: _carpentry_details_page__WEBPACK_IMPORTED_MODULE_1__["CarpentryDetailsPage"],
        resolve: {
          data: ɵ0
        }
      }];

      var CarpentryDetailsPageModule = function CarpentryDetailsPageModule() {
        _classCallCheck(this, CarpentryDetailsPageModule);
      };
      /***/

    },

    /***/
    "fVff":
    /*!***********************************************************************!*\
      !*** ./src/app/carpentry/details/carpentry-details.page.ngfactory.js ***!
      \***********************************************************************/

    /*! exports provided: RenderType_CarpentryDetailsPage, View_CarpentryDetailsPage_0, View_CarpentryDetailsPage_Host_0, CarpentryDetailsPageNgFactory */

    /***/
    function fVff(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RenderType_CarpentryDetailsPage", function () {
        return RenderType_CarpentryDetailsPage;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_CarpentryDetailsPage_0", function () {
        return View_CarpentryDetailsPage_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_CarpentryDetailsPage_Host_0", function () {
        return View_CarpentryDetailsPage_Host_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CarpentryDetailsPageNgFactory", function () {
        return CarpentryDetailsPageNgFactory;
      });
      /* harmony import */


      var _styles_carpentry_details_page_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./styles/carpentry-details.page.scss.shim.ngstyle */
      "tWvq");
      /* harmony import */


      var _styles_carpentry_details_shell_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./styles/carpentry-details.shell.scss.shim.ngstyle */
      "QTch");
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


      var _carpentry_details_page__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./carpentry-details.page */
      "PQIa");
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


      var styles_CarpentryDetailsPage = [_styles_carpentry_details_page_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"], _styles_carpentry_details_shell_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_1__["styles"]];

      var RenderType_CarpentryDetailsPage = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵcrt"]({
        encapsulation: 0,
        styles: styles_CarpentryDetailsPage,
        data: {}
      });

      function View_CarpentryDetailsPage_1(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](0, 0, null, null, 97, "ion-slide", [["class", "first-slide illustration-and-decoration-slide"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonSlide_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonSlide"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](1, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonSlide"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](2, 0, null, 0, 95, "ion-row", [["class", "slide-inner-row"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonRow_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonRow"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](3, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonRow"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](4, 0, null, 0, 1, "h4", [["class", "ion-padding"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, null, ["Intro"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](6, 0, null, 0, 91, "ion-card", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonCard_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonCard"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](7, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCard"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](8, 0, null, 0, 0, "img", [["src", "/assets/images/simple_rectangle.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](9, 0, null, 0, 9, "ion-card-header", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonCardHeader_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonCardHeader"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](10, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCardHeader"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](11, 0, null, 0, 3, "ion-card-title", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonCardTitle_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonCardTitle"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](12, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCardTitle"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](13, 0, null, 0, 1, "app-text-shell", [], [[2, "text-loaded", null]], null, null, _shell_text_shell_text_shell_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_TextShellComponent_0"], _shell_text_shell_text_shell_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_TextShellComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](14, 49152, null, 0, _shell_text_shell_text_shell_component__WEBPACK_IMPORTED_MODULE_6__["TextShellComponent"], [], {
          data: [0, "data"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](15, 0, null, 0, 3, "ion-card-subtitle", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonCardSubtitle_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonCardSubtitle"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](16, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCardSubtitle"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](17, 0, null, 0, 1, "app-text-shell", [], [[2, "text-loaded", null]], null, null, _shell_text_shell_text_shell_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_TextShellComponent_0"], _shell_text_shell_text_shell_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_TextShellComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](18, 49152, null, 0, _shell_text_shell_text_shell_component__WEBPACK_IMPORTED_MODULE_6__["TextShellComponent"], [], {
          data: [0, "data"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](19, 0, null, 0, 78, "ion-card-content", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonCardContent_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonCardContent"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](20, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCardContent"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](21, 0, null, 0, 76, "ion-slide", [["class", "first-slide illustration-and-decoration-slide"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonSlide_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonSlide"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](22, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonSlide"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](23, 0, null, 0, 74, "ion-row", [["class", "slide-inner-row"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonRow_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonRow"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](24, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonRow"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](25, 0, null, 0, 72, "form", [["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "submit"], [null, "reset"]], function (_v, en, $event) {
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
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](26, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_y"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](27, 4210688, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgForm"], [[8, null], [8, null]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ControlContainer"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgForm"]]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](29, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ControlContainer"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](30, 0, null, null, 63, "ion-list", [["class", "ion-padding"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonList_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonList"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](31, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonList"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](32, 0, null, 0, 7, "ion-item", [["class", "ion-padding"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonItem_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonItem"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](33, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonItem"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](34, 0, null, 0, 2, "ion-label", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonLabel_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonLabel"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](35, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonLabel"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, 0, ["Side 1:"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](37, 0, null, 0, 0, "p", [["type", "number"]], [[8, "innerHTML", 1]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](38, 0, null, 0, 1, "p", [["style", "margin-left: 5px;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, null, ["m"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](40, 0, null, 0, 7, "ion-item", [["class", "ion-padding"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonItem_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonItem"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](41, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonItem"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](42, 0, null, 0, 2, "ion-label", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonLabel_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonLabel"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](43, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonLabel"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, 0, ["Side 2:"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](45, 0, null, 0, 0, "p", [["type", "number"]], [[8, "innerHTML", 1]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](46, 0, null, 0, 1, "p", [["style", "margin-left: 5px;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, null, ["m"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](48, 0, null, 0, 15, "ion-item", [["class", "ion-padding"], ["type", "submit"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonItem_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonItem"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](49, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonItem"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], {
          type: [0, "type"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](50, 0, null, 0, 2, "ion-label", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonLabel_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonLabel"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](51, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonLabel"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, 0, ["Side 3:"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](53, 0, null, 0, 8, "ion-input", [["maxlength", "4"], ["name", "side3"]], [[1, "maxlength", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "ionBlur"], [null, "ionChange"]], function (_v, en, $event) {
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
            var pd_2 = (_co.side3 = $event) !== false;
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
        }), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](61, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](62, 0, null, 0, 1, "p", [["style", "margin-left: 5px;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, null, ["m"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](64, 0, null, 0, 15, "ion-item", [["class", "ion-padding"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonItem_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonItem"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](65, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonItem"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](66, 0, null, 0, 2, "ion-label", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonLabel_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonLabel"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](67, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonLabel"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, 0, ["Side 4:"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](69, 0, null, 0, 8, "ion-input", [["maxlength", "4"], ["name", "side4"]], [[1, "maxlength", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "ionBlur"], [null, "ionChange"]], function (_v, en, $event) {
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
            var pd_2 = (_co.side4 = $event) !== false;
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
        }), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](77, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](78, 0, null, 0, 1, "p", [["style", "margin-left: 5px;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, null, ["m"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](80, 0, null, 0, 13, "ion-item", [["class", "ion-padding"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonItem_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonItem"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](81, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonItem"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](82, 0, null, 0, 2, "ion-label", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonLabel_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonLabel"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](83, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonLabel"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, 0, ["Total:"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](85, 0, null, 0, 6, "ion-input", [["clear-input", ""], ["name", "total"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "ionBlur"], [null, "ionChange"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("ionBlur" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 87)._handleBlurEvent($event.target) !== false;
            ad = pd_0 && ad;
          }

          if ("ionChange" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 87)._handleInputEvent($event.target) !== false;
            ad = pd_1 && ad;
          }

          if ("ngModelChange" === en) {
            var pd_2 = (_co.total = $event) !== false;
            ad = pd_2 && ad;
          }

          return ad;
        }, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonInput_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonInput"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](86, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonInput"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], {
          name: [0, "name"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](87, 16384, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["TextValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NG_VALUE_ACCESSOR"], function (p0_0) {
          return [p0_0];
        }, [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["TextValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](89, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], [[2, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NG_VALUE_ACCESSOR"]]], {
          name: [0, "name"],
          model: [1, "model"]
        }, {
          update: "ngModelChange"
        }), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](91, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](92, 0, null, 0, 1, "p", [["style", "margin-left: 5px;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, null, ["m2"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](94, 0, null, null, 3, "div", [["class", "ion-padding"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](95, 0, null, null, 2, "ion-button", [["color", "secondary"], ["expand", "block"], ["type", "submit"]], null, [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.calculateSimple() !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonButton_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](96, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], {
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

          var currVal_22 = "4";
          var currVal_23 = "side3";

          _ck(_v, 54, 0, currVal_22, currVal_23);

          var currVal_24 = "4";

          _ck(_v, 56, 0, currVal_24);

          var currVal_25 = "side3";
          var currVal_26 = _co.side3;

          _ck(_v, 59, 0, currVal_25, currVal_26);

          var currVal_35 = "4";
          var currVal_36 = "side4";

          _ck(_v, 70, 0, currVal_35, currVal_36);

          var currVal_37 = "4";

          _ck(_v, 72, 0, currVal_37);

          var currVal_38 = "side4";
          var currVal_39 = _co.side4;

          _ck(_v, 75, 0, currVal_38, currVal_39);

          var currVal_47 = "total";

          _ck(_v, 86, 0, currVal_47);

          var currVal_48 = "total";
          var currVal_49 = _co.total;

          _ck(_v, 89, 0, currVal_48, currVal_49);

          var currVal_50 = "secondary";
          var currVal_51 = "block";
          var currVal_52 = "submit";

          _ck(_v, 96, 0, currVal_50, currVal_51, currVal_52);
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

          var currVal_40 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 91).ngClassUntouched;

          var currVal_41 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 91).ngClassTouched;

          var currVal_42 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 91).ngClassPristine;

          var currVal_43 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 91).ngClassDirty;

          var currVal_44 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 91).ngClassValid;

          var currVal_45 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 91).ngClassInvalid;

          var currVal_46 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 91).ngClassPending;

          _ck(_v, 85, 0, currVal_40, currVal_41, currVal_42, currVal_43, currVal_44, currVal_45, currVal_46);
        });
      }

      function View_CarpentryDetailsPage_2(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](0, 0, null, null, 113, "ion-slide", [["class", "last-slide illustration-and-decoration-slide"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonSlide_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonSlide"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](1, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonSlide"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](2, 0, null, 0, 111, "ion-row", [["class", "slide-inner-row"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonRow_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonRow"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](3, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonRow"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](4, 0, null, 0, 1, "h4", [["class", "ion-padding"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, null, ["Advanced"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](6, 0, null, 0, 107, "ion-card", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonCard_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonCard"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](7, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCard"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](8, 0, null, 0, 0, "img", [["src", "/assets/images/complex_rectangle.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](9, 0, null, 0, 9, "ion-card-header", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonCardHeader_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonCardHeader"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](10, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCardHeader"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](11, 0, null, 0, 3, "ion-card-title", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonCardTitle_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonCardTitle"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](12, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCardTitle"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](13, 0, null, 0, 1, "app-text-shell", [], [[2, "text-loaded", null]], null, null, _shell_text_shell_text_shell_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_TextShellComponent_0"], _shell_text_shell_text_shell_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_TextShellComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](14, 49152, null, 0, _shell_text_shell_text_shell_component__WEBPACK_IMPORTED_MODULE_6__["TextShellComponent"], [], {
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
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](26, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_y"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](27, 4210688, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgForm"], [[8, null], [8, null]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ControlContainer"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgForm"]]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](29, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ControlContainer"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](30, 0, null, null, 79, "ion-list", [["class", "ion-padding"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonList_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonList"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](31, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonList"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](32, 0, null, 0, 7, "ion-item", [["class", "ion-padding"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonItem_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonItem"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](33, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonItem"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](34, 0, null, 0, 2, "ion-label", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonLabel_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonLabel"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](35, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonLabel"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, 0, ["Side 1:"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](37, 0, null, 0, 0, "p", [["type", "number"]], [[8, "innerHTML", 1]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](38, 0, null, 0, 1, "p", [["style", "margin-left: 5px;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, null, ["m"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](40, 0, null, 0, 7, "ion-item", [["class", "ion-padding"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonItem_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonItem"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](41, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonItem"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](42, 0, null, 0, 2, "ion-label", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonLabel_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonLabel"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](43, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonLabel"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, 0, ["Side 2:"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](45, 0, null, 0, 0, "p", [["type", "number"]], [[8, "innerHTML", 1]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](46, 0, null, 0, 1, "p", [["style", "margin-left: 5px;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, null, ["m"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](48, 0, null, 0, 15, "ion-item", [["class", "ion-padding"], ["type", "submit"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonItem_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonItem"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](49, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonItem"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], {
          type: [0, "type"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](50, 0, null, 0, 2, "ion-label", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonLabel_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonLabel"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](51, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonLabel"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, 0, ["Side 3:"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](53, 0, null, 0, 8, "ion-input", [["maxlength", "4"], ["name", "side3a"]], [[1, "maxlength", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "ionBlur"], [null, "ionChange"]], function (_v, en, $event) {
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
        }), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](61, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](62, 0, null, 0, 1, "p", [["style", "margin-left: 5px;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, null, ["m"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](64, 0, null, 0, 15, "ion-item", [["class", "ion-padding"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonItem_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonItem"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](65, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonItem"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](66, 0, null, 0, 2, "ion-label", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonLabel_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonLabel"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](67, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonLabel"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, 0, ["Side 4:"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](69, 0, null, 0, 8, "ion-input", [["maxlength", "4"], ["name", "side4a"]], [[1, "maxlength", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "ionBlur"], [null, "ionChange"]], function (_v, en, $event) {
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
        }), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](77, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](78, 0, null, 0, 1, "p", [["style", "margin-left: 5px;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, null, ["m"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](80, 0, null, 0, 7, "ion-item", [["class", "ion-padding"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonItem_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonItem"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](81, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonItem"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](82, 0, null, 0, 2, "ion-label", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonLabel_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonLabel"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](83, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonLabel"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, 0, ["Side 5:"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](85, 0, null, 0, 0, "p", [["type", "number"]], [[8, "innerHTML", 1]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](86, 0, null, 0, 1, "p", [["style", "margin-left: 5px;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, null, ["m"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](88, 0, null, 0, 7, "ion-item", [["class", "ion-padding"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonItem_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonItem"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](89, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonItem"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](90, 0, null, 0, 2, "ion-label", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonLabel_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonLabel"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](91, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonLabel"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, 0, ["Side 6:"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](93, 0, null, 0, 0, "p", [["type", "number"]], [[8, "innerHTML", 1]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](94, 0, null, 0, 1, "p", [["style", "margin-left: 5px;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, null, ["m"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](96, 0, null, 0, 13, "ion-item", [["class", "ion-padding"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonItem_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonItem"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](97, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonItem"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](98, 0, null, 0, 2, "ion-label", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonLabel_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonLabel"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](99, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonLabel"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, 0, ["Total:"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](101, 0, null, 0, 6, "ion-input", [["clear-input", ""], ["name", "totala"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "ionBlur"], [null, "ionChange"]], function (_v, en, $event) {
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
            var pd_2 = (_co.total = $event) !== false;
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
            var pd_0 = _co.calculateAdvanced() !== false;
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

          var currVal_22 = "4";
          var currVal_23 = "side3a";

          _ck(_v, 54, 0, currVal_22, currVal_23);

          var currVal_24 = "4";

          _ck(_v, 56, 0, currVal_24);

          var currVal_25 = "side3a";
          var currVal_26 = _co.side3a;

          _ck(_v, 59, 0, currVal_25, currVal_26);

          var currVal_35 = "4";
          var currVal_36 = "side4a";

          _ck(_v, 70, 0, currVal_35, currVal_36);

          var currVal_37 = "4";

          _ck(_v, 72, 0, currVal_37);

          var currVal_38 = "side4a";
          var currVal_39 = _co.side4a;

          _ck(_v, 75, 0, currVal_38, currVal_39);

          var currVal_49 = "totala";

          _ck(_v, 102, 0, currVal_49);

          var currVal_50 = "totala";
          var currVal_51 = _co.total;

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

      function View_CarpentryDetailsPage_3(_l) {
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
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](26, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_y"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](27, 4210688, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgForm"], [[8, null], [8, null]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ControlContainer"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgForm"]]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](29, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ControlContainer"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](30, 0, null, null, 31, "ion-list", [["class", "ion-padding"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonList_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonList"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](31, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonList"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](32, 0, null, 0, 7, "ion-item", [["class", "ion-padding"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonItem_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonItem"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](33, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonItem"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](34, 0, null, 0, 2, "ion-label", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonLabel_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonLabel"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](35, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonLabel"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, 0, ["Side 1:"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](37, 0, null, 0, 0, "p", [["type", "number"]], [[8, "innerHTML", 1]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](38, 0, null, 0, 1, "p", [["style", "margin-left: 5px;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, null, ["m"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](40, 0, null, 0, 7, "ion-item", [["class", "ion-padding"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonItem_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonItem"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](41, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonItem"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](42, 0, null, 0, 2, "ion-label", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonLabel_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonLabel"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](43, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonLabel"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, 0, ["Side 2:"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](45, 0, null, 0, 0, "p", [["type", "number"]], [[8, "innerHTML", 1]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](46, 0, null, 0, 1, "p", [["style", "margin-left: 5px;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, null, ["m"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](48, 0, null, 0, 13, "ion-item", [["class", "ion-padding"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonItem_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonItem"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](49, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonItem"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](50, 0, null, 0, 2, "ion-label", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonLabel_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonLabel"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](51, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonLabel"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, 0, ["Total:"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](53, 0, null, 0, 6, "ion-input", [["clear-input", ""], ["name", "totalArea"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "ionBlur"], [null, "ionChange"]], function (_v, en, $event) {
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

      function View_CarpentryDetailsPage_4(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](0, 0, null, null, 113, "ion-slide", [["class", "last-slide illustration-and-decoration-slide"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonSlide_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonSlide"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](1, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonSlide"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](2, 0, null, 0, 111, "ion-row", [["class", "slide-inner-row"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonRow_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonRow"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](3, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonRow"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](4, 0, null, 0, 1, "h4", [["class", "ion-padding"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, null, ["Advanced"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](6, 0, null, 0, 107, "ion-card", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonCard_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonCard"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](7, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCard"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](8, 0, null, 0, 0, "img", [["src", "/assets/images/complex_rectangle.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](9, 0, null, 0, 9, "ion-card-header", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonCardHeader_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonCardHeader"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](10, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCardHeader"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](11, 0, null, 0, 3, "ion-card-title", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonCardTitle_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonCardTitle"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](12, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCardTitle"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](13, 0, null, 0, 1, "app-text-shell", [], [[2, "text-loaded", null]], null, null, _shell_text_shell_text_shell_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_TextShellComponent_0"], _shell_text_shell_text_shell_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_TextShellComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](14, 49152, null, 0, _shell_text_shell_text_shell_component__WEBPACK_IMPORTED_MODULE_6__["TextShellComponent"], [], {
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
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](26, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_y"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](27, 4210688, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgForm"], [[8, null], [8, null]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ControlContainer"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgForm"]]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](29, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ControlContainer"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](30, 0, null, null, 79, "ion-list", [["class", "ion-padding"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonList_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonList"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](31, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonList"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](32, 0, null, 0, 7, "ion-item", [["class", "ion-padding"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonItem_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonItem"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](33, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonItem"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](34, 0, null, 0, 2, "ion-label", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonLabel_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonLabel"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](35, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonLabel"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, 0, ["Side 1:"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](37, 0, null, 0, 0, "p", [["type", "number"]], [[8, "innerHTML", 1]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](38, 0, null, 0, 1, "p", [["style", "margin-left: 5px;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, null, ["m"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](40, 0, null, 0, 7, "ion-item", [["class", "ion-padding"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonItem_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonItem"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](41, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonItem"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](42, 0, null, 0, 2, "ion-label", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonLabel_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonLabel"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](43, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonLabel"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, 0, ["Side 2:"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](45, 0, null, 0, 0, "p", [["type", "number"]], [[8, "innerHTML", 1]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](46, 0, null, 0, 1, "p", [["style", "margin-left: 5px;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, null, ["m"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](48, 0, null, 0, 15, "ion-item", [["class", "ion-padding"], ["type", "submit"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonItem_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonItem"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](49, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonItem"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], {
          type: [0, "type"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](50, 0, null, 0, 2, "ion-label", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonLabel_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonLabel"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](51, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonLabel"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, 0, ["Side 3:"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](53, 0, null, 0, 8, "ion-input", [["maxlength", "4"], ["name", "side3a"]], [[1, "maxlength", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "ionBlur"], [null, "ionChange"]], function (_v, en, $event) {
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
        }), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](61, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](62, 0, null, 0, 1, "p", [["style", "margin-left: 5px;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, null, ["m"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](64, 0, null, 0, 15, "ion-item", [["class", "ion-padding"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonItem_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonItem"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](65, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonItem"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](66, 0, null, 0, 2, "ion-label", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonLabel_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonLabel"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](67, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonLabel"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, 0, ["Side 4:"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](69, 0, null, 0, 8, "ion-input", [["maxlength", "4"], ["name", "side4a"]], [[1, "maxlength", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "ionBlur"], [null, "ionChange"]], function (_v, en, $event) {
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
        }), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](77, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](78, 0, null, 0, 1, "p", [["style", "margin-left: 5px;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, null, ["m"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](80, 0, null, 0, 7, "ion-item", [["class", "ion-padding"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonItem_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonItem"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](81, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonItem"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](82, 0, null, 0, 2, "ion-label", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonLabel_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonLabel"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](83, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonLabel"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, 0, ["Side 5:"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](85, 0, null, 0, 0, "p", [["type", "number"]], [[8, "innerHTML", 1]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](86, 0, null, 0, 1, "p", [["style", "margin-left: 5px;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, null, ["m"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](88, 0, null, 0, 7, "ion-item", [["class", "ion-padding"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonItem_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonItem"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](89, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonItem"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](90, 0, null, 0, 2, "ion-label", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonLabel_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonLabel"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](91, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonLabel"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, 0, ["Side 6:"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](93, 0, null, 0, 0, "p", [["type", "number"]], [[8, "innerHTML", 1]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](94, 0, null, 0, 1, "p", [["style", "margin-left: 5px;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, null, ["m"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](96, 0, null, 0, 13, "ion-item", [["class", "ion-padding"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonItem_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonItem"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](97, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonItem"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](98, 0, null, 0, 2, "ion-label", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonLabel_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonLabel"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](99, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonLabel"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, 0, ["Total:"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](101, 0, null, 0, 6, "ion-input", [["clear-input", ""], ["name", "totalArea"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "ionBlur"], [null, "ionChange"]], function (_v, en, $event) {
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
            var pd_0 = _co.calculateAdvanced() !== false;
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

          var currVal_22 = "4";
          var currVal_23 = "side3a";

          _ck(_v, 54, 0, currVal_22, currVal_23);

          var currVal_24 = "4";

          _ck(_v, 56, 0, currVal_24);

          var currVal_25 = "side3a";
          var currVal_26 = _co.side3a;

          _ck(_v, 59, 0, currVal_25, currVal_26);

          var currVal_35 = "4";
          var currVal_36 = "side4a";

          _ck(_v, 70, 0, currVal_35, currVal_36);

          var currVal_37 = "4";

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

      function View_CarpentryDetailsPage_5(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](0, 0, null, null, 71, "ion-slide", [["class", "first-slide illustration-and-decoration-slide"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonSlide_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonSlide"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](1, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonSlide"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](2, 0, null, 0, 69, "ion-row", [["class", "slide-inner-row"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonRow_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonRow"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](3, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonRow"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](4, 0, null, 0, 67, "ion-card", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonCard_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonCard"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](5, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCard"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](6, 0, null, 0, 4, "ion-card-header", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonCardHeader_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonCardHeader"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](7, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCardHeader"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](8, 0, null, 0, 2, "ion-card-subtitle", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonCardSubtitle_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonCardSubtitle"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](9, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCardSubtitle"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, 0, [" Note: the distance between the spindles should be less than 100mm to conform to Building Regulations "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](11, 0, null, 0, 60, "ion-card-content", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonCardContent_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonCardContent"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](12, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCardContent"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](13, 0, null, 0, 58, "ion-slide", [["class", "first-slide illustration-and-decoration-slide"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonSlide_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonSlide"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](14, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonSlide"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](15, 0, null, 0, 56, "ion-row", [["class", "slide-inner-row"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonRow_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonRow"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](16, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonRow"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](17, 0, null, 0, 54, "form", [["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "submit"], [null, "reset"]], function (_v, en, $event) {
          var ad = true;

          if ("submit" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 19).onSubmit($event) !== false;
            ad = pd_0 && ad;
          }

          if ("reset" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 19).onReset() !== false;
            ad = pd_1 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](18, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_y"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](19, 4210688, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgForm"], [[8, null], [8, null]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ControlContainer"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgForm"]]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](21, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ControlContainer"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](22, 0, null, null, 45, "ion-list", [["class", "ion-padding"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonList_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonList"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](23, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonList"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](24, 0, null, 0, 7, "ion-item", [["class", "ion-padding"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonItem_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonItem"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](25, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonItem"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](26, 0, null, 0, 2, "ion-label", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonLabel_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonLabel"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](27, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonLabel"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, 0, ["Thickness of Spindles: "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](29, 0, null, 0, 0, "p", [["type", "number"]], [[8, "innerHTML", 1]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](30, 0, null, 0, 1, "p", [["style", "margin-left: 5px;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, null, ["mm"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](32, 0, null, 0, 7, "ion-item", [["class", "ion-padding"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonItem_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonItem"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](33, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonItem"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](34, 0, null, 0, 2, "ion-label", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonLabel_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonLabel"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](35, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonLabel"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, 0, ["Distance between newel posts: "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](37, 0, null, 0, 0, "p", [["type", "number"]], [[8, "innerHTML", 1]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](38, 0, null, 0, 1, "p", [["style", "margin-left: 5px;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, null, ["mm"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](40, 0, null, 0, 13, "ion-item", [["class", "ion-padding"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonItem_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonItem"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](41, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonItem"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](42, 0, null, 0, 2, "ion-label", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonLabel_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonLabel"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](43, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonLabel"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, 0, ["Spindles needed: "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](45, 0, null, 0, 6, "ion-input", [["clear-input", ""], ["name", "spindlesNeeded"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "ionBlur"], [null, "ionChange"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("ionBlur" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 47)._handleBlurEvent($event.target) !== false;
            ad = pd_0 && ad;
          }

          if ("ionChange" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 47)._handleInputEvent($event.target) !== false;
            ad = pd_1 && ad;
          }

          if ("ngModelChange" === en) {
            var pd_2 = (_co.spindlesNeeded = $event) !== false;
            ad = pd_2 && ad;
          }

          return ad;
        }, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonInput_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonInput"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](46, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonInput"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], {
          name: [0, "name"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](47, 16384, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["TextValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NG_VALUE_ACCESSOR"], function (p0_0) {
          return [p0_0];
        }, [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["TextValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](49, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], [[2, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NG_VALUE_ACCESSOR"]]], {
          name: [0, "name"],
          model: [1, "model"]
        }, {
          update: "ngModelChange"
        }), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](51, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](52, 0, null, 0, 1, "p", [["style", "margin-left: 5px;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, null, ["spindles"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](54, 0, null, 0, 13, "ion-item", [["class", "ion-padding"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonItem_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonItem"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](55, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonItem"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](56, 0, null, 0, 2, "ion-label", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonLabel_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonLabel"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](57, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonLabel"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, 0, ["Space between: "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](59, 0, null, 0, 6, "ion-input", [["clear-input", ""], ["name", "spindleSpace"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "ionBlur"], [null, "ionChange"]], function (_v, en, $event) {
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
            var pd_2 = (_co.spindleSpace = $event) !== false;
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
        }), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](65, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](66, 0, null, 0, 1, "p", [["style", "margin-left: 5px;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, null, ["mm"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](68, 0, null, null, 3, "div", [["class", "ion-padding"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](69, 0, null, null, 2, "ion-button", [["color", "secondary"], ["expand", "block"], ["type", "submit"]], null, [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.calculateSpindles() !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonButton_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](70, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], {
          color: [0, "color"],
          expand: [1, "expand"],
          type: [2, "type"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, 0, [" Submit "]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_16 = "spindlesNeeded";

          _ck(_v, 46, 0, currVal_16);

          var currVal_17 = "spindlesNeeded";
          var currVal_18 = _co.spindlesNeeded;

          _ck(_v, 49, 0, currVal_17, currVal_18);

          var currVal_26 = "spindleSpace";

          _ck(_v, 60, 0, currVal_26);

          var currVal_27 = "spindleSpace";
          var currVal_28 = _co.spindleSpace;

          _ck(_v, 63, 0, currVal_27, currVal_28);

          var currVal_29 = "secondary";
          var currVal_30 = "block";
          var currVal_31 = "submit";

          _ck(_v, 70, 0, currVal_29, currVal_30, currVal_31);
        }, function (_ck, _v) {
          var _co = _v.component;

          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 21).ngClassUntouched;

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 21).ngClassTouched;

          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 21).ngClassPristine;

          var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 21).ngClassDirty;

          var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 21).ngClassValid;

          var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 21).ngClassInvalid;

          var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 21).ngClassPending;

          _ck(_v, 17, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6);

          var currVal_7 = _co.spindleThickness;

          _ck(_v, 29, 0, currVal_7);

          var currVal_8 = _co.newelDistance;

          _ck(_v, 37, 0, currVal_8);

          var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 51).ngClassUntouched;

          var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 51).ngClassTouched;

          var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 51).ngClassPristine;

          var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 51).ngClassDirty;

          var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 51).ngClassValid;

          var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 51).ngClassInvalid;

          var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 51).ngClassPending;

          _ck(_v, 45, 0, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15);

          var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 65).ngClassUntouched;

          var currVal_20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 65).ngClassTouched;

          var currVal_21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 65).ngClassPristine;

          var currVal_22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 65).ngClassDirty;

          var currVal_23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 65).ngClassValid;

          var currVal_24 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 65).ngClassInvalid;

          var currVal_25 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 65).ngClassPending;

          _ck(_v, 59, 0, currVal_19, currVal_20, currVal_21, currVal_22, currVal_23, currVal_24, currVal_25);
        });
      }

      function View_CarpentryDetailsPage_6(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](0, 0, null, null, 77, "ion-slide", [["class", "first-slide illustration-and-decoration-slide"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonSlide_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonSlide"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](1, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonSlide"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](2, 0, null, 0, 75, "ion-row", [["class", "slide-inner-row"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonRow_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonRow"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](3, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonRow"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](4, 0, null, 0, 73, "ion-card", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonCard_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonCard"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](5, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCard"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](6, 0, null, 0, 0, "img", [["src", "/assets/images/simple_rectangle_area.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](7, 0, null, 0, 9, "ion-card-header", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonCardHeader_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonCardHeader"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](8, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCardHeader"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](9, 0, null, 0, 3, "ion-card-title", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonCardTitle_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonCardTitle"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](10, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCardTitle"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](11, 0, null, 0, 1, "app-text-shell", [], [[2, "text-loaded", null]], null, null, _shell_text_shell_text_shell_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_TextShellComponent_0"], _shell_text_shell_text_shell_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_TextShellComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](12, 49152, null, 0, _shell_text_shell_text_shell_component__WEBPACK_IMPORTED_MODULE_6__["TextShellComponent"], [], {
          data: [0, "data"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](13, 0, null, 0, 3, "ion-card-subtitle", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonCardSubtitle_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonCardSubtitle"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](14, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCardSubtitle"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](15, 0, null, 0, 1, "app-text-shell", [], [[2, "text-loaded", null]], null, null, _shell_text_shell_text_shell_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_TextShellComponent_0"], _shell_text_shell_text_shell_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_TextShellComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](16, 49152, null, 0, _shell_text_shell_text_shell_component__WEBPACK_IMPORTED_MODULE_6__["TextShellComponent"], [], {
          data: [0, "data"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](17, 0, null, 0, 60, "ion-card-content", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonCardContent_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonCardContent"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](18, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCardContent"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](19, 0, null, 0, 58, "ion-slide", [["class", "first-slide illustration-and-decoration-slide"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonSlide_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonSlide"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](20, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonSlide"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](21, 0, null, 0, 56, "ion-row", [["class", "slide-inner-row"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonRow_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonRow"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](22, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonRow"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](23, 0, null, 0, 54, "form", [["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "submit"], [null, "reset"]], function (_v, en, $event) {
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
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](24, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_y"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](25, 4210688, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgForm"], [[8, null], [8, null]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ControlContainer"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgForm"]]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](27, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ControlContainer"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](28, 0, null, null, 45, "ion-list", [["class", "ion-padding"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonList_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonList"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](29, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonList"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](30, 0, null, 0, 7, "ion-item", [["class", "ion-padding"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonItem_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonItem"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](31, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonItem"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](32, 0, null, 0, 2, "ion-label", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonLabel_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonLabel"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](33, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonLabel"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, 0, ["Side 1:"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](35, 0, null, 0, 0, "p", [["type", "number"]], [[8, "innerHTML", 1]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](36, 0, null, 0, 1, "p", [["style", "margin-left: 5px;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, null, ["m"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](38, 0, null, 0, 7, "ion-item", [["class", "ion-padding"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonItem_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonItem"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](39, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonItem"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](40, 0, null, 0, 2, "ion-label", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonLabel_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonLabel"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](41, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonLabel"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, 0, ["Side 2:"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](43, 0, null, 0, 0, "p", [["type", "number"]], [[8, "innerHTML", 1]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](44, 0, null, 0, 1, "p", [["style", "margin-left: 5px;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, null, ["m"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](46, 0, null, 0, 13, "ion-item", [["class", "ion-padding"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonItem_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonItem"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](47, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonItem"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](48, 0, null, 0, 2, "ion-label", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonLabel_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonLabel"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](49, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonLabel"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, 0, ["Total Area:"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](51, 0, null, 0, 6, "ion-input", [["clear-input", ""], ["name", "totalArea"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "ionBlur"], [null, "ionChange"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("ionBlur" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 53)._handleBlurEvent($event.target) !== false;
            ad = pd_0 && ad;
          }

          if ("ionChange" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 53)._handleInputEvent($event.target) !== false;
            ad = pd_1 && ad;
          }

          if ("ngModelChange" === en) {
            var pd_2 = (_co.totalArea = $event) !== false;
            ad = pd_2 && ad;
          }

          return ad;
        }, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonInput_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonInput"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](52, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonInput"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], {
          name: [0, "name"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](53, 16384, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["TextValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NG_VALUE_ACCESSOR"], function (p0_0) {
          return [p0_0];
        }, [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["TextValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](55, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], [[2, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NG_VALUE_ACCESSOR"]]], {
          name: [0, "name"],
          model: [1, "model"]
        }, {
          update: "ngModelChange"
        }), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](57, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](58, 0, null, 0, 1, "p", [["style", "margin-left: 5px;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, null, ["m2"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](60, 0, null, 0, 13, "ion-item", [["class", "ion-padding"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonItem_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonItem"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](61, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonItem"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](62, 0, null, 0, 2, "ion-label", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonLabel_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonLabel"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](63, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonLabel"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, 0, ["Number of Tins:"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](65, 0, null, 0, 6, "ion-input", [["clear-input", ""], ["name", "totalTins"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "ionBlur"], [null, "ionChange"]], function (_v, en, $event) {
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
            var pd_2 = (_co.totalTins = $event) !== false;
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
        }), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](71, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](72, 0, null, 0, 1, "p", [["style", "margin-left: 5px;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, null, ["tins"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](74, 0, null, null, 3, "div", [["class", "ion-padding"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](75, 0, null, null, 2, "ion-button", [["color", "secondary"], ["expand", "block"], ["type", "submit"]], null, [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.calculateSimplePaint() !== false;
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

          _ck(_v, 12, 0, currVal_1);

          var currVal_3 = _co.details == null ? null : _co.details.style;

          _ck(_v, 16, 0, currVal_3);

          var currVal_20 = "totalArea";

          _ck(_v, 52, 0, currVal_20);

          var currVal_21 = "totalArea";
          var currVal_22 = _co.totalArea;

          _ck(_v, 55, 0, currVal_21, currVal_22);

          var currVal_30 = "totalTins";

          _ck(_v, 66, 0, currVal_30);

          var currVal_31 = "totalTins";
          var currVal_32 = _co.totalTins;

          _ck(_v, 69, 0, currVal_31, currVal_32);

          var currVal_33 = "secondary";
          var currVal_34 = "block";
          var currVal_35 = "submit";

          _ck(_v, 76, 0, currVal_33, currVal_34, currVal_35);
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

          var currVal_11 = _co.side1;

          _ck(_v, 35, 0, currVal_11);

          var currVal_12 = _co.side2;

          _ck(_v, 43, 0, currVal_12);

          var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 57).ngClassUntouched;

          var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 57).ngClassTouched;

          var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 57).ngClassPristine;

          var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 57).ngClassDirty;

          var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 57).ngClassValid;

          var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 57).ngClassInvalid;

          var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 57).ngClassPending;

          _ck(_v, 51, 0, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19);

          var currVal_23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 71).ngClassUntouched;

          var currVal_24 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 71).ngClassTouched;

          var currVal_25 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 71).ngClassPristine;

          var currVal_26 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 71).ngClassDirty;

          var currVal_27 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 71).ngClassValid;

          var currVal_28 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 71).ngClassInvalid;

          var currVal_29 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 71).ngClassPending;

          _ck(_v, 65, 0, currVal_23, currVal_24, currVal_25, currVal_26, currVal_27, currVal_28, currVal_29);
        });
      }

      function View_CarpentryDetailsPage_7(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](0, 0, null, null, 80, "ion-slide", [["class", "first-slide illustration-and-decoration-slide"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonSlide_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonSlide"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](1, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonSlide"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](2, 0, null, 0, 78, "ion-row", [["class", "slide-inner-row"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonRow_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonRow"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](3, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonRow"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](4, 0, null, 0, 76, "ion-card", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonCard_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonCard"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](5, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCard"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](6, 0, null, 0, 9, "ion-card-header", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonCardHeader_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonCardHeader"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](7, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCardHeader"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](8, 0, null, 0, 3, "ion-card-title", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonCardTitle_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonCardTitle"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](9, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCardTitle"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](10, 0, null, 0, 1, "app-text-shell", [], [[2, "text-loaded", null]], null, null, _shell_text_shell_text_shell_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_TextShellComponent_0"], _shell_text_shell_text_shell_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_TextShellComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](11, 49152, null, 0, _shell_text_shell_text_shell_component__WEBPACK_IMPORTED_MODULE_6__["TextShellComponent"], [], {
          data: [0, "data"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](12, 0, null, 0, 3, "ion-card-subtitle", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonCardSubtitle_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonCardSubtitle"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](13, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCardSubtitle"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](14, 0, null, 0, 1, "app-text-shell", [], [[2, "text-loaded", null]], null, null, _shell_text_shell_text_shell_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_TextShellComponent_0"], _shell_text_shell_text_shell_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_TextShellComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](15, 49152, null, 0, _shell_text_shell_text_shell_component__WEBPACK_IMPORTED_MODULE_6__["TextShellComponent"], [], {
          data: [0, "data"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](16, 0, null, 0, 64, "ion-card-content", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonCardContent_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonCardContent"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](17, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCardContent"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](18, 0, null, 0, 62, "ion-slide", [["class", "first-slide illustration-and-decoration-slide"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonSlide_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonSlide"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](19, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonSlide"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](20, 0, null, 0, 60, "ion-row", [["class", "slide-inner-row"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonRow_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonRow"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](21, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonRow"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](22, 0, null, 0, 58, "form", [["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "submit"], [null, "reset"]], function (_v, en, $event) {
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
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](23, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_y"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](24, 4210688, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgForm"], [[8, null], [8, null]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ControlContainer"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgForm"]]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](26, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ControlContainer"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](27, 0, null, null, 49, "ion-list", [["class", "ion-padding"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonList_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonList"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](28, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonList"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](29, 0, null, 0, 5, "ion-item", [["class", "ion-padding"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonItem_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonItem"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](30, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonItem"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](31, 0, null, 0, 2, "ion-label", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonLabel_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonLabel"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](32, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonLabel"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, 0, ["Cost of Timber: \xA3"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](34, 0, null, 0, 0, "p", [["type", "number"]], [[8, "innerHTML", 1]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](35, 0, null, 0, 5, "ion-item", [["class", "ion-padding"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonItem_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonItem"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](36, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonItem"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](37, 0, null, 0, 2, "ion-label", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonLabel_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonLabel"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](38, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonLabel"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, 0, ["Delivery Cost: \xA3"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](40, 0, null, 0, 0, "p", [["type", "number"]], [[8, "innerHTML", 1]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](41, 0, null, 0, 11, "ion-item", [["class", "ion-padding"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonItem_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonItem"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](42, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonItem"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](43, 0, null, 0, 2, "ion-label", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonLabel_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonLabel"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](44, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonLabel"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, 0, ["Total before VAT: \xA3"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](46, 0, null, 0, 6, "ion-input", [["clear-input", ""], ["name", "totalXVat"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "ionBlur"], [null, "ionChange"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("ionBlur" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 48)._handleBlurEvent($event.target) !== false;
            ad = pd_0 && ad;
          }

          if ("ionChange" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 48)._handleInputEvent($event.target) !== false;
            ad = pd_1 && ad;
          }

          if ("ngModelChange" === en) {
            var pd_2 = (_co.totalXVat = $event) !== false;
            ad = pd_2 && ad;
          }

          return ad;
        }, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonInput_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonInput"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](47, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonInput"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], {
          name: [0, "name"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](48, 16384, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["TextValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NG_VALUE_ACCESSOR"], function (p0_0) {
          return [p0_0];
        }, [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["TextValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](50, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], [[2, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NG_VALUE_ACCESSOR"]]], {
          name: [0, "name"],
          model: [1, "model"]
        }, {
          update: "ngModelChange"
        }), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](52, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](53, 0, null, 0, 11, "ion-item", [["class", "ion-padding"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonItem_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonItem"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](54, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonItem"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](55, 0, null, 0, 2, "ion-label", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonLabel_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonLabel"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](56, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonLabel"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, 0, ["VAT at 20%: \xA3"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](58, 0, null, 0, 6, "ion-input", [["clear-input", ""], ["name", "vat"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "ionBlur"], [null, "ionChange"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("ionBlur" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 60)._handleBlurEvent($event.target) !== false;
            ad = pd_0 && ad;
          }

          if ("ionChange" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 60)._handleInputEvent($event.target) !== false;
            ad = pd_1 && ad;
          }

          if ("ngModelChange" === en) {
            var pd_2 = (_co.vat = $event) !== false;
            ad = pd_2 && ad;
          }

          return ad;
        }, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonInput_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonInput"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](59, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonInput"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], {
          name: [0, "name"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](60, 16384, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["TextValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NG_VALUE_ACCESSOR"], function (p0_0) {
          return [p0_0];
        }, [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["TextValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](62, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], [[2, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NG_VALUE_ACCESSOR"]]], {
          name: [0, "name"],
          model: [1, "model"]
        }, {
          update: "ngModelChange"
        }), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](64, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](65, 0, null, 0, 11, "ion-item", [["class", "ion-padding"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonItem_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonItem"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](66, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonItem"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](67, 0, null, 0, 2, "ion-label", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonLabel_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonLabel"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](68, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonLabel"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, 0, ["Total Cost: \xA3"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](70, 0, null, 0, 6, "ion-input", [["clear-input", ""], ["name", "totalIncVat"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "ionBlur"], [null, "ionChange"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("ionBlur" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 72)._handleBlurEvent($event.target) !== false;
            ad = pd_0 && ad;
          }

          if ("ionChange" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 72)._handleInputEvent($event.target) !== false;
            ad = pd_1 && ad;
          }

          if ("ngModelChange" === en) {
            var pd_2 = (_co.totalIncVat = $event) !== false;
            ad = pd_2 && ad;
          }

          return ad;
        }, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonInput_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonInput"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](71, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonInput"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], {
          name: [0, "name"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](72, 16384, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["TextValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NG_VALUE_ACCESSOR"], function (p0_0) {
          return [p0_0];
        }, [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["TextValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](74, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], [[2, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NG_VALUE_ACCESSOR"]]], {
          name: [0, "name"],
          model: [1, "model"]
        }, {
          update: "ngModelChange"
        }), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](76, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](77, 0, null, null, 3, "div", [["class", "ion-padding"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](78, 0, null, null, 2, "ion-button", [["color", "secondary"], ["expand", "block"], ["type", "submit"]], null, [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.calculateSimpleTimber() !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonButton_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](79, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], {
          color: [0, "color"],
          expand: [1, "expand"],
          type: [2, "type"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, 0, [" Submit "]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_1 = _co.details == null ? null : _co.details.name;

          _ck(_v, 11, 0, currVal_1);

          var currVal_3 = _co.details == null ? null : _co.details.style;

          _ck(_v, 15, 0, currVal_3);

          var currVal_20 = "totalXVat";

          _ck(_v, 47, 0, currVal_20);

          var currVal_21 = "totalXVat";
          var currVal_22 = _co.totalXVat;

          _ck(_v, 50, 0, currVal_21, currVal_22);

          var currVal_30 = "vat";

          _ck(_v, 59, 0, currVal_30);

          var currVal_31 = "vat";
          var currVal_32 = _co.vat;

          _ck(_v, 62, 0, currVal_31, currVal_32);

          var currVal_40 = "totalIncVat";

          _ck(_v, 71, 0, currVal_40);

          var currVal_41 = "totalIncVat";
          var currVal_42 = _co.totalIncVat;

          _ck(_v, 74, 0, currVal_41, currVal_42);

          var currVal_43 = "secondary";
          var currVal_44 = "block";
          var currVal_45 = "submit";

          _ck(_v, 79, 0, currVal_43, currVal_44, currVal_45);
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

          var currVal_11 = _co.costTimber;

          _ck(_v, 34, 0, currVal_11);

          var currVal_12 = _co.costDelivery;

          _ck(_v, 40, 0, currVal_12);

          var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 52).ngClassUntouched;

          var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 52).ngClassTouched;

          var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 52).ngClassPristine;

          var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 52).ngClassDirty;

          var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 52).ngClassValid;

          var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 52).ngClassInvalid;

          var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 52).ngClassPending;

          _ck(_v, 46, 0, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19);

          var currVal_23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 64).ngClassUntouched;

          var currVal_24 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 64).ngClassTouched;

          var currVal_25 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 64).ngClassPristine;

          var currVal_26 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 64).ngClassDirty;

          var currVal_27 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 64).ngClassValid;

          var currVal_28 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 64).ngClassInvalid;

          var currVal_29 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 64).ngClassPending;

          _ck(_v, 58, 0, currVal_23, currVal_24, currVal_25, currVal_26, currVal_27, currVal_28, currVal_29);

          var currVal_33 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 76).ngClassUntouched;

          var currVal_34 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 76).ngClassTouched;

          var currVal_35 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 76).ngClassPristine;

          var currVal_36 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 76).ngClassDirty;

          var currVal_37 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 76).ngClassValid;

          var currVal_38 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 76).ngClassInvalid;

          var currVal_39 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 76).ngClassPending;

          _ck(_v, 70, 0, currVal_33, currVal_34, currVal_35, currVal_36, currVal_37, currVal_38, currVal_39);
        });
      }

      function View_CarpentryDetailsPage_8(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](0, 0, null, null, 105, "ion-slide", [["class", "first-slide illustration-and-decoration-slide"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonSlide_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonSlide"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](1, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonSlide"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](2, 0, null, 0, 103, "ion-row", [["class", "slide-inner-row"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonRow_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonRow"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](3, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonRow"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](4, 0, null, 0, 101, "ion-card", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonCard_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonCard"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](5, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCard"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](6, 0, null, 0, 0, "img", [["src", "/assets/images/simple_rectangle_area.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](7, 0, null, 0, 9, "ion-card-header", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonCardHeader_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonCardHeader"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](8, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCardHeader"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](9, 0, null, 0, 3, "ion-card-title", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonCardTitle_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonCardTitle"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](10, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCardTitle"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](11, 0, null, 0, 1, "app-text-shell", [], [[2, "text-loaded", null]], null, null, _shell_text_shell_text_shell_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_TextShellComponent_0"], _shell_text_shell_text_shell_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_TextShellComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](12, 49152, null, 0, _shell_text_shell_text_shell_component__WEBPACK_IMPORTED_MODULE_6__["TextShellComponent"], [], {
          data: [0, "data"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](13, 0, null, 0, 3, "ion-card-subtitle", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonCardSubtitle_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonCardSubtitle"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](14, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCardSubtitle"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](15, 0, null, 0, 1, "app-text-shell", [], [[2, "text-loaded", null]], null, null, _shell_text_shell_text_shell_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_TextShellComponent_0"], _shell_text_shell_text_shell_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_TextShellComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](16, 49152, null, 0, _shell_text_shell_text_shell_component__WEBPACK_IMPORTED_MODULE_6__["TextShellComponent"], [], {
          data: [0, "data"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](17, 0, null, 0, 88, "ion-card-content", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonCardContent_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonCardContent"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](18, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCardContent"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](19, 0, null, 0, 86, "ion-slide", [["class", "first-slide illustration-and-decoration-slide"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonSlide_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonSlide"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](20, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonSlide"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](21, 0, null, 0, 84, "ion-row", [["class", "slide-inner-row"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonRow_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonRow"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](22, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonRow"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](23, 0, null, 0, 82, "form", [["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "submit"], [null, "reset"]], function (_v, en, $event) {
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
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](24, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_y"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](25, 4210688, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgForm"], [[8, null], [8, null]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ControlContainer"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgForm"]]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](27, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ControlContainer"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](28, 0, null, null, 73, "ion-list", [["class", "ion-padding"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonList_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonList"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](29, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonList"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](30, 0, null, 0, 7, "ion-item", [["class", "ion-padding"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonItem_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonItem"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](31, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonItem"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](32, 0, null, 0, 2, "ion-label", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonLabel_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonLabel"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](33, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonLabel"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, 0, ["Side 1:"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](35, 0, null, 0, 0, "p", [["type", "number"]], [[8, "innerHTML", 1]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](36, 0, null, 0, 1, "p", [["style", "margin-left: 5px;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, null, ["m"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](38, 0, null, 0, 7, "ion-item", [["class", "ion-padding"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonItem_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonItem"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](39, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonItem"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](40, 0, null, 0, 2, "ion-label", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonLabel_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonLabel"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](41, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonLabel"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, 0, ["Side 2:"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](43, 0, null, 0, 0, "p", [["type", "number"]], [[8, "innerHTML", 1]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](44, 0, null, 0, 1, "p", [["style", "margin-left: 5px;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, null, ["m"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](46, 0, null, 0, 15, "ion-item", [["class", "ion-padding"], ["type", "submit"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonItem_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonItem"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](47, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonItem"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], {
          type: [0, "type"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](48, 0, null, 0, 2, "ion-label", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonLabel_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonLabel"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](49, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonLabel"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, 0, ["Total Area:"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](51, 0, null, 0, 8, "ion-input", [["maxlength", "5"], ["name", "totalPlasterArea"]], [[1, "maxlength", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "ionBlur"], [null, "ionChange"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("ionBlur" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 53)._handleBlurEvent($event.target) !== false;
            ad = pd_0 && ad;
          }

          if ("ionChange" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 53)._handleInputEvent($event.target) !== false;
            ad = pd_1 && ad;
          }

          if ("ngModelChange" === en) {
            var pd_2 = (_co.totalPlasterArea = $event) !== false;
            ad = pd_2 && ad;
          }

          return ad;
        }, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonInput_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonInput"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](52, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonInput"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], {
          maxlength: [0, "maxlength"],
          name: [1, "name"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](53, 16384, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["TextValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](54, 540672, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["MaxLengthValidator"], [], {
          maxlength: [0, "maxlength"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NG_VALIDATORS"], function (p0_0) {
          return [p0_0];
        }, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["MaxLengthValidator"]]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NG_VALUE_ACCESSOR"], function (p0_0) {
          return [p0_0];
        }, [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["TextValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](57, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], [[2, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ControlContainer"]], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NG_VALIDATORS"]], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NG_VALUE_ACCESSOR"]]], {
          name: [0, "name"],
          model: [1, "model"]
        }, {
          update: "ngModelChange"
        }), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](59, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](60, 0, null, 0, 1, "p", [["style", "margin-left: 5px;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, null, ["m2"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](62, 0, null, 0, 15, "ion-item", [["class", "ion-padding"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonItem_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonItem"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](63, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonItem"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](64, 0, null, 0, 2, "ion-label", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonLabel_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonLabel"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](65, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonLabel"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, 0, ["Multiplied by 2:"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](67, 0, null, 0, 8, "ion-input", [["maxlength", "4"], ["name", "totalPlasterAreaDoubled"]], [[1, "maxlength", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "ionBlur"], [null, "ionChange"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("ionBlur" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 69)._handleBlurEvent($event.target) !== false;
            ad = pd_0 && ad;
          }

          if ("ionChange" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 69)._handleInputEvent($event.target) !== false;
            ad = pd_1 && ad;
          }

          if ("ngModelChange" === en) {
            var pd_2 = (_co.totalPlasterAreaDoubled = $event) !== false;
            ad = pd_2 && ad;
          }

          return ad;
        }, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonInput_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonInput"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](68, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonInput"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], {
          maxlength: [0, "maxlength"],
          name: [1, "name"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](69, 16384, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["TextValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](70, 540672, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["MaxLengthValidator"], [], {
          maxlength: [0, "maxlength"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NG_VALIDATORS"], function (p0_0) {
          return [p0_0];
        }, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["MaxLengthValidator"]]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NG_VALUE_ACCESSOR"], function (p0_0) {
          return [p0_0];
        }, [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["TextValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](73, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], [[2, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ControlContainer"]], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NG_VALIDATORS"]], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NG_VALUE_ACCESSOR"]]], {
          name: [0, "name"],
          model: [1, "model"]
        }, {
          update: "ngModelChange"
        }), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](75, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](76, 0, null, 0, 1, "p", [["style", "margin-left: 5px;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, null, ["m2"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](78, 0, null, 0, 7, "ion-item", [["class", "ion-padding"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonItem_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonItem"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](79, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonItem"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](80, 0, null, 0, 2, "ion-label", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonLabel_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonLabel"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](81, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonLabel"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, 0, ["Area per plasterboard:"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](83, 0, null, 0, 0, "p", [["type", "number"]], [[8, "innerHTML", 1]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](84, 0, null, 0, 1, "p", [["style", "margin-left: 5px;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, null, ["m2"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](86, 0, null, 0, 15, "ion-item", [["class", "ion-padding"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonItem_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonItem"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](87, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonItem"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](88, 0, null, 0, 2, "ion-label", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonLabel_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonLabel"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](89, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonLabel"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, 0, ["Number Required:"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](91, 0, null, 0, 8, "ion-input", [["maxlength", "5"], ["name", "numberOfBoards"]], [[1, "maxlength", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "ionBlur"], [null, "ionChange"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("ionBlur" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 93)._handleBlurEvent($event.target) !== false;
            ad = pd_0 && ad;
          }

          if ("ionChange" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 93)._handleInputEvent($event.target) !== false;
            ad = pd_1 && ad;
          }

          if ("ngModelChange" === en) {
            var pd_2 = (_co.numberOfBoards = $event) !== false;
            ad = pd_2 && ad;
          }

          return ad;
        }, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonInput_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonInput"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](92, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonInput"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], {
          maxlength: [0, "maxlength"],
          name: [1, "name"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](93, 16384, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["TextValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](94, 540672, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["MaxLengthValidator"], [], {
          maxlength: [0, "maxlength"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NG_VALIDATORS"], function (p0_0) {
          return [p0_0];
        }, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["MaxLengthValidator"]]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NG_VALUE_ACCESSOR"], function (p0_0) {
          return [p0_0];
        }, [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["TextValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](97, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], [[2, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ControlContainer"]], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NG_VALIDATORS"]], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NG_VALUE_ACCESSOR"]]], {
          name: [0, "name"],
          model: [1, "model"]
        }, {
          update: "ngModelChange"
        }), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](99, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](100, 0, null, 0, 1, "p", [["style", "margin-left: 5px;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, null, ["boards"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](102, 0, null, null, 3, "div", [["class", "ion-padding"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](103, 0, null, null, 2, "ion-button", [["color", "secondary"], ["expand", "block"], ["type", "submit"]], null, [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.calculatePlasteboard() !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonButton_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](104, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], {
          color: [0, "color"],
          expand: [1, "expand"],
          type: [2, "type"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, 0, [" Submit "]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_1 = _co.details == null ? null : _co.details.name;

          _ck(_v, 12, 0, currVal_1);

          var currVal_3 = _co.details == null ? null : _co.details.style;

          _ck(_v, 16, 0, currVal_3);

          var currVal_13 = "submit";

          _ck(_v, 47, 0, currVal_13);

          var currVal_22 = "5";
          var currVal_23 = "totalPlasterArea";

          _ck(_v, 52, 0, currVal_22, currVal_23);

          var currVal_24 = "5";

          _ck(_v, 54, 0, currVal_24);

          var currVal_25 = "totalPlasterArea";
          var currVal_26 = _co.totalPlasterArea;

          _ck(_v, 57, 0, currVal_25, currVal_26);

          var currVal_35 = "4";
          var currVal_36 = "totalPlasterAreaDoubled";

          _ck(_v, 68, 0, currVal_35, currVal_36);

          var currVal_37 = "4";

          _ck(_v, 70, 0, currVal_37);

          var currVal_38 = "totalPlasterAreaDoubled";
          var currVal_39 = _co.totalPlasterAreaDoubled;

          _ck(_v, 73, 0, currVal_38, currVal_39);

          var currVal_49 = "5";
          var currVal_50 = "numberOfBoards";

          _ck(_v, 92, 0, currVal_49, currVal_50);

          var currVal_51 = "5";

          _ck(_v, 94, 0, currVal_51);

          var currVal_52 = "numberOfBoards";
          var currVal_53 = _co.numberOfBoards;

          _ck(_v, 97, 0, currVal_52, currVal_53);

          var currVal_54 = "secondary";
          var currVal_55 = "block";
          var currVal_56 = "submit";

          _ck(_v, 104, 0, currVal_54, currVal_55, currVal_56);
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

          var currVal_11 = _co.side1;

          _ck(_v, 35, 0, currVal_11);

          var currVal_12 = _co.side2;

          _ck(_v, 43, 0, currVal_12);

          var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 54).maxlength ? _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 54).maxlength : null;

          var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 59).ngClassUntouched;

          var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 59).ngClassTouched;

          var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 59).ngClassPristine;

          var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 59).ngClassDirty;

          var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 59).ngClassValid;

          var currVal_20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 59).ngClassInvalid;

          var currVal_21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 59).ngClassPending;

          _ck(_v, 51, 0, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19, currVal_20, currVal_21);

          var currVal_27 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 70).maxlength ? _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 70).maxlength : null;

          var currVal_28 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 75).ngClassUntouched;

          var currVal_29 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 75).ngClassTouched;

          var currVal_30 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 75).ngClassPristine;

          var currVal_31 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 75).ngClassDirty;

          var currVal_32 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 75).ngClassValid;

          var currVal_33 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 75).ngClassInvalid;

          var currVal_34 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 75).ngClassPending;

          _ck(_v, 67, 0, currVal_27, currVal_28, currVal_29, currVal_30, currVal_31, currVal_32, currVal_33, currVal_34);

          var currVal_40 = _co.plasterCoverage;

          _ck(_v, 83, 0, currVal_40);

          var currVal_41 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 94).maxlength ? _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 94).maxlength : null;

          var currVal_42 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 99).ngClassUntouched;

          var currVal_43 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 99).ngClassTouched;

          var currVal_44 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 99).ngClassPristine;

          var currVal_45 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 99).ngClassDirty;

          var currVal_46 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 99).ngClassValid;

          var currVal_47 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 99).ngClassInvalid;

          var currVal_48 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 99).ngClassPending;

          _ck(_v, 91, 0, currVal_41, currVal_42, currVal_43, currVal_44, currVal_45, currVal_46, currVal_47, currVal_48);
        });
      }

      function View_CarpentryDetailsPage_9(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](0, 0, null, null, 98, "ion-slide", [["class", "first-slide illustration-and-decoration-slide"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonSlide_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonSlide"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](1, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonSlide"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](2, 0, null, 0, 96, "ion-row", [["class", "slide-inner-row"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonRow_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonRow"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](3, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonRow"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](4, 0, null, 0, 94, "ion-card", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonCard_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonCard"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](5, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCard"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](6, 0, null, 0, 9, "ion-card-header", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonCardHeader_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonCardHeader"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](7, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCardHeader"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](8, 0, null, 0, 3, "ion-card-title", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonCardTitle_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonCardTitle"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](9, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCardTitle"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](10, 0, null, 0, 1, "app-text-shell", [], [[2, "text-loaded", null]], null, null, _shell_text_shell_text_shell_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_TextShellComponent_0"], _shell_text_shell_text_shell_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_TextShellComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](11, 49152, null, 0, _shell_text_shell_text_shell_component__WEBPACK_IMPORTED_MODULE_6__["TextShellComponent"], [], {
          data: [0, "data"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](12, 0, null, 0, 3, "ion-card-subtitle", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonCardSubtitle_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonCardSubtitle"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](13, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCardSubtitle"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](14, 0, null, 0, 1, "app-text-shell", [], [[2, "text-loaded", null]], null, null, _shell_text_shell_text_shell_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_TextShellComponent_0"], _shell_text_shell_text_shell_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_TextShellComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](15, 49152, null, 0, _shell_text_shell_text_shell_component__WEBPACK_IMPORTED_MODULE_6__["TextShellComponent"], [], {
          data: [0, "data"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](16, 0, null, 0, 82, "ion-card-content", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonCardContent_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonCardContent"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](17, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCardContent"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](18, 0, null, 0, 80, "ion-slide", [["class", "first-slide illustration-and-decoration-slide"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonSlide_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonSlide"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](19, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonSlide"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](20, 0, null, 0, 78, "ion-row", [["class", "slide-inner-row"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonRow_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonRow"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](21, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonRow"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](22, 0, null, 0, 76, "form", [["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "submit"], [null, "reset"]], function (_v, en, $event) {
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
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](23, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_y"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](24, 4210688, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgForm"], [[8, null], [8, null]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ControlContainer"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgForm"]]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](26, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ControlContainer"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](27, 0, null, null, 67, "ion-list", [["class", "ion-padding"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonList_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonList"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](28, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonList"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](29, 0, null, 0, 5, "ion-item", [["class", "ion-padding"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonItem_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonItem"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](30, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonItem"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](31, 0, null, 0, 2, "ion-label", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonLabel_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonLabel"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](32, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonLabel"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, 0, ["Timber : \xA3"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](34, 0, null, 0, 0, "p", [["type", "number"]], [[8, "innerHTML", 1]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](35, 0, null, 0, 5, "ion-item", [["class", "ion-padding"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonItem_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonItem"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](36, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonItem"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](37, 0, null, 0, 2, "ion-label", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonLabel_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonLabel"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](38, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonLabel"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, 0, ["Screws : \xA3"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](40, 0, null, 0, 0, "p", [["type", "number"]], [[8, "innerHTML", 1]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](41, 0, null, 0, 5, "ion-item", [["class", "ion-padding"], ["type", "submit"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonItem_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonItem"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](42, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonItem"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], {
          type: [0, "type"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](43, 0, null, 0, 2, "ion-label", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonLabel_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonLabel"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](44, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonLabel"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, 0, ["Wall PLugs : \xA3"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](46, 0, null, 0, 0, "p", [["type", "number"]], [[8, "innerHTML", 1]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](47, 0, null, 0, 5, "ion-item", [["class", "ion-padding"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonItem_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonItem"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](48, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonItem"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](49, 0, null, 0, 2, "ion-label", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonLabel_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonLabel"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](50, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonLabel"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, 0, ["Discount : %"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](52, 0, null, 0, 0, "p", [["type", "number"]], [[8, "innerHTML", 1]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](53, 0, null, 0, 13, "ion-item", [["class", "ion-padding"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonItem_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonItem"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](54, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonItem"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](55, 0, null, 0, 2, "ion-label", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonLabel_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonLabel"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](56, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonLabel"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, 0, ["Total before Discount : \xA3"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](58, 0, null, 0, 8, "ion-input", [["maxlength", "6"], ["name", "totalXDiscount"]], [[1, "maxlength", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "ionBlur"], [null, "ionChange"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("ionBlur" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 60)._handleBlurEvent($event.target) !== false;
            ad = pd_0 && ad;
          }

          if ("ionChange" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 60)._handleInputEvent($event.target) !== false;
            ad = pd_1 && ad;
          }

          if ("ngModelChange" === en) {
            var pd_2 = (_co.totalXDiscount = $event) !== false;
            ad = pd_2 && ad;
          }

          return ad;
        }, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonInput_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonInput"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](59, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonInput"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], {
          maxlength: [0, "maxlength"],
          name: [1, "name"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](60, 16384, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["TextValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](61, 540672, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["MaxLengthValidator"], [], {
          maxlength: [0, "maxlength"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NG_VALIDATORS"], function (p0_0) {
          return [p0_0];
        }, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["MaxLengthValidator"]]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NG_VALUE_ACCESSOR"], function (p0_0) {
          return [p0_0];
        }, [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["TextValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](64, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], [[2, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ControlContainer"]], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NG_VALIDATORS"]], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NG_VALUE_ACCESSOR"]]], {
          name: [0, "name"],
          model: [1, "model"]
        }, {
          update: "ngModelChange"
        }), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](66, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](67, 0, null, 0, 13, "ion-item", [["class", "ion-padding"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonItem_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonItem"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](68, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonItem"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](69, 0, null, 0, 2, "ion-label", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonLabel_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonLabel"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](70, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonLabel"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, 0, ["Discount Total : \xA3"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](72, 0, null, 0, 8, "ion-input", [["maxlength", "6"], ["name", "discountTotal"]], [[1, "maxlength", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "ionBlur"], [null, "ionChange"]], function (_v, en, $event) {
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
            var pd_2 = (_co.discountTotal = $event) !== false;
            ad = pd_2 && ad;
          }

          return ad;
        }, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonInput_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonInput"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](73, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonInput"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], {
          maxlength: [0, "maxlength"],
          name: [1, "name"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](74, 16384, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["TextValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](75, 540672, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["MaxLengthValidator"], [], {
          maxlength: [0, "maxlength"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NG_VALIDATORS"], function (p0_0) {
          return [p0_0];
        }, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["MaxLengthValidator"]]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NG_VALUE_ACCESSOR"], function (p0_0) {
          return [p0_0];
        }, [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["TextValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](78, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], [[2, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ControlContainer"]], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NG_VALIDATORS"]], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NG_VALUE_ACCESSOR"]]], {
          name: [0, "name"],
          model: [1, "model"]
        }, {
          update: "ngModelChange"
        }), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](80, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](81, 0, null, 0, 13, "ion-item", [["class", "ion-padding"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonItem_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonItem"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](82, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonItem"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](83, 0, null, 0, 2, "ion-label", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonLabel_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonLabel"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](84, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonLabel"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, 0, ["Final Price : \xA3"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](86, 0, null, 0, 8, "ion-input", [["maxlength", "6"], ["name", "totalCost"]], [[1, "maxlength", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "ionBlur"], [null, "ionChange"]], function (_v, en, $event) {
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
            var pd_2 = (_co.totalCost = $event) !== false;
            ad = pd_2 && ad;
          }

          return ad;
        }, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonInput_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonInput"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](87, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonInput"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], {
          maxlength: [0, "maxlength"],
          name: [1, "name"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](88, 16384, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["TextValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](89, 540672, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["MaxLengthValidator"], [], {
          maxlength: [0, "maxlength"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NG_VALIDATORS"], function (p0_0) {
          return [p0_0];
        }, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["MaxLengthValidator"]]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NG_VALUE_ACCESSOR"], function (p0_0) {
          return [p0_0];
        }, [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["TextValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](92, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], [[2, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ControlContainer"]], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NG_VALIDATORS"]], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NG_VALUE_ACCESSOR"]]], {
          name: [0, "name"],
          model: [1, "model"]
        }, {
          update: "ngModelChange"
        }), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](94, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](95, 0, null, null, 3, "div", [["class", "ion-padding"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](96, 0, null, null, 2, "ion-button", [["color", "secondary"], ["expand", "block"], ["type", "submit"]], null, [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.calculateDiscount() !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonButton_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](97, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], {
          color: [0, "color"],
          expand: [1, "expand"],
          type: [2, "type"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, 0, [" Submit "]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_1 = _co.details == null ? null : _co.details.name;

          _ck(_v, 11, 0, currVal_1);

          var currVal_3 = _co.details == null ? null : _co.details.style;

          _ck(_v, 15, 0, currVal_3);

          var currVal_13 = "submit";

          _ck(_v, 42, 0, currVal_13);

          var currVal_24 = "6";
          var currVal_25 = "totalXDiscount";

          _ck(_v, 59, 0, currVal_24, currVal_25);

          var currVal_26 = "6";

          _ck(_v, 61, 0, currVal_26);

          var currVal_27 = "totalXDiscount";
          var currVal_28 = _co.totalXDiscount;

          _ck(_v, 64, 0, currVal_27, currVal_28);

          var currVal_37 = "6";
          var currVal_38 = "discountTotal";

          _ck(_v, 73, 0, currVal_37, currVal_38);

          var currVal_39 = "6";

          _ck(_v, 75, 0, currVal_39);

          var currVal_40 = "discountTotal";
          var currVal_41 = _co.discountTotal;

          _ck(_v, 78, 0, currVal_40, currVal_41);

          var currVal_50 = "6";
          var currVal_51 = "totalCost";

          _ck(_v, 87, 0, currVal_50, currVal_51);

          var currVal_52 = "6";

          _ck(_v, 89, 0, currVal_52);

          var currVal_53 = "totalCost";
          var currVal_54 = _co.totalCost;

          _ck(_v, 92, 0, currVal_53, currVal_54);

          var currVal_55 = "secondary";
          var currVal_56 = "block";
          var currVal_57 = "submit";

          _ck(_v, 97, 0, currVal_55, currVal_56, currVal_57);
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

          var currVal_11 = _co.timberCost;

          _ck(_v, 34, 0, currVal_11);

          var currVal_12 = _co.screwsCost;

          _ck(_v, 40, 0, currVal_12);

          var currVal_14 = _co.plugsCost;

          _ck(_v, 46, 0, currVal_14);

          var currVal_15 = _co.discount;

          _ck(_v, 52, 0, currVal_15);

          var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 61).maxlength ? _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 61).maxlength : null;

          var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 66).ngClassUntouched;

          var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 66).ngClassTouched;

          var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 66).ngClassPristine;

          var currVal_20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 66).ngClassDirty;

          var currVal_21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 66).ngClassValid;

          var currVal_22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 66).ngClassInvalid;

          var currVal_23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 66).ngClassPending;

          _ck(_v, 58, 0, currVal_16, currVal_17, currVal_18, currVal_19, currVal_20, currVal_21, currVal_22, currVal_23);

          var currVal_29 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 75).maxlength ? _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 75).maxlength : null;

          var currVal_30 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 80).ngClassUntouched;

          var currVal_31 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 80).ngClassTouched;

          var currVal_32 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 80).ngClassPristine;

          var currVal_33 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 80).ngClassDirty;

          var currVal_34 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 80).ngClassValid;

          var currVal_35 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 80).ngClassInvalid;

          var currVal_36 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 80).ngClassPending;

          _ck(_v, 72, 0, currVal_29, currVal_30, currVal_31, currVal_32, currVal_33, currVal_34, currVal_35, currVal_36);

          var currVal_42 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 89).maxlength ? _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 89).maxlength : null;

          var currVal_43 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 94).ngClassUntouched;

          var currVal_44 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 94).ngClassTouched;

          var currVal_45 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 94).ngClassPristine;

          var currVal_46 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 94).ngClassDirty;

          var currVal_47 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 94).ngClassValid;

          var currVal_48 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 94).ngClassInvalid;

          var currVal_49 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 94).ngClassPending;

          _ck(_v, 86, 0, currVal_42, currVal_43, currVal_44, currVal_45, currVal_46, currVal_47, currVal_48, currVal_49);
        });
      }

      function View_CarpentryDetailsPage_10(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](0, 0, null, null, 62, "ion-slide", [["class", "first-slide illustration-and-decoration-slide"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonSlide_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonSlide"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](1, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonSlide"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](2, 0, null, 0, 60, "ion-row", [["class", "slide-inner-row"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonRow_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonRow"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](3, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonRow"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](4, 0, null, 0, 58, "ion-card", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonCard_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonCard"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](5, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCard"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](6, 0, null, 0, 9, "ion-card-header", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonCardHeader_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonCardHeader"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](7, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCardHeader"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](8, 0, null, 0, 3, "ion-card-title", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonCardTitle_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonCardTitle"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](9, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCardTitle"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](10, 0, null, 0, 1, "app-text-shell", [], [[2, "text-loaded", null]], null, null, _shell_text_shell_text_shell_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_TextShellComponent_0"], _shell_text_shell_text_shell_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_TextShellComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](11, 49152, null, 0, _shell_text_shell_text_shell_component__WEBPACK_IMPORTED_MODULE_6__["TextShellComponent"], [], {
          data: [0, "data"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](12, 0, null, 0, 3, "ion-card-subtitle", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonCardSubtitle_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonCardSubtitle"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](13, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCardSubtitle"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](14, 0, null, 0, 1, "app-text-shell", [], [[2, "text-loaded", null]], null, null, _shell_text_shell_text_shell_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_TextShellComponent_0"], _shell_text_shell_text_shell_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_TextShellComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](15, 49152, null, 0, _shell_text_shell_text_shell_component__WEBPACK_IMPORTED_MODULE_6__["TextShellComponent"], [], {
          data: [0, "data"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](16, 0, null, 0, 46, "ion-card-content", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonCardContent_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonCardContent"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](17, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCardContent"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](18, 0, null, 0, 44, "ion-slide", [["class", "first-slide illustration-and-decoration-slide"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonSlide_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonSlide"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](19, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonSlide"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](20, 0, null, 0, 42, "ion-row", [["class", "slide-inner-row"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonRow_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonRow"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](21, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonRow"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](22, 0, null, 0, 40, "form", [["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "submit"], [null, "reset"]], function (_v, en, $event) {
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
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](23, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_y"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](24, 4210688, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgForm"], [[8, null], [8, null]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ControlContainer"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgForm"]]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](26, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ControlContainer"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](27, 0, null, null, 31, "ion-list", [["class", "ion-padding"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonList_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonList"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](28, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonList"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](29, 0, null, 0, 7, "ion-item", [["class", "ion-padding"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonItem_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonItem"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](30, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonItem"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](31, 0, null, 0, 2, "ion-label", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonLabel_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonLabel"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](32, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonLabel"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, 0, ["Joint Measurement : "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](34, 0, null, 0, 0, "p", [["type", "number"]], [[8, "innerHTML", 1]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](35, 0, null, 0, 1, "p", [["style", "margin-left: 5px;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, null, ["m"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](37, 0, null, 0, 5, "ion-item", [["class", "ion-padding"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonItem_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonItem"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](38, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonItem"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](39, 0, null, 0, 2, "ion-label", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonLabel_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonLabel"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](40, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonLabel"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, 0, ["Amount of Rot : "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](42, 0, null, 0, 0, "p", [["type", "number"]], [[8, "innerHTML", 1]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](43, 0, null, 0, 15, "ion-item", [["class", "ion-padding"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonItem_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonItem"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](44, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonItem"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](45, 0, null, 0, 2, "ion-label", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonLabel_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonLabel"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](46, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonLabel"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, 0, ["Amount to Replace :"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](48, 0, null, 0, 8, "ion-input", [["maxlength", "6"], ["name", "joistReplacement"]], [[1, "maxlength", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "ionBlur"], [null, "ionChange"]], function (_v, en, $event) {
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
            var pd_2 = (_co.joistReplacement = $event) !== false;
            ad = pd_2 && ad;
          }

          return ad;
        }, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonInput_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonInput"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](49, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonInput"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], {
          maxlength: [0, "maxlength"],
          name: [1, "name"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](50, 16384, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["TextValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](51, 540672, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["MaxLengthValidator"], [], {
          maxlength: [0, "maxlength"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NG_VALIDATORS"], function (p0_0) {
          return [p0_0];
        }, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["MaxLengthValidator"]]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NG_VALUE_ACCESSOR"], function (p0_0) {
          return [p0_0];
        }, [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["TextValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](54, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], [[2, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ControlContainer"]], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NG_VALIDATORS"]], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NG_VALUE_ACCESSOR"]]], {
          name: [0, "name"],
          model: [1, "model"]
        }, {
          update: "ngModelChange"
        }), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](56, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](57, 0, null, 0, 1, "p", [["style", "margin-left: 5px;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, null, ["m"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](59, 0, null, null, 3, "div", [["class", "ion-padding"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](60, 0, null, null, 2, "ion-button", [["color", "secondary"], ["expand", "block"], ["type", "submit"]], null, [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.calculateJoist() !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonButton_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](61, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], {
          color: [0, "color"],
          expand: [1, "expand"],
          type: [2, "type"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, 0, [" Submit "]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_1 = _co.details == null ? null : _co.details.name;

          _ck(_v, 11, 0, currVal_1);

          var currVal_3 = _co.details == null ? null : _co.details.style;

          _ck(_v, 15, 0, currVal_3);

          var currVal_21 = "6";
          var currVal_22 = "joistReplacement";

          _ck(_v, 49, 0, currVal_21, currVal_22);

          var currVal_23 = "6";

          _ck(_v, 51, 0, currVal_23);

          var currVal_24 = "joistReplacement";
          var currVal_25 = _co.joistReplacement;

          _ck(_v, 54, 0, currVal_24, currVal_25);

          var currVal_26 = "secondary";
          var currVal_27 = "block";
          var currVal_28 = "submit";

          _ck(_v, 61, 0, currVal_26, currVal_27, currVal_28);
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

          var currVal_11 = _co.joistLength;

          _ck(_v, 34, 0, currVal_11);

          var currVal_12 = _co.rotAmount;

          _ck(_v, 42, 0, currVal_12);

          var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 51).maxlength ? _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 51).maxlength : null;

          var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 56).ngClassUntouched;

          var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 56).ngClassTouched;

          var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 56).ngClassPristine;

          var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 56).ngClassDirty;

          var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 56).ngClassValid;

          var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 56).ngClassInvalid;

          var currVal_20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 56).ngClassPending;

          _ck(_v, 48, 0, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19, currVal_20);
        });
      }

      function View_CarpentryDetailsPage_11(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](0, 0, null, null, 72, "ion-slide", [["class", "first-slide illustration-and-decoration-slide"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonSlide_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonSlide"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](1, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonSlide"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](2, 0, null, 0, 70, "ion-row", [["class", "slide-inner-row"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonRow_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonRow"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](3, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonRow"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](4, 0, null, 0, 68, "ion-card", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonCard_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonCard"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](5, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCard"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](6, 0, null, 0, 9, "ion-card-header", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonCardHeader_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonCardHeader"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](7, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCardHeader"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](8, 0, null, 0, 3, "ion-card-title", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonCardTitle_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonCardTitle"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](9, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCardTitle"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](10, 0, null, 0, 1, "app-text-shell", [], [[2, "text-loaded", null]], null, null, _shell_text_shell_text_shell_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_TextShellComponent_0"], _shell_text_shell_text_shell_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_TextShellComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](11, 49152, null, 0, _shell_text_shell_text_shell_component__WEBPACK_IMPORTED_MODULE_6__["TextShellComponent"], [], {
          data: [0, "data"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](12, 0, null, 0, 3, "ion-card-subtitle", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonCardSubtitle_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonCardSubtitle"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](13, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCardSubtitle"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](14, 0, null, 0, 1, "app-text-shell", [], [[2, "text-loaded", null]], null, null, _shell_text_shell_text_shell_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_TextShellComponent_0"], _shell_text_shell_text_shell_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_TextShellComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](15, 49152, null, 0, _shell_text_shell_text_shell_component__WEBPACK_IMPORTED_MODULE_6__["TextShellComponent"], [], {
          data: [0, "data"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](16, 0, null, 0, 56, "ion-card-content", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonCardContent_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonCardContent"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](17, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCardContent"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](18, 0, null, 0, 54, "ion-slide", [["class", "first-slide illustration-and-decoration-slide"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonSlide_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonSlide"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](19, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonSlide"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](20, 0, null, 0, 52, "ion-row", [["class", "slide-inner-row"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonRow_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonRow"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](21, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonRow"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](22, 0, null, 0, 50, "form", [["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "submit"], [null, "reset"]], function (_v, en, $event) {
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
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](23, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_y"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](24, 4210688, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgForm"], [[8, null], [8, null]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ControlContainer"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgForm"]]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](26, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ControlContainer"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](27, 0, null, null, 41, "ion-list", [["class", "ion-padding"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonList_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonList"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](28, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonList"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](29, 0, null, 0, 7, "ion-item", [["class", "ion-padding"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonItem_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonItem"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](30, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonItem"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](31, 0, null, 0, 2, "ion-label", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonLabel_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonLabel"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](32, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonLabel"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, 0, ["Radius : "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](34, 0, null, 0, 0, "p", [["type", "number"]], [[8, "innerHTML", 1]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](35, 0, null, 0, 1, "p", [["style", "margin-left: 5px;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, null, ["mm"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](37, 0, null, 0, 15, "ion-item", [["class", "ion-padding"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonItem_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonItem"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](38, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonItem"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](39, 0, null, 0, 2, "ion-label", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonLabel_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonLabel"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](40, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonLabel"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, 0, ["Diameter : "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](42, 0, null, 0, 8, "ion-input", [["maxlength", "6"], ["name", "diameter"]], [[1, "maxlength", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "ionBlur"], [null, "ionChange"]], function (_v, en, $event) {
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
            var pd_2 = (_co.diameter = $event) !== false;
            ad = pd_2 && ad;
          }

          return ad;
        }, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonInput_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonInput"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](43, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonInput"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], {
          maxlength: [0, "maxlength"],
          name: [1, "name"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](44, 16384, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["TextValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](45, 540672, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["MaxLengthValidator"], [], {
          maxlength: [0, "maxlength"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NG_VALIDATORS"], function (p0_0) {
          return [p0_0];
        }, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["MaxLengthValidator"]]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NG_VALUE_ACCESSOR"], function (p0_0) {
          return [p0_0];
        }, [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["TextValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](48, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], [[2, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ControlContainer"]], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NG_VALIDATORS"]], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NG_VALUE_ACCESSOR"]]], {
          name: [0, "name"],
          model: [1, "model"]
        }, {
          update: "ngModelChange"
        }), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](50, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](51, 0, null, 0, 1, "p", [["style", "margin-left: 5px;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, null, ["mm"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](53, 0, null, 0, 15, "ion-item", [["class", "ion-padding"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonItem_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonItem"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](54, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonItem"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](55, 0, null, 0, 2, "ion-label", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonLabel_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonLabel"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](56, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonLabel"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, 0, ["Circumference : "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](58, 0, null, 0, 8, "ion-input", [["maxlength", "7"], ["name", "circumference"]], [[1, "maxlength", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "ionBlur"], [null, "ionChange"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("ionBlur" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 60)._handleBlurEvent($event.target) !== false;
            ad = pd_0 && ad;
          }

          if ("ionChange" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 60)._handleInputEvent($event.target) !== false;
            ad = pd_1 && ad;
          }

          if ("ngModelChange" === en) {
            var pd_2 = (_co.circumference = $event) !== false;
            ad = pd_2 && ad;
          }

          return ad;
        }, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonInput_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonInput"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](59, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonInput"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], {
          maxlength: [0, "maxlength"],
          name: [1, "name"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](60, 16384, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["TextValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](61, 540672, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["MaxLengthValidator"], [], {
          maxlength: [0, "maxlength"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NG_VALIDATORS"], function (p0_0) {
          return [p0_0];
        }, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["MaxLengthValidator"]]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NG_VALUE_ACCESSOR"], function (p0_0) {
          return [p0_0];
        }, [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["TextValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](64, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], [[2, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ControlContainer"]], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NG_VALIDATORS"]], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NG_VALUE_ACCESSOR"]]], {
          name: [0, "name"],
          model: [1, "model"]
        }, {
          update: "ngModelChange"
        }), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](66, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](67, 0, null, 0, 1, "p", [["style", "margin-left: 5px;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, null, ["mm"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](69, 0, null, null, 3, "div", [["class", "ion-padding"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](70, 0, null, null, 2, "ion-button", [["color", "secondary"], ["expand", "block"], ["type", "submit"]], null, [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.calculateCircumference() !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonButton_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](71, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], {
          color: [0, "color"],
          expand: [1, "expand"],
          type: [2, "type"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, 0, [" Submit "]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_1 = _co.details == null ? null : _co.details.name;

          _ck(_v, 11, 0, currVal_1);

          var currVal_3 = _co.details == null ? null : _co.details.style;

          _ck(_v, 15, 0, currVal_3);

          var currVal_20 = "6";
          var currVal_21 = "diameter";

          _ck(_v, 43, 0, currVal_20, currVal_21);

          var currVal_22 = "6";

          _ck(_v, 45, 0, currVal_22);

          var currVal_23 = "diameter";
          var currVal_24 = _co.diameter;

          _ck(_v, 48, 0, currVal_23, currVal_24);

          var currVal_33 = "7";
          var currVal_34 = "circumference";

          _ck(_v, 59, 0, currVal_33, currVal_34);

          var currVal_35 = "7";

          _ck(_v, 61, 0, currVal_35);

          var currVal_36 = "circumference";
          var currVal_37 = _co.circumference;

          _ck(_v, 64, 0, currVal_36, currVal_37);

          var currVal_38 = "secondary";
          var currVal_39 = "block";
          var currVal_40 = "submit";

          _ck(_v, 71, 0, currVal_38, currVal_39, currVal_40);
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

          var currVal_11 = _co.radius;

          _ck(_v, 34, 0, currVal_11);

          var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 45).maxlength ? _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 45).maxlength : null;

          var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 50).ngClassUntouched;

          var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 50).ngClassTouched;

          var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 50).ngClassPristine;

          var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 50).ngClassDirty;

          var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 50).ngClassValid;

          var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 50).ngClassInvalid;

          var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 50).ngClassPending;

          _ck(_v, 42, 0, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19);

          var currVal_25 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 61).maxlength ? _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 61).maxlength : null;

          var currVal_26 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 66).ngClassUntouched;

          var currVal_27 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 66).ngClassTouched;

          var currVal_28 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 66).ngClassPristine;

          var currVal_29 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 66).ngClassDirty;

          var currVal_30 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 66).ngClassValid;

          var currVal_31 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 66).ngClassInvalid;

          var currVal_32 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 66).ngClassPending;

          _ck(_v, 58, 0, currVal_25, currVal_26, currVal_27, currVal_28, currVal_29, currVal_30, currVal_31, currVal_32);
        });
      }

      function View_CarpentryDetailsPage_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵqud"](402653184, 1, {
          slides: 0
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](1, 0, null, null, 12, "ion-header", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonHeader_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonHeader"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](2, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonHeader"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](3, 0, null, 0, 10, "ion-toolbar", [["color", "primary"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonToolbar_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonToolbar"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](4, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonToolbar"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], {
          color: [0, "color"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](5, 0, null, 0, 4, "ion-buttons", [["slot", "start"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonButtons_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonButtons"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](6, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonButtons"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](7, 0, null, 0, 2, "ion-back-button", [["defaultHref", "app/categories/carpentry"]], null, [[null, "click"]], function (_v, en, $event) {
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
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](14, 0, null, null, 40, "ion-content", [["class", "carpentry-details-content"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonContent_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonContent"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](15, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonContent"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](16, 0, null, 0, 14, "ion-row", [["class", "image-row"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonRow_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonRow"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](17, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonRow"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](18, 0, null, 0, 12, "ion-col", [["size", "12"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonCol_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonCol"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](19, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCol"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], {
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
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵand"](16777216, null, 0, 1, null, View_CarpentryDetailsPage_1)), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](34, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵand"](16777216, null, 0, 1, null, View_CarpentryDetailsPage_2)), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](36, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵand"](16777216, null, 0, 1, null, View_CarpentryDetailsPage_3)), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](38, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵand"](16777216, null, 0, 1, null, View_CarpentryDetailsPage_4)), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](40, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵand"](16777216, null, 0, 1, null, View_CarpentryDetailsPage_5)), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](42, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵand"](16777216, null, 0, 1, null, View_CarpentryDetailsPage_6)), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](44, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵand"](16777216, null, 0, 1, null, View_CarpentryDetailsPage_7)), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](46, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵand"](16777216, null, 0, 1, null, View_CarpentryDetailsPage_8)), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](48, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵand"](16777216, null, 0, 1, null, View_CarpentryDetailsPage_9)), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](50, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵand"](16777216, null, 0, 1, null, View_CarpentryDetailsPage_10)), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](52, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵand"](16777216, null, 0, 1, null, View_CarpentryDetailsPage_11)), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](54, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null)], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = "primary";

          _ck(_v, 4, 0, currVal_0);

          var currVal_1 = "app/categories/carpentry";

          _ck(_v, 8, 0, currVal_1);

          var currVal_2 = "app/categories/carpentry";

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

          var currVal_21 = (_co.details == null ? null : _co.details.name) == "Skirting";

          _ck(_v, 34, 0, currVal_21);

          var currVal_22 = (_co.details == null ? null : _co.details.name) == "Skirting";

          _ck(_v, 36, 0, currVal_22);

          var currVal_23 = (_co.details == null ? null : _co.details.name) == "Laminate";

          _ck(_v, 38, 0, currVal_23);

          var currVal_24 = (_co.details == null ? null : _co.details.name) == "Laminate";

          _ck(_v, 40, 0, currVal_24);

          var currVal_25 = (_co.details == null ? null : _co.details.name) == "Spindles";

          _ck(_v, 42, 0, currVal_25);

          var currVal_26 = (_co.details == null ? null : _co.details.name) == "Paint";

          _ck(_v, 44, 0, currVal_26);

          var currVal_27 = (_co.details == null ? null : _co.details.name) == "Timber";

          _ck(_v, 46, 0, currVal_27);

          var currVal_28 = (_co.details == null ? null : _co.details.name) == "Plasterboard";

          _ck(_v, 48, 0, currVal_28);

          var currVal_29 = (_co.details == null ? null : _co.details.name) == "Discount";

          _ck(_v, 50, 0, currVal_29);

          var currVal_30 = (_co.details == null ? null : _co.details.name) == "Joist";

          _ck(_v, 52, 0, currVal_30);

          var currVal_31 = (_co.details == null ? null : _co.details.name) == "Circumference";

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

      function View_CarpentryDetailsPage_Host_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](0, 0, null, null, 1, "app-carpentry-details", [], [[2, "first-slide-active", null], [2, "last-slide-active", null], [2, "is-shell", null]], null, null, View_CarpentryDetailsPage_0, RenderType_CarpentryDetailsPage)), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](1, 4308992, null, 0, _carpentry_details_page__WEBPACK_IMPORTED_MODULE_13__["CarpentryDetailsPage"], [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["Router"]], null, null)], function (_ck, _v) {
          _ck(_v, 1, 0);
        }, function (_ck, _v) {
          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 1).isFirstSlide;

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 1).isLastSlide;

          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 1).isShell;

          _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2);
        });
      }

      var CarpentryDetailsPageNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵccf"]("app-carpentry-details", _carpentry_details_page__WEBPACK_IMPORTED_MODULE_13__["CarpentryDetailsPage"], View_CarpentryDetailsPage_Host_0, {}, {}, []);
      /***/

    },

    /***/
    "n0lg":
    /*!*************************************************************************!*\
      !*** ./src/app/carpentry/details/carpentry-details.module.ngfactory.js ***!
      \*************************************************************************/

    /*! exports provided: CarpentryDetailsPageModuleNgFactory */

    /***/
    function n0lg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CarpentryDetailsPageModuleNgFactory", function () {
        return CarpentryDetailsPageModuleNgFactory;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _carpentry_details_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./carpentry-details.module */
      "YuxA");
      /* harmony import */


      var _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../node_modules/@angular/router/router.ngfactory */
      "pMnS");
      /* harmony import */


      var _carpentry_details_page_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./carpentry-details.page.ngfactory */
      "fVff");
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


      var _carpentry_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../carpentry.service */
      "xBcy");
      /* harmony import */


      var _carpentry_details_resolver__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./carpentry-details.resolver */
      "Khd1");
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


      var _carpentry_details_page__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./carpentry-details.page */
      "PQIa");
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var CarpentryDetailsPageModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_carpentry_details_module__WEBPACK_IMPORTED_MODULE_1__["CarpentryDetailsPageModule"], [], function (_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_router_router_lNgFactory"], _carpentry_details_page_ngfactory__WEBPACK_IMPORTED_MODULE_3__["CarpentryDetailsPageNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AngularDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AngularDelegate"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"], [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AngularDelegate"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["PopoverController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["PopoverController"], [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AngularDelegate"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_n"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_n"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpXsrfTokenExtractor"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_common_http_http_g"], [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_common_http_http_e"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_common_http_http_h"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_common_http_http_h"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpXsrfTokenExtractor"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_common_http_http_f"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HTTP_INTERCEPTORS"], function (p0_0) {
          return [p0_0];
        }, [_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_common_http_http_h"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_common_http_http_d"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_common_http_http_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["XhrFactory"], null, [_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_common_http_http_d"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpXhrBackend"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpXhrBackend"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["XhrFactory"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpBackend"], null, [_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpXhrBackend"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpHandler"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["ɵHttpInterceptingHandler"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpBackend"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpHandler"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"], function (p0_0) {
          return [_shell_shell_module__WEBPACK_IMPORTED_MODULE_8__["ɵ0"](p0_0)];
        }, [_shell_config_app_shell_config__WEBPACK_IMPORTED_MODULE_9__["AppShellConfig"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _carpentry_service__WEBPACK_IMPORTED_MODULE_10__["CarpentryService"], _carpentry_service__WEBPACK_IMPORTED_MODULE_10__["CarpentryService"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _carpentry_details_resolver__WEBPACK_IMPORTED_MODULE_11__["CarpentryDetailsResolver"], _carpentry_details_resolver__WEBPACK_IMPORTED_MODULE_11__["CarpentryDetailsResolver"], [_carpentry_service__WEBPACK_IMPORTED_MODULE_10__["CarpentryService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_d"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientXsrfModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientXsrfModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _shell_shell_module__WEBPACK_IMPORTED_MODULE_8__["ShellModule"], _shell_shell_module__WEBPACK_IMPORTED_MODULE_8__["ShellModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _components_components_module__WEBPACK_IMPORTED_MODULE_13__["ComponentsModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_13__["ComponentsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, angular_pipes__WEBPACK_IMPORTED_MODULE_14__["NgFloorPipeModule"], angular_pipes__WEBPACK_IMPORTED_MODULE_14__["NgFloorPipeModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_15__["PipesModule"], _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_15__["PipesModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _carpentry_details_module__WEBPACK_IMPORTED_MODULE_1__["CarpentryDetailsPageModule"], _carpentry_details_module__WEBPACK_IMPORTED_MODULE_1__["CarpentryDetailsPageModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_common_http_http_e"], "XSRF-TOKEN", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_common_http_http_f"], "X-XSRF-TOKEN", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_12__["ROUTES"], function () {
          return [[{
            path: "",
            component: _carpentry_details_page__WEBPACK_IMPORTED_MODULE_16__["CarpentryDetailsPage"],
            resolve: {
              data: _carpentry_details_module__WEBPACK_IMPORTED_MODULE_1__["ɵ0"]
            }
          }]];
        }, [])]);
      });
      /***/

    },

    /***/
    "tWvq":
    /*!**************************************************************************************!*\
      !*** ./src/app/carpentry/details/styles/carpentry-details.page.scss.shim.ngstyle.js ***!
      \**************************************************************************************/

    /*! exports provided: styles */

    /***/
    function tWvq(module, __webpack_exports__, __webpack_require__) {
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


      var styles = ["@charset \"UTF-8\";\n[_nghost-%COMP%] {\n  --page-margin: var(--app-fair-margin);\n  --page-background: var(--app-background);\n  --page-tags-vertical-gutter: calc(var(--page-margin) / 4);\n  --page-tags-horizontal-gutter: calc(var(--page-margin) / 2);\n  --page-users-pictures-gutter: calc(var(--page-margin) / 4);\n  --page-dish-score-height: 6px;\n  --page-rating-5-color: #7ce198;\n  --page-rating-4-color: #a8e07c;\n  --page-rating-3-color: #cee07c;\n  --page-rating-2-color: #e0c77c;\n  --page-rating-1-color: #e07c7c;\n  --page-color: #ebbb00;\n  --page-color-rgb: 235,187,0;\n}\n.carpentry-details-content[_ngcontent-%COMP%] {\n  --background: var(--page-background);\n}\n.carpentry-details-content[_ngcontent-%COMP%]   .details-scores[_ngcontent-%COMP%]   .score-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.carpentry-details-content[_ngcontent-%COMP%]   .details-scores[_ngcontent-%COMP%]   .score-item[_ngcontent-%COMP%]   .score-icon[_ngcontent-%COMP%] {\n  color: var(--ion-color-medium-tint);\n  font-size: 24px;\n}\n.carpentry-details-content[_ngcontent-%COMP%]   .details-scores[_ngcontent-%COMP%]   .score-item[_ngcontent-%COMP%]   .score-value[_ngcontent-%COMP%] {\n  color: var(--ion-color-medium-tint);\n  font-size: 14px;\n  margin-left: 4px;\n}\n.carpentry-details-content[_ngcontent-%COMP%]   .image-row[_ngcontent-%COMP%] {\n  --ion-grid-column-padding: 0px;\n}\n.carpentry-details-content[_ngcontent-%COMP%]   .image-row[_ngcontent-%COMP%]   .icon-wrapper[_ngcontent-%COMP%] {\n  margin: 0px 15%;\n  display: flex;\n  height: 100%;\n  justify-content: center;\n  align-items: center;\n}\n.carpentry-details-content[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%] {\n  --ion-grid-column-padding: 0px;\n  padding: var(--page-margin);\n  padding-bottom: calc(var(--page-margin) * 2);\n}\n.carpentry-details-content[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%]   .details-name[_ngcontent-%COMP%] {\n  margin: 0px;\n  font-size: 18px;\n}\n.carpentry-details-content[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%]   .details-style[_ngcontent-%COMP%] {\n  margin-top: 5px;\n  margin-bottom: var(--page-margin);\n  font-size: 16px;\n  color: var(--ion-color-dark-tint);\n}\n.carpentry-details-content[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%]   .details-price-range[_ngcontent-%COMP%] {\n  font-size: 16px;\n  letter-spacing: 1px;\n  font-weight: 500;\n  text-align: right;\n}\n.carpentry-details-content[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%]   .details-price-range[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%] {\n  color: var(--page-color);\n}\n.carpentry-details-content[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%]   .details-price-range[_ngcontent-%COMP%]   .no-price[_ngcontent-%COMP%] {\n  color: rgba(var(--ion-color-light-shade-rgb), 0.5);\n}\n.carpentry-details-content[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%]   .restaurant-scores[_ngcontent-%COMP%]   .restaurant-score[_ngcontent-%COMP%] {\n  justify-content: center;\n}\n.carpentry-details-content[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%]   .restaurant-scores[_ngcontent-%COMP%]   .restaurant-score[_ngcontent-%COMP%]:not(:first-child) {\n  padding-left: calc(var(--page-margin) / 2);\n}\n.carpentry-details-content[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%]   .restaurant-scores[_ngcontent-%COMP%]   .restaurant-score[_ngcontent-%COMP%]:not(:last-child) {\n  padding-right: calc(var(--page-margin) / 2);\n  border-right: 1px solid var(--ion-color-light-shade);\n}\n.carpentry-details-content[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%]   .restaurant-scores[_ngcontent-%COMP%]   .restaurant-score.reviews-count[_ngcontent-%COMP%] {\n  flex: 0 1 15%;\n  justify-content: flex-end;\n}\n.carpentry-details-content[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%]   .restaurant-scores[_ngcontent-%COMP%]   .restaurant-rating[_ngcontent-%COMP%] {\n  color: var(--ion-color-lightest);\n  border-radius: var(--app-narrow-radius);\n  padding: calc(var(--page-margin) / 4) calc(var(--page-margin) / 2);\n  font-size: 12px;\n  font-weight: 600;\n  text-align: center;\n  min-width: 30px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: var(--ion-color-medium-tint);\n}\n.carpentry-details-content[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%]   .restaurant-scores[_ngcontent-%COMP%]   .restaurant-rating[ratingBase=\"1\"][_ngcontent-%COMP%] {\n  background-color: var(--page-rating-1-color);\n}\n.carpentry-details-content[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%]   .restaurant-scores[_ngcontent-%COMP%]   .restaurant-rating[ratingBase=\"2\"][_ngcontent-%COMP%] {\n  background-color: var(--page-rating-2-color);\n}\n.carpentry-details-content[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%]   .restaurant-scores[_ngcontent-%COMP%]   .restaurant-rating[ratingBase=\"3\"][_ngcontent-%COMP%] {\n  background-color: var(--page-rating-3-color);\n}\n.carpentry-details-content[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%]   .restaurant-scores[_ngcontent-%COMP%]   .restaurant-rating[ratingBase=\"4\"][_ngcontent-%COMP%] {\n  background-color: var(--page-rating-4-color);\n}\n.carpentry-details-content[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%]   .restaurant-scores[_ngcontent-%COMP%]   .restaurant-rating[ratingBase=\"5\"][_ngcontent-%COMP%] {\n  background-color: var(--page-rating-5-color);\n}\n.carpentry-details-content[_ngcontent-%COMP%]   .detail-title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 500;\n  color: var(--ion-color-dark-tint);\n  margin: 0px;\n  margin-bottom: var(--page-margin);\n}\n.carpentry-details-content[_ngcontent-%COMP%]   .open-hours-wrapper[_ngcontent-%COMP%] {\n  padding: 0px var(--page-margin) var(--page-margin);\n}\n.carpentry-details-content[_ngcontent-%COMP%]   .open-hours-wrapper[_ngcontent-%COMP%]   .schedules-list[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0px;\n  padding: 0px;\n}\n.carpentry-details-content[_ngcontent-%COMP%]   .open-hours-wrapper[_ngcontent-%COMP%]   .schedules-list[_ngcontent-%COMP%]   .open-hour-item[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--ion-color-medium-tint);\n}\n.carpentry-details-content[_ngcontent-%COMP%]   .open-hours-wrapper[_ngcontent-%COMP%]   .schedules-list[_ngcontent-%COMP%]   .open-hour-item[_ngcontent-%COMP%]    + .open-hour-item[_ngcontent-%COMP%] {\n  margin-top: calc(var(--page-margin) / 2);\n}\n.carpentry-details-content[_ngcontent-%COMP%]   .open-hours-wrapper[_ngcontent-%COMP%]   .schedules-list[_ngcontent-%COMP%]   .open-hour-item[_ngcontent-%COMP%]   .schedule-outer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 75%;\n}\n.carpentry-details-content[_ngcontent-%COMP%]   .open-hours-wrapper[_ngcontent-%COMP%]   .schedules-list[_ngcontent-%COMP%]   .open-hour-item[_ngcontent-%COMP%]   .schedule-outer[_ngcontent-%COMP%]   .schedule-day[_ngcontent-%COMP%] {\n  display: block;\n  padding-right: var(--page-margin);\n  width: 40%;\n  font-size: 14px;\n}\n.carpentry-details-content[_ngcontent-%COMP%]   .open-hours-wrapper[_ngcontent-%COMP%]   .schedules-list[_ngcontent-%COMP%]   .open-hour-item[_ngcontent-%COMP%]   .schedule-outer[_ngcontent-%COMP%]   .schedule-hours[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n}\n.carpentry-details-content[_ngcontent-%COMP%]   .open-hours-wrapper[_ngcontent-%COMP%]   .schedules-list[_ngcontent-%COMP%]   .open-hour-item[_ngcontent-%COMP%]   .schedule-outer[_ngcontent-%COMP%]   .schedule-hours[_ngcontent-%COMP%]   .schedule-separator[_ngcontent-%COMP%] {\n  margin: 0px var(--page-margin);\n  line-height: 1;\n}\n.carpentry-details-content[_ngcontent-%COMP%]   .open-hours-wrapper[_ngcontent-%COMP%]   .schedules-list[_ngcontent-%COMP%]   .open-hour-item[_ngcontent-%COMP%]   .schedule-outer[_ngcontent-%COMP%]   .schedule-hours[_ngcontent-%COMP%]   .schedule-value[_ngcontent-%COMP%] {\n  flex: 0 1 25%;\n  font-weight: 500;\n}\n.carpentry-details-content[_ngcontent-%COMP%]   .open-hours-wrapper[_ngcontent-%COMP%]   .schedules-list[_ngcontent-%COMP%]   .open-hour-item[_ngcontent-%COMP%]   .schedule-outer[_ngcontent-%COMP%]   .schedule-hours[_ngcontent-%COMP%]   .schedule-value[_ngcontent-%COMP%]:first-child {\n  text-align: start;\n}\n.carpentry-details-content[_ngcontent-%COMP%]   .open-hours-wrapper[_ngcontent-%COMP%]   .schedules-list[_ngcontent-%COMP%]   .open-hour-item[_ngcontent-%COMP%]   .schedule-outer[_ngcontent-%COMP%]   .schedule-hours[_ngcontent-%COMP%]   .schedule-value[_ngcontent-%COMP%]:last-child {\n  text-align: end;\n}\n.carpentry-details-content[_ngcontent-%COMP%]   .open-hours-wrapper[_ngcontent-%COMP%]   .schedules-list[_ngcontent-%COMP%]   .open-hour-item[_ngcontent-%COMP%]   .schedule-outer[_ngcontent-%COMP%]   .schedule-hours[_ngcontent-%COMP%]   .schedule-closed[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  font-size: 12px;\n}\n.carpentry-details-content[_ngcontent-%COMP%]   .location-wrapper[_ngcontent-%COMP%] {\n  padding: 0px 0px var(--page-margin);\n}\n.carpentry-details-content[_ngcontent-%COMP%]   .location-wrapper[_ngcontent-%COMP%]   .location-header[_ngcontent-%COMP%] {\n  padding: 0px var(--page-margin) 0px;\n  margin-bottom: calc(var(--page-margin) / 2);\n}\n.carpentry-details-content[_ngcontent-%COMP%]   .location-wrapper[_ngcontent-%COMP%]   .detail-title[_ngcontent-%COMP%] {\n  margin-bottom: 5px;\n}\n.carpentry-details-content[_ngcontent-%COMP%]   .location-wrapper[_ngcontent-%COMP%]   .location-address[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 14px;\n  color: var(--ion-color-medium-tint);\n}\n.carpentry-details-content[_ngcontent-%COMP%]   .details-tags[_ngcontent-%COMP%] {\n  --ion-grid-column-padding: 0px;\n  padding: 0px var(--page-margin) var(--page-margin);\n  justify-content: center;\n  margin-top: calc(var(--page-tags-vertical-gutter) * 2 * -1);\n}\n.carpentry-details-content[_ngcontent-%COMP%]   .details-tags[_ngcontent-%COMP%]   .tag-wrapper[_ngcontent-%COMP%] {\n  padding: calc(var(--page-tags-vertical-gutter) * 2) var(--page-tags-horizontal-gutter) 0px 0px;\n  flex-grow: 0;\n  min-width: -webkit-fit-content;\n  min-width: -moz-fit-content;\n  min-width: fit-content;\n}\n.carpentry-details-content[_ngcontent-%COMP%]   .details-tags[_ngcontent-%COMP%]   .tag-wrapper[_ngcontent-%COMP%]:last-child {\n  padding-right: 0px;\n}\n.carpentry-details-content[_ngcontent-%COMP%]   .details-tags[_ngcontent-%COMP%]   .item-tag[_ngcontent-%COMP%] {\n  display: block;\n  border-radius: var(--app-narrow-radius);\n  border: 1px solid var(--ion-color-medium-tint);\n  padding: var(--page-tags-vertical-gutter) var(--page-tags-horizontal-gutter);\n  font-size: 14px;\n  color: var(--ion-color-medium-tint);\n}\n.carpentry-details-content[_ngcontent-%COMP%]   .details-divider[_ngcontent-%COMP%] {\n  margin: 0px var(--page-margin) calc(var(--page-margin) * 2);\n  border-top: 2px solid rgba(var(--ion-color-light-shade-rgb), 0.4);\n}\n.carpentry-details-content[_ngcontent-%COMP%]   .users-pictures-wrapper[_ngcontent-%COMP%] {\n  padding: 0px var(--page-margin) var(--page-margin);\n}\n.carpentry-details-content[_ngcontent-%COMP%]   .users-pictures-wrapper[_ngcontent-%COMP%]   .pictures-row[_ngcontent-%COMP%] {\n  --ion-grid-columns: 10;\n  --ion-grid-column-padding: 0px;\n  margin: 0px calc(var(--page-users-pictures-gutter) * -1);\n}\n.carpentry-details-content[_ngcontent-%COMP%]   .users-pictures-wrapper[_ngcontent-%COMP%]   .pictures-row[_ngcontent-%COMP%]   .picture-wrapper[_ngcontent-%COMP%] {\n  padding: 0px var(--page-users-pictures-gutter);\n}\n.carpentry-details-content[_ngcontent-%COMP%]   .users-pictures-wrapper[_ngcontent-%COMP%]   .pictures-row[_ngcontent-%COMP%]   .picture-wrapper[_ngcontent-%COMP%]   .has-more-pictures[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0px;\n  bottom: 0px;\n  left: 0px;\n  right: 0px;\n  margin: 0px var(--page-users-pictures-gutter);\n  background-color: rgba(var(--page-color-rgb), 0.7);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-decoration: none;\n  z-index: 2;\n}\n.carpentry-details-content[_ngcontent-%COMP%]   .users-pictures-wrapper[_ngcontent-%COMP%]   .pictures-row[_ngcontent-%COMP%]   .picture-wrapper[_ngcontent-%COMP%]   .has-more-pictures[_ngcontent-%COMP%]   .pictures-count[_ngcontent-%COMP%] {\n  font-size: 22px;\n  color: var(--ion-color-lightest);\n  font-weight: 600;\n}\n.carpentry-details-content[_ngcontent-%COMP%]   .users-pictures-wrapper[_ngcontent-%COMP%]   .pictures-row[_ngcontent-%COMP%]   .picture-wrapper[_ngcontent-%COMP%]   .has-more-pictures[_ngcontent-%COMP%]   .pictures-count[_ngcontent-%COMP%]::before {\n  content: \"+\";\n  font-size: 26px;\n  color: var(--ion-color-lightest);\n  font-weight: 600;\n}\n.carpentry-details-content[_ngcontent-%COMP%]   .users-pictures-wrapper[_ngcontent-%COMP%]   .upload-picture-btn[_ngcontent-%COMP%] {\n  margin: calc(var(--page-margin) / 2) 0px 0px;\n}\n.carpentry-details-content[_ngcontent-%COMP%]   .popular-dishes-wrapper[_ngcontent-%COMP%] {\n  padding: 0px var(--page-margin) var(--page-margin);\n}\n.carpentry-details-content[_ngcontent-%COMP%]   .popular-dishes-wrapper[_ngcontent-%COMP%]   .popular-dish[_ngcontent-%COMP%] {\n  --ion-grid-column-padding: 0px;\n}\n.carpentry-details-content[_ngcontent-%COMP%]   .popular-dishes-wrapper[_ngcontent-%COMP%]   .popular-dish[_ngcontent-%COMP%]:not(:last-child) {\n  padding-bottom: var(--page-margin);\n}\n.carpentry-details-content[_ngcontent-%COMP%]   .popular-dishes-wrapper[_ngcontent-%COMP%]   .popular-dish[_ngcontent-%COMP%]   .dish-name[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 5px;\n  font-size: 14px;\n  color: var(--ion-color-medium-tint);\n}\n.carpentry-details-content[_ngcontent-%COMP%]   .popular-dishes-wrapper[_ngcontent-%COMP%]   .popular-dish[_ngcontent-%COMP%]   .dish-score[_ngcontent-%COMP%] {\n  --buffer-background: rgba(var(--page-color-rgb), .20);\n  --progress-background: rgba(var(--page-color-rgb), 1);\n  height: var(--page-dish-score-height);\n  border-radius: calc(var(--page-dish-score-height) / 2);\n}\n.carpentry-details-content[_ngcontent-%COMP%]   .popular-dishes-wrapper[_ngcontent-%COMP%]   .popular-dish[_ngcontent-%COMP%]   .dish-votes-count[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  justify-content: flex-end;\n}\n.carpentry-details-content[_ngcontent-%COMP%]   .popular-dishes-wrapper[_ngcontent-%COMP%]   .popular-dish[_ngcontent-%COMP%]   .dish-votes-count[_ngcontent-%COMP%]   .dish-votes-icon[_ngcontent-%COMP%] {\n  color: var(--ion-color-medium-tint);\n}\n.carpentry-details-content[_ngcontent-%COMP%]   .popular-dishes-wrapper[_ngcontent-%COMP%]   .popular-dish[_ngcontent-%COMP%]   .dish-votes-count[_ngcontent-%COMP%]   .dish-votes-value[_ngcontent-%COMP%] {\n  color: var(--ion-color-medium-tint);\n  font-size: 14px;\n  margin-right: 4px;\n}\n.carpentry-details-content[_ngcontent-%COMP%]   .reviews-wrapper[_ngcontent-%COMP%] {\n  padding: 0px var(--page-margin) var(--page-margin);\n}\n.carpentry-details-content[_ngcontent-%COMP%]   .reviews-wrapper[_ngcontent-%COMP%]   .reviews-list[_ngcontent-%COMP%] {\n  margin-bottom: calc(var(--page-margin) / 2);\n}\n.carpentry-details-content[_ngcontent-%COMP%]   .reviews-wrapper[_ngcontent-%COMP%]   .reviews-list[_ngcontent-%COMP%]   .review-item[_ngcontent-%COMP%]:not(:last-child) {\n  padding-bottom: var(--page-margin);\n}\n.carpentry-details-content[_ngcontent-%COMP%]   .reviews-wrapper[_ngcontent-%COMP%]   .reviews-list[_ngcontent-%COMP%]   .review-item[_ngcontent-%COMP%]:not(:last-child)::after {\n  content: \"\";\n  display: block;\n  margin: 5px var(--page-margin);\n  border-top: 2px solid rgba(var(--ion-color-light-shade-rgb), 0.4);\n}\n.carpentry-details-content[_ngcontent-%COMP%]   .reviews-wrapper[_ngcontent-%COMP%]   .reviews-list[_ngcontent-%COMP%]   .review-item[_ngcontent-%COMP%]   .review-user[_ngcontent-%COMP%] {\n  --ion-grid-columns: 10;\n  --ion-grid-column-padding: 0px;\n}\n.carpentry-details-content[_ngcontent-%COMP%]   .reviews-wrapper[_ngcontent-%COMP%]   .reviews-list[_ngcontent-%COMP%]   .review-item[_ngcontent-%COMP%]   .review-user[_ngcontent-%COMP%]   .user-image-wrapper[_ngcontent-%COMP%] {\n  padding-right: calc(var(--page-margin) / 2);\n}\n.carpentry-details-content[_ngcontent-%COMP%]   .reviews-wrapper[_ngcontent-%COMP%]   .reviews-list[_ngcontent-%COMP%]   .review-item[_ngcontent-%COMP%]   .review-user[_ngcontent-%COMP%]   .user-brief-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  padding-right: calc(var(--page-margin) / 2);\n}\n.carpentry-details-content[_ngcontent-%COMP%]   .reviews-wrapper[_ngcontent-%COMP%]   .reviews-list[_ngcontent-%COMP%]   .review-item[_ngcontent-%COMP%]   .review-user[_ngcontent-%COMP%]   .user-brief-wrapper[_ngcontent-%COMP%]   .review-user-name[_ngcontent-%COMP%] {\n  font-size: 16px;\n  margin: 0px;\n  font-weight: 400;\n}\n.carpentry-details-content[_ngcontent-%COMP%]   .reviews-wrapper[_ngcontent-%COMP%]   .reviews-list[_ngcontent-%COMP%]   .review-item[_ngcontent-%COMP%]   .review-user[_ngcontent-%COMP%]   .user-brief-wrapper[_ngcontent-%COMP%]   .user-scores[_ngcontent-%COMP%]   .user-score[_ngcontent-%COMP%]   .score-title[_ngcontent-%COMP%] {\n  color: var(--ion-color-medium-tint);\n  font-size: 12px;\n  margin-left: 4px;\n}\n.carpentry-details-content[_ngcontent-%COMP%]   .reviews-wrapper[_ngcontent-%COMP%]   .reviews-list[_ngcontent-%COMP%]   .review-item[_ngcontent-%COMP%]   .review-user[_ngcontent-%COMP%]   .review-info-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: flex-end;\n  min-width: 20%;\n  min-width: -webkit-fit-content;\n  min-width: -moz-fit-content;\n  min-width: fit-content;\n  flex-grow: 0;\n}\n.carpentry-details-content[_ngcontent-%COMP%]   .reviews-wrapper[_ngcontent-%COMP%]   .reviews-list[_ngcontent-%COMP%]   .review-item[_ngcontent-%COMP%]   .review-user[_ngcontent-%COMP%]   .review-info-wrapper[_ngcontent-%COMP%]   .review-date[_ngcontent-%COMP%] {\n  color: var(--ion-color-medium-tint);\n  font-size: 11px;\n  display: block;\n  width: 100%;\n  text-align: right;\n}\n.carpentry-details-content[_ngcontent-%COMP%]   .reviews-wrapper[_ngcontent-%COMP%]   .reviews-list[_ngcontent-%COMP%]   .review-item[_ngcontent-%COMP%]   .review-user[_ngcontent-%COMP%]   .review-info-wrapper[_ngcontent-%COMP%]   .review-rating[_ngcontent-%COMP%] {\n  width: 36px;\n  color: var(--ion-color-lightest);\n  border-radius: var(--app-narrow-radius);\n  padding: calc(var(--page-margin) / 4) calc(var(--page-margin) / 2);\n  font-size: 12px;\n  font-weight: 600;\n  display: block;\n  text-align: center;\n  background-color: var(--ion-color-medium-tint);\n}\n.carpentry-details-content[_ngcontent-%COMP%]   .reviews-wrapper[_ngcontent-%COMP%]   .reviews-list[_ngcontent-%COMP%]   .review-item[_ngcontent-%COMP%]   .review-user[_ngcontent-%COMP%]   .review-info-wrapper[_ngcontent-%COMP%]   .review-rating[ratingBase=\"1\"][_ngcontent-%COMP%] {\n  background-color: var(--page-rating-1-color);\n}\n.carpentry-details-content[_ngcontent-%COMP%]   .reviews-wrapper[_ngcontent-%COMP%]   .reviews-list[_ngcontent-%COMP%]   .review-item[_ngcontent-%COMP%]   .review-user[_ngcontent-%COMP%]   .review-info-wrapper[_ngcontent-%COMP%]   .review-rating[ratingBase=\"2\"][_ngcontent-%COMP%] {\n  background-color: var(--page-rating-2-color);\n}\n.carpentry-details-content[_ngcontent-%COMP%]   .reviews-wrapper[_ngcontent-%COMP%]   .reviews-list[_ngcontent-%COMP%]   .review-item[_ngcontent-%COMP%]   .review-user[_ngcontent-%COMP%]   .review-info-wrapper[_ngcontent-%COMP%]   .review-rating[ratingBase=\"3\"][_ngcontent-%COMP%] {\n  background-color: var(--page-rating-3-color);\n}\n.carpentry-details-content[_ngcontent-%COMP%]   .reviews-wrapper[_ngcontent-%COMP%]   .reviews-list[_ngcontent-%COMP%]   .review-item[_ngcontent-%COMP%]   .review-user[_ngcontent-%COMP%]   .review-info-wrapper[_ngcontent-%COMP%]   .review-rating[ratingBase=\"4\"][_ngcontent-%COMP%] {\n  background-color: var(--page-rating-4-color);\n}\n.carpentry-details-content[_ngcontent-%COMP%]   .reviews-wrapper[_ngcontent-%COMP%]   .reviews-list[_ngcontent-%COMP%]   .review-item[_ngcontent-%COMP%]   .review-user[_ngcontent-%COMP%]   .review-info-wrapper[_ngcontent-%COMP%]   .review-rating[ratingBase=\"5\"][_ngcontent-%COMP%] {\n  background-color: var(--page-rating-5-color);\n}\n.carpentry-details-content[_ngcontent-%COMP%]   .reviews-wrapper[_ngcontent-%COMP%]   .reviews-list[_ngcontent-%COMP%]   .review-item[_ngcontent-%COMP%]   .review-message[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 300;\n  line-height: 18px;\n  margin: var(--page-margin) 0px;\n}\n.carpentry-details-content[_ngcontent-%COMP%]   .reviews-wrapper[_ngcontent-%COMP%]   .reviews-list[_ngcontent-%COMP%]   .review-item[_ngcontent-%COMP%]   .review-scores[_ngcontent-%COMP%] {\n  padding: 0px var(--page-margin) var(--page-margin);\n  justify-content: space-between;\n}\n.carpentry-details-content[_ngcontent-%COMP%]   .reviews-wrapper[_ngcontent-%COMP%]   .reviews-list[_ngcontent-%COMP%]   .review-item[_ngcontent-%COMP%]   .review-scores[_ngcontent-%COMP%]   .review-score[_ngcontent-%COMP%] {\n  justify-content: center;\n}\n.carpentry-details-content[_ngcontent-%COMP%]   .reviews-wrapper[_ngcontent-%COMP%]   .reviews-list[_ngcontent-%COMP%]   .review-item[_ngcontent-%COMP%]   .review-scores[_ngcontent-%COMP%]   .review-score[_ngcontent-%COMP%]:not(:first-child) {\n  padding-left: calc(var(--page-margin) / 2);\n}\n.carpentry-details-content[_ngcontent-%COMP%]   .reviews-wrapper[_ngcontent-%COMP%]   .reviews-list[_ngcontent-%COMP%]   .review-item[_ngcontent-%COMP%]   .review-scores[_ngcontent-%COMP%]   .review-score[_ngcontent-%COMP%]:not(:last-child) {\n  padding-right: calc(var(--page-margin) / 2);\n  border-right: 1px solid var(--ion-color-light-shade);\n}\n.carpentry-details-content[_ngcontent-%COMP%]   .reviews-wrapper[_ngcontent-%COMP%]   .details-divider[_ngcontent-%COMP%] {\n  margin: 5px 0px;\n}\n.carpentry-details-content[_ngcontent-%COMP%]   .reviews-wrapper[_ngcontent-%COMP%]   .all-reviews-btn[_ngcontent-%COMP%] {\n  margin: 5px 0px;\n}\n.carpentry-details-content[_ngcontent-%COMP%]   .reviews-wrapper[_ngcontent-%COMP%]   .write-reviews-btn[_ngcontent-%COMP%] {\n  margin: var(--page-margin) 0px 0px;\n}\n.carpentry-details-content[_ngcontent-%COMP%]   .recipes-wrapper[_ngcontent-%COMP%] {\n  padding: calc(var(--page-margin) * 3) 0px;\n}\n.carpentry-details-content[_ngcontent-%COMP%]   .recipes-wrapper[_ngcontent-%COMP%]   .recipes-header[_ngcontent-%COMP%] {\n  padding: 0px var(--page-margin) 0px;\n}\n.carpentry-details-content[_ngcontent-%COMP%]   .recipes-wrapper[_ngcontent-%COMP%]   .recipes-header[_ngcontent-%COMP%]   .detail-title[_ngcontent-%COMP%] {\n  text-transform: capitalize;\n}\n.carpentry-details-content[_ngcontent-%COMP%]   .recipes-wrapper[_ngcontent-%COMP%]   .recipes-list[_ngcontent-%COMP%]   .recipe-item[_ngcontent-%COMP%]   .chef-picture-wrapper[_ngcontent-%COMP%] {\n  width: 20%;\n  margin: 0px auto;\n  margin-top: -10%;\n  margin-bottom: calc(var(--page-margin) / 2);\n}\n.carpentry-details-content[_ngcontent-%COMP%]   .recipes-wrapper[_ngcontent-%COMP%]   .recipes-list[_ngcontent-%COMP%]   .recipe-item[_ngcontent-%COMP%]   .details-divider[_ngcontent-%COMP%] {\n  margin-bottom: 0px;\n}\n.carpentry-details-content[_ngcontent-%COMP%]   .recipes-wrapper[_ngcontent-%COMP%]   .recipes-list[_ngcontent-%COMP%]   .recipe-item[_ngcontent-%COMP%]   .recipe-title[_ngcontent-%COMP%] {\n  text-align: center;\n  margin: 0px 0px calc(var(--page-margin) / 2);\n  font-weight: 400;\n  letter-spacing: 3px;\n  font-size: 18px;\n}\n.carpentry-details-content[_ngcontent-%COMP%]   .recipes-wrapper[_ngcontent-%COMP%]   .recipes-list[_ngcontent-%COMP%]   .recipe-item[_ngcontent-%COMP%]   .recipe-title[_ngcontent-%COMP%]::before, .carpentry-details-content[_ngcontent-%COMP%]   .recipes-wrapper[_ngcontent-%COMP%]   .recipes-list[_ngcontent-%COMP%]   .recipe-item[_ngcontent-%COMP%]   .recipe-title[_ngcontent-%COMP%]::after {\n  content: \"\xB7\";\n  color: var(--ion-color-dark-tint);\n  margin: 0px 2px;\n}\n.carpentry-details-content[_ngcontent-%COMP%]   .recipes-wrapper[_ngcontent-%COMP%]   .recipes-list[_ngcontent-%COMP%]   .recipe-item[_ngcontent-%COMP%]   .recipe-call-to-action[_ngcontent-%COMP%] {\n  text-align: center;\n  margin: var(--page-margin) calc(var(--page-margin) * 2);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.carpentry-details-content[_ngcontent-%COMP%]   .recipes-wrapper[_ngcontent-%COMP%]   .recipes-list[_ngcontent-%COMP%]   .recipe-item[_ngcontent-%COMP%]   .recipe-call-to-action[_ngcontent-%COMP%]   .recipe-author[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 16px;\n  min-width: 30%;\n  color: var(--ion-color-dark-tint);\n}\n.carpentry-details-content[_ngcontent-%COMP%]   .recipes-wrapper[_ngcontent-%COMP%]   .recipes-list[_ngcontent-%COMP%]   .recipe-item[_ngcontent-%COMP%]   .recipe-call-to-action[_ngcontent-%COMP%]   .recipe-name[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  font-weight: 300;\n  letter-spacing: 1px;\n  margin: calc(var(--page-margin) / 2) 0px;\n  min-width: 90%;\n}\n.carpentry-details-content[_ngcontent-%COMP%]   .recipes-wrapper[_ngcontent-%COMP%]   .recipes-list[_ngcontent-%COMP%]   .recipe-item[_ngcontent-%COMP%]   .recipe-call-to-action[_ngcontent-%COMP%]   .recipe-chef[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 14px;\n  min-width: 60%;\n  color: var(--ion-color-dark-tint);\n}\n.carpentry-details-content[_ngcontent-%COMP%]   .recipes-wrapper[_ngcontent-%COMP%]   .recipes-list[_ngcontent-%COMP%]   .recipe-item[_ngcontent-%COMP%]   .recipe-attributes[_ngcontent-%COMP%] {\n  padding: 0px var(--page-margin);\n  margin-top: var(--page-margin);\n  justify-content: center;\n}\n.carpentry-details-content[_ngcontent-%COMP%]   .recipes-wrapper[_ngcontent-%COMP%]   .recipes-list[_ngcontent-%COMP%]   .recipe-item[_ngcontent-%COMP%]   .recipe-attributes[_ngcontent-%COMP%]   .attribute-score[_ngcontent-%COMP%] {\n  justify-content: center;\n}\n.carpentry-details-content[_ngcontent-%COMP%]   .recipes-wrapper[_ngcontent-%COMP%]   .recipes-list[_ngcontent-%COMP%]   .recipe-item[_ngcontent-%COMP%]   .recipe-attributes[_ngcontent-%COMP%]   .attribute-score[_ngcontent-%COMP%]:not(:first-child) {\n  padding-left: calc(var(--page-margin) / 2);\n}\n.carpentry-details-content[_ngcontent-%COMP%]   .recipes-wrapper[_ngcontent-%COMP%]   .recipes-list[_ngcontent-%COMP%]   .recipe-item[_ngcontent-%COMP%]   .recipe-attributes[_ngcontent-%COMP%]   .attribute-score[_ngcontent-%COMP%]:not(:last-child) {\n  padding-right: calc(var(--page-margin) / 2);\n}\n.carpentry-details-content[_ngcontent-%COMP%]   .recipes-wrapper[_ngcontent-%COMP%]   .recipes-list[_ngcontent-%COMP%]   .recipe-item[_ngcontent-%COMP%]   .recipe-attributes[_ngcontent-%COMP%]   .attribute-score[_ngcontent-%COMP%]   .score-value[_ngcontent-%COMP%] {\n  text-transform: capitalize;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FycGVudHJ5L2RldGFpbHMvc3R5bGVzL2NhcnBlbnRyeS1kZXRhaWxzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFFaEI7RUFDRSxxQ0FBQTtFQUNBLHdDQUFBO0VBRUEseURBQUE7RUFDQSwyREFBQTtFQUNBLDBEQUFBO0VBQ0EsNkJBQUE7RUFFQSw4QkFBQTtFQUNBLDhCQUFBO0VBQ0EsOEJBQUE7RUFDQSw4QkFBQTtFQUNBLDhCQUFBO0VBRUEscUJBQUE7RUFDQSwyQkFBQTtBQUhGO0FBT0E7RUFDRSxvQ0FBQTtBQUpGO0FBT0k7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUFMTjtBQU9NO0VBQ0UsbUNBQUE7RUFDQSxlQUFBO0FBTFI7QUFRTTtFQUNFLG1DQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBTlI7QUFXRTtFQUNFLDhCQUFBO0FBVEo7QUFXSTtFQUNFLGVBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFUTjtBQWFFO0VBQ0UsOEJBQUE7RUFFQSwyQkFBQTtFQUNBLDRDQUFBO0FBWko7QUFjSTtFQUNFLFdBQUE7RUFDQSxlQUFBO0FBWk47QUFlSTtFQUNFLGVBQUE7RUFDQSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxpQ0FBQTtBQWJOO0FBZ0JJO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQWROO0FBZ0JNO0VBQ0Usd0JBQUE7QUFkUjtBQWlCTTtFQUNFLGtEQUFBO0FBZlI7QUFvQk07RUFDRSx1QkFBQTtBQWxCUjtBQW9CUTtFQUNFLDBDQUFBO0FBbEJWO0FBcUJRO0VBQ0UsMkNBQUE7RUFDQSxvREFBQTtBQW5CVjtBQXNCUTtFQUNFLGFBQUE7RUFDQSx5QkFBQTtBQXBCVjtBQXdCTTtFQUNGLGdDQUFBO0VBQ0EsdUNBQUE7RUFDQSxrRUFBQTtFQUNDLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0csZUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBRUEsOENBQUE7QUF2QlI7QUF5Qkk7RUFDQyw0Q0FBQTtBQXZCTDtBQXlCSTtFQUNDLDRDQUFBO0FBdkJMO0FBeUJJO0VBQ0MsNENBQUE7QUF2Qkw7QUF5Qkk7RUFDQyw0Q0FBQTtBQXZCTDtBQXlCSTtFQUNDLDRDQUFBO0FBdkJMO0FBNkJFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUNBQUE7RUFDQSxXQUFBO0VBQ0EsaUNBQUE7QUEzQko7QUE4QkU7RUFDRSxrREFBQTtBQTVCSjtBQThCSTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUE1Qk47QUE4Qk07RUFDRSxlQUFBO0VBQ0EsbUNBQUE7QUE1QlI7QUE4QlE7RUFDRSx3Q0FBQTtBQTVCVjtBQStCUTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsVUFBQTtBQTdCVjtBQStCVTtFQUNFLGNBQUE7RUFDQSxpQ0FBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0FBN0JaO0FBZ0NVO0VBQ0UsT0FBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0FBOUJaO0FBZ0NZO0VBQ0UsOEJBQUE7RUFDQSxjQUFBO0FBOUJkO0FBaUNZO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0FBL0JkO0FBaUNjO0VBQ0UsaUJBQUE7QUEvQmhCO0FBaUNjO0VBQ0UsZUFBQTtBQS9CaEI7QUFtQ1k7RUFDRSx5QkFBQTtFQUNBLGVBQUE7QUFqQ2Q7QUF5Q0U7RUFDRSxtQ0FBQTtBQXZDSjtBQXlDSTtFQUNFLG1DQUFBO0VBQ0EsMkNBQUE7QUF2Q047QUEwQ0k7RUFDRSxrQkFBQTtBQXhDTjtBQTJDSTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsbUNBQUE7QUF6Q047QUE2Q0U7RUFDRSw4QkFBQTtFQUVBLGtEQUFBO0VBQ0EsdUJBQUE7RUFDQSwyREFBQTtBQTVDSjtBQThDSTtFQUNFLDhGQUFBO0VBQ0EsWUFBQTtFQUNBLDhCQUFBO0VBQUEsMkJBQUE7RUFBQSxzQkFBQTtBQTVDTjtBQThDTTtFQUNFLGtCQUFBO0FBNUNSO0FBZ0RJO0VBQ0UsY0FBQTtFQUNBLHVDQUFBO0VBQ0EsOENBQUE7RUFDQSw0RUFBQTtFQUNBLGVBQUE7RUFDQSxtQ0FBQTtBQTlDTjtBQWtERTtFQUNFLDJEQUFBO0VBQ0EsaUVBQUE7QUFoREo7QUFtREU7RUFDRSxrREFBQTtBQWpESjtBQW1ESTtFQUNFLHNCQUFBO0VBQ0EsOEJBQUE7RUFFQSx3REFBQTtBQWxETjtBQW9ETTtFQUNFLDhDQUFBO0FBbERSO0FBb0RRO0VBQ0Ysa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0ksNkNBQUE7RUFDSixrREFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0kscUJBQUE7RUFDQSxVQUFBO0FBbERWO0FBb0RNO0VBQ0MsZUFBQTtFQUNBLGdDQUFBO0VBQ0EsZ0JBQUE7QUFsRFA7QUFvRE87RUFDQyxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdDQUFBO0VBQ0EsZ0JBQUE7QUFsRFI7QUF5REk7RUFDRSw0Q0FBQTtBQXZETjtBQTJERTtFQUNFLGtEQUFBO0FBekRKO0FBMkRJO0VBQ0UsOEJBQUE7QUF6RE47QUEyRE07RUFDRSxrQ0FBQTtBQXpEUjtBQTRETTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxtQ0FBQTtBQTFEUjtBQTZETTtFQUNFLHFEQUFBO0VBQ0EscURBQUE7RUFFQSxxQ0FBQTtFQUNBLHNEQUFBO0FBNURSO0FBK0RNO0VBQ0UsYUFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7QUE3RFI7QUErRFE7RUFDRSxtQ0FBQTtBQTdEVjtBQWdFUTtFQUNFLG1DQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBOURWO0FBb0VFO0VBQ0Usa0RBQUE7QUFsRUo7QUFvRUk7RUFDRSwyQ0FBQTtBQWxFTjtBQXFFUTtFQUNFLGtDQUFBO0FBbkVWO0FBcUVVO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSw4QkFBQTtFQUNBLGlFQUFBO0FBbkVaO0FBdUVRO0VBQ0Usc0JBQUE7RUFDQSw4QkFBQTtBQXJFVjtBQXVFVTtFQUNFLDJDQUFBO0FBckVaO0FBd0VVO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7RUFFQSwyQ0FBQTtBQXZFWjtBQXlFWTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUF2RWQ7QUE0RWdCO0VBQ0UsbUNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUExRWxCO0FBZ0ZVO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSw4QkFBQTtFQUFBLDJCQUFBO0VBQUEsc0JBQUE7RUFDQSxZQUFBO0FBOUVaO0FBZ0ZZO0VBQ0UsbUNBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQTlFZDtBQWlGWTtFQUNFLFdBQUE7RUFDQSxnQ0FBQTtFQUNKLHVDQUFBO0VBQ0Esa0VBQUE7RUFDQyxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFFRyw4Q0FBQTtBQWhGZDtBQWtGVTtFQUNDLDRDQUFBO0FBaEZYO0FBa0ZVO0VBQ0MsNENBQUE7QUFoRlg7QUFrRlU7RUFDQyw0Q0FBQTtBQWhGWDtBQWtGVTtFQUNDLDRDQUFBO0FBaEZYO0FBa0ZVO0VBQ0MsNENBQUE7QUFoRlg7QUFzRlE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLDhCQUFBO0FBcEZWO0FBdUZRO0VBQ0Usa0RBQUE7RUFDQSw4QkFBQTtBQXJGVjtBQXVGVTtFQUNFLHVCQUFBO0FBckZaO0FBdUZZO0VBQ0UsMENBQUE7QUFyRmQ7QUF3Rlk7RUFDRSwyQ0FBQTtFQUNBLG9EQUFBO0FBdEZkO0FBNkZJO0VBQ0UsZUFBQTtBQTNGTjtBQThGSTtFQUNFLGVBQUE7QUE1Rk47QUErRkk7RUFDRSxrQ0FBQTtBQTdGTjtBQWlHRTtFQUNFLHlDQUFBO0FBL0ZKO0FBaUdJO0VBQ0UsbUNBQUE7QUEvRk47QUFpR007RUFDRSwwQkFBQTtBQS9GUjtBQXFHUTtFQUNFLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMkNBQUE7QUFuR1Y7QUFzR1E7RUFDRSxrQkFBQTtBQXBHVjtBQXVHUTtFQUNFLGtCQUFBO0VBQ0EsNENBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQXJHVjtBQXVHVTtFQUVFLFlBQUE7RUFDQSxpQ0FBQTtFQUNBLGVBQUE7QUF0R1o7QUEwR1E7RUFDRSxrQkFBQTtFQUNBLHVEQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUF4R1Y7QUEwR1U7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxpQ0FBQTtBQXhHWjtBQTJHVTtFQUNFLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHdDQUFBO0VBQ0EsY0FBQTtBQXpHWjtBQTRHVTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGlDQUFBO0FBMUdaO0FBOEdRO0VBQ0UsK0JBQUE7RUFDQSw4QkFBQTtFQUNBLHVCQUFBO0FBNUdWO0FBOEdVO0VBQ0UsdUJBQUE7QUE1R1o7QUE4R1k7RUFDRSwwQ0FBQTtBQTVHZDtBQStHWTtFQUNFLDJDQUFBO0FBN0dkO0FBZ0hZO0VBQ0UsMEJBQUE7QUE5R2QiLCJmaWxlIjoic3JjL2FwcC9jYXJwZW50cnkvZGV0YWlscy9zdHlsZXMvY2FycGVudHJ5LWRldGFpbHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ3VzdG9tIHZhcmlhYmxlc1xuLy8gTm90ZTogIFRoZXNlIG9uZXMgd2VyZSBhZGRlZCBieSB1cyBhbmQgaGF2ZSBub3RoaW5nIHRvIGRvIHdpdGggSW9uaWMgQ1NTIEN1c3RvbSBQcm9wZXJ0aWVzXG46aG9zdCB7XG4gIC0tcGFnZS1tYXJnaW46IHZhcigtLWFwcC1mYWlyLW1hcmdpbik7XG4gIC0tcGFnZS1iYWNrZ3JvdW5kOiB2YXIoLS1hcHAtYmFja2dyb3VuZCk7XG5cbiAgLS1wYWdlLXRhZ3MtdmVydGljYWwtZ3V0dGVyOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDQpO1xuICAtLXBhZ2UtdGFncy1ob3Jpem9udGFsLWd1dHRlcjogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbiAgLS1wYWdlLXVzZXJzLXBpY3R1cmVzLWd1dHRlcjogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyA0KTtcbiAgLS1wYWdlLWRpc2gtc2NvcmUtaGVpZ2h0OiA2cHg7XG5cbiAgLS1wYWdlLXJhdGluZy01LWNvbG9yOiAjN2NlMTk4O1xuICAtLXBhZ2UtcmF0aW5nLTQtY29sb3I6ICNhOGUwN2M7XG4gIC0tcGFnZS1yYXRpbmctMy1jb2xvcjogI2NlZTA3YztcbiAgLS1wYWdlLXJhdGluZy0yLWNvbG9yOiAjZTBjNzdjO1xuICAtLXBhZ2UtcmF0aW5nLTEtY29sb3I6ICNlMDdjN2M7XG5cbiAgLS1wYWdlLWNvbG9yOiAjZWJiYjAwO1xuICAtLXBhZ2UtY29sb3ItcmdiOiAyMzUsMTg3LDA7XG59XG5cbi8vIE5vdGU6ICBBbGwgdGhlIENTUyB2YXJpYWJsZXMgZGVmaW5lZCBiZWxvdyBhcmUgb3ZlcnJpZGVzIG9mIElvbmljIGVsZW1lbnRzIENTUyBDdXN0b20gUHJvcGVydGllc1xuLmNhcnBlbnRyeS1kZXRhaWxzLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLXBhZ2UtYmFja2dyb3VuZCk7XG5cbiAgLmRldGFpbHMtc2NvcmVzIHtcbiAgICAuc2NvcmUtaXRlbSB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICAgLnNjb3JlLWljb24ge1xuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS10aW50KTtcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgfVxuXG4gICAgICAuc2NvcmUtdmFsdWUge1xuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS10aW50KTtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBtYXJnaW4tbGVmdDogNHB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5pbWFnZS1yb3cge1xuICAgIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcblxuICAgIC5pY29uLXdyYXBwZXIge1xuICAgICAgbWFyZ2luOiAwcHggMTUlO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB9XG4gIH1cblxuICAuZGVzY3JpcHRpb24tcm93IHtcbiAgICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiAwcHg7XG5cbiAgICBwYWRkaW5nOiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gICAgcGFkZGluZy1ib3R0b206IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pICogMik7XG5cbiAgICAuZGV0YWlscy1uYW1lIHtcbiAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgIH1cblxuICAgIC5kZXRhaWxzLXN0eWxlIHtcbiAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyay10aW50KTtcbiAgICB9XG5cbiAgICAuZGV0YWlscy1wcmljZS1yYW5nZSB7XG4gICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuXG4gICAgICAucHJpY2Uge1xuICAgICAgICBjb2xvcjogdmFyKC0tcGFnZS1jb2xvcik7XG4gICAgICB9XG5cbiAgICAgIC5uby1wcmljZSB7XG4gICAgICAgIGNvbG9yOiByZ2JhKHZhcigtLWlvbi1jb2xvci1saWdodC1zaGFkZS1yZ2IpLCAuNTApO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5yZXN0YXVyYW50LXNjb3JlcyB7XG4gICAgICAucmVzdGF1cmFudC1zY29yZSB7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gICAgICAgICY6bm90KDpmaXJzdC1jaGlsZCkge1xuICAgICAgICAgIHBhZGRpbmctbGVmdDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbiAgICAgICAgfVxuXG4gICAgICAgICY6bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgICAgICAgcGFkZGluZy1yaWdodDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbiAgICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbGlnaHQtc2hhZGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgJi5yZXZpZXdzLWNvdW50IHtcbiAgICAgICAgICBmbGV4OiAwIDEgMTUlO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLnJlc3RhdXJhbnQtcmF0aW5nIHtcblx0XHRcdFx0Y29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XG5cdFx0XHRcdGJvcmRlci1yYWRpdXM6IHZhcigtLWFwcC1uYXJyb3ctcmFkaXVzKTtcblx0XHRcdFx0cGFkZGluZzogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyA0KSBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuXHRcdFx0ICBmb250LXNpemU6IDEycHg7XG5cdFx0XHQgIGZvbnQtd2VpZ2h0OiA2MDA7XG5cdFx0XHQgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgbWluLXdpZHRoOiAzMHB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgLy8gRGVmYXVsdCBjb2xvclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXRpbnQpO1xuXG5cdFx0XHRcdCZbcmF0aW5nQmFzZT1cIjFcIl0ge1xuXHRcdFx0XHRcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBhZ2UtcmF0aW5nLTEtY29sb3IpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdCZbcmF0aW5nQmFzZT1cIjJcIl0ge1xuXHRcdFx0XHRcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBhZ2UtcmF0aW5nLTItY29sb3IpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdCZbcmF0aW5nQmFzZT1cIjNcIl0ge1xuXHRcdFx0XHRcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBhZ2UtcmF0aW5nLTMtY29sb3IpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdCZbcmF0aW5nQmFzZT1cIjRcIl0ge1xuXHRcdFx0XHRcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBhZ2UtcmF0aW5nLTQtY29sb3IpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdCZbcmF0aW5nQmFzZT1cIjVcIl0ge1xuXHRcdFx0XHRcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBhZ2UtcmF0aW5nLTUtY29sb3IpO1xuXHRcdFx0XHR9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmRldGFpbC10aXRsZSB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrLXRpbnQpO1xuICAgIG1hcmdpbjogMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgfVxuXG4gIC5vcGVuLWhvdXJzLXdyYXBwZXIge1xuICAgIHBhZGRpbmc6IDBweCB2YXIoLS1wYWdlLW1hcmdpbikgdmFyKC0tcGFnZS1tYXJnaW4pO1xuXG4gICAgLnNjaGVkdWxlcy1saXN0IHtcbiAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICBtYXJnaW46IDBweDtcbiAgICAgIHBhZGRpbmc6IDBweDtcblxuICAgICAgLm9wZW4taG91ci1pdGVtIHtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS10aW50KTtcblxuICAgICAgICAmICsgLm9wZW4taG91ci1pdGVtIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuICAgICAgICB9XG5cbiAgICAgICAgLnNjaGVkdWxlLW91dGVyIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgIHdpZHRoOiA3NSU7XG5cbiAgICAgICAgICAuc2NoZWR1bGUtZGF5IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAgICAgICAgICAgd2lkdGg6IDQwJTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuc2NoZWR1bGUtaG91cnMge1xuICAgICAgICAgICAgZmxleDogMTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICAgICAgICAgLnNjaGVkdWxlLXNlcGFyYXRvciB7XG4gICAgICAgICAgICAgIG1hcmdpbjogMHB4IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5zY2hlZHVsZS12YWx1ZSB7XG4gICAgICAgICAgICAgIGZsZXg6IDAgMSAyNSU7XG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG5cbiAgICAgICAgICAgICAgJjpmaXJzdC1jaGlsZCB7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogc3RhcnQ7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBlbmQ7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnNjaGVkdWxlLWNsb3NlZCB7XG4gICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAubG9jYXRpb24td3JhcHBlciB7XG4gICAgcGFkZGluZzogMHB4IDBweCB2YXIoLS1wYWdlLW1hcmdpbik7XG5cbiAgICAubG9jYXRpb24taGVhZGVyIHtcbiAgICAgIHBhZGRpbmc6IDBweCB2YXIoLS1wYWdlLW1hcmdpbikgMHB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbiAgICB9XG5cbiAgICAuZGV0YWlsLXRpdGxlIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICB9XG5cbiAgICAubG9jYXRpb24tYWRkcmVzcyB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXRpbnQpO1xuICAgIH1cbiAgfVxuXG4gIC5kZXRhaWxzLXRhZ3Mge1xuICAgIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcblxuICAgIHBhZGRpbmc6IDBweCB2YXIoLS1wYWdlLW1hcmdpbikgdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IGNhbGModmFyKC0tcGFnZS10YWdzLXZlcnRpY2FsLWd1dHRlcikgKiAyICogLTEpO1xuXG4gICAgLnRhZy13cmFwcGVyIHtcbiAgICAgIHBhZGRpbmc6IGNhbGModmFyKC0tcGFnZS10YWdzLXZlcnRpY2FsLWd1dHRlcikgKiAyKSB2YXIoLS1wYWdlLXRhZ3MtaG9yaXpvbnRhbC1ndXR0ZXIpIDBweCAwcHg7XG4gICAgICBmbGV4LWdyb3c6IDA7XG4gICAgICBtaW4td2lkdGg6IGZpdC1jb250ZW50O1xuXG4gICAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwcHg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLml0ZW0tdGFnIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYXBwLW5hcnJvdy1yYWRpdXMpO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLW1lZGl1bS10aW50KTtcbiAgICAgIHBhZGRpbmc6IHZhcigtLXBhZ2UtdGFncy12ZXJ0aWNhbC1ndXR0ZXIpIHZhcigtLXBhZ2UtdGFncy1ob3Jpem9udGFsLWd1dHRlcik7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS10aW50KTtcbiAgICB9XG4gIH1cblxuICAuZGV0YWlscy1kaXZpZGVyIHtcbiAgICBtYXJnaW46IDBweCB2YXIoLS1wYWdlLW1hcmdpbikgY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgKiAyKTtcbiAgICBib3JkZXItdG9wOiAycHggc29saWQgcmdiYSh2YXIoLS1pb24tY29sb3ItbGlnaHQtc2hhZGUtcmdiKSwgLjQpO1xuICB9XG5cbiAgLnVzZXJzLXBpY3R1cmVzLXdyYXBwZXIge1xuICAgIHBhZGRpbmc6IDBweCB2YXIoLS1wYWdlLW1hcmdpbikgdmFyKC0tcGFnZS1tYXJnaW4pO1xuXG4gICAgLnBpY3R1cmVzLXJvdyB7XG4gICAgICAtLWlvbi1ncmlkLWNvbHVtbnM6IDEwO1xuICAgICAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMHB4O1xuXG4gICAgICBtYXJnaW46IDBweCBjYWxjKHZhcigtLXBhZ2UtdXNlcnMtcGljdHVyZXMtZ3V0dGVyKSAqIC0xKTtcblxuICAgICAgLnBpY3R1cmUtd3JhcHBlciB7XG4gICAgICAgIHBhZGRpbmc6IDBweCB2YXIoLS1wYWdlLXVzZXJzLXBpY3R1cmVzLWd1dHRlcik7XG5cbiAgICAgICAgLmhhcy1tb3JlLXBpY3R1cmVzIHtcbiAgXHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG4gIFx0XHRcdFx0dG9wOiAwcHg7XG4gIFx0XHRcdFx0Ym90dG9tOiAwcHg7XG4gIFx0XHRcdFx0bGVmdDogMHB4O1xuICBcdFx0XHRcdHJpZ2h0OiAwcHg7XG4gICAgICAgICAgbWFyZ2luOiAwcHggdmFyKC0tcGFnZS11c2Vycy1waWN0dXJlcy1ndXR0ZXIpO1xuICBcdFx0XHRcdGJhY2tncm91bmQtY29sb3I6IHJnYmEodmFyKC0tcGFnZS1jb2xvci1yZ2IpLCAuNzApO1xuICBcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG4gIFx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgXHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgei1pbmRleDogMjtcblxuICBcdFx0XHRcdC5waWN0dXJlcy1jb3VudCB7XG4gIFx0XHRcdFx0XHRmb250LXNpemU6IDIycHg7XG4gIFx0XHRcdFx0XHRjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcbiAgXHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA2MDA7XG5cbiAgXHRcdFx0XHRcdCY6OmJlZm9yZSB7XG4gIFx0XHRcdFx0XHRcdGNvbnRlbnQ6ICcrJztcbiAgXHRcdFx0XHRcdFx0Zm9udC1zaXplOiAyNnB4O1xuICBcdFx0XHRcdFx0XHRjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcbiAgXHRcdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDYwMDtcbiAgXHRcdFx0XHRcdH1cbiAgXHRcdFx0XHR9XG4gIFx0XHRcdH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAudXBsb2FkLXBpY3R1cmUtYnRuIHtcbiAgICAgIG1hcmdpbjogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKSAwcHggMHB4O1xuICAgIH1cbiAgfVxuXG4gIC5wb3B1bGFyLWRpc2hlcy13cmFwcGVyIHtcbiAgICBwYWRkaW5nOiAwcHggdmFyKC0tcGFnZS1tYXJnaW4pIHZhcigtLXBhZ2UtbWFyZ2luKTtcblxuICAgIC5wb3B1bGFyLWRpc2gge1xuICAgICAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMHB4O1xuXG4gICAgICAmOm5vdCg6bGFzdC1jaGlsZCkge1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAgICAgfVxuXG4gICAgICAuZGlzaC1uYW1lIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS10aW50KTtcbiAgICAgIH1cblxuICAgICAgLmRpc2gtc2NvcmUge1xuICAgICAgICAtLWJ1ZmZlci1iYWNrZ3JvdW5kOiByZ2JhKHZhcigtLXBhZ2UtY29sb3ItcmdiKSwgLjIwKTtcbiAgICAgICAgLS1wcm9ncmVzcy1iYWNrZ3JvdW5kOiByZ2JhKHZhcigtLXBhZ2UtY29sb3ItcmdiKSwgMSk7XG5cbiAgICAgICAgaGVpZ2h0OiB2YXIoLS1wYWdlLWRpc2gtc2NvcmUtaGVpZ2h0KTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogY2FsYyh2YXIoLS1wYWdlLWRpc2gtc2NvcmUtaGVpZ2h0KSAvIDIpO1xuICAgICAgfVxuXG4gICAgICAuZGlzaC12b3Rlcy1jb3VudCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcblxuICAgICAgICAuZGlzaC12b3Rlcy1pY29uIHtcbiAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS10aW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5kaXNoLXZvdGVzLXZhbHVlIHtcbiAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS10aW50KTtcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiA0cHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAucmV2aWV3cy13cmFwcGVyIHtcbiAgICBwYWRkaW5nOiAwcHggdmFyKC0tcGFnZS1tYXJnaW4pIHZhcigtLXBhZ2UtbWFyZ2luKTtcblxuICAgIC5yZXZpZXdzLWxpc3Qge1xuICAgICAgbWFyZ2luLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcblxuICAgICAgLnJldmlldy1pdGVtIHtcbiAgICAgICAgJjpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogdmFyKC0tcGFnZS1tYXJnaW4pO1xuXG4gICAgICAgICAgJjo6YWZ0ZXIge1xuICAgICAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIG1hcmdpbjogNXB4IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgICAgICAgICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCByZ2JhKHZhcigtLWlvbi1jb2xvci1saWdodC1zaGFkZS1yZ2IpLCAuNCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLnJldmlldy11c2VyIHtcbiAgICAgICAgICAtLWlvbi1ncmlkLWNvbHVtbnM6IDEwO1xuICAgICAgICAgIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcblxuICAgICAgICAgIC51c2VyLWltYWdlLXdyYXBwZXIge1xuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAudXNlci1icmllZi13cmFwcGVyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuXG4gICAgICAgICAgICAucmV2aWV3LXVzZXItbmFtZSB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC51c2VyLXNjb3JlcyB7XG4gICAgICAgICAgICAgIC51c2VyLXNjb3JlIHtcbiAgICAgICAgICAgICAgICAuc2NvcmUtdGl0bGUge1xuICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tdGludCk7XG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogNHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIC5yZXZpZXctaW5mby13cmFwcGVyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAgICAgICAgICAgbWluLXdpZHRoOiAyMCU7XG4gICAgICAgICAgICBtaW4td2lkdGg6IGZpdC1jb250ZW50O1xuICAgICAgICAgICAgZmxleC1ncm93OiAwO1xuXG4gICAgICAgICAgICAucmV2aWV3LWRhdGUge1xuICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS10aW50KTtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAucmV2aWV3LXJhdGluZyB7XG4gICAgICAgICAgICAgIHdpZHRoOiAzNnB4O1xuICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcbiAgICAgIFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogdmFyKC0tYXBwLW5hcnJvdy1yYWRpdXMpO1xuICAgICAgXHRcdFx0XHRwYWRkaW5nOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDQpIGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG4gICAgICBcdFx0XHQgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgIFx0XHRcdCAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIFx0XHRcdCAgZGlzcGxheTogYmxvY2s7XG4gICAgICBcdFx0XHQgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgLy8gRGVmYXVsdCBjb2xvclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXRpbnQpO1xuXG4gICAgICBcdFx0XHRcdCZbcmF0aW5nQmFzZT1cIjFcIl0ge1xuICAgICAgXHRcdFx0XHRcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBhZ2UtcmF0aW5nLTEtY29sb3IpO1xuICAgICAgXHRcdFx0XHR9XG4gICAgICBcdFx0XHRcdCZbcmF0aW5nQmFzZT1cIjJcIl0ge1xuICAgICAgXHRcdFx0XHRcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBhZ2UtcmF0aW5nLTItY29sb3IpO1xuICAgICAgXHRcdFx0XHR9XG4gICAgICBcdFx0XHRcdCZbcmF0aW5nQmFzZT1cIjNcIl0ge1xuICAgICAgXHRcdFx0XHRcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBhZ2UtcmF0aW5nLTMtY29sb3IpO1xuICAgICAgXHRcdFx0XHR9XG4gICAgICBcdFx0XHRcdCZbcmF0aW5nQmFzZT1cIjRcIl0ge1xuICAgICAgXHRcdFx0XHRcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBhZ2UtcmF0aW5nLTQtY29sb3IpO1xuICAgICAgXHRcdFx0XHR9XG4gICAgICBcdFx0XHRcdCZbcmF0aW5nQmFzZT1cIjVcIl0ge1xuICAgICAgXHRcdFx0XHRcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBhZ2UtcmF0aW5nLTUtY29sb3IpO1xuICAgICAgXHRcdFx0XHR9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLnJldmlldy1tZXNzYWdlIHtcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMThweDtcbiAgICAgICAgICBtYXJnaW46IHZhcigtLXBhZ2UtbWFyZ2luKSAwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAucmV2aWV3LXNjb3JlcyB7XG4gICAgICAgICAgcGFkZGluZzogMHB4IHZhcigtLXBhZ2UtbWFyZ2luKSB2YXIoLS1wYWdlLW1hcmdpbik7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG4gICAgICAgICAgLnJldmlldy1zY29yZSB7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgICAgICAgICAgJjpub3QoOmZpcnN0LWNoaWxkKSB7XG4gICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJjpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbiAgICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAuZGV0YWlscy1kaXZpZGVyIHtcbiAgICAgIG1hcmdpbjogNXB4IDBweDtcbiAgICB9XG5cbiAgICAuYWxsLXJldmlld3MtYnRuIHtcbiAgICAgIG1hcmdpbjogNXB4IDBweDtcbiAgICB9XG5cbiAgICAud3JpdGUtcmV2aWV3cy1idG4ge1xuICAgICAgbWFyZ2luOiB2YXIoLS1wYWdlLW1hcmdpbikgMHB4IDBweDtcbiAgICB9XG4gIH1cblxuICAucmVjaXBlcy13cmFwcGVyIHtcbiAgICBwYWRkaW5nOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAqIDMpIDBweDtcblxuICAgIC5yZWNpcGVzLWhlYWRlciB7XG4gICAgICBwYWRkaW5nOiAwcHggdmFyKC0tcGFnZS1tYXJnaW4pIDBweDtcblxuICAgICAgLmRldGFpbC10aXRsZSB7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5yZWNpcGVzLWxpc3Qge1xuICAgICAgLnJlY2lwZS1pdGVtIHtcbiAgICAgICAgLmNoZWYtcGljdHVyZS13cmFwcGVyIHtcbiAgICAgICAgICB3aWR0aDogMjAlO1xuICAgICAgICAgIG1hcmdpbjogMHB4IGF1dG87XG4gICAgICAgICAgbWFyZ2luLXRvcDogLTEwJTtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuICAgICAgICB9XG5cbiAgICAgICAgLmRldGFpbHMtZGl2aWRlciB7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLnJlY2lwZS10aXRsZSB7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIG1hcmdpbjogMHB4IDBweCBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDNweDtcbiAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG5cbiAgICAgICAgICAmOjpiZWZvcmUsXG4gICAgICAgICAgJjo6YWZ0ZXIge1xuICAgICAgICAgICAgY29udGVudDogJ8K3JztcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyay10aW50KTtcbiAgICAgICAgICAgIG1hcmdpbjogMHB4IDJweDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAucmVjaXBlLWNhbGwtdG8tYWN0aW9uIHtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgbWFyZ2luOiB2YXIoLS1wYWdlLW1hcmdpbikgY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgKiAyKTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICAgICAgIC5yZWNpcGUtYXV0aG9yIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgbWluLXdpZHRoOiAzMCU7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmstdGludCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnJlY2lwZS1uYW1lIHtcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgICAgICAgICAgIG1hcmdpbjogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKSAwcHg7XG4gICAgICAgICAgICBtaW4td2lkdGg6IDkwJTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAucmVjaXBlLWNoZWYge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICBtaW4td2lkdGg6IDYwJTtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyay10aW50KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAucmVjaXBlLWF0dHJpYnV0ZXMge1xuICAgICAgICAgIHBhZGRpbmc6IDBweCB2YXIoLS1wYWdlLW1hcmdpbik7XG4gICAgICAgICAgbWFyZ2luLXRvcDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gICAgICAgICAgLmF0dHJpYnV0ZS1zY29yZSB7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgICAgICAgICAgJjpub3QoOmZpcnN0LWNoaWxkKSB7XG4gICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJjpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnNjb3JlLXZhbHVlIHtcbiAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0= */"];
      /***/
    }
  }]);
})();
//# sourceMappingURL=carpentry-details-carpentry-details-module-ngfactory-es5.js.map