(global.webpackJsonp = global.webpackJsonp || []).push([
  ["pages/agent/index"],
  {
    "18eb": function (t, e, n) {
      var o = n("bf3e");
      n.n(o).a;
    },
    "4c4b": function (t, e, o) {
      (function (t, e) {
        var n = o("4ea4");
        o("f0a5"), n(o("66fd"));
        n = n(o("d3ff"));
        (t.__webpack_require_UNI_MP_PLUGIN__ = o), e(n.default);
      }).call(this, o("bc2e").default, o("543d").createPage);
    },
    "4d77": function (t, e, r) {
      (function (n) {
        var t = r("4ea4");
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.default = void 0);
        var o = t(r("9523"));
        function a(e, t) {
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
          data: function () {
            return {
              user: {},
              total_see: 0,
              total_user: 0,
              board: {},
              agent: { id: 0 },
              is_pub: 0,
            };
          },
          computed: (function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = null != arguments[t] ? arguments[t] : {};
              t % 2
                ? a(Object(n), !0).forEach(function (t) {
                    (0, o.default)(e, t, n[t]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    e,
                    Object.getOwnPropertyDescriptors(n)
                  )
                : a(Object(n)).forEach(function (t) {
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
            (0, r("26cb").mapState)({
              loginUser: function (t) {
                return t.user.loginUser;
              },
            })
          ),
          onLoad: function (t) {},
          onShow: function () {
            this.init();
          },
          methods: {
            init: function () {
              var n = this;
              this.$api("agent.agent_init2", {}).then(function (t) {
                var e = t.data.user;
                (n.user = e),
                  (n.total_see = t.data.total_see),
                  (n.total_user = t.data.total_user);
                e = t.data.agent;
                e &&
                  ((n.agent = e),
                  n.$store.commit("agent", e),
                  (n.is_pub = t.data.is_pub),
                  n.$store.commit("role", "agent"));
              });
            },
            navToHome: function () {
              this.$Router.pushTab({ path: "/pages/index/index" });
            },
            navToAdd: function () {
              this.$Router.push({ path: "/pages/agent/register", query: {} });
            },
            navtoStaff: function () {
              this.$Router.push({ path: "/pages/agent/staff/list", query: {} });
            },
            navToMenu: function () {
              this.$Router.push({ path: "/pages/agent/menu/index", query: {} });
            },
            navToSet: function () {
              this.$Router.push({
                path: "/pages/agent/basic-info",
                query: { agent_id: this.agent.id },
              });
            },
            help: function () {
              this.$Router.push({ path: "/pages/agent/help/list", query: {} });
            },
            share_log: function () {
              this.$Router.push({ path: "/pages/work/share-log", query: {} });
            },
            user_log: function () {
              this.$Router.push({ path: "/pages/work/user-log", query: {} });
            },
            yy_log: function () {
              this.$Router.push({ path: "/pages/agent/yy/list", query: {} });
            },
            pub_house: function () {
              0 < this.is_pub
                ? this.$Router.push({
                    path: "/pages/agent/house/pub",
                    query: {},
                  })
                : this.$tools.toast("可发布房源数量已用完,请购买套餐");
            },
            my_house: function () {
              this.$Router.push({ path: "/pages/agent/house/list", query: {} });
            },
            share_haibao: function () {
              var e = this;
              n.showLoading({ title: "正在加载中" }),
                this.$api("poster.userPoster", {}).then(function (t) {
                  0 == t.errno
                    ? ((e.board = t.data.obj),
                      setTimeout(function () {
                        e.$refs.wkPainter.show(), n.hideLoading();
                      }, 300))
                    : e.$tools.toast(t.msg);
                });
            },
          },
        };
        e.default = t;
      }).call(this, r("543d").default);
    },
    "525a": function (t, e, n) {
      n.d(e, "b", function () {
        return a;
      }),
        n.d(e, "c", function () {
          return r;
        }),
        n.d(e, "a", function () {
          return o;
        });
      var o = {
          wkPainter: function () {
            return Promise.all([
              n.e("common/vendor"),
              n.e("components/wk-painter/index"),
            ]).then(n.bind(null, "092f"));
          },
        },
        a = function () {
          this.$createElement;
          this._self._c;
        },
        r = [];
    },
    "96a3": function (t, e, n) {
      n.r(e);
      var o,
        a = n("4d77"),
        r = n.n(a);
      for (o in a)
        ["default"].indexOf(o) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return a[t];
            });
          })(o);
      e.default = r.a;
    },
    bf3e: function (t, e, n) {},
    d3ff: function (t, e, n) {
      n.r(e);
      var o,
        a = n("525a"),
        r = n("96a3");
      for (o in r)
        ["default"].indexOf(o) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return r[t];
            });
          })(o);
      n("18eb");
      var u = n("f0c5"),
        a = Object(u.a)(
          r.default,
          a.b,
          a.c,
          !1,
          null,
          null,
          null,
          !1,
          a.a,
          void 0
        );
      e.default = a.exports;
    },
  },
  [["4c4b", "common/runtime", "common/vendor"]],
]);
