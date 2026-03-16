(global.webpackJsonp = global.webpackJsonp || []).push([
  ["pages/order/refund"],
  {
    "274e": function (t, n, e) {
      e.r(n);
      var i,
        a = e("a255"),
        o = e.n(a);
      for (i in a)
        ["default"].indexOf(i) < 0 &&
          (function (t) {
            e.d(n, t, function () {
              return a[t];
            });
          })(i);
      n.default = o.a;
    },
    "4ac8": function (t, n, e) {
      e.r(n);
      var i,
        a = e("818d"),
        o = e("274e");
      for (i in o)
        ["default"].indexOf(i) < 0 &&
          (function (t) {
            e.d(n, t, function () {
              return o[t];
            });
          })(i);
      e("9616");
      var c = e("f0c5"),
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
      n.default = a.exports;
    },
    "818d": function (t, n, e) {
      e.d(n, "b", function () {
        return i;
      }),
        e.d(n, "c", function () {
          return a;
        }),
        e.d(n, "a", function () {});
      var i = function () {
          this.$createElement;
          var t = (this._self._c, this.imgList.length);
          this.$mp.data = Object.assign({}, { $root: { g0: t } });
        },
        a = [];
    },
    9616: function (t, n, e) {
      var i = e("eb97");
      e.n(i).a;
    },
    "99ca": function (t, n, i) {
      (function (t, n) {
        var e = i("4ea4");
        i("f0a5"), e(i("66fd"));
        e = e(i("4ac8"));
        (t.__webpack_require_UNI_MP_PLUGIN__ = i), n(e.default);
      }).call(this, i("bc2e").default, i("543d").createPage);
    },
    a255: function (t, e, n) {
      (function (t) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.default = void 0);
        var n = {
          components: {},
          data: function () {
            return {
              showModal: !1,
              imgList: [],
              modalDetail: {},
              goodsState: {
                title: "货物状态",
                list: [
                  { id: 1, val: "已收到货" },
                  { id: 2, val: "未收到货" },
                ],
              },
              refundList: {
                title: "退款原因",
                list: [
                  { id: 1, val: "卖家发错货了" },
                  { id: 2, val: "退运费" },
                  { id: 3, val: "大小/重量于商品描述不符" },
                  { id: 4, val: "生产日期、保质期与商品不符" },
                  { id: 5, val: "质量问题" },
                ],
              },
            };
          },
          computed: {},
          methods: {
            chooseImg: function () {
              var n = this;
              n.$tools.chooseImage(1).then(function (t) {
                n.imgList.push(t);
              });
            },
            DelImg: function (n) {
              var e = this;
              t.showModal({
                title: "删除照片",
                content: "确定要删除这张照片么？",
                cancelText: "取消",
                confirmText: "删除",
                success: function (t) {
                  t.confirm && e.imgList.splice(n, 1);
                },
              });
            },
            onSel: function (t) {
              switch (t) {
                case 1:
                  this.modalDetail = this.goodsState;
                  break;
                case 2:
                  this.modalDetail = this.refundList;
              }
              this.showModal = !0;
            },
          },
        };
        e.default = n;
      }).call(this, n("543d").default);
    },
    eb97: function (t, n, e) {},
  },
  [["99ca", "common/runtime", "common/vendor"]],
]);
