require("./common/vendor.js"),
  (global.webpackJsonp = global.webpackJsonp || []).push([
    ["pages/public/faq"],
    {
      "13ca": function (t, a, n) {
        n.r(a);
        var e,
          i = n("6c36"),
          o = n.n(i);
        for (e in i)
          ["default"].indexOf(e) < 0 &&
            (function (t) {
              n.d(a, t, function () {
                return i[t];
              });
            })(e);
        a.default = o.a;
      },
      "454d": function (t, a, n) {
        n.r(a);
        var e,
          i = n("ba84"),
          o = n("13ca");
        for (e in o)
          ["default"].indexOf(e) < 0 &&
            (function (t) {
              n.d(a, t, function () {
                return o[t];
              });
            })(e);
        n("f632");
        var c = n("f0c5"),
          i = Object(c.a)(
            o.default,
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
        a.default = i.exports;
      },
      6898: function (t, a, e) {
        (function (t, a) {
          var n = e("4ea4");
          e("f0a5"), n(e("66fd"));
          n = n(e("454d"));
          (t.__webpack_require_UNI_MP_PLUGIN__ = e), a(n.default);
        }).call(this, e("bc2e").default, e("543d").createPage);
      },
      "6c36": function (t, a, n) {
        var e = n("4ea4");
        Object.defineProperty(a, "__esModule", { value: !0 }),
          (a.default = void 0);
        var i = e(n("448a")),
          n = {
            components: {},
            data: function () {
              return {
                faqList: [],
                loadStatus: "",
                currentPage: 1,
                lastPage: 0,
              };
            },
            computed: {},
            onLoad: function () {
              this.getFaqList();
            },
            methods: {
              onProblem: function (t) {
                this.faqList[t].checked
                  ? this.$set(this.faqList[t], "checked", !1)
                  : this.$set(this.faqList[t], "checked", !0);
              },
              getFaqList: function () {
                var a = this;
                (a.loadStatus = "loading"),
                  a
                    .$api("content.problem_list", { page: a.currentPage })
                    .then(function (t) {
                      0 === t.errno &&
                        (t.data.list.forEach(function (t, a) {
                          t.indexNum = (a + 1).toString().padStart(2, "0");
                        }),
                        (a.faqList = [].concat(
                          (0, i.default)(a.faqList),
                          (0, i.default)(t.data.list)
                        )),
                        (a.lastPage = t.data.last_page),
                        a.currentPage < t.data.last_page
                          ? (a.loadStatus = "")
                          : (a.loadStatus = "over"));
                    });
              },
            },
          };
        a.default = n;
      },
      b5a9: function (t, a, n) {},
      ba84: function (t, a, n) {
        n.d(a, "b", function () {
          return e;
        }),
          n.d(a, "c", function () {
            return i;
          }),
          n.d(a, "a", function () {});
        var e = function () {
            this.$createElement;
            var t = (this._self._c, this.faqList.length);
            this.$mp.data = Object.assign({}, { $root: { g0: t } });
          },
          i = [];
      },
      f632: function (t, a, n) {
        var e = n("b5a9");
        n.n(e).a;
      },
    },
    [["6898", "common/runtime", "common/vendor"]],
  ]);
