(global.webpackJsonp = global.webpackJsonp || []).push([
  ["pages/index/agent-detail"],
  {
    1589: function (t, e, n) {
      n.r(e);
      var i,
        a = n("a181"),
        o = n("2b87");
      for (i in o)
        ["default"].indexOf(i) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return o[t];
            });
          })(i);
      n("df2c");
      var u = n("f0c5"),
        a = Object(u.a)(
          o.default,
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
    "2b87": function (t, e, n) {
      n.r(e);
      var i,
        a = n("e324"),
        o = n.n(a);
      for (i in a)
        ["default"].indexOf(i) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return a[t];
            });
          })(i);
      e.default = o.a;
    },
    "2e56": function (t, e, n) {},
    a181: function (t, e, n) {
      n.d(e, "b", function () {
        return a;
      }),
        n.d(e, "c", function () {
          return o;
        }),
        n.d(e, "a", function () {
          return i;
        });
      var i = {
          wkHouses: function () {
            return n.e("components/wk-houses/index").then(n.bind(null, "ea98"));
          },
          wkLoginModal: function () {
            return n
              .e("components/wk-login-modal/index")
              .then(n.bind(null, "5198"));
          },
          wkSkeletons: function () {
            return n
              .e("components/wk-skeletons/index")
              .then(n.bind(null, "d3c1"));
          },
        },
        a = function () {
          this.$createElement;
          this._self._c;
        },
        o = [];
    },
    affa: function (t, e, i) {
      (function (t, e) {
        var n = i("4ea4");
        i("f0a5"), n(i("66fd"));
        n = n(i("1589"));
        (t.__webpack_require_UNI_MP_PLUGIN__ = i), e(n.default);
      }).call(this, i("bc2e").default, i("543d").createPage);
    },
    df2c: function (t, e, n) {
      var i = n("2e56");
      n.n(i).a;
    },
    e324: function (t, e, n) {
      (function (a) {
        var t = n("4ea4");
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.default = void 0);
        var i = t(n("9523"));
        function o(e, t) {
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
            return {
              agent: { lng: 0, lat: 0 },
              agent_id: 0,
              houseList: [],
              isLoading: 1,
              typeList: [],
              house_type: "lethouse",
            };
          },
          computed: (function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = null != arguments[t] ? arguments[t] : {};
              t % 2
                ? o(Object(n), !0).forEach(function (t) {
                    (0, i.default)(e, t, n[t]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    e,
                    Object.getOwnPropertyDescriptors(n)
                  )
                : o(Object(n)).forEach(function (t) {
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
              isLogin: function (t) {
                return t.user.isLogin;
              },
              basicSet: function (t) {
                return t.init.basicSet;
              },
              cityArea: function (t) {
                return t.init.cityArea;
              },
              houseTypeList: function (t) {
                return t.init.houseTypeList;
              },
            })
          ),
          onLoad: function () {
            var t = this.$Route.query;
            (this.agent_id = t.agent_id), this.agent_detail();
          },
          onReady: function () {},
          methods: {
            carouselChange: function () {},
            call: function () {
              var t = this.agent.tel;
              a.makePhoneCall({ phoneNumber: t });
            },
            navAddress: function (t) {
              var e = this.community.lat,
                n = this.community.lng,
                i = this.community.address;
              a.openLocation({
                latitude: parseFloat(e),
                longitude: parseFloat(n),
                address: i,
                name: i,
              });
            },
            chat: function () {
              var e = this,
                n = this.agent.user_id;
              0 != n &&
                (this.isLogin
                  ? this.$api("chat.app_chat_house", {
                      house_id: 0,
                      tid: n,
                      type: "agent",
                    }).then(function (t) {
                      0 == t.data.code
                        ? e.$Router.push({
                            path: "/pages/chat/index",
                            query: { room_id: t.data.room_id, tid: n },
                          })
                        : e.$tools.toast(t.data.msg);
                    })
                  : this.$store.commit("LOGIN_TIP", !0));
            },
            backHome: function () {
              this.$Router.pushTab({ path: "/pages/index/index" });
            },
            agent_detail: function () {
              var e = this;
              e.$api("agent.agent_detail", { agent_id: e.agent_id }).then(
                function (t) {
                  0 == t.errno
                    ? ((e.agent = t.data.agent),
                      (e.isLoading = 0),
                      (e.typeList = t.data.typeList),
                      a.setNavigationBarTitle({ title: e.agent.name }),
                      e.getHouses())
                    : a.navigateBack({});
                }
              );
            },
            selcetTab: function (t) {
              (this.house_type = t), this.getHouses();
            },
            getHouses: function () {
              var e = this,
                t = { agent_id: e.agent_id, house_type: this.house_type };
              this.$api("agent.houseList", t).then(function (t) {
                e.houseList = t.data.list;
              });
            },
          },
        };
        e.default = t;
      }).call(this, n("543d").default);
    },
  },
  [["affa", "common/runtime", "common/vendor"]],
]);
