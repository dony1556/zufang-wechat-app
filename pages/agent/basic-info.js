(global.webpackJsonp = global.webpackJsonp || []).push([
  ["pages/agent/basic-info"],
  {
    1832: function (t, e, n) {
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
            return { isLoading: 1, form: { logo: [] } };
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
          })(
            {},
            (0, n("26cb").mapState)({
              basicSet: function (t) {
                return t.init.basicSet;
              },
            })
          ),
          onLoad: function () {
            this.init();
          },
          onReady: function () {},
          methods: {
            init: function () {
              var e = this;
              this.$api("agent.info_edit", {}).then(function (t) {
                0 != t.errno || ((t = t.data.agent) && (e.form = t));
              });
            },
            openTag: function () {
              this.$refs.multiSelect.showPicker();
            },
            openType: function () {
              this.$refs.typeSelect.show();
            },
            openArea: function () {
              this.$refs.areaSelect.show();
            },
            chooseCity: function () {
              this.$refs.communitySelect.show();
            },
            typeConfirm: function (t) {
              (this.store.type_id = t.type_id),
                (this.store.type_id2 = t.type_id2),
                (this.store.type_name = t.name);
            },
            areaConfirm: function (t) {
              console.info(t),
                (this.form.city_id = t.city_id),
                (this.form.area_id = t.area_id),
                (this.form.area_name = t.name);
            },
            directionChange: function (t) {
              this.directionIndex = t.detail.value;
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
            delVideo: function () {
              var e = this;
              o.showModal({
                title: "提示",
                content: "确定要删除视频么？",
                cancelText: "取消",
                confirmText: "删除",
                success: function (t) {
                  t.confirm && (e.house.video = "");
                },
              });
            },
            onChooseVideo: function () {
              that.$tools.chooseVideo().then(function (t) {
                that.$tools.uploadFile("file.upload2", t).then(function (t) {
                  that.house.video = t.url;
                });
              });
            },
            formSubmit: function (t) {
              var e = this;
              console.info(t);
              t = this.form;
              t.name
                ? t.tel
                  ? t.area_id
                    ? 0 != t.logo.length
                      ? ((t = {
                          id: t.id,
                          name: t.name,
                          tel: t.tel,
                          work_year: t.work_year,
                          label: t.label,
                          intro: t.intro,
                          city_id: t.city_id,
                          area_id: t.area_id,
                          logo: t.logo.join(","),
                        }),
                        o.showLoading({ title: "正在提交中" }),
                        e.$api("agent.info_edit", t, "post").then(function (t) {
                          o.hideLoading(),
                            0 == t.errno
                              ? (e.$tools.toast(t.data.msg),
                                0 == t.data.code &&
                                  setTimeout(function () {
                                    e.$Router.pushTab({
                                      path: "/pages/index/index",
                                    });
                                  }, 800))
                              : e.$tools.toast(t.msg);
                        }))
                      : e.$tools.toast("请上传头像")
                    : e.$tools.toast("请选择所在地区")
                  : e.$tools.toast("请填写联系电话")
                : e.$tools.toast("姓名不能为空");
            },
          },
        };
        e.default = t;
      }).call(this, n("543d").default);
    },
    "4e85": function (t, e, o) {
      (function (t, e) {
        var n = o("4ea4");
        o("f0a5"), n(o("66fd"));
        n = n(o("f9bd"));
        (t.__webpack_require_UNI_MP_PLUGIN__ = o), e(n.default);
      }).call(this, o("bc2e").default, o("543d").createPage);
    },
    ad09: function (t, e, n) {
      var o = n("f42a");
      n.n(o).a;
    },
    b4cd: function (t, e, n) {
      n.r(e);
      var o,
        i = n("1832"),
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
    cb15: function (t, e, n) {
      n.d(e, "b", function () {
        return i;
      }),
        n.d(e, "c", function () {
          return a;
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
        i = function () {
          this.$createElement;
          var t = (this._self._c, this.form.length);
          this.$mp.data = Object.assign({}, { $root: { g0: t } });
        },
        a = [];
    },
    f42a: function (t, e, n) {},
    f9bd: function (t, e, n) {
      n.r(e);
      var o,
        i = n("cb15"),
        a = n("b4cd");
      for (o in a)
        ["default"].indexOf(o) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return a[t];
            });
          })(o);
      n("ad09");
      var c = n("f0c5"),
        i = Object(c.a)(
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
  },
  [["4e85", "common/runtime", "common/vendor"]],
]);
