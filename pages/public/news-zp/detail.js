require("../common/vendor.js"),
  (global.webpackJsonp = global.webpackJsonp || []).push([
    ["pages/public/news-zp/detail"],
    {
      "0eed": function (e, t, i) {
        (function (e, t) {
          var n = i("4ea4");
          i("f0a5"), n(i("66fd"));
          n = n(i("a400"));
          (e.__webpack_require_UNI_MP_PLUGIN__ = i), t(n.default);
        }).call(this, i("bc2e").default, i("543d").createPage);
      },
      "36a2": function (e, t, n) {},
      "4ae5": function (e, t, n) {
        n.d(t, "b", function () {
          return r;
        }),
          n.d(t, "c", function () {
            return o;
          }),
          n.d(t, "a", function () {
            return i;
          });
        var i = {
            wkLoginModal: function () {
              return n
                .e("components/wk-login-modal/index")
                .then(n.bind(null, "5198"));
            },
          },
          r = function () {
            this.$createElement;
            this._self._c;
          },
          o = [];
      },
      "58b1": function (e, n, o) {
        (function (t) {
          var e = o("4ea4");
          Object.defineProperty(n, "__esModule", { value: !0 }),
            (n.default = void 0);
          var i = e(o("9523"));
          function r(t, e) {
            var n,
              i = Object.keys(t);
            return (
              Object.getOwnPropertySymbols &&
                ((n = Object.getOwnPropertySymbols(t)),
                e &&
                  (n = n.filter(function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                  })),
                i.push.apply(i, n)),
              i
            );
          }
          e = {
            data: function () {
              return {
                tools: this.$tools,
                id: 0,
                page: 1,
                swiperList: [],
                isLoading: 1,
                detail: {},
              };
            },
            onLoad: function (e) {
              t.showShareMenu({
                withShareTicket: !1,
                menus: ["shareAppMessage", "shareTimeline"],
              });
            },
            onShow: function () {
              (this.id = this.$Route.query.id), this.init();
            },
            computed: (function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2
                  ? r(Object(n), !0).forEach(function (e) {
                      (0, i.default)(t, e, n[e]);
                    })
                  : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(
                      t,
                      Object.getOwnPropertyDescriptors(n)
                    )
                  : r(Object(n)).forEach(function (e) {
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
              (0, o("26cb").mapState)({
                basicSet: function (e) {
                  return e.init.basicSet;
                },
              })
            ),
            methods: {
              init: function () {
                var t = this;
                this.$api("news.zp_detail", { id: t.id }).then(function (e) {
                  t.detail = e.data.detail;
                });
              },
              onShareTimeline: function (e) {
                return { title: this.detail.title };
              },
            },
          };
          n.default = e;
        }).call(this, o("bc2e").default);
      },
      a400: function (e, t, n) {
        n.r(t);
        var i,
          r = n("4ae5"),
          o = n("e8ae");
        for (i in o)
          ["default"].indexOf(i) < 0 &&
            (function (e) {
              n.d(t, e, function () {
                return o[e];
              });
            })(i);
        n("de8b");
        var a = n("f0c5"),
          r = Object(a.a)(
            o.default,
            r.b,
            r.c,
            !1,
            null,
            null,
            null,
            !1,
            r.a,
            void 0
          );
        t.default = r.exports;
      },
      de8b: function (e, t, n) {
        var i = n("36a2");
        n.n(i).a;
      },
      e8ae: function (e, t, n) {
        n.r(t);
        var i,
          r = n("58b1"),
          o = n.n(r);
        for (i in r)
          ["default"].indexOf(i) < 0 &&
            (function (e) {
              n.d(t, e, function () {
                return r[e];
              });
            })(i);
        t.default = o.a;
      },
    },
    [["0eed", "common/runtime", "common/vendor"]],
  ]);
