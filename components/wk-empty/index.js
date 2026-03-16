(global.webpackJsonp = global.webpackJsonp || []).push([
  ["components/wk-empty/index"],
  {
    "06c6": function (n, e, t) {
      t.r(e);
      var o,
        c = t("5c9d"),
        a = t.n(c);
      for (o in c)
        ["default"].indexOf(o) < 0 &&
          (function (n) {
            t.d(e, n, function () {
              return c[n];
            });
          })(o);
      e.default = a.a;
    },
    "150e": function (n, e, t) {},
    "5c9d": function (n, e, t) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0);
      var o = {
        name: "wkEmpty",
        components: {},
        data: function () {
          return { tools: this.$tools };
        },
        props: { emptyData: {}, isFixed: { type: Boolean, default: !0 } },
        computed: {},
        methods: {},
      };
      e.default = o;
    },
    "6fef": function (n, e, t) {
      t.d(e, "b", function () {
        return o;
      }),
        t.d(e, "c", function () {
          return c;
        }),
        t.d(e, "a", function () {});
      var o = function () {
          var e = this;
          e.$createElement;
          e._self._c,
            e._isMounted ||
              (e.e0 = function (n) {
                return e.tools.routerTo(e.emptyData.path);
              });
        },
        c = [];
    },
    7090: function (n, e, t) {
      t.r(e);
      var o,
        c = t("6fef"),
        a = t("06c6");
      for (o in a)
        ["default"].indexOf(o) < 0 &&
          (function (n) {
            t.d(e, n, function () {
              return a[n];
            });
          })(o);
      t("d106");
      var u = t("f0c5"),
        c = Object(u.a)(
          a.default,
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
    d106: function (n, e, t) {
      var o = t("150e");
      t.n(o).a;
    },
  },
]),
  (global.webpackJsonp = global.webpackJsonp || []).push([
    "components/wk-empty/index-create-component",
    {
      "components/wk-empty/index-create-component": function (n, e, t) {
        t("543d").createComponent(t("7090"));
      },
    },
    [["components/wk-empty/index-create-component"]],
  ]);
