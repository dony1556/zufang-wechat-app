(global.webpackJsonp = global.webpackJsonp || []).push([
  ["components/wk-parser/libs/trees"],
  {
    "22d7": function (t, e, r) {},
    "401d": function (t, e, r) {
      (function (i, n) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.default = void 0),
          (i.Parser = {});
        var s = r("e6cd").errorImg,
          t = {
            components: {
              trees: function () {
                Promise.resolve()
                  .then(
                    function () {
                      return resolve(r("6771"));
                    }.bind(null, r)
                  )
                  .catch(r.oe);
              },
            },
            name: "trees",
            data: function () {
              return {
                ctrl: [],
                placeholder:
                  'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="300" height="225"/>',
                errorImg: s,
                loadVideo: "undefined" == typeof plus,
                c: "",
                s: "",
              };
            },
            props: { nodes: Array, lazyLoad: Boolean, loading: String },
            mounted: function () {
              for (
                this.top = this.$parent;
                "parser" != this.top.$options.name;
                this.top = this.top.$parent
              );
              this.init();
            },
            methods: {
              init: function () {
                for (var t, e, r = this.nodes.length; (t = this.nodes[--r]); )
                  "img" == t.name
                    ? this.top.imgList.setItem(
                        t.attrs.i,
                        t.attrs["original-src"] || t.attrs.src
                      )
                    : ("video" != t.name && "audio" != t.name) ||
                      ("video" == t.name
                        ? (e = n.createVideoContext(t.attrs.id, this))
                        : this.$refs[t.attrs.id] &&
                          (e = this.$refs[t.attrs.id][0]),
                      e &&
                        ((e.id = t.attrs.id), this.top.videoContexts.push(e)));
              },
              play: function (t) {
                var e = this.top.videoContexts;
                if (1 < e.length && this.top.autopause)
                  for (var r = e.length; r--; )
                    e[r].id != t.currentTarget.dataset.id && e[r].pause();
              },
              imgtap: function (t) {
                var e,
                  r = t.currentTarget.dataset.attrs;
                r.ignore ||
                  ((e = !0),
                  (t = {
                    id: t.target.id,
                    src: r.src,
                    ignore: function () {
                      return (e = !1);
                    },
                  }),
                  i.Parser.onImgtap && i.Parser.onImgtap(t),
                  this.top.$emit("imgtap", t),
                  e &&
                    ((r = (t = this.top.imgList)[r.i]
                      ? parseInt(r.i)
                      : ((t = [r.src]), 0)),
                    n.previewImage({ current: r, urls: t })));
              },
              loadImg: function (t) {
                t = t.currentTarget.dataset.i;
                this.lazyLoad && !this.ctrl[t]
                  ? this.$set(this.ctrl, t, 1)
                  : this.loading &&
                    2 != this.ctrl[t] &&
                    this.$set(this.ctrl, t, 2);
              },
              linkpress: function (t) {
                var e = !0,
                  r = t.currentTarget.dataset.attrs;
                if (
                  ((r.ignore = function () {
                    return (e = !1);
                  }),
                  i.Parser.onLinkpress && i.Parser.onLinkpress(r),
                  this.top.$emit("linkpress", r),
                  e)
                ) {
                  if (r["app-id"])
                    return n.navigateToMiniProgram({
                      appId: r["app-id"],
                      path: r.path,
                    });
                  r.href &&
                    ("#" == r.href[0]
                      ? this.top.useAnchor &&
                        this.top.navigateTo({ id: r.href.substring(1) })
                      : 0 == r.href.indexOf("http") || 0 == r.href.indexOf("//")
                      ? n.setClipboardData({
                          data: r.href,
                          success: function () {
                            return n.showToast({ title: "链接已复制" });
                          },
                        })
                      : n.navigateTo({
                          url: r.href,
                          fail: function () {
                            n.switchTab({ url: r.href });
                          },
                        }));
                }
              },
              error: function (t) {
                var e,
                  r = t.currentTarget,
                  i = r.dataset.source,
                  n = r.dataset.i;
                "video" == i || "audio" == i
                  ? ((e = this.ctrl[n] ? this.ctrl[n].i + 1 : 1) <
                      this.nodes[n].attrs.source.length &&
                      this.$set(this.ctrl, n, e),
                    t.detail.__args__ && (t.detail = t.detail.__args__[0]))
                  : s &&
                    "img" == i &&
                    (this.top.imgList.setItem(r.dataset.index, s),
                    this.$set(this.ctrl, n, 3)),
                  this.top &&
                    this.top.$emit("error", {
                      source: i,
                      target: r,
                      errMsg: t.detail.errMsg,
                    });
              },
              _loadVideo: function (t) {
                this.$set(this.ctrl, t.target.dataset.i, 0);
              },
            },
          };
        e.default = t;
      }).call(this, r("c8ba"), r("543d").default);
    },
    6771: function (t, e, r) {
      r.r(e);
      var i,
        n = r("bd0b"),
        s = r("cf8a");
      for (i in s)
        ["default"].indexOf(i) < 0 &&
          (function (t) {
            r.d(e, t, function () {
              return s[t];
            });
          })(i);
      r("fdae");
      var a = r("f0c5"),
        o = r("70f3"),
        n = Object(a.a)(
          s.default,
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
      "function" == typeof o.a && Object(o.a)(n), (e.default = n.exports);
    },
    "70f3": function (t, e, r) {
      e.a = function (t) {
        t.options.wxsCallMethods || (t.options.wxsCallMethods = []);
      };
    },
    bd0b: function (t, e, r) {
      r.d(e, "b", function () {
        return i;
      }),
        r.d(e, "c", function () {
          return n;
        }),
        r.d(e, "a", function () {});
      var i = function () {
          this.$createElement;
          this._self._c;
        },
        n = [];
    },
    cf8a: function (t, e, r) {
      r.r(e);
      var i,
        n = r("401d"),
        s = r.n(n);
      for (i in n)
        ["default"].indexOf(i) < 0 &&
          (function (t) {
            r.d(e, t, function () {
              return n[t];
            });
          })(i);
      e.default = s.a;
    },
    fdae: function (t, e, r) {
      var i = r("22d7");
      r.n(i).a;
    },
  },
]),
  (global.webpackJsonp = global.webpackJsonp || []).push([
    "components/wk-parser/libs/trees-create-component",
    {
      "components/wk-parser/libs/trees-create-component": function (t, e, r) {
        r("543d").createComponent(r("6771"));
      },
    },
    [["components/wk-parser/libs/trees-create-component"]],
  ]);
