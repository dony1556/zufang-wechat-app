(global.webpackJsonp = global.webpackJsonp || []).push([
  ["pages/index/components/index-magic"],
  {
    "06d7": function (n, e, t) {
      t.r(e);
      var o,
        a = t("5a48"),
        c = t("8971");
      for (o in c)
        ["default"].indexOf(o) < 0 &&
          (function (n) {
            t.d(e, n, function () {
              return c[n];
            });
          })(o);
      t("2d82");
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
    "2d82": function (n, e, t) {
      var o = t("4330");
      t.n(o).a;
    },
    4330: function (n, e, t) {},
    "5a48": function (n, e, t) {
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
    8971: function (n, e, t) {
      t.r(e);
      var o,
        a = t("d5a5"),
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
    d5a5: function (n, e, t) {
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
  },
]),
  (global.webpackJsonp = global.webpackJsonp || []).push([
    "pages/index/components/index-magic-create-component",
    {
      "pages/index/components/index-magic-create-component": function (
        n,
        e,
        t
      ) {
        t("543d").createComponent(t("06d7"));
      },
    },
    [["pages/index/components/index-magic-create-component"]],
  ]);
