(global.webpackJsonp = global.webpackJsonp || []).push([
  ["pages/work/treaty"],
  {
    "0079": function (e, t, n) {},
    "39aa": function (e, t, n) {
      n.r(t);
      var r,
        o = n("887b"),
        c = n("706e");
      for (r in c)
        ["default"].indexOf(r) < 0 &&
          (function (e) {
            n.d(t, e, function () {
              return c[e];
            });
          })(r);
      n("8cee");
      var a = n("f0c5"),
        o = Object(a.a)(
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
      t.default = o.exports;
    },
    "706e": function (e, t, n) {
      n.r(t);
      var r,
        o = n("d0ed"),
        c = n.n(o);
      for (r in o)
        ["default"].indexOf(r) < 0 &&
          (function (e) {
            n.d(t, e, function () {
              return o[e];
            });
          })(r);
      t.default = c.a;
    },
    "887b": function (e, t, n) {
      n.d(t, "b", function () {
        return o;
      }),
        n.d(t, "c", function () {
          return c;
        }),
        n.d(t, "a", function () {
          return r;
        });
      var r = {
          wkParser: function () {
            return Promise.all([
              n.e("common/vendor"),
              n.e("components/wk-parser/index"),
            ]).then(n.bind(null, "faee"));
          },
        },
        o = function () {
          this.$createElement;
          this._self._c;
        },
        c = [];
    },
    "8cee": function (e, t, n) {
      var r = n("0079");
      n.n(r).a;
    },
    cb4d: function (e, t, r) {
      (function (e, t) {
        var n = r("4ea4");
        r("f0a5"), n(r("66fd"));
        n = n(r("39aa"));
        (e.__webpack_require_UNI_MP_PLUGIN__ = r), t(n.default);
      }).call(this, r("bc2e").default, r("543d").createPage);
    },
    d0ed: function (e, t, n) {
      var r = n("4ea4");
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var o = r(n("9523"));
      function c(t, e) {
        var n,
          r = Object.keys(t);
        return (
          Object.getOwnPropertySymbols &&
            ((n = Object.getOwnPropertySymbols(t)),
            e &&
              (n = n.filter(function (e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable;
              })),
            r.push.apply(r, n)),
          r
        );
      }
      n = {
        data: function () {
          return { store: {} };
        },
        onLoad: function (e) {
          this.init();
        },
        computed: (function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {};
            e % 2
              ? c(Object(n), !0).forEach(function (e) {
                  (0, o.default)(t, e, n[e]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
              : c(Object(n)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(n, e)
                  );
                });
          }
          return t;
        })(
          {},
          (0, n("26cb").mapState)({
            basicSet: function (e) {
              return e.init.basicSet;
            },
          })
        ),
        onShow: function () {},
        methods: {
          init: function () {
            var t = this;
            this.$api("work.register_treaty", {}).then(function (e) {
              e = e.data.set;
              t.$refs.content.setContent(e.settled_treaty);
            });
          },
        },
      };
      t.default = n;
    },
  },
  [["cb4d", "common/runtime", "common/vendor"]],
]);
