(global.webpackJsonp = global.webpackJsonp || []).push([
  ["pages/goods/detail/index"],
  {
    "40d4": function (t, e, n) {
      (function (t, e) {
        var o = n("4ea4");
        n("f0a5"), o(n("66fd"));
        o = o(n("8274"));
        (t.__webpack_require_UNI_MP_PLUGIN__ = n), e(o.default);
      }).call(this, n("bc2e").default, n("543d").createPage);
    },
    8274: function (t, e, o) {
      o.r(e);
      var n,
        i = o("a6ab"),
        s = o("955c");
      for (n in s)
        ["default"].indexOf(n) < 0 &&
          (function (t) {
            o.d(e, t, function () {
              return s[t];
            });
          })(n);
      o("efe1");
      var r = o("f0c5"),
        i = Object(r.a)(
          s.default,
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
      e.default = i.exports;
    },
    "955c": function (t, e, o) {
      o.r(e);
      var n,
        i = o("e5b6"),
        s = o.n(i);
      for (n in i)
        ["default"].indexOf(n) < 0 &&
          (function (t) {
            o.d(e, t, function () {
              return i[t];
            });
          })(n);
      e.default = s.a;
    },
    "9aba": function (t, e, o) {},
    a6ab: function (t, e, o) {
      o.d(e, "b", function () {
        return i;
      }),
        o.d(e, "c", function () {
          return s;
        }),
        o.d(e, "a", function () {
          return n;
        });
      var n = {
          wkSkeletons: function () {
            return o
              .e("components/wk-skeletons/index")
              .then(o.bind(null, "d3c1"));
          },
          wkEmpty: function () {
            return o.e("components/wk-empty/index").then(o.bind(null, "7090"));
          },
        },
        i = function () {
          var o = this,
            t =
              (o.$createElement,
              o._self._c,
              o.goods.title && o.goods.thumbs ? o.goods.thumbs.length : null),
            e = o.goods.title
              ? 1 == o.goods.is_sku &&
                "waiting" !== o.activityRules.status &&
                o.checkActivity(o.goods.activity_type, "groupon")
              : null,
            n = o.goods.title
              ? o.goods.coupons &&
                o.goods.coupons.length &&
                "seckill" !== o.goods.activity_type &&
                "groupon" !== o.goods.activity_type &&
                "score" !== o.detailType
              : null,
            i = o.goods.title
              ? o.__map(o.tabList, function (t, e) {
                  return {
                    $orig: o.__get_orig(t),
                    g2: "tab2" == t.id ? o.commentList.length : null,
                  };
                })
              : null,
            s =
              o.goods.title && "tab1" === o.tabCurrent
                ? o.goods.params && o.goods.params.length
                : null,
            r =
              o.goods.title && "tab2" === o.tabCurrent
                ? o.commentList.length
                : null,
            u =
              o.goods.title && "tab2" === o.tabCurrent
                ? o.commentList.length
                : null;
          o._isMounted ||
            ((o.e0 = function (t) {
              return o.tools.previewImage(o.goods.thumbs, o.swiperCurrent);
            }),
            (o.e1 = function (t) {
              o.showSku = !0;
            })),
            (o.$mp.data = Object.assign(
              {},
              { $root: { g0: t, m0: e, g1: n, l0: i, g3: s, g4: r, g5: u } }
            ));
        },
        s = [];
    },
    e5b6: function (t, e, s) {
      (function (o) {
        var t = s("4ea4");
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.default = void 0);
        var n = t(s("9523"));
        function i(e, t) {
          var o,
            n = Object.keys(e);
          return (
            Object.getOwnPropertySymbols &&
              ((o = Object.getOwnPropertySymbols(e)),
              t &&
                (o = o.filter(function (t) {
                  return Object.getOwnPropertyDescriptor(e, t).enumerable;
                })),
              n.push.apply(n, o)),
            n
          );
        }
        t = {
          components: {
            shServe: function () {
              s.e("pages/goods/detail/children/sh-serve")
                .then(
                  function () {
                    return resolve(s("3234"));
                  }.bind(null, s)
                )
                .catch(s.oe);
            },
            shPrice: function () {
              s.e("pages/goods/detail/children/sh-price")
                .then(
                  function () {
                    return resolve(s("5352"));
                  }.bind(null, s)
                )
                .catch(s.oe);
            },
            shGroupon: function () {
              s.e("pages/goods/detail/children/sh-groupon")
                .then(
                  function () {
                    return resolve(s("48c6"));
                  }.bind(null, s)
                )
                .catch(s.oe);
            },
            shCoupon: function () {
              s.e("pages/goods/detail/children/sh-coupon")
                .then(
                  function () {
                    return resolve(s("6caa"));
                  }.bind(null, s)
                )
                .catch(s.oe);
            },
            shGrouponTip: function () {
              s.e("pages/goods/detail/children/sh-groupon-tip")
                .then(
                  function () {
                    return resolve(s("c854"));
                  }.bind(null, s)
                )
                .catch(s.oe);
            },
            shComment: function () {
              s.e("pages/goods/children/sh-comment")
                .then(
                  function () {
                    return resolve(s("811a"));
                  }.bind(null, s)
                )
                .catch(s.oe);
            },
          },
          data: function () {
            return {
              currentSkuText: "",
              detailType: "",
              showShare: !1,
              buyType: "sku",
              grouponBuyType: "alone",
              showSku: !1,
              showServe: !1,
              tools: this.$tools,
              goods: {},
              commentList: [],
              is_collect: !1,
              activityRules: {},
              currentSkuList: [],
              confirmgoods: {},
              swiperCurrent: 0,
              tabCurrent: "tab0",
              emptyData: {
                img: "/static/imgs/empty/comment_empty.png",
                tip: "暂无评价~",
              },
              tabList: [
                { id: "tab0", title: "商品详情" },
                { id: "tab2", title: "用户评价" },
              ],
            };
          },
          computed: (function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var o = null != arguments[t] ? arguments[t] : {};
              t % 2
                ? i(Object(o), !0).forEach(function (t) {
                    (0, n.default)(e, t, o[t]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    e,
                    Object.getOwnPropertyDescriptors(o)
                  )
                : i(Object(o)).forEach(function (t) {
                    Object.defineProperty(
                      e,
                      t,
                      Object.getOwnPropertyDescriptor(o, t)
                    );
                  });
            }
            return e;
          })(
            {},
            (0, s("26cb").mapState)({
              cartNum: function (t) {
                return t.cart.cartNum;
              },
            })
          ),
          onLoad: function () {
            var t = this.$Route.query,
              e = t.type;
            "score" === ((this.detailType = e), (this.goods_id = t.id), e)
              ? this.getScoreDetail()
              : this.getGoodsDetail();
          },
          onReady: function () {},
          beforeRouteLeave: function (t, e, o) {
            console.info("leave"), o();
          },
          methods: {
            getActivityRules: function (t) {
              t && (this.activityRules = JSON.parse(t));
            },
            checkActivity: function (t, e) {
              return !t || !t.includes(e);
            },
            goCart: function () {
              this.$Router.pushTab({ path: "/pages/index/cart" });
            },
            jump: function (t, e) {
              (this.showShare = !1), this.$Router.push({ path: t, query: e });
            },
            goHome: function () {
              this.$tools.routerTo("/pages/index/index");
            },
            swiperChange: function (t) {
              t = t.detail.current;
              this.swiperCurrent = t;
            },
            onTab: function (t) {
              this.tabCurrent = t;
            },
            getScoreDetail: function () {
              var e = this;
              this.$api("goods.goods_detail", {
                m: "wk_mall_plugin_jfsc",
                goods_id: this.$Route.query.id,
              }).then(function (t) {
                0 == t.errno && (e.goods = t.data.goods);
              });
            },
            getGoodsDetail: function () {
              var e = this;
              e.$api("goods.goods_detail", { goods_id: e.goods_id }).then(
                function (t) {
                  console.info(t),
                    0 == t.errno &&
                      ((e.goods = t.data.goods),
                      (e.is_collect = t.data.is_collect),
                      e.getPoster(),
                      e.getCommentList());
                }
              );
            },
            getCommentList: function () {
              var e = this;
              e.$api("goods.comment_list", {
                goods_id: e.goods.id,
                per_page: 3,
                type: "all",
              }).then(function (t) {
                0 === t.errno && (e.commentList = t.data.list);
              });
            },
            getPoster: function () {
              this.$api("poster.goods_poster", {
                goods_id: this.goods.id,
              }).then(function (t) {
                t.errno;
              });
            },
            changeType: function (t) {
              this.buyType = t;
            },
            getSkuText: function (t) {
              this.currentSkuText = t;
            },
            onShare: function () {
              this.showShare = !0;
            },
            addCart: function () {
              Boolean(o.getStorageSync("userInfo"))
                ? ((this.buyType = "cart"), (this.showSku = !0))
                : this.$store.commit("LOGIN_TIP", !0);
            },
            goPay: function () {
              Boolean(o.getStorageSync("userInfo"))
                ? ((this.buyType = "buy"), (this.showSku = !0))
                : this.$store.commit("LOGIN_TIP", !0);
            },
            payGroupon: function (t) {
              Boolean(o.getStorageSync("token"))
                ? ((this.grouponBuyType =
                    "groupon" === t ? "groupon" : "alone"),
                  (this.buyType = "buy"),
                  (this.showSku = !0))
                : this.$store.commit("LOGIN_TIP", !0);
            },
            goSeckill: function () {
              Boolean(o.getStorageSync("token"))
                ? "waiting" !== this.activityRules.status
                  ? ((this.buyType = "buy"),
                    (this.showSku = !0),
                    console.log(this.buyType))
                  : this.$tools.toast("秒杀暂未开始")
                : this.$store.commit("LOGIN_TIP", !0);
            },
            onFavorite: function (t) {
              var e = this;
              Boolean(o.getStorageSync("userInfo"))
                ? e.$api("goods.collect", { goods_id: t }).then(function (t) {
                    0 === t.errno &&
                      ((e.is_collect = t.data.is_collect),
                      e.$tools.toast(t.data.msg));
                  })
                : this.$store.commit("LOGIN_TIP", !0);
            },
          },
        };
        e.default = t;
      }).call(this, s("543d").default);
    },
    efe1: function (t, e, o) {
      var n = o("9aba");
      o.n(n).a;
    },
  },
  [["40d4", "common/runtime", "common/vendor"]],
]);
