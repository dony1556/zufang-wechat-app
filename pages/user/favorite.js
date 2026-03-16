require("./common/vendor.js"),
  (global.webpackJsonp = global.webpackJsonp || []).push([
    ["pages/user/favorite"],
    {
      "00d9": function (t, e, i) {},
      3602: function (t, e, i) {
        var n = i("00d9");
        i.n(n).a;
      },
      9341: function (t, e, i) {
        i.r(e);
        var n,
          a = i("ddc2"),
          o = i.n(a);
        for (n in a)
          ["default"].indexOf(n) < 0 &&
            (function (t) {
              i.d(e, t, function () {
                return a[t];
              });
            })(n);
        e.default = o.a;
      },
      b036: function (t, e, i) {
        i.d(e, "b", function () {
          return a;
        }),
          i.d(e, "c", function () {
            return o;
          }),
          i.d(e, "a", function () {
            return n;
          });
        var n = {
            wkEmpty: function () {
              return i
                .e("components/wk-empty/index")
                .then(i.bind(null, "7090"));
            },
          },
          a = function () {
            var i = this,
              t = (i.$createElement, i._self._c, i.favoriteList.length),
              e = i.favoriteList.length,
              n = e
                ? i.__map(i.favoriteList, function (t, e) {
                    return {
                      $orig: i.__get_orig(t),
                      g2: i.isSel ? t.id.toString() : null,
                    };
                  })
                : null,
              a = i.favoriteList.length,
              o = i.favoriteList.length,
              l = i.isSel && i.favoriteList.length;
            i.$mp.data = Object.assign(
              {},
              { $root: { g0: t, g1: e, l0: n, g3: a, g4: o, g5: l } }
            );
          },
          o = [];
      },
      b456: function (t, e, i) {
        i.r(e);
        var n,
          a = i("b036"),
          o = i("9341");
        for (n in o)
          ["default"].indexOf(n) < 0 &&
            (function (t) {
              i.d(e, t, function () {
                return o[t];
              });
            })(n);
        i("3602");
        var l = i("f0c5"),
          a = Object(l.a)(
            o.default,
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
        e.default = a.exports;
      },
      ddc2: function (t, e, i) {
        var n = i("4ea4");
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.default = void 0);
        var a = n(i("448a")),
          i = {
            components: {},
            data: function () {
              return {
                isSel: !1,
                allSel: !1,
                routerTo: this.$Router,
                selList: [],
                emptyData: {
                  img: "/static/imgs/empty/empty_goods.png",
                  tip: "暂无收藏商品，赶紧去收藏好货吧~",
                },
                favoriteList: [],
                total: 0,
                loadStatus: "",
                currentPage: 1,
                lastPage: 0,
              };
            },
            computed: {},
            onShow: function () {
              this.init();
            },
            onHide: function () {
              this.favoriteList = [];
            },
            methods: {
              init: function () {
                return Promise.all([this.getFavoriteList()]);
              },
              onSel: function (t) {
                var e = this,
                  i = this.favoriteList,
                  n = t.detail.value;
                (this.selList = n),
                  i.forEach(function (t) {
                    n.includes(t.goods_id.toString())
                      ? e.$set(t, "checked", !0)
                      : e.$set(t, "checked", !1);
                  }),
                  this.selList.length < i.length
                    ? (this.allSel = !1)
                    : (this.allSel = !0);
              },
              onSet: function () {
                this.isSel = !this.isSel;
              },
              onAllSel: function () {
                var e = this;
                (this.allSel = !this.allSel),
                  (this.selList = []),
                  this.favoriteList.forEach(function (t) {
                    e.allSel
                      ? (e.$set(t, "checked", !0), e.selList.push(t.id))
                      : e.$set(t, "checked", !1);
                  });
              },
              loadMore: function () {
                this.currentPage < this.lastPage &&
                  ((this.currentPage += 1), this.getFavoriteList());
              },
              getFavoriteList: function () {
                var e = this;
                (e.loadStatus = "loading"),
                  e
                    .$api("goods.collect_list", {
                      pageSize: 10,
                      page: e.currentPage,
                    })
                    .then(function (t) {
                      0 === t.errno &&
                        ((e.total = t.data.total),
                        (e.favoriteList = [].concat(
                          (0, a.default)(e.favoriteList),
                          (0, a.default)(t.data.list)
                        )),
                        (e.lastPage = t.data.last_page),
                        e.currentPage < t.data.last_page
                          ? (e.loadStatus = "")
                          : (e.loadStatus = "over"));
                    });
              },
              cancelFavorite: function () {
                var e = this,
                  i = e.selList,
                  n = this.favoriteList;
                e.$api("goods.cancel_collect", { ids: i.join(",") }).then(
                  function (t) {
                    0 === t.errno &&
                      (e.allSel
                        ? (e.favoriteList = [])
                        : ((e.favoriteList = n.filter(function (t) {
                            return !i.includes(t.goods_id.toString());
                          })),
                          (e.total = n.length)));
                  }
                );
              },
            },
          };
        e.default = i;
      },
      f283: function (t, e, n) {
        (function (t, e) {
          var i = n("4ea4");
          n("f0a5"), i(n("66fd"));
          i = i(n("b456"));
          (t.__webpack_require_UNI_MP_PLUGIN__ = n), e(i.default);
        }).call(this, n("bc2e").default, n("543d").createPage);
      },
    },
    [["f283", "common/runtime", "common/vendor"]],
  ]);
