(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9350],
  {
    9350: function (t, e, a) {
      "use strict";
      a.d(e, {
        qU: function () {
          return tV;
        },
        R2: function () {
          return o;
        },
        iV: function () {
          return $;
        },
        GF: function () {
          return u;
        },
      });
      var i,
        r,
        l,
        o,
        n,
        s,
        d = a(4875);
      ((i = o || (o = {})).USER = "user"),
        (i.ARTIST = "artist"),
        (i.PODCAST = "podcast");
      let u = (t) =>
        t === o.USER
          ? d.CS.PersonalResults
          : t === o.ARTIST
            ? d.CS.ArtistPersonalResults
            : t === o.PODCAST
              ? d.CS.PodcastResults
              : d.CS.PersonalResults;
      var c = a(22874),
        m = a(13534);
      ((r = n || (n = {})).WAVE = "WAVE"),
        (r.ACTION = "ACTION"),
        (r.SHARE = "SHARE"),
        (r.SIMPLE = "SIMPLE");
      var v = a(61169);
      let _ = (t) => {
          var e;
          return (0, c.pj)({
            type: n.ACTION,
            data: {
              title: t.data.title,
              imageUrl: t.data.imageUrl,
              url:
                null === (e = t.data.action) || void 0 === e
                  ? void 0
                  : e.weblink,
            },
          });
        },
        p = (t) =>
          (0, c.pj)({
            type: n.SIMPLE,
            data: {
              title: t.data.title,
              buttonColor: t.data.buttonColor,
              textColor: t.data.textColor,
              url: t.data.action.weblink,
            },
          }),
        S = (t) =>
          (0, c.pj)({
            uri: null == t ? void 0 : t.uri,
            color: null == t ? void 0 : t.color,
            videoUrl: null == t ? void 0 : t.videoUrl,
          }),
        C = (t) => {
          let e = t.data.covers ? t.data.covers.slice(0, 3).map(S) : [];
          return (0, c.pj)({
            type: t.type,
            data: {
              value: t.data.value,
              valueDescription: t.data.valueDescription,
              valueSuffix: t.data.valueSuffix,
              footer: t.data.footer,
              covers: e,
            },
          });
        },
        x = (t) =>
          (0, c.pj)({
            value: t.value,
            title: t.title,
            titleType: t.titleType,
            subtitle: t.subtitle,
            cover: t.cover,
            coverType: t.coverType,
          }),
        y = (t) => {
          let e = t.data.cover ? S(t.data.cover) : null;
          return (0, c.pj)({
            type: t.type,
            data: { title: t.data.title, cover: e, items: t.data.items.map(x) },
          });
        },
        g = (t) =>
          (0, c.pj)({
            type: t.type,
            data: {
              value: t.data.value,
              valueDescription: t.data.valueDescription,
              valueSuffix: t.data.valueSuffix,
              footer: t.data.footer,
              description: t.data.description,
              isOrderVisible: !!t.data.isOrderVisible,
              items: t.data.items.map(x),
            },
          }),
        V = (t) =>
          (0, c.pj)({
            type: t.type,
            data: {
              description: t.data.description,
              isOrderVisible: !!t.data.isOrderVisible,
              items: t.data.items.map(x),
            },
          }),
        T = (t) =>
          (0, c.pj)({
            type: t.type,
            data: {
              title: t.data.title,
              subtitle: t.data.subtitle,
              description: t.data.description,
              entityType: t.data.entityType,
              cover: S(t.data.cover),
              coverType: t.data.coverType,
              smallRoundCover: t.data.smallRoundCover
                ? S(t.data.smallRoundCover)
                : void 0,
            },
          }),
        b = (t) =>
          (0, c.pj)({
            value: t.value,
            valueDescription: t.valueDescription,
            valueSuffix: t.valueSuffix,
            footer: t.footer,
          }),
        h = (t) => {
          var e;
          return (0, c.pj)({
            type: t.type,
            data: {
              header: t.data.header,
              footer: null !== (e = t.data.footer) && void 0 !== e ? e : void 0,
              align: t.data.align,
              stats: t.data.stats.map(b),
            },
          });
        },
        f = (t) => (0, c.pj)({ type: t.type, data: b(t.data) }),
        N = (t) =>
          (0, c.pj)({
            type: t.type,
            data: {
              title: t.data.title,
              subtitle: t.data.subtitle,
              align: t.data.align,
              titleSize: t.data.titleSize,
            },
          }),
        I = (t) => {
          var e, a, i, r, l, o, s, d, u;
          let m, S;
          if (null === (e = t.button) || void 0 === e ? void 0 : e.type)
            switch (t.button.type) {
              case n.ACTION:
                m = _(t.button);
                break;
              case n.SIMPLE:
                m = p(t.button);
            }
          if (null === (a = t.content) || void 0 === a ? void 0 : a.type)
            switch (
              null === (l = t.content) || void 0 === l ? void 0 : l.type
            ) {
              case v.y.CHART:
                S = V(t.content);
                break;
              case v.y.CHART_FAVORITES:
                S = g(t.content);
                break;
              case v.y.SINGLE_ENTITY:
                S = T(t.content);
                break;
              case v.y.STATS:
                S = h(t.content);
                break;
              case v.y.TEXT:
                S = N(t.content);
                break;
              case v.y.TEXT_FACT:
                S = f(t.content);
                break;
              case v.y.CHART_ARTIST:
                S = y(t.content);
                break;
              case v.y.ARTISTS:
                S = C(t.content);
            }
          let x =
            null !==
              (o =
                null === (i = t.trailer) || void 0 === i ? void 0 : i.tracks) &&
            void 0 !== o
              ? o
              : [];
          return (0, c.pj)({
            id: t.id,
            background: {
              bgImageUrl:
                null !== (s = t.background.bgImageUrl) && void 0 !== s ? s : "",
              videoUrl:
                null !== (d = t.background.videoUrl) && void 0 !== d ? d : "",
              withSound: !!t.background.withSound,
              firstFrameVideoUrl:
                null !== (u = t.background.firstFrameVideoUrl) && void 0 !== u
                  ? u
                  : "",
              withPersonalColor: !!t.background.withPersonalColor,
            },
            slideColor:
              null === (r = t.meta) || void 0 === r ? void 0 : r.color,
            button: m,
            content: S,
            trailerRawTracks: x,
          });
        };
      var R = a(81046);
      let A = c.V5.model("SlideButtonActionData", {
          title: c.V5.maybeNull(c.V5.string),
          imageUrl: c.V5.maybeNull(c.V5.string),
          url: c.V5.maybeNull(c.V5.string),
        }),
        E = c.V5.model("SlideButtonAction", {
          type: c.V5.literal(n.ACTION),
          data: A,
        }),
        j = c.V5.model("SlideButtonSimpleData", {
          title: c.V5.maybeNull(c.V5.string),
          buttonColor: c.V5.maybeNull(c.V5.string),
          textColor: c.V5.maybeNull(c.V5.string),
          url: c.V5.maybeNull(c.V5.string),
        }),
        w = c.V5.model("SlideButtonSimple", {
          type: c.V5.literal(n.SIMPLE),
          data: j,
        }),
        L = c.V5.model("SlideContentCover", {
          uri: c.V5.maybeNull(c.V5.string),
          color: c.V5.maybeNull(c.V5.string),
          videoUrl: c.V5.maybeNull(c.V5.string),
        }),
        k = c.V5.model("SlideContentStat", {
          value: c.V5.maybeNull(c.V5.number),
          valueDescription: c.V5.maybeNull(c.V5.string),
          valueSuffix: c.V5.maybeNull(c.V5.string),
          footer: c.V5.maybeNull(c.V5.string),
        }),
        O = c.V5.compose(
          c.V5.model("SlideContentArtistsModelData", { covers: c.V5.array(L) }),
          k,
        ),
        P = c.V5.model("SlideContentArtistsModel", {
          type: c.V5.literal(v.y.ARTISTS),
          data: c.V5.maybe(O),
        }),
        D = c.V5.model("SlideContentItem", {
          value: c.V5.maybeNull(c.V5.number),
          title: c.V5.maybeNull(c.V5.string),
          titleType: c.V5.maybeNull(c.V5.string),
          subtitle: c.V5.maybeNull(c.V5.string),
          cover: c.V5.maybeNull(L),
          coverType: c.V5.maybeNull(c.V5.string),
        }),
        G = c.V5.model("SlideContentChartArtistData", {
          title: c.V5.maybeNull(c.V5.string),
          cover: c.V5.maybeNull(L),
          items: c.V5.array(D),
        }),
        H = c.V5.model("SlideContentChartArtist", {
          type: c.V5.literal(v.y.CHART_ARTIST),
          data: c.V5.maybe(G),
        }),
        z = c.V5.compose(
          c.V5.model("SlideContentChartFavoritesData", {
            description: c.V5.maybeNull(c.V5.string),
            isOrderVisible: c.V5.boolean,
            items: c.V5.array(D),
          }),
          k,
        ),
        B = c.V5.model("SlideContentChartFavorites", {
          type: c.V5.literal(v.y.CHART_FAVORITES),
          data: c.V5.maybe(z),
        }),
        U = c.V5.model("SlideContentChartData", {
          description: c.V5.maybeNull(c.V5.string),
          isOrderVisible: c.V5.boolean,
          items: c.V5.array(D),
        }),
        M = c.V5.model("SlideContentChart", {
          type: c.V5.literal(v.y.CHART),
          data: c.V5.maybe(U),
        }),
        F = c.V5.model("SlideContentSingleEntityData", {
          title: c.V5.maybeNull(c.V5.string),
          subtitle: c.V5.maybeNull(c.V5.string),
          description: c.V5.maybeNull(c.V5.string),
          entityType: c.V5.maybeNull(c.V5.string),
          cover: L,
          coverType: c.V5.maybeNull(c.V5.string),
          smallRoundCover: c.V5.maybeNull(L),
        }),
        W = c.V5.model("SlideContentSingleEntity", {
          type: c.V5.literal(v.y.SINGLE_ENTITY),
          data: c.V5.maybe(F),
        }),
        X = c.V5.model("SlideContentStatsData", {
          header: c.V5.maybeNull(c.V5.string),
          footer: c.V5.maybeNull(c.V5.string),
          align: c.V5.maybeNull(c.V5.string),
          stats: c.V5.array(k),
        }),
        Y = c.V5.model("SlideContentStats", {
          type: c.V5.literal(v.y.STATS),
          data: c.V5.maybe(X),
        }),
        q = c.V5.model("SlideContentTextFact", {
          type: c.V5.literal(v.y.TEXT_FACT),
          data: c.V5.maybe(k),
        }),
        J = c.V5.model("SlideContentTextData", {
          title: c.V5.maybeNull(c.V5.string),
          subtitle: c.V5.maybeNull(c.V5.string),
          align: c.V5.maybeNull(c.V5.string),
          titleSize: c.V5.maybeNull(c.V5.string),
        }),
        Q = c.V5.model("SlideContentText", {
          type: c.V5.literal(v.y.TEXT),
          data: c.V5.maybe(J),
        }),
        Z = c.V5.model("SlideBackground", {
          bgImageUrl: c.V5.string,
          videoUrl: c.V5.string,
          withSound: c.V5.boolean,
          firstFrameVideoUrl: c.V5.string,
          withPersonalColor: c.V5.boolean,
        }),
        K = c.V5.model("Slide", {
          id: c.V5.string,
          background: Z,
          button: c.V5.maybe(c.V5.union(E, w)),
          slideColor: c.V5.maybeNull(c.V5.string),
          content: c.V5.maybe(c.V5.union(M, B, W, Q, Y, q, H, P)),
          trailerRawTracks: c.V5.maybeNull(c.V5.frozen()),
        }).views((t) => ({
          get hasTrailer() {
            var e;
            return !!(null === (e = t.trailerRawTracks) || void 0 === e
              ? void 0
              : e.length);
          },
          get entitiesData() {
            if (!t.trailerRawTracks) return [];
            return t.trailerRawTracks.map((t) => ({
              type: R.A.SmartPreview,
              meta: t,
            }));
          },
        })),
        $ = c.V5.model("Slides", {
          userSlidesLoadingState: c.V5.enumeration(Object.values(m.Gui)),
          artistSlidesLoadingState: c.V5.enumeration(Object.values(m.Gui)),
          podcastSlidesLoadingState: c.V5.enumeration(Object.values(m.Gui)),
          consumer: c.V5.maybe(c.V5.enumeration(Object.values(o))),
          artistId: c.V5.maybe(c.V5.string),
          podcastId: c.V5.maybe(c.V5.number),
          activeSlide: c.V5.optional(c.V5.number, 0),
          userItems: c.V5.array(K),
          artistItems: c.V5.array(K),
          podcastItems: c.V5.array(K),
          isMuted: c.V5.boolean,
        })
          .views((t) => ({
            get shouldShowUserSlides() {
              if (!(0, c.fh)(t)) return !1;
              let { experiments: e } = (0, c.yj)(t);
              return (
                e.checkExperiment(m.peG.WebNextRewind2024, "on") &&
                e.checkExperiment(m.peG.WebNextRewind2024User, "on")
              );
            },
          }))
          .actions((t) => ({
            setIsMuted: (e) => {
              t.isMuted = e;
            },
            toggleMute: () => {
              t.isMuted = !t.isMuted;
            },
            getUserSlides: (0, c.ls)(function* () {
              let { slidesResource: e, modelActionsLogger: a } = (0, c.dU)(t);
              if (t.userSlidesLoadingState !== m.Gui.PENDING)
                try {
                  t.userSlidesLoadingState = m.Gui.PENDING;
                  let a = yield e.getUserSlides();
                  t.userSlidesLoadingState !== m.Gui.IDLE &&
                    (t.userSlidesLoadingState = m.Gui.RESOLVE),
                    a.slides &&
                      ((t.consumer = o.USER),
                      (t.userItems = (0, c.pj)(a.slides.map(I)))),
                    (t.userSlidesLoadingState = m.Gui.RESOLVE);
                } catch (e) {
                  a.error(e),
                    t.userSlidesLoadingState !== m.Gui.IDLE &&
                      ((t.userSlidesLoadingState = m.Gui.REJECT),
                      (t.userItems = (0, c.pj)([])));
                }
            }),
            getArtistSlides: (0, c.ls)(function* (e) {
              let { slidesResource: a, modelActionsLogger: i } = (0, c.dU)(t);
              if (t.artistSlidesLoadingState !== m.Gui.PENDING) {
                t.artistId = e.artistId;
                try {
                  t.artistSlidesLoadingState = m.Gui.PENDING;
                  let i = yield a.getArtistSlides(e);
                  t.artistSlidesLoadingState !== m.Gui.IDLE &&
                    (t.artistSlidesLoadingState = m.Gui.RESOLVE),
                    i.slides &&
                      ((t.consumer = o.ARTIST),
                      (t.artistItems = (0, c.pj)(i.slides.map(I)))),
                    (t.artistSlidesLoadingState = m.Gui.RESOLVE);
                } catch (e) {
                  i.error(e),
                    t.artistSlidesLoadingState !== m.Gui.IDLE &&
                      ((t.artistSlidesLoadingState = m.Gui.REJECT),
                      (t.artistItems = (0, c.pj)([])));
                }
              }
            }),
            getPodcastSlides: (0, c.ls)(function* (e) {
              let { slidesResource: a, modelActionsLogger: i } = (0, c.dU)(t);
              if (t.podcastSlidesLoadingState !== m.Gui.PENDING) {
                t.podcastId = e.podcastId;
                try {
                  t.podcastSlidesLoadingState = m.Gui.PENDING;
                  let i = yield a.getPodcastSlides(e);
                  t.podcastSlidesLoadingState !== m.Gui.IDLE &&
                    (t.podcastSlidesLoadingState = m.Gui.RESOLVE),
                    i.slides &&
                      ((t.consumer = o.PODCAST),
                      (t.podcastItems = (0, c.pj)(i.slides.map(I)))),
                    (t.podcastSlidesLoadingState = m.Gui.RESOLVE);
                } catch (e) {
                  i.error(e),
                    t.podcastSlidesLoadingState !== m.Gui.IDLE &&
                      ((t.podcastSlidesLoadingState = m.Gui.REJECT),
                      (t.podcastItems = (0, c.pj)([])));
                }
              }
            }),
            setActiveSlide(e) {
              t.activeSlide = e;
            },
            resetUser() {
              (t.userSlidesLoadingState = m.Gui.IDLE),
                (t.userItems = (0, c.pj)([]));
            },
            resetArtist() {
              (t.artistSlidesLoadingState = m.Gui.IDLE),
                (t.artistItems = (0, c.pj)([]));
            },
            resetPodcast() {
              (t.podcastSlidesLoadingState = m.Gui.IDLE),
                (t.podcastItems = (0, c.pj)([]));
            },
          }));
      var tt = a(75441),
        te = a(32358),
        ta = a(65067);
      ((l = s || (s = {})).TOP = "TOP"),
        (l.CENTER = "CENTER"),
        (l.BOTTOM = "BOTTOM");
      var ti = a(55188),
        tr = a(37667),
        tl = a(491),
        to = a(69756),
        tn = a(59091),
        ts = a(17392),
        td = a(97141),
        tu = a(85296),
        tc = a.n(tu);
      let tm = (t) => {
        var e;
        let { data: a, className: i } = t;
        return (0, tt.jsxs)(td.rU, {
          href: null !== (e = a.url) && void 0 !== e ? e : void 0,
          className: (0, te.W)(tc().root, i),
          children: [
            (0, tt.jsx)(tn.Paper, {
              radius: "xs",
              className: tc().cover,
              children:
                a.imageUrl &&
                (0, tt.jsx)(td.BE, {
                  src: a.imageUrl,
                  withAvatarReplace: !0,
                  fit: "contain",
                  className: tc().image,
                  size: 100,
                }),
            }),
            (0, tt.jsx)(ts.Caption, {
              variant: "span",
              type: "controls",
              size: "l",
              weight: "medium",
              className: tc().text,
              lineClamp: 1,
              children: a.title,
            }),
            (0, tt.jsx)(to.Icon, {
              variant: "arrowRight",
              size: "xs",
              className: tc().icon,
            }),
          ],
        });
      };
      var tv = a(68208),
        t_ = a(25839),
        tp = a.n(t_);
      let tS = (t) => {
          let { data: e, className: a } = t,
            i = (0, m.s0h)(e.url),
            r = (0, ta.useMemo)(
              () => ({
                "--text-color": e.textColor,
                "--button-color": e.buttonColor,
              }),
              [e.buttonColor, e.textColor],
            );
          return (0, tt.jsx)(tv.Button, {
            role: "link",
            style: r,
            className: (0, te.W)(tp().root, a),
            size: "default",
            radius: "xxxl",
            color: "primary",
            withHover: !1,
            withRipple: !1,
            onClick: i,
            children: (0, tt.jsx)(ts.Caption, {
              variant: "span",
              type: "controls",
              size: "l",
              weight: "medium",
              lineClamp: 1,
              children: e.title,
            }),
          });
        },
        tC = (t) => {
          let { button: e, className: a } = t;
          switch (e.type) {
            case n.ACTION:
              if (e.data.url)
                return (0, tt.jsx)(tm, { data: e.data, className: a });
              return null;
            case n.SIMPLE:
              if (e.data.url)
                return (0, tt.jsx)(tS, { data: e.data, className: a });
              return null;
          }
        };
      var tx = a(36220),
        ty = a(91248),
        tg = a.n(ty);
      let tV = (t) => {
        let { slide: e, isActive: a } = t,
          i = (0, m.Eu6)(),
          { state: r, toggleTrue: l, toggleFalse: o } = (0, ti.O)(!1),
          n = (0, ta.useMemo)(() => {
            let t = e.content;
            if ((null == t ? void 0 : t.data) && "align" in t.data) {
              var a;
              switch (
                null === (a = t.data) || void 0 === a ? void 0 : a.align
              ) {
                case s.TOP:
                  return "top";
                case s.CENTER:
                  break;
                case s.BOTTOM:
                  return "bottom";
              }
            }
            return "center";
          }, [e]);
        return (0, tt.jsx)("div", {
          className: tg().root,
          children: (0, tt.jsxs)(tl.Background, {
            isActive: a,
            isContentVisible: r,
            setContentVisible: l,
            setContentInvisible: o,
            background: e.background,
            className: tg().background,
            children: [
              (0, tt.jsx)("div", {
                className: tg().logo,
                children: (0, tt.jsx)(tr.Logo, {
                  alignIcon: "center",
                  lang: i,
                }),
              }),
              e.content &&
                r &&
                (0, tt.jsx)("div", {
                  className: (0, te.W)(
                    tg().content,
                    tg()["content_align_".concat(n)],
                    { [tg().playAnimation]: r },
                  ),
                  children: (0, tt.jsx)(tx.SlideContent, {
                    content: e.content,
                    withPersonalColor: e.background.withPersonalColor,
                  }),
                }),
              e.button &&
                (0, tt.jsx)(tC, { button: e.button, className: tg().button }),
            ],
          }),
        });
      };
    },
    491: function (t, e, a) {
      "use strict";
      a.d(e, {
        Background: function () {
          return _;
        },
      });
      var i = a(75441),
        r = a(32358),
        l = a(62569),
        o = a(65067),
        n = a(63660),
        s = a(39054),
        d = a(98375),
        u = a(13534),
        c = a(55549),
        m = a.n(c);
      let v = (0, l.Pi)((t) => {
          let {
              className: e,
              children: a,
              background: l,
              isActive: c,
              isContentVisible: v,
              setContentVisible: _,
              setContentInvisible: p,
            } = t,
            {
              user: S,
              slides: { isMuted: C },
            } = (0, u.oR4)(),
            { isVisible: x } = (0, u.NNi)(),
            y = (0, o.useRef)(null),
            g = (0, u.R$C)(),
            V =
              (null == g
                ? void 0
                : g.getState(u.jiA.TRAILER).playerState.status.value) ===
                d.FY.PLAYING && l.withSound,
            T = (0, o.useCallback)(() => {
              setTimeout(() => {
                _();
              }, 1500);
            }, [_]);
          (0, o.useEffect)(() => {
            !c && v && p();
          }, [c, v, p]),
            (0, o.useEffect)(() => {
              var t, e, a;
              c && !x
                ? ((null === (t = y.current) || void 0 === t
                    ? void 0
                    : t.readyState) !== 4 && T(),
                  null === (e = y.current) ||
                    void 0 === e ||
                    e
                      .play()
                      .then(() => {
                        T(), V && (null == g || g.pause(u.jiA.TRAILER));
                      })
                      .catch(T))
                : y.current &&
                  ((y.current.currentTime = 0),
                  null === (a = y.current) || void 0 === a || a.pause());
            }, [T, c, x, _, V, g]);
          let b = (0, o.useMemo)(() => {
              if (l.withPersonalColor && S.collectionHue)
                return {
                  "--user-background-color": (0, u.paG)(
                    S.collectionHue,
                    1,
                    0.5,
                  ),
                };
            }, [l.withPersonalColor, S.collectionHue]),
            h = l.firstFrameVideoUrl && !l.withPersonalColor;
          return (0, i.jsxs)("div", {
            className: (0, r.W)(m().root, e),
            style: b,
            children: [
              h &&
                (0, i.jsx)(s.Image, {
                  src: l.firstFrameVideoUrl,
                  className: m().firstFrame,
                }),
              (0, i.jsx)("video", {
                className: (0, r.W)(m().media, {
                  [m().media_withPersonalColor]: l.withPersonalColor,
                }),
                ref: y,
                src: l.videoUrl,
                poster: (0, n.createAvatarUrl)(l.bgImageUrl, 800, !0),
                playsInline: !0,
                muted: !l.withSound || C,
              }),
              !!a && a,
            ],
          });
        }),
        _ = (0, o.memo)(v);
    },
    36220: function (t, e, a) {
      "use strict";
      a.d(e, {
        SlideContent: function () {
          return tr;
        },
      });
      var i,
        r,
        l,
        o,
        n,
        s,
        d,
        u = a(75441),
        c = a(61169),
        m = a(65067),
        v = a(59091),
        _ = a(97141),
        p = a(32358),
        S = a(31663),
        C = a(9317),
        x = a(67126),
        y = a(17392);
      let g = { 6: 84, 7: 84, 8: 68, 9: 68, 10: 56, 11: 56, 12: 48, 13: 48 },
        V = (t) => {
          let e = String(t).length;
          return e > 13
            ? "clamp(".concat(18, "px, ").concat(11, "cqi, ").concat(54, "px)")
            : e <= 5
              ? "clamp("
                  .concat(18, "px, ")
                  .concat(26, "cqi, ")
                  .concat(100, "px)")
              : "clamp("
                  .concat(18, "px, ")
                  .concat(26 - e, "cqi, ")
                  .concat(g[e], "px)");
        };
      var T = a(89058),
        b = a.n(T);
      let h = (t) => {
        let {
            data: e,
            index: a,
            className: i,
            valueClassName: r,
            valueContainerClassName: l,
            withAutoResize: o,
            descriptionLineClamp: n,
          } = t,
          s = (0, m.useRef)(null),
          { formatNumber: d } = (0, C.Z)(),
          c = (0, m.useCallback)((t) => (t >= 1e4 ? d(t) : String(t)), [d]);
        (0, m.useEffect)(() => {
          if (s.current) {
            if (!e.value) return;
            let t = new S.I(s.current, Number(e.value), {
              startVal: 1,
              formattingFn: c,
            });
            t.error || t.start();
          }
        }, [e.value, c]);
        let v = (0, m.useMemo)(() => {
            if (a) return { opacity: 1 - 0.15 * a };
          }, [a]),
          _ = (0, m.useMemo)(() => {
            if (o && e.value) return { fontSize: V(e.value) };
          }, [e.value, o]);
        return (0, u.jsxs)(u.Fragment, {
          children: [
            (0, u.jsxs)(x.y, {
              children: [e.value, " ", e.valueSuffix, " ", e.valueDescription],
            }),
            (0, u.jsxs)("div", {
              className: (0, p.W)(b().root, i),
              style: v,
              "aria-hidden": !0,
              children: [
                (0, u.jsxs)("div", {
                  className: (0, p.W)(b().valueContainer, l),
                  children: [
                    (0, u.jsx)(y.Heading, {
                      variant: "div",
                      size: "xxxxl",
                      tabIndex: -1,
                      ref: s,
                      "aria-hidden": !0,
                      className: (0, p.W)(b().value, r),
                      style: _,
                    }),
                    e.valueSuffix &&
                      (0, u.jsx)(y.Heading, {
                        variant: "div",
                        size: "xxxxl",
                        className: b().value,
                        style: _,
                        children: e.valueSuffix,
                      }),
                  ],
                }),
                (0, u.jsx)(y.Heading, {
                  variant: "div",
                  size: "xl",
                  weight: "black",
                  className: b().unit,
                  lineClamp: n,
                  children: e.valueDescription,
                }),
                e.footer &&
                  (0, u.jsx)(y.Caption, {
                    variant: "span",
                    type: "text",
                    size: "l",
                    weight: "medium",
                    className: b().footer,
                    children: e.footer,
                  }),
              ],
            }),
          ],
        });
      };
      var f = a(46315),
        N = a.n(f);
      let I = (t) => {
        let { data: e } = t,
          a = (0, m.useMemo)(
            () => ({
              value: e.value,
              valueDescription: e.valueDescription,
              valueSuffix: e.valueSuffix,
              footer: e.footer,
            }),
            [e.footer, e.value, e.valueDescription, e.valueSuffix],
          ),
          i = (0, m.useMemo)(
            () => ({
              "--covers-offset-translate": "".concat(
                (e.covers.length - 1) * 7.5,
                "px",
              ),
            }),
            [e.covers],
          ),
          r = (0, m.useCallback)(
            (t) => ({ "--cover-offset-translate": "-".concat(15 * t, "px") }),
            [],
          );
        return (0, u.jsxs)("div", {
          className: N().root,
          children: [
            (0, u.jsx)(h, { data: a, withAutoResize: !0 }),
            (0, u.jsx)("div", {
              className: N().covers,
              style: i,
              children: e.covers.map((t, e) => {
                var a;
                return (0, u.jsx)(
                  v.Paper,
                  {
                    radius: "round",
                    className: N().cover,
                    style: r(e),
                    children: (0, u.jsx)(_.BE, {
                      src: null !== (a = t.uri) && void 0 !== a ? a : void 0,
                      withAvatarReplace: !0,
                      fit: "contain",
                      size: 100,
                      className: N().image,
                    }),
                  },
                  t.uri,
                );
              }),
            }),
          ],
        });
      };
      ((i = o || (o = {})).SQUARE = "SQUARE"), (i.CIRCLE = "CIRCLE");
      var R = a(39153),
        A = a.n(R),
        E = a(62569),
        j = a(22874);
      ((r = n || (n = {})).NUMBER = "NUMBER"), (r.TEXT = "TEXT");
      var w = a(25058),
        L = a.n(w);
      let k = (0, E.Pi)((t) => {
          var e;
          let {
              data: a,
              index: i,
              variant: r,
              isOrderVisible: l,
              hasOnlyArtistItems: s,
            } = t,
            { formatNumber: d } = (0, C.Z)(),
            S = (0, m.useMemo)(
              () => ({
                "--slide-final-translate-offset":
                  r === c.y.CHART && s ? "".concat(-8 * i, "px") : 0,
                animationDelay: "".concat(0.5 * i, "s"),
              }),
              [i, s, r],
            ),
            x = (0, m.useMemo)(() => {
              let t = Number(a.subtitle);
              return a.subtitle && !isNaN(t) ? d(t) : a.subtitle;
            }, [a.subtitle, d]),
            g = (0, m.useMemo)(
              () =>
                a.titleType === n.NUMBER && "number" == typeof a.value
                  ? (0, u.jsx)(h, {
                      data: (0, j.pj)({ value: a.value }),
                      className: L().stat,
                      valueClassName: L().statValue,
                      valueContainerClassName: L().statValueContainer,
                    })
                  : a.title
                    ? r === c.y.CHART_ARTIST
                      ? (0, u.jsx)(y.Heading, {
                          variant: "div",
                          size: "s",
                          weight: "black",
                          lineClamp: 2,
                          className: L().textVariant,
                          children: a.title,
                        })
                      : (0, u.jsx)(y.Caption, {
                          variant: "span",
                          type: "text",
                          size: "l",
                          weight: "medium",
                          lineClamp: 2,
                          className: L().textVariant,
                          children: a.title,
                        })
                    : void 0,
              [a.title, a.titleType, a.value, r],
            ),
            V = (0, m.useMemo)(
              () =>
                x
                  ? (r === c.y.CHART && s) || r === c.y.CHART_FAVORITES
                    ? (0, u.jsx)(y.Heading, {
                        variant: "div",
                        size: "s",
                        weight: "black",
                        lineClamp: 2,
                        className: (0, p.W)(L().textVariant, L().subTitle),
                        children: x,
                      })
                    : (0, u.jsx)(y.Caption, {
                        variant: "span",
                        type: "text",
                        size: "l",
                        weight: "medium",
                        lineClamp: 2,
                        className: (0, p.W)(L().text, {
                          [L().textVariant]: r === c.y.CHART_ARTIST,
                        }),
                        children: x,
                      })
                  : void 0,
              [x, s, r],
            );
          return (0, u.jsxs)("li", {
            className: L().root,
            style: S,
            tabIndex: 0,
            children: [
              l &&
                (0, u.jsx)(y.Heading, {
                  variant: "div",
                  size: "l",
                  weight: "black",
                  className: L().order,
                  children: i + 1,
                }),
              (0, u.jsx)(v.Paper, {
                radius: a.coverType === o.CIRCLE ? "round" : "xs",
                className: L().cover,
                children:
                  (null === (e = a.cover) || void 0 === e ? void 0 : e.uri) &&
                  (0, u.jsx)(_.BE, {
                    src: a.cover.uri,
                    withAvatarReplace: !0,
                    fit: "contain",
                    className: L().image,
                    size: 100,
                  }),
              }),
              (0, u.jsxs)("div", { className: L().meta, children: [g, V] }),
            ],
          });
        }),
        O = (t) => {
          let { items: e, isOrderVisible: a, variant: i } = t,
            r = (0, m.useMemo)(
              () => e.every((t) => t.coverType === o.CIRCLE),
              [e],
            ),
            l = (0, m.useMemo)(() => {
              switch (i) {
                case c.y.CHART_ARTIST:
                  return "l";
                case c.y.CHART_FAVORITES:
                  return "xxl";
                case c.y.CHART:
                  if (r) return;
                  return "m";
                default:
                  return null;
              }
            }, [r, i]);
          return (0, u.jsx)("ol", {
            className: (0, p.W)(A().root, A()["root_spacer_".concat(l)]),
            tabIndex: -1,
            children: e.map((t, e) =>
              (0, u.jsx)(
                k,
                {
                  data: t,
                  index: e,
                  variant: i,
                  hasOnlyArtistItems: r,
                  isOrderVisible: a,
                },
                t.title,
              ),
            ),
          });
        };
      var P = a(6),
        D = a.n(P);
      let G = (t) => {
        var e;
        let { data: a } = t;
        return (0, u.jsxs)("div", {
          className: D().root,
          children: [
            (null === (e = a.cover) || void 0 === e ? void 0 : e.uri) &&
              (0, u.jsx)(v.Paper, {
                radius: "round",
                className: D().cover,
                children: (0, u.jsx)(_.BE, {
                  src: a.cover.uri,
                  withAvatarReplace: !0,
                  fit: "contain",
                  className: D().image,
                  size: 200,
                }),
              }),
            a.title &&
              (0, u.jsx)(y.Heading, {
                variant: "div",
                size: "xl",
                weight: "bold",
                className: D().title,
                lineClamp: 2,
                children: a.title,
              }),
            (0, u.jsx)(O, {
              items: a.items,
              isOrderVisible: !1,
              variant: c.y.CHART_ARTIST,
            }),
          ],
        });
      };
      var H = a(1870),
        z = a.n(H);
      let B = (t) => {
        let { data: e } = t;
        return (0, u.jsxs)("div", {
          className: z().root,
          children: [
            e.description &&
              (0, u.jsx)(y.Caption, {
                variant: "span",
                type: "text",
                size: "l",
                weight: "medium",
                className: z().text,
                children: e.description,
              }),
            (0, u.jsx)(O, {
              items: e.items,
              variant: c.y.CHART,
              isOrderVisible: e.isOrderVisible,
            }),
          ],
        });
      };
      var U = a(6269),
        M = a.n(U);
      let F = (t) => {
        let { data: e } = t,
          a = "number" == typeof e.value,
          i = (0, m.useMemo)(
            () => ({
              value: e.value,
              valueDescription: e.valueDescription,
              valueSuffix: e.valueSuffix,
              footer: e.footer,
            }),
            [e.footer, e.value, e.valueDescription, e.valueSuffix],
          );
        return (0, u.jsxs)("div", {
          className: M().root,
          children: [
            a && (0, u.jsx)(h, { data: i, withAutoResize: !0 }),
            e.description &&
              (0, u.jsx)(y.Caption, {
                variant: "span",
                type: "text",
                size: "l",
                weight: "medium",
                className: M().description,
                children: e.description,
              }),
            (0, u.jsx)(O, {
              items: e.items,
              isOrderVisible: e.isOrderVisible,
              variant: c.y.CHART_FAVORITES,
            }),
          ],
        });
      };
      (s || (s = {})).REWIND = "REWIND";
      var W = a(39054),
        X = a(13534),
        Y = { src: "/_next/static/media/trailer_animated.aa3fd227.gif" },
        q = a(92859),
        J = a.n(q);
      let Q = (0, E.Pi)((t) => {
        var e, a, i;
        let { data: r, withPersonalColor: l } = t,
          { user: n } = (0, X.oR4)(),
          d =
            r.entityType === s.REWIND ||
            !!(null === (e = r.smallRoundCover) || void 0 === e
              ? void 0
              : e.uri),
          c = (0, m.useMemo)(() => {
            if (!l || !n.collectionHue) {
              var t;
              return {
                "--cover-background-color": r.cover.color,
                "--small-round-cover-background-color":
                  null === (t = r.smallRoundCover) || void 0 === t
                    ? void 0
                    : t.color,
              };
            }
            return {
              "--cover-background-color": (0, X.paG)(n.collectionHue, 0.8, 0.6),
              "--small-round-cover-background-color": (0, X.paG)(
                n.collectionHue,
                1,
                0.35,
              ),
            };
          }, [
            r.cover.color,
            null === (a = r.smallRoundCover) || void 0 === a ? void 0 : a.color,
            n.collectionHue,
            l,
          ]),
          S = (0, m.useMemo)(() => {
            var t;
            return r.entityType === s.REWIND
              ? (0, u.jsx)(v.Paper, {
                  radius: "round",
                  className: J().smallRoundCover,
                  children: (0, u.jsx)(W.Image, {
                    src: Y.src,
                    withFallback: !1,
                    withLoadingIndicator: !1,
                    fit: "contain",
                    className: J().trailer,
                    "aria-hidden": !0,
                  }),
                })
              : (
                    null === (t = r.smallRoundCover) || void 0 === t
                      ? void 0
                      : t.uri
                  )
                ? (0, u.jsx)(v.Paper, {
                    radius: "round",
                    className: (0, p.W)(
                      J().smallRoundCover,
                      J().smallRoundCover_withShadow,
                    ),
                    children: (0, u.jsx)(_.BE, {
                      src: r.smallRoundCover.uri,
                      withAvatarReplace: !0,
                      fit: "contain",
                      size: 100,
                      className: J().image,
                    }),
                  })
                : void 0;
          }, [
            r.entityType,
            null === (i = r.smallRoundCover) || void 0 === i ? void 0 : i.uri,
          ]);
        return (0, u.jsxs)("div", {
          className: J().root,
          style: c,
          children: [
            r.description &&
              (0, u.jsx)(y.Caption, {
                variant: "span",
                type: "text",
                size: "l",
                weight: "medium",
                className: J().description,
                children: r.description,
              }),
            (0, u.jsx)(v.Paper, {
              radius: r.coverType === o.CIRCLE ? "round" : "m",
              className: (0, p.W)(J().cover, { [J().cover_withShadow]: !l }),
              children:
                r.cover.uri &&
                (0, u.jsx)(_.BE, {
                  src: r.cover.uri,
                  withAvatarReplace: !0,
                  fit: "contain",
                  className: J().image,
                  size: 300,
                }),
            }),
            (0, u.jsxs)("div", {
              className: (0, p.W)(J().meta, { [J().meta_withCover]: d }),
              children: [
                S,
                r.subtitle &&
                  (0, u.jsx)(y.Caption, {
                    variant: "span",
                    type: "text",
                    size: "l",
                    weight: "medium",
                    className: J().subtitle,
                    lineClamp: 2,
                    children: r.subtitle,
                  }),
                r.title &&
                  (0, u.jsx)(y.Heading, {
                    variant: "h3",
                    size: "xl",
                    weight: "bold",
                    className: J().title,
                    lineClamp: 3,
                    children: r.title,
                  }),
              ],
            }),
          ],
        });
      });
      var Z = a(86683),
        K = a.n(Z);
      let $ = (t) => {
        let { data: e } = t;
        return (0, u.jsxs)("div", {
          className: K().root,
          children: [
            (0, u.jsx)(y.Caption, {
              variant: "span",
              type: "text",
              size: "l",
              weight: "medium",
              className: K().text,
              children: e.header,
            }),
            e.stats.map((t, e) =>
              (0, u.jsx)(
                h,
                {
                  data: t,
                  index: e,
                  descriptionLineClamp: 2,
                  withAutoResize: !0,
                },
                t.value,
              ),
            ),
            (0, u.jsx)(y.Caption, {
              variant: "span",
              type: "text",
              size: "l",
              weight: "medium",
              className: K().text,
              children: e.footer,
            }),
          ],
        });
      };
      ((l = d || (d = {})).SMALL = "SMALL"), (l.BIG = "BIG");
      var tt = a(28869),
        te = a.n(tt);
      let ta = (t) => {
          let { data: e } = t,
            a = e.titleSize === d.BIG ? "xxxl" : "xl";
          return (0, u.jsxs)("div", {
            className: te().root,
            children: [
              (0, u.jsx)(y.Heading, {
                variant: "h2",
                size: a,
                weight: "black",
                className: (0, p.W)(
                  te().title,
                  te().text,
                  te()["title_size_".concat(a)],
                ),
                children: e.title,
              }),
              (0, u.jsx)(y.Caption, {
                variant: "span",
                type: "text",
                size: "l",
                weight: "medium",
                className: (0, p.W)(te().subtitle, te().text),
                children: e.subtitle,
              }),
            ],
          });
        },
        ti = (t) => {
          let { data: e } = t;
          return (0, u.jsx)(h, { data: e, withAutoResize: !0 });
        },
        tr = (t) => {
          let { content: e, withPersonalColor: a } = t;
          if (e.data)
            switch (e.type) {
              case c.y.TEXT:
                return (0, u.jsx)(ta, { data: e.data });
              case c.y.STATS:
                return (0, u.jsx)($, { data: e.data });
              case c.y.CHART:
                return (0, u.jsx)(B, { data: e.data });
              case c.y.CHART_FAVORITES:
                return (0, u.jsx)(F, { data: e.data });
              case c.y.SINGLE_ENTITY:
                return (0, u.jsx)(Q, { data: e.data, withPersonalColor: a });
              case c.y.TEXT_FACT:
                return (0, u.jsx)(ti, { data: e.data });
              case c.y.CHART_ARTIST:
                return (0, u.jsx)(G, { data: e.data });
              case c.y.ARTISTS:
                return (0, u.jsx)(I, { data: e.data });
            }
          return null;
        };
    },
    55549: function (t) {
      t.exports = {
        root: "Background_root__s7ccu",
        media_withPersonalColor: "Background_media_withPersonalColor__KuaB0",
        firstFrame: "Background_firstFrame__c5Gw0",
        media: "Background_media__8DaeZ",
      };
    },
    85296: function (t) {
      t.exports = {
        root: "ActionButton_root__ltmGg",
        cover: "ActionButton_cover__4AmUi",
        image: "ActionButton_image__PAxtV",
        text: "ActionButton_text__fTdsF",
        icon: "ActionButton_icon__QbOGp",
      };
    },
    25839: function (t) {
      t.exports = { root: "SimpleButton_root__iLoq8" };
    },
    91248: function (t) {
      t.exports = {
        root: "SlideCard_root__RSnvj",
        background: "SlideCard_background__dftlE",
        playAnimation: "SlideCard_playAnimation__rFZZ3",
        fade: "SlideCard_fade__2HpC6",
        content: "SlideCard_content__7Y6aU",
        content_align_top: "SlideCard_content_align_top__fDfyz",
        content_align_center: "SlideCard_content_align_center__QFnxv",
        content_align_bottom: "SlideCard_content_align_bottom__nsslT",
        logo: "SlideCard_logo__ocv3o",
        button: "SlideCard_button__EYX_G",
      };
    },
    46315: function (t) {
      t.exports = {
        root: "ArtistsContent_root__Jpd8M",
        covers: "ArtistsContent_covers__OeO2T",
        cover: "ArtistsContent_cover__rzlO2",
        image: "ArtistsContent_image__okuHk",
      };
    },
    39153: function (t) {
      t.exports = {
        root: "ChartBlock_root__GQF6w",
        root_spacer_m: "ChartBlock_root_spacer_m__yVzU8",
        root_spacer_l: "ChartBlock_root_spacer_l__wBImk",
        root_spacer_xxl: "ChartBlock_root_spacer_xxl__cSNqe",
      };
    },
    25058: function (t) {
      t.exports = {
        root: "ChartItem_root__nAl8B",
        animation: "ChartItem_animation__P8XVq",
        cover: "ChartItem_cover__jybex",
        order: "ChartItem_order__rTmAw",
        image: "ChartItem_image__enYFm",
        meta: "ChartItem_meta__apT_y",
        text: "ChartItem_text__qRsWe",
        textVariant: "ChartItem_textVariant__0NuuM",
        subTitle: "ChartItem_subTitle__J2Znt",
        stat: "ChartItem_stat__ofy5i",
        statValueContainer: "ChartItem_statValueContainer__pn9Ck",
        statValue: "ChartItem_statValue__fu5js",
      };
    },
    6: function (t) {
      t.exports = {
        root: "ChartArtistContent_root__OPxPJ",
        cover: "ChartArtistContent_cover__flhXs",
        image: "ChartArtistContent_image__D2isT",
        title: "ChartArtistContent_title__a_d_4",
      };
    },
    1870: function (t) {
      t.exports = {
        root: "ChartContent_root__MFONP",
        text: "ChartContent_text__cB18f",
      };
    },
    6269: function (t) {
      t.exports = {
        root: "ChartFavoriteContent_root__ksE_w",
        description: "ChartFavoriteContent_description__CCBKM",
      };
    },
    92859: function (t) {
      t.exports = {
        root: "SingleEntityContent_root__N2vvp",
        description: "SingleEntityContent_description__3pg2A",
        cover: "SingleEntityContent_cover__zeDqH",
        cover_withShadow: "SingleEntityContent_cover_withShadow__tMIE1",
        meta: "SingleEntityContent_meta__XxJqA",
        meta_withCover: "SingleEntityContent_meta_withCover__Bp0Tx",
        smallRoundCover: "SingleEntityContent_smallRoundCover__jicWf",
        smallRoundCover_withShadow:
          "SingleEntityContent_smallRoundCover_withShadow__cjRgd",
        image: "SingleEntityContent_image__P6nK2",
        trailer: "SingleEntityContent_trailer__uYOk0",
        subtitle: "SingleEntityContent_subtitle__KuJyA",
        title: "SingleEntityContent_title__OPb6I",
      };
    },
    89058: function (t) {
      t.exports = {
        root: "StatItem_root__L7Uw0",
        valueContainer: "StatItem_valueContainer__HlYQZ",
        value: "StatItem_value__IkJBB",
        unit: "StatItem_unit__cO46p",
        footer: "StatItem_footer__QZ7q6",
      };
    },
    86683: function (t) {
      t.exports = {
        root: "StatsContent_root__yJVzS",
        text: "StatsContent_text__l2xi_",
      };
    },
    28869: function (t) {
      t.exports = {
        root: "TextContent_root__A4Qmc",
        title_size_xl: "TextContent_title_size_xl__SWva9",
        title_size_xxxl: "TextContent_title_size_xxxl__oBHBa",
        subtitle: "TextContent_subtitle__Xe_FH",
        text: "TextContent_text__xsfVD",
      };
    },
    61169: function (t, e, a) {
      "use strict";
      var i, r;
      a.d(e, {
        y: function () {
          return i;
        },
      }),
        ((r = i || (i = {})).TEXT = "TEXT"),
        (r.TEXT_FACT = "TEXT_FACT"),
        (r.STATS = "STATS"),
        (r.CHART = "CHART"),
        (r.CHART_FAVORITES = "CHART_FAVORITES"),
        (r.SINGLE_ENTITY = "SINGLE_ENTITY"),
        (r.ARTISTS = "ARTISTS"),
        (r.CHART_ARTIST = "CHART_ARTIST");
    },
  },
]);
