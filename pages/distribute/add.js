(global.webpackJsonp = global.webpackJsonp || []).push([
  ["pages/distribute/add"],
  {
    3625: function (t, e, n) {},
    "38dc": function (t, e, n) {
      n.r(e);
      var i,
        o = n("5e72"),
        r = n("f656");
      for (i in r)
        ["default"].indexOf(i) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return r[t];
            });
          })(i);
      n("a63c");
      var a = n("f0c5"),
        o = Object(a.a)(
          r.default,
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
    "5e72": function (t, e, n) {
      n.d(e, "b", function () {
        return i;
      }),
        n.d(e, "c", function () {
          return o;
        }),
        n.d(e, "a", function () {});
      var i = function () {
          this.$createElement;
          var t = (this._self._c, this.card.length);
          this.$mp.data = Object.assign({}, { $root: { g0: t } });
        },
        o = [];
    },
    "7fed": function (t, e, n) {
      (function (i) {
        var t = n("4ea4");
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.default = void 0);
        var o = t(n("9523"));
        function r(e, t) {
          var n,
            i = Object.keys(e);
          return (
            Object.getOwnPropertySymbols &&
              ((n = Object.getOwnPropertySymbols(e)),
              t &&
                (n = n.filter(function (t) {
                  return Object.getOwnPropertyDescriptor(e, t).enumerable;
                })),
              i.push.apply(i, n)),
            i
          );
        }
        t = {
          components: {},
          data: function () {
            return {
              id: 0,
              name: "",
              tel: "",
              card: [],
              treaty_agree: !1,
              distribute_set: {},
              swiperList: [],
            };
          },
          computed: (function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = null != arguments[t] ? arguments[t] : {};
              t % 2
                ? r(Object(n), !0).forEach(function (t) {
                    (0, o.default)(e, t, n[t]);
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
              cityArea: function (t) {
                return t.init.cityArea;
              },
              store_id: function (t) {
                return t.init.store_id;
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
              var e = this;
              this.$api("distribute.settled_init", {}).then(function (t) {
                t = t.data.distribute_set;
                (e.distribute_set = t), (e.swiperList = [{ img: t.img }]);
              });
            },
            handTreaty: function () {
              this.treaty_agree = !this.treaty_agree;
            },
            navToTreaty: function () {
              this.$Router.push({
                path: "/pages/distribute/treaty",
                query: {},
              });
            },
            formSubmit: function () {
              var t,
                e = this;
              this.treaty_agree
                ? this.name
                  ? this.phone
                    ? 0 != this.card.length
                      ? ((t = {
                          id: this.id,
                          name: this.name,
                          phone: this.phone,
                          card: this.card.join(","),
                        }),
                        i.showLoading({ title: "正在提交中" }),
                        e
                          .$api("distribute.distribute_edit", t, "post")
                          .then(function (t) {
                            i.hideLoading(),
                              0 == t.errno
                                ? (e.$tools.toast(t.data.msg),
                                  setTimeout(function () {
                                    e.$Router.pushTab({
                                      path: "/pages/index/my",
                                      query: {},
                                    });
                                  }, 800))
                                : e.$tools.toast(t.msg);
                          }))
                      : e.$tools.toast("请上传身份证照片")
                    : e.$tools.toast("请填写联系电话")
                  : e.$tools.toast("请填写真实姓名")
                : e.$tools.toast("请先查看分销协议并同意");
            },
            onChooseImg: function (e, t) {
              var n = this,
                t = t - e.length;
              n.$tools.chooseImage(t).then(function (t) {
                t.forEach(function (t) {
                  n.$tools.uploadFile("file.uploadImage", t).then(function (t) {
                    e.push(t.data.url);
                  });
                });
              });
            },
            delImg: function (e, n) {
              i.showModal({
                title: "删除照片",
                content: "确定要删除这张照片么？",
                cancelText: "取消",
                confirmText: "删除",
                success: function (t) {
                  t.confirm && e.splice(n, 1);
                },
              });
            },
          },
        };
        e.default = t;
      }).call(this, n("543d").default);
    },
    8407: function (t, e, i) {
      (function (t, e) {
        var n = i("4ea4");
        i("f0a5"), n(i("66fd"));
        n = n(i("38dc"));
        (t.__webpack_require_UNI_MP_PLUGIN__ = i), e(n.default);
      }).call(this, i("bc2e").default, i("543d").createPage);
    },
    a63c: function (t, e, n) {
      var i = n("3625");
      n.n(i).a;
    },
    f656: function (t, e, n) {
      n.r(e);
      var i,
        o = n("7fed"),
        r = n.n(o);
      for (i in o)
        ["default"].indexOf(i) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return o[t];
            });
          })(i);
      e.default = r.a;
    },
  },
  [["8407", "common/runtime", "common/vendor"]],
]);
