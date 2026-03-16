require("../common/vendor.js"),
  (global.webpackJsonp = global.webpackJsonp || []).push([
    ["pages/public/news-goods/index"],
    {
      "7ab9": function (t, e, n) {
        n.d(e, "b", function () {
          return o;
        }),
          n.d(e, "c", function () {
            return a;
          }),
          n.d(e, "a", function () {
            return i;
          });
        var i = {
            wkLoginModal: function () {
              return n
                .e("components/wk-login-modal/index")
                .then(n.bind(null, "5198"));
            },
            wkSkeletons: function () {
              return n
                .e("components/wk-skeletons/index")
                .then(n.bind(null, "d3c1"));
            },
          },
          o = function () {
            var n = this,
              t =
                (n.$createElement,
                n._self._c,
                n.__map(n.list, function (t, e) {
                  return {
                    $orig: n.__get_orig(t),
                    g0: 0 < t.zans.length || 0 < t.pls.length,
                  };
                }));
            n.$mp.data = Object.assign({}, { $root: { l0: t } });
          },
          a = [];
      },
      "85b0": function (t, e, n) {
        n.r(e);
        var i,
          o = n("9c8c"),
          a = n.n(o);
        for (i in o)
          ["default"].indexOf(i) < 0 &&
            (function (t) {
              n.d(e, t, function () {
                return o[t];
              });
            })(i);
        e.default = a.a;
      },
      "91f4": function (t, e, n) {},
      "9c8c": function (t, n, a) {
        (function (e) {
          var t = a("4ea4");
          Object.defineProperty(n, "__esModule", { value: !0 }),
            (n.default = void 0);
          var i = t(a("9523"));
          function o(e, t) {
            var n,
              i = Object.keys(e);
            return (
              Object.getOwnPropertySymbols &&
                ((n = Object.getOwnPropertySymbols(e)),
                t &&
                  (n = n.filter(function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable;
                  })),
                i.push.apply(i, n)),
              i
            );
          }
          t = {
            data: function () {
              return {
                tools: this.$tools,
                list: [],
                page: 1,
                swiperList: [],
                isLoading: 1,
                set: { add_on: 0 },
              };
            },
            onLoad: function (t) {
              e.hideTabBar();
            },
            onShow: function () {
              this.init();
            },
            computed: (function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2
                  ? o(Object(n), !0).forEach(function (t) {
                      (0, i.default)(e, t, n[t]);
                    })
                  : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(
                      e,
                      Object.getOwnPropertyDescriptors(n)
                    )
                  : o(Object(n)).forEach(function (t) {
                      Object.defineProperty(
                        e,
                        t,
                        Object.getOwnPropertyDescriptor(n, t)
                      );
                    });
              }
              return e;
            })(
              {},
              (0, a("26cb").mapState)({
                basicSet: function (t) {
                  return t.init.basicSet;
                },
              })
            ),
            methods: {
              init: function () {
                this.newsList();
              },
              circleSet: function () {
                var e = this;
                this.$api("friend_circle.circleSet").then(function (t) {
                  e.set = t.data.set;
                });
              },
              newsList: function () {
                var e = this;
                this.$api("news.goods_list", { page: e.page }).then(function (
                  t
                ) {
                  e.isLoading = 0;
                  t = t.data.list;
                  1 == e.page
                    ? (e.list = t)
                    : 0 < t.length
                    ? (e.list = e.list.concat(t))
                    : (e.page = e.page - 1);
                });
              },
              onReachBottom: function () {
                (this.page = this.page + 1), this.newsList();
              },
              getSlide: function () {
                var e = this;
                this.$api("index.getSlide", { type: 2 }).then(function (t) {
                  (e.swiperList = t.data.list), (e.isLoading = 0);
                });
              },
              navtoMy: function () {
                this.$Router.push({
                  path: "/pages/public/news-goods/my",
                  query: {},
                });
              },
              detail: function (t) {
                this.$Router.push({
                  path: "/pages/public/news-goods/detail",
                  query: { id: t },
                });
              },
              pub: function () {
                this.$Router.push({
                  path: "/pages/public/news-goods/add",
                  query: {},
                });
              },
            },
          };
          n.default = t;
        }).call(this, a("543d").default);
      },
      da50: function (t, e, n) {
        n.r(e);
        var i,
          o = n("7ab9"),
          a = n("85b0");
        for (i in a)
          ["default"].indexOf(i) < 0 &&
            (function (t) {
              n.d(e, t, function () {
                return a[t];
              });
            })(i);
        n("e1a7");
        var r = n("f0c5"),
          o = Object(r.a)(
            a.default,
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
        e.default = o.exports;
      },
      e1a7: function (t, e, n) {
        var i = n("91f4");
        n.n(i).a;
      },
      f52e: function (t, e, i) {
        (function (t, e) {
          var n = i("4ea4");
          i("f0a5"), n(i("66fd"));
          n = n(i("da50"));
          (t.__webpack_require_UNI_MP_PLUGIN__ = i), e(n.default);
        }).call(this, i("bc2e").default, i("543d").createPage);
      },
    },
    [["f52e", "common/runtime", "common/vendor"]],
  ]);
