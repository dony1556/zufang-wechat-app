require("../common/vendor.js"),
  (global.webpackJsonp = global.webpackJsonp || []).push([
    ["pages/user/pub/community-select"],
    {
      3331: function (i, t, e) {
        e.r(t);
        var n,
          a = e("a710"),
          s = e.n(a);
        for (n in a)
          ["default"].indexOf(n) < 0 &&
            (function (i) {
              e.d(t, i, function () {
                return a[i];
              });
            })(n);
        t.default = s.a;
      },
      "74db": function (i, t, e) {
        e.d(t, "b", function () {
          return a;
        }),
          e.d(t, "c", function () {
            return s;
          }),
          e.d(t, "a", function () {
            return n;
          });
        var n = {
            wkLoginModal: function () {
              return e
                .e("components/wk-login-modal/index")
                .then(e.bind(null, "5198"));
            },
            wkSkeletons: function () {
              return e
                .e("components/wk-skeletons/index")
                .then(e.bind(null, "d3c1"));
            },
          },
          a = function () {
            this.$createElement;
            var i = (this._self._c, 0 == this.list.length && this.key);
            this.$mp.data = Object.assign({}, { $root: { g0: i } });
          },
          s = [];
      },
      "8e94": function (i, t, n) {
        (function (i, t) {
          var e = n("4ea4");
          n("f0a5"), e(n("66fd"));
          e = e(n("b05b"));
          (i.__webpack_require_UNI_MP_PLUGIN__ = n), t(e.default);
        }).call(this, n("bc2e").default, n("543d").createPage);
      },
      a710: function (i, t, e) {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = void 0),
          e("26cb");
        e = {
          components: {},
          data: function () {
            return {
              cityList: [],
              areaList: [],
              buildareaList: [],
              list: [],
              key: "",
              page: 1,
              isLoading: 1,
              choose_name: "不限",
              choose_name2: "不限",
              selectshow: !1,
              city_id: 0,
              area_id: 0,
              buildarea_id: 0,
              city_id2: 0,
              area_id2: 0,
              buildarea_id2: 0,
            };
          },
          computed: {},
          onLoad: function () {
            this.getCommunityInit();
          },
          onShow: function () {
            this.getCommunityList();
          },
          onReady: function () {},
          methods: {
            choose: function (i) {
              i = { id: i.id, name: i.name };
              this.$store.commit("pubCommunity", i), this.$Router.back();
            },
            cancel: function () {
              this.$Router.back();
            },
            chooseNo: function () {
              var i = { id: 0, name: this.key };
              this.$store.commit("pubCommunity", i), this.$Router.back();
            },
            navToCommunityPub: function () {
              this.$Router.push({ path: "/pages/community/pub", query: {} });
            },
            confirm: function () {
              var n = this;
              (this.selectshow = !1),
                (this.city_id2 = JSON.parse(JSON.stringify(this.city_id))),
                (this.area_id2 = JSON.parse(JSON.stringify(this.area_id))),
                (this.buildarea_id2 = JSON.parse(
                  JSON.stringify(this.buildarea_id)
                )),
                0 < this.buildarea_id
                  ? this.buildareaList.forEach(function (i, t, e) {
                      i.id == n.buildarea_id && (n.choose_name = i.name);
                    })
                  : 0 < this.area_id
                  ? this.areaList.forEach(function (i, t, e) {
                      i.id == n.area_id && (n.choose_name = i.name);
                    })
                  : 0 < this.city_id
                  ? this.cityList.forEach(function (i, t, e) {
                      i.id == n.city_id && (n.choose_name = i.city_name);
                    })
                  : (n.choose_name = "不限"),
                (this.choose_name2 = JSON.parse(
                  JSON.stringify(this.choose_name)
                )),
                (this.page = 1),
                this.getCommunityList();
            },
            close: function () {
              (this.city_id = this.city_id2),
                (this.area_id = this.area_id2),
                (this.buildarea_id = JSON.parse(
                  JSON.stringify(this.buildarea_id2)
                )),
                (this.choose_name = JSON.parse(
                  JSON.stringify(this.choose_name2)
                )),
                (this.selectshow = !1);
            },
            clear: function () {
              (this.city_id = 0),
                (this.area_id = 0),
                (this.buildarea_id = 0),
                (this.choose_name = "不限");
            },
            open_select: function () {
              this.selectshow = !0;
            },
            selectCity: function (i) {
              -1 == i
                ? (this.city_id = 0)
                : ((i = this.cityList[i]),
                  (this.city_id = i.id),
                  (this.areaList = i.areaList)),
                (this.area_id = 0),
                (this.buildarea_id = 0);
            },
            selectArea: function (i) {
              -1 == i
                ? (this.area_id = 0)
                : ((i = this.areaList[i]),
                  (this.area_id = i.id),
                  (this.area = i),
                  (this.buildareaList = i.buildareaList)),
                (this.buildarea_id = 0);
            },
            selectBuildarea: function (i) {
              this.buildarea_id = -1 == i ? 0 : this.buildareaList[i].id;
            },
            inputChange: function (i) {
              i = i.detail.value;
              (this.key = i), (this.page = 1), this.getCommunityList();
            },
            onReachBottom: function () {
              (this.page = this.page + 1), this.getCommunityList();
            },
            getCommunityInit: function () {
              var t = this;
              t.$api("index.community_select_init", {}).then(function (i) {
                0 == i.errno && (t.cityList = i.data.cityList);
              });
            },
            getCommunityList: function () {
              var t = this;
              t.$api("community.getCommunityList", {
                city_id: t.city_id,
                area_id: t.area_id,
                buildarea_id: t.buildarea_id,
                key: t.key,
                page: t.page,
              }).then(function (i) {
                0 == i.errno &&
                  ((t.isLoading = 0),
                  (i = i.data.list),
                  1 == t.page
                    ? (t.list = i)
                    : 0 < i.length
                    ? (t.list = t.list.concat(i))
                    : (t.page = t.page - 1));
              });
            },
            chooseCity: function () {
              (this.page = 1), this.getCommunityList();
            },
          },
        };
        t.default = e;
      },
      b05b: function (i, t, e) {
        e.r(t);
        var n,
          a = e("74db"),
          s = e("3331");
        for (n in s)
          ["default"].indexOf(n) < 0 &&
            (function (i) {
              e.d(t, i, function () {
                return s[i];
              });
            })(n);
        e("df9d");
        var o = e("f0c5"),
          a = Object(o.a)(
            s.default,
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
        t.default = a.exports;
      },
      de35: function (i, t, e) {},
      df9d: function (i, t, e) {
        var n = e("de35");
        e.n(n).a;
      },
    },
    [["8e94", "common/runtime", "common/vendor"]],
  ]);
