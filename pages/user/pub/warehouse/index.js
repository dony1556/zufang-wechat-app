require("../../common/vendor.js"),
  (global.webpackJsonp = global.webpackJsonp || []).push([
    ["pages/user/pub/warehouse/index"],
    {
      "0ea4": function (t, e, n) {
        n.d(e, "b", function () {
          return s;
        }),
          n.d(e, "c", function () {
            return i;
          }),
          n.d(e, "a", function () {
            return o;
          });
        var o = {
            wkLoginModal: function () {
              return n
                .e("components/wk-login-modal/index")
                .then(n.bind(null, "5198"));
            },
            wkMultiSelect: function () {
              return n
                .e("components/wk-multi-select/index")
                .then(n.bind(null, "a8e2"));
            },
            wkCityArea: function () {
              return n
                .e("components/wk-city-area/index")
                .then(n.bind(null, "2978"));
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
      "3a2c": function (t, e, n) {
        var o = n("e6a1");
        n.n(o).a;
      },
      7264: function (t, n, i) {
        (function (t) {
          var e = i("4ea4");
          Object.defineProperty(n, "__esModule", { value: !0 }),
            (n.default = void 0);
          var a,
            o = e(i("9523"));
          function s(e, t) {
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
          e = {
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
                directionList: [],
                typeList2: [],
                typeList3: [],
                jyList: [],
                decorateList: [],
                form_data: [],
                house: {
                  directionIndex: 0,
                  typeIndex2: 0,
                  typeIndex3: 0,
                  jyIndex: 0,
                  decorateIndex: 0,
                  address: "",
                  is_attorn: 0,
                  ct_property: 0,
                  is_segment: 0,
                  type: 1,
                  year: 2016,
                  thumbs: [],
                  city_id: "",
                  area_id: "",
                  buildarea_id: "",
                  cab_names: "",
                  video: "",
                  tag_ids: "",
                  tag_names: "",
                  business_ids: "",
                  business_names: "",
                  furnish_ids: "",
                  furnish_names: "",
                  fcz_imgs: [],
                  title: "",
                  content: "",
                  own_remarks: "",
                },
                treaty_agree: !1,
              };
            },
            computed: (function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2
                  ? s(Object(n), !0).forEach(function (t) {
                      (0, o.default)(e, t, n[t]);
                    })
                  : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(
                      e,
                      Object.getOwnPropertyDescriptors(n)
                    )
                  : s(Object(n)).forEach(function (t) {
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
              (this.houseId = t.houseId || 0), this.init();
            },
            onReady: function () {},
            beforeRouteLeave: function (t, e, n) {
              console.info("leave"), n();
            },
            methods: {
              init: function () {
                this.$api("house.pub_warehouse_init", {
                  houseId: a.houseId,
                }).then(function (t) {
                  0 == t.errno &&
                    (t.data.house,
                    (a.tagList = t.data.tagList),
                    (a.furnishList = t.data.furnishList),
                    (a.jyList = t.data.jyList),
                    (a.decorateList = t.data.decorateList),
                    (a.typeList2 = t.data.typeList2),
                    (a.form_data = t.data.form_data),
                    0 != a.houseId && ((t = t.data.house), (a.house = t)));
                });
              },
              openCityArea: function () {
                this.$refs.cab.show([0, 0, 0]);
              },
              cityAreaConfirm: function (t) {
                (this.house.city_id = t.city_id),
                  (this.house.area_id = t.area_id),
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
                this.$refs.multiSelect3.showPicker();
              },
              openFurnish: function () {
                this.$refs.multiSelect2.showPicker();
              },
              openTag: function () {
                this.$refs.multiSelect.showPicker();
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
              furnishConfirm: function (t) {
                (this.house.furnish_ids = t.ids),
                  (this.house.furnish_names = t.names);
              },
              businessConfirm: function (t) {
                (this.house.business_ids = t.ids),
                  (this.house.business_names = t.names);
              },
              typeChange: function (t) {
                this.house.typeIndex = t.detail.value;
              },
              typeChange2: function (t) {
                this.house.typeIndex2 = t.detail.value;
              },
              typeChange3: function (t) {
                this.house.typeIndex3 = t.detail.value;
              },
              jyChange: function (t) {
                this.house.jyIndex = t.detail.value;
              },
              decorateChange: function (t) {
                this.house.decorateIndex = t.detail.value;
              },
              yearChange: function (t) {
                this.house.year = t.detail.value;
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
              delImg: function (e, n) {
                t.showModal({
                  title: "删除照片",
                  content: "确定要删除这张照片么？",
                  cancelText: "取消",
                  confirmText: "删除",
                  success: function (t) {
                    t.confirm && e.splice(n, 1);
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
                  n,
                  o,
                  s,
                  i = this.house;
                if (this.treaty_agree)
                  if (i.city_id)
                    if (i.title) {
                      if (i.money <= 0) {
                        if (1 == i.type)
                          return void a.$tools.toast("请填写租金");
                        if (2 == i.type)
                          return void a.$tools.toast("请填写售价");
                      }
                      i.mj <= 0
                        ? a.$tools.toast("请填写面积")
                        : i.name
                        ? i.tel
                          ? i.lng && i.lat
                            ? i.address
                              ? 1 != this.basicSet.house_set.force_thumbs ||
                                0 != i.thumbs.length
                                ? "fd" != this.role ||
                                  1 != this.basicSet.fd_set.is_fcz ||
                                  0 != i.fcz_imgs.length
                                  ? ((e = this.typeList2[i.typeIndex2].name),
                                    (n = this.jyList[i.jyIndex].id),
                                    (o =
                                      this.decorateList[i.decorateIndex].name),
                                    (s =
                                      0 < a.form_data.length
                                        ? JSON.stringify(a.form_data)
                                        : ""),
                                    (s = {
                                      role: this.role,
                                      houseId: this.houseId,
                                      type: i.type,
                                      title: i.title,
                                      name: i.name,
                                      tel: i.tel,
                                      mj: i.mj,
                                      floor_height: i.floor_height,
                                      lng: i.lng,
                                      lat: i.lat,
                                      address: i.address,
                                      city_id: i.city_id,
                                      area_id: i.area_id,
                                      buildarea_id: i.buildarea_id,
                                      type2: e,
                                      jy_status: n,
                                      decorate: o,
                                      tag_ids: i.tag_ids,
                                      tag_names: i.tag_names,
                                      furnish_ids: i.furnish_ids,
                                      video: i.video,
                                      thumbs: i.thumbs.join(","),
                                      own_remarks: i.own_remarks,
                                      fcz_imgs: i.fcz_imgs.join(","),
                                      content: i.content,
                                      money: i.money,
                                      form_data: s,
                                    }),
                                    1 == i.type
                                      ? ((s.ya_month = i.ya_month),
                                        (s.fu_month = i.fu_month),
                                        (s.is_attorn = this.house.is_attorn),
                                        (s.attorn_fees = i.attorn_fees),
                                        (s.spare_month = i.spare_month),
                                        (s.start_month = i.start_month),
                                        (s.free_month = i.free_month))
                                      : i.type,
                                    a
                                      .$api("house.pub_warehouse", s, "post")
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
                          : a.$tools.toast("请填写联系电话")
                        : a.$tools.toast("请填写联系人");
                    } else a.$tools.toast("请填写标题");
                  else a.$tools.toast("请选择所在地区");
                else a.$tools.toast("请先查看发布协议并同意");
              },
            },
          };
          n.default = e;
        }).call(this, i("543d").default);
      },
      "981d": function (t, e, o) {
        (function (t, e) {
          var n = o("4ea4");
          o("f0a5"), n(o("66fd"));
          n = n(o("f8e6"));
          (t.__webpack_require_UNI_MP_PLUGIN__ = o), e(n.default);
        }).call(this, o("bc2e").default, o("543d").createPage);
      },
      e6a1: function (t, e, n) {},
      f001: function (t, e, n) {
        n.r(e);
        var o,
          s = n("7264"),
          i = n.n(s);
        for (o in s)
          ["default"].indexOf(o) < 0 &&
            (function (t) {
              n.d(e, t, function () {
                return s[t];
              });
            })(o);
        e.default = i.a;
      },
      f8e6: function (t, e, n) {
        n.r(e);
        var o,
          s = n("0ea4"),
          i = n("f001");
        for (o in i)
          ["default"].indexOf(o) < 0 &&
            (function (t) {
              n.d(e, t, function () {
                return i[t];
              });
            })(o);
        n("3a2c");
        var a = n("f0c5"),
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
    [["981d", "common/runtime", "common/vendor"]],
  ]);
