(global.webpackJsonp = global.webpackJsonp || []).push([
  ["pages/app/score/children/sh-score-banner"],
  {
    "1d50": function (e, t, n) {
      n.r(t);
      var r,
        a = n("b26a"),
        o = n("f5a2");
      for (r in o)
        ["default"].indexOf(r) < 0 &&
          (function (e) {
            n.d(t, e, function () {
              return o[e];
            });
          })(r);
      n("380e");
      var c = n("f0c5"),
        a = Object(c.a)(
          o.default,
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
      t.default = a.exports;
    },
    "24e1": function (e, r, a) {
      (function (c) {
        var e = a("4ea4");
        Object.defineProperty(r, "__esModule", { value: !0 }),
          (r.default = void 0);
        var t,
          i = e(a("2eee")),
          n = e(a("c973")),
          e = {
            components: {},
            data: function () {
              return {
                swiperCurrent: 0,
                webviewId: 0,
                routerTo: this.$tools.routerTo,
              };
            },
            props: { value: { type: Object, default: {} } },
            created:
              ((t = (0, n.default)(
                i.default.mark(function e() {
                  return i.default.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              )),
              function () {
                return t.apply(this, arguments);
              }),
            computed: {},
            methods: {
              doColorThief: function () {
                var o = this;
                return (0, n.default)(
                  i.default.mark(function e() {
                    var n, r, t, a;
                    return i.default.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            (r = (n = o).detail.list[o.swiperCurrent]),
                              "" === (t = r.bgcolor)
                                ? ((a = c.createCanvasContext("colorThief", n)),
                                  (0 !== n.webviewId &&
                                    a.webviewId !== n.webviewId) ||
                                    ((n.webviewId = a.webviewId),
                                    c.getImageInfo({
                                      src: r.image,
                                      success: function (t) {
                                        a.drawImage(
                                          t.path,
                                          0,
                                          0,
                                          t.width,
                                          t.height
                                        ),
                                          a.draw(!0, function (e) {
                                            c.canvasGetImageData(
                                              {
                                                canvasId: "colorThief",
                                                x: 0,
                                                y: 0,
                                                width: parseInt(t.width),
                                                height: parseInt(t.height),
                                                success: function (e) {
                                                  e = colorThief(e.data)
                                                    .color()
                                                    .getHex();
                                                  n.$set(r, "bgcolor", e),
                                                    n.$emit("getbgcolor", e);
                                                },
                                              },
                                              n
                                            );
                                          });
                                      },
                                    })))
                                : (n.$set(r, "bgcolor", t),
                                  n.$emit("getbgcolor", t));
                          case 4:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                )();
              },
              swiperChange: function (e) {
                this.swiperCurrent = e.detail.current;
              },
              jump: function (e, t) {
                this.$Router.push({ path: e, query: t });
              },
            },
          };
        r.default = e;
      }).call(this, a("543d").default);
    },
    "380e": function (e, t, n) {
      var r = n("c8e7");
      n.n(r).a;
    },
    b26a: function (e, t, n) {
      n.d(t, "b", function () {
        return r;
      }),
        n.d(t, "c", function () {
          return a;
        }),
        n.d(t, "a", function () {});
      var r = function () {
          this.$createElement;
          this._self._c;
        },
        a = [];
    },
    c8e7: function (e, t, n) {},
    f5a2: function (e, t, n) {
      n.r(t);
      var r,
        a = n("24e1"),
        o = n.n(a);
      for (r in a)
        ["default"].indexOf(r) < 0 &&
          (function (e) {
            n.d(t, e, function () {
              return a[e];
            });
          })(r);
      t.default = o.a;
    },
  },
]),
  (global.webpackJsonp = global.webpackJsonp || []).push([
    "pages/app/score/children/sh-score-banner-create-component",
    {
      "pages/app/score/children/sh-score-banner-create-component": function (
        e,
        t,
        n
      ) {
        n("543d").createComponent(n("1d50"));
      },
    },
    [["pages/app/score/children/sh-score-banner-create-component"]],
  ]);
