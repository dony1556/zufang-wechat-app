(global.webpackJsonp = global.webpackJsonp || []).push([
  ["pages/work/index"],
  {
    1254: function (t, e, n) {},
    8660: function (t, e, n) {
      var o = n("1254");
      n.n(o).a;
    },
    "8d32": function (t, e, n) {
      n.r(e);
      var o,
        u = n("e664"),
        a = n("c9b2");
      for (o in a)
        ["default"].indexOf(o) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return a[t];
            });
          })(o);
      n("8660");
      var r = n("f0c5"),
        u = Object(r.a)(
          a.default,
          u.b,
          u.c,
          !1,
          null,
          null,
          null,
          !1,
          u.a,
          void 0
        );
      e.default = u.exports;
    },
    a7da: function (t, e, n) {
      (function (n) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.default = void 0);
        var t = {
          data: function () {
            return { user: {}, total_see: 0, total_user: 0, board: {} };
          },
          onLoad: function (t) {
            this.init();
          },
          onShow: function () {},
          methods: {
            init: function () {
              var n = this;
              this.$api("work.workInit", {}).then(function (t) {
                var e = t.data.user;
                (n.user = e),
                  (n.total_see = t.data.total_see),
                  (n.total_user = t.data.total_user),
                  n.$store.commit("role", "fd");
              });
            },
            navToAdd: function () {
              this.$Router.push({ path: "/pages/work/register", query: {} });
            },
            share_log: function () {
              this.$Router.push({ path: "/pages/work/share-log", query: {} });
            },
            user_log: function () {
              this.$Router.push({ path: "/pages/work/user-log", query: {} });
            },
            yy_log: function () {
              this.$Router.push({ path: "/pages/work/yy/list", query: {} });
            },
            pub_house: function () {
              this.$Router.push({ path: "/pages/work/house-pub", query: {} });
            },
            my_house: function () {
              this.$Router.push({ path: "/pages/work/house/list", query: {} });
            },
            help: function () {
              this.$Router.push({ path: "/pages/work/help/list", query: {} });
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
      }).call(this, n("543d").default);
    },
    bcdb: function (t, e, o) {
      (function (t, e) {
        var n = o("4ea4");
        o("f0a5"), n(o("66fd"));
        n = n(o("8d32"));
        (t.__webpack_require_UNI_MP_PLUGIN__ = o), e(n.default);
      }).call(this, o("bc2e").default, o("543d").createPage);
    },
    c9b2: function (t, e, n) {
      n.r(e);
      var o,
        u = n("a7da"),
        a = n.n(u);
      for (o in u)
        ["default"].indexOf(o) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return u[t];
            });
          })(o);
      e.default = a.a;
    },
    e664: function (t, e, n) {
      n.d(e, "b", function () {
        return u;
      }),
        n.d(e, "c", function () {
          return a;
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
        u = function () {
          this.$createElement;
          this._self._c;
        },
        a = [];
    },
  },
  [["bcdb", "common/runtime", "common/vendor"]],
]);
