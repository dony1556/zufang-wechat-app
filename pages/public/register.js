require("./common/vendor.js"),
  (global.webpackJsonp = global.webpackJsonp || []).push([
    ["pages/public/register"],
    {
      "205b": function (t, e, n) {
        n.r(e);
        var o,
          r = n("6f8e"),
          c = n.n(r);
        for (o in r)
          ["default"].indexOf(o) < 0 &&
            (function (t) {
              n.d(e, t, function () {
                return r[t];
              });
            })(o);
        e.default = c.a;
      },
      "239f": function (t, e, n) {
        n.r(e);
        var o,
          r = n("b27f"),
          c = n("205b");
        for (o in c)
          ["default"].indexOf(o) < 0 &&
            (function (t) {
              n.d(e, t, function () {
                return c[t];
              });
            })(o);
        n("799b");
        var i = n("f0c5"),
          r = Object(i.a)(
            c.default,
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
        e.default = r.exports;
      },
      "32ba": function (t, e, n) {},
      6997: function (t, e, o) {
        (function (t, e) {
          var n = o("4ea4");
          o("f0a5"), n(o("66fd"));
          n = n(o("239f"));
          (t.__webpack_require_UNI_MP_PLUGIN__ = o), e(n.default);
        }).call(this, o("bc2e").default, o("543d").createPage);
      },
      "6f8e": function (t, a, s) {
        (function (n) {
          var t = s("4ea4");
          Object.defineProperty(a, "__esModule", { value: !0 }),
            (a.default = void 0);
          var r = t(s("2eee")),
            o = t(s("c973")),
            c = t(s("9523")),
            t = s("26cb");
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
          function e(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = null != arguments[t] ? arguments[t] : {};
              t % 2
                ? i(Object(n), !0).forEach(function (t) {
                    (0, c.default)(e, t, n[t]);
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
          }
          t = {
            data: function () {
              return {
                mobile: "",
                code: { text: "获取验证码", status: !1, value: "" },
                password: "",
                isTcp: !1,
                sysInfo: n.getStorageSync("sysInfo"),
              };
            },
            computed: e(
              {},
              (0, t.mapState)({
                initData: function (t) {
                  return t.init.initData;
                },
              })
            ),
            onLoad: function () {},
            methods: e(
              e({}, (0, t.mapActions)(["setTokenAndBack"])),
              {},
              {
                jump: function (t, e) {
                  this.$Router.push({ path: t, query: e });
                },
                getCode: function () {
                  var e = this;
                  return (0, o.default)(
                    r.default.mark(function t() {
                      var n, o;
                      return r.default.wrap(function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              ((n = e).code.status = !0),
                                (o = 60),
                                n
                                  .$api("sms.send", {
                                    mobile: n.mobile,
                                    event: "register",
                                  })
                                  .then(function (t) {
                                    var e;
                                    1 === t.code
                                      ? ((n.code.text = o + "秒"),
                                        (n.code.status = !0),
                                        (e = setInterval(function () {
                                          0 < o
                                            ? ((n.code.text = o - 1 + "秒"),
                                              o--)
                                            : (clearInterval(e),
                                              (n.code.text = "获取验证码"),
                                              (n.code.status = !1));
                                        }, 1e3)))
                                      : (n.code.status = !1);
                                  });
                            case 4:
                            case "end":
                              return t.stop();
                          }
                      }, t);
                    })
                  )();
                },
                register: function () {
                  var e = this;
                  this.isTcp
                    ? this.$api("user.register", {
                        mobile: this.mobile,
                        code: this.code.value,
                        password: this.password,
                      }).then(function (t) {
                        1 === t.code &&
                          n.showToast({
                            title: t.msg || "注册成功,请前往登录",
                            icon: "success",
                            duration: 1e3,
                            mask: !0,
                            success: function () {
                              e.setTokenAndBack(t.data.userinfo.token);
                            },
                          });
                      })
                    : this.$tools.toast("请先同意协议！");
                },
                onTcp: function () {
                  this.isTcp = !this.isTcp;
                },
              }
            ),
          };
          a.default = t;
        }).call(this, s("543d").default);
      },
      "799b": function (t, e, n) {
        var o = n("32ba");
        n.n(o).a;
      },
      b27f: function (t, e, n) {
        n.d(e, "b", function () {
          return o;
        }),
          n.d(e, "c", function () {
            return r;
          }),
          n.d(e, "a", function () {});
        var o = function () {
            this.$createElement;
            this._self._c;
          },
          r = [];
      },
    },
    [["6997", "common/runtime", "common/vendor"]],
  ]);
