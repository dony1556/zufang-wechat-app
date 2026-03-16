(global.webpackJsonp = global.webpackJsonp || []).push([
  ["pages/work/components/pub-banner"],
  {
    "0886": function (n, e, t) {
      t.r(e);
      var o,
        a = t("91e7"),
        r = t.n(a);
      for (o in a)
        ["default"].indexOf(o) < 0 &&
          (function (n) {
            t.d(e, n, function () {
              return a[n];
            });
          })(o);
      e.default = r.a;
    },
    "7ee1": function (n, e, t) {},
    "91e7": function (n, e, t) {
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
    a0d4: function (n, e, t) {
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
    c057: function (n, e, t) {
      var o = t("7ee1");
      t.n(o).a;
    },
    e443: function (n, e, t) {
      t.r(e);
      var o,
        a = t("a0d4"),
        r = t("0886");
      for (o in r)
        ["default"].indexOf(o) < 0 &&
          (function (n) {
            t.d(e, n, function () {
              return r[n];
            });
          })(o);
      t("c057");
      var u = t("f0c5"),
        a = Object(u.a)(
          r.default,
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
    "pages/work/components/pub-banner-create-component",
    {
      "pages/work/components/pub-banner-create-component": function (n, e, t) {
        t("543d").createComponent(t("e443"));
      },
    },
    [["pages/work/components/pub-banner-create-component"]],
  ]);
