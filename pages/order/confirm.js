(global.webpackJsonp = global.webpackJsonp || []).push([
  ["pages/order/confirm"],
  {
    3341: function (e, r, t) {
      t.d(r, "b", function () {
        return o;
      }),
        t.d(r, "c", function () {
          return s;
        }),
        t.d(r, "a", function () {});
      var o = function () {
          this.$createElement;
          this._self._c;
        },
        s = [];
    },
    "460d": function (e, a, i) {
      (function (o) {
        var e = i("4ea4");
        Object.defineProperty(a, "__esModule", { value: !0 }),
          (a.default = void 0);
        var t = e(i("2eee")),
          s = e(i("9523")),
          n = e(i("c973"));
        function d(r, e) {
          var t,
            o = Object.keys(r);
          return (
            Object.getOwnPropertySymbols &&
              ((t = Object.getOwnPropertySymbols(r)),
              e &&
                (t = t.filter(function (e) {
                  return Object.getOwnPropertyDescriptor(r, e).enumerable;
                })),
              o.push.apply(o, t)),
            o
          );
        }
        function r(r) {
          for (var e = 1; e < arguments.length; e++) {
            var t = null != arguments[e] ? arguments[e] : {};
            e % 2
              ? d(Object(t), !0).forEach(function (e) {
                  (0, s.default)(r, e, t[e]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(t))
              : d(Object(t)).forEach(function (e) {
                  Object.defineProperty(
                    r,
                    e,
                    Object.getOwnPropertyDescriptor(t, e)
                  );
                });
          }
          return r;
        }
        e = {
          components: {
            shPickerModal: function () {
              i.e("pages/order/children/sh-picker-modal")
                .then(
                  function () {
                    return resolve(i("85f1"));
                  }.bind(null, i)
                )
                .catch(i.oe);
            },
          },
          data: function () {
            return {
              showPicker: !1,
              isSubOrder: !1,
              pickerData: { title: "选择优惠券", couponList: [] },
              address: { is_default: 0 },
              addressId: 0,
              from: "",
              orderType: "",
              grouponBuyType: "alone",
              grouponId: 0,
              goodsList: [],
              remark: "",
              orderPre: {},
              couponId: 0,
              couponPrice: "选择优惠券",
              goods_list: "",
            };
          },
          computed: {},
          watch: {
            address: function (e, r) {
              this.address &&
                ((this.addressId = this.address.id), this.getPre());
            },
          },
          onLoad: function () {
            var r = this;
            return (0, n.default)(
              t.default.mark(function e() {
                return t.default.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (r.goodsList = r.$Route.query.goodsList),
                          (r.from = r.$Route.query.from),
                          "goods" === r.from &&
                            (r.goods_list = r.$Route.query.goods_list),
                          (r.orderType = r.$Route.query.orderType),
                          (e.next = 6),
                          r.init()
                        );
                      case 6:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            )();
          },
          onShow: function () {},
          methods: r(
            r({}, (0, i("26cb").mapActions)(["getCartList"])),
            {},
            {
              init: function () {
                return Promise.all([this.getDefaultAddress(), this.getPre()]);
              },
              jump: function (e, r) {
                this.$Router.push({ path: e, query: r });
              },
              getPre: function () {
                var r = this;
                "goods" == this.orderType
                  ? r
                      .$api("order.pre", {
                        goodsList: r.goodsList,
                        order_type: r.orderType,
                        from: r.from,
                      })
                      .then(function (e) {
                        0 === e.errno && (r.orderPre = e.data);
                      })
                  : "score" == this.orderType &&
                    r
                      .$api("order.pre", {
                        m: "wk_mall_plugin_jfsc",
                        goodsList: r.goodsList,
                        order_type: r.orderType,
                        from: r.from,
                      })
                      .then(function (e) {
                        0 === e.errno && (r.orderPre = e.data);
                      });
              },
              subOrder: function () {
                var e,
                  r = this,
                  t = this;
                this.address.id
                  ? ((t.isSubOrder = !0),
                    "goods" == this.orderType
                      ? ((e = {
                          from: t.from,
                          address_id: t.addressId,
                          coupons_id: t.couponId,
                          remark: t.remark,
                        }),
                        "goods" == t.from && (e.goodsList = t.goodsList),
                        t.$api("order.order_create", e).then(function (e) {
                          0 == e.errno &&
                            (e.data.id,
                            e.data.order_sn,
                            t.getCartList(),
                            "groupon" == e.data.activity_type
                              ? r.$store.dispatch(
                                  "getMessageIds",
                                  "grouponResult"
                                )
                              : r.$store.dispatch("getMessageIds", "result"),
                            t.$Router.replace({
                              path: "/pages/order/payment/method",
                              query: {
                                order_no: e.data.order_no,
                                type: "",
                                pay: 1,
                                orderType: t.orderType,
                              },
                            })),
                            (t.isSubOrder = !1);
                        }))
                      : "score" == this.orderType &&
                        ((e = {
                          m: "wk_mall_plugin_jfsc",
                          from: t.from,
                          address_id: t.addressId,
                          remark: t.remark,
                          goodsList: t.goodsList,
                        }),
                        t.$api("order.order_create", e).then(function (e) {
                          0 == e.errno
                            ? 1 == e.data.status
                              ? (e.data.id,
                                e.data.order_sn,
                                t.$Router.replace({
                                  path: "/pages/order/payment/method",
                                  query: {
                                    order_no: e.data.order_no,
                                    type: "",
                                    pay: 1,
                                    orderType: t.orderType,
                                  },
                                }),
                                (t.isSubOrder = !1))
                              : 2 == e.data.status &&
                                t.$Router.replace({
                                  path: "/pages/order/payment/result",
                                  query: {
                                    order_no: e.data.order_no,
                                    type: "",
                                    orderType: "score",
                                    pay: 1,
                                  },
                                })
                            : 1 == e.errno
                            ? r.$tools.toast(e.msg)
                            : (t.isSubOrder = !1);
                        })))
                  : o.showToast({ title: "请选择收获地址", icon: "none" });
              },
              getDefaultAddress: function () {
                var r = this;
                this.$api("address.get_default").then(function (e) {
                  0 == e.errno &&
                    e.data.address.id &&
                    (r.address = e.data.address);
                });
              },
              getCoupons: function () {
                var r = this;
                r.$api("order.coupons", {
                  goods_list: r.goodsList,
                  from: r.from,
                  address_id: r.addressId,
                  coupons_id: r.couponId,
                  dispatch_type: "express",
                  order_type: r.orderType,
                }).then(function (e) {
                  0 === e.errno && (r.pickerData.couponList = e.data);
                });
              },
              selCoupon: function () {
                this.pickerData.couponList.length
                  ? (this.showPicker = !0)
                  : this.$tools.toast("暂无优惠券");
              },
              changeCoupon: function (e) {
                0 <= e
                  ? ((this.couponId =
                      this.pickerData.couponList[e].user_coupons_id),
                    (this.pickerData.title =
                      "-￥" + this.pickerData.couponList[e].amount))
                  : ((this.couponId = 0),
                    (this.pickerData.title = "选择优惠券")),
                  this.getPre();
              },
            }
          ),
        };
        a.default = e;
      }).call(this, i("543d").default);
    },
    "60b0": function (e, r, t) {
      var o = t("839f");
      t.n(o).a;
    },
    "839f": function (e, r, t) {},
    c24c: function (e, r, t) {
      t.r(r);
      var o,
        s = t("460d"),
        n = t.n(s);
      for (o in s)
        ["default"].indexOf(o) < 0 &&
          (function (e) {
            t.d(r, e, function () {
              return s[e];
            });
          })(o);
      r.default = n.a;
    },
    e383: function (e, r, o) {
      (function (e, r) {
        var t = o("4ea4");
        o("f0a5"), t(o("66fd"));
        t = t(o("f677"));
        (e.__webpack_require_UNI_MP_PLUGIN__ = o), r(t.default);
      }).call(this, o("bc2e").default, o("543d").createPage);
    },
    f677: function (e, r, t) {
      t.r(r);
      var o,
        s = t("3341"),
        n = t("c24c");
      for (o in n)
        ["default"].indexOf(o) < 0 &&
          (function (e) {
            t.d(r, e, function () {
              return n[e];
            });
          })(o);
      t("60b0");
      var d = t("f0c5"),
        s = Object(d.a)(
          n.default,
          s.b,
          s.c,
          !1,
          null,
          null,
          null,
          !1,
          s.a,
          void 0
        );
      r.default = s.exports;
    },
  },
  [["e383", "common/runtime", "common/vendor"]],
]);
