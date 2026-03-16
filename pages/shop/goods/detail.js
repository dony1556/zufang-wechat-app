(global.webpackJsonp = global.webpackJsonp || []).push([
  ["pages/shop/goods/detail"],
  {
    "0c32": function (t, e, n) {
      n.r(e);
      var o,
        i = n("218e"),
        r = n("144b");
      for (o in r)
        ["default"].indexOf(o) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return r[t];
            });
          })(o);
      n("9024");
      var u = n("f0c5"),
        i = Object(u.a)(
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
      e.default = i.exports;
    },
    "144b": function (t, e, n) {
      n.r(e);
      var o,
        i = n("fd4d"),
        r = n.n(i);
      for (o in i)
        ["default"].indexOf(o) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return i[t];
            });
          })(o);
      e.default = r.a;
    },
    "218e": function (t, e, n) {
      n.d(e, "b", function () {
        return i;
      }),
        n.d(e, "c", function () {
          return r;
        }),
        n.d(e, "a", function () {
          return o;
        });
      var o = {
          wkSkeletons: function () {
            return n
              .e("components/wk-skeletons/index")
              .then(n.bind(null, "d3c1"));
          },
        },
        i = function () {
          this.$createElement;
          this._self._c;
        },
        r = [];
    },
    "5d25": function (t, e, n) {},
    9024: function (t, e, n) {
      var o = n("5d25");
      n.n(o).a;
    },
    b55b: function (t, e, o) {
      (function (t, e) {
        var n = o("4ea4");
        o("f0a5"), n(o("66fd"));
        n = n(o("0c32"));
        (t.__webpack_require_UNI_MP_PLUGIN__ = o), e(n.default);
      }).call(this, o("bc2e").default, o("543d").createPage);
    },
    fd4d: function (t, n, r) {
      (function (e) {
        var t = r("4ea4");
        Object.defineProperty(n, "__esModule", { value: !0 }),
          (n.default = void 0);
        var o = t(r("9523"));
        function i(e, t) {
          var n,
            o = Object.keys(e);
          return (
            Object.getOwnPropertySymbols &&
              ((n = Object.getOwnPropertySymbols(e)),
              t &&
                (n = n.filter(function (t) {
                  return Object.getOwnPropertyDescriptor(e, t).enumerable;
                })),
              o.push.apply(o, n)),
            o
          );
        }
        t = {
          data: function () {
            return { goodsList: [], swiperList: [], goods: {} };
          },
          onLoad: function (t) {
            var e = this.$Route.query;
            (this.goods.id = e.id), this.init();
          },
          onShow: function () {},
          computed: (function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = null != arguments[t] ? arguments[t] : {};
              t % 2
                ? i(Object(n), !0).forEach(function (t) {
                    (0, o.default)(e, t, n[t]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    e,
                    Object.getOwnPropertyDescriptors(n)
                  )
                : i(Object(n)).forEach(function (t) {
                    Object.defineProperty(
                      e,
                      t,
                      Object.getOwnPropertyDescriptor(n, t)
                    );
                  });
            }
            return e;
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
              this.getGoodsDetail();
            },
            getGoodsDetail: function () {
              var e = this;
              this.$api("integral.goods_detail", { id: e.goods.id }).then(
                function (t) {
                  (e.goods = t.data.goods), (e.isLoading = 0);
                }
              );
            },
            backHome: function () {
              this.$Router.pushTab({ path: "/pages/index/index" });
            },
            detail: function (t) {
              this.$Router.push({
                path: "/pages/index/goods-detail",
                query: { id: t },
              });
            },
            buyNow: function () {
              this.$Router.push({
                path: "/pages/shop/order/confirm",
                query: { id: this.goods.id, num: 1 },
              });
            },
            call: function () {
              var t = this.basicSet.phone;
              t && e.makePhoneCall({ phoneNumber: t });
            },
          },
        };
        n.default = t;
      }).call(this, r("543d").default);
    },
  },
  [["b55b", "common/runtime", "common/vendor"]],
]);
