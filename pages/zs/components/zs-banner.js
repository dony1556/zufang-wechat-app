(global.webpackJsonp = global.webpackJsonp || []).push([
  ["pages/zs/components/zs-banner"],
  {
    "1ef0": function (n, e, t) {
      var o = t("f6cc");
      t.n(o).a;
    },
    ac09: function (n, e, t) {
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
    bfcb: function (n, e, t) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0);
      var o = {
        components: {},
        data: function () {
          return { swiperCurrent: 0 };
        },
        props: { value: { type: Object, default: {} } },
        created: function () {},
        computed: {
          swiper_height: function () {
            return (
              (this.value.params.height *
                (750 - 2 * this.value.params.paddingLR)) /
              (316 - 2 * this.value.params.paddingLR)
            );
          },
        },
        methods: {
          swiperChange: function (n) {
            this.swiperCurrent = n.detail.current;
          },
          routerTo: function (n) {
            var e = n.linkUrl;
            this.$tools.routerTo(e, n);
          },
        },
      };
      e.default = o;
    },
    cd61: function (n, e, t) {
      t.r(e);
      var o,
        a = t("ac09"),
        c = t("f833");
      for (o in c)
        ["default"].indexOf(o) < 0 &&
          (function (n) {
            t.d(e, n, function () {
              return c[n];
            });
          })(o);
      t("1ef0");
      var r = t("f0c5"),
        a = Object(r.a)(
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
    f6cc: function (n, e, t) {},
    f833: function (n, e, t) {
      t.r(e);
      var o,
        a = t("bfcb"),
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
  },
]),
  (global.webpackJsonp = global.webpackJsonp || []).push([
    "pages/zs/components/zs-banner-create-component",
    {
      "pages/zs/components/zs-banner-create-component": function (n, e, t) {
        t("543d").createComponent(t("cd61"));
      },
    },
    [["pages/zs/components/zs-banner-create-component"]],
  ]);
