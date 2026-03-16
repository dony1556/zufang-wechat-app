(global.webpackJsonp = global.webpackJsonp || []).push([
  ["pages/work/help/list"],
  {
    "05e7": function (t, e, n) {
      n.d(e, "b", function () {
        return r;
      }),
        n.d(e, "c", function () {
          return i;
        }),
        n.d(e, "a", function () {});
      var r = function () {
          this.$createElement;
          this._self._c;
        },
        i = [];
    },
    "26f4": function (t, e, r) {
      (function (t, e) {
        var n = r("4ea4");
        r("f0a5"), n(r("66fd"));
        n = n(r("a9f1"));
        (t.__webpack_require_UNI_MP_PLUGIN__ = r), e(n.default);
      }).call(this, r("bc2e").default, r("543d").createPage);
    },
    "3b60": function (t, e, n) {
      var r = n("5e03");
      n.n(r).a;
    },
    "41b9": function (t, e, n) {
      n.r(e);
      var r,
        i = n("f9c1"),
        o = n.n(i);
      for (r in i)
        ["default"].indexOf(r) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return i[t];
            });
          })(r);
      e.default = o.a;
    },
    "5e03": function (t, e, n) {},
    a9f1: function (t, e, n) {
      n.r(e);
      var r,
        i = n("05e7"),
        o = n("41b9");
      for (r in o)
        ["default"].indexOf(r) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return o[t];
            });
          })(r);
      n("3b60");
      var c = n("f0c5"),
        i = Object(c.a)(
          o.default,
          i.b,
          i.c,
          !1,
          null,
          null,
          null,
          !1,
          i.a,
          void 0
        );
      e.default = i.exports;
    },
    f9c1: function (t, e, n) {
      var r = n("4ea4");
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0);
      var i = r(n("9523"));
      function o(e, t) {
        var n,
          r = Object.keys(e);
        return (
          Object.getOwnPropertySymbols &&
            ((n = Object.getOwnPropertySymbols(e)),
            t &&
              (n = n.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
            r.push.apply(r, n)),
          r
        );
      }
      n = {
        data: function () {
          return { list: [] };
        },
        onLoad: function (t) {
          this.init();
        },
        onShow: function () {},
        computed: (function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? o(Object(n), !0).forEach(function (t) {
                  (0, i.default)(e, t, n[t]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : o(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
          }
          return e;
        })(
          {},
          (0, n("26cb").mapState)({
            basicSet: function (t) {
              return t.init.basicSet;
            },
          })
        ),
        methods: {
          init: function () {
            this.getList();
          },
          toDetail: function (t) {
            this.$Router.push({
              path: "/pages/work/help/detail",
              query: { id: t },
            });
          },
          getList: function () {
            var e = this;
            this.$api("content.help_list", { type: 2 }).then(function (t) {
              e.list = t.data.list;
            });
          },
        },
      };
      e.default = n;
    },
  },
  [["26f4", "common/runtime", "common/vendor"]],
]);
