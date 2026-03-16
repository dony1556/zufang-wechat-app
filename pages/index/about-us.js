(global.webpackJsonp = global.webpackJsonp || []).push([
  ["pages/index/about-us"],
  {
    "56e4": function (e, t, n) {
      n.r(t);
      var r,
        o = n("a912"),
        c = n.n(o);
      for (r in o)
        ["default"].indexOf(r) < 0 &&
          (function (e) {
            n.d(t, e, function () {
              return o[e];
            });
          })(r);
      t.default = c.a;
    },
    "5fe4": function (e, t, r) {
      (function (e, t) {
        var n = r("4ea4");
        r("f0a5"), n(r("66fd"));
        n = n(r("e44f"));
        (e.__webpack_require_UNI_MP_PLUGIN__ = r), t(n.default);
      }).call(this, r("bc2e").default, r("543d").createPage);
    },
    "682d": function (e, t, n) {
      n.d(t, "b", function () {
        return o;
      }),
        n.d(t, "c", function () {
          return c;
        }),
        n.d(t, "a", function () {
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
    "954b": function (e, t, n) {
      var r = n("ee55");
      n.n(r).a;
    },
    a912: function (e, n, c) {
      (function (t) {
        var e = c("4ea4");
        Object.defineProperty(n, "__esModule", { value: !0 }),
          (n.default = void 0);
        var r = e(c("9523"));
        function o(t, e) {
          var n,
            r = Object.keys(t);
          return (
            Object.getOwnPropertySymbols &&
              ((n = Object.getOwnPropertySymbols(t)),
              e &&
                (n = n.filter(function (e) {
                  return Object.getOwnPropertyDescriptor(t, e).enumerable;
                })),
              r.push.apply(r, n)),
            r
          );
        }
        e = {
          data: function () {
            return {};
          },
          onLoad: function (e) {
            this.init();
          },
          computed: (function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var n = null != arguments[e] ? arguments[e] : {};
              e % 2
                ? o(Object(n), !0).forEach(function (e) {
                    (0, r.default)(t, e, n[e]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    t,
                    Object.getOwnPropertyDescriptors(n)
                  )
                : o(Object(n)).forEach(function (e) {
                    Object.defineProperty(
                      t,
                      e,
                      Object.getOwnPropertyDescriptor(n, e)
                    );
                  });
            }
            return t;
          })(
            {},
            (0, c("26cb").mapState)({
              basicSet: function (e) {
                return e.init.basicSet;
              },
            })
          ),
          onShow: function () {},
          methods: {
            init: function () {
              this.$refs.content.setContent(this.basicSet.about_us);
            },
            call: function () {
              var e = this.basicSet.phone;
              t.makePhoneCall({ phoneNumber: e });
            },
          },
        };
        n.default = e;
      }).call(this, c("543d").default);
    },
    e44f: function (e, t, n) {
      n.r(t);
      var r,
        o = n("682d"),
        c = n("56e4");
      for (r in c)
        ["default"].indexOf(r) < 0 &&
          (function (e) {
            n.d(t, e, function () {
              return c[e];
            });
          })(r);
      n("954b");
      var u = n("f0c5"),
        o = Object(u.a)(
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
      t.default = o.exports;
    },
    ee55: function (e, t, n) {},
  },
  [["5fe4", "common/runtime", "common/vendor"]],
]);
