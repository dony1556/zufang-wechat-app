(global.webpackJsonp = global.webpackJsonp || []).push([
  ["pages/work/components/pub-nav"],
  {
    "26fc": function (n, t, e) {
      e.r(t);
      var o,
        a = e("71b6"),
        u = e.n(a);
      for (o in a)
        ["default"].indexOf(o) < 0 &&
          (function (n) {
            e.d(t, n, function () {
              return a[n];
            });
          })(o);
      t.default = u.a;
    },
    "5fd0": function (n, t, e) {
      e.d(t, "b", function () {
        return o;
      }),
        e.d(t, "c", function () {
          return a;
        }),
        e.d(t, "a", function () {});
      var o = function () {
          this.$createElement;
          var n =
              (this._self._c, this.carousel ? this.value.data.length : null),
            t = this.carousel ? this.carousel.length : null;
          this.$mp.data = Object.assign({}, { $root: { g0: n, g1: t } });
        },
        a = [];
    },
    "71b6": function (n, t, e) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var o = {
        components: {},
        data: function () {
          return { categoryCurrent: 0 };
        },
        props: { value: { type: Object, default: {} } },
        computed: {
          carousel: function () {
            var n = [];
            return (
              this.value.data &&
                (n = this.sortData(
                  this.value.data,
                  2 * this.value.params.rowNum
                )),
              n
            );
          },
        },
        created: function () {},
        methods: {
          sortData: function (n, t) {
            var e = [],
              o = [];
            return (
              n.forEach(function (n) {
                o.length === t && (o = []),
                  0 === o.length && e.push(o),
                  o.push(n);
              }),
              e
            );
          },
          onSwiper: function (n) {
            this.categoryCurrent = n.detail.current;
          },
          routerTo: function (n) {
            var t = n.linkUrl;
            this.$tools.routerTo(t, n);
          },
        },
      };
      t.default = o;
    },
    be6a: function (n, t, e) {},
    d09c: function (n, t, e) {
      var o = e("be6a");
      e.n(o).a;
    },
    db03: function (n, t, e) {
      e.r(t);
      var o,
        a = e("5fd0"),
        u = e("26fc");
      for (o in u)
        ["default"].indexOf(o) < 0 &&
          (function (n) {
            e.d(t, n, function () {
              return u[n];
            });
          })(o);
      e("d09c");
      var r = e("f0c5"),
        a = Object(r.a)(
          u.default,
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
      t.default = a.exports;
    },
  },
]),
  (global.webpackJsonp = global.webpackJsonp || []).push([
    "pages/work/components/pub-nav-create-component",
    {
      "pages/work/components/pub-nav-create-component": function (n, t, e) {
        e("543d").createComponent(e("db03"));
      },
    },
    [["pages/work/components/pub-nav-create-component"]],
  ]);
