require("../common/vendor.js"),
  (global.webpackJsonp = global.webpackJsonp || []).push([
    ["pages/house/newhouse/info"],
    {
      "02e2": function (n, t, e) {
        e.d(t, "b", function () {
          return i;
        }),
          e.d(t, "c", function () {
            return o;
          }),
          e.d(t, "a", function () {});
        var i = function () {
            this.$createElement;
            this._self._c;
          },
          o = [];
      },
      6254: function (n, t, e) {
        e.r(t);
        var i,
          o = e("02e2"),
          u = e("cad8");
        for (i in u)
          ["default"].indexOf(i) < 0 &&
            (function (n) {
              e.d(t, n, function () {
                return u[n];
              });
            })(i);
        e("8dd1");
        var a = e("f0c5"),
          o = Object(a.a)(
            u.default,
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
        t.default = o.exports;
      },
      "8dd1": function (n, t, e) {
        var i = e("9f75");
        e.n(i).a;
      },
      "9f75": function (n, t, e) {},
      cad8: function (n, t, e) {
        e.r(t);
        var i,
          o = e("d734"),
          u = e.n(o);
        for (i in o)
          ["default"].indexOf(i) < 0 &&
            (function (n) {
              e.d(t, n, function () {
                return o[n];
              });
            })(i);
        t.default = u.a;
      },
      d734: function (n, t, i) {
        (function (e) {
          Object.defineProperty(t, "__esModule", { value: !0 }),
            (t.default = void 0),
            i("26cb");
          var n = {
            components: {},
            data: function () {
              return { isLoading: 1, house: {}, id: 0 };
            },
            onLoad: function () {
              var n = this.$Route.query;
              (this.id = n.id), this.init();
            },
            onShow: function () {},
            computed: {},
            methods: {
              init: function () {
                this.get_info();
              },
              get_info: function () {
                var t = this;
                this.$api("newhouse.get_info", { id: t.id }).then(function (n) {
                  (t.house = n.data.house),
                    e.setNavigationBarTitle({ title: t.house.title });
                });
              },
            },
          };
          t.default = n;
        }).call(this, i("543d").default);
      },
      ede0: function (n, t, i) {
        (function (n, t) {
          var e = i("4ea4");
          i("f0a5"), e(i("66fd"));
          e = e(i("6254"));
          (n.__webpack_require_UNI_MP_PLUGIN__ = i), t(e.default);
        }).call(this, i("bc2e").default, i("543d").createPage);
      },
    },
    [["ede0", "common/runtime", "common/vendor"]],
  ]);
