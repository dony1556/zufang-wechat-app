(global.webpackJsonp = global.webpackJsonp || []).push([
  ["pages/zs/components/zs-img-w"],
  {
    1646: function (n, e, t) {},
    "222a": function (n, e, t) {
      var o = t("1646");
      t.n(o).a;
    },
    "385f": function (n, e, t) {
      t.r(e);
      var o,
        c = t("9577"),
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
    9577: function (n, e, t) {
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
    d536: function (n, e, t) {
      t.r(e);
      var o,
        c = t("dd37"),
        a = t("385f");
      for (o in a)
        ["default"].indexOf(o) < 0 &&
          (function (n) {
            t.d(e, n, function () {
              return a[n];
            });
          })(o);
      t("222a");
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
    dd37: function (n, e, t) {
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
  },
]),
  (global.webpackJsonp = global.webpackJsonp || []).push([
    "pages/zs/components/zs-img-w-create-component",
    {
      "pages/zs/components/zs-img-w-create-component": function (n, e, t) {
        t("543d").createComponent(t("d536"));
      },
    },
    [["pages/zs/components/zs-img-w-create-component"]],
  ]);
