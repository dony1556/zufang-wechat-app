(global.webpackJsonp = global.webpackJsonp || []).push([
  ["pages/order/payment/result"],
  {
    "016f": function (e, r, t) {
      t.r(r);
      var o,
        n = t("5dc2"),
        i = t("d8d5");
      for (o in i)
        ["default"].indexOf(o) < 0 &&
          (function (e) {
            t.d(r, e, function () {
              return i[e];
            });
          })(o);
      t("e08f");
      var u = t("f0c5"),
        n = Object(u.a)(
          i.default,
          n.b,
          n.c,
          !1,
          null,
          null,
          null,
          !1,
          n.a,
          void 0
        );
      r.default = n.exports;
    },
    5637: function (e, r, t) {},
    "5dc2": function (e, r, t) {
      t.d(r, "b", function () {
        return o;
      }),
        t.d(r, "c", function () {
          return n;
        }),
        t.d(r, "a", function () {});
      var o = function () {
          var r = this;
          r.$createElement;
          r._self._c,
            r._isMounted ||
              (r.e0 = function (e) {
                return r.routerTo.push("/pages/index/index");
              });
        },
        n = [];
    },
    b2e0: function (e, r, o) {
      (function (e, r) {
        var t = o("4ea4");
        o("f0a5"), t(o("66fd"));
        t = t(o("016f"));
        (e.__webpack_require_UNI_MP_PLUGIN__ = o), r(t.default);
      }).call(this, o("bc2e").default, o("543d").createPage);
    },
    d807: function (e, r, t) {
      var o = t("4ea4");
      Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.default = void 0);
      var n = o(t("9523"));
      function i(r, e) {
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
      function u(r) {
        for (var e = 1; e < arguments.length; e++) {
          var t = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? i(Object(t), !0).forEach(function (e) {
                (0, n.default)(r, e, t[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(t))
            : i(Object(t)).forEach(function (e) {
                Object.defineProperty(
                  r,
                  e,
                  Object.getOwnPropertyDescriptor(t, e)
                );
              });
        }
        return r;
      }
      t = {
        components: {},
        data: function () {
          return {
            routerTo: this.$Router,
            orderDetail: {},
            order_no: "",
            orderType: "goods",
            pay: null,
          };
        },
        computed: {},
        onLoad: function () {
          (this.pay = this.$Route.query.pay),
            (this.orderType = this.$Route.query.orderType),
            (this.order_no = this.$Route.query.order_no),
            this.getOrderDetail();
        },
        methods: u(
          u({}, (0, t("26cb").mapActions)(["getCartList"])),
          {},
          {
            jump: function (e, r) {
              this.$Router.push({ path: e, query: r });
            },
            replace: function (e, r) {
              this.$Router.replace({ path: e, query: r });
            },
            onOrder: function () {
              this.$Router.replace({
                path: "/pages/order/detail",
                query: {
                  order_no: this.orderDetail.order_no,
                  orderType: this.orderType,
                },
              });
            },
            getOrderDetail: function () {
              var r = this;
              "score" == this.orderType
                ? r
                    .$api("order.order_detail", {
                      order_no: r.order_no,
                      m: "wk_mall_plugin_jfsc",
                    })
                    .then(function (e) {
                      0 === e.errno && (r.orderDetail = e.data.order);
                    })
                : "goods" == this.orderType &&
                  r
                    .$api("order.order_detail", { order_no: r.order_no })
                    .then(function (e) {
                      0 === e.errno && (r.orderDetail = e.data.order);
                    });
            },
            onPay: function () {
              new ShoproPay(this.$Route.query.type, this.orderDetail);
            },
          }
        ),
      };
      r.default = t;
    },
    d8d5: function (e, r, t) {
      t.r(r);
      var o,
        n = t("d807"),
        i = t.n(n);
      for (o in n)
        ["default"].indexOf(o) < 0 &&
          (function (e) {
            t.d(r, e, function () {
              return n[e];
            });
          })(o);
      r.default = i.a;
    },
    e08f: function (e, r, t) {
      var o = t("5637");
      t.n(o).a;
    },
  },
  [["b2e0", "common/runtime", "common/vendor"]],
]);
