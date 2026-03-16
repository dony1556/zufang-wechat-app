(global.webpackJsonp = global.webpackJsonp || []).push([
  ["pages/order/express"],
  {
    "309a": function (e, t, r) {
      r.d(t, "b", function () {
        return n;
      }),
        r.d(t, "c", function () {
          return o;
        }),
        r.d(t, "a", function () {});
      var n = function () {
          this.$createElement;
          this._self._c;
        },
        o = [];
    },
    "3edb": function (e, t, r) {},
    "43dc": function (e, t, r) {
      r.r(t);
      var n,
        o = r("309a"),
        d = r("f0f7");
      for (n in d)
        ["default"].indexOf(n) < 0 &&
          (function (e) {
            r.d(t, e, function () {
              return d[e];
            });
          })(n);
      r("d784");
      var a = r("f0c5"),
        o = Object(a.a)(
          d.default,
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
    8927: function (e, t, r) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0),
        (t.default = {
          components: {},
          data: function () {
            return {
              order: { express_no: "", express_com: "" },
              status: "",
              express_list: [],
            };
          },
          onLoad: function () {
            this.getOrderDetail();
          },
          computed: {},
          methods: {
            getOrderItemDetail: function () {
              var t = this;
              t.$api("order.itemDetail", {
                id: t.$Route.query.orderId,
                order_item_id: t.$Route.query.ordrderItemId,
              }).then(function (e) {
                1 === e.errno && (t.goodsDetail = e.data[0]);
              });
            },
            getOrderDetail: function () {
              var t = this;
              t.$api("order.express_detail", {
                order_id: t.$Route.query.order_id,
              }).then(function (e) {
                0 == e.errno &&
                  ((t.order = e.data.order),
                  (t.status = e.data.status),
                  (t.express_list = e.data.express_list));
              });
            },
          },
        });
    },
    "9b8c": function (e, t, n) {
      (function (e, t) {
        var r = n("4ea4");
        n("f0a5"), r(n("66fd"));
        r = r(n("43dc"));
        (e.__webpack_require_UNI_MP_PLUGIN__ = n), t(r.default);
      }).call(this, n("bc2e").default, n("543d").createPage);
    },
    d784: function (e, t, r) {
      var n = r("3edb");
      r.n(n).a;
    },
    f0f7: function (e, t, r) {
      r.r(t);
      var n,
        o = r("8927"),
        d = r.n(o);
      for (n in o)
        ["default"].indexOf(n) < 0 &&
          (function (e) {
            r.d(t, e, function () {
              return o[e];
            });
          })(n);
      t.default = d.a;
    },
  },
  [["9b8c", "common/runtime", "common/vendor"]],
]);
