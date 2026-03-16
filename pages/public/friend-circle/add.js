require("../common/vendor.js"),
  (global.webpackJsonp = global.webpackJsonp || []).push([
    ["pages/public/friend-circle/add"],
    {
      "32a5": function (t, e, n) {
        var o = n("8d91");
        n.n(o).a;
      },
      "729f": function (t, e, n) {
        n.d(e, "b", function () {
          return o;
        }),
          n.d(e, "c", function () {
            return i;
          }),
          n.d(e, "a", function () {});
        var o = function () {
            this.$createElement;
            var t = (this._self._c, this.form.imgs.length);
            this.$mp.data = Object.assign({}, { $root: { g0: t } });
          },
          i = [];
      },
      "8d61": function (t, e, n) {
        (function (o) {
          var t = n("4ea4");
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.default = void 0);
          var i = t(n("9523"));
          function r(e, t) {
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
              return { isLoading: 1, form: { id: 0, title: "", imgs: [] } };
            },
            computed: (function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2
                  ? r(Object(n), !0).forEach(function (t) {
                      (0, i.default)(e, t, n[t]);
                    })
                  : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(
                      e,
                      Object.getOwnPropertyDescriptors(n)
                    )
                  : r(Object(n)).forEach(function (t) {
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
              (this.form.id = t.id || 0), this.init();
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
                  n = this.form;
                n.title
                  ? ((n = { id: n.id, title: n.title, imgs: n.imgs.join(",") }),
                    o.showLoading({ title: "正在提交" }),
                    e.$api("friend_circle.pub", n, "post").then(function (t) {
                      o.hideLoading(),
                        0 == t.errno &&
                          (e.$tools.toast("发布成功,等待审核"),
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
      "8d91": function (t, e, n) {},
      da52: function (t, e, n) {
        n.r(e);
        var o,
          i = n("729f"),
          r = n("ebd9");
        for (o in r)
          ["default"].indexOf(o) < 0 &&
            (function (t) {
              n.d(e, t, function () {
                return r[t];
              });
            })(o);
        n("32a5");
        var c = n("f0c5"),
          i = Object(c.a)(
            r.default,
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
      e02e: function (t, e, o) {
        (function (t, e) {
          var n = o("4ea4");
          o("f0a5"), n(o("66fd"));
          n = n(o("da52"));
          (t.__webpack_require_UNI_MP_PLUGIN__ = o), e(n.default);
        }).call(this, o("bc2e").default, o("543d").createPage);
      },
      ebd9: function (t, e, n) {
        n.r(e);
        var o,
          i = n("8d61"),
          r = n.n(i);
        for (o in i)
          ["default"].indexOf(o) < 0 &&
            (function (t) {
              n.d(e, t, function () {
                return i[t];
              });
            })(o);
        e.default = r.a;
      },
    },
    [["e02e", "common/runtime", "common/vendor"]],
  ]);
