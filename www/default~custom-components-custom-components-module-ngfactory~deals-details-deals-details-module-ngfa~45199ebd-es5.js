function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~custom-components-custom-components-module-ngfactory~deals-details-deals-details-module-ngfa~45199ebd"], {
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
  "./src/app/components/countdown-timer/countdown-timer.component.ngfactory.js":
  /*!***********************************************************************************!*\
    !*** ./src/app/components/countdown-timer/countdown-timer.component.ngfactory.js ***!
    \***********************************************************************************/

  /*! exports provided: RenderType_CountdownTimerComponent, View_CountdownTimerComponent_0, View_CountdownTimerComponent_Host_0, CountdownTimerComponentNgFactory */

  /***/
  function srcAppComponentsCountdownTimerCountdownTimerComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_CountdownTimerComponent", function () {
      return RenderType_CountdownTimerComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_CountdownTimerComponent_0", function () {
      return View_CountdownTimerComponent_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_CountdownTimerComponent_Host_0", function () {
      return View_CountdownTimerComponent_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CountdownTimerComponentNgFactory", function () {
      return CountdownTimerComponentNgFactory;
    });
    /* harmony import */


    var _countdown_timer_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./countdown-timer.component.scss.shim.ngstyle */
    "./src/app/components/countdown-timer/countdown-timer.component.scss.shim.ngstyle.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../node_modules/@ionic/angular/ionic-angular.ngfactory */
    "./node_modules/@ionic/angular/ionic-angular.ngfactory.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _countdown_timer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./countdown-timer.component */
    "./src/app/components/countdown-timer/countdown-timer.component.ts");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
     * tslint:disable
     */


    var styles_CountdownTimerComponent = [_countdown_timer_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

    var RenderType_CountdownTimerComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
      encapsulation: 0,
      styles: styles_CountdownTimerComponent,
      data: {}
    });

    function View_CountdownTimerComponent_1(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 6, "ion-col", [["class", "time"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonCol_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonCol"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonCol"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, 0, 1, "span", [["class", "time-unit"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["D"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, 0, 2, "div", [["class", "inner-time"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 1, "span", [["class", "time-value"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](6, null, ["", ""]))], null, function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co._daysLeft;

        _ck(_v, 6, 0, currVal_0);
      });
    }

    function View_CountdownTimerComponent_2(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 6, "ion-col", [["class", "time"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonCol_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonCol"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonCol"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, 0, 1, "span", [["class", "time-unit"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["H"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, 0, 2, "div", [["class", "inner-time"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 1, "span", [["class", "time-value"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](6, null, ["", ""]))], null, function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co._hoursLeft;

        _ck(_v, 6, 0, currVal_0);
      });
    }

    function View_CountdownTimerComponent_3(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 6, "ion-col", [["class", "time"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonCol_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonCol"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonCol"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, 0, 1, "span", [["class", "time-unit"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["M"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, 0, 2, "div", [["class", "inner-time"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 1, "span", [["class", "time-value"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](6, null, ["", ""]))], null, function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co._minutesLeft;

        _ck(_v, 6, 0, currVal_0);
      });
    }

    function View_CountdownTimerComponent_4(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 6, "ion-col", [["class", "time"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonCol_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonCol"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonCol"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, 0, 1, "span", [["class", "time-unit"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["S"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, 0, 2, "div", [["class", "inner-time"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 1, "span", [["class", "time-value"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](6, null, ["", ""]))], null, function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co._secondsLeft;

        _ck(_v, 6, 0, currVal_0);
      });
    }

    function View_CountdownTimerComponent_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 9, "ion-row", [["class", "countdown"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonRow_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonRow"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonRow"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_CountdownTimerComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_CountdownTimerComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_CountdownTimerComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_CountdownTimerComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co._initialUnit === "day";

        _ck(_v, 3, 0, currVal_0);

        var currVal_1 = _co._initialUnit === "day" && _co._endingUnit !== "day" || _co._initialUnit === "hour" || _co._endingUnit === "hour";

        _ck(_v, 5, 0, currVal_1);

        var currVal_2 = _co._initialUnit === "day" && _co._endingUnit !== "day" && _co._endingUnit !== "hour" || _co._initialUnit === "hour" && _co._endingUnit !== "hour" || _co._initialUnit === "minute";

        _ck(_v, 7, 0, currVal_2);

        var currVal_3 = _co._endingUnit === "second";

        _ck(_v, 9, 0, currVal_3);
      }, null);
    }

    function View_CountdownTimerComponent_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-countdown-timer", [], null, null, null, View_CountdownTimerComponent_0, RenderType_CountdownTimerComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 245760, null, 0, _countdown_timer_component__WEBPACK_IMPORTED_MODULE_5__["CountdownTimerComponent"], [], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, null);
    }

    var CountdownTimerComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-countdown-timer", _countdown_timer_component__WEBPACK_IMPORTED_MODULE_5__["CountdownTimerComponent"], View_CountdownTimerComponent_Host_0, {
      end: "end",
      units: "units"
    }, {}, []);
    /***/

  },

  /***/
  "./src/app/components/countdown-timer/countdown-timer.component.scss.shim.ngstyle.js":
  /*!*******************************************************************************************!*\
    !*** ./src/app/components/countdown-timer/countdown-timer.component.scss.shim.ngstyle.js ***!
    \*******************************************************************************************/

  /*! exports provided: styles */

  /***/
  function srcAppComponentsCountdownTimerCountdownTimerComponentScssShimNgstyleJs(module, __webpack_exports__, __webpack_require__) {
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


    var styles = ["[_nghost-%COMP%] {\n  --countdown-margin: 0px;\n  --countdown-padding: 0px;\n  --countdown-time-margin: 0px;\n  --countdown-time-padding: 0px;\n  --countdown-inner-time-margin: 2px;\n  --countdown-inner-time-padding: 0px;\n  --countdown-fill-border: none;\n  --countdown-fill-border-radius: 0px;\n  --countdown-fill-background: transparent;\n  --countdown-fill-shadow: none;\n  --countdown-value-color: #CCC;\n  --countdown-unit-color: #CCC;\n  --countdown-time-flex-direction: row-reverse;\n  display: block;\n}\n[_nghost-%COMP%]   .countdown[_ngcontent-%COMP%] {\n  margin: var(--countdown-margin);\n  padding: var(--countdown-padding);\n  justify-content: center;\n  flex-wrap: nowrap;\n}\n[_nghost-%COMP%]   .time[_ngcontent-%COMP%] {\n  padding: var(--countdown-time-padding);\n  margin: var(--countdown-time-margin);\n  display: flex;\n  flex-direction: var(--countdown-time-flex-direction);\n  align-items: center;\n  justify-content: center;\n}\n[_nghost-%COMP%]   .time[_ngcontent-%COMP%]   .time-unit[_ngcontent-%COMP%] {\n  display: block;\n  color: var(--countdown-unit-color);\n  font-size: 0.7em;\n  text-align: center;\n  text-transform: uppercase;\n  width: 2ex;\n}\n[_nghost-%COMP%]   .time[_ngcontent-%COMP%]   .time-value[_ngcontent-%COMP%] {\n  display: block;\n  color: var(--countdown-value-color);\n  text-align: center;\n  font-size: 1em;\n  line-height: 1em;\n  min-height: 1em;\n  min-width: 2.2ex;\n  min-width: 2.1ch;\n}\n[_nghost-%COMP%]   .inner-time[_ngcontent-%COMP%] {\n  margin: var(--countdown-inner-time-margin);\n  padding: var(--countdown-inner-time-padding);\n}\n[fill=countdown][_nghost-%COMP%]   .countdown[_ngcontent-%COMP%] {\n  border: var(--countdown-fill-border);\n  border-radius: var(--countdown-fill-border-radius);\n  background-color: var(--countdown-fill-background);\n  box-shadow: var(--countdown-fill-shadow);\n}\n[fill=time][_nghost-%COMP%]   .time[_ngcontent-%COMP%] {\n  border: var(--countdown-fill-border);\n  border-radius: var(--countdown-fill-border-radius);\n  background-color: var(--countdown-fill-background);\n  box-shadow: var(--countdown-fill-shadow);\n}\n[fill=inner-time][_nghost-%COMP%]   .inner-time[_ngcontent-%COMP%] {\n  border: var(--countdown-fill-border);\n  border-radius: var(--countdown-fill-border-radius);\n  background-color: var(--countdown-fill-background);\n  box-shadow: var(--countdown-fill-shadow);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kaWRneS9Eb2N1bWVudHMvR2l0SHViL0luZmluaXR5L3NyYy9hcHAvY29tcG9uZW50cy9jb3VudGRvd24tdGltZXIvY291bnRkb3duLXRpbWVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2NvdW50ZG93bi10aW1lci9jb3VudGRvd24tdGltZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBT0E7RUFDRSx1QkFBQTtFQUNBLHdCQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtFQUNBLGtDQUFBO0VBQ0EsbUNBQUE7RUFFQSw2QkFBQTtFQUNBLG1DQUFBO0VBQ0Esd0NBQUE7RUFDQSw2QkFBQTtFQUVBLDZCQUFBO0VBQ0EsNEJBQUE7RUFFQSw0Q0FBQTtFQUVBLGNBQUE7QUNWRjtBRFlFO0VBQ0UsK0JBQUE7RUFDQSxpQ0FBQTtFQUVBLHVCQUFBO0VBQ0EsaUJBQUE7QUNYSjtBRGNFO0VBQ0Usc0NBQUE7RUFDQSxvQ0FBQTtFQUVBLGFBQUE7RUFDQSxvREFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUNiSjtBRGVJO0VBQ0UsY0FBQTtFQUNBLGtDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsVUFBQTtBQ2JOO0FEZ0JJO0VBQ0UsY0FBQTtFQUNBLG1DQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBS0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ2xCTjtBRHNCRTtFQUNFLDBDQUFBO0VBQ0EsNENBQUE7QUNwQko7QUR5QkU7RUEzRUEsb0NBQUE7RUFDQSxrREFBQTtFQUNBLGtEQUFBO0VBQ0Esd0NBQUE7QUNzREY7QUR3QkU7RUFqRkEsb0NBQUE7RUFDQSxrREFBQTtFQUNBLGtEQUFBO0VBQ0Esd0NBQUE7QUM2REY7QUR1QkU7RUF2RkEsb0NBQUE7RUFDQSxrREFBQTtFQUNBLGtEQUFBO0VBQ0Esd0NBQUE7QUNvRUYiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NvdW50ZG93bi10aW1lci9jb3VudGRvd24tdGltZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWl4aW4gZmlsbC1jb250YWluZXIoKXtcbiAgYm9yZGVyOiB2YXIoLS1jb3VudGRvd24tZmlsbC1ib3JkZXIpO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1jb3VudGRvd24tZmlsbC1ib3JkZXItcmFkaXVzKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY291bnRkb3duLWZpbGwtYmFja2dyb3VuZCk7XG4gIGJveC1zaGFkb3c6IHZhcigtLWNvdW50ZG93bi1maWxsLXNoYWRvdyk7XG59XG5cbjpob3N0IHtcbiAgLS1jb3VudGRvd24tbWFyZ2luOiAwcHg7XG4gIC0tY291bnRkb3duLXBhZGRpbmc6IDBweDtcbiAgLS1jb3VudGRvd24tdGltZS1tYXJnaW46IDBweDtcbiAgLS1jb3VudGRvd24tdGltZS1wYWRkaW5nOiAwcHg7XG4gIC0tY291bnRkb3duLWlubmVyLXRpbWUtbWFyZ2luOiAycHg7XG4gIC0tY291bnRkb3duLWlubmVyLXRpbWUtcGFkZGluZzogMHB4O1xuXG4gIC0tY291bnRkb3duLWZpbGwtYm9yZGVyOiBub25lO1xuICAtLWNvdW50ZG93bi1maWxsLWJvcmRlci1yYWRpdXM6IDBweDtcbiAgLS1jb3VudGRvd24tZmlsbC1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgLS1jb3VudGRvd24tZmlsbC1zaGFkb3c6IG5vbmU7XG5cbiAgLS1jb3VudGRvd24tdmFsdWUtY29sb3I6ICNDQ0M7XG4gIC0tY291bnRkb3duLXVuaXQtY29sb3I6ICNDQ0M7XG5cbiAgLS1jb3VudGRvd24tdGltZS1mbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XG5cbiAgZGlzcGxheTogYmxvY2s7XG5cbiAgLmNvdW50ZG93biB7XG4gICAgbWFyZ2luOiB2YXIoLS1jb3VudGRvd24tbWFyZ2luKTtcbiAgICBwYWRkaW5nOiB2YXIoLS1jb3VudGRvd24tcGFkZGluZyk7XG5cbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgfVxuXG4gIC50aW1lIHtcbiAgICBwYWRkaW5nOiB2YXIoLS1jb3VudGRvd24tdGltZS1wYWRkaW5nKTtcbiAgICBtYXJnaW46IHZhcigtLWNvdW50ZG93bi10aW1lLW1hcmdpbik7XG5cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiB2YXIoLS1jb3VudGRvd24tdGltZS1mbGV4LWRpcmVjdGlvbik7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgIC50aW1lLXVuaXQge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBjb2xvcjogdmFyKC0tY291bnRkb3duLXVuaXQtY29sb3IpO1xuICAgICAgZm9udC1zaXplOiAwLjdlbTtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICB3aWR0aDogMmV4O1xuICAgIH1cblxuICAgIC50aW1lLXZhbHVlIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgY29sb3I6IHZhcigtLWNvdW50ZG93bi12YWx1ZS1jb2xvcik7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBmb250LXNpemU6IDFlbTtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxZW07XG4gICAgICBtaW4taGVpZ2h0OiAxZW07XG5cbiAgICAgIC8vIE1ha2Ugc3VyZSB3ZSBhbHdheXMgaGF2ZSBzcGFjZSBmb3IgdHdvIGNoYXJhY3RlcnNcbiAgICAgIC8vIEFzIGNoICh3aWR0aCBvZiB0aGUgY2hhcmFjdGVyICcwJykgdW5pdCBpcyBub3QgMTAwJSBzdXBwb3J0ZWQsIHdlIHdpbGwgdXNlIGV4IChoZWlnaHQgb2YgdGhlICd4JyBjaGFyYWN0ZXIpIGFzIGEgZmFsbGJhY2tcbiAgICAgIC8vIFNlZTogaHR0cHM6Ly93d3cucXVpcmtzbW9kZS5vcmcvY3NzL3VuaXRzLXZhbHVlcy9cbiAgICAgIG1pbi13aWR0aDogMi4yZXg7IC8vIFRoZSAneCcgY2hhcmFjdGVyIGlzIHNlbWktc3F1YXJlIGNoYXIsIHRoYXQncyB3aHkgd2Ugc2V0IDIuMmV4XG4gICAgICBtaW4td2lkdGg6IDIuMWNoOyAvLyBjaCBpcyB0aGUgb25seSBmb250IHVuaXQgYmFzZWQgb24gdGhlIHdpZHRoIG9mIGNoYXJhY3RlcnNcbiAgICB9XG4gIH1cblxuICAuaW5uZXItdGltZSB7XG4gICAgbWFyZ2luOiB2YXIoLS1jb3VudGRvd24taW5uZXItdGltZS1tYXJnaW4pO1xuICAgIHBhZGRpbmc6IHZhcigtLWNvdW50ZG93bi1pbm5lci10aW1lLXBhZGRpbmcpO1xuICB9XG59XG5cbjpob3N0KFtmaWxsPVwiY291bnRkb3duXCJdKSB7XG4gIC5jb3VudGRvd24ge1xuICAgIEBpbmNsdWRlIGZpbGwtY29udGFpbmVyKCk7XG4gIH1cbn1cblxuOmhvc3QoW2ZpbGw9XCJ0aW1lXCJdKSB7XG4gIC50aW1lIHtcbiAgICBAaW5jbHVkZSBmaWxsLWNvbnRhaW5lcigpO1xuICB9XG59XG5cbjpob3N0KFtmaWxsPVwiaW5uZXItdGltZVwiXSkge1xuICAuaW5uZXItdGltZSB7XG4gICAgQGluY2x1ZGUgZmlsbC1jb250YWluZXIoKTtcbiAgfVxufVxuIiwiOmhvc3Qge1xuICAtLWNvdW50ZG93bi1tYXJnaW46IDBweDtcbiAgLS1jb3VudGRvd24tcGFkZGluZzogMHB4O1xuICAtLWNvdW50ZG93bi10aW1lLW1hcmdpbjogMHB4O1xuICAtLWNvdW50ZG93bi10aW1lLXBhZGRpbmc6IDBweDtcbiAgLS1jb3VudGRvd24taW5uZXItdGltZS1tYXJnaW46IDJweDtcbiAgLS1jb3VudGRvd24taW5uZXItdGltZS1wYWRkaW5nOiAwcHg7XG4gIC0tY291bnRkb3duLWZpbGwtYm9yZGVyOiBub25lO1xuICAtLWNvdW50ZG93bi1maWxsLWJvcmRlci1yYWRpdXM6IDBweDtcbiAgLS1jb3VudGRvd24tZmlsbC1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgLS1jb3VudGRvd24tZmlsbC1zaGFkb3c6IG5vbmU7XG4gIC0tY291bnRkb3duLXZhbHVlLWNvbG9yOiAjQ0NDO1xuICAtLWNvdW50ZG93bi11bml0LWNvbG9yOiAjQ0NDO1xuICAtLWNvdW50ZG93bi10aW1lLWZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcbiAgZGlzcGxheTogYmxvY2s7XG59XG46aG9zdCAuY291bnRkb3duIHtcbiAgbWFyZ2luOiB2YXIoLS1jb3VudGRvd24tbWFyZ2luKTtcbiAgcGFkZGluZzogdmFyKC0tY291bnRkb3duLXBhZGRpbmcpO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC13cmFwOiBub3dyYXA7XG59XG46aG9zdCAudGltZSB7XG4gIHBhZGRpbmc6IHZhcigtLWNvdW50ZG93bi10aW1lLXBhZGRpbmcpO1xuICBtYXJnaW46IHZhcigtLWNvdW50ZG93bi10aW1lLW1hcmdpbik7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiB2YXIoLS1jb3VudGRvd24tdGltZS1mbGV4LWRpcmVjdGlvbik7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuOmhvc3QgLnRpbWUgLnRpbWUtdW5pdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjb2xvcjogdmFyKC0tY291bnRkb3duLXVuaXQtY29sb3IpO1xuICBmb250LXNpemU6IDAuN2VtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHdpZHRoOiAyZXg7XG59XG46aG9zdCAudGltZSAudGltZS12YWx1ZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjb2xvcjogdmFyKC0tY291bnRkb3duLXZhbHVlLWNvbG9yKTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDFlbTtcbiAgbGluZS1oZWlnaHQ6IDFlbTtcbiAgbWluLWhlaWdodDogMWVtO1xuICBtaW4td2lkdGg6IDIuMmV4O1xuICBtaW4td2lkdGg6IDIuMWNoO1xufVxuOmhvc3QgLmlubmVyLXRpbWUge1xuICBtYXJnaW46IHZhcigtLWNvdW50ZG93bi1pbm5lci10aW1lLW1hcmdpbik7XG4gIHBhZGRpbmc6IHZhcigtLWNvdW50ZG93bi1pbm5lci10aW1lLXBhZGRpbmcpO1xufVxuXG46aG9zdChbZmlsbD1jb3VudGRvd25dKSAuY291bnRkb3duIHtcbiAgYm9yZGVyOiB2YXIoLS1jb3VudGRvd24tZmlsbC1ib3JkZXIpO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1jb3VudGRvd24tZmlsbC1ib3JkZXItcmFkaXVzKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY291bnRkb3duLWZpbGwtYmFja2dyb3VuZCk7XG4gIGJveC1zaGFkb3c6IHZhcigtLWNvdW50ZG93bi1maWxsLXNoYWRvdyk7XG59XG5cbjpob3N0KFtmaWxsPXRpbWVdKSAudGltZSB7XG4gIGJvcmRlcjogdmFyKC0tY291bnRkb3duLWZpbGwtYm9yZGVyKTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tY291bnRkb3duLWZpbGwtYm9yZGVyLXJhZGl1cyk7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvdW50ZG93bi1maWxsLWJhY2tncm91bmQpO1xuICBib3gtc2hhZG93OiB2YXIoLS1jb3VudGRvd24tZmlsbC1zaGFkb3cpO1xufVxuXG46aG9zdChbZmlsbD1pbm5lci10aW1lXSkgLmlubmVyLXRpbWUge1xuICBib3JkZXI6IHZhcigtLWNvdW50ZG93bi1maWxsLWJvcmRlcik7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWNvdW50ZG93bi1maWxsLWJvcmRlci1yYWRpdXMpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb3VudGRvd24tZmlsbC1iYWNrZ3JvdW5kKTtcbiAgYm94LXNoYWRvdzogdmFyKC0tY291bnRkb3duLWZpbGwtc2hhZG93KTtcbn0iXX0= */"];
    /***/
  },

  /***/
  "./src/app/components/countdown-timer/countdown-timer.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/components/countdown-timer/countdown-timer.component.ts ***!
    \*************************************************************************/

  /*! exports provided: CountdownTimerComponent */

  /***/
  function srcAppComponentsCountdownTimerCountdownTimerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CountdownTimerComponent", function () {
      return CountdownTimerComponent;
    });
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var dayjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! dayjs */
    "./node_modules/dayjs/dayjs.min.js");
    /* harmony import */


    var dayjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_2__);

    var CountdownTimerComponent = /*#__PURE__*/function () {
      function CountdownTimerComponent() {
        var _this = this;

        _classCallCheck(this, CountdownTimerComponent);

        this._initialUnit = 'hour';
        this._endingUnit = 'second';
        this._updateInterval = Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["interval"])(1000);
        this._unsubscribeSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"](); // DIVISORS
        // 60 seconds * 60 (minutes) * 24 (hours) = 86400 seconds = 1 day

        this._dayDivisor = 60 * 60 * 24; // 60 seconds * 60 (minutes) = 3600 seconds = 1 hour

        this._hourDivisor = 60 * 60; // 60 seconds = 1 minute

        this._minuteDivisor = 60;
        this._secondDivisor = 1; // MODULUS
        // Neutral modulus

        this._dayModulus = function (secondsLeft) {
          return secondsLeft;
        }; // The modulus operator (%) returns the division remainder.
        // To figure out how many hours are left after taking in consideration the days, we should do:
        //    (secondsLeft % hourModulus) / hourDivisor
        // In 1 day there are 86400 seconds, and in 1 hour 3600 seconds. 1 day + 1 hour = 90000 seconds
        //    (90000s % 86400s) / 3600s = 1h


        this._hourModulus = function (secondsLeft) {
          return secondsLeft % _this._dayDivisor;
        };

        this._minuteModulus = function (secondsLeft) {
          return secondsLeft % _this._hourDivisor;
        };

        this._secondModulus = function (secondsLeft) {
          return secondsLeft % _this._minuteDivisor;
        };
      }

      _createClass(CountdownTimerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this._updateInterval.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(this._unsubscribeSubject)).subscribe(function (val) {
            var secondsLeft = _this2._endingTime.diff(dayjs__WEBPACK_IMPORTED_MODULE_2__(), 'second');

            _this2._daysLeft = Math.floor(_this2._dayModulus(secondsLeft) / _this2._dayDivisor);
            _this2._hoursLeft = Math.floor(_this2._hourModulus(secondsLeft) / _this2._hourDivisor);
            _this2._minutesLeft = Math.floor(_this2._minuteModulus(secondsLeft) / _this2._minuteDivisor);
            _this2._secondsLeft = Math.floor(_this2._secondModulus(secondsLeft) / _this2._secondDivisor);
          }, function (error) {
            return console.error(error);
          } // () => console.log('[takeUntil] complete')
          );
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._unsubscribeSubject.next();

          this._unsubscribeSubject.complete();
        }
      }, {
        key: "end",
        set: function set(endingTime) {
          this._endingTime = endingTime !== undefined && endingTime !== null ? dayjs__WEBPACK_IMPORTED_MODULE_2__(endingTime) : dayjs__WEBPACK_IMPORTED_MODULE_2__();
        }
      }, {
        key: "units",
        set: function set(units) {
          // 'day', 'hour, 'minute', 'second'
          this._initialUnit = units !== undefined && units.from !== undefined && units.from !== null ? units.from : 'hour';
          this._endingUnit = units !== undefined && units.to !== undefined && units.to !== null ? units.to : 'second'; // For 'day' unit, use the default modulus
          // Adjust modulus depending on the unit

          if (this._initialUnit === 'hour') {
            // Cancelation modulus
            this._dayModulus = function (secondsLeft) {
              return 1;
            }; // Neutral modulus


            this._hourModulus = function (secondsLeft) {
              return secondsLeft;
            };
          }

          if (this._initialUnit === 'minute') {
            // Cancelation modulus
            this._dayModulus = function (secondsLeft) {
              return 1;
            };

            this._hourModulus = function (secondsLeft) {
              return 1;
            }; // Neutral modulus


            this._minuteModulus = function (secondsLeft) {
              return secondsLeft;
            };
          }

          if (this._initialUnit === 'second') {
            // Cancelation modulus
            this._dayModulus = function (secondsLeft) {
              return 1;
            };

            this._hourModulus = function (secondsLeft) {
              return 1;
            };

            this._minuteModulus = function (secondsLeft) {
              return 1;
            }; // Neutral modulus


            this._secondModulus = function (secondsLeft) {
              return secondsLeft;
            };
          }
        }
      }]);

      return CountdownTimerComponent;
    }();
    /***/

  }
}]);
//# sourceMappingURL=default~custom-components-custom-components-module-ngfactory~deals-details-deals-details-module-ngfa~45199ebd-es5.js.map