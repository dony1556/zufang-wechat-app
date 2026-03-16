(global.webpackJsonp = global.webpackJsonp || []).push([
  ["pages/order/detail"],
  {
    "531a": function (e, t, r) {
      (function (e, t) {
        var n = r("4ea4");
        r("f0a5"), n(r("66fd"));
        n = n(r("ff3c"));
        (e.__webpack_require_UNI_MP_PLUGIN__ = r), t(n.default);
      }).call(this, r("bc2e").default, r("543d").createPage);
    },
    "6d30": function (e, t, n) {
      var r = n("acf0");
      n.n(r).a;
    },
    "958d": function (e, t, n) {
      n.d(t, "b", function () {
        return r;
      }),
        n.d(t, "c", function () {
          return o;
        }),
        n.d(t, "a", function () {});
      var r = function () {
          var r = this,
            e =
              (r.$createElement,
              r._self._c,
              r.__map(r.orderDetail.item, function (n, e) {
                return {
                  $orig: r.__get_orig(n),
                  l0: r.__map(n.btns, function (e, t) {
                    return {
                      $orig: r.__get_orig(e),
                      g0: "buy_again" === e ? n.btns.length : null,
                      g1: "express" === e ? n.btns.length : null,
                      g2: "get" === e ? n.btns.length : null,
                      g3: "aftersale" === e ? n.btns.length : null,
                      g4: "apply_refund" === e ? n.btns.length : null,
                      g5: "reapply_refund" === e ? n.btns.length : null,
                      g6: "comment" === e ? n.btns.length : null,
                      g7: "after_detail" === e ? n.btns.length : null,
                    };
                  }),
                };
              }));
          r._isMounted ||
            (r.e0 = function (e) {
              return r.$tools.callPhone(13985269546);
            }),
            (r.$mp.data = Object.assign({}, { $root: { l1: e } }));
        },
        o = [];
    },
    acf0: function (e, t, n) {},
    c34a: function (e, n, t) {
      (function (t) {
        Object.defineProperty(n, "__esModule", { value: !0 }),
          (n.default = void 0);
        var e = {
          components: {},
          data: function () {
            return {
              time: 0,
              orderDetail: {},
              orderStatus: {
                "-2": "已关闭",
                "-1": "已取消",
                0: "未付款",
                1: "已付款",
                2: "已完成",
              },
            };
          },
          onShow: function () {
            this.getOrderDetail();
          },
          onLoad: function () {
            this.orderType = this.$Route.query.orderType;
          },
          computed: {
            allNum: function () {
              if (this.orderDetail.item) {
                var e = this.orderDetail.item,
                  t = 0;
                return (
                  e.forEach(function (e) {
                    t += e.goods_num;
                  }),
                  t
                );
              }
            },
          },
          methods: {
            jump: function (e, t) {
              this.$Router.push({ path: e, query: t });
            },
            getOrderDetail: function () {
              var t = this;
              "goods" == this.orderType
                ? t
                    .$api("order.order_detail", {
                      order_no: t.$Route.query.order_no,
                    })
                    .then(function (e) {
                      0 === e.errno &&
                        ((t.orderDetail = e.data.order),
                        (e = new Date(1e3 * e.data.createtime)),
                        (t.orderDetail.createtime = t.$tools.dateFormat(
                          "YYYY-mm-dd HH:MM",
                          e
                        )));
                    })
                : "score" == this.orderType &&
                  t
                    .$api("order.order_detail", {
                      order_no: t.$Route.query.order_no,
                      m: "wk_mall_plugin_jfsc",
                    })
                    .then(function (e) {
                      0 === e.errno &&
                        ((t.orderDetail = e.data.order),
                        (e = new Date(1e3 * e.data.createtime)),
                        (t.orderDetail.createtime = t.$tools.dateFormat(
                          "YYYY-mm-dd HH:MM",
                          e
                        )));
                    });
            },
            onCopy: function (e) {
              t.setClipboardData({
                data: e,
                success: function (e) {},
                fail: function (e) {},
                complete: function (e) {},
              });
            },
            onConfirm: function (e, t) {
              var n = this;
              n.$api("order.confirm", { id: e, order_item_id: t }).then(
                function (e) {
                  1 === e.errno && n.getOrderDetail();
                }
              );
            },
            onRefund: function (e, t) {
              var n = this,
                r = this;
              r.$api("order.refund", { id: e, order_item_id: t }).then(
                function (e) {
                  1 === e.errno &&
                    (r.$tools.toast("申请退款成功"),
                    r.getOrderDetail(),
                    n.$store.dispatch("getMessageIds", "aftersale"));
                }
              );
            },
            onAftersale: function (e, t) {
              var n = this;
              n.$api("order.aftersale", { id: e, order_item_id: t }).then(
                function (e) {
                  1 === e.errno &&
                    (n.$tools.toast("申请售后成功"), n.getOrderDetail());
                }
              );
            },
            onCancel: function (e) {
              var t = this;
              t.$api("order.cancel", { id: e }).then(function (e) {
                1 === e.errno && t.$Router.back();
              });
            },
            onPay: function (e) {
              t.navigateTo({
                url: "/pages/order/payment/method?id=".concat(e),
              });
            },
            onComment: function (e, t) {
              this.jump("/pages/order/add-comment", {
                orderId: e,
                ordrderItemId: t,
              });
            },
            checkExpress: function (e, t) {
              this.jump("/pages/order/express", {
                orderId: e,
                ordrderItemId: t,
              });
            },
          },
        };
        n.default = e;
      }).call(this, t("543d").default);
    },
    c522: function (e, t, n) {
      n.r(t);
      var r,
        o = n("c34a"),
        a = n.n(o);
      for (r in o)
        ["default"].indexOf(r) < 0 &&
          (function (e) {
            n.d(t, e, function () {
              return o[e];
            });
          })(r);
      t.default = a.a;
    },
    ff3c: function (e, t, n) {
      n.r(t);
      var r,
        o = n("958d"),
        a = n("c522");
      for (r in a)
        ["default"].indexOf(r) < 0 &&
          (function (e) {
            n.d(t, e, function () {
              return a[e];
            });
          })(r);
      n("6d30");
      var i = n("f0c5"),
        o = Object(i.a)(
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
      t.default = o.exports;
    },
  },
  [["531a", "common/runtime", "common/vendor"]],
]);
