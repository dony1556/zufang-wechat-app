(global.webpackJsonp = global.webpackJsonp || []).push([
  ["components/wk-painter/index"],
  {
    "092f": function (t, e, n) {
      n.r(e);
      var a,
        i = n("2a18"),
        r = n("5edd");
      for (a in r)
        ["default"].indexOf(a) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return r[t];
            });
          })(a);
      n("2aa1");
      var o = n("f0c5"),
        i = Object(o.a)(
          r.default,
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
    "2a18": function (t, e, n) {
      n.d(e, "b", function () {
        return a;
      }),
        n.d(e, "c", function () {
          return i;
        }),
        n.d(e, "a", function () {});
      var a = function () {
          this.$createElement;
          this._self._c;
        },
        i = [];
    },
    "2aa1": function (t, e, n) {
      var a = n("5701");
      n.n(a).a;
    },
    5701: function (t, e, n) {},
    "5edd": function (t, e, n) {
      n.r(e);
      var a,
        i = n("773b"),
        r = n.n(i);
      for (a in i)
        ["default"].indexOf(a) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return i[t];
            });
          })(a);
      e.default = r.a;
    },
    "773b": function (t, e, n) {
      (function (f) {
        var t = n("4ea4");
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.default = void 0);
        var l = t(n("2eee")),
          p = t(n("c973")),
          v = n("17f5"),
          w = n("721e"),
          c = n("aaf8"),
          t = {
            name: "l-painter",
            props: {
              board: Object,
              fileType: { type: String, default: "jpg" },
              width: [Number, String],
              height: [Number, String],
              pixelRatio: Number,
              customStyle: String,
              isRenderImage: Boolean,
              isBase64ToPath: Boolean,
              type: { type: String, default: "2d" },
            },
            data: function () {
              return {
                canvasId: "l-painter",
                use2dCanvas: "2d" === this.type,
                draw: null,
                ctx: null,
                showModal: 0,
                path: "",
              };
            },
            watch: {
              board: {
                handler: function (t) {
                  "{}" !== JSON.stringify(t) && this.render();
                },
                immediate: !0,
                deep: !0,
              },
            },
            computed: {
              isUse2dCanvas: function () {
                return "2d" === this.type && this.use2dCanvas;
              },
              style: function () {
                return "position:fixed;left:1000rpx;width:"
                  .concat(this.boardWidth, "px; height: ")
                  .concat(this.boardHeight, "px; ")
                  .concat(this.customStyle);
              },
              dpr: function () {
                return this.pixelRatio || f.getSystemInfoSync().pixelRatio;
              },
              boardWidth: function () {
                var t = (this.board || {}).width,
                  t = void 0 === t ? 200 : t;
                return (0, v.toPx)(this.width || t);
              },
              boardHeight: function () {
                var t = (this.board || {}).height,
                  t = void 0 === t ? 200 : t;
                return (0, v.toPx)(this.height || t);
              },
            },
            methods: {
              render: function () {
                var e,
                  u = this,
                  h =
                    0 < arguments.length && void 0 !== arguments[0]
                      ? arguments[0]
                      : {};
                this.getContext().then(
                  ((e = (0, p.default)(
                    l.default.mark(function t(e) {
                      var n, a, i, r, o, s, c, d;
                      return l.default.wrap(function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              if (
                                (u.ctx || (u.ctx = e),
                                (n = u.use2dCanvas),
                                (a = u.boardWidth),
                                (i = u.boardHeight),
                                (r = u.board),
                                (o = u.canvas),
                                (s = u.isBase64ToPath),
                                (c = h.width),
                                (d = h.height),
                                n && !o)
                              )
                                return t.abrupt(
                                  "return",
                                  Promise.reject(
                                    new Error(
                                      "render: fail canvas has not been created"
                                    )
                                  )
                                );
                              t.next = 5;
                              break;
                            case 5:
                              return (
                                (u.boundary = {
                                  top: 0,
                                  left: 0,
                                  width: a || c,
                                  height: i || d,
                                }),
                                u.ctx.clearRect(0, 0, a, i),
                                u.draw || (u.draw = new w.Draw(u.ctx, o, n)),
                                (t.next = 10),
                                u.draw.drawBoard(
                                  "{}" != JSON.stringify(h) ? h : r
                                )
                              );
                            case 10:
                              if (n) {
                                t.next = 13;
                                break;
                              }
                              return (
                                (t.next = 13),
                                u.canvasDraw(u.ctx, u.isRenderImage)
                              );
                            case 13:
                              return (
                                u.isRenderImage &&
                                  u
                                    .canvasToTempFilePath()
                                    .then(
                                      (function () {
                                        var e = (0, p.default)(
                                          l.default.mark(function t(e) {
                                            var n;
                                            return l.default.wrap(function (t) {
                                              for (;;)
                                                switch ((t.prev = t.next)) {
                                                  case 0:
                                                    if (
                                                      /^data:image\/(\w+);base64/.test(
                                                        e.tempFilePath
                                                      ) &&
                                                      s
                                                    )
                                                      return (
                                                        (t.next = 3),
                                                        (0, v.base64ToPath)(
                                                          e.tempFilePath
                                                        )
                                                      );
                                                    t.next = 8;
                                                    break;
                                                  case 3:
                                                    (n = t.sent),
                                                      (u.path = n),
                                                      u.$emit("success", n),
                                                      (t.next = 10);
                                                    break;
                                                  case 8:
                                                    (u.path = e.tempFilePath),
                                                      u.$emit(
                                                        "success",
                                                        e.tempFilePath
                                                      );
                                                  case 10:
                                                  case "end":
                                                    return t.stop();
                                                }
                                            }, t);
                                          })
                                        );
                                        return function (t) {
                                          return e.apply(this, arguments);
                                        };
                                      })()
                                    )
                                    .catch(function (t) {
                                      console.info(999),
                                        u.$emit("fail", t),
                                        f.showToast({
                                          title: "提示",
                                          content:
                                            "请确认图片域名先配置download域名白名单才能生效",
                                          icon: "none",
                                        }),
                                        (u.showModal = 0),
                                        new Error(JSON.stringify(t)),
                                        console.error(JSON.stringify(t));
                                    }),
                                t.abrupt("return", Promise.resolve(!0))
                              );
                            case 15:
                            case "end":
                              return t.stop();
                          }
                      }, t);
                    })
                  )),
                  function (t) {
                    return e.apply(this, arguments);
                  })
                );
              },
              canvasDraw: function () {
                var e =
                    0 < arguments.length && void 0 !== arguments[0]
                      ? arguments[0]
                      : this.ctx,
                  n =
                    !(1 < arguments.length && void 0 !== arguments[1]) ||
                    arguments[1];
                return new Promise(function (t) {
                  e.draw(n, function () {
                    t(!0);
                  });
                });
              },
              show: function () {
                this.showModal = 1;
              },
              hide: function () {
                this.showModal = 0;
              },
              saveImg: function () {
                f.saveImageToPhotosAlbum({
                  filePath: this.path,
                  success: function (t) {
                    f.showToast({
                      title: "已保存到相册",
                      icon: "success",
                      duration: 2e3,
                    });
                  },
                }),
                  (this.showModal = 0);
              },
              getContext: function () {
                var a = this,
                  i = this.type,
                  t = this.isUse2dCanvas,
                  r = this.dpr,
                  o = this.boardWidth,
                  s = this.boardHeight;
                if (t)
                  return new Promise(function (n) {
                    f.createSelectorQuery()
                      .in(a)
                      .select("#l-painter")
                      .node()
                      .exec(function (t) {
                        var e = t[0].node;
                        if (!e) return (a.use2dCanvas = !1), a.getContext();
                        t = e.getContext(i);
                        a.inited ||
                          ((a.inited = !0),
                          (e.width = o * r),
                          (e.height = s * r),
                          (a.use2dCanvas = !0),
                          (a.canvas = e),
                          t.scale(r, r)),
                          n((0, c.adaptor)(t));
                      });
                  });
                t = f.createCanvasContext(this.canvasId, this);
                return Promise.resolve(t);
              },
              canvasToTempFilePath: function () {
                var o = this,
                  s =
                    0 < arguments.length && void 0 !== arguments[0]
                      ? arguments[0]
                      : {},
                  c = this.use2dCanvas,
                  d = this.canvasId;
                return new Promise(function (t, e) {
                  var n = o.boundary,
                    a = n.top,
                    i = void 0 === a ? 0 : a,
                    r = n.left,
                    a = void 0 === r ? 0 : r,
                    r = n.width,
                    n = n.height,
                    e = {
                      x: a,
                      y: i,
                      width: r,
                      height: n,
                      destWidth: r * o.dpr,
                      destHeight: n * o.dpr,
                      canvasId: d,
                      fileType: s.fileType || o.fileType || "png",
                      quality: s.quality || 1,
                      success: t,
                      fail: e,
                    };
                  c && (delete e.canvasId, (e.canvas = o.canvas)),
                    f.canvasToTempFilePath(e, o);
                });
              },
            },
          };
        e.default = t;
      }).call(this, n("543d").default);
    },
  },
]),
  (global.webpackJsonp = global.webpackJsonp || []).push([
    "components/wk-painter/index-create-component",
    {
      "components/wk-painter/index-create-component": function (t, e, n) {
        n("543d").createComponent(n("092f"));
      },
    },
    [["components/wk-painter/index-create-component"]],
  ]);
