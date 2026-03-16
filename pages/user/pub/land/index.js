require("../../common/vendor.js"),
  (global.webpackJsonp = global.webpackJsonp || []).push([
    ["pages/user/pub/land/index"],
    {
      "41c0": function (t, e, n) {
        n.r(e);
        var i,
          s = n("c3e5"),
          o = n.n(s);
        for (i in s)
          ["default"].indexOf(i) < 0 &&
            (function (t) {
              n.d(e, t, function () {
                return s[t];
              });
            })(i);
        e.default = o.a;
      },
      "5c0f": function (t, e, n) {
        var i = n("ea53");
        n.n(i).a;
      },
      c385: function (t, e, n) {
        n.r(e);
        var i,
          s = n("fe68"),
          o = n("41c0");
        for (i in o)
          ["default"].indexOf(i) < 0 &&
            (function (t) {
              n.d(e, t, function () {
                return o[t];
              });
            })(i);
        n("5c0f");
        var a = n("f0c5"),
          s = Object(a.a)(
            o.default,
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
      c3e5: function (t, n, o) {
        (function (t) {
          var e = o("4ea4");
          Object.defineProperty(n, "__esModule", { value: !0 }),
            (n.default = void 0);
          var a,
            i = e(o("9523"));
          function s(e, t) {
            var n,
              i = Object.keys(e);
            return (
              Object.getOwnPropertySymbols &&
                ((n = Object.getOwnPropertySymbols(e)),
                t &&
                  (n = n.filter(function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable;
                  })),
                i.push.apply(i, n)),
              i
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
                form_data: [],
                house: {
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
                  address: "",
                  is_attorn: 0,
                  ct_property: 0,
                  is_segment: 0,
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
                      (0, i.default)(e, t, n[t]);
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
              var t = (a = this).$Route.query;
              (this.houseId = t.houseId || 0), this.init();
            },
            onReady: function () {},
            methods:
              ((e = {
                init: function () {
                  this.$api("house.pub_land_init", { houseId: a.houseId }).then(
                    function (t) {
                      0 == t.errno &&
                        ((a.tagList = t.data.tagList),
                        (a.furnishList = t.data.furnishList),
                        (a.jyList = t.data.jyList),
                        (a.typeList2 = t.data.typeList2),
                        (a.typeList3 = t.data.typeList3),
                        (a.form_data = t.data.form_data),
                        0 != a.houseId) &&
                        ((t = t.data.house), (a.house = t));
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
                handTreaty: function () {
                  this.treaty_agree = !this.treaty_agree;
                },
                navToTreaty: function () {
                  this.$Router.push({
                    path: "/pages/user/pub/treaty",
                    query: {},
                  });
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
                  this.$refs.multiSelect.showPicker();
                },
              }),
              (0, i.default)(e, "handTreaty", function () {
                this.treaty_agree = !this.treaty_agree;
              }),
              (0, i.default)(e, "openHouseStw", function () {
                this.$refs.houseStw.show();
              }),
              (0, i.default)(e, "selectType", function (t) {
                this.house.type = t;
              }),
              (0, i.default)(e, "tagConfirm", function (t) {
                (this.house.tag_ids = t.ids), (this.house.tag_names = t.names);
              }),
              (0, i.default)(e, "businessConfirm", function (t) {
                (this.house.business_ids = t.ids),
                  (this.house.business_names = t.names);
              }),
              (0, i.default)(e, "furnishConfirm", function (t) {
                (this.house.furnish_ids = t.ids),
                  (this.house.furnish_names = t.names);
              }),
              (0, i.default)(e, "typeChange", function (t) {
                this.house.typeIndex = t.detail.value;
              }),
              (0, i.default)(e, "typeChange2", function (t) {
                this.house.typeIndex2 = t.detail.value;
              }),
              (0, i.default)(e, "typeChange3", function (t) {
                this.house.typeIndex3 = t.detail.value;
              }),
              (0, i.default)(e, "jyChange", function (t) {
                this.house.jyIndex = t.detail.value;
              }),
              (0, i.default)(e, "decorateChange", function (t) {
                this.decorateIndex = t.detail.value;
              }),
              (0, i.default)(e, "yearChange", function (t) {
                this.year = t.detail.value;
              }),
              (0, i.default)(e, "onChooseImg", function (e, t) {
                t -= e.length;
                a.$tools.chooseImage(t).then(function (t) {
                  t.forEach(function (t) {
                    a.$tools.uploadFile("file.upload", t).then(function (t) {
                      e.push(t.url);
                    });
                  });
                });
              }),
              (0, i.default)(e, "delImg", function (e, n) {
                t.showModal({
                  title: "删除照片",
                  content: "确定要删除这张照片么？",
                  cancelText: "取消",
                  confirmText: "删除",
                  success: function (t) {
                    t.confirm && e.splice(n, 1);
                  },
                });
              }),
              (0, i.default)(e, "delVideo", function () {
                t.showModal({
                  title: "提示",
                  content: "确定要删除视频么？",
                  cancelText: "取消",
                  confirmText: "删除",
                  success: function (t) {
                    t.confirm && (a.house.video = "");
                  },
                });
              }),
              (0, i.default)(e, "onChooseVideo", function () {
                a.$tools.chooseVideo().then(function (t) {
                  a.$tools.uploadFile("file.upload2", t).then(function (t) {
                    a.house.video = t.url;
                  });
                });
              }),
              (0, i.default)(e, "formSubmit", function (t) {
                var e,
                  n,
                  i,
                  s,
                  o = this.house;
                if (this.treaty_agree)
                  if (o.city_id)
                    if (o.title) {
                      if (o.money <= 0) {
                        if (1 == o.type)
                          return void a.$tools.toast("请填写租金");
                        if (2 == o.type)
                          return void a.$tools.toast("请填写售价");
                      }
                      o.mj <= 0
                        ? a.$tools.toast("请填写面积")
                        : o.name
                        ? o.tel
                          ? o.lng && o.lat
                            ? o.address
                              ? 1 != this.basicSet.house_set.force_thumbs ||
                                0 != o.thumbs.length
                                ? "fd" != this.role ||
                                  1 != this.basicSet.fd_set.is_fcz ||
                                  0 != o.fcz_imgs.length
                                  ? ((e = this.typeList2[o.typeIndex2].name),
                                    (n = this.typeList3[o.typeIndex3].name),
                                    (i = this.jyList[o.jyIndex].id),
                                    (s =
                                      0 < a.form_data.length
                                        ? JSON.stringify(a.form_data)
                                        : ""),
                                    (s = {
                                      role: this.role,
                                      houseId: this.houseId,
                                      type: o.type,
                                      title: o.title,
                                      name: o.name,
                                      tel: o.tel,
                                      mj: o.mj,
                                      lng: o.lng,
                                      lat: o.lat,
                                      address: o.address,
                                      city_id: o.city_id,
                                      area_id: o.area_id,
                                      buildarea_id: o.buildarea_id,
                                      type2: e,
                                      type3: n,
                                      jy_status: i,
                                      tag_ids: o.tag_ids,
                                      tag_names: o.tag_names,
                                      furnish_ids: o.furnish_ids,
                                      video: o.video,
                                      thumbs: o.thumbs.join(","),
                                      own_remarks: o.own_remarks,
                                      fcz_imgs: o.fcz_imgs.join(","),
                                      money: o.money,
                                      content: o.content,
                                      form_data: s,
                                    }),
                                    1 == o.type
                                      ? ((s.ya_month = o.ya_month),
                                        (s.fu_month = o.fu_month),
                                        (s.is_attorn = o.is_attorn),
                                        (s.attorn_fees = o.attorn_fees),
                                        (s.spare_month = o.spare_month),
                                        (s.start_month = o.start_month),
                                        (s.free_month = o.free_month))
                                      : o.type,
                                    a
                                      .$api("house.pub_land", s, "post")
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
              }),
              e),
          };
          n.default = e;
        }).call(this, o("543d").default);
      },
      ea53: function (t, e, n) {},
      fd26: function (t, e, i) {
        (function (t, e) {
          var n = i("4ea4");
          i("f0a5"), n(i("66fd"));
          n = n(i("c385"));
          (t.__webpack_require_UNI_MP_PLUGIN__ = i), e(n.default);
        }).call(this, i("bc2e").default, i("543d").createPage);
      },
      fe68: function (t, e, n) {
        n.d(e, "b", function () {
          return s;
        }),
          n.d(e, "c", function () {
            return o;
          }),
          n.d(e, "a", function () {
            return i;
          });
        var i = {
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
          o = [];
      },
    },
    [["fd26", "common/runtime", "common/vendor"]],
  ]);
