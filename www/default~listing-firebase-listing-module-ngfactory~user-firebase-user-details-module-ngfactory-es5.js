function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~listing-firebase-listing-module-ngfactory~user-firebase-user-details-module-ngfactory"], {
  /***/
  "./node_modules/dayjs/dayjs.min.js":
  /*!*****************************************!*\
    !*** ./node_modules/dayjs/dayjs.min.js ***!
    \*****************************************/

  /*! no static exports found */

  /***/
  function node_modulesDayjsDayjsMinJs(module, exports, __webpack_require__) {
    !function (t, e) {
      true ? module.exports = e() : undefined;
    }(this, function () {
      "use strict";

      var t = "millisecond",
          e = "second",
          n = "minute",
          r = "hour",
          i = "day",
          s = "week",
          u = "month",
          o = "quarter",
          a = "year",
          h = /^(\d{4})-?(\d{1,2})-?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?.?(\d{1,3})?$/,
          f = /\[([^\]]+)]|Y{2,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
          c = function c(t, e, n) {
        var r = String(t);
        return !r || r.length >= e ? t : "" + Array(e + 1 - r.length).join(n) + t;
      },
          d = {
        s: c,
        z: function z(t) {
          var e = -t.utcOffset(),
              n = Math.abs(e),
              r = Math.floor(n / 60),
              i = n % 60;
          return (e <= 0 ? "+" : "-") + c(r, 2, "0") + ":" + c(i, 2, "0");
        },
        m: function m(t, e) {
          var n = 12 * (e.year() - t.year()) + (e.month() - t.month()),
              r = t.clone().add(n, u),
              i = e - r < 0,
              s = t.clone().add(n + (i ? -1 : 1), u);
          return Number(-(n + (e - r) / (i ? r - s : s - r)) || 0);
        },
        a: function a(t) {
          return t < 0 ? Math.ceil(t) || 0 : Math.floor(t);
        },
        p: function p(h) {
          return {
            M: u,
            y: a,
            w: s,
            d: i,
            D: "date",
            h: r,
            m: n,
            s: e,
            ms: t,
            Q: o
          }[h] || String(h || "").toLowerCase().replace(/s$/, "");
        },
        u: function u(t) {
          return void 0 === t;
        }
      },
          $ = {
        name: "en",
        weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_")
      },
          l = "en",
          m = {};

      m[l] = $;

      var y = function y(t) {
        return t instanceof v;
      },
          M = function M(t, e, n) {
        var r;
        if (!t) return l;
        if ("string" == typeof t) m[t] && (r = t), e && (m[t] = e, r = t);else {
          var i = t.name;
          m[i] = t, r = i;
        }
        return !n && r && (l = r), r || !n && l;
      },
          g = function g(t, e) {
        if (y(t)) return t.clone();
        var n = "object" == typeof e ? e : {};
        return n.date = t, n.args = arguments, new v(n);
      },
          D = d;

      D.l = M, D.i = y, D.w = function (t, e) {
        return g(t, {
          locale: e.$L,
          utc: e.$u,
          $offset: e.$offset
        });
      };

      var v = function () {
        function c(t) {
          this.$L = this.$L || M(t.locale, null, !0), this.parse(t);
        }

        var d = c.prototype;
        return d.parse = function (t) {
          this.$d = function (t) {
            var e = t.date,
                n = t.utc;
            if (null === e) return new Date(NaN);
            if (D.u(e)) return new Date();
            if (e instanceof Date) return new Date(e);

            if ("string" == typeof e && !/Z$/i.test(e)) {
              var r = e.match(h);
              if (r) return n ? new Date(Date.UTC(r[1], r[2] - 1, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, r[7] || 0)) : new Date(r[1], r[2] - 1, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, r[7] || 0);
            }

            return new Date(e);
          }(t), this.init();
        }, d.init = function () {
          var t = this.$d;
          this.$y = t.getFullYear(), this.$M = t.getMonth(), this.$D = t.getDate(), this.$W = t.getDay(), this.$H = t.getHours(), this.$m = t.getMinutes(), this.$s = t.getSeconds(), this.$ms = t.getMilliseconds();
        }, d.$utils = function () {
          return D;
        }, d.isValid = function () {
          return !("Invalid Date" === this.$d.toString());
        }, d.isSame = function (t, e) {
          var n = g(t);
          return this.startOf(e) <= n && n <= this.endOf(e);
        }, d.isAfter = function (t, e) {
          return g(t) < this.startOf(e);
        }, d.isBefore = function (t, e) {
          return this.endOf(e) < g(t);
        }, d.$g = function (t, e, n) {
          return D.u(t) ? this[e] : this.set(n, t);
        }, d.year = function (t) {
          return this.$g(t, "$y", a);
        }, d.month = function (t) {
          return this.$g(t, "$M", u);
        }, d.day = function (t) {
          return this.$g(t, "$W", i);
        }, d.date = function (t) {
          return this.$g(t, "$D", "date");
        }, d.hour = function (t) {
          return this.$g(t, "$H", r);
        }, d.minute = function (t) {
          return this.$g(t, "$m", n);
        }, d.second = function (t) {
          return this.$g(t, "$s", e);
        }, d.millisecond = function (e) {
          return this.$g(e, "$ms", t);
        }, d.unix = function () {
          return Math.floor(this.valueOf() / 1e3);
        }, d.valueOf = function () {
          return this.$d.getTime();
        }, d.startOf = function (t, o) {
          var h = this,
              f = !!D.u(o) || o,
              c = D.p(t),
              d = function d(t, e) {
            var n = D.w(h.$u ? Date.UTC(h.$y, e, t) : new Date(h.$y, e, t), h);
            return f ? n : n.endOf(i);
          },
              $ = function $(t, e) {
            return D.w(h.toDate()[t].apply(h.toDate("s"), (f ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(e)), h);
          },
              l = this.$W,
              m = this.$M,
              y = this.$D,
              M = "set" + (this.$u ? "UTC" : "");

          switch (c) {
            case a:
              return f ? d(1, 0) : d(31, 11);

            case u:
              return f ? d(1, m) : d(0, m + 1);

            case s:
              var g = this.$locale().weekStart || 0,
                  v = (l < g ? l + 7 : l) - g;
              return d(f ? y - v : y + (6 - v), m);

            case i:
            case "date":
              return $(M + "Hours", 0);

            case r:
              return $(M + "Minutes", 1);

            case n:
              return $(M + "Seconds", 2);

            case e:
              return $(M + "Milliseconds", 3);

            default:
              return this.clone();
          }
        }, d.endOf = function (t) {
          return this.startOf(t, !1);
        }, d.$set = function (s, o) {
          var h,
              f = D.p(s),
              c = "set" + (this.$u ? "UTC" : ""),
              d = (h = {}, h[i] = c + "Date", h.date = c + "Date", h[u] = c + "Month", h[a] = c + "FullYear", h[r] = c + "Hours", h[n] = c + "Minutes", h[e] = c + "Seconds", h[t] = c + "Milliseconds", h)[f],
              $ = f === i ? this.$D + (o - this.$W) : o;

          if (f === u || f === a) {
            var l = this.clone().set("date", 1);
            l.$d[d]($), l.init(), this.$d = l.set("date", Math.min(this.$D, l.daysInMonth())).toDate();
          } else d && this.$d[d]($);

          return this.init(), this;
        }, d.set = function (t, e) {
          return this.clone().$set(t, e);
        }, d.get = function (t) {
          return this[D.p(t)]();
        }, d.add = function (t, o) {
          var h,
              f = this;
          t = Number(t);

          var c = D.p(o),
              d = function d(e) {
            var n = g(f);
            return D.w(n.date(n.date() + Math.round(e * t)), f);
          };

          if (c === u) return this.set(u, this.$M + t);
          if (c === a) return this.set(a, this.$y + t);
          if (c === i) return d(1);
          if (c === s) return d(7);
          var $ = (h = {}, h[n] = 6e4, h[r] = 36e5, h[e] = 1e3, h)[c] || 1,
              l = this.$d.getTime() + t * $;
          return D.w(l, this);
        }, d.subtract = function (t, e) {
          return this.add(-1 * t, e);
        }, d.format = function (t) {
          var e = this;
          if (!this.isValid()) return "Invalid Date";

          var n = t || "YYYY-MM-DDTHH:mm:ssZ",
              r = D.z(this),
              i = this.$locale(),
              s = this.$H,
              u = this.$m,
              o = this.$M,
              a = i.weekdays,
              h = i.months,
              c = function c(t, r, i, s) {
            return t && (t[r] || t(e, n)) || i[r].substr(0, s);
          },
              d = function d(t) {
            return D.s(s % 12 || 12, t, "0");
          },
              $ = i.meridiem || function (t, e, n) {
            var r = t < 12 ? "AM" : "PM";
            return n ? r.toLowerCase() : r;
          },
              l = {
            YY: String(this.$y).slice(-2),
            YYYY: this.$y,
            M: o + 1,
            MM: D.s(o + 1, 2, "0"),
            MMM: c(i.monthsShort, o, h, 3),
            MMMM: c(h, o),
            D: this.$D,
            DD: D.s(this.$D, 2, "0"),
            d: String(this.$W),
            dd: c(i.weekdaysMin, this.$W, a, 2),
            ddd: c(i.weekdaysShort, this.$W, a, 3),
            dddd: a[this.$W],
            H: String(s),
            HH: D.s(s, 2, "0"),
            h: d(1),
            hh: d(2),
            a: $(s, u, !0),
            A: $(s, u, !1),
            m: String(u),
            mm: D.s(u, 2, "0"),
            s: String(this.$s),
            ss: D.s(this.$s, 2, "0"),
            SSS: D.s(this.$ms, 3, "0"),
            Z: r
          };

          return n.replace(f, function (t, e) {
            return e || l[t] || r.replace(":", "");
          });
        }, d.utcOffset = function () {
          return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
        }, d.diff = function (t, h, f) {
          var c,
              d = D.p(h),
              $ = g(t),
              l = 6e4 * ($.utcOffset() - this.utcOffset()),
              m = this - $,
              y = D.m(this, $);
          return y = (c = {}, c[a] = y / 12, c[u] = y, c[o] = y / 3, c[s] = (m - l) / 6048e5, c[i] = (m - l) / 864e5, c[r] = m / 36e5, c[n] = m / 6e4, c[e] = m / 1e3, c)[d] || m, f ? y : D.a(y);
        }, d.daysInMonth = function () {
          return this.endOf(u).$D;
        }, d.$locale = function () {
          return m[this.$L];
        }, d.locale = function (t, e) {
          if (!t) return this.$L;
          var n = this.clone(),
              r = M(t, e, !0);
          return r && (n.$L = r), n;
        }, d.clone = function () {
          return D.w(this.$d, this);
        }, d.toDate = function () {
          return new Date(this.valueOf());
        }, d.toJSON = function () {
          return this.isValid() ? this.toISOString() : null;
        }, d.toISOString = function () {
          return this.$d.toISOString();
        }, d.toString = function () {
          return this.$d.toUTCString();
        }, c;
      }();

      return g.prototype = v.prototype, g.extend = function (t, e) {
        return t(e, v, g), g;
      }, g.locale = M, g.isDayjs = y, g.unix = function (t) {
        return g(1e3 * t);
      }, g.en = m[l], g.Ls = m, g;
    });
    /***/
  },

  /***/
  "./src/app/firebase/crud/firebase-crud.service.ts":
  /*!********************************************************!*\
    !*** ./src/app/firebase/crud/firebase-crud.service.ts ***!
    \********************************************************/

  /*! exports provided: FirebaseCrudService */

  /***/
  function srcAppFirebaseCrudFirebaseCrudServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FirebaseCrudService", function () {
      return FirebaseCrudService;
    });
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/fesm2015/angular-fire-firestore.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
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
    /*! ../../shell/data-store */
    "./src/app/shell/data-store.ts");
    /* harmony import */


    var _crud_listing_firebase_listing_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./../crud/listing/firebase-listing.model */
    "./src/app/firebase/crud/listing/firebase-listing.model.ts");
    /* harmony import */


    var _crud_user_firebase_user_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./../crud/user/firebase-user.model */
    "./src/app/firebase/crud/user/firebase-user.model.ts");
    /* harmony import */


    var _crud_user_select_image_user_image_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./../crud/user/select-image/user-image.model */
    "./src/app/firebase/crud/user/select-image/user-image.model.ts");

    var FirebaseCrudService = /*#__PURE__*/function () {
      function FirebaseCrudService(afs) {
        _classCallCheck(this, FirebaseCrudService);

        this.afs = afs;
      }
      /*
        Firebase User Listing Page
      */


      _createClass(FirebaseCrudService, [{
        key: "getListingDataSource",
        value: function getListingDataSource() {
          var _this = this;

          return this.afs.collection('users').valueChanges({
            idField: 'id'
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (actions) {
            return actions.map(function (user) {
              var age = _this.calcUserAge(user.birthdate);

              return Object.assign({
                age: age
              }, user);
            });
          }));
        }
      }, {
        key: "getListingStore",
        value: function getListingStore(dataSource) {
          // Use cache if available
          if (!this.listingDataStore) {
            // Initialize the model specifying that it is a shell model
            var shellModel = [new _crud_listing_firebase_listing_model__WEBPACK_IMPORTED_MODULE_5__["FirebaseListingItemModel"](), new _crud_listing_firebase_listing_model__WEBPACK_IMPORTED_MODULE_5__["FirebaseListingItemModel"](), new _crud_listing_firebase_listing_model__WEBPACK_IMPORTED_MODULE_5__["FirebaseListingItemModel"](), new _crud_listing_firebase_listing_model__WEBPACK_IMPORTED_MODULE_5__["FirebaseListingItemModel"](), new _crud_listing_firebase_listing_model__WEBPACK_IMPORTED_MODULE_5__["FirebaseListingItemModel"](), new _crud_listing_firebase_listing_model__WEBPACK_IMPORTED_MODULE_5__["FirebaseListingItemModel"]()];
            this.listingDataStore = new _shell_data_store__WEBPACK_IMPORTED_MODULE_4__["DataStore"](shellModel); // Trigger the loading mechanism (with shell) in the dataStore

            this.listingDataStore.load(dataSource);
          }

          return this.listingDataStore;
        } // Filter users by age

      }, {
        key: "searchUsersByAge",
        value: function searchUsersByAge(lower, upper) {
          var _this2 = this;

          // we save the dateOfBirth in our DB so we need to calc the min and max dates valid for this query
          var minDate = dayjs__WEBPACK_IMPORTED_MODULE_3__(Date.now()).subtract(upper, 'year').unix();
          var maxDate = dayjs__WEBPACK_IMPORTED_MODULE_3__(Date.now()).subtract(lower, 'year').unix();
          var listingCollection = this.afs.collection('users', function (ref) {
            return ref.orderBy('birthdate').startAt(minDate).endAt(maxDate);
          });
          return listingCollection.valueChanges({
            idField: 'id'
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (actions) {
            return actions.map(function (user) {
              var age = _this2.calcUserAge(user.birthdate);

              return Object.assign({
                age: age
              }, user);
            });
          }));
        }
        /*
          Firebase User Details Page
        */
        // Concat the userData with the details of the userSkills (from the skills collection)

      }, {
        key: "getCombinedUserDataSource",
        value: function getCombinedUserDataSource(userId) {
          var _this3 = this;

          return this.getUser(userId).pipe( // Transformation operator: Map each source value (user) to an Observable (combineDataSources | throwError) which
          // is merged in the output Observable
          Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["concatMap"])(function (user) {
            if (user && user.skills) {
              // Map each skill id and get the skill data as an Observable
              var userSkillsObservables = user.skills.map(function (skill) {
                return _this3.getSkill(skill).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])());
              }); // Combination operator: Take the most recent value from both input sources (of(user) & forkJoin(userSkillsObservables)),
              // and transform those emitted values into one value ([userDetails, userSkills])

              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["combineLatest"])([Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(user), Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["forkJoin"])(userSkillsObservables)]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (_ref) {
                var _ref2 = _slicedToArray(_ref, 2),
                    userDetails = _ref2[0],
                    userSkills = _ref2[1];

                // Spread operator (see: https://dev.to/napoleon039/how-to-use-the-spread-and-rest-operator-4jbb)
                return Object.assign(Object.assign({}, userDetails), {
                  skills: userSkills
                });
              }));
            } else {
              // Throw error
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])('User does not have any skills.');
            }
          }));
        }
      }, {
        key: "getCombinedUserStore",
        value: function getCombinedUserStore(dataSource) {
          // Initialize the model specifying that it is a shell model
          var shellModel = new _crud_user_firebase_user_model__WEBPACK_IMPORTED_MODULE_6__["FirebaseCombinedUserModel"]();
          this.combinedUserDataStore = new _shell_data_store__WEBPACK_IMPORTED_MODULE_4__["DataStore"](shellModel); // Trigger the loading mechanism (with shell) in the dataStore

          this.combinedUserDataStore.load(dataSource);
          return this.combinedUserDataStore;
        } // tslint:disable-next-line:max-line-length

      }, {
        key: "getRelatedUsersDataSource",
        value: function getRelatedUsersDataSource(combinedUserDataSource) {
          var _this4 = this;

          return combinedUserDataSource.pipe( // Filter user values that are not shells. We need to add this filter if using the combinedUserDataStore timeline
          Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (user) {
            return !user.isShell;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["concatMap"])(function (user) {
            if (user && user.skills) {
              // Get all users with at least 1 skill in common
              var relatedUsersObservable = _this4.getUsersWithSameSkill(user.id, user.skills);

              return relatedUsersObservable;
            } else {
              // Throw error
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])('Could not get related user');
            }
          }));
        }
      }, {
        key: "getRelatedUsersStore",
        value: function getRelatedUsersStore(dataSource) {
          // Initialize the model specifying that it is a shell model
          var shellModel = [new _crud_listing_firebase_listing_model__WEBPACK_IMPORTED_MODULE_5__["FirebaseListingItemModel"](), new _crud_listing_firebase_listing_model__WEBPACK_IMPORTED_MODULE_5__["FirebaseListingItemModel"](), new _crud_listing_firebase_listing_model__WEBPACK_IMPORTED_MODULE_5__["FirebaseListingItemModel"]()];
          this.relatedUsersDataStore = new _shell_data_store__WEBPACK_IMPORTED_MODULE_4__["DataStore"](shellModel); // Trigger the loading mechanism (with shell) in the dataStore

          this.relatedUsersDataStore.load(dataSource);
          return this.relatedUsersDataStore;
        }
        /*
          Firebase Create User Modal
        */

      }, {
        key: "createUser",
        value: function createUser(userData) {
          return this.afs.collection('users').add(Object.assign({}, userData));
        }
        /*
          Firebase Update User Modal
        */

      }, {
        key: "updateUser",
        value: function updateUser(userData) {
          return this.afs.collection('users').doc(userData.id).set(userData);
        }
      }, {
        key: "deleteUser",
        value: function deleteUser(userKey) {
          return this.afs.collection('users').doc(userKey)["delete"]();
        }
        /*
          Firebase Select User Image Modal
        */

      }, {
        key: "getAvatarsDataSource",
        value: function getAvatarsDataSource() {
          return this.afs.collection('avatars').valueChanges();
        }
      }, {
        key: "getAvatarsStore",
        value: function getAvatarsStore(dataSource) {
          // Use cache if available
          if (!this.avatarsDataStore) {
            // Initialize the model specifying that it is a shell model
            var shellModel = [new _crud_user_select_image_user_image_model__WEBPACK_IMPORTED_MODULE_7__["UserImageModel"](), new _crud_user_select_image_user_image_model__WEBPACK_IMPORTED_MODULE_7__["UserImageModel"](), new _crud_user_select_image_user_image_model__WEBPACK_IMPORTED_MODULE_7__["UserImageModel"](), new _crud_user_select_image_user_image_model__WEBPACK_IMPORTED_MODULE_7__["UserImageModel"](), new _crud_user_select_image_user_image_model__WEBPACK_IMPORTED_MODULE_7__["UserImageModel"]()];
            this.avatarsDataStore = new _shell_data_store__WEBPACK_IMPORTED_MODULE_4__["DataStore"](shellModel); // Trigger the loading mechanism (with shell) in the dataStore

            this.avatarsDataStore.load(dataSource);
          }

          return this.avatarsDataStore;
        }
        /*
          FireStore utility methods
        */
        // Get list of all available Skills (used in the create and update modals)

      }, {
        key: "getSkills",
        value: function getSkills() {
          return this.afs.collection('skills').valueChanges({
            idField: 'id'
          });
        } // Get data of a specific Skill

      }, {
        key: "getSkill",
        value: function getSkill(skillId) {
          return this.afs.doc('skills/' + skillId).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (a) {
            var data = a.payload.data();
            var id = a.payload.id;
            return Object.assign({
              id: id
            }, data);
          }));
        } // Get data of a specific User

      }, {
        key: "getUser",
        value: function getUser(userId) {
          var _this5 = this;

          return this.afs.doc('users/' + userId).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (a) {
            var userData = a.payload.data();
            var id = a.payload.id;
            var age = userData ? _this5.calcUserAge(userData.birthdate) : 0;
            return Object.assign({
              id: id,
              age: age
            }, userData);
          }));
        } // Get all users who share at least 1 skill of the user's 'skills' list

      }, {
        key: "getUsersWithSameSkill",
        value: function getUsersWithSameSkill(userId, skills) {
          var _this6 = this;

          // Get the users who have at least 1 skill in common
          // Because firestore doesn't have a logical 'OR' operator we need to create multiple queries, one for each skill from the 'skills' list
          var queries = skills.map(function (skill) {
            return _this6.afs.collection('users', function (ref) {
              return ref.where('skills', 'array-contains', skill.id);
            }).valueChanges({
              idField: 'id'
            });
          }); // Combine all these queries

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["combineLatest"])(queries).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (relatedUsers) {
            var _ref3;

            // Flatten the array of arrays of FirebaseListingItemModel
            var flattenedRelatedUsers = (_ref3 = []).concat.apply(_ref3, _toConsumableArray(relatedUsers)); // Removes duplicates from the array of FirebaseListingItemModel objects.
            // Also remove the original user (userId)


            var filteredRelatedUsers = flattenedRelatedUsers.reduce(function (accumulatedUsers, user) {
              if (accumulatedUsers.findIndex(function (accumulatedUser) {
                return accumulatedUser.id === user.id;
              }) < 0 && user.id !== userId) {
                return [].concat(_toConsumableArray(accumulatedUsers), [user]);
              } else {
                // If the user doesn't pass the test, then don't add it to the filtered users array
                return accumulatedUsers;
              }
            }, []);
            return filteredRelatedUsers;
          }));
        }
      }, {
        key: "calcUserAge",
        value: function calcUserAge(dateOfBirth) {
          return dayjs__WEBPACK_IMPORTED_MODULE_3__(Date.now()).diff(dayjs__WEBPACK_IMPORTED_MODULE_3__["unix"](dateOfBirth), 'year');
        }
      }]);

      return FirebaseCrudService;
    }();
    /***/

  },

  /***/
  "./src/app/firebase/crud/listing/firebase-listing.model.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/firebase/crud/listing/firebase-listing.model.ts ***!
    \*****************************************************************/

  /*! exports provided: FirebaseListingItemModel */

  /***/
  function srcAppFirebaseCrudListingFirebaseListingModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FirebaseListingItemModel", function () {
      return FirebaseListingItemModel;
    });
    /* harmony import */


    var _shell_data_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../../../shell/data-store */
    "./src/app/shell/data-store.ts");

    var FirebaseListingItemModel = /*#__PURE__*/function (_shell_data_store__WE) {
      _inherits(FirebaseListingItemModel, _shell_data_store__WE);

      var _super = _createSuper(FirebaseListingItemModel);

      function FirebaseListingItemModel() {
        _classCallCheck(this, FirebaseListingItemModel);

        return _super.call(this);
      }

      return FirebaseListingItemModel;
    }(_shell_data_store__WEBPACK_IMPORTED_MODULE_0__["ShellModel"]);
    /***/

  },

  /***/
  "./src/app/firebase/crud/user/firebase-user.model.ts":
  /*!***********************************************************!*\
    !*** ./src/app/firebase/crud/user/firebase-user.model.ts ***!
    \***********************************************************/

  /*! exports provided: FirebaseSkillModel, FirebaseUserModel, FirebaseCombinedUserModel */

  /***/
  function srcAppFirebaseCrudUserFirebaseUserModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FirebaseSkillModel", function () {
      return FirebaseSkillModel;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FirebaseUserModel", function () {
      return FirebaseUserModel;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FirebaseCombinedUserModel", function () {
      return FirebaseCombinedUserModel;
    });
    /* harmony import */


    var _shell_data_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../../../shell/data-store */
    "./src/app/shell/data-store.ts");

    var FirebaseSkillModel = /*#__PURE__*/function (_shell_data_store__WE2) {
      _inherits(FirebaseSkillModel, _shell_data_store__WE2);

      var _super2 = _createSuper(FirebaseSkillModel);

      function FirebaseSkillModel() {
        _classCallCheck(this, FirebaseSkillModel);

        return _super2.call(this);
      }

      return FirebaseSkillModel;
    }(_shell_data_store__WEBPACK_IMPORTED_MODULE_0__["ShellModel"]);

    var FirebaseUserModel = /*#__PURE__*/function (_shell_data_store__WE3) {
      _inherits(FirebaseUserModel, _shell_data_store__WE3);

      var _super3 = _createSuper(FirebaseUserModel);

      function FirebaseUserModel() {
        var _this7;

        _classCallCheck(this, FirebaseUserModel);

        _this7 = _super3.call(this);
        _this7.skills = ['', '', ''];
        _this7.languages = {
          spanish: 0,
          english: 0,
          french: 0
        };
        return _this7;
      }

      return FirebaseUserModel;
    }(_shell_data_store__WEBPACK_IMPORTED_MODULE_0__["ShellModel"]);

    var FirebaseCombinedUserModel = /*#__PURE__*/function (_FirebaseUserModel) {
      _inherits(FirebaseCombinedUserModel, _FirebaseUserModel);

      var _super4 = _createSuper(FirebaseCombinedUserModel);

      function FirebaseCombinedUserModel() {
        var _this8;

        _classCallCheck(this, FirebaseCombinedUserModel);

        _this8 = _super4.call(this);
        _this8.skills = [new FirebaseSkillModel(), new FirebaseSkillModel(), new FirebaseSkillModel()];
        return _this8;
      }

      return FirebaseCombinedUserModel;
    }(FirebaseUserModel);
    /***/

  },

  /***/
  "./src/app/firebase/crud/user/select-image/select-user-image.modal.ngfactory.js":
  /*!**************************************************************************************!*\
    !*** ./src/app/firebase/crud/user/select-image/select-user-image.modal.ngfactory.js ***!
    \**************************************************************************************/

  /*! exports provided: RenderType_SelectUserImageModal, View_SelectUserImageModal_0, View_SelectUserImageModal_Host_0, SelectUserImageModalNgFactory */

  /***/
  function srcAppFirebaseCrudUserSelectImageSelectUserImageModalNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_SelectUserImageModal", function () {
      return RenderType_SelectUserImageModal;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_SelectUserImageModal_0", function () {
      return View_SelectUserImageModal_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_SelectUserImageModal_Host_0", function () {
      return View_SelectUserImageModal_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SelectUserImageModalNgFactory", function () {
      return SelectUserImageModalNgFactory;
    });
    /* harmony import */


    var _styles_select_user_image_modal_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./styles/select-user-image.modal.scss.shim.ngstyle */
    "./src/app/firebase/crud/user/select-image/styles/select-user-image.modal.scss.shim.ngstyle.js");
    /* harmony import */


    var _styles_select_user_image_shell_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./styles/select-user-image.shell.scss.shim.ngstyle */
    "./src/app/firebase/crud/user/select-image/styles/select-user-image.shell.scss.shim.ngstyle.js");
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


    var _shell_image_shell_image_shell_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../../shell/image-shell/image-shell.component.ngfactory */
    "./src/app/shell/image-shell/image-shell.component.ngfactory.js");
    /* harmony import */


    var _shell_image_shell_image_shell_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../../shell/image-shell/image-shell.component */
    "./src/app/shell/image-shell/image-shell.component.ts");
    /* harmony import */


    var _shell_aspect_ratio_aspect_ratio_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../../shell/aspect-ratio/aspect-ratio.component.ngfactory */
    "./src/app/shell/aspect-ratio/aspect-ratio.component.ngfactory.js");
    /* harmony import */


    var _shell_aspect_ratio_aspect_ratio_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../../shell/aspect-ratio/aspect-ratio.component */
    "./src/app/shell/aspect-ratio/aspect-ratio.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _select_user_image_modal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./select-user-image.modal */
    "./src/app/firebase/crud/user/select-image/select-user-image.modal.ts");
    /* harmony import */


    var _firebase_crud_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../../firebase-crud.service */
    "./src/app/firebase/crud/firebase-crud.service.ts");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
     * tslint:disable
     */


    var styles_SelectUserImageModal = [_styles_select_user_image_modal_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"], _styles_select_user_image_shell_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_1__["styles"]];

    var RenderType_SelectUserImageModal = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵcrt"]({
      encapsulation: 0,
      styles: styles_SelectUserImageModal,
      data: {}
    });

    function View_SelectUserImageModal_1(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](0, 0, null, null, 6, "ion-col", [["class", "image-item"], ["size", "4"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonCol_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonCol"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](1, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCol"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], {
        size: [0, "size"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](2, 0, null, 0, 4, "app-image-shell", [["animation", "spinner"], ["class", "user-image"]], [[2, "img-loaded", null], [4, "backgroundImage", null], [1, "display", 0]], [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("click" === en) {
          var pd_0 = _co.dismissModal(_v.context.$implicit) !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, _shell_image_shell_image_shell_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_ImageShellComponent_0"], _shell_image_shell_image_shell_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_ImageShellComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](3, 49152, null, 0, _shell_image_shell_image_shell_component__WEBPACK_IMPORTED_MODULE_6__["ImageShellComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["PLATFORM_ID"]], {
        display: [0, "display"],
        src: [1, "src"],
        alt: [2, "alt"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](4, 0, null, 0, 2, "app-aspect-ratio", [], [[4, "padding", null]], null, null, _shell_aspect_ratio_aspect_ratio_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_AspectRatioComponent_0"], _shell_aspect_ratio_aspect_ratio_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_AspectRatioComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](5, 49152, null, 0, _shell_aspect_ratio_aspect_ratio_component__WEBPACK_IMPORTED_MODULE_8__["AspectRatioComponent"], [], {
        ratio: [0, "ratio"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵpod"](6, {
        w: 0,
        h: 1
      })], function (_ck, _v) {
        var currVal_0 = "4";

        _ck(_v, 1, 0, currVal_0);

        var currVal_4 = "cover";
        var currVal_5 = _v.context.$implicit.link;
        var currVal_6 = "avatar image";

        _ck(_v, 3, 0, currVal_4, currVal_5, currVal_6);

        var currVal_8 = _ck(_v, 6, 0, 1, 1);

        _ck(_v, 5, 0, currVal_8);
      }, function (_ck, _v) {
        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 3).imageLoaded;

        var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 3).backgroundImage;

        var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 3).display;

        _ck(_v, 2, 0, currVal_1, currVal_2, currVal_3);

        var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 5).ratioPadding;

        _ck(_v, 4, 0, currVal_7);
      });
    }

    function View_SelectUserImageModal_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](0, 0, null, null, 12, "ion-header", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonHeader_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonHeader"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](1, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonHeader"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](2, 0, null, 0, 10, "ion-toolbar", [["color", "primary"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonToolbar_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonToolbar"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](3, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonToolbar"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], {
        color: [0, "color"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](4, 0, null, 0, 5, "ion-buttons", [["slot", "end"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonButtons_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonButtons"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](5, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonButtons"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](6, 0, null, 0, 3, "ion-button", [], null, [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("click" === en) {
          var pd_0 = _co.dismissModal() !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonButton_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](7, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](8, 0, null, 0, 1, "ion-icon", [["name", "close"], ["slot", "icon-only"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonIcon_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](9, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], {
        name: [0, "name"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](10, 0, null, 0, 2, "ion-title", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonTitle_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonTitle"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](11, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonTitle"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, 0, ["Select an Avatar"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](13, 0, null, null, 5, "ion-content", [["class", "select-image-content"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonContent_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonContent"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](14, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonContent"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](15, 0, null, 0, 3, "ion-row", [["class", "images-wrapper"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IonRow_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IonRow"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](16, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonRow"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵand"](16777216, null, 0, 1, null, View_SelectUserImageModal_1)), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](18, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["IterableDiffers"]], {
        ngForOf: [0, "ngForOf"]
      }, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = "primary";

        _ck(_v, 3, 0, currVal_0);

        var currVal_1 = "close";

        _ck(_v, 9, 0, currVal_1);

        var currVal_2 = _co.avatars;

        _ck(_v, 18, 0, currVal_2);
      }, null);
    }

    function View_SelectUserImageModal_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](0, 0, null, null, 1, "app-select-user-image", [], [[2, "is-shell", null]], null, null, View_SelectUserImageModal_0, RenderType_SelectUserImageModal)), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](1, 114688, null, 0, _select_user_image_modal__WEBPACK_IMPORTED_MODULE_10__["SelectUserImageModal"], [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"], _firebase_crud_service__WEBPACK_IMPORTED_MODULE_11__["FirebaseCrudService"]], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, function (_ck, _v) {
        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 1).isShell;

        _ck(_v, 0, 0, currVal_0);
      });
    }

    var SelectUserImageModalNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵccf"]("app-select-user-image", _select_user_image_modal__WEBPACK_IMPORTED_MODULE_10__["SelectUserImageModal"], View_SelectUserImageModal_Host_0, {}, {}, []);
    /***/

  },

  /***/
  "./src/app/firebase/crud/user/select-image/select-user-image.modal.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/firebase/crud/user/select-image/select-user-image.modal.ts ***!
    \****************************************************************************/

  /*! exports provided: SelectUserImageModal */

  /***/
  function srcAppFirebaseCrudUserSelectImageSelectUserImageModalTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SelectUserImageModal", function () {
      return SelectUserImageModal;
    });
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _firebase_crud_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../firebase-crud.service */
    "./src/app/firebase/crud/firebase-crud.service.ts");

    var SelectUserImageModal = /*#__PURE__*/function () {
      function SelectUserImageModal(modalController, firebaseCrudService) {
        _classCallCheck(this, SelectUserImageModal);

        this.modalController = modalController;
        this.firebaseCrudService = firebaseCrudService;
      }

      _createClass(SelectUserImageModal, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this9 = this;

          var dataSource = this.firebaseCrudService.getAvatarsDataSource();
          var dataStore = this.firebaseCrudService.getAvatarsStore(dataSource);
          dataStore.state.subscribe(function (state) {
            _this9.avatars = state;
          }, function (error) {});
        }
      }, {
        key: "dismissModal",
        value: function dismissModal(avatar) {
          this.modalController.dismiss(avatar);
        }
      }, {
        key: "isShell",
        get: function get() {
          return this.avatars && this.avatars.isShell ? true : false;
        }
      }]);

      return SelectUserImageModal;
    }();
    /***/

  },

  /***/
  "./src/app/firebase/crud/user/select-image/styles/select-user-image.modal.scss.shim.ngstyle.js":
  /*!*****************************************************************************************************!*\
    !*** ./src/app/firebase/crud/user/select-image/styles/select-user-image.modal.scss.shim.ngstyle.js ***!
    \*****************************************************************************************************/

  /*! exports provided: styles */

  /***/
  function srcAppFirebaseCrudUserSelectImageStylesSelectUserImageModalScssShimNgstyleJs(module, __webpack_exports__, __webpack_require__) {
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


    var styles = ["[_nghost-%COMP%] {\n  --page-margin: var(--app-fair-margin);\n  --page-background: var(--app-background);\n}\n\n.select-image-content[_ngcontent-%COMP%] {\n  --background: var(--page-background);\n}\n\n.select-image-content[_ngcontent-%COMP%]   .images-wrapper[_ngcontent-%COMP%] {\n  --ion-grid-column-padding: calc(var(--page-margin) / 2);\n  padding: calc(var(--page-margin) / 2);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kaWRneS9Eb2N1bWVudHMvR2l0SHViL0luZmluaXR5L3NyYy9hcHAvZmlyZWJhc2UvY3J1ZC91c2VyL3NlbGVjdC1pbWFnZS9zdHlsZXMvc2VsZWN0LXVzZXItaW1hZ2UubW9kYWwuc2NzcyIsInNyYy9hcHAvZmlyZWJhc2UvY3J1ZC91c2VyL3NlbGVjdC1pbWFnZS9zdHlsZXMvc2VsZWN0LXVzZXItaW1hZ2UubW9kYWwuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLHFDQUFBO0VBQ0Esd0NBQUE7QUNERjs7QURJQTtFQUNFLG9DQUFBO0FDREY7O0FER0U7RUFDRSx1REFBQTtFQUVBLHFDQUFBO0FDRkoiLCJmaWxlIjoic3JjL2FwcC9maXJlYmFzZS9jcnVkL3VzZXIvc2VsZWN0LWltYWdlL3N0eWxlcy9zZWxlY3QtdXNlci1pbWFnZS5tb2RhbC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gLy8gQ3VzdG9tIHZhcmlhYmxlc1xuLy8gLy8gTm90ZTogIFRoZXNlIG9uZXMgd2VyZSBhZGRlZCBieSB1cyBhbmQgaGF2ZSBub3RoaW5nIHRvIGRvIHdpdGggSW9uaWMgQ1NTIEN1c3RvbSBQcm9wZXJ0aWVzXG46aG9zdCB7XG4gIC0tcGFnZS1tYXJnaW46IHZhcigtLWFwcC1mYWlyLW1hcmdpbik7XG4gIC0tcGFnZS1iYWNrZ3JvdW5kOiB2YXIoLS1hcHAtYmFja2dyb3VuZCk7XG59XG5cbi5zZWxlY3QtaW1hZ2UtY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tcGFnZS1iYWNrZ3JvdW5kKTtcblxuICAuaW1hZ2VzLXdyYXBwZXIge1xuICAgIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG5cbiAgICBwYWRkaW5nOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuICB9XG59XG4iLCI6aG9zdCB7XG4gIC0tcGFnZS1tYXJnaW46IHZhcigtLWFwcC1mYWlyLW1hcmdpbik7XG4gIC0tcGFnZS1iYWNrZ3JvdW5kOiB2YXIoLS1hcHAtYmFja2dyb3VuZCk7XG59XG5cbi5zZWxlY3QtaW1hZ2UtY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tcGFnZS1iYWNrZ3JvdW5kKTtcbn1cbi5zZWxlY3QtaW1hZ2UtY29udGVudCAuaW1hZ2VzLXdyYXBwZXIge1xuICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuICBwYWRkaW5nOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xufSJdfQ== */"];
    /***/
  },

  /***/
  "./src/app/firebase/crud/user/select-image/styles/select-user-image.shell.scss.shim.ngstyle.js":
  /*!*****************************************************************************************************!*\
    !*** ./src/app/firebase/crud/user/select-image/styles/select-user-image.shell.scss.shim.ngstyle.js ***!
    \*****************************************************************************************************/

  /*! exports provided: styles */

  /***/
  function srcAppFirebaseCrudUserSelectImageStylesSelectUserImageShellScssShimNgstyleJs(module, __webpack_exports__, __webpack_require__) {
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


    var styles = ["app-image-shell.user-image[_ngcontent-%COMP%] {\n  --image-shell-border-radius: var(--app-fair-radius);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kaWRneS9Eb2N1bWVudHMvR2l0SHViL0luZmluaXR5L3NyYy9hcHAvZmlyZWJhc2UvY3J1ZC91c2VyL3NlbGVjdC1pbWFnZS9zdHlsZXMvc2VsZWN0LXVzZXItaW1hZ2Uuc2hlbGwuc2NzcyIsInNyYy9hcHAvZmlyZWJhc2UvY3J1ZC91c2VyL3NlbGVjdC1pbWFnZS9zdHlsZXMvc2VsZWN0LXVzZXItaW1hZ2Uuc2hlbGwuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1EQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9maXJlYmFzZS9jcnVkL3VzZXIvc2VsZWN0LWltYWdlL3N0eWxlcy9zZWxlY3QtdXNlci1pbWFnZS5zaGVsbC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYXBwLWltYWdlLXNoZWxsLnVzZXItaW1hZ2Uge1xuICAtLWltYWdlLXNoZWxsLWJvcmRlci1yYWRpdXM6IHZhcigtLWFwcC1mYWlyLXJhZGl1cyk7XG59XG4iLCJhcHAtaW1hZ2Utc2hlbGwudXNlci1pbWFnZSB7XG4gIC0taW1hZ2Utc2hlbGwtYm9yZGVyLXJhZGl1czogdmFyKC0tYXBwLWZhaXItcmFkaXVzKTtcbn0iXX0= */"];
    /***/
  },

  /***/
  "./src/app/firebase/crud/user/select-image/user-image.model.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/firebase/crud/user/select-image/user-image.model.ts ***!
    \*********************************************************************/

  /*! exports provided: UserImageModel */

  /***/
  function srcAppFirebaseCrudUserSelectImageUserImageModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserImageModel", function () {
      return UserImageModel;
    });
    /* harmony import */


    var _shell_data_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../../../../shell/data-store */
    "./src/app/shell/data-store.ts");

    var UserImageModel = /*#__PURE__*/function (_shell_data_store__WE4) {
      _inherits(UserImageModel, _shell_data_store__WE4);

      var _super5 = _createSuper(UserImageModel);

      function UserImageModel() {
        _classCallCheck(this, UserImageModel);

        return _super5.call(this);
      }

      return UserImageModel;
    }(_shell_data_store__WEBPACK_IMPORTED_MODULE_0__["ShellModel"]);
    /***/

  }
}]);
//# sourceMappingURL=default~listing-firebase-listing-module-ngfactory~user-firebase-user-details-module-ngfactory-es5.js.map