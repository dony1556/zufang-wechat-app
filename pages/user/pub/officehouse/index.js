require("../../common/vendor.js"),
  (global.webpackJsonp = global.webpackJsonp || []).push([
    ["pages/user/pub/officehouse/index"],
    {
      "1a0d": function (t, e, o) {
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
      "1a56": function (t, e, o) {
        o.r(e);
        var n,
          s = o("6053"),
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
      "52cd": function (t, e, o) {
        var n = o("7576");
        o.n(n).a;
      },
      6003: function (t, e, n) {
        (function (t, e) {
          var o = n("4ea4");
          n("f0a5"), o(n("66fd"));
          o = o(n("e14c"));
          (t.__webpack_require_UNI_MP_PLUGIN__ = n), e(o.default);
        }).call(this, n("bc2e").default, n("543d").createPage);
      },
      6053: function (t, o, i) {
        (function (t) {
          var e = i("4ea4");
          Object.defineProperty(o, "__esModule", { value: !0 }),
            (o.default = void 0);
          var a,
            n = e(i("9523"));
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
          e = {
            components: {},
            data: function () {
              var t;
              return {
                isLoading: 1,
                typeList: [
                  { name: "出租", value: 1 },
                  { name: "出售", value: 2 },
                ],
                furnishList: [],
                tagList: [],
                businessList: [],
                decorateList: [],
                directionList: [],
                houseTypeList: [],
                jyList: [],
                form_data: [],
                treaty_agree: !1,
                house:
                  ((t = {
                    id: 0,
                    type: 1,
                    city_id: "",
                    area_id: "",
                    buildarea_id: "",
                    cab_names: "",
                    lng: "",
                    lat: "",
                    address: "",
                    thumbs: [],
                    video: "",
                  }),
                  (0, n.default)(t, "address", ""),
                  (0, n.default)(t, "is_attorn", 0),
                  (0, n.default)(t, "ct_property", 0),
                  (0, n.default)(t, "is_segment", 0),
                  (0, n.default)(t, "tag_ids", ""),
                  (0, n.default)(t, "tag_names", ""),
                  (0, n.default)(t, "business_ids", ""),
                  (0, n.default)(t, "business_names", ""),
                  (0, n.default)(t, "furnish_ids", ""),
                  (0, n.default)(t, "furnish_names", ""),
                  (0, n.default)(t, "fcz_imgs", []),
                  (0, n.default)(t, "decorateIndex", 0),
                  (0, n.default)(t, "directionIndex", 0),
                  (0, n.default)(t, "houseTypeIndex", 0),
                  (0, n.default)(t, "jyIndex", 0),
                  (0, n.default)(t, "content", ""),
                  (0, n.default)(t, "own_remarks", ""),
                  (0, n.default)(t, "ya_month", ""),
                  (0, n.default)(t, "attorn_fees", ""),
                  (0, n.default)(t, "spare_month", ""),
                  (0, n.default)(t, "start_month", ""),
                  (0, n.default)(t, "free_month", ""),
                  t),
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
              (0, i("26cb").mapState)({
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
              var t = (a = this).$Route.query;
              (this.house.id = t.houseId || 0), this.init();
            },
            onReady: function () {},
            beforeRouteLeave: function (t, e, o) {
              console.info("leave"), o();
            },
            methods: {
              init: function () {
                this.$api("officehouse.pubInit", { houseId: a.house.id }).then(
                  function (t) {
                    0 == t.errno &&
                      ((a.jyList = t.data.jyList),
                      (a.tagList = t.data.tagList),
                      (a.furnishList = t.data.furnishList),
                      (a.decorateList = t.data.decorateList),
                      (a.houseTypeList = t.data.houseTypeList),
                      (a.form_data = t.data.form_data),
                      0 < a.house.id) &&
                      ((t = t.data.house), (a.house = t));
                  }
                );
              },
              openCityArea: function () {
                this.$refs.cab.show([0, 0, 0]);
              },
              cityAreaConfirm: function (t) {
                (this.house.city_id = t.city_id),
                  (this.house.area_id = t.city_id),
                  (this.house.buildarea_id = t.buildarea_id),
                  (this.house.cab_names = t.names);
              },
              openMap: function () {
                t.chooseLocation({
                  success: function (t) {
                    (a.house.lat = t.latitude),
                      (a.house.lng = t.longitude),
                      (a.house.address = t.address);
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
              openBusiness: function () {
                this.$refs.multiSelect.showPicker();
              },
              openFurnish: function () {
                this.$refs.multiSelect2.showPicker();
              },
              openTag: function () {
                this.$refs.multiSelect3.showPicker();
              },
              openHouseStw: function () {
                this.$refs.houseStw.show();
              },
              selectType: function (t) {
                this.house.type = t;
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
              jyChange: function (t) {
                this.house.jyIndex = t.detail.value;
              },
              onChooseImg: function (e, t) {
                t -= e.length;
                a.$tools.chooseImage(t).then(function (t) {
                  t.forEach(function (t) {
                    a.$tools.uploadFile("file.upload", t).then(function (t) {
                      e.push(t.url);
                    });
                  });
                });
              },
              delImg: function (e, o) {
                t.showModal({
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
                t.showModal({
                  title: "提示",
                  content: "确定要删除视频么？",
                  cancelText: "取消",
                  confirmText: "删除",
                  success: function (t) {
                    t.confirm && (a.house.video = "");
                  },
                });
              },
              onChooseVideo: function () {
                a.$tools.chooseVideo().then(function (t) {
                  a.$tools.uploadFile("file.upload2", t).then(function (t) {
                    a.house.video = t.url;
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
                            return void a.$tools.toast("请填写租金");
                          if (2 == i.type)
                            return void a.$tools.toast("请填写售价");
                        }
                        i.mj <= 0
                          ? a.$tools.toast("请填写房间面积")
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
                                            0 < a.form_data.length
                                              ? JSON.stringify(a.form_data)
                                              : ""),
                                          (s = {
                                            role: this.role,
                                            id: i.id,
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
                                            tag_ids: i.tag_ids,
                                            tag_names: i.tag_names,
                                            furnish_ids: i.furnish_ids,
                                            video: i.video,
                                            thumbs: i.thumbs.join(","),
                                            own_remarks: i.own_remarks,
                                            fcz_imgs: i.fcz_imgs.join(","),
                                            content: i.content,
                                            money: i.money,
                                            ya_month: i.ya_month,
                                            fu_month: i.fu_month,
                                            is_attorn: i.is_attorn,
                                            jy_status: n,
                                            type2: e,
                                            decorate: o,
                                            attorn_fees: i.attorn_fees,
                                            spare_month: i.spare_month,
                                            start_month: i.start_month,
                                            free_month: i.free_month,
                                            form_data: s,
                                          }),
                                          a
                                            .$api("officehouse.pub", s, "post")
                                            .then(function (t) {
                                              0 == t.errno
                                                ? (a.$tools.toast(t.data.msg),
                                                  setTimeout(function () {
                                                    a.$Router.pushTab({
                                                      path: "/pages/index/index",
                                                    });
                                                  }, 800))
                                                : a.$tools.toast(t.msg);
                                            }))
                                        : a.$tools.toast("请上传房产证")
                                      : a.$tools.toast("请上传房源图片")
                                    : a.$tools.toast("请填写地址")
                                  : a.$tools.toast("请选择所在位置")
                                : a.$tools.toast("请填写总楼层")
                              : a.$tools.toast("请填写所在楼层")
                            : a.$tools.toast("请填写联系电话")
                          : a.$tools.toast("请填写联系人");
                      } else a.$tools.toast("请填写门牌号");
                    else a.$tools.toast("请填写标题");
                  else a.$tools.toast("请选择所在地区");
                else a.$tools.toast("请先查看发布协议并同意");
              },
            },
          };
          o.default = e;
        }).call(this, i("543d").default);
      },
      7576: function (t, e, o) {},
      e14c: function (t, e, o) {
        o.r(e);
        var n,
          s = o("1a0d"),
          i = o("1a56");
        for (n in i)
          ["default"].indexOf(n) < 0 &&
            (function (t) {
              o.d(e, t, function () {
                return i[t];
              });
            })(n);
        o("52cd");
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
    },
    [["6003", "common/runtime", "common/vendor"]],
  ]);
