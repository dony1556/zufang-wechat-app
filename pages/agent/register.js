(global.webpackJsonp = global.webpackJsonp || []).push([
  ["pages/agent/register"],
  {
    1044: function (t, e, n) {},
    "495b": function (t, e, n) {
      n.d(e, "b", function () {
        return a;
      }),
        n.d(e, "c", function () {
          return i;
        }),
        n.d(e, "a", function () {
          return o;
        });
      var o = {
          wkCityArea2: function () {
            return n
              .e("components/wk-city-area2/index")
              .then(n.bind(null, "ee2a"));
          },
        },
        a = function () {
          this.$createElement;
          var t = (this._self._c, this.agent.logo.length),
            e = this.agent.card_imgs.length;
          this.$mp.data = Object.assign({}, { $root: { g0: t, g1: e } });
        },
        i = [];
    },
    4997: function (t, e, n) {
      var o = n("1044");
      n.n(o).a;
    },
    "696c": function (t, e, n) {
      (function (o) {
        var t = n("4ea4");
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.default = void 0);
        var a = t(n("9523"));
        function i(e, t) {
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
              agent: {
                id: 0,
                name: "",
                tel: "",
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
                ? i(Object(n), !0).forEach(function (t) {
                    (0, a.default)(e, t, n[t]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    e,
                    Object.getOwnPropertyDescriptors(n)
                  )
                : i(Object(n)).forEach(function (t) {
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
              var e = this;
              this.getSlide(),
                this.$api("agent.register_init", {}).then(function (t) {
                  t = t.data.agent_set;
                  e.agent_set = t;
                });
            },
            getSlide: function () {
              var e = this;
              this.$api("index.getSlide", { type: 11 }).then(function (t) {
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
              this.$Router.push({ path: "/pages/agent/treaty", query: {} });
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
                n = this.agent;
              this.treaty_agree
                ? n.name
                  ? n.tel
                    ? n.area_id
                      ? 0 != n.logo.length
                        ? 0 != n.card_imgs.length
                          ? ((n = {
                              id: n.id,
                              name: n.name,
                              tel: n.tel,
                              work_year: n.work_year,
                              label: n.label,
                              city_id: n.city_id,
                              area_id: n.area_id,
                              logo: n.logo.join(","),
                              card_imgs: n.card_imgs.join(","),
                              store_id: e.store.id,
                            }),
                            o.showLoading({ title: "正在提交中" }),
                            e
                              .$api("agent.agent_edit", n, "post")
                              .then(function (t) {
                                o.hideLoading(),
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
                          : e.$tools.toast("请上传身份证、工作证件")
                        : e.$tools.toast("请上传头像")
                      : e.$tools.toast("请选择所在地区")
                    : e.$tools.toast("请填写联系电话")
                  : e.$tools.toast("请填写真实姓名")
                : e.$tools.toast("请先查看注册协议并同意");
            },
          },
        };
        e.default = t;
      }).call(this, n("543d").default);
    },
    8392: function (t, e, o) {
      (function (t, e) {
        var n = o("4ea4");
        o("f0a5"), n(o("66fd"));
        n = n(o("9466"));
        (t.__webpack_require_UNI_MP_PLUGIN__ = o), e(n.default);
      }).call(this, o("bc2e").default, o("543d").createPage);
    },
    9466: function (t, e, n) {
      n.r(e);
      var o,
        a = n("495b"),
        i = n("a828");
      for (o in i)
        ["default"].indexOf(o) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return i[t];
            });
          })(o);
      n("4997");
      var r = n("f0c5"),
        a = Object(r.a)(
          i.default,
          a.b,
          a.c,
          !1,
          null,
          null,
          null,
          !1,
          a.a,
          void 0
        );
      e.default = a.exports;
    },
    a828: function (t, e, n) {
      n.r(e);
      var o,
        a = n("696c"),
        i = n.n(a);
      for (o in a)
        ["default"].indexOf(o) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return a[t];
            });
          })(o);
      e.default = i.a;
    },
  },
  [["8392", "common/runtime", "common/vendor"]],
]);
