require("../../common/vendor.js"),
  (global.webpackJsonp = global.webpackJsonp || []).push([
    ["pages/user/pub/hotel/index"],
    {
      "4a4f": function (t, e, n) {},
      "51f8": function (t, e, n) {
        n.r(e);
        var o,
          i = n("88ef"),
          s = n.n(i);
        for (o in i)
          ["default"].indexOf(o) < 0 &&
            (function (t) {
              n.d(e, t, function () {
                return i[t];
              });
            })(o);
        e.default = s.a;
      },
      5676: function (t, e, n) {
        var o = n("4a4f");
        n.n(o).a;
      },
      "5b36": function (t, e, n) {
        n.r(e);
        var o,
          i = n("79aa"),
          s = n("51f8");
        for (o in s)
          ["default"].indexOf(o) < 0 &&
            (function (t) {
              n.d(e, t, function () {
                return s[t];
              });
            })(o);
        n("5676");
        var a = n("f0c5"),
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
      "79aa": function (t, e, n) {
        n.d(e, "b", function () {
          return i;
        }),
          n.d(e, "c", function () {
            return s;
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
      "88ef": function (t, n, a) {
        (function (t) {
          var e = a("4ea4");
          Object.defineProperty(n, "__esModule", { value: !0 }),
            (n.default = void 0);
          var s,
            o = e(a("9523"));
          function i(e, t) {
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
                decorateList: [],
                directionList: [],
                typeList2: [],
                typeList3: [],
                jyList: [],
                form_data: [],
                house: {
                  decorateIndex: 0,
                  directionIndex: 0,
                  typeIndex2: 0,
                  typeIndex3: 0,
                  jyIndex: 0,
                  type: 1,
                  year: 2016,
                  city_id: "",
                  area_id: "",
                  buildarea_id: "",
                  cab_names: "",
                  thumbs: [],
                  fcz_imgs: [],
                  video: "",
                  tag_ids: "",
                  tag_names: "",
                  business_ids: "",
                  business_names: "",
                  furnish_ids: "",
                  furnish_names: "",
                  title: "",
                  content: "",
                  own_remarks: "",
                  address: "",
                  is_attorn: 0,
                  ct_property: 0,
                  is_segment: 0,
                },
                treaty_agree: !1,
              };
            },
            computed: (function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2
                  ? i(Object(n), !0).forEach(function (t) {
                      (0, o.default)(e, t, n[t]);
                    })
                  : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(
                      e,
                      Object.getOwnPropertyDescriptors(n)
                    )
                  : i(Object(n)).forEach(function (t) {
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
              (0, a("26cb").mapState)({
                isLogin: function (t) {
                  return t.user.isLogin;
                },
                role: function (t) {
                  return t.user.role;
                },
                loginUser: function (t) {
                  return t.user.loginUser;
                },
                basicSet: function (t) {
                  return t.init.basicSet;
                },
              })
            ),
            onLoad: function () {
              var t = (s = this).$Route.query;
              (this.houseId = t.houseId || 0), this.init();
            },
            onReady: function () {},
            beforeRouteLeave: function (t, e, n) {
              console.info("leave"), n();
            },
            methods: {
              init: function () {
                this.$api("house.pub_hotel_init", { houseId: s.houseId }).then(
                  function (t) {
                    0 == t.errno &&
                      ((s.tagList = t.data.tagList),
                      (s.furnishList = t.data.furnishList),
                      (s.jyList = t.data.jyList),
                      (s.decorateList = t.data.decorateList),
                      (s.form_data = t.data.form_data),
                      0 != s.houseId) &&
                      ((t = t.data.house), (s.house = t));
                  }
                );
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
                    (s.house.lat = t.latitude),
                      (s.house.lng = t.longitude),
                      (s.house.address = t.address);
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
                this.$refs.multiSelect.showPicker();
              },
              openHouseStw: function () {
                this.$refs.houseStw.show();
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
              selectType: function (t) {
                this.house.type = t;
              },
              furnishConfirm: function (t) {
                (this.house.furnish_ids = t.ids),
                  (this.house.furnish_names = t.names);
              },
              tagConfirm: function (t) {
                (this.house.tag_ids = t.ids), (this.house.tag_names = t.names);
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
              onChooseImg: function (e, t) {
                t -= e.length;
                s.$tools.chooseImage(t).then(function (t) {
                  t.forEach(function (t) {
                    s.$tools.uploadFile("file.upload", t).then(function (t) {
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
                    t.confirm && (s.house.video = "");
                  },
                });
              },
              onChooseVideo: function () {
                s.$tools.chooseVideo().then(function (t) {
                  s.$tools.uploadFile("file.upload2", t).then(function (t) {
                    s.house.video = t.url;
                  });
                });
              },
              formSubmit: function (t) {
                var e,
                  n,
                  o,
                  i = this.house;
                if (this.treaty_agree)
                  if (i.city_id)
                    if (i.title) {
                      if (i.money <= 0) {
                        if (1 == i.type)
                          return void s.$tools.toast("请填写租金");
                        if (2 == i.type)
                          return void s.$tools.toast("请填写售价");
                      }
                      i.mj <= 0
                        ? s.$tools.toast("请填写面积")
                        : i.name
                        ? i.tel
                          ? i.lng && i.lat
                            ? i.address
                              ? 1 != this.basicSet.house_set.force_thumbs ||
                                0 != i.thumbs.length
                                ? "fd" != this.role ||
                                  1 != this.basicSet.fd_set.is_fcz ||
                                  0 != i.fcz_imgs.length
                                  ? ((e =
                                      this.decorateList[i.decorateIndex].name),
                                    (n = this.jyList[i.jyIndex].id),
                                    (o =
                                      0 < s.form_data.length
                                        ? JSON.stringify(s.form_data)
                                        : ""),
                                    (o = {
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
                                      jy_status: n,
                                      decorate: e,
                                      tag_ids: i.tag_ids,
                                      tag_names: i.tag_names,
                                      furnish_ids: i.furnish_ids,
                                      video: i.video,
                                      thumbs: i.thumbs.join(","),
                                      own_remarks: i.own_remarks,
                                      fcz_imgs: i.fcz_imgs.join(","),
                                      money: i.money,
                                      content: i.content,
                                      form_data: o,
                                    }),
                                    1 == i.type
                                      ? ((o.ya_month = i.ya_month),
                                        (o.fu_month = i.fu_month),
                                        (o.is_attorn = i.is_attorn),
                                        (o.attorn_fees = i.attorn_fees),
                                        (o.spare_month = i.spare_month),
                                        (o.start_month = i.start_month),
                                        (o.free_month = i.free_month))
                                      : i.type,
                                    s
                                      .$api("house.pub_hotel", o, "post")
                                      .then(function (t) {
                                        0 == t.errno
                                          ? (s.$tools.toast(t.data.msg),
                                            setTimeout(function () {
                                              s.$Router.pushTab({
                                                path: "/pages/index/index",
                                              });
                                            }, 800))
                                          : s.$tools.toast(t.msg);
                                      }))
                                  : s.$tools.toast("请上传房产证")
                                : s.$tools.toast("请上传房源图片")
                              : s.$tools.toast("请填写地址")
                            : s.$tools.toast("请选择所在位置")
                          : s.$tools.toast("请填写联系电话")
                        : s.$tools.toast("请填写联系人");
                    } else s.$tools.toast("请填写标题");
                  else s.$tools.toast("请选择所在地区");
                else s.$tools.toast("请先查看发布协议并同意");
              },
            },
          };
          n.default = e;
        }).call(this, a("543d").default);
      },
      "8c48": function (t, e, o) {
        (function (t, e) {
          var n = o("4ea4");
          o("f0a5"), n(o("66fd"));
          n = n(o("5b36"));
          (t.__webpack_require_UNI_MP_PLUGIN__ = o), e(n.default);
        }).call(this, o("bc2e").default, o("543d").createPage);
      },
    },
    [["8c48", "common/runtime", "common/vendor"]],
  ]);
