require("../common/vendor.js"),
  (global.webpackJsonp = global.webpackJsonp || []).push([
    ["pages/user/vip/buy-log"],
    {
      "0ef7": function (n, t, e) {},
      "0f2c": function (n, t, e) {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = void 0);
        var i = {
          components: {},
          data: function () {
            return { list: [], emptyData: { tip: "暂无相关数据" } };
          },
          computed: {},
          onLoad: function () {},
          onShow: function () {
            this.init();
          },
          methods: {
            init: function () {
              return Promise.all([this.czList()]);
            },
            jump: function (n, t) {
              this.$Router.push({ path: n, query: t });
            },
            czList: function () {
              var t = this;
              this.$api("user.vip_log_list").then(function (n) {
                0 === n.errno && (t.list = n.data.list);
              });
            },
          },
        };
        t.default = i;
      },
      "1b02": function (n, t, e) {
        e.r(t);
        var i,
          o = e("0f2c"),
          u = e.n(o);
        for (i in o)
          ["default"].indexOf(i) < 0 &&
            (function (n) {
              e.d(t, n, function () {
                return o[n];
              });
            })(i);
        t.default = u.a;
      },
      "3f4e": function (n, t, e) {
        e.d(t, "b", function () {
          return o;
        }),
          e.d(t, "c", function () {
            return u;
          }),
          e.d(t, "a", function () {
            return i;
          });
        var i = {
            wkEmpty: function () {
              return e
                .e("components/wk-empty/index")
                .then(e.bind(null, "7090"));
            },
          },
          o = function () {
            this.$createElement;
            var n = (this._self._c, this.list.length);
            this.$mp.data = Object.assign({}, { $root: { g0: n } });
          },
          u = [];
      },
      7096: function (n, t, i) {
        (function (n, t) {
          var e = i("4ea4");
          i("f0a5"), e(i("66fd"));
          e = e(i("9f04"));
          (n.__webpack_require_UNI_MP_PLUGIN__ = i), t(e.default);
        }).call(this, i("bc2e").default, i("543d").createPage);
      },
      "9f04": function (n, t, e) {
        e.r(t);
        var i,
          o = e("3f4e"),
          u = e("1b02");
        for (i in u)
          ["default"].indexOf(i) < 0 &&
            (function (n) {
              e.d(t, n, function () {
                return u[n];
              });
            })(i);
        e("eaaf");
        var a = e("f0c5"),
          o = Object(a.a)(
            u.default,
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
        t.default = o.exports;
      },
      eaaf: function (n, t, e) {
        var i = e("0ef7");
        e.n(i).a;
      },
    },
    [["7096", "common/runtime", "common/vendor"]],
  ]);
