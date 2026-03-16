require("../../common/vendor.js"),
  (global.webpackJsonp = global.webpackJsonp || []).push([
    ["pages/public/poster/children/sh-goods-poster"],
    {
      "71cf": function (t, e, n) {},
      "8c64": function (t, e, n) {
        n.r(e);
        var o,
          a = n("e5ef"),
          i = n.n(a);
        for (o in a)
          ["default"].indexOf(o) < 0 &&
            (function (t) {
              n.d(e, t, function () {
                return a[t];
              });
            })(o);
        e.default = i.a;
      },
      "9e41": function (t, e, n) {
        n.r(e);
        var o,
          a = n("dd8e"),
          i = n("8c64");
        for (o in i)
          ["default"].indexOf(o) < 0 &&
            (function (t) {
              n.d(e, t, function () {
                return i[t];
              });
            })(o);
        n("dcf6");
        var r = n("f0c5"),
          a = Object(r.a)(
            i.default,
            a.b,
            a.c,
            !1,
            null,
            null,
            null,
            !1,
            a.a,
            void 0
          );
        e.default = a.exports;
      },
      dcf6: function (t, e, n) {
        var o = n("71cf");
        n.n(o).a;
      },
      dd8e: function (t, e, n) {
        n.d(e, "b", function () {
          return o;
        }),
          n.d(e, "c", function () {
            return a;
          }),
          n.d(e, "a", function () {});
        var o = function () {
            this.$createElement;
            this._self._c;
          },
          a = [];
      },
      e5ef: function (t, n, d) {
        (function (t) {
          var e = d("4ea4");
          Object.defineProperty(n, "__esModule", { value: !0 }),
            (n.default = void 0);
          var o = e(d("2eee")),
            a = e(d("c973")),
            i = e(d("9523")),
            r = e(d("0733")),
            c = d("ed00");
          function l(e, t) {
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
            mixins: ["shoproShare"],
            data: function () {
              return {
                poster: {},
                canvasId: "goods_poster",
                goodsInfo: {},
                scene: "",
              };
            },
            computed: (function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2
                  ? l(Object(n), !0).forEach(function (t) {
                      (0, i.default)(e, t, n[t]);
                    })
                  : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(
                      e,
                      Object.getOwnPropertyDescriptors(n)
                    )
                  : l(Object(n)).forEach(function (t) {
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
              (0, (e(d("ffa7")), d("26cb")).mapState)({
                userInfo: function (t) {
                  return t.user.userInfo;
                },
                shareData: function (t) {
                  return t.init.initData.share;
                },
              })
            ),
            props: {},
            created: function () {
              var t = this;
              (t.goodsInfo = t.$Route.query),
                (t.goodsInfo.image = decodeURIComponent(t.$Route.query.image)),
                (t.goodsInfo.title = decodeURIComponent(t.$Route.query.title)),
                t.setShareInfo({
                  query: { url: "goods-" + t.$Route.query.id },
                  title: t.goodsInfo.title,
                  image: t.goodsInfo.image,
                }),
                t.shareInfo &&
                  setTimeout(function () {
                    t.$emit("getShareInfo", t.shareInfo),
                      (t.scene = encodeURIComponent(
                        t.shareInfo.path.split("?")[1]
                      )),
                      t.shareFc();
                  }, 100);
            },
            methods: {
              shareFc: function () {
                var n = this;
                return (0, a.default)(
                  o.default.mark(function t() {
                    var a, e;
                    return o.default.wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (
                                (a = n),
                                (t.prev = 1),
                                console.log("准备生成:" + new Date()),
                                (t.next = 5),
                                (0, c.getSharePoster)({
                                  _this: n,
                                  backgroundImage: a.$tools.checkImgHttp(
                                    a.shareData.goods_poster_bg
                                  ),
                                  formData: {},
                                  posterCanvasId: n.canvasId,
                                  delayTimeScale: 20,
                                  drawDelayTime: 500,
                                  drawArray: function (t) {
                                    var n = t.bgObj,
                                      o =
                                        (t.type,
                                        t.bgScale,
                                        n.width,
                                        0.042 * n.width);
                                    return (
                                      n.height,
                                      new Promise(function (t, e) {
                                        t([
                                          {
                                            type: "image",
                                            url: a.$tools.checkImgHttp(
                                              a.userInfo.avatar
                                            ),
                                            alpha: 1,
                                            dx: 0.06 * n.width,
                                            dy: 0.06 * n.width,
                                            infoCallBack: function (t) {
                                              var e =
                                                (0.1 * n.width) / t.height;
                                              return {
                                                circleSet: {
                                                  x: (t.width * e) / 2,
                                                  y: (0.1 * n.width) / 2,
                                                  r: (0.1 * n.width) / 2,
                                                },
                                                dWidth: t.width * e,
                                                dHeight: 0.1 * n.width,
                                              };
                                            },
                                          },
                                          {
                                            type: "text",
                                            text: a.userInfo.nickname,
                                            size: o,
                                            color: "black",
                                            alpha: 1,
                                            textAlign: "middle",
                                            textBaseline: "middle",
                                            infoCallBack: function (t) {
                                              return (
                                                r.default.log(
                                                  "index页面的text的infocallback ，textlength:" +
                                                    t
                                                ),
                                                {
                                                  dx: 0.2 * n.width,
                                                  dy: 0.08 * n.width,
                                                }
                                              );
                                            },
                                            serialNum: 0,
                                            id: "tag1",
                                          },
                                          {
                                            type: "text",
                                            text: "推荐一个好物给你,请查收！",
                                            size: 0.9 * o,
                                            color: "black",
                                            alpha: 1,
                                            textAlign: "middle",
                                            textBaseline: "middle",
                                            infoCallBack: function (t) {
                                              return (
                                                r.default.log(
                                                  "index页面的text的infocallback ，textlength:" +
                                                    t
                                                ),
                                                {
                                                  dx: 0.2 * n.width,
                                                  dy: 0.15 * n.width,
                                                }
                                              );
                                            },
                                            serialNum: 0,
                                            id: "tag1",
                                          },
                                          {
                                            type: "image",
                                            url: a.$tools.checkImgHttp(
                                              a.goodsInfo.image
                                            ),
                                            alpha: 1,
                                            drawDelayTime: 500,
                                            dx: 0.052 * n.width,
                                            dy: 0.22 * n.width,
                                            infoCallBack: function (t) {
                                              return {
                                                dWidth: 0.9 * n.width,
                                                dHeight: 0.9 * n.width,
                                              };
                                            },
                                          },
                                          {
                                            type: "text",
                                            text: a.goodsInfo.title,
                                            size: o,
                                            color: "black",
                                            alpha: 1,
                                            textAlign: "left",
                                            textBaseline: "middle",
                                            fontWeight: "bold",
                                            lineFeed: {
                                              maxWidth: 0.89 * n.width,
                                              lineHeight: 0.07 * n.width,
                                              lineNum: 2,
                                              dx: -1,
                                            },
                                            infoCallBack: function (t) {
                                              return (
                                                r.default.log(
                                                  "index页面的text的infocallback ，textlength:" +
                                                    t
                                                ),
                                                {
                                                  dx: 0.052 * n.width,
                                                  dy: 1.17 * n.width,
                                                }
                                              );
                                            },
                                            serialNum: 0,
                                          },
                                          {
                                            type: "text",
                                            text: "￥".concat(
                                              a.goodsInfo.price
                                            ),
                                            size: 1.1 * o,
                                            color: "#E1212B",
                                            alpha: 1,
                                            textAlign: "left",
                                            textBaseline: "middle",
                                            fontWeight: "bold",
                                            infoCallBack: function (t) {
                                              return (
                                                r.default.log(
                                                  "index页面的text的infocallback ，textlength:" +
                                                    t
                                                ),
                                                {
                                                  dx: 0.052 * n.width,
                                                  dy: 1.32 * n.width,
                                                }
                                              );
                                            },
                                            serialNum: 0,
                                          },
                                          {
                                            type: "text",
                                            text: "￥".concat(
                                              a.goodsInfo.original_price
                                            ),
                                            size: 0.9 * o,
                                            color: "#999999",
                                            alpha: 1,
                                            textAlign: "left",
                                            textBaseline: "middle",
                                            lineThrough: { style: "#999999" },
                                            infoCallBack: function (t) {
                                              return (
                                                r.default.log(
                                                  "index页面的text的infocallback ，textlength:" +
                                                    t
                                                ),
                                                {
                                                  dx: 0.3 * n.width,
                                                  dy: 1.32 * n.width,
                                                }
                                              );
                                            },
                                            serialNum: 0,
                                          },
                                          {
                                            type: "image",
                                            url: ""
                                              .concat(
                                                a.$API_URL,
                                                "wechat/wxacode?scene="
                                              )
                                              .concat(a.scene),
                                            alpha: 1,
                                            drawDelayTime: 500,
                                            dx: 0.948 * n.width - 0.2 * n.width,
                                            dy:
                                              n.height -
                                              0.052 * n.width -
                                              0.2 * n.width,
                                            infoCallBack: function (t) {
                                              return {
                                                dWidth: 0.2 * n.width,
                                                dHeight: 0.2 * n.width,
                                              };
                                            },
                                          },
                                        ]);
                                      })
                                    );
                                  },
                                  setCanvasWH: function (t) {
                                    var e = t.bgObj;
                                    t.type, t.bgScale, (n.poster = e);
                                  },
                                })
                              );
                            case 5:
                              (e = t.sent),
                                n.$set(
                                  n.poster,
                                  "finalPath",
                                  e.poster.tempFilePath
                                ),
                                (t.next = 14);
                              break;
                            case 9:
                              (t.prev = 9),
                                (t.t0 = t.catch(1)),
                                r.default.hideLoading(),
                                r.default.showToast(JSON.stringify(t.t0)),
                                console.log(JSON.stringify(t.t0));
                            case 14:
                            case "end":
                              return t.stop();
                          }
                      },
                      t,
                      null,
                      [[1, 9]]
                    );
                  })
                )();
              },
              saveImage: function () {
                var e = this;
                "wxOfficialAccount" === t.getStorageSync("platform")
                  ? e.$tools.toast("长按图片保存")
                  : t.saveImageToPhotosAlbum({
                      filePath: e.poster.finalPath,
                      success: function (t) {
                        e.$tools.toast("保存成功");
                      },
                      fail: function (t) {
                        e.$tools.toast("保存失败");
                      },
                    });
              },
              share: function () {},
              copyLink: function () {
                t.setClipboardData({
                  data: this.shareInfo.copyLink,
                  success: function () {},
                });
              },
            },
          };
          n.default = e;
        }).call(this, d("543d").default);
      },
    },
  ]),
  (global.webpackJsonp = global.webpackJsonp || []).push([
    "pages/public/poster/children/sh-goods-poster-create-component",
    {
      "pages/public/poster/children/sh-goods-poster-create-component":
        function (t, e, n) {
          n("543d").createComponent(n("9e41"));
        },
    },
    [["pages/public/poster/children/sh-goods-poster-create-component"]],
  ]);
