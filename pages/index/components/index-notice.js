(global.webpackJsonp = global.webpackJsonp || []).push([
  ["pages/index/components/index-notice"],
  {
    "0887f": function (n, e, t) {
      t.d(e, "b", function () {
        return o;
      }),
        t.d(e, "c", function () {
          return c;
        }),
        t.d(e, "a", function () {});
      var o = function () {
          this.$createElement;
          this._self._c;
        },
        c = [];
    },
    "7f15": function (n, e, t) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0);
      var o = {
        components: {},
        data: function () {
          return { swiperCurrent: 0, interval: 3e3 };
        },
        props: { value: { type: Object, default: {} } },
        created: function () {},
        computed: {},
        methods: {
          swiperChange: function (n) {
            this.swiperCurrent = n.detail.current;
          },
          navTo: function (n) {
            var e = n.linkUrl;
            this.$tools.routerTo(e, n);
          },
        },
      };
      e.default = o;
    },
    "907e": function (n, e, t) {
      var o = t("9ed5");
      t.n(o).a;
    },
    "9ed5": function (n, e, t) {},
    c5fd: function (n, e, t) {
      t.r(e);
      var o,
        c = t("0887f"),
        i = t("e683");
      for (o in i)
        ["default"].indexOf(o) < 0 &&
          (function (n) {
            t.d(e, n, function () {
              return i[n];
            });
          })(o);
      t("907e");
      var a = t("f0c5"),
        c = Object(a.a)(
          i.default,
          c.b,
          c.c,
          !1,
          null,
          null,
          null,
          !1,
          c.a,
          void 0
        );
      e.default = c.exports;
    },
    e683: function (n, e, t) {
      t.r(e);
      var o,
        c = t("7f15"),
        i = t.n(c);
      for (o in c)
        ["default"].indexOf(o) < 0 &&
          (function (n) {
            t.d(e, n, function () {
              return c[n];
            });
          })(o);
      e.default = i.a;
    },
  },
]),
  (global.webpackJsonp = global.webpackJsonp || []).push([
    "pages/index/components/index-notice-create-component",
    {
      "pages/index/components/index-notice-create-component": function (
        n,
        e,
        t
      ) {
        t("543d").createComponent(t("c5fd"));
      },
    },
    [["pages/index/components/index-notice-create-component"]],
  ]);
