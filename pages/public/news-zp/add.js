require("../common/vendor.js"),
  (global.webpackJsonp = global.webpackJsonp || []).push([
    ["pages/public/news-zp/add"],
    {
      "0cbb": function (t, e, n) {
        n.r(e);
        var o,
          i = n("e089"),
          c = n.n(i);
        for (o in i)
          ["default"].indexOf(o) < 0 &&
            (function (t) {
              n.d(e, t, function () {
                return i[t];
              });
            })(o);
        e.default = c.a;
      },
      4231: function (t, e, n) {
        var o = n("efbb");
        n.n(o).a;
      },
      "4a94": function (t, e, n) {
        n.d(e, "b", function () {
          return o;
        }),
          n.d(e, "c", function () {
            return i;
          }),
          n.d(e, "a", function () {});
        var o = function () {
            this.$createElement;
            var t = (this._self._c, this.imgs.length);
            this.$mp.data = Object.assign({}, { $root: { g0: t } });
          },
          i = [];
      },
      "694f": function (t, e, o) {
        (function (t, e) {
          var n = o("4ea4");
          o("f0a5"), n(o("66fd"));
          n = n(o("d207"));
          (t.__webpack_require_UNI_MP_PLUGIN__ = o), e(n.default);
        }).call(this, o("bc2e").default, o("543d").createPage);
      },
      d207: function (t, e, n) {
        n.r(e);
        var o,
          i = n("4a94"),
          c = n("0cbb");
        for (o in c)
          ["default"].indexOf(o) < 0 &&
            (function (t) {
              n.d(e, t, function () {
                return c[t];
              });
            })(o);
        n("4231");
        var r = n("f0c5"),
          i = Object(r.a)(
            c.default,
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
      e089: function (t, e, n) {
        (function (o) {
          var t = n("4ea4");
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.default = void 0);
          var i = t(n("9523"));
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
              return {
                isLoading: 1,
                tools: this.$tools,
                id: 0,
                imgs: [],
                imgsUrl: [],
                circle: {},
              };
            },
            computed: (function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2
                  ? c(Object(n), !0).forEach(function (t) {
                      (0, i.default)(e, t, n[t]);
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
              (0, n("26cb").mapState)({
                isLogin: function (t) {
                  return t.user.isLogin;
                },
                basicSet: function (t) {
                  return t.init.basicSet;
                },
              })
            ),
            onLoad: function () {
              var t = this.$Route.query;
              (this.id = t.id || 0), this.init();
            },
            onReady: function () {},
            beforeRouteLeave: function (t, e, n) {
              console.info("leave"), n();
            },
            methods: {
              init: function () {},
              onChooseImg: function (e, t) {
                var n = this,
                  t = t - e.length;
                n.$tools.chooseImage(t).then(function (t) {
                  t.forEach(function (t) {
                    n.$tools.uploadFile("file.upload", t).then(function (t) {
                      e.push(t.url);
                    });
                  });
                });
              },
              delImg: function (e, n) {
                o.showModal({
                  title: "删除照片",
                  content: "确定要删除这张照片么？",
                  cancelText: "取消",
                  confirmText: "删除",
                  success: function (t) {
                    t.confirm && e.splice(n, 1);
                  },
                });
              },
              formSubmit: function (t) {
                var e = this,
                  t = t.detail.value.title;
                t
                  ? ((t = { id: this.id, title: t, imgs: this.imgs.join(",") }),
                    o.showLoading({ title: "正在提交" }),
                    e.$api("news.add2", t, "post").then(function (t) {
                      o.hideLoading(),
                        0 == t.errno &&
                          (e.$tools.toast(t.data.msg),
                          setTimeout(function () {
                            e.$Router.back(1);
                          }, 500));
                    }))
                  : e.$tools.toast("请填写标题");
              },
            },
          };
          e.default = t;
        }).call(this, n("543d").default);
      },
      efbb: function (t, e, n) {},
    },
    [["694f", "common/runtime", "common/vendor"]],
  ]);
