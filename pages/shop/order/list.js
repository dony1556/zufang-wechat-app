(global.webpackJsonp = global.webpackJsonp || []).push([
  ["pages/shop/order/list"],
  {
    "0cc2": function (t, e, n) {
      n.r(e);
      var o,
        r = n("bf6f"),
        i = n("f8fb");
      for (o in i)
        ["default"].indexOf(o) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return i[t];
            });
          })(o);
      n("72c5");
      var a = n("f0c5"),
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
      e.default = r.exports;
    },
    "33b9": function (t, e, n) {},
    "715d": function (t, e, o) {
      (function (t, e) {
        var n = o("4ea4");
        o("f0a5"), n(o("66fd"));
        n = n(o("0cc2"));
        (t.__webpack_require_UNI_MP_PLUGIN__ = o), e(n.default);
      }).call(this, o("bc2e").default, o("543d").createPage);
    },
    "72c5": function (t, e, n) {
      var o = n("33b9");
      n.n(o).a;
    },
    bf6f: function (t, e, n) {
      n.d(e, "b", function () {
        return o;
      }),
        n.d(e, "c", function () {
          return r;
        }),
        n.d(e, "a", function () {});
      var o = function () {
          this.$createElement;
          this._self._c;
        },
        r = [];
    },
    e37d: function (t, n, o) {
      (function (t) {
        Object.defineProperty(n, "__esModule", { value: !0 }),
          (n.default = void 0),
          o("26cb");
        var e = {
          components: {},
          data: function () {
            return {
              isLoading: !0,
              nav_type: "all",
              orderType: "goods",
              orderList: [],
              emptyData: {
                img: "/static/imgs/empty/empty_groupon.png",
                tip: "暂无商品，还有更多好货等着你噢~",
              },
              orderState: [
                { id: 0, title: "全部", type: "all" },
                { id: 1, title: "待付款", type: "no_pay" },
                { id: 2, title: "待发货", type: "no_send" },
                { id: 3, title: "待收货", type: "no_get" },
                { id: 4, title: "已完成", type: "finish" },
              ],
            };
          },
          computed: {},
          onLoad: function () {
            this.$Route.query.type && (this.nav_type = this.$Route.query.type);
          },
          onShow: function () {
            this.init();
          },
          methods: {
            init: function () {
              this.getOrderList();
            },
            getOrderList: function () {
              var e = this;
              e.$api("integral_order.order_list", { type: e.nav_type }).then(
                function (t) {
                  0 === t.errno && (e.orderList = t.data.list);
                }
              );
            },
            onNav: function (t) {
              (this.nav_type = t), this.getOrderList();
            },
            order_detail: function (t) {
              this.$Router.push({
                path: "/pages/order/detail",
                query: { order_id: t },
              });
            },
            onConfirm: function (e) {
              var n = this;
              t.showModal({
                title: "提示",
                content: "确定已经收到货了吗？",
                success: function (t) {
                  t.confirm
                    ? n
                        .$api("order.confirm_get", { id: e }, "post")
                        .then(function (t) {
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
      }).call(this, o("543d").default);
    },
    f8fb: function (t, e, n) {
      n.r(e);
      var o,
        r = n("e37d"),
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
  [["715d", "common/runtime", "common/vendor"]],
]);
