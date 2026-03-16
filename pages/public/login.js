require("./common/vendor.js"),
  (global.webpackJsonp = global.webpackJsonp || []).push([
    ["pages/public/login"],
    {
      "12d3": function (e, t, n) {
        n.r(t);
        var o,
          r = n("33f1"),
          a = n.n(r);
        for (o in r)
          ["default"].indexOf(o) < 0 &&
            (function (e) {
              n.d(t, e, function () {
                return r[e];
              });
            })(o);
        t.default = a.a;
      },
      1302: function (e, t, n) {},
      "33f1": function (e, f, d) {
        (function (e) {
          var t = d("4ea4");
          Object.defineProperty(f, "__esModule", { value: !0 }),
            (f.default = void 0);
          var r = t(d("2eee")),
            a = t(d("c973")),
            o = t(d("9523")),
            c = t(d("931e")),
            n = d("26cb"),
            u = t(d("d60a"));
          function i(t, e) {
            var n,
              o = Object.keys(t);
            return (
              Object.getOwnPropertySymbols &&
                ((n = Object.getOwnPropertySymbols(t)),
                e &&
                  (n = n.filter(function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                  })),
                o.push.apply(o, n)),
              o
            );
          }
          function s(t) {
            for (var e = 1; e < arguments.length; e++) {
              var n = null != arguments[e] ? arguments[e] : {};
              e % 2
                ? i(Object(n), !0).forEach(function (e) {
                    (0, o.default)(t, e, n[e]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    t,
                    Object.getOwnPropertyDescriptors(n)
                  )
                : i(Object(n)).forEach(function (e) {
                    Object.defineProperty(
                      t,
                      e,
                      Object.getOwnPropertyDescriptor(n, e)
                    );
                  });
            }
            return t;
          }
          n = {
            data: function () {
              return {
                code: { text: "获取验证码", status: !1, value: "" },
                loginWay: 0,
                userPhone: "",
                userPassword: "",
                sysInfo: e.getStorageSync("sysInfo"),
              };
            },
            computed: s(
              {},
              (0, n.mapState)({
                initData: function (e) {
                  return e.init.initData;
                },
                basicSet: function (e) {
                  return e.init.basicSet;
                },
              })
            ),
            onLoad: function () {
              this.$Route.query.token &&
                this.setTokenAndBack(this.$Route.query.token);
            },
            onShow: function () {},
            methods: s(
              s({}, (0, n.mapActions)(["getUserInfo", "setTokenAndBack"])),
              {},
              {
                getuserinfo: function (n) {
                  var o = this;
                  return (0, a.default)(
                    r.default.mark(function e() {
                      var t;
                      return r.default.wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (t = new c.default()),
                                (e.next = 3),
                                t.wxMiniProgramLogin(n)
                              );
                            case 3:
                              (t = e.sent),
                                u.default.commit("FORCE_OAUTH", !1),
                                o.setTokenAndBack(t);
                            case 6:
                            case "end":
                              return e.stop();
                          }
                      }, e);
                    })
                  )();
                },
                wxLogin: function () {
                  var n = this;
                  return (0, a.default)(
                    r.default.mark(function e() {
                      var t;
                      return r.default.wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (t = new c.default()), (e.next = 3), t.login()
                              );
                            case 3:
                              void 0 !== (t = e.sent) && n.setTokenAndBack(t);
                            case 5:
                            case "end":
                              return e.stop();
                          }
                      }, e);
                    })
                  )();
                },
                onLoginWay: function (e) {
                  this.loginWay = e;
                },
                toLogin: function () {
                  var t = this;
                  0 === t.loginWay &&
                    t
                      .$api("user.mobileLogin", {
                        mobile: t.userPhone,
                        code: t.code.value,
                      })
                      .then(function (e) {
                        1 === e.code &&
                          t.setTokenAndBack(e.data.userinfo.token);
                      }),
                    1 === t.loginWay &&
                      t
                        .$api("user.accountLogin", {
                          account: t.userPhone,
                          password: t.userPassword,
                        })
                        .then(function (e) {
                          1 === e.code &&
                            t.setTokenAndBack(e.data.userinfo.token);
                        });
                },
                getCode: function () {
                  var t = this;
                  return (0, a.default)(
                    r.default.mark(function e() {
                      var n, o;
                      return r.default.wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              ((n = t).code.status = !0),
                                (o = 60),
                                n
                                  .$api("sms.send", {
                                    mobile: n.userPhone,
                                    event: "mobilelogin",
                                  })
                                  .then(function (e) {
                                    var t;
                                    1 === e.code
                                      ? ((n.code.text = o + "秒"),
                                        (n.code.status = !0),
                                        (t = setInterval(function () {
                                          0 < o
                                            ? ((n.code.text = o - 1 + "秒"),
                                              o--)
                                            : (clearInterval(t),
                                              (n.code.text = "获取验证码"),
                                              (n.code.status = !1));
                                        }, 1e3)))
                                      : (n.code.status = !1);
                                  });
                            case 4:
                            case "end":
                              return e.stop();
                          }
                      }, e);
                    })
                  )();
                },
                jump: function (e, t) {
                  this.$Router.push({ path: e, query: t });
                },
              }
            ),
          };
          f.default = n;
        }).call(this, d("543d").default);
      },
      "4f39": function (e, t, n) {
        n.d(t, "b", function () {
          return o;
        }),
          n.d(t, "c", function () {
            return r;
          }),
          n.d(t, "a", function () {});
        var o = function () {
            this.$createElement;
            this._self._c;
          },
          r = [];
      },
      "599f": function (e, t, n) {
        var o = n("1302");
        n.n(o).a;
      },
      ac61: function (e, t, o) {
        (function (e, t) {
          var n = o("4ea4");
          o("f0a5"), n(o("66fd"));
          n = n(o("ef0c"));
          (e.__webpack_require_UNI_MP_PLUGIN__ = o), t(n.default);
        }).call(this, o("bc2e").default, o("543d").createPage);
      },
      ef0c: function (e, t, n) {
        n.r(t);
        var o,
          r = n("4f39"),
          a = n("12d3");
        for (o in a)
          ["default"].indexOf(o) < 0 &&
            (function (e) {
              n.d(t, e, function () {
                return a[e];
              });
            })(o);
        n("599f");
        var c = n("f0c5"),
          r = Object(c.a)(
            a.default,
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
    },
    [["ac61", "common/runtime", "common/vendor", "pages/public/common/vendor"]],
  ]);
