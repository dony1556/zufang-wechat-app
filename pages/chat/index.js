(global.webpackJsonp = global.webpackJsonp || []).push([
  ["pages/chat/index"],
  {
    "53c3": function (t, e, i) {
      (function (r, n) {
        var t = i("4ea4");
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.default = void 0);
        var s = t(i("9523"));
        function o(e, t) {
          var i,
            s = Object.keys(e);
          return (
            Object.getOwnPropertySymbols &&
              ((i = Object.getOwnPropertySymbols(e)),
              t &&
                (i = i.filter(function (t) {
                  return Object.getOwnPropertyDescriptor(e, t).enumerable;
                })),
              s.push.apply(s, i)),
            s
          );
        }
        t = {
          components: {},
          data: function () {
            return {
              textMsg: "",
              gzh_qrcode: "",
              isHistoryLoading: !1,
              scrollAnimation: !1,
              scrollTop: 0,
              scrollToView: "",
              msgList: [],
              msgImgList: [],
              myuid: 0,
              RECORDER: r.getRecorderManager(),
              isVoice: !1,
              voiceTis: "按住 说话",
              recordTis: "手指上滑 取消发送",
              recording: !1,
              willStop: !1,
              initPoint: { identifier: 0, Y: 0 },
              recordTimer: null,
              recordLength: 0,
              AUDIO: r.createInnerAudioContext(),
              playMsgid: null,
              VoiceTimer: null,
              popupLayerClass: "",
              hideMore: !0,
              hideEmoji: !0,
              emojiList: [{}],
              emojiPath: "",
              windowsState: "",
              redenvelopeData: {
                rid: null,
                from: null,
                face: null,
                blessing: null,
                money: null,
              },
              chattype: "user",
              chatto: 34,
              chattitle: "ET",
              room_id: 0,
              tid: 0,
              tUser: {},
              chatlog: [],
              room: {},
            };
          },
          computed: (function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var i = null != arguments[t] ? arguments[t] : {};
              t % 2
                ? o(Object(i), !0).forEach(function (t) {
                    (0, s.default)(e, t, i[t]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    e,
                    Object.getOwnPropertyDescriptors(i)
                  )
                : o(Object(i)).forEach(function (t) {
                    Object.defineProperty(
                      e,
                      t,
                      Object.getOwnPropertyDescriptor(i, t)
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
              basicSet: function (t) {
                return t.init.basicSet;
              },
            })
          ),
          watch: {
            getMsg: function (t) {
              var e = 0;
              console.log("获取到数据"),
                console.log(t),
                "user" == this.chattype && "user" == t.sendmethod
                  ? (this.chatto == t.fromid && this.screenMsg(t),
                    (e = t.fromid))
                  : "group" == this.chattype &&
                    "group" == t.sendmethod &&
                    (this.chatto == t.toid && this.screenMsg(t), (e = t.toid));
              var i = this.userInfo.data.mine;
              this.cacheMessage(t, t.sendmethod, e, i);
            },
          },
          onUnload: function () {},
          onHide: function () {},
          onLoad: function (t) {
            var e = this.$Route.query;
            (this.room_id = e.room_id),
              (this.tid = e.tid),
              this.chatInit(),
              this.getMsgList();
          },
          onShow: function () {
            this.scrollTop = 9999999;
          },
          methods: {
            chatInit: function () {
              var e = this;
              this.$api("chat.app_msg_list_init", {
                room_id: e.room_id,
                tid: e.tid,
              }).then(function (t) {
                t = t.data.room;
                (e.room = t), r.setNavigationBarTitle({ title: t.title });
              });
            },
            openQrcode: function () {
              this.$refs.gzh_qrcode.show();
            },
            houseDetail: function (t, e) {
              this.$Router.push({
                path: "/pages/house/" + e + "/detail",
                query: { houseId: t },
              });
            },
            screenMsg: function (t) {
              if ("system" == t.type)
                switch (t.msg.type) {
                  case "text":
                    this.addSystemTextMsg(t);
                    break;
                  case "redEnvelope":
                    this.addSystemRedEnvelopeMsg(t);
                }
              else if ("user" == t.type) {
                switch (t.msg.type) {
                  case "text":
                    this.addTextMsg(t);
                    break;
                  case "voice":
                    this.addVoiceMsg(t);
                    break;
                  case "img":
                    this.addImgMsg(t);
                    break;
                  case "redEnvelope":
                    this.addRedEnvelopeMsg(t);
                }
                t.msg.userinfo.uid != this.myuid && r.vibrateLong();
              }
              this.$nextTick(function () {
                this.scrollToView = "msg" + t.msg.id;
              });
            },
            loadHistory: function (t) {
              var i = this;
              this.isHistoryLoading ||
                ((this.isHistoryLoading = !0),
                (this.scrollAnimation = !1),
                setTimeout(function () {
                  var t = [];
                  if (0 < t.length) {
                    for (var e = 0; e < t.length; e++)
                      "user" == t[e].type &&
                        "img" == t[e].msg.type &&
                        ((t[e].msg.content = i.setPicSize(t[e].msg.content)),
                        i.msgImgList.unshift(t[e].msg.content.url)),
                        (t[e].msg.id = Math.floor(1e3 * Math.random() + 1)),
                        i.msgList.unshift(t[e]);
                    i.$nextTick(function () {
                      (this.scrollToView = "msg" + Viewid),
                        this.$nextTick(function () {
                          this.scrollAnimation = !0;
                        });
                    });
                  }
                  i.isHistoryLoading = !1;
                }, 1e3));
            },
            getLeavemsg: function () {
              var t = this.userInfo.data.mine;
              this.$apiconfig
                .getrecentmsg_f({
                  data: { mid: t.id, tid: this.chatto, type: this.chattype },
                })
                .then(function (t) {
                  console.log(t.data);
                });
            },
            getMsgList: function () {
              var e = this;
              this.$api("chat.app_msg_list", { room_id: e.room_id }).then(
                function (t) {
                  (e.msgList = t.data.list),
                    setTimeout(function () {
                      e.scrollTop = new Date().getTime();
                    }, 500);
                }
              );
            },
            setPicSize: function (t) {
              var e,
                i = r.upx2px(350),
                s = r.upx2px(350);
              return (
                (t.w > i || t.h > s) &&
                  ((e = t.w / t.h),
                  (t.w = 1 < e ? i : s * e),
                  (t.h = 1 < e ? i / e : s)),
                t
              );
            },
            showMore: function () {
              (this.isVoice = !1),
                (this.hideEmoji = !0),
                this.hideMore
                  ? ((this.hideMore = !1), this.openDrawer())
                  : this.hideDrawer();
            },
            openDrawer: function () {
              this.popupLayerClass = "showLayer";
            },
            hideDrawer: function () {
              var t = this;
              (this.popupLayerClass = ""),
                setTimeout(function () {
                  (t.hideMore = !0), (t.hideEmoji = !0);
                }, 150);
            },
            chooseImage: function () {
              this.getImage("album");
            },
            camera: function () {
              this.getImage("camera");
            },
            handRedEnvelopes: function () {
              r.navigateTo({ url: "HM-hand/HM-hand" }), this.hideDrawer();
            },
            getImage: function (t) {
              var n = this,
                o = this;
              this.hideDrawer(),
                r.chooseImage({
                  sourceType: [t],
                  sizeType: ["original", "compressed"],
                  success: function (s) {
                    for (var t = 0; t < s.tempFilePaths.length; t++)
                      !(function (i) {
                        r.getImageInfo({
                          src: s.tempFilePaths[i],
                          success: function (t) {
                            var e = {
                              url: s.tempFilePaths[i],
                              w: t.width,
                              h: t.height,
                            };
                            r.uploadFile({
                              url: o.$apiconfig.pathconfig.upload_image,
                              filePath: s.tempFilePaths[i],
                              header: { merchcode: o.$apiconfig.merchcode },
                              name: "file",
                              formData: { user: "test" },
                              success: function (t) {
                                t = JSON.parse(t.data);
                                (e.url = t.data.src), n.sendMsg(e, "img");
                              },
                            });
                          },
                        });
                      })(t);
                  },
                });
            },
            chooseEmoji: function () {
              (this.hideMore = !0),
                this.hideEmoji
                  ? ((this.hideEmoji = !1), this.openDrawer())
                  : this.hideDrawer();
            },
            addEmoji: function (t) {
              var e, i, s;
              "[删除]" !== t.emojiItem.alt
                ? !1 === t.minEmoji
                  ? this.sendBigEmoji(t.emojiItem.url)
                  : (this.textMsg += t.emojiItem.alt)
                : ((s = this.textMsg.length - 1),
                  (e = this.textMsg.lastIndexOf("[")),
                  (t = (i = this.textMsg.lastIndexOf("]")) - e),
                  (s =
                    -1 != i && i === s && 2 <= t && t <= 4
                      ? this.textMsg.slice(0, e)
                      : this.textMsg.slice(0, s)),
                  (this.textMsg = s));
            },
            sendBigEmoji: function (t) {
              this.hideDrawer(),
                t &&
                  ((t = {
                    text:
                      '<div style="align-items: center;word-wrap:break-word;">' +
                      ('<img style="width:48px;height:48px;" src="' +
                        this.emojiPath +
                        t +
                        '">') +
                      "</div>",
                  }),
                  this.sendMsg(t, "text"),
                  (this.textMsg = ""));
            },
            textareaFocus: function () {
              "showLayer" == this.popupLayerClass &&
                0 == this.hideMore &&
                this.hideDrawer();
            },
            sendText: function () {
              var t;
              this.hideDrawer(),
                this.textMsg &&
                  ((t = { text: this.textMsg }),
                  this.sendMsg(t, "text"),
                  (this.textMsg = ""));
            },
            replaceEmoji: function (t) {
              var r = this;
              return (
                '<div style="align-items: center;word-wrap:break-word;">' +
                t.replace(/\[([^(\]|\[)]*)\]/g, function (t, e) {
                  for (var i = 0; i < r.emojiList.length; i++)
                    for (var s = r.emojiList[i], n = 0; n < s.length; n++) {
                      var o = s[n];
                      if (o.alt == t)
                        return (
                          '<img style="width:24px;height:24px;" src="' +
                          r.emojiPath +
                          o.url +
                          '">'
                        );
                    }
                }) +
                "</div>"
              );
            },
            sendMsg: function (t, e) {
              var i = this,
                s = (new Date(), this);
              n.requestSubscribeMessage({
                tmplIds: [s.basicSet.set.news_tmp_id],
                success: function (t) {
                  "requestSubscribeMessage:ok" == t.errMsg &&
                    s.$api("notice.news_add", {}, "post").then(function (t) {});
                },
                fail: function () {},
              }),
                this.$api(
                  "chat.app_msg_send",
                  {
                    room_id: s.room_id,
                    tid: s.tid,
                    content: JSON.stringify(t),
                    type: e,
                  },
                  "post"
                ).then(function (t) {
                  (s.msgList = t.data.list), i.getMsgList();
                });
            },
            addTextMsg: function (t) {
              this.msgList.push(t);
            },
            addVoiceMsg: function (t) {
              this.msgList.push(t);
            },
            addImgMsg: function (t) {
              (t.msg.content = this.setPicSize(t.msg.content)),
                this.msgImgList.push(t.msg.content.url),
                this.msgList.push(t);
            },
            addRedEnvelopeMsg: function (t) {
              this.msgList.push(t);
            },
            addSystemTextMsg: function (t) {
              this.msgList.push(t);
            },
            addSystemRedEnvelopeMsg: function (t) {
              this.msgList.push(t);
            },
            openRedEnvelope: function (t, e) {
              var i = this,
                s = t.content.rid;
              r.showLoading({ title: "加载中..." }),
                setTimeout(function () {
                  0 == s
                    ? (i.redenvelopeData = {
                        rid: 0,
                        from: "大黑哥",
                        face: "/static/img/im/face/face.jpg",
                        blessing: "恭喜发财，大吉大利",
                        money: "已领完",
                      })
                    : ((i.redenvelopeData = {
                        rid: 1,
                        from: "售后客服008",
                        face: "/static/img/im/face/face_2.jpg",
                        blessing: "恭喜发财",
                        money: "0.01",
                      }),
                      t.content.isReceived ||
                        (i.sendSystemMsg(
                          {
                            text:
                              "你领取了" +
                              (t.userinfo.uid == i.myuid
                                ? "自己"
                                : t.userinfo.username) +
                              "的红包",
                          },
                          "redEnvelope"
                        ),
                        (i.msgList[e].msg.content.isReceived = !0))),
                    r.hideLoading(),
                    (i.windowsState = "show");
                }, 200);
            },
            closeRedEnvelope: function () {
              var t = this;
              (this.windowsState = "hide"),
                setTimeout(function () {
                  t.windowsState = "";
                }, 200);
            },
            sendSystemMsg: function (t, e) {
              var i = this.msgList[this.msgList.length - 1].msg.id,
                t = { type: "system", msg: { id: ++i, type: e, content: t } };
              this.screenMsg(t);
            },
            toDetails: function (t) {
              r.navigateTo({ url: "HM-details/HM-details?rid=" + t });
            },
            showPic: function (t) {
              r.previewImage({
                indicator: "none",
                current: t.content.url,
                urls: this.msgImgList,
              });
            },
            playVoice: function (t) {
              (this.playMsgid = t.id),
                (this.AUDIO.src = t.content.url),
                this.$nextTick(function () {
                  this.AUDIO.play();
                });
            },
            voiceBegin: function (t) {
              1 < t.touches.length ||
                ((this.initPoint.Y = t.touches[0].clientY),
                (this.initPoint.identifier = t.touches[0].identifier),
                this.RECORDER.start({ format: "mp3" }));
            },
            recordBegin: function (t) {
              var e = this;
              (this.recording = !0),
                (this.voiceTis = "松开 结束"),
                (this.recordLength = 0),
                (this.recordTimer = setInterval(function () {
                  e.recordLength++;
                }, 1e3));
            },
            voiceCancel: function () {
              (this.recording = !1),
                (this.voiceTis = "按住 说话"),
                (this.recordTis = "手指上滑 取消发送"),
                (this.willStop = !0),
                this.RECORDER.stop();
            },
            voiceIng: function (t) {
              this.recording &&
                ((t = t.touches[0]),
                this.initPoint.Y - t.clientY >= r.upx2px(100)
                  ? ((this.willStop = !0),
                    (this.recordTis = "松开手指 取消发送"))
                  : ((this.willStop = !1),
                    (this.recordTis = "手指上滑 取消发送")));
            },
            voiceEnd: function (t) {
              this.recording &&
                ((this.recording = !1),
                (this.voiceTis = "按住 说话"),
                (this.recordTis = "手指上滑 取消发送"),
                this.RECORDER.stop());
            },
            recordEnd: function (t) {
              var e,
                s = this;
              clearInterval(this.recordTimer),
                this.willStop ||
                  ((e = t.tempFilePath),
                  (t = this.$apiconfig.pathconfig.upload_voice),
                  r.uploadFile({
                    url: t,
                    filePath: e,
                    header: { merchcode: this.$apiconfig.merchcode },
                    name: "file",
                    formData: { user: "test" },
                    success: function (t) {
                      var e = { length: 0, url: t.data },
                        i =
                          (i = parseInt(s.recordLength / 60)) < 10
                            ? "0" + i
                            : i,
                        t = (t = s.recordLength % 60) < 10 ? "0" + t : t;
                      (e.length = i + ":" + t), s.sendMsg(e, "voice");
                    },
                  })),
                (this.willStop = !1);
            },
            switchVoice: function () {
              this.hideDrawer(), (this.isVoice = !this.isVoice);
            },
            discard: function () {},
          },
        };
        e.default = t;
      }).call(this, i("543d").default, i("bc2e").default);
    },
    "6d10": function (t, e, i) {
      i.d(e, "b", function () {
        return n;
      }),
        i.d(e, "c", function () {
          return o;
        }),
        i.d(e, "a", function () {
          return s;
        });
      var s = {
          wkQrcode: function () {
            return i.e("components/wk-qrcode/index").then(i.bind(null, "de62"));
          },
        },
        n = function () {
          var i = this,
            t =
              (i.$createElement,
              i._self._c,
              i.__map(i.msgList, function (t, e) {
                return {
                  $orig: i.__get_orig(t),
                  g0:
                    "system" != t.type && t.is_my && "voice" == t.type
                      ? t.msg.content.length
                      : null,
                  g1:
                    "system" == t.type || t.is_my || "voice" != t.type
                      ? null
                      : t.msg.content.length,
                };
              }));
          i.$mp.data = Object.assign({}, { $root: { l0: t } });
        },
        o = [];
    },
    8991: function (t, e, i) {
      i.r(e);
      var s,
        n = i("6d10"),
        o = i("8d34");
      for (s in o)
        ["default"].indexOf(s) < 0 &&
          (function (t) {
            i.d(e, t, function () {
              return o[t];
            });
          })(s);
      i("d24a");
      var r = i("f0c5"),
        n = Object(r.a)(
          o.default,
          n.b,
          n.c,
          !1,
          null,
          null,
          null,
          !1,
          n.a,
          void 0
        );
      e.default = n.exports;
    },
    "8d34": function (t, e, i) {
      i.r(e);
      var s,
        n = i("53c3"),
        o = i.n(n);
      for (s in n)
        ["default"].indexOf(s) < 0 &&
          (function (t) {
            i.d(e, t, function () {
              return n[t];
            });
          })(s);
      e.default = o.a;
    },
    a8a8: function (t, e, i) {},
    d24a: function (t, e, i) {
      var s = i("a8a8");
      i.n(s).a;
    },
    d593: function (t, e, s) {
      (function (t, e) {
        var i = s("4ea4");
        s("f0a5"), i(s("66fd"));
        i = i(s("8991"));
        (t.__webpack_require_UNI_MP_PLUGIN__ = s), e(i.default);
      }).call(this, s("bc2e").default, s("543d").createPage);
    },
  },
  [["d593", "common/runtime", "common/vendor"]],
]);
