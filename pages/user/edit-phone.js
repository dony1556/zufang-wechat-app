require("./common/vendor.js"),
  (global.webpackJsonp = global.webpackJsonp || []).push([
    ["pages/user/edit-phone"],
    {
      "037d": function (e, t, n) {
        n.r(t);
        var o,
          r = n("2fb6"),
          c = n("6bd4");
        for (o in c)
          ["default"].indexOf(o) < 0 &&
            (function (e) {
              n.d(t, e, function () {
                return c[e];
              });
            })(o);
        n("4760");
        var a = n("f0c5"),
          r = Object(a.a)(
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
        t.default = r.exports;
      },
      "25ee": function (e, t, o) {
        (function (e, t) {
          var n = o("4ea4");
          o("f0a5"), n(o("66fd"));
          n = n(o("037d"));
          (e.__webpack_require_UNI_MP_PLUGIN__ = o), t(n.default);
        }).call(this, o("bc2e").default, o("543d").createPage);
      },
      "277b": function (e, t, n) {},
      "2fb6": function (e, t, n) {
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
      4760: function (e, t, n) {
        var o = n("277b");
        n.n(o).a;
      },
      "6bd4": function (e, t, n) {
        n.r(t);
        var o,
          r = n("7a3e"),
          c = n.n(r);
        for (o in r)
          ["default"].indexOf(o) < 0 &&
            (function (e) {
              n.d(t, e, function () {
                return r[e];
              });
            })(o);
        t.default = c.a;
      },
      "7a3e": function (e, c, a) {
        (function (e) {
          var t = a("4ea4");
          Object.defineProperty(c, "__esModule", { value: !0 }),
            (c.default = void 0);
          var o = t(a("9523"));
          function r(t, e) {
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
          function n(t) {
            for (var e = 1; e < arguments.length; e++) {
              var n = null != arguments[e] ? arguments[e] : {};
              e % 2
                ? r(Object(n), !0).forEach(function (e) {
                    (0, o.default)(t, e, n[e]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    t,
                    Object.getOwnPropertyDescriptors(n)
                  )
                : r(Object(n)).forEach(function (e) {
                    Object.defineProperty(
                      t,
                      e,
                      Object.getOwnPropertyDescriptor(n, e)
                    );
                  });
            }
            return t;
          }
          t = {
            components: {},
            data: function () {
              return {
                code: { text: "获取验证码", status: !1, value: "" },
                phone: "",
              };
            },
            computed: {},
            onLoad: function () {
              "bind" === this.$Route.query.fromType
                ? e.setNavigationBarTitle({ title: "绑定手机号" })
                : e.setNavigationBarTitle({ title: "修改手机号" });
            },
            methods: n(
              n({}, (0, a("26cb").mapActions)(["getUserInfo"])),
              {},
              {
                editChangemobile: function () {
                  var t = this;
                  t.$api("user.changemobile", {
                    mobile: t.phone,
                    captcha: t.code.value,
                  }).then(function (e) {
                    1 === e.errno &&
                      (t.$tools.toast("修改手机号成功"),
                      t.getUserInfo(),
                      setTimeout(function () {
                        t.$Router.back();
                      }, 500));
                  });
                },
                getCode: function () {
                  var n = this;
                  n.code.status = !0;
                  var o = 60;
                  n.$api("sms.send", {
                    mobile: n.phone,
                    event: "changemobile",
                  }).then(function (e) {
                    var t;
                    1 === e.errno
                      ? ((n.code.text = o + "秒"),
                        (n.code.status = !0),
                        (t = setInterval(function () {
                          0 < o
                            ? ((n.code.text = o - 1 + "秒"), o--)
                            : (clearInterval(t),
                              (n.code.text = "获取验证码"),
                              (n.code.status = !1));
                        }, 1e3)))
                      : (n.code.status = !1);
                  });
                },
              }
            ),
          };
          c.default = t;
        }).call(this, a("543d").default);
      },
    },
    [["25ee", "common/runtime", "common/vendor"]],
  ]);
