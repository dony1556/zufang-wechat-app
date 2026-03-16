require("../common/vendor.js"),
  (global.webpackJsonp = global.webpackJsonp || []).push([
    ["pages/house/oldhouse/detail"],
    {
      "18fb": function (e, n, u) {
        (function (o) {
          var e = u("4ea4");
          Object.defineProperty(n, "__esModule", { value: !0 }),
            (n.default = void 0);
          var s = e(u("9523")),
            t = u("26cb");
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
          t = {
            components: {
              houseYy: function () {
                u.e("pages/house/components/house-yy")
                  .then(
                    function () {
                      return resolve(u("42c4"));
                    }.bind(null, u)
                  )
                  .catch(u.oe);
              },
            },
            mixins: [e(u("638f")).default],
            data: function () {
              return {
                tools: this.$tools,
                house: {},
                user: {},
                video_show: 0,
                isCollect: 0,
                carouselIndex: 0,
                carouselIndex2: 0,
                houseList: [],
                isLoading: 1,
                community: {},
                share_uid: 0,
                videoAd: {},
                board: {},
                agent: {},
              };
            },
            computed: (function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2
                  ? i(Object(n), !0).forEach(function (e) {
                      (0, s.default)(t, e, n[e]);
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
            })(
              {},
              (0, t.mapState)({
                isLogin: function (e) {
                  return e.user.isLogin;
                },
                loginUser: function (e) {
                  return e.user.loginUser;
                },
                basicSet: function (e) {
                  return e.init.basicSet;
                },
              })
            ),
            onReady: function () {},
            beforeRouteLeave: function (e, t, n) {
              console.info("leave"), n();
            },
            methods: {
              init: function () {
                this.getHouseDetail();
              },
              see: function () {
                var e = this;
                (this.yy_delay = !0),
                  setTimeout(function () {
                    e.yy_delay = !1;
                  }, 200),
                  this.isLogin
                    ? this.$refs.houseYy.show(this.house.id)
                    : this.$store.commit("LOGIN_TIP", !0);
              },
              getHouseDetail: function () {
                var n = this;
                n.$api("oldhouse.oldhouseDetail", {
                  share_uid: n.share_uid,
                  houseId: n.house.id,
                }).then(function (e) {
                  var t;
                  0 == e.errno &&
                    ((n.isLoading = 0),
                    (t = e.data.house) ||
                      n.$Router.replace({
                        path: "/pages/house/oldhouse/index",
                      }),
                    2 == t.status &&
                      o.showModal({
                        title: "提示",
                        content: "此房源已经下架，去看下其他房源吧",
                        showCancel: !1,
                        success: function (e) {
                          n.$Router.replace({
                            path: "/pages/house/oldhouse/index",
                          });
                        },
                      }),
                    (n.house = t),
                    (n.isCollect = e.data.isCollect),
                    e.data.community && (n.community = e.data.community),
                    e.data.user && (n.user = e.data.user),
                    e.data.agent && (n.agent = e.data.agent),
                    (n.pageTitle = t.title),
                    n.nearHouses(),
                    2 == n.house.tel_type && n.adVideoInit());
                });
              },
              nearHouses: function () {
                var t = this,
                  e = t.house.lng,
                  n = t.house.lat;
                0 < e &&
                  0 < n &&
                  t
                    .$api("oldhouse.nearHouses", {
                      lng: e,
                      lat: n,
                      id: t.house.id,
                    })
                    .then(function (e) {
                      0 == e.errno && (t.houseList = e.data.list);
                    });
              },
              openShare: function () {
                this.isLogin
                  ? (this.$refs.wkShare.show(), this.getPoster())
                  : this.$store.commit("LOGIN_TIP", !0);
              },
              handlePoster: function () {
                this.$refs.wkShare.hide(), this.$refs.wkPainter.show();
              },
              getPoster: function () {
                var t = this;
                this.$api("poster.oldhousePoster", {
                  houseId: t.house.id,
                }).then(function (e) {
                  0 == e.errno
                    ? 0 == e.data.code
                      ? (t.board = e.data.obj)
                      : t.$tools.toast(e.data.msg)
                    : t.$tools.toast(e.msg);
                });
              },
            },
          };
          n.default = t;
        }).call(this, u("543d").default);
      },
      "290f": function (e, t, n) {},
      "491f": function (e, t, n) {
        n.r(t);
        var o,
          s = n("18fb"),
          i = n.n(s);
        for (o in s)
          ["default"].indexOf(o) < 0 &&
            (function (e) {
              n.d(t, e, function () {
                return s[e];
              });
            })(o);
        t.default = i.a;
      },
      "65a4": function (e, t, n) {
        n.r(t);
        var o,
          s = n("c791"),
          i = n("491f");
        for (o in i)
          ["default"].indexOf(o) < 0 &&
            (function (e) {
              n.d(t, e, function () {
                return i[e];
              });
            })(o);
        n("7d3a");
        var u = n("f0c5"),
          s = Object(u.a)(
            i.default,
            s.b,
            s.c,
            !1,
            null,
            null,
            null,
            !1,
            s.a,
            void 0
          );
        t.default = s.exports;
      },
      "6a9a": function (e, t, o) {
        (function (e, t) {
          var n = o("4ea4");
          o("f0a5"), n(o("66fd"));
          n = n(o("65a4"));
          (e.__webpack_require_UNI_MP_PLUGIN__ = o), t(n.default);
        }).call(this, o("bc2e").default, o("543d").createPage);
      },
      "7d3a": function (e, t, n) {
        var o = n("290f");
        n.n(o).a;
      },
      c791: function (e, t, n) {
        n.d(t, "b", function () {
          return s;
        }),
          n.d(t, "c", function () {
            return i;
          }),
          n.d(t, "a", function () {
            return o;
          });
        var o = {
            wkNavbar: function () {
              return n
                .e("components/wk-navbar/index")
                .then(n.bind(null, "f275"));
            },
            wkNearMap: function () {
              return n
                .e("components/wk-near-map/index")
                .then(n.bind(null, "a820e"));
            },
            wkHouses: function () {
              return n
                .e("components/wk-houses/index")
                .then(n.bind(null, "ea98"));
            },
            wkShare: function () {
              return n
                .e("components/wk-share/index")
                .then(n.bind(null, "fcd3"));
            },
            wkPainter: function () {
              return Promise.all([
                n.e("common/vendor"),
                n.e("components/wk-painter/index"),
              ]).then(n.bind(null, "092f"));
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
          s = function () {
            var o = this,
              e = (o.$createElement, o._self._c, o.house.thumbs.length),
              t = o.house.thumbs.length || 1,
              n = 1 == o.is_admin ? o.house.fcz_imgs.length : null,
              s = o.houseList.length;
            o._isMounted ||
              (o.e0 = function (e, t) {
                var n = arguments[arguments.length - 1].currentTarget.dataset;
                return (
                  (t = (n.eventParams || n["event-params"])),
                  o.tools.previewImage(o.house.thumbs, t)
                );
              }),
              (o.$mp.data = Object.assign(
                {},
                { $root: { g0: e, g1: t, g2: n, g3: s } }
              ));
          },
          i = [];
      },
    },
    [["6a9a", "common/runtime", "common/vendor", "pages/house/common/vendor"]],
  ]);
