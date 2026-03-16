require("../common/vendor.js"),
  (global.webpackJsonp = global.webpackJsonp || []).push([
    ["pages/public/poster/index"],
    {
      "2f4e": function (e, n, t) {
        t.d(n, "b", function () {
          return o;
        }),
          t.d(n, "c", function () {
            return r;
          }),
          t.d(n, "a", function () {});
        var o = function () {
            this.$createElement;
            this._self._c;
          },
          r = [];
      },
      5980: function (e, n, t) {
        t.r(n);
        var o,
          r = t("d007"),
          i = t.n(r);
        for (o in r)
          ["default"].indexOf(o) < 0 &&
            (function (e) {
              t.d(n, e, function () {
                return r[e];
              });
            })(o);
        n.default = i.a;
      },
      "5c67": function (e, n, t) {
        t.r(n);
        var o,
          r = t("2f4e"),
          i = t("5980");
        for (o in i)
          ["default"].indexOf(o) < 0 &&
            (function (e) {
              t.d(n, e, function () {
                return i[e];
              });
            })(o);
        var a = t("f0c5"),
          r = Object(a.a)(
            i.default,
            r.b,
            r.c,
            !1,
            null,
            null,
            null,
            !1,
            r.a,
            void 0
          );
        n.default = r.exports;
      },
      d007: function (e, t, o) {
        (function (n) {
          Object.defineProperty(t, "__esModule", { value: !0 }),
            (t.default = void 0);
          var e = {
            components: {
              shInvitePoster: function () {
                Promise.all([
                  o.e("common/vendor"),
                  o.e("pages/public/poster/children/sh-invite-poster"),
                ])
                  .then(
                    function () {
                      return resolve(o("10cf"));
                    }.bind(null, o)
                  )
                  .catch(o.oe);
              },
              shGoodsPoster: function () {
                Promise.all([
                  o.e("common/vendor"),
                  o.e("pages/public/common/vendor"),
                  o.e("pages/public/poster/children/sh-goods-poster"),
                ])
                  .then(
                    function () {
                      return resolve(o("9e41"));
                    }.bind(null, o)
                  )
                  .catch(o.oe);
              },
              shGrouponPoster: function () {
                Promise.all([
                  o.e("common/vendor"),
                  o.e("pages/public/common/vendor"),
                  o.e("pages/public/poster/children/sh-groupon-poster"),
                ])
                  .then(
                    function () {
                      return resolve(o("a5de"));
                    }.bind(null, o)
                  )
                  .catch(o.oe);
              },
            },
            data: function () {
              return { posterType: "", CustomBar: this.CustomBar };
            },
            computed: {},
            onLoad: function (e) {
              switch (((this.posterType = e.posterType), e.posterType)) {
                case "user":
                  n.setNavigationBarTitle({ title: "邀请好友" });
                  break;
                case "goods":
                  n.setNavigationBarTitle({ title: "商品海报" });
                  break;
                case "groupon":
                  n.setNavigationBarTitle({ title: "拼团海报" });
                  break;
                default:
                  n.setNavigationBarTitle({ title: "海报" });
              }
            },
            methods: {
              getShareInfo: function (e) {
                this.shareInfo = e;
              },
            },
          };
          t.default = e;
        }).call(this, o("543d").default);
      },
      de9f: function (e, n, o) {
        (function (e, n) {
          var t = o("4ea4");
          o("f0a5"), t(o("66fd"));
          t = t(o("5c67"));
          (e.__webpack_require_UNI_MP_PLUGIN__ = o), n(t.default);
        }).call(this, o("bc2e").default, o("543d").createPage);
      },
    },
    [["de9f", "common/runtime", "common/vendor"]],
  ]);
