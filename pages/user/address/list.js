require("../common/vendor.js"),
  (global.webpackJsonp = global.webpackJsonp || []).push([
    ["pages/user/address/list"],
    {
      "0daf": function (t, n, e) {
        e.r(n);
        var a,
          i = e("89c7"),
          u = e.n(i);
        for (a in i)
          ["default"].indexOf(a) < 0 &&
            (function (t) {
              e.d(n, t, function () {
                return i[t];
              });
            })(a);
        n.default = u.a;
      },
      2963: function (t, n, e) {
        var a = e("9312");
        e.n(a).a;
      },
      "89c7": function (t, n, e) {
        (function (e) {
          Object.defineProperty(n, "__esModule", { value: !0 }),
            (n.default = void 0);
          var t = {
            components: {},
            data: function () {
              return { addressList: [], from: "" };
            },
            computed: {},
            onLoad: function () {
              this.$Route.query.from && (this.from = this.$Route.query.from);
            },
            onShow: function () {
              this.init();
            },
            methods: {
              init: function () {
                return Promise.all([this.getAddressList()]);
              },
              useAddress: function (t) {
                var n;
                this.from &&
                  ((((n = getCurrentPages())[n.length - 1].$vm,
                  n[n.length - 2].$vm).address = t),
                  e.navigateBack({ delta: 1 }));
              },
              jump: function (t, n) {
                this.$Router.push({ path: t, query: n });
              },
              getAddressList: function () {
                var n = this;
                this.$api("address.address_list").then(function (t) {
                  0 === t.errno && (n.addressList = t.data.list);
                });
              },
            },
          };
          n.default = t;
        }).call(this, e("543d").default);
      },
      9312: function (t, n, e) {},
      "9da5": function (t, n, a) {
        (function (t, n) {
          var e = a("4ea4");
          a("f0a5"), e(a("66fd"));
          e = e(a("c2fa"));
          (t.__webpack_require_UNI_MP_PLUGIN__ = a), n(e.default);
        }).call(this, a("bc2e").default, a("543d").createPage);
      },
      b264: function (t, n, e) {
        e.d(n, "b", function () {
          return a;
        }),
          e.d(n, "c", function () {
            return i;
          }),
          e.d(n, "a", function () {});
        var a = function () {
            this.$createElement;
            this._self._c;
          },
          i = [];
      },
      c2fa: function (t, n, e) {
        e.r(n);
        var a,
          i = e("b264"),
          u = e("0daf");
        for (a in u)
          ["default"].indexOf(a) < 0 &&
            (function (t) {
              e.d(n, t, function () {
                return u[t];
              });
            })(a);
        e("2963");
        var o = e("f0c5"),
          i = Object(o.a)(
            u.default,
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
        n.default = i.exports;
      },
    },
    [["9da5", "common/runtime", "common/vendor"]],
  ]);
