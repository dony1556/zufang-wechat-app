(global.webpackJsonp = global.webpackJsonp || []).push([
  ["pages/zs/mmlc/detail"],
  {
    "53bc": function (t, e, c) {
      (function (n) {
        var t = c("4ea4");
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.default = void 0);
        var i = t(c("9523"));
        function r(e, t) {
          var n,
            i = Object.keys(e);
          return (
            Object.getOwnPropertySymbols &&
              ((n = Object.getOwnPropertySymbols(e)),
              t &&
                (n = n.filter(function (t) {
                  return Object.getOwnPropertyDescriptor(e, t).enumerable;
                })),
              i.push.apply(i, n)),
            i
          );
        }
        t = {
          data: function () {
            return { mm: { id: 0 }, index: 0, index2: 0 };
          },
          onLoad: function (t) {
            var e = this.$Route.query;
            (this.index = e.index), (this.index2 = e.index2), this.init();
          },
          onShow: function () {},
          computed: (function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = null != arguments[t] ? arguments[t] : {};
              t % 2
                ? r(Object(n), !0).forEach(function (t) {
                    (0, i.default)(e, t, n[t]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    e,
                    Object.getOwnPropertyDescriptors(n)
                  )
                : r(Object(n)).forEach(function (t) {
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
            (0, c("26cb").mapState)({
              basicSet: function (t) {
                return t.init.basicSet;
              },
            })
          ),
          methods: {
            init: function () {
              var e = this;
              this.$api("content.mm_detail", {
                index: e.index,
                index2: e.index2,
              }).then(function (t) {
                (e.mm = t.data.mm),
                  n.setNavigationBarTitle({ title: e.mm.title });
              });
            },
            detail: function (t) {
              this.$Router.push({
                path: "/pages/index/intro-detail",
                query: { id: t },
              });
            },
          },
        };
        e.default = t;
      }).call(this, c("543d").default);
    },
    6287: function (t, e, n) {},
    "97a5": function (t, e, n) {
      n.d(e, "b", function () {
        return i;
      }),
        n.d(e, "c", function () {
          return r;
        }),
        n.d(e, "a", function () {});
      var i = function () {
          this.$createElement;
          this._self._c;
        },
        r = [];
    },
    a821: function (t, e, n) {
      n.r(e);
      var i,
        r = n("97a5"),
        c = n("dca2");
      for (i in c)
        ["default"].indexOf(i) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return c[t];
            });
          })(i);
      n("e6c6");
      var a = n("f0c5"),
        r = Object(a.a)(
          c.default,
          r.b,
          r.c,
          !1,
          null,
          null,
          null,
          !1,
          r.a,
          void 0
        );
      e.default = r.exports;
    },
    c8e6: function (t, e, i) {
      (function (t, e) {
        var n = i("4ea4");
        i("f0a5"), n(i("66fd"));
        n = n(i("a821"));
        (t.__webpack_require_UNI_MP_PLUGIN__ = i), e(n.default);
      }).call(this, i("bc2e").default, i("543d").createPage);
    },
    dca2: function (t, e, n) {
      n.r(e);
      var i,
        r = n("53bc"),
        c = n.n(r);
      for (i in r)
        ["default"].indexOf(i) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return r[t];
            });
          })(i);
      e.default = c.a;
    },
    e6c6: function (t, e, n) {
      var i = n("6287");
      n.n(i).a;
    },
  },
  [["c8e6", "common/runtime", "common/vendor"]],
]);
