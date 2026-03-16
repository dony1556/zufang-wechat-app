(global.webpackJsonp = global.webpackJsonp || []).push([
  ["components/wk-skeletons/index"],
  {
    4663: function (n, e, t) {
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
    6799: function (n, e, t) {
      var o = t("74fb");
      t.n(o).a;
    },
    "74fb": function (n, e, t) {},
    c66d: function (n, e, t) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0);
      var o = {
        name: "wkSkeletons",
        components: {},
        data: function () {
          return {
            skeletonsDot: {
              index: "/static/imgs/skeleton_screen/index.jpg",
              detail: "/static/imgs/skeleton_screen/detail.jpg",
              goodsList: "/static/imgs/skeleton_screen/list.jpg",
            },
          };
        },
        props: { type: String, default: "detail" },
        computed: {},
        methods: {},
      };
      e.default = o;
    },
    c9d8: function (n, e, t) {
      t.r(e);
      var o,
        c = t("c66d"),
        s = t.n(c);
      for (o in c)
        ["default"].indexOf(o) < 0 &&
          (function (n) {
            t.d(e, n, function () {
              return c[n];
            });
          })(o);
      e.default = s.a;
    },
    d3c1: function (n, e, t) {
      t.r(e);
      var o,
        c = t("4663"),
        s = t("c9d8");
      for (o in s)
        ["default"].indexOf(o) < 0 &&
          (function (n) {
            t.d(e, n, function () {
              return s[n];
            });
          })(o);
      t("6799");
      var i = t("f0c5"),
        c = Object(i.a)(
          s.default,
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
  },
]),
  (global.webpackJsonp = global.webpackJsonp || []).push([
    "components/wk-skeletons/index-create-component",
    {
      "components/wk-skeletons/index-create-component": function (n, e, t) {
        t("543d").createComponent(t("d3c1"));
      },
    },
    [["components/wk-skeletons/index-create-component"]],
  ]);
