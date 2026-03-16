(global.webpackJsonp = global.webpackJsonp || []).push([
  ["pages/zs/pc/detail"],
  {
    "0f06": function (t, e, i) {
      var n = i("9bf0");
      i.n(n).a;
    },
    3722: function (t, e, n) {
      (function (t, e) {
        var i = n("4ea4");
        n("f0a5"), i(n("66fd"));
        i = i(n("4e3b"));
        (t.__webpack_require_UNI_MP_PLUGIN__ = n), e(i.default);
      }).call(this, n("bc2e").default, n("543d").createPage);
    },
    "4e3b": function (t, e, i) {
      i.r(e);
      var n,
        r = i("f198"),
        c = i("53aa");
      for (n in c)
        ["default"].indexOf(n) < 0 &&
          (function (t) {
            i.d(e, t, function () {
              return c[t];
            });
          })(n);
      i("0f06");
      var o = i("f0c5"),
        r = Object(o.a)(
          c.default,
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
    "53aa": function (t, e, i) {
      i.r(e);
      var n,
        r = i("9b54"),
        c = i.n(r);
      for (n in r)
        ["default"].indexOf(n) < 0 &&
          (function (t) {
            i.d(e, t, function () {
              return r[t];
            });
          })(n);
      e.default = c.a;
    },
    "9b54": function (t, o, s) {
      (function (e) {
        var t = s("4ea4");
        Object.defineProperty(o, "__esModule", { value: !0 }),
          (o.default = void 0);
        var i,
          n = t(s("9523"));
        function r(e, t) {
          var i,
            n = Object.keys(e);
          return (
            Object.getOwnPropertySymbols &&
              ((i = Object.getOwnPropertySymbols(e)),
              t &&
                (i = i.filter(function (t) {
                  return Object.getOwnPropertyDescriptor(e, t).enumerable;
                })),
              n.push.apply(n, i)),
            n
          );
        }
        function c(e) {
          for (var t = 1; t < arguments.length; t++) {
            var i = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? r(Object(i), !0).forEach(function (t) {
                  (0, n.default)(e, t, i[t]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i))
              : r(Object(i)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(i, t)
                  );
                });
          }
          return e;
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
              pc: {},
            };
          },
          computed: c(
            c(
              {},
              (0, s("26cb").mapState)({
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
                  e = this.item_list.length;
                return (
                  0 < e &&
                    ((t += "上一题："),
                    (t += (e = this.item_list[e - 1]).title),
                    (t += " " + e.children[e.choose_index].title)),
                  t
                );
              },
            }
          ),
          onLoad: function () {
            var t = (i = this).$Route.query;
            (this.id = t.id), this.init();
          },
          methods: {
            init: function () {
              this.get_item();
            },
            get_item: function () {
              var t = { next_id: i.next_id, id: this.id };
              this.$api("index.get_pc_item", t).then(function (t) {
                (i.item = t.data.item),
                  t.data.pc &&
                    ((i.pc = t.data.pc),
                    e.setNavigationBarTitle({ title: t.data.pc.title }));
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
                e = this.item_list.length;
              0 < e &&
                ((this.choose_index = -1),
                console.info(this.item_list),
                (t = this.item_list[e - 1]),
                (this.next_id = t.id),
                this.item_list.splice(e - 1, 1),
                this.get_item());
            },
            onShareAppMessage: function (t) {
              return {
                title: this.bar_title,
                path: "pages/zs/pc/index?id=" + this.id,
              };
            },
            choose_item2: function (t) {
              this.choose_index = t;
              var e = this.item.children[t];
              1 == e.next_type
                ? ((this.next_id = e.next_id), this.get_item())
                : (this.result = e.result);
              e = this.item;
              (e.choose_index = t),
                this.item_list.push(e),
                (this.choose_index = -1);
            },
          },
        };
        o.default = t;
      }).call(this, s("543d").default);
    },
    "9bf0": function (t, e, i) {},
    f198: function (t, e, i) {
      i.d(e, "b", function () {
        return n;
      }),
        i.d(e, "c", function () {
          return r;
        }),
        i.d(e, "a", function () {});
      var n = function () {
          this.$createElement;
          var t = (this._self._c, this.item_list.length);
          this.$mp.data = Object.assign({}, { $root: { g0: t } });
        },
        r = [];
    },
  },
  [["3722", "common/runtime", "common/vendor"]],
]);
