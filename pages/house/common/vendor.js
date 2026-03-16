(global.webpackJsonp = global.webpackJsonp || []).push([
  ["pages/house/common/vendor"],
  {
    "5d04": function (e, t, i) {
      var s = i("4ea4");
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var a = s(i("9523")),
        i =
          (s(i("d60a")),
          s(i("d1d4")),
          s(i("a427")),
          {
            data: function () {
              return {
                areaList: [],
                buildareaList: [],
                priceList: [],
                letWayList: [],
                shiList: [],
                directionList: [],
                decorateList: [],
                typeList: [],
                type2List: [],
                originList: [],
                tagList: [],
                buildareas: [],
                mjList: [],
                zrList: [],
                dtList: [],
                dtStationList: [],
                attornTypeList: [
                  { id: 0, name: "非转让" },
                  { id: 1, name: "转让" },
                ],
                selectshow: 0,
                itemIndex: -1,
                select_p: {
                  headArea: "",
                  headPrice: "",
                  headShi: "类型",
                  headMore: "更多",
                  area_index: -1,
                  area_id: 0,
                  buildarea_ids: [],
                  type: 0,
                  shi: [],
                  direction: [],
                  decorate: [],
                  type2: [],
                  let_way: 0,
                  money_index: -1,
                  mj_index: -1,
                  tag_ids: [],
                  origin: [],
                  is_attorn: -1,
                  areaType: 1,
                  dt_line_id: 0,
                  dt_line_index: -1,
                  dt_station_id: 0,
                },
                select_p2: {
                  headArea: "",
                  headPrice: "",
                  headShi: "类型",
                  headMore: "更多",
                  area_index: -1,
                  area_id: 0,
                  buildarea_ids: [],
                  type: 0,
                  shi: [],
                  direction: [],
                  decorate: [],
                  type2: [],
                  let_way: 0,
                  money_index: -1,
                  mj_index: -1,
                  tag_ids: [],
                  origin: [],
                  is_attorn: -1,
                  areaType: 1,
                  dt_line_id: 0,
                  dt_line_index: -1,
                  dt_station_id: 0,
                },
              };
            },
            onLoad: function (e) {},
            methods:
              ((i = {
                selectTab: function (e) {
                  (this.selectshow = !0), (this.itemIndex = e);
                },
                confirm: function () {
                  (this.selectshow = !1),
                    (this.select_p = JSON.parse(
                      JSON.stringify(this.select_p2)
                    )),
                    (this.page = 1),
                    this.getHouses();
                },
                close: function () {
                  (this.select_p2 = JSON.parse(JSON.stringify(this.select_p))),
                    (this.selectshow = !1);
                },
                clear: function () {
                  var e;
                  this.select_p2 =
                    ((e = {
                      headArea: "",
                      headPrice: "",
                      headShi: "类型",
                      headMore: "更多",
                      area_index: -1,
                      area_id: 0,
                      buildarea_ids: [],
                      type: 0,
                      shi: [],
                      direction: [],
                      money_index: -1,
                      let_way: 0,
                      decorate: [],
                    }),
                    (0, a.default)(e, "type", ""),
                    (0, a.default)(e, "type2", []),
                    (0, a.default)(e, "mj_index", -1),
                    (0, a.default)(e, "tag_ids", []),
                    (0, a.default)(e, "origin", []),
                    (0, a.default)(e, "areaType", 1),
                    (0, a.default)(e, "dt_line_id", ""),
                    (0, a.default)(e, "dt_station_id", ""),
                    e);
                },
                selectDq: function () {
                  (this.select_p2.areaType = 1),
                    (this.select_p2.dt_line_id = 0),
                    (this.select_p2.dt_station_id = 0);
                },
                selectDt: function () {
                  (this.select_p2.areaType = 2),
                    (this.select_p2.area_id = 0),
                    (this.select_p2.buildarea_id = 0);
                },
                selectDtLine: function (e) {
                  var t = this.dtList[e],
                    i = this.select_p2;
                  t.id == i.dt_line_id
                    ? ((i.dt_line_id = 0),
                      (i.dtStationList = []),
                      (i.dt_station_id = 0),
                      (i.headArea = ""),
                      (i.dt_line_index = -1))
                    : ((this.dtStationList = t.children),
                      (i.dt_line_id = t.id),
                      (i.dt_station_id = 0),
                      (i.headArea = t.name),
                      (i.dt_line_index = e));
                },
                selectDtStation: function (e) {
                  var t = this.select_p2,
                    e = this.dtStationList[e];
                  e.id == t.dt_station_id
                    ? ((t.dt_station_id = 0),
                      (t.headArea = this.dtList[t.dt_line_index].name))
                    : ((t.dt_station_id = e.id), (t.headArea = e.name));
                },
                chooseZr: function (e) {
                  this.select_p2.is_attorn == e
                    ? (this.select_p2.is_attorn = -1)
                    : (this.select_p2.is_attorn = e);
                },
                selectArea: function (e) {
                  var t = this.areaList[e];
                  this.select_p2.area_id == t.id
                    ? ((this.select_p2.area_id = 0),
                      (this.select_p2.area_index = -1),
                      (this.buildareaList = []),
                      (this.select_p2.buildarea_ids = []),
                      (this.select_p2.headArea = ""))
                    : ((this.select_p2.area_id = t.id),
                      (this.select_p2.area_index = e),
                      (this.buildareaList = t.buildareaList),
                      (this.select_p2.buildarea_ids = []),
                      (this.select_p2.headArea = t.name));
                },
                selectBuildarea: function (e) {
                  var t = this.buildareaList[e],
                    e = this.select_p2.buildarea_ids.indexOf(t.id);
                  -1 < e
                    ? this.select_p2.buildarea_ids.splice(e, 1)
                    : this.select_p2.buildarea_ids.push(t.id),
                    1 < this.select_p2.buildarea_ids.length
                      ? (this.select_p2.headArea = "多选")
                      : 1 == this.select_p2.buildarea_ids.length
                      ? (this.select_p2.headArea = t.name)
                      : (this.select_p2.headArea =
                          this.areaList[this.select_p2.area_index].name);
                },
                chooseOrigin: function (e) {
                  var t = this.originList[e].id,
                    e = this.select_p2.origin.indexOf(t);
                  -1 < e
                    ? this.select_p2.origin.splice(e, 1)
                    : this.select_p2.origin.push(t);
                },
                chooseMj: function (e) {
                  this.select_p2.mj_index == e
                    ? ((this.select_p2.mj_index = -1),
                      (this.select_p2.headPrice = ""))
                    : ((this.select_p2.mj_index = e),
                      (e = this.mjList[this.select_p2.mj_index]),
                      (this.select_p2.headPrice = e.name));
                },
                chooseMj2: function (e) {
                  this.mjList[e],
                    this.select_p2.mj_index == e
                      ? (this.select_p2.mj_index = -1)
                      : (this.select_p2.mj_index = e);
                },
                chooseType: function (e) {
                  this.select_p2.type == e
                    ? (this.select_p2.type = 0)
                    : (this.select_p2.type = e);
                },
                chooseShi: function (e) {
                  var t = this.shiList[e].id,
                    e = this.select_p2.shi.indexOf(t);
                  -1 < e
                    ? this.select_p2.shi.splice(e, 1)
                    : this.select_p2.shi.push(t);
                },
                chooseDirection: function (e) {
                  var t = this.directionList[e].name,
                    e = this.select_p2.direction.indexOf(t);
                  -1 < e
                    ? this.select_p2.direction.splice(e, 1)
                    : this.select_p2.direction.push(t);
                },
                chooseDecorate: function (e) {
                  var t = this.decorateList[e].name,
                    e = this.select_p2.decorate.indexOf(t);
                  -1 < e
                    ? this.select_p2.decorate.splice(e, 1)
                    : this.select_p2.decorate.push(t);
                },
              }),
              (0, a.default)(i, "chooseMj", function (e) {
                (this.select_p2.mj_index = e),
                  0 <= this.select_p2.mj_index
                    ? ((e = this.mjList[this.select_p2.mj_index]),
                      (this.select_p2.headPrice = e.name))
                    : (this.select_p2.headPrice = "");
              }),
              (0, a.default)(i, "choosePrice", function (e) {
                var t;
                this.select_p2.money_index == e
                  ? ((this.select_p2.money_index = -1),
                    (this.select_p2.headPrice = ""))
                  : ((t = this.priceList[e]),
                    (this.select_p2.money_index = e),
                    (this.select_p2.headPrice = t.name));
              }),
              (0, a.default)(i, "chooseType2", function (e) {
                var t = this.type2List[e].name,
                  e = this.select_p2.type2.indexOf(t);
                -1 < e
                  ? this.select_p2.type2.splice(e, 1)
                  : this.select_p2.type2.push(t);
              }),
              (0, a.default)(i, "chooseLetWay", function (e) {
                this.select_p2.let_way == e
                  ? (this.select_p2.let_way = 0)
                  : (this.select_p2.let_way = e);
              }),
              (0, a.default)(i, "chooseTag", function (e) {
                var t = this.tagList[e].id,
                  e = this.select_p2.tag_ids.indexOf(t);
                -1 < e
                  ? this.select_p2.tag_ids.splice(e, 1)
                  : this.select_p2.tag_ids.push(t),
                  console.info(this.select_p2.tag_ids);
              }),
              (0, a.default)(i, "chooseType", function (e) {
                this.select_p2.type == e
                  ? (this.select_p2.type = 0)
                  : (this.select_p2.type = e);
              }),
              i),
          });
      t.default = i;
    },
    "638f": function (e, i, s) {
      (function (a, n) {
        var e = s("4ea4");
        Object.defineProperty(i, "__esModule", { value: !0 }),
          (i.default = void 0);
        var o = e(s("2eee")),
          t = e(s("c973")),
          e =
            (e(s("d60a")),
            e(s("d1d4")),
            e(s("a427")),
            {
              data: function () {
                return {
                  pageTitle: "",
                  style: { background: "#ffffff", opacity: 0 },
                  collect_delay: !1,
                  yy_delay: !1,
                  is_admin: 0,
                  share_uid: 0,
                  videoAd: {},
                };
              },
              onLoad: function (e) {
                var t,
                  i,
                  s = this.$Route.query;
                s.scene
                  ? ((t = (i = decodeURIComponent(s.scene).split("-"))[0]),
                    (i = i[1]),
                    (this.house.id = t),
                    i &&
                      (a.setStorageSync("share_uid", i), (this.share_uid = i)))
                  : ((this.house.id = s.houseId),
                    s.share_uid &&
                      (a.setStorageSync("share_uid", s.share_uid),
                      (this.share_uid = s.share_uid))),
                  s.is_admin && (this.is_admin = 1),
                  console.info("houseinit"),
                  this.init(),
                  n.canIUse("hideHomeButton") && n.hideHomeButton(),
                  n.showShareMenu({
                    withShareTicket: !1,
                    menus: ["shareAppMessage", "shareTimeline"],
                  });
              },
              onShareTimeline: function (e) {
                this.$refs.wkShare.hide();
                var t = this.house,
                  i = t.house_type,
                  s = t.title;
                return (
                  (s += 0 < t.mj ? "·" + t.mj + "㎡" : ""),
                  {
                    title: (s +=
                      "lethouse" == i
                        ? 0 < t.money
                          ? "·" + t.money + "元/月"
                          : "·面议"
                        : "oldhouse" == i
                        ? 0 < t.money
                          ? "·" + t.money + "万元"
                          : "·面议"
                        : 0 < t.money
                        ? "·" + t.money + (1 == t.type ? "元/月" : "万元")
                        : "·面议"),
                    imageUrl: t.thumbs
                      ? t.thumbs[0]
                      : this.basicSet.default_img,
                    query: "houseId=" + this.house.id,
                  }
                );
              },
              onShareAppMessage: function (e) {
                console.info("onShareAppMessage"), this.$refs.wkShare.hide();
                var t = this.house,
                  i = t.house_type,
                  s = t.title;
                (s += 0 < t.mj ? "·" + t.mj + "㎡" : ""),
                  (s +=
                    "lethouse" == i
                      ? 0 < t.money
                        ? "·" + t.money + "元/月"
                        : "·面议"
                      : "oldhouse" == i
                      ? 0 < t.money
                        ? "·" + t.money + "万元"
                        : "·面议"
                      : "newhouse" == i
                      ? 0 < t.money
                        ? "·" + t.money + "元/㎡"
                        : "·未知"
                      : 0 < t.money
                      ? "·" + t.money + (1 == t.type ? "元/月" : "万元")
                      : "·面议");
                var a = this.loginUser.id,
                  n =
                    0 < t.thumbs.length
                      ? t.thumbs[0]
                      : this.basicSet.default_img;
                return {
                  title: s,
                  path:
                    "/pages/house/" +
                    i +
                    "/detail?houseId=" +
                    t.id +
                    "&share_uid=" +
                    a,
                  imageUrl: n,
                };
              },
              methods: {
                nearHouses: function () {
                  var t = this,
                    e = this.house,
                    i = e.lng,
                    s = e.lat;
                  0 < i &&
                    0 < s &&
                    t
                      .$api("house.nearHouses", {
                        lng: i,
                        lat: s,
                        house_id: e.id,
                      })
                      .then(function (e) {
                        0 == e.errno && (t.houseList = e.data.list);
                      });
                },
                fczPre: function () {
                  var e = this.house.fcz_imgs;
                  a.previewImage({ urls: e });
                },
                selectFurnish: function (e) {
                  this.furnishIndex = e;
                },
                openVideo: function () {
                  (this.video_show = 1), a.createVideoContext("video").play();
                },
                close_video: function () {
                  this.video_show = 0;
                },
                navToCenter: function () {
                  var e = this.user.id;
                  this.$Router.push({
                    path: "/pages/user/center/index",
                    query: { user_id: e },
                  });
                },
                subscribeMessage: function () {
                  var i = this;
                  return new Promise(function (e, t) {
                    a.requestSubscribeMessage({
                      tmplIds: [i.basicSet.set.news_tmp_id],
                      success: function (e) {
                        "requestSubscribeMessage:ok" == e.errMsg &&
                          i
                            .$api("notice.news_add", {}, "post")
                            .then(function (e) {});
                      },
                      fail: function () {},
                      complete: function () {
                        e();
                      },
                    });
                  });
                },
                chat: function () {
                  var s = this;
                  return (0, t.default)(
                    o.default.mark(function e() {
                      var t, i;
                      return o.default.wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (
                                (i = (t = s).agent) &&
                                i.kf_link &&
                                s.basicSet.set.corp_id
                              )
                                return (
                                  n.openCustomerServiceChat({
                                    extInfo: { url: i.kf_link },
                                    corpId: t.basicSet.set.corp_id,
                                    success: function (e) {},
                                    fail: function (e) {
                                      console.info(e);
                                    },
                                  }),
                                  e.abrupt("return")
                                );
                              e.next = 5;
                              break;
                            case 5:
                              if (0 == s.house.uid && 0 == s.house.agent_id)
                                return e.abrupt("return");
                              e.next = 7;
                              break;
                            case 7:
                              if (s.isLogin) {
                                e.next = 10;
                                break;
                              }
                              return (
                                s.$store.commit("LOGIN_TIP", !0),
                                e.abrupt("return")
                              );
                            case 10:
                              return (e.next = 12), t.subscribeMessage();
                            case 12:
                              t.$api("chat.app_chat_house", {
                                house_id: t.house.id,
                                tid: t.house.uid,
                                agent_id: t.house.agent_id,
                                type: "house",
                              }).then(function (e) {
                                0 == e.data.code
                                  ? t.$Router.push({
                                      path: "/pages/chat/index",
                                      query: { room_id: e.data.room_id },
                                    })
                                  : t.$tools.toast(e.data.msg);
                              });
                            case 13:
                            case "end":
                              return e.stop();
                          }
                      }, e);
                    })
                  )();
                },
                carouselChange: function (e) {
                  this.carouselIndex2 = e.detail.current;
                },
                nav_address: function () {
                  a.openLocation({
                    latitude: parseFloat(this.house.lat),
                    longitude: parseFloat(this.house.lng),
                    address: this.house.address,
                  });
                },
                call2: function () {
                  var e,
                    t = this;
                  this.isLogin
                    ? 2 == (e = this.house.tel_type)
                      ? this.videoAd
                        ? this.videoAd.show().catch(function () {
                            t.videoAd
                              .load()
                              .then(function () {
                                return t.videoAd.show();
                              })
                              .catch(function (e) {
                                console.log("激励视频 广告显示失败"),
                                  t.getTel();
                              });
                          })
                        : t.getTel()
                      : 3 == e
                      ? this.loginUser.vip_end_time
                        ? t.getTel()
                        : a.showModal({
                            title: "提示",
                            content: "查看电话号码需办理会员",
                            confirmText: "办理",
                            success: function (e) {
                              if (e.confirm)
                                t.$Router.push({
                                  path: "/pages/index/level-menu",
                                  query: {},
                                });
                              else if (e.cancel) return;
                            },
                          })
                      : 4 == e
                      ? ((e = t.house.tel_fee),
                        a.showModal({
                          title: "提示",
                          content: "查看电话号码需付费：" + e + "元",
                          confirmText: "付费",
                          success: function (e) {
                            if (e.confirm) t.getTel();
                            else if (e.cancel) return;
                          },
                        }))
                      : t.getTel()
                    : this.$store.commit("LOGIN_TIP", !0);
                },
                getTel: function () {
                  var i = this;
                  a.showLoading({ title: "加载中" }),
                    i
                      .$api("house.get_tel", { house_id: i.house.id })
                      .then(function (e) {
                        var t;
                        a.hideLoading(),
                          0 === e.errno
                            ? 0 == e.data.code
                              ? ((t = e.data.tel),
                                a.makePhoneCall({ phoneNumber: t }))
                              : 1 == e.data.code &&
                                a.showModal({
                                  title: "提示",
                                  content: e.data.msg,
                                  confirmText: "充值",
                                  success: function (e) {
                                    if (e.confirm)
                                      i.$Router.push({
                                        path: "/pages/user/wallet/index",
                                        query: {},
                                      });
                                    else if (e.cancel) return;
                                  },
                                })
                            : i.$tools.toast(e.msg);
                      });
                },
                backHome: function () {
                  this.$Router.pushTab({ path: "/pages/index/index" });
                },
                navtoCommunity: function () {
                  this.community.id &&
                    this.$Router.push({
                      path: "/pages/community/detail",
                      query: { id: this.community.id },
                    });
                },
                collect: function () {
                  var e = this,
                    t = this;
                  (this.collect_delay = !0),
                    setTimeout(function () {
                      e.collect_delay = !1;
                    }, 1e3);
                  var i = this.house;
                  t.$api(
                    "my.collect",
                    { hid: i.id, house_type: i.house_type },
                    "post"
                  ).then(function (e) {
                    0 === e.errno
                      ? (t.$tools.toast(e.data.msg),
                        (t.isCollect = e.data.isCollect))
                      : t.$tools.toast(e.msg);
                  });
                },
                navToReport: function () {
                  var e = this.house;
                  this.$Router.push({
                    path: "/pages/house/report",
                    query: { house_id: e.id, house_type: e.house_type },
                  });
                },
                navToVr: function () {
                  var e = encodeURIComponent(this.house.vr_link);
                  this.$Router.push({
                    path: "/pages/index/web-view",
                    query: { url: e },
                  });
                },
                pageScroll: function (e) {
                  var t = e.detail.scrollTop,
                    e = 0,
                    e = t < 200 ? t / 200 : 1;
                  this.style.opacity = e;
                },
                adVideoInit: function () {
                  var e,
                    t = this;
                  console.info(this.basicSet),
                    this.basicSet &&
                      this.basicSet.set.ad_video_id &&
                      ((e = this.basicSet.set.ad_video_id),
                      n.createRewardedVideoAd &&
                        ((e = this.videoAd =
                          n.createRewardedVideoAd({ adUnitId: e })).onLoad(
                          function () {
                            console.log("激励视频 广告加载成功");
                          }
                        ),
                        e.onError(function (e) {}),
                        e.onClose(function (e) {
                          (e && e.isEnded) || void 0 === e
                            ? t.getTel()
                            : a.showToast({
                                title: "观看完整视频广告，才能拨打电话",
                                icon: "none",
                              });
                        })));
                },
                handleClick: function () {
                  tt.showLoading(), this.ad.show();
                },
                onShare: function () {
                  this.showShare = !0;
                },
              },
            });
        i.default = e;
      }).call(this, s("543d").default, s("bc2e").default);
    },
  },
]);
