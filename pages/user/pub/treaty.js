require("../common/vendor.js"),
  (global.webpackJsonp = global.webpackJsonp || []).push([
    ["pages/user/pub/treaty"],
    {
      "07e7": function (n, e, t) {
        t.d(e, "b", function () {
          return u;
        }),
          t.d(e, "c", function () {
            return a;
          }),
          t.d(e, "a", function () {
            return o;
          });
        var o = {
            wkParser: function () {
              return Promise.all([
                t.e("common/vendor"),
                t.e("components/wk-parser/index"),
              ]).then(t.bind(null, "faee"));
            },
          },
          u = function () {
            this.$createElement;
            this._self._c;
          },
          a = [];
      },
      "106b": function (n, e, t) {
        t.r(e);
        var o,
          u = t("07e7"),
          a = t("f8c8");
        for (o in a)
          ["default"].indexOf(o) < 0 &&
            (function (n) {
              t.d(e, n, function () {
                return a[n];
              });
            })(o);
        t("da09");
        var r = t("f0c5"),
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
      "38fa": function (n, e, o) {
        (function (n, e) {
          var t = o("4ea4");
          o("f0a5"), t(o("66fd"));
          t = t(o("106b"));
          (n.__webpack_require_UNI_MP_PLUGIN__ = o), e(t.default);
        }).call(this, o("bc2e").default, o("543d").createPage);
      },
      "405e": function (n, e, t) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.default = void 0),
          t("26cb"),
          (e.default = {
            data: function () {
              return {};
            },
            onLoad: function (n) {
              this.init();
            },
            computed: {},
            onShow: function () {},
            methods: {
              init: function () {
                var e = this;
                this.$api("index.pub_treaty", {}).then(function (n) {
                  n = n.data.pub_treaty;
                  e.$refs.content.setContent(n);
                });
              },
            },
          });
      },
      "6ca2": function (n, e, t) {},
      da09: function (n, e, t) {
        var o = t("6ca2");
        t.n(o).a;
      },
      f8c8: function (n, e, t) {
        t.r(e);
        var o,
          u = t("405e"),
          a = t.n(u);
        for (o in u)
          ["default"].indexOf(o) < 0 &&
            (function (n) {
              t.d(e, n, function () {
                return u[n];
              });
            })(o);
        e.default = a.a;
      },
    },
    [["38fa", "common/runtime", "common/vendor"]],
  ]);
