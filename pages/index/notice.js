(global.webpackJsonp = global.webpackJsonp || []).push([
  ["pages/index/notice"],
  {
    2051: function (e, t, n) {
      n.d(t, "b", function () {
        return i;
      }),
        n.d(t, "c", function () {
          return c;
        }),
        n.d(t, "a", function () {});
      var i = function () {
          this.$createElement;
          this._self._c;
        },
        c = [];
    },
    3584: function (e, t, n) {
      (function (i) {
        var e = n("4ea4");
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = void 0);
        var c = e(n("9523"));
        function o(t, e) {
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
            return { user: {}, xcx_set: {} };
          },
          computed: (function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var n = null != arguments[e] ? arguments[e] : {};
              e % 2
                ? o(Object(n), !0).forEach(function (e) {
                    (0, c.default)(t, e, n[e]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    t,
                    Object.getOwnPropertyDescriptors(n)
                  )
                : o(Object(n)).forEach(function (e) {
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
          onLoad: function (e) {
            this.init();
          },
          onShow: function () {},
          methods: {
            init: function () {
              var t = this;
              this.$api("notice.notice_init", {}).then(function (e) {
                t.user = e.data.user;
              });
            },
            yy_add: function () {
              var t = this;
              i.requestSubscribeMessage({
                tmplIds: [t.basicSet.set.yy_tmp_id],
                success: function (e) {
                  "requestSubscribeMessage:ok" == e.errMsg &&
                    t.$api("notice.yy_add", {}, "post").then(function (e) {
                      t.init();
                    });
                },
                fail: function (e) {},
              });
            },
            handler_new_add: function () {
              this.news_add();
            },
            news_add: function () {
              var n = this;
              return new Promise(function (e, t) {
                i.requestSubscribeMessage({
                  tmplIds: [n.basicSet.set.news_tmp_id],
                  success: function (e) {
                    "requestSubscribeMessage:ok" == e.errMsg &&
                      n.$api("notice.news_add", {}, "post").then(function (e) {
                        n.init();
                      });
                  },
                  fail: function (e) {
                    console.info(e);
                  },
                  complete: function () {
                    e();
                  },
                });
              });
            },
            hp_add: function () {
              var t = this;
              i.requestSubscribeMessage({
                tmplIds: [t.basicSet.set.hp_tmp_id],
                success: function (e) {
                  console.info(e),
                    "requestSubscribeMessage:ok" == e.errMsg &&
                      t.$api("notice.hp_add", {}, "post").then(function (e) {
                        t.init();
                      });
                },
                fail: function (e) {},
              });
            },
            check_add: function () {
              var t = this;
              i.requestSubscribeMessage({
                tmplIds: [t.basicSet.set.check_tmp_id],
                success: function (e) {
                  console.info(e),
                    "requestSubscribeMessage:ok" == e.errMsg &&
                      t.$api("notice.check_add", {}, "post").then(function (e) {
                        t.init();
                      });
                },
                fail: function (e) {},
              });
            },
          },
        };
        t.default = e;
      }).call(this, n("bc2e").default);
    },
    "4f09": function (e, t, i) {
      (function (e, t) {
        var n = i("4ea4");
        i("f0a5"), n(i("66fd"));
        n = n(i("b688"));
        (e.__webpack_require_UNI_MP_PLUGIN__ = i), t(n.default);
      }).call(this, i("bc2e").default, i("543d").createPage);
    },
    "5b74": function (e, t, n) {
      var i = n("9598");
      n.n(i).a;
    },
    9598: function (e, t, n) {},
    b688: function (e, t, n) {
      n.r(t);
      var i,
        c = n("2051"),
        o = n("f695");
      for (i in o)
        ["default"].indexOf(i) < 0 &&
          (function (e) {
            n.d(t, e, function () {
              return o[e];
            });
          })(i);
      n("5b74");
      var s = n("f0c5"),
        c = Object(s.a)(
          o.default,
          c.b,
          c.c,
          !1,
          null,
          null,
          null,
          !1,
          c.a,
          void 0
        );
      t.default = c.exports;
    },
    f695: function (e, t, n) {
      n.r(t);
      var i,
        c = n("3584"),
        o = n.n(c);
      for (i in c)
        ["default"].indexOf(i) < 0 &&
          (function (e) {
            n.d(t, e, function () {
              return c[e];
            });
          })(i);
      t.default = o.a;
    },
  },
  [["4f09", "common/runtime", "common/vendor"]],
]);
