(global.webpackJsonp = global.webpackJsonp || []).push([
  ["pages/goods/detail/children/sh-serve"],
  {
    2068: function (e, n, t) {
      t.d(n, "b", function () {
        return o;
      }),
        t.d(n, "c", function () {
          return a;
        }),
        t.d(n, "a", function () {});
      var o = function () {
          this.$createElement;
          this._self._c;
        },
        a = [];
    },
    "2ae3": function (e, n, t) {
      t.r(n);
      var o,
        a = t("7b94"),
        i = t.n(a);
      for (o in a)
        ["default"].indexOf(o) < 0 &&
          (function (e) {
            t.d(n, e, function () {
              return a[e];
            });
          })(o);
      n.default = i.a;
    },
    3234: function (e, n, t) {
      t.r(n);
      var o,
        a = t("2068"),
        i = t("2ae3");
      for (o in i)
        ["default"].indexOf(o) < 0 &&
          (function (e) {
            t.d(n, e, function () {
              return i[e];
            });
          })(o);
      t("eb94");
      var c = t("f0c5"),
        a = Object(c.a)(
          i.default,
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
      n.default = a.exports;
    },
    5190: function (e, n, t) {},
    "7b94": function (e, n, t) {
      Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.default = void 0),
        (n.default = {
          components: {},
          data: function () {
            return {};
          },
          props: { serveList: {}, value: {} },
          computed: {
            showModal: {
              get: function () {
                return this.value;
              },
              set: function (e) {
                this.$emit("input", e);
              },
            },
          },
          methods: {
            hideModal: function () {
              this.showModal = !1;
            },
            onServe: function () {
              this.showModal = !0;
            },
          },
        });
    },
    eb94: function (e, n, t) {
      var o = t("5190");
      t.n(o).a;
    },
  },
]),
  (global.webpackJsonp = global.webpackJsonp || []).push([
    "pages/goods/detail/children/sh-serve-create-component",
    {
      "pages/goods/detail/children/sh-serve-create-component": function (
        e,
        n,
        t
      ) {
        t("543d").createComponent(t("3234"));
      },
    },
    [["pages/goods/detail/children/sh-serve-create-component"]],
  ]);
