require("../../common/vendor.js"),
  (global.webpackJsonp = global.webpackJsonp || []).push([
    ["pages/user/pub/shophouse/index"],
    {
      "59e0": function (t, e, n) {
        (function (t, e) {
          var o = n("4ea4");
          n("f0a5"), o(n("66fd"));
          o = o(n("cf95"));
          (t.__webpack_require_UNI_MP_PLUGIN__ = n), e(o.default);
        }).call(this, n("bc2e").default, n("543d").createPage);
      },
      c47f: function (t, e, o) {
        o.d(e, "b", function () {
          return s;
        }),
          o.d(e, "c", function () {
            return i;
          }),
          o.d(e, "a", function () {
            return n;
          });
        var n = {
            wkLoginModal: function () {
              return o
                .e("components/wk-login-modal/index")
                .then(o.bind(null, "5198"));
            },
            wkMultiSelect: function () {
              return o
                .e("components/wk-multi-select/index")
                .then(o.bind(null, "a8e2"));
            },
            wkCityArea: function () {
              return o
                .e("components/wk-city-area/index")
                .then(o.bind(null, "2978"));
            },
          },
          s = function () {
            this.$createElement;
            var t = (this._self._c, this.house.thumbs.length),
              e =
                "fd" == this.role && 1 == this.basicSet.fd_set.is_fcz
                  ? this.house.fcz_imgs.length
                  : null;
            this.$mp.data = Object.assign({}, { $root: { g0: t, g1: e } });
          },
          i = [];
      },
      cf95: function (t, e, o) {
        o.r(e);
        var n,
          s = o("c47f"),
          i = o("e893");
        for (n in i)
          ["default"].indexOf(n) < 0 &&
            (function (t) {
              o.d(e, t, function () {
                return i[t];
              });
            })(n);
        o("d95e");
        var a = o("f0c5"),
          s = Object(a.a)(
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
        e.default = s.exports;
      },
      d95e: function (t, e, o) {
        var n = o("dffe");
        o.n(n).a;
      },
      dffe: function (t, e, o) {},
      e893: function (t, e, o) {
        o.r(e);
        var n,
          s = o("fa84"),
          i = o.n(s);
        for (n in s)
          ["default"].indexOf(n) < 0 &&
            (function (t) {
              o.d(e, t, function () {
                return s[t];
              });
            })(n);
        e.default = i.a;
      },
      fa84: function (t, e, o) {
        (function (a) {
          var t = o("4ea4");
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.default = void 0);
          var r,
            n = t(o("9523"));
          function s(e, t) {
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
          t = {
            components: {},
            data: function () {
              return {
                isLoading: 1,
                houseId: 0,
                typeList: [
                  { name: "出租", value: 1 },
                  { name: "出售", value: 2 },
                ],
                tagList: [],
                businessList: [],
                furnishList: [],
                decorateList: [],
                directionList: [],
                houseTypeList: [],
                jyList: [],
                form_data: [],
                house: {
                  type: 1,
                  city_id: "",
                  area_id: "",
                  buildarea_id: "",
                  cab_names: "",
                  lng: "",
                  lat: "",
                  address: "",
                  is_attorn: 0,
                  ct_property: 0,
                  is_segment: 0,
                  thumbs: [],
                  fcz_imgs: [],
                  video: "",
                  tag_ids: "",
                  tag_names: "",
                  business_ids: "",
                  business_names: "",
                  furnish_ids: "",
                  furnish_names: "",
                  content: "",
                  own_remarks: "",
                  year: 2016,
                  decorateIndex: 0,
                  directionIndex: 0,
                  houseTypeIndex: 0,
                  jyIndex: 0,
                  attorn_fees: "",
                  spare_month: "",
                  start_month: "",
                  free_month: "",
                },
                treaty_agree: !1,
              };
            },
            computed: (function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var o = null != arguments[t] ? arguments[t] : {};
                t % 2
                  ? s(Object(o), !0).forEach(function (t) {
                      (0, n.default)(e, t, o[t]);
                    })
                  : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(
                      e,
                      Object.getOwnPropertyDescriptors(o)
                    )
                  : s(Object(o)).forEach(function (t) {
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
              (0, o("26cb").mapState)({
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
              (this.houseId = t.houseId || 0), this.init();
            },
            onReady: function () {},
            beforeRouteLeave: function (t, e, o) {
              console.info("leave"), o();
            },
            methods: {
              init: function () {
                this.$api("shophouse.pubInit", { houseId: r.houseId }).then(
                  function (t) {
                    0 == t.errno &&
                      ((r.tagList = t.data.tagList),
                      (r.furnishList = t.data.furnishList),
                      (r.decorateList = t.data.decorateList),
                      (r.houseTypeList = t.data.houseTypeList),
                      (r.businessList = t.data.businessList),
                      (r.jyList = t.data.jyList),
                      (r.form_data = t.data.form_data),
                      0 != r.houseId) &&
                      ((t = t.data.house), (r.house = t));
                  }
                );
              },
              openCityArea: function () {
                this.$refs.cab.show([0, 0, 0]);
              },
              cityAreaConfirm: function (t) {
                console.info(t),
                  (this.house.city_id = t.city_id),
                  (this.house.area_id = t.area_id),
                  (this.house.buildarea_id = t.buildarea_id),
                  (this.house.cab_names = t.names);
              },
              openMap: function () {
                console.info(22),
                  a.chooseLocation({
                    success: function (t) {
                      (r.house.lat = t.latitude),
                        (r.house.lng = t.longitude),
                        (r.house.address = t.address);
                    },
                    fail: function (t) {
                      console.info(t);
                    },
                  });
              },
              attornChange: function (t) {
                this.house.is_attorn = t.detail.value ? 1 : 0;
              },
              propertyChange: function (t) {
                this.house.ct_property = t.detail.value ? 1 : 0;
              },
              segmentChange: function (t) {
                this.house.is_segment = t.detail.value ? 1 : 0;
              },
              openTag: function () {
                this.$refs.multiSelect.showPicker();
              },
              openFurnish: function () {
                this.$refs.multiSelect2.showPicker();
              },
              openBusiness: function () {
                this.$refs.multiSelect3.showPicker();
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
              openHouseStw: function () {
                this.$refs.houseStw.show();
              },
              selectType: function (t) {
                this.house.type = t;
              },
              tagConfirm: function (t) {
                (this.house.tag_ids = t.ids), (this.house.tag_names = t.names);
              },
              businessConfirm: function (t) {
                (this.house.business_ids = t.ids),
                  (this.house.business_names = t.names);
              },
              furnishConfirm: function (t) {
                (this.house.furnish_ids = t.ids),
                  (this.house.furnish_names = t.names);
              },
              houseTypeChange: function (t) {
                this.house.houseTypeIndex = t.detail.value;
              },
              decorateChange: function (t) {
                this.house.decorateIndex = t.detail.value;
              },
              yearChange: function (t) {
                this.house.year = t.detail.value;
              },
              jyChange: function (t) {
                this.house.jyIndex = t.detail.value;
              },
              onChooseImg: function (e, t) {
                t -= e.length;
                r.$tools.chooseImage(t).then(function (t) {
                  t.forEach(function (t) {
                    r.$tools.uploadFile("file.upload", t).then(function (t) {
                      e.push(t.url);
                    });
                  });
                });
              },
              delImg: function (e, o) {
                a.showModal({
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
                a.showModal({
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
                  s,
                  i = this.house;
                if (this.treaty_agree)
                  if (i.city_id)
                    if (i.title)
                      if (i.doorplate) {
                        if (i.money <= 0) {
                          if (1 == i.type)
                            return void r.$tools.toast("请填写租金");
                          if (2 == i.type)
                            return void r.$tools.toast("请填写售价");
                        }
                        i.mj <= 0
                          ? r.$tools.toast("请填写房间面积")
                          : i.name
                          ? i.tel
                            ? i.floor
                              ? i.floor_total
                                ? i.lng && i.lat
                                  ? i.address
                                    ? 1 !=
                                        this.basicSet.house_set.force_thumbs ||
                                      0 != i.thumbs.length
                                      ? "fd" != this.role ||
                                        1 != this.basicSet.fd_set.is_fcz ||
                                        0 != i.fcz_imgs.length
                                        ? ((e =
                                            this.houseTypeList[i.houseTypeIndex]
                                              .name),
                                          (o =
                                            this.decorateList[i.decorateIndex]
                                              .name),
                                          (n = this.jyList[i.jyIndex].id),
                                          (s =
                                            0 < r.form_data.length
                                              ? JSON.stringify(r.form_data)
                                              : ""),
                                          a.showLoading({
                                            title: "正在提交...",
                                          }),
                                          (s = {
                                            role: this.role,
                                            houseId: this.houseId,
                                            type: i.type,
                                            title: i.title,
                                            name: i.name,
                                            tel: i.tel,
                                            floor: i.floor,
                                            floor_total: i.floor_total,
                                            doorplate: i.doorplate,
                                            mj: i.mj,
                                            lng: i.lng,
                                            lat: i.lat,
                                            address: i.address,
                                            city_id: i.city_id,
                                            area_id: i.area_id,
                                            buildarea_id: i.buildarea_id,
                                            type2: e,
                                            decorate: o,
                                            tag_ids: i.tag_ids,
                                            tag_names: i.tag_names,
                                            business: i.business_names,
                                            furnish_ids: i.furnish_ids,
                                            video: i.video,
                                            thumbs: i.thumbs.join(","),
                                            own_remarks: i.own_remarks,
                                            fcz_imgs: i.fcz_imgs.join(","),
                                            content: i.content,
                                            is_segment: i.is_segment,
                                            jy_status: n,
                                            money: i.money,
                                            form_data: s,
                                          }),
                                          1 == i.type
                                            ? ((s.ya_month = i.ya_month),
                                              (s.fu_month = i.fu_month),
                                              (s.ct_property = i.ct_property),
                                              (s.property_fees =
                                                i.property_fees),
                                              (s.is_attorn = i.is_attorn),
                                              (s.property_fees =
                                                i.property_fees),
                                              (s.attorn_fees = i.attorn_fees),
                                              (s.spare_month = i.spare_month),
                                              (s.start_month = i.start_month),
                                              (s.free_month = i.free_month))
                                            : i.type,
                                          r
                                            .$api("shophouse.pub", s, "post")
                                            .then(function (t) {
                                              a.hideLoading(),
                                                0 == t.errno
                                                  ? (r.$tools.toast(t.data.msg),
                                                    setTimeout(function () {
                                                      r.$Router.pushTab({
                                                        path: "/pages/index/index",
                                                      });
                                                    }, 800))
                                                  : r.$tools.toast(t.msg);
                                            }))
                                        : r.$tools.toast("请上传房产证")
                                      : r.$tools.toast("请上传房源图片")
                                    : r.$tools.toast("请填写地址")
                                  : r.$tools.toast("请选择所在位置")
                                : r.$tools.toast("请填写总楼层")
                              : r.$tools.toast("请填写所在楼层")
                            : r.$tools.toast("请填写联系电话")
                          : r.$tools.toast("请填写联系人");
                      } else r.$tools.toast("请填写门牌号");
                    else r.$tools.toast("请填写标题");
                  else r.$tools.toast("请选择所在地区");
                else r.$tools.toast("请先查看发布协议并同意");
              },
            },
          };
          e.default = t;
        }).call(this, o("543d").default);
      },
    },
    [["59e0", "common/runtime", "common/vendor"]],
  ]);
