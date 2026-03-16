(global.webpackJsonp = global.webpackJsonp || []).push([
  ["pages/article/detail"],
  {
    "42aa": function (e, t, n) {
      n.r(t);
      var i,
        o = n("9ed7"),
        a = n.n(o);
      for (i in o)
        ["default"].indexOf(i) < 0 &&
          (function (e) {
            n.d(t, e, function () {
              return o[e];
            });
          })(i);
      t.default = a.a;
    },
    7891: function (e, t, n) {
      n.r(t);
      var i,
        o = n("f22f"),
        a = n("42aa");
      for (i in a)
        ["default"].indexOf(i) < 0 &&
          (function (e) {
            n.d(t, e, function () {
              return a[e];
            });
          })(i);
      n("e7ba");
      var s = n("f0c5"),
        o = Object(s.a)(
          a.default,
          o.b,
          o.c,
          !1,
          null,
          "3eb76f6f",
          null,
          !1,
          o.a,
          void 0
        );
      t.default = o.exports;
    },
    "9ed7": function (e, a, s) {
      (function (t, n) {
        var e = s("4ea4");
        Object.defineProperty(a, "__esModule", { value: !0 }),
          (a.default = void 0);
        var i = e(s("9523"));
        function o(t, e) {
          var n,
            i = Object.keys(t);
          return (
            Object.getOwnPropertySymbols &&
              ((n = Object.getOwnPropertySymbols(t)),
              e &&
                (n = n.filter(function (e) {
                  return Object.getOwnPropertyDescriptor(t, e).enumerable;
                })),
              i.push.apply(i, n)),
            i
          );
        }
        e = {
          components: {},
          data: function () {
            return {
              id: 0,
              article: { comment: { count: 0, list: [] } },
              isLoading: 1,
              showAddComment: !1,
              showCommenBar: !0,
              addCommentFocus: !1,
              commentContent: "",
              replyCommentId: 0,
              replyNickname: "",
              page_index: 1,
              page_size: 10,
              hasMoreData: !1,
              showPageLoading: !0,
              currentUrl: "",
              shareUrl: "",
              showShareTip: !1,
              showH5Share: !1,
              showBrowserShareTip: !1,
              house_list: [],
              pageTitle: "",
            };
          },
          onShow: function (e) {},
          onLoad: function (e) {
            (this.id = this.$Route.query.id),
              this.getData(),
              t.showShareMenu({
                withShareTicket: !0,
                menus: ["shareAppMessage", "shareTimeline"],
              });
          },
          computed: (function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var n = null != arguments[e] ? arguments[e] : {};
              e % 2
                ? o(Object(n), !0).forEach(function (e) {
                    (0, i.default)(t, e, n[e]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    t,
                    Object.getOwnPropertyDescriptors(n)
                  )
                : o(Object(n)).forEach(function (e) {
                    Object.defineProperty(
                      t,
                      e,
                      Object.getOwnPropertyDescriptor(n, e)
                    );
                  });
            }
            return t;
          })(
            {},
            (0, s("26cb").mapState)({
              isLogin: function (e) {
                return e.user.isLogin;
              },
              loginUser: function (e) {
                return e.user.loginUser;
              },
              basicSet: function (e) {
                return e.init.basicSet;
              },
            })
          ),
          methods: {
            loadData: function () {
              this.getData();
            },
            onPageScroll: function (e) {},
            getData: function () {
              var n = this;
              this.$api("content.article_detail", { id: n.id }).then(function (
                e
              ) {
                var t;
                0 === e.errno &&
                  ((t = e.data.article),
                  (n.pageTitle = t.title),
                  (n.article = t),
                  (n.isLoading = 0),
                  n.$refs.content.setContent(t.content),
                  (n.house_list = e.data.house_list));
              });
            },
            like: function () {
              var n = this;
              this.$app.request({
                url: this.$api.article.like,
                data: { article_id: this.id },
                method: "POST",
                dataType: "json",
                success: function (e) {
                  var t;
                  console.log("res"),
                    0 == e.code
                      ? ((n.info.is_like = !n.info.is_like),
                        (t = n.info.is_like ? "点赞成功" : "已取消点赞"),
                        n.$alert(t, "success"))
                      : n.$alert(e.msg, "warning");
                },
              });
            },
            onPullDownRefresh: function () {
              n.showLoading({ title: "刷新中" }),
                (this.page_index = 1),
                this.getData();
            },
            onReachBottom: function (e) {
              this.hasMoreData && this.getComment();
            },
            onShareAppMessage: function () {
              return {
                path: "/pages/article/detail?id=" + this.article.id,
                title: this.article.title,
                imageUrl: this.article.photo_url,
              };
            },
            onShareTimeline: function (e) {
              return { title: this.article.title };
            },
            commentLike: function (e, n) {
              var i = this;
              this.$app.request({
                url: this.$api.article.commentLike,
                data: { comment_id: e },
                method: "POST",
                dataType: "json",
                success: function (e) {
                  var t;
                  0 == e.code
                    ? (i.info.comment.list[n].is_like
                        ? ((i.info.comment.list[n].is_like = !1),
                          --i.info.comment.list[n].like_count)
                        : ((i.info.comment.list[n].is_like = !0),
                          (i.info.comment.list[n].like_count += 1)),
                      (t = i.info.comment.list[n].is_like
                        ? "点赞成功"
                        : "已取消点赞"),
                      i.$alert(t))
                    : i.$alert(e.msg);
                },
              });
            },
            favorite: function () {
              var n = this;
              this.$app.request({
                url: this.$api.article.favorite,
                data: { article_id: this.id },
                method: "POST",
                dataType: "json",
                success: function (e) {
                  var t;
                  console.log("res"),
                    0 == e.code
                      ? ((n.info.is_favorite = !n.info.is_favorite),
                        (t = n.info.is_favorite ? "收藏成功" : "已取消收藏"),
                        n.$alert(t, "success"))
                      : n.$alert(e.msg, "warning");
                },
              });
            },
            initAddComment: function (e) {
              var t = this;
              e && this.$app.initLogin(),
                (this.showAddComment = e),
                (this.commentContent = ""),
                0 < this.replyCommentId &&
                  ((this.replyCommentId = 0), (this.replyNickname = "")),
                setTimeout(function () {
                  t.addCommentFocus = e;
                }, 200);
            },
            addCommentOrReply: function () {
              "" != this.commentContent
                ? 0 < this.replyCommentId
                  ? this.addReply()
                  : this.addComment()
                : this.$alert("评论内容不能为空");
            },
            addComment: function () {
              var t = this;
              this.$app.request({
                url: this.$api.article.addComment,
                data: {
                  article_id: this.id,
                  content: this.commentContent,
                  page_size: this.page_size,
                },
                method: "POST",
                dataType: "json",
                success: function (e) {
                  0 == e.code
                    ? ((t.info.comment = e.data),
                      (t.showAddComment = !1),
                      (t.commentContent = ""),
                      t.$alert("评论成功"))
                    : t.$alert(e.msg);
                },
              });
            },
            initAddReply: function (e, t) {
              this.initAddComment(!0),
                (this.replyCommentId = e),
                (this.replyNickname = t);
            },
            addReply: function () {
              var t = this;
              "" != this.commentContent
                ? this.$app.request({
                    url: this.$api.article.addReply,
                    data: {
                      comment_id: this.replyCommentId,
                      content: this.commentContent,
                      page_size: this.page_size,
                    },
                    method: "POST",
                    dataType: "json",
                    success: function (e) {
                      0 == e.code
                        ? ((t.info.comment = e.data),
                          (t.showAddComment = !1),
                          (t.replyCommentId = 0),
                          (t.replyNickname = ""),
                          (t.commentContent = ""),
                          t.$alert("评论成功"))
                        : t.$alert(e.msg);
                    },
                  })
                : this.$alert("回复内容不能为空");
            },
            getComment: function () {
              var t = this;
              this.$app.request({
                url: this.$api.article.comment,
                data: {
                  article_id: this.id,
                  page_index: this.page_index,
                  page_size: this.page_size,
                },
                method: "POST",
                dataType: "json",
                success: function (e) {
                  0 == e.code
                    ? (console.log(t.info.comment),
                      (t.info.comment.list = t.info.comment.list.concat(
                        e.data.list
                      )),
                      (t.info.comment.count = e.data.count),
                      e.data.page > t.page_index
                        ? (t.hasMoreData = !0)
                        : (t.hasMoreData = !1),
                      (t.page_index += 1))
                    : t.$alert(e.msg);
                },
                complete: function (e) {
                  n.stopPullDownRefresh(), n.hideLoading();
                },
              });
            },
            openLink: function (e) {
              console.log(e), (window.location.href = e);
            },
            closeH5Share: function () {
              this.showH5Share = !1;
            },
            closeShareTip: function () {
              this.showShareTip = !1;
            },
            showBrowserShareTips: function () {
              (this.showH5Share = !1), (this.showBrowserShareTip = !0);
            },
            closeBrowserShareTip: function () {
              this.showBrowserShareTip = !1;
            },
            share: function () {
              console.log("share"), n.showShareMenu();
            },
            initMPShare: function () {},
            redirectCommentDetail: function (e, t) {
              0 < t && n.navigateTo({ url: "commentDetail?id=" + e });
            },
            copyText: function (e) {
              var t = this;
              n.setClipboardData({
                data: e,
                success: function (e) {
                  t.$alert("原文链接已复制", "success");
                },
              });
            },
          },
        };
        a.default = e;
      }).call(this, s("bc2e").default, s("543d").default);
    },
    ca3f: function (e, t, n) {},
    e7ba: function (e, t, n) {
      var i = n("ca3f");
      n.n(i).a;
    },
    f123: function (e, t, i) {
      (function (e, t) {
        var n = i("4ea4");
        i("f0a5"), n(i("66fd"));
        n = n(i("7891"));
        (e.__webpack_require_UNI_MP_PLUGIN__ = i), t(n.default);
      }).call(this, i("bc2e").default, i("543d").createPage);
    },
    f22f: function (e, t, n) {
      n.d(t, "b", function () {
        return o;
      }),
        n.d(t, "c", function () {
          return a;
        }),
        n.d(t, "a", function () {
          return i;
        });
      var i = {
          wkParser: function () {
            return Promise.all([
              n.e("common/vendor"),
              n.e("components/wk-parser/index"),
            ]).then(n.bind(null, "faee"));
          },
          wkHouses: function () {
            return n.e("components/wk-houses/index").then(n.bind(null, "ea98"));
          },
          wkSkeletons: function () {
            return n
              .e("components/wk-skeletons/index")
              .then(n.bind(null, "d3c1"));
          },
        },
        o = function () {
          this.$createElement;
          this._self._c;
        },
        a = [];
    },
  },
  [["f123", "common/runtime", "common/vendor"]],
]);
