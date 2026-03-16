(global.webpackJsonp = global.webpackJsonp || []).push([
  ["pages/agent/select-store"],
  {
    "1da8": function (t, e, n) {
      var o = n("4132");
      n.n(o).a;
    },
    "25a1": function (t, e, o) {
      (function (t, e) {
        var n = o("4ea4");
        o("f0a5"), n(o("66fd"));
        n = n(o("5a5c"));
        (t.__webpack_require_UNI_MP_PLUGIN__ = o), e(n.default);
      }).call(this, o("bc2e").default, o("543d").createPage);
    },
    "3a16": function (t, e, n) {
      n.d(e, "b", function () {
        return o;
      }),
        n.d(e, "c", function () {
          return c;
        }),
        n.d(e, "a", function () {});
      var o = function () {
          this.$createElement;
          this._self._c;
        },
        c = [];
    },
    4132: function (t, e, n) {},
    "4fca": function (t, n, i) {
      (function (e) {
        var t = i("4ea4");
        Object.defineProperty(n, "__esModule", { value: !0 }),
          (n.default = void 0);
        var o = t(i("9523"));
        function c(e, t) {
          var n,
            o = Object.keys(e);
          return (
            Object.getOwnPropertySymbols &&
              ((n = Object.getOwnPropertySymbols(e)),
              t &&
                (n = n.filter(function (t) {
                  return Object.getOwnPropertyDescriptor(e, t).enumerable;
                })),
              o.push.apply(o, n)),
            o
          );
        }
        t = {
          components: {},
          data: function () {
            return { list: [], isLoading: 1, searchKey: "" };
          },
          computed: (function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = null != arguments[t] ? arguments[t] : {};
              t % 2
                ? c(Object(n), !0).forEach(function (t) {
                    (0, o.default)(e, t, n[t]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    e,
                    Object.getOwnPropertyDescriptors(n)
                  )
                : c(Object(n)).forEach(function (t) {
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
            (0, i("26cb").mapState)({
              basicSet: function (t) {
                return t.init.basicSet;
              },
            })
          ),
          onLoad: function () {},
          onShow: function () {
            this.init();
          },
          onReady: function () {},
          methods: {
            init: function () {
              this.get_store_list();
            },
            get_store_list: function () {
              var e = this;
              e.$api("agent.get_store_list", { key: e.searchKey }).then(
                function (t) {
                  0 === t.errno
                    ? (e.list = t.data.list)
                    : e.$tools.toast(t.msg);
                }
              );
            },
            search: function () {
              this.get_store_list();
            },
            pre_see: function (t) {
              e.showLoading({ title: "正在加载中" }),
                this.$api("store.template_see", { template_id: t }).then(
                  function (t) {
                    0 == t.errno &&
                      ((t = t.data.url),
                      e.downloadFile({
                        url: t,
                        success: function (t) {
                          t = t.tempFilePath;
                          e.openDocument({
                            filePath: t,
                            showMenu: !0,
                            success: function (t) {
                              console.log("打开成功");
                            },
                            fail: function (t) {
                              console.log(t);
                            },
                          });
                        },
                        fail: function (t) {
                          console.log(t);
                        },
                        complete: function (t) {
                          e.hideLoading();
                        },
                      }));
                  }
                );
            },
            select: function (t) {
              var e = getCurrentPages();
              ((e[e.length - 1].$vm, e[e.length - 2].$vm).store = t),
                this.$Router.back();
            },
          },
        };
        n.default = t;
      }).call(this, i("543d").default);
    },
    "5a5c": function (t, e, n) {
      n.r(e);
      var o,
        c = n("3a16"),
        i = n("d964");
      for (o in i)
        ["default"].indexOf(o) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return i[t];
            });
          })(o);
      n("1da8");
      var r = n("f0c5"),
        c = Object(r.a)(
          i.default,
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
      e.default = c.exports;
    },
    d964: function (t, e, n) {
      n.r(e);
      var o,
        c = n("4fca"),
        i = n.n(c);
      for (o in c)
        ["default"].indexOf(o) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return c[t];
            });
          })(o);
      e.default = i.a;
    },
  },
  [["25a1", "common/runtime", "common/vendor"]],
]);
