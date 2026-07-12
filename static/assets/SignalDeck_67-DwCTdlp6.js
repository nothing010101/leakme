import {a as e, o as t, r as n, t as r} from "./jsx-runtime-CAE3TbpD.js";
function i(e, t) {
    if (!e)
        return [];
    let n = e.ca || null
      , r = (e.chain || ``).toLowerCase()
      , i = b[r] || {}
      , a = e => `https://www.google.com/s2/favicons?sz=64&domain=${e}`
      , o = e => {
        let t = String(e ?? ``).trim()
          , n = t.toLowerCase();
        return t && n !== `none` && n !== `no` && n !== `null` ? t : null
    }
      , s = o(t && t.gmgn)
      , c = o(t && t.axiom)
      , l = [];
    if (e.url) {
        let t = `dexscreener.com`;
        try {
            t = new URL(e.url).hostname.replace(/^www\./, ``)
        } catch {}
        l.push({
            label: e.source || `DexScreener`,
            url: e.url,
            icon: a(t)
        })
    } else
        n && i.ds && l.push({
            label: `DexScreener`,
            url: `https://dexscreener.com/${i.ds}/${n}`,
            icon: a(`dexscreener.com`)
        });
    if (n && i.axiom) {
        let e = c ? `https://axiom.trade/t/${n}/${c}?chain=${i.gmgn || r}` : `https://axiom.trade/t/${n}`;
        l.push({
            label: `Axiom`,
            url: e,
            icon: a(`axiom.trade`)
        })
    }
    if (n && i.gmgn) {
        let e = s ? `${s}_${n}` : n;
        l.push({
            label: `GMGN`,
            url: `https://gmgn.ai/${i.gmgn}/token/${e}`,
            icon: a(`gmgn.ai`)
        })
    }
    return l
}
function a({label: e, url: t, icon: n}) {
    let[r,i] = (0,
    _.useState)(!1);
    return (0,
    v.jsx)(`a`, {
        className: `tokbar-link` + (r || !n ? ` tokbar-link--txt` : ``),
        ...t ? {
            href: t,
            target: `_blank`,
            rel: `noreferrer`
        } : {
            role: `button`
        },
        onClick: e => e.stopPropagation(),
        title: `View on ${e}`,
        "aria-label": `View on ${e}`,
        children: n && !r ? (0,
        v.jsx)(`img`, {
            className: `tokbar-srcimg`,
            src: n,
            alt: ``,
            onError: () => i(!0)
        }) : (0,
        v.jsxs)(v.Fragment, {
            children: [e, (0,
            v.jsx)(`span`, {
                className: `tokbar-srcarrow`,
                children: `↗`
            })]
        })
    })
}
function o(e) {
    let t = e.b.degen + e.b.vc + e.b.corporate;
    return {
        total: t,
        inst: (e.b.vc + e.b.corporate) / t
    }
}
function s(e) {
    let t = /^rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)$/i.exec(e || ``);
    return t ? `rgba(${t[1]}, ${t[2]}, ${t[3]}, .12)` : /^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(e || ``) ? e + `1f` : `transparent`
}
function c(e, t) {
    if (!e || typeof e != `object` || t == null)
        return null;
    let n = w.get(e);
    if (!n) {
        n = {};
        for (let t in e)
            n[t.toLowerCase()] = e[t];
        w.set(e, n)
    }
    return n[String(t).toLowerCase()] || null
}
function l({cats: e, catColors: t}) {
    let n = (e || []).slice(0, 4);
    return n.length === 0 ? null : (0,
    v.jsx)(`span`, {
        className: `rc-tags`,
        children: n.map(e => {
            let n = c(t, e) || C;
            return (0,
            v.jsxs)(`span`, {
                className: `rc-tag tt-badge`,
                style: {
                    color: n,
                    background: s(n)
                },
                children: [(0,
                v.jsx)(`span`, {
                    className: `rc-dot`,
                    style: {
                        background: n
                    }
                }), e]
            }, e)
        }
        )
    })
}
function u(e) {
    if (e == null)
        return ``;
    let t = Number(e);
    if (!isFinite(t))
        return ``;
    let n = new Date(t < 0xe8d4a51000 ? t * 1e3 : t);
    return isNaN(n.getTime()) ? `` : `${n.getDate()} ${S[n.getMonth()]}`
}
function d(e) {
    if (e == null)
        return null;
    let t = Number(e);
    if (!isFinite(t))
        return null;
    let n = new Date(t < 0xe8d4a51000 ? t * 1e3 : t);
    if (isNaN(n.getTime()))
        return null;
    let r = `${n.getDate()} ${S[n.getMonth()]} · ${String(n.getHours()).padStart(2, `0`)}:${String(n.getMinutes()).padStart(2, `0`)}`
      , i = e => new Date(e.getFullYear(),e.getMonth(),e.getDate()).getTime()
      , a = Math.round((i(new Date) - i(n)) / 864e5);
    return {
        dt: r,
        rel: a === 0 ? {
            cls: `now`,
            label: `Today`
        } : a === 1 ? {
            cls: `yesterday`,
            label: `Yesterday`
        } : a === -1 ? {
            cls: `tomorrow`,
            label: `Tomorrow`
        } : null
    }
}
function f(e) {
    if (!e || typeof document > `u`)
        return e || ``;
    let t = document.createElement(`textarea`);
    return t.innerHTML = e,
    t.value
}
function p({html: e}) {
    return (0,
    v.jsx)(v.Fragment, {
        children: (0,
        _.useMemo)( () => {
            if (typeof window > `u` || !e)
                return null;
            let t = new DOMParser().parseFromString(f(e), `text/html`)
              , n = []
              , r = 0
              , i = e => e.replace(/\s*(<a\b[^>]*grok-cite[\s\S]*?<\/a>)/gi, `\xA0$1`);
            for (let e of Array.from(t.body.children)) {
                let t = e.tagName.toLowerCase();
                if (t === `p`) {
                    if (/^\s*chain\s*:/i.test(e.textContent))
                        continue;
                    let t = e.innerHTML.replace(/<br\s*\/?>/gi, `
`).split(`
`).map(e => e.trim()).filter(Boolean)
                      , a = e => /^<strong>[\s\S]*<\/strong>$/i.test(e)
                      , o = e => /^[-–•]\s+/.test(e)
                      , s = null
                      , c = t;
                    t.length && a(t[0]) && t[0].replace(/<[^>]+>/g, ``).trim().length <= 70 && (s = t[0].replace(/^<strong>([\s\S]*)<\/strong>$/i, `$1`),
                    c = t.slice(1));
                    let l = c.filter(o);
                    if (l.length >= 2) {
                        s && n.push((0,
                        v.jsx)(`h4`, {
                            className: `reasons-title`,
                            style: {
                                marginTop: n.length ? 18 : 0
                            },
                            children: s
                        }, r++)),
                        c.filter(e => !o(e)).forEach(e => n.push((0,
                        v.jsx)(`p`, {
                            className: `story-body`,
                            dangerouslySetInnerHTML: {
                                __html: i(e)
                            }
                        }, r++))),
                        n.push((0,
                        v.jsx)(`ul`, {
                            className: `story-points`,
                            style: {
                                marginTop: s ? 10 : 14
                            },
                            children: l.map( (e, t) => (0,
                            v.jsx)(`li`, {
                                dangerouslySetInnerHTML: {
                                    __html: i(e.replace(/^[-–•]\s+/, ``))
                                }
                            }, t))
                        }, r++));
                        continue
                    }
                    if (s) {
                        n.push((0,
                        v.jsx)(`h4`, {
                            className: `reasons-title`,
                            style: {
                                marginTop: n.length ? 18 : 0
                            },
                            children: s
                        }, r++));
                        let e = c.join(` `).trim();
                        e && n.push((0,
                        v.jsx)(`p`, {
                            className: `story-body`,
                            dangerouslySetInnerHTML: {
                                __html: i(e)
                            }
                        }, r++));
                        continue
                    }
                    n.push((0,
                    v.jsx)(`p`, {
                        className: `story-body`,
                        dangerouslySetInnerHTML: {
                            __html: i(e.innerHTML)
                        }
                    }, r++));
                    continue
                }
                if (t === `ul` || t === `ol`) {
                    let t = Array.from(e.children);
                    if (t.length >= 3 && t.every(e => !e.querySelector(`strong`) || !e.textContent.includes(`:`) ? !1 : e.textContent.slice(e.textContent.indexOf(`:`) + 1).trim().length <= 16)) {
                        n.push((0,
                        v.jsx)(`div`, {
                            className: `comp-nums`,
                            style: {
                                marginTop: 14
                            },
                            children: t.map( (e, t) => {
                                let n = e.querySelector(`strong`).textContent.replace(/:$/, ``).trim();
                                return (0,
                                v.jsxs)(`span`, {
                                    children: [(0,
                                    v.jsx)(`b`, {
                                        children: e.textContent.slice(e.textContent.indexOf(`:`) + 1).trim()
                                    }), ` `, n.toLowerCase()]
                                }, t)
                            }
                            )
                        }, r++));
                        continue
                    }
                    n.push((0,
                    v.jsx)(`ul`, {
                        className: `story-points`,
                        style: {
                            marginTop: 10
                        },
                        children: t.map( (e, t) => (0,
                        v.jsx)(`li`, {
                            dangerouslySetInnerHTML: {
                                __html: i(e.innerHTML)
                            }
                        }, t))
                    }, r++));
                    continue
                }
                if (/^h[1-6]$/.test(t)) {
                    n.push((0,
                    v.jsx)(`h4`, {
                        className: `reasons-title`,
                        style: {
                            marginTop: n.length ? 18 : 0
                        },
                        children: e.textContent
                    }, r++));
                    continue
                }
                if (t === `blockquote`) {
                    n.push((0,
                    v.jsx)(`p`, {
                        className: `story-take`,
                        dangerouslySetInnerHTML: {
                            __html: i(e.innerHTML)
                        }
                    }, r++));
                    continue
                }
                n.push((0,
                v.jsx)(`p`, {
                    className: `story-body`,
                    dangerouslySetInnerHTML: {
                        __html: i(e.outerHTML)
                    }
                }, r++))
            }
            return n
        }
        , [e])
    })
}
function m({name: e, avatar: t, empty: n, size: r=22}) {
    let i = t || n || ``;
    if (!i) {
        let t = [...e].reduce( (e, t) => (e * 31 + t.charCodeAt(0)) % 360, 7)
          , n = e.replace(/[^\p{L}\p{N} ]/gu, ``).trim().split(/\s+/).slice(0, 2).map(e => e[0]?.toUpperCase() || ``).join(``) || `?`;
        return (0,
        v.jsx)(`span`, {
            className: `kav`,
            title: e,
            style: {
                width: r,
                height: r,
                background: `linear-gradient(135deg,hsl(${t} 62% 33%),hsl(${(t + 40) % 360} 58% 20%))`
            },
            children: n
        })
    }
    return (0,
    v.jsx)(`span`, {
        className: `kav`,
        title: e,
        style: {
            width: r,
            height: r
        },
        children: (0,
        v.jsx)(`img`, {
            src: i,
            alt: ``,
            loading: `lazy`,
            onError: e => {
                let t = e.currentTarget;
                n && !t.dataset.fb && (t.dataset.fb = `1`,
                t.src = n)
            }
            ,
            style: {
                width: `100%`,
                height: `100%`,
                objectFit: `cover`,
                display: `block`,
                borderRadius: `inherit`
            }
        })
    })
}
function h({a: e, auth: t, isWatched: n, onToggleWatch: r, mark: i, onMark: a, hideX: o}) {
    return (0,
    v.jsxs)(`div`, {
        className: `story-actions`,
        children: [a && (0,
        v.jsxs)(`div`, {
            className: `markset`,
            children: [(0,
            v.jsxs)(`button`, {
                className: `markbtn skip` + (i === `skip` ? ` on` : ``),
                onClick: () => a(`skip`),
                title: `Skip — pass on this one`,
                children: [(0,
                v.jsxs)(`svg`, {
                    viewBox: `0 0 24 24`,
                    fill: `none`,
                    stroke: `currentColor`,
                    strokeWidth: `2`,
                    strokeLinecap: `round`,
                    strokeLinejoin: `round`,
                    children: [(0,
                    v.jsx)(`path`, {
                        d: `M5 5l8 7-8 7z`
                    }), (0,
                    v.jsx)(`path`, {
                        d: `M18 5v14`
                    })]
                }), `Skip`]
            }), (0,
            v.jsxs)(`button`, {
                className: `markbtn rug` + (i === `rug` ? ` on` : ``),
                onClick: () => a(`rug`),
                title: `Rug — flag this as a rug`,
                children: [(0,
                v.jsxs)(`svg`, {
                    viewBox: `0 0 24 24`,
                    fill: `none`,
                    stroke: `currentColor`,
                    strokeWidth: `2`,
                    strokeLinecap: `round`,
                    strokeLinejoin: `round`,
                    children: [(0,
                    v.jsx)(`path`, {
                        d: `M5 21V4`
                    }), (0,
                    v.jsx)(`path`, {
                        className: `flag`,
                        d: `M5 4h11l-2 4 2 4H5`
                    })]
                }), `Rug`]
            })]
        }), (0,
        v.jsxs)(`button`, {
            className: `watchbtn` + (t && n ? ` on` : ``),
            onClick: r,
            children: [(0,
            v.jsx)(`svg`, {
                viewBox: `0 0 24 24`,
                width: `14`,
                height: `14`,
                children: (0,
                v.jsx)(`path`, {
                    d: `M12 .587l3.668 7.431 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z`
                })
            }), t && n ? `Watchlisted` : `Add to watchlist`]
        }), !o && (0,
        v.jsx)(`a`, {
            className: `xlink`,
            href: `https://x.com/${e.handle}`,
            target: `_blank`,
            rel: `noreferrer`,
            children: `open on 𝕏 ↗`
        })]
    })
}
function g({a: e, auth: t, isWatched: n, onToggleWatch: r, note: s, onNote: c, onNoteBlur: f, onNoteRetry: g, noteStatus: b, onRequireAuth: S, hideHead: C, mark: w, onMark: T, notableEmpty: E, panelClass: D=``, catColors: ee, histSel: O, onHistSel: k, venueRefs: A}) {
    let[j,te] = (0,
    _.useState)(!1)
      , [ne,re] = (0,
    _.useState)(O || 0)
      , [M,N] = (0,
    _.useState)(4)
      , [P,ie] = (0,
    _.useState)(``)
      , F = (0,
    _.useRef)(null);
    if ((0,
    _.useEffect)( () => {
        let e = () => {
            let e = F.current;
            if (!e)
                return;
            let t = getComputedStyle(e).gridTemplateColumns.split(` `).filter(Boolean).length;
            N(Math.max(1, t))
        }
        ;
        return e(),
        window.addEventListener(`resize`, e),
        () => window.removeEventListener(`resize`, e)
    }
    , []),
    !e)
        return null;
    let ae = o(e)
      , I = e.history && e.history.length ? e.history : []
      , L = e.fresh ? [{
        fresh: !0,
        ts: e.trendingTs,
        cats: e.cats,
        title: null,
        report: null
    }, ...I] : I.length ? I : e.report || e.trendingTs != null || e.cats && e.cats.length || e.pending || e.unexplained ? [{
        title: e.title,
        report: e.report,
        cats: e.cats,
        ts: e.trendingTs
    }] : null
      , R = L ? Math.min(Math.max(0, ne), L.length - 1) : 0
      , z = L ? L[R] : null
      , oe = !!(z && (z.fresh || !e.fresh && e.pending && R === 0))
      , B = !!(z && !e.fresh && e.unexplained && R === 0)
      , se = !!(L && L.length > 1)
      , ce = oe || B ? null : z && z.title || e.title
      , le = s === void 0 ? P : s
      , ue = c || ie;
    return (0,
    v.jsxs)(`div`, {
        className: `panel` + (C ? ` panel--flush` : ``) + (D ? ` ` + D : ``),
        children: [!C && (0,
        v.jsxs)(`div`, {
            className: `story-top`,
            children: [oe ? (0,
            v.jsxs)(`span`, {
                className: `pending-tag`,
                children: [(0,
                v.jsx)(`i`, {
                    className: `pdot`
                }), `Analyzing`]
            }) : B ? (0,
            v.jsxs)(`span`, {
                className: `unexplained-tag`,
                children: [(0,
                v.jsxs)(`svg`, {
                    viewBox: `0 0 24 24`,
                    fill: `none`,
                    stroke: `currentColor`,
                    strokeWidth: `2`,
                    strokeLinecap: `round`,
                    strokeLinejoin: `round`,
                    children: [(0,
                    v.jsx)(`circle`, {
                        cx: `12`,
                        cy: `12`,
                        r: `9`
                    }), (0,
                    v.jsx)(`path`, {
                        d: `M9.6 9a2.4 2.4 0 1 1 3.4 2.2c-.7.4-1 .9-1 1.6`
                    }), (0,
                    v.jsx)(`path`, {
                        d: `M12 16.4h.01`
                    })]
                }), `No catalyst found`]
            }) : (0,
            v.jsx)(`h3`, {
                className: `story-title`,
                children: ce
            }), (0,
            v.jsx)(h, {
                a: e,
                auth: t,
                isWatched: n,
                onToggleWatch: r,
                mark: w,
                onMark: T
            })]
        }), e.token && (e.token.ticker || e.token.change24h != null) && ( () => {
            let t = e.token.change24h
              , n = i(e.token, A);
            return (0,
            v.jsxs)(`div`, {
                className: `tokbar`,
                children: [e.token.ticker && (0,
                v.jsx)(`span`, {
                    className: `tokbar-pair`,
                    children: (0,
                    v.jsxs)(`b`, {
                        children: [`$`, e.token.ticker]
                    })
                }), e.token.price && (0,
                v.jsx)(`span`, {
                    className: `tokbar-price`,
                    children: e.token.price
                }), t != null && (0,
                v.jsxs)(`span`, {
                    className: `tokbar-chg ` + (t > 0 ? `up` : t < 0 ? `down` : `flat`),
                    children: [t > 0 ? `▲ ` : t < 0 ? `▼ ` : ``, Math.round(Math.abs(t)).toLocaleString(), `%`]
                }), e.token.mc && (0,
                v.jsxs)(`span`, {
                    className: `tokbar-stat`,
                    children: [(0,
                    v.jsx)(`i`, {
                        children: `MC`
                    }), e.token.mc]
                }), e.token.lq && (0,
                v.jsxs)(`span`, {
                    className: `tokbar-stat tokbar-lq`,
                    children: [(0,
                    v.jsx)(`i`, {
                        children: `LQ`
                    }), e.token.lq]
                }), e.token.chain && (0,
                v.jsx)(`span`, {
                    className: `tokbar-venue`,
                    children: e.token.chain
                }), n.length > 0 && (0,
                v.jsx)(`span`, {
                    className: `tokbar-src`,
                    children: n.map(e => (0,
                    v.jsx)(a, {
                        ...e
                    }, e.label))
                })]
            })
        }
        )(), ( () => {
            if (!L)
                return null;
            let e = d(z.ts)
              , t = oe ? (0,
            v.jsx)(`p`, {
                className: `story-pending`,
                children: `We're still piecing together why this account is trending. It surfaced from the follow data — a full breakdown will land here once the signal's analyzed. The numbers below are live in the meantime.`
            }) : B ? (0,
            v.jsx)(`p`, {
                className: `story-unexplained`,
                children: `We analyzed this account and couldn't find a clear reason it's trending — no token, no announcement, nothing public to tie the recent follows to. We'll update this card if a catalyst surfaces.`
            }) : z.report ? (0,
            v.jsx)(p, {
                html: z.report
            }) : null;
            return !se && (oe || B) ? t : (0,
            v.jsxs)(`div`, {
                className: `reasons`,
                children: [(0,
                v.jsxs)(`div`, {
                    className: `reasons-head`,
                    children: [!oe && !B && (0,
                    v.jsxs)(`div`, {
                        className: `reasons-when`,
                        children: [e && (0,
                        v.jsxs)(v.Fragment, {
                            children: [e.dt, e.rel ? (0,
                            v.jsx)(`span`, {
                                className: `story-` + e.rel.cls,
                                children: e.rel.label
                            }) : null]
                        }), !C && (0,
                        v.jsx)(l, {
                            cats: z.cats,
                            catColors: ee
                        })]
                    }), se && (0,
                    v.jsx)(`div`, {
                        className: `evnav-chips`,
                        children: L.map( (e, t) => (0,
                        v.jsxs)(`button`, {
                            className: `evchip` + (t === R ? ` on` : ``),
                            onClick: () => {
                                re(t),
                                k && k(t)
                            }
                            ,
                            children: [t === 0 && (0,
                            v.jsx)(`span`, {
                                className: `evchip-dot`
                            }), u(e.ts)]
                        }, t))
                    })]
                }), C && R > 0 && z.title && (0,
                v.jsx)(`div`, {
                    className: `reasons-hist`,
                    children: (0,
                    v.jsx)(`h4`, {
                        className: `reasons-title`,
                        children: z.title
                    })
                }), t]
            })
        }
        )(), (0,
        v.jsxs)(`div`, {
            className: `comp-nums`,
            children: [(0,
            v.jsxs)(`span`, {
                children: [(0,
                v.jsx)(`b`, {
                    children: e.ageLabel
                }), (0,
                v.jsx)(`span`, {
                    className: `cn-lbl`,
                    children: `old`
                })]
            }), (0,
            v.jsx)(`span`, {
                className: `cn-div cn-divm`
            }), (0,
            v.jsxs)(`span`, {
                children: [(0,
                v.jsx)(`b`, {
                    children: e.followers
                }), ` followers`]
            }), (0,
            v.jsx)(`span`, {
                className: `cn-div`
            }), (0,
            v.jsxs)(`span`, {
                children: [(0,
                v.jsx)(`b`, {
                    children: e.kols24h
                }), ` in 24h`]
            }), (0,
            v.jsxs)(`span`, {
                children: [(0,
                v.jsx)(`b`, {
                    children: ae.total
                }), ` KOLs total`]
            }), (0,
            v.jsx)(`span`, {
                className: `cn-break`
            }), (0,
            v.jsxs)(`span`, {
                children: [(0,
                v.jsx)(`i`, {
                    style: {
                        background: y.degen.color
                    }
                }), e.b.degen, ` degen`]
            }), (0,
            v.jsxs)(`span`, {
                children: [(0,
                v.jsx)(`i`, {
                    style: {
                        background: y.vc.color
                    }
                }), e.b.vc, ` VC`]
            }), (0,
            v.jsxs)(`span`, {
                children: [(0,
                v.jsx)(`i`, {
                    style: {
                        background: y.corporate.color
                    }
                }), e.b.corporate, ` corporate`]
            })]
        }), (0,
        v.jsxs)(`div`, {
            className: `khead`,
            children: [`Notable followers`, (0,
            v.jsx)(`span`, {
                className: `kcount`,
                children: e.notableCount ?? e.notable.length
            })]
        }), (0,
        v.jsx)(`div`, {
            className: `kgrid`,
            ref: F,
            children: (j ? e.notable : e.notable.slice(0, M * x)).map( ([e,t,n]) => (0,
            v.jsxs)(`div`, {
                className: `kol`,
                children: [(0,
                v.jsx)(m, {
                    name: e,
                    avatar: n,
                    empty: E,
                    size: 28
                }), (0,
                v.jsxs)(`div`, {
                    className: `ktxt`,
                    children: [(0,
                    v.jsx)(`div`, {
                        className: `kn`,
                        children: e
                    }), (0,
                    v.jsx)(`div`, {
                        className: `kr`,
                        children: t
                    })]
                })]
            }, e + t))
        }), e.notable.length > M * x && (0,
        v.jsx)(`button`, {
            className: `kmore`,
            onClick: () => te(e => !e),
            children: j ? `Show less` : `Show all ${e.notable.length}`
        }), (0,
        v.jsxs)(`div`, {
            className: `notes`,
            children: [(0,
            v.jsxs)(`label`, {
                className: `notes-h`,
                htmlFor: `note-` + e.handle,
                children: [`Your notes`, b === `saving` && (0,
                v.jsx)(`span`, {
                    className: `notes-status`,
                    children: ` · Saving…`
                }), b === `saved` && (0,
                v.jsx)(`span`, {
                    className: `notes-status ok`,
                    children: ` · Saved`
                }), b === `error` && (0,
                v.jsxs)(`span`, {
                    className: `notes-status err`,
                    children: [` · Couldn't save`, g ? (0,
                    v.jsxs)(v.Fragment, {
                        children: [` · `, (0,
                        v.jsx)(`button`, {
                            className: `notes-retry`,
                            onClick: g,
                            children: `Retry`
                        })]
                    }) : null]
                })]
            }), t ? (0,
            v.jsx)(`textarea`, {
                id: `note-` + e.handle,
                className: `notes-ta`,
                ref: e => {
                    e && (e.style.height = `auto`,
                    e.style.height = e.scrollHeight + `px`)
                }
                ,
                value: le || ``,
                onChange: e => {
                    ue(e.target.value),
                    e.target.style.height = `auto`,
                    e.target.style.height = e.target.scrollHeight + `px`
                }
                ,
                onBlur: f || void 0,
                placeholder: `Private notes on this project — only you can see these.`
            }) : (0,
            v.jsxs)(`button`, {
                className: `notes-locked`,
                onClick: S,
                children: [(0,
                v.jsxs)(`svg`, {
                    viewBox: `0 0 24 24`,
                    fill: `none`,
                    stroke: `currentColor`,
                    strokeWidth: `1.8`,
                    strokeLinecap: `round`,
                    strokeLinejoin: `round`,
                    children: [(0,
                    v.jsx)(`rect`, {
                        x: `4`,
                        y: `11`,
                        width: `16`,
                        height: `9`,
                        rx: `2`
                    }), (0,
                    v.jsx)(`path`, {
                        d: `M8 11V7a4 4 0 0 1 8 0v4`
                    })]
                }), `Log in to add private notes`]
            })]
        })]
    })
}
var _, v, y, b, x, S, C, w, T, E = e(( () => {
    _ = t(n()),
    v = r(),
    y = {
        degen: {
            label: `Degen`,
            color: `#f5a524`
        },
        vc: {
            label: `VC`,
            color: `#a78bfa`
        },
        corporate: {
            label: `Corporate`,
            color: `#38bdf8`
        }
    },
    b = {
        solana: {
            ds: `solana`,
            gmgn: `sol`,
            axiom: !0
        },
        ethereum: {
            ds: `ethereum`,
            gmgn: `eth`,
            axiom: !0
        },
        bsc: {
            ds: `bsc`,
            gmgn: `bsc`,
            axiom: !0
        },
        base: {
            ds: `base`,
            gmgn: `base`
        },
        robinhood: {
            ds: `robinhood`,
            gmgn: `robinhood`
        },
        arbitrum: {
            ds: `arbitrum`
        },
        tron: {
            ds: `tron`,
            gmgn: `tron`
        },
        evm: {}
    },
    x = 3,
    S = [`Jan`, `Feb`, `Mar`, `Apr`, `May`, `Jun`, `Jul`, `Aug`, `Sep`, `Oct`, `Nov`, `Dec`],
    C = `rgb(139, 152, 147)`,
    w = new WeakMap,
    T = `
  .panel{padding:4px 18px 18px 18px;border-top:1px solid var(--line);margin-top:8px;animation:drop .25s ease}
  .panel--flush{border-top:none;margin-top:0;padding-top:0}
  .panel--deck{padding-left:58px;margin-top:0}
  .tokbar-price{display:inline-flex;align-items:center;color:var(--mut2);font-weight:400}
  .notes-status{text-transform:none;letter-spacing:0;font-weight:500;color:var(--mut2)}
  .notes-status.ok{color:var(--acid)}
  .notes-status.err{color:#f5a524}
  .notes-retry{background:none;border:none;padding:0;color:var(--acid);font:inherit;text-transform:none;letter-spacing:0;cursor:pointer;text-decoration:underline}
  @keyframes drop{from{opacity:0;transform:translateY(-4px)}to{opacity:1;transform:none}}
  .story-top{display:flex;justify-content:space-between;align-items:baseline;gap:16px;flex-wrap:wrap;margin:13px 0 0}
  .story-title{margin:0;font-family:'Bricolage Grotesque',system-ui,sans-serif;font-weight:700;font-size:22px;line-height:1.25;letter-spacing:-.02em;color:var(--ink);max-width:74ch}
  .pending-tag{display:inline-flex;align-items:center;gap:8px;font-family:'Bricolage Grotesque',system-ui,sans-serif;font-weight:700;font-size:14px;color:var(--mut)}
  .story-actions{display:flex;align-items:center;gap:14px;flex:none}
  .watchbtn{display:inline-flex;align-items:center;gap:6px;font-family:inherit;font-size:12.5px;font-weight:600;color:var(--mut);background:var(--bg2);border:1px solid var(--line2);border-radius:9px;padding:6px 12px;cursor:pointer;transition:.12s}
  .watchbtn:hover{color:var(--ink);border-color:var(--mut2)}
  .watchbtn svg{fill:none;stroke:currentColor;stroke-width:1.7;stroke-linejoin:round}
  .watchbtn.on{color:var(--acid);border-color:rgba(185,247,62,.4);background:rgba(185,247,62,.08)}
  .watchbtn.on svg{fill:var(--acid);stroke:var(--acid)}
  .xlink{font-size:12px;color:var(--acid2);white-space:nowrap;flex:none}
  .xlink:hover{color:var(--acid)}
  .markset{display:inline-flex;align-items:center;gap:6px;padding-right:13px;margin-right:1px;border-right:1px solid var(--line2)}
  .markbtn{display:inline-flex;align-items:center;gap:6px;font-family:inherit;font-size:12.5px;font-weight:600;color:var(--mut);background:var(--bg2);border:1px solid var(--line2);border-radius:9px;padding:6px 11px;cursor:pointer;transition:.12s}
  .markbtn svg{width:14px;height:14px;flex:none}
  .markbtn:hover{color:var(--ink);border-color:var(--mut2)}
  .markbtn.skip.on{color:#d4ddd8;border-color:var(--mut2);background:rgba(139,152,147,.16)}
  .markbtn.rug.on{color:#f5616e;border-color:rgba(245,97,110,.5);background:rgba(245,97,110,.12)}
  .markbtn.rug.on .flag{fill:#f5616e}
  .tokbar{display:flex;width:fit-content;max-width:100%;align-items:center;gap:11px;flex-wrap:wrap;margin:13px 0 0;padding:9px 14px;border-radius:11px;border:1px solid var(--line2);background:var(--bg2);text-decoration:none;font-family:'JetBrains Mono',monospace;font-size:12.5px;color:var(--mut)}
  .tokbar>*{flex:none}
  .tokbar:hover{border-color:var(--mut2)}
  .tokbar-pair b{color:var(--ink);font-weight:700}
  .tokbar-chg{display:inline-flex;align-items:center;gap:5px;font-weight:700}
  .tokbar-chg i{font-style:normal;font-weight:400;font-size:10.5px;color:var(--mut2)}
  .tokbar-chg.up{color:var(--acid)}
  .tokbar-chg.down{color:#f5616e}
  .tokbar-chg.flat{color:#8b9893}
  .tokbar-venue{color:var(--mut2)}
  .tokbar-stat{display:inline-flex;align-items:center;gap:5px;color:var(--ink)}
  .tokbar-stat i{font-style:normal;font-weight:400;font-size:10.5px;color:var(--mut2)}
  .tokbar-src{margin-left:auto;display:inline-flex;align-items:center;gap:9px;padding-left:11px;border-left:1px solid var(--line2)}
  .tokbar-link{display:inline-flex;align-items:center;gap:4px;text-decoration:none;color:var(--mut);opacity:.9;transition:opacity .14s}
  .tokbar-link:hover{opacity:1}
  .tokbar-link--txt{font-family:'JetBrains Mono',monospace;font-size:11px;color:var(--acid2)}
  .tokbar-srcimg{width:15px;height:15px;border-radius:3px;display:block}
  .tokbar-srcarrow{font-family:'Hanken Grotesk',sans-serif;font-size:12px;color:var(--acid2)}
  /* Mobile tokbar reflow — matches the static design: drop liquidity + chain, go borderless with a
     top rule, and reorder to ticker · MC … change (pushed right) · source links. Lives in CARD_CSS so
     it wins the cascade over the base .tokbar / .tokbar-stat rules (CARD_CSS is injected last). */
  @media(max-width:640px){
    .tokbar{width:auto;max-width:none;background:none;border:0;border-top:1px solid var(--line);border-radius:0;padding:18px 0 0;margin-top:13px;gap:10px;justify-content:flex-start}
    .tokbar-lq,.tokbar-venue,.tokbar-srctext,.tokbar-price{display:none}
    .tokbar-pair{order:1}
    .tokbar-stat{order:2;color:var(--mut)}
    .tokbar-chg{order:3;margin-left:auto;font-size:15px;letter-spacing:-.01em}
    .tokbar-src{order:4;margin-left:0;padding-left:0;border-left:0;gap:14px;flex-wrap:wrap}
    .tokbar-srcarrow{color:var(--mut2);font-size:13px}
    /* Card header actions collapse to icon-only on mobile (matches the static) so the title + actions
       stay on one line instead of wrapping. Text is hidden via font-size:0; icons are enlarged. */
    .story-actions{gap:13px}
    .markset{padding-right:13px;margin-right:0;gap:12px}
    .markbtn{font-size:0;gap:0;padding:1px;border:0;background:none;color:var(--mut2)}
    .markbtn svg{width:19px;height:19px}
    .markbtn.skip.on{color:#e7b748;background:none;border:0}
    .markbtn.rug.on{color:#f5616e;background:none;border:0}
    .watchbtn{font-size:0;gap:0;padding:1px;border:0;background:none;color:var(--mut2)}
    .watchbtn svg{width:18px;height:18px}
    .watchbtn.on{color:var(--acid);background:none;border:0}
  }
  .story-pending{margin:13px 0 0;font-size:13.5px;line-height:1.6;color:var(--mut);max-width:80ch;padding:13px 15px;border:1px dashed var(--line2);border-radius:11px;background:var(--bg2)}
  .story-unexplained{margin:13px 0 0;font-size:13.5px;line-height:1.6;color:var(--mut);max-width:80ch;padding:13px 15px;border:1px dashed var(--line2);border-radius:11px;background:var(--bg2)}
  .story-unexplained b{color:#cfd6d1;font-weight:600}
  .unexplained-tag{display:inline-flex;align-items:center;gap:8px;font-family:'Bricolage Grotesque',system-ui,sans-serif;font-weight:700;font-size:15px;color:var(--mut);flex:1 1 auto;min-width:0}
  .unexplained-tag svg{width:17px;height:17px;flex:none}
  .rc-tags{display:inline-flex;align-items:center;flex-wrap:wrap;gap:6px}
  .tt-badge{display:inline-flex;align-items:center;gap:5px;padding:3px 8px;line-height:1;font-family:'Hanken Grotesk',sans-serif;font-weight:700;font-size:9.5px;letter-spacing:.04em;text-transform:uppercase;border-radius:5px}
  .rc-dot{width:5px;height:5px;border-radius:50%;flex:none}
  .reasons{margin-top:18px;padding-top:16px;border-top:1px solid var(--line)}
  .reasons-head{display:flex;align-items:center;justify-content:space-between;gap:12px;flex-wrap:wrap;margin-bottom:9px}
  .reasons-when{display:flex;align-items:center;flex-wrap:wrap;gap:8px;font-family:'JetBrains Mono',monospace;font-size:11.5px;color:var(--mut)}
  .reasons-title{margin:0 0 7px;font-family:'Bricolage Grotesque',system-ui,sans-serif;font-weight:700;font-size:17px;color:var(--ink);line-height:1.3}
  .reasons-hist{margin:2px 0 8px;display:flex;flex-direction:column;gap:7px}
  .reasons-hist .reasons-title{margin:0}
  .evnav-chips{display:flex;flex-wrap:wrap;gap:6px;margin-left:auto}
  .evchip{display:inline-flex;align-items:center;gap:6px;font-family:'JetBrains Mono',monospace;font-size:11.5px;font-weight:600;color:var(--mut);background:var(--bg2);border:1px solid var(--line2);border-radius:8px;padding:5px 10px;cursor:pointer;transition:all .12s}
  .evchip:hover{color:var(--ink);border-color:var(--mut2)}
  .evchip.on{color:var(--acid);border-color:rgba(185,247,62,.45);background:rgba(185,247,62,.09)}
  .evchip-dot{width:6px;height:6px;border-radius:50%;background:var(--acid);box-shadow:0 0 8px rgba(185,247,62,.6)}
  .story-now{font-family:'Hanken Grotesk',sans-serif;font-size:9.5px;font-weight:700;letter-spacing:.04em;text-transform:uppercase;color:#0a0c0b;background:var(--acid);border-radius:5px;padding:2px 6px}
  .story-yesterday{font-family:'Hanken Grotesk',sans-serif;font-size:9.5px;font-weight:700;letter-spacing:.04em;text-transform:uppercase;color:#0a0c0b;background:#f5c542;border-radius:5px;padding:2px 6px}
  .story-tomorrow{font-family:'Hanken Grotesk',sans-serif;font-size:9.5px;font-weight:700;letter-spacing:.04em;text-transform:uppercase;color:#0a0c0b;background:#38bdf8;border-radius:5px;padding:2px 6px}
  .story-body{margin:10px 0 0;font-size:15px;line-height:1.7;color:#d4ddd8;max-width:80ch}
  .story-h{margin:15px 0 7px;font-size:11px;letter-spacing:.08em;text-transform:uppercase;color:var(--mut2);font-weight:700}
  .story-points{margin:0;padding:0;list-style:none;max-width:80ch;display:flex;flex-direction:column;gap:11px}
  .story-points li{position:relative;padding-left:20px;font-size:15px;line-height:1.7;color:#d4ddd8}
  .story-points li strong{color:var(--ink);font-weight:700}
  .story-points li::before{content:"";position:absolute;left:3px;top:11px;width:5px;height:5px;border-radius:50%;background:var(--acid2)}
  .story-take{margin:16px 0 0;font-size:14.5px;line-height:1.6;color:#dde4df;max-width:92ch;padding:12px 15px;background:var(--bg2);border:1px solid var(--line2);border-radius:10px}
  .story-take span{display:block;font-size:10.5px;letter-spacing:.08em;text-transform:uppercase;color:var(--acid2);font-weight:700;margin-bottom:4px}
  .comp-nums{display:flex;gap:16px;flex-wrap:wrap;margin-top:16px;color:var(--mut);font-size:12.5px;align-items:center}
  .comp-nums b{color:var(--ink);font-family:'JetBrains Mono',monospace}
  .comp-nums span{display:flex;align-items:center;gap:6px}
  .comp-nums .cn-div{width:1px;height:13px;background:var(--line2);margin:0 4px;padding:0;align-self:center}
  .comp-nums .cn-divm{display:none}
  .comp-nums .cn-break{display:none}
  .comp-nums i{width:8px;height:8px;border-radius:2px}
  .khead{display:flex;align-items:baseline;gap:9px;margin-top:16px;font-size:11px;letter-spacing:.08em;text-transform:uppercase;color:var(--mut2);font-weight:700}
  .kcount{font-family:'JetBrains Mono',monospace;font-size:11px;letter-spacing:0;text-transform:none;color:var(--mut2);font-weight:400}
  .kgrid{display:grid;grid-template-columns:repeat(auto-fill,minmax(210px,1fr));gap:11px 16px;margin-top:12px}
  .kol{display:flex;align-items:center;gap:9px;min-width:0}
  .kav{border-radius:7px;display:flex;align-items:center;justify-content:center;font-size:8.5px;font-weight:700;color:#fff;font-family:'Bricolage Grotesque',system-ui,sans-serif;flex:none;overflow:hidden}
  .ktxt{min-width:0}
  .kn{font-size:12.5px;font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
  .kr{font-size:11px;color:var(--mut);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
  .kmore{margin-top:14px;font-family:inherit;font-size:12.5px;font-weight:600;color:var(--acid2);background:none;border:1px solid var(--line2);border-radius:9px;padding:7px 15px;cursor:pointer;transition:.15s}
  .kmore:hover{color:var(--acid);border-color:var(--mut2)}
  .notes{margin-top:18px}
  .notes-h{display:block;font-size:10.5px;text-transform:uppercase;letter-spacing:.1em;color:var(--mut2);font-weight:600;margin-bottom:7px}
  .notes-ta{width:100%;box-sizing:border-box;min-height:96px;resize:none;overflow:hidden;background:var(--bg2);border:1px solid var(--line2);border-radius:12px;padding:13px 15px;color:var(--ink);font-family:'Hanken Grotesk',sans-serif;font-size:13.5px;line-height:1.65;outline:none;box-shadow:inset 0 1px 2px rgba(0,0,0,.22);transition:border-color .14s,box-shadow .14s}
  .notes-ta::placeholder{color:var(--mut2)}
  .notes-ta:focus{border-color:rgba(185,247,62,.5);box-shadow:inset 0 1px 2px rgba(0,0,0,.22),0 0 0 3px rgba(185,247,62,.12)}
  .notes-locked{display:flex;align-items:center;justify-content:center;gap:9px;width:100%;box-sizing:border-box;min-height:96px;background:var(--bg2);border:1px dashed var(--line2);border-radius:12px;color:var(--mut);font-family:inherit;font-size:13px;font-weight:600;cursor:pointer;transition:all .14s}
  .notes-locked:hover{color:var(--ink);border-color:var(--mut2)}
  .notes-locked svg{width:15px;height:15px;color:var(--acid)}

  /* report rendering (Grok body_html) — reuses the classes above */
  .report-foot{margin:18px 0 0;padding-top:14px;border-top:1px solid var(--line);font-family:'JetBrains Mono',monospace;font-size:12.5px;line-height:1.9;color:#cdd6d1}
  .report-foot strong{color:var(--mut2);font-weight:700;text-transform:uppercase;letter-spacing:.05em}
  .reasons a.grok-cite{background:rgba(185,247,62,.10)!important;color:var(--acid2)!important;border:1px solid rgba(185,247,62,.22);font-family:'JetBrains Mono',monospace!important;font-weight:700;padding:1px 7px!important;border-radius:6px!important;text-decoration:none}
  .reasons a.grok-cite:hover{background:rgba(185,247,62,.18)!important;color:var(--acid)!important}
`
}
));
function D({pfx: e=`lk`}) {
    return (0,
    O.jsx)(`span`, {
        className: `mark`,
        "aria-label": `leak.me logo`,
        children: (0,
        O.jsxs)(`svg`, {
            className: `mark-svg`,
            viewBox: `0 0 40 50`,
            width: `38`,
            height: `48`,
            children: [(0,
            O.jsxs)(`defs`, {
                children: [(0,
                O.jsxs)(`linearGradient`, {
                    id: `${e}-g`,
                    x1: `0`,
                    y1: `0`,
                    x2: `1`,
                    y2: `1`,
                    children: [(0,
                    O.jsx)(`stop`, {
                        offset: `0`,
                        stopColor: `#d6ff6b`
                    }), (0,
                    O.jsx)(`stop`, {
                        offset: `1`,
                        stopColor: `#8fd119`
                    })]
                }), (0,
                O.jsxs)(`mask`, {
                    id: `${e}-m`,
                    children: [(0,
                    O.jsx)(`rect`, {
                        width: `40`,
                        height: `50`,
                        fill: `black`
                    }), (0,
                    O.jsx)(`path`, {
                        d: `M20 4 C20 4 8 21 8 30 a12 12 0 0 0 24 0 C32 21 20 4 20 4 Z`,
                        fill: `white`
                    }), (0,
                    O.jsx)(`text`, {
                        x: `20`,
                        y: `35.5`,
                        textAnchor: `middle`,
                        fontFamily: `'Bricolage Grotesque',sans-serif`,
                        fontWeight: `800`,
                        fontSize: `19`,
                        fill: `black`,
                        children: `α`
                    })]
                })]
            }), (0,
            O.jsx)(`rect`, {
                width: `40`,
                height: `42`,
                fill: `url(#${e}-g)`,
                mask: `url(#${e}-m)`
            }), (0,
            O.jsx)(`circle`, {
                className: `drip`,
                cx: `20`,
                cy: `41`,
                r: `2.3`,
                fill: `url(#${e}-g)`
            })]
        })
    })
}
function ee({pfx: e=`lk`, href: t=`/`, subtitle: n=null, newTab: r=!1}) {
    return (0,
    O.jsxs)(`a`, {
        className: `brand`,
        href: t,
        ...r ? {
            target: `_blank`,
            rel: `noreferrer`
        } : {},
        children: [(0,
        O.jsx)(D, {
            pfx: e
        }), (0,
        O.jsxs)(`div`, {
            children: [(0,
            O.jsxs)(`div`, {
                className: `bn`,
                children: [`leak`, (0,
                O.jsx)(`span`, {
                    className: `dot`,
                    children: `.me`
                })]
            }), n]
        })]
    })
}
var O, k, A, j, te, ne = e(( () => {
    n(),
    O = r(),
    k = `data:image/svg+xml,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2048%2048'%3E%3Crect%20width%3D'48'%20height%3D'48'%20rx%3D'11'%20fill%3D'%230f1413'%2F%3E%3Cdefs%3E%3ClinearGradient%20id%3D'fg'%20x1%3D'0'%20y1%3D'0'%20x2%3D'1'%20y2%3D'1'%3E%3Cstop%20offset%3D'0'%20stop-color%3D'%23d6ff6b'%2F%3E%3Cstop%20offset%3D'1'%20stop-color%3D'%238fd119'%2F%3E%3C%2FlinearGradient%3E%3Cmask%20id%3D'fm'%3E%3Crect%20width%3D'48'%20height%3D'48'%20fill%3D'black'%2F%3E%3Cpath%20d%3D'M24%209%20C24%209%2013%2024%2013%2032%20a11%2011%200%200%200%2022%200%20C35%2024%2024%209%2024%209%20Z'%20fill%3D'white'%2F%3E%3Ctext%20x%3D'24'%20y%3D'37'%20text-anchor%3D'middle'%20font-family%3D'Arial%2Csans-serif'%20font-weight%3D'800'%20font-size%3D'17'%20fill%3D'black'%3E%CE%B1%3C%2Ftext%3E%3C%2Fmask%3E%3C%2Fdefs%3E%3Crect%20width%3D'48'%20height%3D'44'%20fill%3D'url(%23fg)'%20mask%3D'url(%23fm)'%2F%3E%3C%2Fsvg%3E`,
    A = e => (0,
    O.jsx)(`svg`, {
        viewBox: `0 0 24 24`,
        width: `15`,
        height: `15`,
        ...e,
        children: (0,
        O.jsx)(`path`, {
            d: `M3 7l4 4 5-6 5 6 4-4-2 12H5L3 7Z`,
            fill: `currentColor`
        })
    }),
    j = () => (0,
    O.jsx)(`svg`, {
        viewBox: `0 0 24 24`,
        width: `16`,
        height: `16`,
        fill: `currentColor`,
        children: (0,
        O.jsx)(`path`, {
            d: `M21.9 4.3 2.9 11.6c-1.3.5-1.3 1.2-.2 1.5l4.8 1.5L9.4 21c.2.5.4.7.8.7.4 0 .6-.2.9-.5l2.3-2.2 4.8 3.6c.9.5 1.5.2 1.7-.8L22.9 5.6c.3-1.2-.5-1.7-1-1.3ZM18 7 9.5 14.6l-.3 3.2L8 13.9 18 7Z`
        })
    }),
    te = `
  /* logo + wordmark + search */
  .brand{display:flex;align-items:center;gap:13px}
  .mark{display:inline-flex;flex:none}
  .mark-svg{filter:drop-shadow(0 0 11px rgba(185,247,62,.5))}
  .drip{transform-box:fill-box;transform-origin:center;animation:leak 2.9s cubic-bezier(.55,0,.85,.4) infinite}
  @keyframes leak{
    0%,55%{transform:translateY(-1px) scale(.7);opacity:0}
    62%{opacity:1;transform:translateY(0) scale(1)}
    92%{transform:translateY(8px) scale(1);opacity:1}
    100%{transform:translateY(11px) scale(.8);opacity:0}
  }
  @media(prefers-reduced-motion:reduce){.drip{animation:none;opacity:.9}}
  .bn{font-family:'Bricolage Grotesque',system-ui,'Segoe UI',sans-serif;font-weight:800;font-size:23px;letter-spacing:-.03em;line-height:1}
  .bn .dot{color:var(--mut2);font-weight:600;font-size:15px;letter-spacing:0;margin-left:1px;vertical-align:baseline}
  /* Pin the subtitle row to one fixed height on BOTH pages so the logo + "leak.me"
     wordmark sit at the exact same vertical position — no jump on deck ↔ feed. */
  .bs{margin-top:4px;min-height:18px;line-height:18px}
  .search{display:flex;align-items:center;gap:8px;background:var(--bg2);border:1px solid var(--line2);
    border-radius:10px;padding:8px 13px;min-width:210px}
  .search span{color:var(--mut2)}
  .search input{background:none;border:none;outline:none;color:var(--ink);font-family:inherit;font-size:13.5px;width:100%}
  .search input::placeholder{color:var(--mut2)}

  /* header buttons */
  .head-right{display:flex;align-items:center;gap:9px;flex-wrap:wrap}
  .upbtn{display:inline-flex;align-items:center;gap:7px;font-family:inherit;font-size:13.5px;font-weight:700;
    color:#fff;cursor:pointer;border:none;padding:9px 15px;border-radius:11px;
    background:linear-gradient(135deg,#7c5cff,#a78bfa);box-shadow:0 6px 20px rgba(124,92,255,.32)}
  .upbtn:hover{filter:brightness(1.08)}
  .upbtn svg{color:var(--acid)}
  .propill{display:inline-flex;align-items:center;gap:6px;font-size:13px;font-weight:700;color:#0a0c0b;
    background:var(--acid);padding:8px 13px;border-radius:11px}
  .loginbtn{font-family:inherit;font-size:13.5px;font-weight:600;color:var(--ink);cursor:pointer;
    background:var(--bg2);border:1px solid var(--line2);padding:9px 16px;border-radius:11px}
  .loginbtn:hover{border-color:var(--mut2)}
  .acctbtn{display:inline-flex;align-items:center;gap:7px;font-family:inherit;font-size:13px;color:var(--ink);
    cursor:pointer;background:var(--bg2);border:1px solid var(--line2);padding:7px 12px 7px 8px;border-radius:11px}
  .acctbtn:hover{border-color:var(--mut2)}
  .acctbtn-av{width:22px;height:22px;border-radius:50%;background:linear-gradient(135deg,var(--acid2),#3a6b12);
    display:flex;align-items:center;justify-content:center;font-size:12px;color:#0a0c0b}

  /* modal shell */
  .overlay{position:fixed;inset:0;z-index:200;display:flex;align-items:center;justify-content:center;padding:18px;
    background:rgba(4,6,5,.74);backdrop-filter:blur(7px);animation:fade .2s ease}
  @keyframes fade{from{opacity:0}to{opacity:1}}
  .modal{position:relative;width:100%;max-width:400px;max-height:92vh;overflow:auto;background:var(--card);
    border:1px solid var(--line2);border-radius:20px;padding:30px 28px 26px;
    box-shadow:0 30px 80px rgba(0,0,0,.6),0 0 0 1px rgba(185,247,62,.04),0 -1px 30px rgba(185,247,62,.06) inset;
    animation:pop .26s cubic-bezier(.2,.9,.3,1.2)}
  .modal--wide{max-width:480px}
  @keyframes pop{from{opacity:0;transform:translateY(10px) scale(.97)}to{opacity:1;transform:none}}
  .m-x,.m-back{position:absolute;top:16px;background:none;border:none;color:var(--mut2);cursor:pointer;
    display:flex;padding:4px;border-radius:8px}
  .m-x{right:16px}.m-back{left:16px}
  .m-x:hover,.m-back:hover{color:var(--ink);background:var(--bg2)}
  .m-title{font-family:'Bricolage Grotesque',system-ui,'Segoe UI',sans-serif;font-weight:800;font-size:25px;text-align:center;margin:2px 0 4px;letter-spacing:-.02em}
  .m-sub{text-align:center;color:var(--mut);font-size:13px;margin:0 0 18px}
  .notice{display:flex;align-items:center;gap:8px;font-size:12.5px;color:#d7c8ff;margin:0 0 16px;
    background:rgba(167,139,250,.1);border:1px solid rgba(167,139,250,.3);padding:9px 12px;border-radius:10px}
  .notice svg{color:#a78bfa;flex:none}

  /* form fields */
  .field{display:block;margin-bottom:14px}
  .flabel{display:block;font-size:12.5px;color:var(--mut);margin-bottom:6px}
  .flabel i{color:#ff6b6b;margin-left:3px;font-style:normal}
  .fwrap{position:relative;display:block}
  .fwrap input{width:100%;background:var(--bg2);border:1px solid var(--line2);border-radius:11px;
    padding:12px 14px;color:var(--ink);font-family:inherit;font-size:14px;outline:none;transition:.15s}
  .fwrap input::placeholder{color:var(--mut2)}
  .fwrap input:focus{border-color:var(--acid2);box-shadow:0 0 0 3px rgba(185,247,62,.12)}
  .eye{position:absolute;right:8px;top:50%;transform:translateY(-50%);background:none;border:none;
    color:var(--mut2);cursor:pointer;padding:6px;display:flex}
  .eye:hover{color:var(--ink)}
  .cbx{display:flex;align-items:flex-start;gap:9px;background:none;border:none;cursor:pointer;
    font-family:inherit;font-size:12.8px;color:var(--mut);text-align:left;padding:0;line-height:1.45}
  .box{width:18px;height:18px;border-radius:6px;border:1.5px solid var(--line2);flex:none;display:flex;
    align-items:center;justify-content:center;color:#0a0c0b;margin-top:1px;transition:.15s}
  .box.on{background:var(--acid);border-color:var(--acid)}
  .cbx-txt .link{font-size:inherit}
  .rowbetween{display:flex;justify-content:space-between;align-items:center;gap:10px;margin:4px 0 18px}
  .boxes{display:flex;flex-direction:column;gap:11px;margin:6px 0 18px}

  /* buttons inside modals */
  .cta{width:100%;display:inline-flex;align-items:center;justify-content:center;gap:8px;
    border:none;cursor:pointer;font-family:inherit;font-weight:700;font-size:15px;color:#08110a;
    background:linear-gradient(135deg,#cdff6e,#9fe027);border-radius:13px;padding:13px;margin-top:4px;
    box-shadow:0 6px 20px rgba(185,247,62,.2);transition:.15s}
  .cta svg{flex:none}
  .cta:hover{filter:brightness(1.05)}
  .cta:disabled{opacity:.4;cursor:not-allowed;box-shadow:none;filter:none}
  .gbtn{width:100%;display:flex;align-items:center;justify-content:center;gap:10px;cursor:pointer;
    font-family:inherit;font-weight:600;font-size:14px;color:var(--ink);background:var(--bg2);
    border:1px solid var(--line2);border-radius:13px;padding:13px;margin-top:11px}
  .gbtn:hover{border-color:var(--mut2)}
  .m-foot{text-align:center;color:var(--mut);font-size:13px;margin:18px 0 0}
  .m-foot.small{font-size:11.5px;color:var(--mut2);margin-top:14px}

  /* limit paywall */
  .lim-ic{display:flex;align-items:center;justify-content:center;width:46px;height:46px;margin:2px auto 12px;
    border-radius:13px;background:rgba(185,247,62,.09);border:1px solid rgba(185,247,62,.26);color:var(--acid)}
  .lim-meter{margin:18px 0 16px}
  .lim-track{height:7px;border-radius:99px;background:var(--bg2);border:1px solid var(--line);overflow:hidden}
  .lim-track i{display:block;height:100%;background:linear-gradient(90deg,var(--acid2),var(--acid))}
  .lim-count{display:block;text-align:center;margin-top:8px;font-family:'JetBrains Mono',monospace;
    font-size:11px;color:var(--mut2)}
  .lim-perks{list-style:none;margin:0 0 18px;padding:14px 16px;display:flex;flex-direction:column;gap:9px;
    background:var(--bg2);border:1px solid var(--line);border-radius:13px}
  .lim-perks li{display:flex;align-items:center;gap:9px;font-size:13.5px;color:var(--ink)}
  .lim-perks li svg{color:var(--acid);flex:none}
  .lim-later{width:100%;background:none;border:none;cursor:pointer;font-family:inherit;font-size:13px;
    color:var(--mut);padding:13px 0 2px;margin-top:6px}
  .lim-later:hover{color:var(--ink)}
  .link{background:none;border:none;cursor:pointer;font-family:inherit;color:var(--acid2);font-size:13px;padding:0}
  .link:hover{color:var(--acid)}
  .link.strong{font-weight:700}
  .link.u,.u{text-decoration:underline}

  /* premium plans */
  .plan{display:block;width:100%;text-align:left;cursor:pointer;background:var(--bg2);
    border:1.5px solid var(--line2);border-radius:14px;padding:15px 16px;margin-bottom:11px;
    font-family:inherit;color:var(--ink);transition:.15s}
  .plan:hover:not(:disabled){border-color:var(--mut2)}
  .plan--on{border-color:var(--acid);background:rgba(185,247,62,.06);box-shadow:0 0 0 3px rgba(185,247,62,.08)}
  .plan--cur{cursor:default;opacity:.85}
  .plan-top{display:flex;align-items:center;gap:10px}
  .radio{width:18px;height:18px;border-radius:50%;border:2px solid var(--line2);flex:none}
  .radio--on{border-color:var(--acid);background:radial-gradient(circle at center,var(--acid) 0 5px,transparent 6px)}
  .radio--check{border-color:var(--mut2);color:var(--mut);display:flex;align-items:center;justify-content:center}
  .plan-name{font-family:'Bricolage Grotesque',system-ui,'Segoe UI',sans-serif;font-weight:700;font-size:16px;display:flex;align-items:center;gap:8px}
  .plan-badge{display:inline-flex;align-items:center;gap:4px;font-family:'Hanken Grotesk';font-weight:700;
    font-size:10px;text-transform:uppercase;letter-spacing:.05em;color:#0a0c0b;background:var(--acid);
    padding:3px 7px;border-radius:999px}
  .plan-badge svg{color:#0a0c0b}
  .plan-price{margin-left:auto;text-align:right;display:flex;align-items:baseline;gap:6px;
    font-family:'JetBrains Mono',monospace}
  .plan-price b{font-size:18px;color:var(--ink)}
  .plan-price i{font-style:normal;font-size:11px;color:var(--mut2)}
  .plan-price s{color:var(--mut2);font-size:12px}
  .plan-price em{font-style:normal;color:var(--mut);font-size:13px;font-family:'Hanken Grotesk'}
  .plan-feat{list-style:none;margin:11px 0 0;padding:0;display:flex;flex-direction:column;gap:7px}
  .plan-feat li{display:flex;align-items:center;gap:9px;font-size:13px;color:var(--ink)}
  .plan-feat li svg{flex:none}
  .plan-feat li.ok svg{color:var(--acid)}
  .plan-feat li.lk{color:var(--mut)}
  .plan-feat li.lk svg{color:var(--mut2)}

  @media(max-width:640px){
    .overlay{padding:10px}
    .modal{padding:24px 18px 20px}
    .plan{padding:14px 13px}
    .plan-price{flex-direction:column;align-items:flex-end;gap:0;line-height:1.2}
  }
`
}
));
function re({open: e, onClose: t, q: n, setQ: r, auth: i, pro: a, watch: o, setModal: s, setAuth: c, setPro: l, page: u=`deck`, view: d, setView: f, feedEndpoint: p, deckEndpoint: m, watchUrl: h}) {
    return e ? (0,
    M.jsx)(`div`, {
        className: `menu-scrim`,
        onClick: t,
        children: (0,
        M.jsxs)(`div`, {
            className: `menu-panel`,
            onClick: e => e.stopPropagation(),
            children: [(0,
            M.jsxs)(`div`, {
                className: `menu-top`,
                children: [(0,
                M.jsxs)(`a`, {
                    className: `menu-brand`,
                    href: `https://leak.me`,
                    target: `_blank`,
                    rel: `noreferrer`,
                    children: [(0,
                    M.jsx)(D, {
                        pfx: `nlk`
                    }), (0,
                    M.jsxs)(`span`, {
                        className: `bn`,
                        children: [`leak`, (0,
                        M.jsx)(`span`, {
                            className: `dot`,
                            children: `.me`
                        })]
                    })]
                }), (0,
                M.jsx)(`button`, {
                    className: `menu-x`,
                    "aria-label": `Close menu`,
                    onClick: t,
                    children: (0,
                    M.jsx)(F, {})
                })]
            }), (0,
            M.jsxs)(`div`, {
                className: `menu-search`,
                children: [(0,
                M.jsx)(`span`, {
                    className: `menu-search-ic`,
                    children: `⌕`
                }), (0,
                M.jsx)(`input`, {
                    value: n,
                    onMouseDown: e => {
                        i || (e.preventDefault(),
                        s(`login`),
                        t())
                    }
                    ,
                    onFocus: e => {
                        i || (e.target.blur(),
                        s(`login`),
                        t())
                    }
                    ,
                    onChange: e => {
                        i ? r(e.target.value) : (s(`login`),
                        t())
                    }
                    ,
                    placeholder: `Search by X @handle`,
                    onKeyDown: e => {
                        e.key === `Enter` && t()
                    }
                }), n && (0,
                M.jsx)(`button`, {
                    className: `menu-search-x`,
                    "aria-label": `Clear search`,
                    onClick: () => r(``),
                    children: (0,
                    M.jsxs)(`svg`, {
                        viewBox: `0 0 24 24`,
                        width: `13`,
                        height: `13`,
                        fill: `none`,
                        stroke: `currentColor`,
                        strokeWidth: `2`,
                        strokeLinecap: `round`,
                        children: [(0,
                        M.jsx)(`line`, {
                            x1: `6`,
                            y1: `6`,
                            x2: `18`,
                            y2: `18`
                        }), (0,
                        M.jsx)(`line`, {
                            x1: `18`,
                            y1: `6`,
                            x2: `6`,
                            y2: `18`
                        })]
                    })
                })]
            }), (0,
            M.jsxs)(`nav`, {
                className: `menu-nav`,
                children: [u === `feed` ? (0,
                M.jsxs)(`a`, {
                    className: `menu-item`,
                    href: m || `/`,
                    onClick: t,
                    children: [(0,
                    M.jsx)(`span`, {
                        className: `menu-ic ic-deck`,
                        children: (0,
                        M.jsx)(N, {})
                    }), `Deck`]
                }) : (0,
                M.jsxs)(`a`, {
                    className: `menu-item`,
                    href: p || `/feed`,
                    onClick: t,
                    children: [(0,
                    M.jsx)(`span`, {
                        className: `menu-ic ic-feed`,
                        children: (0,
                        M.jsx)(P, {})
                    }), `Alpha Feed`, (0,
                    M.jsx)(`span`, {
                        className: `menu-tag menu-tag--live`,
                        children: `LIVE`
                    })]
                }), u === `feed` ? (0,
                M.jsxs)(`a`, {
                    className: `menu-item`,
                    href: h || `/watchlist/`,
                    onClick: e => {
                        i || (e.preventDefault(),
                        s(`login`)),
                        t()
                    }
                    ,
                    children: [(0,
                    M.jsx)(`span`, {
                        className: `menu-ic ic-star`,
                        children: (0,
                        M.jsx)(ie, {})
                    }), `Watchlist`, o.size > 0 && (0,
                    M.jsx)(`span`, {
                        className: `menu-badge`,
                        children: o.size
                    })]
                }) : (0,
                M.jsxs)(`button`, {
                    className: `menu-item` + (d === `watchlist` ? ` on` : ``),
                    onClick: () => {
                        f && f(`watchlist`),
                        t()
                    }
                    ,
                    children: [(0,
                    M.jsx)(`span`, {
                        className: `menu-ic ic-star`,
                        children: (0,
                        M.jsx)(ie, {})
                    }), `Watchlist`, o.size > 0 && (0,
                    M.jsx)(`span`, {
                        className: `menu-badge`,
                        children: o.size
                    })]
                }), !a && (0,
                M.jsxs)(`button`, {
                    className: `menu-item`,
                    onClick: () => {
                        s(`premium`),
                        t()
                    }
                    ,
                    children: [(0,
                    M.jsx)(`span`, {
                        className: `menu-ic ic-crown`,
                        children: (0,
                        M.jsx)(A, {})
                    }), `Upgrade to Pro`, (0,
                    M.jsx)(`span`, {
                        className: `menu-tag`,
                        children: `PRO`
                    })]
                }), a && (0,
                M.jsxs)(`span`, {
                    className: `menu-item is-pro`,
                    children: [(0,
                    M.jsx)(`span`, {
                        className: `menu-ic ic-crown`,
                        children: (0,
                        M.jsx)(A, {})
                    }), `Pro active`]
                }), (0,
                M.jsxs)(`a`, {
                    className: `menu-item`,
                    href: `#`,
                    title: `Join the Telegram group`,
                    onClick: t,
                    children: [(0,
                    M.jsx)(`span`, {
                        className: `menu-ic ic-tg`,
                        children: (0,
                        M.jsx)(j, {})
                    }), `+1 Win Today`]
                })]
            }), (0,
            M.jsx)(`div`, {
                className: `menu-foot`,
                children: i ? (0,
                M.jsx)(`button`, {
                    className: `menu-btn ghost`,
                    onClick: () => {
                        c(!1),
                        l(!1),
                        t()
                    }
                    ,
                    children: `Log out`
                }) : (0,
                M.jsxs)(M.Fragment, {
                    children: [(0,
                    M.jsx)(`button`, {
                        className: `menu-btn primary`,
                        onClick: () => {
                            s(`signup`),
                            t()
                        }
                        ,
                        children: `Register`
                    }), (0,
                    M.jsx)(`button`, {
                        className: `menu-btn ghost`,
                        onClick: () => {
                            s(`login`),
                            t()
                        }
                        ,
                        children: `Login`
                    })]
                })
            })]
        })
    }) : null
}
var M, N, P, ie, F, ae, I = e(( () => {
    n(),
    ne(),
    M = r(),
    N = () => (0,
    M.jsxs)(`svg`, {
        viewBox: `0 0 24 24`,
        width: `15`,
        height: `15`,
        fill: `currentColor`,
        "aria-hidden": `true`,
        children: [(0,
        M.jsx)(`rect`, {
            x: `3`,
            y: `3`,
            width: `7`,
            height: `7`,
            rx: `1.5`
        }), (0,
        M.jsx)(`rect`, {
            x: `14`,
            y: `3`,
            width: `7`,
            height: `7`,
            rx: `1.5`
        }), (0,
        M.jsx)(`rect`, {
            x: `3`,
            y: `14`,
            width: `7`,
            height: `7`,
            rx: `1.5`
        }), (0,
        M.jsx)(`rect`, {
            x: `14`,
            y: `14`,
            width: `7`,
            height: `7`,
            rx: `1.5`
        })]
    }),
    P = () => (0,
    M.jsx)(`svg`, {
        viewBox: `0 0 24 24`,
        width: `16`,
        height: `16`,
        fill: `currentColor`,
        "aria-hidden": `true`,
        children: (0,
        M.jsx)(`path`, {
            d: `M13 2 4 13.5h6L9 22l9-11.5h-6z`
        })
    }),
    ie = () => (0,
    M.jsx)(`svg`, {
        viewBox: `0 0 24 24`,
        width: `16`,
        height: `16`,
        fill: `currentColor`,
        "aria-hidden": `true`,
        children: (0,
        M.jsx)(`path`, {
            d: `M12 .587l3.668 7.431 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z`
        })
    }),
    F = () => (0,
    M.jsxs)(`svg`, {
        viewBox: `0 0 24 24`,
        width: `20`,
        height: `20`,
        fill: `none`,
        stroke: `currentColor`,
        strokeWidth: `2`,
        strokeLinecap: `round`,
        "aria-hidden": `true`,
        children: [(0,
        M.jsx)(`line`, {
            x1: `6`,
            y1: `6`,
            x2: `18`,
            y2: `18`
        }), (0,
        M.jsx)(`line`, {
            x1: `18`,
            y1: `6`,
            x2: `6`,
            y2: `18`
        })]
    }),
    ae = `
  .menu-scrim{position:fixed;inset:0;z-index:60;background:rgba(0,0,0,.55);display:flex;justify-content:flex-end;animation:mfade .15s ease}
  .menu-panel{width:min(82vw,320px);height:100%;border-left:1px solid var(--line2);display:flex;flex-direction:column;
    padding:16px 16px calc(16px + env(safe-area-inset-bottom));box-shadow:-18px 0 50px rgba(0,0,0,.5);
    animation:mslide .2s cubic-bezier(.2,.7,.3,1);background:radial-gradient(420px 200px at 0 0,rgba(185,247,62,.07),transparent 60%),var(--bg2)}
  @keyframes mfade{from{opacity:0}to{opacity:1}}
  @keyframes mslide{from{transform:translateX(28px);opacity:.4}to{transform:none;opacity:1}}
  .menu-top{display:flex;align-items:center;justify-content:space-between;padding-bottom:14px;border-bottom:1px solid var(--line);margin-bottom:14px}
  .menu-brand{display:inline-flex;align-items:center;gap:9px}
  .menu-brand .mark-svg{width:26px;height:33px}
  .menu-brand .bn{font-family:'Bricolage Grotesque';font-weight:800;font-size:20px;letter-spacing:-.03em}
  .menu-brand .bn .dot{color:var(--mut2);font-weight:600;font-size:13px;margin-left:1px}
  .menu-x{background:none;border:none;color:var(--mut);cursor:pointer;padding:4px;display:inline-flex}
  .menu-x:hover{color:var(--ink)}
  .menu-search{display:flex;align-items:center;gap:9px;margin-bottom:14px;background:var(--bg);border:1px solid var(--line2);border-radius:11px;padding:10px 12px}
  .menu-search:focus-within{border-color:var(--acid2)}
  .menu-search-ic{color:var(--mut);font-size:17px;line-height:1}
  .menu-search input{flex:1;min-width:0;background:none;border:none;outline:none;color:var(--ink);font-family:inherit;font-size:14px}
  .menu-search input::placeholder{color:var(--mut2)}
  .menu-search-x{background:none;border:none;color:var(--mut2);cursor:pointer;display:inline-flex;padding:2px}
  .menu-search-x:hover{color:var(--ink)}
  .menu-nav{display:flex;flex-direction:column;gap:3px;flex:1 1 auto}
  .menu-item{display:flex;align-items:center;gap:12px;width:100%;text-align:left;font-family:inherit;font-size:15px;font-weight:600;
    color:var(--ink);background:none;border:none;border-radius:11px;padding:9px;cursor:pointer;transition:.12s}
  .menu-item:hover{background:var(--card)}
  .menu-ic{width:34px;height:34px;border-radius:9px;display:inline-flex;align-items:center;justify-content:center;flex:none}
  .menu-ic.ic-deck{background:rgba(185,247,62,.14);color:var(--acid)}
  .menu-ic.ic-feed{background:rgba(185,247,62,.14);color:var(--acid)}
  .menu-ic.ic-star{background:rgba(185,247,62,.14);color:var(--acid)}
  .menu-ic.ic-crown{background:rgba(245,165,36,.16);color:#f5a524}
  .menu-ic.ic-tg{background:rgba(56,189,248,.15);color:#38bdf8}
  .menu-item.on{color:var(--acid)}
  .menu-item.is-pro{cursor:default}
  .menu-tag{margin-left:auto;font-family:'JetBrains Mono',monospace;font-size:9.5px;font-weight:700;letter-spacing:.06em;
    color:#f5a524;background:rgba(245,165,36,.14);border:1px solid rgba(245,165,36,.3);border-radius:5px;padding:2px 6px}
  .menu-tag--live{color:#ff5d6c;background:rgba(243,105,122,.14)}
  .menu-badge{margin-left:auto;font-family:'JetBrains Mono',monospace;font-size:11px;font-weight:700;color:#0a0c0b;background:var(--acid);border-radius:6px;padding:1px 7px}
  .menu-foot{display:flex;flex-direction:column;gap:9px;padding-top:12px;border-top:1px solid var(--line)}
  .menu-btn{width:100%;font-family:inherit;font-size:15px;font-weight:700;border-radius:11px;padding:13px;cursor:pointer;transition:.12s;border:1px solid transparent}
  .menu-btn.primary{background:var(--acid);color:#0a0c0b}
  .menu-btn.primary:hover{filter:brightness(1.06)}
  .menu-btn.ghost{background:none;border-color:var(--line2);color:var(--ink)}
  .menu-btn.ghost:hover{border-color:var(--mut2)}
`
}
));
function L(e) {
    e = Number(e) || 0;
    let t = (e, t) => (e % 1 ? e.toFixed(1) : String(e)) + t;
    return e >= 1e9 ? t(Math.round(e / 1e8) / 10, `B`) : e >= 1e6 ? t(Math.round(e / 1e5) / 10, `M`) : e >= 1e3 ? t(Math.round(e / 100) / 10, `K`) : String(Math.round(e))
}
function R(e) {
    let t = Number(e);
    if (e == null || e === `` || !isFinite(t))
        return null;
    if (t === 0)
        return `$0`;
    let n = Math.abs(t);
    if (n >= 1e3)
        return `$` + L(t);
    if (n >= .01)
        return `$` + n.toFixed(2);
    let r = Math.floor(Math.log10(n))
      , i = -r - 1
      , a = String(Math.round(n / 10 ** r * 100)).replace(/0+$/, ``);
    return a === `` && (a = `0`),
    `$0.0` + W(i) + a
}
function z(e) {
    if (e == null)
        return null;
    if (e instanceof Date)
        return isNaN(e.getTime()) ? null : e;
    if (typeof e == `number`) {
        let t = new Date(e < 0xe8d4a51000 ? e * 1e3 : e);
        return isNaN(t.getTime()) ? null : t
    }
    let t = new Date(e);
    return isNaN(t.getTime()) ? null : t
}
function oe(e) {
    let t = z(e);
    if (!t)
        return ``;
    let n = (Date.now() - t.getTime()) / 1e3;
    return n > 0 ? n > 86400 ? `${Math.floor(n / 86400)}D` : n > 3600 ? `${Math.floor(n / 3600)}h` : `${Math.floor(n / 60)}m` : `0m`
}
function B(e) {
    let t = z(e);
    if (!t)
        return null;
    let n = (Date.now() - t.getTime()) / 864e5;
    return n > 0 ? n : 0
}
function se(e) {
    let t = e;
    if (typeof e == `string`)
        try {
            t = JSON.parse(e)
        } catch {
            t = {}
        }
    return t ||= {},
    {
        degen: Number(t.Degen ?? t.degen ?? 0) || 0,
        vc: Number(t.VC ?? t.vc ?? 0) || 0,
        corporate: Number(t.CORPORATE ?? t.corporate ?? t.Corporate ?? 0) || 0
    }
}
function ce(e) {
    if (!e)
        return [];
    let t = e => e.length >= 5 ? [e[1] ?? e[0] ?? ``, e[2] ?? ``, e[3] ?? null] : [e[0] ?? ``, e[1] ?? ``, e[2] ?? null]
      , n = e => [e.first_name ?? e.username ?? ``, e.description ?? e.role ?? ``, e.avatar_image_url ?? e.avatar ?? null];
    if (Array.isArray(e))
        return e.length ? Array.isArray(e[0]) ? e.map(t) : e.map(n) : [];
    if (Array.isArray(e.first_name) || Array.isArray(e.username) || Array.isArray(e.description) || Array.isArray(e.avatar_image_url)) {
        let t = t => Array.isArray(e[t]) ? e[t] : []
          , n = t(`username`)
          , r = t(`first_name`)
          , i = t(`description`)
          , a = t(`avatar_image_url`)
          , o = Math.max(n.length, r.length)
          , s = [];
        for (let e = 0; e < o; e++)
            s.push([r[e] ?? n[e] ?? ``, i[e] ?? ``, a[e] ?? null]);
        return s
    }
    return Object.values(e).filter(e => e && typeof e == `object`).map(e => Array.isArray(e) ? t(e) : n(e))
}
function le(e) {
    return Array.isArray(e) ? e.length >= 5 : e && typeof e == `object` ? `description`in e || `avatar_image_url`in e || `influencer_type`in e || `followers_cnt`in e : !1
}
function ue(e, t, n) {
    if (!t || t <= 0)
        return !0;
    if (n < t || !e)
        return !1;
    if (Array.isArray(e))
        return e.length > 0 && le(e[0]);
    if (Array.isArray(e.first_name) || Array.isArray(e.username))
        return Array.isArray(e.description) || Array.isArray(e.avatar_image_url) || Array.isArray(e.influencer_type) || Array.isArray(e.followers_cnt);
    let r = Object.values(e).filter(e => e && typeof e == `object`);
    return r.length > 0 && le(r[0])
}
function de(e, t) {
    let n = e.username ?? e.handle ?? ``
      , r = se(e.followers_types_cnt ?? e.b)
      , i = {};
    for (let t of Ze)
        i[t] = Number(e[rt[t]]) || 0;
    let a = t && t[n] || e.notable_kols || e.notable
      , o = ce(a)
      , s = Number(e.followers_cnt ?? e.followersNum ?? 0) || 0
      , c = e.created_timestamp ?? e.created_at ?? e.created ?? null;
    e.story && e.story.body && e.story;
    let l = e.launchCall ?? null;
    if (!l && e.display_launch) {
        let t = e.launch_value
          , n = t === `` || t == null ? NaN : Number(t);
        if (!Number.isNaN(n)) {
            let t = e.launch_link == null ? `` : String(e.launch_link).trim();
            l = {
                pct: Math.round(n),
                url: t
            }
        }
    }
    let u = e.notable_kols_cnt ?? o.length
      , d = !!e.is_visited && ue(a, u, o.length)
      , f = e.trending_info || {};
    if (typeof f == `string`)
        try {
            f = JSON.parse(f) || {}
        } catch {
            f = {}
        }
    let p = e => e == null || e === `` ? null : e
      , m = e => e && typeof e == `object` && !Array.isArray(e) && e.parsedValue != null ? e.parsedValue : e
      , h = new Set([`no`, `no.`, `none`])
      , g = e => (e = p(e),
    e != null && h.has(String(e).trim().toLowerCase()) ? null : e)
      , _ = e => {
        e = m(e);
        let t = Number(e);
        return e == null || e === `` || !isFinite(t) ? null : t
    }
      , v = e => {
        if (e = g(m(e)),
        e == null)
            return null;
        let t = Number(e);
        return isFinite(t) && t >= 0 ? `$` + L(t) : null
    }
      , y = v
      , b = e => String(e ?? ``).replace(/<[^>]*>/g, ``).replace(/&nbsp;/gi, ` `).replace(/\s+/g, ` `).trim()
      , x = b(f.html_body).toLowerCase()
      , S = x === `no` || x === `no.`
      , C = x !== `` && !S
      , w = g(f.title)
      , T = e.empty_tr_case != null && e.empty_tr_case !== `` ? e.empty_tr_case : f.empty_tr_case != null && f.empty_tr_case !== `` ? f.empty_tr_case : null
      , E = [-1, 0, 1, 2].includes(Number(T)) && T !== null && T !== `` ? Number(T) : null
      , D = w != null && C
      , ee = e.fresh === !0 || e.fresh === `true` || e.fresh === 1 || e.fresh === `1` || f && (f.fresh === !0 || f.fresh === `true` || f.fresh === 1 || f.fresh === `1`)
      , O = ee ? !1 : E == null ? S : E === 2
      , k = ee ? !0 : E == null ? !S && !D : E === 1
      , A = !k && !O
      , j = null;
    if (A) {
        let e = g(f.ticker)
          , t = _(f.price_change_24_perc)
          , n = v(f.mc)
          , r = y(f.lq)
          , i = g(f.chain)
          , a = g(f.ca)
          , o = g(f.coingecko_url)
          , s = g(f.dexscreener_url)
          , c = e ? e.toUpperCase() : null
          , l = null
          , u = null
          , d = null;
        c && a && i && t != null && n != null ? (l = `dex`,
        u = s || `https://dexscreener.com/` + i + `/` + a,
        d = `DexScreener`) : o && c && !a && t != null && n != null && (l = `cg`,
        u = o,
        d = `CoinGecko`),
        E !== -1 && (l || E === 0 && (c || t != null)) && (j = {
            ticker: c,
            change24h: t,
            bar: l,
            url: u,
            source: d,
            mc: l ? n : null,
            lq: l === `dex` ? r : null,
            chain: l === `dex` ? i : null,
            ca: l === `dex` ? a : null,
            price: l === `cg` ? R(m(f.price)) : null
        })
    }
    let te = _(f.ts);
    return {
        handle: n,
        name: e.first_name ?? e.name ?? n,
        avatar: e.avatar_image_url ?? e.avatar ?? ``,
        personal: e.project_type === void 0 ? !!e.personal : e.project_type === `personal`,
        followers: e.followers ?? L(s),
        followersNum: s,
        ageDays: e.ageDays ?? B(c) ?? 9999,
        ageLabel: e.ageLabel ?? (c == null ? `—` : oe(c)),
        stats: i,
        kols24h: i[`24h`],
        b: r,
        notable: o,
        notableCount: u,
        notes: e.notes ?? ``,
        isWatchlisted: !!e.is_watchlisted,
        isVisited: !!e.is_visited,
        mark: e.tags === `skip` || e.tags === `rug` ? e.tags : null,
        preloaded: d,
        notifyTs: e.notify_ts == null ? null : Number(e.notify_ts),
        token: j,
        launchCall: l,
        cats: Array.isArray(f.categories) ? f.categories : Array.isArray(e.cats) ? e.cats : [],
        unexplained: O,
        history: Array.isArray(f.history) && f.history.length ? f.history.map(e => {
            let t = b(e.html_body).toLowerCase()
              , n = t !== `` && t !== `no` && t !== `no.`;
            return {
                title: g(e.title) || ``,
                report: n ? p(e.html_body) : null,
                cats: Array.isArray(e.categories) ? e.categories : [],
                ts: _(e.ts)
            }
        }
        ).sort( (e, t) => (t.ts ?? 0) - (e.ts ?? 0)) : null,
        title: w || ``,
        hook: w || ``,
        report: A && C ? p(f.html_body) : null,
        trendingTs: te,
        story: null,
        pending: k,
        fresh: !!ee
    }
}
function fe(e, t) {
    if (!e || !Array.isArray(e.accounts))
        return [];
    let n = e.notable_kols ?? e.notableKols ?? {};
    return e.accounts.map(e => {
        let r = de(e, n);
        return t && e.is_watchlisted === void 0 && (r.isWatchlisted = !0),
        r
    }
    )
}
function pe() {
    if (typeof document < `u`) {
        let e = document.getElementById(nt);
        if (e)
            try {
                return JSON.parse(e.textContent)
            } catch {}
    }
    return at
}
function me(e) {
    if (!e)
        return null;
    let t = Math.round((K(e) - K(new Date)) / 864e5), n = e.getDate() + ` ` + G[e.getMonth()], r = String(e.getHours()).padStart(2, `0`) + `:` + String(e.getMinutes()).padStart(2, `0`), i = new Date, a;
    return a = e.getTime() < i.getTime() ? `y` : e.getFullYear() === i.getFullYear() && e.getMonth() === i.getMonth() && e.getDate() === i.getDate() ? `g` : `x`,
    {
        label: n,
        time: r,
        state: a,
        diff: t
    }
}
function he(e) {
    let t = new Date
      , n = new Date;
    n.setHours(0, 0, 0, 0),
    n.setDate(n.getDate() + e.d);
    let r = n.getFullYear() === t.getFullYear();
    return {
        label: n.getDate() + ` ` + G[n.getMonth()] + (r ? `` : ` '` + String(n.getFullYear()).slice(2)),
        time: e.t
    }
}
function ge(e) {
    let t = e.b.degen + e.b.vc + e.b.corporate
      , n = t || 1
      , r = (e.b.vc + e.b.corporate) / n
      , i = e.b.degen / n
      , a = [];
    e.ageDays <= 1 ? a.push({
        t: `Just launched`,
        k: `hot`
    }) : e.ageDays <= 14 && a.push({
        t: `Early signal`,
        k: `early`
    }),
    e.newKols / Math.max(e.ageDays, .5) >= 12 && a.push({
        t: `High velocity`,
        k: `hot`
    });
    let o;
    return r >= .45 ? (a.push({
        t: `Institutional`,
        k: `inst`
    }),
    o = `institutional tilt`) : i >= .62 ? (a.push({
        t: `Degen-led`,
        k: `degen`
    }),
    o = `mostly degen`) : (a.push({
        t: `Crossover`,
        k: `cross`
    }),
    o = `mixed crowd`),
    {
        tags: a,
        total: t,
        inst: r,
        mix: o,
        leadTag: a[0]
    }
}
function _e({a: e, size: t=34}) {
    let[n,r] = (0,
    H.useState)(!1)
      , i = [...e.name].reduce( (e, t) => (e * 31 + t.charCodeAt(0)) % 360, 11)
      , a = {
        width: t,
        height: t
    }
      , o = `main-av` + (e.personal ? ` main-av--round` : ``);
    return n || !e.avatar ? (0,
    U.jsx)(`span`, {
        className: o + ` main-av--fb`,
        title: e.personal ? `Personal account` : void 0,
        style: {
            ...a,
            background: `linear-gradient(135deg,hsl(${i} 60% 36%),hsl(${(i + 50) % 360} 55% 18%))`
        },
        children: e.name.split(/\s+/).slice(0, 2).map(e => e[0]).join(``).toUpperCase()
    }) : (0,
    U.jsx)(`img`, {
        className: o,
        style: a,
        src: e.avatar,
        alt: e.name,
        title: e.personal ? `Personal account` : void 0,
        onError: () => r(!0)
    })
}
function ve({b: e, total: t, h: n=6}) {
    let r = t || 1
      , i = t => (e[t] / r * 100).toFixed(1) + `%`;
    return (0,
    U.jsxs)(`div`, {
        className: `bar`,
        style: {
            height: n
        },
        title: `${e.degen} degen · ${e.vc} VC · ${e.corporate} corporate`,
        children: [(0,
        U.jsx)(`span`, {
            style: {
                width: i(`degen`),
                background: y.degen.color
            }
        }), (0,
        U.jsx)(`span`, {
            style: {
                width: i(`vc`),
                background: y.vc.color
            }
        }), (0,
        U.jsx)(`span`, {
            style: {
                width: i(`corporate`),
                background: y.corporate.color
            }
        })]
    })
}
function ye({pfx: e=`lk`}) {
    return (0,
    U.jsx)(`span`, {
        className: `mark`,
        "aria-label": `leak.me logo`,
        children: (0,
        U.jsxs)(`svg`, {
            className: `mark-svg`,
            viewBox: `0 0 40 50`,
            width: `38`,
            height: `48`,
            children: [(0,
            U.jsxs)(`defs`, {
                children: [(0,
                U.jsxs)(`linearGradient`, {
                    id: `${e}-g`,
                    x1: `0`,
                    y1: `0`,
                    x2: `1`,
                    y2: `1`,
                    children: [(0,
                    U.jsx)(`stop`, {
                        offset: `0`,
                        stopColor: `#d6ff6b`
                    }), (0,
                    U.jsx)(`stop`, {
                        offset: `1`,
                        stopColor: `#8fd119`
                    })]
                }), (0,
                U.jsxs)(`mask`, {
                    id: `${e}-m`,
                    children: [(0,
                    U.jsx)(`rect`, {
                        width: `40`,
                        height: `50`,
                        fill: `black`
                    }), (0,
                    U.jsx)(`path`, {
                        d: `M20 4 C20 4 8 21 8 30 a12 12 0 0 0 24 0 C32 21 20 4 20 4 Z`,
                        fill: `white`
                    }), (0,
                    U.jsx)(`text`, {
                        x: `20`,
                        y: `35.5`,
                        textAnchor: `middle`,
                        fontFamily: `'Bricolage Grotesque',sans-serif`,
                        fontWeight: `800`,
                        fontSize: `19`,
                        fill: `black`,
                        children: `α`
                    })]
                })]
            }), (0,
            U.jsx)(`rect`, {
                width: `40`,
                height: `42`,
                fill: `url(#${e}-g)`,
                mask: `url(#${e}-m)`
            }), (0,
            U.jsx)(`circle`, {
                className: `drip`,
                cx: `20`,
                cy: `41`,
                r: `2.3`,
                fill: `url(#${e}-g)`
            })]
        })
    })
}
function be({label: e, req: t, type: n=`text`, placeholder: r, value: i, onChange: a, error: o}) {
    let[s,c] = (0,
    H.useState)(!1)
      , l = n === `password`;
    return (0,
    U.jsxs)(`label`, {
        className: `field` + (o ? ` field--err` : ``),
        children: [(0,
        U.jsxs)(`span`, {
            className: `flabel`,
            children: [e, t && (0,
            U.jsx)(`i`, {
                children: `*`
            })]
        }), (0,
        U.jsxs)(`span`, {
            className: `fwrap`,
            children: [(0,
            U.jsx)(`input`, {
                type: l && s ? `text` : n,
                placeholder: r,
                "aria-invalid": !!o,
                value: i,
                onChange: e => a(e.target.value)
            }), l && (0,
            U.jsx)(`button`, {
                type: `button`,
                className: `eye`,
                onClick: () => c(e => !e),
                "aria-label": `toggle password`,
                children: (0,
                U.jsx)(ut, {
                    off: s
                })
            })]
        }), o && (0,
        U.jsx)(`span`, {
            className: `ferr`,
            children: o
        })]
    })
}
function xe({checked: e, onChange: t, children: n}) {
    return (0,
    U.jsxs)(`button`, {
        type: `button`,
        className: `cbx`,
        onClick: () => t(!e),
        children: [(0,
        U.jsx)(`span`, {
            className: `box` + (e ? ` on` : ``),
            children: e && (0,
            U.jsx)(q, {})
        }), (0,
        U.jsx)(`span`, {
            className: `cbx-txt`,
            children: n
        })]
    })
}
function Se({onClose: e, back: t, wide: n, children: r}) {
    return (0,
    U.jsx)(`div`, {
        className: `overlay`,
        onMouseDown: e,
        children: (0,
        U.jsxs)(`div`, {
            className: `modal` + (n ? ` modal--wide` : ``),
            onMouseDown: e => e.stopPropagation(),
            children: [t && (0,
            U.jsx)(`button`, {
                className: `m-back`,
                onClick: t,
                "aria-label": `back`,
                children: (0,
                U.jsx)(lt, {})
            }), (0,
            U.jsx)(`button`, {
                className: `m-x`,
                onClick: e,
                "aria-label": `close`,
                children: (0,
                U.jsx)(ct, {})
            }), r]
        })
    })
}
function Ce({onClose: e, onAuth: t, go: n, endpoint: r, googleUrl: i}) {
    let[a,o] = (0,
    H.useState)(``)
      , [s,c] = (0,
    H.useState)(``)
      , [l,u] = (0,
    H.useState)(!0)
      , [d,f] = (0,
    H.useState)(null)
      , [p,m] = (0,
    H.useState)(null)
      , [h,g] = (0,
    H.useState)(null)
      , [_,v] = (0,
    H.useState)(!1)
      , y = () => {
        f(null),
        m(null),
        g(null)
    }
    ;
    return (0,
    U.jsxs)(Se, {
        onClose: e,
        children: [(0,
        U.jsx)(`h2`, {
            className: `m-title`,
            children: `Log In`
        }), (0,
        U.jsx)(be, {
            label: `Username`,
            req: !0,
            placeholder: `satoshi`,
            value: a,
            onChange: e => {
                o(e),
                y()
            }
            ,
            error: d
        }), (0,
        U.jsx)(be, {
            label: `Password`,
            req: !0,
            type: `password`,
            placeholder: `••••••••`,
            value: s,
            onChange: e => {
                c(e),
                y()
            }
            ,
            error: p
        }), (0,
        U.jsxs)(`div`, {
            className: `rowbetween`,
            children: [(0,
            U.jsx)(xe, {
                checked: l,
                onChange: u,
                children: `Remember me`
            }), (0,
            U.jsx)(`button`, {
                className: `link`,
                onClick: () => n(`reset`),
                children: `Forgot password?`
            })]
        }), (0,
        U.jsx)(`button`, {
            className: `cta`,
            onClick: () => {
                if (_)
                    return;
                let e = a.trim()
                  , n = null
                  , i = null;
                if (e ? e.length < 3 && (n = `Username must be at least 3 characters.`) : n = `Username is required.`,
                s ? s.length < 3 && (i = `Password must be at least 3 characters.`) : i = `Password is required.`,
                n || i) {
                    f(n),
                    m(i),
                    g(null);
                    return
                }
                v(!0),
                y(),
                Pe(r, {
                    username: e,
                    password: s,
                    remember_me: l
                }).then(e => {
                    let n = {};
                    try {
                        n = typeof e.data == `string` ? JSON.parse(e.data) : e.data || {}
                    } catch {
                        n = {}
                    }
                    if (e.success)
                        t(n.username);
                    else {
                        let e = e => Array.isArray(e) ? e.join(` `) : e || null;
                        f(e(n.username)),
                        m(e(n.password)),
                        g(e(n.__all__) || (!n.username && !n.password ? `Login failed. Please try again.` : null))
                    }
                }
                ).catch( () => g(`Something went wrong. Please try again.`)).finally( () => v(!1))
            }
            ,
            disabled: _,
            children: _ ? `Logging in…` : `Log In`
        }), h && (0,
        U.jsx)(`p`, {
            className: `m-formerr`,
            role: `alert`,
            children: h
        }), (0,
        U.jsx)(X, {
            label: `Continue with Google`,
            href: i
        }), (0,
        U.jsxs)(`p`, {
            className: `m-foot`,
            children: [`Don't have an account yet? `, (0,
            U.jsx)(`button`, {
                className: `link strong`,
                onClick: () => n(`signup`),
                children: `Register now`
            })]
        })]
    })
}
function we({onClose: e, go: t, notice: n, googleUrl: r, endpoint: i, regime: a, privacyUrl: o, termsUrl: s}) {
    let[c,l] = (0,
    H.useState)(``)
      , [u,d] = (0,
    H.useState)(``)
      , [f,p] = (0,
    H.useState)(``)
      , [m,h] = (0,
    H.useState)(``)
      , [g,_] = (0,
    H.useState)(!0)
      , [v,y] = (0,
    H.useState)(!1)
      , [b,x] = (0,
    H.useState)(null)
      , [S,C] = (0,
    H.useState)(null)
      , [w,T] = (0,
    H.useState)(null)
      , [E,D] = (0,
    H.useState)(null)
      , [ee,O] = (0,
    H.useState)(null)
      , [k,A] = (0,
    H.useState)(null)
      , [j,te] = (0,
    H.useState)(!1)
      , [ne,re] = (0,
    H.useState)(null)
      , M = () => {
        x(null),
        C(null),
        T(null),
        D(null),
        O(null),
        A(null)
    }
      , N = e => t => {
        e(t),
        M()
    }
    ;
    return ne === `email` ? (0,
    U.jsxs)(Se, {
        onClose: e,
        children: [(0,
        U.jsx)(`h2`, {
            className: `m-title`,
            children: `To complete registration, please check your email`
        }), (0,
        U.jsx)(`p`, {
            className: `m-sub`,
            children: `The instructions should be in your inbox.`
        }), (0,
        U.jsx)(`button`, {
            className: `cta`,
            onClick: e,
            children: `Ok`
        })]
    }) : ne === `ok` ? (0,
    U.jsxs)(Se, {
        onClose: e,
        children: [(0,
        U.jsx)(`h2`, {
            className: `m-title`,
            children: `Congratulations, your account has been successfully created!`
        }), (0,
        U.jsx)(`button`, {
            className: `cta`,
            onClick: e,
            children: `Log In`
        })]
    }) : (0,
    U.jsxs)(Se, {
        onClose: e,
        back: () => t(`login`),
        children: [(0,
        U.jsx)(`h2`, {
            className: `m-title`,
            children: `Create account`
        }), n && (0,
        U.jsxs)(`div`, {
            className: `notice`,
            children: [(0,
            U.jsx)(dt, {}), ` `, n]
        }), (0,
        U.jsx)(be, {
            label: `Username`,
            req: !0,
            placeholder: `satoshi`,
            value: c,
            onChange: N(l),
            error: b
        }), (0,
        U.jsx)(be, {
            label: `Email`,
            req: !0,
            placeholder: `you@wallet.xyz`,
            value: u,
            onChange: N(d),
            error: S
        }), (0,
        U.jsx)(be, {
            label: `Password`,
            req: !0,
            type: `password`,
            placeholder: `••••••••`,
            value: f,
            onChange: N(p),
            error: w
        }), (0,
        U.jsx)(be, {
            label: `Confirm password`,
            req: !0,
            type: `password`,
            placeholder: `••••••••`,
            value: m,
            onChange: N(h),
            error: E
        }), k && (0,
        U.jsx)(`p`, {
            className: `m-formerr`,
            role: `alert`,
            style: {
                margin: `0 0 10px`
            },
            children: k
        }), (0,
        U.jsxs)(`div`, {
            className: `boxes`,
            children: [(0,
            U.jsx)(xe, {
                checked: g,
                onChange: N(_),
                children: `Send me the daily newsletter of trending projects.`
            }), (0,
            U.jsxs)(xe, {
                checked: v,
                onChange: N(y),
                children: [`I agree to the `, (0,
                U.jsx)(`a`, {
                    className: `link u`,
                    href: o,
                    target: `_blank`,
                    rel: `noreferrer`,
                    children: `Privacy Policy`
                }), ` and `, (0,
                U.jsx)(`a`, {
                    className: `link u`,
                    href: s,
                    target: `_blank`,
                    rel: `noreferrer`,
                    children: `Terms`
                }), `.`]
            }), ee && (0,
            U.jsx)(`span`, {
                className: `ferr`,
                children: ee
            })]
        }), (0,
        U.jsx)(`button`, {
            className: `cta`,
            onClick: () => {
                if (j)
                    return;
                let e = c.trim()
                  , t = u.trim()
                  , n = null
                  , r = null
                  , o = null
                  , s = null
                  , l = null;
                if (e || (n = `Username is required.`),
                t ? /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t) || (r = `Enter a valid email address.`) : r = `Email is required.`,
                f || (o = `Password is required.`),
                m ? f && f !== m && (s = `Passwords do not match.`) : s = `Please confirm your password.`,
                v || (l = `You must accept the Privacy Policy and Terms.`),
                n || r || o || s || l) {
                    x(n),
                    C(r),
                    T(o),
                    D(s),
                    O(l),
                    A(null);
                    return
                }
                te(!0),
                M(),
                Ie(i, {
                    username: e,
                    email: t,
                    password1: f,
                    password2: m,
                    receive_newsletters: g,
                    private_policy: v
                }).then(e => {
                    let t = {};
                    try {
                        t = typeof e.data == `string` ? JSON.parse(e.data) : e.data || {}
                    } catch {
                        t = {}
                    }
                    if (e.success)
                        re(Number(a) === 1 ? `ok` : `email`);
                    else {
                        let e = e => Array.isArray(e) ? e.join(` `) : e || null;
                        x(e(t.username)),
                        C(e(t.email)),
                        T(( (...t) => t.map(e).filter(Boolean).join(` `) || null)(t.password1, t.password)),
                        D(e(t.password2)),
                        O(e(t.private_policy));
                        let n = t.username || t.email || t.password1 || t.password2 || t.password || t.private_policy;
                        A(e(t.__all__) || (n ? null : `Registration failed. Please try again.`))
                    }
                }
                ).catch( () => A(`Something went wrong. Please try again.`)).finally( () => te(!1))
            }
            ,
            disabled: j,
            children: j ? `Creating…` : `Complete registration`
        }), (0,
        U.jsx)(X, {
            label: `Sign up with Google`,
            href: r
        })]
    })
}
function Te({onClose: e, go: t, endpoint: n}) {
    let[r,i] = (0,
    H.useState)(``)
      , [a,o] = (0,
    H.useState)(null)
      , [s,c] = (0,
    H.useState)(null)
      , [l,u] = (0,
    H.useState)(!1)
      , [d,f] = (0,
    H.useState)(!1)
      , [p,m] = (0,
    H.useState)(``);
    return d ? (0,
    U.jsxs)(Se, {
        onClose: e,
        children: [(0,
        U.jsx)(`h2`, {
            className: `m-title`,
            children: `Recovery email sent to`
        }), (0,
        U.jsx)(`p`, {
            className: `reset-email`,
            children: p
        }), (0,
        U.jsxs)(`p`, {
            className: `m-sub`,
            children: [`To reset your password, follow the instructions in`, `\xA0`, `the`, `\xA0`, `email we've sent you.`]
        }), (0,
        U.jsx)(`button`, {
            className: `cta`,
            onClick: e,
            children: `Ok`
        })]
    }) : (0,
    U.jsxs)(Se, {
        onClose: e,
        back: () => t(`login`),
        children: [(0,
        U.jsx)(`h2`, {
            className: `m-title`,
            children: `Reset password`
        }), (0,
        U.jsx)(`p`, {
            className: `m-sub`,
            children: `Enter your email and we'll send a reset link.`
        }), (0,
        U.jsx)(be, {
            label: `Email`,
            req: !0,
            placeholder: `you@wallet.xyz`,
            value: r,
            onChange: e => {
                i(e),
                o(null),
                c(null)
            }
            ,
            error: a
        }), (0,
        U.jsx)(`button`, {
            className: `cta`,
            onClick: () => {
                if (l)
                    return;
                let e = r.trim();
                if (!e) {
                    o(`Email is required.`);
                    return
                }
                if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)) {
                    o(`Enter a valid email address.`);
                    return
                }
                u(!0),
                o(null),
                c(null),
                Fe(n, e).then(t => {
                    let n = {};
                    try {
                        n = typeof t.data == `string` ? JSON.parse(t.data) : t.data || {}
                    } catch {
                        n = {}
                    }
                    if (t.success)
                        m(n.email || e),
                        f(!0);
                    else {
                        let e = e => Array.isArray(e) ? e.join(` `) : e || null;
                        o(e(n.email)),
                        c(e(n.__all__) || (n.email ? null : `Couldn't send the reset link. Please try again.`))
                    }
                }
                ).catch( () => c(`Something went wrong. Please try again.`)).finally( () => u(!1))
            }
            ,
            disabled: l,
            children: l ? `Sending…` : `Send reset link`
        }), s && (0,
        U.jsx)(`p`, {
            className: `m-formerr`,
            role: `alert`,
            children: s
        })]
    })
}
function Ee({id: e, plan: t, setPlan: n, current: r, title: i, badge: a, price: o, per: s, sub: c, features: l, locked: u}) {
    let d = t === e;
    return (0,
    U.jsxs)(`button`, {
        className: `plan` + (d ? ` plan--on` : ``) + (r ? ` plan--cur` : ``),
        onClick: () => !r && n(e),
        disabled: r,
        children: [(0,
        U.jsxs)(`span`, {
            className: `plan-top`,
            children: [!r && (0,
            U.jsx)(`span`, {
                className: `radio` + (d ? ` radio--on` : ``)
            }), r && (0,
            U.jsx)(`span`, {
                className: `radio radio--check`,
                children: (0,
                U.jsx)(q, {})
            }), (0,
            U.jsxs)(`span`, {
                className: `plan-name`,
                children: [i, a && (0,
                U.jsx)(`span`, {
                    className: `plan-badge`,
                    children: a
                })]
            }), (0,
            U.jsx)(`span`, {
                className: `plan-price`,
                children: r ? (0,
                U.jsx)(`em`, {
                    children: `Current`
                }) : (0,
                U.jsxs)(U.Fragment, {
                    children: [c && (0,
                    U.jsx)(`s`, {
                        children: c
                    }), (0,
                    U.jsx)(`b`, {
                        children: o
                    }), s && (0,
                    U.jsx)(`i`, {
                        children: s
                    })]
                })
            })]
        }), (0,
        U.jsx)(`ul`, {
            className: `plan-feat`,
            children: l.map(e => (0,
            U.jsxs)(`li`, {
                className: u ? `lk` : `ok`,
                children: [u ? (0,
                U.jsx)(J, {}) : (0,
                U.jsx)(q, {}), e]
            }, e))
        })]
    })
}
function De({onClose: e, plan: t, setPlan: n, isPro: r, auth: i, endpoint: a, onNeedAuth: o}) {
    let s = t === `q` ? `$129.00` : `$49.00`
      , [c,l] = (0,
    H.useState)(null)
      , [u,d] = (0,
    H.useState)(!1)
      , f = e => {
        n(e),
        l(null)
    }
      , p = t === `q` ? `premium90` : `premiumuser`;
    return (0,
    U.jsxs)(Se, {
        onClose: e,
        wide: !0,
        children: [(0,
        U.jsx)(`h2`, {
            className: `m-title`,
            children: `Go Pro`
        }), (0,
        U.jsx)(`p`, {
            className: `m-sub`,
            children: `Leak the alpha first. Cancel anytime.`
        }), (0,
        U.jsx)(Ee, {
            id: `free`,
            plan: t,
            setPlan: f,
            current: !0,
            title: `Free`,
            locked: !0,
            features: [`${et} account opens / day`, `Up to 5 watchlist accounts`]
        }), (0,
        U.jsx)(Ee, {
            id: `m`,
            plan: t,
            setPlan: f,
            title: `Premium`,
            badge: (0,
            U.jsxs)(U.Fragment, {
                children: [(0,
                U.jsx)(dt, {}), ` popular`]
            }),
            price: `$49.00`,
            per: `/ 30 days`,
            features: mt
        }), (0,
        U.jsx)(Ee, {
            id: `q`,
            plan: t,
            setPlan: f,
            title: `Premium`,
            badge: `save 12%`,
            price: `$129.00`,
            per: `/ 90 days`,
            sub: `$147.00`,
            features: [`Everything in Premium`, `Billed every 90 days`]
        }), c && (0,
        U.jsx)(`p`, {
            className: `m-formerr`,
            role: `alert`,
            style: {
                margin: `0 0 10px`
            },
            children: c
        }), (0,
        U.jsx)(`button`, {
            className: `cta`,
            onClick: () => {
                if (!(u || r)) {
                    if (!i) {
                        o();
                        return
                    }
                    d(!0),
                    l(null),
                    Le(a, p).then(e => {
                        e && e.success && e.link ? window.location.assign(e.link) : (l(`Payment error!`),
                        d(!1))
                    }
                    ).catch( () => {
                        l(`Payment error!`),
                        d(!1)
                    }
                    )
                }
            }
            ,
            disabled: r || u,
            children: r ? `You're Pro ✓` : u ? `Creating invoice…` : `Upgrade — ${s}`
        }), (0,
        U.jsx)(`p`, {
            className: `m-foot small`,
            children: `Secure checkout · you must be registered to subscribe`
        })]
    })
}
function Oe({onClose: e, used: t, limit: n, auth: r, userLimit: i, onRegister: a, onUpgrade: o, kind: s=`opens`}) {
    let c = s === `watch`;
    return (0,
    U.jsxs)(Se, {
        onClose: e,
        children: [(0,
        U.jsx)(`span`, {
            className: `lim-ic`,
            children: (0,
            U.jsx)(J, {})
        }), (0,
        U.jsx)(`h2`, {
            className: `m-title`,
            children: c ? `You've hit your watchlist limit` : `You're out of free opens`
        }), c ? (0,
        U.jsxs)(`p`, {
            className: `m-sub`,
            children: [`Free accounts can save up to `, n, ` accounts to a watchlist. Remove one to make room — or go Pro for unlimited watchlists and the reason behind every move.`]
        }) : r ? (0,
        U.jsxs)(`p`, {
            className: `m-sub`,
            children: [`You've opened all `, n, ` of today's free accounts. Your opens reset in 24 hours — or go Pro for unlimited access to every account and the reason behind each move.`]
        }) : (0,
        U.jsxs)(`p`, {
            className: `m-sub`,
            children: [`Guests get `, n, ` free account opens. Create a free account and get `, i, ` every day.`]
        }), (0,
        U.jsxs)(`div`, {
            className: `lim-meter`,
            children: [(0,
            U.jsx)(`div`, {
                className: `lim-track`,
                children: (0,
                U.jsx)(`i`, {
                    style: {
                        width: `100%`
                    }
                })
            }), (0,
            U.jsxs)(`span`, {
                className: `lim-count`,
                children: [t, ` / `, n, ` `, c ? `watchlists saved` : `free opens used today`]
            })]
        }), (0,
        U.jsx)(`ul`, {
            className: `lim-perks`,
            children: c ? (0,
            U.jsxs)(U.Fragment, {
                children: [(0,
                U.jsxs)(`li`, {
                    children: [(0,
                    U.jsx)(q, {}), ` Unlimited watchlists`]
                }), (0,
                U.jsxs)(`li`, {
                    children: [(0,
                    U.jsx)(q, {}), ` Unlimited account opens`]
                }), (0,
                U.jsxs)(`li`, {
                    children: [(0,
                    U.jsx)(q, {}), ` New leaks the moment smart money moves`]
                })]
            }) : r ? (0,
            U.jsxs)(U.Fragment, {
                children: [(0,
                U.jsxs)(`li`, {
                    children: [(0,
                    U.jsx)(q, {}), ` Unlimited account opens`]
                }), (0,
                U.jsxs)(`li`, {
                    children: [(0,
                    U.jsx)(q, {}), ` The full “why it's trending” on every account`]
                }), (0,
                U.jsxs)(`li`, {
                    children: [(0,
                    U.jsx)(q, {}), ` New leaks the moment smart money moves`]
                })]
            }) : (0,
            U.jsxs)(U.Fragment, {
                children: [(0,
                U.jsxs)(`li`, {
                    children: [(0,
                    U.jsx)(q, {}), ` `, i, ` account opens every day`]
                }), (0,
                U.jsxs)(`li`, {
                    children: [(0,
                    U.jsx)(q, {}), ` Save accounts to your watchlist`]
                }), (0,
                U.jsxs)(`li`, {
                    children: [(0,
                    U.jsx)(q, {}), ` Free — no card required`]
                })]
            })
        }), c || r ? (0,
        U.jsxs)(U.Fragment, {
            children: [(0,
            U.jsxs)(`button`, {
                className: `cta`,
                onClick: o,
                children: [(0,
                U.jsx)(dt, {}), ` Upgrade to Pro`]
            }), (0,
            U.jsx)(`button`, {
                className: `lim-later`,
                onClick: e,
                children: c ? `Maybe later` : `I'll come back in 24 hours`
            })]
        }) : (0,
        U.jsxs)(U.Fragment, {
            children: [(0,
            U.jsx)(`button`, {
                className: `cta`,
                onClick: a,
                children: `Create a free account`
            }), (0,
            U.jsx)(`button`, {
                className: `lim-later`,
                onClick: e,
                children: `Maybe later`
            })]
        })]
    })
}
function ke(e, t) {
    if (t <= 7)
        return Array.from({
            length: t
        }, (e, t) => t + 1);
    let n = [1]
      , r = Math.max(2, e - 1)
      , i = Math.min(t - 1, e + 1);
    r > 2 && n.push(`…`);
    for (let e = r; e <= i; e++)
        n.push(e);
    return i < t - 1 && n.push(`…`),
    n.push(t),
    n
}
function Ae({page: e, pages: t, setPage: n, from: r, to: i, total: a}) {
    return (0,
    U.jsxs)(`div`, {
        className: `pager`,
        children: [(0,
        U.jsxs)(`span`, {
            className: `pager-info`,
            children: [`Showing `, r, `–`, i, ` of `, a]
        }), (0,
        U.jsxs)(`div`, {
            className: `pager-btns`,
            children: [(0,
            U.jsx)(`button`, {
                className: `pg-nav`,
                disabled: e === 1,
                onClick: () => n(e - 1),
                children: `‹ Prev`
            }), ke(e, t).map( (t, r) => t === `…` ? (0,
            U.jsx)(`span`, {
                className: `pg-gap`,
                children: `…`
            }, `g` + r) : (0,
            U.jsx)(`button`, {
                className: `pg` + (t === e ? ` on` : ``),
                onClick: () => n(t),
                children: t
            }, t)), (0,
            U.jsx)(`button`, {
                className: `pg-nav`,
                disabled: e === t,
                onClick: () => n(e + 1),
                children: `Next ›`
            })]
        })]
    })
}
function je({value: e, onPick: t, onClear: n, onClose: r}) {
    let i = e || new Date
      , [a,o] = (0,
    H.useState)(i.getFullYear())
      , [s,c] = (0,
    H.useState)(i.getMonth())
      , [l,u] = (0,
    H.useState)(e ? K(e) : null)
      , [d,f] = (0,
    H.useState)(e ? e.getHours() : 9)
      , [p,m] = (0,
    H.useState)(e ? e.getMinutes() : 0)
      , h = (new Date(a,s,1).getDay() + 6) % 7
      , g = new Date(a,s + 1,0).getDate()
      , _ = K(new Date)
      , v = [];
    for (let e = 0; e < h; e++)
        v.push(null);
    for (let e = 1; e <= g; e++)
        v.push(e);
    for (; v.length % 7; )
        v.push(null);
    let y = e => {
        let t = s + e
          , n = a;
        t < 0 && (t = 11,
        n--),
        t > 11 && (t = 0,
        n++),
        c(t),
        o(n)
    }
      , b = (e, t) => Math.max(0, Math.min(t, isNaN(e) ? 0 : e))
      , x = e => String(e).padStart(2, `0`);
    return (0,
    U.jsx)(`div`, {
        className: `dp-backdrop`,
        onClick: r,
        children: (0,
        U.jsxs)(`div`, {
            className: `dp`,
            onClick: e => e.stopPropagation(),
            children: [(0,
            U.jsxs)(`div`, {
                className: `dp-head`,
                children: [(0,
                U.jsx)(`button`, {
                    className: `dp-arrow`,
                    onClick: () => y(-1),
                    "aria-label": `Previous month`,
                    children: (0,
                    U.jsx)(`svg`, {
                        viewBox: `0 0 24 24`,
                        fill: `none`,
                        stroke: `currentColor`,
                        strokeWidth: `2.2`,
                        strokeLinecap: `round`,
                        strokeLinejoin: `round`,
                        children: (0,
                        U.jsx)(`path`, {
                            d: `M15 6l-6 6 6 6`
                        })
                    })
                }), (0,
                U.jsxs)(`span`, {
                    className: `dp-title`,
                    children: [G[s], `, `, a]
                }), (0,
                U.jsx)(`button`, {
                    className: `dp-arrow`,
                    onClick: () => y(1),
                    "aria-label": `Next month`,
                    children: (0,
                    U.jsx)(`svg`, {
                        viewBox: `0 0 24 24`,
                        fill: `none`,
                        stroke: `currentColor`,
                        strokeWidth: `2.2`,
                        strokeLinecap: `round`,
                        strokeLinejoin: `round`,
                        children: (0,
                        U.jsx)(`path`, {
                            d: `M9 6l6 6-6 6`
                        })
                    })
                })]
            }), (0,
            U.jsx)(`div`, {
                className: `dp-dow`,
                children: ot.map(e => (0,
                U.jsx)(`span`, {
                    children: e
                }, e))
            }), (0,
            U.jsx)(`div`, {
                className: `dp-grid`,
                children: v.map( (e, t) => {
                    if (e == null)
                        return (0,
                        U.jsx)(`span`, {
                            className: `dp-cell empty`
                        }, t);
                    let n = new Date(a,s,e)
                      , r = l && n.getTime() === l.getTime()
                      , i = n.getTime() === _.getTime()
                      , o = n.getDay() === 0 || n.getDay() === 6;
                    return (0,
                    U.jsx)(`button`, {
                        className: `dp-cell` + (r ? ` sel` : ``) + (i && !r ? ` today` : ``) + (o && !r && !i ? ` we` : ``),
                        onClick: () => u(n),
                        children: e
                    }, t)
                }
                )
            }), (0,
            U.jsxs)(`div`, {
                className: `dp-time`,
                children: [(0,
                U.jsx)(`span`, {
                    className: `dp-time-lbl`,
                    children: `Time`
                }), (0,
                U.jsx)(`input`, {
                    value: x(d),
                    onChange: e => f(b(parseInt(e.target.value.replace(/\D/g, ``), 10), 23))
                }), (0,
                U.jsx)(`span`, {
                    className: `dp-colon`,
                    children: `:`
                }), (0,
                U.jsx)(`input`, {
                    value: x(p),
                    onChange: e => m(b(parseInt(e.target.value.replace(/\D/g, ``), 10), 59))
                })]
            }), (0,
            U.jsxs)(`div`, {
                className: `dp-foot`,
                children: [(0,
                U.jsx)(`button`, {
                    className: `dp-btn`,
                    onClick: () => {
                        n(),
                        r()
                    }
                    ,
                    children: `Clear`
                }), (0,
                U.jsx)(`button`, {
                    className: `dp-btn dp-today`,
                    onClick: () => {
                        let e = new Date;
                        o(e.getFullYear()),
                        c(e.getMonth()),
                        u(K(e))
                    }
                    ,
                    children: `Today`
                }), (0,
                U.jsx)(`button`, {
                    className: `dp-btn dp-ok`,
                    onClick: () => {
                        if (l) {
                            let e = new Date(l);
                            e.setHours(d, p, 0, 0),
                            t(e)
                        }
                        r()
                    }
                    ,
                    children: `OK`
                })]
            })]
        })
    })
}
function V(e) {
    if (typeof document > `u`)
        return ``;
    let t = document.cookie.match(`(?:^|; )` + e + `=([^;]*)`);
    return t ? decodeURIComponent(t[1]) : ``
}
async function Me(e, t, n) {
    let r = {
        "X-CSRFToken": V(`csrftoken`),
        "X-Requested-With": `XMLHttpRequest`
    }, i;
    if (n) {
        r[`Content-Type`] = `application/x-www-form-urlencoded`;
        let e = new URLSearchParams;
        Object.entries(t || {}).forEach( ([t,n]) => {
            n != null && e.set(t, n)
        }
        ),
        i = e.toString()
    } else
        r[`Content-Type`] = `application/json`,
        i = JSON.stringify(t);
    let a = await fetch(e, {
        method: `POST`,
        headers: r,
        credentials: `same-origin`,
        body: i
    });
    if (!a.ok)
        throw Error(`page request failed: ` + a.status);
    return a.json()
}
async function Ne(e, t, n) {
    let r = await fetch(e, {
        method: `POST`,
        headers: {
            "Content-Type": `application/x-www-form-urlencoded; charset=UTF-8`,
            "X-CSRFToken": V(`csrftoken`),
            "X-Requested-With": `XMLHttpRequest`
        },
        credentials: `same-origin`,
        body: new URLSearchParams({
            project_username: t,
            project_notes: n
        }).toString()
    });
    if (!r.ok)
        throw Error(`note save failed: ` + r.status);
    return r.json().catch( () => ({}))
}
async function Pe(e, {username: t, password: n, remember_me: r}) {
    let i = await fetch(e, {
        method: `POST`,
        headers: {
            "Content-Type": `application/x-www-form-urlencoded; charset=UTF-8`,
            "X-CSRFToken": V(`csrftoken`),
            "X-Requested-With": `XMLHttpRequest`
        },
        credentials: `same-origin`,
        body: new URLSearchParams({
            username: t,
            password: n,
            remember_me: r ? `true` : `false`
        }).toString()
    });
    if (!i.ok)
        throw Error(`login failed: ` + i.status);
    return i.json()
}
async function Fe(e, t) {
    let n = await fetch(e, {
        method: `POST`,
        headers: {
            "Content-Type": `application/x-www-form-urlencoded; charset=UTF-8`,
            "X-CSRFToken": V(`csrftoken`),
            "X-Requested-With": `XMLHttpRequest`
        },
        credentials: `same-origin`,
        body: new URLSearchParams({
            email: t
        }).toString()
    });
    if (!n.ok)
        throw Error(`reset failed: ` + n.status);
    return n.json()
}
async function Ie(e, {username: t, email: n, password1: r, password2: i, receive_newsletters: a, private_policy: o}) {
    let s = await fetch(e, {
        method: `POST`,
        headers: {
            "Content-Type": `application/x-www-form-urlencoded; charset=UTF-8`,
            "X-CSRFToken": V(`csrftoken`),
            "X-Requested-With": `XMLHttpRequest`
        },
        credentials: `same-origin`,
        body: new URLSearchParams({
            username: t,
            email: n,
            password1: r,
            password2: i,
            receive_newsletters: a ? `true` : `false`,
            private_policy: o ? `true` : `false`
        }).toString()
    });
    if (!s.ok)
        throw Error(`register failed: ` + s.status);
    return s.json()
}
async function Le(e, t) {
    let n = await fetch(e, {
        method: `POST`,
        headers: {
            "Content-Type": `application/x-www-form-urlencoded; charset=UTF-8`,
            "X-CSRFToken": V(`csrftoken`),
            "X-Requested-With": `XMLHttpRequest`
        },
        credentials: `same-origin`,
        body: new URLSearchParams({
            price_code: t
        }).toString()
    });
    if (!n.ok)
        throw Error(`invoice failed: ` + n.status);
    return n.json()
}
async function Re(e, t) {
    let n = await fetch(e, {
        method: `POST`,
        headers: {
            "Content-Type": `application/x-www-form-urlencoded; charset=UTF-8`,
            "X-CSRFToken": V(`csrftoken`),
            "X-Requested-With": `XMLHttpRequest`
        },
        credentials: `same-origin`,
        body: new URLSearchParams({
            project_username: t
        }).toString()
    });
    if (!n.ok)
        throw Error(`expand failed: ` + n.status);
    return n.json()
}
function ze() {
    try {
        return Intl.DateTimeFormat().resolvedOptions().timeZone || ``
    } catch {
        return ``
    }
}
async function Be(e, t) {
    let n = await fetch(e, {
        method: `POST`,
        headers: {
            "Content-Type": `application/x-www-form-urlencoded`,
            "X-CSRFToken": V(`csrftoken`),
            "X-Requested-With": `XMLHttpRequest`
        },
        credentials: `same-origin`,
        body: new URLSearchParams(t).toString()
    });
    if (!n.ok)
        throw Error(`tz set failed: ` + n.status);
    return n
}
async function Ve(e, t) {
    let n = await fetch(e, {
        method: `POST`,
        headers: {
            "Content-Type": `application/x-www-form-urlencoded`,
            "X-CSRFToken": V(`csrftoken`),
            "X-Requested-With": `XMLHttpRequest`
        },
        credentials: `same-origin`,
        body: new URLSearchParams({
            timezone: t
        }).toString()
    });
    if (!n.ok)
        throw Error(`wtch types failed: ` + n.status);
    return n.json()
}
async function He(e, t) {
    let n = await fetch(e, {
        method: `POST`,
        headers: {
            "Content-Type": `application/x-www-form-urlencoded; charset=UTF-8`,
            "X-CSRFToken": V(`csrftoken`),
            "X-Requested-With": `XMLHttpRequest`
        },
        credentials: `same-origin`,
        body: new URLSearchParams({
            email: t
        }).toString()
    });
    if (!n.ok)
        throw Error(`newsletter failed: ` + n.status);
    return n.json()
}
async function Ue(e, t) {
    let n = await fetch(e, {
        method: `POST`,
        headers: {
            "Content-Type": `application/x-www-form-urlencoded; charset=UTF-8`,
            "X-CSRFToken": V(`csrftoken`),
            "X-Requested-With": `XMLHttpRequest`
        },
        credentials: `same-origin`,
        body: new URLSearchParams({
            project_username: t
        }).toString()
    });
    if (!n.ok)
        throw Error(`watch failed: ` + n.status);
    return n.json()
}
async function We(e, t, n) {
    let r = await fetch(e, {
        method: `POST`,
        headers: {
            "Content-Type": `application/x-www-form-urlencoded`,
            "X-CSRFToken": V(`csrftoken`),
            "X-Requested-With": `XMLHttpRequest`
        },
        credentials: `same-origin`,
        body: new URLSearchParams({
            project_username: t,
            project_tag: n ?? `null`
        }).toString()
    });
    if (!r.ok)
        throw Error(`tag failed: ` + r.status);
    return r.json()
}
async function Ge(e, t, n) {
    let r = await fetch(e, {
        method: `POST`,
        headers: {
            "Content-Type": `application/x-www-form-urlencoded; charset=UTF-8`,
            "X-CSRFToken": V(`csrftoken`),
            "X-Requested-With": `XMLHttpRequest`
        },
        credentials: `same-origin`,
        body: new URLSearchParams({
            project_username: t,
            timestamp: String(n)
        }).toString()
    });
    if (!r.ok)
        throw Error(`notify failed: ` + r.status);
    return r.json()
}
function Ke(e, t, n) {
    if (typeof window > `u` || !window.history)
        return;
    let r = new URLSearchParams;
    r.set(`timeframe`, e.timeframe || `24h`),
    e.max_followers && r.set(`max_followers`, e.max_followers),
    e.max_age && r.set(`max_age`, e.max_age),
    e.hide_personal && r.set(`hide_personal`, `1`),
    e.crypto && r.set(`crypto`, `1`),
    e.tagged && r.set(`tagged`, `1`),
    e.visited && r.set(`visited`, `1`),
    r.set(`page`, String(e.page || 1));
    let i = (n || window.location.pathname) + `?` + r.toString();
    window.history[t ? `pushState` : `replaceState`]({
        sd: e
    }, ``, i)
}
function qe(e, t=!0, n) {
    if (typeof window > `u` || !window.history)
        return;
    let r = new URLSearchParams;
    r.set(`project_username`, e);
    let i = (n || window.location.pathname) + `?` + r.toString();
    window.history[t ? `pushState` : `replaceState`]({
        sd: {
            project_username: e
        }
    }, ``, i)
}
function Je() {
    let e = typeof window < `u` ? new URLSearchParams(window.location.search) : new URLSearchParams
      , t = e.get(`hide_personal`)
      , n = t => {
        let n = e.get(t);
        return n === `1` || n === `true`
    }
    ;
    return {
        project_username: (e.get(`project_username`) || ``).trim(),
        timeframe: e.get(`timeframe`) || null,
        max_followers: e.get(`max_followers`) || ``,
        max_age: e.get(`max_age`) || ``,
        hide_personal: t === `1` || t === `true`,
        crypto: n(`crypto`),
        tagged: n(`tagged`),
        visited: n(`visited`),
        page: parseInt(e.get(`page`) || ``, 10) || null
    }
}
function Ye(e) {
    let t = e && e.state || {}
      , n = Je()
      , r = e => e == null ? `` : String(e)
      , i = e => e === !0 || e === 1 || e === `1` || e === `true` || e === `True`
      , a = e => typeof window < `u` && new URLSearchParams(window.location.search).has(e)
      , o = n.project_username || r(t.project_username);
    return o ? {
        searchActive: !0,
        q: o,
        win: t.timeframe ?? `24h`,
        maxFollowers: ``,
        maxAge: ``,
        hidePersonal: !1,
        hideOpened: !1,
        hideMarked: !1,
        hideNonCrypto: !1,
        page: 1,
        numPages: t.num_pages ?? 1,
        total: t.total_count ?? null,
        perPage: t.per_page ?? tt
    } : {
        searchActive: !1,
        q: ``,
        win: n.timeframe ?? t.timeframe ?? `24h`,
        maxFollowers: r(a(`max_followers`) ? n.max_followers : t.max_followers),
        maxAge: r(a(`max_age`) ? n.max_age : t.max_age),
        hidePersonal: a(`hide_personal`) ? n.hide_personal : !!t.hide_personal,
        hideOpened: a(`visited`) ? n.visited : i(t.visited),
        hideMarked: a(`tagged`) ? n.tagged : i(t.tagged),
        hideNonCrypto: a(`crypto`) ? n.crypto : i(t.crypto),
        page: n.page ?? t.page ?? 1,
        numPages: t.num_pages ?? 1,
        total: t.total_count ?? null,
        perPage: t.per_page ?? tt
    }
}
function Xe({initialData: e}={}) {
    let t = e || pe()
      , n = t && t.endpoint || ht
      , r = t && t.state || {}
      , i = t && t.page_name || `main`
      , a = i === `watchlist`
      , o = ( () => {
        let e = typeof window < `u` && window.location ? window.location.pathname : `/`
          , t = /\/watchlist\/?$/.test(e) ? e.replace(/\/watchlist\/?$/, ``) || `/` : e;
        return {
            main: t,
            wl: (t.replace(/\/+$/, ``) || ``) + `/watchlist/`
        }
    }
    )()
      , s = (0,
    H.useRef)(t && t.wtch_endpoint || r && r.wtch_endpoint || o.wl)
      , c = (0,
    H.useRef)(t && t.wtch_notify_endpoint || r && r.wtch_notify_endpoint || Tt)
      , l = (0,
    H.useRef)(i)
      , u = (0,
    H.useRef)(a ? s.current : n)
      , d = (0,
    H.useRef)(a ? o.wl : o.main)
      , f = (0,
    H.useRef)(a)
      , p = (0,
    H.useRef)(null)
      , h = (0,
    H.useMemo)( () => Ye(t), [t])
      , _ = (0,
    H.useMemo)( () => fe(t, a), [t])
      , [v,b] = (0,
    H.useState)(_)
      , [x,S] = (0,
    H.useState)({
        page: h.page,
        numPages: h.numPages,
        total: h.total ?? _.length,
        perPage: h.perPage
    })
      , [C,w] = (0,
    H.useState)(!1)
      , [E,D] = (0,
    H.useState)(!1)
      , [ee,O] = (0,
    H.useState)(Number((t && t.wtch_future) ?? r.wtch_future ?? 0))
      , [k,A] = (0,
    H.useState)(Number((t && t.wtch_past) ?? r.wtch_past ?? 0))
      , [j,te] = (0,
    H.useState)({
        supportLink: r.support_link,
        twitterLink: r.twitter_link,
        tgLink: r.tg_link,
        catColors: t && t.cat_colors_lst || r.cat_colors_lst || {}
    })
      , ne = e => {
        e && te(t => ({
            supportLink: e.support_link ?? t.supportLink,
            twitterLink: e.twitter_link ?? t.twitterLink,
            tgLink: e.tg_link ?? t.tgLink,
            catColors: e.cat_colors_lst ?? t.catColors
        }))
    }
      , M = (0,
    H.useRef)(null)
      , N = (0,
    H.useRef)({})
      , [P,ie] = (0,
    H.useState)(h.win)
      , [F,I] = (0,
    H.useState)(h.q)
      , [L,R] = (0,
    H.useState)(h.searchActive)
      , [z,oe] = (0,
    H.useState)(0)
      , [B,se] = (0,
    H.useState)(!1)
      , [ce,le] = (0,
    H.useState)(!1)
      , [ue,be] = (0,
    H.useState)(null)
      , [xe,Ee] = (0,
    H.useState)( () => new Set)
      , [ke,V] = (0,
    H.useState)( () => new Set)
      , [Pe,Fe] = (0,
    H.useState)( () => new Set)
      , [Ie,Le] = (0,
    H.useState)(Number((t && t.bookmarks_cnt) ?? 0))
      , Xe = Number((t && t.free_plan_user_max_wtch) ?? 1 / 0)
      , nt = (0,
    H.useRef)(t && t.wtch_update_endpoint || r && r.wtch_update_endpoint || wt)
      , rt = (0,
    H.useRef)(new Set)
      , it = (0,
    H.useRef)(null)
      , [W,at] = (0,
    H.useState)(a ? `watchlist` : `trending`)
      , [G,ot] = (0,
    H.useState)({})
      , [K,ct] = (0,
    H.useState)(null)
      , [lt,ut] = (0,
    H.useState)(!1)
      , [q,J] = (0,
    H.useState)(h.maxFollowers)
      , [Y,X] = (0,
    H.useState)(h.maxAge)
      , [mt,Dt] = (0,
    H.useState)(h.hidePersonal)
      , [Ot,kt] = (0,
    H.useState)(h.hideOpened)
      , [At,jt] = (0,
    H.useState)(h.hideMarked)
      , [Mt,Nt] = (0,
    H.useState)(h.hideNonCrypto)
      , Pt = (0,
    H.useRef)(null)
      , [Ft,It] = (0,
    H.useState)({})
      , [Lt,Rt] = (0,
    H.useState)(1)
      , zt = !!(t && t.pass_newsletter_survey || r && r.pass_newsletter_survey)
      , Bt = t && t.newsletter_endpoint || r && r.newsletter_endpoint || St
      , [Vt,Ht] = (0,
    H.useState)(!zt)
      , [Ut,Wt] = (0,
    H.useState)(``)
      , [Gt,Kt] = (0,
    H.useState)(null)
      , [qt,Jt] = (0,
    H.useState)(!1)
      , [Yt,Xt] = (0,
    H.useState)(!1)
      , Zt = () => {
        if (qt)
            return;
        let e = Ut.trim();
        if (!e || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)) {
            Kt(`Invalid email address`);
            return
        }
        Jt(!0),
        Kt(null),
        He(Bt, e).then(e => {
            e && e.success ? Xt(!0) : Kt(`Something went wrong`)
        }
        ).catch( () => Kt(`Something went wrong`)).finally( () => Jt(!1))
    }
      , Qt = (0,
    H.useRef)(null)
      , $t = (0,
    H.useRef)(null)
      , [en,tn] = (0,
    H.useState)(!1)
      , [nn,rn] = (0,
    H.useState)(0)
      , [an,on] = (0,
    H.useState)(!1)
      , [sn,cn] = (0,
    H.useState)(0)
      , ln = (0,
    H.useRef)(null)
      , [un,dn] = (0,
    H.useState)(4)
      , [fn,pn] = (0,
    H.useState)(!1)
      , mn = t && t.login_endpoint || _t
      , hn = {
        gmgn: t && t.gmgn_ref || null,
        axiom: t && t.axiom_ref || null
    }
      , gn = t && t.reset_endpoint || vt
      , _n = t && t.register_endpoint || yt
      , vn = t && t.subscribe_endpoint || bt
      , yn = Number((t && t.registration_activation_regime) ?? 0)
      , bn = t && t.google_auth_url || null
      , xn = t && (t.user || t.state && t.state.user) || null
      , [Sn,Z] = (0,
    H.useState)(null)
      , [Q,Cn] = (0,
    H.useState)(!!xn)
      , [wn,Tn] = (0,
    H.useState)(xn)
      , [En,Dn] = (0,
    H.useState)(!!(t && t.has_active_subscription))
      , On = t && t.expand_endpoint || xt
      , kn = t && t.empty_notable_img || ``
      , An = t && t.privacy_url || `#`
      , jn = t && t.terms_url || `#`
      , Mn = t && t.tag_endpoint_1 || ``
      , Nn = !!(t && t.joined_pro_group)
      , Pn = Number((t && t.subscription_expired_at) ?? 0)
      , Fn = t && t.pro_group_link || ``
      , In = t && (t.tz_detect_url || t.tz_endpoint) || Ct
      , [Ln,Rn] = (0,
    H.useState)(Number((t && t.projects_visit_registered_threshold) ?? et))
      , [zn,Bn] = (0,
    H.useState)(Number((t && t.projects_visit_anonym_threshold) ?? $e))
      , [Vn,Hn] = (0,
    H.useState)(Number((t && t.visited_projects) ?? 0))
      , [Un,Wn] = (0,
    H.useState)( () => new Set)
      , Gn = (0,
    H.useRef)(!1)
      , [Kn,qn] = (0,
    H.useState)(`m`)
      , [Jn,Yn] = (0,
    H.useState)(!1);
    (0,
    H.useEffect)( () => pn(!0), []),
    (0,
    H.useEffect)( () => {
        let e = () => {
            let e = $t.current;
            e && tn(e.getBoundingClientRect().top <= .5);
            let t = Qt.current;
            if (!t)
                return;
            let n = t.getBoundingClientRect().top
              , r = window.innerHeight || document.documentElement.clientHeight;
            rn(n < r ? Math.ceil(r - n) : 0)
        }
        ;
        return e(),
        window.addEventListener(`scroll`, e, {
            passive: !0
        }),
        window.addEventListener(`resize`, e),
        () => {
            window.removeEventListener(`scroll`, e),
            window.removeEventListener(`resize`, e)
        }
    }
    , []),
    (0,
    H.useEffect)( () => {
        let e = e => {
            e.key === `Escape` && (Z(null),
            le(!1),
            ut(!1))
        }
        ;
        return window.addEventListener(`keydown`, e),
        () => window.removeEventListener(`keydown`, e)
    }
    , []),
    (0,
    H.useEffect)( () => {
        if (!lt)
            return;
        let e = e => {
            Pt.current && !Pt.current.contains(e.target) && ut(!1)
        }
        ;
        return document.addEventListener(`mousedown`, e),
        () => document.removeEventListener(`mousedown`, e)
    }
    , [lt]),
    (0,
    H.useEffect)( () => (document.body.style.overflow = ce ? `hidden` : ``,
    () => {
        document.body.style.overflow = ``
    }
    ), [ce]),
    (0,
    H.useEffect)( () => {
        if (typeof window > `u` || !window.location)
            return;
        let e = new URLSearchParams(window.location.search);
        if (e.get(`upgrade`) !== `1`)
            return;
        Q && Z(`premium`),
        e.delete(`upgrade`);
        let t = e.toString();
        window.history.replaceState({}, ``, window.location.pathname + (t ? `?` + t : ``))
    }
    , []);
    let Xn = (0,
    H.useRef)(!1);
    (0,
    H.useEffect)( () => {
        if (Xn.current)
            return;
        Xn.current = !0;
        let e = ze()
          , n = t && (t.tz ?? t.timezone) || ``;
        if (e && n && n === e)
            return;
        Be(In, {
            offset: String(new Date().getTimezoneOffset()),
            timezone: e || ``
        }).catch( () => {}
        );
        let r = t && t.wtch_types_endpoint;
        r && e && Ve(r, e).then(e => {
            e && e.success === !0 && (typeof e.wtch_past == `number` && A(e.wtch_past),
            typeof e.wtch_future == `number` && O(e.wtch_future))
        }
        ).catch( () => {}
        )
    }
    , []);
    let Zn = e => {
        let t = Jn ? o.main + `?upgrade=1` : o.main;
        typeof window < `u` && window.location.assign(t)
    }
      , Qn = () => {
        Yn(!0),
        Z(`login`)
    }
      , $n = () => {
        if (Nn)
            return (0,
            U.jsxs)(`span`, {
                className: `propill`,
                children: [(0,
                U.jsx)(dt, {}), ` Pro`]
            });
        let e = Pn > 0 ? (Pn * 1e3 - Date.now()) / 864e5 : 1 / 0;
        if (e <= 3) {
            let t = Math.max(1, Math.ceil(e))
              , n = () => Z(`premium`);
            return (0,
            U.jsxs)(`span`, {
                className: `propill propill-btn`,
                role: `button`,
                tabIndex: 0,
                onClick: n,
                onKeyDown: e => {
                    (e.key === `Enter` || e.key === ` `) && (e.preventDefault(),
                    n())
                }
                ,
                children: [(0,
                U.jsx)(dt, {}), ` Subscription will expire in `, t, ` `, t === 1 ? `day` : `days`]
            })
        }
        if (Fn)
            return (0,
            U.jsx)(`a`, {
                className: `propill-link`,
                href: Fn,
                target: `_blank`,
                rel: `noopener noreferrer`,
                children: (0,
                U.jsxs)(`span`, {
                    className: `propill`,
                    children: [(0,
                    U.jsx)(dt, {}), ` Join Pro Group`]
                })
            });
        let t = () => Z(`supporterr`);
        return (0,
        U.jsxs)(`span`, {
            className: `propill propill-btn`,
            role: `button`,
            tabIndex: 0,
            onClick: t,
            onKeyDown: e => {
                (e.key === `Enter` || e.key === ` `) && (e.preventDefault(),
                t())
            }
            ,
            children: [(0,
            U.jsx)(dt, {}), ` Join Pro Group`]
        })
    }
      , er = (e, t) => {
        if (!Q) {
            Z(`login`);
            return
        }
        let n = v.find(t => t.handle === e)
          , r = n ? n.mark : null
          , i = r === t ? null : t
          , a = t => b(n => n.map(n => n.handle === e ? {
            ...n,
            mark: t
        } : n));
        a(i),
        Mn && We(Mn, e, i).then(e => {
            e && e.success || a(r)
        }
        ).catch( () => a(r))
    }
      , tr = e => {
        if (!Q) {
            Z(`login`);
            return
        }
        if (!Pe.has(e) && !En && Ie >= Xe) {
            Z(`wtchlimit`);
            return
        }
        rt.current.has(e) || (rt.current.add(e),
        Ue(nt.current, e).then(e => {
            if (e && e.success) {
                let t = e.action !== `remove`
                  , n = e.project_username;
                Fe(e => {
                    let r = new Set(e);
                    return t ? r.add(n) : r.delete(n),
                    r
                }
                ),
                Le(e => t ? e + 1 : Math.max(0, e - 1)),
                !t && W === `watchlist` ? (rr(G[n] || null, null),
                ot(e => {
                    let t = {
                        ...e
                    };
                    return delete t[n],
                    t
                }
                ),
                b(e => e.filter(e => e.handle !== n)),
                S(e => ({
                    ...e,
                    total: Math.max(0, (e.total || 0) - 1)
                }))) : b(e => e.map(e => e.handle === n ? {
                    ...e,
                    isWatchlisted: t
                } : e))
            } else
                e && (e.code === 1 ? Z(`wtchlimit`) : console.log(e.code, e.msg))
        }
        ).catch( () => {}
        ).finally( () => {
            rt.current.delete(e)
        }
        ))
    }
      , nr = e => {
        if (!e)
            return null;
        let t = me(e);
        return t ? t.state === `g` ? `f` : t.state === `y` ? `p` : null : null
    }
      , rr = (e, t) => {
        let n = nr(e)
          , r = nr(t);
        n !== r && (n === `f` && O(e => Math.max(0, e - 1)),
        n === `p` && A(e => Math.max(0, e - 1)),
        r === `f` && O(e => e + 1),
        r === `p` && A(e => e + 1))
    }
      , ir = (e, t) => {
        let n = Math.floor(t.getTime() / 1e3)
          , r = G[e] || null;
        Ge(c.current, e, n).then(i => {
            i && i.success === !0 ? (ot(n => ({
                ...n,
                [e]: t
            })),
            b(t => t.map(t => t.handle === e ? {
                ...t,
                notifyTs: n
            } : t)),
            rr(r, t)) : console.log(i && i.msg ? i.msg : `An error occured`)
        }
        ).catch( () => {
            console.log(`An error occured`)
        }
        )
    }
      , ar = e => {
        let t = G[e] || null;
        Ge(c.current, e, `null`).then(n => {
            n && n.success === !0 ? (ot(t => {
                let n = {
                    ...t
                };
                return delete n[e],
                n
            }
            ),
            b(t => t.map(t => t.handle === e ? {
                ...t,
                notifyTs: null
            } : t)),
            rr(t, null)) : console.log(n && n.msg ? n.msg : `An error occured`)
        }
        ).catch( () => {
            console.log(`An error occured`)
        }
        )
    }
      , or = (e, t) => It(n => ({
        ...n,
        [e]: t
    }));
    (0,
    H.useEffect)( () => {
        Fe(e => {
            let t = new Set(e);
            for (let e of v)
                e.isWatchlisted ? t.add(e.handle) : t.delete(e.handle);
            return t
        }
        )
    }
    , [v]),
    (0,
    H.useEffect)( () => {
        ot(e => {
            let t = {
                ...e
            };
            for (let e of v)
                e.notifyTs == null ? delete t[e.handle] : t[e.handle] = new Date(e.notifyTs * 1e3);
            return t
        }
        )
    }
    , [v]);
    let sr = t && t.notes_endpoint || gt
      , [cr,lr] = (0,
    H.useState)({})
      , ur = (0,
    H.useRef)({})
      , dr = e => e.handle in Ft ? Ft[e.handle] : e.notes || ``
      , fr = (e, t) => {
        lr(t => ({
            ...t,
            [e]: `saving`
        })),
        Ne(sr, e, t).then( () => {
            b(n => n.map(n => n.handle === e ? {
                ...n,
                notes: t
            } : n)),
            lr(t => ({
                ...t,
                [e]: `saved`
            })),
            setTimeout( () => lr(t => t[e] === `saved` ? {
                ...t,
                [e]: void 0
            } : t), 2e3)
        }
        ).catch( () => lr(t => ({
            ...t,
            [e]: `error`
        })))
    }
      , pr = (e, t) => {
        or(e, t),
        lr(t => ({
            ...t,
            [e]: void 0
        })),
        clearTimeout(ur.current[e]),
        ur.current[e] = setTimeout( () => {
            ur.current[e] = null,
            fr(e, t)
        }
        , 800)
    }
      , mr = e => {
        ur.current[e] && (clearTimeout(ur.current[e]),
        ur.current[e] = null,
        fr(e, Ft[e] ?? ``))
    }
      , hr = En ? 1 / 0 : Q ? Ln : zn
      , gr = e => {
        be(e),
        ke.has(e) || V(t => new Set(t).add(e)),
        Q && W !== `watchlist` && !xe.has(e) && Ee(t => new Set(t).add(e))
    }
      , _r = e => {
        if (ue === e) {
            be(null);
            return
        }
        let t = v.find(t => t.handle === e)
          , n = !!(t && t.isVisited)
          , r = Un.has(e) || !!(t && t.preloaded);
        if (En || r) {
            if (En && !n && !xe.has(e))
                try {
                    Re(On, e).catch( () => {}
                    )
                } catch {}
            gr(e);
            return
        }
        if (!n && Vn >= hr) {
            Z(`limit`);
            return
        }
        Gn.current || (Gn.current = !0,
        Re(On, e).then(t => {
            if (t && t.success) {
                let n = t.data || {}
                  , r = n.notable_kols
                  , i = r && !Array.isArray(r) && r[e] !== void 0 ? r[e] : r
                  , a = de({
                    username: e,
                    ...n
                }, i ? {
                    [e]: i
                } : {});
                b(t => t.map(t => t.handle === e ? {
                    ...t,
                    ...a,
                    isWatchlisted: t.isWatchlisted,
                    notifyTs: t.notifyTs,
                    isVisited: t.isVisited,
                    mark: t.mark
                } : t)),
                Wn(t => new Set(t).add(e)),
                typeof t.visited_projects == `number` && (Hn(t.visited_projects),
                it.current = t.visited_projects),
                gr(e)
            } else
                t && t.msg === `Daily limit was exceeded!` ? (typeof t.visited_projects == `number` && (Hn(t.visited_projects),
                it.current = t.visited_projects),
                Z(`limit`)) : console.log(`An error occured!`)
        }
        ).catch( () => {
            console.log(`An error occured!`)
        }
        ).finally( () => {
            Gn.current = !1
        }
        ))
    }
      , vr = (0,
    H.useMemo)( () => {
        if (W !== `watchlist` && Qe.has(P))
            return [];
        let e = v.map(e => ({
            ...e,
            newKols: e.stats?.[P] ?? 0
        }));
        return W === `watchlist` ? [...e].sort( (e, t) => {
            let n = G[e.handle]
              , r = G[t.handle];
            return !n && !r ? 0 : n ? r ? n - r : -1 : 1
        }
        ) : e
    }
    , [v, W, P, G])
      , yr = (q.trim() === `` ? 0 : 1) + (Y.trim() === `` ? 0 : 1) + +!!mt + +!!Ot + +!!At + +!!Mt
      , br = e => ({
        timeframe: P,
        max_followers: String(q ?? ``).trim(),
        hide_personal: mt,
        crypto: +!!Mt,
        tagged: +!!At,
        visited: +!!Ot,
        max_age: String(Y ?? ``).trim(),
        page: e
    })
      , xr = e => {
        let t = e.state || {}
          , n = n => e[n] ?? t[n]
          , r = n(`wtch_notify_endpoint`);
        r && (c.current = r);
        let i = n(`wtch_update_endpoint`);
        i && (nt.current = i);
        let a = n(`page_name`);
        a && (l.current = a);
        let o = n(`wtch_endpoint`);
        o && (s.current = o,
        f.current && (u.current = o))
    }
      , Sr = e => {
        let t = e.state || {}
          , n = n => e[n] ?? t[n]
          , r = e => e != null && e !== `` && !isNaN(Number(e)) ? Number(e) : void 0
          , i = n(`user`);
        i && (Tn(i),
        Cn(!0));
        let a = r(n(`visited_projects`));
        if (a !== void 0) {
            let e = it.current;
            (e == null || a >= e) && (Hn(a),
            it.current = null)
        }
        let o = r(n(`projects_visit_registered_threshold`));
        o !== void 0 && Rn(o);
        let s = r(n(`projects_visit_anonym_threshold`));
        s !== void 0 && Bn(s);
        let c = n(`has_active_subscription`);
        c !== void 0 && Dn(!!c)
    }
      , Cr = (e, {push: t=!1, adoptFilters: n=!1}={}) => (M.current = {
        params: e,
        push: t
    },
    w(!0),
    D(!1),
    Me(u.current, e, f.current).then(r => {
        b(fe(r, f.current)),
        p.current !== null && at(p.current);
        let i = r.state || {};
        S({
            page: i.page ?? e.page ?? 1,
            numPages: i.num_pages ?? 1,
            total: i.total_count ?? 0,
            perPage: i.per_page ?? tt
        }),
        ne(i),
        xr(r),
        Sr(r);
        let a = typeof r.wtch_future == `number` ? r.wtch_future : i.wtch_future
          , o = typeof r.wtch_past == `number` ? r.wtch_past : i.wtch_past;
        if (typeof a == `number` && O(a),
        typeof o == `number` && A(o),
        n) {
            let e = String(i.max_followers ?? ``)
              , t = String(i.max_age ?? ``)
              , n = !!i.hide_personal;
            (e !== `` || t !== `` || n !== !1) && (wr.current = !0),
            J(e),
            X(t),
            Dt(n)
        }
        Ke(e, t, d.current),
        typeof window < `u` && window.scrollTo({
            top: 0,
            behavior: `smooth`
        })
    }
    ).catch( () => D(!0)).finally( () => {
        w(!1),
        p.current = null
    }
    ))
      , $ = (0,
    H.useRef)(h.searchActive)
      , wr = (0,
    H.useRef)(!1)
      , Tr = (0,
    H.useRef)(!1)
      , Er = () => {
        wr.current = !0,
        J(``),
        X(``),
        Dt(!1),
        kt(!1),
        jt(!1),
        Nt(!1),
        Rt(1),
        setTimeout( () => {
            wr.current = !1
        }
        , 0)
    }
      , Dr = () => {
        Tr.current = !0,
        I(``),
        setTimeout( () => {
            Tr.current = !1
        }
        , 0)
    }
      , Or = (e, {push: t=!0}={}) => (M.current = {
        params: {
            project_username: e
        },
        push: t,
        search: !0
    },
    w(!0),
    D(!1),
    Me(u.current, {
        project_username: e
    }).then(n => {
        b(fe(n, f.current));
        let r = n.state || {};
        S({
            page: 1,
            numPages: r.num_pages ?? 1,
            total: r.total_count ?? 0,
            perPage: r.per_page ?? tt
        }),
        ne(r),
        xr(n),
        Sr(n),
        Er(),
        $.current = !0,
        R(!0),
        qe(e, t, d.current),
        typeof window < `u` && window.scrollTo({
            top: 0,
            behavior: `smooth`
        })
    }
    ).catch( () => D(!0)).finally( () => {
        w(!1),
        p.current = null
    }
    ))
      , kr = (0,
    H.useRef)(!1);
    (0,
    H.useEffect)( () => {
        if (!kr.current) {
            kr.current = !0;
            return
        }
        if (W === `watchlist`)
            return;
        if (Tr.current) {
            Tr.current = !1;
            return
        }
        let e = F.trim();
        !e && $.current && w(!0);
        let t = setTimeout( () => {
            e ? Or(e, {
                push: !0
            }) : $.current && ($.current = !1,
            R(!1),
            Cr(br(1), {
                push: !0
            }))
        }
        , 400);
        return () => clearTimeout(t)
    }
    , [F]);
    let Ar = (0,
    H.useRef)(!1);
    (0,
    H.useEffect)( () => {
        if (!Ar.current) {
            Ar.current = !0;
            return
        }
        if (wr.current) {
            wr.current = !1;
            return
        }
        if (W === `watchlist`)
            return;
        let e = $.current
          , t = setTimeout( () => {
            Cr(br(1), {
                push: e
            }),
            e && ($.current = !1,
            R(!1),
            Dr())
        }
        , 300);
        return () => clearTimeout(t)
    }
    , [P, q, Y, mt, Ot, At, Mt, z]);
    let jr = (e, t) => {
        t ? p.current = e ? `watchlist` : `trending` : at(e ? `watchlist` : `trending`),
        u.current = e ? s.current : n,
        d.current = e ? o.wl : o.main,
        f.current = e
    }
      , Mr = (e, t) => {
        let n = e === `watchlist`;
        if (n && !Q) {
            Z(`login`);
            return
        }
        if (C)
            return;
        let r = !!(t && t !== P)
          , i = q !== `` || Y !== `` || mt !== !1 || Ot !== !1 || At !== !1 || Mt !== !1;
        Dr(),
        $.current = !1,
        R(!1),
        (r || i) && (wr.current = !0),
        J(``),
        X(``),
        Dt(!1),
        kt(!1),
        jt(!1),
        Nt(!1),
        jr(n, !0);
        let a = t || P;
        r && ie(t),
        Cr({
            timeframe: a
        }, {
            push: !0,
            adoptFilters: !n
        })
    }
      , Nr = e => Q ? !0 : (e && e.preventDefault && e.preventDefault(),
    Z(`login`),
    !1)
      , Pr = e => {
        if (Nr()) {
            if (W === `watchlist`) {
                Mr(`main`, e);
                return
            }
            e === P ? $.current && oe(e => e + 1) : ie(e)
        }
    }
    ;
    (0,
    H.useEffect)( () => {
        let e = () => {
            let e = Je()
              , t = /\/watchlist\/?$/.test(window.location.pathname)
              , n = /\/watchlist\/?$/.test(d.current);
            Ar.current = !0,
            kr.current = !0,
            t !== n && jr(t);
            let r = t;
            e.project_username && !r ? (wr.current = !0,
            Tr.current = !0,
            I(e.project_username),
            J(``),
            X(``),
            Dt(!1),
            kt(!1),
            jt(!1),
            Nt(!1),
            Rt(1),
            $.current = !0,
            R(!0),
            setTimeout( () => {
                wr.current = !1,
                Tr.current = !1
            }
            , 0),
            Or(e.project_username, {
                push: !1
            })) : (Tr.current = !0,
            wr.current = !0,
            I(``),
            e.timeframe && ie(e.timeframe),
            J(e.max_followers),
            X(e.max_age),
            Dt(e.hide_personal),
            Nt(e.crypto),
            jt(e.tagged),
            kt(e.visited),
            $.current = !1,
            R(!1),
            setTimeout( () => {
                wr.current = !1,
                Tr.current = !1
            }
            , 0),
            Cr({
                timeframe: e.timeframe || P,
                max_followers: e.max_followers,
                hide_personal: e.hide_personal,
                crypto: +!!e.crypto,
                tagged: +!!e.tagged,
                visited: +!!e.visited,
                max_age: e.max_age,
                page: e.page || 1
            }, {
                push: !1
            }))
        }
        ;
        return window.addEventListener(`popstate`, e),
        () => window.removeEventListener(`popstate`, e)
    }
    , []);
    let Fr = {
        g: ee,
        r: k
    };
    (0,
    H.useEffect)( () => {
        Rt(1)
    }
    , [F, W]),
    (0,
    H.useEffect)( () => {
        on(!1),
        cn(0)
    }
    , [ue]),
    (0,
    H.useEffect)( () => {
        let e = document.querySelector(`link[rel='icon']`);
        e || (e = document.createElement(`link`),
        e.setAttribute(`rel`, `icon`),
        document.head.appendChild(e)),
        e.setAttribute(`type`, `image/svg+xml`),
        e.setAttribute(`href`, st);
        let t = document.querySelector(`meta[name='description']`);
        t || (t = document.createElement(`meta`),
        t.setAttribute(`name`, `description`),
        document.head.appendChild(t)),
        t.setAttribute(`content`, `leak.me surfaces trending crypto X accounts by which smart-money KOLs are quietly following them — with the reason baked in.`)
    }
    , []),
    (0,
    H.useEffect)( () => {
        document.title = W === `watchlist` ? `Watchlist · leak.me` : `leak.me — alpha, leaked`
    }
    , [W]),
    (0,
    H.useEffect)( () => {
        let e = () => {
            let e = ln.current;
            if (!e)
                return;
            let t = getComputedStyle(e).gridTemplateColumns.split(` `).filter(Boolean).length;
            dn(Math.max(1, t))
        }
        ;
        return e(),
        window.addEventListener(`resize`, e),
        () => window.removeEventListener(`resize`, e)
    }
    , [ue]);
    let Ir = x.perPage || tt
      , Lr = x.total
      , Rr = Math.max(1, x.numPages)
      , zr = Math.min(x.page, Rr)
      , Br = (zr - 1) * Ir
      , Vr = vr
      , Hr = Lr === 0 ? 0 : Br + 1
      , Ur = Br + vr.length
      , Wr = e => {
        let t = Math.min(Math.max(1, e), Rr);
        C || t === x.page || Cr(br(t), {
            push: !0
        })
    }
    ;
    return (0,
    U.jsxs)(`div`, {
        className: `wrap`,
        children: [(0,
        U.jsx)(`style`, {
            children: Et + T + ae
        }), (0,
        U.jsxs)(`div`, {
            className: `shell`,
            children: [(0,
            U.jsxs)(`header`, {
                className: `mtop`,
                children: [(0,
                U.jsx)(`a`, {
                    className: `mtop-logo`,
                    href: `https://leak.me`,
                    target: `_blank`,
                    rel: `noreferrer`,
                    children: (0,
                    U.jsx)(ye, {
                        pfx: `mlk`
                    })
                }), (0,
                U.jsx)(`div`, {
                    className: `mtop-windows`,
                    children: Ze.map(e => (0,
                    U.jsx)(`button`, {
                        className: `chip` + (!L && e === P ? ` on` : ``),
                        onClick: () => Pr(e),
                        children: e
                    }, e))
                }), (0,
                U.jsx)(`button`, {
                    className: `burger`,
                    "aria-label": `Open menu`,
                    onClick: () => le(!0),
                    children: (0,
                    U.jsxs)(`svg`, {
                        viewBox: `0 0 24 24`,
                        width: `20`,
                        height: `20`,
                        fill: `none`,
                        stroke: `currentColor`,
                        strokeWidth: `2`,
                        strokeLinecap: `round`,
                        "aria-hidden": `true`,
                        children: [(0,
                        U.jsx)(`line`, {
                            x1: `3`,
                            y1: `6`,
                            x2: `21`,
                            y2: `6`
                        }), (0,
                        U.jsx)(`line`, {
                            x1: `3`,
                            y1: `12`,
                            x2: `21`,
                            y2: `12`
                        }), (0,
                        U.jsx)(`line`, {
                            x1: `3`,
                            y1: `18`,
                            x2: `21`,
                            y2: `18`
                        })]
                    })
                })]
            }), (0,
            U.jsxs)(`div`, {
                className: `msubhead`,
                children: [`Trending crypto accounts — `, (0,
                U.jsx)(`b`, {
                    children: `with the reason baked in`
                })]
            }), (0,
            U.jsxs)(`header`, {
                className: `top`,
                children: [(0,
                U.jsxs)(`a`, {
                    className: `brand`,
                    href: `https://leak.me`,
                    target: `_blank`,
                    rel: `noreferrer`,
                    children: [(0,
                    U.jsx)(ye, {}), (0,
                    U.jsxs)(`div`, {
                        children: [(0,
                        U.jsxs)(`div`, {
                            className: `bn`,
                            children: [`leak`, (0,
                            U.jsx)(`span`, {
                                className: `dot`,
                                children: `.me`
                            })]
                        }), (0,
                        U.jsxs)(`div`, {
                            className: `bs`,
                            children: [(0,
                            U.jsx)(`b`, {
                                className: `bs-lead`,
                                children: `alpha, leaked`
                            }), (0,
                            U.jsxs)(`span`, {
                                className: `bs-rest`,
                                children: [(0,
                                U.jsx)(`span`, {
                                    className: `bs-sep`,
                                    children: `·`
                                }), `who smart money is quietly following`]
                            }), (0,
                            U.jsxs)(`span`, {
                                className: `bs-mobile`,
                                children: [(0,
                                U.jsx)(`span`, {
                                    className: `bs-sep`,
                                    children: `·`
                                }), `who smart money is quietly following`]
                            })]
                        })]
                    })]
                }), (0,
                U.jsxs)(`div`, {
                    className: `head-right`,
                    children: [(0,
                    U.jsxs)(`a`, {
                        className: `feedlink`,
                        href: t && t.feed_endpoint || `/feed`,
                        title: `Open the live Alpha Feed`,
                        children: [(0,
                        U.jsx)(`span`, {
                            className: `fl-dot`
                        }), `Alpha Feed`]
                    }), (0,
                    U.jsxs)(`div`, {
                        className: `search`,
                        children: [(0,
                        U.jsx)(`span`, {
                            children: `⌕`
                        }), (0,
                        U.jsx)(`input`, {
                            value: F,
                            onMouseDown: Nr,
                            onChange: e => {
                                Nr() && I(e.target.value)
                            }
                            ,
                            placeholder: `Search by X @handle`
                        })]
                    }), En ? $n() : (0,
                    U.jsxs)(`button`, {
                        className: `upbtn`,
                        onClick: () => Z(`premium`),
                        children: [(0,
                        U.jsx)(dt, {}), ` Upgrade`]
                    }), Q ? (0,
                    U.jsxs)(`button`, {
                        className: `acctbtn`,
                        title: wn ? `Signed in as ` + wn : `Account`,
                        onClick: () => {
                            t && t.logout_url && window.location.assign(t.logout_url)
                        }
                        ,
                        children: [(0,
                        U.jsx)(`span`, {
                            className: `acctbtn-av`,
                            children: `◎`
                        }), ` `, wn || `Account`]
                    }) : (0,
                    U.jsx)(`button`, {
                        className: `loginbtn`,
                        onClick: () => Z(`login`),
                        children: `Log in`
                    })]
                })]
            }), (0,
            U.jsxs)(`div`, {
                className: `controls` + (en ? ` stuck` : ``),
                ref: $t,
                children: [(0,
                U.jsxs)(`div`, {
                    className: `ctrl-left` + (B ? ` searching` : ``),
                    children: [(0,
                    U.jsx)(`div`, {
                        className: `windows`,
                        children: Ze.map(e => (0,
                        U.jsx)(`button`, {
                            className: `chip` + (!L && W !== `watchlist` && e === P ? ` on` : ``),
                            onClick: () => Pr(e),
                            children: e
                        }, e))
                    }), B && (0,
                    U.jsxs)(`div`, {
                        className: `msearch`,
                        children: [(0,
                        U.jsx)(`span`, {
                            children: `⌕`
                        }), (0,
                        U.jsx)(`input`, {
                            value: F,
                            onMouseDown: Nr,
                            onChange: e => {
                                Nr() && I(e.target.value)
                            }
                            ,
                            placeholder: `Search by X @handle`,
                            autoFocus: !0
                        })]
                    }), (0,
                    U.jsx)(`button`, {
                        className: `msearch-tog`,
                        "aria-label": B ? `Close search` : `Search`,
                        onClick: () => {
                            Nr() && (B && I(``),
                            se(e => !e))
                        }
                        ,
                        children: B ? (0,
                        U.jsxs)(`svg`, {
                            viewBox: `0 0 24 24`,
                            width: `15`,
                            height: `15`,
                            fill: `none`,
                            stroke: `currentColor`,
                            strokeWidth: `2`,
                            strokeLinecap: `round`,
                            "aria-hidden": `true`,
                            children: [(0,
                            U.jsx)(`line`, {
                                x1: `6`,
                                y1: `6`,
                                x2: `18`,
                                y2: `18`
                            }), (0,
                            U.jsx)(`line`, {
                                x1: `18`,
                                y1: `6`,
                                x2: `6`,
                                y2: `18`
                            })]
                        }) : (0,
                        U.jsxs)(`svg`, {
                            viewBox: `0 0 24 24`,
                            width: `15`,
                            height: `15`,
                            fill: `none`,
                            stroke: `currentColor`,
                            strokeWidth: `2`,
                            strokeLinecap: `round`,
                            "aria-hidden": `true`,
                            children: [(0,
                            U.jsx)(`circle`, {
                                cx: `11`,
                                cy: `11`,
                                r: `7`
                            }), (0,
                            U.jsx)(`line`, {
                                x1: `20.5`,
                                y1: `20.5`,
                                x2: `16.5`,
                                y2: `16.5`
                            })]
                        })
                    }), (0,
                    U.jsxs)(`button`, {
                        className: `watchtab` + (W === `watchlist` ? ` on` : ``),
                        onClick: () => {
                            W !== `watchlist` && Mr(`watchlist`)
                        }
                        ,
                        children: [(0,
                        U.jsx)(`svg`, {
                            viewBox: `0 0 24 24`,
                            width: `13`,
                            height: `13`,
                            fill: `currentColor`,
                            "aria-hidden": `true`,
                            children: (0,
                            U.jsx)(`path`, {
                                d: `M12 .587l3.668 7.431 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z`
                            })
                        }), (0,
                        U.jsx)(`span`, {
                            className: `watchtab-lbl`,
                            children: `Watchlist`
                        }), Fr.g + Fr.r > 0 && (0,
                        U.jsxs)(`span`, {
                            className: `wstat`,
                            children: [Fr.g > 0 && (0,
                            U.jsx)(`span`, {
                                className: `ws ws-g`,
                                children: Fr.g
                            }), Fr.r > 0 && (0,
                            U.jsx)(`span`, {
                                className: `ws ws-r`,
                                children: Fr.r
                            })]
                        })]
                    })]
                }), (0,
                U.jsxs)(`div`, {
                    className: `ctrl-right`,
                    children: [(0,
                    U.jsxs)(`div`, {
                        className: `legend`,
                        children: [(0,
                        U.jsxs)(`span`, {
                            children: [(0,
                            U.jsx)(`i`, {
                                style: {
                                    background: y.degen.color
                                }
                            }), `Degen`]
                        }), (0,
                        U.jsxs)(`span`, {
                            children: [(0,
                            U.jsx)(`i`, {
                                style: {
                                    background: y.vc.color
                                }
                            }), `VC`]
                        }), (0,
                        U.jsxs)(`span`, {
                            children: [(0,
                            U.jsx)(`i`, {
                                style: {
                                    background: y.corporate.color
                                }
                            }), `Corporate`]
                        }), (0,
                        U.jsxs)(`span`, {
                            className: `legend-note`,
                            children: [W !== `watchlist` && (0,
                            U.jsxs)(U.Fragment, {
                                children: [(0,
                                U.jsx)(`span`, {
                                    className: `ln-n`,
                                    children: x.total ?? vr.length
                                }), ` accounts · `, (0,
                                U.jsx)(`span`, {
                                    className: `ln-w`,
                                    children: P
                                })]
                            }), !En && (0,
                            U.jsxs)(`span`, {
                                className: `opens-left`,
                                children: [W === `watchlist` ? `` : ` · `, Math.max(0, hr - Vn), ` free open`, Math.max(0, hr - Vn) === 1 ? `` : `s`, ` left`]
                            })]
                        })]
                    }), (0,
                    U.jsxs)(`div`, {
                        className: `filterwrap`,
                        ref: Pt,
                        children: [(0,
                        U.jsxs)(`button`, {
                            className: `filterbtn` + (lt ? ` open` : ``) + (yr ? ` active` : ``),
                            onClick: () => {
                                Nr() && ut(e => !e)
                            }
                            ,
                            title: `Filter the board`,
                            children: [(0,
                            U.jsx)(`svg`, {
                                viewBox: `0 0 24 24`,
                                width: `14`,
                                height: `14`,
                                fill: `none`,
                                stroke: `currentColor`,
                                strokeWidth: `2`,
                                strokeLinecap: `round`,
                                strokeLinejoin: `round`,
                                "aria-hidden": `true`,
                                children: (0,
                                U.jsx)(`path`, {
                                    d: `M3 5h18M6 12h12M10 19h4`
                                })
                            }), (0,
                            U.jsx)(`span`, {
                                className: `filterbtn-lbl`,
                                children: `Filters`
                            }), yr > 0 && (0,
                            U.jsx)(`span`, {
                                className: `filt-count`,
                                children: yr
                            })]
                        }), lt && (0,
                        U.jsxs)(`div`, {
                            className: `filt-pop`,
                            role: `dialog`,
                            "aria-label": `Filters`,
                            children: [(0,
                            U.jsxs)(`div`, {
                                className: `filt-head`,
                                children: [(0,
                                U.jsx)(`span`, {
                                    children: `Filters`
                                }), yr > 0 && (0,
                                U.jsx)(`button`, {
                                    className: `filt-reset`,
                                    onClick: () => {
                                        J(``),
                                        X(``),
                                        Dt(!1),
                                        kt(!1),
                                        jt(!1),
                                        Nt(!1)
                                    }
                                    ,
                                    children: `Reset`
                                })]
                            }), (0,
                            U.jsxs)(`div`, {
                                className: `filt-block`,
                                children: [(0,
                                U.jsx)(`label`, {
                                    className: `filt-lbl`,
                                    children: `Max followers`
                                }), (0,
                                U.jsx)(`input`, {
                                    className: `filt-input`,
                                    inputMode: `numeric`,
                                    placeholder: `Any`,
                                    value: q,
                                    onChange: e => J(e.target.value.replace(/[^\dkmb.]/gi, ``))
                                }), (0,
                                U.jsxs)(`div`, {
                                    className: `filt-presets`,
                                    children: [[`100`, `500`, `1000`].map(e => (0,
                                    U.jsx)(`button`, {
                                        className: `fp` + (q.toUpperCase() === e ? ` on` : ``),
                                        onClick: () => J(e),
                                        children: e
                                    }, e)), (0,
                                    U.jsx)(`button`, {
                                        className: `fp` + (q.trim() === `` ? ` on` : ``),
                                        onClick: () => J(``),
                                        children: `Any`
                                    })]
                                })]
                            }), (0,
                            U.jsxs)(`div`, {
                                className: `filt-block`,
                                children: [(0,
                                U.jsx)(`label`, {
                                    className: `filt-lbl`,
                                    children: `Max age`
                                }), (0,
                                U.jsx)(`input`, {
                                    className: `filt-input`,
                                    inputMode: `numeric`,
                                    placeholder: `Any`,
                                    value: Y,
                                    onChange: e => X(e.target.value.replace(/[^\dd]/gi, ``))
                                }), (0,
                                U.jsxs)(`div`, {
                                    className: `filt-presets`,
                                    children: [[`1d`, `5d`, `10d`].map(e => (0,
                                    U.jsx)(`button`, {
                                        className: `fp` + (Y.toLowerCase() === e ? ` on` : ``),
                                        onClick: () => X(e),
                                        children: e
                                    }, e)), (0,
                                    U.jsx)(`button`, {
                                        className: `fp` + (Y.trim() === `` ? ` on` : ``),
                                        onClick: () => X(``),
                                        children: `Any`
                                    })]
                                })]
                            }), (0,
                            U.jsxs)(`div`, {
                                className: `filt-block filt-switchrow`,
                                children: [(0,
                                U.jsx)(`span`, {
                                    className: `filt-lbl`,
                                    children: `Hide personal accounts`
                                }), (0,
                                U.jsx)(`button`, {
                                    className: `switch` + (mt ? ` on` : ``),
                                    role: `switch`,
                                    "aria-checked": mt,
                                    onClick: () => Dt(e => !e),
                                    children: (0,
                                    U.jsx)(`span`, {
                                        className: `knob`
                                    })
                                })]
                            }), (0,
                            U.jsxs)(`div`, {
                                className: `filt-block filt-switchrow`,
                                children: [(0,
                                U.jsx)(`span`, {
                                    className: `filt-lbl`,
                                    children: `Hide already-opened`
                                }), (0,
                                U.jsx)(`button`, {
                                    className: `switch` + (Ot ? ` on` : ``),
                                    role: `switch`,
                                    "aria-checked": Ot,
                                    onClick: () => kt(e => !e),
                                    children: (0,
                                    U.jsx)(`span`, {
                                        className: `knob`
                                    })
                                })]
                            }), (0,
                            U.jsxs)(`div`, {
                                className: `filt-block filt-switchrow`,
                                children: [(0,
                                U.jsx)(`span`, {
                                    className: `filt-lbl`,
                                    children: `Hide skipped & rugged`
                                }), (0,
                                U.jsx)(`button`, {
                                    className: `switch` + (At ? ` on` : ``),
                                    role: `switch`,
                                    "aria-checked": At,
                                    onClick: () => jt(e => !e),
                                    children: (0,
                                    U.jsx)(`span`, {
                                        className: `knob`
                                    })
                                })]
                            }), (0,
                            U.jsxs)(`div`, {
                                className: `filt-block filt-switchrow`,
                                children: [(0,
                                U.jsx)(`span`, {
                                    className: `filt-lbl`,
                                    children: `Hide non-crypto`
                                }), (0,
                                U.jsx)(`button`, {
                                    className: `switch` + (Mt ? ` on` : ``),
                                    role: `switch`,
                                    "aria-checked": Mt,
                                    onClick: () => Nt(e => !e),
                                    children: (0,
                                    U.jsx)(`span`, {
                                        className: `knob`
                                    })
                                })]
                            })]
                        })]
                    })]
                })]
            }), vr.length === 0 && !C ? F.trim() ? (0,
            U.jsxs)(`div`, {
                className: `empty`,
                children: [(0,
                U.jsx)(`span`, {
                    className: `empty-ic`,
                    children: (0,
                    U.jsxs)(`svg`, {
                        viewBox: `0 0 24 24`,
                        width: `26`,
                        height: `26`,
                        fill: `none`,
                        stroke: `currentColor`,
                        strokeWidth: `1.6`,
                        strokeLinecap: `round`,
                        strokeLinejoin: `round`,
                        children: [(0,
                        U.jsx)(`circle`, {
                            cx: `11`,
                            cy: `11`,
                            r: `7`
                        }), (0,
                        U.jsx)(`path`, {
                            d: `M21 21l-4.35-4.35`
                        })]
                    })
                }), (0,
                U.jsxs)(`h3`, {
                    className: `empty-h`,
                    children: [`No account matches “`, F.trim(), `”`]
                }), (0,
                U.jsx)(`p`, {
                    className: `empty-p`,
                    children: `We don't track that one yet. Check the spelling, or try a different name or handle.`
                }), (0,
                U.jsx)(`button`, {
                    className: `empty-cta`,
                    onClick: () => {
                        I(``),
                        se(!1)
                    }
                    ,
                    children: `Clear search`
                })]
            }) : W === `watchlist` ? (0,
            U.jsxs)(`div`, {
                className: `empty`,
                children: [(0,
                U.jsx)(`span`, {
                    className: `empty-ic`,
                    children: (0,
                    U.jsx)(`svg`, {
                        viewBox: `0 0 24 24`,
                        width: `26`,
                        height: `26`,
                        fill: `none`,
                        stroke: `currentColor`,
                        strokeWidth: `1.5`,
                        strokeLinejoin: `round`,
                        children: (0,
                        U.jsx)(`path`, {
                            d: `M12 .587l3.668 7.431 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z`
                        })
                    })
                }), Q ? (0,
                U.jsxs)(U.Fragment, {
                    children: [(0,
                    U.jsx)(`h3`, {
                        className: `empty-h`,
                        children: `Your watchlist is empty`
                    }), (0,
                    U.jsx)(`p`, {
                        className: `empty-p`,
                        children: `Tap the ★ on any account to save it here and follow it over time.`
                    }), (0,
                    U.jsx)(`button`, {
                        className: `empty-cta`,
                        onClick: () => Mr(`main`),
                        children: `Browse trending accounts`
                    })]
                }) : (0,
                U.jsxs)(U.Fragment, {
                    children: [(0,
                    U.jsx)(`h3`, {
                        className: `empty-h`,
                        children: `Sign in to start your watchlist`
                    }), (0,
                    U.jsx)(`p`, {
                        className: `empty-p`,
                        children: `Save the accounts you care about and jump back to them in one tap.`
                    }), (0,
                    U.jsx)(`button`, {
                        className: `empty-cta`,
                        onClick: () => Z(`login`),
                        children: `Log in`
                    })]
                })]
            }) : (0,
            U.jsxs)(`div`, {
                className: `empty`,
                children: [(0,
                U.jsx)(`span`, {
                    className: `empty-ic`,
                    children: (0,
                    U.jsxs)(`svg`, {
                        viewBox: `0 0 24 24`,
                        width: `26`,
                        height: `26`,
                        fill: `none`,
                        stroke: `currentColor`,
                        strokeWidth: `1.6`,
                        strokeLinecap: `round`,
                        strokeLinejoin: `round`,
                        children: [(0,
                        U.jsx)(`circle`, {
                            cx: `12`,
                            cy: `12`,
                            r: `9`
                        }), (0,
                        U.jsx)(`path`, {
                            d: `M12 7.5V12l3 2`
                        })]
                    })
                }), (0,
                U.jsxs)(`h3`, {
                    className: `empty-h`,
                    children: [`Nothing trending in the last `, P]
                }), (0,
                U.jsx)(`p`, {
                    className: `empty-p`,
                    children: `No accounts crossed the threshold in this window yet. Try a longer timeframe to catch more movement.`
                }), (0,
                U.jsx)(`button`, {
                    className: `empty-cta`,
                    onClick: () => Pr(`24h`),
                    children: `View last 24h`
                })]
            }) : (0,
            U.jsxs)(U.Fragment, {
                children: [(0,
                U.jsxs)(`div`, {
                    className: `lhead`,
                    children: [(0,
                    U.jsx)(`span`, {
                        className: `c-rank`,
                        children: `#`
                    }), (0,
                    U.jsx)(`span`, {
                        className: `c-acct`,
                        children: `Account`
                    }), (0,
                    U.jsx)(`span`, {
                        className: `c-why`,
                        children: `Why it's trending`
                    }), (0,
                    U.jsx)(`span`, {
                        className: `c-mix`,
                        children: `KOL Mix`
                    }), (0,
                    U.jsx)(`span`, {
                        className: `c-velo`,
                        children: W === `watchlist` ? `24h` : `New`
                    }), (0,
                    U.jsx)(`span`, {
                        className: `c-kol` + (W === `watchlist` ? ` ck-shift` : ``),
                        children: W === `watchlist` ? `Notify` : `Notable`
                    }), (0,
                    U.jsx)(`span`, {
                        className: `c-exp`
                    })]
                }), (0,
                U.jsx)(`main`, {
                    className: `list`,
                    style: {
                        opacity: C ? .5 : 1,
                        transition: `opacity .15s`,
                        pointerEvents: C ? `none` : `auto`
                    },
                    "aria-busy": C,
                    children: Vr.map( (e, t) => {
                        let n = ge(e)
                          , r = W === `watchlist` ? me(G[e.handle]) : null
                          , i = e.history ? Math.min(sn, e.history.length - 1) : 0;
                        e.history && he(e.history[i]);
                        let a = ue === e.handle;
                        return (0,
                        U.jsxs)(`div`, {
                            className: `item` + (a ? ` open` : ``) + (fn ? ` in` : ``) + (Q && !a && W !== `watchlist` && (xe.has(e.handle) || e.isVisited) ? ` seen` : ``),
                            style: {
                                transitionDelay: `${Math.min(t, 14) * 30}ms`
                            },
                            children: [(0,
                            U.jsxs)(`div`, {
                                className: `row`,
                                role: `button`,
                                tabIndex: 0,
                                onClick: () => _r(e.handle),
                                onKeyDown: t => {
                                    (t.key === `Enter` || t.key === ` `) && (t.preventDefault(),
                                    _r(e.handle))
                                }
                                ,
                                children: [(0,
                                U.jsxs)(`span`, {
                                    className: `c-rank rank`,
                                    children: [Q && W !== `watchlist` && (xe.has(e.handle) || e.isVisited) && (0,
                                    U.jsx)(`i`, {
                                        className: `seenpip`,
                                        title: `You've opened this`
                                    }), String(Br + t + 1).padStart(2, `0`)]
                                }), (0,
                                U.jsxs)(`span`, {
                                    className: `c-acct acct`,
                                    children: [(0,
                                    U.jsx)(_e, {
                                        a: e
                                    }), (0,
                                    U.jsxs)(`span`, {
                                        className: `acct-txt`,
                                        children: [(0,
                                        U.jsxs)(`span`, {
                                            className: `nm`,
                                            children: [(0,
                                            U.jsx)(`span`, {
                                                className: `nm-txt`,
                                                children: e.name
                                            }), (e.mark === `skip` || e.mark === `rug`) && (0,
                                            U.jsx)(`span`, {
                                                className: `markpip mp-` + e.mark,
                                                title: e.mark === `rug` ? `Marked as rug` : `Skipped`,
                                                children: e.mark === `rug` ? (0,
                                                U.jsxs)(`svg`, {
                                                    viewBox: `0 0 24 24`,
                                                    fill: `none`,
                                                    stroke: `currentColor`,
                                                    strokeWidth: `2.2`,
                                                    strokeLinecap: `round`,
                                                    strokeLinejoin: `round`,
                                                    children: [(0,
                                                    U.jsx)(`path`, {
                                                        d: `M5 21V4`
                                                    }), (0,
                                                    U.jsx)(`path`, {
                                                        d: `M5 4h11l-2 4 2 4H5`,
                                                        fill: `currentColor`
                                                    })]
                                                }) : (0,
                                                U.jsxs)(`svg`, {
                                                    viewBox: `0 0 24 24`,
                                                    fill: `none`,
                                                    stroke: `currentColor`,
                                                    strokeWidth: `2.2`,
                                                    strokeLinecap: `round`,
                                                    strokeLinejoin: `round`,
                                                    children: [(0,
                                                    U.jsx)(`path`, {
                                                        d: `M5 5l8 7-8 7z`
                                                    }), (0,
                                                    U.jsx)(`path`, {
                                                        d: `M18 5v14`
                                                    })]
                                                })
                                            }), Q && (dr(e) || ``).trim() && (0,
                                            U.jsx)(`span`, {
                                                className: `note-flag`,
                                                title: dr(e),
                                                children: (0,
                                                U.jsx)(`svg`, {
                                                    viewBox: `0 0 24 24`,
                                                    fill: `none`,
                                                    stroke: `currentColor`,
                                                    strokeWidth: `2.2`,
                                                    strokeLinecap: `round`,
                                                    children: (0,
                                                    U.jsx)(`path`, {
                                                        d: `M5 7h14M5 12h14M5 17h8`
                                                    })
                                                })
                                            })]
                                        }), (0,
                                        U.jsxs)(`span`, {
                                            className: `hl`,
                                            children: [`@`, e.handle, ` · `, e.followers]
                                        })]
                                    })]
                                }), (0,
                                U.jsxs)(`span`, {
                                    className: `c-why why-line`,
                                    children: [(!e.pending && e.token || e.launchCall) && (0,
                                    U.jsxs)(`span`, {
                                        className: `why-strip`,
                                        children: [!e.pending && e.token && (e.token.ticker || e.token.change24h != null) && (0,
                                        U.jsxs)(`span`, {
                                            className: `wtok`,
                                            children: [e.token.ticker && (0,
                                            U.jsxs)(`span`, {
                                                className: `tk`,
                                                children: [`$`, e.token.ticker]
                                            }), e.token.change24h != null && (0,
                                            U.jsxs)(`span`, {
                                                className: `chg ` + (e.token.change24h > 0 ? `up` : e.token.change24h < 0 ? `down` : `flat`),
                                                children: [e.token.change24h > 0 ? `+` : e.token.change24h < 0 ? `−` : ``, Math.round(Math.abs(e.token.change24h)).toLocaleString(), `%`]
                                            })]
                                        }), e.launchCall && (0,
                                        U.jsxs)(`a`, {
                                            className: `lc-call`,
                                            ...e.launchCall.url ? {
                                                href: e.launchCall.url,
                                                target: `_blank`,
                                                rel: `noreferrer`,
                                                onClick: e => e.stopPropagation()
                                            } : {
                                                role: `button`,
                                                onClick: e => {
                                                    e.preventDefault(),
                                                    e.stopPropagation()
                                                }
                                            },
                                            title: `New Launches Monitor called this — +${e.launchCall.pct}% peak. Open the call on Telegram`,
                                            children: [(0,
                                            U.jsx)(`span`, {
                                                className: `lc-call-ic`,
                                                children: (0,
                                                U.jsx)(`svg`, {
                                                    viewBox: `0 0 24 24`,
                                                    width: `11`,
                                                    height: `11`,
                                                    fill: `currentColor`,
                                                    "aria-hidden": `true`,
                                                    children: (0,
                                                    U.jsx)(`path`, {
                                                        d: `M13 2 4 13.5h6L9 22l9-11.5h-6z`
                                                    })
                                                })
                                            }), (0,
                                            U.jsxs)(`b`, {
                                                children: [`+`, e.launchCall.pct, `%`]
                                            }), (0,
                                            U.jsx)(`span`, {
                                                className: `lc-call-div`
                                            }), (0,
                                            U.jsx)(`span`, {
                                                className: `lc-call-lbl`,
                                                children: `called early`
                                            }), ` `, (0,
                                            U.jsx)(`span`, {
                                                className: `lc-call-arrow`,
                                                children: `↗`
                                            })]
                                        })]
                                    }), e.pending ? (0,
                                    U.jsxs)(`span`, {
                                        className: `why-pending`,
                                        children: [(0,
                                        U.jsx)(`i`, {
                                            className: `pdot`
                                        }), `Still figuring out why this one's gaining traction`]
                                    }) : e.unexplained ? (0,
                                    U.jsxs)(`span`, {
                                        className: `why-unknown`,
                                        children: [(0,
                                        U.jsxs)(`svg`, {
                                            viewBox: `0 0 24 24`,
                                            width: `13`,
                                            height: `13`,
                                            fill: `none`,
                                            stroke: `currentColor`,
                                            strokeWidth: `2`,
                                            strokeLinecap: `round`,
                                            strokeLinejoin: `round`,
                                            "aria-hidden": `true`,
                                            children: [(0,
                                            U.jsx)(`circle`, {
                                                cx: `12`,
                                                cy: `12`,
                                                r: `9`
                                            }), (0,
                                            U.jsx)(`path`, {
                                                d: `M9.6 9a2.4 2.4 0 1 1 3.4 2.2c-.7.4-1 .9-1 1.6`
                                            }), (0,
                                            U.jsx)(`path`, {
                                                d: `M12 16.4h.01`
                                            })]
                                        }), `No clear reason behind the follows`]
                                    }) : (0,
                                    U.jsx)(`span`, {
                                        className: `wtext`,
                                        children: e.hook
                                    }), e.launchCall && (0,
                                    U.jsxs)(`a`, {
                                        className: `lc-credit`,
                                        ...e.launchCall.url ? {
                                            href: e.launchCall.url,
                                            target: `_blank`,
                                            rel: `noreferrer`,
                                            onClick: e => e.stopPropagation()
                                        } : {
                                            role: `button`,
                                            onClick: e => {
                                                e.preventDefault(),
                                                e.stopPropagation()
                                            }
                                        },
                                        title: `New Launches Monitor called this — +${e.launchCall.pct}% peak. Open the call on Telegram`,
                                        children: [(0,
                                        U.jsx)(`span`, {
                                            className: `lc-call-ic`,
                                            children: (0,
                                            U.jsx)(`svg`, {
                                                viewBox: `0 0 24 24`,
                                                width: `11`,
                                                height: `11`,
                                                fill: `currentColor`,
                                                "aria-hidden": `true`,
                                                children: (0,
                                                U.jsx)(`path`, {
                                                    d: `M13 2 4 13.5h6L9 22l9-11.5h-6z`
                                                })
                                            })
                                        }), (0,
                                        U.jsxs)(`b`, {
                                            children: [`+`, e.launchCall.pct, `%`]
                                        }), (0,
                                        U.jsx)(`span`, {
                                            className: `lc-call-div`
                                        }), (0,
                                        U.jsx)(`span`, {
                                            className: `lc-call-lbl`,
                                            children: `called early`
                                        }), ` `, (0,
                                        U.jsx)(`span`, {
                                            className: `lc-call-arrow`,
                                            children: `↗`
                                        })]
                                    })]
                                }), (0,
                                U.jsxs)(`span`, {
                                    className: `c-mix mixcell`,
                                    children: [(0,
                                    U.jsx)(ve, {
                                        b: e.b,
                                        total: n.total
                                    }), (0,
                                    U.jsxs)(`span`, {
                                        className: `inst`,
                                        children: [(0,
                                        U.jsx)(`b`, {
                                            children: n.total
                                        }), ` total · `, Math.round(n.inst * 100), `% inst`]
                                    })]
                                }), (0,
                                U.jsx)(`span`, {
                                    className: `c-velo velo`,
                                    children: W === `watchlist` ? (0,
                                    U.jsxs)(`span`, {
                                        className: `velo-main`,
                                        children: [`+`, e.kols24h, (0,
                                        U.jsx)(`span`, {
                                            className: `velo-u`,
                                            children: `KOLs`
                                        })]
                                    }) : (0,
                                    U.jsxs)(U.Fragment, {
                                        children: [(0,
                                        U.jsxs)(`span`, {
                                            className: `velo-main`,
                                            children: [`+`, e.newKols, (0,
                                            U.jsx)(`span`, {
                                                className: `velo-u`,
                                                children: `KOLs`
                                            })]
                                        }), P !== `24h` && (0,
                                        U.jsx)(`span`, {
                                            className: `velo-sub`,
                                            children: (0,
                                            U.jsxs)(`span`, {
                                                children: [`+`, e.kols24h, (0,
                                                U.jsx)(`em`, {
                                                    children: `24h`
                                                })]
                                            })
                                        })]
                                    })
                                }), (0,
                                U.jsx)(`span`, {
                                    className: `c-kol` + (W === `watchlist` ? ` ck-shift` : ` stack`),
                                    children: W === `watchlist` ? (0,
                                    U.jsx)(`button`, {
                                        type: `button`,
                                        className: `notify-btn` + (r ? ` nd-` + r.state : ` empty`),
                                        onClick: t => {
                                            t.stopPropagation(),
                                            ct(e.handle)
                                        }
                                        ,
                                        children: r ? (0,
                                        U.jsxs)(`span`, {
                                            className: `notify`,
                                            children: [(0,
                                            U.jsx)(`span`, {
                                                className: `nd-date`,
                                                children: r.label
                                            }), (0,
                                            U.jsx)(`span`, {
                                                className: `nd-time`,
                                                children: r.time
                                            })]
                                        }) : (0,
                                        U.jsx)(`span`, {
                                            className: `nd-set`,
                                            children: `+ Set date`
                                        })
                                    }) : (0,
                                    U.jsxs)(U.Fragment, {
                                        children: [e.notable.slice(0, 4).map( ([e,,t]) => (0,
                                        U.jsx)(m, {
                                            name: e,
                                            avatar: t,
                                            empty: kn
                                        }, e)), (e.notableCount ?? e.notable.length) - Math.min(e.notable.length, 4) > 0 && (0,
                                        U.jsxs)(`span`, {
                                            className: `more-n`,
                                            children: [`+`, (e.notableCount ?? e.notable.length) - Math.min(e.notable.length, 4)]
                                        })]
                                    })
                                }), (0,
                                U.jsx)(`span`, {
                                    className: `c-exp chev`,
                                    style: {
                                        transform: a ? `rotate(90deg)` : `none`
                                    },
                                    children: `›`
                                })]
                            }), a && (0,
                            U.jsx)(g, {
                                a: e,
                                auth: Q,
                                panelClass: `panel--deck`,
                                isWatched: Pe.has(e.handle),
                                onToggleWatch: () => tr(e.handle),
                                note: dr(e),
                                onNote: t => pr(e.handle, t),
                                onNoteBlur: () => mr(e.handle),
                                onNoteRetry: () => fr(e.handle, dr(e)),
                                noteStatus: cr[e.handle],
                                onRequireAuth: () => Z(`login`),
                                mark: e.mark,
                                onMark: t => er(e.handle, t),
                                catColors: j.catColors,
                                histSel: N.current[e.handle] || 0,
                                onHistSel: t => {
                                    N.current[e.handle] = t
                                }
                                ,
                                venueRefs: hn,
                                notableEmpty: kn
                            })]
                        }, e.handle)
                    }
                    )
                }), (0,
                U.jsx)(`div`, {
                    ref: Qt,
                    "aria-hidden": `true`
                }), E && (0,
                U.jsxs)(`div`, {
                    style: {
                        textAlign: `center`,
                        padding: `14px 0`,
                        color: `var(--mut)`,
                        fontSize: 13
                    },
                    children: [`Couldn't load this page.`, ` `, (0,
                    U.jsx)(`button`, {
                        className: `link strong`,
                        onClick: () => {
                            let e = M.current;
                            e && Cr(e.params, {
                                push: e.push
                            })
                        }
                        ,
                        children: `Retry`
                    })]
                }), !L && Lr > 0 && (0,
                U.jsx)(Ae, {
                    page: zr,
                    pages: Rr,
                    setPage: e => {
                        Nr() && Wr(e)
                    }
                    ,
                    from: Hr,
                    to: Ur,
                    total: Lr
                })]
            }), (0,
            U.jsx)(`div`, {
                className: `footspace`
            }), (0,
            U.jsxs)(`footer`, {
                className: `sitefoot`,
                children: [(0,
                U.jsxs)(`div`, {
                    className: `sf-left`,
                    children: [(0,
                    U.jsxs)(`a`, {
                        className: `sf-brand`,
                        href: `https://leak.me`,
                        target: `_blank`,
                        rel: `noreferrer`,
                        children: [`leak`, (0,
                        U.jsx)(`span`, {
                            children: `.me`
                        })]
                    }), (0,
                    U.jsx)(`span`, {
                        className: `sf-note`,
                        children: `trending crypto accounts, with the reason baked in`
                    })]
                }), (0,
                U.jsxs)(`div`, {
                    className: `sf-links`,
                    children: [(0,
                    U.jsx)(`a`, {
                        className: `sf-link`,
                        href: null,
                        target: `_blank`,
                        rel: `noreferrer`,
                        children: `Support`
                    }), (0,
                    U.jsx)(`a`, {
                        className: `sf-link`,
                        href: null,
                        target: `_blank`,
                        rel: `noreferrer`,
                        "aria-label": `X (Twitter)`,
                        children: (0,
                        U.jsx)(ft, {})
                    }), (0,
                    U.jsx)(`a`, {
                        className: `sf-link`,
                        href: null,
                        target: `_blank`,
                        rel: `noreferrer`,
                        "aria-label": `Telegram`,
                        children: (0,
                        U.jsx)(pt, {})
                    })]
                })]
            })]
        }), Vt && (0,
        U.jsxs)(`aside`, {
            className: `newsbox`,
            style: {
                bottom: 18 + nn
            },
            children: [(0,
            U.jsx)(`button`, {
                className: `newsbox-x`,
                onClick: () => {
                    Ht(!1),
                    Kt(null)
                }
                ,
                "aria-label": `Dismiss`,
                children: `×`
            }), (0,
            U.jsxs)(`div`, {
                className: `newsbox-head`,
                children: [(0,
                U.jsx)(`span`, {
                    className: `newsbox-ic`,
                    children: (0,
                    U.jsxs)(`svg`, {
                        viewBox: `0 0 24 24`,
                        width: `16`,
                        height: `16`,
                        fill: `none`,
                        stroke: `currentColor`,
                        strokeWidth: `1.8`,
                        children: [(0,
                        U.jsx)(`rect`, {
                            x: `3`,
                            y: `5`,
                            width: `18`,
                            height: `14`,
                            rx: `2.5`
                        }), (0,
                        U.jsx)(`path`, {
                            d: `m4 7 8 6 8-6`
                        })]
                    })
                }), (0,
                U.jsx)(`span`, {
                    className: `newsbox-title`,
                    children: `Daily alpha, in your inbox`
                })]
            }), Yt ? (0,
            U.jsx)(`p`, {
                className: `newsbox-done`,
                children: `✓ You're in — check your inbox.`
            }) : (0,
            U.jsxs)(U.Fragment, {
                children: [(0,
                U.jsxs)(`p`, {
                    className: `newsbox-sub`,
                    children: [`Every morning: the last 24 hours of trending accounts — and `, (0,
                    U.jsx)(`em`, {
                        children: `why`
                    }), `.`]
                }), (0,
                U.jsxs)(`div`, {
                    className: `newsbox-form` + (Gt ? ` newsbox-form--err` : ``),
                    children: [(0,
                    U.jsx)(`input`, {
                        placeholder: `you@wallet.xyz`,
                        value: Ut,
                        "aria-invalid": !!Gt,
                        onChange: e => {
                            Wt(e.target.value),
                            Kt(null)
                        }
                        ,
                        onKeyDown: e => {
                            e.key === `Enter` && Zt()
                        }
                    }), (0,
                    U.jsx)(`button`, {
                        disabled: qt,
                        onClick: Zt,
                        children: qt ? `…` : `Join`
                    })]
                }), Gt && (0,
                U.jsx)(`p`, {
                    className: `newsbox-err`,
                    role: `alert`,
                    children: Gt
                })]
            })]
        }), (0,
        U.jsx)(re, {
            open: ce,
            onClose: () => le(!1),
            q: F,
            setQ: I,
            auth: Q,
            pro: En,
            watch: {
                size: ee + k
            },
            setModal: Z,
            page: `deck`,
            view: W,
            feedEndpoint: t && t.feed_endpoint,
            deckEndpoint: t && t.endpoint,
            setView: e => {
                e === `watchlist` && W !== `watchlist` && Mr(`watchlist`)
            }
            ,
            setAuth: e => {
                !e && t && t.logout_url && window.location.assign(t.logout_url)
            }
            ,
            setPro: () => {}
        }), Sn === `login` && (0,
        U.jsx)(Ce, {
            onClose: () => Z(null),
            onAuth: Zn,
            go: Z,
            endpoint: mn,
            googleUrl: bn
        }), Sn === `signup` && (0,
        U.jsx)(we, {
            onClose: () => Z(null),
            go: Z,
            googleUrl: bn,
            endpoint: _n,
            regime: yn,
            privacyUrl: An,
            termsUrl: jn,
            notice: Jn ? `Create an account to unlock Pro.` : null
        }), Sn === `reset` && (0,
        U.jsx)(Te, {
            onClose: () => Z(null),
            go: Z,
            endpoint: gn
        }), Sn === `premium` && (0,
        U.jsx)(De, {
            onClose: () => Z(null),
            plan: Kn,
            setPlan: qn,
            isPro: En,
            auth: Q,
            endpoint: vn,
            onNeedAuth: Qn
        }), Sn === `limit` && (0,
        U.jsx)(Oe, {
            onClose: () => Z(null),
            used: Vn,
            limit: hr,
            auth: Q,
            userLimit: Ln,
            onRegister: () => Z(`signup`),
            onUpgrade: () => Z(`premium`)
        }), Sn === `wtchlimit` && (0,
        U.jsx)(Oe, {
            onClose: () => Z(null),
            kind: `watch`,
            used: Ie,
            limit: Xe,
            auth: Q,
            userLimit: Ln,
            onRegister: () => Z(`signup`),
            onUpgrade: () => Z(`premium`)
        }), Sn === `supporterr` && (0,
        U.jsxs)(Se, {
            onClose: () => Z(null),
            children: [(0,
            U.jsx)(`h2`, {
                className: `m-title`,
                children: `Something went wrong`
            }), (0,
            U.jsx)(`p`, {
                className: `m-sub`,
                children: `Please contact our support.`
            }), (0,
            U.jsx)(`button`, {
                className: `cta`,
                onClick: () => Z(null),
                children: `Got it`
            })]
        }), K && (0,
        U.jsx)(je, {
            value: G[K] || null,
            onPick: e => ir(K, e),
            onClear: () => ar(K),
            onClose: () => ct(null)
        })]
    })
}
var H, U, Ze, Qe, $e, et, tt, nt, rt, it, W, at, G, ot, K, st, ct, lt, ut, q, J, dt, Y, ft, pt, X, mt, ht, gt, _t, vt, yt, bt, xt, St, Ct, wt, Tt, Et, Dt = e(( () => {
    H = t(n()),
    E(),
    I(),
    U = r(),
    Ze = [`15m`, `30m`, `1h`, `2h`, `3h`, `6h`, `12h`, `24h`, `2d`],
    Qe = new Set,
    $e = 3,
    et = 30,
    tt = 20,
    nt = `signaldeck-data`,
    rt = {
        "15m": `fifteen_minutes_followers_change_abs`,
        "30m": `thirty_minutes_followers_change_abs`,
        "1h": `one_hour_followers_change_abs`,
        "2h": `two_hours_followers_change_abs`,
        "3h": `three_hours_followers_change_abs`,
        "6h": `six_hours_followers_change_abs`,
        "12h": `twelve_hours_followers_change_abs`,
        "24h": `one_day_followers_changse_abs`,
        "2d": `two_days_followers_change_abs`
    },
    it = `₀₁₂₃₄₅₆₇₈₉`,
    W = e => String(e).split(``).map(e => it[+e]).join(``),
    at = {
        accounts: [{
            username: `heliusprivacy`,
            first_name: `The Solana Privacy Protocol`,
            avatar_image_url: `https://pbs.twimg.com/profile_images/2059386767963508736/c-LbZw19_normal.jpg`,
            followers_cnt: 833,
            notable_kols_cnt: 40,
            created_timestamp: new Date(Date.now() - 5 * 36e5).toISOString(),
            followers_types_cnt: JSON.stringify({
                all: 40,
                Degen: 23,
                VC: 5,
                CORPORATE: 12
            }),
            fifteen_minutes_followers_change_abs: 0,
            thirty_minutes_followers_change_abs: 2,
            one_hour_followers_change_abs: 4,
            two_hours_followers_change_abs: 9,
            three_hours_followers_change_abs: 14,
            six_hours_followers_change_abs: 22,
            twelve_hours_followers_change_abs: 31,
            one_day_followers_changse_abs: 39,
            two_days_followers_change_abs: 41,
            display_launch: !0,
            launch_link: `https://t.me/leakmewins/63`,
            launch_value: 539.7,
            notes: `Privacy narrative — watch for mainnet date.`
        }, {
            username: `wolfgangkasper`,
            first_name: `Wolf Capital`,
            avatar_image_url: `https://pbs.twimg.com/profile_images/2059405312331829249/6jpjLCpM_normal.jpg`,
            followers_cnt: 11e3,
            notable_kols_cnt: 19,
            created_timestamp: new Date(Date.now() - 13 * 36e5).toISOString(),
            followers_types_cnt: JSON.stringify({
                all: 19,
                Degen: 8,
                VC: 5,
                CORPORATE: 6
            }),
            fifteen_minutes_followers_change_abs: 1,
            thirty_minutes_followers_change_abs: 3,
            one_hour_followers_change_abs: 6,
            two_hours_followers_change_abs: 10,
            three_hours_followers_change_abs: 13,
            six_hours_followers_change_abs: 16,
            twelve_hours_followers_change_abs: 19,
            one_day_followers_changse_abs: 19,
            two_days_followers_change_abs: 19,
            notes: ``
        }, {
            username: `regardingsemi`,
            first_name: `Regarding Semi`,
            avatar_image_url: `https://pbs.twimg.com/profile_images/2057066068372254720/i70YDQ4L_normal.jpg`,
            followers_cnt: 9e3,
            notable_kols_cnt: 32,
            created_timestamp: new Date(Date.now() - 8 * 864e5).toISOString(),
            followers_types_cnt: JSON.stringify({
                all: 32,
                Degen: 20,
                VC: 4,
                CORPORATE: 8
            }),
            fifteen_minutes_followers_change_abs: 0,
            thirty_minutes_followers_change_abs: 1,
            one_hour_followers_change_abs: 3,
            two_hours_followers_change_abs: 7,
            three_hours_followers_change_abs: 11,
            six_hours_followers_change_abs: 18,
            twelve_hours_followers_change_abs: 25,
            one_day_followers_changse_abs: 30,
            two_days_followers_change_abs: 31,
            notes: ``
        }],
        notable_kols: {
            heliusprivacy: {
                username: [`magellan`, `ceteris`, `eddylazzarin`],
                first_name: [`Magellan`, `ceteris`, `Eddy Lazzarin`],
                description: [`Solana nCMO`, `Delphi Digital, Head of Research`, `a16z crypto CTO`],
                avatar_image_url: [null, null, null],
                influencer_type: [`Degen`, `VC`, `VC`]
            },
            wolfgangkasper: {
                username: [`onepetersmith`, `jordan`, `sterling`],
                first_name: [`Peter Smith`, `Jordan`, `sterling`],
                description: [`Blockchain.com CEO`, `Aave Co-Founder`, `Blockchain Capital`],
                avatar_image_url: [null, null, null],
                influencer_type: [`CORPORATE`, `VC`, `VC`]
            },
            regardingsemi: {
                username: [`emiliemc`, `blknoiz06`],
                first_name: [`Emilie Choi`, `Ansem`],
                description: [`Coinbase President`, `Crypto KOL`],
                avatar_image_url: [null, null],
                influencer_type: [`CORPORATE`, `Degen`]
            }
        },
        state: {
            page: 1,
            num_pages: 1,
            total_count: 3,
            per_page: 20,
            timeframe: `24h`,
            max_followers: ``,
            hide_personal: !1,
            max_age: ``,
            hide_opened: !1,
            hide_marked: !1,
            hide_non_crypto: !1,
            support_link: null,
            twitter_link:null,
            tg_link: null,
            pass_newsletter_survey: !1,
            newsletter_endpoint: `/newsletter/subscribe/`,
            wtch_update_endpoint: `/signaldeck/watchlist/`,
            wtch_endpoint: `/signaldeck/watchlist-page/`,
            wtch_notify_endpoint: `/signaldeck/notify/`,
            wtch_future: 0,
            wtch_past: 0
        },
        page_name: `main`,
        user: null
    },
    G = [`Jan`, `Feb`, `Mar`, `Apr`, `May`, `Jun`, `Jul`, `Aug`, `Sep`, `Oct`, `Nov`, `Dec`],
    ot = [`Mon`, `Tue`, `Wed`, `Thu`, `Fri`, `Sat`, `Sun`],
    K = e => {
        let t = new Date(e);
        return t.setHours(0, 0, 0, 0),
        t
    }
    ,
    st = `data:image/svg+xml,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2048%2048'%3E%3Crect%20width%3D'48'%20height%3D'48'%20rx%3D'11'%20fill%3D'%230f1413'%2F%3E%3Cdefs%3E%3ClinearGradient%20id%3D'fg'%20x1%3D'0'%20y1%3D'0'%20x2%3D'1'%20y2%3D'1'%3E%3Cstop%20offset%3D'0'%20stop-color%3D'%23d6ff6b'%2F%3E%3Cstop%20offset%3D'1'%20stop-color%3D'%238fd119'%2F%3E%3C%2FlinearGradient%3E%3Cmask%20id%3D'fm'%3E%3Crect%20width%3D'48'%20height%3D'48'%20fill%3D'black'%2F%3E%3Cpath%20d%3D'M24%209%20C24%209%2013%2024%2013%2032%20a11%2011%200%200%200%2022%200%20C35%2024%2024%209%2024%209%20Z'%20fill%3D'white'%2F%3E%3Ctext%20x%3D'24'%20y%3D'37'%20text-anchor%3D'middle'%20font-family%3D'Arial%2Csans-serif'%20font-weight%3D'800'%20font-size%3D'17'%20fill%3D'black'%3E%CE%B1%3C%2Ftext%3E%3C%2Fmask%3E%3C%2Fdefs%3E%3Crect%20width%3D'48'%20height%3D'44'%20fill%3D'url(%23fg)'%20mask%3D'url(%23fm)'%2F%3E%3C%2Fsvg%3E`,
    ct = e => (0,
    U.jsx)(`svg`, {
        viewBox: `0 0 24 24`,
        width: `18`,
        height: `18`,
        ...e,
        children: (0,
        U.jsx)(`path`, {
            d: `M6 6l12 12M18 6L6 18`,
            stroke: `currentColor`,
            strokeWidth: `2`,
            strokeLinecap: `round`,
            fill: `none`
        })
    }),
    lt = e => (0,
    U.jsx)(`svg`, {
        viewBox: `0 0 24 24`,
        width: `20`,
        height: `20`,
        ...e,
        children: (0,
        U.jsx)(`path`, {
            d: `M15 5l-7 7 7 7`,
            stroke: `currentColor`,
            strokeWidth: `2`,
            strokeLinecap: `round`,
            strokeLinejoin: `round`,
            fill: `none`
        })
    }),
    ut = ({off: e}) => (0,
    U.jsxs)(`svg`, {
        viewBox: `0 0 24 24`,
        width: `18`,
        height: `18`,
        children: [(0,
        U.jsx)(`path`, {
            d: `M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z`,
            stroke: `currentColor`,
            strokeWidth: `1.6`,
            fill: `none`
        }), (0,
        U.jsx)(`circle`, {
            cx: `12`,
            cy: `12`,
            r: `2.6`,
            stroke: `currentColor`,
            strokeWidth: `1.6`,
            fill: `none`
        }), e && (0,
        U.jsx)(`path`, {
            d: `M4 4l16 16`,
            stroke: `currentColor`,
            strokeWidth: `1.6`,
            strokeLinecap: `round`
        })]
    }),
    q = e => (0,
    U.jsx)(`svg`, {
        viewBox: `0 0 24 24`,
        width: `13`,
        height: `13`,
        ...e,
        children: (0,
        U.jsx)(`path`, {
            d: `M5 12.5l4.5 4.5L19 7`,
            stroke: `currentColor`,
            strokeWidth: `2.6`,
            strokeLinecap: `round`,
            strokeLinejoin: `round`,
            fill: `none`
        })
    }),
    J = e => (0,
    U.jsxs)(`svg`, {
        viewBox: `0 0 24 24`,
        width: `13`,
        height: `13`,
        ...e,
        children: [(0,
        U.jsx)(`rect`, {
            x: `5`,
            y: `11`,
            width: `14`,
            height: `9`,
            rx: `2`,
            stroke: `currentColor`,
            strokeWidth: `1.7`,
            fill: `none`
        }), (0,
        U.jsx)(`path`, {
            d: `M8 11V8a4 4 0 0 1 8 0v3`,
            stroke: `currentColor`,
            strokeWidth: `1.7`,
            fill: `none`
        })]
    }),
    dt = e => (0,
    U.jsx)(`svg`, {
        viewBox: `0 0 24 24`,
        width: `15`,
        height: `15`,
        ...e,
        children: (0,
        U.jsx)(`path`, {
            d: `M3 7l4 4 5-6 5 6 4-4-2 12H5L3 7Z`,
            fill: `currentColor`
        })
    }),
    Y = () => (0,
    U.jsxs)(`svg`, {
        viewBox: `0 0 24 24`,
        width: `17`,
        height: `17`,
        children: [(0,
        U.jsx)(`path`, {
            fill: `#4285F4`,
            d: `M22 12.2c0-.7-.06-1.4-.18-2.05H12v3.9h5.6a4.8 4.8 0 0 1-2.07 3.15v2.6h3.35C20.83 18 22 15.4 22 12.2Z`
        }), (0,
        U.jsx)(`path`, {
            fill: `#34A853`,
            d: `M12 22c2.7 0 4.97-.9 6.63-2.42l-3.35-2.6c-.93.62-2.12.99-3.28.99-2.52 0-4.66-1.7-5.42-4H3.12v2.6A10 10 0 0 0 12 22Z`
        }), (0,
        U.jsx)(`path`, {
            fill: `#FBBC05`,
            d: `M6.58 13.97a6 6 0 0 1 0-3.94V7.43H3.12a10 10 0 0 0 0 9.14l3.46-2.6Z`
        }), (0,
        U.jsx)(`path`, {
            fill: `#EA4335`,
            d: `M12 6.04c1.47 0 2.78.5 3.82 1.5l2.85-2.85A10 10 0 0 0 3.12 7.43l3.46 2.6C7.34 7.74 9.48 6.04 12 6.04Z`
        })]
    }),
    ft = () => (0,
    U.jsx)(`svg`, {
        viewBox: `0 0 24 24`,
        width: `15`,
        height: `15`,
        fill: `currentColor`,
        children: (0,
        U.jsx)(`path`, {
            d: `M18.9 2H22l-7.5 8.6L23.5 22h-7l-5.5-7.2L4.7 22H1.5l8.1-9.3L1 2h7.2l5 6.6L18.9 2Zm-2.4 18h1.9L7.6 4H5.6l10.9 16Z`
        })
    }),
    pt = () => (0,
    U.jsx)(`svg`, {
        viewBox: `0 0 24 24`,
        width: `16`,
        height: `16`,
        fill: `currentColor`,
        children: (0,
        U.jsx)(`path`, {
            d: `M21.9 4.3 2.9 11.6c-1.3.5-1.3 1.2-.2 1.5l4.8 1.5L9.4 21c.2.5.4.7.8.7.4 0 .6-.2.9-.5l2.3-2.2 4.8 3.6c.9.5 1.5.2 1.7-.8L22.9 5.6c.3-1.2-.5-1.7-1-1.3ZM18 7 9.5 14.6l-.3 3.2L8 13.9 18 7Z`
        })
    }),
    X = ({label: e, href: t}) => t ? (0,
    U.jsxs)(`a`, {
        className: `gbtn`,
        href: t,
        children: [(0,
        U.jsx)(Y, {}), ` `, e]
    }) : (0,
    U.jsxs)(`button`, {
        className: `gbtn`,
        type: `button`,
        disabled: !0,
        title: `Google sign-in unavailable`,
        children: [(0,
        U.jsx)(Y, {}), ` `, e]
    }),
    mt = [`Unlimited account opens`, `Unlimited watchlist`, `New Launches monitor`, `Real-time alerts via Telegram`, `Premium chatroom for trade ideas`],
    ht = `/signaldeck/page/`,
    gt = `/signaldeck/note/`,
    _t = `/auth/login/`,
    vt = `/auth/password-reset/`,
    yt = `/auth/register/`,
    bt = `/billing/invoice/`,
    xt = `/signaldeck/expand/`,
    St = `/newsletter/subscribe/`,
    Ct = `/tz_detect/set/`,
    wt = `/signaldeck/watchlist/`,
    Tt = `/signaldeck/notify/`,
    Et = `
  @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,600;12..96,700;12..96,800&family=Hanken+Grotesk:wght@400;500;600&family=JetBrains+Mono:wght@500;700&display=swap');
  html{scrollbar-gutter:stable;scrollbar-width:thin;scrollbar-color:#2a332f transparent}
  html,body{margin:0;padding:0;background:#0a0c0b}
  ::-webkit-scrollbar{width:12px;height:12px}
  ::-webkit-scrollbar-track{background:transparent}
  ::-webkit-scrollbar-thumb{background:#2a332f;border-radius:10px;border:3px solid #0a0c0b;background-clip:padding-box}
  ::-webkit-scrollbar-thumb:hover{background:#3c4a43;background-clip:padding-box}
  #root{min-height:100vh}
  .wrap{--bg:#0a0c0b;--bg2:#101413;--line:#1a201e;--line2:#283230;--ink:#e9efec;--mut:#8b9893;--mut2:#5b6763;
    --acid:#b9f73e;--acid2:#7fae27;--card:#0d1110;
    font-family:'Hanken Grotesk',sans-serif;
    background:radial-gradient(900px 460px at 10% -50px,rgba(185,247,62,.06),transparent 60%),
      radial-gradient(760px 520px at 100% 0,rgba(56,189,248,.05),transparent 55%),var(--bg);
    color:var(--ink);min-height:100vh;padding:24px clamp(12px,3.4vw,40px) 56px;box-sizing:border-box;font-size:14px}
  .wrap *{box-sizing:border-box}
  .shell{max-width:1480px;margin:0 auto;width:100%;display:flex;flex-direction:column;min-height:calc(100vh - 80px)}
  .footspace{flex:1 1 auto}
  .wrap a{color:inherit;text-decoration:none}

  .top{display:flex;justify-content:space-between;align-items:center;gap:16px;flex-wrap:wrap;
    padding-bottom:16px;border-bottom:1px solid var(--line);margin-bottom:16px}
  .brand{display:flex;align-items:center;gap:13px}
  .mark{display:inline-flex;flex:none}
  .mark-svg{filter:drop-shadow(0 0 11px rgba(185,247,62,.5))}
  .drip{transform-box:fill-box;transform-origin:center;animation:leak 2.9s cubic-bezier(.55,0,.85,.4) infinite}
  @keyframes leak{
    0%,55%{transform:translateY(-1px) scale(.7);opacity:0}
    62%{opacity:1;transform:translateY(0) scale(1)}
    92%{transform:translateY(8px) scale(1);opacity:1}
    100%{transform:translateY(11px) scale(.8);opacity:0}
  }
  @media(prefers-reduced-motion:reduce){.drip{animation:none;opacity:.9}}
  .bn{font-family:'Bricolage Grotesque';font-weight:800;font-size:23px;letter-spacing:-.03em;line-height:1}
  .bn .dot{color:var(--mut2);font-weight:600;font-size:15px;letter-spacing:0;margin-left:1px;vertical-align:baseline}
  .bs{color:var(--mut);font-size:12.5px;margin-top:4px}
  .bs b{color:var(--acid2);font-weight:600}
  .bs-lead{font-family:'JetBrains Mono',monospace;font-weight:700;font-size:10.5px;letter-spacing:.13em;text-transform:uppercase;color:var(--acid2)}
  .bs-sep{color:var(--mut2);margin:0 8px}
  .bs-mobile{display:none}   /* shown only on phones, in place of "alpha, leaked" */
  .search{display:flex;align-items:center;gap:8px;background:var(--bg2);border:1px solid var(--line2);
    border-radius:10px;padding:8px 13px;min-width:210px}
  .search span{color:var(--mut2)}
  .search input{background:none;border:none;outline:none;color:var(--ink);font-family:inherit;font-size:13.5px;width:100%}
  .search input::placeholder{color:var(--mut2)}

  .controls{display:flex;justify-content:space-between;gap:14px;flex-wrap:wrap;align-items:center;
    position:sticky;top:0;z-index:60;margin-bottom:14px;
    background:transparent;border-bottom:1px solid transparent;transition:background .2s,border-color .2s}
  .controls.stuck{background:var(--bg);border-bottom-color:var(--line)}
  .windows{display:flex;gap:4px;background:var(--bg2);padding:4px;border-radius:11px;border:1px solid var(--line);flex-wrap:wrap}
  .chip{font-family:'JetBrains Mono',monospace;font-size:11.5px;color:var(--mut);background:none;border:none;padding:5px 9px;border-radius:7px;cursor:pointer;transition:.15s}
  .chip:hover{color:var(--ink)}
  .chip.on{background:var(--acid);color:#0a0c0b;font-weight:700}
  .legend{display:flex;align-items:center;gap:16px;color:var(--mut);font-size:12px;flex-wrap:wrap}
  .legend span{display:flex;align-items:center;gap:6px}
  .legend i{width:9px;height:9px;border-radius:3px;display:inline-block}
  .legend-note{color:var(--mut2);font-family:'JetBrains Mono',monospace;font-size:11px;
    padding-left:14px;margin-left:2px;border-left:1px solid var(--line2)}
  .ln-n{display:inline-block;min-width:2ch;text-align:right}
  .ln-w{display:inline-block;min-width:3ch;text-align:center}

  .pager{display:flex;align-items:center;gap:12px;margin-top:18px;flex-wrap:wrap}
  .pager-info{color:var(--mut2);font-family:'JetBrains Mono',monospace;font-size:11.5px}
  .pager-btns{display:flex;align-items:center;gap:5px;margin-left:auto;flex-wrap:wrap}
  .pg,.pg-nav{font-family:inherit;font-size:13px;color:var(--mut);background:var(--bg2);border:1px solid var(--line2);
    min-width:34px;height:34px;padding:0 11px;border-radius:9px;cursor:pointer;transition:.15s}
  .pg:hover,.pg-nav:hover:not(:disabled){color:var(--ink);border-color:var(--mut2)}
  .pg.on{color:#0a0c0b;background:var(--acid);border-color:var(--acid);font-weight:700}
  .pg-nav:disabled{opacity:.4;cursor:not-allowed}
  .pg-gap{color:var(--mut2);padding:0 3px;font-family:'JetBrains Mono',monospace}

  .newsbox{position:fixed;right:18px;z-index:40;width:300px;max-width:calc(100vw - 36px);
    background:var(--card);border:1px solid var(--line2);border-radius:14px;padding:15px 16px 16px;
    box-shadow:0 16px 44px rgba(0,0,0,.5)}
  .newsbox-x{position:absolute;top:8px;right:10px;background:none;border:none;color:var(--mut2);cursor:pointer;
    font-size:16px;line-height:1;padding:2px 5px;border-radius:6px}
  .newsbox-x:hover{color:var(--ink);background:var(--bg2)}
  .newsbox-head{display:flex;align-items:center;gap:9px}
  .newsbox-ic{width:30px;height:30px;border-radius:9px;flex:none;display:flex;align-items:center;justify-content:center;
    background:rgba(185,247,62,.1);border:1px solid rgba(185,247,62,.28);color:var(--acid)}
  .newsbox-title{font-family:'Bricolage Grotesque';font-weight:700;font-size:14px;letter-spacing:-.01em}
  .newsbox-sub{color:var(--mut);font-size:12px;margin:9px 0 11px;line-height:1.4}
  .newsbox-sub em{color:var(--acid2);font-style:italic}
  .newsbox-form{display:flex;gap:7px}
  .newsbox-form input{flex:1;min-width:0;background:var(--bg2);border:1px solid var(--line2);border-radius:9px;
    padding:9px 11px;color:var(--ink);font-family:inherit;font-size:13px;outline:none}
  .newsbox-form input:focus{border-color:var(--acid2);box-shadow:0 0 0 3px rgba(185,247,62,.12)}
  .newsbox-form input::placeholder{color:var(--mut2)}
  .newsbox-form button{font-family:inherit;font-weight:700;font-size:13px;color:#0a0c0b;background:var(--acid);
    border:none;border-radius:9px;padding:9px 15px;cursor:pointer;flex:none}
  .newsbox-form button:hover:not(:disabled){filter:brightness(1.05)}
  .newsbox-form button:disabled{opacity:.45;cursor:not-allowed}
  .newsbox-form--err input{border-color:#ff5d5d}
  .newsbox-form--err input:focus{border-color:#ff5d5d;box-shadow:0 0 0 3px rgba(255,93,93,.14)}
  .newsbox-err{color:#ff6b6b;font-size:11.5px;margin:7px 0 0}
  .newsbox-done{color:var(--acid);font-size:12.5px;font-weight:600;margin:10px 0 0}
  @media(max-width:520px){.newsbox{left:14px;right:14px;width:auto}}

  .sitefoot{display:flex;align-items:center;justify-content:space-between;gap:16px;flex-wrap:wrap;
    margin-top:30px;padding-top:18px;border-top:1px solid var(--line)}
  .sf-left{display:flex;align-items:baseline;gap:11px;flex-wrap:wrap}
  .sf-brand{font-family:'Bricolage Grotesque';font-weight:800;font-size:15px;color:var(--ink)}
  .sf-brand span{color:var(--mut2);font-weight:600;font-size:12px}
  .sf-note{color:var(--mut2);font-size:11.5px}
  .sf-links{display:flex;align-items:center;gap:8px;flex-wrap:wrap}
  .sitefoot .sf-link{display:inline-flex;align-items:center;gap:6px;font-size:13px;color:var(--mut);
    background:var(--bg2);border:1px solid var(--line2);padding:7px 12px;border-radius:9px;text-decoration:none;transition:.15s}
  .sitefoot .sf-link:hover{color:var(--ink);border-color:var(--mut2)}

  /* shared grid template for header + rows */
  .lhead,.row{display:grid;align-items:center;gap:14px;
    grid-template-columns:30px minmax(200px,290px) minmax(180px,1fr) 128px 48px 112px 16px}
  .lhead{padding:0 14px 8px;color:var(--mut2);font-size:10.5px;text-transform:uppercase;letter-spacing:.1em}
  .c-velo{text-align:right}

  .ctrl-left{display:flex;align-items:center;gap:12px;flex-wrap:wrap}
  .watchtab{display:inline-flex;align-items:center;gap:7px;font-family:inherit;font-size:12.5px;font-weight:600;
    color:var(--mut);background:var(--bg2);border:1px solid var(--line);border-radius:11px;padding:8px 14px;cursor:pointer;transition:.12s}
  .watchtab:hover{color:var(--ink);border-color:var(--line2)}
  .watchtab.on{color:var(--acid);border-color:rgba(185,247,62,.4);background:rgba(185,247,62,.08)}

  .filterwrap{position:relative;display:inline-flex}
  .filterbtn{display:inline-flex;align-items:center;gap:7px;font-family:inherit;font-size:12.5px;font-weight:600;
    color:var(--mut);background:var(--bg2);border:1px solid var(--line);border-radius:11px;padding:8px 13px;cursor:pointer;transition:.12s}
  .filterbtn:hover{color:var(--ink);border-color:var(--line2)}
  .filterbtn.open,.filterbtn.active{color:var(--acid);border-color:rgba(185,247,62,.4);background:rgba(185,247,62,.08)}
  .filterbtn svg{flex:none}
  .filt-count{display:inline-flex;align-items:center;justify-content:center;min-width:16px;height:16px;padding:0 4px;
    font-family:'JetBrains Mono',monospace;font-size:10px;font-weight:700;line-height:1;border-radius:8px;
    color:#0a0c0b;background:var(--acid)}
  .filt-pop{position:absolute;top:calc(100% + 9px);right:0;z-index:120;width:264px;
    background:var(--card);border:1px solid var(--line2);border-radius:14px;padding:14px;
    box-shadow:0 18px 50px rgba(0,0,0,.55);animation:filt-in .14s ease}
  @keyframes filt-in{from{opacity:0;transform:translateY(-6px)}to{opacity:1;transform:none}}
  .filt-pop::before{content:"";position:absolute;top:-6px;right:22px;width:11px;height:11px;rotate:45deg;
    background:var(--card);border-left:1px solid var(--line2);border-top:1px solid var(--line2)}
  .filt-head{display:flex;align-items:center;justify-content:space-between;margin-bottom:13px}
  .filt-head>span{font-family:'Bricolage Grotesque';font-weight:700;font-size:14px;letter-spacing:-.01em;color:var(--ink)}
  .filt-reset{background:none;border:none;color:var(--mut);font-family:inherit;font-size:11.5px;font-weight:600;cursor:pointer;padding:2px 4px}
  .filt-reset:hover{color:var(--acid)}
  .filt-block{padding:0}
  .filt-block + .filt-block{margin-top:14px;padding-top:14px;border-top:1px solid var(--line)}
  .filt-lbl{display:block;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.05em;color:var(--mut);margin-bottom:9px}
  .filt-input{width:100%;box-sizing:border-box;background:var(--bg2);border:1px solid var(--line2);border-radius:9px;
    color:var(--ink);font-family:'JetBrains Mono',monospace;font-size:13px;padding:8px 10px;outline:none;transition:.12s}
  .filt-input::placeholder{color:var(--mut2)}
  .filt-input:focus{border-color:rgba(185,247,62,.5);box-shadow:0 0 0 3px rgba(185,247,62,.12)}
  .filt-presets{display:flex;gap:6px;margin-top:8px}
  .fp{flex:1;background:var(--bg2);border:1px solid var(--line);border-radius:8px;color:var(--mut);
    font-family:'JetBrains Mono',monospace;font-size:11.5px;font-weight:700;padding:6px 0;cursor:pointer;transition:.12s}
  .fp:hover{color:var(--ink);border-color:var(--line2)}
  .fp.on{color:var(--acid);border-color:rgba(185,247,62,.45);background:rgba(185,247,62,.10)}
  .filt-switchrow{display:flex;align-items:center;justify-content:space-between;gap:12px}
  .filt-switchrow .filt-lbl{margin-bottom:0}
  .switch{flex:none;width:40px;height:23px;border-radius:999px;border:1px solid var(--line2);background:var(--bg2);
    cursor:pointer;padding:0;position:relative;transition:.16s}
  .switch .knob{position:absolute;top:2px;left:2px;width:17px;height:17px;border-radius:50%;background:var(--mut);transition:.16s}
  .switch.on{background:rgba(185,247,62,.22);border-color:rgba(185,247,62,.55)}
  .switch.on .knob{left:19px;background:var(--acid);box-shadow:0 0 10px rgba(185,247,62,.6)}
  .wstat{display:inline-flex;align-items:center;gap:4px}
  .ws{font-family:'JetBrains Mono',monospace;font-size:10.5px;font-weight:700;line-height:1;
    min-width:17px;height:17px;display:inline-flex;align-items:center;justify-content:center;padding:0 4px;border-radius:5px}
  .ws-g{color:#5fd98a;background:rgba(95,217,138,.16)}
  .ws-r{color:#f3697a;background:rgba(243,105,122,.16)}

  /* mobile-only search toggle + inline search bar (hidden on desktop — header has its own search) */
  .msearch-tog{display:none;flex:none;align-items:center;justify-content:center;width:33px;height:31px;
    background:var(--bg2);border:1px solid var(--line);border-radius:9px;color:var(--mut);cursor:pointer;transition:.12s}
  .msearch-tog:hover{color:var(--ink);border-color:var(--line2)}
  .msearch{display:none;flex:1 1 auto;min-width:0;align-items:center;gap:7px;
    background:var(--bg2);border:1px solid var(--line2);border-radius:11px;padding:6px 11px}
  .msearch>span{color:var(--mut);font-size:15px;line-height:1}
  .msearch input{flex:1;min-width:0;background:none;border:none;outline:none;color:var(--ink);font-family:inherit;font-size:13px}
  .msearch input::placeholder{color:var(--mut2)}

  /* ── mobile sticky top bar + burger menu (hidden on desktop) ──────────── */
  .mtop{display:none;position:sticky;top:0;z-index:30;align-items:center;gap:10px;
    background:var(--bg);border-bottom:1px solid var(--line);
    margin:0 calc(-1 * clamp(12px,3.4vw,40px)) 14px;padding:10px clamp(12px,3.4vw,40px)}
  .mtop-logo{flex:none;display:inline-flex}
  .mtop-logo .mark-svg{width:28px;height:35px}
  .mtop-windows{flex:1 1 auto;min-width:0;display:flex;gap:2px;
    background:var(--bg2);border:1px solid var(--line);border-radius:11px;padding:3px;overflow:hidden}
  .mtop-windows .chip{flex:1 1 0;min-width:0;padding:5px 2px;font-size:10.5px;text-align:center;white-space:nowrap}
  .burger{flex:none;display:inline-flex;align-items:center;justify-content:center;width:36px;height:34px;
    background:var(--bg2);border:1px solid var(--line);border-radius:9px;color:var(--ink);cursor:pointer;transition:.12s}
  .burger:hover{border-color:var(--line2)}
  .msubhead{display:none}   /* mobile-only one-liner under the sticky bar; scrolls away */

  .menu-scrim{position:fixed;inset:0;z-index:60;background:rgba(0,0,0,.55);
    display:flex;justify-content:flex-end;animation:mfade .15s ease}
  .menu-panel{width:min(82vw,320px);height:100%;background:var(--bg2);border-left:1px solid var(--line2);
    display:flex;flex-direction:column;padding:16px 16px calc(16px + env(safe-area-inset-bottom));
    box-shadow:-18px 0 50px rgba(0,0,0,.5);animation:mslide .2s cubic-bezier(.2,.7,.3,1)}
  @keyframes mfade{from{opacity:0}to{opacity:1}}
  @keyframes mslide{from{transform:translateX(28px);opacity:.4}to{transform:none;opacity:1}}
  .menu-top{display:flex;align-items:center;justify-content:space-between;padding-bottom:14px;
    border-bottom:1px solid var(--line);margin-bottom:14px}
  .menu-panel{background:
    radial-gradient(420px 200px at 0 0,rgba(185,247,62,.07),transparent 60%),var(--bg2)}
  .menu-brand{display:inline-flex;align-items:center;gap:9px}
  .menu-brand .mark-svg{width:26px;height:33px}
  .menu-brand .bn{font-family:'Bricolage Grotesque';font-weight:800;font-size:20px;letter-spacing:-.03em}
  .menu-brand .bn .dot{color:var(--mut2);font-weight:600;font-size:13px;margin-left:1px}
  .menu-x{background:none;border:none;color:var(--mut);cursor:pointer;padding:4px;display:inline-flex}
  .menu-x:hover{color:var(--ink)}

  .menu-search{display:flex;align-items:center;gap:9px;margin-bottom:14px;
    background:var(--bg);border:1px solid var(--line2);border-radius:11px;padding:10px 12px}
  .menu-search:focus-within{border-color:var(--acid2)}
  .menu-search-ic{color:var(--mut);font-size:17px;line-height:1}
  .menu-search input{flex:1;min-width:0;background:none;border:none;outline:none;color:var(--ink);
    font-family:inherit;font-size:14px}
  .menu-search input::placeholder{color:var(--mut2)}
  .menu-search-x{background:none;border:none;color:var(--mut2);cursor:pointer;display:inline-flex;padding:2px}
  .menu-search-x:hover{color:var(--ink)}

  .menu-nav{display:flex;flex-direction:column;gap:3px;flex:1 1 auto}
  .menu-item{display:flex;align-items:center;gap:12px;width:100%;text-align:left;
    font-family:inherit;font-size:15px;font-weight:600;color:var(--ink);
    background:none;border:none;border-radius:11px;padding:9px;cursor:pointer;transition:.12s}
  .menu-item:hover{background:var(--card)}
  .menu-ic{width:34px;height:34px;border-radius:9px;display:inline-flex;align-items:center;justify-content:center;flex:none}
  .menu-ic.ic-star{background:rgba(185,247,62,.14);color:var(--acid)}
  .menu-ic.ic-crown{background:rgba(245,165,36,.16);color:#f5a524}
  .menu-ic.ic-tg{background:rgba(56,189,248,.15);color:#38bdf8}
  .menu-item.on{color:var(--acid)}
  .menu-item.is-pro{cursor:default}
  .menu-tag{margin-left:auto;font-family:'JetBrains Mono',monospace;font-size:9.5px;font-weight:700;letter-spacing:.06em;
    color:#f5a524;background:rgba(245,165,36,.14);border:1px solid rgba(245,165,36,.3);border-radius:5px;padding:2px 6px}
  .menu-badge{margin-left:auto;font-family:'JetBrains Mono',monospace;font-size:11px;font-weight:700;
    color:#0a0c0b;background:var(--acid);border-radius:6px;padding:1px 7px}
  .menu-foot{display:flex;flex-direction:column;gap:9px;padding-top:12px;border-top:1px solid var(--line)}
  .menu-btn{width:100%;font-family:inherit;font-size:15px;font-weight:700;border-radius:11px;
    padding:13px;cursor:pointer;transition:.12s;border:1px solid transparent}
  .menu-btn.primary{background:var(--acid);color:#0a0c0b}
  .menu-btn.primary:hover{filter:brightness(1.06)}
  .menu-btn.ghost{background:none;border-color:var(--line2);color:var(--ink)}
  .menu-btn.ghost:hover{border-color:var(--mut2)}

  .story-actions{display:flex;align-items:center;gap:14px;flex:none}
  .watchbtn{display:inline-flex;align-items:center;gap:6px;font-family:inherit;font-size:12.5px;font-weight:600;
    color:var(--mut);background:var(--bg2);border:1px solid var(--line2);border-radius:9px;padding:6px 12px;cursor:pointer;transition:.12s}
  .watchbtn:hover{color:var(--ink);border-color:var(--mut2)}
  .watchbtn svg{fill:none;stroke:currentColor;stroke-width:1.7;stroke-linejoin:round}
  .watchbtn.on{color:var(--acid);border-color:rgba(185,247,62,.4);background:rgba(185,247,62,.08)}
  .markset{display:inline-flex;align-items:center;gap:6px;padding-right:13px;margin-right:1px;border-right:1px solid var(--line2)}
  .markbtn{display:inline-flex;align-items:center;gap:6px;font-family:inherit;font-size:12.5px;font-weight:600;color:var(--mut);background:var(--bg2);border:1px solid var(--line2);border-radius:9px;padding:6px 11px;cursor:pointer;transition:.12s}
  .markbtn svg{width:14px;height:14px;flex:none}
  .markbtn:hover{color:var(--ink);border-color:var(--mut2)}
  .markbtn.skip.on{color:#d4ddd8;border-color:var(--mut2);background:rgba(139,152,147,.16)}
  .markbtn.rug.on{color:#f5616e;border-color:rgba(245,97,110,.5);background:rgba(245,97,110,.12)}
  .markbtn.rug.on .flag{fill:#f5616e}
  .watchbtn.on svg{fill:var(--acid);stroke:var(--acid)}

  .empty{display:flex;flex-direction:column;align-items:center;text-align:center;gap:6px;
    padding:54px 20px;border:1px dashed var(--line2);border-radius:16px;background:var(--card)}
  .empty-ic{width:54px;height:54px;border-radius:14px;display:flex;align-items:center;justify-content:center;
    background:rgba(185,247,62,.08);border:1px solid rgba(185,247,62,.24);color:var(--acid);margin-bottom:6px}
  .empty-h{margin:0;font-family:'Bricolage Grotesque';font-weight:700;font-size:18px;color:var(--ink)}
  .empty-p{margin:0;font-size:13.5px;color:var(--mut);max-width:42ch;line-height:1.5}
  .empty-cta{margin-top:12px;font-family:inherit;font-size:13.5px;font-weight:700;color:#0a0c0b;background:var(--acid);
    border:none;border-radius:11px;padding:10px 18px;cursor:pointer}
  .empty-cta:hover{filter:brightness(1.06)}

  .list{display:flex;flex-direction:column;gap:4px}
  .item{background:var(--card);border:1px solid var(--line);border-radius:11px;overflow:hidden;
    opacity:0;transform:translateY(8px);transition:opacity .4s,transform .4s,border-color .15s,background .15s}
  .item.in{opacity:1;transform:none}
  .item:hover{border-color:var(--line2);background:#0f1413}
  .item.open{border-color:var(--acid2);background:#0f1413}
  .row{width:100%;text-align:left;background:none;border:none;cursor:pointer;color:inherit;font-family:inherit;
    padding:9px 14px;min-height:52px}
  .row:focus{outline:none}
  .row:focus-visible{outline:2px solid var(--acid2);outline-offset:-2px;border-radius:11px}
  .item.seen .row{opacity:.5;transition:opacity .15s}
  .item.seen:hover .row{opacity:.82}

  .rank{font-family:'JetBrains Mono',monospace;font-size:12px;color:var(--mut2);font-weight:700;display:inline-flex;align-items:center;gap:6px}
  .seenpip{width:5px;height:5px;border-radius:50%;background:var(--acid);flex:none}
  .acct{display:flex;align-items:center;gap:10px;min-width:0}
  .main-av{border-radius:9px;object-fit:cover;flex:none}
  .main-av--fb{display:flex;align-items:center;justify-content:center;font-family:'Bricolage Grotesque';font-weight:700;font-size:12px;color:#fff}
  .acct-txt{min-width:0}
  .nm{font-family:'Bricolage Grotesque';font-weight:700;font-size:14.5px;letter-spacing:-.01em;
    display:flex;align-items:center;gap:7px;min-width:0;line-height:1.2}
  .nm-txt{overflow:hidden;white-space:nowrap;text-overflow:ellipsis;min-width:0}
  .hl{font-size:11.5px;color:var(--mut);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block}

  .why-line{display:flex;align-items:center;gap:10px;color:#c2cbc6;font-size:13.5px;min-width:0}
  .wtext{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;min-width:0}
  .wtok{display:inline-flex;align-items:center;gap:6px;flex:none;font-family:'JetBrains Mono',monospace;font-size:11px;line-height:1;
    padding-right:11px;border-right:1px solid var(--line2)}
  .wtok .tk{color:var(--ink);font-weight:600;letter-spacing:.02em}
  .wtok .chg{display:inline-flex;align-items:center;justify-content:center;line-height:1;
    padding:3px 7px;border-radius:5px;font-weight:700;font-size:10px}
  .wtok .chg.up{color:var(--acid);background:rgba(185,247,62,.13)}
  .wtok .chg.down{color:#f5616e;background:rgba(245,97,110,.13)}
  .wtok .chg.flat{color:#8b9893;background:rgba(139,152,147,.13)}
  .why-strip{display:inline-flex;align-items:center;gap:9px;flex:none}
  .lc-call{display:inline-flex;align-items:center;gap:7px;flex:none;text-decoration:none;
    font-family:'JetBrains Mono',monospace;font-weight:800;font-size:11px;color:var(--acid);white-space:nowrap;
    transition:opacity .14s}
  .lc-call:hover{opacity:.82}
  .lc-call b{color:var(--acid);font-weight:800}
  .lc-call-ic{display:inline-flex;flex:none;color:var(--acid)}
  .lc-call-ic svg{display:block}
  .lc-call-div{width:1px;height:12px;background:var(--line2);flex:none}
  .lc-call-lbl{color:var(--mut2);font-weight:700;font-size:9.5px;letter-spacing:.08em;text-transform:uppercase;font-family:'Hanken Grotesk',sans-serif}
  .lc-call-arrow{color:var(--acid2);font-weight:800}
  .lc-credit{display:none}
  .why-pending{display:inline-flex;align-items:center;gap:9px;color:var(--mut2);font-style:italic;font-size:13px;
    white-space:nowrap;overflow:hidden;text-overflow:ellipsis;min-width:0}
  .why-unknown{display:inline-flex;align-items:center;gap:9px;color:var(--mut2);font-size:13px;font-style:italic;
    white-space:nowrap;overflow:hidden;text-overflow:ellipsis;min-width:0}
  .why-unknown svg{flex:none;color:var(--mut2)}
  .pdot{width:7px;height:7px;border-radius:50%;background:var(--mut);flex:none;animation:ppulse 1.6s ease-in-out infinite}
  @keyframes ppulse{0%,100%{opacity:.3;transform:scale(.8)}50%{opacity:1;transform:scale(1)}}
  @media (prefers-reduced-motion:reduce){.pdot{animation:none}}
  .pending-tag{display:inline-flex;align-items:center;gap:8px;font-family:'Bricolage Grotesque';font-weight:700;font-size:14px;color:var(--mut)}
  .story-pending{margin:13px 0 0;font-size:13.5px;line-height:1.6;color:var(--mut);max-width:80ch;
    padding:13px 15px;border:1px dashed var(--line2);border-radius:11px;background:var(--bg2)}

  .mixcell{display:flex;flex-direction:column;gap:4px}
  .bar{display:flex;border-radius:5px;overflow:hidden;background:#000;gap:1.5px;width:100%}
  .bar span{height:100%;transition:width .6s ease}
  .inst{font-size:10px;color:var(--mut2);font-family:'JetBrains Mono',monospace;white-space:nowrap}
  .inst b{color:#c2cbc6;font-weight:700}

  .velo{position:relative;display:flex;flex-direction:column;align-items:flex-end;justify-content:center;text-align:right}
  .velo-main{font-family:'JetBrains Mono',monospace;font-weight:700;font-size:17px;color:var(--acid);
    text-shadow:0 0 14px rgba(185,247,62,.25);line-height:1}
  .velo-sub{position:absolute;top:100%;right:0;margin-top:1px;display:flex;flex-direction:column;align-items:flex-end;gap:1px}
  .velo-sub span{font-family:'JetBrains Mono',monospace;font-size:10.5px;color:#aeb6a4;line-height:1.25;white-space:nowrap}
  .velo-sub em{font-style:normal;color:var(--mut2);font-family:'Hanken Grotesk',sans-serif;font-size:9.5px;margin-left:3px;letter-spacing:.03em}
  .velo-u{display:none}   /* "KOLs" unit — shown on mobile where the column header is hidden */

  .stack{display:flex;align-items:center}
  .stack>*{margin-left:-7px;border:2px solid var(--card)}
  .stack>*:first-child{margin-left:0}
  .item:hover .stack>*{border-color:#0f1413}
  .kav{border-radius:7px;display:flex;align-items:center;justify-content:center;font-size:8.5px;font-weight:700;color:#fff;font-family:'Bricolage Grotesque';flex:none;overflow:hidden}
  .more-n{font-size:10px;color:var(--mut);font-family:'JetBrains Mono',monospace;margin-left:4px!important;border:none!important}
  .notify-btn{all:unset;cursor:pointer;display:inline-flex;align-items:center;border-radius:8px;
    padding:3px 7px;margin-left:-7px;transition:background .12s ease}
  .notify-btn:hover{background:var(--bg2)}
  .notify-btn.nd-g{color:#5fd98a}
  .notify-btn.nd-y{color:#e7b748}
  .notify-btn.nd-x{color:var(--mut2)}
  .notify-btn.empty{color:var(--mut2)}
  .notify{display:flex;flex-direction:column;align-items:flex-start;gap:1px;line-height:1.2;font-family:'JetBrains Mono',monospace}
  .nd-date{font-size:12px;font-weight:700;color:currentColor}
  .nd-time{font-size:10.5px;opacity:.62}
  .nd-set{font-size:11px;font-family:'Hanken Grotesk',sans-serif;font-weight:600}
  .ck-shift{padding-left:20px}

  /* date picker */
  .dp-backdrop{position:fixed;inset:0;z-index:200;background:rgba(4,6,5,.6);backdrop-filter:blur(3px);
    display:flex;align-items:center;justify-content:center;animation:fade .14s ease}
  .dp{width:300px;border-radius:18px;padding:16px 16px 14px;cursor:default;font-family:'Hanken Grotesk',sans-serif;
    background:linear-gradient(180deg,#11160f 0%,var(--bg1) 58%);border:1px solid var(--line2);
    box-shadow:0 28px 70px rgba(0,0,0,.6),inset 0 1px 0 rgba(255,255,255,.045);animation:dpIn .16s cubic-bezier(.2,.8,.3,1)}
  .dp-head{display:flex;align-items:center;justify-content:space-between;margin-bottom:12px}
  .dp-title{font-family:'Bricolage Grotesque',sans-serif;font-weight:600;font-size:15px;color:var(--ink);letter-spacing:-.01em}
  .dp-arrow{all:unset;cursor:pointer;width:30px;height:30px;display:inline-flex;align-items:center;justify-content:center;
    border-radius:9px;color:var(--mut);border:1px solid transparent;transition:all .12s ease}
  .dp-arrow:hover{background:var(--bg2);color:var(--ink);border-color:var(--line2)}
  .dp-arrow svg{width:15px;height:15px}
  .dp-dow{display:grid;grid-template-columns:repeat(7,1fr);gap:3px;margin-bottom:6px}
  .dp-dow span{text-align:center;font-size:10px;color:var(--mut2);font-weight:600;letter-spacing:.06em;text-transform:uppercase}
  .dp-grid{display:grid;grid-template-columns:repeat(7,1fr);gap:3px}
  .dp-cell{all:unset;height:34px;display:flex;align-items:center;justify-content:center;border-radius:10px;
    font-size:12.5px;color:var(--ink);cursor:pointer;font-family:'JetBrains Mono',monospace;transition:background .1s ease,color .1s ease}
  .dp-cell.empty{cursor:default}
  .dp-cell.we{color:var(--mut)}
  .dp-cell:not(.empty):not(.sel):hover{background:var(--bg2);color:var(--ink)}
  .dp-cell.today{color:var(--acid);font-weight:700;box-shadow:inset 0 0 0 1px rgba(185,247,62,.45)}
  .dp-cell.sel{background:var(--acid);color:#0a0c0b;font-weight:700;box-shadow:0 0 16px rgba(185,247,62,.4)}
  .dp-time{display:flex;align-items:center;gap:8px;margin-top:14px;padding-top:13px;border-top:1px solid var(--line)}
  .dp-time-lbl{font-size:12.5px;color:var(--mut);margin-right:3px}
  .dp-time input{width:44px;text-align:center;background:var(--bg2);border:1px solid var(--line2);border-radius:9px;
    padding:7px 0;color:var(--ink);font-family:'JetBrains Mono',monospace;font-size:13.5px;font-weight:600;outline:none;
    transition:border-color .12s,box-shadow .12s}
  .dp-time input:focus{border-color:rgba(185,247,62,.5);box-shadow:0 0 0 3px rgba(185,247,62,.12)}
  .dp-colon{color:var(--mut);font-weight:700}
  .dp-foot{display:flex;justify-content:flex-end;align-items:center;gap:6px;margin-top:15px}
  .dp-btn{all:unset;cursor:pointer;font-size:13px;color:var(--mut);padding:7px 12px;border-radius:10px;font-weight:600;transition:all .12s ease}
  .dp-btn:hover{color:var(--ink);background:var(--bg2)}
  .dp-today{color:var(--ink)}
  .dp-ok{color:#0a0c0b;background:var(--acid);font-weight:700;box-shadow:0 0 18px rgba(185,247,62,.28)}
  .dp-ok:hover{background:var(--acid);color:#0a0c0b;filter:brightness(1.06)}
  @keyframes dpIn{from{opacity:0;transform:translateY(6px) scale(.985)}to{opacity:1;transform:none}}
  .chev{color:var(--mut2);font-size:19px;text-align:center;transition:transform .2s}

  .panel{padding:4px 18px 18px 58px;border-top:1px solid var(--line);animation:drop .25s ease}
  @keyframes drop{from{opacity:0;transform:translateY(-4px)}to{opacity:1;transform:none}}
  .tags{display:flex;gap:7px;flex-wrap:wrap;align-items:center;margin:13px 0 0}
  .tag{font-size:11px;font-weight:600;padding:3px 9px;border-radius:999px;border:1px solid transparent}
  .tag--hot{color:#ffd9a0;background:rgba(245,165,36,.12);border-color:rgba(245,165,36,.35)}
  .tag--early{color:#bdf0ff;background:rgba(56,189,248,.1);border-color:rgba(56,189,248,.3)}
  .tag--inst{color:#d7c8ff;background:rgba(167,139,250,.12);border-color:rgba(167,139,250,.32)}
  .tag--degen{color:#ffd9a0;background:rgba(245,165,36,.1);border-color:rgba(245,165,36,.28)}
  .tag--cross{color:var(--acid);background:rgba(185,247,62,.09);border-color:rgba(185,247,62,.3)}
  .xlink{font-size:12px;color:var(--acid2);white-space:nowrap;flex:none}
  .xlink:hover{color:var(--acid)}
  .story-top{display:flex;justify-content:space-between;align-items:baseline;gap:16px;flex-wrap:wrap;margin:13px 0 0}
  .story-title{margin:0;font-family:'Bricolage Grotesque';font-weight:700;font-size:22px;line-height:1.25;
    letter-spacing:-.02em;color:var(--ink);max-width:74ch}
  .story-body{margin:9px 0 0;font-size:13.5px;line-height:1.6;color:#cdd6d1;max-width:92ch}
  .tokbar{display:inline-flex;align-items:center;gap:14px;flex-wrap:wrap;margin:13px 0 0;
    padding:9px 14px;border-radius:11px;border:1px solid var(--line2);background:var(--bg2);
    text-decoration:none;font-family:'JetBrains Mono',monospace;font-size:12.5px;color:var(--mut)}
  .tokbar:hover{border-color:var(--mut2)}
  .tokbar-pair b{color:var(--ink);font-weight:700}
  .tokbar-price{color:var(--ink)}
  .tokbar-chg{display:inline-flex;align-items:center;gap:5px;font-weight:700}
  .tokbar-chg i{font-style:normal;font-weight:400;font-size:10.5px;color:var(--mut2)}
  .tokbar-chg.up{color:var(--acid)}
  .tokbar-chg.down{color:#f5616e}
  .tokbar-venue{color:var(--mut2)}
  .tokbar-src{margin-left:2px;color:var(--acid2);font-family:'Hanken Grotesk',sans-serif;font-size:12px}
  .story-h{margin:15px 0 7px;font-size:11px;letter-spacing:.08em;text-transform:uppercase;color:var(--mut2);font-weight:700}
  .story-points{margin:0;padding:0;list-style:none;max-width:92ch;display:flex;flex-direction:column;gap:6px}
  .story-points li{position:relative;padding-left:18px;font-size:13.5px;line-height:1.5;color:#cdd6d1}
  .story-points li::before{content:"";position:absolute;left:3px;top:8px;width:5px;height:5px;border-radius:50%;background:var(--acid2)}
  .story-take{margin:15px 0 0;font-size:13.5px;line-height:1.55;color:#d6ded9;max-width:92ch;
    padding:11px 14px;background:var(--bg2);border:1px solid var(--line2);border-radius:10px}
  .story-take span{display:block;font-size:10.5px;letter-spacing:.08em;text-transform:uppercase;color:var(--acid2);font-weight:700;margin-bottom:4px}
  .comp-nums{display:flex;gap:16px;flex-wrap:wrap;margin-top:16px;color:var(--mut);font-size:12.5px;align-items:center}
  .comp-nums b{color:var(--ink);font-family:'JetBrains Mono',monospace}
  .comp-nums span{display:flex;align-items:center;gap:6px}
  .comp-nums .cn-div{width:1px;height:13px;background:var(--line2);margin:0 4px;padding:0;align-self:center}
  .comp-nums i{width:8px;height:8px;border-radius:2px}
  .khead{display:flex;align-items:baseline;gap:9px;margin-top:16px;font-size:11px;letter-spacing:.08em;
    text-transform:uppercase;color:var(--mut2);font-weight:700}
  .reasons{margin-top:18px;padding-top:16px;border-top:1px solid var(--line)}
  .reasons-head{display:flex;align-items:center;justify-content:space-between;gap:12px;flex-wrap:wrap;margin-bottom:9px}
  .reasons-lbl{font-size:11px;letter-spacing:.08em;text-transform:uppercase;color:var(--mut2);font-weight:700}
  .reasons-when{display:flex;align-items:center;gap:8px;font-family:'JetBrains Mono',monospace;font-size:11.5px;color:var(--mut)}
  .reasons-title{margin:0 0 6px;font-family:'Bricolage Grotesque';font-weight:700;font-size:15.5px;color:var(--ink);line-height:1.3}
  .evnav-chips{display:flex;flex-wrap:wrap;gap:6px}
  .evchip{display:inline-flex;align-items:center;gap:6px;font-family:'JetBrains Mono',monospace;font-size:11.5px;font-weight:600;
    color:var(--mut);background:var(--bg2);border:1px solid var(--line2);border-radius:8px;padding:5px 10px;cursor:pointer;transition:all .12s}
  .evchip:hover{color:var(--ink);border-color:var(--mut2)}
  .evchip.on{color:var(--acid);border-color:rgba(185,247,62,.45);background:rgba(185,247,62,.09)}
  .evchip-dot{width:6px;height:6px;border-radius:50%;background:var(--acid);box-shadow:0 0 8px rgba(185,247,62,.6)}
  .story-now{font-family:'Hanken Grotesk',sans-serif;font-size:9.5px;font-weight:700;letter-spacing:.04em;text-transform:uppercase;
    color:#0a0c0b;background:var(--acid);border-radius:5px;padding:2px 6px}
  .story-past{font-family:'Hanken Grotesk',sans-serif;font-size:9.5px;font-weight:700;letter-spacing:.04em;text-transform:uppercase;
    color:var(--mut2);border:1px solid var(--line2);border-radius:5px;padding:2px 6px}
  .kcount{font-family:'JetBrains Mono',monospace;font-size:11px;letter-spacing:0;text-transform:none;color:var(--mut2);font-weight:400}
  .kmore{margin-top:14px;font-family:inherit;font-size:12.5px;font-weight:600;color:var(--acid2);
    background:none;border:1px solid var(--line2);border-radius:9px;padding:7px 15px;cursor:pointer;transition:.15s}
  .kmore:hover{color:var(--acid);border-color:var(--mut2)}
  .note-flag{flex:none;display:inline-flex;align-items:center;justify-content:center;width:19px;height:19px;
    border-radius:6px;background:rgba(185,247,62,.14);color:var(--acid);cursor:help;transition:background .12s}
  .note-flag:hover{background:rgba(185,247,62,.26)}
  .note-flag svg{width:11px;height:11px}
  .markpip{flex:none;display:inline-flex;align-items:center;line-height:0}
  .markpip svg{width:13px;height:13px;display:block}
  .markpip.mp-skip{color:#e7b748}
  .markpip.mp-rug{color:#f5616e}
  .main-av--round{border-radius:50%}
  .notes{margin-top:18px}
  .notes-h{display:block;font-size:10.5px;text-transform:uppercase;letter-spacing:.1em;color:var(--mut2);font-weight:600;margin-bottom:7px}
  .notes-status{text-transform:none;letter-spacing:0;font-weight:500;color:var(--mut2)}
  .notes-status.ok{color:var(--acid)}
  .notes-status.err{color:#f5a524}
  .notes-retry{background:none;border:none;padding:0;color:var(--acid);font:inherit;text-transform:none;letter-spacing:0;cursor:pointer;text-decoration:underline}
  .notes-ta{width:100%;box-sizing:border-box;min-height:96px;resize:none;overflow:hidden;background:var(--bg2);
    border:1px solid var(--line2);border-radius:12px;padding:13px 15px;color:var(--ink);
    font-family:'Hanken Grotesk',sans-serif;font-size:13.5px;line-height:1.65;outline:none;
    box-shadow:inset 0 1px 2px rgba(0,0,0,.22);transition:border-color .14s,box-shadow .14s}
  .notes-ta::placeholder{color:var(--mut2)}
  .notes-ta:focus{border-color:rgba(185,247,62,.5);box-shadow:inset 0 1px 2px rgba(0,0,0,.22),0 0 0 3px rgba(185,247,62,.12)}
  .notes-locked{display:flex;align-items:center;justify-content:center;gap:9px;width:100%;box-sizing:border-box;
    min-height:96px;background:var(--bg2);border:1px dashed var(--line2);border-radius:12px;color:var(--mut);
    font-family:inherit;font-size:13px;font-weight:600;cursor:pointer;transition:all .14s}
  .notes-locked:hover{color:var(--ink);border-color:var(--mut2);background:var(--bg1)}
  .notes-locked svg{width:15px;height:15px;color:var(--acid)}
  .kgrid{display:grid;grid-template-columns:repeat(auto-fill,minmax(210px,1fr));gap:11px 16px;margin-top:12px}
  .kol{display:flex;align-items:center;gap:9px;min-width:0}
  .ktxt{min-width:0}
  .kn{font-size:12.5px;font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
  .kr{font-size:11px;color:var(--mut);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}

  @media(max-width:1300px){
    .lhead{display:none}
    .row{grid-template-columns:22px 1fr auto;
      grid-template-areas:"r a v" "r w w";gap:9px 10px;padding:13px 14px}
    .c-rank{grid-area:r;align-self:start;margin-top:3px}
    .c-acct{grid-area:a}
    .c-velo{grid-area:v;align-self:start;justify-self:end;white-space:nowrap}  /* +38 KOLs on one line */
    .velo-main{font-size:18px}
    .velo-sub{display:none}      /* cards keep just the window count; 24h + total live in the expanded card */
    .velo-u{display:inline;margin-left:5px;font-size:10.5px;font-weight:600;color:var(--mut2);
      font-family:'Hanken Grotesk',sans-serif;letter-spacing:.02em}
    .c-why{grid-area:w;white-space:normal}                                  /* spans full width on its own row */
    .c-why.why-line{display:block;line-height:1.45}                         /* chip + text flow inline, like desktop */
    .c-why .why-strip{display:inline}
    .c-why .wtok{display:inline-flex;vertical-align:middle;margin:0 8px 3px 0}
    .c-why .wtext,.c-why .why-unknown{display:inline;white-space:normal;overflow:visible}  /* let the wording breathe */
    .c-why .lc-call{display:none}                                          /* inline call hidden — shown as a credit line below */
    .c-why .lc-credit{display:flex;width:fit-content;align-items:center;gap:7px;margin:10px 0 0;text-decoration:none;
      font-family:'JetBrains Mono',monospace;font-weight:800;font-size:11px;color:var(--acid)}
    .c-why .lc-credit b{color:var(--acid);font-weight:800}
    .c-mix{display:none}        /* drop the colour bar (no legend on mobile) + "inst" jargon */
    .c-kol{display:none}        /* drop notable followers from the preview (still in expanded card) */
    .c-exp{display:none}        /* the whole card is tappable; the orphaned chevron just added dead height */
    .panel{padding-left:16px}
  }

  @media(max-width:640px){
    /* phones: swap the full header + controls row for the sticky bar + burger menu */
    .wrap{padding-top:0;padding-bottom:18px}   /* flush top, tight bottom */
    .shell{min-height:calc(100vh - 18px)}      /* match padding so the footer anchors to the true bottom */
    .mtop{display:flex;margin-bottom:10px}
    .msubhead{display:block;color:var(--mut);font-size:12.5px;line-height:1.35;margin:0 2px 15px}
    .msubhead b{color:var(--acid2);font-weight:600}
    .top{display:none}
    .controls{display:none}
    .newsbox{display:none}      /* no newsletter popup on phones */
    .sf-note{display:none}      /* drop the footer tagline on phones */
    .sitefoot{flex-wrap:nowrap} /* keep leak.me + Support/X/Telegram on one line */
  }

  /* header right cluster */
  .head-right{display:flex;align-items:center;gap:9px;flex-wrap:wrap}
  .feedlink{display:inline-flex;align-items:center;gap:7px;font-family:inherit;font-weight:700;font-size:13px;color:var(--acid);
    background:rgba(185,247,62,.10);border:1px solid rgba(185,247,62,.4);border-radius:11px;padding:9px 14px;cursor:pointer;transition:.14s}
  .feedlink:hover{background:rgba(185,247,62,.17);transform:translateY(-1px)}
  .fl-dot{width:7px;height:7px;border-radius:50%;background:var(--acid);box-shadow:0 0 8px rgba(185,247,62,.7);animation:flpulse 1.6s ease-in-out infinite}
  @keyframes flpulse{0%,100%{opacity:.45;transform:scale(.8)}50%{opacity:1;transform:scale(1.12)}}
  @media (prefers-reduced-motion:reduce){.fl-dot{animation:none}}
  .menu-tag--live{color:#ff5d6c;background:rgba(243,105,122,.14)}
  .upbtn{display:inline-flex;align-items:center;gap:7px;font-family:inherit;font-size:13.5px;font-weight:700;
    color:#fff;cursor:pointer;border:none;padding:9px 15px;border-radius:11px;
    background:linear-gradient(135deg,#7c5cff,#a78bfa);box-shadow:0 6px 20px rgba(124,92,255,.32)}
  .upbtn:hover{filter:brightness(1.08)}
  .upbtn svg{color:var(--acid)}
  .ctrl-right{display:flex;align-items:center;gap:18px;flex-wrap:wrap}
  .propill{display:inline-flex;align-items:center;gap:6px;font-size:13px;font-weight:700;color:#0a0c0b;
    background:var(--acid);padding:8px 13px;border-radius:11px}
  .propill-btn{cursor:pointer}
  .propill-link{display:inline-flex;text-decoration:none}
  .loginbtn{font-family:inherit;font-size:13.5px;font-weight:600;color:var(--ink);cursor:pointer;
    background:var(--bg2);border:1px solid var(--line2);padding:9px 16px;border-radius:11px}
  .loginbtn:hover{border-color:var(--mut2)}
  .acctbtn{display:inline-flex;align-items:center;gap:7px;font-family:inherit;font-size:13px;color:var(--ink);
    cursor:pointer;background:var(--bg2);border:1px solid var(--line2);padding:7px 12px 7px 8px;border-radius:11px}
  .acctbtn:hover{border-color:var(--mut2)}
  .acctbtn-av{width:22px;height:22px;border-radius:50%;background:linear-gradient(135deg,var(--acid2),#3a6b12);
    display:flex;align-items:center;justify-content:center;font-size:12px;color:#0a0c0b}

  /* modal */
  .overlay{position:fixed;inset:0;z-index:200;display:flex;align-items:center;justify-content:center;padding:18px;
    background:rgba(4,6,5,.74);backdrop-filter:blur(7px);animation:fade .2s ease}
  @keyframes fade{from{opacity:0}to{opacity:1}}
  .modal{position:relative;width:100%;max-width:400px;max-height:92vh;overflow:auto;background:var(--card);
    border:1px solid var(--line2);border-radius:20px;padding:30px 28px 26px;
    box-shadow:0 30px 80px rgba(0,0,0,.6),0 0 0 1px rgba(185,247,62,.04),0 -1px 30px rgba(185,247,62,.06) inset;
    animation:pop .26s cubic-bezier(.2,.9,.3,1.2)}
  .modal--wide{max-width:480px}
  @keyframes pop{from{opacity:0;transform:translateY(10px) scale(.97)}to{opacity:1;transform:none}}
  .m-x,.m-back{position:absolute;top:16px;background:none;border:none;color:var(--mut2);cursor:pointer;
    display:flex;padding:4px;border-radius:8px}
  .m-x{right:16px}.m-back{left:16px}
  .m-x:hover,.m-back:hover{color:var(--ink);background:var(--bg2)}
  .m-title{font-family:'Bricolage Grotesque';font-weight:800;font-size:25px;text-align:center;margin:2px 0 4px;letter-spacing:-.02em}
  .m-sub{text-align:center;color:var(--mut);font-size:13px;margin:0 0 18px}
  .notice{display:flex;align-items:center;gap:8px;font-size:12.5px;color:#d7c8ff;margin:0 0 16px;
    background:rgba(167,139,250,.1);border:1px solid rgba(167,139,250,.3);padding:9px 12px;border-radius:10px}
  .notice svg{color:#a78bfa;flex:none}

  .field{display:block;margin-bottom:14px}
  .flabel{display:block;font-size:12.5px;color:var(--mut);margin-bottom:6px}
  .flabel i{color:#ff6b6b;margin-left:3px;font-style:normal}
  .fwrap{position:relative;display:block}
  .fwrap input{width:100%;background:var(--bg2);border:1px solid var(--line2);border-radius:11px;
    padding:12px 14px;color:var(--ink);font-family:inherit;font-size:14px;outline:none;transition:.15s}
  .fwrap input::placeholder{color:var(--mut2)}
  .fwrap input:focus{border-color:var(--acid2);box-shadow:0 0 0 3px rgba(185,247,62,.12)}
  .field--err .fwrap input{border-color:#ef4444;background:rgba(239,68,68,.06)}
  .field--err .fwrap input:focus{border-color:#ef4444;box-shadow:0 0 0 3px rgba(239,68,68,.15)}
  .ferr{display:block;color:#f87171;font-size:12px;margin-top:6px}
  .m-formerr{color:#f87171;font-size:13px;text-align:center;margin:12px 0 0}
  .reset-email{text-align:center;font-weight:700;color:var(--ink);font-size:16px;margin:2px 0 14px;word-break:break-all}
  .eye{position:absolute;right:8px;top:50%;transform:translateY(-50%);background:none;border:none;
    color:var(--mut2);cursor:pointer;padding:6px;display:flex}
  .eye:hover{color:var(--ink)}

  .cbx{display:flex;align-items:flex-start;gap:9px;background:none;border:none;cursor:pointer;
    font-family:inherit;font-size:12.8px;color:var(--mut);text-align:left;padding:0;line-height:1.45}
  .box{width:18px;height:18px;border-radius:6px;border:1.5px solid var(--line2);flex:none;display:flex;
    align-items:center;justify-content:center;color:#0a0c0b;margin-top:1px;transition:.15s}
  .box.on{background:var(--acid);border-color:var(--acid)}
  .cbx-txt .link{font-size:inherit}
  .rowbetween{display:flex;justify-content:space-between;align-items:center;gap:10px;margin:4px 0 18px}
  .boxes{display:flex;flex-direction:column;gap:11px;margin:6px 0 18px}

  .cta{width:100%;display:inline-flex;align-items:center;justify-content:center;gap:8px;
    border:none;cursor:pointer;font-family:inherit;font-weight:700;font-size:15px;color:#08110a;
    background:linear-gradient(135deg,#cdff6e,#9fe027);border-radius:13px;padding:13px;margin-top:4px;
    box-shadow:0 6px 20px rgba(185,247,62,.2);transition:.15s}
  .cta svg{flex:none}
  .cta:hover{filter:brightness(1.05)}
  .cta:disabled{opacity:.4;cursor:not-allowed;box-shadow:none;filter:none}
  .gbtn{width:100%;display:flex;align-items:center;justify-content:center;gap:10px;cursor:pointer;
    font-family:inherit;font-weight:600;font-size:14px;color:var(--ink);background:var(--bg2);
    border:1px solid var(--line2);border-radius:13px;padding:13px;margin-top:11px}
  .gbtn:hover{border-color:var(--mut2)}
  .m-foot{text-align:center;color:var(--mut);font-size:13px;margin:18px 0 0}
  .m-foot.small{font-size:11.5px;color:var(--mut2);margin-top:14px}

  .lim-ic{display:flex;align-items:center;justify-content:center;width:46px;height:46px;margin:2px auto 12px;
    border-radius:13px;background:rgba(185,247,62,.09);border:1px solid rgba(185,247,62,.26);color:var(--acid)}
  .lim-meter{margin:18px 0 16px}
  .lim-track{height:7px;border-radius:99px;background:var(--bg2);border:1px solid var(--line);overflow:hidden}
  .lim-track i{display:block;height:100%;background:linear-gradient(90deg,var(--acid2),var(--acid))}
  .lim-count{display:block;text-align:center;margin-top:8px;font-family:'JetBrains Mono',monospace;
    font-size:11px;color:var(--mut2)}
  .lim-perks{list-style:none;margin:0 0 18px;padding:14px 16px;display:flex;flex-direction:column;gap:9px;
    background:var(--bg2);border:1px solid var(--line);border-radius:13px}
  .lim-perks li{display:flex;align-items:center;gap:9px;font-size:13.5px;color:var(--ink)}
  .lim-perks li svg{color:var(--acid);flex:none}
  .lim-later{width:100%;background:none;border:none;cursor:pointer;font-family:inherit;font-size:13px;
    color:var(--mut);padding:13px 0 2px;margin-top:6px}
  .lim-later:hover{color:var(--ink)}
  .link{background:none;border:none;cursor:pointer;font-family:inherit;color:var(--acid2);font-size:13px;padding:0}
  .link:hover{color:var(--acid)}
  .link.strong{font-weight:700}
  .link.u,.u{text-decoration:underline}

  /* premium plans */
  .plan{display:block;width:100%;text-align:left;cursor:pointer;background:var(--bg2);
    border:1.5px solid var(--line2);border-radius:14px;padding:15px 16px;margin-bottom:11px;
    font-family:inherit;color:var(--ink);transition:.15s}
  .plan:hover:not(:disabled){border-color:var(--mut2)}
  .plan--on{border-color:var(--acid);background:rgba(185,247,62,.06);box-shadow:0 0 0 3px rgba(185,247,62,.08)}
  .plan--cur{cursor:default;opacity:.85}
  .plan-top{display:flex;align-items:center;gap:10px}
  .radio{width:18px;height:18px;border-radius:50%;border:2px solid var(--line2);flex:none}
  .radio--on{border-color:var(--acid);background:radial-gradient(circle at center,var(--acid) 0 5px,transparent 6px)}
  .radio--check{border-color:var(--mut2);color:var(--mut);display:flex;align-items:center;justify-content:center}
  .plan-name{font-family:'Bricolage Grotesque';font-weight:700;font-size:16px;display:flex;align-items:center;gap:8px}
  .plan-badge{display:inline-flex;align-items:center;gap:4px;font-family:'Hanken Grotesk';font-weight:700;
    font-size:10px;text-transform:uppercase;letter-spacing:.05em;color:#0a0c0b;background:var(--acid);
    padding:3px 7px;border-radius:999px}
  .plan-badge svg{color:#0a0c0b}
  .plan-price{margin-left:auto;text-align:right;display:flex;align-items:baseline;gap:6px;
    font-family:'JetBrains Mono',monospace}
  .plan-price b{font-size:18px;color:var(--ink)}
  .plan-price i{font-style:normal;font-size:11px;color:var(--mut2)}
  .plan-price s{color:var(--mut2);font-size:12px}
  .plan-price em{font-style:normal;color:var(--mut);font-size:13px;font-family:'Hanken Grotesk'}
  .plan-feat{list-style:none;margin:11px 0 0;padding:0;display:flex;flex-direction:column;gap:7px}
  .plan-feat li{display:flex;align-items:center;gap:9px;font-size:13px;color:var(--ink)}
  .plan-feat li svg{flex:none}
  .plan-feat li.ok svg{color:var(--acid)}
  .plan-feat li.lk{color:var(--mut)}
  .plan-feat li.lk svg{color:var(--mut2)}

  /* phones only — placed after the base plan/modal rules so it actually overrides them */
  @media(max-width:640px){
    .overlay{padding:10px}                                    /* more modal width */
    .modal{padding:24px 18px 20px}
    .plan{padding:14px 13px}
    .plan-price{flex-direction:column;align-items:flex-end;gap:0;line-height:1.2}  /* stack price → never overflows */
    .watchtab .watchtab-lbl,.filterbtn .filterbtn-lbl{display:none}  /* icon-only controls on phones */
  }

  /* tablet (641–1300px) — placed last so it overrides the base rules; full desktop table needs ~1300px for the "why" column */
  @media(min-width:641px) and (max-width:1300px){
    .legend{display:none}                   /* hide the Degen/VC/Corporate key + accounts/opens note */
    .controls{justify-content:flex-start}   /* group chips + Watchlist on one line */
  }

  /* narrow tablet (641–880px): full tagline + search + buttons can't share one row here, so trim the tagline
     and tighten the chips/buttons — keeps the header on one row and the controls on one row (2 rows total) */
  @media(min-width:641px) and (max-width:880px){
    .bs-rest{display:none}                   /* tagline → just "alpha, leaked" so the header fits one row */
    .windows{gap:3px;padding:3px}            /* tighten the time-window chip group */
    .chip{padding:5px 6px}
    .ctrl-left{gap:8px}
    .controls{gap:10px}
    .watchtab{padding:7px 11px}
    .watchtab .watchtab-lbl,.filterbtn .filterbtn-lbl{display:none}  /* icon-only Watchlist/Filters when tight */
  }
  `
}
));
export {re as a, k as c, te as d, ne as f, E as g, h, ae as i, A as l, T as m, Dt as n, I as o, g as p, de as r, ee as s, Xe as t, D as u};
