(global.webpackJsonp = global.webpackJsonp || []).push([
  ["pages/app/score/children/sh-score-goods"],
  {
    "1ce7": function (e, n, o) {
      o.r(n);
      var c,
        t = o("c4f1"),
        a = o.n(t);
      for (c in t)
        ["default"].indexOf(c) < 0 &&
          (function (e) {
            o.d(n, e, function () {
              return t[e];
            });
          })(c);
      n.default = a.a;
    },
    "7b46": function (e, n, o) {
      o.r(n);
      var c,
        t = o("e1ea"),
        a = o("1ce7");
      for (c in a)
        ["default"].indexOf(c) < 0 &&
          (function (e) {
            o.d(n, e, function () {
              return a[e];
            });
          })(c);
      o("93a3");
      var r = o("f0c5"),
        t = Object(r.a)(
          a.default,
          t.b,
          t.c,
          !1,
          null,
          null,
          null,
          !1,
          t.a,
          void 0
        );
      n.default = t.exports;
    },
    "93a3": function (e, n, o) {
      var c = o("9637");
      o.n(c).a;
    },
    9637: function (e, n, o) {},
    c4f1: function (e, n, o) {
      Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.default = void 0),
        (n.default = {
          components: {},
          data: function () {
            return {};
          },
          computed: {},
          props: { scoreData: {} },
          methods: {
            jump: function (e, n) {
              this.$Router.push({ path: e, query: n });
            },
          },
        });
    },
    e1ea: function (e, n, o) {
      o.d(n, "b", function () {
        return c;
      }),
        o.d(n, "c", function () {
          return t;
        }),
        o.d(n, "a", function () {});
      var c = function () {
          this.$createElement;
          this._self._c;
        },
        t = [];
    },
  },
]),
  (global.webpackJsonp = global.webpackJsonp || []).push([
    "pages/app/score/children/sh-score-goods-create-component",
    {
      "pages/app/score/children/sh-score-goods-create-component": function (
        e,
        n,
        o
      ) {
        o("543d").createComponent(o("7b46"));
      },
    },
    [["pages/app/score/children/sh-score-goods-create-component"]],
  ]);
