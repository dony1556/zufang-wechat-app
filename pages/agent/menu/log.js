(global.webpackJsonp = global.webpackJsonp || []).push([
  ["pages/agent/menu/log"],
  {
    3787: function (t, n, e) {
      e.d(n, "b", function () {
        return r;
      }),
        e.d(n, "c", function () {
          return o;
        }),
        e.d(n, "a", function () {});
      var r = function () {
          this.$createElement;
          this._self._c;
        },
        o = [];
    },
    9541: function (t, n, e) {
      var r = e("ef03");
      e.n(r).a;
    },
    b16f: function (t, n, e) {
      e.r(n);
      var r,
        o = e("df0b"),
        i = e.n(o);
      for (r in o)
        ["default"].indexOf(r) < 0 &&
          (function (t) {
            e.d(n, t, function () {
              return o[t];
            });
          })(r);
      n.default = i.a;
    },
    b58c: function (t, n, r) {
      (function (t, n) {
        var e = r("4ea4");
        r("f0a5"), e(r("66fd"));
        e = e(r("d441"));
        (t.__webpack_require_UNI_MP_PLUGIN__ = r), n(e.default);
      }).call(this, r("bc2e").default, r("543d").createPage);
    },
    d441: function (t, n, e) {
      e.r(n);
      var r,
        o = e("3787"),
        i = e("b16f");
      for (r in i)
        ["default"].indexOf(r) < 0 &&
          (function (t) {
            e.d(n, t, function () {
              return i[t];
            });
          })(r);
      e("9541");
      var u = e("f0c5"),
        o = Object(u.a)(
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
      n.default = o.exports;
    },
    df0b: function (t, n, e) {
      var r = e("4ea4");
      Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.default = void 0);
      var o = r(e("9523"));
      function i(n, t) {
        var e,
          r = Object.keys(n);
        return (
          Object.getOwnPropertySymbols &&
            ((e = Object.getOwnPropertySymbols(n)),
            t &&
              (e = e.filter(function (t) {
                return Object.getOwnPropertyDescriptor(n, t).enumerable;
              })),
            r.push.apply(r, e)),
          r
        );
      }
      e = {
        components: {},
        data: function () {
          return { list: [], emptyData: { tip: "暂无相关数据" } };
        },
        computed: (function (n) {
          for (var t = 1; t < arguments.length; t++) {
            var e = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? i(Object(e), !0).forEach(function (t) {
                  (0, o.default)(n, t, e[t]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(e))
              : i(Object(e)).forEach(function (t) {
                  Object.defineProperty(
                    n,
                    t,
                    Object.getOwnPropertyDescriptor(e, t)
                  );
                });
          }
          return n;
        })(
          {},
          (0, e("26cb").mapState)({
            isLogin: function (t) {
              return t.user.isLogin;
            },
            loginUser: function (t) {
              return t.user.loginUser;
            },
            agent: function (t) {
              return t.user.agent;
            },
            basicSet: function (t) {
              return t.init.basicSet;
            },
          })
        ),
        onLoad: function () {},
        onShow: function () {
          this.init();
        },
        methods: {
          init: function () {
            this.menu_log_list();
          },
          menu_log_list: function () {
            var n = this;
            this.$api("agent.menu_log_list", { agent_id: n.agent.id }).then(
              function (t) {
                0 === t.errno && (n.list = t.data.list);
              }
            );
          },
        },
      };
      n.default = e;
    },
    ef03: function (t, n, e) {},
  },
  [["b58c", "common/runtime", "common/vendor"]],
]);
