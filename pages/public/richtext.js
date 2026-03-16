require("./common/vendor.js"),
  (global.webpackJsonp = global.webpackJsonp || []).push([
    ["pages/public/richtext"],
    {
      "488d": function (t, n, e) {
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
      "533c": function (t, n, e) {
        (function (e) {
          Object.defineProperty(n, "__esModule", { value: !0 }),
            (n.default = void 0);
          var t = {
            components: {},
            data: function () {
              return { richText: "" };
            },
            computed: {},
            onLoad: function () {
              this.init();
            },
            methods: {
              init: function () {
                return Promise.all([this.getRichText()]);
              },
              getRichText: function () {
                var n = this;
                this.$api("richtext", { id: this.$Route.query.id }).then(
                  function (t) {
                    (n.richText = t.data),
                      e.setNavigationBarTitle({ title: t.data.title });
                  }
                );
              },
            },
          };
          n.default = t;
        }).call(this, e("543d").default);
      },
      "5f81": function (t, n, e) {},
      "76d1": function (t, n, e) {
        var i = e("5f81");
        e.n(i).a;
      },
      8177: function (t, n, e) {
        e.r(n);
        var i,
          c = e("488d"),
          u = e("cd01");
        for (i in u)
          ["default"].indexOf(i) < 0 &&
            (function (t) {
              e.d(n, t, function () {
                return u[t];
              });
            })(i);
        e("76d1");
        var o = e("f0c5"),
          c = Object(o.a)(
            u.default,
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
      "8d3b": function (t, n, i) {
        (function (t, n) {
          var e = i("4ea4");
          i("f0a5"), e(i("66fd"));
          e = e(i("8177"));
          (t.__webpack_require_UNI_MP_PLUGIN__ = i), n(e.default);
        }).call(this, i("bc2e").default, i("543d").createPage);
      },
      cd01: function (t, n, e) {
        e.r(n);
        var i,
          c = e("533c"),
          u = e.n(c);
        for (i in c)
          ["default"].indexOf(i) < 0 &&
            (function (t) {
              e.d(n, t, function () {
                return c[t];
              });
            })(i);
        n.default = u.a;
      },
    },
    [["8d3b", "common/runtime", "common/vendor"]],
  ]);
