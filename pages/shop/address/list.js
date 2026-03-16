(global.webpackJsonp = global.webpackJsonp || []).push([
  ["pages/shop/address/list"],
  {
    "143b": function (t, n, e) {},
    "1ad1": function (t, n, u) {
      (function (t, n) {
        var e = u("4ea4");
        u("f0a5"), e(u("66fd"));
        e = e(u("6256"));
        (t.__webpack_require_UNI_MP_PLUGIN__ = u), n(e.default);
      }).call(this, u("bc2e").default, u("543d").createPage);
    },
    "56e5": function (t, n, e) {
      Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.default = void 0);
      var u = {
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
            this.getAddressList();
          },
          getAddressList: function () {
            var n = this;
            this.$api("address.address_list").then(function (t) {
              0 === t.errno && (n.addressList = t.data.list);
            });
          },
          useAddress: function (t) {
            var n = getCurrentPages();
            ((n[n.length - 1].$vm, n[n.length - 2].$vm).address = t),
              this.$Router.back();
          },
          jump: function (t, n) {
            this.$Router.push({ path: t, query: n });
          },
        },
      };
      n.default = u;
    },
    6256: function (t, n, e) {
      e.r(n);
      var u,
        i = e("8722"),
        o = e("959b");
      for (u in o)
        ["default"].indexOf(u) < 0 &&
          (function (t) {
            e.d(n, t, function () {
              return o[t];
            });
          })(u);
      e("e2b3");
      var r = e("f0c5"),
        i = Object(r.a)(
          o.default,
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
    8722: function (t, n, e) {
      e.d(n, "b", function () {
        return u;
      }),
        e.d(n, "c", function () {
          return i;
        }),
        e.d(n, "a", function () {});
      var u = function () {
          this.$createElement;
          this._self._c;
        },
        i = [];
    },
    "959b": function (t, n, e) {
      e.r(n);
      var u,
        i = e("56e5"),
        o = e.n(i);
      for (u in i)
        ["default"].indexOf(u) < 0 &&
          (function (t) {
            e.d(n, t, function () {
              return i[t];
            });
          })(u);
      n.default = o.a;
    },
    e2b3: function (t, n, e) {
      var u = e("143b");
      e.n(u).a;
    },
  },
  [["1ad1", "common/runtime", "common/vendor"]],
]);
