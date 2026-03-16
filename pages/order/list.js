(global.webpackJsonp = global.webpackJsonp || []).push([
  ["pages/order/list"],
  {
    "1c0f": function (t, e, n) {
      var o = n("615a");
      n.n(o).a;
    },
    "36d6": function (t, e, o) {
      (function (t, e) {
        var n = o("4ea4");
        o("f0a5"), n(o("66fd"));
        n = n(o("63eb"));
        (t.__webpack_require_UNI_MP_PLUGIN__ = o), e(n.default);
      }).call(this, o("bc2e").default, o("543d").createPage);
    },
    4364: function (t, e, n) {
      n.d(e, "b", function () {
        return r;
      }),
        n.d(e, "c", function () {
          return i;
        }),
        n.d(e, "a", function () {
          return o;
        });
      var o = {
          wkEmpty: function () {
            return n.e("components/wk-empty/index").then(n.bind(null, "7090"));
          },
        },
        r = function () {
          var r = this,
            t =
              (r.$createElement,
              r._self._c,
              r.__map(r.orderList, function (o, t) {
                return {
                  $orig: r.__get_orig(o),
                  l1: r.__map(o.order_goods, function (n, t) {
                    return {
                      $orig: r.__get_orig(n),
                      l0: r.__map(n.btns, function (t, e) {
                        return {
                          $orig: r.__get_orig(t),
                          g0: "buy_again" === t ? n.btns.length : null,
                          g1: "express" === t ? o.btns.length : null,
                          g2: "get" === t ? n.btns.length : null,
                          g3: "aftersale" === t ? n.btns.length : null,
                          g4: "reapply_refund" === t ? n.btns.length : null,
                          g5: "apply_refund" === t ? n.btns.length : null,
                          g6: "comment" === t ? n.btns.length : null,
                          g7: "after_detail" === t ? n.btns.length : null,
                        };
                      }),
                    };
                  }),
                  g8: o.btns.length,
                };
              })),
            e = !r.orderList.length && !r.isLoading;
          r.$mp.data = Object.assign({}, { $root: { l2: t, g9: e } });
        },
        i = [];
    },
    "5cf4": function (t, n, e) {
      (function (t) {
        Object.defineProperty(n, "__esModule", { value: !0 }),
          (n.default = void 0);
        var e = {
          components: {},
          data: function () {
            return {
              routerTo: this.$Router,
              isLoading: !0,
              status: 0,
              orderType: "goods",
              orderList: [],
              emptyData: {
                img: "/static/imgs/empty/empty_groupon.png",
                tip: "暂无商品，还有更多好货等着你噢~",
              },
              orderState: [
                { id: 0, title: "全部", type: "all" },
                { id: 1, title: "待付款", type: "nopay" },
                { id: 2, title: "待发货", type: "nosend" },
                { id: 3, title: "待收货", type: "noget" },
                { id: 4, title: "已完成", type: "finish" },
                { id: 5, title: "退换货", type: "aftersale" },
              ],
            };
          },
          computed: {},
          onLoad: function () {
            this.$Route.query.type &&
              ((this.status = this.$Route.query.type),
              console.info(this.status));
          },
          onShow: function () {
            this.init();
          },
          methods: {
            init: function () {
              this.getOrderList();
            },
            jump: function (t, e) {
              this.$Router.push({ path: t, query: e });
            },
            onNav: function (t) {
              (this.status = t), this.getOrderList();
            },
            getOrderList: function () {
              var e = this;
              (e.isLoading = !0),
                e
                  .$api("order.order_list", { status: e.status })
                  .then(function (t) {
                    0 === t.errno &&
                      ((e.isLoading = !1), (e.orderList = t.data.list));
                  });
            },
            onConfirm: function (e) {
              var n = this;
              t.showModal({
                title: "提示",
                content: "确定已经收到货了吗？",
                success: function (t) {
                  t.confirm
                    ? n.$api("order.confirm_get", { id: e }).then(function (t) {
                        0 === t.errno && n.getOrderList();
                      })
                    : t.cancel;
                },
              });
            },
            onRefund: function (t, e) {
              var n = this,
                o = this;
              o.$api("order.refund", { id: t, order_item_id: e }).then(
                function (t) {
                  1 === t.errno &&
                    (o.$tools.toast("申请退款成功"),
                    o.getOrderList(),
                    n.$store.dispatch("getMessageIds", "aftersale"));
                }
              );
            },
            onAftersale: function (t, e) {
              var n = this;
              n.$api("order.aftersale", { id: t, order_item_id: e }).then(
                function (t) {
                  1 === t.errno &&
                    (n.$tools.toast("申请售后成功"), n.getOrderList());
                }
              );
            },
            onCancel: function (t) {
              console.info(t);
              var e = this;
              e.$api("order.order_cancel", { id: t }).then(function (t) {
                console.info(t), 0 === t.errno && e.getOrderList();
              });
            },
            onPay: function (t) {
              this.$Router.replace({
                path: "/pages/order/payment/method",
                query: {
                  order_no: t,
                  type: "",
                  pay: 1,
                  orderType: this.orderType,
                },
              });
            },
            onComment: function (t) {
              this.$Router.push({
                path: "/pages/order/add-comment",
                query: { order_id: t },
              });
            },
            checkExpress: function (t) {
              this.$Router.push({
                path: "/pages/order/express",
                query: { order_id: t },
              });
            },
          },
        };
        n.default = e;
      }).call(this, e("543d").default);
    },
    "615a": function (t, e, n) {},
    "63eb": function (t, e, n) {
      n.r(e);
      var o,
        r = n("4364"),
        i = n("81ee");
      for (o in i)
        ["default"].indexOf(o) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return i[t];
            });
          })(o);
      n("1c0f");
      var s = n("f0c5"),
        r = Object(s.a)(
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
      e.default = r.exports;
    },
    "81ee": function (t, e, n) {
      n.r(e);
      var o,
        r = n("5cf4"),
        i = n.n(r);
      for (o in r)
        ["default"].indexOf(o) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return r[t];
            });
          })(o);
      e.default = i.a;
    },
  },
  [["36d6", "common/runtime", "common/vendor"]],
]);
