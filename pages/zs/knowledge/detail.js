(global.webpackJsonp = global.webpackJsonp || []).push([
  ["pages/zs/knowledge/detail"],
  {
    "3d42": function (t, e, n) {},
    "7bb8": function (t, e, r) {
      (function (t, e) {
        var n = r("4ea4");
        r("f0a5"), n(r("66fd"));
        n = n(r("81e5"));
        (t.__webpack_require_UNI_MP_PLUGIN__ = r), e(n.default);
      }).call(this, r("bc2e").default, r("543d").createPage);
    },
    "81e5": function (t, e, n) {
      n.r(e);
      var r,
        i = n("dc66"),
        o = n("e52f");
      for (r in o)
        ["default"].indexOf(r) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return o[t];
            });
          })(r);
      n("a166");
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
    a166: function (t, e, n) {
      var r = n("3d42");
      n.n(r).a;
    },
    dafc: function (t, e, n) {
      (function (r) {
        var t = n("4ea4");
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.default = void 0);
        var i = t(n("9523"));
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
            return { zs: { id: 0 } };
          },
          onLoad: function (t) {
            var e = this.$Route.query;
            (this.zs.id = e.id), this.init();
          },
          onShow: function () {},
          computed: (function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = null != arguments[t] ? arguments[t] : {};
              t % 2
                ? o(Object(n), !0).forEach(function (t) {
                    (0, i.default)(e, t, n[t]);
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
            (0, n("26cb").mapState)({
              basicSet: function (t) {
                return t.init.basicSet;
              },
            })
          ),
          methods: {
            init: function () {
              var e = this,
                n = this;
              this.$api("content.zs_detail", { id: n.zs.id }).then(function (
                t
              ) {
                (n.zs = t.data.zs),
                  e.$refs.content.setContent(n.zs.content),
                  r.setNavigationBarTitle({ title: n.zs.title });
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
      }).call(this, n("543d").default);
    },
    dc66: function (t, e, n) {
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
    e52f: function (t, e, n) {
      n.r(e);
      var r,
        i = n("dafc"),
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
  },
  [["7bb8", "common/runtime", "common/vendor"]],
]);
