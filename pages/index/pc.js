(global.webpackJsonp = global.webpackJsonp || []).push([
  ["pages/index/pc"],
  {
    "1d67": function (t, c, o) {
      (function (i) {
        var t = o("4ea4");
        Object.defineProperty(c, "__esModule", { value: !0 }),
          (c.default = void 0);
        var e,
          n = t(o("9523"));
        function r(i, t) {
          var e,
            n = Object.keys(i);
          return (
            Object.getOwnPropertySymbols &&
              ((e = Object.getOwnPropertySymbols(i)),
              t &&
                (e = e.filter(function (t) {
                  return Object.getOwnPropertyDescriptor(i, t).enumerable;
                })),
              n.push.apply(n, e)),
            n
          );
        }
        function a(i) {
          for (var t = 1; t < arguments.length; t++) {
            var e = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? r(Object(e), !0).forEach(function (t) {
                  (0, n.default)(i, t, e[t]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(e))
              : r(Object(e)).forEach(function (t) {
                  Object.defineProperty(
                    i,
                    t,
                    Object.getOwnPropertyDescriptor(e, t)
                  );
                });
          }
          return i;
        }
        t = {
          components: {},
          data: function () {
            return {
              next_id: 0,
              choose_index: -1,
              item2_id: 0,
              item: {},
              result: "",
              item_list: [],
              bar_title: "",
              city_id: 0,
              gfzg: {},
            };
          },
          computed: a(
            a(
              {},
              (0, o("26cb").mapState)({
                cityArea: function (t) {
                  return t.init.cityArea;
                },
                basicSet: function (t) {
                  return t.init.basicSet;
                },
              })
            ),
            {},
            {
              last_title: function () {
                var t = "",
                  i = this.item_list.length;
                return (
                  0 < i &&
                    ((t += "上一题："),
                    (t += (i = this.item_list[i - 1]).title),
                    (t += " " + i.children[i.choose_index].title)),
                  t
                );
              },
            }
          ),
          onLoad: function () {
            var t = (e = this).$Route.query;
            t.city_id
              ? (this.city_id = t.city_id)
              : (this.city_id = this.cityArea.cityId),
              this.init();
          },
          methods: {
            init: function () {
              this.get_item();
            },
            get_item: function () {
              var t = { next_id: e.next_id, city_id: this.city_id };
              this.$api("index.get_gfzg_item", t).then(function (t) {
                (e.item = t.data.item),
                  t.data.gfzg && (e.gfzg = t.data.gfzg),
                  t.data.bar_title &&
                    ((e.bar_title = t.data.bar_title),
                    i.setNavigationBarTitle({ title: t.data.bar_title }));
              });
            },
            again: function () {
              (this.next_id = 0),
                (this.result = ""),
                (this.item_list = []),
                this.get_item();
            },
            back: function () {
              var t,
                i = this.item_list.length;
              0 < i &&
                ((this.choose_index = -1),
                console.info(this.item_list),
                (t = this.item_list[i - 1]),
                (this.next_id = t.id),
                this.item_list.splice(i - 1, 1),
                this.get_item());
            },
            onShareAppMessage: function (t) {
              return {
                title: this.bar_title,
                path: "pages/index/gfzg?city_id=" + this.city_id,
              };
            },
            choose_item2: function (t) {
              this.choose_index = t;
              var i = this.item.children[t];
              1 == i.next_type
                ? ((this.next_id = i.next_id), this.get_item())
                : (this.result = i.result);
              i = this.item;
              (i.choose_index = t),
                this.item_list.push(i),
                (this.choose_index = -1);
            },
          },
        };
        c.default = t;
      }).call(this, o("543d").default);
    },
    "20fd": function (t, i, e) {
      e.d(i, "b", function () {
        return n;
      }),
        e.d(i, "c", function () {
          return r;
        }),
        e.d(i, "a", function () {});
      var n = function () {
          this.$createElement;
          var t = (this._self._c, this.item_list.length);
          this.$mp.data = Object.assign({}, { $root: { g0: t } });
        },
        r = [];
    },
    "2a60": function (t, i, e) {
      e.r(i);
      var n,
        r = e("20fd"),
        a = e("2d36");
      for (n in a)
        ["default"].indexOf(n) < 0 &&
          (function (t) {
            e.d(i, t, function () {
              return a[t];
            });
          })(n);
      e("4b27");
      var c = e("f0c5"),
        r = Object(c.a)(
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
      i.default = r.exports;
    },
    "2d36": function (t, i, e) {
      e.r(i);
      var n,
        r = e("1d67"),
        a = e.n(r);
      for (n in r)
        ["default"].indexOf(n) < 0 &&
          (function (t) {
            e.d(i, t, function () {
              return r[t];
            });
          })(n);
      i.default = a.a;
    },
    "4b27": function (t, i, e) {
      var n = e("ae5a");
      e.n(n).a;
    },
    7467: function (t, i, n) {
      (function (t, i) {
        var e = n("4ea4");
        n("f0a5"), e(n("66fd"));
        e = e(n("2a60"));
        (t.__webpack_require_UNI_MP_PLUGIN__ = n), i(e.default);
      }).call(this, n("bc2e").default, n("543d").createPage);
    },
    ae5a: function (t, i, e) {},
  },
  [["7467", "common/runtime", "common/vendor"]],
]);
