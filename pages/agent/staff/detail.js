(global.webpackJsonp = global.webpackJsonp || []).push([
  ["pages/agent/staff/detail"],
  {
    "25c8": function (t, e, n) {
      (function (t, e) {
        var o = n("4ea4");
        n("f0a5"), o(n("66fd"));
        o = o(n("fcbc0"));
        (t.__webpack_require_UNI_MP_PLUGIN__ = n), e(o.default);
      }).call(this, n("bc2e").default, n("543d").createPage);
    },
    "42de": function (t, e, o) {
      o.d(e, "b", function () {
        return n;
      }),
        o.d(e, "c", function () {
          return i;
        }),
        o.d(e, "a", function () {});
      var n = function () {
          this.$createElement;
          this._self._c;
        },
        i = [];
    },
    6372: function (t, e, o) {
      (function (n) {
        var t = o("4ea4");
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.default = void 0);
        var i = t(o("9523"));
        function a(e, t) {
          var o,
            n = Object.keys(e);
          return (
            Object.getOwnPropertySymbols &&
              ((o = Object.getOwnPropertySymbols(e)),
              t &&
                (o = o.filter(function (t) {
                  return Object.getOwnPropertyDescriptor(e, t).enumerable;
                })),
              n.push.apply(n, o)),
            n
          );
        }
        t = {
          data: function () {
            return {
              id: 0,
              agent: {},
              room: {},
              store: {},
              check_remark: "",
              role_list: [
                { id: 1, name: "经理" },
                { id: 2, name: "服务员" },
              ],
              status_list: [
                { id: 0, name: "禁用" },
                { id: 1, name: "正常" },
              ],
            };
          },
          onLoad: function (t) {},
          onShow: function () {
            (this.id = this.$Route.query.id), this.init();
          },
          computed: (function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var o = null != arguments[t] ? arguments[t] : {};
              t % 2
                ? a(Object(o), !0).forEach(function (t) {
                    (0, i.default)(e, t, o[t]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    e,
                    Object.getOwnPropertyDescriptors(o)
                  )
                : a(Object(o)).forEach(function (t) {
                    Object.defineProperty(
                      e,
                      t,
                      Object.getOwnPropertyDescriptor(o, t)
                    );
                  });
            }
            return e;
          })(
            {},
            (0, o("26cb").mapState)({
              basicSet: function (t) {
                return t.init.basicSet;
              },
            })
          ),
          methods: {
            init: function () {
              this.getAgentDetail();
            },
            getAgentDetail: function () {
              var e = this;
              this.$api("agent.agent_detail2", { id: e.id }).then(function (t) {
                t = t.data.agent;
                e.agent = t;
              });
            },
            handleAgree: function () {
              var e = this;
              n.showModal({
                title: "提示",
                content: "确认审核通过吗？",
                success: function (t) {
                  t.confirm
                    ? (n.showLoading({ title: "加载中" }),
                      e
                        .$api("agent.agent_agree", { id: e.id }, "post")
                        .then(function (t) {
                          n.hideLoading(),
                            0 == t.errno
                              ? 0 == t.data.code
                                ? (e.$tools.toast("操作成功"),
                                  setTimeout(function () {
                                    e.$Router.back();
                                  }, 800))
                                : e.$tools.toast(t.data.msg)
                              : e.$tools.toast("操作异常");
                        }))
                    : t.cancel && console.log("用户点击取消");
                },
              });
            },
            handleRefuse: function () {
              var e = this;
              this.check_remark
                ? n.showModal({
                    title: "提示",
                    content: "确认审核通过吗？",
                    success: function (t) {
                      t.confirm
                        ? (n.showLoading({ title: "加载中" }),
                          e
                            .$api(
                              "agent.agent_refuse",
                              { id: e.id, check_remark: e.check_remark },
                              "post"
                            )
                            .then(function (t) {
                              n.hideLoading(),
                                0 == t.errno
                                  ? 0 == t.data.code
                                    ? (e.$tools.toast("操作成功"),
                                      setTimeout(function () {
                                        e.$Router.back();
                                      }, 800))
                                    : e.$tools.toast(t.data.msg)
                                  : e.$tools.toast("操作异常");
                            }))
                        : t.cancel && console.log("用户点击取消");
                    },
                  })
                : e.$tools.toast("请填写审批备注");
            },
            handleDelete: function () {
              var e = this;
              n.showModal({
                title: "提示",
                content: "确认删除？",
                success: function (t) {
                  t.confirm
                    ? (n.showLoading({ title: "加载中" }),
                      e
                        .$api("agent.agent_delete", { id: e.id }, "post")
                        .then(function (t) {
                          n.hideLoading(),
                            0 == t.errno
                              ? 0 == t.data.code
                                ? (e.$tools.toast("删除成功"),
                                  setTimeout(function () {
                                    e.$Router.back();
                                  }, 800))
                                : e.$tools.toast(t.data.msg)
                              : e.$tools.toast("删除异常");
                        }))
                    : t.cancel && console.log("用户点击取消");
                },
              });
            },
            handleStatus: function () {
              var e = this;
              n.showActionSheet({
                itemList: ["禁用", "正常"],
                success: function (t) {
                  t = e.status_list[t.tapIndex].id;
                  n.showLoading({ title: "加载中" }),
                    e
                      .$api(
                        "agent.change_status",
                        { id: e.id, status: t },
                        "post"
                      )
                      .then(function (t) {
                        n.hideLoading(),
                          0 == t.errno
                            ? 0 == t.data.code
                              ? (e.$tools.toast("设置成功"), e.init())
                              : e.$tools.toast(t.data.msg)
                            : e.$tools.toast("设置异常");
                      });
                },
                fail: function (t) {
                  console.log(t.errMsg);
                },
              });
            },
            handleRole: function () {
              var e = this;
              n.showActionSheet({
                itemList: ["经理", "员工"],
                success: function (t) {
                  t = e.role_list[t.tapIndex].id;
                  n.showLoading({ title: "加载中" }),
                    e
                      .$api("agent.change_role", { id: e.id, role: t }, "post")
                      .then(function (t) {
                        n.hideLoading(),
                          0 == t.errno
                            ? 0 == t.data.code
                              ? (e.$tools.toast("设置成功"), e.init())
                              : e.$tools.toast(t.data.msg)
                            : e.$tools.toast("设置异常");
                      });
                },
                fail: function (t) {
                  console.log(t.errMsg);
                },
              });
            },
            submit: function () {
              var t,
                o,
                e = this;
              this.tel
                ? this.address
                  ? (n.showLoading({ title: "加载中" }),
                    (t =
                      "CreateCustOrderByShopping?UserID=" +
                      this.userid +
                      "&TelPhone=" +
                      this.tel +
                      "&SAddress=" +
                      this.address),
                    (o = []),
                    this.cart_list.forEach(function (t, e) {
                      t = { PartNo: t.PartNo, Qty: t.Qty };
                      o.push(t);
                    }),
                    this.$api(t, o, "post").then(function (t) {
                      0 == t.code &&
                        (e.$tools.toast("预定成功"),
                        setTimeout(function () {
                          this.$Router.replace({
                            path: "/pages/index/order",
                            query: {},
                          });
                        }, 800)),
                        n.hideLoading();
                    }))
                  : this.$tools.toast("请填写地址")
                : this.$tools.toast("请填写联系电话");
            },
            call: function () {
              var t = this.basicSet.phone;
              t && n.makePhoneCall({ phoneNumber: t });
            },
          },
        };
        e.default = t;
      }).call(this, o("543d").default);
    },
    6812: function (t, e, o) {
      var n = o("853d");
      o.n(n).a;
    },
    "853d": function (t, e, o) {},
    b158: function (t, e, o) {
      o.r(e);
      var n,
        i = o("6372"),
        a = o.n(i);
      for (n in i)
        ["default"].indexOf(n) < 0 &&
          (function (t) {
            o.d(e, t, function () {
              return i[t];
            });
          })(n);
      e.default = a.a;
    },
    fcbc0: function (t, e, o) {
      o.r(e);
      var n,
        i = o("42de"),
        a = o("b158");
      for (n in a)
        ["default"].indexOf(n) < 0 &&
          (function (t) {
            o.d(e, t, function () {
              return a[t];
            });
          })(n);
      o("6812");
      var s = o("f0c5"),
        i = Object(s.a)(
          a.default,
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
  },
  [["25c8", "common/runtime", "common/vendor"]],
]);
