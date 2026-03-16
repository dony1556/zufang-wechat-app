require("../common/vendor.js"),
  (global.webpackJsonp = global.webpackJsonp || []).push([
    ["pages/public/news-goods/my"],
    {
      "0458": function (t, n, e) {
        e.r(n);
        var o,
          i = e("5dc7"),
          r = e("5d93");
        for (o in r)
          ["default"].indexOf(o) < 0 &&
            (function (t) {
              e.d(n, t, function () {
                return r[t];
              });
            })(o);
        e("4810");
        var c = e("f0c5"),
          i = Object(c.a)(
            r.default,
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
      "263d": function (t, n, o) {
        (function (t, n) {
          var e = o("4ea4");
          o("f0a5"), e(o("66fd"));
          e = e(o("0458"));
          (t.__webpack_require_UNI_MP_PLUGIN__ = o), n(e.default);
        }).call(this, o("bc2e").default, o("543d").createPage);
      },
      4250: function (t, e, r) {
        (function (t) {
          var n = r("4ea4");
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.default = void 0);
          var o = n(r("9523"));
          function i(n, t) {
            var e,
              o = Object.keys(n);
            return (
              Object.getOwnPropertySymbols &&
                ((e = Object.getOwnPropertySymbols(n)),
                t &&
                  (e = e.filter(function (t) {
                    return Object.getOwnPropertyDescriptor(n, t).enumerable;
                  })),
                o.push.apply(o, e)),
              o
            );
          }
          n = {
            data: function () {
              return {
                tools: this.$tools,
                list: [],
                isLoading: 1,
                emptyData: { tip: "暂无数据" },
              };
            },
            onLoad: function (t) {},
            onShow: function () {
              this.init();
            },
            computed: (function (n) {
              for (var t = 1; t < arguments.length; t++) {
                var e = null != arguments[t] ? arguments[t] : {};
                t % 2
                  ? i(Object(e), !0).forEach(function (t) {
                      (0, o.default)(n, t, e[t]);
                    })
                  : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(
                      n,
                      Object.getOwnPropertyDescriptors(e)
                    )
                  : i(Object(e)).forEach(function (t) {
                      Object.defineProperty(
                        n,
                        t,
                        Object.getOwnPropertyDescriptor(e, t)
                      );
                    });
              }
              return n;
            })(
              {},
              (0, r("26cb").mapState)({
                basicSet: function (t) {
                  return t.init.basicSet;
                },
              })
            ),
            methods: {
              init: function () {
                return Promise.all([this.myList()]);
              },
              myList: function () {
                var n = this;
                this.$api("news.my_goods_list").then(function (t) {
                  (n.list = t.data.list), (n.isLoading = 0);
                });
              },
              detail: function (t) {},
              del: function (n) {
                var e = this;
                t.showModal({
                  title: "提示",
                  content: "确定要删除么？",
                  cancelText: "取消",
                  confirmText: "删除",
                  success: function (t) {
                    t.confirm &&
                      e.$api("news.goods_delete", { id: n }).then(function (t) {
                        0 == t.errno &&
                          (e.$tools.toast("删除成功"), e.news.my_goods_list());
                      });
                  },
                });
              },
            },
          };
          e.default = n;
        }).call(this, r("543d").default);
      },
      4810: function (t, n, e) {
        var o = e("cb09");
        e.n(o).a;
      },
      "5d93": function (t, n, e) {
        e.r(n);
        var o,
          i = e("4250"),
          r = e.n(i);
        for (o in i)
          ["default"].indexOf(o) < 0 &&
            (function (t) {
              e.d(n, t, function () {
                return i[t];
              });
            })(o);
        n.default = r.a;
      },
      "5dc7": function (t, n, e) {
        e.d(n, "b", function () {
          return i;
        }),
          e.d(n, "c", function () {
            return r;
          }),
          e.d(n, "a", function () {
            return o;
          });
        var o = {
            wkEmpty: function () {
              return e
                .e("components/wk-empty/index")
                .then(e.bind(null, "7090"));
            },
            wkSkeletons: function () {
              return e
                .e("components/wk-skeletons/index")
                .then(e.bind(null, "d3c1"));
            },
          },
          i = function () {
            var e = this,
              t =
                (e.$createElement,
                e._self._c,
                e.__map(e.list, function (t, n) {
                  return {
                    $orig: e.__get_orig(t),
                    g0: 0 < t.zans.length || 0 < t.pls.length,
                  };
                })),
              n = e.list.length;
            e.$mp.data = Object.assign({}, { $root: { l0: t, g1: n } });
          },
          r = [];
      },
      cb09: function (t, n, e) {},
    },
    [["263d", "common/runtime", "common/vendor"]],
  ]);
