(global.webpackJsonp = global.webpackJsonp || []).push([
  ["pages/distribute/team-list"],
  {
    1870: function (t, n, e) {
      Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.default = void 0),
        e("26cb"),
        (n.default = {
          components: {},
          data: function () {
            return { list: [], page: 1 };
          },
          onLoad: function () {
            this.init();
          },
          onShow: function () {},
          methods: {
            init: function () {
              this.team_list();
            },
            team_list: function () {
              var n = this;
              n.$api("distribute.team_list", { page: n.page }).then(function (
                t
              ) {
                t = t.data.list;
                1 == n.page
                  ? (n.list = t)
                  : 0 < t.length
                  ? (n.list = n.list.concat(t))
                  : (n.page = n.page - 1);
              });
            },
            onReachBottom: function () {
              (this.page = this.page + 1), this.team_list();
            },
          },
        });
    },
    "52de": function (t, n, e) {
      e.d(n, "b", function () {
        return a;
      }),
        e.d(n, "c", function () {
          return i;
        }),
        e.d(n, "a", function () {});
      var a = function () {
          this.$createElement;
          this._self._c;
        },
        i = [];
    },
    "9a64": function (t, n, e) {},
    a587: function (t, n, e) {
      e.r(n);
      var a,
        i = e("52de"),
        o = e("adde");
      for (a in o)
        ["default"].indexOf(a) < 0 &&
          (function (t) {
            e.d(n, t, function () {
              return o[t];
            });
          })(a);
      e("ff33");
      var u = e("f0c5"),
        i = Object(u.a)(
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
      n.default = i.exports;
    },
    adde: function (t, n, e) {
      e.r(n);
      var a,
        i = e("1870"),
        o = e.n(i);
      for (a in i)
        ["default"].indexOf(a) < 0 &&
          (function (t) {
            e.d(n, t, function () {
              return i[t];
            });
          })(a);
      n.default = o.a;
    },
    bc1b: function (t, n, a) {
      (function (t, n) {
        var e = a("4ea4");
        a("f0a5"), e(a("66fd"));
        e = e(a("a587"));
        (t.__webpack_require_UNI_MP_PLUGIN__ = a), n(e.default);
      }).call(this, a("bc2e").default, a("543d").createPage);
    },
    ff33: function (t, n, e) {
      var a = e("9a64");
      e.n(a).a;
    },
  },
  [["bc1b", "common/runtime", "common/vendor"]],
]);
