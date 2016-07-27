"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

!function (t, e) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? exports.Redux = e() : t.Redux = e();
}(undefined, function () {
  return function (t) {
    function e(r) {
      if (n[r]) return n[r].exports;var o = n[r] = { exports: {}, id: r, loaded: !1 };return t[r].call(o.exports, o, o.exports, e), o.loaded = !0, o.exports;
    }var n = {};return e.m = t, e.c = n, e.p = "", e(0);
  }([function (t, e, n) {
    "use strict";
    function r(t) {
      return t && t.__esModule ? t : { "default": t };
    }e.__esModule = !0, e.compose = e.applyMiddleware = e.bindActionCreators = e.combineReducers = e.createStore = void 0;var o = n(2),
        i = r(o),
        u = n(7),
        c = r(u),
        f = n(6),
        a = r(f),
        s = n(5),
        d = r(s),
        l = n(1),
        p = r(l),
        y = n(3);r(y);e.createStore = i["default"], e.combineReducers = c["default"], e.bindActionCreators = a["default"], e.applyMiddleware = d["default"], e.compose = p["default"];
  }, function (t, e) {
    "use strict";
    function n() {
      for (var t = arguments.length, e = Array(t), n = 0; t > n; n++) {
        e[n] = arguments[n];
      }if (0 === e.length) return function (t) {
        return t;
      };var r = function () {
        var t = e[e.length - 1],
            n = e.slice(0, -1);return { v: function v() {
            return n.reduceRight(function (t, e) {
              return e(t);
            }, t.apply(void 0, arguments));
          } };
      }();return "object" == (typeof r === "undefined" ? "undefined" : _typeof(r)) ? r.v : void 0;
    }e.__esModule = !0, e["default"] = n;
  }, function (t, e, n) {
    "use strict";
    function r(t) {
      return t && t.__esModule ? t : { "default": t };
    }function o(t, e, n) {
      function r() {
        b === h && (b = h.slice());
      }function i() {
        return v;
      }function c(t) {
        if ("function" != typeof t) throw Error("Expected listener to be a function.");var e = !0;return r(), b.push(t), function () {
          if (e) {
            e = !1, r();var n = b.indexOf(t);b.splice(n, 1);
          }
        };
      }function s(t) {
        if (!(0, u["default"])(t)) throw Error("Actions must be plain objects. Use custom middleware for async actions.");if (void 0 === t.type) throw Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');if (x) throw Error("Reducers may not dispatch actions.");try {
          x = !0, v = y(v, t);
        } finally {
          x = !1;
        }for (var e = h = b, n = 0; e.length > n; n++) {
          e[n]();
        }return t;
      }function d(t) {
        if ("function" != typeof t) throw Error("Expected the nextReducer to be a function.");y = t, s({ type: a.INIT });
      }function l() {
        var t,
            e = c;return t = { subscribe: function subscribe(t) {
            function n() {
              t.next && t.next(i());
            }if ("object" != (typeof t === "undefined" ? "undefined" : _typeof(t))) throw new TypeError("Expected the observer to be an object.");n();var r = e(n);return { unsubscribe: r };
          } }, t[f["default"]] = function () {
          return this;
        }, t;
      }var p;if ("function" == typeof e && void 0 === n && (n = e, e = void 0), void 0 !== n) {
        if ("function" != typeof n) throw Error("Expected the enhancer to be a function.");return n(o)(t, e);
      }if ("function" != typeof t) throw Error("Expected the reducer to be a function.");var y = t,
          v = e,
          h = [],
          b = h,
          x = !1;return s({ type: a.INIT }), p = { dispatch: s, subscribe: c, getState: i, replaceReducer: d }, p[f["default"]] = l, p;
    }e.__esModule = !0, e.ActionTypes = void 0, e["default"] = o;var i = n(4),
        u = r(i),
        c = n(11),
        f = r(c),
        a = e.ActionTypes = { INIT: "@@redux/INIT" };
  }, function (t, e) {
    "use strict";
    function n(t) {
      "undefined" != typeof console && "function" == typeof console.error && console.error(t);try {
        throw Error(t);
      } catch (e) {}
    }e.__esModule = !0, e["default"] = n;
  }, function (t, e, n) {
    function r(t) {
      if (!u(t) || l.call(t) != c || i(t)) return !1;var e = o(t);if (null === e) return !0;var n = s.call(e, "constructor") && e.constructor;return "function" == typeof n && n instanceof n && a.call(n) == d;
    }var o = n(8),
        i = n(9),
        u = n(10),
        c = "[object Object]",
        f = Object.prototype,
        a = Function.prototype.toString,
        s = f.hasOwnProperty,
        d = a.call(Object),
        l = f.toString;t.exports = r;
  }, function (t, e, n) {
    "use strict";
    function r(t) {
      return t && t.__esModule ? t : { "default": t };
    }function o() {
      for (var t = arguments.length, e = Array(t), n = 0; t > n; n++) {
        e[n] = arguments[n];
      }return function (t) {
        return function (n, r, o) {
          var u = t(n, r, o),
              f = u.dispatch,
              a = [],
              s = { getState: u.getState, dispatch: function dispatch(t) {
              return f(t);
            } };return a = e.map(function (t) {
            return t(s);
          }), f = c["default"].apply(void 0, a)(u.dispatch), i({}, u, { dispatch: f });
        };
      };
    }e.__esModule = !0;var i = Object.assign || function (t) {
      for (var e = 1; arguments.length > e; e++) {
        var n = arguments[e];for (var r in n) {
          Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
        }
      }return t;
    };e["default"] = o;var u = n(1),
        c = r(u);
  }, function (t, e) {
    "use strict";
    function n(t, e) {
      return function () {
        return e(t.apply(void 0, arguments));
      };
    }function r(t, e) {
      if ("function" == typeof t) return n(t, e);if ("object" != (typeof t === "undefined" ? "undefined" : _typeof(t)) || null === t) throw Error("bindActionCreators expected an object or a function, instead received " + (null === t ? "null" : typeof t === "undefined" ? "undefined" : _typeof(t)) + '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');for (var r = Object.keys(t), o = {}, i = 0; r.length > i; i++) {
        var u = r[i],
            c = t[u];"function" == typeof c && (o[u] = n(c, e));
      }return o;
    }e.__esModule = !0, e["default"] = r;
  }, function (t, e, n) {
    "use strict";
    function r(t) {
      return t && t.__esModule ? t : { "default": t };
    }function o(t, e) {
      var n = e && e.type,
          r = n && '"' + n + '"' || "an action";return "Given action " + r + ', reducer "' + t + '" returned undefined. To ignore an action, you must explicitly return the previous state.';
    }function i(t) {
      Object.keys(t).forEach(function (e) {
        var n = t[e],
            r = n(void 0, { type: c.ActionTypes.INIT });if (void 0 === r) throw Error('Reducer "' + e + '" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.');var o = "@@redux/PROBE_UNKNOWN_ACTION_" + Math.random().toString(36).substring(7).split("").join(".");if (void 0 === n(void 0, { type: o })) throw Error('Reducer "' + e + '" returned undefined when probed with a random type. ' + ("Don't try to handle " + c.ActionTypes.INIT + ' or other actions in "redux/*" ') + "namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined.");
      });
    }function u(t) {
      for (var e = Object.keys(t), n = {}, r = 0; e.length > r; r++) {
        var u = e[r];"function" == typeof t[u] && (n[u] = t[u]);
      }var c,
          f = Object.keys(n);try {
        i(n);
      } catch (a) {
        c = a;
      }return function () {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            e = arguments[1];if (c) throw c;for (var r = !1, i = {}, u = 0; f.length > u; u++) {
          var a = f[u],
              s = n[a],
              d = t[a],
              l = s(d, e);if (void 0 === l) {
            var p = o(a, e);throw Error(p);
          }i[a] = l, r = r || l !== d;
        }return r ? i : t;
      };
    }e.__esModule = !0, e["default"] = u;var c = n(2),
        f = n(4),
        a = (r(f), n(3));r(a);
  }, function (t, e) {
    function n(t) {
      return r(Object(t));
    }var r = Object.getPrototypeOf;t.exports = n;
  }, function (t, e) {
    function n(t) {
      var e = !1;if (null != t && "function" != typeof t.toString) try {
        e = !!(t + "");
      } catch (n) {}return e;
    }t.exports = n;
  }, function (t, e) {
    function n(t) {
      return !!t && "object" == (typeof t === "undefined" ? "undefined" : _typeof(t));
    }t.exports = n;
  }, function (t, e, n) {
    (function (e) {
      "use strict";
      t.exports = n(12)(e || window || this);
    }).call(e, function () {
      return this;
    }());
  }, function (t, e) {
    "use strict";
    t.exports = function (t) {
      var e,
          n = t.Symbol;return "function" == typeof n ? n.observable ? e = n.observable : (e = "function" == typeof n["for"] ? n["for"]("observable") : n("observable"), n.observable = e) : e = "@@observable", e;
    };
  }]);
});

//# sourceMappingURL=redux.min-compiled.js.map