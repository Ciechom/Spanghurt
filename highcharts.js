(function () {
  function R(a, b) {
    a || (a = {});
    for (var c in b) a[c] = b[c];
    return a
  }
  function T(a) {
    return a !== Na && a !== null
  }
  function oa(a, b, c) {
    var d, e = "setAttribute",
        f;
    if (typeof b == "string") if (T(c)) a[e](b, c);
    else {
      if (a && a.getAttribute) f = a.getAttribute(b)
    } else if (T(b) && typeof b == "object") for (d in b) a[e](d, b[d]);
    return f
  }
  function pc(a) {
    if (!a || a.constructor != Array) a = [a];
    return a
  }
  function z() {
    var a = arguments,
        b, c;
    for (b = 0; b < a.length; b++) {
      c = a[b];
      if (T(c)) return c
    }
  }
  function qc(a) {
    var b = "",
        c;
    for (c in a) b += rc(c) + ":" + a[c] + ";";
    return b
  }
  function Oa(a, b) {
    if (Zb) if (b && b.opacity !== Na) b.filter = "alpha(opacity=" + b.opacity * 100 + ")";
    R(a.style, b)
  }
  function Ea(a, b, c, d, e) {
    a = ka.createElement(a);
    b && R(a, b);
    e && Oa(a, {
      padding: 0,
      border: fb,
      margin: 0
    });
    c && Oa(a, c);
    d && d.appendChild(a);
    return a
  }
  function Pc() {
    var a = va.global.useUTC;
    $b = a ? Date.UTC : function (b, c, d, e, f, g) {
      return (new Date(b, c, z(d, 1), z(e, 0), z(f, 0), z(g, 0))).getTime()
    };
    sc = a ? "getUTCMinutes" : "getMinutes";
    tc = a ? "getUTCHours" : "getHours";
    uc = a ? "getUTCDay" : "getDay";
    Qb = a ? "getUTCDate" : "getDate";
    ac = a ? "getUTCMonth" : "getMonth";
    bc = a ? "getUTCFullYear" : "getFullYear";
    Qc = a ? "setUTCMinutes" : "setMinutes";
    Rc = a ? "setUTCHours" : "setHours";
    vc = a ? "setUTCDate" : "setDate";
    Sc = a ? "setUTCMonth" : "setMonth";
    Tc = a ? "setUTCFullYear" : "setFullYear"
  }
  function gd(a) {
    va = la(va, a);
    Pc();
    return va
  }
  function hd() {
    return va
  }
  function cc(a) {
    dc || (dc = Ea(Bb));
    a && dc.appendChild(a);
    dc.innerHTML = ""
  }
  function gb(a, b) {
    var c = function () {};
    c.prototype = new a;
    R(c.prototype, b);
    return c
  }
  function id(a, b, c, d) {
    var e = va.lang;
    a = a;
    var f = isNaN(b = $a(b)) ? 2 : b;
    b = c === undefined ? e.decimalPoint : c;
    d = d === undefined ? e.thousandsSep : d;
    e = a < 0 ? "-" : "";
    c = parseInt(a = $a(+a || 0).toFixed(f), 10) + "";
    var g = (g = c.length) > 3 ? g % 3 : 0;
    return e + (g ? c.substr(0, g) + d : "") + c.substr(g).replace(/(\d{3})(?=\d)/g, "$1" + d) + (f ? b + $a(a - c).toFixed(f).slice(2) : "")
  }
  function jd(a) {
    for (var b = {
      x: a.offsetLeft,
      y: a.offsetTop
    }; a.offsetParent;) {
      a = a.offsetParent;
      b.x += a.offsetLeft;
      b.y += a.offsetTop;
      if (a != ka.body && a != ka.documentElement) {
        b.x -= a.scrollLeft;
        b.y -= a.scrollTop
      }
    }
    return b
  }
  function ec() {}
  function kd(a, b) {
    function c(m, h) {
      function r() {
        var k = [],
            q;
        G = N = null;
        U = [];
        o(ta, function (s) {
          q = false;
          o(["xAxis", "yAxis"], function (B) {
            if (s.isCartesian && (B == "xAxis" && M || B == "yAxis" && !M) && (s.options[B] == h.index || s.options[B] === Na && h.index === 0)) {
              s[B] = V;
              U.push(s);
              q = true
            }
          });
          if (!s.visible && H.ignoreHiddenSeries) q = false;
          if (q) {
            var y, C;
            if (!M) {
              y = s.options.stacking;
              fc = y == "percent";
              if (y) {
                C = k[s.type] || [];
                k[s.type] = C
              }
              if (fc) {
                G = 0;
                N = 99
              }
            }
            if (s.isCartesian) {
              o(s.data, function (B) {
                var I = B.x,
                    fa = B.y;
                if (G === null) G = N = B[nb];
                if (M) if (I > N) N = I;
                else {
                  if (I < G) G = I
                } else if (T(fa)) {
                  if (y) C[I] = C[I] ? C[I] + fa : fa;
                  B = C ? C[I] : fa;
                  if (!fc) if (B > N) N = B;
                  else if (B < G) G = B;
                  if (y) ab[s.type][I] = {
                    total: B,
                    cum: B
                  }
                }
              });
              if (/(area|column|bar)/.test(s.type) && !M) if (G >= 0) {
                G = 0;
                Uc = true
              } else if (N < 0) {
                N = 0;
                Vc = true
              }
            }
          }
        })
      }
      function w(k, q, s) {
        var y = 1,
            C = 0;
        if (s) {
          y *= -1;
          C = Pa
        }
        if (Cb) {
          y *= -1;
          C -= y * Pa
        }
        if (O === Na) k = null;
        else if (q) {
          if (Cb) k = Pa - k;
          k = k / hb + O
        } else k = y * (k - O) * hb + C;
        return k
      }
      function J(k, q, s) {
        if (s) {
          var y, C, B;
          y = w(k);
          var I;
          k = C = y + Db;
          y = B = Fa - y - Db;
          if (X) {
            y = ga;
            B = Fa - Eb;
            if (k < aa || k > aa + wa) I = true
          } else {
            k = aa;
            C = Va - wc;
            if (y < ga || y > ga + pa) I = true
          }
          I || P.path(P.crispLine([bb, k, y, Ja, C, B], s)).attr({
            stroke: q,
            "stroke-width": s
          }).add(Q)
        }
      }
      function K(k, q, s) {
        k = ub(k, O);
        q = Mb(q, Y);
        var y = (q - k) * hb;
        J(k + (q - k) / 2, s, y)
      }
      function E(k, q, s, y, C, B, I) {
        var fa, qb, da, Wa = h.labels;
        if (q == "inside") C = -C;
        if (ha) C = -C;
        q = qb = w(k + Fb) + Db;
        fa = da = Fa - w(k + Fb) - Db;
        if (X) {
          fa = Fa - Eb - (ha ? pa : 0) + Xa;
          da = fa + C
        } else {
          q = aa + (ha ? wa : 0) + Xa;
          qb = q - C
        }
        y && P.path(P.crispLine([bb, q, fa, Ja, qb, da], y)).attr({
          stroke: s,
          "stroke-width": y
        }).add(p);
        if (B && Wa.enabled) if ((k = ld.call({
          index: I,
          isFirst: k == ea[0],
          isLast: k == ea[ea.length - 1],
          dateTimeLabelFormat: gc,
          value: Qa && Qa[k] ? Qa[k] : k
        })) || k === 0) {
          q = q + Wa.x - (Fb && X ? Fb * hb * (Cb ? -1 : 1) : 0);
          fa = fa + Wa.y - (Fb && !X ? Fb * hb * (Cb ? 1 : -1) : 0);
          P.text(k, q, fa, Wa.style, Wa.rotation, Wa.align).add(p)
        }
      }
      function ma(k, q) {
        var s;
        vb = q ? 1 : Ka.pow(10, ib(Ka.log(k) / Ka.LN10));
        s = k / vb;
        if (!q) {
          q = [1, 2, 2.5, 5, 10];
          if (h.allowDecimals === false) if (vb == 1) q = [1, 2, 5, 10];
          else if (vb <= 0.1) q = [1 / vb]
        }
        for (var y = 0; y < q.length; y++) {
          k = q[y];
          if (s <= (q[y] + (q[y + 1] || q[y])) / 2) break
        }
        k *= vb;
        return k
      }
      function ua() {
        ea = [];
        var k, q = va.global.useUTC,
            s = 1E3 / cb,
            y = 6E4 / cb,
            C = 36E5 / cb,
            B = 864E5 / cb,
            I = 6048E5 / cb,
            fa = 2592E6 / cb,
            qb = 31556952E3 / cb,
            da = [
            ["second", s, [1, 2, 5, 10, 15, 30]],
            ["minute", y, [1, 2, 5, 10, 15, 30]],
            ["hour", C, [1, 2, 3, 4, 6, 8, 12]],
            ["day", B, [1, 2]],
            ["week", I, [1, 2]],
            ["month", fa, [1, 2, 3, 4, 6]],
            ["year", qb, null]
            ],
            Wa = da[6],
            ia = Wa[1],
            ba = Wa[2];
        for (k = 0; k < da.length; k++) {
          Wa = da[k];
          ia = Wa[1];
          ba = Wa[2];
          if (da[k + 1]) {
            var md = (ia * ba[ba.length - 1] + da[k + 1][1]) / 2;
            if (Ra <= md) break
          }
        }
        if (ia == qb && Ra < 5 * ia) ba = [1, 2, 5];
        da = ma(Ra / ia, ba);
        var wb;
        ba = new Date(O * cb);
        ba.setMilliseconds(0);
        if (ia >= s) ba.setSeconds(ia >= y ? 0 : da * ib(ba.getSeconds() / da));
        if (ia >= y) ba[Qc](ia >= C ? 0 : da * ib(ba[sc]() / da));
        if (ia >= C) ba[Rc](ia >= B ? 0 : da * ib(ba[tc]() / da));
        if (ia >= B) ba[vc](ia >= fa ? 1 : da * ib(ba[Qb]() / da));
        if (ia >= fa) {
          ba[Sc](ia >= qb ? 0 : da * ib(ba[ac]() / da));
          wb = ba[bc]()
        }
        if (ia >= qb) {
          wb -= wb % da;
          ba[Tc](wb)
        }
        ia == I && ba[vc](ba[Qb]() - ba[uc]() + h.startOfWeek);
        k = 1;
        wb = ba[bc]();
        s = ba.getTime() / cb;
        y = ba[ac]();
        for (C = ba[Qb](); s < Y && k < wa;) {
          ea.push(s);
          if (ia == qb) s = $b(wb + k * da, 0) / cb;
          else if (ia == fa) s = $b(wb, y + k * da) / cb;
          else if (!q && (ia == B || ia == I)) s = $b(wb, y, C + k * da * (ia == B ? 1 : 7));
          else s += ia * da;
          k++
        }
        ea.push(s);
        gc = h.dateTimeLabelFormats[Wa[0]]
      }
      function ja(k) {
        var q = (vb < 1 ? W(1 / vb) : 1) * 10;
        return W(k * q) / q
      }
      function Ga() {
        var k;
        k = ib(O / Ra) * Ra;
        var q = xc(Y / Ra) * Ra;
        ea = [];
        for (k = ja(k); k <= q;) {
          ea.push(k);
          k = ja(k + Ra)
        }
        if (Qa) {
          O -= 0.5;
          Y += 0.5
        }
      }
      function xa() {
        jb ? ua() : Ga();
        var k = ea[0],
            q = ea[ea.length - 1];
        if (h.startOnTick) O = k;
        else O > k && ea.shift();
        if (h.endOnTick) Y = q;
        else Y < q && ea.pop()
      }
      function ya() {
        if (!jb && !Qa) {
          var k = Nb,
              q = ea.length;
          Nb = Ob[nb];
          if (q < Nb) {
            for (; ea.length < Nb;) ea.push(ja(ea[ea.length - 1] + Ra));
            hb *= (q - 1) / (Nb - 1)
          }
          if (T(k) && Nb != k) V.isDirty = true
        }
      }
      function db() {
        var k, q, s, y = O,
            C = Y;
        k = h.maxZoom;
        var B;
        r();
        O = z(Ba, h.min, G);
        Y = z(Rb, h.max, N);
        if (yc) {
          B = m[M ? "xAxis" : "yAxis"][h.linkedTo];
          B = B.getExtremes();
          O = z(B.min, B.dataMin);
          Y = z(B.max, B.dataMax)
        }
        if (Y - O < k) {
          B = (k - Y + O) / 2;
          O = ub(O - B, z(h.min, O - B));
          Y = Mb(O + k, z(h.max, O + k))
        }
        if (!Qa && !fc && !yc && T(O) && T(Y)) {
          k = Y - O || 1;
          if (!T(h.min) && !T(Ba) && Wc && (G < 0 || !Uc)) O -= k * Wc;
          if (!T(h.max) && !T(Rb) && Xc && (N > 0 || !Vc)) Y += k * Xc
        }
        Ra = Qa || O == Y ? 1 : z(h.tickInterval, (Y - O) * h.tickPixelInterval / Pa);
        if (!jb && !T(h.tickInterval)) Ra = ma(Ra);
        zc = h.minorTickInterval === "auto" && Ra ? Ra / 5 : h.minorTickInterval;
        xa();
        hb = Pa / (Y - O || 1);
        Ob || (Ob = {
          x: 0,
          y: 0
        });
        if (!jb && ea.length > Ob[nb]) Ob[nb] = ea.length;
        if (!M) for (q in ab) for (s in ab[q]) ab[q][s].cum = ab[q][s].total;
        if (!V.isDirty) V.isDirty = O != y || Y != C
      }
      function Ha(k, q, s) {
        s = z(s, true);
        za(V, "setExtremes", {
          min: k,
          max: q
        }, function () {
          if (Qa) {
            if (k < 0) k = 0;
            if (q > Qa.length - 1) q = Qa.length - 1
          }
          Ba = k;
          Rb = q;
          s && m.redraw()
        })
      }
      function Ya() {
        return {
          min: O,
          max: Y,
          dataMin: G,
          dataMax: N
        }
      }
      function rb(k) {
        if (O > k) k = O;
        else if (Y < k) k = Y;
        return w(k, 0, 1)
      }
      function ca(k) {
        var q = k.width,
            s = q ? Ac : Bc;
        s.push(k);
        q ? J(k.value, k.color, k.width) : K(k.from, k.to, k.color)
      }
      function t() {
        var k = h.title,
            q = h.alternateGridColor,
            s = h.minorTickWidth,
            y = h.lineWidth,
            C, B;
        C = U.length && T(O) && T(Y);
        if (p) {
          p.empty();
          Q.empty()
        } else {
          p = P.g("axis").attr({
            zIndex: 7
          }).add();
          Q = P.g("grid").attr({
            zIndex: 1
          }).add()
        }
        if (C || yc) {
          q && o(ea, function (I, fa) {
            if (fa % 2 === 0 && I < Y) K(I, ea[fa + 1] !== Na ? ea[fa + 1] : Y, q)
          });
          o(Bc, function (I) {
            K(I.from, I.to, I.color)
          });
          if (zc && !Qa) for (C = O; C <= Y; C += zc) {
            J(C, h.minorGridLineColor, h.minorGridLineWidth);
            s && E(C, h.minorTickPosition, h.minorTickColor, s, h.minorTickLength)
          }
          o(ea, function (I, fa) {
            B = I + Fb;
            J(B, h.gridLineColor, h.gridLineWidth);
            E(I, h.tickPosition, h.tickColor, h.tickWidth, h.tickLength, !(I == O && !h.showFirstLabel || I == Y && !h.showLastLabel), fa)
          });
          o(Ac, function (I) {
            J(I.value, I.color, I.width)
          })
        }
        if (!V.hasRenderedLine && y) {
          s = aa + (ha ? wa : 0) + Xa;
          C = Fa - Eb - (ha ? pa : 0) + Xa;
          P.path(P.crispLine([bb, X ? aa : s, X ? C : ga, Ja, X ? Va - wc : s, X ? C : Fa - Eb], y)).attr({
            stroke: h.lineColor,
            "stroke-width": y,
            zIndex: 7
          }).add();
          V.hasRenderedLine = true
        }
        if (!V.hasRenderedTitle && !V.axisTitle && k && k.text) {
          y = X ? aa : ga;
          y = {
            low: y + (X ? 0 : Pa),
            middle: y + Pa / 2,
            high: y + (X ? Pa : 0)
          }[k.align];
          s = (X ? ga + pa : aa) + (X ? 1 : -1) * (ha ? -1 : 1) * k.margin - (Zb ? parseInt(k.style.fontSize || 12, 10) / 3 : 0);
          V.axisTitle = P.text(k.text, (X ? y : s + (ha ? wa : 0) + Xa) + (k.x || 0), (X ? s - (ha ? pa : 0) + Xa : y) + (k.y || 0), k.style, k.rotation || 0, {
            low: "left",
            middle: "center",
            high: "right"
          }[k.align]).attr({
            zIndex: 7
          }).add();
          V.hasRenderedTitle = true
        }
        V.isDirty = false
      }
      function v(k) {
        o([Bc, Ac], function (q) {
          for (var s = 0; s < q.length; s++) if (q[s].id == k) {
            q.splice(s, 1);
            break
          }
        });
        t()
      }
      function D() {
        Pb.resetTracker && Pb.resetTracker();
        t();
        o(U, function (k) {
          k.isDirty = true
        })
      }
      function S(k, q) {
        V.categories = Qa = k;
        o(U, function (s) {
          s.translate();
          s.setTooltipPoints(true)
        });
        V.isDirty = true;
        z(q, true) && D()
      }
      var M = h.isX,
          ha = h.opposite,
          X = na ? !M : M,
          ab = {
          bar: {},
          column: {},
          area: {},
          areaspline: {},
          line: {}
          };
      h = la(M ? hc : Cc, X ? ha ? nd : Yc : ha ? od : pd, h);
      var V = this,
          jb = h.type == "datetime",
          Xa = h.offset || 0,
          nb = M ? "x" : "y",
          Pa = X ? wa : pa,
          hb, Db = X ? aa : Eb,
          p, Q, G, N, U, Ba, Rb, Y = null,
          O = null,
          Wc = h.minPadding,
          Xc = h.maxPadding,
          yc = T(h.linkedTo),
          Uc, Vc, fc, Zc = h.events,
          Dc, Bc = h.plotBands || [],
          Ac = h.plotLines || [],
          Ra, zc, vb, ea, Nb, gc, ld = h.labels.formatter ||
      function () {
        var k = this.value;
        return gc ? ic(gc, k) : k
      }, Qa = h.categories || M && m.columnCount, Cb = h.reversed, Fb = Qa && h.tickmarkPlacement == "between" ? 0.5 : 0;
      if (na && M && Cb === Na) Cb = true;
      ha || (Xa *= -1);
      if (X) Xa *= -1;
      R(V, {
        addPlotBand: ca,
        addPlotLine: ca,
        adjustTickAmount: ya,
        categories: Qa,
        getExtremes: Ya,
        getThreshold: rb,
        isXAxis: M,
        options: h,
        render: t,
        setExtremes: Ha,
        setScale: db,
        setCategories: S,
        translate: w,
        redraw: D,
        removePlotBand: v,
        removePlotLine: v,
        reversed: Cb,
        stacks: ab
      });
      for (Dc in Zc) kb(V, Dc, Zc[Dc]);
      db()
    }
    function d() {
      function m(w, J, K, E) {
        if (!r[w]) {
          J = P.text(J, aa + wa - 20, ga + 30, a.toolbar.itemStyle, 0, "right").on("click", E).attr({
            zIndex: 20
          }).add();
          r[w] = J
        }
      }
      function h(w) {
        cc(r[w].element);
        r[w] = null
      }
      var r = {};
      return {
        add: m,
        remove: h
      }
    }
    function e(m) {
      function h(ca, t) {
        ya = ja ? ca : (2 * ya + ca) / 3;
        db = ja ? t : (db + t) / 2;
        Ha.translate(ya, db);
        Ec = $a(ca - ya) > 1 || $a(t - db) > 1 ?
        function () {
          h(ca, t)
        } : null
      }
      function r() {
        ja = true;
        Ha.hide()
      }
      function w(ca) {
        var t = ca.series,
            v = m.borderColor || ca.color || t.color || "#606060",
            D, S;
        S = ca.tooltipText;
        D = ca.tooltipPos;
        J = t;
        t = W(D ? D[0] : na ? wa - ca.plotY : ca.plotX);
        ca = W(D ? D[1] : na ? pa - ca.plotX : ca.plotY);
        D = Sb(t, ca);
        if (S === false || !D) r();
        else {
          if (ja) {
            Ha.show();
            ja = false
          }
          rb.attr({
            text: S
          });
          S = rb.getBBox();
          Ga = S.width;
          xa = S.height;
          Ya.attr({
            width: Ga + 2 * ma,
            height: xa + 2 * ma,
            stroke: v
          });
          v = t - Ga + aa - 25;
          t = ca - xa + ga + 10;
          if (v < 7) {
            v = 7;
            t -= 20
          }
          if (t < 5) t = 5;
          else if (t + xa > Fa) t = Fa - xa - 5;
          h(W(v - ua), W(t - ua))
        }
      }
      var J, K = m.borderWidth,
          E = m.style,
          ma = parseInt(E.padding, 10),
          ua = K + ma,
          ja = true,
          Ga, xa, ya = 0,
          db = 0;
      E.padding = 0;
      var Ha = P.g("tooltip").attr({
        zIndex: 8
      }).add(),
          Ya = P.rect(ua, ua, 0, 0, m.borderRadius, K).attr({
          fill: m.backgroundColor,
          "stroke-width": K
        }).add(Ha).shadow(m.shadow),
          rb = P.text("", ma + ua, parseInt(E.fontSize, 10) + ma + ua).attr({
          zIndex: 1
        }).css(E).add(Ha);
      return {
        refresh: w,
        hide: r
      }
    }
    function f(m, h) {
      function r(t) {
        t = t || lb.event;
        if (!t.target) t.target = t.srcElement;
        if (t.type != "mousemove" || lb.opera) Tb = jd(Aa);
        if (Zb) {
          t.chartX = t.x;
          t.chartY = t.y
        } else if (t.layerX === Na) {
          t.chartX = t.pageX - Tb.x;
          t.chartY = t.pageY - Tb.y
        } else {
          t.chartX = t.layerX;
          t.chartY = t.layerY
        }
        return t
      }
      function w(t) {
        var v = {
          xAxis: [],
          yAxis: []
        };
        o(Sa, function (D) {
          var S = D.translate,
              M = D.isXAxis,
              ha = na ? !M : M;
          v[M ? "xAxis" : "yAxis"].push({
            axis: D,
            value: S(ha ? t.chartX - aa : pa - t.chartY + ga, true)
          })
        });
        return v
      }
      function J(t) {
        var v = m.hoverPoint,
            D = m.hoverSeries;
        if (D && D.tracker)(t = D.tooltipPoints[na ? t.chartY : t.chartX - aa]) && t != v && t.onMouseOver()
      }
      function K() {
        var t = m.hoverSeries,
            v = m.hoverPoint;
        v && v.onMouseOut();
        t && t.onMouseOut();
        Fc && Fc.hide()
      }
      function E() {
        if (ya) {
          var t = {
            xAxis: [],
            yAxis: []
          },
              v = ya.getBBox(),
              D = v.x - aa,
              S = v.y - ga;
          if (xa) {
            o(Sa, function (M) {
              var ha = M.translate,
                  X = M.isXAxis,
                  ab = na ? !X : X,
                  V = ha(ab ? D : pa - S - v.height, true);
              ha = ha(ab ? D + v.width : pa - S, true);
              t[X ? "xAxis" : "yAxis"].push({
                axis: M,
                min: Mb(V, ha),
                max: ub(V, ha)
              })
            });
            za(m, "selection", t, Gc)
          }
          ya = ya.destroy()
        }
        m.mouseIsDown = Hc = xa = false
      }
      function ma() {
        var t = true;
        Aa.onmousedown = function (v) {
          v = r(v);
          v.preventDefault && v.preventDefault();
          m.mouseIsDown = Hc = true;
          ja = v.chartX;
          Ga = v.chartY;
          if (jc && (Ha || Ya)) ya || (ya = P.rect(aa, ga, rb ? 1 : wa, ca ? 1 : pa, 0).attr({
            fill: "rgba(69,114,167,0.25)",
            zIndex: 7
          }).add())
        };
        Aa.onmousemove = function (v) {
          v = r(v);
          v.returnValue = false;
          var D = v.chartX,
              S = v.chartY,
              M = !Sb(D - aa, S - ga);
          if (Hc) {
            xa = Math.sqrt(Math.pow(ja - D, 2) + Math.pow(Ga - S, 2)) > 10;
            if (rb) {
              v = D - ja;
              ya.attr({
                width: $a(v),
                x: (v > 0 ? 0 : v) + ja
              })
            }
            if (ca) {
              S = S - Ga;
              ya.attr({
                height: $a(S),
                y: (S > 0 ? 0 : S) + Ga
              })
            }
          } else M || J(v);
          if (M && !t) {
            K();
            E()
          }
          t = M;
          return false
        };
        Aa.onmouseup = function () {
          E()
        };
        Aa.onclick = function (v) {
          var D = m.hoverPoint;
          v = r(v);
          v.cancelBubble = true;
          if (!xa) if (D && oa(v.target, "isTracker")) {
            var S = D.plotX,
                M = D.plotY;
            R(D, {
              pageX: Tb.x + aa + (na ? wa - M : S),
              pageY: Tb.y + ga + (na ? pa - S : M)
            });
            za(m.hoverSeries || D.series, "click", R(v, {
              point: D
            }));
            D.firePointEvent("click", v)
          } else {
            R(v, w(v));
            Sb(v.chartX - aa, v.chartY - ga) && za(m, "click", v)
          }
          xa = false
        }
      }
      function ua() {
        m.trackerGroup = Ic = P.g("tracker");
        na && Ic.attr({
          width: m.plotWidth,
          height: m.plotHeight
        }).invert();
        Ic.attr({
          zIndex: 9
        }).translate(aa, ga).add()
      }
      var ja, Ga, xa, ya, db = H.zoomType,
          Ha = /x/.test(db),
          Ya = /y/.test(db),
          rb = Ha && !na || Ya && na,
          ca = Ya && !na || Ha && na;
      ua();
      if (h.enabled) m.tooltip = Fc = e(h);
      ma();
      $c = setInterval(function () {
        Ec && Ec()
      }, 32);
      R(this, {
        zoomX: Ha,
        zoomY: Ya,
        resetTracker: K
      })
    }
    function g(m) {
      var h = m.type || H.defaultSeriesType,
          r = eb[h],
          w = x.hasRendered;
      if (w) if (na && h == "column") r = eb.bar;
      else if (!na && h == "bar") r = eb.column;
      h = new r;
      h.init(x, m);
      if (!w && h.inverted) na = true;
      if (h.isCartesian) jc = h.isCartesian;
      ta.push(h);
      return h
    }
    function j(m, h) {
      var r;
      h = z(h, true);
      za(x, "addSeries", {
        options: m
      }, function () {
        r = g(m);
        r.isDirty = true;
        x.isDirty = true;
        h && x.redraw()
      });
      return r
    }
    function i() {
      H.alignTicks !== false && o(Sa, function (m) {
        m.adjustTickAmount()
      })
    }
    function l() {
      for (var m = x.isDirty, h, r = ta.length, w = r, J; w--;) {
        J = ta[w];
        if (J.isDirty && J.options.stacking) {
          h = true;
          break
        }
      }
      if (h) for (w = r; w--;) {
        J = ta[w];
        if (J.options.stacking) J.isDirty = true
      }
      o(ta, function (K) {
        if (K.isDirty) {
          K.cleanData();
          K.getSegments();
          if (K.options.legendType == "point") m = true
        }
      });
      Ob = null;
      if (jc) {
        o(Sa, function (K) {
          K.setScale()
        });
        i();
        o(Sa, function (K) {
          K.isDirty && K.redraw()
        })
      }
      o(ta, function (K) {
        K.isDirty && K.visible && K.redraw()
      });
      if (m && Jc.renderLegend) {
        Jc.renderLegend();
        x.isDirty = false
      }
      Pb && Pb.resetTracker && Pb.resetTracker();
      za(x, "redraw")
    }

    function n(m) {
      var h = a.loading;
      if (!xb) {
        xb = Ea(Bb, {
          className: "highcharts-loading"
        }, R(h.style, {
          left: aa + Ca,
          top: ga + Ca,
          width: wa + Ca,
          height: pa + Ca,
          zIndex: 10,
          display: fb
        }), Aa);
        Ea("span", null, h.labelStyle, xb)
      }
      if (!Kc) {
        Oa(xb, {
          opacity: 0,
          display: ""
        });
        xb.getElementsByTagName("span")[0].innerHTML = m || a.lang.loading;
        Ub(xb, {
          opacity: h.style.opacity
        }, {
          duration: h.showDuration
        });
        Kc = true
      }
    }
    function u() {
      Ub(xb, {
        opacity: 0
      }, {
        duration: a.loading.hideDuration,
        complete: function () {
          Oa(xb, {
            display: fb
          })
        }
      });
      Kc = false
    }
    function A(m) {
      var h, r, w;
      for (h = 0; h < Sa.length; h++) if (Sa[h].options.id == m) return Sa[h];
      for (h = 0; h < ta.length; h++) if (ta[h].options.id == m) return ta[h];
      for (h = 0; h < ta.length; h++) {
        w = ta[h].data;
        for (r = 0; r < w.length; r++) if (w[r].id == m) return w[r]
      }
      return null
    }
    function F() {
      var m = a.xAxis || {},
          h = a.yAxis || {},
          r;
      m = pc(m);
      o(m, function (w, J) {
        w.index = J;
        w.isX = true
      });
      h = pc(h);
      o(h, function (w, J) {
        w.index = J
      });
      Sa = m.concat(h);
      x.xAxis = [];
      x.yAxis = [];
      Sa = Gb(Sa, function (w) {
        r = new c(x, w);
        x[r.isXAxis ? "xAxis" : "yAxis"].push(r);
        return r
      });
      i()
    }
    function qa() {
      var m = [];
      o(ta, function (h) {
        m = m.concat(kc(h.data, function (r) {
          return r.selected
        }))
      });
      return m
    }
    function L() {
      return kc(ta, function (m) {
        return m.selected
      })
    }
    function Z() {
      var m = a.title,
          h = m.align,
          r = a.subtitle,
          w = r.align,
          J = {
          left: 0,
          center: Va / 2,
          right: Va
          };
      m && m.text && P.text(m.text, J[h] + m.x, m.y, m.style, 0, h).attr({
        "class": "highcharts-title"
      }).add();
      r && r.text && P.text(r.text, J[w] + r.x, r.y, r.style, 0, w).attr({
        "class": "highcharts-subtitle"
      }).add()
    }
    function Ia() {
      mb = H.renderTo;
      ad = Hb + Lc++;
      if (typeof mb == "string") mb = ka.getElementById(mb);
      mb.innerHTML = "";
      if (!mb.offsetWidth) {
        yb = mb.cloneNode(0);
        Oa(yb, {
          position: Vb,
          top: "-9999px",
          display: ""
        });
        ka.body.appendChild(yb)
      }
      var m = (yb || mb).offsetHeight;
      x.chartWidth = Va = H.width || (yb || mb).offsetWidth || 600;
      x.chartHeight = Fa = H.height || (m > ga + Eb ? m : 0) || 400;
      x.plotWidth = wa = Va - aa - wc;
      x.plotHeight = pa = Fa - ga - Eb;
      x.plotLeft = aa;
      x.plotTop = ga;
      x.container = Aa = Ea(Bb, {
        className: "highcharts-container" + (H.className ? " " + H.className : ""),
        id: ad
      }, R({
        position: bd,
        overflow: zb,
        width: Va + Ca,
        height: Fa + Ca,
        textAlign: "left"
      }, H.style), yb || mb);
      x.renderer = P = H.renderer == "SVG" ? new Wb(Aa, Va, Fa) : new cd(Aa, Va, Fa)
    }
    function sb() {
      var m, h = a.labels,
          r = a.credits,
          w = H.borderWidth || 0,
          J = H.backgroundColor,
          K = H.plotBackgroundColor,
          E = H.plotBackgroundImage;
      m = 2 * w + (H.shadow ? 8 : 0);
      if (w || J) P.rect(m / 2, m / 2, Va - m, Fa - m, H.borderRadius, w).attr({
        stroke: H.borderColor,
        "stroke-width": w,
        fill: J || fb
      }).add().shadow(H.shadow);
      K && P.rect(aa, ga, wa, pa, 0).attr({
        fill: K
      }).add().shadow(H.plotShadow);
      E && P.image(E, aa, ga, wa, pa).add();
      H.plotBorderWidth && P.rect(aa, ga, wa, pa, 0, H.plotBorderWidth).attr({
        stroke: H.plotBorderColor,
        "stroke-width": H.plotBorderWidth,
        zIndex: 4
      }).add();
      jc && o(Sa, function (ma) {
        ma.render()
      });
      Z();
      h.items && o(h.items, function () {
        var ma = R(h.style, this.style),
            ua = parseInt(ma.left, 10) + aa,
            ja = parseInt(ma.top, 10) + ga + 12;
        delete ma.left;
        delete ma.top;
        P.text(this.html, ua, ja, ma).attr({
          zIndex: 2
        }).add()
      });
      o(ta, function (ma) {
        ma.render()
      });
      Jc = x.legend = new qd(x);
      if (!x.toolbar) x.toolbar = d(x);
      r.enabled && !x.credits && P.text(r.text, Va - 10, Fa - 5, r.style, 0, "right").on("click", function () {
        location.href = r.href
      }).attr({
        zIndex: 8
      }).add();
      x.hasRendered = true;
      if (yb) {
        mb.appendChild(Aa);
        cc(yb)
      }
    }
    function ob() {
      var m = ta.length;
      Ib(lb, "unload", ob);
      Ib(x);
      for (o(Sa, function (h) {
        Ib(h)
      }); m--;) ta[m].destroy();
      Aa.onmousedown = Aa.onmousemove = Aa.onmouseup = Aa.onclick = null;
      Aa.parentNode.removeChild(Aa);
      Aa = null;
      clearInterval($c);
      for (m in x) delete x[m]
    }
    function Ta() {
      var m = "onreadystatechange";
      if (!lc && ka.readyState != "complete") ka.attachEvent(m, function () {
        ka.detachEvent(m, arguments.callee);
        Ta()
      });
      else {
        Ia();
        o(a.series || [], function (h) {
          g(h)
        });
        x.inverted = na = z(na, a.chart.inverted);
        x.plotSizeX = rd = na ? pa : wa;
        x.plotSizeY = sd = na ? wa : pa;
        x.tracker = Pb = new f(x, a.tooltip);
        F();
        o(ta, function (h) {
          h.translate();
          h.setTooltipPoints()
        });
        x.render = sb;
        sb();
        za(x, "load");
        b && b(x)
      }
    }
    hc = la(hc, va.xAxis);
    Cc = la(Cc, va.yAxis);
    va.xAxis = va.yAxis = null;
    a = la(va, a);
    var H = a.chart,
        La = H.margin;
    La = typeof La == "number" ? [La, La, La, La] : La;
    var ga = z(H.marginTop, La[0]),
        wc = z(H.marginRight, La[1]),
        Eb = z(H.marginBottom, La[2]),
        aa = z(H.marginLeft, La[3]),
        mb, yb, Aa, ad, Va, Fa, x = this;
    La = H.events;
    var Mc, Nc, Sb, Fc, Hc, xb, Kc, pa, wa, rd, sd, Pb, Ic, Jc, Tb, jc = H.showAxes,
        Sa = [],
        Ob, ta = [],
        na, P, Ec, $c, Gc, dd, qd = function (m) {
        function h(p, Q) {
          var G = p.legendItem,
              N = p.legendLine,
              U = p.legendSymbol,
              Ba = Ha.color,
              Rb = Q ? E.itemStyle.color : Ba;
          p = Q ? p.color : Ba;
          G && G.css({
            color: Rb
          });
          N && N.attr({
            stroke: p
          });
          U && U.attr({
            stroke: p,
            fill: p
          })
        }
        function r(p, Q, G) {
          var N = p.legendItem,
              U = p.legendLine,
              Ba = p.legendSymbol;
          p = p.checkbox;
          N && N.attr({
            x: Q,
            y: G
          });
          U && U.translate(Q, G - 4);
          Ba && Ba.translate(Q, G);
          if (p) {
            p.x = Q;
            p.y = G
          }
        }
        function w(p) {
          for (var Q = Ga.length, G = p.checkbox; Q--;) if (Ga[Q] == p) {
            Ga.splice(Q, 1);
            break
          }
          o(["legendItem", "legendLine", "legendSymbol"], function (N) {
            p[N] && p[N].destroy()
          });
          G && cc(p.checkbox)
        }
        function J(p) {
          var Q, G, N = p.legendItem;
          G = p.series || p;
          if (!N) {
            G = /^(bar|pie|area|column)$/.test(G.type);
            p.legendItem = N = P.text(E.labelFormatter.call(p), 0, 0).css(p.visible ? ya : Ha).on("mouseover", function () {
              p.setState(pb);
              N.css(db)
            }).on("mouseout", function () {
              N.css(p.visible ? ya : Ha);
              p.setState()
            }).on("click", function () {
              var U = "legendItemClick",
                  Ba = function () {
                  p.setVisible()
                  };
              p.firePointEvent ? p.firePointEvent(U, null, Ba) : za(p, U, null, Ba)
            }).attr({
              zIndex: 2
            }).add(V);
            if (!G && p.options && p.options.lineWidth) p.legendLine = P.path([bb, -ua - ja, 0, Ja, -ja, 0]).attr({
              "stroke-width": p.options.lineWidth,
              zIndex: 2
            }).add(V);
            if (G) Q = P.rect(-ua - ja, -11, ua, 12, 2).attr({
              "stroke-width": 0,
              zIndex: 3
            }).add(V);
            else if (p.options && p.options.marker && p.options.marker.enabled) Q = P.symbol(p.symbol, -ua / 2 - ja, -4, p.options.marker.radius).attr(p.pointAttr[Ma]).attr({
              zIndex: 3
            }).add(V);
            p.legendSymbol = Q;
            h(p, p.visible);
            if (p.options && p.options.showCheckbox) {
              p.checkbox = Ea("input", {
                type: "checkbox",
                checked: p.selected,
                defaultChecked: p.selected
              }, E.itemCheckboxStyle, Aa);
              kb(p.checkbox, "click", function (U) {
                U = U.target;
                za(p, "checkboxClick", {
                  checked: U.checked
                }, function () {
                  p.select()
                })
              })
            }
          }
          r(p, D, S);
          Q = N.getBBox();
          M = S;
          p.legendItemWidth = Q = E.itemWidth || ua + ja + Q.width + rb;
          if (ma) {
            D += Q;
            jb = Xa || ub(D - v, jb);
            if (D - v + Q > (Xa || Va - 2 * Ya - v)) {
              D = v;
              S += ca
            }
          } else {
            S += ca;
            jb = Xa || ub(Q, jb)
          }
          Ga.push(p)
        }
        function K() {
          D = v;
          S = t;
          M = jb = 0;
          V || (V = P.g("legend").attr({
            zIndex: 7
          }).add());
          Db && hb.reverse();
          o(hb, function (U) {
            if (U.options.showInLegend) {
              U = U.options.legendType == "point" ? U.data : [U];
              o(U, J)
            }
          });
          Db && hb.reverse();
          nb = Xa || jb;
          Pa = M - t + ca;
          if (X || ab) {
            nb += 2 * Ya;
            Pa += 2 * Ya;
            if (ha) ha.attr({
              height: Pa,
              width: nb
            });
            else ha = P.rect(0, 0, nb, Pa, E.borderRadius, X || 0).attr({
              stroke: E.borderColor,
              "stroke-width": X || 0,
              fill: ab || fb
            }).add(V).shadow(E.shadow)
          }
          for (var p = ["left", "right", "top", "bottom"], Q, G = 4; G--;) {
            Q = p[G];
            if (xa[Q] && xa[Q] != "auto") {
              E[G < 2 ? "align" : "verticalAlign"] = Q;
              E[G < 2 ? "x" : "y"] = parseInt(xa[Q], 10) * (G % 2 ? -1 : 1)
            }
          }
          var N = Nc(R({
            width: nb,
            height: Pa
          }, E));
          V.translate(N.x, N.y);
          o(Ga, function (U) {
            var Ba = U.checkbox;
            Ba && Oa(Ba, {
              left: N.x + U.legendItemWidth + Ba.x - 40 + Ca,
              top: N.y + Ba.y - 11 + Ca
            })
          })
        }
        var E = m.options.legend;
        if (E.enabled) {
          var ma = E.layout == "horizontal",
              ua = E.symbolWidth,
              ja = E.symbolPadding,
              Ga = [],
              xa = E.style,
              ya = E.itemStyle,
              db = E.itemHoverStyle,
              Ha = E.itemHiddenStyle,
              Ya = parseInt(xa.padding, 10),
              rb = 20,
              ca = E.lineHeight || 16,
              t = 18,
              v = 4 + Ya + ua + ja,
              D, S, M, ha, X = E.borderWidth,
              ab = E.backgroundColor,
              V, jb, Xa = E.width,
              nb, Pa, hb = m.series,
              Db = E.reversed;
          K();
          return {
            colorizeItem: h,
            destroyItem: w,
            renderLegend: K
          }
        }
        };
    Sb = function (m, h) {
      var r = 0,
          w = 0;
      return m >= r && m <= r + wa && h >= w && h <= w + pa
    };
    dd = function () {
      za(x, "selection", {
        resetSelection: true
      }, Gc);
      x.toolbar.remove("zoom")
    };
    Gc = function (m) {
      var h = va.lang;
      x.toolbar.add("zoom", h.resetZoom, h.resetZoomTitle, dd);
      !m || m.resetSelection ? o(Sa, function (r) {
        r.setExtremes(null, null, false)
      }) : o(m.xAxis.concat(m.yAxis), function (r) {
        var w = r.axis;
        if (x.tracker[w.isXAxis ? "zoomX" : "zoomY"]) w.setExtremes(r.min, r.max, false)
      });
      l()
    };
    Nc = function (m) {
      var h = m.align,
          r = m.verticalAlign,
          w = m.x || 0,
          J = m.y || 0,
          K = {
          x: w || 0,
          y: J || 0
          };
      if (/^(right|center)$/.test(h)) K.x = (Va - m.width) / {
        right: 1,
        center: 2
      }[h] + w;
      if (/^(bottom|middle)$/.test(r)) K.y = (Fa - m.height) / {
        bottom: 1,
        middle: 2
      }[r] + J;
      return K
    };
    mc = tb = 0;
    kb(lb, "unload", ob);
    if (La) for (Mc in La) kb(x, Mc, La[Mc]);
    x.options = a;
    x.series = ta;
    x.addSeries = j;
    x.destroy = ob;
    x.get = A;
    x.getAlignment = Nc;
    x.getSelectedPoints = qa;
    x.getSelectedSeries = L;
    x.hideLoading = u;
    x.isInsidePlot = Sb;
    x.redraw = l;
    x.showLoading = n;
    Ta()
  }
  function ed(a) {
    var b = [],
        c = [],
        d;
    for (d = 0; d < a.length; d++) {
      b[d] = a[d].plotX;
      c[d] = a[d].plotY
    }
    this.xdata = b;
    this.ydata = c;
    a = [];
    this.y2 = [];
    var e = c.length;
    this.n = e;
    this.y2[0] = 0;
    this.y2[e - 1] = 0;
    a[0] = 0;
    for (d = 1; d < e - 1; d++) {
      var f = b[d + 1] - b[d - 1];
      f = (b[d] - b[d - 1]) / f;
      var g = f * this.y2[d - 1] + 2;
      this.y2[d] = (f - 1) / g;
      a[d] = (c[d + 1] - c[d]) / (b[d + 1] - b[d]) - (c[d] - c[d - 1]) / (b[d] - b[d - 1]);
      a[d] = (6 * a[d] / (b[d + 1] - b[d - 1]) - f * a[d - 1]) / g
    }
    for (b = e - 2; b >= 0; b--) this.y2[b] = this.y2[b] * this.y2[b + 1] + a[b]
  }
  var ka = document,
      lb = window,
      Ka = Math,
      W = Ka.round,
      ib = Ka.floor,
      xc = Ka.ceil,
      ub = Ka.max,
      Mb = Ka.min,
      $a = Ka.abs,
      Jb = Ka.cos,
      Kb = Ka.sin,
      ra = navigator.userAgent,
      Zb = /msie/i.test(ra) && !lb.opera,
      td = /AppleWebKit/.test(ra),
      lc = lb.SVGAngle || ka.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure", "1.1"),
      tb, mc, ud = {},
      Lc = 0,
      cb = 1,
      dc, va, ic, Na, Bb = "div",
      Vb = "absolute",
      bd = "relative",
      zb = "hidden",
      Hb = "highcharts-",
      Xb = "visible",
      Ca = "px",
      fb = "none",
      bb = "M",
      Ja = "L",
      fd = "rgba(192,192,192," + (lc ? 1.0E-6 : 0.0020) + ")",
      Ma = "",
      pb = "hover",
      Ab = "select",
      $b, sc, tc, uc, Qb, ac, bc, Qc, Rc, vc, Sc, Tc, Da = lb.HighchartsAdapter,
      sa = Da || {},
      o = sa.each,
      kc = sa.grep,
      Gb = sa.map,
      la = sa.merge,
      rc = sa.hyphenate,
      kb = sa.addEvent,
      Ib = sa.removeEvent,
      za = sa.fireEvent,
      Ub = sa.animate,
      nc = sa.stop;
  sa = sa.getAjax;
  var eb = {};
  if (!Da && lb.jQuery) {
    var Za = jQuery;
    o = function (a, b) {
      for (var c = 0, d = a.length; c < d; c++) if (b.call(a[c], a[c], c, a) === false) return c
    };
    kc = Za.grep;
    Gb = function (a, b) {
      for (var c = [], d = 0, e = a.length; d < e; d++) c[d] = b.call(a[d], a[d], d, a);
      return c
    };
    la = function () {
      var a = arguments;
      return Za.extend(true, null, a[0], a[1], a[2], a[3])
    };
    rc = function (a) {
      return a.replace(/([A-Z])/g, function (b, c) {
        return "-" + c.toLowerCase()
      })
    };
    kb = function (a, b, c) {
      Za(a).bind(b, c)
    };
    Ib = function (a, b, c) {
      var d = ka.removeEventListener ? "removeEventListener" : "detachEvent";
      if (ka[d] && !a[d]) a[d] = function () {};
      Za(a).unbind(b, c)
    };
    za = function (a, b, c, d) {
      var e = Za.Event(b),
          f = "detached" + b;
      R(e, c);
      if (a[b]) {
        a[f] = a[b];
        a[b] = null
      }
      Za(a).trigger(e);
      if (a[f]) {
        a[b] = a[f];
        a[f] = null
      }
      d && !e.isDefaultPrevented() && d(e)
    };
    Ub = function (a, b, c) {
      a = Za(a);
      a.stop();
      a.animate(b, c)
    };
    nc = function (a) {
      Za(a).stop()
    };
    sa = function (a, b) {
      Za.get(a, null, b)
    };
    Za.extend(Za.easing, {
      easeOutQuad: function (a, b, c, d, e) {
        return -d * (b /= e) * (b - 2) + c
      }
    });
    var vd = jQuery.fx.step._default,
        wd = jQuery.fx.prototype.cur;
    Za.fx.step._default = function (a) {
      var b = a.elem;
      b.attr ? b.attr(a.prop, a.now) : vd.apply(this, arguments)
    };
    Za.fx.prototype.cur = function () {
      var a = this.elem;
      return a = a.attr ? a.attr(this.prop) : wd.apply(this, arguments)
    }
  } else if (!Da && lb.MooTools) {
    o = $each;
    Gb = function (a, b) {
      return a.map(b)
    };
    kc = function (a, b) {
      return a.filter(b)
    };
    la = $merge;
    rc = function (a) {
      return a.hyphenate()
    };
    kb = function (a, b, c) {
      if (typeof b == "string") {
        if (b == "unload") b = "beforeunload";
        if (!a.addEvent) if (a.nodeName) a = $(a);
        else R(a, new Events);
        a.addEvent(b, c)
      }
    };
    Ib = function (a, b, c) {
      if (b) {
        if (b == "unload") b = "beforeunload";
        a.removeEvent(b, c)
      }
    };
    za = function (a, b, c, d) {
      b = new Event({
        type: b,
        target: a
      });
      b = R(b, c);
      b.preventDefault = function () {
        d = null
      };
      a.fireEvent && a.fireEvent(b.type, b);
      d && d(b)
    };
    Ub = function (a, b, c) {
      var d = a.attr;
      if (d && !a.setStyle) {
        a.setStyle = a.getStyle = a.attr;
        a.$family = a.uid = true
      }
      nc(a);
      c = new Fx.Morph(d ? a : $(a), R(c, {
        transition: Fx.Transitions.Quad.easeInOut
      }));
      c.start(b);
      a.fx = c
    };
    nc = function (a) {
      a.fx && a.fx.cancel()
    };
    sa = function (a, b) {
      (new Request({
        url: a,
        method: "get",
        onSuccess: b
      })).send()
    }
  }
  Da = {
    enabled: true,
    align: "center",
    x: 0,
    y: 15,
    style: {
      color: "#666",
      fontSize: "11px"
    }
  };
  va = {
    colors: ["#4572A7", "#AA4643", "#89A54E", "#80699B", "#3D96AE", "#DB843D", "#92A8CD", "#A47D7C", "#B5CA92"],
    symbols: ["circle", "diamond", "square", "triangle", "triangle-down"],
    lang: {
      loading: "Loading...",
      months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
      weekdays: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      decimalPoint: ".",
      resetZoom: "Reset zoom",
      resetZoomTitle: "Reset zoom level 1:1",
      thousandsSep: ","
    },
    global: {
      useUTC: true
    },
    chart: {
      margin: [50, 50, 90, 80],
      borderColor: "#4572A7",
      borderRadius: 5,
      defaultSeriesType: "line",
      ignoreHiddenSeries: true,
      style: {
        fontFamily: '"Lucida Grande", "Lucida Sans Unicode", Verdana, Arial, Helvetica, sans-serif',
        fontSize: "12px"
      },
      backgroundColor: "#FFFFFF",
      plotBorderColor: "#C0C0C0"
    },
    title: {
      text: "Chart title",
      x: 0,
      y: 20,
      align: "center",
      style: {
        color: "#3E576F",
        fontSize: "16px"
      }
    },
    subtitle: {
      text: "",
      x: 0,
      y: 40,
      align: "center",
      style: {
        color: "#6D869F"
      }
    },
    plotOptions: {
      line: {
        allowPointSelect: false,
        showCheckbox: false,
        animation: true,
        events: {},
        lineWidth: 2,
        shadow: true,
        marker: {
          enabled: true,
          lineWidth: 0,
          radius: 4,
          lineColor: "#FFFFFF",
          states: {
            hover: {},
            select: {
              fillColor: "#FFFFFF",
              lineColor: "#000000",
              lineWidth: 2
            }
          }
        },
        point: {
          events: {}
        },
        dataLabels: la(Da, {
          enabled: false,
          y: -6,
          formatter: function () {
            return this.y
          }
        }),
        showInLegend: true,
        states: {
          hover: {
            lineWidth: 3,
            marker: {}
          },
          select: {
            marker: {}
          }
        },
        stickyTracking: true
      }
    },
    labels: {
      style: {
        position: Vb,
        color: "#3E576F"
      }
    },
    legend: {
      enabled: true,
      align: "center",
      layout: "horizontal",
      labelFormatter: function () {
        return this.name
      },
      borderWidth: 1,
      borderColor: "#909090",
      borderRadius: 5,
      shadow: false,
      style: {
        padding: "5px"
      },
      itemStyle: {
        cursor: "pointer",
        color: "#3E576F"
      },
      itemHoverStyle: {
        cursor: "pointer",
        color: "#000000"
      },
      itemHiddenStyle: {
        color: "#C0C0C0"
      },
      itemCheckboxStyle: {
        position: Vb,
        width: "13px",
        height: "13px"
      },
      symbolWidth: 16,
      symbolPadding: 5,
      verticalAlign: "bottom",
      x: 15,
      y: -15
    },
    loading: {
      hideDuration: 100,
      labelStyle: {
        fontWeight: "bold",
        position: bd,
        top: "1em"
      },
      showDuration: 100,
      style: {
        position: Vb,
        backgroundColor: "white",
        opacity: 0.5,
        textAlign: "center"
      }
    },
    tooltip: {
      enabled: true,
      formatter: function () {
        var a = this,
            b = a.series,
            c = b.xAxis,
            d = a.x;
        return "<b>" + (a.point.name || b.name) + "</b><br/>" + (T(d) ? "X value: " + (c && c.options.type == "datetime" ? ic(null, d) : d) + "<br/>" : "") + "Y value: " + a.y
      },
      backgroundColor: "rgba(255, 255, 255, .85)",
      borderWidth: 2,
      borderRadius: 5,
      shadow: true,
      snap: 10,
      style: {
        color: "#333333",
        fontSize: "12px",
        padding: "5px",
        whiteSpace: "nowrap"
      }
    },
    toolbar: {
      itemStyle: {
        color: "#4572A7",
        cursor: "pointer"
      }
    },
    credits: {
      enabled: true,
      text: "Highcharts.com",
      href: "http://www.highcharts.com",
      style: {
        cursor: "pointer",
        color: "#909090",
        fontSize: "10px"
      }
    }
  };
  var hc = {
    dateTimeLabelFormats: {
      second: "%H:%M:%S",
      minute: "%H:%M",
      hour: "%H:%M",
      day: "%e. %b",
      week: "%e. %b",
      month: "%b '%y",
      year: "%Y"
    },
    endOnTick: false,
    gridLineColor: "#C0C0C0",
    labels: Da,
    lineColor: "#C0D0E0",
    lineWidth: 1,
    max: null,
    min: null,
    minPadding: 0.01,
    maxPadding: 0.01,
    maxZoom: null,
    minorGridLineColor: "#E0E0E0",
    minorGridLineWidth: 1,
    minorTickColor: "#A0A0A0",
    minorTickLength: 2,
    minorTickPosition: "outside",
    minorTickWidth: 1,
    showFirstLabel: true,
    showLastLabel: false,
    startOfWeek: 1,
    startOnTick: false,
    tickColor: "#C0D0E0",
    tickLength: 5,
    tickmarkPlacement: "between",
    tickPixelInterval: 100,
    tickPosition: "outside",
    tickWidth: 1,
    title: {
      align: "middle",
      margin: 35,
      style: {
        color: "#6D869F",
        fontWeight: "bold"
      }
    },
    type: "linear"
  },
      Cc = la(hc, {
      endOnTick: true,
      gridLineWidth: 1,
      tickPixelInterval: 72,
      showLastLabel: true,
      labels: {
        align: "right",
        x: -8,
        y: 3
      },
      lineWidth: 0,
      maxPadding: 0.05,
      minPadding: 0.05,
      startOnTick: true,
      tickWidth: 0,
      title: {
        margin: 40,
        rotation: 270,
        text: "Y-values"
      }
    }),
      pd = {
      labels: {
        align: "right",
        x: -8,
        y: 3
      },
      title: {
        rotation: 270
      }
      },
      od = {
      labels: {
        align: "left",
        x: 8,
        y: 3
      },
      title: {
        rotation: 90
      }
      },
      Yc = {
      labels: {
        align: "center",
        x: 0,
        y: 14
      },
      title: {
        rotation: 0
      }
      },
      nd = la(Yc, {
      labels: {
        y: -5
      }
    });
  Da = va.plotOptions;
  sa = Da.line;
  Da.spline = la(sa);
  Da.scatter = la(sa, {
    lineWidth: 0,
    states: {
      hover: {
        lineWidth: 0
      }
    }
  });
  Da.area = la(sa, {});
  Da.areaspline = la(Da.area);
  Da.column = la(sa, {
    borderColor: "#FFFFFF",
    borderWidth: 1,
    borderRadius: 0,
    groupPadding: 0.2,
    marker: null,
    pointPadding: 0.1,
    minPointLength: 0,
    states: {
      hover: {
        brightness: 0.1,
        shadow: false
      },
      select: {
        color: "#C0C0C0",
        borderColor: "#000000",
        shadow: false
      }
    }
  });
  Da.bar = la(Da.column, {
    dataLabels: {
      align: "left",
      x: 5,
      y: 0
    }
  });
  Da.pie = la(sa, {
    borderColor: "#FFFFFF",
    borderWidth: 1,
    center: ["50%", "50%"],
    colorByPoint: true,
    legendType: "point",
    marker: null,
    size: "90%",
    slicedOffset: 10,
    states: {
      hover: {
        brightness: 0.1,
        shadow: false
      }
    }
  });
  Pc();
  var Lb = function (a) {
      function b(j) {
        if (g = /rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]?(?:\.[0-9]+)?)\s*\)/.exec(j)) f = [parseInt(g[1], 10), parseInt(g[2], 10), parseInt(g[3], 10), parseFloat(g[4], 10)];
        else if (g = /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(j)) f = [parseInt(g[1], 16), parseInt(g[2], 16), parseInt(g[3], 16), 1]
      }
      function c(j) {
        return j = f && !isNaN(f[0]) ? j == "rgb" ? "rgb(" + f[0] + "," + f[1] + "," + f[2] + ")" : j == "a" ? f[3] : "rgba(" + f.join(",") + ")" : a
      }
      function d(j) {
        if (typeof j == "number" && j !== 0) for (var i = 0; i < 3; i++) {
          f[i] += parseInt(j * 255, 10);
          if (f[i] < 0) f[i] = 0;
          if (f[i] > 255) f[i] = 255
        }
        return this
      }
      function e(j) {
        f[3] = j;
        return this
      }
      var f = [],
          g;
      b(a);
      return {
        get: c,
        brighten: d,
        setOpacity: e
      }
      };
  ic = function (a, b, c) {
    function d(A) {
      return A.toString().replace(/^([0-9])$/, "0$1")
    }
    if (!T(b) || isNaN(b)) return "Invalid date";
    a = z(a, "%Y-%m-%d %H:%M:%S");
    b = new Date(b * cb);
    var e = b[tc](),
        f = b[uc](),
        g = b[Qb](),
        j = b[ac](),
        i = b[bc](),
        l = va.lang,
        n = l.weekdays;
    l = l.months;
    b = {
      a: n[f].substr(0, 3),
      A: n[f],
      d: d(g),
      e: g,
      b: l[j].substr(0, 3),
      B: l[j],
      m: d(j + 1),
      y: i.toString().substr(2, 2),
      Y: i,
      H: d(e),
      I: d(e % 12 || 12),
      l: e % 12 || 12,
      M: d(b[sc]()),
      p: e < 12 ? "AM" : "PM",
      P: e < 12 ? "am" : "pm",
      S: d(b.getSeconds())
    };
    for (var u in b) a = a.replace("%" + u, b[u]);
    return c ? a.substr(0, 1).toUpperCase() + a.substr(1) : a
  };
  ec.prototype = {
    init: function (a, b) {
      this.element = ka.createElementNS("http://www.w3.org/2000/svg", b);
      this.renderer = a
    },
    animate: function (a, b) {
      Ub(this, a, b)
    },
    attr: function (a, b) {
      var c, d, e, f = this.element,
          g = f.nodeName,
          j = this.renderer,
          i, l = this.shadows,
          n, u = this;
      if (typeof a == "string" && T(b)) {
        c = a;
        a = {};
        a[c] = b
      }
      if (typeof a == "string") {
        c = a;
        if (g == "circle") c = {
          x: "cx",
          y: "cy"
        }[c] || c;
        else if (c == "strokeWidth") c = "stroke-width";
        u = parseFloat(oa(f, c) || this[c] || 0)
      } else for (c in a) {
        b = a[c];
        if (c == "d") {
          if (b && b.join) b = b.join(" ");
          if (/(NaN|  |^$)/.test(b)) b = "M 0 0"
        } else if (c == "x" && g == "text") for (d = 0; d < f.childNodes.length; d++) {
          e = f.childNodes[d];
          oa(e, "x") == oa(f, "x") && oa(e, "x", b)
        } else if (c == "fill") b = j.color(b, f, c);
        else if (g == "circle") c = {
          x: "cx",
          y: "cy"
        }[c] || c;
        else if (c == "translateX" || c == "translateY") {
          this[c] = b;
          this.updateTransform();
          i = true
        } else if (c == "stroke") b = j.color(b, f, c);
        else if (c == "isTracker") this[c] = b;
        if (c == "strokeWidth") c = "stroke-width";
        if (td && c == "stroke-width" && b === 0) b = 1.0E-6;
        if (this.symbolName && /^(x|y|r|start|end|innerR)/.test(c)) {
          if (!n) {
            this.symbolAttr(a);
            n = true
          }
          i = true
        }
        if (l && /^(width|height|visibility|x|y|d)$/.test(c)) for (d = l.length; d--;) oa(l[d], c, b);
        if (c == "text") j.buildText(f, b);
        else i || oa(f, c, b)
      }
      return u
    },
    symbolAttr: function (a) {
      var b = this;
      b.x = z(a.x, b.x);
      b.y = parseFloat(z(a.y, b.y));
      b.r = z(a.r, b.r);
      b.start = z(a.start, b.start);
      b.end = z(a.end, b.end);
      b.width = z(a.width, b.width);
      b.height = parseFloat(z(a.height, b.height));
      b.innerR = z(a.innerR, b.innerR);
      b.attr({
        d: b.renderer.symbols[b.symbolName](b.x, b.y, b.r, {
          start: b.start,
          end: b.end,
          width: b.width,
          height: b.height,
          innerR: b.innerR
        })
      })
    },
    clip: function (a) {
      return this.attr("clip-path", "url(" + this.renderer.url + "#" + a.id + ")")
    },
    css: function (a) {
      var b = this;
      if (a && a.color) a.fill = a.color;
      a = R(b.styles, a);
      b.attr({
        style: qc(a)
      });
      b.styles = a;
      return b
    },
    on: function (a, b) {
      this.element["on" + a] = b;
      return this
    },
    translate: function (a, b) {
      var c = this;
      c.translateX = a;
      c.translateY = b;
      c.updateTransform();
      return c
    },
    invert: function () {
      var a = this;
      a.inverted = true;
      a.updateTransform();
      return a
    },
    updateTransform: function () {
      var a = this,
          b = a.translateX || 0,
          c = a.translateY || 0,
          d = a.inverted,
          e = [];
      if (d) {
        b += a.attr("width");
        c += a.attr("height")
      }
      if (b || c) e.push("translate(" + b + "," + c + ")");
      d && e.push("rotate(90) scale(-1,1)");
      e.length && oa(a.element, "transform", e.join(" "))
    },
    toFront: function () {
      var a = this.element;
      a.parentNode.appendChild(a);
      return this
    },
    getBBox: function () {
      return this.element.getBBox()
    },
    show: function () {
      return this.attr({
        visibility: Xb
      })
    },
    hide: function () {
      return this.attr({
        visibility: zb
      })
    },
    add: function (a) {
      var b = this.renderer,
          c = a || b;
      b = c.element || b.box;
      var d = b.childNodes,
          e = this.element,
          f = oa(e, "zIndex"),
          g;
      this.parentInverted = a && a.inverted;
      if (f) {
        c.handleZ = true;
        f = parseInt(f, 10)
      }
      if (c.handleZ) for (g = 0; g < d.length; g++) {
        a = d[g];
        c = oa(a, "zIndex");
        if (a != e && (parseInt(c, 10) > f || !T(f) && T(c))) {
          b.insertBefore(e, a);
          return this
        }
      }
      b.appendChild(e);
      return this
    },
    destroy: function () {
      var a = this,
          b = a.element,
          c = a.shadows,
          d = b.parentNode,
          e;
      b.onclick = b.onmouseout = b.onmouseover = b.onmousemove = null;
      nc(a);
      d && d.removeChild(b);
      c && o(c, function (f) {
        (d = f.parentNode) && d.removeChild(f)
      });
      for (e in a) delete a[e];
      return null
    },
    empty: function () {
      for (var a = this.element, b = a.childNodes, c = b.length; c--;) a.removeChild(b[c])
    },
    shadow: function (a) {
      var b = [],
          c, d = this.element,
          e = this.parentInverted ? "(-1,-1)" : "(1,1)";
      if (a) {
        for (a = 1; a <= 3; a++) {
          c = d.cloneNode(0);
          oa(c, {
            isShadow: "true",
            stroke: "rgb(0, 0, 0)",
            "stroke-opacity": 0.05 * a,
            "stroke-width": 7 - 2 * a,
            transform: "translate" + e,
            fill: fb
          });
          d.parentNode.insertBefore(c, d);
          b.push(c)
        }
        this.shadows = b
      }
      return this
    }
  };
  var Wb = function () {
      this.init.apply(this, arguments)
      };
  Wb.prototype = {
    init: function (a, b, c) {
      var d = ka.createElementNS("http://www.w3.org/2000/svg", "svg"),
          e = location;
      oa(d, {
        width: b,
        height: c,
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.1"
      });
      a.appendChild(d);
      this.Element = ec;
      this.box = d;
      this.url = Zb ? "" : e.href.replace(/#.*?$/, "");
      this.defs = this.createElement("defs").add()
    },
    createElement: function (a) {
      var b = new this.Element;
      b.init(this, a);
      return b
    },
    buildText: function (a, b) {
      b = b.toString().replace(/<(b|strong)>/g, '<span style="font-weight:bold">').replace(/<(i|em)>/g, '<span style="font-style:italic">').replace(/<a/g, "<span").replace(/<\/(b|strong|i|em|a)>/g, "</span>").split(/<br[^>]?>/g);
      for (var c = a.childNodes, d = /style="([^"]+)"/, e = /href="([^"]+)"/, f = oa(a, "x"), g = c.length; g--;) a.removeChild(c[g]);
      o(b, function (j, i) {
        var l, n = 0;
        j = j.replace(/<span/g, "|||<span").replace(/<\/span>/g, "</span>|||");
        l = j.split("|||");
        o(l, function (u) {
          if (u !== "" || l.length == 1) {
            var A = {},
                F = ka.createElementNS("http://www.w3.org/2000/svg", "tspan");
            d.test(u) && oa(F, "style", u.match(d)[1].replace(/(;| |^)color([ :])/, "$1fill$2"));
            if (e.test(u)) {
              oa(F, "onclick", 'location.href="' + u.match(e)[1] + '"');
              Oa(F, {
                cursor: "pointer"
              })
            }
            u = u.replace(/<(.|\n)*?>/g, "");
            F.appendChild(ka.createTextNode(u || " "));
            if (n) A.dx = 3;
            else A.x = f;
            if (i && !n) A.dy = 16;
            oa(F, A);
            a.appendChild(F);
            n++
          }
        })
      })
    },
    crispLine: function (a, b) {
      if (a[1] == a[4]) a[1] = a[4] = W(a[1]) + b % 2 / 2;
      if (a[2] == a[5]) a[2] = a[5] = W(a[2]) + b % 2 / 2;
      return a
    },
    path: function (a) {
      return this.createElement("path").attr({
        d: a,
        fill: fb
      })
    },
    circle: function (a, b, c) {
      a = typeof a == "object" ? a : {
        x: a,
        y: b,
        r: c
      };
      return this.createElement("circle").attr(a)
    },
    arc: function (a, b, c, d, e, f) {
      if (typeof a == "object") {
        b = a.y;
        c = a.r;
        d = a.innerR;
        e = a.start;
        f = a.end;
        a = a.x
      }
      return this.symbol("arc", a || 0, b || 0, c || 0, {
        innerR: d || 0,
        start: e || 0,
        end: f || 0
      })
    },
    rect: function (a, b, c, d, e, f) {
      if (arguments.length > 1) {
        var g = (f || 0) % 2 / 2;
        a = W(a || 0) + g;
        b = W(b || 0) + g;
        c = W((c || 0) - 2 * g);
        d = W((d || 0) - 2 * g)
      }
      g = typeof a == "object" ? a : {
        x: a,
        y: b,
        width: ub(c, 0),
        height: ub(d, 0)
      };
      return this.createElement("rect").attr(R(g, {
        rx: e || g.r,
        ry: e || g.r,
        fill: fb
      }))
    },
    g: function (a) {
      return this.createElement("g").attr(T(a) && {
        "class": Hb + a
      })
    },
    image: function (a, b, c, d, e) {
      b = this.createElement("image").attr({
        x: b,
        y: c,
        width: d,
        height: e,
        preserveAspectRatio: fb
      });
      b.element.setAttributeNS("http://www.w3.org/1999/xlink", "href", a);
      return b
    },
    symbol: function (a, b, c, d, e) {
      var f, g = this.symbols[a];
      g = g && g(b, c, d, e);
      var j = /^url\((.*?)\)$/;
      if (g) {
        f = this.path(g);
        R(f, {
          symbolName: a,
          x: b,
          y: c,
          r: d
        });
        e && R(f, e)
      } else if (j.test(a)) {
        a = a.match(j)[1];
        f = this.image(a).attr({
          visibility: zb
        });
        Ea("img", {
          onload: function () {
            var i = this;
            i = ud[i.src] || [i.width, i.height];
            f.attr({
              x: W(b - i[0] / 2) + Ca,
              y: W(c - i[1] / 2) + Ca,
              width: i[0],
              height: i[1],
              visibility: "inherit"
            })
          },
          src: a
        })
      } else f = this.circle(b, c, d);
      return f
    },
    symbols: {
      square: function (a, b, c) {
        c = 0.707 * c;
        return [bb, a - c, b - c, Ja, a + c, b - c, a + c, b + c, a - c, b + c, "Z"]
      },
      triangle: function (a, b, c) {
        return [bb, a, b - 1.33 * c, Ja, a + c, b + 0.67 * c, a - c, b + 0.67 * c, "Z"]
      },
      "triangle-down": function (a, b, c) {
        return [bb, a, b + 1.33 * c, Ja, a - c, b - 0.67 * c, a + c, b - 0.67 * c, "Z"]
      },
      diamond: function (a, b, c) {
        return [bb, a, b - c, Ja, a + c, b, a, b + c, a - c, b, "Z"]
      },
      arc: function (a, b, c, d) {
        var e = Math.PI,
            f = d.start,
            g = d.end - 1.0E-6,
            j = d.innerR,
            i = Jb(f),
            l = Kb(f),
            n = Jb(g);
        g = Kb(g);
        d = d.end - f < e ? 0 : 1;
        return [bb, a + c * i, b + c * l, "A", c, c, 0, d, 1, a + c * n, b + c * g, Ja, a + j * n, b + j * g, "A", j, j, 0, d, 0, a + j * i, b + j * l, "Z"]
      }
    },
    clipRect: function (a, b, c, d) {
      var e = Hb + Lc++,
          f = this.createElement("clipPath").attr({
          id: e
        }).add(this.defs);
      a = this.rect(a, b, c, d, 0).add(f);
      a.id = e;
      return a
    },
    color: function (a, b, c) {
      var d, e = /^rgba/;
      if (a && a.linearGradient) {
        var f = this;
        b = "linearGradient";
        c = a[b];
        var g = Hb + Lc++,
            j, i, l;
        j = f.createElement(b).attr({
          id: g,
          gradientUnits: "userSpaceOnUse",
          x1: c[0],
          y1: c[1],
          x2: c[2],
          y2: c[3]
        }).add(f.defs);
        o(a.stops, function (n) {
          if (e.test(n[1])) {
            d = Lb(n[1]);
            i = d.get("rgb");
            l = d.get("a")
          } else {
            i = n[1];
            l = 1
          }
          f.createElement("stop").attr({
            offset: n[0],
            "stop-color": i,
            "stop-opacity": l
          }).add(j)
        });
        return "url(" + this.url + "#" + g + ")"
      } else if (e.test(a)) {
        d = Lb(a);
        oa(b, c + "-opacity", d.get("a"));
        return d.get("rgb")
      } else return a
    },
    text: function (a, b, c, d, e, f) {
      d = d || {};
      f = f || "left";
      e = e || 0;
      var g = d.color || "#000000",
          j = va.chart.style;
      b = W(z(b, 0));
      c = W(z(c, 0));
      R(d, {
        fontFamily: d.fontFamily || j.fontFamily,
        fontSize: d.fontSize || j.fontSize
      });
      d = qc(d);
      a = {
        x: b,
        y: c,
        text: a,
        fill: g,
        style: d.replace(/"/g, "'")
      };
      if (e || f != "left") a = R(a, {
        "text-anchor": {
          left: "start",
          center: "middle",
          right: "end"
        }[f],
        transform: "rotate(" + e + " " + b + " " + c + ")"
      });
      return this.createElement("text").attr(a)
    }
  };
  var Oc;
  if (!lc) {
    var xd = gb(ec, {
      init: function (a, b) {
        var c = ["<", b, ' filled="f" stroked="f"'],
            d = ["position: ", Vb, ";"];
        if (b == "shape" || b == Bb) d.push("left:0;top:0;width:10px;height:10px");
        c.push(' style="', d.join(""), '"/>');
        if (b) {
          c = b == Bb || b == "span" || b == "img" ? c.join("") : a.prepVML(c);
          this.element = Ea(c)
        }
        this.renderer = a
      },
      add: function (a) {
        var b = this,
            c = b.renderer,
            d = b.element,
            e = c.box;
        c = a && a.inverted;
        a = a ? a.element || a : e;
        if (c) {
          c = a.style;
          Oa(d, {
            flip: "x",
            left: parseInt(c.width, 10) - 10,
            top: parseInt(c.height, 10) - 10,
            rotation: -90
          })
        }
        a.appendChild(d);
        return b
      },
      attr: function (a, b) {
        var c, d, e, f = this.element,
            g = f.style,
            j = f.nodeName,
            i = this.renderer,
            l = this.symbolName,
            n, u = this.shadows,
            A = ka.documentMode,
            F, qa = this;
        if (typeof a == "string" && T(b)) {
          c = a;
          a = {};
          a[c] = b
        }
        if (typeof a == "string") {
          c = a;
          qa = c == "strokeWidth" || c == "stroke-width" ? f.strokeweight : z(this[c], parseInt(g[{
            x: "left",
            y: "top"
          }[c] || c], 10))
        } else for (c in a) {
          d = a[c];
          F = false;
          if (l && /^(x|y|r|start|end|width|height|innerR)/.test(c)) {
            if (!n) {
              this.symbolAttr(a);
              n = true
            }
            F = true
          } else if (c == "d") {
            e = d.length;
            for (F = []; e--;) F[e] = typeof d[e] == "number" ? W(d[e] * 10) - 5 : d[e] == "Z" ? "x" : d[e];
            d = F.join(" ") || "x";
            f.path = d;
            if (u) for (e = u.length; e--;) u[e].path = d;
            F = true
          } else if (c == "zIndex" || c == "visibility") {
            g[c] = d;
            A == 8 && c == "visibility" && j == "DIV" && o(f.childNodes, function (L) {
              Oa(L, {
                visibility: d
              })
            });
            F = true
          } else if (/^(width|height)$/.test(c)) {
            g[c] = d;
            this.updateClipping && this.updateClipping();
            F = true
          } else if (/^(x|y)$/.test(c)) {
            if (c == "y" && f.tagName == "SPAN" && f.lineHeight) d -= f.lineHeight;
            g[{
              x: "left",
              y: "top"
            }[c]] = d
          } else if (c == "class") f.className = d;
          else if (c == "stroke") {
            d = i.color(d, f, c);
            c = "strokecolor"
          } else if (c == "stroke-width" || c == "strokeWidth") {
            f.stroked = d ? true : false;
            c = "strokeweight";
            if (typeof d == "number") d += Ca
          } else if (c == "fill") if (j == "SPAN") g.color = d;
          else {
            f.filled = d != fb ? true : false;
            d = i.color(d, f, c);
            c = "fillcolor"
          } else if (c == "translateX" || c == "translateY") {
            this[c] = b;
            this.updateTransform();
            F = true
          }
          if (u && c == "visibility") for (e = u.length; e--;) u[e].style[c] = d;
          if (c == "text") f.innerHTML = d;
          else if (!F) if (A == 8) f[c] = d;
          else oa(f, c, d)
        }
        return qa
      },
      clip: function (a) {
        var b = this,
            c = a.members,
            d = c.length;
        c.push(b);
        b.destroyClip = function () {
          c.splice(d, 1)
        };
        return b.css(a.getCSS(b.inverted))
      },
      css: function (a) {
        var b = this;
        Oa(b.element, a);
        return b
      },
      destroy: function () {
        var a = this;
        a.destroyClip && a.destroyClip();
        ec.prototype.destroy.apply(this)
      },
      empty: function () {
        var a = this.element;
        a = a.childNodes;
        for (var b = a.length, c; b--;) {
          c = a[b];
          c.parentNode.removeChild(c)
        }
      },
      getBBox: function () {
        var a = this.element,
            b, c = a.offsetWidth,
            d = a.parentNode;
        c || ka.body.appendChild(a);
        b = {
          x: a.offsetLeft,
          y: a.offsetTop,
          width: a.offsetWidth,
          height: a.offsetHeight
        };
        c || (d ? d.appendChild(a) : ka.body.removeChild(a));
        return b
      },
      on: function (a, b) {
        this.element["on" + a] = function () {
          var c = lb.event;
          c.target = c.srcElement;
          b(c)
        };
        return this
      },
      updateTransform: function () {
        var a = this,
            b = a.translateX || 0,
            c = a.translateY || 0;
        if (b || c) a.css({
          left: b,
          top: c
        })
      },
      shadow: function (a) {
        var b = [],
            c = this.element,
            d = this.renderer,
            e, f = c.style,
            g, j = c.path;
        if ("" + c.path == "") j = "x";
        if (a) {
          for (a = 1; a <= 3; a++) {
            g = ['<shape isShadow="true" strokeweight="', 7 - 2 * a, '" filled="false" path="', j, '" coordsize="100,100" style="', c.style.cssText, '" />'];
            e = Ea(d.prepVML(g), null, {
              left: parseInt(f.left, 10) + 1,
              top: parseInt(f.top, 10) + 1
            });
            g = ['<stroke color="black" opacity="', 0.05 * a, '"/>'];
            Ea(d.prepVML(g), null, null, e);
            c.parentNode.insertBefore(e, c);
            b.push(e)
          }
          this.shadows = b
        }
        return this
      }
    });
    Oc = function () {
      this.init.apply(this, arguments)
    };
    Oc.prototype = la(Wb.prototype, {
      isIE8: ra.indexOf("MSIE 8.0") > -1,
      init: function (a, b, c) {
        this.width = b;
        this.height = c;
        this.box = Ea(Bb, null, {
          width: b + Ca,
          height: c + Ca
        }, a);
        this.Element = xd;
        if (!ka.namespaces.hcv) {
          ka.namespaces.add("hcv", "urn:schemas-microsoft-com:vml");
          ka.createStyleSheet().cssText = "hcv\\:fill, hcv\\:path, hcv\\:textpath, hcv\\:shape, hcv\\:stroke, hcv\\:line { behavior:url(#default#VML); display: inline-block; } "
        }
      },
      clipRect: function (a, b, c, d) {
        var e = this.createElement();
        return R(e, {
          members: [],
          element: {
            style: {
              left: a,
              top: b,
              width: c,
              height: d
            }
          },
          getCSS: function (f) {
            var g = e.element.style,
                j = g.top,
                i = g.left,
                l = i + g.width;
            g = j + g.height;
            j = {
              clip: "rect(" + (f ? i : j) + "px," + (f ? g : l) + "px," + (f ? l : g) + "px," + (f ? j : i) + "px)"
            };
            !f && ka.documentMode == 8 && R(j, {
              width: l + Ca,
              height: g + Ca
            });
            return j
          },
          updateClipping: function () {
            o(e.members, function (f) {
              f.css(e.getCSS(f.inverted))
            })
          }
        })
      },
      color: function (a, b, c) {
        var d, e = /^rgba/;
        if (a && a.linearGradient) {
          var f, g, j = a.linearGradient,
              i, l, n, u;
          o(a.stops, function (A, F) {
            if (e.test(A[1])) {
              d = Lb(A[1]);
              f = d.get("rgb");
              g = d.get("a")
            } else {
              f = A[1];
              g = 1
            }
            if (F) {
              n = f;
              u = g
            } else {
              i = f;
              l = g
            }
          });
          a = 90 - Ka.atan((j[3] - j[1]) / (j[2] - j[0])) * 180 / Ka.PI;
          c = ["<", c, ' colors="0% ', i, ",100% ", n, '" angle="', a, '" opacity="', u, '" o:opacity2="', l, '" type="gradient" focus="100%" />'];
          Ea(this.prepVML(c), null, null, b)
        } else if (e.test(a)) {
          d = Lb(a);
          c = ["<", c, ' opacity="', d.get("a"), '"/>'];
          Ea(this.prepVML(c), null, null, b);
          return d.get("rgb")
        } else return a
      },
      prepVML: function (a) {
        var b = "display:inline-block;behavior:url(#default#VML);",
            c = this.isIE8;
        try {
          a = a.join("")
        } catch (d) {
          for (var e = "", f = 0; f < a.length; f++) e += a[f];
          a = e
        }
        if (c) {
          a = a.replace("/>", ' xmlns="urn:schemas-microsoft-com:vml" />');
          a = a.indexOf('style="') == -1 ? a.replace("/>", ' style="' + b + '" />') : a.replace('style="', 'style="' + b)
        } else a = a.replace("<", "<hcv:");
        return a
      },
      text: function (a, b, c, d, e, f) {
        d = d || {};
        f = f || "left";
        e = e || 0;
        var g = W(parseInt(d.fontSize || 12, 10) * 1.2),
            j = va.chart.style;
        b = W(b);
        c = W(c);
        R(d, {
          color: d.color || "#000000",
          whiteSpace: "nowrap",
          fontFamily: d.fontFamily || j.fontFamily,
          fontSize: d.fontSize || j.fontSize
        });
        if (e) {
          j = (e || 0) * Ka.PI * 2 / 360;
          e = Jb(j);
          j = Kb(j);
          var i = 10;
          g = g * 0.3;
          var l = f == "left",
              n = f == "right",
              u = l ? b : b - i * e;
          b = n ? b : b + i * e;
          l = l ? c : c - i * j;
          c = n ? c : c + i * j;
          u += g * j;
          b += g * j;
          l -= g * e;
          c -= g * e;
          if ($a(u - b) < 0.1) u += 0.1;
          if ($a(l - c) < 0.1) l += 0.1;
          c = this.createElement("line").attr({
            from: u + ", " + l,
            to: b + ", " + c
          });
          e = c.element;
          Ea("hcv:fill", {
            on: true,
            color: d.color
          }, null, e);
          Ea("hcv:path", {
            textpathok: true
          }, null, e);
          Ea('<hcv:textpath style="v-text-align:' + f + ";" + qc(d).replace(/"/g, "'") + '" on="true" string="' + a.toString().replace(/<br[^>]?>/g, "\n") + '">', null, null, e)
        } else {
          c = this.createElement("span").attr({
            x: b,
            y: c - g,
            text: a
          });
          e = c.element;
          e.lineHeight = g;
          Oa(e, d);
          if (f != "left") {
            a = c.getBBox().width;
            Oa(e, {
              left: b - a / {
                right: 1,
                center: 2
              }[f] + Ca
            })
          }
        }
        return c
      },
      path: function (a) {
        return this.createElement("shape").attr({
          coordsize: "100 100",
          d: a
        })
      },
      circle: function (a, b, c) {
        return this.path(this.symbols.circle(a, b, c))
      },
      g: function (a) {
        var b;
        if (a) b = {
          className: Hb + a,
          "class": Hb + a
        };
        return a = this.createElement(Bb).attr(b)
      },
      image: function (a, b, c, d, e) {
        return this.createElement("img").attr({
          src: a
        }).css({
          left: b,
          top: c,
          width: d,
          height: e
        })
      },
      rect: function (a, b, c, d, e, f) {
        if (arguments.length > 1) {
          var g = (f || 0) % 2 / 2;
          a = W(a || 0) + g;
          b = W(b || 0) + g;
          c = W((c || 0) - 2 * g);
          d = W((d || 0) - 2 * g)
        }
        if (typeof a == "object") {
          b = a.y;
          c = a.width;
          d = a.height;
          e = a.r;
          a = a.x
        }
        return this.symbol("rect", a || 0, b || 0, e || 0, {
          width: c || 0,
          height: d || 0
        })
      },
      symbol: function (a, b, c) {
        var d;
        d = /^url\((.*?)\)$/;
        return d = d.test(a) ? this.createElement("img").attr({
          onload: function () {
            var e = this,
                f = [e.width, e.height];
            Oa(e, {
              left: W(b - f[0] / 2),
              top: W(c - f[1] / 2)
            })
          },
          src: a.match(d)[1]
        }) : Wb.prototype.symbol.apply(this, arguments)
      },
      symbols: {
        arc: function (a, b, c, d) {
          var e = d.start,
              f = d.end,
              g = f - e == 2 * Math.PI ? f - 0.0010 : f,
              j = Jb(e),
              i = Kb(e),
              l = Jb(g);
          g = Kb(g);
          d = d.innerR;
          if (f - e === 0) return ["x"];
          return ["wa", a - c, b - c, a + c, b + c, a + c * j, b + c * i, a + c * l, b + c * g, "at", a - d, b - d, a + d, b + d, a + d * l, b + d * g, a + d * j, b + d * i, "x", "e"]
        },
        circle: function (a, b, c) {
          return ["wa", a - c, b - c, a + c, b + c, a + c, b, a + c, b, "e"]
        },
        rect: function (a, b, c, d) {
          var e = d.width;
          d = d.height;
          var f = a + e,
              g = b + d;
          c = Mb(c, e, d);
          return [bb, a + c, b, Ja, f - c, b, "wa", f - 2 * c, b, f, b + 2 * c, f - c, b, f, b + c, Ja, f, g - c, "wa", f - 2 * c, g - 2 * c, f, g, f, g - c, f - c, g, Ja, a + c, g, "wa", a, g - 2 * c, a + 2 * c, g, a + c, g, a, g - c, Ja, a, b + c, "wa", a, b, a + 2 * c, b + 2 * c, a, b + c, a + c, b, "x", "e"]
        }
      }
    })
  }
  var cd = lc ? Wb : Oc,
      Yb = function () {};
  Yb.prototype = {
    init: function (a, b) {
      var c = this;
      c.series = a;
      c.applyOptions(b);
      c.pointAttr = {};
      if (a.options.colorByPoint) {
        a = a.chart.options.colors;
        if (!c.options) c.options = {};
        c.color = c.options.color = c.color || a[tb++];
        if (tb >= a.length) tb = 0
      }
      return c
    },
    applyOptions: function (a) {
      var b = this,
          c = b.series;
      b.config = a;
      if (typeof a == "number" || a === null) b.y = a;
      else if (typeof a == "object" && typeof a.length != "number") {
        R(b, a);
        b.options = a
      } else if (typeof a[0] == "string") {
        b.name = a[0];
        b.y = a[1]
      } else if (typeof a[0] == "number") {
        b.x = a[0];
        b.y = a[1]
      }
      if (b.x === Na) b.x = c.autoIncrement()
    },
    destroy: function () {
      var a = this,
          b;
      a == a.series.chart.hoverPoint && a.onMouseOut();
      Ib(a);
      o(["dataLabel", "graphic", "tracker", "group"], function (c) {
        a[c] && a[c].destroy()
      });
      a.legendItem && a.series.chart.legend.destroyItem(a);
      for (b in a) a[b] = null
    },
    select: function (a, b) {
      var c = this,
          d = c.series;
      d = d.chart;
      c.selected = a = z(a, !c.selected);
      c.firePointEvent(a ? "select" : "unselect");
      c.setState(a && Ab);
      b || o(d.getSelectedPoints(), function (e) {
        if (e.selected && e != c) {
          e.selected = false;
          e.setState(Ma);
          e.firePointEvent("unselect")
        }
      })
    },
    onMouseOver: function () {
      var a = this,
          b = a.series.chart,
          c = b.tooltip,
          d = b.hoverPoint;
      d && d != a && d.onMouseOut();
      a.firePointEvent("mouseOver");
      c && c.refresh(a);
      a.setState(pb);
      b.hoverPoint = a
    },
    onMouseOut: function () {
      var a = this;
      a.firePointEvent("mouseOut");
      a.setState(Ma);
      a.series.chart.hoverPoint = null
    },
    update: function (a, b) {
      var c = this,
          d = c.series;
      b = z(b, true);
      c.firePointEvent("update", {
        options: a
      }, function () {
        c.applyOptions(a);
        d.isDirty = true;
        b && d.chart.redraw()
      })
    },
    remove: function (a) {
      var b = this,
          c = b.series,
          d = c.chart,
          e = c.data,
          f = e.length;
      a = z(a, true);
      b.firePointEvent("remove", null, function () {
        for (; f--;) if (e[f] == b) {
          e.splice(f, 1);
          break
        }
        b.destroy();
        c.isDirty = true;
        a && d.redraw()
      })
    },
    firePointEvent: function (a, b, c) {
      var d = this,
          e = this.series;
      e = e.options;
      if (e.point.events[a] || d.options && d.options.events && d.options.events[a]) this.importEvents();
      if (a == "click" && e.allowPointSelect) c = function (f) {
        d.select(null, f.ctrlKey || f.metaKey || f.shiftKey)
      };
      za(this, a, b, c)
    },
    importEvents: function () {
      if (!this.hasImportedEvents) {
        var a = this,
            b = la(a.series.options.point, a.options);
        b = b.events;
        var c;
        a.events = b;
        for (c in b) kb(a, c, b[c]);
        this.hasImportedEvents = true
      }
    },
    setState: function (a) {
      var b = this,
          c = b.series,
          d = c.options.states,
          e = c.options.marker,
          f = e && !e.enabled,
          g = (e = e && e.states[a]) && e.enabled === false,
          j = c.chart,
          i = b.pointAttr;
      a || (a = Ma);
      if (!(b.selected && a != Ab || d[a] && d[a].enabled === false || a && (g || f && !e.enabled))) if (a && !b.graphic) {
        if (!c.stateMarkerGraphic) c.stateMarkerGraphic = j.renderer.circle(0, 0, i[a].r).attr(i[a]).add(c.group);
        c.stateMarkerGraphic.translate(b.plotX, b.plotY)
      } else b.graphic && b.graphic.attr(i[a])
    },
    setTooltipText: function () {
      var a = this;
      a.tooltipText = a.series.chart.options.tooltip.formatter.call({
        series: a.series,
        point: a,
        x: a.category,
        y: a.y,
        percentage: a.percentage,
        total: a.total || a.stackTotal
      })
    }
  };
  var Ua = function () {};
  Ua.prototype = {
    isCartesian: true,
    type: "line",
    pointClass: Yb,
    pointAttrToOptions: {
      stroke: "lineColor",
      "stroke-width": "lineWidth",
      fill: "fillColor",
      r: "radius"
    },
    init: function (a, b) {
      var c = this,
          d, e = a.series.length;
      c.chart = a;
      b = c.setOptions(b);
      R(c, {
        index: e,
        options: b,
        name: b.name || "Series " + (e + 1),
        state: Ma,
        pointAttr: {},
        visible: b.visible !== false,
        selected: b.selected === true
      });
      a = b.events;
      for (d in a) kb(c, d, a[d]);
      c.getColor();
      c.getSymbol();
      c.setData(b.data, false)
    },
    autoIncrement: function () {
      var a = this,
          b = a.options,
          c = a.xIncrement;
      c = z(c, b.pointStart, 0);
      a.pointInterval = z(a.pointInterval, b.pointInterval, 1);
      a.xIncrement = c + a.pointInterval;
      return c
    },
    cleanData: function () {
      var a = this;
      a = a.data;
      var b;
      a.sort(function (c, d) {
        return c.x - d.x
      });
      for (b = a.length - 1; b >= 0; b--) a[b - 1] && a[b - 1].x == a[b].x && a.splice(b - 1, 1)
    },
    getSegments: function () {
      var a = -1,
          b = [],
          c = this.data;
      o(c, function (d, e) {
        if (d.y === null) {
          e > a + 1 && b.push(c.slice(a + 1, e));
          a = e
        } else e == c.length - 1 && b.push(c.slice(a + 1, e + 1))
      });
      this.segments = b
    },
    setOptions: function (a) {
      var b = this.chart.options.plotOptions;
      return a = la(b[this.type], b.series, a)
    },
    getColor: function () {
      var a = this.chart.options.colors;
      this.color = this.options.color || a[tb++] || "#0000ff";
      if (tb >= a.length) tb = 0
    },
    getSymbol: function () {
      var a = this.chart.options.symbols,
          b = this.options.marker.symbol || a[mc++];
      this.symbol = b;
      if (mc >= a.length) mc = 0
    },
    addPoint: function (a, b, c) {
      var d = this,
          e = d.data;
      a = (new d.pointClass).init(d, a);
      b = z(b, true);
      e.push(a);
      c && e[0].remove(false);
      d.isDirty = true;
      b && d.chart.redraw()
    },
    setData: function (a, b) {
      var c = this,
          d = c.data,
          e = c.initialColor,
          f = d && d.length || 0;
      c.xIncrement = null;
      if (T(e)) tb = e;
      for (a = Gb(pc(a || []), function (g) {
        return (new c.pointClass).init(c, g)
      }); f--;) d[f].destroy();
      c.data = a;
      c.cleanData();
      c.getSegments();
      c.isDirty = true;
      z(b, true) && c.chart.redraw()
    },
    remove: function (a) {
      var b = this,
          c = b.chart;
      a = z(a, true);
      if (!b.isRemoving) {
        b.isRemoving = true;
        za(b, "remove", null, function () {
          b.destroy();
          c.isDirty = true;
          a && c.redraw()
        })
      }
      b.isRemoving = false
    },
    translate: function () {
      for (var a = this, b = a.chart, c = a.options.stacking, d = a.xAxis.categories, e = a.yAxis, f = e.stacks[a.type], g = a.data, j = g.length; j--;) {
        var i = g[j],
            l = i.x,
            n = i.y,
            u;
        i.plotX = a.xAxis.translate(l);
        if (c && a.visible && f[l]) {
          u = f[l];
          l = u.total;
          u.cum = u = u.cum - n;
          n = u + n;
          if (c == "percent") {
            u = l ? u * 100 / l : 0;
            n = l ? n * 100 / l : 0
          }
          i.percentage = l ? i.y * 100 / l : 0;
          i.stackTotal = l;
          i.yBottom = e.translate(u, 0, 1)
        }
        if (n !== null) i.plotY = e.translate(n, 0, 1);
        i.clientX = b.inverted ? b.plotHeight - i.plotX : i.plotX;
        i.category = d && d[i.x] !== Na ? d[i.x] : i.x
      }
    },
    setTooltipPoints: function (a) {
      var b = this,
          c = b.chart,
          d = c.inverted,
          e = [],
          f = (d ? c.plotTop : c.plotLeft) + c.plotSizeX,
          g, j, i = [];
      if (a) b.tooltipPoints = null;
      o(b.segments, function (l) {
        e = e.concat(l)
      });
      if (b.xAxis && b.xAxis.reversed) e = e.reverse();
      o(e, function (l, n) {
        b.tooltipPoints || l.setTooltipText();
        g = e[n - 1] ? e[n - 1].high + 1 : 0;
        for (j = l.high = e[n + 1] ? ib((l.plotX + (e[n + 1] ? e[n + 1].plotX : f)) / 2) : f; g <= j;) i[d ? f - g++ : g++] = l
      });
      b.tooltipPoints = i
    },
    onMouseOver: function () {
      var a = this,
          b = a.chart,
          c = b.hoverSeries,
          d = a.stateMarkerGraphic;
      if (!b.mouseIsDown) {
        d && d.show();
        c && c != a && c.onMouseOut();
        a.options.events.mouseOver && za(a, "mouseOver");
        a.tracker && a.tracker.toFront();
        a.setState(pb);
        b.hoverSeries = a
      }
    },
    onMouseOut: function () {
      var a = this,
          b = a.options,
          c = a.chart,
          d = c.tooltip,
          e = c.hoverPoint;
      e && e.onMouseOut();
      a && b.events.mouseOut && za(a, "mouseOut");
      d && !b.stickyTracking && d.hide();
      a.setState();
      c.hoverSeries = null
    },
    animate: function (a) {
      var b = this,
          c = b.chart,
          d = b.clipRect;
      if (a) {
        if (!d.isAnimating) {
          d.attr("width", 0);
          d.isAnimating = true
        }
      } else {
        d.animate({
          width: c.plotSizeX
        }, {
          complete: function () {
            d.isAnimating = false
          },
          duration: 1E3
        });
        this.animate = null
      }
    },
    drawPoints: function () {
      var a = this,
          b, c = a.data,
          d = a.chart,
          e, f, g, j, i, l;
      if (a.options.marker.enabled) for (g = c.length; g--;) {
        j = c[g];
        e = j.plotX;
        f = j.plotY;
        l = j.graphic;
        if (f !== Na) {
          b = j.pointAttr[j.selected ? Ab : Ma];
          i = b.r;
          if (l) l.attr({
            x: e,
            y: f,
            r: i
          });
          else j.graphic = d.renderer.symbol(z(j.marker && j.marker.symbol, a.symbol), e, f, i).attr(b).add(a.group)
        }
      }
    },
    convertAttribs: function (a, b, c, d) {
      var e = this.pointAttrToOptions,
          f, g, j = {};
      a = a || {};
      b = b || {};
      c = c || {};
      d = d || {};
      for (f in e) {
        g = e[f];
        j[f] = z(a[g], b[f], c[f], d[f])
      }
      return j
    },
    getAttribs: function () {
      var a = this,
          b = a.options.marker || a.options,
          c = b.states,
          d = c[pb],
          e, f = {},
          g = a.color,
          j = a.data,
          i = [],
          l, n = a.pointAttrToOptions;
      if (a.options.marker) {
        f = {
          stroke: g,
          fill: g
        };
        d.radius = d.radius || b.radius + 2;
        d.lineWidth = d.lineWidth || b.lineWidth + 1
      } else {
        f = {
          fill: g
        };
        d.color = d.color || Lb(d.color || g).brighten(d.brightness).get()
      }
      i[Ma] = a.convertAttribs(b, f);
      o([pb, Ab], function (A) {
        i[A] = a.convertAttribs(c[A], i[Ma])
      });
      a.pointAttr = i;
      for (f = j.length; f--;) {
        g = j[f];
        if ((b = g.options && g.options.marker || g.options) && b.enabled === false) b.radius = 0;
        e = false;
        if (g.options) for (var u in n) if (T(b[n[u]])) e = true;
        if (e) {
          l = [];
          c = b.states || {};
          e = c[pb] = c[pb] || {};
          if (!a.options.marker) e.color = Lb(e.color || g.options.color).brighten(e.brightness || d.brightness).get();
          l[Ma] = a.convertAttribs(b, i[Ma]);
          l[pb] = a.convertAttribs(c[pb], i[pb], l[Ma]);
          l[Ab] = a.convertAttribs(c[Ab], i[Ab], l[Ma])
        } else l = i;
        g.pointAttr = l
      }
    },
    destroy: function () {
      var a = this,
          b = a.chart,
          c = b.series,
          d = a.clipRect,
          e;
      Ib(a);
      a.legendItem && a.chart.legend.destroyItem(a);
      o(a.data, function (f) {
        f.destroy()
      });
      o(["area", "graph", "dataLabelsGroup", "group", "tracker"], function (f) {
        a[f] && a[f].destroy()
      });
      d && d != a.chart.clipRect && d.destroy();
      if (b.hoverSeries == a) b.hoverSeries = null;
      o(c, function (f, g) {
        f == a && c.splice(g, 1)
      });
      for (e in a) delete a[e]
    },
    drawDataLabels: function () {
      if (this.options.dataLabels.enabled) {
        var a = this,
            b, c, d = a.data,
            e = a.options.dataLabels,
            f, g = a.dataLabelsGroup,
            j = a.chart,
            i = j.inverted,
            l = a.type,
            n, u;
        if (!g) g = a.dataLabelsGroup = j.renderer.g(Hb + "data-labels").attr({
          visibility: a.visible ? Xb : zb,
          zIndex: 4
        }).translate(j.plotLeft, j.plotTop).add();
        n = e.color;
        if (n == "auto") n = null;
        e.style.color = z(n, a.color);
        o(d, function (A) {
          var F = z(A.barX, A.plotX),
              qa = A.plotY,
              L = A.tooltipPos,
              Z = A.dataLabel;
          if (Z) A.dataLabel = Z.destroy();
          f = e.formatter.call({
            x: A.x,
            y: A.y,
            series: a,
            point: A,
            percentage: A.percentage,
            total: A.total || A.stackTotal
          });
          b = (i ? j.plotWidth - qa : F) + e.x;
          c = (i ? j.plotHeight - F : qa) + e.y;
          if (L) {
            b = L[0] + e.x;
            c = L[1] + e.y
          }
          u = e.align;
          if (l == "column") b += {
            center: A.barW / 2,
            right: A.barW
          }[u] || 0;
          if (f) A.dataLabel = j.renderer.text(f, b, c, e.style, e.rotation, u).attr({
            zIndex: 1,
            visibility: A.visible === false ? zb : "inherit"
          }).add(g);
          a.drawConnector && a.drawConnector(A)
        })
      }
    },
    drawGraph: function () {
      var a = this,
          b = a.options,
          c = a.chart,
          d = a.graph,
          e = [],
          f = a.area,
          g = a.group,
          j = b.lineColor || a.color,
          i = b.lineWidth,
          l, n = c.renderer,
          u = a.yAxis.getThreshold(b.threshold || 0),
          A = /^area/.test(a.type),
          F = [],
          qa = [];
      o(a.segments, function (L) {
        if (L.length > 1) {
          l = [];
          o(L, function (ob, Ta) {
            Ta < 2 && l.push([bb, Ja][Ta]);
            if (Ta && b.step) {
              Ta = L[Ta - 1];
              l.push(ob.plotX, Ta.plotY)
            }
            l.push(ob.plotX, ob.plotY)
          });
          e = e.concat(l);
          if (A) {
            var Z = [],
                Ia, sb = l.length;
            for (Ia = 0; Ia < sb; Ia++) Z.push(l[Ia]);
            if (b.stacking && a.type != "areaspline") for (Ia = L.length - 1; Ia >= 0; Ia--) Z.push(L[Ia].plotX, L[Ia].yBottom);
            else Z.push(L[L.length - 1].plotX, u, L[0].plotX, u, "z");
            qa = qa.concat(Z)
          }
        } else F.push(L[0])
      });
      a.graphPath = e;
      a.singlePoints = F;
      if (A) {
        c = z(b.fillColor, Lb(a.color).setOpacity(b.fillOpacity || 0.75).get());
        if (f) f.attr({
          d: qa
        });
        else a.area = a.chart.renderer.path(qa).attr({
          fill: c
        }).add(a.group)
      }
      if (d) d.attr({
        d: e
      });
      else if (i) a.graph = n.path(e).attr({
        stroke: j,
        "stroke-width": i + Ca
      }).add(g).shadow(b.shadow)
    },
    render: function () {
      var a = this,
          b = a.chart,
          c, d = a.options.animation && a.animate;
      c = b.renderer;
      if (!a.clipRect) {
        a.clipRect = !b.hasRendered && b.clipRect ? b.clipRect : c.clipRect(0, 0, b.plotSizeX, b.plotSizeY);
        if (!b.clipRect) b.clipRect = a.clipRect
      }
      if (!a.group) {
        c = a.group = c.g("series");
        b.inverted && c.attr({
          width: b.plotWidth,
          height: b.plotHeight
        }).invert();
        c.clip(a.clipRect).attr({
          visibility: a.visible ? Xb : zb,
          zIndex: 3
        }).translate(b.plotLeft, b.plotTop).add()
      }
      a.drawDataLabels();
      d && a.animate(true);
      a.getAttribs();
      a.drawGraph && a.drawGraph();
      a.drawPoints();
      a.options.enableMouseTracking !== false && a.drawTracker();
      d && a.animate();
      a.isDirty = false
    },
    redraw: function () {
      var a = this;
      a.translate();
      a.setTooltipPoints(true);
      a.render()
    },
    setState: function (a) {
      var b = this,
          c = b.options,
          d = b.graph,
          e = c.states,
          f = b.stateMarkerGraphic;
      c = c.lineWidth;
      a = a || Ma;
      if (b.state != a) {
        b.state = a;
        if (!(e[a] && e[a].enabled === false)) {
          if (a) c = e[a].lineWidth || c;
          else f && f.hide();
          if (d) d.animate({
            "stroke-width": c
          }, a ? 0 : 500)
        }
      }
    },
    setVisible: function (a, b) {
      var c = this,
          d = c.chart,
          e = c.legendItem,
          f = c.group,
          g = c.tracker,
          j = c.dataLabelsGroup,
          i, l = c.data,
          n = d.options.chart.ignoreHiddenSeries;
      i = c.visible;
      i = (c.visible = a = a === Na ? !i : a) ? "show" : "hide";
      if (a) c.isDirty = n;
      f && f[i]();
      if (g) g[i]();
      else for (f = l.length; f--;) {
        g = l[f];
        g.tracker && g.tracker[i]()
      }
      j && j[i]();
      e && d.legend.colorizeItem(c, a);
      n && c.options.stacking && o(d.series, function (u) {
        if (u.options.stacking && u.visible) u.isDirty = true
      });
      b !== false && d.redraw();
      za(c, i)
    },
    show: function () {
      this.setVisible(true)
    },
    hide: function () {
      this.setVisible(false)
    },
    select: function (a) {
      var b = this;
      b.selected = a = a === Na ? !b.selected : a;
      if (b.checkbox) b.checkbox.checked = a;
      za(b, a ? "select" : "unselect")
    },
    drawTracker: function () {
      var a = this,
          b = a.options,
          c = a.graphPath,
          d = a.chart,
          e = d.options.tooltip.snap,
          f = a.tracker,
          g = b.cursor;
      g = g && {
        cursor: g
      };
      var j = a.singlePoints,
          i, l;
      for (l = 0; l < j.length; l++) {
        i = j[l];
        c.push(bb, i.plotX - 3, i.plotY, Ja, i.plotX + 3, i.plotY)
      }
      if (f) f.attr({
        d: c
      });
      else a.tracker = d.renderer.path(c).attr({
        isTracker: true,
        stroke: fd,
        fill: fb,
        "stroke-width": b.lineWidth + 2 * e,
        "stroke-linecap": "round",
        visibility: a.visible ? Xb : zb,
        zIndex: 1
      }).on("mouseover", function () {
        d.hoverSeries != a && a.onMouseOver()
      }).on("mouseout", function () {
        b.stickyTracking || a.onMouseOut()
      }).css(g).add(d.trackerGroup)
    }
  };
  ra = gb(Ua);
  eb.line = ra;
  ra = gb(Ua, {
    type: "area"
  });
  eb.area = ra;
  ed.prototype = {
    get: function (a) {
      a || (a = 50);
      var b = this.n;
      b = (this.xdata[b - 1] - this.xdata[0]) / (a - 1);
      var c = [],
          d = [];
      c[0] = this.xdata[0];
      d[0] = this.ydata[0];
      for (var e = [{
        plotX: c[0],
        plotY: d[0]
      }], f = 1; f < a; f++) {
        c[f] = c[0] + f * b;
        d[f] = this.interpolate(c[f]);
        e[f] = {
          plotX: c[f],
          plotY: d[f]
        }
      }
      return e
    },
    interpolate: function (a) {
      for (var b = this.n - 1, c = 0; b - c > 1;) {
        var d = (b + c) / 2;
        if (this.xdata[ib(d)] > a) b = d;
        else c = d
      }
      b = ib(b);
      c = ib(c);
      d = this.xdata[b] - this.xdata[c];
      var e = (this.xdata[b] - a) / d;
      a = (a - this.xdata[c]) / d;
      return e * this.ydata[c] + a * this.ydata[b] + ((e * e * e - e) * this.y2[c] + (a * a * a - a) * this.y2[b]) * d * d / 6
    }
  };
  ra = gb(Ua, {
    type: "spline",
    drawGraph: function () {
      var a = this,
          b = a.segments;
      a.splinedata = a.getSplineData();
      a.segments = a.splinedata;
      Ua.prototype.drawGraph.apply(a, arguments);
      a.segments = b
    },
    getSplineData: function () {
      var a = this,
          b = a.chart,
          c = [],
          d = b.plotSizeX,
          e;
      o(a.segments, function (f) {
        if (a.xAxis.reversed) f = f.reverse();
        var g = [],
            j, i;
        o(f, function (l, n) {
          j = f[n + 2] || f[n + 1] || l;
          i = f[n - 2] || f[n - 1] || l;
          j.plotX >= 0 && i.plotX <= d && g.push(l)
        });
        if (g.length > 1) e = W(ub(d, g[g.length - 1].clientX - g[0].clientX) / 3);
        c.push(f.length > 1 ? e ? (new ed(g)).get(e) : [] : f)
      });
      return c
    }
  });
  eb.spline = ra;
  ra = gb(ra, {
    type: "areaspline"
  });
  eb.areaspline = ra;
  var oc = gb(Ua, {
    type: "column",
    pointAttrToOptions: {
      stroke: "borderColor",
      "stroke-width": "borderWidth",
      fill: "color",
      r: "borderRadius"
    },
    init: function () {
      Ua.prototype.init.apply(this, arguments);
      var a = this,
          b = a.chart;
      b.hasRendered && o(b.series, function (c) {
        if (c.type == a.type) c.isDirty = true
      })
    },
    translate: function () {
      var a = this,
          b = a.chart,
          c = 0,
          d = a.xAxis.reversed,
          e = a.xAxis.categories,
          f;
      Ua.prototype.translate.apply(a);
      o(b.series, function (L) {
        if (L.type == a.type) if (L.options.stacking) {
          T(f) || (f = c++);
          L.columnIndex = f
        } else L.columnIndex = c++
      });
      var g = a.options,
          j = a.data,
          i = a.closestPoints;
      b = $a(j[1] ? j[i].plotX - j[i - 1].plotX : b.plotSizeX / (e ? e.length : 1));
      e = b * g.groupPadding;
      i = b - 2 * e;
      i = i / c;
      var l = g.pointWidth,
          n = T(l) ? (i - l) / 2 : i * g.pointPadding,
          u = z(l, i - 2 * n);
      l = (d ? c - a.columnIndex : a.columnIndex) || 0;
      var A = n + (e + l * i - b / 2) * (d ? -1 : 1),
          F = a.yAxis.getThreshold(g.threshold || 0),
          qa = g.minPointLength;
      o(j, function (L) {
        var Z = L.plotY,
            Ia = L.plotX + A,
            sb = xc(Mb(Z, F)),
            ob = u,
            Ta = xc($a((L.yBottom || F) - Z)),
            H;
        if ($a(Ta) < (qa || 5)) {
          if (qa) {
            Ta = qa;
            sb = F - (Z <= F ? qa : 0)
          }
          H = sb - 3
        }
        R(L, {
          barX: Ia,
          barY: sb,
          barW: ob,
          barH: Ta
        });
        L.shapeType = "rect";
        L.shapeArgs = {
          x: Ia,
          y: sb,
          width: ob,
          height: Ta,
          r: g.borderRadius
        };
        L.trackerArgs = T(H) && la(L.shapeArgs, {
          height: 6,
          y: H
        })
      })
    },
    getSymbol: function () {},
    drawGraph: function () {},
    drawPoints: function () {
      var a = this,
          b = a.options,
          c = a.chart.renderer,
          d, e;
      o(a.data, function (f) {
        if (T(f.plotY)) {
          d = f.graphic;
          e = f.shapeArgs;
          if (d) d.attr(e);
          else f.graphic = c[f.shapeType](e).attr(f.pointAttr[f.selected ? Ab : Ma]).add(a.group).shadow(b.shadow)
        }
      })
    },
    drawTracker: function () {
      var a = this,
          b = a.chart,
          c = b.renderer,
          d, e, f = +new Date,
          g = a.options.cursor,
          j = g && {
          cursor: g
          },
          i;
      o(a.data, function (l) {
        e = l.tracker;
        d = l.trackerArgs || l.shapeArgs;
        if (e) e.attr(d);
        else l.tracker = c[l.shapeType](d).attr({
          isTracker: f,
          fill: fd,
          visibility: a.visible ? Xb : zb,
          zIndex: 1
        }).on("mouseover", function (n) {
          i = n.relatedTarget || n.fromElement;
          b.hoverSeries != a && oa(i, "isTracker") != f && a.onMouseOver();
          l.onMouseOver()
        }).on("mouseout", function (n) {
          if (!a.options.stickyTracking) {
            i = n.relatedTarget || n.toElement;
            oa(i, "isTracker") != f && a.onMouseOut()
          }
        }).css(j).add(b.trackerGroup)
      })
    },
    cleanData: function () {
      var a = this,
          b = a.data,
          c, d, e, f;
      Ua.prototype.cleanData.apply(a);
      for (f = b.length - 1; f >= 0; f--) if (b[f - 1]) {
        c = b[f].x - b[f - 1].x;
        if (d === Na || c < d) {
          d = c;
          e = f
        }
      }
      a.closestPoints = e
    },
    animate: function (a) {
      var b = this,
          c = b.data;
      if (!a) {
        o(c, function (d) {
          var e = d.graphic;
          if (e) {
            e.attr({
              height: 0,
              y: b.yAxis.translate(0, 0, 1)
            });
            e.animate({
              height: d.barH,
              y: d.barY
            }, {
              duration: 1E3
            })
          }
        });
        b.animate = null
      }
    },
    remove: function () {
      var a = this,
          b = a.chart;
      b.hasRendered && o(b.series, function (c) {
        if (c.type == a.type) c.isDirty = true
      });
      Ua.prototype.remove.apply(a, arguments)
    }
  });
  eb.column = oc;
  ra = gb(oc, {
    type: "bar",
    init: function (a) {
      a.inverted = this.inverted = true;
      oc.prototype.init.apply(this, arguments)
    }
  });
  eb.bar = ra;
  ra = gb(Ua, {
    type: "scatter",
    translate: function () {
      var a = this;
      Ua.prototype.translate.apply(a);
      o(a.data, function (b) {
        b.shapeType = "circle";
        b.shapeArgs = {
          x: b.plotX,
          y: b.plotY,
          r: a.chart.options.tooltip.snap
        }
      })
    },
    drawTracker: function () {
      var a = this,
          b = a.options.cursor,
          c = b && {
          cursor: b
          },
          d;
      o(a.data, function (e) {
        (d = e.graphic) && d.attr({
          isTracker: true
        }).on("mouseover", function () {
          a.onMouseOver();
          e.onMouseOver()
        }).on("mouseout", function () {
          a.options.stickyTracking || a.onMouseOut()
        }).css(c)
      })
    },
    cleanData: function () {}
  });
  eb.scatter = ra;
  ra = gb(Yb, {
    init: function () {
      Yb.prototype.init.apply(this, arguments);
      var a = this,
          b;
      R(a, {
        visible: a.visible !== false,
        name: z(a.name, "Slice")
      });
      b = function () {
        a.slice()
      };
      kb(a, "select", b);
      kb(a, "unselect", b);
      return a
    },
    setVisible: function (a) {
      var b = this,
          c = b.series.chart,
          d;
      d = (b.visible = a = a === Na ? !b.visible : a) ? "show" : "hide";
      b.group[d]();
      b.tracker && b.tracker[d]();
      b.dataLabel && b.dataLabel[d]();
      b.legendItem && c.legend.colorizeItem(b, a)
    },
    slice: function (a, b) {
      var c = this,
          d = c.series;
      d = d.chart;
      var e = c.slicedTranslation;
      z(b, true);
      a = c.sliced = T(a) ? a : !c.sliced;
      c.group.animate({
        translateX: a ? e[0] : d.plotLeft,
        translateY: a ? e[1] : d.plotTop
      }, 100)
    }
  });
  ra = gb(Ua, {
    type: "pie",
    isCartesian: false,
    pointClass: ra,
    pointAttrToOptions: {
      stroke: "borderColor",
      "stroke-width": "borderWidth",
      fill: "color"
    },
    getColor: function () {
      this.initialColor = tb
    },
    translate: function () {
      var a = 0,
          b = this,
          c = -0.25,
          d = b.options,
          e = d.slicedOffset,
          f = d.center,
          g = b.chart,
          j = g.plotWidth,
          i = g.plotHeight,
          l, n, u;
      b = b.data;
      var A = 2 * Ka.PI,
          F, qa = Mb(j, i),
          L;
      f.push(d.size, d.innerSize || 0);
      f = Gb(f, function (Z, Ia) {
        return (L = /%$/.test(Z)) ? [j, i, qa, qa][Ia] * parseInt(Z, 10) / 100 : Z
      });
      o(b, function (Z) {
        a += Z.y
      });
      o(b, function (Z) {
        F = a ? Z.y / a : 0;
        l = c * A;
        c += F;
        n = c * A;
        Z.shapeType = "arc";
        Z.shapeArgs = {
          x: f[0],
          y: f[1],
          r: f[2] / 2,
          innerR: f[3] / 2,
          start: l,
          end: n
        };
        u = (n + l) / 2;
        Z.slicedTranslation = Gb([Jb(u) * e + g.plotLeft, Kb(u) * e + g.plotTop], W);
        Z.tooltipPos = [f[0] + Jb(u) * f[2] * 0.35, f[1] + Kb(u) * f[2] * 0.35];
        Z.percentage = F * 100;
        Z.total = a
      });
      this.setTooltipPoints()
    },
    render: function () {
      var a = this;
      a.getAttribs();
      this.drawPoints();
      a.options.enableMouseTracking !== false && a.drawTracker();
      this.drawDataLabels();
      a.isDirty = false
    },
    drawPoints: function () {
      var a = this,
          b = a.chart,
          c = b.renderer,
          d, e, f;
      o(a.data, function (g) {
        e = g.graphic;
        f = g.shapeArgs;
        if (!g.group) {
          d = g.sliced ? g.slicedTranslation : [b.plotLeft, b.plotTop];
          g.group = c.g("point").attr({
            zIndex: 3
          }).add().translate(d[0], d[1])
        }
        if (e) e.attr(f);
        else g.graphic = c.arc(f).attr(g.pointAttr[Ma]).add(g.group);
        g.visible === false && g.setVisible(false)
      })
    },
    drawTracker: oc.prototype.drawTracker,
    getSymbol: function () {}
  });
  eb.pie = ra;
  lb.Highcharts = {
    Chart: kd,
    dateFormat: ic,
    getOptions: hd,
    numberFormat: id,
    Point: Yb,
    Renderer: cd,
    seriesTypes: eb,
    setOptions: gd,
    Series: Ua,
    addEvent: kb,
    createElement: Ea,
    discardElement: cc,
    css: Oa,
    each: o,
    extend: R,
    map: Gb,
    merge: la,
    pick: z,
    extendClass: gb
  }
})();