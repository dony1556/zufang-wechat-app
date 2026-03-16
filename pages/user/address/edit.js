require("../common/vendor.js"),
  (global.webpackJsonp = global.webpackJsonp || []).push([
    ["pages/user/address/edit"],
    {
      2065: function (e, t, a) {},
      "3db2": function (e, t, a) {
        var s = a("2065");
        a.n(s).a;
      },
      "5f25": function (e, t, a) {
        a.r(t);
        var s,
          d = a("fc85"),
          n = a.n(d);
        for (s in d)
          ["default"].indexOf(s) < 0 &&
            (function (e) {
              a.d(t, e, function () {
                return d[e];
              });
            })(s);
        t.default = n.a;
      },
      c690: function (e, t, a) {
        a.d(t, "b", function () {
          return s;
        }),
          a.d(t, "c", function () {
            return d;
          }),
          a.d(t, "a", function () {});
        var s = function () {
            this.$createElement;
            this._self._c;
          },
          d = [];
      },
      c75e: function (e, t, s) {
        (function (e, t) {
          var a = s("4ea4");
          s("f0a5"), a(s("66fd"));
          a = a(s("fc1c"));
          (e.__webpack_require_UNI_MP_PLUGIN__ = s), t(a.default);
        }).call(this, s("bc2e").default, s("543d").createPage);
      },
      fc1c: function (e, t, a) {
        a.r(t);
        var s,
          d = a("c690"),
          n = a("5f25");
        for (s in n)
          ["default"].indexOf(s) < 0 &&
            (function (e) {
              a.d(t, e, function () {
                return n[e];
              });
            })(s);
        a("3db2");
        var i = a("f0c5"),
          d = Object(i.a)(
            n.default,
            d.b,
            d.c,
            !1,
            null,
            null,
            null,
            !1,
            d.a,
            void 0
          );
        t.default = d.exports;
      },
      fc85: function (e, a, s) {
        (function (t) {
          Object.defineProperty(a, "__esModule", { value: !0 }),
            (a.default = void 0);
          var e = {
            components: {
              shPicker: function () {
                s.e("pages/user/address/children/shopro-picker")
                  .then(
                    function () {
                      return resolve(s("fcfd"));
                    }.bind(null, s)
                  )
                  .catch(s.oe);
              },
            },
            data: function () {
              return {
                addressData: {
                  id: 0,
                  name: "",
                  phone: "",
                  area_code: "",
                  address: "",
                  is_default: !1,
                },
                area_text: "",
                cityPickerValueDefault: [0, 0, 0],
                pickerData: {},
                from: "",
              };
            },
            computed: {},
            onLoad: function () {
              this.init();
              var e = this.$Route.query.id;
              (this.addressData.id = this.$Route.query.id),
                0 != this.addressData.id && this.getAddressInfo(),
                t.setNavigationBarTitle({
                  title: 0 != e ? "编辑收货地址" : "添加收货地址",
                }),
                this.$Route.query.from && (this.from = this.$Route.query.from);
            },
            methods: {
              init: function () {
                return Promise.all([]);
              },
              onSwitch: function () {
                this.addressData.is_default = !this.addressData.is_default;
              },
              selCity: function () {
                this.$refs.shoproCityPicker.show();
              },
              editAddress: function () {
                var t = this;
                t.$api(
                  "address.address_edit",
                  {
                    id: this.addressData.id,
                    name: this.addressData.name,
                    phone: this.addressData.phone,
                    area_code: this.addressData.area_code,
                    address: this.addressData.address,
                    is_default: this.addressData.is_default,
                  },
                  "post"
                ).then(function (e) {
                  0 == e.errno && (t.from, t.$Router.back());
                });
              },
              getAddressInfo: function () {
                var a = this;
                this.$api("address.detail", { id: this.addressData.id }).then(
                  function (e) {
                    var t;
                    0 == e.errno &&
                      ((t = e.data.address),
                      (a.addressData = t),
                      (e = ""
                        .concat(t.province_name, "-")
                        .concat(t.city_name, "-")
                        .concat(t.area_name)),
                      (t = "1" === t.is_default),
                      (a.area_text = e),
                      (a.addressData.is_default = t));
                  }
                );
              },
              onConfirm: function (e) {
                (this.addressData.area_code = e.cityCode),
                  (this.area_text = e.label);
              },
              onCancel: function (e) {
                (this.addressData.area_code = e.cityCode),
                  (this.area_text = e.label);
              },
              deleteAddress: function () {
                this.$api("address.address_del", {
                  id: this.addressData.id,
                }).then(function (e) {
                  0 === e.errno &&
                    t.showToast({
                      title: "删除成功",
                      icon: "none",
                      success: function () {
                        t.navigateBack({ delta: 1 });
                      },
                    });
                });
              },
            },
          };
          a.default = e;
        }).call(this, s("543d").default);
      },
    },
    [["c75e", "common/runtime", "common/vendor"]],
  ]);
