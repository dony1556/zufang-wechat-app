(global.webpackJsonp = global.webpackJsonp || []).push([
  ["pages/work/components/pub-img"],
  {
    "0f39": function (n, e, o) {},
    3829: function (n, e, o) {
      o.r(e);
      var t,
        c = o("c015"),
        u = o.n(c);
      for (t in c)
        ["default"].indexOf(t) < 0 &&
          (function (n) {
            o.d(e, n, function () {
              return c[n];
            });
          })(t);
      e.default = u.a;
    },
    "521f": function (n, e, o) {
      var t = o("0f39");
      o.n(t).a;
    },
    "95f0": function (n, e, o) {
      o.d(e, "b", function () {
        return t;
      }),
        o.d(e, "c", function () {
          return c;
        }),
        o.d(e, "a", function () {});
      var t = function () {
          this.$createElement;
          this._self._c;
        },
        c = [];
    },
    af40: function (n, e, o) {
      o.r(e);
      var t,
        c = o("95f0"),
        u = o("3829");
      for (t in u)
        ["default"].indexOf(t) < 0 &&
          (function (n) {
            o.d(e, n, function () {
              return u[n];
            });
          })(t);
      o("521f");
      var a = o("f0c5"),
        c = Object(a.a)(
          u.default,
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
    c015: function (n, e, o) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0);
      var t = {
        components: {},
        data: function () {
          return {};
        },
        props: { value: { type: Object, default: {} } },
        computed: {},
        created: function () {},
        methods: {
          routerTo: function (n) {
            this.$tools.routerTo(n);
          },
        },
      };
      e.default = t;
    },
  },
]),
  (global.webpackJsonp = global.webpackJsonp || []).push([
    "pages/work/components/pub-img-create-component",
    {
      "pages/work/components/pub-img-create-component": function (n, e, o) {
        o("543d").createComponent(o("af40"));
      },
    },
    [["pages/work/components/pub-img-create-component"]],
  ]);
