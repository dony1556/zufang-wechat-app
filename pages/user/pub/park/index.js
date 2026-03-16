require("../../common/vendor.js"),
  (global.webpackJsonp = global.webpackJsonp || []).push([
    ["pages/user/pub/park/index"],
    {
      "3a96": function (t, e, n) {},
      "4de7": function (t, e, n) {
        n.d(e, "b", function () {
          return o;
        }),
          n.d(e, "c", function () {
            return i;
          }),
          n.d(e, "a", function () {
            return s;
          });
        var s = {
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
          o = function () {
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
      "70b6": function (t, e, n) {
        n.r(e);
        var s,
          o = n("4de7"),
          i = n("f94a");
        for (s in i)
          ["default"].indexOf(s) < 0 &&
            (function (t) {
              n.d(e, t, function () {
                return i[t];
              });
            })(s);
        n("e31f");
        var a = n("f0c5"),
          o = Object(a.a)(
            i.default,
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
        e.default = o.exports;
      },
      aec0: function (t, e, s) {
        (function (t, e) {
          var n = s("4ea4");
          s("f0a5"), n(s("66fd"));
          n = n(s("70b6"));
          (t.__webpack_require_UNI_MP_PLUGIN__ = s), e(n.default);
        }).call(this, s("bc2e").default, s("543d").createPage);
      },
      e31f: function (t, e, n) {
        var s = n("3a96");
        n.n(s).a;
      },
      e395: function (t, n, a) {
        (function (t) {
          var e = a("4ea4");
          Object.defineProperty(n, "__esModule", { value: !0 }),
            (n.default = void 0);
          var o,
            s = e(a("9523"));
          function i(e, t) {
            var n,
              s = Object.keys(e);
            return (
              Object.getOwnPropertySymbols &&
                ((n = Object.getOwnPropertySymbols(e)),
                t &&
                  (n = n.filter(function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable;
                  })),
                s.push.apply(s, n)),
              s
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
                  type: 1,
                  year: 2016,
                  directionIndex: 0,
                  typeIndex2: 0,
                  typeIndex3: 0,
                  jyIndex: 0,
                  thumbs: [],
                  fcz_imgs: [],
                  video: "",
                  tag_ids: "",
                  tag_names: "",
                  business_ids: "",
                  business_names: "",
                  furnish_ids: "",
                  furnish_names: "",
                  city_id: "",
                  area_id: "",
                  buildarea_id: "",
                  cab_names: "",
                  address: "",
                  title: "",
                  content: "",
                  own_remarks: "",
                  is_attorn: 0,
                  ct_property: 0,
                  is_segment: 0,
                },
                location: {},
                cab: {},
                treaty_agree: !1,
              };
            },
            computed: (function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2
                  ? i(Object(n), !0).forEach(function (t) {
                      (0, s.default)(e, t, n[t]);
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
              var t = (o = this).$Route.query;
              (this.houseId = t.houseId || 0), this.init();
            },
            onReady: function () {},
            beforeRouteLeave: function (t, e, n) {
              console.info("leave"), n();
            },
            methods:
              ((e = {
                init: function () {
                  this.$api("house.pub_park_init", { houseId: o.houseId }).then(
                    function (t) {
                      0 == t.errno &&
                        ((o.tagList = t.data.tagList),
                        (o.furnishList = t.data.furnishList),
                        (o.jyList = t.data.jyList),
                        (o.typeList2 = t.data.typeList2),
                        (o.form_data = t.data.form_data),
                        0 != o.houseId) &&
                        ((t = t.data.house), (o.house = t));
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
                      (o.house.lat = t.latitude),
                        (o.house.lng = t.longitude),
                        (o.house.address = t.address);
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
                tagConfirm: function (t) {
                  (this.house.tag_ids = t.ids),
                    (this.house.tag_names = t.names);
                },
                businessConfirm: function (t) {
                  (this.house.business_ids = t.ids),
                    (this.house.business_names = t.names);
                },
                furnishConfirm: function (t) {
                  (this.house.furnish_ids = t.ids),
                    (this.house.furnish_names = t.names);
                },
              }),
              (0, s.default)(e, "businessConfirm", function (t) {
                (this.house.business_ids = t.ids),
                  (this.house.business_names = t.names);
              }),
              (0, s.default)(e, "handTreaty", function () {
                this.treaty_agree = !this.treaty_agree;
              }),
              (0, s.default)(e, "typeChange", function (t) {
                this.house.typeIndex = t.detail.value;
              }),
              (0, s.default)(e, "typeChange2", function (t) {
                this.house.typeIndex2 = t.detail.value;
              }),
              (0, s.default)(e, "typeChange3", function (t) {
                this.house.typeIndex3 = t.detail.value;
              }),
              (0, s.default)(e, "jyChange", function (t) {
                this.house.jyIndex = t.detail.value;
              }),
              (0, s.default)(e, "decorateChange", function (t) {
                this.house.decorateIndex = t.detail.value;
              }),
              (0, s.default)(e, "yearChange", function (t) {
                this.house.year = t.detail.value;
              }),
              (0, s.default)(e, "onChooseImg", function (e, t) {
                t -= e.length;
                o.$tools.chooseImage(t).then(function (t) {
                  t.forEach(function (t) {
                    o.$tools.uploadFile("file.upload", t).then(function (t) {
                      e.push(t.url);
                    });
                  });
                });
              }),
              (0, s.default)(e, "delImg", function (e, n) {
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
              (0, s.default)(e, "delVideo", function () {
                t.showModal({
                  title: "提示",
                  content: "确定要删除视频么？",
                  cancelText: "取消",
                  confirmText: "删除",
                  success: function (t) {
                    t.confirm && (o.house.video = "");
                  },
                });
              }),
              (0, s.default)(e, "onChooseVideo", function () {
                o.$tools.chooseVideo().then(function (t) {
                  o.$tools.uploadFile("file.upload2", t).then(function (t) {
                    o.house.video = t.url;
                  });
                });
              }),
              (0, s.default)(e, "formSubmit", function (t) {
                var e,
                  n,
                  s = this.house;
                if (this.treaty_agree)
                  if (s.city_id)
                    if (s.title) {
                      if (s.money <= 0) {
                        if (1 == s.type)
                          return void o.$tools.toast("请填写租金");
                        if (2 == s.type)
                          return void o.$tools.toast("请填写售价");
                      }
                      s.mj <= 0
                        ? o.$tools.toast("请填写面积")
                        : s.name
                        ? s.tel
                          ? s.lng && s.lat
                            ? s.address
                              ? 1 != this.basicSet.house_set.force_thumbs ||
                                0 != s.thumbs.length
                                ? "fd" != this.role ||
                                  1 != this.basicSet.fd_set.is_fcz ||
                                  0 != s.fcz_imgs.length
                                  ? ((e = this.typeList2[s.typeIndex2].name),
                                    (n =
                                      0 < o.form_data.length
                                        ? JSON.stringify(o.form_data)
                                        : ""),
                                    (n = {
                                      role: this.role,
                                      houseId: this.houseId,
                                      type: s.type,
                                      title: s.title,
                                      name: s.name,
                                      tel: s.tel,
                                      mj: s.mj,
                                      length2: s.length2,
                                      width: s.width,
                                      lng: s.lng,
                                      lat: s.lat,
                                      address: s.address,
                                      city_id: s.city_id,
                                      area_id: s.area_id,
                                      buildarea_id: s.buildarea_id,
                                      type2: e,
                                      tag_ids: s.tag_ids,
                                      tag_names: s.tag_names,
                                      furnish_ids: s.furnish_ids,
                                      video: s.video,
                                      thumbs: s.thumbs.join(","),
                                      own_remarks: s.own_remarks,
                                      fcz_imgs: s.fcz_imgs.join(","),
                                      money: s.money,
                                      content: s.content,
                                      form_data: n,
                                    }),
                                    1 == s.type
                                      ? ((n.ya_month = s.ya_month),
                                        (n.fu_month = s.fu_month),
                                        (n.is_attorn = s.is_attorn),
                                        (n.attorn_fees = s.attorn_fees),
                                        (n.spare_month = s.spare_month),
                                        (n.start_month = s.start_month),
                                        (n.free_month = s.free_month))
                                      : s.type,
                                    o
                                      .$api("house.pub_park", n, "post")
                                      .then(function (t) {
                                        0 == t.errno
                                          ? (o.$tools.toast(t.data.msg),
                                            setTimeout(function () {
                                              o.$Router.pushTab({
                                                path: "/pages/index/index",
                                              });
                                            }, 800))
                                          : o.$tools.toast(t.msg);
                                      }))
                                  : o.$tools.toast("请上传房产证")
                                : o.$tools.toast("请上传房源图片")
                              : o.$tools.toast("请填写地址")
                            : o.$tools.toast("请选择所在位置")
                          : o.$tools.toast("请填写联系电话")
                        : o.$tools.toast("请填写联系人");
                    } else o.$tools.toast("请填写标题");
                  else o.$tools.toast("请选择所在地区");
                else o.$tools.toast("请先查看发布协议并同意");
              }),
              e),
          };
          n.default = e;
        }).call(this, a("543d").default);
      },
      f94a: function (t, e, n) {
        n.r(e);
        var s,
          o = n("e395"),
          i = n.n(o);
        for (s in o)
          ["default"].indexOf(s) < 0 &&
            (function (t) {
              n.d(e, t, function () {
                return o[t];
              });
            })(s);
        e.default = i.a;
      },
    },
    [["aec0", "common/runtime", "common/vendor"]],
  ]);
