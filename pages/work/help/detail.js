(global.webpackJsonp = global.webpackJsonp || []).push([
  ["pages/work/help/detail"],
  {
    "264e": function (t, e, n) {
      var r = n("74b7");
      n.n(r).a;
    },
    4522: function (t, e, n) {
      n.r(e);
      var r,
        o = n("e5a1"),
        i = n("52b5");
      for (r in i)
        ["default"].indexOf(r) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return i[t];
            });
          })(r);
      n("264e");
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
      e.default = o.exports;
    },
    "52b5": function (t, e, n) {
      n.r(e);
      var r,
        o = n("9be8"),
        i = n.n(o);
      for (r in o)
        ["default"].indexOf(r) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return o[t];
            });
          })(r);
      e.default = i.a;
    },
    "74b7": function (t, e, n) {},
    "9be8": function (t, e, i) {
      (function (n) {
        var t = i("4ea4");
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.default = void 0);
        var r = t(i("9523"));
        function o(e, t) {
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
        t = {
          data: function () {
            return { list: [], id: 0 };
          },
          onLoad: function (t) {
            (this.id = this.$Route.query.id), this.init();
          },
          computed: (function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = null != arguments[t] ? arguments[t] : {};
              t % 2
                ? o(Object(n), !0).forEach(function (t) {
                    (0, r.default)(e, t, n[t]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    e,
                    Object.getOwnPropertyDescriptors(n)
                  )
                : o(Object(n)).forEach(function (t) {
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
            (0, i("26cb").mapState)({
              basicSet: function (t) {
                return t.init.basicSet;
              },
            })
          ),
          onShow: function () {},
          methods: {
            init: function () {
              var e = this;
              this.$api("content.help_detail", { id: e.id }).then(function (t) {
                t = t.data.help;
                e.$refs.content.setContent(t.content),
                  n.setNavigationBarTitle({ title: t.problem_title });
              });
            },
          },
        };
        e.default = t;
      }).call(this, i("543d").default);
    },
    c6c5: function (t, e, r) {
      (function (t, e) {
        var n = r("4ea4");
        r("f0a5"), n(r("66fd"));
        n = n(r("4522"));
        (t.__webpack_require_UNI_MP_PLUGIN__ = r), e(n.default);
      }).call(this, r("bc2e").default, r("543d").createPage);
    },
    e5a1: function (t, e, n) {
      n.d(e, "b", function () {
        return o;
      }),
        n.d(e, "c", function () {
          return i;
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
        i = [];
    },
  },
  [["c6c5", "common/runtime", "common/vendor"]],
]);
