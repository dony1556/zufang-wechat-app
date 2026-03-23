(global.webpackJsonp = global.webpackJsonp || []).push([
  ["components/wk-login-modal/index"],
  {
    4739: function (t, o, n) {},
    "4d5e": function (t, o, n) {
      n.d(o, "b", function () {
        return e;
      }),
        n.d(o, "c", function () {
          return i;
        }),
        n.d(o, "a", function () {});
      var e = function () {
          this.$createElement;
          this._self._c;
        },
        i = [];
    },
    5198: function (t, o, n) {
      n.r(o);
      var e,
        i = n("4d5e"),
        a = n("9429");
      for (e in a)
        ["default"].indexOf(e) < 0 &&
          (function (t) {
            n.d(o, t, function () {
              return a[t];
            });
          })(e);
      n("b3ad");
      var s = n("f0c5"),
        i = Object(s.a)(
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
      o.default = i.exports;
    },
    "6ba7": function (t, o, n) {
      (function (i) {
        var t = n("4ea4");
        Object.defineProperty(o, "__esModule", { value: !0 }),
          (o.default = void 0);
        var e = t(n("9523"));
        function a(o, t) {
          var n,
            e = Object.keys(o);
          return (
            Object.getOwnPropertySymbols &&
              ((n = Object.getOwnPropertySymbols(o)),
              t &&
                (n = n.filter(function (t) {
                  return Object.getOwnPropertyDescriptor(o, t).enumerable;
                })),
              e.push.apply(e, n)),
            e
          );
        }
        t = {
          name: "wkLoginModal",
          components: {},
          data: function () {
            return {
              session_key: "",
              btn_show: 1,
              token: "",
              user: {},
              vip: {},
              admin: {},
              openid: "",
              unionid: "",
              avatarurl: "",
              nickname: "",
              agreed: false,
            };
          },
          props: {},
          watch: {
            showLoginTip: {
              handler: function (t, o) {
                console.info(t), console.info(o);
                var n = this;
                t &&
                  i.login({
                    success: function (t) {
                      console.info(t), n.get_openid(t.code);
                    },
                  });
              },
            },
          },
          computed: (function (o) {
            for (var t = 1; t < arguments.length; t++) {
              var n = null != arguments[t] ? arguments[t] : {};
              t % 2
                ? a(Object(n), !0).forEach(function (t) {
                    (0, e.default)(o, t, n[t]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    o,
                    Object.getOwnPropertyDescriptors(n)
                  )
                : a(Object(n)).forEach(function (t) {
                    Object.defineProperty(
                      o,
                      t,
                      Object.getOwnPropertyDescriptor(n, t)
                    );
                  });
            }
            return o;
          })(
            {},
            (0, n("26cb").mapState)({
              showLoginTip: function (t) {
                return t.user.showLoginTip;
              },
            })
          ),
          methods: {
            init: function () {},
            hide: function () {
              this.$store.commit("LOGIN_TIP", !1);
            },
            show: function (t) {
              this.$store.commit("LOGIN_TIP", !0), (this.type = t);
            },
            toggleAgreement: function (e) {
              this.agreed = !this.agreed;
            },
            openAgreementUser: function (e) {
              this.$Router.push({
                path: "/pages/public/help/detail",
                query: { id: 5 },
              });
            },
            openAgreementPrivacy: function (e) {
              this.$Router.push({
                path: "/pages/public/help/detail",
                query: { id: 6 },
              });
            },
            chooseAvatar: function (t) {
              console.info(t);
              var o = this;
              this.avatarurl = t.detail.avatarUrl;
              t = t.detail.avatarUrl;
              console.info(t),
                o.$tools.uploadFile("file.upload", t).then(function (t) {
                  console.info(t), (o.avatarurl = t.url);
                });
            },
            nicknameChange: function (t) {
              console.info(t);
            },
            get_openid: function (t) {
              var o = this;
              o.$api("index.get_openid", { code: t }, "get").then(function (t) {
                0 == t.data.code
                  ? ((o.openid = t.data.openid),
                    t.data.unionid && (o.unionid = t.data.unionid))
                  : o.$tools.toast(t.data.msg);
              });
            },
            new_login: function () {
              var e = this;
              this.openid
                ? "" != this.avatarurl
                  ? "" != this.nickname
                    ? this.agreed
                      ? e
                        .$api(
                          "index.new_login",
                          {
                            openid: e.openid,
                            unionid: e.unionid,
                            avatarurl: e.avatarurl,
                            nickname: e.nickname,
                          },
                          "post"
                        )
                        .then(function (t) {
                          var o, n;
                          0 == t.errno &&
                            (0 == t.data.code
                              ? ((o = t.data.user),
                                (n = t.data.token),
                                e.$tools.toast("登录成功"),
                                e.$store.commit("isLogin", !0),
                                e.hide(),
                                e.$store.commit("loginUser", o),
                                i.setStorageSync("token", n),
                                0 < e.type
                                  ? e.$emit("onConfirm", { type: e.type })
                                  : setTimeout(function () {
                                      e.$Router.pushTab("/pages/index/index");
                                    }, 800))
                              : 1 == t.data.code
                              ? ((e.btn_show = 2),
                                (e.token = t.data.token),
                                (e.user = t.data.user),
                                (e.session_key = t.data.session_key))
                              : e.$tools.toast(t.data.msg));
                        })
                    : e.$tools.toast("请先同意用户协议和隐私政策")
                  : e.$tools.toast("昵称不能为空")
                : e.$tools.toast("头像不能为空")
                : e.$tools.toast("异常");
            },
            getUserInfo: function () {
              var e = this,
                n = i.getStorageSync("share_uid")
                  ? i.getStorageSync("share_uid")
                  : 0;
              i.getUserProfile({
                desc: "获取用户头像昵称",
                success: function (t) {
                  var o = t.userInfo;
                  i.login({
                    success: function (t) {
                      e.$api(
                        "index.wx_login",
                        {
                          code: t.code,
                          nickname: o.nickName,
                          avatarurl: o.avatarUrl,
                          share_uid: n,
                        },
                        "post"
                      ).then(function (t) {
                        var o, n;
                        0 == t.errno &&
                          (0 == t.data.code
                            ? ((o = t.data.user),
                              (n = t.data.token),
                              e.$tools.toast("登录成功"),
                              e.$store.commit("isLogin", !0),
                              e.hide(),
                              e.$store.commit("loginUser", o),
                              i.setStorageSync("token", n),
                              t.data.vip && e.$store.commit("vip", t.data.vip),
                              setTimeout(function () {
                                e.$Router.pushTab("/pages/index/index");
                              }, 800))
                            : 1 == t.data.code
                            ? ((e.btn_show = 2),
                              (e.token = t.data.token),
                              (e.user = t.data.user),
                              t.data.vip && (e.vip = t.data.vip),
                              (e.session_key = t.data.session_key))
                            : (e.hide(), e.$tools.toast(t.data.msg)));
                      });
                    },
                  });
                },
                fail: function (t) {
                  console.info(t);
                },
              });
            },
            getphonenumber: function (t) {
              var o = this;
              "getPhoneNumber:ok" == t.detail.errMsg &&
                o
                  .$api(
                    "index.bind_phone",
                    { code: t.detail.code, user_id: o.user.id },
                    "post"
                  )
                  .then(function (t) {
                    0 == t.errno
                      ? 0 == t.data.code
                        ? (o.$tools.toast("登录成功"),
                          o.$store.commit("isLogin", !0),
                          o.hide(),
                          o.$store.commit("loginUser", t.data.user),
                          i.setStorageSync("token", o.token),
                          (o.btn_show = 1),
                          o.vip && o.$store.commit("vip", o.vip),
                          o.admin && o.$store.commit("admin", o.admin),
                          setTimeout(function () {
                            o.$Router.pushTab("/pages/index/index");
                          }, 500))
                        : o.$tools.toast(t.data.msg)
                      : o.$tools.toast(t.msg);
                  })
                  .catch(function (t) {
                    i.showModal({ title: "错误", content: "错误：" + t });
                  });
            },
          },
        };
        o.default = t;
      }).call(this, n("543d").default);
    },
    9429: function (t, o, n) {
      n.r(o);
      var e,
        i = n("6ba7"),
        a = n.n(i);
      for (e in i)
        ["default"].indexOf(e) < 0 &&
          (function (t) {
            n.d(o, t, function () {
              return i[t];
            });
          })(e);
      o.default = a.a;
    },
    b3ad: function (t, o, n) {
      var e = n("4739");
      n.n(e).a;
    },
  },
]),
  (global.webpackJsonp = global.webpackJsonp || []).push([
    "components/wk-login-modal/index-create-component",
    {
      "components/wk-login-modal/index-create-component": function (t, o, n) {
        n("543d").createComponent(n("5198"));
      },
    },
    [["components/wk-login-modal/index-create-component"]],
  ]);
