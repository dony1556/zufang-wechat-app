(global.webpackJsonp = global.webpackJsonp || []).push([
  ["pages/goods/list"],
  {
    "3d79": function (t, e, n) {
      n.r(e);
      var i,
        r = n("3f8e"),
        a = n.n(r);
      for (i in r)
        ["default"].indexOf(i) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return r[t];
            });
          })(i);
      e.default = a.a;
    },
    "3f8e": function (t, n, e) {
      (function (t, r) {
        function a(t, e) {
          var n =
            ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
            t["@@iterator"];
          if (!n) {
            if (
              Array.isArray(t) ||
              (n = (function (t, e) {
                if (t) {
                  if ("string" == typeof t) return o(t, e);
                  var n = Object.prototype.toString.call(t).slice(8, -1);
                  return (
                    "Object" === n && t.constructor && (n = t.constructor.name),
                    "Map" === n || "Set" === n
                      ? Array.from(t)
                      : "Arguments" === n ||
                        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                      ? o(t, e)
                      : void 0
                  );
                }
              })(t)) ||
              (e && t && "number" == typeof t.length)
            ) {
              n && (t = n);
              var i = 0,
                e = function () {};
              return {
                s: e,
                n: function () {
                  return i >= t.length
                    ? { done: !0 }
                    : { done: !1, value: t[i++] };
                },
                e: function (t) {
                  throw t;
                },
                f: e,
              };
            }
            throw new TypeError(
              "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          }
          var r,
            a = !0,
            s = !1;
          return {
            s: function () {
              n = n.call(t);
            },
            n: function () {
              var t = n.next();
              return (a = t.done), t;
            },
            e: function (t) {
              (s = !0), (r = t);
            },
            f: function () {
              try {
                a || null == n.return || n.return();
              } finally {
                if (s) throw r;
              }
            },
          };
        }
        function o(t, e) {
          (null == e || e > t.length) && (e = t.length);
          for (var n = 0, i = new Array(e); n < e; n++) i[n] = t[n];
          return i;
        }
        Object.defineProperty(n, "__esModule", { value: !0 }),
          (n.default = void 0);
        var e = {
          data: function () {
            return {
              goods_list: [],
              searchKey: "",
              width: 200,
              height: 64,
              inputTop: 0,
              arrowTop: 0,
              dropScreenH: 0,
              attrData: [],
              attrIndex: -1,
              dropScreenShow: !1,
              scrollTop: 0,
              tabIndex: 0,
              isList: !1,
              drawer: !1,
              drawerH: 0,
              selectedName: "综合",
              selectH: 0,
              dropdownList: [
                { name: "综合", selected: !0 },
                { name: "价格升序", selected: !1 },
                { name: "价格降序", selected: !1 },
              ],
              attrArr: [
                { name: "新品", selectedName: "新品", isActive: !1, list: [] },
                {
                  name: "品牌",
                  selectedName: "品牌",
                  isActive: !1,
                  list: [
                    { name: "trendsetter", selected: !1 },
                    { name: "维肯（Viken）", selected: !1 },
                    { name: "搞怪猪", selected: !1 },
                  ],
                },
                {
                  name: "类型",
                  selectedName: "类型",
                  isActive: !1,
                  list: [
                    { name: "线充套装", selected: !1 },
                    { name: "单条装", selected: !1 },
                    { name: "苹果认证", selected: !1 },
                  ],
                },
                {
                  name: "适用手机",
                  selectedName: "适用手机",
                  isActive: !1,
                  list: [
                    { name: "通用", selected: !1 },
                    { name: "诺基", selected: !1 },
                  ],
                },
              ],
              productList: [],
              pageIndex: 1,
              loadding: !1,
              pullUpOn: !0,
            };
          },
          onLoad: function (e) {
            var n = this,
              i = t.getMenuButtonBoundingClientRect();
            r.getSystemInfo({
              success: function (t) {
                (n.width = i.left || t.windowWidth),
                  (n.height = i.top
                    ? i.top + i.height + 8
                    : t.statusBarHeight + 44),
                  (n.inputTop = i.top
                    ? i.top + (i.height - 30) / 2
                    : t.statusBarHeight + 7),
                  (n.arrowTop = i.top
                    ? i.top + (i.height - 32) / 2
                    : t.statusBarHeight + 6),
                  (n.searchKey = e.searchKey || ""),
                  (n.dropScreenH = (750 * n.height) / t.windowWidth + 186),
                  (n.drawerH = t.windowHeight - r.upx2px(100) - n.height);
              },
            }),
              this.init();
          },
          methods: {
            init: function () {
              var e = this;
              this.$api("goods.goods_list").then(function (t) {
                e.goods_list = t.data.list;
              });
            },
            px: function (t) {
              return r.upx2px(t) + "px";
            },
            btnDropChange: function (t) {
              var e = this,
                n = t.currentTarget.dataset.index,
                t = JSON.parse(JSON.stringify(this.attrArr[n].list));
              0 === t.length
                ? (this.btnCloseDrop(),
                  this.$set(
                    this.attrArr[n],
                    "isActive",
                    !this.attrArr[n].isActive
                  ))
                : ((this.attrData = t),
                  (this.attrIndex = n),
                  (this.dropScreenShow = !0),
                  this.$set(this.attrArr[n], "isActive", !1),
                  (this.scrollTop = 1),
                  this.$nextTick(function () {
                    e.scrollTop = 0;
                  }));
            },
            btnSelected: function (t) {
              t = t.currentTarget.dataset.index;
              this.$set(
                this.attrData[t],
                "selected",
                !this.attrData[t].selected
              );
            },
            reset: function () {
              var t,
                e = this.attrData,
                n = a(e);
              try {
                for (n.s(); !(t = n.n()).done; ) t.value.selected = !1;
              } catch (t) {
                n.e(t);
              } finally {
                n.f();
              }
              this.attrData = e;
            },
            btnCloseDrop: function () {
              var t = this;
              (this.scrollTop = 1),
                this.$nextTick(function () {
                  t.scrollTop = 0;
                }),
                (this.dropScreenShow = !1),
                (this.attrIndex = -1);
            },
            btnSure: function () {
              var t = this.attrIndex,
                e = !1,
                n = "",
                i = a(this.attrData);
              try {
                for (i.s(); !(r = i.n()).done; ) {
                  var r = r.value;
                  r.selected && ((e = !0), (n += n ? ";" + r.name : r.name));
                }
              } catch (t) {
                i.e(t);
              } finally {
                i.f();
              }
              t = this.attrArr[t];
              this.btnCloseDrop(),
                this.$set(t, "isActive", e),
                this.$set(t, "selectedName", n);
            },
            showDropdownList: function () {
              (this.selectH = 246), (this.tabIndex = 0);
            },
            hideDropdownList: function () {
              this.selectH = 0;
            },
            dropdownItem: function (t) {
              for (
                var e = t.currentTarget.dataset.index,
                  n = this.dropdownList,
                  i = 0;
                i < n.length;
                i++
              )
                n[i].selected = i === e;
              (this.dropdownList = n),
                (this.selectedName = 0 == e ? "综合" : "价格"),
                (this.selectH = 0);
            },
            screen: function (t) {
              t = t.currentTarget.dataset.index;
              this.hideDropdownList(),
                this.btnCloseDrop(),
                0 == t
                  ? this.showDropdownList()
                  : 1 == t
                  ? (this.tabIndex = 1)
                  : 2 == t
                  ? (this.isList = !this.isList)
                  : 3 == t && (this.drawer = !0);
            },
            closeDrawer: function () {
              this.drawer = !1;
            },
            back: function () {
              this.drawer ? this.closeDrawer() : r.navigateBack();
            },
            search: function () {
              r.navigateTo({ url: "../../news/search/search" });
            },
            detail: function (t) {
              t = t.currentTarget.dataset.id;
              this.$Router.push({
                path: "/pages/goods/detail/index",
                query: { id: t },
              });
            },
          },
          onReachBottom: function () {
            var t;
            this.pullUpOn &&
              ((this.loadding = !0),
              4 == this.pageIndex
                ? ((this.loadding = !1), (this.pullUpOn = !1))
                : ((t = (t = JSON.parse(
                    JSON.stringify(this.productList)
                  )).splice(0, 10)),
                  1 == this.pageIndex && (t = t.reverse()),
                  (this.productList = this.productList.concat(t)),
                  (this.pageIndex = this.pageIndex + 1),
                  (this.loadding = !1)));
          },
        };
        n.default = e;
      }).call(this, e("bc2e").default, e("543d").default);
    },
    "48b9": function (t, e, n) {
      n.r(e);
      var i,
        r = n("6417"),
        a = n("3d79");
      for (i in a)
        ["default"].indexOf(i) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return a[t];
            });
          })(i);
      n("a379");
      var s = n("f0c5"),
        r = Object(s.a)(
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
    "567ee": function (t, e, i) {
      (function (t, e) {
        var n = i("4ea4");
        i("f0a5"), n(i("66fd"));
        n = n(i("48b9"));
        (t.__webpack_require_UNI_MP_PLUGIN__ = i), e(n.default);
      }).call(this, i("bc2e").default, i("543d").createPage);
    },
    "5f44": function (t, e, n) {},
    6417: function (t, e, n) {
      n.d(e, "b", function () {
        return i;
      }),
        n.d(e, "c", function () {
          return r;
        }),
        n.d(e, "a", function () {});
      var i = function () {
          this.$createElement;
          this._self._c;
        },
        r = [];
    },
    a379: function (t, e, n) {
      var i = n("5f44");
      n.n(i).a;
    },
  },
  [["567ee", "common/runtime", "common/vendor"]],
]);
