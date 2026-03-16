(global.webpackJsonp = global.webpackJsonp || []).push([
  ["pages/public/common/vendor"],
  {
    "0733": function (n, e, a) {
      (function (r) {
        var t = a("7037");
        console.log;
        var e = {
          log: function (e) {},
          showLoading: function (e, t) {
            r.showLoading({ title: e, mask: t || !1 });
          },
          hideLoading: function () {
            r.hideLoading();
          },
          showToast: function (e, t) {
            r.showToast({ title: e, icon: t || "none" });
          },
          getPosterUrl: function (e) {
            var a = e.backgroundImage,
              r = e.type;
            return (
              e.formData,
              new Promise(function (e, t) {
                var n;
                if (a) n = a;
                else
                  switch (r) {
                    case "invitePoster":
                      n = "/static/imgs/poster/invite_bg.png";
                      break;
                    case "goodsPoster":
                      n = "/static/imgs/poster/goods_poster.png";
                      break;
                    case "grouponPoster":
                      n = "/static/imgs/poster/groupon_poster.png";
                      break;
                    default:
                      n = "";
                  }
                n ? e(n) : t("背景图片路径不存在");
              })
            );
          },
          shareTypeListSheetArray: { array: [0, 1, 2, 3, 4, 5] },
          isArray: function (e) {
            return "[object Array]" === Object.prototype.toString.call(e);
          },
          isObject: function (e) {
            return "[object Object]" === Object.prototype.toString.call(e);
          },
          isPromise: function (e) {
            return (
              !!e &&
              ("object" === t(e) || "function" == typeof e) &&
              "function" == typeof e.then
            );
          },
          isNull: function (e) {
            return null === e;
          },
          isUndefined: function (e) {
            return void 0 === e;
          },
          isUndef: function (e) {
            return void 0 === e;
          },
          isNotNull_string: function (e) {
            return null != e && "" !== e;
          },
          isFn: function (e) {
            return e && "function" == typeof e;
          },
          getStorage: function (e, t, n) {
            r.getStorage({
              key: e,
              success: function (e) {
                e.data && "" != e.data ? t && t(e.data) : n && n();
              },
              fail: function () {
                n && n();
              },
            });
          },
          setStorage: function (e, t) {
            JSON.stringify(t), r.setStorage({ key: e, data: t });
          },
          setStorageSync: function (e, t) {
            r.setStorageSync(e, t);
          },
          getStorageSync: function (e) {
            return r.getStorageSync(e);
          },
          clearStorageSync: function () {
            r.clearStorageSync();
          },
          removeStorageSync: function (e) {
            r.removeStorageSync(e);
          },
          getImageInfo: function (e, t, n) {
            (e = o(e)),
              r.getImageInfo({
                src: e,
                success: function (e) {
                  t && "function" == typeof t && t(e);
                },
                fail: function (e) {
                  n && "function" == typeof n && n(e);
                },
              });
          },
          downloadFile: function (e, t) {
            (e = o(e)),
              r.downloadFile({
                url: e,
                success: function (e) {
                  t && "function" == typeof t && t(e);
                },
              });
          },
          downloadFile_PromiseFc: function (e) {
            return new Promise(function (t, n) {
              "http" !== e.substring(0, 4)
                ? t(e)
                : ((e = o(e)),
                  r.downloadFile({
                    url: e,
                    success: function (e) {
                      e && e.tempFilePath
                        ? t(e.tempFilePath)
                        : n("not find tempFilePath");
                    },
                    fail: function (e) {
                      n(e);
                    },
                  }));
            });
          },
          saveFile: function (e) {
            r.saveFile({
              tempFilePath: e,
              success: function (e) {
                JSON.stringify(e);
              },
            });
          },
          downLoadAndSaveFile_PromiseFc: function (e) {
            return new Promise(function (n, a) {
              "http" === e.substring(0, 4)
                ? ((e = o(e)),
                  r.downloadFile({
                    url: e,
                    success: function (t) {
                      JSON.stringify(t),
                        t && t.tempFilePath
                          ? r.saveFile({
                              tempFilePath: t.tempFilePath,
                              success: function (e) {
                                JSON.stringify(e),
                                  e && e.savedFilePath
                                    ? n(e.savedFilePath)
                                    : n(t.tempFilePath);
                              },
                              fail: function (e) {
                                n(t.tempFilePath);
                              },
                            })
                          : a("not find tempFilePath");
                    },
                    fail: function (e) {
                      a(e);
                    },
                  }))
                : n(e);
            });
          },
          checkFile_PromiseFc: function (a) {
            return new Promise(function (t, n) {
              r.getSavedFileList({
                success: function (e) {
                  e = e.fileList.findIndex(function (e) {
                    return e.filePath === a;
                  });
                  t(e);
                },
                fail: function (e) {
                  n(e);
                },
              });
            });
          },
          removeSavedFile: function (t) {
            r.getSavedFileList({
              success: function (e) {
                0 <=
                  e.fileList.findIndex(function (e) {
                    return e.filePath === t;
                  }) && r.removeSavedFile({ filePath: t });
              },
            });
          },
          fileNameInPath: function (e) {
            e = e.split("/");
            return e[e.length - 1];
          },
          getImageInfo_PromiseFc: function (e) {
            return new Promise(function (t, n) {
              (e = o(e)),
                r.getImageInfo({
                  src: e,
                  success: function (e) {
                    JSON.stringify(e), t(e);
                  },
                  fail: function (e) {
                    JSON.stringify(e), n(e);
                  },
                });
            });
          },
          previewImage: function (e) {
            "string" == typeof e && (e = [e]), r.previewImage({ urls: e });
          },
          actionSheet: function (e, t) {
            for (var n = [], a = 0; a < e.array.length; a++)
              switch (e.array[a]) {
                case "sinaweibo":
                  n[a] = "新浪微博";
                  break;
                case "qq":
                  n[a] = "QQ";
                  break;
                case "weixin":
                  n[a] = "微信";
                  break;
                case "WXSceneSession":
                  n[a] = "微信好友";
                  break;
                case "WXSenceTimeline":
                  n[a] = "微信朋友圈";
                  break;
                case "WXSceneFavorite":
                  n[a] = "微信收藏";
                  break;
                case 0:
                  n[a] = "图文链接";
                  break;
                case 1:
                  n[a] = "纯文字";
                  break;
                case 2:
                  n[a] = "纯图片";
                  break;
                case 3:
                  n[a] = "音乐";
                  break;
                case 4:
                  n[a] = "视频";
                  break;
                case 5:
                  n[a] = "小程序";
              }
            this.showActionSheet(n, t);
          },
          showActionSheet: function (e, t) {
            r.showActionSheet({
              itemList: e,
              success: function (e) {
                t && "function" == typeof t && t(e.tapIndex);
              },
            });
          },
          getProvider: function (o, i, s) {
            var l = this;
            r.getProvider({
              service: o,
              success: function (t) {
                if (s) {
                  var e = {};
                  (e.array = t.provider),
                    l.actionSheet(e, function (e) {
                      i && "function" == typeof i && i(t.provider[e]);
                    });
                } else if ("payment" == o) {
                  for (var n = t.provider, a = [], r = 0; r < n.length; r++)
                    "wxpay" == n[r]
                      ? (a[r] = {
                          name: "微信支付",
                          value: n[r],
                          img: "/static/image/wei.png",
                        })
                      : "alipay" == n[r] &&
                        (a[r] = {
                          name: "支付宝支付",
                          value: n[r],
                          img: "/static/image/ali.png",
                        });
                  i && "function" == typeof i && i(a);
                } else i && "function" == typeof i && i(t);
              },
            });
          },
        };
        function o(e) {
          return (
            "http" === e.substring(0, 4) &&
              "http://store" !== e.substring(0, 12) &&
              "http://tmp" !== e.substring(0, 10) &&
              "https" !== e.substring(0, 5) &&
              (e = "https" + e.substring(4, e.length)),
            e
          );
        }
        n.exports = e;
      }).call(this, a("543d").default);
    },
    "29e4": function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      t.default = {
        baseURL: "dev.7wpp.com",
        https_switch: !1,
        expression: [
          { title: "[zy]", src: "/emoji/1.png" },
          { title: "[zm]", src: "/emoji/2.png" },
          { title: "[jy]", src: "/emoji/3.png" },
          { title: "[jyb]", src: "/emoji/4.png" },
          { title: "[bx]", src: "/emoji/5.png" },
          { title: "[kzn]", src: "/emoji/6.png" },
          { title: "[gg]", src: "/emoji/7.png" },
          { title: "[ll]", src: "/emoji/8.png" },
          { title: "[jyll]", src: "/emoji/9.png" },
          { title: "[o]", src: "/emoji/10.png" },
          { title: "[yz]", src: "/emoji/11.png" },
          { title: "[wx]", src: "/emoji/12.png" },
          { title: "[zyb]", src: "/emoji/13.png" },
          { title: "[tp]", src: "/emoji/14.png" },
          { title: "[wxb]", src: "/emoji/15.png" },
          { title: "[zyc]", src: "/emoji/16.png" },
          { title: "[llb]", src: "/emoji/17.png" },
          { title: "[xm]", src: "/emoji/18.png" },
          { title: "[qz]", src: "/emoji/19.png" },
          { title: "[zmb]", src: "/emoji/20.png" },
          { title: "[kx]", src: "/emoji/21.png" },
          { title: "[mm]", src: "/emoji/22.png" },
          { title: "[bz]", src: "/emoji/23.png" },
          { title: "[bkx]", src: "/emoji/24.png" },
          { title: "[mg]", src: "/emoji/25.png" },
          { title: "[pz]", src: "/emoji/26.png" },
          { title: "[pzb]", src: "/emoji/27.png" },
          { title: "[wxc]", src: "/emoji/28.png" },
          { title: "[jyc]", src: "/emoji/29.png" },
          { title: "[jyd]", src: "/emoji/30.png" },
          { title: "[dm]", src: "/emoji/31.png" },
          { title: "[tpb]", src: "/emoji/32.png" },
          { title: "[tpc]", src: "/emoji/33.png" },
          { title: "[tpd]", src: "/emoji/34.png" },
          { title: "[ly]", src: "/emoji/35.png" },
          { title: "[zyd]", src: "/emoji/36.png" },
        ],
      };
    },
    "931e": function (e, f, c) {
      (function (r) {
        var e = c("4ea4");
        Object.defineProperty(f, "__esModule", { value: !0 }),
          (f.default = void 0);
        var t,
          n = e(c("2eee")),
          a = e(c("c973")),
          o = e(c("970b")),
          i = e(c("5bc3")),
          s = e(c("d1d4")),
          l = (e(c("d60a")), e(c("a427"))),
          a =
            ((0, i.default)(u, [
              {
                key: "login",
                value:
                  ((t = (0, a.default)(
                    n.default.mark(function e() {
                      return n.default.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                -1 ==
                                  l.default.$Route.path.indexOf(
                                    "public/login"
                                  ) &&
                                  r.setStorageSync(
                                    "fromLogin",
                                    l.default.$Route
                                  ),
                                  this.wxOpenPlatformLogin();
                              case 3:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  )),
                  function () {
                    return t.apply(this, arguments);
                  }),
              },
              {
                key: "wxOpenPlatformLogin",
                value: function () {
                  return new Promise(function (e, t) {
                    r.login({
                      provider: "weixin",
                      success: function (e) {
                        var n;
                        console.info(e),
                          "login:ok" === e.errMsg &&
                            ((n = e.code),
                            r.getUserInfo({
                              provider: "weixin",
                              success: function (e) {
                                var t;
                                "getUserInfo:ok" === e.errMsg &&
                                  ((t = e.userInfo),
                                  console.info(e),
                                  (0, s.default)("user.login", {
                                    code: n,
                                    nickName: t.nickName,
                                    avatarUrl: t.avatarUrl,
                                  }).then(function (e) {
                                    0 === e.errno &&
                                      r.setStorageSync("userInfo", e.data.user);
                                  }));
                              },
                              fail: function (e) {
                                (0, s.default)("dev.debug", { info: e });
                              },
                            }));
                      },
                      fail: function (e) {
                        (0, s.default)("dev.debug", { info: e });
                      },
                    });
                  });
                },
              },
              {
                key: "getWxMiniProgramSessionKey",
                value: function () {
                  var n = !1,
                    a = "";
                  return new Promise(function (e, t) {
                    r.checkSession({
                      success: function (e) {
                        "checkSession:ok" === e.errMsg && (n = !0);
                      },
                      complete: function () {
                        r.getStorageSync("session_key") && n
                          ? (a = r.getStorageSync("session_key"))
                          : r.login({
                              success: function (e) {
                                e = e.code;
                                (0, s.default)(
                                  "user.getWxMiniProgramSessionKey",
                                  { code: e }
                                ).then(function (e) {
                                  1 === e.errno &&
                                    (r.setStorageSync(
                                      "session_key",
                                      e.data.session_key
                                    ),
                                    r.setStorageSync("openid", e.data.openid),
                                    (a = e.data.session_key));
                                });
                              },
                            });
                      },
                    }),
                      e(a);
                  });
                },
              },
              {
                key: "wxMiniProgramLogin",
                value: function (n) {
                  return new Promise(function (t, e) {
                    "getUserInfo:ok" === n.detail.errMsg &&
                      (0, s.default)("user.wxMiniProgramLogin", {
                        session_key: r.getStorageSync("session_key"),
                        encryptedData: n.detail.encryptedData,
                        iv: n.detail.iv,
                        signature: n.detail.signature,
                      }).then(function (e) {
                        1 === e.errno && t(e.data.token);
                      });
                  });
                },
              },
              {
                key: "checkMiniProgramUpdate",
                value: function () {
                  var t = r.getUpdateManager();
                  t.onCheckForUpdate(function (e) {}),
                    t.onUpdateReady(function (e) {
                      r.showModal({
                        title: "更新提示",
                        content: "新版本已经准备好，是否重启应用？",
                        success: function (e) {
                          e.confirm && t.applyUpdate();
                        },
                      });
                    }),
                    t.onUpdateFailed(function (e) {});
                },
              },
            ]),
            u);
        function u() {
          (0, o.default)(this, u);
        }
        f.default = a;
      }).call(this, c("543d").default);
    },
    ed00: function (t, e, n) {
      (function (j) {
        var e = n("4ea4"),
          _ = e(n("2eee")),
          f = e(n("7037")),
          B = e(n("448a")),
          a = e(n("9523")),
          E = e(n("c973")),
          D = e(n("0733")),
          L = e(n("f46a"));
        function r(t, e) {
          var n,
            a = Object.keys(t);
          return (
            Object.getOwnPropertySymbols &&
              ((n = Object.getOwnPropertySymbols(t)),
              e &&
                (n = n.filter(function (e) {
                  return Object.getOwnPropertyDescriptor(t, e).enumerable;
                })),
              a.push.apply(a, n)),
            a
          );
        }
        function M(t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {};
            e % 2
              ? r(Object(n), !0).forEach(function (e) {
                  (0, a.default)(t, e, n[e]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
              : r(Object(n)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(n, e)
                  );
                });
          }
          return t;
        }
        var J = "QSSHAREPOSTER_IDKEY";
        function o(e) {
          var n,
            p = e.type,
            m = e.formData,
            y = e.background,
            v = e.posterCanvasId,
            b = e.backgroundImage,
            x = e.reserve,
            w = e.textArray,
            k = e.drawArray,
            S = e.qrCodeArray,
            P = e.imagesArray,
            L = e.setCanvasWH,
            N = e.setCanvasToTempFilePath,
            I = e.setDraw,
            A = e.bgScale,
            C = e.Context,
            F = e._this,
            O = e.delayTimeScale,
            T = e.drawDelayTime;
          return new Promise(
            ((n = (0, E.default)(
              _.default.mark(function e(t, n) {
                var a, r, o, i, s, l, u, f, c, d, g, h;
                return _.default.wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (
                            ((e.prev = 0),
                            D.default.showLoading("正在准备海报数据"),
                            C ||
                              (D.default.log("没有画布对象,创建画布对象"),
                              (C = j.createCanvasContext(v, F || null))),
                            !(y && y.width && y.height))
                          ) {
                            e.next = 7;
                            break;
                          }
                          (a = y), (e.next = 10);
                          break;
                        case 7:
                          return (
                            (e.next = 9),
                            (function (f) {
                              f.backgroundImage;
                              var c = f.type;
                              return new Promise(
                                (function () {
                                  var n = (0, E.default)(
                                    _.default.mark(function e(n, a) {
                                      var r, o, i, s, l, u;
                                      return _.default.wrap(
                                        function (e) {
                                          for (;;)
                                            switch ((e.prev = e.next)) {
                                              case 0:
                                                if (
                                                  ((e.prev = 0),
                                                  D.default.showLoading(
                                                    "正在获取海报背景图"
                                                  ),
                                                  (t = c),
                                                  (r = D.default.getStorageSync(
                                                    q(t)
                                                  )),
                                                  D.default.log(
                                                    "获取的缓存:" +
                                                      JSON.stringify(r)
                                                  ),
                                                  r && r.path && r.name)
                                                )
                                                  return (
                                                    D.default.log(
                                                      "海报有缓存, 准备获取后端背景图进行对比"
                                                    ),
                                                    (e.next = 8),
                                                    D.default.getPosterUrl(f)
                                                  );
                                                e.next = 53;
                                                break;
                                              case 8:
                                                if (
                                                  ((o = e.sent),
                                                  D.default.log(
                                                    "准备对比name是否相同"
                                                  ),
                                                  r.name ===
                                                    D.default.fileNameInPath(o))
                                                )
                                                  return (
                                                    D.default.log(
                                                      "name相同, 判断该背景图是否存在于本地"
                                                    ),
                                                    (e.next = 14),
                                                    D.default.checkFile_PromiseFc(
                                                      r.path
                                                    )
                                                  );
                                                e.next = 45;
                                                break;
                                              case 14:
                                                if (0 <= e.sent)
                                                  return (
                                                    D.default.log(
                                                      "海报save路径存在, 对比宽高信息, 存储并输出"
                                                    ),
                                                    (e.next = 19),
                                                    D.default.getImageInfo_PromiseFc(
                                                      r.path
                                                    )
                                                  );
                                                e.next = 37;
                                                break;
                                              case 19:
                                                if (
                                                  ((i = e.sent),
                                                  (s = M({}, r)),
                                                  r.width &&
                                                    r.height &&
                                                    r.width === i.width &&
                                                    r.height === i.height)
                                                ) {
                                                  e.next = 30;
                                                  break;
                                                }
                                                return (
                                                  D.default.log(
                                                    "宽高对比不通过， 重新获取"
                                                  ),
                                                  (e.next = 25),
                                                  X(f, o)
                                                );
                                              case 25:
                                                (l = e.sent),
                                                  D.default.hideLoading(),
                                                  n(l),
                                                  (e.next = 35);
                                                break;
                                              case 30:
                                                D.default.log(
                                                  "宽高对比通过, 再次存储, 并返回路径"
                                                ),
                                                  (s = M(
                                                    M({}, r),
                                                    {},
                                                    {
                                                      width: i.width,
                                                      height: i.height,
                                                    }
                                                  )),
                                                  R(c, M({}, s)),
                                                  D.default.hideLoading(),
                                                  n(s);
                                              case 35:
                                                e.next = 43;
                                                break;
                                              case 37:
                                                return (
                                                  D.default.log(
                                                    "海报save路径不存在, 重新获取海报"
                                                  ),
                                                  (e.next = 40),
                                                  X(f, o)
                                                );
                                              case 40:
                                                (l = e.sent),
                                                  D.default.hideLoading(),
                                                  n(l);
                                              case 43:
                                                e.next = 51;
                                                break;
                                              case 45:
                                                return (
                                                  D.default.log(
                                                    "name不相同, 重新获取海报"
                                                  ),
                                                  (e.next = 48),
                                                  X(f, o)
                                                );
                                              case 48:
                                                (u = e.sent),
                                                  D.default.hideLoading(),
                                                  n(u);
                                              case 51:
                                                e.next = 59;
                                                break;
                                              case 53:
                                                return (
                                                  D.default.log(
                                                    "海报背景图没有缓存, 准备获取海报背景图"
                                                  ),
                                                  (e.next = 56),
                                                  X(f)
                                                );
                                              case 56:
                                                (u = e.sent),
                                                  D.default.hideLoading(),
                                                  n(u);
                                              case 59:
                                                e.next = 67;
                                                break;
                                              case 61:
                                                (e.prev = 61),
                                                  (e.t0 = e.catch(0)),
                                                  D.default.hideLoading(),
                                                  D.default.showToast(
                                                    "获取分享用户背景图失败:" +
                                                      JSON.stringify(e.t0)
                                                  ),
                                                  D.default.log(
                                                    JSON.stringify(e.t0)
                                                  ),
                                                  a(e.t0);
                                              case 67:
                                              case "end":
                                                return e.stop();
                                            }
                                          var t;
                                        },
                                        e,
                                        null,
                                        [[0, 61]]
                                      );
                                    })
                                  );
                                  return function (e, t) {
                                    return n.apply(this, arguments);
                                  };
                                })()
                              );
                            })({ backgroundImage: b, type: p, formData: m })
                          );
                        case 9:
                          a = e.sent;
                        case 10:
                          if (
                            ((A = A || 0.75),
                            (a.width = a.width * A),
                            (a.height = a.height * A),
                            D.default.log(
                              "获取背景图信息对象成功:" + JSON.stringify(a)
                            ),
                            (r = { bgObj: a, type: p, bgScale: A }),
                            L && "function" == typeof L && L(r),
                            P)
                          )
                            return (
                              "function" == typeof P && (P = P(r)),
                              D.default.showLoading(
                                "正在生成需绘制图片的临时路径"
                              ),
                              D.default.log("准备设置图片"),
                              (e.next = 22),
                              H(P)
                            );
                          e.next = 24;
                          break;
                        case 22:
                          (P = e.sent), D.default.hideLoading();
                        case 24:
                          if (
                            (w &&
                              ("function" == typeof w && (w = w(r)),
                              (w = z(C, w))),
                            !S)
                          ) {
                            e.next = 39;
                            break;
                          }
                          "function" == typeof S && (S = S(r)),
                            D.default.showLoading(
                              "正在生成需绘制图片的临时路径"
                            ),
                            (o = 0);
                        case 29:
                          if (!(o < S.length)) {
                            e.next = 38;
                            break;
                          }
                          if ((D.default.log(o), S[o].image))
                            return (
                              (e.next = 34),
                              D.default.downloadFile_PromiseFc(S[o].image)
                            );
                          e.next = 35;
                          break;
                        case 34:
                          S[o].image = e.sent;
                        case 35:
                          o++, (e.next = 29);
                          break;
                        case 38:
                          D.default.hideLoading();
                        case 39:
                          if (!k) {
                            e.next = 94;
                            break;
                          }
                          if (
                            ("function" == typeof k && (k = k(r)),
                            D.default.isPromise(k))
                          )
                            return (e.next = 44), k;
                          e.next = 45;
                          break;
                        case 44:
                          k = e.sent;
                        case 45:
                          if (!(D.default.isArray(k) && 0 < k.length)) {
                            e.next = 94;
                            break;
                          }
                          (i = !1), (s = 0);
                        case 48:
                          if (!(s < k.length)) {
                            e.next = 76;
                            break;
                          }
                          (l = k[s]),
                            D.default.isFn(l.allInfoCallback) && !i && (i = !0),
                            (l[J] = s),
                            (u = void 0),
                            (e.t0 = l.type),
                            (e.next =
                              "image" === e.t0
                                ? 56
                                : "text" === e.t0
                                ? 60
                                : "qrcode" === e.t0
                                ? 62
                                : "custom" === e.t0
                                ? 68
                                : 69);
                          break;
                        case 56:
                          return (e.next = 58), H(l);
                        case 58:
                          return (u = e.sent), e.abrupt("break", 71);
                        case 60:
                          return (u = z(C, l)), e.abrupt("break", 71);
                        case 62:
                          if (l.image)
                            return (
                              (e.next = 65),
                              D.default.downloadFile_PromiseFc(l.image)
                            );
                          e.next = 67;
                          break;
                        case 65:
                          (e.t1 = e.sent), (u = { image: e.t1 });
                        case 67:
                        case 68:
                          return e.abrupt("break", 71);
                        case 69:
                          return (
                            D.default.log("未识别的类型"), e.abrupt("break", 71)
                          );
                        case 71:
                          u && D.default.isObject(u) && (k[s] = M(M({}, l), u));
                        case 73:
                          s++, (e.next = 48);
                          break;
                        case 76:
                          if (!i) {
                            e.next = 94;
                            break;
                          }
                          D.default.log(
                            "----------------hasAllInfoCallback----------------"
                          ),
                            (f = (0, B.default)(k)).sort(function (e, t) {
                              return (
                                (D.default.isUndef(e.serialNum) ||
                                D.default.isNull(e.serialNum)
                                  ? Number.NEGATIVE_INFINITY
                                  : Number(e.serialNum)) -
                                (D.default.isUndef(t.serialNum) ||
                                D.default.isNull(t.serialNum)
                                  ? Number.NEGATIVE_INFINITY
                                  : Number(t.serialNum))
                              );
                            }),
                            (c = 0);
                        case 81:
                          if (!(c < f.length)) {
                            e.next = 94;
                            break;
                          }
                          if (
                            ((d = M({}, f[c])),
                            !D.default.isFn(d.allInfoCallback))
                          ) {
                            e.next = 91;
                            break;
                          }
                          if (
                            ((g = d.allInfoCallback({ drawArray: f })),
                            D.default.isPromise(g))
                          )
                            return (e.next = 88), g;
                          e.next = 89;
                          break;
                        case 88:
                          g = e.sent;
                        case 89:
                          (h = d[J]),
                            D.default.isUndef(h)
                              ? console.log(
                                  "程序错误 找不到idKey!!!\t...这不应该啊"
                                )
                              : (k[d[J]] = M(M({}, d), g));
                        case 91:
                          c++, (e.next = 81);
                          break;
                        case 94:
                          return (
                            (e.next = 96),
                            (function (e) {
                              var o = e.Context,
                                i = e.type,
                                s = e.posterCanvasId,
                                l = e.reserve,
                                u = e.bgObj,
                                f = e.drawArray,
                                c = e.textArray,
                                d = e.qrCodeArray,
                                g = e.imagesArray,
                                h = e.setCanvasToTempFilePath,
                                p = e.setDraw,
                                t = e.bgScale,
                                m = e._this,
                                y = e.delayTimeScale,
                                v = e.drawDelayTime,
                                b = {
                                  Context: o,
                                  bgObj: u,
                                  type: i,
                                  bgScale: t,
                                };
                              return (
                                (y = void 0 !== y ? y : 15),
                                (v = void 0 !== v ? v : 100),
                                new Promise(function (a, r) {
                                  try {
                                    if (
                                      (D.default.showLoading("正在绘制海报"),
                                      D.default.log(
                                        "背景对象:" + JSON.stringify(u)
                                      ),
                                      u && u.path
                                        ? (D.default.log("背景有图片路径"),
                                          o.drawImage(
                                            u.path,
                                            0,
                                            0,
                                            u.width,
                                            u.height
                                          ))
                                        : (D.default.log("背景没有图片路径"),
                                          u.backgroundColor
                                            ? (D.default.log(
                                                "背景有背景颜色:" +
                                                  u.backgroundColor
                                              ),
                                              o.setFillStyle(u.backgroundColor),
                                              o.fillRect(
                                                0,
                                                0,
                                                u.width,
                                                u.height
                                              ))
                                            : D.default.log(
                                                "背景没有背景颜色"
                                              )),
                                      D.default.showLoading("绘制图片"),
                                      g && 0 < g.length && W(o, g),
                                      D.default.showLoading("绘制自定义内容"),
                                      p && "function" == typeof p && p(b),
                                      D.default.showLoading("绘制文本"),
                                      c && 0 < c.length && U(o, c, u),
                                      D.default.showLoading("绘制二维码"),
                                      d && 0 < d.length)
                                    )
                                      for (var e = 0; e < d.length; e++)
                                        G(o, d[e]);
                                    if (
                                      (D.default.showLoading(
                                        "绘制可控层级序列"
                                      ),
                                      f && 0 < f.length)
                                    )
                                      for (var t = 0; t < f.length; t++) {
                                        var n = f[t];
                                        switch (
                                          (D.default.log(
                                            "绘制可控层级序列, drawArrayItem:" +
                                              JSON.stringify(n)
                                          ),
                                          n.type)
                                        ) {
                                          case "image":
                                            D.default.log(
                                              "绘制可控层级序列, 绘制图片"
                                            ),
                                              W(o, n);
                                            break;
                                          case "text":
                                            D.default.log(
                                              "绘制可控层级序列, 绘制文本"
                                            ),
                                              U(o, n, u);
                                            break;
                                          case "qrcode":
                                            D.default.log(
                                              "绘制可控层级序列, 绘制二维码"
                                            ),
                                              G(o, n);
                                            break;
                                          case "custom":
                                            D.default.log(
                                              "绘制可控层级序列, 绘制自定义内容"
                                            ),
                                              n.setDraw &&
                                                "function" ==
                                                  typeof n.setDraw &&
                                                n.setDraw(o);
                                            break;
                                          default:
                                            D.default.log("未识别的类型");
                                        }
                                      }
                                    D.default.showLoading("绘制中"),
                                      setTimeout(function () {
                                        o.draw(
                                          "boolean" == typeof l && l,
                                          function () {
                                            D.default.showLoading(
                                              "正在输出图片"
                                            );
                                            var e = h || {};
                                            e &&
                                              "function" == typeof e &&
                                              (e = h(u, i));
                                            var t = M(
                                              {
                                                x: 0,
                                                y: 0,
                                                width: u.width,
                                                height: u.height,
                                                destWidth: 2 * u.width,
                                                destHeight: 2 * u.height,
                                                quality: 0.8,
                                                fileType: "jpg",
                                              },
                                              e
                                            );
                                            D.default.log(
                                              "canvasToTempFilePath的data对象:" +
                                                JSON.stringify(t)
                                            ),
                                              (e = function () {
                                                var e = M(
                                                  M({}, t),
                                                  {},
                                                  {
                                                    canvasId: s,
                                                    success: function (e) {
                                                      D.default.hideLoading(),
                                                        a(e);
                                                    },
                                                    fail: function (e) {
                                                      D.default.hideLoading(),
                                                        D.default.log(
                                                          "输出图片失败:" +
                                                            JSON.stringify(e)
                                                        ),
                                                        r(
                                                          "输出图片失败:" +
                                                            JSON.stringify(e)
                                                        );
                                                    },
                                                  }
                                                );
                                                j.canvasToTempFilePath(
                                                  e,
                                                  m || null
                                                );
                                              });
                                            var n = 0;
                                            d &&
                                              d.forEach(function (e) {
                                                e.text &&
                                                  (n += Number(e.text.length));
                                              }),
                                              g &&
                                                g.forEach(function () {
                                                  n += y;
                                                }),
                                              c &&
                                                c.forEach(function () {
                                                  n += y;
                                                }),
                                              f &&
                                                f.forEach(function (e) {
                                                  "text" === e.type
                                                    ? e.text &&
                                                      (n += e.text.length)
                                                    : (n += y);
                                                }),
                                              D.default.log("延时系数:" + y),
                                              D.default.log("总计延时:" + n),
                                              setTimeout(e, n);
                                          }
                                        );
                                      }, v);
                                  } catch (e) {
                                    D.default.hideLoading(), r(e);
                                  }
                                })
                              );
                            })({
                              Context: C,
                              type: p,
                              posterCanvasId: v,
                              reserve: x,
                              drawArray: k,
                              textArray: w,
                              imagesArray: P,
                              bgObj: a,
                              qrCodeArray: S,
                              setCanvasToTempFilePath: N,
                              setDraw: I,
                              bgScale: A,
                              _this: F,
                              delayTimeScale: O,
                              drawDelayTime: T,
                            })
                          );
                        case 96:
                          (h = e.sent),
                            D.default.hideLoading(),
                            t({ bgObj: a, poster: h, type: p }),
                            (e.next = 104);
                          break;
                        case 101:
                          (e.prev = 101), (e.t2 = e.catch(0)), n(e.t2);
                        case 104:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[0, 101]]
                );
              })
            )),
            function (e, t) {
              return n.apply(this, arguments);
            })
          );
        }
        function z(e, t) {
          if (
            (D.default.log("进入设置文字方法, texts:" + JSON.stringify(t)),
            t && D.default.isArray(t))
          ) {
            if ((D.default.log("texts是数组"), 0 < t.length))
              for (var n = 0; n < t.length; n++)
                D.default.log("字符串信息-初始化之前:" + JSON.stringify(t[n])),
                  (t[n] = i(e, t[n]));
          } else D.default.log("texts是对象"), (t = i(e, t));
          return D.default.log("返回texts:" + JSON.stringify(t)), t;
        }
        function i(e, t) {
          var n;
          return (
            D.default.log("进入设置文字方法, textItem:" + JSON.stringify(t)),
            D.default.isNotNull_string(t.text) &&
              ((t.text = String(t.text)),
              (t.alpha = void 0 !== t.alpha ? t.alpha : 1),
              (t.color = t.color || "black"),
              (t.size = void 0 !== t.size ? t.size : 10),
              (t.textAlign = t.textAlign || "left"),
              (t.textBaseline = t.textBaseline || "middle"),
              (t.dx = t.dx || 0),
              (t.dy = t.dy || 0),
              (t.size = Math.ceil(Number(t.size))),
              D.default.log("字符串信息-初始化默认值后:" + JSON.stringify(t)),
              (n = b(e, { text: t.text, size: t.size })),
              D.default.log("字符串信息-初始化时的文本长度:" + n),
              (e = {}),
              t.infoCallBack &&
                "function" == typeof t.infoCallBack &&
                (e = t.infoCallBack(n)),
              (t = M(M({}, t), {}, { textLength: n }, e)),
              D.default.log("字符串信息-infoCallBack后:" + JSON.stringify(t))),
            t
          );
        }
        function b(e, t) {
          D.default.log("计算文字长度, obj:" + JSON.stringify(t));
          var n = t.text,
            t = t.size;
          if (
            (e.setFontSize(t),
            (e = {}),
            D.default.log(
              "measureText计算文字长度, textLength:" + JSON.stringify(e)
            ),
            !(e = e && e.width ? e.width : 0))
          ) {
            for (var a = 0, r = 0; r < n.length; r++) {
              var o = n.substr(r, 1),
                o = /a/.test((o = o))
                  ? 0.552734375
                  : /b/.test(o)
                  ? 0.638671875
                  : /c/.test(o)
                  ? 0.50146484375
                  : /d/.test(o)
                  ? 0.6396484375
                  : /e/.test(o)
                  ? 0.5673828125
                  : /f/.test(o)
                  ? 0.3466796875
                  : /g/.test(o)
                  ? 0.6396484375
                  : /h/.test(o)
                  ? 0.61572265625
                  : /i/.test(o)
                  ? 0.26611328125
                  : /j/.test(o)
                  ? 0.26708984375
                  : /k/.test(o)
                  ? 0.54443359375
                  : /l/.test(o)
                  ? 0.26611328125
                  : /m/.test(o)
                  ? 0.93701171875
                  : /n/.test(o)
                  ? 0.6162109375
                  : /o/.test(o)
                  ? 0.6357421875
                  : /p/.test(o)
                  ? 0.638671875
                  : /q/.test(o)
                  ? 0.6396484375
                  : /r/.test(o)
                  ? 0.3818359375
                  : /s/.test(o)
                  ? 0.462890625
                  : /t/.test(o)
                  ? 0.37255859375
                  : /u/.test(o)
                  ? 0.6162109375
                  : /v/.test(o)
                  ? 0.52490234375
                  : /w/.test(o)
                  ? 0.78955078125
                  : /x/.test(o)
                  ? 0.5068359375
                  : /y/.test(o)
                  ? 0.529296875
                  : /z/.test(o)
                  ? 0.49169921875
                  : /A/.test(o)
                  ? 0.70361328125
                  : /B/.test(o)
                  ? 0.62744140625
                  : /C/.test(o)
                  ? 0.6689453125
                  : /D/.test(o)
                  ? 0.76171875
                  : /E/.test(o)
                  ? 0.5498046875
                  : /F/.test(o)
                  ? 0.53125
                  : /G/.test(o)
                  ? 0.74365234375
                  : /H/.test(o)
                  ? 0.7734375
                  : /I/.test(o)
                  ? 0.2939453125
                  : /J/.test(o)
                  ? 0.39599609375
                  : /K/.test(o)
                  ? 0.634765625
                  : /L/.test(o)
                  ? 0.51318359375
                  : /M/.test(o)
                  ? 0.97705078125
                  : /N/.test(o)
                  ? 0.81298828125
                  : /O/.test(o)
                  ? 0.81494140625
                  : /P/.test(o)
                  ? 0.61181640625
                  : /Q/.test(o)
                  ? 0.81494140625
                  : /R/.test(o)
                  ? 0.65283203125
                  : /S/.test(o)
                  ? 0.5771484375
                  : /T/.test(o)
                  ? 0.5732421875
                  : /U/.test(o)
                  ? 0.74658203125
                  : /V/.test(o)
                  ? 0.67626953125
                  : /W/.test(o)
                  ? 1.017578125
                  : /X/.test(o)
                  ? 0.64501953125
                  : /Y/.test(o)
                  ? 0.603515625
                  : /Z/.test(o)
                  ? 0.6201171875
                  : /[0-9]/.test(o)
                  ? 0.58642578125
                  : /[\u4e00-\u9fa5]/.test(o)
                  ? 1
                  : / /.test(o)
                  ? 0.2958984375
                  : /\`/.test(o)
                  ? 0.294921875
                  : /\~/.test(o)
                  ? 0.74169921875
                  : /\!/.test(o)
                  ? 0.3125
                  : /\@/.test(o)
                  ? 1.03125
                  : /\#/.test(o)
                  ? 0.63818359375
                  : /\$/.test(o)
                  ? 0.58642578125
                  : /\%/.test(o)
                  ? 0.8896484375
                  : /\^/.test(o)
                  ? 0.74169921875
                  : /\&/.test(o)
                  ? 0.8701171875
                  : /\*/.test(o)
                  ? 0.455078125
                  : /\(/.test(o) || /\)/.test(o)
                  ? 0.333984375
                  : /\_/.test(o)
                  ? 0.4482421875
                  : /\-/.test(o)
                  ? 0.4326171875
                  : /\+/.test(o) || /\=/.test(o)
                  ? 0.74169921875
                  : /\|/.test(o)
                  ? 0.26904296875
                  : /\\/.test(o)
                  ? 0.416015625
                  : /\[/.test(o) || /\]/.test(o)
                  ? 0.333984375
                  : /\;/.test(o)
                  ? 0.24072265625
                  : /\'/.test(o)
                  ? 0.25634765625
                  : /\,/.test(o) || /\./.test(o)
                  ? 0.24072265625
                  : /\//.test(o)
                  ? 0.42724609375
                  : /\{/.test(o) || /\}/.test(o)
                  ? 0.333984375
                  : /\:/.test(o)
                  ? 0.24072265625
                  : /\"/.test(o)
                  ? 0.435546875
                  : /\</.test(o) || /\>/.test(o)
                  ? 0.74169921875
                  : /\?/.test(o)
                  ? 0.48291015625
                  : 1;
              D.default.log("计算文字宽度系数:" + o), (a += o);
            }
            D.default.log("文字宽度总系数:" + a), (e = a * t);
          }
          return e;
        }
        function H(r) {
          return (
            D.default.log("进入设置图片数据方法"),
            new Promise(
              ((n = (0, E.default)(
                _.default.mark(function e(t, n) {
                  var a;
                  return _.default.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (((e.prev = 0), !r || !D.default.isArray(r))) {
                              e.next = 14;
                              break;
                            }
                            D.default.log("images是一个数组"), (a = 0);
                          case 4:
                            if (a < r.length)
                              return (
                                D.default.log("设置图片数据循环中:" + a),
                                (e.next = 8),
                                s(r[a])
                              );
                            e.next = 12;
                            break;
                          case 8:
                            r[a] = e.sent;
                          case 9:
                            a++, (e.next = 4);
                            break;
                          case 12:
                            e.next = 18;
                            break;
                          case 14:
                            return (
                              D.default.log("images是一个对象"),
                              (e.next = 17),
                              s(r)
                            );
                          case 17:
                            r = e.sent;
                          case 18:
                            t(r), (e.next = 24);
                            break;
                          case 21:
                            (e.prev = 21), (e.t0 = e.catch(0)), n(e.t0);
                          case 24:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[0, 21]]
                  );
                })
              )),
              function (e, t) {
                return n.apply(this, arguments);
              })
            )
          );
          var n;
        }
        function s(i) {
          return new Promise(
            ((n = (0, E.default)(
              _.default.mark(function e(t, n) {
                var a, r, o;
                return _.default.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (i.url)
                          return (
                            (a = i.url),
                            (e.next = 4),
                            D.default.downloadFile_PromiseFc(a)
                          );
                        e.next = 17;
                        break;
                      case 4:
                        return (
                          (a = e.sent),
                          (i.url = a),
                          (r =
                            i.infoCallBack &&
                            "function" == typeof i.infoCallBack),
                          (o = {}),
                          (e.next = 10),
                          D.default.getImageInfo_PromiseFc(a)
                        );
                      case 10:
                        (o = e.sent),
                          r && (i = M(M({}, i), i.infoCallBack(o))),
                          (i.dx = i.dx || 0),
                          (i.dy = i.dy || 0),
                          (i.dWidth = i.dWidth || o.width),
                          (i.dHeight = i.dHeight || o.height),
                          (i = M(M({}, i), {}, { imageInfo: o }));
                      case 17:
                        t(i);
                      case 18:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            )),
            function (e, t) {
              return n.apply(this, arguments);
            })
          );
          var n;
        }
        function U(e, t, n) {
          D.default.isArray(t)
            ? D.default.log("遍历文本方法, 是数组")
            : (D.default.log("遍历文本方法, 不是数组"), (t = [t])),
            D.default.log("遍历文本方法, textArray:" + JSON.stringify(t));
          var a = [];
          if (t && 0 < t.length)
            for (var r = 0; r < t.length; r++) {
              var o = t[r];
              if (o.text && o.lineFeed) {
                var i,
                  s = -1,
                  l = n.width,
                  u = o.size,
                  f = o.dx;
                D.default.isObject(o.lineFeed) &&
                  ((s =
                    void 0 !== (i = o.lineFeed).lineNum &&
                    "number" == typeof i.lineNum &&
                    0 <= i.lineNum
                      ? i.lineNum
                      : s),
                  (l =
                    void 0 !== i.maxWidth && "number" == typeof i.maxWidth
                      ? i.maxWidth
                      : l),
                  (u =
                    void 0 !== i.lineHeight && "number" == typeof i.lineHeight
                      ? i.lineHeight
                      : u),
                  (f = void 0 !== i.dx && "number" == typeof i.dx ? i.dx : f));
                for (
                  var c = o.text.split(""), d = "", g = [], h = 0, p = c.length;
                  h < p;
                  h++
                )
                  b(e, { text: d, size: o.size }) <= l &&
                  b(e, { text: d + c[h], size: o.size }) <= l
                    ? ((d += c[h]), h == c.length - 1 && g.push(d))
                    : (g.push(d), (d = c[h]));
                D.default.log("循环出的文本数组:" + JSON.stringify(g));
                for (
                  var m = 0 <= s && s < g.length ? s : g.length, y = 0;
                  y < m;
                  y++
                ) {
                  var v = g[y];
                  y == m - 1 &&
                    m < g.length &&
                    (v = v.substring(0, v.length - 1) + "...");
                  v = M(
                    M({}, o),
                    {},
                    {
                      text: v,
                      dx: 0 !== y && 0 <= f ? f : o.dx,
                      dy: o.dy + y * u,
                      textLength: b(e, { text: v, size: o.size }),
                    }
                  );
                  D.default.log("重新组成的文本对象:" + JSON.stringify(v)),
                    a.push(v);
                }
              } else a.push(o);
            }
          D.default.log("绘制文本新数组:" + JSON.stringify(a)),
            (function (e, t) {
              if (
                (D.default.log("准备绘制文本方法, texts:" + JSON.stringify(t)),
                t && D.default.isArray(t))
              ) {
                if ((D.default.log("准备绘制文本方法, 是数组"), 0 < t.length))
                  for (var n = 0; n < t.length; n++) x(e, t[n]);
              } else D.default.log("准备绘制文本方法, 不是数组"), x(e, t);
            })(e, a);
        }
        function x(e, t) {
          if (
            (D.default.log("进入绘制文本方法, textItem:" + JSON.stringify(t)),
            t && D.default.isObject(t) && t.text)
          ) {
            if (
              ((e.font = (function (e) {
                var t = 0 < arguments.length && void 0 !== e ? e : {};
                if (t.font && "string" == typeof t.font)
                  return D.default.log(t.font), t.font;
                var n = "normal",
                  a = "normal",
                  r = "normal",
                  o = t.size || 10,
                  e = "sans-serif",
                  o = Math.ceil(Number(o));
                return (
                  t.fontStyle &&
                    "string" == typeof t.fontStyle &&
                    (n = t.fontStyle.trim()),
                  t.fontVariant &&
                    "string" == typeof t.fontVariant &&
                    (a = t.fontVariant.trim()),
                  !t.fontWeight ||
                    ("string" != typeof t.fontWeight &&
                      "number" != typeof t.fontWeight) ||
                    (r = t.fontWeight.trim()),
                  t.fontFamily &&
                    "string" == typeof t.fontFamily &&
                    (e = t.fontFamily.trim()),
                  n + " " + a + " " + r + " " + o + "px " + e
                );
              })(t)),
              e.setFillStyle(t.color),
              e.setGlobalAlpha(t.alpha),
              e.setTextAlign(t.textAlign),
              e.setTextBaseline(t.textBaseline),
              e.fillText(t.text, t.dx, t.dy),
              t.lineThrough && D.default.isObject(t.lineThrough))
            ) {
              D.default.log("有删除线");
              var n,
                a,
                r = t.lineThrough;
              switch (
                ((r.alpha = (void 0 !== r.alpha ? r : t).alpha),
                (r.style = r.style || t.color),
                (r.width = void 0 !== r.width ? r.width : t.size / 10),
                (r.cap = void 0 !== r.cap ? r.cap : "butt"),
                D.default.log("删除线对象:" + JSON.stringify(r)),
                e.setGlobalAlpha(r.alpha),
                e.setStrokeStyle(r.style),
                e.setLineWidth(r.width),
                e.setLineCap(r.cap),
                t.textAlign)
              ) {
                case "left":
                  n = t.dx;
                  break;
                case "center":
                  n = t.dx - t.textLength / 2;
                  break;
                default:
                  n = t.dx - t.textLength;
              }
              switch (t.textBaseline) {
                case "top":
                  a = t.dy + 0.5 * t.size;
                  break;
                case "middle":
                  a = t.dy;
                  break;
                default:
                  a = t.dy - 0.5 * t.size;
              }
              e.beginPath(),
                e.moveTo(n, a),
                e.lineTo(n + t.textLength, a),
                e.stroke(),
                e.closePath(),
                D.default.log("删除线完毕");
            }
            e.setGlobalAlpha(1), (e.font = "10px sans-serif");
          }
        }
        function W(e, t) {
          if (
            (D.default.log("判断图片数据类型:" + JSON.stringify(t)),
            t && D.default.isArray(t))
          ) {
            if (0 < t.length) for (var n = 0; n < t.length; n++) l(e, t[n]);
          } else l(e, t);
        }
        function l(e, t) {
          D.default.log("判断绘制图片形状, img:" + JSON.stringify(t)),
            t.url &&
              (t.circleSet
                ? function (e, t) {
                    D.default.log(
                      "进入绘制圆形图片方法, obj:" + JSON.stringify(t)
                    );
                    var n,
                      a,
                      r,
                      o = t.dx,
                      i = t.dy,
                      s = t.dWidth,
                      l = t.dHeight,
                      u = t.circleSet;
                    t.imageInfo,
                      "object" === (0, f.default)(u) &&
                        ((n = u.x), (a = u.y), (r = u.r)),
                      (r = r || (l < s ? l : s) / 2),
                      (n = n ? o + n : (o || 0) + r),
                      (a = a ? i + a : (i || 0) + r),
                      e.save(),
                      e.beginPath(),
                      e.arc(n, a, r, 0, 2 * Math.PI, !1),
                      e.closePath(),
                      e.setGlobalAlpha(0),
                      (e.fillStyle = "#FFFFFF"),
                      e.fill(),
                      e.setGlobalAlpha(1),
                      e.clip(),
                      c(e, t),
                      D.default.log("默认图片绘制完毕"),
                      e.restore();
                  }
                : t.roundRectSet
                ? function (e, t) {
                    D.default.log(
                      "进入绘制矩形图片方法, obj:" + JSON.stringify(t)
                    ),
                      e.save();
                    var n,
                      a = t.dx,
                      r = t.dy,
                      o = t.dWidth,
                      i = t.dHeight,
                      s = t.roundRectSet;
                    t.imageInfo,
                      "object" === (0, f.default)(s) && (n = s.r),
                      o < 2 * (n = n || 0.1 * o) && (n = o / 2),
                      i < 2 * n && (n = i / 2),
                      e.beginPath(),
                      e.moveTo(a + n, r),
                      e.arcTo(a + o, r, a + o, r + i, n),
                      e.arcTo(a + o, r + i, a, r + i, n),
                      e.arcTo(a, r + i, a, r, n),
                      e.arcTo(a, r, a + o, r, n),
                      e.closePath(),
                      e.setGlobalAlpha(0),
                      (e.fillStyle = "#FFFFFF"),
                      e.fill(),
                      e.setGlobalAlpha(1),
                      e.clip(),
                      c(e, t),
                      e.restore(),
                      D.default.log("进入绘制矩形图片方法, 绘制完毕");
                  }
                : c)(e, t);
        }
        function c(e, t) {
          var n;
          D.default.log("进入绘制默认图片方法, img:" + JSON.stringify(t)),
            t.url &&
              ((n = !D.default.isUndef(t.alpha)),
              (t.alpha = Number(D.default.isUndef(t.alpha) ? 1 : t.alpha)),
              e.setGlobalAlpha(t.alpha),
              D.default.log("绘制默认图片方法, 有url"),
              t.dWidth && t.dHeight && t.sx && t.sy && t.sWidth && t.sHeight
                ? (D.default.log("绘制默认图片方法, 绘制第一种方案"),
                  e.drawImage(
                    t.url,
                    t.dx || 0,
                    t.dy || 0,
                    t.dWidth || !1,
                    t.dHeight || !1,
                    t.sx || !1,
                    t.sy || !1,
                    t.sWidth || !1,
                    t.sHeight || !1
                  ))
                : t.dWidth && t.dHeight
                ? (D.default.log("绘制默认图片方法, 绘制第二种方案"),
                  e.drawImage(
                    t.url,
                    t.dx || 0,
                    t.dy || 0,
                    t.dWidth || !1,
                    t.dHeight || !1
                  ))
                : (D.default.log("绘制默认图片方法, 绘制第三种方案"),
                  e.drawImage(t.url, t.dx || 0, t.dy || 0)),
              n && e.setGlobalAlpha(1)),
            D.default.log("绘制默认图片方法, 绘制完毕");
        }
        function G(e, t) {
          D.default.log("进入绘制二维码方法"),
            D.default.showLoading("正在生成二维码");
          for (
            var n = [],
              a = {
                text: String(t.text || "") || "",
                size: Number(t.size || 0) || 200,
                background: String(t.background || "") || "#ffffff",
                foreground: String(t.foreground || "") || "#000000",
                pdground: String(t.pdground || "") || "#000000",
                correctLevel: Number(t.correctLevel || 0) || 3,
                image: String(t.image || "") || "",
                imageSize: Number(t.imageSize || 0) || 40,
                dx: Number(t.dx || 0) || 0,
                dy: Number(t.dy || 0) || 0,
              },
              r = null,
              o = 0,
              i = 0,
              s = n.length;
            i < s;
            i++
          )
            if (
              n[(o = i)].text == a.text &&
              n[i].text.correctLevel == a.correctLevel
            ) {
              r = n[i].obj;
              break;
            }
          o == s &&
            ((r = new L.default(a.text, a.correctLevel)),
            n.push({ text: a.text, correctLevel: a.correctLevel, obj: r }));
          for (
            var l,
              u,
              f,
              c,
              d,
              g,
              h,
              p = r.getModuleCount(),
              m = a.size,
              y = a.imageSize,
              v = (m / p).toPrecision(4),
              b = (m / p).toPrecision(4),
              x = 0;
            x < p;
            x++
          )
            for (var w = 0; w < p; w++) {
              var k = Math.ceil((w + 1) * v) - Math.floor(w * v),
                S = Math.ceil((x + 1) * v) - Math.floor(x * v),
                P =
                  ((u = void 0),
                  (u = (l = { row: x, col: w, count: p, options: a }).options)
                    .pdground &&
                  ((1 < l.row && l.row < 5 && 1 < l.col && l.col < 5) ||
                    (l.row > l.count - 6 &&
                      l.row < l.count - 2 &&
                      1 < l.col &&
                      l.col < 5) ||
                    (1 < l.row &&
                      l.row < 5 &&
                      l.col > l.count - 6 &&
                      l.col < l.count - 2))
                    ? u.pdground
                    : u.foreground);
              e.setFillStyle(r.modules[x][w] ? P : a.background),
                e.fillRect(
                  a.dx + Math.round(w * v),
                  a.dy + Math.round(x * b),
                  k,
                  S
                );
            }
          a.image &&
            ((f = a.dx + Number(((m - y) / 2).toFixed(2))),
            (c = a.dy + Number(((m - y) / 2).toFixed(2))),
            (d = f),
            (g = c),
            (t = h = y),
            (m = e).setLineWidth(6),
            m.setFillStyle(a.background),
            m.setStrokeStyle(a.background),
            m.beginPath(),
            m.moveTo(d + 2, g),
            m.arcTo(d + h, g, d + h, g + 2, 2),
            m.arcTo(d + h, g + t, d + h - 2, g + t, 2),
            m.arcTo(d, g + t, d, g + t - 2, 2),
            m.arcTo(d, g, d + 2, g, 2),
            m.closePath(),
            m.fill(),
            m.stroke(),
            e.drawImage(a.image, f, c, y, y)),
            D.default.hideLoading();
        }
        function d(e) {
          var t = q(e),
            e = D.default.getStorageSync(t);
          e &&
            e.path &&
            (D.default.removeSavedFile(e.path), D.default.removeStorageSync(t));
        }
        function R(e, t) {
          D.default.setStorage(q(e), t);
        }
        function q(e) {
          return "ShrePosterBackground_" + (e || "default");
        }
        function X(l, u) {
          l.backgroundImage;
          var n,
            f = l.type;
          return (
            D.default.log("获取分享背景图, 尝试清空本地数据"),
            d(f),
            new Promise(
              ((n = (0, E.default)(
                _.default.mark(function e(t, n) {
                  var a, r, o, i, s;
                  return _.default.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (
                              ((e.prev = 0),
                              D.default.showLoading("正在下载海报背景图"),
                              u)
                            )
                              return (
                                D.default.log("有从后端获取的背景图片路径"),
                                D.default.log("尝试下载并保存背景图"),
                                (a = D.default.fileNameInPath(u)),
                                (e.next = 8),
                                D.default.downLoadAndSaveFile_PromiseFc(u)
                              );
                            e.next = 24;
                            break;
                          case 8:
                            if ((r = e.sent))
                              return (
                                D.default.log("下载并保存背景图成功:" + r),
                                (e.next = 13),
                                D.default.getImageInfo_PromiseFc(r)
                              );
                            e.next = 20;
                            break;
                          case 13:
                            (s = e.sent),
                              (s = {
                                path: r,
                                width: s.width,
                                height: s.height,
                                name: a,
                              }),
                              R(f, M({}, s)),
                              D.default.hideLoading(),
                              t(s),
                              (e.next = 22);
                            break;
                          case 20:
                            D.default.hideLoading(),
                              n("not find savedFilePath");
                          case 22:
                            e.next = 48;
                            break;
                          case 24:
                            return (
                              D.default.log(
                                "没有从后端获取的背景图片路径, 尝试从后端获取背景图片路径"
                              ),
                              (e.next = 27),
                              D.default.getPosterUrl(l)
                            );
                          case 27:
                            return (
                              (o = e.sent),
                              D.default.log("尝试下载并保存背景图:" + o),
                              (e.next = 31),
                              D.default.downLoadAndSaveFile_PromiseFc(o)
                            );
                          case 31:
                            if ((i = e.sent))
                              return (
                                D.default.log("下载并保存背景图成功:" + i),
                                (e.next = 36),
                                D.default.getImageInfo_PromiseFc(i)
                              );
                            e.next = 46;
                            break;
                          case 36:
                            (s = e.sent),
                              D.default.log("获取图片信息成功"),
                              (s = {
                                path: i,
                                width: s.width,
                                height: s.height,
                                name: D.default.fileNameInPath(o),
                              }),
                              D.default.log(
                                "拼接背景图信息对象成功:" + JSON.stringify(s)
                              ),
                              R(f, M({}, s)),
                              D.default.hideLoading(),
                              D.default.log("返回背景图信息对象"),
                              t(M({}, s)),
                              (e.next = 48);
                            break;
                          case 46:
                            D.default.hideLoading(),
                              n("not find savedFilePath");
                          case 48:
                            e.next = 53;
                            break;
                          case 50:
                            (e.prev = 50), (e.t0 = e.catch(0)), n(e.t0);
                          case 53:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[0, 50]]
                  );
                })
              )),
              function (e, t) {
                return n.apply(this, arguments);
              })
            )
          );
        }
        t.exports = {
          getSharePoster: function (r) {
            return new Promise(
              ((n = (0, E.default)(
                _.default.mark(function e(t, n) {
                  var a;
                  return _.default.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.prev = 0), (e.next = 3), o(r);
                          case 3:
                            (a = e.sent), t(a), (e.next = 21);
                            break;
                          case 7:
                            return (
                              (e.prev = 7),
                              (e.t0 = e.catch(0)),
                              d(r.type),
                              (e.prev = 10),
                              D.default.log(
                                "------------清除缓存后, 开始第二次尝试------------"
                              ),
                              (e.next = 14),
                              o(r)
                            );
                          case 14:
                            (a = e.sent), t(a), (e.next = 21);
                            break;
                          case 18:
                            (e.prev = 18), (e.t1 = e.catch(10)), n(e.t1);
                          case 21:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [
                      [0, 7],
                      [10, 18],
                    ]
                  );
                })
              )),
              function (e, t) {
                return n.apply(this, arguments);
              })
            );
            var n;
          },
          setText: z,
          setImage: H,
          drawText: U,
          drawImage: W,
          drawQrCode: G,
        };
      }).call(this, n("543d").default);
    },
    f46a: function (e, t, n) {
      function r(e, t) {
        (this.typeNumber = -1),
          (this.errorCorrectLevel = t),
          (this.modules = null),
          (this.moduleCount = 0),
          (this.dataCache = null),
          (this.rsBlocks = null),
          (this.totalDataCount = -1),
          (this.data = e),
          (this.utf8bytes = (function (e) {
            for (var t = [], n = 0; n < e.length; n++)
              for (
                var a = e.charCodeAt(n),
                  r =
                    (a = a) < 128
                      ? [a]
                      : a < 2048
                      ? [192 + (a >> 6), 128 + (63 & a)]
                      : [
                          224 + (a >> 12),
                          128 + ((a >> 6) & 63),
                          128 + (63 & a),
                        ],
                  o = 0;
                o < r.length;
                o++
              )
                t.push(r[o]);
            return t;
          })(e)),
          this.make();
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        ((t.default = r).prototype = {
          constructor: r,
          getModuleCount: function () {
            return this.moduleCount;
          },
          make: function () {
            this.getRightType(),
              (this.dataCache = this.createData()),
              this.createQrcode();
          },
          makeImpl: function (e) {
            (this.moduleCount = 4 * this.typeNumber + 17),
              (this.modules = new Array(this.moduleCount));
            for (var t = 0; t < this.moduleCount; t++)
              this.modules[t] = new Array(this.moduleCount);
            this.setupPositionProbePattern(0, 0),
              this.setupPositionProbePattern(this.moduleCount - 7, 0),
              this.setupPositionProbePattern(0, this.moduleCount - 7),
              this.setupPositionAdjustPattern(),
              this.setupTimingPattern(),
              this.setupTypeInfo(!0, e),
              7 <= this.typeNumber && this.setupTypeNumber(!0),
              this.mapData(this.dataCache, e);
          },
          setupPositionProbePattern: function (e, t) {
            for (var n = -1; n <= 7; n++)
              if (!(e + n <= -1 || this.moduleCount <= e + n))
                for (var a = -1; a <= 7; a++)
                  t + a <= -1 ||
                    this.moduleCount <= t + a ||
                    (this.modules[e + n][t + a] =
                      (0 <= n && n <= 6 && (0 == a || 6 == a)) ||
                      (0 <= a && a <= 6 && (0 == n || 6 == n)) ||
                      (2 <= n && n <= 4 && 2 <= a && a <= 4));
          },
          createQrcode: function () {
            for (var e = 0, t = 0, n = null, a = 0; a < 8; a++) {
              this.makeImpl(a);
              var r = x.getLostPoint(this);
              (0 == a || r < e) && ((e = r), (t = a), (n = this.modules));
            }
            (this.modules = n),
              this.setupTypeInfo(!1, t),
              7 <= this.typeNumber && this.setupTypeNumber(!1);
          },
          setupTimingPattern: function () {
            for (var e = 8; e < this.moduleCount - 8; e++)
              null == this.modules[e][6] &&
                ((this.modules[e][6] = e % 2 == 0),
                null == this.modules[6][e] &&
                  (this.modules[6][e] = e % 2 == 0));
          },
          setupPositionAdjustPattern: function () {
            for (
              var e = x.getPatternPosition(this.typeNumber), t = 0;
              t < e.length;
              t++
            )
              for (var n = 0; n < e.length; n++) {
                var a = e[t],
                  r = e[n];
                if (null == this.modules[a][r])
                  for (var o = -2; o <= 2; o++)
                    for (var i = -2; i <= 2; i++)
                      this.modules[a + o][r + i] =
                        -2 == o ||
                        2 == o ||
                        -2 == i ||
                        2 == i ||
                        (0 == o && 0 == i);
              }
          },
          setupTypeNumber: function (e) {
            for (
              var t = x.getBCHTypeNumber(this.typeNumber), n = 0;
              n < 18;
              n++
            ) {
              var a = !e && 1 == ((t >> n) & 1);
              (this.modules[Math.floor(n / 3)][
                (n % 3) + this.moduleCount - 8 - 3
              ] = a),
                (this.modules[(n % 3) + this.moduleCount - 8 - 3][
                  Math.floor(n / 3)
                ] = a);
            }
          },
          setupTypeInfo: function (e, t) {
            for (
              var t = (o[this.errorCorrectLevel] << 3) | t,
                n = x.getBCHTypeInfo(t),
                a = 0;
              a < 15;
              a++
            ) {
              var r = !e && 1 == ((n >> a) & 1);
              a < 6
                ? (this.modules[a][8] = r)
                : a < 8
                ? (this.modules[a + 1][8] = r)
                : (this.modules[this.moduleCount - 15 + a][8] = r),
                (r = !e && 1 == ((n >> a) & 1)),
                a < 8
                  ? (this.modules[8][this.moduleCount - a - 1] = r)
                  : a < 9
                  ? (this.modules[8][15 - a - 1 + 1] = r)
                  : (this.modules[8][15 - a - 1] = r);
            }
            this.modules[this.moduleCount - 8][8] = !e;
          },
          createData: function () {
            var e = new m(),
              t = 9 < this.typeNumber ? 16 : 8;
            e.put(4, 4), e.put(this.utf8bytes.length, t);
            for (var n = 0, a = this.utf8bytes.length; n < a; n++)
              e.put(this.utf8bytes[n], 8);
            for (
              e.length + 4 <= 8 * this.totalDataCount && e.put(0, 4);
              e.length % 8 != 0;

            )
              e.putBit(!1);
            for (
              ;
              !(
                e.length >= 8 * this.totalDataCount ||
                (e.put(r.PAD0, 8), e.length >= 8 * this.totalDataCount)
              );

            )
              e.put(r.PAD1, 8);
            return this.createBytes(e);
          },
          createBytes: function (e) {
            for (
              var t = 0,
                n = 0,
                a = 0,
                r = this.rsBlock.length / 3,
                o = new Array(),
                i = 0;
              i < r;
              i++
            )
              for (
                var s = this.rsBlock[3 * i + 0],
                  l = this.rsBlock[3 * i + 1],
                  u = this.rsBlock[3 * i + 2],
                  f = 0;
                f < s;
                f++
              )
                o.push([u, l]);
            for (
              var c = new Array(o.length), d = new Array(o.length), g = 0;
              g < o.length;
              g++
            ) {
              var h = o[g][0],
                p = o[g][1] - h,
                n = Math.max(n, h),
                a = Math.max(a, p);
              for (c[g] = new Array(h), i = 0; i < c[g].length; i++)
                c[g][i] = 255 & e.buffer[i + t];
              t += h;
              var p = x.getErrorCorrectPolynomial(p),
                m = new w(c[g], p.getLength() - 1).mod(p);
              for (
                d[g] = new Array(p.getLength() - 1), i = 0;
                i < d[g].length;
                i++
              ) {
                var y = i + m.getLength() - d[g].length;
                d[g][i] = 0 <= y ? m.get(y) : 0;
              }
            }
            for (
              var v = new Array(this.totalDataCount), b = 0, i = 0;
              i < n;
              i++
            )
              for (g = 0; g < o.length; g++)
                i < c[g].length && (v[b++] = c[g][i]);
            for (i = 0; i < a; i++)
              for (g = 0; g < o.length; g++)
                i < d[g].length && (v[b++] = d[g][i]);
            return v;
          },
          mapData: function (e, t) {
            for (
              var n = -1,
                a = this.moduleCount - 1,
                r = 7,
                o = 0,
                i = this.moduleCount - 1;
              0 < i;
              i -= 2
            )
              for (6 == i && i--; ; ) {
                for (var s, l = 0; l < 2; l++)
                  null == this.modules[a][i - l] &&
                    ((s = !1),
                    o < e.length && (s = 1 == ((e[o] >>> r) & 1)),
                    x.getMask(t, a, i - l) && (s = !s),
                    (this.modules[a][i - l] = s),
                    -1 == --r && (o++, (r = 7)));
                if ((a += n) < 0 || this.moduleCount <= a) {
                  (a -= n), (n = -n);
                  break;
                }
              }
          },
        }),
        (r.PAD0 = 236),
        (r.PAD1 = 17);
      for (
        var o = [1, 0, 3, 2],
          a = 0,
          i = 1,
          s = 2,
          l = 3,
          u = 4,
          f = 5,
          c = 6,
          d = 7,
          x = {
            PATTERN_POSITION_TABLE: [
              [],
              [6, 18],
              [6, 22],
              [6, 26],
              [6, 30],
              [6, 34],
              [6, 22, 38],
              [6, 24, 42],
              [6, 26, 46],
              [6, 28, 50],
              [6, 30, 54],
              [6, 32, 58],
              [6, 34, 62],
              [6, 26, 46, 66],
              [6, 26, 48, 70],
              [6, 26, 50, 74],
              [6, 30, 54, 78],
              [6, 30, 56, 82],
              [6, 30, 58, 86],
              [6, 34, 62, 90],
              [6, 28, 50, 72, 94],
              [6, 26, 50, 74, 98],
              [6, 30, 54, 78, 102],
              [6, 28, 54, 80, 106],
              [6, 32, 58, 84, 110],
              [6, 30, 58, 86, 114],
              [6, 34, 62, 90, 118],
              [6, 26, 50, 74, 98, 122],
              [6, 30, 54, 78, 102, 126],
              [6, 26, 52, 78, 104, 130],
              [6, 30, 56, 82, 108, 134],
              [6, 34, 60, 86, 112, 138],
              [6, 30, 58, 86, 114, 142],
              [6, 34, 62, 90, 118, 146],
              [6, 30, 54, 78, 102, 126, 150],
              [6, 24, 50, 76, 102, 128, 154],
              [6, 28, 54, 80, 106, 132, 158],
              [6, 32, 58, 84, 110, 136, 162],
              [6, 26, 54, 82, 110, 138, 166],
              [6, 30, 58, 86, 114, 142, 170],
            ],
            G15: 1335,
            G18: 7973,
            G15_MASK: 21522,
            getBCHTypeInfo: function (e) {
              for (
                var t = e << 10;
                0 <= x.getBCHDigit(t) - x.getBCHDigit(x.G15);

              )
                t ^= x.G15 << (x.getBCHDigit(t) - x.getBCHDigit(x.G15));
              return ((e << 10) | t) ^ x.G15_MASK;
            },
            getBCHTypeNumber: function (e) {
              for (
                var t = e << 12;
                0 <= x.getBCHDigit(t) - x.getBCHDigit(x.G18);

              )
                t ^= x.G18 << (x.getBCHDigit(t) - x.getBCHDigit(x.G18));
              return (e << 12) | t;
            },
            getBCHDigit: function (e) {
              for (var t = 0; 0 != e; ) t++, (e >>>= 1);
              return t;
            },
            getPatternPosition: function (e) {
              return x.PATTERN_POSITION_TABLE[e - 1];
            },
            getMask: function (e, t, n) {
              switch (e) {
                case a:
                  return (t + n) % 2 == 0;
                case i:
                  return t % 2 == 0;
                case s:
                  return n % 3 == 0;
                case l:
                  return (t + n) % 3 == 0;
                case u:
                  return (Math.floor(t / 2) + Math.floor(n / 3)) % 2 == 0;
                case f:
                  return ((t * n) % 2) + ((t * n) % 3) == 0;
                case c:
                  return (((t * n) % 2) + ((t * n) % 3)) % 2 == 0;
                case d:
                  return (((t * n) % 3) + ((t + n) % 2)) % 2 == 0;
                default:
                  throw new Error("bad maskPattern:" + e);
              }
            },
            getErrorCorrectPolynomial: function (e) {
              for (var t = new w([1], 0), n = 0; n < e; n++)
                t = t.multiply(new w([1, g.gexp(n)], 0));
              return t;
            },
            getLostPoint: function (e) {
              for (var t = e.getModuleCount(), n = 0, a = 0, r = 0; r < t; r++)
                for (var o = 0, i = e.modules[r][0], s = 0; s < t; s++) {
                  var l,
                    u = e.modules[r][s];
                  s < t - 6 &&
                    u &&
                    !e.modules[r][s + 1] &&
                    e.modules[r][s + 2] &&
                    e.modules[r][s + 3] &&
                    e.modules[r][s + 4] &&
                    !e.modules[r][s + 5] &&
                    e.modules[r][s + 6] &&
                    (s < t - 10
                      ? e.modules[r][s + 7] &&
                        e.modules[r][s + 8] &&
                        e.modules[r][s + 9] &&
                        e.modules[r][s + 10] &&
                        (n += 40)
                      : 3 < s &&
                        e.modules[r][s - 1] &&
                        e.modules[r][s - 2] &&
                        e.modules[r][s - 3] &&
                        e.modules[r][s - 4] &&
                        (n += 40)),
                    r < t - 1 &&
                      s < t - 1 &&
                      ((l = 0),
                      u && l++,
                      e.modules[r + 1][s] && l++,
                      e.modules[r][s + 1] && l++,
                      e.modules[r + 1][s + 1] && l++,
                      (0 != l && 4 != l) || (n += 3)),
                    i ^ u
                      ? o++
                      : ((i = u), 5 <= o && (n += 3 + o - 5), (o = 1)),
                    u && a++;
                }
              for (s = 0; s < t; s++)
                for (o = 0, i = e.modules[0][s], r = 0; r < t; r++)
                  (u = e.modules[r][s]),
                    r < t - 6 &&
                      u &&
                      !e.modules[r + 1][s] &&
                      e.modules[r + 2][s] &&
                      e.modules[r + 3][s] &&
                      e.modules[r + 4][s] &&
                      !e.modules[r + 5][s] &&
                      e.modules[r + 6][s] &&
                      (r < t - 10
                        ? e.modules[r + 7][s] &&
                          e.modules[r + 8][s] &&
                          e.modules[r + 9][s] &&
                          e.modules[r + 10][s] &&
                          (n += 40)
                        : 3 < r &&
                          e.modules[r - 1][s] &&
                          e.modules[r - 2][s] &&
                          e.modules[r - 3][s] &&
                          e.modules[r - 4][s] &&
                          (n += 40)),
                    i ^ u
                      ? o++
                      : ((i = u), 5 <= o && (n += 3 + o - 5), (o = 1));
              return (n += 10 * (Math.abs((100 * a) / t / t - 50) / 5));
            },
          },
          g = {
            glog: function (e) {
              if (e < 1) throw new Error("glog(" + e + ")");
              return g.LOG_TABLE[e];
            },
            gexp: function (e) {
              for (; e < 0; ) e += 255;
              for (; 256 <= e; ) e -= 255;
              return g.EXP_TABLE[e];
            },
            EXP_TABLE: new Array(256),
            LOG_TABLE: new Array(256),
          },
          h = 0;
        h < 8;
        h++
      )
        g.EXP_TABLE[h] = 1 << h;
      for (h = 8; h < 256; h++)
        g.EXP_TABLE[h] =
          g.EXP_TABLE[h - 4] ^
          g.EXP_TABLE[h - 5] ^
          g.EXP_TABLE[h - 6] ^
          g.EXP_TABLE[h - 8];
      for (h = 0; h < 255; h++) g.LOG_TABLE[g.EXP_TABLE[h]] = h;
      function w(e, t) {
        if (null == e.length) throw new Error(e.length + "/" + t);
        for (var n = 0; n < e.length && 0 == e[n]; ) n++;
        this.num = new Array(e.length - n + t);
        for (var a = 0; a < e.length - n; a++) this.num[a] = e[a + n];
      }
      w.prototype = {
        get: function (e) {
          return this.num[e];
        },
        getLength: function () {
          return this.num.length;
        },
        multiply: function (e) {
          for (
            var t = new Array(this.getLength() + e.getLength() - 1), n = 0;
            n < this.getLength();
            n++
          )
            for (var a = 0; a < e.getLength(); a++)
              t[n + a] ^= g.gexp(g.glog(this.get(n)) + g.glog(e.get(a)));
          return new w(t, 0);
        },
        mod: function (e) {
          var t = this.getLength(),
            n = e.getLength();
          if (t - n < 0) return this;
          for (var a = new Array(t), r = 0; r < t; r++) a[r] = this.get(r);
          for (; a.length >= n; ) {
            for (
              var o = g.glog(a[0]) - g.glog(e.get(0)), r = 0;
              r < e.getLength();
              r++
            )
              a[r] ^= g.gexp(g.glog(e.get(r)) + o);
            for (; 0 == a[0]; ) a.shift();
          }
          return new w(a, 0);
        },
      };
      var p = [
        [1, 26, 19],
        [1, 26, 16],
        [1, 26, 13],
        [1, 26, 9],
        [1, 44, 34],
        [1, 44, 28],
        [1, 44, 22],
        [1, 44, 16],
        [1, 70, 55],
        [1, 70, 44],
        [2, 35, 17],
        [2, 35, 13],
        [1, 100, 80],
        [2, 50, 32],
        [2, 50, 24],
        [4, 25, 9],
        [1, 134, 108],
        [2, 67, 43],
        [2, 33, 15, 2, 34, 16],
        [2, 33, 11, 2, 34, 12],
        [2, 86, 68],
        [4, 43, 27],
        [4, 43, 19],
        [4, 43, 15],
        [2, 98, 78],
        [4, 49, 31],
        [2, 32, 14, 4, 33, 15],
        [4, 39, 13, 1, 40, 14],
        [2, 121, 97],
        [2, 60, 38, 2, 61, 39],
        [4, 40, 18, 2, 41, 19],
        [4, 40, 14, 2, 41, 15],
        [2, 146, 116],
        [3, 58, 36, 2, 59, 37],
        [4, 36, 16, 4, 37, 17],
        [4, 36, 12, 4, 37, 13],
        [2, 86, 68, 2, 87, 69],
        [4, 69, 43, 1, 70, 44],
        [6, 43, 19, 2, 44, 20],
        [6, 43, 15, 2, 44, 16],
        [4, 101, 81],
        [1, 80, 50, 4, 81, 51],
        [4, 50, 22, 4, 51, 23],
        [3, 36, 12, 8, 37, 13],
        [2, 116, 92, 2, 117, 93],
        [6, 58, 36, 2, 59, 37],
        [4, 46, 20, 6, 47, 21],
        [7, 42, 14, 4, 43, 15],
        [4, 133, 107],
        [8, 59, 37, 1, 60, 38],
        [8, 44, 20, 4, 45, 21],
        [12, 33, 11, 4, 34, 12],
        [3, 145, 115, 1, 146, 116],
        [4, 64, 40, 5, 65, 41],
        [11, 36, 16, 5, 37, 17],
        [11, 36, 12, 5, 37, 13],
        [5, 109, 87, 1, 110, 88],
        [5, 65, 41, 5, 66, 42],
        [5, 54, 24, 7, 55, 25],
        [11, 36, 12],
        [5, 122, 98, 1, 123, 99],
        [7, 73, 45, 3, 74, 46],
        [15, 43, 19, 2, 44, 20],
        [3, 45, 15, 13, 46, 16],
        [1, 135, 107, 5, 136, 108],
        [10, 74, 46, 1, 75, 47],
        [1, 50, 22, 15, 51, 23],
        [2, 42, 14, 17, 43, 15],
        [5, 150, 120, 1, 151, 121],
        [9, 69, 43, 4, 70, 44],
        [17, 50, 22, 1, 51, 23],
        [2, 42, 14, 19, 43, 15],
        [3, 141, 113, 4, 142, 114],
        [3, 70, 44, 11, 71, 45],
        [17, 47, 21, 4, 48, 22],
        [9, 39, 13, 16, 40, 14],
        [3, 135, 107, 5, 136, 108],
        [3, 67, 41, 13, 68, 42],
        [15, 54, 24, 5, 55, 25],
        [15, 43, 15, 10, 44, 16],
        [4, 144, 116, 4, 145, 117],
        [17, 68, 42],
        [17, 50, 22, 6, 51, 23],
        [19, 46, 16, 6, 47, 17],
        [2, 139, 111, 7, 140, 112],
        [17, 74, 46],
        [7, 54, 24, 16, 55, 25],
        [34, 37, 13],
        [4, 151, 121, 5, 152, 122],
        [4, 75, 47, 14, 76, 48],
        [11, 54, 24, 14, 55, 25],
        [16, 45, 15, 14, 46, 16],
        [6, 147, 117, 4, 148, 118],
        [6, 73, 45, 14, 74, 46],
        [11, 54, 24, 16, 55, 25],
        [30, 46, 16, 2, 47, 17],
        [8, 132, 106, 4, 133, 107],
        [8, 75, 47, 13, 76, 48],
        [7, 54, 24, 22, 55, 25],
        [22, 45, 15, 13, 46, 16],
        [10, 142, 114, 2, 143, 115],
        [19, 74, 46, 4, 75, 47],
        [28, 50, 22, 6, 51, 23],
        [33, 46, 16, 4, 47, 17],
        [8, 152, 122, 4, 153, 123],
        [22, 73, 45, 3, 74, 46],
        [8, 53, 23, 26, 54, 24],
        [12, 45, 15, 28, 46, 16],
        [3, 147, 117, 10, 148, 118],
        [3, 73, 45, 23, 74, 46],
        [4, 54, 24, 31, 55, 25],
        [11, 45, 15, 31, 46, 16],
        [7, 146, 116, 7, 147, 117],
        [21, 73, 45, 7, 74, 46],
        [1, 53, 23, 37, 54, 24],
        [19, 45, 15, 26, 46, 16],
        [5, 145, 115, 10, 146, 116],
        [19, 75, 47, 10, 76, 48],
        [15, 54, 24, 25, 55, 25],
        [23, 45, 15, 25, 46, 16],
        [13, 145, 115, 3, 146, 116],
        [2, 74, 46, 29, 75, 47],
        [42, 54, 24, 1, 55, 25],
        [23, 45, 15, 28, 46, 16],
        [17, 145, 115],
        [10, 74, 46, 23, 75, 47],
        [10, 54, 24, 35, 55, 25],
        [19, 45, 15, 35, 46, 16],
        [17, 145, 115, 1, 146, 116],
        [14, 74, 46, 21, 75, 47],
        [29, 54, 24, 19, 55, 25],
        [11, 45, 15, 46, 46, 16],
        [13, 145, 115, 6, 146, 116],
        [14, 74, 46, 23, 75, 47],
        [44, 54, 24, 7, 55, 25],
        [59, 46, 16, 1, 47, 17],
        [12, 151, 121, 7, 152, 122],
        [12, 75, 47, 26, 76, 48],
        [39, 54, 24, 14, 55, 25],
        [22, 45, 15, 41, 46, 16],
        [6, 151, 121, 14, 152, 122],
        [6, 75, 47, 34, 76, 48],
        [46, 54, 24, 10, 55, 25],
        [2, 45, 15, 64, 46, 16],
        [17, 152, 122, 4, 153, 123],
        [29, 74, 46, 14, 75, 47],
        [49, 54, 24, 10, 55, 25],
        [24, 45, 15, 46, 46, 16],
        [4, 152, 122, 18, 153, 123],
        [13, 74, 46, 32, 75, 47],
        [48, 54, 24, 14, 55, 25],
        [42, 45, 15, 32, 46, 16],
        [20, 147, 117, 4, 148, 118],
        [40, 75, 47, 7, 76, 48],
        [43, 54, 24, 22, 55, 25],
        [10, 45, 15, 67, 46, 16],
        [19, 148, 118, 6, 149, 119],
        [18, 75, 47, 31, 76, 48],
        [34, 54, 24, 34, 55, 25],
        [20, 45, 15, 61, 46, 16],
      ];
      function m() {
        (this.buffer = new Array()), (this.length = 0);
      }
      (r.prototype.getRightType = function () {
        for (var e = 1; e < 41; e++) {
          var t = p[4 * (e - 1) + this.errorCorrectLevel];
          if (null == t)
            throw new Error(
              "bad rs block @ typeNumber:" +
                e +
                "/errorCorrectLevel:" +
                this.errorCorrectLevel
            );
          for (var n = t.length / 3, a = 0, r = 0; r < n; r++) {
            var o = t[3 * r + 0];
            a += t[3 * r + 2] * o;
          }
          var i = 9 < e ? 2 : 1;
          if (this.utf8bytes.length + i < a || 40 == e) {
            (this.typeNumber = e),
              (this.rsBlock = t),
              (this.totalDataCount = a);
            break;
          }
        }
      }),
        (m.prototype = {
          get: function (e) {
            var t = Math.floor(e / 8);
            return (this.buffer[t] >>> (7 - (e % 8))) & 1;
          },
          put: function (e, t) {
            for (var n = 0; n < t; n++) this.putBit((e >>> (t - n - 1)) & 1);
          },
          putBit: function (e) {
            var t = Math.floor(this.length / 8);
            this.buffer.length <= t && this.buffer.push(0),
              e && (this.buffer[t] |= 128 >>> this.length % 8),
              this.length++;
          },
        });
    },
    ffa7: function (e, t, n) {
      (function (o) {
        var e = n("4ea4");
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = void 0);
        var i = e(n("d60a")),
          e =
            (e(n("d1d4")),
            e(n("a427")),
            {
              data: function () {
                return {
                  shareInfo: {
                    title: "",
                    path: "",
                    imageUrl: "",
                    copyLink: "",
                  },
                };
              },
              onLoad: function (e) {
                var t;
                if (
                  (this.setShareInfo(),
                  e.scene &&
                    ((t = decodeURIComponent(e.scene)),
                    (e.url = this.getQueryValue("url", t)),
                    (e.share_id = this.getQueryValue("share_id", t))),
                  e.share_id &&
                    (o.setStorageSync("share_id", e.share_id),
                    e.url && ((t = e.url), o.setStorageSync("url", t)),
                    i.default.dispatch("getUserInfo")),
                  e.url)
                ) {
                  var n = e.url;
                  if ((o.setStorageSync("url", n), -1 < n.indexOf("-")))
                    switch (((n = n.split("-")), n[0])) {
                      case "goods":
                        this.$Router.push({
                          path: "/pages/goods/detail/index",
                          query: { id: n[1] },
                        });
                        break;
                      case "groupon":
                        this.$Router.push({
                          path: "/pages/activity/groupon/detail",
                          query: { id: n[1] },
                        });
                    }
                }
              },
              methods: {
                setShareInfo: function () {
                  var a =
                      0 < arguments.length && void 0 !== arguments[0]
                        ? arguments[0]
                        : { title: "", image: "", query: {} },
                    r = this;
                  o.getStorage({
                    key: "shareInfo",
                    success: function (e) {
                      var t = e.data,
                        n = o.getStorageSync("sysInfo").domain,
                        e = o.getStorageSync("platform");
                      ("" !== n && "" !== t.title && "" !== t.image) ||
                        o.showToast({ title: "请设置商城域名和分享信息" }),
                        "" != a.title
                          ? (r.shareInfo.title = a.title)
                          : (r.shareInfo.title = t.title),
                        "" != a.image
                          ? (r.shareInfo.imageUrl = a.image)
                          : (r.shareInfo.imageUrl = t.image);
                      t = i.default.state.user.userInfo;
                      t && t.id && (a.query.share_id = t.id),
                        (r.shareInfo.path = "");
                      t = r.setPathQuery(a.query);
                      (r.shareInfo.path =
                        "wxMiniProgram" === e
                          ? "/pages/index/index" + t
                          : n + t),
                        (r.shareInfo.copyLink = n + t),
                        "wxOfficialAccount" === e && wxsdk.share(r.shareInfo);
                    },
                  });
                },
                setPathQuery: function (e) {
                  var t = this.shareInfo.path;
                  if ("{}" != JSON.stringify(e)) {
                    var n,
                      a = [];
                    for (n in e)
                      e.hasOwnProperty(n) &&
                        ("url" === n
                          ? a.push(
                              "".concat(n, "=").concat(encodeURIComponent(e[n]))
                            )
                          : a.push("".concat(n, "=").concat(e[n])));
                    t = (
                      -1 !== t.indexOf("?")
                        ? "".concat(t, "&")
                        : "".concat(t, "/?")
                    ).concat(a.join("&"));
                  }
                  return t;
                },
                getQueryValue: function (e, t) {
                  for (
                    var n = decodeURI(t).split("&"), a = 0;
                    a < n.length;
                    a++
                  ) {
                    var r = n[a].split("=");
                    if (r[0] == e) return r[1];
                  }
                  return !1;
                },
              },
            });
        t.default = e;
      }).call(this, n("543d").default);
    },
  },
]);
