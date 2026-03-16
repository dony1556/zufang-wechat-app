(global.webpackJsonp = global.webpackJsonp || []).push([
  ["pages/work/register"],
  {
    "2c64": function (t, e, n) {
      var o = n("2f74");
      n.n(o).a;
    },
    "2f74": function (t, e, n) {},
    5629: function (t, e, n) {
      n.r(e);
      var o,
        i = n("816e"),
        a = n("687d");
      for (o in a)
        ["default"].indexOf(o) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return a[t];
            });
          })(o);
      n("2c64");
      var r = n("f0c5"),
        i = Object(r.a)(
          a.default,
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
    "5b43": function (t, e, n) {
      (function (o) {
        var t = n("4ea4");
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.default = void 0);
        var i = t(n("9523"));
        function a(e, t) {
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
              swiperList: [],
              treaty_agree: !1,
              agent_set: {},
              store: { id: 0, name: "" },
              form: {
                id: 0,
                truename: "",
                mobile: "",
                no: "",
                zm_img: "",
                fm_img: "",
                label: "",
                logo: [],
                card_imgs: [],
                city_id: 0,
                area_id: 0,
                area_name: "",
              },
            };
          },
          computed: (function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = null != arguments[t] ? arguments[t] : {};
              t % 2
                ? a(Object(n), !0).forEach(function (t) {
                    (0, i.default)(e, t, n[t]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    e,
                    Object.getOwnPropertyDescriptors(n)
                  )
                : a(Object(n)).forEach(function (t) {
                    Object.defineProperty(
                      e,
                      t,
                      Object.getOwnPropertyDescriptor(n, t)
                    );
                  });
            }
            return e;
          })({}, (0, n("26cb").mapState)({})),
          onLoad: function () {},
          onShow: function () {
            this.init();
          },
          onReady: function () {},
          methods: {
            init: function () {
              this.getSlide();
            },
            getSlide: function () {
              var e = this;
              this.$api("index.getSlide", { type: 12 }).then(function (t) {
                e.swiperList = t.data.list;
              });
            },
            openArea: function () {
              this.$refs.areaSelect.show();
            },
            handTreaty: function () {
              this.treaty_agree = !this.treaty_agree;
            },
            navToTreaty: function () {
              this.$Router.push({ path: "/pages/work/treaty", query: {} });
            },
            openStore: function () {
              this.$Router.push({
                path: "/pages/agent/select-store",
                query: {},
              });
            },
            areaConfirm: function (t) {
              console.info(t),
                (this.agent.city_id = t.city_id),
                (this.agent.area_id = t.area_id),
                (this.agent.area_name = t.name);
            },
            onChooseImg: function () {
              var e = this;
              e.$tools.chooseImage(1).then(function (t) {
                t.forEach(function (t) {
                  e.$tools.uploadFile("file.upload", t).then(function (t) {
                    e.form.zm_img = t.url;
                  });
                });
              });
            },
            onChooseImg2: function () {
              var e = this;
              e.$tools.chooseImage(1).then(function (t) {
                t.forEach(function (t) {
                  e.$tools.uploadFile("file.upload", t).then(function (t) {
                    e.form.fm_img = t.url;
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
              this.treaty_agree
                ? n.truename
                  ? n.mobile
                    ? ((n = {
                        id: n.id,
                        truename: n.truename,
                        mobile: n.mobile,
                        no: n.no,
                        zm_img: n.zm_img,
                        fm_img: n.fm_img,
                      }),
                      o.showLoading({ title: "正在提交中" }),
                      e.$api("work.fd_edit", n, "post").then(function (t) {
                        o.hideLoading(),
                          0 == t.errno
                            ? (e.$tools.toast(t.data.msg),
                              0 == t.data.code &&
                                setTimeout(function () {
                                  e.$Router.pushTab({
                                    path: "/pages/index/my",
                                    query: {},
                                  });
                                }, 800))
                            : e.$tools.toast(t.msg);
                      }))
                    : e.$tools.toast("请填写联系电话")
                  : e.$tools.toast("请填写姓名")
                : e.$tools.toast("请先查看注册协议并同意");
            },
          },
        };
        e.default = t;
      }).call(this, n("543d").default);
    },
    "687d": function (t, e, n) {
      n.r(e);
      var o,
        i = n("5b43"),
        a = n.n(i);
      for (o in i)
        ["default"].indexOf(o) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return i[t];
            });
          })(o);
      e.default = a.a;
    },
    "816e": function (t, e, n) {
      n.d(e, "b", function () {
        return o;
      }),
        n.d(e, "c", function () {
          return i;
        }),
        n.d(e, "a", function () {});
      var o = function () {
          this.$createElement;
          var t = (this._self._c, this.swiperList.length);
          this.$mp.data = Object.assign({}, { $root: { g0: t } });
        },
        i = [];
    },
    be5f: function (t, e, o) {
      (function (t, e) {
        var n = o("4ea4");
        o("f0a5"), n(o("66fd"));
        n = n(o("5629"));
        (t.__webpack_require_UNI_MP_PLUGIN__ = o), e(n.default);
      }).call(this, o("bc2e").default, o("543d").createPage);
    },
  },
  [["be5f", "common/runtime", "common/vendor"]],
]);
