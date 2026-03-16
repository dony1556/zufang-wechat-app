(global.webpackJsonp = global.webpackJsonp || []).push([
  ["pages/article/components/article-list"],
  {
    2344: function (t, e, n) {},
    "357a": function (t, e, n) {
      n.r(e);
      var a,
        o = n("e484"),
        c = n("531b");
      for (a in c)
        ["default"].indexOf(a) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return c[t];
            });
          })(a);
      n("bcbf");
      var i = n("f0c5"),
        o = Object(i.a)(
          c.default,
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
      e.default = o.exports;
    },
    "531b": function (t, e, n) {
      n.r(e);
      var a,
        o = n("73b1"),
        c = n.n(o);
      for (a in o)
        ["default"].indexOf(a) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return o[t];
            });
          })(a);
      e.default = c.a;
    },
    "73b1": function (t, e, n) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0);
      var a = {
        name: "articleList",
        data: function () {
          return { toggleDelay: !1 };
        },
        props: {
          list: {
            type: Array,
            default: function (t) {
              return [];
            },
          },
        },
        computed: {},
        watch: {
          list: function (t, e) {
            var n = this;
            (this.toggleDelay = !0),
              setTimeout(function () {
                n.toggleDelay = !1;
              }, 1e3);
          },
        },
        methods: {
          navtoDetail: function (t) {
            this.$Router.push({
              path: "/pages/article/detail",
              query: { id: t },
            });
          },
        },
      };
      e.default = a;
    },
    bcbf: function (t, e, n) {
      var a = n("2344");
      n.n(a).a;
    },
    e484: function (t, e, n) {
      n.d(e, "b", function () {
        return a;
      }),
        n.d(e, "c", function () {
          return o;
        }),
        n.d(e, "a", function () {});
      var a = function () {
          this.$createElement;
          var t = (this._self._c, this.list.length);
          this.$mp.data = Object.assign({}, { $root: { g0: t } });
        },
        o = [];
    },
  },
]),
  (global.webpackJsonp = global.webpackJsonp || []).push([
    "pages/article/components/article-list-create-component",
    {
      "pages/article/components/article-list-create-component": function (
        t,
        e,
        n
      ) {
        n("543d").createComponent(n("357a"));
      },
    },
    [["pages/article/components/article-list-create-component"]],
  ]);
