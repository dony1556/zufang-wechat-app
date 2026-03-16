(global.webpackJsonp = global.webpackJsonp || []).push([
  ["pages/community/pub"],
  {
    "0bc2": function (t, n, i) {
      i.d(n, "b", function () {
        return o;
      }),
        i.d(n, "c", function () {
          return a;
        }),
        i.d(n, "a", function () {
          return e;
        });
      var e = {
          wkCityArea: function () {
            return i
              .e("components/wk-city-area/index")
              .then(i.bind(null, "2978"));
          },
        },
        o = function () {
          this.$createElement;
          var t = (this._self._c, this.community.detail_imgs.length);
          this.$mp.data = Object.assign({}, { $root: { g0: t } });
        },
        a = [];
    },
    "0d61": function (t, n, i) {
      i.r(n);
      var e,
        o = i("0bc2"),
        a = i("c2ea");
      for (e in a)
        ["default"].indexOf(e) < 0 &&
          (function (t) {
            i.d(n, t, function () {
              return a[t];
            });
          })(e);
      i("dfe7");
      var c = i("f0c5"),
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
      n.default = o.exports;
    },
    "55cb": function (t, n, i) {},
    "61ae": function (t, n, e) {
      (function (t, n) {
        var i = e("4ea4");
        e("f0a5"), i(e("66fd"));
        i = i(e("0d61"));
        (t.__webpack_require_UNI_MP_PLUGIN__ = e), n(i.default);
      }).call(this, e("bc2e").default, e("543d").createPage);
    },
    8586: function (t, e, o) {
      (function (t) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.default = void 0),
          o("26cb");
        var i,
          n = {
            components: {},
            data: function () {
              return {
                isLoading: 1,
                community: {
                  name: "",
                  detail_imgs: [],
                  address: "",
                  lng: "",
                  lat: "",
                  city_id: "",
                  area_id: "",
                  buildarea_id: "",
                  cab_names: "",
                },
              };
            },
            onLoad: function () {
              (i = this).$Route.query, this.init();
            },
            onReady: function () {},
            methods: {
              init: function () {},
              openCityArea: function () {
                this.$refs.cityArea.show([0, 0, 0]);
              },
              cityAreaConfirm: function (t) {
                (i.community.city_id = t.city_id),
                  (i.community.area_id = t.area_id),
                  (i.community.buildarea_id = t.buildarea_id),
                  (i.community.cab_names = t.names);
              },
              openMap: function () {
                var n = this;
                t.chooseLocation({
                  success: function (t) {
                    (n.community.lng = t.longitude),
                      (n.community.lat = t.latitude),
                      (n.community.address = t.address);
                  },
                });
              },
              onChooseImg: function (n, t) {
                i.$tools.chooseImage(t).then(function (t) {
                  t.forEach(function (t) {
                    i.$tools.uploadFile("file.upload", t).then(function (t) {
                      n.push(t.url);
                    });
                  });
                });
              },
              delImg: function (n, i) {
                t.showModal({
                  title: "删除照片",
                  content: "确定要删除这张照片么？",
                  cancelText: "取消",
                  confirmText: "删除",
                  success: function (t) {
                    t.confirm && n.splice(i, 1);
                  },
                });
              },
              formSubmit: function (t) {
                var n = this.community;
                n.name
                  ? this.community.city_id
                    ? this.community.lng
                      ? this.community.address
                        ? ((n = {
                            name: n.name,
                            city_id: n.city_id,
                            area_id: n.area_id,
                            buildarea_id: n.buildarea_id,
                            detail_imgs: n.detail_imgs.join(","),
                            lng: n.lng,
                            lat: n.lat,
                            address: n.address,
                          }),
                          i.$api("community.pub", n, "post").then(function (t) {
                            0 == t.errno &&
                              (i.$tools.toast("发布成功"),
                              setTimeout(function () {
                                i.$Router.pushTab({
                                  path: "/pages/index/index",
                                });
                              }, 800));
                          }))
                        : i.$tools.toast("请输入地址")
                      : i.$tools.toast("请选择位置")
                    : i.$tools.toast("请选择区域")
                  : i.$tools.toast("请填写小区名称");
              },
            },
          };
        e.default = n;
      }).call(this, o("543d").default);
    },
    c2ea: function (t, n, i) {
      i.r(n);
      var e,
        o = i("8586"),
        a = i.n(o);
      for (e in o)
        ["default"].indexOf(e) < 0 &&
          (function (t) {
            i.d(n, t, function () {
              return o[t];
            });
          })(e);
      n.default = a.a;
    },
    dfe7: function (t, n, i) {
      var e = i("55cb");
      i.n(e).a;
    },
  },
  [["61ae", "common/runtime", "common/vendor"]],
]);
