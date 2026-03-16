require("./common/vendor.js"),
  (global.webpackJsonp = global.webpackJsonp || []).push([
    ["pages/user/log"],
    {
      "651c": function (t, e, n) {
        var i = n("f90f");
        n.n(i).a;
      },
      "80ae": function (t, e, n) {
        n.r(e);
        var i,
          s = n("8abf"),
          o = n("ee6b");
        for (i in o)
          ["default"].indexOf(i) < 0 &&
            (function (t) {
              n.d(e, t, function () {
                return o[t];
              });
            })(i);
        n("651c");
        var a = n("f0c5"),
          s = Object(a.a)(
            o.default,
            s.b,
            s.c,
            !1,
            null,
            null,
            null,
            !1,
            s.a,
            void 0
          );
        e.default = s.exports;
      },
      "8abf": function (t, e, n) {
        n.d(e, "b", function () {
          return s;
        }),
          n.d(e, "c", function () {
            return o;
          }),
          n.d(e, "a", function () {
            return i;
          });
        var i = {
            wkEmpty: function () {
              return n
                .e("components/wk-empty/index")
                .then(n.bind(null, "7090"));
            },
          },
          s = function () {
            var n = this,
              t =
                (n.$createElement,
                n._self._c,
                n.browseList && n.browseList.length),
              e = n.browseList.length,
              i = e
                ? n.__map(n.browseList, function (t, e) {
                    return {
                      $orig: n.__get_orig(t),
                      g2: n.isSel ? t.id.toString() : null,
                    };
                  })
                : null,
              s = n.browseList.length,
              o = n.browseList.length,
              a = n.isSel && n.browseList.length;
            n.$mp.data = Object.assign(
              {},
              { $root: { g0: t, g1: e, l0: i, g3: s, g4: o, g5: a } }
            );
          },
          o = [];
      },
      ce88: function (t, e, i) {
        (function (t, e) {
          var n = i("4ea4");
          i("f0a5"), n(i("66fd"));
          n = n(i("80ae"));
          (t.__webpack_require_UNI_MP_PLUGIN__ = i), e(n.default);
        }).call(this, i("bc2e").default, i("543d").createPage);
      },
      e641: function (t, e, n) {
        var i = n("4ea4");
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.default = void 0);
        var s = i(n("448a")),
          n = {
            components: {},
            data: function () {
              return {
                isSel: !1,
                allSel: !1,
                routerTo: this.$Router,
                selList: [],
                emptyData: {
                  img: "/static/imgs/empty/empty_goods.png",
                  tip: "暂无浏览记录",
                  path: "/pages/index/index",
                  pathText: "去首页逛逛",
                },
                browseList: [],
                loadStatus: "",
                currentPage: 1,
                lastPage: 0,
              };
            },
            computed: {},
            onLoad: function () {
              this.init();
            },
            methods: {
              init: function () {
                return Promise.all([this.getbrowseList()]);
              },
              onSel: function (t) {
                var e = this,
                  n = this.browseList,
                  i = t.detail.value;
                (this.selList = i),
                  n.forEach(function (t) {
                    i.includes(t.id.toString())
                      ? e.$set(t, "checked", !0)
                      : e.$set(t, "checked", !1);
                  });
              },
              onSet: function () {
                this.isSel = !this.isSel;
              },
              onAllSel: function () {
                var e = this;
                (this.allSel = !this.allSel),
                  (this.selList = []),
                  this.browseList.forEach(function (t) {
                    e.allSel
                      ? (e.$set(t, "checked", !0), e.selList.push(t.id))
                      : e.$set(t, "checked", !1);
                  });
              },
              getbrowseList: function () {
                var e = this;
                (e.loadStatus = "loading"),
                  e
                    .$api("goods.access_log_list", { page: e.currentPage })
                    .then(function (t) {
                      0 === t.errno &&
                        ((e.browseList = [].concat(
                          (0, s.default)(e.browseList),
                          (0, s.default)(t.data.list)
                        )),
                        (e.lastPage = t.data.last_page),
                        e.currentPage < t.data.last_page
                          ? (e.loadStatus = "")
                          : (e.loadStatus = "over"));
                    });
              },
              cancelFavorite: function () {
                var e = this,
                  n = e.selList,
                  i = this.browseList;
                e.$api("goods.access_log_del", { ids: n.join(",") }).then(
                  function (t) {
                    0 === t.errno &&
                      (e.allSel
                        ? (e.browseList = [])
                        : (e.browseList = i.filter(function (t) {
                            return !n.includes(t.id.toString());
                          })));
                  }
                );
              },
              loadMore: function () {
                this.currentPage < this.lastPage &&
                  ((this.currentPage += 1), this.getbrowseList());
              },
            },
          };
        e.default = n;
      },
      ee6b: function (t, e, n) {
        n.r(e);
        var i,
          s = n("e641"),
          o = n.n(s);
        for (i in s)
          ["default"].indexOf(i) < 0 &&
            (function (t) {
              n.d(e, t, function () {
                return s[t];
              });
            })(i);
        e.default = o.a;
      },
      f90f: function (t, e, n) {},
    },
    [["ce88", "common/runtime", "common/vendor"]],
  ]);
