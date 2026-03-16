(global.webpackJsonp = global.webpackJsonp || []).push([
  ["pages/agent/components/pub-nav"],
  {
    "36dd": function (n, t, e) {
      var a = e("edb4");
      e.n(a).a;
    },
    "97ec": function (n, t, e) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var a = {
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
              a = [];
            return (
              n.forEach(function (n) {
                a.length === t && (a = []),
                  0 === a.length && e.push(a),
                  a.push(n);
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
      t.default = a;
    },
    a396: function (n, t, e) {
      e.r(t);
      var a,
        o = e("aa0c"),
        u = e("d375");
      for (a in u)
        ["default"].indexOf(a) < 0 &&
          (function (n) {
            e.d(t, n, function () {
              return u[n];
            });
          })(a);
      e("36dd");
      var r = e("f0c5"),
        o = Object(r.a)(
          u.default,
          o.b,
          o.c,
          !1,
          null,
          null,
          null,
          !1,
          o.a,
          void 0
        );
      t.default = o.exports;
    },
    aa0c: function (n, t, e) {
      e.d(t, "b", function () {
        return a;
      }),
        e.d(t, "c", function () {
          return o;
        }),
        e.d(t, "a", function () {});
      var a = function () {
          this.$createElement;
          var n =
              (this._self._c, this.carousel ? this.value.data.length : null),
            t = this.carousel ? this.carousel.length : null;
          this.$mp.data = Object.assign({}, { $root: { g0: n, g1: t } });
        },
        o = [];
    },
    d375: function (n, t, e) {
      e.r(t);
      var a,
        o = e("97ec"),
        u = e.n(o);
      for (a in o)
        ["default"].indexOf(a) < 0 &&
          (function (n) {
            e.d(t, n, function () {
              return o[n];
            });
          })(a);
      t.default = u.a;
    },
    edb4: function (n, t, e) {},
  },
]),
  (global.webpackJsonp = global.webpackJsonp || []).push([
    "pages/agent/components/pub-nav-create-component",
    {
      "pages/agent/components/pub-nav-create-component": function (n, t, e) {
        e("543d").createComponent(e("a396"));
      },
    },
    [["pages/agent/components/pub-nav-create-component"]],
  ]);
