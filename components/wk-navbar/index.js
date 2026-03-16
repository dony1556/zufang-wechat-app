(global.webpackJsonp = global.webpackJsonp || []).push([
  ["components/wk-navbar/index"],
  {
    "26e2": function (t, e, n) {
      (function (n) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.default = void 0);
        var a = n.getSystemInfoSync(),
          i = n.getMenuButtonBoundingClientRect(),
          t = {
            name: "u-navbar",
            props: {
              height: { type: [String, Number], default: "" },
              backIconColor: { type: String, default: "#606266" },
              backIconName: { type: String, default: "nav-back" },
              backIconSize: { type: [String, Number], default: "44" },
              backText: { type: String, default: "" },
              backTextStyle: {
                type: Object,
                default: function () {
                  return { color: "#606266" };
                },
              },
              title: { type: String, default: "" },
              titleWidth: { type: [String, Number], default: "250" },
              titleColor: { type: String, default: "#000000" },
              titleBold: { type: Boolean, default: !1 },
              titleSize: { type: [String, Number], default: 32 },
              isBack: { type: [Boolean, String], default: !0 },
              style: {
                type: Object,
                default: function () {
                  return { background: "transparent" };
                },
              },
              isFixed: { type: Boolean, default: !0 },
              immersive: { type: Boolean, default: !1 },
              borderBottom: { type: Boolean, default: !0 },
              zIndex: { type: [String, Number], default: "" },
              customBack: { type: Function, default: null },
            },
            data: function () {
              return { menuButtonInfo: i, statusBarHeight: a.statusBarHeight };
            },
            computed: {
              navbarInnerStyle: function () {
                var t = {};
                t.height = this.navbarHeight + "px";
                var e = a.windowWidth - i.left;
                return (t.marginRight = e + "px"), t;
              },
              navbarStyle: function () {
                var t = {};
                return Object.assign(t, this.style), t;
              },
              titleStyle: function () {
                var t = {},
                  e = a.windowWidth - i.left;
                return (
                  (t.left =
                    (a.windowWidth - n.upx2px(this.titleWidth)) / 2 + "px"),
                  (t.right =
                    e -
                    (a.windowWidth - n.upx2px(this.titleWidth)) / 2 +
                    e +
                    "px"),
                  (t.width = n.upx2px(this.titleWidth) + "px"),
                  t
                );
              },
              navbarHeight: function () {
                var t = "ios" == a.platform ? 44 : 48;
                return this.height || t;
              },
            },
            created: function () {},
            methods: {
              goBack: function () {
                "function" == typeof this.customBack ||
                  (1 < getCurrentPages().length
                    ? this.$Router.back()
                    : this.$Router.pushTab({ path: "/pages/index/index" }));
              },
            },
          };
        e.default = t;
      }).call(this, n("543d").default);
    },
    "3b96": function (t, e, n) {},
    "4f20": function (t, e, n) {
      var a = n("3b96");
      n.n(a).a;
    },
    "5ea7": function (t, e, n) {
      n.d(e, "b", function () {
        return a;
      }),
        n.d(e, "c", function () {
          return i;
        }),
        n.d(e, "a", function () {});
      var a = function () {
          var t = this,
            e = (t.$createElement, t._self._c, t.__get_style([t.style])),
            n = t.__get_style([t.navbarInnerStyle]),
            a =
              t.isBack && t.backText ? t.__get_style([t.backTextStyle]) : null,
            i = t.title ? t.__get_style([t.titleStyle]) : null;
          t.$mp.data = Object.assign(
            {},
            { $root: { s0: e, s1: n, s2: a, s3: i } }
          );
        },
        i = [];
    },
    f275: function (t, e, n) {
      n.r(e);
      var a,
        i = n("5ea7"),
        o = n("fe66");
      for (a in o)
        ["default"].indexOf(a) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return o[t];
            });
          })(a);
      n("4f20");
      var u = n("f0c5"),
        i = Object(u.a)(
          o.default,
          i.b,
          i.c,
          !1,
          null,
          "efe3bad6",
          null,
          !1,
          i.a,
          void 0
        );
      e.default = i.exports;
    },
    fe66: function (t, e, n) {
      n.r(e);
      var a,
        i = n("26e2"),
        o = n.n(i);
      for (a in i)
        ["default"].indexOf(a) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return i[t];
            });
          })(a);
      e.default = o.a;
    },
  },
]),
  (global.webpackJsonp = global.webpackJsonp || []).push([
    "components/wk-navbar/index-create-component",
    {
      "components/wk-navbar/index-create-component": function (t, e, n) {
        n("543d").createComponent(n("f275"));
      },
    },
    [["components/wk-navbar/index-create-component"]],
  ]);
