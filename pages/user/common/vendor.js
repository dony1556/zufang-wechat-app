(global.webpackJsonp = global.webpackJsonp || []).push([
  ["pages/user/common/vendor"],
  {
    8952: function (e, i, u) {
      (function (n, s) {
        var e = u("4ea4");
        Object.defineProperty(i, "__esModule", { value: !0 }),
          (i.default = void 0);
        var a = e(u("2eee")),
          t = e(u("c973")),
          o = e(u("9523")),
          e =
            (e(u("d60a")),
            e(u("d1d4")),
            e(u("a427")),
            {
              data: function () {
                return (0, o.default)(
                  {
                    form: {
                      id: 0,
                      let_way: 1,
                      dong: "",
                      dy: "",
                      doorplate: "",
                      is_elevator: 1,
                      mj: "",
                      room_type: "",
                      thumbs: [],
                      fcz_imgs: [],
                      video: "",
                      tag_ids: "",
                      tag_names: "",
                      furnish_ids: "",
                      furnish_names: "",
                      shi: "",
                      ting: "",
                      wei: "",
                      stw_index: [0, 1, 1],
                      stw_names: "",
                      content: "",
                      own_remarks: "",
                      roomTypeIndex: 0,
                      directionIndex: 0,
                      decorateIndex: 0,
                      typeIndex: 0,
                    },
                    treaty_agree: !1,
                    furnishList: [],
                    tagList: [],
                    roomTypeList: [],
                    directionList: [],
                    decorateList: [],
                    typeList: [],
                    form_data: [],
                    elevatorList: [
                      { name: "有", value: 1 },
                      { name: "无", value: 0 },
                    ],
                    letWayList: [
                      { name: "整租", value: 1 },
                      { name: "合租", value: 2 },
                    ],
                  },
                  "typeList",
                  [
                    { name: "出租", value: 1 },
                    { name: "出售", value: 2 },
                  ]
                );
              },
              onLoad: function (e) {
                var t,
                  o,
                  i = this.$Route.query;
                i.scene
                  ? ((t = (o = decodeURIComponent(i.scene).split("-"))[0]),
                    (o = o[1]),
                    (this.house.id = t),
                    o &&
                      (n.setStorageSync("share_uid", o), (this.share_uid = o)))
                  : ((this.house.id = i.houseId),
                    i.share_uid &&
                      (n.setStorageSync("share_uid", i.share_uid),
                      (this.share_uid = i.share_uid))),
                  i.is_admin && (this.is_admin = 1),
                  console.info("houseinit"),
                  this.init(),
                  s.canIUse("hideHomeButton") && s.hideHomeButton(),
                  s.showShareMenu({
                    withShareTicket: !1,
                    menus: ["shareAppMessage", "shareTimeline"],
                  });
              },
              methods: {
                onChooseImg: function (t, e) {
                  e -= t.length;
                  that.$tools.chooseImage(e).then(function (e) {
                    e.forEach(function (e) {
                      that.$tools
                        .uploadFile("file.upload", e)
                        .then(function (e) {
                          t.push(e.url);
                        });
                    });
                  });
                },
                delImg: function (t, o) {
                  n.showModal({
                    title: "删除照片",
                    content: "确定要删除这张照片么？",
                    cancelText: "取消",
                    confirmText: "删除",
                    success: function (e) {
                      e.confirm && t.splice(o, 1);
                    },
                  });
                },
                delVideo: function () {
                  n.showModal({
                    title: "提示",
                    content: "确定要删除视频么？",
                    cancelText: "取消",
                    confirmText: "删除",
                    success: function (e) {
                      e.confirm && (that.form.video = "");
                    },
                  });
                },
                onChooseVideo: function () {
                  that.$tools.chooseVideo().then(function (e) {
                    that.$tools
                      .uploadFile("file.upload2", e)
                      .then(function (e) {
                        that.form.video = e.url;
                      });
                  });
                },
                nearHouses: function () {
                  var t = this,
                    e = this.house,
                    o = e.lng,
                    i = e.lat;
                  0 < o &&
                    0 < i &&
                    t
                      .$api("house.nearHouses", {
                        lng: o,
                        lat: i,
                        house_id: e.id,
                      })
                      .then(function (e) {
                        0 == e.errno && (t.houseList = e.data.list);
                      });
                },
                fczPre: function () {
                  var e = this.house.fcz_imgs;
                  n.previewImage({ urls: e });
                },
                openVideo: function () {
                  (this.video_show = 1), n.createVideoContext("video").play();
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
                  var o = this;
                  return new Promise(function (e, t) {
                    n.requestSubscribeMessage({
                      tmplIds: [o.basicSet.set.news_tmp_id],
                      success: function (e) {
                        "requestSubscribeMessage:ok" == e.errMsg &&
                          o
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
                  var i = this;
                  return (0, t.default)(
                    a.default.mark(function e() {
                      var t, o;
                      return a.default.wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (
                                (o = (t = i).agent) &&
                                o.kf_link &&
                                i.basicSet.set.corp_id
                              )
                                return (
                                  s.openCustomerServiceChat({
                                    extInfo: { url: o.kf_link },
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
                              if (0 == i.house.uid && 0 == i.house.agent_id)
                                return e.abrupt("return");
                              e.next = 7;
                              break;
                            case 7:
                              if (i.isLogin) {
                                e.next = 10;
                                break;
                              }
                              return (
                                i.$store.commit("LOGIN_TIP", !0),
                                e.abrupt("return")
                              );
                            case 10:
                              return (e.next = 12), t.subscribeMessage();
                            case 12:
                              t.$api("chat.houseChatInit", {
                                house_id: t.house.id,
                                tid: t.house.uid,
                                agent_id: t.house.agent_id,
                                type: "house",
                              }).then(function (e) {
                                0 == e.data.code
                                  ? t.$Router.push({
                                      path: "/pages/chat/index",
                                      query: {
                                        chat_id: e.data.chat_id,
                                        tid: e.data.tid,
                                      },
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
                  n.openLocation({
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
                        : n.showModal({
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
                        n.showModal({
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
                  var o = this;
                  n.showLoading({ title: "加载中" }),
                    o
                      .$api("house.get_tel", { house_id: o.house.id })
                      .then(function (e) {
                        var t;
                        n.hideLoading(),
                          0 === e.errno
                            ? 0 == e.data.code
                              ? ((t = e.data.tel),
                                n.makePhoneCall({ phoneNumber: t }))
                              : 1 == e.data.code &&
                                n.showModal({
                                  title: "提示",
                                  content: e.data.msg,
                                  confirmText: "充值",
                                  success: function (e) {
                                    if (e.confirm)
                                      o.$Router.push({
                                        path: "/pages/user/wallet/index",
                                        query: {},
                                      });
                                    else if (e.cancel) return;
                                  },
                                })
                            : o.$tools.toast(e.msg);
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
                  var o = this.house;
                  t.$api(
                    "my.collect",
                    { hid: o.id, house_type: o.house_type },
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
                      s.createRewardedVideoAd &&
                        ((e = this.videoAd =
                          s.createRewardedVideoAd({ adUnitId: e })).onLoad(
                          function () {
                            console.log("激励视频 广告加载成功");
                          }
                        ),
                        e.onError(function (e) {}),
                        e.onClose(function (e) {
                          (e && e.isEnded) || void 0 === e
                            ? t.getTel()
                            : n.showToast({
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
      }).call(this, u("543d").default, u("bc2e").default);
    },
  },
]);
