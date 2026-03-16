(global.webpackJsonp = global.webpackJsonp || []).push([
  ["pages/agent/treaty"],
  {
    "06b6": function (t, e, r) {
      (function (t, e) {
        var n = r("4ea4");
        r("f0a5"), n(r("66fd"));
        n = n(r("bf22"));
        (t.__webpack_require_UNI_MP_PLUGIN__ = r), e(n.default);
      }).call(this, r("bc2e").default, r("543d").createPage);
    },
    6785: function (t, e, n) {
      n.r(e);
      var r,
        o = n("f58d"),
        c = n.n(o);
      for (r in o)
        ["default"].indexOf(r) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return o[t];
            });
          })(r);
      e.default = c.a;
    },
    "82a6": function (t, e, n) {
      n.d(e, "b", function () {
        return o;
      }),
        n.d(e, "c", function () {
          return c;
        }),
        n.d(e, "a", function () {
          return r;
        });
      var r = {
          wkParser: function () {
            return Promise.all([
              n.e("common/vendor"),
              n.e("components/wk-parser/index"),
            ]).then(n.bind(null, "faee"));
          },
        },
        o = function () {
          this.$createElement;
          this._self._c;
        },
        c = [];
    },
    "8dcb": function (t, e, n) {
      var r = n("99f6");
      n.n(r).a;
    },
    "99f6": function (t, e, n) {},
    bf22: function (t, e, n) {
      n.r(e);
      var r,
        o = n("82a6"),
        c = n("6785");
      for (r in c)
        ["default"].indexOf(r) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return c[t];
            });
          })(r);
      n("8dcb");
      var a = n("f0c5"),
        o = Object(a.a)(
          c.default,
          o.b,
          o.c,
          !1,
          null,
          null,
          null,
          !1,
          o.a,
          void 0
        );
      e.default = o.exports;
    },
    f58d: function (t, e, n) {
      var r = n("4ea4");
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0);
      var o = r(n("9523"));
      function c(e, t) {
        var n,
          r = Object.keys(e);
        return (
          Object.getOwnPropertySymbols &&
            ((n = Object.getOwnPropertySymbols(e)),
            t &&
              (n = n.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
            r.push.apply(r, n)),
          r
        );
      }
      n = {
        data: function () {
          return { list: [], store: {} };
        },
        onLoad: function (t) {
          this.init();
        },
        computed: (function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? c(Object(n), !0).forEach(function (t) {
                  (0, o.default)(e, t, n[t]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : c(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
          }
          return e;
        })(
          {},
          (0, n("26cb").mapState)({
            basicSet: function (t) {
              return t.init.basicSet;
            },
          })
        ),
        onShow: function () {},
        methods: {
          init: function () {
            var e = this;
            this.$api("agent.register_treaty", {}).then(function (t) {
              t = t.data.set;
              e.$refs.content.setContent(t.agent_treaty);
            });
          },
        },
      };
      e.default = n;
    },
  },
  [["06b6", "common/runtime", "common/vendor"]],
]);
