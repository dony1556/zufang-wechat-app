(global.webpackJsonp = global.webpackJsonp || []).push([
  ["pages/index/components/my-nav"],
  {
    2023: function (n, e, t) {
      t.d(e, "b", function () {
        return o;
      }),
        t.d(e, "c", function () {
          return a;
        }),
        t.d(e, "a", function () {});
      var o = function () {
          this.$createElement;
          this._self._c;
        },
        a = [];
    },
    "310b": function (n, e, t) {},
    "554e": function (n, e, t) {
      var o = t("310b");
      t.n(o).a;
    },
    a2c7: function (n, e, t) {
      t.r(e);
      var o,
        a = t("b80f"),
        c = t.n(a);
      for (o in a)
        ["default"].indexOf(o) < 0 &&
          (function (n) {
            t.d(e, n, function () {
              return a[n];
            });
          })(o);
      e.default = c.a;
    },
    b80f: function (n, e, t) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0);
      var o = {
        components: {},
        data: function () {
          return {};
        },
        props: { value: { type: Object, default: {} } },
        computed: {},
        created: function () {},
        methods: {
          routerTo: function (n) {
            var e = n.linkUrl;
            this.$tools.routerTo(e, n);
          },
        },
      };
      e.default = o;
    },
    e366: function (n, e, t) {
      t.r(e);
      var o,
        a = t("2023"),
        c = t("a2c7");
      for (o in c)
        ["default"].indexOf(o) < 0 &&
          (function (n) {
            t.d(e, n, function () {
              return c[n];
            });
          })(o);
      t("554e");
      var u = t("f0c5"),
        a = Object(u.a)(
          c.default,
          a.b,
          a.c,
          !1,
          null,
          null,
          null,
          !1,
          a.a,
          void 0
        );
      e.default = a.exports;
    },
  },
]),
  (global.webpackJsonp = global.webpackJsonp || []).push([
    "pages/index/components/my-nav-create-component",
    {
      "pages/index/components/my-nav-create-component": function (n, e, t) {
        t("543d").createComponent(t("e366"));
      },
    },
    [["pages/index/components/my-nav-create-component"]],
  ]);
