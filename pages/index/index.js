(global.webpackJsonp = global.webpackJsonp || []).push([
  ["pages/index/index"],
  {
    "19c3": function (e, t, n) {
      var i = n("e22f");
      n.n(i).a;
    },
    2646: function (e, n, s) {
      (function (o, e) {
        var t = s("4ea4");
        Object.defineProperty(n, "__esModule", { value: !0 }),
          (n.default = void 0);
        var i = t(s("9523"));
        function a(t, e) {
          var n,
            i = Object.keys(t);
          return (
            Object.getOwnPropertySymbols &&
              ((n = Object.getOwnPropertySymbols(t)),
              e &&
                (n = n.filter(function (e) {
                  return Object.getOwnPropertyDescriptor(t, e).enumerable;
                })),
              i.push.apply(i, n)),
            i
          );
        }
        var c,
          t = {
            components: {
              shSearch: function () {
                s.e("pages/index/components/sh-search")
                  .then(
                    function () {
                      return resolve(s("9f9d"));
                    }.bind(null, s)
                  )
                  .catch(s.oe);
              },
              shMenu: function () {
                s.e("pages/index/components/sh-menu")
                  .then(
                    function () {
                      return resolve(s("4115"));
                    }.bind(null, s)
                  )
                  .catch(s.oe);
              },
              shBanner: function () {
                s.e("pages/index/components/sh-banner")
                  .then(
                    function () {
                      return resolve(s("fba0"));
                    }.bind(null, s)
                  )
                  .catch(s.oe);
              },
              shAdv: function () {
                s.e("pages/index/components/sh-adv")
                  .then(
                    function () {
                      return resolve(s("4566"));
                    }.bind(null, s)
                  )
                  .catch(s.oe);
              },
              shImg: function () {
                s.e("pages/index/components/sh-img")
                  .then(
                    function () {
                      return resolve(s("1c82"));
                    }.bind(null, s)
                  )
                  .catch(s.oe);
              },
              indexNotice: function () {
                s.e("pages/index/components/index-notice")
                  .then(
                    function () {
                      return resolve(s("c5fd"));
                    }.bind(null, s)
                  )
                  .catch(s.oe);
              },
              indexNum: function () {
                s.e("pages/index/components/index-num")
                  .then(
                    function () {
                      return resolve(s("caf69"));
                    }.bind(null, s)
                  )
                  .catch(s.oe);
              },
              indexAd: function () {
                s.e("pages/index/components/index-ad")
                  .then(
                    function () {
                      return resolve(s("bd67"));
                    }.bind(null, s)
                  )
                  .catch(s.oe);
              },
              indexFloatBar: function () {
                s.e("pages/index/components/index-float-bar")
                  .then(
                    function () {
                      return resolve(s("f3bd"));
                    }.bind(null, s)
                  )
                  .catch(s.oe);
              },
              indexMagic: function () {
                s.e("pages/index/components/index-magic")
                  .then(
                    function () {
                      return resolve(s("06d7"));
                    }.bind(null, s)
                  )
                  .catch(s.oe);
              },
            },
            data: function () {
              return {
                items: {},
                page: 1,
                isLoading: 1,
                isLoading2: 0,
                houseList: [],
                type_index: 0,
                type: "",
                typeList: [],
                share_uid: 0,
                tab_delay: !1,
                tip_show: !1,
              };
            },
            onLoad: function () {
              (c = this),
                o.hideTabBar(),
                e.showShareMenu({
                  withShareTicket: !1,
                  menus: ["shareAppMessage", "shareTimeline"],
                }),
                o.getStorageSync("tipTime") < new Date().getTime() &&
                  (this.tip_show = !0);
            },
            onShow: function () {
              var e,
                t = (c = this).$Route.query;
              (this.share_uid = 0),
                t.scene
                  ? (e = decodeURIComponent(t.scene).split("-")[0]) &&
                    (o.setStorageSync("share_uid", e), (this.share_uid = e))
                  : t.share_uid &&
                    (o.setStorageSync("share_uid", t.share_uid),
                    (this.share_uid = t.share_uid)),
                this.init();
            },
            onReady: function () {},
            computed: (function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2
                  ? a(Object(n), !0).forEach(function (e) {
                      (0, i.default)(t, e, n[e]);
                    })
                  : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(
                      t,
                      Object.getOwnPropertyDescriptors(n)
                    )
                  : a(Object(n)).forEach(function (e) {
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
              (0, s("26cb").mapState)({
                cityArea: function (e) {
                  return e.init.cityArea;
                },
                location: function (e) {
                  return e.init.location;
                },
                basicSet: function (e) {
                  return e.init.basicSet;
                },
                loginUser: function (e) {
                  return e.user.loginUser;
                },
                hbData: function (e) {
                  return e.init.hbData;
                },
              })
            ),
            methods: {
              init: function () {
                var e = o.getStorageSync("time"),
                  t = new Date();
                (1 == this.isLoading || !e || e < t) && this.getIndex(),
                  o.getStorageSync("location") || this.getLocation();
              },
              onReachBottom: function () {
                (this.page = this.page + 1),
                  (this.isLoading2 = 1),
                  this.getHouses();
              },
              selectType: function (e) {
                var t = this;
                console.info(e),
                  e != this.type_index &&
                    ((this.tab_delay = !0),
                    setTimeout(function () {
                      t.tab_delay = !1;
                    }, 1e3),
                    (this.type_index = e),
                    (this.page = 1),
                    this.getHouses());
              },
              getLocation: function () {
                var n = {
                  lng: 116.403963,
                  lat: 39.915119,
                  city: "北京市",
                  area: "东城区",
                };
                o.getLocation({
                  type: "gcj02 ",
                  success: function (e) {
                    c.$api("index.getLocation", {
                      lat: e.latitude,
                      lng: e.longitude,
                    }).then(function (e) {
                      (n = e.data.location),
                        c.$store.commit("location", n),
                        1 == e.data.city_open &&
                          n.cityId != c.cityArea.cityId &&
                          o.showModal({
                            title: "提示",
                            content: "是否切换到当前定位城市：" + n.city,
                            success: function (e) {
                              var t;
                              e.confirm
                                ? ((t = { cityId: n.cityId, cityName: n.city }),
                                  c.$store.commit("cityArea", t),
                                  c.getIndex())
                                : e.cancel;
                            },
                          });
                    });
                  },
                  fail: function (e) {
                    c.$store.commit("location", n), console.info(e);
                  },
                });
              },
              getIndex: function () {
                var i = this;
                this.isLoading && o.showLoading({ title: "正在加载中" }),
                  this.$api("index.index2", {
                    cityId: c.cityArea.cityId,
                    share_uid: c.share_uid,
                  }).then(function (e) {
                    var t, n;
                    0 == e.errno
                      ? 0 == e.data.code
                        ? ((n = e.data.hbData),
                          (c.items = e.data.items),
                          (t = e.data.houseTypeList),
                          c.$store.commit("houseTypeList", t),
                          console.info(t),
                          (c.typeList = [{ name: "全部", type: "" }].concat(t)),
                          c.$store.commit("hbData", n),
                          c.$store.commit("basicSet", e.data.basicSet),
                          c.typeList,
                          0 < c.typeList.length &&
                            (c.type = c.typeList[c.type_index].type),
                          c.isLoading &&
                            setTimeout(function () {
                              o.hideLoading();
                            }, 300),
                          (c.isLoading = 0),
                          e.data.cityArea &&
                            c.$store.commit("cityArea", e.data.cityArea),
                          (i.page = 1),
                          c.getHouses(),
                          (n = i.hbData.head.params),
                          o.setNavigationBarColor({
                            frontColor: n.titleTextColor,
                            backgroundColor: n.backgroundColor,
                          }),
                          o.setNavigationBarTitle({ title: n.title }),
                          (n = new Date().getTime() + 6e4),
                          o.setStorageSync("time", n))
                        : (o.hideLoading(),
                          o.showModal({
                            title: "提示",
                            content: e.data.msg,
                            showCancel: !1,
                            success: function () {
                              c.init();
                            },
                          }))
                      : c.$tools.toast("链接异常");
                  });
              },
              getHouses: function () {
                console.info(c.typeList), console.info(c.type_index);
                var e = c.typeList[c.type_index].type,
                  e = { page: c.page, type: e, cityId: this.cityArea.cityId };
                this.$api("index.getHouses", e).then(function (e) {
                  e = e.data.list;
                  (c.isLoading2 = 0),
                    1 == c.page
                      ? (c.houseList = e)
                      : 0 < e.length
                      ? (c.houseList = c.houseList.concat(e))
                      : c.page--;
                });
              },
              tipClose: function () {
                (this.tip_show = !1),
                  o.setStorageSync("tipTime", new Date().getTime() + 864e5);
              },
              navToMore: function () {
                var e = "/pages/house/" + this.type + "/index";
                this.$Router.push({ path: e, query: {} });
              },
              onShareTimeline: function (e) {
                return { title: this.basicSet.home_title };
              },
              onShareAppMessage: function (e) {
                return {
                  title: this.basicSet.home_title,
                  path: "pages/index/index?share_uid=" + this.loginUser.id,
                };
              },
            },
          };
        n.default = t;
      }).call(this, s("543d").default, s("bc2e").default);
    },
    4591: function (e, t, n) {
      n.r(t);
      var i,
        o = n("2646"),
        a = n.n(o);
      for (i in o)
        ["default"].indexOf(i) < 0 &&
          (function (e) {
            n.d(t, e, function () {
              return o[e];
            });
          })(i);
      t.default = a.a;
    },
    "46a0": function (e, t, n) {
      n.d(t, "b", function () {
        return o;
      }),
        n.d(t, "c", function () {
          return a;
        }),
        n.d(t, "a", function () {
          return i;
        });
      var i = {
          wkHouses: function () {
            return n.e("components/wk-houses/index").then(n.bind(null, "ea98"));
          },
          wkTabar: function () {
            return n.e("components/wk-tabar/index").then(n.bind(null, "ceb7"));
          },
          wkSkeletons: function () {
            return n
              .e("components/wk-skeletons/index")
              .then(n.bind(null, "d3c1"));
          },
          wkLoginModal: function () {
            return n
              .e("components/wk-login-modal/index")
              .then(n.bind(null, "5198"));
          },
        },
        o = function () {
          this.$createElement;
          var e = (this._self._c, this.typeList.length);
          this.$mp.data = Object.assign({}, { $root: { g0: e } });
        },
        a = [];
    },
    "68b8": function (e, t, n) {
      n.r(t);
      var i,
        o = n("46a0"),
        a = n("4591");
      for (i in a)
        ["default"].indexOf(i) < 0 &&
          (function (e) {
            n.d(t, e, function () {
              return a[e];
            });
          })(i);
      n("19c3");
      var c = n("f0c5"),
        o = Object(c.a)(
          a.default,
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
    "7f18": function (e, t, i) {
      (function (e, t) {
        var n = i("4ea4");
        i("f0a5"), n(i("66fd"));
        n = n(i("68b8"));
        (e.__webpack_require_UNI_MP_PLUGIN__ = i), t(n.default);
      }).call(this, i("bc2e").default, i("543d").createPage);
    },
    e22f: function (e, t, n) {},
  },
  [["7f18", "common/runtime", "common/vendor"]],
]);
