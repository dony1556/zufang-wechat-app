require("../../common/vendor.js"),
  (global.webpackJsonp = global.webpackJsonp || []).push([
    ["pages/user/pub/oldhouse/index"],
    {
      "0b14": function (t, e, o) {
        o.r(e);
        var n,
          i = o("ec55"),
          s = o.n(i);
        for (n in i)
          ["default"].indexOf(n) < 0 &&
            (function (t) {
              o.d(e, t, function () {
                return i[t];
              });
            })(n);
        e.default = s.a;
      },
      "1add": function (t, e, n) {
        (function (t, e) {
          var o = n("4ea4");
          n("f0a5"), o(n("66fd"));
          o = o(n("7ffd"));
          (t.__webpack_require_UNI_MP_PLUGIN__ = n), e(o.default);
        }).call(this, n("bc2e").default, n("543d").createPage);
      },
      "2cb7": function (t, e, o) {
        var n = o("b307");
        o.n(n).a;
      },
      5830: function (t, e, o) {
        o.d(e, "b", function () {
          return i;
        }),
          o.d(e, "c", function () {
            return s;
          }),
          o.d(e, "a", function () {
            return n;
          });
        var n = {
            wkMultiSelect: function () {
              return o
                .e("components/wk-multi-select/index")
                .then(o.bind(null, "a8e2"));
            },
          },
          i = function () {
            this.$createElement;
            var t = (this._self._c, this.house.thumbs.length),
              e =
                "fd" == this.role && 1 == this.basicSet.fd_set.is_fcz
                  ? this.house.fcz_imgs.length
                  : null;
            this.$mp.data = Object.assign({}, { $root: { g0: t, g1: e } });
          },
          s = [];
      },
      "7ffd": function (t, e, o) {
        o.r(e);
        var n,
          i = o("5830"),
          s = o("0b14");
        for (n in s)
          ["default"].indexOf(n) < 0 &&
            (function (t) {
              o.d(e, t, function () {
                return s[t];
              });
            })(n);
        o("2cb7");
        var a = o("f0c5"),
          i = Object(a.a)(
            s.default,
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
      b307: function (t, e, o) {},
      ec55: function (t, o, s) {
        (function (u) {
          var t = s("4ea4");
          Object.defineProperty(o, "__esModule", { value: !0 }),
            (o.default = void 0);
          var r,
            n = t(s("9523")),
            e = s("26cb");
          function i(e, t) {
            var o,
              n = Object.keys(e);
            return (
              Object.getOwnPropertySymbols &&
                ((o = Object.getOwnPropertySymbols(e)),
                t &&
                  (o = o.filter(function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable;
                  })),
                n.push.apply(n, o)),
              n
            );
          }
          e = {
            components: {
              houseStw: function () {
                s.e("pages/user/pub/components/house-stw")
                  .then(
                    function () {
                      return resolve(s("b563"));
                    }.bind(null, s)
                  )
                  .catch(s.oe);
              },
            },
            mixins: [t(s("8952")).default],
            data: function () {
              return {
                isLoading: 1,
                house: {
                  id: 0,
                  tag_ids: "",
                  tag_names: "",
                  is_elevator: 1,
                  thumbs: [],
                  video: "",
                  fcz_imgs: [],
                  year: 2016,
                  dong: "",
                  dy: "",
                  doorplate: "",
                  mj: "",
                  typeIndex: 0,
                  decorateIndex: 0,
                  directionIndex: 0,
                  stw_index: [0, 1, 1],
                  stw_names: "",
                  own_remarks: "",
                  content: "",
                },
              };
            },
            computed: (function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var o = null != arguments[t] ? arguments[t] : {};
                t % 2
                  ? i(Object(o), !0).forEach(function (t) {
                      (0, n.default)(e, t, o[t]);
                    })
                  : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(
                      e,
                      Object.getOwnPropertyDescriptors(o)
                    )
                  : i(Object(o)).forEach(function (t) {
                      Object.defineProperty(
                        e,
                        t,
                        Object.getOwnPropertyDescriptor(o, t)
                      );
                    });
              }
              return e;
            })(
              {},
              (0, e.mapState)({
                pubCity: function (t) {
                  return t.pub.pubCity;
                },
                pubCommunity: function (t) {
                  return t.pub.pubCommunity;
                },
                isLogin: function (t) {
                  return t.user.isLogin;
                },
                loginUser: function (t) {
                  return t.user.loginUser;
                },
                role: function (t) {
                  return t.user.role;
                },
                basicSet: function (t) {
                  return t.init.basicSet;
                },
              })
            ),
            onLoad: function () {
              var t = (r = this).$Route.query;
              (this.house.id = t.houseId || 0), this.init();
            },
            onReady: function () {},
            beforeRouteLeave: function (t, e, o) {
              console.info("leave"), o();
            },
            methods: {
              init: function () {
                this.$api("oldhouse.pubInit", { house_id: r.house.id }).then(
                  function (t) {
                    var e;
                    0 == t.errno &&
                      (0 == t.data.code
                        ? ((r.tagList = t.data.tagList),
                          (r.furnishList = t.data.furnishList),
                          (r.directionList = t.data.directionList),
                          (r.decorateList = t.data.decorateList),
                          (r.typeList = t.data.typeList),
                          (r.form_data = t.data.form_data),
                          r.$store.commit("shiList", t.data.shiList),
                          r.$store.commit("tingList", t.data.tingList),
                          r.$store.commit("weiList", t.data.weiList),
                          (e = t.data.house) &&
                            ((r.house = e),
                            r.$store.commit("pubCommunity", t.data.community)))
                        : 1 == t.data.code &&
                          u.showModal({
                            title: "提示",
                            content: t.data.msg,
                            confirmText: "充值",
                            success: function (t) {
                              t.confirm
                                ? r.$Router.replace({
                                    path: "/pages/user/wallet/index",
                                    query: {},
                                  })
                                : t.cancel && r.$Router.back();
                            },
                          }));
                  }
                );
              },
              openCommunity: function () {
                this.$Router.push({
                  path: "/pages/user/pub/community-select",
                  query: {},
                });
              },
              openTag: function () {
                this.$refs.multiSelect.showPicker();
              },
              select_elevator: function (t) {
                this.house.is_elevator = t;
              },
              stwConfirm: function (t) {
                console.info(t),
                  (this.house.shi = t.shi),
                  (this.house.ting = t.ting),
                  (this.house.wei = t.wei),
                  (this.house.stw_index = t.index),
                  (this.house.stw_names = t.names);
              },
              openHouseStw: function () {
                this.$refs.houseStw.show(this.house.stw_index);
              },
              tagConfirm: function (t) {
                (this.house.tag_ids = t.ids), (this.house.tag_names = t.names);
              },
              directionChange: function (t) {
                this.house.directionIndex = t.detail.value;
              },
              decorateChange: function (t) {
                this.house.decorateIndex = t.detail.value;
              },
              typeChange: function (t) {
                this.house.typeIndex = t.detail.value;
              },
              handTreaty: function () {
                this.treaty_agree = !this.treaty_agree;
              },
              navToTreaty: function () {
                this.$Router.push({
                  path: "/pages/user/pub/treaty",
                  query: {},
                });
              },
              yearChange: function (t) {
                this.house.year = t.detail.value;
              },
              onChooseImg: function (e, t) {
                t -= e.length;
                r.$tools.chooseImage(t).then(function (t) {
                  t.forEach(function (t) {
                    console.info(t),
                      r.$tools.uploadFile("file.upload", t).then(function (t) {
                        e.push(t.url);
                      });
                  });
                });
              },
              delImg: function (e, o) {
                u.showModal({
                  title: "删除照片",
                  content: "确定要删除这张照片么？",
                  cancelText: "取消",
                  confirmText: "删除",
                  success: function (t) {
                    t.confirm && e.splice(o, 1);
                  },
                });
              },
              delVideo: function () {
                u.showModal({
                  title: "提示",
                  content: "确定要删除视频么？",
                  cancelText: "取消",
                  confirmText: "删除",
                  success: function (t) {
                    t.confirm && (r.house.video = "");
                  },
                });
              },
              onChooseVideo: function () {
                r.$tools.chooseVideo().then(function (t) {
                  r.$tools.uploadFile("file.upload2", t).then(function (t) {
                    r.house.video = t.url;
                  });
                });
              },
              formSubmit: function (t) {
                var e,
                  o,
                  n,
                  i,
                  s,
                  a = this.house;
                this.treaty_agree
                  ? this.pubCommunity.name
                    ? a.doorplate
                      ? a.money <= 0
                        ? r.$tools.toast("请填写售价")
                        : a.mj <= 0
                        ? r.$tools.toast("请填写房间面积")
                        : a.name
                        ? a.tel
                          ? a.floor
                            ? a.floor_total
                              ? 1 != this.basicSet.house_set.force_hx || a.shi
                                ? 1 != this.basicSet.house_set.force_thumbs ||
                                  0 != a.thumbs.length
                                  ? "fd" != this.role ||
                                    1 != this.basicSet.fd_set.is_fcz ||
                                    0 != a.fcz_imgs.length
                                    ? ((e =
                                        this.directionList[a.directionIndex]
                                          .name),
                                      (o =
                                        this.decorateList[a.decorateIndex]
                                          .name),
                                      (n =
                                        this.typeList[this.house.typeIndex]
                                          .name),
                                      (i =
                                        0 < r.form_data.length
                                          ? JSON.stringify(r.form_data)
                                          : ""),
                                      (s = {
                                        role: this.role,
                                        id: a.id,
                                        money: a.money,
                                        name: a.name,
                                        tel: a.tel,
                                        year: a.year,
                                        floor: a.floor,
                                        floor_total: a.floor_total,
                                        shi: a.shi,
                                        wei: a.wei,
                                        ting: a.ting,
                                        dong: a.dong,
                                        dy: a.dy,
                                        doorplate: a.doorplate,
                                        mj: a.mj,
                                        city_id: this.pubCity.cityId,
                                        community_id: this.pubCommunity.id,
                                        xiao_qu: this.pubCommunity.name,
                                        direction: e,
                                        decorate: o,
                                        type2: n,
                                        tag_ids: a.tag_ids,
                                        tag_names: a.tag_names,
                                        video: a.video,
                                        thumbs: a.thumbs.join(","),
                                        own_remarks: a.own_remarks,
                                        is_elevator: a.is_elevator,
                                        fcz_imgs: a.fcz_imgs.join(","),
                                        content: a.content,
                                        form_data: i,
                                      }),
                                      0 < r.basicSet.fd_set.house_pub_fee &&
                                      0 == a.id
                                        ? u.showModal({
                                            title: "提示",
                                            content:
                                              "发布房源需付费：" +
                                              r.basicSet.fd_set.house_pub_fee +
                                              "元",
                                            confirmText: "付费",
                                            success: function (t) {
                                              t.confirm &&
                                                r
                                                  .$api(
                                                    "oldhouse.pub",
                                                    s,
                                                    "post"
                                                  )
                                                  .then(function (t) {
                                                    0 == t.errno
                                                      ? (r.$tools.toast(
                                                          t.data.msg
                                                        ),
                                                        setTimeout(function () {
                                                          r.$Router.replace({
                                                            path: "/pages/user/house/index",
                                                          });
                                                        }, 800))
                                                      : r.$tools.toast(t.msg);
                                                  });
                                            },
                                          })
                                        : r
                                            .$api("oldhouse.pub", s, "post")
                                            .then(function (t) {
                                              0 == t.errno
                                                ? (r.$tools.toast(t.data.msg),
                                                  setTimeout(function () {
                                                    r.$Router.replace({
                                                      path: "/pages/user/house/index",
                                                    });
                                                  }, 800))
                                                : r.$tools.toast(t.msg);
                                            }))
                                    : r.$tools.toast("请上传房产证")
                                  : r.$tools.toast("请上传房源图片")
                                : r.$tools.toast("请选择户型")
                              : r.$tools.toast("请填写总楼层")
                            : r.$tools.toast("请填写所在楼层")
                          : r.$tools.toast("请填写联系电话")
                        : r.$tools.toast("请填写联系人")
                      : r.$tools.toast("请填写门牌号")
                    : r.$tools.toast("请选择小区")
                  : r.$tools.toast("请先查看发布协议并同意");
              },
            },
          };
          o.default = e;
        }).call(this, s("543d").default);
      },
    },
    [["1add", "common/runtime", "common/vendor", "pages/user/common/vendor"]],
  ]);
