(global.webpackJsonp = global.webpackJsonp || []).push([
  ["components/wk-city-area2/index"],
  {
    3758: function (i, t, e) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0),
        e("26cb");
      e = {
        data: function () {
          return {
            showPicker: !1,
            list: [],
            cityList: [],
            areaList: [],
            buildAreaList: [],
            pickerValue: [0, 0],
          };
        },
        created: function () {
          this.init();
        },
        props: {},
        watch: {
          stwIndex: function (i) {
            console.info(i), (this.pickerValue = i);
          },
        },
        methods: {
          init: function () {
            var t = this;
            this.$api("index.cityAreaList2", {}).then(function (i) {
              i = i.data.cityList;
              (t.cityList = i),
                (t.areaList = t.cityList[t.pickerValue[0]].areaList);
            });
          },
          show: function () {
            var i = this;
            setTimeout(function () {
              i.showPicker = !0;
            }, 0);
          },
          maskClick: function () {
            this.pickerCancel();
          },
          pickerCancel: function () {
            (this.showPicker = !1), this.$emit("onCancel");
          },
          pickerConfirm: function (i) {
            this.showPicker = !1;
            var t = this.cityList[this.pickerValue[0]],
              e = this.areaList[this.pickerValue[1]],
              e = {
                name: t.city_name + "-" + e.name,
                city_id: t.id,
                area_id: e.id,
              };
            console.info(e), this.$emit("onConfirm", e);
          },
          showPickerView: function () {
            this.showPicker = !0;
          },
          pickerChange: function (i) {
            i = i.detail.value;
            this.pickerValue[0] !== i[0]
              ? ((i[1] = 0),
                (i[2] = 0),
                (this.areaList = this.cityList[i[0]].areaList))
              : (this.pickerValue[1], i[1]),
              (this.pickerValue = i);
          },
        },
      };
      t.default = e;
    },
    7164: function (i, t, e) {},
    "7b1f": function (i, t, e) {
      var n = e("7164");
      e.n(n).a;
    },
    "7d7a": function (i, t, e) {
      e.r(t);
      var n,
        c = e("3758"),
        a = e.n(c);
      for (n in c)
        ["default"].indexOf(n) < 0 &&
          (function (i) {
            e.d(t, i, function () {
              return c[i];
            });
          })(n);
      t.default = a.a;
    },
    8605: function (i, t, e) {
      e.d(t, "b", function () {
        return n;
      }),
        e.d(t, "c", function () {
          return c;
        }),
        e.d(t, "a", function () {});
      var n = function () {
          this.$createElement;
          this._self._c;
        },
        c = [];
    },
    ee2a: function (i, t, e) {
      e.r(t);
      var n,
        c = e("8605"),
        a = e("7d7a");
      for (n in a)
        ["default"].indexOf(n) < 0 &&
          (function (i) {
            e.d(t, i, function () {
              return a[i];
            });
          })(n);
      e("7b1f");
      var o = e("f0c5"),
        c = Object(o.a)(
          a.default,
          c.b,
          c.c,
          !1,
          null,
          null,
          null,
          !1,
          c.a,
          void 0
        );
      t.default = c.exports;
    },
  },
]),
  (global.webpackJsonp = global.webpackJsonp || []).push([
    "components/wk-city-area2/index-create-component",
    {
      "components/wk-city-area2/index-create-component": function (i, t, e) {
        e("543d").createComponent(e("ee2a"));
      },
    },
    [["components/wk-city-area2/index-create-component"]],
  ]);
