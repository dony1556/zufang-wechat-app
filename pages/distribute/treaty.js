(global.webpackJsonp = global.webpackJsonp || []).push([
  ["pages/distribute/treaty"],
  {
    "36ec": function (e, t, n) {},
    "629a": function (e, t, n) {
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
    "64b2": function (e, t, n) {
      n.r(t);
      var r,
        o = n("86c9"),
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
    "83fe": function (e, t, r) {
      (function (e, t) {
        var n = r("4ea4");
        r("f0a5"), n(r("66fd"));
        n = n(r("ed9d"));
        (e.__webpack_require_UNI_MP_PLUGIN__ = r), t(n.default);
      }).call(this, r("bc2e").default, r("543d").createPage);
    },
    "86c9": function (e, t, n) {
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
          return { list: [], store: {} };
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
            this.$api("distribute.settled_treaty", {}).then(function (e) {
              e = e.data.set;
              t.$refs.content.setContent(e.in_agreement);
            });
          },
        },
      };
      t.default = n;
    },
    ed9d: function (e, t, n) {
      n.r(t);
      var r,
        o = n("629a"),
        c = n("64b2");
      for (r in c)
        ["default"].indexOf(r) < 0 &&
          (function (e) {
            n.d(t, e, function () {
              return c[e];
            });
          })(r);
      n("f763");
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
      t.default = o.exports;
    },
    f763: function (e, t, n) {
      var r = n("36ec");
      n.n(r).a;
    },
  },
  [["83fe", "common/runtime", "common/vendor"]],
]);
