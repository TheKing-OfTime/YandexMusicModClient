(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2975],
    {
        22548: (e, t, r) => {
            Promise.resolve().then(r.bind(r, 89231));
        },
        89231: (e, t, r) => {
            "use strict";
            r.d(t, { OAuthPage: () => m });
            var a = r(33008),
                o = r(38230),
                s = r(97531),
                n = r(17846);
            let i = (e, t) =>
                    t.some((t) => (t instanceof RegExp ? t.test(e) : t === e)),
                l = new Set(["https:", "http:", "file:"]);
            var h = r(66268),
                c = r(79169),
                p = r(18740);
            let m = (0, s.PA)(() => {
                let e = (0, c.NFA)(),
                    t = e.get(c.QGx),
                    r = e.get(c.Zft),
                    s = e.get(c.ooW),
                    m = (0, n.useSearchParams)(),
                    { location: u } = (0, c.Pjs)(),
                    d = m.get("redirectUri") || "",
                    f = (function (e, t) {
                        if (
                            ("string" !=
                                typeof (t = {
                                    defaultProtocol: "http",
                                    normalizeProtocol: !0,
                                    forceHttp: !1,
                                    forceHttps: !1,
                                    stripAuthentication: !0,
                                    stripHash: !1,
                                    stripTextFragment: !0,
                                    stripWWW: !0,
                                    removeQueryParameters: [/^utm_\w+/i],
                                    removeTrailingSlash: !0,
                                    removeSingleSlash: !0,
                                    removeDirectoryIndex: !1,
                                    removeExplicitPort: !1,
                                    sortQueryParameters: !0,
                                    ...t,
                                }).defaultProtocol ||
                                t.defaultProtocol.endsWith(":") ||
                                (t.defaultProtocol = `${t.defaultProtocol}:`),
                            (e = e.trim()),
                            /^data:/i.test(e))
                        )
                            return ((e, { stripHash: t }) => {
                                let r =
                                    /^data:(?<type>[^,]*?),(?<data>[^#]*?)(?:#(?<hash>.*))?$/.exec(
                                        e,
                                    );
                                if (!r) throw Error(`Invalid URL: ${e}`);
                                let { type: a, data: o, hash: s } = r.groups,
                                    n = a.split(";");
                                s = t ? "" : s;
                                let i = !1;
                                "base64" === n[n.length - 1] &&
                                    (n.pop(), (i = !0));
                                let l = n.shift()?.toLowerCase() ?? "",
                                    h = [
                                        ...n
                                            .map((e) => {
                                                let [t, r = ""] = e
                                                    .split("=")
                                                    .map((e) => e.trim());
                                                return "charset" === t &&
                                                    "us-ascii" ===
                                                        (r = r.toLowerCase())
                                                    ? ""
                                                    : `${t}${r ? `=${r}` : ""}`;
                                            })
                                            .filter(Boolean),
                                    ];
                                return (
                                    i && h.push("base64"),
                                    (h.length > 0 ||
                                        (l && "text/plain" !== l)) &&
                                        h.unshift(l),
                                    `data:${h.join(";")},${i ? o.trim() : o}${s ? `#${s}` : ""}`
                                );
                            })(e, t);
                        if (
                            ((e) => {
                                try {
                                    let { protocol: t } = new URL(e);
                                    return (
                                        t.endsWith(":") &&
                                        !t.includes(".") &&
                                        !l.has(t)
                                    );
                                } catch {
                                    return !1;
                                }
                            })(e)
                        )
                            return e;
                        let r = e.startsWith("//");
                        (!r && /^\.*\//.test(e)) ||
                            (e = e.replace(
                                /^(?!(?:\w+:)?\/\/)|^\/\//,
                                t.defaultProtocol,
                            ));
                        let a = new URL(e);
                        if (t.forceHttp && t.forceHttps)
                            throw Error(
                                "The `forceHttp` and `forceHttps` options cannot be used together",
                            );
                        if (
                            (t.forceHttp &&
                                "https:" === a.protocol &&
                                (a.protocol = "http:"),
                            t.forceHttps &&
                                "http:" === a.protocol &&
                                (a.protocol = "https:"),
                            t.stripAuthentication &&
                                ((a.username = ""), (a.password = "")),
                            t.stripHash
                                ? (a.hash = "")
                                : t.stripTextFragment &&
                                  (a.hash = a.hash.replace(
                                      /#?:~:text.*?$/i,
                                      "",
                                  )),
                            a.pathname)
                        ) {
                            let e = /\b[a-z][a-z\d+\-.]{1,50}:\/\//g,
                                t = 0,
                                r = "";
                            for (;;) {
                                let o = e.exec(a.pathname);
                                if (!o) break;
                                let s = o[0],
                                    n = o.index;
                                (r += a.pathname
                                    .slice(t, n)
                                    .replace(/\/{2,}/g, "/")),
                                    (r += s),
                                    (t = n + s.length);
                            }
                            (r += a.pathname
                                .slice(t, a.pathname.length)
                                .replace(/\/{2,}/g, "/")),
                                (a.pathname = r);
                        }
                        if (a.pathname)
                            try {
                                a.pathname = decodeURI(a.pathname);
                            } catch {}
                        if (
                            (!0 === t.removeDirectoryIndex &&
                                (t.removeDirectoryIndex = [/^index\.[a-z]+$/]),
                            Array.isArray(t.removeDirectoryIndex) &&
                                t.removeDirectoryIndex.length > 0)
                        ) {
                            let e = a.pathname.split("/");
                            i(e[e.length - 1], t.removeDirectoryIndex) &&
                                (a.pathname =
                                    (e = e.slice(0, -1)).slice(1).join("/") +
                                    "/");
                        }
                        if (
                            (a.hostname &&
                                ((a.hostname = a.hostname.replace(/\.$/, "")),
                                t.stripWWW &&
                                    /^www\.(?!www\.)[a-z\-\d]{1,63}\.[a-z.\-\d]{2,63}$/.test(
                                        a.hostname,
                                    ) &&
                                    (a.hostname = a.hostname.replace(
                                        /^www\./,
                                        "",
                                    ))),
                            Array.isArray(t.removeQueryParameters))
                        )
                            for (let e of [...a.searchParams.keys()])
                                i(e, t.removeQueryParameters) &&
                                    a.searchParams.delete(e);
                        if (
                            (Array.isArray(t.keepQueryParameters) ||
                                !0 !== t.removeQueryParameters ||
                                (a.search = ""),
                            Array.isArray(t.keepQueryParameters) &&
                                t.keepQueryParameters.length > 0)
                        )
                            for (let e of [...a.searchParams.keys()])
                                i(e, t.keepQueryParameters) ||
                                    a.searchParams.delete(e);
                        if (t.sortQueryParameters) {
                            a.searchParams.sort();
                            try {
                                a.search = decodeURIComponent(a.search);
                            } catch {}
                        }
                        t.removeTrailingSlash &&
                            (a.pathname = a.pathname.replace(/\/$/, "")),
                            t.removeExplicitPort && a.port && (a.port = "");
                        let o = e;
                        return (
                            (e = a.toString()),
                            t.removeSingleSlash ||
                                "/" !== a.pathname ||
                                o.endsWith("/") ||
                                "" !== a.hash ||
                                (e = e.replace(/\/$/, "")),
                            (t.removeTrailingSlash || "/" === a.pathname) &&
                                "" === a.hash &&
                                t.removeSingleSlash &&
                                (e = e.replace(/\/$/, "")),
                            r &&
                                !t.normalizeProtocol &&
                                (e = e.replace(/^http:\/\//, "//")),
                            t.stripProtocol &&
                                (e = e.replace(/^(?:https?:)?\/\//, "")),
                            e
                        );
                    })("".concat(u.origin, "/").concat(d));
                return (
                    (0, h.useEffect)(() => {
                        s.remove(c.cYZ.YmUid);
                        let e = window.location.hash;
                        window.location.hash = "";
                        try {
                            if (e.length) {
                                let r = ((e) => (
                                    e.startsWith("#") && (e = e.slice(1)),
                                    e.split("&").reduce((e, t) => {
                                        let [r = "", a = ""] = t.split("=");
                                        return (e[r] = a), e;
                                    }, {})
                                ))(e);
                                if (r.expires_in && r.access_token && r.state) {
                                    var a;
                                    null == (a = t.setToken) ||
                                        a.call(t, {
                                            expiresIn: parseInt(
                                                r.expires_in,
                                                10,
                                            ),
                                            token: r.access_token,
                                            state: r.state,
                                        });
                                } else
                                    throw new o.t(
                                        "No OAuth-token in URL returned by OAuth-service",
                                        { code: "E_OAUTH_PAGE_NO_TOKEN" },
                                    );
                            }
                        } catch (t) {
                            let e = new o.t("Error on OAuth page", {
                                code: "E_OAUTH_PAGE",
                                cause: (0, c.y0I)(t),
                            });
                            r.error(e);
                        }
                        (0, n.redirect)(f);
                    }, [f, t, r, e, s]),
                    (0, a.jsx)(p.JR, {})
                );
            });
        },
    },
    (e) => {
        e.O(
            0,
            [
                7098, 8282, 9712, 5271, 1311, 7764, 6706, 996, 4236, 9169, 8740,
                9902, 5598, 7358,
            ],
            () => e((e.s = 22548)),
        ),
            (_N_E = e.O());
    },
]);
