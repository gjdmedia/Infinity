(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sign-up-firebase-sign-up-module-ngfactory"], {
    /***/
    "A0kb":
    /*!*******************************************************************************!*\
      !*** ./src/app/components/show-hide-password/show-hide-password.component.ts ***!
      \*******************************************************************************/

    /*! exports provided: ShowHidePasswordComponent */

    /***/
    function A0kb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ShowHidePasswordComponent", function () {
        return ShowHidePasswordComponent;
      });
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @ionic/angular */
      "sZkV");

      var ShowHidePasswordComponent = /*#__PURE__*/function () {
        function ShowHidePasswordComponent() {
          _classCallCheck(this, ShowHidePasswordComponent);

          this.show = false;
        }

        _createClass(ShowHidePasswordComponent, [{
          key: "toggleShow",
          value: function toggleShow() {
            this.show = !this.show;

            if (this.show) {
              this.input.type = 'text';
            } else {
              this.input.type = 'password';
            }
          }
        }]);

        return ShowHidePasswordComponent;
      }();
      /***/

    },

    /***/
    "CxLU":
    /*!****************************************************************!*\
      !*** ./src/app/firebase/auth/sign-up/firebase-sign-up.page.ts ***!
      \****************************************************************/

    /*! exports provided: FirebaseSignUpPage */

    /***/
    function CxLU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FirebaseSignUpPage", function () {
        return FirebaseSignUpPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "sZkV");
      /* harmony import */


      var _validators_password_validator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../validators/password.validator */
      "sY96");
      /* harmony import */


      var _firebase_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../firebase-auth.service */
      "T7tK");

      var FirebaseSignUpPage = /*#__PURE__*/function () {
        function FirebaseSignUpPage(router, route, menu, authService, ngZone, loadingController, location) {
          var _this = this;

          _classCallCheck(this, FirebaseSignUpPage);

          this.router = router;
          this.route = route;
          this.menu = menu;
          this.authService = authService;
          this.ngZone = ngZone;
          this.loadingController = loadingController;
          this.location = location;
          this.validation_messages = {
            'email': [{
              type: 'required',
              message: 'Email is required.'
            }, {
              type: 'pattern',
              message: 'Enter a valid email.'
            }],
            'password': [{
              type: 'required',
              message: 'Password is required.'
            }, {
              type: 'minlength',
              message: 'Password must be at least 6 characters long.'
            }],
            'confirm_password': [{
              type: 'required',
              message: 'Confirm password is required'
            }],
            'matching_passwords': [{
              type: 'areNotEqual',
              message: 'Password mismatch'
            }]
          };
          this.matching_passwords_group = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            'password': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])),
            'confirm_password': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
          }, function (formGroup) {
            return _validators_password_validator__WEBPACK_IMPORTED_MODULE_6__["PasswordValidator"].areNotEqual(formGroup);
          });
          this.signupForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            'email': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])),
            'matching_passwords': this.matching_passwords_group
          }); // Get firebase authentication redirect result invoken when using signInWithRedirect()
          // signInWithRedirect() is only used when client is in web but not desktop

          this.authRedirectResult = this.authService.getRedirectResult().subscribe(function (result) {
            if (result.user) {
              _this.redirectLoggedUserToProfilePage();
            } else if (result.error) {
              _this.manageAuthWithProvidersErrors(result.error);
            }
          }); // Check if url contains our custom 'auth-redirect' param, then show a loader while we receive the getRedirectResult notification

          this.route.queryParams.subscribe(function (params) {
            var authProvider = params['auth-redirect'];

            if (authProvider) {
              _this.presentLoading(authProvider);
            }
          });
        }

        _createClass(FirebaseSignUpPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.menu.enable(false);
          } // Once the auth provider finished the authentication flow, and the auth redirect completes,
          // hide the loader and redirect the user to the profile page

        }, {
          key: "redirectLoggedUserToProfilePage",
          value: function redirectLoggedUserToProfilePage() {
            var _this2 = this;

            this.dismissLoading(); // As we are calling the Angular router navigation inside a subscribe method, the navigation will be triggered outside Angular zone.
            // That's why we need to wrap the router navigation call inside an ngZone wrapper

            this.ngZone.run(function () {
              // Get previous URL from our custom History Helper
              // If there's no previous page, then redirect to profile
              // const previousUrl = this.historyHelper.previousUrl || 'firebase/auth/profile';
              var previousUrl = 'firebase/auth/profile'; // No need to store in the navigation history the sign-in page with redirect params (it's justa a mandatory mid-step)
              // Navigate to profile and replace current url with profile

              _this2.router.navigate([previousUrl], {
                replaceUrl: true
              });
            });
          }
        }, {
          key: "presentLoading",
          value: function presentLoading(authProvider) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var authProviderCapitalized;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      authProviderCapitalized = authProvider[0].toUpperCase() + authProvider.slice(1);
                      _context.next = 3;
                      return this.loadingController.create({
                        message: authProvider ? 'Signing up with ' + authProviderCapitalized : 'Signin up ...'
                      });

                    case 3:
                      this.redirectLoader = _context.sent;
                      _context.next = 6;
                      return this.redirectLoader.present();

                    case 6:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "dismissLoading",
          value: function dismissLoading() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      if (!this.redirectLoader) {
                        _context2.next = 3;
                        break;
                      }

                      _context2.next = 3;
                      return this.redirectLoader.dismiss();

                    case 3:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "resetSubmitError",
          value: function resetSubmitError() {
            this.submitError = null;
          } // Before invoking auth provider redirect flow, present a loading indicator and add a flag to the path.
          // The precense of the flag in the path indicates we should wait for the auth redirect to complete.

        }, {
          key: "prepareForAuthWithProvidersRedirection",
          value: function prepareForAuthWithProvidersRedirection(authProvider) {
            this.presentLoading(authProvider);
            this.location.go(this.location.path(), 'auth-redirect=' + authProvider, this.location.getState());
          }
        }, {
          key: "manageAuthWithProvidersErrors",
          value: function manageAuthWithProvidersErrors(errorMessage) {
            this.submitError = errorMessage; // remove auth-redirect param from url

            this.location.replaceState(this.router.url.split('?')[0], '');
            this.dismissLoading();
          }
        }, {
          key: "signUpWithEmail",
          value: function signUpWithEmail() {
            var _this3 = this;

            this.resetSubmitError();
            var values = this.signupForm.value;
            this.authService.signUpWithEmail(values.email, values.matching_passwords.password).then(function (user) {
              // navigate to user profile
              _this3.redirectLoggedUserToProfilePage();
            })["catch"](function (error) {
              _this3.submitError = error.message;
            });
          }
        }, {
          key: "doFacebookSignup",
          value: function doFacebookSignup() {
            var _this4 = this;

            this.resetSubmitError();
            this.prepareForAuthWithProvidersRedirection('facebook');
            this.authService.signInWithFacebook().subscribe(function (result) {
              // This gives you a Facebook Access Token. You can use it to access the Facebook API.
              // const token = result.credential.accessToken;
              _this4.redirectLoggedUserToProfilePage();
            }, function (error) {
              _this4.manageAuthWithProvidersErrors(error.message);
            });
          }
        }, {
          key: "doGoogleSignup",
          value: function doGoogleSignup() {
            var _this5 = this;

            this.resetSubmitError();
            this.prepareForAuthWithProvidersRedirection('google');
            this.authService.signInWithGoogle().subscribe(function (result) {
              // This gives you a Google Access Token. You can use it to access the Google API.
              // var token = result.credential.accessToken;
              _this5.redirectLoggedUserToProfilePage();
            }, function (error) {
              console.log(error);

              _this5.manageAuthWithProvidersErrors(error.message);
            });
          }
        }, {
          key: "doTwitterSignup",
          value: function doTwitterSignup() {
            var _this6 = this;

            this.resetSubmitError();
            this.prepareForAuthWithProvidersRedirection('twitter');
            this.authService.signInWithTwitter().subscribe(function (result) {
              // This gives you a Twitter Access Token. You can use it to access the Twitter API.
              // var token = result.credential.accessToken;
              _this6.redirectLoggedUserToProfilePage();
            }, function (error) {
              console.log(error);

              _this6.manageAuthWithProvidersErrors(error.message);
            });
          }
        }]);

        return FirebaseSignUpPage;
      }();
      /***/

    },

    /***/
    "IXa8":
    /*!*************************************************************************************************!*\
      !*** ./src/app/components/show-hide-password/show-hide-password.component.scss.shim.ngstyle.js ***!
      \*************************************************************************************************/

    /*! exports provided: styles */

    /***/
    function IXa8(module, __webpack_exports__, __webpack_require__) {
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


      var styles = ["[_nghost-%COMP%] {\n  display: flex;\n  width: 100%;\n  align-items: center;\n}\n[_nghost-%COMP%]   .type-toggle[_ngcontent-%COMP%] {\n  -webkit-padding-start: 0.5rem;\n          padding-inline-start: 0.5rem;\n}\n[_nghost-%COMP%]   .type-toggle[_ngcontent-%COMP%]   .show-option[_ngcontent-%COMP%], [_nghost-%COMP%]   .type-toggle[_ngcontent-%COMP%]   .hide-option[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  display: block;\n}\n[_nghost-%COMP%]   .type-toggle[_ngcontent-%COMP%]   .show-option[_ngcontent-%COMP%]:not(ion-icon), [_nghost-%COMP%]   .type-toggle[_ngcontent-%COMP%]   .hide-option[_ngcontent-%COMP%]:not(ion-icon) {\n  text-transform: uppercase;\n  font-size: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaG93LWhpZGUtcGFzc3dvcmQvc2hvdy1oaWRlLXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQUNGO0FBQ0U7RUFDRSw2QkFBQTtVQUFBLDRCQUFBO0FBQ0o7QUFDSTs7RUFFRSxpQkFBQTtFQUNBLGNBQUE7QUFDTjtBQUVNOztFQUNFLHlCQUFBO0VBQ0EsZUFBQTtBQUNSIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zaG93LWhpZGUtcGFzc3dvcmQvc2hvdy1oaWRlLXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAudHlwZS10b2dnbGUge1xuICAgIHBhZGRpbmctaW5saW5lLXN0YXJ0OiAwLjVyZW07XG5cbiAgICAuc2hvdy1vcHRpb24sXG4gICAgLmhpZGUtb3B0aW9uIHtcbiAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgICAgZGlzcGxheTogYmxvY2s7XG5cbiAgICAgIC8vIEluIGNhc2UgeW91IHdhbnQgdG8gdXNlIHRleHQgaW5zdGVhZCBvZiBpY29uc1xuICAgICAgJjpub3QoaW9uLWljb24pIHtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19 */"];
      /***/
    },

    /***/
    "RMgo":
    /*!******************************************************************!*\
      !*** ./src/app/firebase/auth/sign-up/firebase-sign-up.module.ts ***!
      \******************************************************************/

    /*! exports provided: FirebaseSignUpPageModule */

    /***/
    function RMgo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FirebaseSignUpPageModule", function () {
        return FirebaseSignUpPageModule;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _firebase_sign_up_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./firebase-sign-up.page */
      "CxLU");

      var routes = [{
        path: '',
        component: _firebase_sign_up_page__WEBPACK_IMPORTED_MODULE_1__["FirebaseSignUpPage"]
      }];

      var FirebaseSignUpPageModule = function FirebaseSignUpPageModule() {
        _classCallCheck(this, FirebaseSignUpPageModule);
      };
      /***/

    },

    /***/
    "TfOP":
    /*!**************************************************************************!*\
      !*** ./src/app/firebase/auth/sign-up/firebase-sign-up.page.ngfactory.js ***!
      \**************************************************************************/

    /*! exports provided: RenderType_FirebaseSignUpPage, View_FirebaseSignUpPage_0, View_FirebaseSignUpPage_Host_0, FirebaseSignUpPageNgFactory */

    /***/
    function TfOP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RenderType_FirebaseSignUpPage", function () {
        return RenderType_FirebaseSignUpPage;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_FirebaseSignUpPage_0", function () {
        return View_FirebaseSignUpPage_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_FirebaseSignUpPage_Host_0", function () {
        return View_FirebaseSignUpPage_Host_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FirebaseSignUpPageNgFactory", function () {
        return FirebaseSignUpPageNgFactory;
      });
      /* harmony import */


      var _styles_firebase_sign_up_page_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./styles/firebase-sign-up.page.scss.shim.ngstyle */
      "u3V1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../node_modules/@ionic/angular/ionic-angular.ngfactory */
      "MKJQ");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "sZkV");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _components_show_hide_password_show_hide_password_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../components/show-hide-password/show-hide-password.component.ngfactory */
      "lvGs");
      /* harmony import */


      var _components_show_hide_password_show_hide_password_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../components/show-hide-password/show-hide-password.component */
      "A0kb");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _firebase_sign_up_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./firebase-sign-up.page */
      "CxLU");
      /* harmony import */


      var _firebase_auth_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../firebase-auth.service */
      "T7tK");
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var styles_FirebaseSignUpPage = [_styles_firebase_sign_up_page_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

      var RenderType_FirebaseSignUpPage = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
        encapsulation: 0,
        styles: styles_FirebaseSignUpPage,
        data: {}
      });

      function View_FirebaseSignUpPage_2(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "div", [["class", "error-message"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "ion-icon", [["name", "information-circle-outline"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonIcon_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], {
          name: [0, "name"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](4, null, ["", ""]))], function (_ck, _v) {
          var currVal_0 = "information-circle-outline";

          _ck(_v, 2, 0, currVal_0);
        }, function (_ck, _v) {
          var currVal_1 = _v.parent.context.$implicit.message;

          _ck(_v, 4, 0, currVal_1);
        });
      }

      function View_FirebaseSignUpPage_1(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_FirebaseSignUpPage_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 0))], function (_ck, _v) {
          var _co = _v.component;

          var currVal_0 = _co.signupForm.get("email").hasError(_v.context.$implicit.type) && (_co.signupForm.get("email").dirty || _co.signupForm.get("email").touched);

          _ck(_v, 2, 0, currVal_0);
        }, null);
      }

      function View_FirebaseSignUpPage_4(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "div", [["class", "error-message"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "ion-icon", [["name", "information-circle-outline"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonIcon_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], {
          name: [0, "name"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](4, null, ["", ""]))], function (_ck, _v) {
          var currVal_0 = "information-circle-outline";

          _ck(_v, 2, 0, currVal_0);
        }, function (_ck, _v) {
          var currVal_1 = _v.parent.context.$implicit.message;

          _ck(_v, 4, 0, currVal_1);
        });
      }

      function View_FirebaseSignUpPage_3(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_FirebaseSignUpPage_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 0))], function (_ck, _v) {
          var _co = _v.component;

          var currVal_0 = _co.signupForm.get("matching_passwords").get("password").hasError(_v.context.$implicit.type) && (_co.signupForm.get("matching_passwords").get("password").dirty || _co.signupForm.get("matching_passwords").get("password").touched);

          _ck(_v, 2, 0, currVal_0);
        }, null);
      }

      function View_FirebaseSignUpPage_6(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "div", [["class", "error-message"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "ion-icon", [["name", "information-circle-outline"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonIcon_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], {
          name: [0, "name"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](4, null, ["", ""]))], function (_ck, _v) {
          var currVal_0 = "information-circle-outline";

          _ck(_v, 2, 0, currVal_0);
        }, function (_ck, _v) {
          var currVal_1 = _v.parent.context.$implicit.message;

          _ck(_v, 4, 0, currVal_1);
        });
      }

      function View_FirebaseSignUpPage_5(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_FirebaseSignUpPage_6)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 0))], function (_ck, _v) {
          var _co = _v.component;

          var currVal_0 = _co.signupForm.get("matching_passwords").get("confirm_password").hasError(_v.context.$implicit.type) && (_co.signupForm.get("matching_passwords").get("confirm_password").dirty || _co.signupForm.get("matching_passwords").get("confirm_password").touched);

          _ck(_v, 2, 0, currVal_0);
        }, null);
      }

      function View_FirebaseSignUpPage_8(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "div", [["class", "error-message"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "ion-icon", [["name", "information-circle-outline"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonIcon_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], {
          name: [0, "name"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](4, null, ["", ""]))], function (_ck, _v) {
          var currVal_0 = "information-circle-outline";

          _ck(_v, 2, 0, currVal_0);
        }, function (_ck, _v) {
          var currVal_1 = _v.parent.context.$implicit.message;

          _ck(_v, 4, 0, currVal_1);
        });
      }

      function View_FirebaseSignUpPage_7(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_FirebaseSignUpPage_8)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 0))], function (_ck, _v) {
          var _co = _v.component;

          var currVal_0 = _co.signupForm.get("matching_passwords").hasError(_v.context.$implicit.type) && (_co.signupForm.get("matching_passwords").get("confirm_password").dirty || _co.signupForm.get("matching_passwords").get("confirm_password").touched);

          _ck(_v, 2, 0, currVal_0);
        }, null);
      }

      function View_FirebaseSignUpPage_9(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 5, "div", [["class", "error-container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 4, "div", [["class", "error-message"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "ion-icon", [["name", "information-circle-outline"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonIcon_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], {
          name: [0, "name"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](5, null, ["", ""]))], function (_ck, _v) {
          var currVal_0 = "information-circle-outline";

          _ck(_v, 3, 0, currVal_0);
        }, function (_ck, _v) {
          var _co = _v.component;
          var currVal_1 = _co.submitError;

          _ck(_v, 5, 0, currVal_1);
        });
      }

      function View_FirebaseSignUpPage_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 8, "ion-header", [["class", "ion-no-border"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonHeader_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonHeader"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonHeader"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, 0, 6, "ion-toolbar", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonToolbar_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonToolbar"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonToolbar"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, 0, 4, "ion-buttons", [["slot", "start"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonButtons_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonButtons"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonButtons"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, 0, 2, "ion-back-button", [], null, [[null, "click"]], function (_v, en, $event) {
          var ad = true;

          if ("click" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).onClick($event) !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonBackButton_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonBackButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonBackButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 16384, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonBackButtonDelegate"], [[2, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonRouterOutlet"]], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Config"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 73, "ion-content", [["class", "signup-content"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonContent_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonContent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonContent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, 0, 1, "h2", [["class", "auth-title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, 0, 0, "img", [["alt", ""], ["src", "/assets/images/ig_logo_black.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, 0, 1, "h5", [["style", "text-align: center;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Please Register"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, 0, 66, "form", [["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngSubmit"], [null, "submit"], [null, "reset"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("submit" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 18).onSubmit($event) !== false;
            ad = pd_0 && ad;
          }

          if ("reset" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 18).onReset() !== false;
            ad = pd_1 && ad;
          }

          if ("ngSubmit" === en) {
            var pd_2 = _co.signUpWithEmail() !== false;
            ad = pd_2 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](17, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](18, 540672, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroupDirective"], [[8, null], [8, null]], {
          form: [0, "form"]
        }, {
          ngSubmit: "ngSubmit"
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ControlContainer"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroupDirective"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](20, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ControlContainer"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](21, 0, null, null, 50, "ion-list", [["class", "inputs-list"], ["lines", "full"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonList_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonList"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](22, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonList"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], {
          lines: [0, "lines"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](23, 0, null, 0, 8, "ion-item", [["class", "input-item"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonItem_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonItem"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](24, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonItem"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](25, 0, null, 0, 6, "ion-input", [["autocapitalize", "off"], ["clearInput", ""], ["formControlName", "email"], ["inputmode", "email"], ["placeholder", "Email"], ["type", "email"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ionBlur"], [null, "ionChange"]], function (_v, en, $event) {
          var ad = true;

          if ("ionBlur" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26)._handleBlurEvent($event.target) !== false;
            ad = pd_0 && ad;
          }

          if ("ionChange" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26)._handleInputEvent($event.target) !== false;
            ad = pd_1 && ad;
          }

          return ad;
        }, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonInput_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonInput"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](26, 16384, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["TextValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALUE_ACCESSOR"], function (p0_0) {
          return [p0_0];
        }, [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["TextValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](28, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControlName"], [[3, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_p"]]], {
          name: [0, "name"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControlName"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](30, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](31, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonInput"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], {
          autocapitalize: [0, "autocapitalize"],
          clearInput: [1, "clearInput"],
          inputmode: [2, "inputmode"],
          placeholder: [3, "placeholder"],
          type: [4, "type"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](32, 0, null, 0, 2, "div", [["class", "error-container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_FirebaseSignUpPage_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](34, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
          ngForOf: [0, "ngForOf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](35, 0, null, 0, 33, "div", [["formGroupName", "matching_passwords"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](36, 212992, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroupName"], [[3, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ControlContainer"]], [8, null], [8, null]], {
          name: [0, "name"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ControlContainer"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroupName"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](38, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ControlContainer"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](39, 0, null, null, 11, "ion-item", [["class", "input-item"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonItem_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonItem"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](40, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonItem"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](41, 0, null, 0, 9, "app-show-hide-password", [], null, null, null, _components_show_hide_password_show_hide_password_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["View_ShowHidePasswordComponent_0"], _components_show_hide_password_show_hide_password_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RenderType_ShowHidePasswordComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](42, 49152, null, 1, _components_show_hide_password_show_hide_password_component__WEBPACK_IMPORTED_MODULE_7__["ShowHidePasswordComponent"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 1, {
          input: 0
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](44, 0, null, 0, 6, "ion-input", [["formControlName", "password"], ["placeholder", "Password"], ["type", "password"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ionBlur"], [null, "ionChange"]], function (_v, en, $event) {
          var ad = true;

          if ("ionBlur" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 45)._handleBlurEvent($event.target) !== false;
            ad = pd_0 && ad;
          }

          if ("ionChange" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 45)._handleInputEvent($event.target) !== false;
            ad = pd_1 && ad;
          }

          return ad;
        }, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonInput_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonInput"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](45, 16384, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["TextValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALUE_ACCESSOR"], function (p0_0) {
          return [p0_0];
        }, [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["TextValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](47, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControlName"], [[3, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_p"]]], {
          name: [0, "name"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControlName"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](49, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](50, 49152, [[1, 4]], 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonInput"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], {
          placeholder: [0, "placeholder"],
          type: [1, "type"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](51, 0, null, null, 2, "div", [["class", "error-container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_FirebaseSignUpPage_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](53, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
          ngForOf: [0, "ngForOf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](54, 0, null, null, 11, "ion-item", [["class", "input-item"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonItem_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonItem"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](55, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonItem"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](56, 0, null, 0, 9, "app-show-hide-password", [], null, null, null, _components_show_hide_password_show_hide_password_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["View_ShowHidePasswordComponent_0"], _components_show_hide_password_show_hide_password_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RenderType_ShowHidePasswordComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](57, 49152, null, 1, _components_show_hide_password_show_hide_password_component__WEBPACK_IMPORTED_MODULE_7__["ShowHidePasswordComponent"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 2, {
          input: 0
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](59, 0, null, 0, 6, "ion-input", [["formControlName", "confirm_password"], ["placeholder", "Confirm Password"], ["type", "password"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ionBlur"], [null, "ionChange"]], function (_v, en, $event) {
          var ad = true;

          if ("ionBlur" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 60)._handleBlurEvent($event.target) !== false;
            ad = pd_0 && ad;
          }

          if ("ionChange" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 60)._handleInputEvent($event.target) !== false;
            ad = pd_1 && ad;
          }

          return ad;
        }, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonInput_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonInput"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](60, 16384, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["TextValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALUE_ACCESSOR"], function (p0_0) {
          return [p0_0];
        }, [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["TextValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](62, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControlName"], [[3, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_p"]]], {
          name: [0, "name"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControlName"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](64, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](65, 49152, [[2, 4]], 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonInput"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], {
          placeholder: [0, "placeholder"],
          type: [1, "type"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](66, 0, null, null, 2, "div", [["class", "error-container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_FirebaseSignUpPage_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](68, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
          ngForOf: [0, "ngForOf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](69, 0, null, 0, 2, "div", [["class", "error-container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_FirebaseSignUpPage_7)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](71, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
          ngForOf: [0, "ngForOf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](72, 0, null, null, 2, "ion-button", [["class", "signup-btn"], ["expand", "block"], ["type", "submit"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonButton_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](73, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], {
          disabled: [0, "disabled"],
          expand: [1, "expand"],
          type: [2, "type"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["Sign Up"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_FirebaseSignUpPage_9)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](76, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](77, 0, null, null, 5, "ion-button", [["class", "signup-btn"], ["expand", "block"], ["fill", "clear"]], null, [[null, "click"]], function (_v, en, $event) {
          var ad = true;

          if ("click" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 79).onClick() !== false;
            ad = pd_0 && ad;
          }

          if ("click" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 81).onClick($event) !== false;
            ad = pd_1 && ad;
          }

          return ad;
        }, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonButton_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](78, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], {
          expand: [0, "expand"],
          fill: [1, "fill"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](79, 16384, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterLink"], [_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], {
          routerLink: [0, "routerLink"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](80, 1), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](81, 737280, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["RouterLinkDelegate"], [_angular_common__WEBPACK_IMPORTED_MODULE_4__["LocationStrategy"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"], [2, _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterLink"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, [" Already have an account? "]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_7 = _co.signupForm;

          _ck(_v, 18, 0, currVal_7);

          var currVal_8 = "full";

          _ck(_v, 22, 0, currVal_8);

          var currVal_16 = "email";

          _ck(_v, 28, 0, currVal_16);

          var currVal_17 = "off";
          var currVal_18 = "";
          var currVal_19 = "email";
          var currVal_20 = "Email";
          var currVal_21 = "email";

          _ck(_v, 31, 0, currVal_17, currVal_18, currVal_19, currVal_20, currVal_21);

          var currVal_22 = _co.validation_messages.email;

          _ck(_v, 34, 0, currVal_22);

          var currVal_30 = "matching_passwords";

          _ck(_v, 36, 0, currVal_30);

          var currVal_38 = "password";

          _ck(_v, 47, 0, currVal_38);

          var currVal_39 = "Password";
          var currVal_40 = "password";

          _ck(_v, 50, 0, currVal_39, currVal_40);

          var currVal_41 = _co.validation_messages.password;

          _ck(_v, 53, 0, currVal_41);

          var currVal_49 = "confirm_password";

          _ck(_v, 62, 0, currVal_49);

          var currVal_50 = "Confirm Password";
          var currVal_51 = "password";

          _ck(_v, 65, 0, currVal_50, currVal_51);

          var currVal_52 = _co.validation_messages.confirm_password;

          _ck(_v, 68, 0, currVal_52);

          var currVal_53 = _co.validation_messages.matching_passwords;

          _ck(_v, 71, 0, currVal_53);

          var currVal_54 = !_co.signupForm.valid;
          var currVal_55 = "block";
          var currVal_56 = "submit";

          _ck(_v, 73, 0, currVal_54, currVal_55, currVal_56);

          var currVal_57 = _co.submitError;

          _ck(_v, 76, 0, currVal_57);

          var currVal_58 = "block";
          var currVal_59 = "clear";

          _ck(_v, 78, 0, currVal_58, currVal_59);

          var currVal_60 = _ck(_v, 80, 0, "/firebase/auth/sign-in");

          _ck(_v, 79, 0, currVal_60);

          _ck(_v, 81, 0);
        }, function (_ck, _v) {
          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 20).ngClassUntouched;

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 20).ngClassTouched;

          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 20).ngClassPristine;

          var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 20).ngClassDirty;

          var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 20).ngClassValid;

          var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 20).ngClassInvalid;

          var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 20).ngClassPending;

          _ck(_v, 16, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6);

          var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30).ngClassUntouched;

          var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30).ngClassTouched;

          var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30).ngClassPristine;

          var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30).ngClassDirty;

          var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30).ngClassValid;

          var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30).ngClassInvalid;

          var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30).ngClassPending;

          _ck(_v, 25, 0, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15);

          var currVal_23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38).ngClassUntouched;

          var currVal_24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38).ngClassTouched;

          var currVal_25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38).ngClassPristine;

          var currVal_26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38).ngClassDirty;

          var currVal_27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38).ngClassValid;

          var currVal_28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38).ngClassInvalid;

          var currVal_29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38).ngClassPending;

          _ck(_v, 35, 0, currVal_23, currVal_24, currVal_25, currVal_26, currVal_27, currVal_28, currVal_29);

          var currVal_31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 49).ngClassUntouched;

          var currVal_32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 49).ngClassTouched;

          var currVal_33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 49).ngClassPristine;

          var currVal_34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 49).ngClassDirty;

          var currVal_35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 49).ngClassValid;

          var currVal_36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 49).ngClassInvalid;

          var currVal_37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 49).ngClassPending;

          _ck(_v, 44, 0, currVal_31, currVal_32, currVal_33, currVal_34, currVal_35, currVal_36, currVal_37);

          var currVal_42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 64).ngClassUntouched;

          var currVal_43 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 64).ngClassTouched;

          var currVal_44 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 64).ngClassPristine;

          var currVal_45 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 64).ngClassDirty;

          var currVal_46 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 64).ngClassValid;

          var currVal_47 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 64).ngClassInvalid;

          var currVal_48 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 64).ngClassPending;

          _ck(_v, 59, 0, currVal_42, currVal_43, currVal_44, currVal_45, currVal_46, currVal_47, currVal_48);
        });
      }

      function View_FirebaseSignUpPage_Host_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-firebase-sign-up", [], null, null, null, View_FirebaseSignUpPage_0, RenderType_FirebaseSignUpPage)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _firebase_sign_up_page__WEBPACK_IMPORTED_MODULE_9__["FirebaseSignUpPage"], [_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"], _firebase_auth_service__WEBPACK_IMPORTED_MODULE_10__["FirebaseAuthService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]], null, null)], function (_ck, _v) {
          _ck(_v, 1, 0);
        }, null);
      }

      var FirebaseSignUpPageNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-firebase-sign-up", _firebase_sign_up_page__WEBPACK_IMPORTED_MODULE_9__["FirebaseSignUpPage"], View_FirebaseSignUpPage_Host_0, {}, {}, []);
      /***/

    },

    /***/
    "Y5ob":
    /*!****************************************************************************!*\
      !*** ./src/app/firebase/auth/sign-up/firebase-sign-up.module.ngfactory.js ***!
      \****************************************************************************/

    /*! exports provided: FirebaseSignUpPageModuleNgFactory */

    /***/
    function Y5ob(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FirebaseSignUpPageModuleNgFactory", function () {
        return FirebaseSignUpPageModuleNgFactory;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _firebase_sign_up_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./firebase-sign-up.module */
      "RMgo");
      /* harmony import */


      var _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../node_modules/@angular/router/router.ngfactory */
      "pMnS");
      /* harmony import */


      var _firebase_sign_up_page_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./firebase-sign-up.page.ngfactory */
      "TfOP");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      "sZkV");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common/http */
      "IheW");
      /* harmony import */


      var _shell_shell_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../shell/shell.module */
      "ZpN7");
      /* harmony import */


      var _shell_config_app_shell_config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../shell/config/app-shell.config */
      "Kt/9");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _components_components_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../../components/components.module */
      "j1ZV");
      /* harmony import */


      var _firebase_sign_up_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./firebase-sign-up.page */
      "CxLU");
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var FirebaseSignUpPageModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_firebase_sign_up_module__WEBPACK_IMPORTED_MODULE_1__["FirebaseSignUpPageModule"], [], function (_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_router_router_lNgFactory"], _firebase_sign_up_page_ngfactory__WEBPACK_IMPORTED_MODULE_3__["FirebaseSignUpPageNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_n"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_n"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AngularDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AngularDelegate"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"], [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AngularDelegate"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["PopoverController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["PopoverController"], [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AngularDelegate"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpXsrfTokenExtractor"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_common_http_http_g"], [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_common_http_http_e"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_common_http_http_h"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_common_http_http_h"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpXsrfTokenExtractor"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_common_http_http_f"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HTTP_INTERCEPTORS"], function (p0_0) {
          return [p0_0];
        }, [_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_common_http_http_h"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_common_http_http_d"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_common_http_http_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["XhrFactory"], null, [_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_common_http_http_d"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpXhrBackend"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpXhrBackend"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["XhrFactory"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpBackend"], null, [_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpXhrBackend"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpHandler"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["ɵHttpInterceptingHandler"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpBackend"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpHandler"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"], function (p0_0) {
          return [_shell_shell_module__WEBPACK_IMPORTED_MODULE_8__["ɵ0"](p0_0)];
        }, [_shell_config_app_shell_config__WEBPACK_IMPORTED_MODULE_9__["AppShellConfig"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_d"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientXsrfModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientXsrfModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _shell_shell_module__WEBPACK_IMPORTED_MODULE_8__["ShellModule"], _shell_shell_module__WEBPACK_IMPORTED_MODULE_8__["ShellModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _components_components_module__WEBPACK_IMPORTED_MODULE_11__["ComponentsModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_11__["ComponentsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _firebase_sign_up_module__WEBPACK_IMPORTED_MODULE_1__["FirebaseSignUpPageModule"], _firebase_sign_up_module__WEBPACK_IMPORTED_MODULE_1__["FirebaseSignUpPageModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_common_http_http_e"], "XSRF-TOKEN", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_common_http_http_f"], "X-XSRF-TOKEN", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_10__["ROUTES"], function () {
          return [[{
            path: "",
            component: _firebase_sign_up_page__WEBPACK_IMPORTED_MODULE_12__["FirebaseSignUpPage"]
          }]];
        }, [])]);
      });
      /***/

    },

    /***/
    "lvGs":
    /*!*****************************************************************************************!*\
      !*** ./src/app/components/show-hide-password/show-hide-password.component.ngfactory.js ***!
      \*****************************************************************************************/

    /*! exports provided: RenderType_ShowHidePasswordComponent, View_ShowHidePasswordComponent_0, View_ShowHidePasswordComponent_Host_0, ShowHidePasswordComponentNgFactory */

    /***/
    function lvGs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RenderType_ShowHidePasswordComponent", function () {
        return RenderType_ShowHidePasswordComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_ShowHidePasswordComponent_0", function () {
        return View_ShowHidePasswordComponent_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_ShowHidePasswordComponent_Host_0", function () {
        return View_ShowHidePasswordComponent_Host_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ShowHidePasswordComponentNgFactory", function () {
        return ShowHidePasswordComponentNgFactory;
      });
      /* harmony import */


      var _show_hide_password_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./show-hide-password.component.scss.shim.ngstyle */
      "IXa8");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../node_modules/@ionic/angular/ionic-angular.ngfactory */
      "MKJQ");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "sZkV");
      /* harmony import */


      var _show_hide_password_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./show-hide-password.component */
      "A0kb");
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var styles_ShowHidePasswordComponent = [_show_hide_password_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

      var RenderType_ShowHidePasswordComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
        encapsulation: 0,
        styles: styles_ShowHidePasswordComponent,
        data: {}
      });

      function View_ShowHidePasswordComponent_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵncd"](null, 0), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 4, "a", [["class", "type-toggle"]], null, [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.toggleShow() !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "ion-icon", [["class", "show-option"], ["name", "eye-off-outline"]], [[8, "hidden", 0]], null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonIcon_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], {
          name: [0, "name"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 1, "ion-icon", [["class", "hide-option"], ["name", "eye-outline"]], [[8, "hidden", 0]], null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonIcon_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], {
          name: [0, "name"]
        }, null)], function (_ck, _v) {
          var currVal_1 = "eye-off-outline";

          _ck(_v, 3, 0, currVal_1);

          var currVal_3 = "eye-outline";

          _ck(_v, 5, 0, currVal_3);
        }, function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.show;

          _ck(_v, 2, 0, currVal_0);

          var currVal_2 = !_co.show;

          _ck(_v, 4, 0, currVal_2);
        });
      }

      function View_ShowHidePasswordComponent_Host_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "app-show-hide-password", [], null, null, null, View_ShowHidePasswordComponent_0, RenderType_ShowHidePasswordComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 1, _show_hide_password_component__WEBPACK_IMPORTED_MODULE_4__["ShowHidePasswordComponent"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 1, {
          input: 0
        })], null, null);
      }

      var ShowHidePasswordComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-show-hide-password", _show_hide_password_component__WEBPACK_IMPORTED_MODULE_4__["ShowHidePasswordComponent"], View_ShowHidePasswordComponent_Host_0, {}, {}, ["*"]);
      /***/

    },

    /***/
    "u3V1":
    /*!*****************************************************************************************!*\
      !*** ./src/app/firebase/auth/sign-up/styles/firebase-sign-up.page.scss.shim.ngstyle.js ***!
      \*****************************************************************************************/

    /*! exports provided: styles */

    /***/
    function u3V1(module, __webpack_exports__, __webpack_require__) {
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


      var styles = ["[_nghost-%COMP%] {\n  --page-margin: var(--app-broad-margin);\n  --page-background: var(--app-background-shade);\n}\n\nion-toolbar[_ngcontent-%COMP%] {\n  --background: var(--page-background);\n}\n\n.signup-content[_ngcontent-%COMP%] {\n  --background: var(--page-background);\n  --padding-start: var(--page-margin);\n  --padding-end: var(--page-margin);\n  --padding-top: var(--page-margin);\n  --padding-bottom: var(--page-margin);\n}\n\n.signup-content[_ngcontent-%COMP%]   .auth-title[_ngcontent-%COMP%] {\n  color: var(--ion-color-dark);\n  font-weight: bold;\n  margin-top: calc(var(--page-margin) / 2);\n  margin-bottom: calc(var(--page-margin) * (3/2));\n  letter-spacing: 0.6px;\n}\n\n.signup-content[_ngcontent-%COMP%]   .inputs-list[_ngcontent-%COMP%] {\n  --ion-item-background: var(--page-background);\n}\n\n.signup-content[_ngcontent-%COMP%]   .inputs-list[_ngcontent-%COMP%]   .input-item[_ngcontent-%COMP%] {\n  --padding-start: 0px;\n  --padding-end: 0px;\n  --inner-padding-end: 0px;\n}\n\n.signup-content[_ngcontent-%COMP%]   .error-container[_ngcontent-%COMP%]   .error-message[_ngcontent-%COMP%] {\n  margin: calc(var(--page-margin) / 2) 0px;\n  display: flex;\n  align-items: center;\n  color: var(--ion-color-danger);\n  font-size: 14px;\n}\n\n.signup-content[_ngcontent-%COMP%]   .error-container[_ngcontent-%COMP%]   .error-message[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  -webkit-padding-end: calc(var(--page-margin) / 2);\n          padding-inline-end: calc(var(--page-margin) / 2);\n}\n\n.signup-content[_ngcontent-%COMP%]   .signup-btn[_ngcontent-%COMP%] {\n  margin: calc(var(--page-margin) / 2) 0px;\n}\n\n.signup-content[_ngcontent-%COMP%]   .other-auth-options-row[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n  align-items: center;\n}\n\n.signup-content[_ngcontent-%COMP%]   .other-auth-options-row[_ngcontent-%COMP%]   .login-btn[_ngcontent-%COMP%] {\n  --color: var(--ion-color-secondary);\n  margin: 0px;\n}\n\n.signup-content[_ngcontent-%COMP%]   .other-auth-options-row[_ngcontent-%COMP%]   .login-btn[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\n.signup-content[_ngcontent-%COMP%]   .social-auth-options[_ngcontent-%COMP%]   .options-divider[_ngcontent-%COMP%] {\n  color: var(--ion-color-medium);\n  margin: var(--page-margin) 0px;\n  text-align: center;\n}\n\n.signup-content[_ngcontent-%COMP%]   .social-auth-options[_ngcontent-%COMP%]   .social-auth-btn[_ngcontent-%COMP%] {\n  margin: 0px;\n}\n\n.signup-content[_ngcontent-%COMP%]   .social-auth-options[_ngcontent-%COMP%]   .social-auth-btn[_ngcontent-%COMP%]:not(:first-child) {\n  margin-top: var(--page-margin);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmlyZWJhc2UvYXV0aC9zaWduLXVwL3N0eWxlcy9maXJlYmFzZS1zaWduLXVwLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLHNDQUFBO0VBQ0EsOENBQUE7QUFERjs7QUFJQTtFQUNFLG9DQUFBO0FBREY7O0FBS0E7RUFDRSxvQ0FBQTtFQUNBLG1DQUFBO0VBQ0EsaUNBQUE7RUFDQSxpQ0FBQTtFQUNBLG9DQUFBO0FBRkY7O0FBSUU7RUFDRSw0QkFBQTtFQUNBLGlCQUFBO0VBQ0Esd0NBQUE7RUFDQSwrQ0FBQTtFQUNBLHFCQUFBO0FBRko7O0FBTUU7RUFDRSw2Q0FBQTtBQUpKOztBQU1JO0VBQ0Usb0JBQUE7RUFDQSxrQkFBQTtFQUNBLHdCQUFBO0FBSk47O0FBU0k7RUFDRSx3Q0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtBQVBOOztBQVNNO0VBQ0UsaURBQUE7VUFBQSxnREFBQTtBQVBSOztBQVlFO0VBQ0Usd0NBQUE7QUFWSjs7QUFhRTtFQUNFLHlCQUFBO0VBQ0EsbUJBQUE7QUFYSjs7QUFhSTtFQUNFLG1DQUFBO0VBQ0EsV0FBQTtBQVhOOztBQWFNO0VBQ0UsYUFBQTtBQVhSOztBQWlCSTtFQUNFLDhCQUFBO0VBQ0YsOEJBQUE7RUFDQSxrQkFBQTtBQWZKOztBQWtCSTtFQUNFLFdBQUE7QUFoQk47O0FBa0JNO0VBQ0UsOEJBQUE7QUFoQlIiLCJmaWxlIjoic3JjL2FwcC9maXJlYmFzZS9hdXRoL3NpZ24tdXAvc3R5bGVzL2ZpcmViYXNlLXNpZ24tdXAucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ3VzdG9tIHZhcmlhYmxlc1xuLy8gTm90ZTogIFRoZXNlIG9uZXMgd2VyZSBhZGRlZCBieSB1cyBhbmQgaGF2ZSBub3RoaW5nIHRvIGRvIHdpdGggSW9uaWMgQ1NTIEN1c3RvbSBQcm9wZXJ0aWVzXG46aG9zdCB7XG4gIC0tcGFnZS1tYXJnaW46IHZhcigtLWFwcC1icm9hZC1tYXJnaW4pO1xuICAtLXBhZ2UtYmFja2dyb3VuZDogdmFyKC0tYXBwLWJhY2tncm91bmQtc2hhZGUpO1xufVxuXG5pb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tcGFnZS1iYWNrZ3JvdW5kKTtcbn1cblxuLy8gTm90ZTogIEFsbCB0aGUgQ1NTIHZhcmlhYmxlcyBkZWZpbmVkIGJlbG93IGFyZSBvdmVycmlkZXMgb2YgSW9uaWMgZWxlbWVudHMgQ1NTIEN1c3RvbSBQcm9wZXJ0aWVzXG4uc2lnbnVwLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLXBhZ2UtYmFja2dyb3VuZCk7XG4gIC0tcGFkZGluZy1zdGFydDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAtLXBhZGRpbmctZW5kOiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIC0tcGFkZGluZy10b3A6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgLS1wYWRkaW5nLWJvdHRvbTogdmFyKC0tcGFnZS1tYXJnaW4pO1xuXG4gIC5hdXRoLXRpdGxlIHtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIG1hcmdpbi10b3A6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG4gICAgbWFyZ2luLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgKiAoMy8yKSk7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuNnB4O1xuICB9XG5cblxuICAuaW5wdXRzLWxpc3Qge1xuICAgIC0taW9uLWl0ZW0tYmFja2dyb3VuZDogdmFyKC0tcGFnZS1iYWNrZ3JvdW5kKTtcblxuICAgIC5pbnB1dC1pdGVtIHtcbiAgICAgIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICAgICAgLS1wYWRkaW5nLWVuZDogMHB4O1xuICAgICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMHB4O1xuICAgIH1cbiAgfVxuXG4gIC5lcnJvci1jb250YWluZXIge1xuICAgIC5lcnJvci1tZXNzYWdlIHtcbiAgICAgIG1hcmdpbjogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKSAwcHg7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcblxuICAgICAgaW9uLWljb24ge1xuICAgICAgICBwYWRkaW5nLWlubGluZS1lbmQ6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLnNpZ251cC1idG4ge1xuICAgIG1hcmdpbjogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKSAwcHg7XG4gIH1cblxuICAub3RoZXItYXV0aC1vcHRpb25zLXJvdyB7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgLmxvZ2luLWJ0biB7XG4gICAgICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgICAgIG1hcmdpbjogMHB4O1xuXG4gICAgICAmOmZvY3VzIHtcbiAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuc29jaWFsLWF1dGgtb3B0aW9ucyB7XG4gICAgLm9wdGlvbnMtZGl2aWRlciB7XG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gIFx0XHRtYXJnaW46IHZhcigtLXBhZ2UtbWFyZ2luKSAwcHg7XG4gIFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuXG4gICAgLnNvY2lhbC1hdXRoLWJ0biB7XG4gICAgICBtYXJnaW46IDBweDtcblxuICAgICAgJjpub3QoOmZpcnN0LWNoaWxkKSB7XG4gICAgICAgIG1hcmdpbi10b3A6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ== */"];
      /***/
    }
  }]);
})();
//# sourceMappingURL=sign-up-firebase-sign-up-module-ngfactory-es5.js.map