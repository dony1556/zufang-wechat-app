(global.webpackJsonp = global.webpackJsonp || []).push([
  ["pages/agent/staff/list"],
  {
    "0887": function (t, e, n) {
      n.d(e, "b", function () {
        return i;
      }),
        n.d(e, "c", function () {
          return r;
        }),
        n.d(e, "a", function () {});
      var i = function () {
          this.$createElement;
          this._self._c;
        },
        r = [];
    },
    "2f2d": function (t, e, n) {},
    "75fa": function (t, e, n) {
      n.r(e);
      var i,
        r = n("0887"),
        a = n("ec35");
      for (i in a)
        ["default"].indexOf(i) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return a[t];
            });
          })(i);
      n("d9e2");
      var o = n("f0c5"),
        r = Object(o.a)(
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
      e.default = r.exports;
    },
    "824f": function (t, e, i) {
      (function (t, e) {
        var n = i("4ea4");
        i("f0a5"), n(i("66fd"));
        n = n(i("75fa"));
        (t.__webpack_require_UNI_MP_PLUGIN__ = i), e(n.default);
      }).call(this, i("bc2e").default, i("543d").createPage);
    },
    a883: function (t, n, a) {
      (function (e) {
        var t = a("4ea4");
        Object.defineProperty(n, "__esModule", { value: !0 }),
          (n.default = void 0);
        var i = t(a("9523"));
        function r(e, t) {
          var n,
            i = Object.keys(e);
          return (
            Object.getOwnPropertySymbols &&
              ((n = Object.getOwnPropertySymbols(e)),
              t &&
                (n = n.filter(function (t) {
                  return Object.getOwnPropertyDescriptor(e, t).enumerable;
                })),
              i.push.apply(i, n)),
            i
          );
        }
        t = {
          components: {},
          data: function () {
            return { list: [], qrcode: "" };
          },
          onLoad: function (t) {},
          onShow: function () {
            this.init();
          },
          computed: (function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = null != arguments[t] ? arguments[t] : {};
              t % 2
                ? r(Object(n), !0).forEach(function (t) {
                    (0, i.default)(e, t, n[t]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    e,
                    Object.getOwnPropertyDescriptors(n)
                  )
                : r(Object(n)).forEach(function (t) {
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
            (0, a("26cb").mapState)({
              basicSet: function (t) {
                return t.init.basicSet;
              },
              agent: function (t) {
                return t.user.agent;
              },
            })
          ),
          methods: {
            init: function () {
              this.getStaffList();
            },
            toDetail: function (t) {
              this.$Router.push({
                path: "/pages/agent/staff/detail",
                query: { id: t.id },
              });
            },
            getStaffList: function () {
              var e = this;
              this.$api("agent.staff_list", {
                store_id: e.agent.store_id,
              }).then(function (t) {
                e.list = t.data.list;
              });
            },
            settled: function () {
              this.$Router.push({
                path: "/pages/store/settled/index",
                query: {},
              });
            },
            new_staff: function () {
              var e = this,
                n = this;
              this.$api("staff.get_qrcode", { agent_id: n.staff.id }).then(
                function (t) {
                  (n.qrcode = t.data.qrcode), e.$refs.qrcode.show();
                }
              );
            },
            call: function () {
              var t = this.basicSet.phone;
              t && e.makePhoneCall({ phoneNumber: t });
            },
          },
        };
        n.default = t;
      }).call(this, a("543d").default);
    },
    d9e2: function (t, e, n) {
      var i = n("2f2d");
      n.n(i).a;
    },
    ec35: function (t, e, n) {
      n.r(e);
      var i,
        r = n("a883"),
        a = n.n(r);
      for (i in r)
        ["default"].indexOf(i) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return r[t];
            });
          })(i);
      e.default = a.a;
    },
  },
  [["824f", "common/runtime", "common/vendor"]],
]);
