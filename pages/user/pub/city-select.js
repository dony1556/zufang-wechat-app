require("../common/vendor.js"),
  (global.webpackJsonp = global.webpackJsonp || []).push([
    ["pages/user/pub/city-select"],
    {
      "03fc": function (t, n, e) {
        e.r(n);
        var i,
          c = e("b47e"),
          o = e("7a5a");
        for (i in o)
          ["default"].indexOf(i) < 0 &&
            (function (t) {
              e.d(n, t, function () {
                return o[t];
              });
            })(i);
        e("7ed1");
        var u = e("f0c5"),
          c = Object(u.a)(
            o.default,
            c.b,
            c.c,
            !1,
            null,
            null,
            null,
            !1,
            c.a,
            void 0
          );
        n.default = c.exports;
      },
      "70d8": function (t, n, e) {},
      "7a5a": function (t, n, e) {
        e.r(n);
        var i,
          c = e("d895"),
          o = e.n(c);
        for (i in c)
          ["default"].indexOf(i) < 0 &&
            (function (t) {
              e.d(n, t, function () {
                return c[t];
              });
            })(i);
        n.default = o.a;
      },
      "7ed1": function (t, n, e) {
        var i = e("70d8");
        e.n(i).a;
      },
      9768: function (t, n, i) {
        (function (t, n) {
          var e = i("4ea4");
          i("f0a5"), e(i("66fd"));
          e = e(i("03fc"));
          (t.__webpack_require_UNI_MP_PLUGIN__ = i), n(e.default);
        }).call(this, i("bc2e").default, i("543d").createPage);
      },
      b47e: function (t, n, e) {
        e.d(n, "b", function () {
          return i;
        }),
          e.d(n, "c", function () {
            return c;
          }),
          e.d(n, "a", function () {});
        var i = function () {
            this.$createElement;
            this._self._c;
          },
          c = [];
      },
      d895: function (t, n, e) {
        Object.defineProperty(n, "__esModule", { value: !0 }),
          (n.default = void 0),
          e("26cb"),
          (n.default = {
            components: {},
            data: function () {
              return { cityList: [] };
            },
            onLoad: function () {
              this.init();
            },
            onShow: function () {},
            computed: {},
            methods: {
              init: function () {
                var n = this;
                this.$api("index.select_city_init", {}).then(function (t) {
                  n.cityList = t.data.list;
                });
              },
              selectCity: function (t) {
                (t = this.cityList[t]),
                  (t = { cityId: t.id, cityName: t.city_name });
                this.$store.commit("pubCity", t), this.$Router.back();
              },
            },
          });
      },
    },
    [["9768", "common/runtime", "common/vendor"]],
  ]);
