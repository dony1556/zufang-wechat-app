(global.webpackJsonp = global.webpackJsonp || []).push([
  ["pages/app/score/index"],
  {
    "31d9": function (e, n, t) {
      var o = t("9507");
      t.n(o).a;
    },
    "3b3f": function (e, n, o) {
      (function (e, n) {
        var t = o("4ea4");
        o("f0a5"), t(o("66fd"));
        t = t(o("a06c"));
        (e.__webpack_require_UNI_MP_PLUGIN__ = o), n(t.default);
      }).call(this, o("bc2e").default, o("543d").createPage);
    },
    "91c6": function (e, n, t) {
      t.d(n, "b", function () {
        return a;
      }),
        t.d(n, "c", function () {
          return i;
        }),
        t.d(n, "a", function () {
          return o;
        });
      var o = {
          wkEmpty: function () {
            return t.e("components/wk-empty/index").then(t.bind(null, "7090"));
          },
          wkSkeletons: function () {
            return t
              .e("components/wk-skeletons/index")
              .then(t.bind(null, "d3c1"));
          },
        },
        a = function () {
          this.$createElement;
          var e = (this._self._c, this.banner_list.length),
            n = this.cat_list.length,
            t = this.scoreList.length,
            o = !this.scoreList.length && !this.isLoading,
            a = this.scoreList.length;
          this.$mp.data = Object.assign(
            {},
            { $root: { g0: e, g1: n, g2: t, g3: o, g4: a } }
          );
        },
        i = [];
    },
    9507: function (e, n, t) {},
    a06c: function (e, n, t) {
      t.r(n);
      var o,
        a = t("91c6"),
        i = t("be54");
      for (o in i)
        ["default"].indexOf(o) < 0 &&
          (function (e) {
            t.d(n, e, function () {
              return i[e];
            });
          })(o);
      t("31d9");
      var c = t("f0c5"),
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
      n.default = a.exports;
    },
    be54: function (e, n, t) {
      t.r(n);
      var o,
        a = t("e9fe"),
        i = t.n(a);
      for (o in a)
        ["default"].indexOf(o) < 0 &&
          (function (e) {
            t.d(n, e, function () {
              return a[e];
            });
          })(o);
      n.default = i.a;
    },
    e9fe: function (e, n, t) {
      var o = t("4ea4");
      Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.default = void 0);
      var a = o(t("448a")),
        o = {
          components: {
            shScoreGoods: function () {
              t.e("pages/app/score/children/sh-score-goods")
                .then(
                  function () {
                    return resolve(t("7b46"));
                  }.bind(null, t)
                )
                .catch(t.oe);
            },
            shScoreBanner: function () {
              Promise.all([
                t.e("common/vendor"),
                t.e("pages/app/score/children/sh-score-banner"),
              ])
                .then(
                  function () {
                    return resolve(t("1d50"));
                  }.bind(null, t)
                )
                .catch(t.oe);
            },
            shScoreMenu: function () {
              t.e("pages/app/score/children/sh-score-menu")
                .then(
                  function () {
                    return resolve(t("a682"));
                  }.bind(null, t)
                )
                .catch(t.oe);
            },
            shScoreSearch: function () {
              t.e("pages/app/score/children/sh-score-search")
                .then(
                  function () {
                    return resolve(t("17c4"));
                  }.bind(null, t)
                )
                .catch(t.oe);
            },
          },
          data: function () {
            return {
              scoreList: [],
              cat_list: [],
              banner_list: [],
              emptyData: {
                img: "/static/imgs/empty/empty_goods.png",
                tip: "暂无积分商品",
                path: "/pages/index/index",
                pathText: "去首页逛逛",
              },
              loadStatus: "",
              currentPage: 1,
              lastPage: 0,
              isLoading: !0,
            };
          },
          onLoad: function () {
            this.getScoreShopsInit();
          },
          computed: {},
          methods: {
            loadMore: function () {
              this.currentPage < this.lastPage &&
                ((this.currentPage += 1), this.getScoreShopsList());
            },
            getScoreShopsInit: function () {
              var n = this;
              (n.loadStatus = "loading"),
                n
                  .$api("goods.goods_init", { m: "wk_mall_plugin_jfsc" })
                  .then(function (e) {
                    0 == e.errno &&
                      ((n.cat_list = e.data.cat_list),
                      (n.banner_list = e.data.banner_list),
                      n.getScoreShopsList());
                  });
            },
            getScoreShopsList: function () {
              var n = this;
              (n.loadStatus = "loading"),
                n
                  .$api("goods.goods_recommend", { m: "wk_mall_plugin_jfsc" })
                  .then(function (e) {
                    0 == e.errno &&
                      ((n.isLoading = !1),
                      (n.scoreList = [].concat(
                        (0, a.default)(n.scoreList),
                        (0, a.default)(e.data.list)
                      )),
                      (n.loadStatus = "over"));
                  });
            },
          },
        };
      n.default = o;
    },
  },
  [["3b3f", "common/runtime", "common/vendor"]],
]);
