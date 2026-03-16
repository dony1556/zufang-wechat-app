(global.webpackJsonp = global.webpackJsonp || []).push([
  ["pages/community/detail"],
  {
    "0ae4": function (t, e, n) {},
    "4a2a": function (t, e, n) {
      n.r(e);
      var o,
        i = n("649e"),
        u = n.n(i);
      for (o in i)
        ["default"].indexOf(o) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return i[t];
            });
          })(o);
      e.default = u.a;
    },
    5928: function (t, e, o) {
      (function (t, e) {
        var n = o("4ea4");
        o("f0a5"), n(o("66fd"));
        n = n(o("e538"));
        (t.__webpack_require_UNI_MP_PLUGIN__ = o), e(n.default);
      }).call(this, o("bc2e").default, o("543d").createPage);
    },
    "649e": function (t, e, n) {
      (function (i) {
        var t = n("4ea4");
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.default = void 0);
        var o = t(n("9523"));
        function u(e, t) {
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
            return {
              community: { id: 0, lng: 0, lat: 0 },
              houseList: [],
              isLoading: 1,
              tools: this.$tools,
              typeList: [
                { type: "lethouse", name: "出租房" },
                { type: "oldhouse", name: "二手房" },
              ],
              houseType: "lethouse",
            };
          },
          computed: (function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = null != arguments[t] ? arguments[t] : {};
              t % 2
                ? u(Object(n), !0).forEach(function (t) {
                    (0, o.default)(e, t, n[t]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    e,
                    Object.getOwnPropertyDescriptors(n)
                  )
                : u(Object(n)).forEach(function (t) {
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
            })
          ),
          onLoad: function () {
            var t = this.$Route.query;
            (this.community.id = t.id), this.communityDetail();
          },
          onReady: function () {},
          methods: {
            carouselChange: function () {},
            call: function () {
              var t = this.community.tel;
              i.makePhoneCall({ phoneNumber: t });
            },
            navAddress: function (t) {
              var e = parseFloat(this.community.lat),
                n = parseFloat(this.community.lng),
                o = this.community.address;
              i.openLocation({
                latitude: e,
                longitude: n,
                address: o,
                name: o,
              });
            },
            backHome: function () {
              this.$Router.pushTab({ path: "/pages/index/index" });
            },
            communityDetail: function () {
              var e = this;
              e.$api("community.communityDetail", {
                communityId: e.community.id,
              }).then(function (t) {
                0 == t.errno
                  ? ((e.community = t.data.community),
                    (e.isLoading = 0),
                    i.setNavigationBarTitle({ title: e.community.name }),
                    e.getHouses())
                  : i.navigateBack();
              });
            },
            selcetTab: function (t) {
              this.houseType != t && ((this.houseType = t), this.getHouses());
            },
            getHouses: function () {
              var e = this,
                t = { communityId: e.community.id, type: e.houseType };
              this.$api("community.getHouses", t).then(function (t) {
                e.houseList = t.data.list;
              });
            },
          },
        };
        e.default = t;
      }).call(this, n("543d").default);
    },
    "89a8": function (t, e, n) {
      var o = n("0ae4");
      n.n(o).a;
    },
    d59d: function (t, e, n) {
      n.d(e, "b", function () {
        return i;
      }),
        n.d(e, "c", function () {
          return u;
        }),
        n.d(e, "a", function () {
          return o;
        });
      var o = {
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
        i = function () {
          var o = this,
            t = (o.$createElement, o._self._c, o.community.detail_imgs.length);
          o._isMounted ||
            (o.e0 = function (t, e) {
              var n = arguments[arguments.length - 1].currentTarget.dataset;
              return (
                (e = (n.eventParams || n["event-params"])),
                o.tools.previewImage(o.topImgs, e)
              );
            }),
            (o.$mp.data = Object.assign({}, { $root: { g0: t } }));
        },
        u = [];
    },
    e538: function (t, e, n) {
      n.r(e);
      var o,
        i = n("d59d"),
        u = n("4a2a");
      for (o in u)
        ["default"].indexOf(o) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return u[t];
            });
          })(o);
      n("89a8");
      var a = n("f0c5"),
        i = Object(a.a)(
          u.default,
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
  [["5928", "common/runtime", "common/vendor"]],
]);
