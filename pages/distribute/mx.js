(global.webpackJsonp = global.webpackJsonp || []).push([
  ["pages/distribute/mx"],
  {
    "1c2c": function (t, e, n) {},
    "25db": function (t, e, n) {
      var o = n("1c2c");
      n.n(o).a;
    },
    "55a9": function (t, e, n) {
      (function (o) {
        var t = n("4ea4");
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.default = void 0);
        var r = t(n("9523"));
        function i(e, t) {
          var n,
            o = Object.keys(e);
          return (
            Object.getOwnPropertySymbols &&
              ((n = Object.getOwnPropertySymbols(e)),
              t &&
                (n = n.filter(function (t) {
                  return Object.getOwnPropertyDescriptor(e, t).enumerable;
                })),
              o.push.apply(o, n)),
            o
          );
        }
        t = {
          components: {},
          data: function () {
            return { distribute: {}, team_count: 0, order_count: 0, board: {} };
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
            (0, n("26cb").mapState)({
              loginUser: function (t) {
                return t.user.loginUser;
              },
            })
          ),
          onLoad: function () {},
          onShow: function () {
            this.init();
          },
          onReady: function () {},
          methods: {
            init: function () {
              var n = this;
              this.$api("distribute.distribute_init", {}).then(function (t) {
                var e = t.data.distribute;
                e &&
                  ((n.distribute = e),
                  (n.team_count = t.data.team_count),
                  (n.order_count = t.data.order_count),
                  n.$store.commit("loginUser", t.data.user),
                  o.setNavigationBarTitle({ title: e.name }));
              });
            },
            navtoRoom: function (t) {
              this.$Router.push({
                path: "/pages/index/room-detail",
                query: { id: t },
              });
            },
            navToTx: function () {
              this.$Router.push({ path: "/pages/distribute/tx" });
            },
            navToTxmx: function () {
              this.$Router.push({ path: "/pages/distribute/tx-mx" });
            },
            navToHome: function () {
              this.$Router.pushTab({ path: "/pages/index/index" });
            },
            navToAdd: function () {
              this.$Router.push({ path: "/pages/distribute/add", query: {} });
            },
          },
        };
        e.default = t;
      }).call(this, n("543d").default);
    },
    "734d": function (t, e, o) {
      (function (t, e) {
        var n = o("4ea4");
        o("f0a5"), n(o("66fd"));
        n = n(o("ddd6"));
        (t.__webpack_require_UNI_MP_PLUGIN__ = o), e(n.default);
      }).call(this, o("bc2e").default, o("543d").createPage);
    },
    c8ac: function (t, e, n) {
      n.r(e);
      var o,
        r = n("55a9"),
        i = n.n(r);
      for (o in r)
        ["default"].indexOf(o) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return r[t];
            });
          })(o);
      e.default = i.a;
    },
    ddd6: function (t, e, n) {
      n.r(e);
      var o,
        r = n("e412"),
        i = n("c8ac");
      for (o in i)
        ["default"].indexOf(o) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return i[t];
            });
          })(o);
      n("25db");
      var u = n("f0c5"),
        r = Object(u.a)(
          i.default,
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
    e412: function (t, e, n) {
      n.d(e, "b", function () {
        return o;
      }),
        n.d(e, "c", function () {
          return r;
        }),
        n.d(e, "a", function () {});
      var o = function () {
          this.$createElement;
          this._self._c;
        },
        r = [];
    },
  },
  [["734d", "common/runtime", "common/vendor"]],
]);
