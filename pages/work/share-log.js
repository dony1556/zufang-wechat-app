(global.webpackJsonp = global.webpackJsonp || []).push([
  ["pages/work/share-log"],
  {
    "1cb5": function (n, t, e) {
      e.d(t, "b", function () {
        return a;
      }),
        e.d(t, "c", function () {
          return i;
        }),
        e.d(t, "a", function () {
          return o;
        });
      var o = {
          wkLoginModal: function () {
            return e
              .e("components/wk-login-modal/index")
              .then(e.bind(null, "5198"));
          },
        },
        a = function () {
          this.$createElement;
          this._self._c;
        },
        i = [];
    },
    "9bfc": function (n, t, e) {},
    "9f43": function (n, t, o) {
      (function (n, t) {
        var e = o("4ea4");
        o("f0a5"), e(o("66fd"));
        e = e(o("a59a"));
        (n.__webpack_require_UNI_MP_PLUGIN__ = o), t(e.default);
      }).call(this, o("bc2e").default, o("543d").createPage);
    },
    a59a: function (n, t, e) {
      e.r(t);
      var o,
        a = e("1cb5"),
        i = e("bd8c");
      for (o in i)
        ["default"].indexOf(o) < 0 &&
          (function (n) {
            e.d(t, n, function () {
              return i[n];
            });
          })(o);
      e("dae9");
      var c = e("f0c5"),
        a = Object(c.a)(
          i.default,
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
      t.default = a.exports;
    },
    bd8c: function (n, t, e) {
      e.r(t);
      var o,
        a = e("c2f5"),
        i = e.n(a);
      for (o in a)
        ["default"].indexOf(o) < 0 &&
          (function (n) {
            e.d(t, n, function () {
              return a[n];
            });
          })(o);
      t.default = i.a;
    },
    c2f5: function (n, t, e) {
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
              t.$api("work.shareLog", { page: t.page }).then(function (n) {
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
    dae9: function (n, t, e) {
      var o = e("9bfc");
      e.n(o).a;
    },
  },
  [["9f43", "common/runtime", "common/vendor"]],
]);
