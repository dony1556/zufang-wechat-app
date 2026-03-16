(global.webpackJsonp = global.webpackJsonp || []).push([
  ["pages/app/score/children/sh-score-menu"],
  {
    "64df": function (e, n, t) {
      t.d(n, "b", function () {
        return o;
      }),
        t.d(n, "c", function () {
          return u;
        }),
        t.d(n, "a", function () {});
      var o = function () {
          var t = this,
            e =
              (t.$createElement,
              t._self._c,
              t.carousel ? t.value.length : null),
            n = t.carousel ? t.value.length : null,
            o = t.carousel
              ? t.__map(t.carousel, function (e, n) {
                  return { $orig: t.__get_orig(e), g2: t.value.data.length };
                })
              : null,
            u = t.carousel ? t.carousel.length : null;
          t.$mp.data = Object.assign(
            {},
            { $root: { g0: e, g1: n, l0: o, g3: u } }
          );
        },
        u = [];
    },
    7899: function (e, n, t) {},
    "832e": function (e, n, t) {
      Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.default = void 0);
      var o = {
        components: {},
        data: function () {
          return { categoryCurrent: 0 };
        },
        props: {
          value: { type: Array, default: [] },
          num: { type: Number, default: 4 },
          imgW: { type: Number, default: 88 },
        },
        computed: {
          carousel: function () {
            if (this.value) return this.sortData(this.value, 2 * this.num);
          },
        },
        created: function () {},
        methods: {
          sortData: function (e, n) {
            var t = [],
              o = [];
            return (
              e.forEach(function (e) {
                o.length === n && (o = []),
                  0 === o.length && t.push(o),
                  o.push(e);
              }),
              t
            );
          },
          onSwiper: function (e) {
            this.categoryCurrent = e.detail.current;
          },
          jump: function (e, n) {
            this.$Router.push({ path: e, query: n });
          },
          routerTo: function (e) {
            console.info(),
              console.info(e.id),
              this.$Router.push({
                path: "/pages/app/score/list",
                params: { category_id: e.id },
              });
          },
        },
      };
      n.default = o;
    },
    a682: function (e, n, t) {
      t.r(n);
      var o,
        u = t("64df"),
        a = t("b839");
      for (o in a)
        ["default"].indexOf(o) < 0 &&
          (function (e) {
            t.d(n, e, function () {
              return a[e];
            });
          })(o);
      t("dfb8");
      var r = t("f0c5"),
        u = Object(r.a)(
          a.default,
          u.b,
          u.c,
          !1,
          null,
          null,
          null,
          !1,
          u.a,
          void 0
        );
      n.default = u.exports;
    },
    b839: function (e, n, t) {
      t.r(n);
      var o,
        u = t("832e"),
        a = t.n(u);
      for (o in u)
        ["default"].indexOf(o) < 0 &&
          (function (e) {
            t.d(n, e, function () {
              return u[e];
            });
          })(o);
      n.default = a.a;
    },
    dfb8: function (e, n, t) {
      var o = t("7899");
      t.n(o).a;
    },
  },
]),
  (global.webpackJsonp = global.webpackJsonp || []).push([
    "pages/app/score/children/sh-score-menu-create-component",
    {
      "pages/app/score/children/sh-score-menu-create-component": function (
        e,
        n,
        t
      ) {
        t("543d").createComponent(t("a682"));
      },
    },
    [["pages/app/score/children/sh-score-menu-create-component"]],
  ]);
