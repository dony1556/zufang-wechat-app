require("../common/vendor.js"),
  (global.webpackJsonp = global.webpackJsonp || []).push([
    ["pages/public/help/list"],
    {
      "2646f": function (t, e, n) {
        n.d(e, "b", function () {
          return r;
        }),
          n.d(e, "c", function () {
            return i;
          }),
          n.d(e, "a", function () {});
        var r = function () {
            this.$createElement;
            this._self._c;
          },
          i = [];
      },
      4058: function (t, e, n) {
        var r = n("4ea4");
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.default = void 0);
        var i = r(n("9523"));
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
            return { list: [] };
          },
          onLoad: function (t) {
            this.init();
          },
          onShow: function () {},
          computed: (function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = null != arguments[t] ? arguments[t] : {};
              t % 2
                ? c(Object(n), !0).forEach(function (t) {
                    (0, i.default)(e, t, n[t]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    e,
                    Object.getOwnPropertyDescriptors(n)
                  )
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
          methods: {
            init: function () {
              this.getList();
            },
            toDetail: function (t) {
              this.$Router.push({
                path: "/pages/public/help/detail",
                query: { id: t },
              });
            },
            getList: function () {
              var e = this;
              this.$api("content.help_list", { type: 1 }).then(function (t) {
                e.list = t.data.list;
              });
            },
          },
        };
        e.default = n;
      },
      "88b4": function (t, e, n) {
        n.r(e);
        var r,
          i = n("4058"),
          c = n.n(i);
        for (r in i)
          ["default"].indexOf(r) < 0 &&
            (function (t) {
              n.d(e, t, function () {
                return i[t];
              });
            })(r);
        e.default = c.a;
      },
      a69e: function (t, e, n) {
        var r = n("fdf3");
        n.n(r).a;
      },
      d5e0: function (t, e, n) {
        n.r(e);
        var r,
          i = n("2646f"),
          c = n("88b4");
        for (r in c)
          ["default"].indexOf(r) < 0 &&
            (function (t) {
              n.d(e, t, function () {
                return c[t];
              });
            })(r);
        n("a69e");
        var o = n("f0c5"),
          i = Object(o.a)(
            c.default,
            i.b,
            i.c,
            !1,
            null,
            null,
            null,
            !1,
            i.a,
            void 0
          );
        e.default = i.exports;
      },
      ecc2: function (t, e, r) {
        (function (t, e) {
          var n = r("4ea4");
          r("f0a5"), n(r("66fd"));
          n = n(r("d5e0"));
          (t.__webpack_require_UNI_MP_PLUGIN__ = r), e(n.default);
        }).call(this, r("bc2e").default, r("543d").createPage);
      },
      fdf3: function (t, e, n) {},
    },
    [["ecc2", "common/runtime", "common/vendor"]],
  ]);
