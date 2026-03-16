(global.webpackJsonp = global.webpackJsonp || []).push([
  ["pages/distribute/see/list"],
  {
    "499a": function (n, t, e) {
      e.r(t);
      var a,
        i = e("d71f"),
        o = e("bf39");
      for (a in o)
        ["default"].indexOf(a) < 0 &&
          (function (n) {
            e.d(t, n, function () {
              return o[n];
            });
          })(a);
      e("4a3f");
      var f = e("f0c5"),
        f = Object(f.a)(
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
      t.default = f.exports;
    },
    "4a3f": function (n, t, e) {
      var a = e("c82d");
      e.n(a).a;
    },
    af6c: function (n, t, e) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0),
        e("26cb"),
        (t.default = {
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
              this.shareLog();
            },
            shareLog: function () {
              var t = this;
              t.$api("distribute.see_list", { page: t.page }).then(function (
                n
              ) {
                n = n.data.list;
                1 == t.page
                  ? (t.list = n)
                  : 0 < n.length
                  ? (t.list = t.list.concat(n))
                  : (t.page = t.page - 1);
              });
            },
            onReachBottom: function () {
              (this.page = this.page + 1), this.shareLog();
            },
          },
        });
    },
    b6d7: function (n, t, a) {
      (function (n, t) {
        var e = a("4ea4");
        a("f0a5"), e(a("66fd"));
        e = e(a("499a"));
        (n.__webpack_require_UNI_MP_PLUGIN__ = a), t(e.default);
      }).call(this, a("bc2e").default, a("543d").createPage);
    },
    bf39: function (n, t, e) {
      e.r(t);
      var a,
        i = e("af6c"),
        o = e.n(i);
      for (a in i)
        ["default"].indexOf(a) < 0 &&
          (function (n) {
            e.d(t, n, function () {
              return i[n];
            });
          })(a);
      t.default = o.a;
    },
    c82d: function (n, t, e) {},
    d71f: function (n, t, e) {
      e.d(t, "b", function () {
        return a;
      }),
        e.d(t, "c", function () {
          return i;
        }),
        e.d(t, "a", function () {});
      var a = function () {
          this.$createElement;
          this._self._c;
        },
        i = [];
    },
  },
  [["b6d7", "common/runtime", "common/vendor"]],
]);
