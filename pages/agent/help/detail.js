(global.webpackJsonp = global.webpackJsonp || []).push([
  ["pages/agent/help/detail"],
  {
    "086e": function (t, e, n) {
      n.r(e);
      var r,
        i = n("f0da"),
        o = n.n(i);
      for (r in i)
        ["default"].indexOf(r) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return i[t];
            });
          })(r);
      e.default = o.a;
    },
    "0dc9": function (t, e, r) {
      (function (t, e) {
        var n = r("4ea4");
        r("f0a5"), n(r("66fd"));
        n = n(r("3005"));
        (t.__webpack_require_UNI_MP_PLUGIN__ = r), e(n.default);
      }).call(this, r("bc2e").default, r("543d").createPage);
    },
    "2c18": function (t, e, n) {
      var r = n("8578");
      n.n(r).a;
    },
    3005: function (t, e, n) {
      n.r(e);
      var r,
        i = n("e1ed"),
        o = n("086e");
      for (r in o)
        ["default"].indexOf(r) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return o[t];
            });
          })(r);
      n("2c18");
      var c = n("f0c5"),
        i = Object(c.a)(
          o.default,
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
    8578: function (t, e, n) {},
    e1ed: function (t, e, n) {
      n.d(e, "b", function () {
        return i;
      }),
        n.d(e, "c", function () {
          return o;
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
        i = function () {
          this.$createElement;
          this._self._c;
        },
        o = [];
    },
    f0da: function (t, e, o) {
      (function (n) {
        var t = o("4ea4");
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.default = void 0);
        var r = t(o("9523"));
        function i(e, t) {
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
                ? i(Object(n), !0).forEach(function (t) {
                    (0, r.default)(e, t, n[t]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    e,
                    Object.getOwnPropertyDescriptors(n)
                  )
                : i(Object(n)).forEach(function (t) {
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
            (0, o("26cb").mapState)({
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
      }).call(this, o("543d").default);
    },
  },
  [["0dc9", "common/runtime", "common/vendor"]],
]);
