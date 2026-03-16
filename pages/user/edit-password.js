require("./common/vendor.js"),
  (global.webpackJsonp = global.webpackJsonp || []).push([
    ["pages/user/edit-password"],
    {
      "07e8": function (e, t, o) {
        (function (e, t) {
          var n = o("4ea4");
          o("f0a5"), n(o("66fd"));
          n = n(o("43cf"));
          (e.__webpack_require_UNI_MP_PLUGIN__ = o), t(n.default);
        }).call(this, o("bc2e").default, o("543d").createPage);
      },
      "43cf": function (e, t, n) {
        n.r(t);
        var o,
          r = n("5539"),
          a = n("73df");
        for (o in a)
          ["default"].indexOf(o) < 0 &&
            (function (e) {
              n.d(t, e, function () {
                return a[e];
              });
            })(o);
        n("a923");
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
      5539: function (e, t, n) {
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
      "73df": function (e, t, n) {
        n.r(t);
        var o,
          r = n("b324"),
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
      "7f6a": function (e, t, n) {},
      a923: function (e, t, n) {
        var o = n("7f6a");
        n.n(o).a;
      },
      b324: function (e, a, c) {
        (function (n) {
          var e = c("4ea4");
          Object.defineProperty(a, "__esModule", { value: !0 }),
            (a.default = void 0);
          var o = e(c("9523"));
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
          function t(t) {
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
          e = {
            components: {},
            data: function () {
              return { oldPassword: "", newPassword1: "", newPassword2: "" };
            },
            computed: {},
            onLoad: function () {},
            methods: t(
              t({}, (0, c("26cb").mapActions)(["getUserInfo"])),
              {},
              {
                editPassword: function () {
                  var t = this;
                  t.newPassword2 !== t.newPassword1
                    ? t.$tools.toast("新密码不一致")
                    : t
                        .$api("user.changepwd", {
                          oldpassword: t.oldPassword,
                          newpassword: t.newPassword1,
                        })
                        .then(function (e) {
                          1 === e.errno &&
                            (t.$tools.toast("修改密码成功"),
                            n.setStorageSync("token", e.data.userinfo.token),
                            t.getUserInfo(),
                            setTimeout(function () {
                              t.$Router.back();
                            }, 1e3));
                        });
                },
              }
            ),
          };
          a.default = e;
        }).call(this, c("543d").default);
      },
    },
    [["07e8", "common/runtime", "common/vendor"]],
  ]);
