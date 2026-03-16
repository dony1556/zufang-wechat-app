(global.webpackJsonp = global.webpackJsonp || []).push([
  ["pages/article/index"],
  {
    "00d8": function (t, e, i) {
      var n = i("562b");
      i.n(n).a;
    },
    "2d6e": function (t, e, i) {
      i.d(e, "b", function () {
        return n;
      }),
        i.d(e, "c", function () {
          return o;
        }),
        i.d(e, "a", function () {});
      var n = function () {
          this.$createElement;
          var t = (this._self._c, this.typeList.length),
            e = this.sliderList.length;
          this.$mp.data = Object.assign({}, { $root: { g0: t, g1: e } });
        },
        o = [];
    },
    "54e5": function (t, e, n) {
      (function (t, e) {
        var i = n("4ea4");
        n("f0a5"), i(n("66fd"));
        i = i(n("f68b"));
        (t.__webpack_require_UNI_MP_PLUGIN__ = n), e(i.default);
      }).call(this, n("bc2e").default, n("543d").createPage);
    },
    "562b": function (t, e, i) {},
    ab6c: function (t, e, i) {
      i.r(e);
      var n,
        o = i("eecc"),
        a = i.n(o);
      for (n in o)
        ["default"].indexOf(n) < 0 &&
          (function (t) {
            i.d(e, t, function () {
              return o[t];
            });
          })(n);
      e.default = a.a;
    },
    eecc: function (t, i, n) {
      (function (t) {
        Object.defineProperty(i, "__esModule", { value: !0 }),
          (i.default = void 0);
        var e = {
          components: {
            articleList: function () {
              n.e("pages/article/components/article-list")
                .then(
                  function () {
                    return resolve(n("357a"));
                  }.bind(null, n)
                )
                .catch(n.oe);
            },
          },
          data: function () {
            return {
              scroller: {},
              optUp: {
                auto: !0,
                onScroll: !0,
                page: { size: 20 },
                empty: { tip: "暂无文章~" },
              },
              typeId: 0,
              typeIndex: 0,
              scrollTypeId: "type-id-0",
              currentSliderIndex: 0,
              typeList: [],
              showMenu: !1,
              sliderList: [],
              articleList: [],
              showNoData: !1,
              showPageLoading: !0,
              showNavFloat: !1,
              pageIndex: 1,
            };
          },
          onShow: function () {},
          onLoad: function (t) {
            this.getTypeList();
          },
          onPullDownRefresh: function () {
            t.showLoading({ title: "刷新中" }), this.loadData();
          },
          methods: {
            refreshData: function () {
              t.showLoading({ title: "刷新中" }), this.scroller.resetUpScroll();
            },
            loadData: function () {
              (this.slider = []),
                (this.list = []),
                (this.currentSliderIndex = 0),
                this.scroller.resetUpScroll();
            },
            getTypeList: function () {
              var e = this,
                i = this;
              this.$api("content.article_type_list", {}).then(function (t) {
                0 === t.errno &&
                  ((i.typeList = t.data.list),
                  -1 < (t = i.typeIndex) &&
                    ((i.typeId = e.typeList[e.typeIndex].id),
                    i.getArticleList(),
                    (t = 0 < t ? t - 1 : 0),
                    (e.scrollTypeId = "type-id-" + t)));
              });
            },
            getArticleList: function () {
              var e = this;
              this.$api("content.article_list", {
                pageIndex: e.pageIndex,
                typeId: e.typeId,
              }).then(function (t) {
                0 === t.errno &&
                  ((e.articleList = t.data.list),
                  (e.sliderList = t.data.list2));
              });
            },
            categoryChange: function (t) {
              (this.showMenu = !1),
                (this.typeIndex = t),
                (this.typeId = this.typeList[this.typeIndex].id);
              t = 0 < t ? t - 1 : 0;
              (this.scrollTypeId = "type-id-" + t), this.getArticleList();
            },
            sliderChange: function (t) {
              this.currentSliderIndex = t.detail.current;
            },
            navFloatShow: function (t) {
              t &&
                (60 < t.scrollTop
                  ? this.showNavFloat || (this.showNavFloat = !0)
                  : this.showNavFloat && (this.showNavFloat = !1));
            },
            navtoDetail: function (t) {
              this.$Router.push({
                path: "/pages/article/detail",
                query: { id: t },
              });
            },
            menuShow: function (t) {
              this.showMenu = t;
            },
            navFloatHide: function () {
              this.showNavFloat = !1;
            },
          },
        };
        i.default = e;
      }).call(this, n("543d").default);
    },
    f68b: function (t, e, i) {
      i.r(e);
      var n,
        o = i("2d6e"),
        a = i("ab6c");
      for (n in a)
        ["default"].indexOf(n) < 0 &&
          (function (t) {
            i.d(e, t, function () {
              return a[t];
            });
          })(n);
      i("00d8");
      var s = i("f0c5"),
        o = Object(s.a)(
          a.default,
          o.b,
          o.c,
          !1,
          null,
          "03c1e9f0",
          null,
          !1,
          o.a,
          void 0
        );
      e.default = o.exports;
    },
  },
  [["54e5", "common/runtime", "common/vendor"]],
]);
