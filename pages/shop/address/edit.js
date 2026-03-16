(global.webpackJsonp = global.webpackJsonp || []).push([
  ["pages/shop/address/edit"],
  {
    "0205": function (t, e, n) {},
    "082a": function (t, e, n) {
      n.d(e, "b", function () {
        return a;
      }),
        n.d(e, "c", function () {
          return i;
        }),
        n.d(e, "a", function () {});
      var a = function () {
          this.$createElement;
          this._self._c;
        },
        i = [];
    },
    "5fdf": function (t, e, n) {
      var a = n("0205");
      n.n(a).a;
    },
    7974: function (t, e, a) {
      (function (t, e) {
        var n = a("4ea4");
        a("f0a5"), n(a("66fd"));
        n = n(a("d871"));
        (t.__webpack_require_UNI_MP_PLUGIN__ = a), e(n.default);
      }).call(this, a("bc2e").default, a("543d").createPage);
    },
    aca1: function (t, e, n) {
      (function (n) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.default = void 0);
        var t = {
          components: {},
          data: function () {
            return {
              form: {
                id: 0,
                name: "",
                phone: "",
                area_code: "",
                address: "",
                is_default: 0,
              },
              default_list: [
                { value: 1, name: "是" },
                { value: 0, name: "否" },
              ],
              pickerData: {},
              pcaArray: [],
              pcaText: "",
            };
          },
          computed: {},
          onLoad: function () {
            (this.form.id = this.$Route.query.id),
              this.init(),
              n.setNavigationBarTitle({ title: "编辑收货地址" });
          },
          methods: {
            init: function () {
              this.getAddressInfo();
            },
            selectCity: function (t) {
              t = t.detail.value;
              (this.pcaArray = t),
                (this.pcaText = t[0] + "-" + t[1] + "-" + t[2]);
            },
            getAddressInfo: function () {
              var e = this,
                n = this;
              this.$api("address.address_edit", { id: n.form.id }).then(
                function (t) {
                  0 != t.errno ||
                    ((t = t.data.address) &&
                      ((t = [(n.form = t).province, t.city, t.district]),
                      (e.pcaArray = t),
                      (e.pcaText = t[0] + "-" + t[1] + "-" + t[2])));
                }
              );
            },
            select_default: function (t) {
              this.form.is_default = t;
            },
            deleteAddress: function () {
              var e = this;
              n.showModal({
                title: "提示",
                content: "确定要删除吗? ",
                success: function (t) {
                  t.confirm &&
                    e
                      .$api("address.address_del", { id: e.form.id })
                      .then(function (t) {
                        0 === t.errno &&
                          n.showToast({
                            title: "删除成功",
                            icon: "none",
                            success: function () {
                              e.init();
                            },
                          });
                      });
                },
              });
            },
            formSubmit: function (t) {
              var e = this,
                n = this.form;
              n.name
                ? n.phone
                  ? n.address
                    ? 0 != this.pcaArray.length
                      ? ((n = {
                          id: n.id,
                          name: n.name,
                          phone: n.phone,
                          address: n.address,
                          province: this.pcaArray[0],
                          city: this.pcaArray[1],
                          district: this.pcaArray[2],
                          is_default: n.is_default,
                        }),
                        e
                          .$api("address.address_edit", n, "post")
                          .then(function (t) {
                            0 == t.errno &&
                              (e.$tools.toast("提交成功"),
                              setTimeout(function () {
                                e.$Router.back(1);
                              }, 500));
                          }))
                      : e.$tools.toast("请选择省市区")
                    : e.$tools.toast("请填写详细地址")
                  : e.$tools.toast("请填写联系电话")
                : e.$tools.toast("请填写联系人");
            },
          },
        };
        e.default = t;
      }).call(this, n("543d").default);
    },
    d871: function (t, e, n) {
      n.r(e);
      var a,
        i = n("082a"),
        o = n("f3d3");
      for (a in o)
        ["default"].indexOf(a) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return o[t];
            });
          })(a);
      n("5fdf");
      var s = n("f0c5"),
        i = Object(s.a)(
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
      e.default = i.exports;
    },
    f3d3: function (t, e, n) {
      n.r(e);
      var a,
        i = n("aca1"),
        o = n.n(i);
      for (a in i)
        ["default"].indexOf(a) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return i[t];
            });
          })(a);
      e.default = o.a;
    },
  },
  [["7974", "common/runtime", "common/vendor"]],
]);
