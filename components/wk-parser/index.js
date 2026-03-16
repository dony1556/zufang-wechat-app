(global.webpackJsonp = global.webpackJsonp || []).push([
  ["components/wk-parser/index"],
  {
    "5f13": function (t, e, n) {
      var i = n("ffcf");
      n.n(i).a;
    },
    "6e84": function (t, e, n) {
      n.r(e);
      var i,
        o = n("9519"),
        s = n.n(o);
      for (i in o)
        ["default"].indexOf(i) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return o[t];
            });
          })(i);
      e.default = s.a;
    },
    9519: function (t, e, n) {
      (function (a, r) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.default = void 0);
        var c = {},
          l = a.getFileSystemManager ? a.getFileSystemManager() : null,
          h = n("4c86"),
          t = {
            name: "parser",
            data: function () {
              return { showAm: "", nodes: [] };
            },
            components: {
              trees: function () {
                n.e("components/wk-parser/libs/trees")
                  .then(
                    function () {
                      return resolve(n("6771"));
                    }.bind(null, n)
                  )
                  .catch(n.oe);
              },
            },
            props: {
              html: String,
              autopause: { type: Boolean, default: !0 },
              autoscroll: Boolean,
              autosetTitle: { type: Boolean, default: !0 },
              compress: Number,
              loadingImg: String,
              useCache: Boolean,
              domain: String,
              lazyLoad: Boolean,
              selectable: Boolean,
              tagStyle: Object,
              showWithAnimation: Boolean,
              useAnchor: Boolean,
            },
            watch: {
              html: function (t) {
                this.setContent(t);
              },
            },
            created: function () {
              (this.imgList = []),
                (this.imgList.each = function (t) {
                  for (var e = 0, n = this.length; e < n; e++)
                    this.setItem(e, t(this[e], e, this));
                }),
                (this.imgList.setItem = function (t, e) {
                  var n,
                    i,
                    o = this;
                  if (null != t && e) {
                    if (0 == e.indexOf("http") && this.includes(e)) {
                      for (
                        var s, a = e.split("://")[0], c = a.length;
                        (s = e[c]) &&
                        ("/" != s || "/" == e[c - 1] || "/" == e[c + 1]);
                        c++
                      )
                        a += 0.5 < Math.random() ? s.toUpperCase() : s;
                      return (a += e.substr(c)), (this[t] = a);
                    }
                    (this[t] = e).includes("data:image") &&
                      (i = e.match(/data:image\/(\S+?);(\S+?),(.+)/)) &&
                      ((n = ""
                        .concat(r.env.USER_DATA_PATH, "/")
                        .concat(Date.now(), ".")
                        .concat(i[1])),
                      l &&
                        l.writeFile({
                          filePath: n,
                          data: i[3],
                          encoding: i[2],
                          success: function () {
                            return (o[t] = n);
                          },
                        }));
                  }
                });
            },
            mounted: function () {
              this.html && this.setContent(this.html);
            },
            beforeDestroy: function () {
              this.imgList.each(function (t) {
                t &&
                  t.includes(a.env.USER_DATA_PATH) &&
                  l &&
                  l.unlink({ filePath: t });
              }),
                clearInterval(this._timer);
            },
            methods: {
              setContent: function (t, e) {
                var n,
                  i = this;
                if (!t) return (this.nodes = []);
                var o,
                  s = new h(t, this);
                this.useCache
                  ? ((t = (function (t) {
                      for (var e = t.length, n = 5381; e--; )
                        n += (n << 5) + t.charCodeAt(e);
                      return n;
                    })(t)),
                    c[t] ? (n = c[t]) : ((n = s.parse()), (c[t] = n)))
                  : (n = s.parse()),
                  this.$emit("parse", n),
                  (this.nodes = e ? this.nodes.concat(n) : n),
                  n.length &&
                    n.title &&
                    this.autosetTitle &&
                    a.setNavigationBarTitle({ title: n.title }),
                  this.imgList && (this.imgList.length = 0),
                  (this.videoContexts = []),
                  this.$nextTick(function () {
                    (function t(e) {
                      for (var n = e.length; n--; )
                        e[n].top &&
                          ((e[n].controls = []),
                          e[n].init(),
                          t(e[n].$children));
                    })(i.$children),
                      i.$emit("load");
                  }),
                  clearInterval(this._timer),
                  (this._timer = setInterval(function () {
                    a.createSelectorQuery()
                      .in(i)
                      .select("#_top")
                      .boundingClientRect()
                      .exec(function (t) {
                        t &&
                          ((i.rect = t[0]),
                          i.rect.height == o &&
                            (i.$emit("ready", i.rect), clearInterval(i._timer)),
                          (o = i.rect.height));
                      });
                  }, 350)),
                  this.showWithAnimation &&
                    !e &&
                    (this.showAm = "animation:_show .5s");
              },
              getText: function () {
                for (
                  var t,
                    e,
                    n =
                      0 < arguments.length && void 0 !== arguments[0]
                        ? arguments[0]
                        : this.nodes,
                    i = "",
                    o = 0;
                  (t = n[o++]);

                )
                  "text" == t.type
                    ? (i += t.text
                        .replace(/&nbsp;/g, " ")
                        .replace(/&lt;/g, "<")
                        .replace(/&gt;/g, ">")
                        .replace(/&amp;/g, "&"))
                    : "br" == t.type
                    ? (i += "\n")
                    : ((e =
                        "p" == t.name ||
                        "div" == t.name ||
                        "tr" == t.name ||
                        "li" == t.name ||
                        ("h" == t.name[0] &&
                          "0" < t.name[1] &&
                          t.name[1] < "7")) &&
                        i &&
                        "\n" != i[i.length - 1] &&
                        (i += "\n"),
                      t.children && (i += this.getText(t.children)),
                      e && "\n" != i[i.length - 1]
                        ? (i += "\n")
                        : ("td" != t.name && "th" != t.name) || (i += "\t"));
                return i;
              },
              in: function (t) {
                t.page && t.selector && t.scrollTop && (this._in = t);
              },
              navigateTo: function (e) {
                var n = this;
                if (!this.useAnchor)
                  return e.fail && e.fail("Anchor is disabled");
                var t = a
                  .createSelectorQuery()
                  .in(this._in ? this._in.page : this)
                  .select(
                    (this._in ? this._in.selector : "#_top") +
                      (e.id
                        ? ""
                            .concat(">>>", "#")
                            .concat(e.id, ",")
                            .concat(this._in ? this._in.selector : "#_top")
                            .concat(">>>", ".")
                            .concat(e.id)
                        : "")
                  )
                  .boundingClientRect();
                this._in
                  ? t
                      .select(this._in.selector)
                      .scrollOffset()
                      .select(this._in.selector)
                      .boundingClientRect()
                  : t.selectViewport().scrollOffset(),
                  t.exec(function (t) {
                    if (!t[0]) return e.fail && e.fail("Label not found");
                    t =
                      t[1].scrollTop +
                      t[0].top -
                      (t[2] ? t[2].top : 0) +
                      (e.offset || 0);
                    n._in
                      ? (n._in.page[n._in.scrollTop] = t)
                      : a.pageScrollTo({ scrollTop: t, duration: 300 }),
                      e.success && e.success();
                  });
              },
              getVideoContext: function (t) {
                if (!t) return this.videoContexts;
                for (var e = this.videoContexts.length; e--; )
                  if (this.videoContexts[e].id == t)
                    return this.videoContexts[e];
              },
            },
          };
        e.default = t;
      }).call(this, n("543d").default, n("bc2e").default);
    },
    d538: function (t, e, n) {
      n.d(e, "b", function () {
        return i;
      }),
        n.d(e, "c", function () {
          return o;
        }),
        n.d(e, "a", function () {});
      var i = function () {
          this.$createElement;
          var t = (this._self._c, this.nodes.length);
          this.$mp.data = Object.assign({}, { $root: { g0: t } });
        },
        o = [];
    },
    faee: function (t, e, n) {
      n.r(e);
      var i,
        o = n("d538"),
        s = n("6e84");
      for (i in s)
        ["default"].indexOf(i) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return s[t];
            });
          })(i);
      n("5f13");
      var a = n("f0c5"),
        o = Object(a.a)(
          s.default,
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
    ffcf: function (t, e, n) {},
  },
]),
  (global.webpackJsonp = global.webpackJsonp || []).push([
    "components/wk-parser/index-create-component",
    {
      "components/wk-parser/index-create-component": function (t, e, n) {
        n("543d").createComponent(n("faee"));
      },
    },
    [["components/wk-parser/index-create-component"]],
  ]);
