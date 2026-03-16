require("../common/vendor.js"),
  (global.webpackJsonp = global.webpackJsonp || []).push([
    ["pages/public/help/detail"],
    {
      "0f8d": function (e, t, r) {
        (function (e, t) {
          var n = r("4ea4");
          r("f0a5"), n(r("66fd"));
          n = n(r("663f"));
          (e.__webpack_require_UNI_MP_PLUGIN__ = r), t(n.default);
        }).call(this, r("bc2e").default, r("543d").createPage);
      },
      "24c7": function (e, t, n) {},
      "58e7": function (e, t, n) {
        var r = n("24c7");
        n.n(r).a;
      },
      "5ab2": function (e, t, n) {
        n.d(t, "b", function () {
          return o;
        }),
          n.d(t, "c", function () {
            return i;
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
          i = [];
      },
      "663f": function (e, t, n) {
        n.r(t);
        var r,
          o = n("5ab2"),
          i = n("85ae");
        for (r in i)
          ["default"].indexOf(r) < 0 &&
            (function (e) {
              n.d(t, e, function () {
                return i[e];
              });
            })(r);
        n("58e7");
        var c = n("f0c5"),
          o = Object(c.a)(
            i.default,
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
      "85ae": function (e, t, n) {
        n.r(t);
        var r,
          o = n("edc7"),
          i = n.n(o);
        for (r in o)
          ["default"].indexOf(r) < 0 &&
            (function (e) {
              n.d(t, e, function () {
                return o[e];
              });
            })(r);
        t.default = i.a;
      },
      edc7: function (e, t, i) {
        (function (n) {
          var e = i("4ea4");
          Object.defineProperty(t, "__esModule", { value: !0 }),
            (t.default = void 0);
          var r = e(i("9523"));
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
              return { list: [], id: 0 };
            },
            onLoad: function (e) {
              (this.id = this.$Route.query.id), this.init();
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
              (0, i("26cb").mapState)({
                basicSet: function (e) {
                  return e.init.basicSet;
                },
              })
            ),
            onShow: function () {},
            methods: {
              init: function () {
                var t = this;
                this.$api("content.help_detail", { id: t.id }).then(function (
                  e
                ) {
                  e = e.data.help;
                  t.$refs.content.setContent(e.content),
                    n.setNavigationBarTitle({ title: e.problem_title });
                });
              },
            },
          };
          t.default = e;
        }).call(this, i("543d").default);
      },
    },
    [["0f8d", "common/runtime", "common/vendor"]],
  ]);
