require("../../common/vendor.js"),
  (global.webpackJsonp = global.webpackJsonp || []).push([
    ["pages/public/poster/children/sh-invite-poster"],
    {
      "10cf": function (t, e, n) {
        n.r(e);
        var o,
          r = n("5b08"),
          a = n("6777");
        for (o in a)
          ["default"].indexOf(o) < 0 &&
            (function (t) {
              n.d(e, t, function () {
                return a[t];
              });
            })(o);
        n("62fa");
        var i = n("f0c5"),
          r = Object(i.a)(
            a.default,
            r.b,
            r.c,
            !1,
            null,
            null,
            null,
            !1,
            r.a,
            void 0
          );
        e.default = r.exports;
      },
      "5b08": function (t, e, n) {
        n.d(e, "b", function () {
          return o;
        }),
          n.d(e, "c", function () {
            return r;
          }),
          n.d(e, "a", function () {});
        var o = function () {
            this.$createElement;
            this._self._c;
          },
          r = [];
      },
      "62fa": function (t, e, n) {
        var o = n("85be");
        n.n(o).a;
      },
      6777: function (t, e, n) {
        n.r(e);
        var o,
          r = n("86e5"),
          a = n.n(r);
        for (o in r)
          ["default"].indexOf(o) < 0 &&
            (function (t) {
              n.d(e, t, function () {
                return r[t];
              });
            })(o);
        e.default = a.a;
      },
      "85be": function (t, e, n) {},
      "86e5": function (t, n, c) {
        (function (t) {
          var e = c("4ea4");
          Object.defineProperty(n, "__esModule", { value: !0 }),
            (n.default = void 0);
          var o = e(c("2eee")),
            r = e(c("c973")),
            a = e(c("9523"));
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
            mixins: ["shoproShare"],
            data: function () {
              return {
                poster: {},
                qrShow: !1,
                canvasId: "invite_poster",
                showShareGuide: !1,
              };
            },
            props: {},
            computed: (function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2
                  ? i(Object(n), !0).forEach(function (t) {
                      (0, a.default)(e, t, n[t]);
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
              (0, c("26cb").mapState)({
                userInfo: function (t) {
                  return t.user.userInfo;
                },
                shareData: function (t) {
                  return t.init.initData.share;
                },
              })
            ),
            created: function () {
              var t = this;
              t.setShareInfo(),
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
                return (0, r.default)(
                  o.default.mark(function t() {
                    var r, e;
                    return o.default.wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (
                                (r = n),
                                (t.prev = 1),
                                console.log("准备生成:" + new Date()),
                                (t.next = 5),
                                getSharePoster({
                                  _this: n,
                                  backgroundImage: r.$tools.checkImgHttp(
                                    r.shareData.user_poster_bg
                                  ),
                                  formData: {},
                                  posterCanvasId: n.canvasId,
                                  delayTimeScale: 20,
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
                                            url: r.$tools.checkImgHttp(
                                              r.userInfo.avatar
                                            ),
                                            alpha: 1,
                                            dx:
                                              0.5 * n.width -
                                              (0.16 * n.width) / 2,
                                            dy: 0.16 * n.width,
                                            infoCallBack: function (t) {
                                              var e =
                                                (0.16 * n.width) / t.height;
                                              return {
                                                circleSet: {
                                                  x: (t.width * e) / 2,
                                                  y: (0.16 * n.width) / 2,
                                                  r: (0.16 * n.width) / 2,
                                                },
                                                dWidth: t.width * e,
                                                dHeight: 0.16 * n.width,
                                              };
                                            },
                                          },
                                          {
                                            type: "text",
                                            text: r.userInfo.nickname,
                                            size: o,
                                            color: "black",
                                            alpha: 1,
                                            textAlign: "middle",
                                            textBaseline: "middle",
                                            infoCallBack: function (t) {
                                              return (
                                                _app.log(
                                                  "index页面的text的infocallback ，textlength:" +
                                                    t
                                                ),
                                                {
                                                  dx: 0.5 * n.width - 0.5 * t,
                                                  dy: 0.42 * n.width,
                                                }
                                              );
                                            },
                                            serialNum: 0,
                                            id: "tag1",
                                          },
                                          {
                                            type: "image",
                                            url: ""
                                              .concat(
                                                r.$API_URL,
                                                "wechat/wxacode?scene="
                                              )
                                              .concat(r.scene),
                                            alpha: 1,
                                            drawDelayTime: 500,
                                            dx:
                                              0.5 * n.width -
                                              (0.26 * n.width) / 2,
                                            dy: 0.855 * n.width,
                                            infoCallBack: function (t) {
                                              return {
                                                dWidth: 0.26 * n.width,
                                                dHeight: 0.26 * n.width,
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
                                (n.qrShow = !0),
                                (t.next = 15);
                              break;
                            case 10:
                              (t.prev = 10),
                                (t.t0 = t.catch(1)),
                                _app.hideLoading(),
                                _app.showToast(JSON.stringify(t.t0)),
                                console.log(JSON.stringify(t.t0));
                            case 15:
                            case "end":
                              return t.stop();
                          }
                      },
                      t,
                      null,
                      [[1, 10]]
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
              hideQr: function () {
                this.qrShow = !1;
              },
            },
          };
          n.default = e;
        }).call(this, c("543d").default);
      },
    },
  ]),
  (global.webpackJsonp = global.webpackJsonp || []).push([
    "pages/public/poster/children/sh-invite-poster-create-component",
    {
      "pages/public/poster/children/sh-invite-poster-create-component":
        function (t, e, n) {
          n("543d").createComponent(n("10cf"));
        },
    },
    [["pages/public/poster/children/sh-invite-poster-create-component"]],
  ]);
