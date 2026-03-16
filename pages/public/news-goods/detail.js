require("../common/vendor.js"),
  (global.webpackJsonp = global.webpackJsonp || []).push([
    ["pages/public/news-goods/detail"],
    {
      "078f": function (e, t, n) {
        n.r(t);
        var i,
          o = n("fd56"),
          r = n.n(o);
        for (i in o)
          ["default"].indexOf(i) < 0 &&
            (function (e) {
              n.d(t, e, function () {
                return o[e];
              });
            })(i);
        t.default = r.a;
      },
      7125: function (e, t, n) {
        var i = n("bb8a");
        n.n(i).a;
      },
      "8ddc": function (e, t, n) {
        n.r(t);
        var i,
          o = n("d5ac"),
          r = n("078f");
        for (i in r)
          ["default"].indexOf(i) < 0 &&
            (function (e) {
              n.d(t, e, function () {
                return r[e];
              });
            })(i);
        n("7125");
        var a = n("f0c5"),
          o = Object(a.a)(
            r.default,
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
      ab68: function (e, t, i) {
        (function (e, t) {
          var n = i("4ea4");
          i("f0a5"), n(i("66fd"));
          n = n(i("8ddc"));
          (e.__webpack_require_UNI_MP_PLUGIN__ = i), t(n.default);
        }).call(this, i("bc2e").default, i("543d").createPage);
      },
      bb8a: function (e, t, n) {},
      d5ac: function (e, t, n) {
        n.d(t, "b", function () {
          return o;
        }),
          n.d(t, "c", function () {
            return r;
          }),
          n.d(t, "a", function () {
            return i;
          });
        var i = {
            wkLoginModal: function () {
              return n
                .e("components/wk-login-modal/index")
                .then(n.bind(null, "5198"));
            },
          },
          o = function () {
            this.$createElement;
            this._self._c;
          },
          r = [];
      },
      fd56: function (e, n, r) {
        (function (t) {
          var e = r("4ea4");
          Object.defineProperty(n, "__esModule", { value: !0 }),
            (n.default = void 0);
          var i = e(r("9523"));
          function o(t, e) {
            var n,
              i = Object.keys(t);
            return (
              Object.getOwnPropertySymbols &&
                ((n = Object.getOwnPropertySymbols(t)),
                e &&
                  (n = n.filter(function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                  })),
                i.push.apply(i, n)),
              i
            );
          }
          e = {
            data: function () {
              return {
                tools: this.$tools,
                id: 0,
                page: 1,
                swiperList: [],
                isLoading: 1,
                detail: {},
              };
            },
            onLoad: function (e) {
              t.showShareMenu({
                withShareTicket: !1,
                menus: ["shareAppMessage", "shareTimeline"],
              });
            },
            onShow: function () {
              (this.id = this.$Route.query.id), this.init();
            },
            computed: (function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2
                  ? o(Object(n), !0).forEach(function (e) {
                      (0, i.default)(t, e, n[e]);
                    })
                  : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(
                      t,
                      Object.getOwnPropertyDescriptors(n)
                    )
                  : o(Object(n)).forEach(function (e) {
                      Object.defineProperty(
                        t,
                        e,
                        Object.getOwnPropertyDescriptor(n, e)
                      );
                    });
              }
              return t;
            })(
              {},
              (0, r("26cb").mapState)({
                basicSet: function (e) {
                  return e.init.basicSet;
                },
              })
            ),
            methods: {
              init: function () {
                var t = this;
                this.$api("news.goods_detail", { id: t.id }).then(function (e) {
                  t.detail = e.data.detail;
                });
              },
              onShareTimeline: function (e) {
                return { title: this.detail.title };
              },
            },
          };
          n.default = e;
        }).call(this, r("bc2e").default);
      },
    },
    [["ab68", "common/runtime", "common/vendor"]],
  ]);
