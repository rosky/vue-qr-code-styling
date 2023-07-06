/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 6251:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

__webpack_require__(7658);
__webpack_require__(2801);
!function (t, e) {
   true ? module.exports = e() : 0;
}(self, function () {
  return (() => {
    var t = {
        192: (t, e) => {
          var r,
            n,
            o = function () {
              var t = function (t, e) {
                var r = t,
                  n = a[e],
                  o = null,
                  i = 0,
                  u = null,
                  v = [],
                  w = {},
                  m = function (t, e) {
                    o = function (t) {
                      for (var e = new Array(t), r = 0; r < t; r += 1) {
                        e[r] = new Array(t);
                        for (var n = 0; n < t; n += 1) e[r][n] = null;
                      }
                      return e;
                    }(i = 4 * r + 17), b(0, 0), b(i - 7, 0), b(0, i - 7), x(), _(), M(t, e), r >= 7 && S(t), null == u && (u = A(r, n, v)), C(u, e);
                  },
                  b = function (t, e) {
                    for (var r = -1; r <= 7; r += 1) if (!(t + r <= -1 || i <= t + r)) for (var n = -1; n <= 7; n += 1) e + n <= -1 || i <= e + n || (o[t + r][e + n] = 0 <= r && r <= 6 && (0 == n || 6 == n) || 0 <= n && n <= 6 && (0 == r || 6 == r) || 2 <= r && r <= 4 && 2 <= n && n <= 4);
                  },
                  _ = function () {
                    for (var t = 8; t < i - 8; t += 1) null == o[t][6] && (o[t][6] = t % 2 == 0);
                    for (var e = 8; e < i - 8; e += 1) null == o[6][e] && (o[6][e] = e % 2 == 0);
                  },
                  x = function () {
                    for (var t = s.getPatternPosition(r), e = 0; e < t.length; e += 1) for (var n = 0; n < t.length; n += 1) {
                      var i = t[e],
                        a = t[n];
                      if (null == o[i][a]) for (var u = -2; u <= 2; u += 1) for (var h = -2; h <= 2; h += 1) o[i + u][a + h] = -2 == u || 2 == u || -2 == h || 2 == h || 0 == u && 0 == h;
                    }
                  },
                  S = function (t) {
                    for (var e = s.getBCHTypeNumber(r), n = 0; n < 18; n += 1) {
                      var a = !t && 1 == (e >> n & 1);
                      o[Math.floor(n / 3)][n % 3 + i - 8 - 3] = a;
                    }
                    for (n = 0; n < 18; n += 1) a = !t && 1 == (e >> n & 1), o[n % 3 + i - 8 - 3][Math.floor(n / 3)] = a;
                  },
                  M = function (t, e) {
                    for (var r = n << 3 | e, a = s.getBCHTypeInfo(r), u = 0; u < 15; u += 1) {
                      var h = !t && 1 == (a >> u & 1);
                      u < 6 ? o[u][8] = h : u < 8 ? o[u + 1][8] = h : o[i - 15 + u][8] = h;
                    }
                    for (u = 0; u < 15; u += 1) h = !t && 1 == (a >> u & 1), u < 8 ? o[8][i - u - 1] = h : u < 9 ? o[8][15 - u - 1 + 1] = h : o[8][15 - u - 1] = h;
                    o[i - 8][8] = !t;
                  },
                  C = function (t, e) {
                    for (var r = -1, n = i - 1, a = 7, u = 0, h = s.getMaskFunction(e), c = i - 1; c > 0; c -= 2) for (6 == c && (c -= 1);;) {
                      for (var l = 0; l < 2; l += 1) if (null == o[n][c - l]) {
                        var d = !1;
                        u < t.length && (d = 1 == (t[u] >>> a & 1)), h(n, c - l) && (d = !d), o[n][c - l] = d, -1 == (a -= 1) && (u += 1, a = 7);
                      }
                      if ((n += r) < 0 || i <= n) {
                        n -= r, r = -r;
                        break;
                      }
                    }
                  },
                  A = function (t, e, r) {
                    for (var n = c.getRSBlocks(t, e), o = l(), i = 0; i < r.length; i += 1) {
                      var a = r[i];
                      o.put(a.getMode(), 4), o.put(a.getLength(), s.getLengthInBits(a.getMode(), t)), a.write(o);
                    }
                    var u = 0;
                    for (i = 0; i < n.length; i += 1) u += n[i].dataCount;
                    if (o.getLengthInBits() > 8 * u) throw "code length overflow. (" + o.getLengthInBits() + ">" + 8 * u + ")";
                    for (o.getLengthInBits() + 4 <= 8 * u && o.put(0, 4); o.getLengthInBits() % 8 != 0;) o.putBit(!1);
                    for (; !(o.getLengthInBits() >= 8 * u || (o.put(236, 8), o.getLengthInBits() >= 8 * u));) o.put(17, 8);
                    return function (t, e) {
                      for (var r = 0, n = 0, o = 0, i = new Array(e.length), a = new Array(e.length), u = 0; u < e.length; u += 1) {
                        var c = e[u].dataCount,
                          l = e[u].totalCount - c;
                        n = Math.max(n, c), o = Math.max(o, l), i[u] = new Array(c);
                        for (var d = 0; d < i[u].length; d += 1) i[u][d] = 255 & t.getBuffer()[d + r];
                        r += c;
                        var f = s.getErrorCorrectPolynomial(l),
                          g = h(i[u], f.getLength() - 1).mod(f);
                        for (a[u] = new Array(f.getLength() - 1), d = 0; d < a[u].length; d += 1) {
                          var p = d + g.getLength() - a[u].length;
                          a[u][d] = p >= 0 ? g.getAt(p) : 0;
                        }
                      }
                      var v = 0;
                      for (d = 0; d < e.length; d += 1) v += e[d].totalCount;
                      var w = new Array(v),
                        y = 0;
                      for (d = 0; d < n; d += 1) for (u = 0; u < e.length; u += 1) d < i[u].length && (w[y] = i[u][d], y += 1);
                      for (d = 0; d < o; d += 1) for (u = 0; u < e.length; u += 1) d < a[u].length && (w[y] = a[u][d], y += 1);
                      return w;
                    }(o, n);
                  };
                w.addData = function (t, e) {
                  var r = null;
                  switch (e = e || "Byte") {
                    case "Numeric":
                      r = d(t);
                      break;
                    case "Alphanumeric":
                      r = f(t);
                      break;
                    case "Byte":
                      r = g(t);
                      break;
                    case "Kanji":
                      r = p(t);
                      break;
                    default:
                      throw "mode:" + e;
                  }
                  v.push(r), u = null;
                }, w.isDark = function (t, e) {
                  if (t < 0 || i <= t || e < 0 || i <= e) throw t + "," + e;
                  return o[t][e];
                }, w.getModuleCount = function () {
                  return i;
                }, w.make = function () {
                  if (r < 1) {
                    for (var t = 1; t < 40; t++) {
                      for (var e = c.getRSBlocks(t, n), o = l(), i = 0; i < v.length; i++) {
                        var a = v[i];
                        o.put(a.getMode(), 4), o.put(a.getLength(), s.getLengthInBits(a.getMode(), t)), a.write(o);
                      }
                      var u = 0;
                      for (i = 0; i < e.length; i++) u += e[i].dataCount;
                      if (o.getLengthInBits() <= 8 * u) break;
                    }
                    r = t;
                  }
                  m(!1, function () {
                    for (var t = 0, e = 0, r = 0; r < 8; r += 1) {
                      m(!0, r);
                      var n = s.getLostPoint(w);
                      (0 == r || t > n) && (t = n, e = r);
                    }
                    return e;
                  }());
                }, w.createTableTag = function (t, e) {
                  t = t || 2;
                  var r = "";
                  r += '<table style="', r += " border-width: 0px; border-style: none;", r += " border-collapse: collapse;", r += " padding: 0px; margin: " + (e = void 0 === e ? 4 * t : e) + "px;", r += '">', r += "<tbody>";
                  for (var n = 0; n < w.getModuleCount(); n += 1) {
                    r += "<tr>";
                    for (var o = 0; o < w.getModuleCount(); o += 1) r += '<td style="', r += " border-width: 0px; border-style: none;", r += " border-collapse: collapse;", r += " padding: 0px; margin: 0px;", r += " width: " + t + "px;", r += " height: " + t + "px;", r += " background-color: ", r += w.isDark(n, o) ? "#000000" : "#ffffff", r += ";", r += '"/>';
                    r += "</tr>";
                  }
                  return (r += "</tbody>") + "</table>";
                }, w.createSvgTag = function (t, e, r, n) {
                  var o = {};
                  "object" == typeof arguments[0] && (t = (o = arguments[0]).cellSize, e = o.margin, r = o.alt, n = o.title), t = t || 2, e = void 0 === e ? 4 * t : e, (r = "string" == typeof r ? {
                    text: r
                  } : r || {}).text = r.text || null, r.id = r.text ? r.id || "qrcode-description" : null, (n = "string" == typeof n ? {
                    text: n
                  } : n || {}).text = n.text || null, n.id = n.text ? n.id || "qrcode-title" : null;
                  var i,
                    a,
                    s,
                    u,
                    h = w.getModuleCount() * t + 2 * e,
                    c = "";
                  for (u = "l" + t + ",0 0," + t + " -" + t + ",0 0,-" + t + "z ", c += '<svg version="1.1" xmlns="http://www.w3.org/2000/svg"', c += o.scalable ? "" : ' width="' + h + 'px" height="' + h + 'px"', c += ' viewBox="0 0 ' + h + " " + h + '" ', c += ' preserveAspectRatio="xMinYMin meet"', c += n.text || r.text ? ' role="img" aria-labelledby="' + k([n.id, r.id].join(" ").trim()) + '"' : "", c += ">", c += n.text ? '<title id="' + k(n.id) + '">' + k(n.text) + "</title>" : "", c += r.text ? '<description id="' + k(r.id) + '">' + k(r.text) + "</description>" : "", c += '<rect width="100%" height="100%" fill="white" cx="0" cy="0"/>', c += '<path d="', a = 0; a < w.getModuleCount(); a += 1) for (s = a * t + e, i = 0; i < w.getModuleCount(); i += 1) w.isDark(a, i) && (c += "M" + (i * t + e) + "," + s + u);
                  return (c += '" stroke="transparent" fill="black"/>') + "</svg>";
                }, w.createDataURL = function (t, e) {
                  t = t || 2, e = void 0 === e ? 4 * t : e;
                  var r = w.getModuleCount() * t + 2 * e,
                    n = e,
                    o = r - e;
                  return y(r, r, function (e, r) {
                    if (n <= e && e < o && n <= r && r < o) {
                      var i = Math.floor((e - n) / t),
                        a = Math.floor((r - n) / t);
                      return w.isDark(a, i) ? 0 : 1;
                    }
                    return 1;
                  });
                }, w.createImgTag = function (t, e, r) {
                  t = t || 2, e = void 0 === e ? 4 * t : e;
                  var n = w.getModuleCount() * t + 2 * e,
                    o = "";
                  return o += "<img", o += ' src="', o += w.createDataURL(t, e), o += '"', o += ' width="', o += n, o += '"', o += ' height="', o += n, o += '"', r && (o += ' alt="', o += k(r), o += '"'), o + "/>";
                };
                var k = function (t) {
                  for (var e = "", r = 0; r < t.length; r += 1) {
                    var n = t.charAt(r);
                    switch (n) {
                      case "<":
                        e += "&lt;";
                        break;
                      case ">":
                        e += "&gt;";
                        break;
                      case "&":
                        e += "&amp;";
                        break;
                      case '"':
                        e += "&quot;";
                        break;
                      default:
                        e += n;
                    }
                  }
                  return e;
                };
                return w.createASCII = function (t, e) {
                  if ((t = t || 1) < 2) return function (t) {
                    t = void 0 === t ? 2 : t;
                    var e,
                      r,
                      n,
                      o,
                      i,
                      a = 1 * w.getModuleCount() + 2 * t,
                      s = t,
                      u = a - t,
                      h = {
                        "██": "█",
                        "█ ": "▀",
                        " █": "▄",
                        "  ": " "
                      },
                      c = {
                        "██": "▀",
                        "█ ": "▀",
                        " █": " ",
                        "  ": " "
                      },
                      l = "";
                    for (e = 0; e < a; e += 2) {
                      for (n = Math.floor((e - s) / 1), o = Math.floor((e + 1 - s) / 1), r = 0; r < a; r += 1) i = "█", s <= r && r < u && s <= e && e < u && w.isDark(n, Math.floor((r - s) / 1)) && (i = " "), s <= r && r < u && s <= e + 1 && e + 1 < u && w.isDark(o, Math.floor((r - s) / 1)) ? i += " " : i += "█", l += t < 1 && e + 1 >= u ? c[i] : h[i];
                      l += "\n";
                    }
                    return a % 2 && t > 0 ? l.substring(0, l.length - a - 1) + Array(a + 1).join("▀") : l.substring(0, l.length - 1);
                  }(e);
                  t -= 1, e = void 0 === e ? 2 * t : e;
                  var r,
                    n,
                    o,
                    i,
                    a = w.getModuleCount() * t + 2 * e,
                    s = e,
                    u = a - e,
                    h = Array(t + 1).join("██"),
                    c = Array(t + 1).join("  "),
                    l = "",
                    d = "";
                  for (r = 0; r < a; r += 1) {
                    for (o = Math.floor((r - s) / t), d = "", n = 0; n < a; n += 1) i = 1, s <= n && n < u && s <= r && r < u && w.isDark(o, Math.floor((n - s) / t)) && (i = 0), d += i ? h : c;
                    for (o = 0; o < t; o += 1) l += d + "\n";
                  }
                  return l.substring(0, l.length - 1);
                }, w.renderTo2dContext = function (t, e) {
                  e = e || 2;
                  for (var r = w.getModuleCount(), n = 0; n < r; n++) for (var o = 0; o < r; o++) t.fillStyle = w.isDark(n, o) ? "black" : "white", t.fillRect(n * e, o * e, e, e);
                }, w;
              };
              t.stringToBytes = (t.stringToBytesFuncs = {
                default: function (t) {
                  for (var e = [], r = 0; r < t.length; r += 1) {
                    var n = t.charCodeAt(r);
                    e.push(255 & n);
                  }
                  return e;
                }
              }).default, t.createStringToBytes = function (t, e) {
                var r = function () {
                    for (var r = w(t), n = function () {
                        var t = r.read();
                        if (-1 == t) throw "eof";
                        return t;
                      }, o = 0, i = {};;) {
                      var a = r.read();
                      if (-1 == a) break;
                      var s = n(),
                        u = n() << 8 | n();
                      i[String.fromCharCode(a << 8 | s)] = u, o += 1;
                    }
                    if (o != e) throw o + " != " + e;
                    return i;
                  }(),
                  n = "?".charCodeAt(0);
                return function (t) {
                  for (var e = [], o = 0; o < t.length; o += 1) {
                    var i = t.charCodeAt(o);
                    if (i < 128) e.push(i);else {
                      var a = r[t.charAt(o)];
                      "number" == typeof a ? (255 & a) == a ? e.push(a) : (e.push(a >>> 8), e.push(255 & a)) : e.push(n);
                    }
                  }
                  return e;
                };
              };
              var e,
                r,
                n,
                o,
                i,
                a = {
                  L: 1,
                  M: 0,
                  Q: 3,
                  H: 2
                },
                s = (e = [[], [6, 18], [6, 22], [6, 26], [6, 30], [6, 34], [6, 22, 38], [6, 24, 42], [6, 26, 46], [6, 28, 50], [6, 30, 54], [6, 32, 58], [6, 34, 62], [6, 26, 46, 66], [6, 26, 48, 70], [6, 26, 50, 74], [6, 30, 54, 78], [6, 30, 56, 82], [6, 30, 58, 86], [6, 34, 62, 90], [6, 28, 50, 72, 94], [6, 26, 50, 74, 98], [6, 30, 54, 78, 102], [6, 28, 54, 80, 106], [6, 32, 58, 84, 110], [6, 30, 58, 86, 114], [6, 34, 62, 90, 118], [6, 26, 50, 74, 98, 122], [6, 30, 54, 78, 102, 126], [6, 26, 52, 78, 104, 130], [6, 30, 56, 82, 108, 134], [6, 34, 60, 86, 112, 138], [6, 30, 58, 86, 114, 142], [6, 34, 62, 90, 118, 146], [6, 30, 54, 78, 102, 126, 150], [6, 24, 50, 76, 102, 128, 154], [6, 28, 54, 80, 106, 132, 158], [6, 32, 58, 84, 110, 136, 162], [6, 26, 54, 82, 110, 138, 166], [6, 30, 58, 86, 114, 142, 170]], r = 1335, n = 7973, i = function (t) {
                  for (var e = 0; 0 != t;) e += 1, t >>>= 1;
                  return e;
                }, (o = {}).getBCHTypeInfo = function (t) {
                  for (var e = t << 10; i(e) - i(r) >= 0;) e ^= r << i(e) - i(r);
                  return 21522 ^ (t << 10 | e);
                }, o.getBCHTypeNumber = function (t) {
                  for (var e = t << 12; i(e) - i(n) >= 0;) e ^= n << i(e) - i(n);
                  return t << 12 | e;
                }, o.getPatternPosition = function (t) {
                  return e[t - 1];
                }, o.getMaskFunction = function (t) {
                  switch (t) {
                    case 0:
                      return function (t, e) {
                        return (t + e) % 2 == 0;
                      };
                    case 1:
                      return function (t, e) {
                        return t % 2 == 0;
                      };
                    case 2:
                      return function (t, e) {
                        return e % 3 == 0;
                      };
                    case 3:
                      return function (t, e) {
                        return (t + e) % 3 == 0;
                      };
                    case 4:
                      return function (t, e) {
                        return (Math.floor(t / 2) + Math.floor(e / 3)) % 2 == 0;
                      };
                    case 5:
                      return function (t, e) {
                        return t * e % 2 + t * e % 3 == 0;
                      };
                    case 6:
                      return function (t, e) {
                        return (t * e % 2 + t * e % 3) % 2 == 0;
                      };
                    case 7:
                      return function (t, e) {
                        return (t * e % 3 + (t + e) % 2) % 2 == 0;
                      };
                    default:
                      throw "bad maskPattern:" + t;
                  }
                }, o.getErrorCorrectPolynomial = function (t) {
                  for (var e = h([1], 0), r = 0; r < t; r += 1) e = e.multiply(h([1, u.gexp(r)], 0));
                  return e;
                }, o.getLengthInBits = function (t, e) {
                  if (1 <= e && e < 10) switch (t) {
                    case 1:
                      return 10;
                    case 2:
                      return 9;
                    case 4:
                    case 8:
                      return 8;
                    default:
                      throw "mode:" + t;
                  } else if (e < 27) switch (t) {
                    case 1:
                      return 12;
                    case 2:
                      return 11;
                    case 4:
                      return 16;
                    case 8:
                      return 10;
                    default:
                      throw "mode:" + t;
                  } else {
                    if (!(e < 41)) throw "type:" + e;
                    switch (t) {
                      case 1:
                        return 14;
                      case 2:
                        return 13;
                      case 4:
                        return 16;
                      case 8:
                        return 12;
                      default:
                        throw "mode:" + t;
                    }
                  }
                }, o.getLostPoint = function (t) {
                  for (var e = t.getModuleCount(), r = 0, n = 0; n < e; n += 1) for (var o = 0; o < e; o += 1) {
                    for (var i = 0, a = t.isDark(n, o), s = -1; s <= 1; s += 1) if (!(n + s < 0 || e <= n + s)) for (var u = -1; u <= 1; u += 1) o + u < 0 || e <= o + u || 0 == s && 0 == u || a == t.isDark(n + s, o + u) && (i += 1);
                    i > 5 && (r += 3 + i - 5);
                  }
                  for (n = 0; n < e - 1; n += 1) for (o = 0; o < e - 1; o += 1) {
                    var h = 0;
                    t.isDark(n, o) && (h += 1), t.isDark(n + 1, o) && (h += 1), t.isDark(n, o + 1) && (h += 1), t.isDark(n + 1, o + 1) && (h += 1), 0 != h && 4 != h || (r += 3);
                  }
                  for (n = 0; n < e; n += 1) for (o = 0; o < e - 6; o += 1) t.isDark(n, o) && !t.isDark(n, o + 1) && t.isDark(n, o + 2) && t.isDark(n, o + 3) && t.isDark(n, o + 4) && !t.isDark(n, o + 5) && t.isDark(n, o + 6) && (r += 40);
                  for (o = 0; o < e; o += 1) for (n = 0; n < e - 6; n += 1) t.isDark(n, o) && !t.isDark(n + 1, o) && t.isDark(n + 2, o) && t.isDark(n + 3, o) && t.isDark(n + 4, o) && !t.isDark(n + 5, o) && t.isDark(n + 6, o) && (r += 40);
                  var c = 0;
                  for (o = 0; o < e; o += 1) for (n = 0; n < e; n += 1) t.isDark(n, o) && (c += 1);
                  return r + Math.abs(100 * c / e / e - 50) / 5 * 10;
                }, o),
                u = function () {
                  for (var t = new Array(256), e = new Array(256), r = 0; r < 8; r += 1) t[r] = 1 << r;
                  for (r = 8; r < 256; r += 1) t[r] = t[r - 4] ^ t[r - 5] ^ t[r - 6] ^ t[r - 8];
                  for (r = 0; r < 255; r += 1) e[t[r]] = r;
                  return {
                    glog: function (t) {
                      if (t < 1) throw "glog(" + t + ")";
                      return e[t];
                    },
                    gexp: function (e) {
                      for (; e < 0;) e += 255;
                      for (; e >= 256;) e -= 255;
                      return t[e];
                    }
                  };
                }();
              function h(t, e) {
                if (void 0 === t.length) throw t.length + "/" + e;
                var r = function () {
                    for (var r = 0; r < t.length && 0 == t[r];) r += 1;
                    for (var n = new Array(t.length - r + e), o = 0; o < t.length - r; o += 1) n[o] = t[o + r];
                    return n;
                  }(),
                  n = {
                    getAt: function (t) {
                      return r[t];
                    },
                    getLength: function () {
                      return r.length;
                    },
                    multiply: function (t) {
                      for (var e = new Array(n.getLength() + t.getLength() - 1), r = 0; r < n.getLength(); r += 1) for (var o = 0; o < t.getLength(); o += 1) e[r + o] ^= u.gexp(u.glog(n.getAt(r)) + u.glog(t.getAt(o)));
                      return h(e, 0);
                    },
                    mod: function (t) {
                      if (n.getLength() - t.getLength() < 0) return n;
                      for (var e = u.glog(n.getAt(0)) - u.glog(t.getAt(0)), r = new Array(n.getLength()), o = 0; o < n.getLength(); o += 1) r[o] = n.getAt(o);
                      for (o = 0; o < t.getLength(); o += 1) r[o] ^= u.gexp(u.glog(t.getAt(o)) + e);
                      return h(r, 0).mod(t);
                    }
                  };
                return n;
              }
              var c = function () {
                  var t = [[1, 26, 19], [1, 26, 16], [1, 26, 13], [1, 26, 9], [1, 44, 34], [1, 44, 28], [1, 44, 22], [1, 44, 16], [1, 70, 55], [1, 70, 44], [2, 35, 17], [2, 35, 13], [1, 100, 80], [2, 50, 32], [2, 50, 24], [4, 25, 9], [1, 134, 108], [2, 67, 43], [2, 33, 15, 2, 34, 16], [2, 33, 11, 2, 34, 12], [2, 86, 68], [4, 43, 27], [4, 43, 19], [4, 43, 15], [2, 98, 78], [4, 49, 31], [2, 32, 14, 4, 33, 15], [4, 39, 13, 1, 40, 14], [2, 121, 97], [2, 60, 38, 2, 61, 39], [4, 40, 18, 2, 41, 19], [4, 40, 14, 2, 41, 15], [2, 146, 116], [3, 58, 36, 2, 59, 37], [4, 36, 16, 4, 37, 17], [4, 36, 12, 4, 37, 13], [2, 86, 68, 2, 87, 69], [4, 69, 43, 1, 70, 44], [6, 43, 19, 2, 44, 20], [6, 43, 15, 2, 44, 16], [4, 101, 81], [1, 80, 50, 4, 81, 51], [4, 50, 22, 4, 51, 23], [3, 36, 12, 8, 37, 13], [2, 116, 92, 2, 117, 93], [6, 58, 36, 2, 59, 37], [4, 46, 20, 6, 47, 21], [7, 42, 14, 4, 43, 15], [4, 133, 107], [8, 59, 37, 1, 60, 38], [8, 44, 20, 4, 45, 21], [12, 33, 11, 4, 34, 12], [3, 145, 115, 1, 146, 116], [4, 64, 40, 5, 65, 41], [11, 36, 16, 5, 37, 17], [11, 36, 12, 5, 37, 13], [5, 109, 87, 1, 110, 88], [5, 65, 41, 5, 66, 42], [5, 54, 24, 7, 55, 25], [11, 36, 12, 7, 37, 13], [5, 122, 98, 1, 123, 99], [7, 73, 45, 3, 74, 46], [15, 43, 19, 2, 44, 20], [3, 45, 15, 13, 46, 16], [1, 135, 107, 5, 136, 108], [10, 74, 46, 1, 75, 47], [1, 50, 22, 15, 51, 23], [2, 42, 14, 17, 43, 15], [5, 150, 120, 1, 151, 121], [9, 69, 43, 4, 70, 44], [17, 50, 22, 1, 51, 23], [2, 42, 14, 19, 43, 15], [3, 141, 113, 4, 142, 114], [3, 70, 44, 11, 71, 45], [17, 47, 21, 4, 48, 22], [9, 39, 13, 16, 40, 14], [3, 135, 107, 5, 136, 108], [3, 67, 41, 13, 68, 42], [15, 54, 24, 5, 55, 25], [15, 43, 15, 10, 44, 16], [4, 144, 116, 4, 145, 117], [17, 68, 42], [17, 50, 22, 6, 51, 23], [19, 46, 16, 6, 47, 17], [2, 139, 111, 7, 140, 112], [17, 74, 46], [7, 54, 24, 16, 55, 25], [34, 37, 13], [4, 151, 121, 5, 152, 122], [4, 75, 47, 14, 76, 48], [11, 54, 24, 14, 55, 25], [16, 45, 15, 14, 46, 16], [6, 147, 117, 4, 148, 118], [6, 73, 45, 14, 74, 46], [11, 54, 24, 16, 55, 25], [30, 46, 16, 2, 47, 17], [8, 132, 106, 4, 133, 107], [8, 75, 47, 13, 76, 48], [7, 54, 24, 22, 55, 25], [22, 45, 15, 13, 46, 16], [10, 142, 114, 2, 143, 115], [19, 74, 46, 4, 75, 47], [28, 50, 22, 6, 51, 23], [33, 46, 16, 4, 47, 17], [8, 152, 122, 4, 153, 123], [22, 73, 45, 3, 74, 46], [8, 53, 23, 26, 54, 24], [12, 45, 15, 28, 46, 16], [3, 147, 117, 10, 148, 118], [3, 73, 45, 23, 74, 46], [4, 54, 24, 31, 55, 25], [11, 45, 15, 31, 46, 16], [7, 146, 116, 7, 147, 117], [21, 73, 45, 7, 74, 46], [1, 53, 23, 37, 54, 24], [19, 45, 15, 26, 46, 16], [5, 145, 115, 10, 146, 116], [19, 75, 47, 10, 76, 48], [15, 54, 24, 25, 55, 25], [23, 45, 15, 25, 46, 16], [13, 145, 115, 3, 146, 116], [2, 74, 46, 29, 75, 47], [42, 54, 24, 1, 55, 25], [23, 45, 15, 28, 46, 16], [17, 145, 115], [10, 74, 46, 23, 75, 47], [10, 54, 24, 35, 55, 25], [19, 45, 15, 35, 46, 16], [17, 145, 115, 1, 146, 116], [14, 74, 46, 21, 75, 47], [29, 54, 24, 19, 55, 25], [11, 45, 15, 46, 46, 16], [13, 145, 115, 6, 146, 116], [14, 74, 46, 23, 75, 47], [44, 54, 24, 7, 55, 25], [59, 46, 16, 1, 47, 17], [12, 151, 121, 7, 152, 122], [12, 75, 47, 26, 76, 48], [39, 54, 24, 14, 55, 25], [22, 45, 15, 41, 46, 16], [6, 151, 121, 14, 152, 122], [6, 75, 47, 34, 76, 48], [46, 54, 24, 10, 55, 25], [2, 45, 15, 64, 46, 16], [17, 152, 122, 4, 153, 123], [29, 74, 46, 14, 75, 47], [49, 54, 24, 10, 55, 25], [24, 45, 15, 46, 46, 16], [4, 152, 122, 18, 153, 123], [13, 74, 46, 32, 75, 47], [48, 54, 24, 14, 55, 25], [42, 45, 15, 32, 46, 16], [20, 147, 117, 4, 148, 118], [40, 75, 47, 7, 76, 48], [43, 54, 24, 22, 55, 25], [10, 45, 15, 67, 46, 16], [19, 148, 118, 6, 149, 119], [18, 75, 47, 31, 76, 48], [34, 54, 24, 34, 55, 25], [20, 45, 15, 61, 46, 16]],
                    e = function (t, e) {
                      var r = {};
                      return r.totalCount = t, r.dataCount = e, r;
                    },
                    r = {
                      getRSBlocks: function (r, n) {
                        var o = function (e, r) {
                          switch (r) {
                            case a.L:
                              return t[4 * (e - 1) + 0];
                            case a.M:
                              return t[4 * (e - 1) + 1];
                            case a.Q:
                              return t[4 * (e - 1) + 2];
                            case a.H:
                              return t[4 * (e - 1) + 3];
                            default:
                              return;
                          }
                        }(r, n);
                        if (void 0 === o) throw "bad rs block @ typeNumber:" + r + "/errorCorrectionLevel:" + n;
                        for (var i = o.length / 3, s = [], u = 0; u < i; u += 1) for (var h = o[3 * u + 0], c = o[3 * u + 1], l = o[3 * u + 2], d = 0; d < h; d += 1) s.push(e(c, l));
                        return s;
                      }
                    };
                  return r;
                }(),
                l = function () {
                  var t = [],
                    e = 0,
                    r = {
                      getBuffer: function () {
                        return t;
                      },
                      getAt: function (e) {
                        var r = Math.floor(e / 8);
                        return 1 == (t[r] >>> 7 - e % 8 & 1);
                      },
                      put: function (t, e) {
                        for (var n = 0; n < e; n += 1) r.putBit(1 == (t >>> e - n - 1 & 1));
                      },
                      getLengthInBits: function () {
                        return e;
                      },
                      putBit: function (r) {
                        var n = Math.floor(e / 8);
                        t.length <= n && t.push(0), r && (t[n] |= 128 >>> e % 8), e += 1;
                      }
                    };
                  return r;
                },
                d = function (t) {
                  var e = t,
                    r = {
                      getMode: function () {
                        return 1;
                      },
                      getLength: function (t) {
                        return e.length;
                      },
                      write: function (t) {
                        for (var r = e, o = 0; o + 2 < r.length;) t.put(n(r.substring(o, o + 3)), 10), o += 3;
                        o < r.length && (r.length - o == 1 ? t.put(n(r.substring(o, o + 1)), 4) : r.length - o == 2 && t.put(n(r.substring(o, o + 2)), 7));
                      }
                    },
                    n = function (t) {
                      for (var e = 0, r = 0; r < t.length; r += 1) e = 10 * e + o(t.charAt(r));
                      return e;
                    },
                    o = function (t) {
                      if ("0" <= t && t <= "9") return t.charCodeAt(0) - "0".charCodeAt(0);
                      throw "illegal char :" + t;
                    };
                  return r;
                },
                f = function (t) {
                  var e = t,
                    r = {
                      getMode: function () {
                        return 2;
                      },
                      getLength: function (t) {
                        return e.length;
                      },
                      write: function (t) {
                        for (var r = e, o = 0; o + 1 < r.length;) t.put(45 * n(r.charAt(o)) + n(r.charAt(o + 1)), 11), o += 2;
                        o < r.length && t.put(n(r.charAt(o)), 6);
                      }
                    },
                    n = function (t) {
                      if ("0" <= t && t <= "9") return t.charCodeAt(0) - "0".charCodeAt(0);
                      if ("A" <= t && t <= "Z") return t.charCodeAt(0) - "A".charCodeAt(0) + 10;
                      switch (t) {
                        case " ":
                          return 36;
                        case "$":
                          return 37;
                        case "%":
                          return 38;
                        case "*":
                          return 39;
                        case "+":
                          return 40;
                        case "-":
                          return 41;
                        case ".":
                          return 42;
                        case "/":
                          return 43;
                        case ":":
                          return 44;
                        default:
                          throw "illegal char :" + t;
                      }
                    };
                  return r;
                },
                g = function (e) {
                  var r = t.stringToBytes(e);
                  return {
                    getMode: function () {
                      return 4;
                    },
                    getLength: function (t) {
                      return r.length;
                    },
                    write: function (t) {
                      for (var e = 0; e < r.length; e += 1) t.put(r[e], 8);
                    }
                  };
                },
                p = function (e) {
                  var r = t.stringToBytesFuncs.SJIS;
                  if (!r) throw "sjis not supported.";
                  !function (t, e) {
                    var n = r("友");
                    if (2 != n.length || 38726 != (n[0] << 8 | n[1])) throw "sjis not supported.";
                  }();
                  var n = r(e);
                  return {
                    getMode: function () {
                      return 8;
                    },
                    getLength: function (t) {
                      return ~~(n.length / 2);
                    },
                    write: function (t) {
                      for (var e = n, r = 0; r + 1 < e.length;) {
                        var o = (255 & e[r]) << 8 | 255 & e[r + 1];
                        if (33088 <= o && o <= 40956) o -= 33088;else {
                          if (!(57408 <= o && o <= 60351)) throw "illegal char at " + (r + 1) + "/" + o;
                          o -= 49472;
                        }
                        o = 192 * (o >>> 8 & 255) + (255 & o), t.put(o, 13), r += 2;
                      }
                      if (r < e.length) throw "illegal char at " + (r + 1);
                    }
                  };
                },
                v = function () {
                  var t = [],
                    e = {
                      writeByte: function (e) {
                        t.push(255 & e);
                      },
                      writeShort: function (t) {
                        e.writeByte(t), e.writeByte(t >>> 8);
                      },
                      writeBytes: function (t, r, n) {
                        r = r || 0, n = n || t.length;
                        for (var o = 0; o < n; o += 1) e.writeByte(t[o + r]);
                      },
                      writeString: function (t) {
                        for (var r = 0; r < t.length; r += 1) e.writeByte(t.charCodeAt(r));
                      },
                      toByteArray: function () {
                        return t;
                      },
                      toString: function () {
                        var e = "";
                        e += "[";
                        for (var r = 0; r < t.length; r += 1) r > 0 && (e += ","), e += t[r];
                        return e + "]";
                      }
                    };
                  return e;
                },
                w = function (t) {
                  var e = t,
                    r = 0,
                    n = 0,
                    o = 0,
                    i = {
                      read: function () {
                        for (; o < 8;) {
                          if (r >= e.length) {
                            if (0 == o) return -1;
                            throw "unexpected end of file./" + o;
                          }
                          var t = e.charAt(r);
                          if (r += 1, "=" == t) return o = 0, -1;
                          t.match(/^\s$/) || (n = n << 6 | a(t.charCodeAt(0)), o += 6);
                        }
                        var i = n >>> o - 8 & 255;
                        return o -= 8, i;
                      }
                    },
                    a = function (t) {
                      if (65 <= t && t <= 90) return t - 65;
                      if (97 <= t && t <= 122) return t - 97 + 26;
                      if (48 <= t && t <= 57) return t - 48 + 52;
                      if (43 == t) return 62;
                      if (47 == t) return 63;
                      throw "c:" + t;
                    };
                  return i;
                },
                y = function (t, e, r) {
                  for (var n = function (t, e) {
                      var r = t,
                        n = e,
                        o = new Array(t * e),
                        i = {
                          setPixel: function (t, e, n) {
                            o[e * r + t] = n;
                          },
                          write: function (t) {
                            t.writeString("GIF87a"), t.writeShort(r), t.writeShort(n), t.writeByte(128), t.writeByte(0), t.writeByte(0), t.writeByte(0), t.writeByte(0), t.writeByte(0), t.writeByte(255), t.writeByte(255), t.writeByte(255), t.writeString(","), t.writeShort(0), t.writeShort(0), t.writeShort(r), t.writeShort(n), t.writeByte(0);
                            var e = a(2);
                            t.writeByte(2);
                            for (var o = 0; e.length - o > 255;) t.writeByte(255), t.writeBytes(e, o, 255), o += 255;
                            t.writeByte(e.length - o), t.writeBytes(e, o, e.length - o), t.writeByte(0), t.writeString(";");
                          }
                        },
                        a = function (t) {
                          for (var e = 1 << t, r = 1 + (1 << t), n = t + 1, i = s(), a = 0; a < e; a += 1) i.add(String.fromCharCode(a));
                          i.add(String.fromCharCode(e)), i.add(String.fromCharCode(r));
                          var u,
                            h,
                            c,
                            l = v(),
                            d = (u = l, h = 0, c = 0, {
                              write: function (t, e) {
                                if (t >>> e != 0) throw "length over";
                                for (; h + e >= 8;) u.writeByte(255 & (t << h | c)), e -= 8 - h, t >>>= 8 - h, c = 0, h = 0;
                                c |= t << h, h += e;
                              },
                              flush: function () {
                                h > 0 && u.writeByte(c);
                              }
                            });
                          d.write(e, n);
                          var f = 0,
                            g = String.fromCharCode(o[f]);
                          for (f += 1; f < o.length;) {
                            var p = String.fromCharCode(o[f]);
                            f += 1, i.contains(g + p) ? g += p : (d.write(i.indexOf(g), n), i.size() < 4095 && (i.size() == 1 << n && (n += 1), i.add(g + p)), g = p);
                          }
                          return d.write(i.indexOf(g), n), d.write(r, n), d.flush(), l.toByteArray();
                        },
                        s = function () {
                          var t = {},
                            e = 0,
                            r = {
                              add: function (n) {
                                if (r.contains(n)) throw "dup key:" + n;
                                t[n] = e, e += 1;
                              },
                              size: function () {
                                return e;
                              },
                              indexOf: function (e) {
                                return t[e];
                              },
                              contains: function (e) {
                                return void 0 !== t[e];
                              }
                            };
                          return r;
                        };
                      return i;
                    }(t, e), o = 0; o < e; o += 1) for (var i = 0; i < t; i += 1) n.setPixel(i, o, r(i, o));
                  var a = v();
                  n.write(a);
                  for (var s = function () {
                      var t = 0,
                        e = 0,
                        r = 0,
                        n = "",
                        o = {},
                        i = function (t) {
                          n += String.fromCharCode(a(63 & t));
                        },
                        a = function (t) {
                          if (t < 0) ;else {
                            if (t < 26) return 65 + t;
                            if (t < 52) return t - 26 + 97;
                            if (t < 62) return t - 52 + 48;
                            if (62 == t) return 43;
                            if (63 == t) return 47;
                          }
                          throw "n:" + t;
                        };
                      return o.writeByte = function (n) {
                        for (t = t << 8 | 255 & n, e += 8, r += 1; e >= 6;) i(t >>> e - 6), e -= 6;
                      }, o.flush = function () {
                        if (e > 0 && (i(t << 6 - e), t = 0, e = 0), r % 3 != 0) for (var o = 3 - r % 3, a = 0; a < o; a += 1) n += "=";
                      }, o.toString = function () {
                        return n;
                      }, o;
                    }(), u = a.toByteArray(), h = 0; h < u.length; h += 1) s.writeByte(u[h]);
                  return s.flush(), "data:image/gif;base64," + s;
                };
              return t;
            }();
          o.stringToBytesFuncs["UTF-8"] = function (t) {
            return function (t) {
              for (var e = [], r = 0; r < t.length; r++) {
                var n = t.charCodeAt(r);
                n < 128 ? e.push(n) : n < 2048 ? e.push(192 | n >> 6, 128 | 63 & n) : n < 55296 || n >= 57344 ? e.push(224 | n >> 12, 128 | n >> 6 & 63, 128 | 63 & n) : (r++, n = 65536 + ((1023 & n) << 10 | 1023 & t.charCodeAt(r)), e.push(240 | n >> 18, 128 | n >> 12 & 63, 128 | n >> 6 & 63, 128 | 63 & n));
              }
              return e;
            }(t);
          }, void 0 === (n = "function" == typeof (r = function () {
            return o;
          }) ? r.apply(e, []) : r) || (t.exports = n);
        },
        676: (t, e, r) => {
          "use strict";

          r.d(e, {
            default: () => q
          });
          var n = function () {
              return (n = Object.assign || function (t) {
                for (var e, r = 1, n = arguments.length; r < n; r++) for (var o in e = arguments[r]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                return t;
              }).apply(this, arguments);
            },
            o = function () {
              for (var t = 0, e = 0, r = arguments.length; e < r; e++) t += arguments[e].length;
              var n = Array(t),
                o = 0;
              for (e = 0; e < r; e++) for (var i = arguments[e], a = 0, s = i.length; a < s; a++, o++) n[o] = i[a];
              return n;
            },
            i = function (t) {
              return !!t && "object" == typeof t && !Array.isArray(t);
            };
          function a(t) {
            for (var e = [], r = 1; r < arguments.length; r++) e[r - 1] = arguments[r];
            if (!e.length) return t;
            var s = e.shift();
            return void 0 !== s && i(t) && i(s) ? (t = n({}, t), Object.keys(s).forEach(function (e) {
              var r = t[e],
                n = s[e];
              Array.isArray(r) && Array.isArray(n) ? t[e] = n : i(r) && i(n) ? t[e] = a(Object.assign({}, r), n) : t[e] = n;
            }), a.apply(void 0, o([t], e))) : t;
          }
          function s(t, e) {
            var r = document.createElement("a");
            r.download = e, r.href = t, document.body.appendChild(r), r.click(), document.body.removeChild(r);
          }
          function u(t) {
            return e = this, r = void 0, o = function () {
              return function (t, e) {
                var r,
                  n,
                  o,
                  i,
                  a = {
                    label: 0,
                    sent: function () {
                      if (1 & o[0]) throw o[1];
                      return o[1];
                    },
                    trys: [],
                    ops: []
                  };
                return i = {
                  next: s(0),
                  throw: s(1),
                  return: s(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function () {
                  return this;
                }), i;
                function s(i) {
                  return function (s) {
                    return function (i) {
                      if (r) throw new TypeError("Generator is already executing.");
                      for (; a;) try {
                        if (r = 1, n && (o = 2 & i[0] ? n.return : i[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, i[1])).done) return o;
                        switch (n = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                          case 0:
                          case 1:
                            o = i;
                            break;
                          case 4:
                            return a.label++, {
                              value: i[1],
                              done: !1
                            };
                          case 5:
                            a.label++, n = i[1], i = [0];
                            continue;
                          case 7:
                            i = a.ops.pop(), a.trys.pop();
                            continue;
                          default:
                            if (!((o = (o = a.trys).length > 0 && o[o.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                              a = 0;
                              continue;
                            }
                            if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                              a.label = i[1];
                              break;
                            }
                            if (6 === i[0] && a.label < o[1]) {
                              a.label = o[1], o = i;
                              break;
                            }
                            if (o && a.label < o[2]) {
                              a.label = o[2], a.ops.push(i);
                              break;
                            }
                            o[2] && a.ops.pop(), a.trys.pop();
                            continue;
                        }
                        i = e.call(t, a);
                      } catch (t) {
                        i = [6, t], n = 0;
                      } finally {
                        r = o = 0;
                      }
                      if (5 & i[0]) throw i[1];
                      return {
                        value: i[0] ? i[1] : void 0,
                        done: !0
                      };
                    }([i, s]);
                  };
                }
              }(this, function (e) {
                return [2, new Promise(function (e) {
                  var r = new XMLHttpRequest();
                  r.onload = function () {
                    var t = new FileReader();
                    t.onloadend = function () {
                      e(t.result);
                    }, t.readAsDataURL(r.response);
                  }, r.open("GET", t), r.responseType = "blob", r.send();
                })];
              });
            }, new ((n = void 0) || (n = Promise))(function (t, i) {
              function a(t) {
                try {
                  u(o.next(t));
                } catch (t) {
                  i(t);
                }
              }
              function s(t) {
                try {
                  u(o.throw(t));
                } catch (t) {
                  i(t);
                }
              }
              function u(e) {
                var r;
                e.done ? t(e.value) : (r = e.value, r instanceof n ? r : new n(function (t) {
                  t(r);
                })).then(a, s);
              }
              u((o = o.apply(e, r || [])).next());
            });
            var e, r, n, o;
          }
          const h = {
            L: .07,
            M: .15,
            Q: .25,
            H: .3
          };
          var c = function () {
            return (c = Object.assign || function (t) {
              for (var e, r = 1, n = arguments.length; r < n; r++) for (var o in e = arguments[r]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
              return t;
            }).apply(this, arguments);
          };
          const l = function () {
            function t(t) {
              var e = t.svg,
                r = t.type;
              this._svg = e, this._type = r;
            }
            return t.prototype.draw = function (t, e, r, n) {
              var o;
              switch (this._type) {
                case "dots":
                  o = this._drawDot;
                  break;
                case "classy":
                  o = this._drawClassy;
                  break;
                case "classy-rounded":
                  o = this._drawClassyRounded;
                  break;
                case "rounded":
                  o = this._drawRounded;
                  break;
                case "extra-rounded":
                  o = this._drawExtraRounded;
                  break;
                case "square":
                default:
                  o = this._drawSquare;
              }
              o.call(this, {
                x: t,
                y: e,
                size: r,
                getNeighbor: n
              });
            }, t.prototype._rotateFigure = function (t) {
              var e,
                r = t.x,
                n = t.y,
                o = t.size,
                i = t.rotation,
                a = void 0 === i ? 0 : i,
                s = r + o / 2,
                u = n + o / 2;
              (0, t.draw)(), null === (e = this._element) || void 0 === e || e.setAttribute("transform", "rotate(" + 180 * a / Math.PI + "," + s + "," + u + ")");
            }, t.prototype._basicDot = function (t) {
              var e = this,
                r = t.size,
                n = t.x,
                o = t.y;
              this._rotateFigure(c(c({}, t), {
                draw: function () {
                  e._element = document.createElementNS("http://www.w3.org/2000/svg", "circle"), e._element.setAttribute("cx", String(n + r / 2)), e._element.setAttribute("cy", String(o + r / 2)), e._element.setAttribute("r", String(r / 2));
                }
              }));
            }, t.prototype._basicSquare = function (t) {
              var e = this,
                r = t.size,
                n = t.x,
                o = t.y;
              this._rotateFigure(c(c({}, t), {
                draw: function () {
                  e._element = document.createElementNS("http://www.w3.org/2000/svg", "rect"), e._element.setAttribute("x", String(n)), e._element.setAttribute("y", String(o)), e._element.setAttribute("width", String(r)), e._element.setAttribute("height", String(r));
                }
              }));
            }, t.prototype._basicSideRounded = function (t) {
              var e = this,
                r = t.size,
                n = t.x,
                o = t.y;
              this._rotateFigure(c(c({}, t), {
                draw: function () {
                  e._element = document.createElementNS("http://www.w3.org/2000/svg", "path"), e._element.setAttribute("d", "M " + n + " " + o + "v " + r + "h " + r / 2 + "a " + r / 2 + " " + r / 2 + ", 0, 0, 0, 0 " + -r);
                }
              }));
            }, t.prototype._basicCornerRounded = function (t) {
              var e = this,
                r = t.size,
                n = t.x,
                o = t.y;
              this._rotateFigure(c(c({}, t), {
                draw: function () {
                  e._element = document.createElementNS("http://www.w3.org/2000/svg", "path"), e._element.setAttribute("d", "M " + n + " " + o + "v " + r + "h " + r + "v " + -r / 2 + "a " + r / 2 + " " + r / 2 + ", 0, 0, 0, " + -r / 2 + " " + -r / 2);
                }
              }));
            }, t.prototype._basicCornerExtraRounded = function (t) {
              var e = this,
                r = t.size,
                n = t.x,
                o = t.y;
              this._rotateFigure(c(c({}, t), {
                draw: function () {
                  e._element = document.createElementNS("http://www.w3.org/2000/svg", "path"), e._element.setAttribute("d", "M " + n + " " + o + "v " + r + "h " + r + "a " + r + " " + r + ", 0, 0, 0, " + -r + " " + -r);
                }
              }));
            }, t.prototype._basicCornersRounded = function (t) {
              var e = this,
                r = t.size,
                n = t.x,
                o = t.y;
              this._rotateFigure(c(c({}, t), {
                draw: function () {
                  e._element = document.createElementNS("http://www.w3.org/2000/svg", "path"), e._element.setAttribute("d", "M " + n + " " + o + "v " + r / 2 + "a " + r / 2 + " " + r / 2 + ", 0, 0, 0, " + r / 2 + " " + r / 2 + "h " + r / 2 + "v " + -r / 2 + "a " + r / 2 + " " + r / 2 + ", 0, 0, 0, " + -r / 2 + " " + -r / 2);
                }
              }));
            }, t.prototype._drawDot = function (t) {
              var e = t.x,
                r = t.y,
                n = t.size;
              this._basicDot({
                x: e,
                y: r,
                size: n,
                rotation: 0
              });
            }, t.prototype._drawSquare = function (t) {
              var e = t.x,
                r = t.y,
                n = t.size;
              this._basicSquare({
                x: e,
                y: r,
                size: n,
                rotation: 0
              });
            }, t.prototype._drawRounded = function (t) {
              var e = t.x,
                r = t.y,
                n = t.size,
                o = t.getNeighbor,
                i = o ? +o(-1, 0) : 0,
                a = o ? +o(1, 0) : 0,
                s = o ? +o(0, -1) : 0,
                u = o ? +o(0, 1) : 0,
                h = i + a + s + u;
              if (0 !== h) {
                if (h > 2 || i && a || s && u) this._basicSquare({
                  x: e,
                  y: r,
                  size: n,
                  rotation: 0
                });else {
                  if (2 === h) {
                    var c = 0;
                    return i && s ? c = Math.PI / 2 : s && a ? c = Math.PI : a && u && (c = -Math.PI / 2), void this._basicCornerRounded({
                      x: e,
                      y: r,
                      size: n,
                      rotation: c
                    });
                  }
                  if (1 === h) return c = 0, s ? c = Math.PI / 2 : a ? c = Math.PI : u && (c = -Math.PI / 2), void this._basicSideRounded({
                    x: e,
                    y: r,
                    size: n,
                    rotation: c
                  });
                }
              } else this._basicDot({
                x: e,
                y: r,
                size: n,
                rotation: 0
              });
            }, t.prototype._drawExtraRounded = function (t) {
              var e = t.x,
                r = t.y,
                n = t.size,
                o = t.getNeighbor,
                i = o ? +o(-1, 0) : 0,
                a = o ? +o(1, 0) : 0,
                s = o ? +o(0, -1) : 0,
                u = o ? +o(0, 1) : 0,
                h = i + a + s + u;
              if (0 !== h) {
                if (h > 2 || i && a || s && u) this._basicSquare({
                  x: e,
                  y: r,
                  size: n,
                  rotation: 0
                });else {
                  if (2 === h) {
                    var c = 0;
                    return i && s ? c = Math.PI / 2 : s && a ? c = Math.PI : a && u && (c = -Math.PI / 2), void this._basicCornerExtraRounded({
                      x: e,
                      y: r,
                      size: n,
                      rotation: c
                    });
                  }
                  if (1 === h) return c = 0, s ? c = Math.PI / 2 : a ? c = Math.PI : u && (c = -Math.PI / 2), void this._basicSideRounded({
                    x: e,
                    y: r,
                    size: n,
                    rotation: c
                  });
                }
              } else this._basicDot({
                x: e,
                y: r,
                size: n,
                rotation: 0
              });
            }, t.prototype._drawClassy = function (t) {
              var e = t.x,
                r = t.y,
                n = t.size,
                o = t.getNeighbor,
                i = o ? +o(-1, 0) : 0,
                a = o ? +o(1, 0) : 0,
                s = o ? +o(0, -1) : 0,
                u = o ? +o(0, 1) : 0;
              0 !== i + a + s + u ? i || s ? a || u ? this._basicSquare({
                x: e,
                y: r,
                size: n,
                rotation: 0
              }) : this._basicCornerRounded({
                x: e,
                y: r,
                size: n,
                rotation: Math.PI / 2
              }) : this._basicCornerRounded({
                x: e,
                y: r,
                size: n,
                rotation: -Math.PI / 2
              }) : this._basicCornersRounded({
                x: e,
                y: r,
                size: n,
                rotation: Math.PI / 2
              });
            }, t.prototype._drawClassyRounded = function (t) {
              var e = t.x,
                r = t.y,
                n = t.size,
                o = t.getNeighbor,
                i = o ? +o(-1, 0) : 0,
                a = o ? +o(1, 0) : 0,
                s = o ? +o(0, -1) : 0,
                u = o ? +o(0, 1) : 0;
              0 !== i + a + s + u ? i || s ? a || u ? this._basicSquare({
                x: e,
                y: r,
                size: n,
                rotation: 0
              }) : this._basicCornerExtraRounded({
                x: e,
                y: r,
                size: n,
                rotation: Math.PI / 2
              }) : this._basicCornerExtraRounded({
                x: e,
                y: r,
                size: n,
                rotation: -Math.PI / 2
              }) : this._basicCornersRounded({
                x: e,
                y: r,
                size: n,
                rotation: Math.PI / 2
              });
            }, t;
          }();
          var d = function () {
            return (d = Object.assign || function (t) {
              for (var e, r = 1, n = arguments.length; r < n; r++) for (var o in e = arguments[r]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
              return t;
            }).apply(this, arguments);
          };
          const f = function () {
            function t(t) {
              var e = t.svg,
                r = t.type;
              this._svg = e, this._type = r;
            }
            return t.prototype.draw = function (t, e, r, n) {
              var o;
              switch (this._type) {
                case "square":
                  o = this._drawSquare;
                  break;
                case "extra-rounded":
                  o = this._drawExtraRounded;
                  break;
                case "dot":
                default:
                  o = this._drawDot;
              }
              o.call(this, {
                x: t,
                y: e,
                size: r,
                rotation: n
              });
            }, t.prototype._rotateFigure = function (t) {
              var e,
                r = t.x,
                n = t.y,
                o = t.size,
                i = t.rotation,
                a = void 0 === i ? 0 : i,
                s = r + o / 2,
                u = n + o / 2;
              (0, t.draw)(), null === (e = this._element) || void 0 === e || e.setAttribute("transform", "rotate(" + 180 * a / Math.PI + "," + s + "," + u + ")");
            }, t.prototype._basicDot = function (t) {
              var e = this,
                r = t.size,
                n = t.x,
                o = t.y,
                i = r / 7;
              this._rotateFigure(d(d({}, t), {
                draw: function () {
                  e._element = document.createElementNS("http://www.w3.org/2000/svg", "path"), e._element.setAttribute("clip-rule", "evenodd"), e._element.setAttribute("d", "M " + (n + r / 2) + " " + o + "a " + r / 2 + " " + r / 2 + " 0 1 0 0.1 0zm 0 " + i + "a " + (r / 2 - i) + " " + (r / 2 - i) + " 0 1 1 -0.1 0Z");
                }
              }));
            }, t.prototype._basicSquare = function (t) {
              var e = this,
                r = t.size,
                n = t.x,
                o = t.y,
                i = r / 7;
              this._rotateFigure(d(d({}, t), {
                draw: function () {
                  e._element = document.createElementNS("http://www.w3.org/2000/svg", "path"), e._element.setAttribute("clip-rule", "evenodd"), e._element.setAttribute("d", "M " + n + " " + o + "v " + r + "h " + r + "v " + -r + "zM " + (n + i) + " " + (o + i) + "h " + (r - 2 * i) + "v " + (r - 2 * i) + "h " + (2 * i - r) + "z");
                }
              }));
            }, t.prototype._basicExtraRounded = function (t) {
              var e = this,
                r = t.size,
                n = t.x,
                o = t.y,
                i = r / 7;
              this._rotateFigure(d(d({}, t), {
                draw: function () {
                  e._element = document.createElementNS("http://www.w3.org/2000/svg", "path"), e._element.setAttribute("clip-rule", "evenodd"), e._element.setAttribute("d", "M " + n + " " + (o + 2.5 * i) + "v " + 2 * i + "a " + 2.5 * i + " " + 2.5 * i + ", 0, 0, 0, " + 2.5 * i + " " + 2.5 * i + "h " + 2 * i + "a " + 2.5 * i + " " + 2.5 * i + ", 0, 0, 0, " + 2.5 * i + " " + 2.5 * -i + "v " + -2 * i + "a " + 2.5 * i + " " + 2.5 * i + ", 0, 0, 0, " + 2.5 * -i + " " + 2.5 * -i + "h " + -2 * i + "a " + 2.5 * i + " " + 2.5 * i + ", 0, 0, 0, " + 2.5 * -i + " " + 2.5 * i + "M " + (n + 2.5 * i) + " " + (o + i) + "h " + 2 * i + "a " + 1.5 * i + " " + 1.5 * i + ", 0, 0, 1, " + 1.5 * i + " " + 1.5 * i + "v " + 2 * i + "a " + 1.5 * i + " " + 1.5 * i + ", 0, 0, 1, " + 1.5 * -i + " " + 1.5 * i + "h " + -2 * i + "a " + 1.5 * i + " " + 1.5 * i + ", 0, 0, 1, " + 1.5 * -i + " " + 1.5 * -i + "v " + -2 * i + "a " + 1.5 * i + " " + 1.5 * i + ", 0, 0, 1, " + 1.5 * i + " " + 1.5 * -i);
                }
              }));
            }, t.prototype._drawDot = function (t) {
              var e = t.x,
                r = t.y,
                n = t.size,
                o = t.rotation;
              this._basicDot({
                x: e,
                y: r,
                size: n,
                rotation: o
              });
            }, t.prototype._drawSquare = function (t) {
              var e = t.x,
                r = t.y,
                n = t.size,
                o = t.rotation;
              this._basicSquare({
                x: e,
                y: r,
                size: n,
                rotation: o
              });
            }, t.prototype._drawExtraRounded = function (t) {
              var e = t.x,
                r = t.y,
                n = t.size,
                o = t.rotation;
              this._basicExtraRounded({
                x: e,
                y: r,
                size: n,
                rotation: o
              });
            }, t;
          }();
          var g = function () {
            return (g = Object.assign || function (t) {
              for (var e, r = 1, n = arguments.length; r < n; r++) for (var o in e = arguments[r]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
              return t;
            }).apply(this, arguments);
          };
          const p = function () {
              function t(t) {
                var e = t.svg,
                  r = t.type;
                this._svg = e, this._type = r;
              }
              return t.prototype.draw = function (t, e, r, n) {
                var o;
                switch (this._type) {
                  case "square":
                    o = this._drawSquare;
                    break;
                  case "dot":
                  default:
                    o = this._drawDot;
                }
                o.call(this, {
                  x: t,
                  y: e,
                  size: r,
                  rotation: n
                });
              }, t.prototype._rotateFigure = function (t) {
                var e,
                  r = t.x,
                  n = t.y,
                  o = t.size,
                  i = t.rotation,
                  a = void 0 === i ? 0 : i,
                  s = r + o / 2,
                  u = n + o / 2;
                (0, t.draw)(), null === (e = this._element) || void 0 === e || e.setAttribute("transform", "rotate(" + 180 * a / Math.PI + "," + s + "," + u + ")");
              }, t.prototype._basicDot = function (t) {
                var e = this,
                  r = t.size,
                  n = t.x,
                  o = t.y;
                this._rotateFigure(g(g({}, t), {
                  draw: function () {
                    e._element = document.createElementNS("http://www.w3.org/2000/svg", "circle"), e._element.setAttribute("cx", String(n + r / 2)), e._element.setAttribute("cy", String(o + r / 2)), e._element.setAttribute("r", String(r / 2));
                  }
                }));
              }, t.prototype._basicSquare = function (t) {
                var e = this,
                  r = t.size,
                  n = t.x,
                  o = t.y;
                this._rotateFigure(g(g({}, t), {
                  draw: function () {
                    e._element = document.createElementNS("http://www.w3.org/2000/svg", "rect"), e._element.setAttribute("x", String(n)), e._element.setAttribute("y", String(o)), e._element.setAttribute("width", String(r)), e._element.setAttribute("height", String(r));
                  }
                }));
              }, t.prototype._drawDot = function (t) {
                var e = t.x,
                  r = t.y,
                  n = t.size,
                  o = t.rotation;
                this._basicDot({
                  x: e,
                  y: r,
                  size: n,
                  rotation: o
                });
              }, t.prototype._drawSquare = function (t) {
                var e = t.x,
                  r = t.y,
                  n = t.size,
                  o = t.rotation;
                this._basicSquare({
                  x: e,
                  y: r,
                  size: n,
                  rotation: o
                });
              }, t;
            }(),
            v = "circle";
          var w = function (t, e, r, n) {
              return new (r || (r = Promise))(function (o, i) {
                function a(t) {
                  try {
                    u(n.next(t));
                  } catch (t) {
                    i(t);
                  }
                }
                function s(t) {
                  try {
                    u(n.throw(t));
                  } catch (t) {
                    i(t);
                  }
                }
                function u(t) {
                  var e;
                  t.done ? o(t.value) : (e = t.value, e instanceof r ? e : new r(function (t) {
                    t(e);
                  })).then(a, s);
                }
                u((n = n.apply(t, e || [])).next());
              });
            },
            y = function (t, e) {
              var r,
                n,
                o,
                i,
                a = {
                  label: 0,
                  sent: function () {
                    if (1 & o[0]) throw o[1];
                    return o[1];
                  },
                  trys: [],
                  ops: []
                };
              return i = {
                next: s(0),
                throw: s(1),
                return: s(2)
              }, "function" == typeof Symbol && (i[Symbol.iterator] = function () {
                return this;
              }), i;
              function s(i) {
                return function (s) {
                  return function (i) {
                    if (r) throw new TypeError("Generator is already executing.");
                    for (; a;) try {
                      if (r = 1, n && (o = 2 & i[0] ? n.return : i[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, i[1])).done) return o;
                      switch (n = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                        case 0:
                        case 1:
                          o = i;
                          break;
                        case 4:
                          return a.label++, {
                            value: i[1],
                            done: !1
                          };
                        case 5:
                          a.label++, n = i[1], i = [0];
                          continue;
                        case 7:
                          i = a.ops.pop(), a.trys.pop();
                          continue;
                        default:
                          if (!((o = (o = a.trys).length > 0 && o[o.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                            a = 0;
                            continue;
                          }
                          if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                            a.label = i[1];
                            break;
                          }
                          if (6 === i[0] && a.label < o[1]) {
                            a.label = o[1], o = i;
                            break;
                          }
                          if (o && a.label < o[2]) {
                            a.label = o[2], a.ops.push(i);
                            break;
                          }
                          o[2] && a.ops.pop(), a.trys.pop();
                          continue;
                      }
                      i = e.call(t, a);
                    } catch (t) {
                      i = [6, t], n = 0;
                    } finally {
                      r = o = 0;
                    }
                    if (5 & i[0]) throw i[1];
                    return {
                      value: i[0] ? i[1] : void 0,
                      done: !0
                    };
                  }([i, s]);
                };
              }
            },
            m = [[1, 1, 1, 1, 1, 1, 1], [1, 0, 0, 0, 0, 0, 1], [1, 0, 0, 0, 0, 0, 1], [1, 0, 0, 0, 0, 0, 1], [1, 0, 0, 0, 0, 0, 1], [1, 0, 0, 0, 0, 0, 1], [1, 1, 1, 1, 1, 1, 1]],
            b = [[0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 1, 1, 0, 0], [0, 0, 1, 1, 1, 0, 0], [0, 0, 1, 1, 1, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0]];
          const _ = function () {
              function t(t) {
                this._element = document.createElementNS("http://www.w3.org/2000/svg", "svg"), this._element.setAttribute("width", String(t.width)), this._element.setAttribute("height", String(t.height)), this._defs = document.createElementNS("http://www.w3.org/2000/svg", "defs"), this._element.appendChild(this._defs), this._options = t;
              }
              return Object.defineProperty(t.prototype, "width", {
                get: function () {
                  return this._options.width;
                },
                enumerable: !1,
                configurable: !0
              }), Object.defineProperty(t.prototype, "height", {
                get: function () {
                  return this._options.height;
                },
                enumerable: !1,
                configurable: !0
              }), t.prototype.getElement = function () {
                return this._element;
              }, t.prototype.drawQR = function (t) {
                return w(this, void 0, void 0, function () {
                  var e,
                    r,
                    n,
                    o,
                    i,
                    a,
                    s,
                    u,
                    c,
                    l,
                    d = this;
                  return y(this, function (f) {
                    switch (f.label) {
                      case 0:
                        return e = t.getModuleCount(), r = Math.min(this._options.width, this._options.height) - 2 * this._options.margin, n = this._options.shape === v ? r / Math.sqrt(2) : r, o = Math.floor(n / e), i = {
                          hideXDots: 0,
                          hideYDots: 0,
                          width: 0,
                          height: 0
                        }, this._qr = t, this._options.image ? [4, this.loadImage()] : [3, 2];
                      case 1:
                        if (f.sent(), !this._image) return [2];
                        a = this._options, s = a.imageOptions, u = a.qrOptions, c = s.imageSize * h[u.errorCorrectionLevel], l = Math.floor(c * e * e), i = function (t) {
                          var e = t.originalHeight,
                            r = t.originalWidth,
                            n = t.maxHiddenDots,
                            o = t.maxHiddenAxisDots,
                            i = t.dotSize,
                            a = {
                              x: 0,
                              y: 0
                            },
                            s = {
                              x: 0,
                              y: 0
                            };
                          if (e <= 0 || r <= 0 || n <= 0 || i <= 0) return {
                            height: 0,
                            width: 0,
                            hideYDots: 0,
                            hideXDots: 0
                          };
                          var u = e / r;
                          return a.x = Math.floor(Math.sqrt(n / u)), a.x <= 0 && (a.x = 1), o && o < a.x && (a.x = o), a.x % 2 == 0 && a.x--, s.x = a.x * i, a.y = 1 + 2 * Math.ceil((a.x * u - 1) / 2), s.y = Math.round(s.x * u), (a.y * a.x > n || o && o < a.y) && (o && o < a.y ? (a.y = o, a.y % 2 == 0 && a.x--) : a.y -= 2, s.y = a.y * i, a.x = 1 + 2 * Math.ceil((a.y / u - 1) / 2), s.x = Math.round(s.y / u)), {
                            height: s.y,
                            width: s.x,
                            hideYDots: a.y,
                            hideXDots: a.x
                          };
                        }({
                          originalWidth: this._image.width,
                          originalHeight: this._image.height,
                          maxHiddenDots: l,
                          maxHiddenAxisDots: e - 14,
                          dotSize: o
                        }), f.label = 2;
                      case 2:
                        return this.drawBackground(), this.drawDots(function (t, r) {
                          var n, o, a, s, u, h;
                          return !(d._options.imageOptions.hideBackgroundDots && t >= (e - i.hideXDots) / 2 && t < (e + i.hideXDots) / 2 && r >= (e - i.hideYDots) / 2 && r < (e + i.hideYDots) / 2 || (null === (n = m[t]) || void 0 === n ? void 0 : n[r]) || (null === (o = m[t - e + 7]) || void 0 === o ? void 0 : o[r]) || (null === (a = m[t]) || void 0 === a ? void 0 : a[r - e + 7]) || (null === (s = b[t]) || void 0 === s ? void 0 : s[r]) || (null === (u = b[t - e + 7]) || void 0 === u ? void 0 : u[r]) || (null === (h = b[t]) || void 0 === h ? void 0 : h[r - e + 7]));
                        }), this.drawCorners(), this._options.image ? [4, this.drawImage({
                          width: i.width,
                          height: i.height,
                          count: e,
                          dotSize: o
                        })] : [3, 4];
                      case 3:
                        f.sent(), f.label = 4;
                      case 4:
                        return [2];
                    }
                  });
                });
              }, t.prototype.drawBackground = function () {
                var t,
                  e,
                  r,
                  n = this._element,
                  o = this._options;
                if (n) {
                  var i = null === (t = o.backgroundOptions) || void 0 === t ? void 0 : t.gradient,
                    a = null === (e = o.backgroundOptions) || void 0 === e ? void 0 : e.color;
                  if ((i || a) && this._createColor({
                    options: i,
                    color: a,
                    additionalRotation: 0,
                    x: 0,
                    y: 0,
                    height: o.height,
                    width: o.width,
                    name: "background-color"
                  }), null === (r = o.backgroundOptions) || void 0 === r ? void 0 : r.round) {
                    var s = Math.min(o.width, o.height),
                      u = document.createElementNS("http://www.w3.org/2000/svg", "rect");
                    this._backgroundClipPath = document.createElementNS("http://www.w3.org/2000/svg", "clipPath"), this._backgroundClipPath.setAttribute("id", "clip-path-background-color"), this._defs.appendChild(this._backgroundClipPath), u.setAttribute("x", String((o.width - s) / 2)), u.setAttribute("y", String((o.height - s) / 2)), u.setAttribute("width", String(s)), u.setAttribute("height", String(s)), u.setAttribute("rx", String(s / 2 * o.backgroundOptions.round)), this._backgroundClipPath.appendChild(u);
                  }
                }
              }, t.prototype.drawDots = function (t) {
                var e,
                  r,
                  n = this;
                if (!this._qr) throw "QR code is not defined";
                var o = this._options,
                  i = this._qr.getModuleCount();
                if (i > o.width || i > o.height) throw "The canvas is too small.";
                var a = Math.min(o.width, o.height) - 2 * o.margin,
                  s = o.shape === v ? a / Math.sqrt(2) : a,
                  u = Math.floor(s / i),
                  h = Math.floor((o.width - i * u) / 2),
                  c = Math.floor((o.height - i * u) / 2),
                  d = new l({
                    svg: this._element,
                    type: o.dotsOptions.type
                  });
                this._dotsClipPath = document.createElementNS("http://www.w3.org/2000/svg", "clipPath"), this._dotsClipPath.setAttribute("id", "clip-path-dot-color"), this._defs.appendChild(this._dotsClipPath), this._createColor({
                  options: null === (e = o.dotsOptions) || void 0 === e ? void 0 : e.gradient,
                  color: o.dotsOptions.color,
                  additionalRotation: 0,
                  x: 0,
                  y: 0,
                  height: o.height,
                  width: o.width,
                  name: "dot-color"
                });
                for (var f = function (e) {
                    for (var o = function (o) {
                        return t && !t(e, o) ? "continue" : (null === (r = g._qr) || void 0 === r ? void 0 : r.isDark(e, o)) ? (d.draw(h + e * u, c + o * u, u, function (r, a) {
                          return !(e + r < 0 || o + a < 0 || e + r >= i || o + a >= i) && !(t && !t(e + r, o + a)) && !!n._qr && n._qr.isDark(e + r, o + a);
                        }), void (d._element && g._dotsClipPath && g._dotsClipPath.appendChild(d._element))) : "continue";
                      }, a = 0; a < i; a++) o(a);
                  }, g = this, p = 0; p < i; p++) f(p);
                if (o.shape === v) {
                  var w = Math.floor((a / u - i) / 2),
                    y = i + 2 * w,
                    m = h - w * u,
                    b = c - w * u,
                    _ = [],
                    x = Math.floor(y / 2);
                  for (p = 0; p < y; p++) {
                    _[p] = [];
                    for (var S = 0; S < y; S++) p >= w - 1 && p <= y - w && S >= w - 1 && S <= y - w || Math.sqrt((p - x) * (p - x) + (S - x) * (S - x)) > x ? _[p][S] = 0 : _[p][S] = this._qr.isDark(S - 2 * w < 0 ? S : S >= i ? S - 2 * w : S - w, p - 2 * w < 0 ? p : p >= i ? p - 2 * w : p - w) ? 1 : 0;
                  }
                  var M = function (t) {
                      for (var e = function (e) {
                          if (!_[t][e]) return "continue";
                          d.draw(m + t * u, b + e * u, u, function (r, n) {
                            var o;
                            return !!(null === (o = _[t + r]) || void 0 === o ? void 0 : o[e + n]);
                          }), d._element && C._dotsClipPath && C._dotsClipPath.appendChild(d._element);
                        }, r = 0; r < y; r++) e(r);
                    },
                    C = this;
                  for (p = 0; p < y; p++) M(p);
                }
              }, t.prototype.drawCorners = function () {
                var t = this;
                if (!this._qr) throw "QR code is not defined";
                var e = this._element,
                  r = this._options;
                if (!e) throw "Element code is not defined";
                var n = this._qr.getModuleCount(),
                  o = Math.min(r.width, r.height) - 2 * r.margin,
                  i = r.shape === v ? o / Math.sqrt(2) : o,
                  a = Math.floor(i / n),
                  s = 7 * a,
                  u = 3 * a,
                  h = Math.floor((r.width - n * a) / 2),
                  c = Math.floor((r.height - n * a) / 2);
                [[0, 0, 0], [1, 0, Math.PI / 2], [0, 1, -Math.PI / 2]].forEach(function (e) {
                  var o,
                    i,
                    d,
                    g,
                    v,
                    w,
                    y,
                    _,
                    x,
                    S,
                    M,
                    C,
                    A = e[0],
                    k = e[1],
                    O = e[2],
                    D = h + A * a * (n - 7),
                    P = c + k * a * (n - 7),
                    z = t._dotsClipPath,
                    B = t._dotsClipPath;
                  if (((null === (o = r.cornersSquareOptions) || void 0 === o ? void 0 : o.gradient) || (null === (i = r.cornersSquareOptions) || void 0 === i ? void 0 : i.color)) && ((z = document.createElementNS("http://www.w3.org/2000/svg", "clipPath")).setAttribute("id", "clip-path-corners-square-color-" + A + "-" + k), t._defs.appendChild(z), t._cornersSquareClipPath = t._cornersDotClipPath = B = z, t._createColor({
                    options: null === (d = r.cornersSquareOptions) || void 0 === d ? void 0 : d.gradient,
                    color: null === (g = r.cornersSquareOptions) || void 0 === g ? void 0 : g.color,
                    additionalRotation: O,
                    x: D,
                    y: P,
                    height: s,
                    width: s,
                    name: "corners-square-color-" + A + "-" + k
                  })), null === (v = r.cornersSquareOptions) || void 0 === v ? void 0 : v.type) {
                    var q = new f({
                      svg: t._element,
                      type: r.cornersSquareOptions.type
                    });
                    q.draw(D, P, s, O), q._element && z && z.appendChild(q._element);
                  } else for (var I = new l({
                      svg: t._element,
                      type: r.dotsOptions.type
                    }), E = function (t) {
                      for (var e = function (e) {
                          if (!(null === (w = m[t]) || void 0 === w ? void 0 : w[e])) return "continue";
                          I.draw(D + t * a, P + e * a, a, function (r, n) {
                            var o;
                            return !!(null === (o = m[t + r]) || void 0 === o ? void 0 : o[e + n]);
                          }), I._element && z && z.appendChild(I._element);
                        }, r = 0; r < m[t].length; r++) e(r);
                    }, L = 0; L < m.length; L++) E(L);
                  if (((null === (y = r.cornersDotOptions) || void 0 === y ? void 0 : y.gradient) || (null === (_ = r.cornersDotOptions) || void 0 === _ ? void 0 : _.color)) && ((B = document.createElementNS("http://www.w3.org/2000/svg", "clipPath")).setAttribute("id", "clip-path-corners-dot-color-" + A + "-" + k), t._defs.appendChild(B), t._cornersDotClipPath = B, t._createColor({
                    options: null === (x = r.cornersDotOptions) || void 0 === x ? void 0 : x.gradient,
                    color: null === (S = r.cornersDotOptions) || void 0 === S ? void 0 : S.color,
                    additionalRotation: O,
                    x: D + 2 * a,
                    y: P + 2 * a,
                    height: u,
                    width: u,
                    name: "corners-dot-color-" + A + "-" + k
                  })), null === (M = r.cornersDotOptions) || void 0 === M ? void 0 : M.type) {
                    var R = new p({
                      svg: t._element,
                      type: r.cornersDotOptions.type
                    });
                    R.draw(D + 2 * a, P + 2 * a, u, O), R._element && B && B.appendChild(R._element);
                  } else {
                    I = new l({
                      svg: t._element,
                      type: r.dotsOptions.type
                    });
                    var N = function (t) {
                      for (var e = function (e) {
                          if (!(null === (C = b[t]) || void 0 === C ? void 0 : C[e])) return "continue";
                          I.draw(D + t * a, P + e * a, a, function (r, n) {
                            var o;
                            return !!(null === (o = b[t + r]) || void 0 === o ? void 0 : o[e + n]);
                          }), I._element && B && B.appendChild(I._element);
                        }, r = 0; r < b[t].length; r++) e(r);
                    };
                    for (L = 0; L < b.length; L++) N(L);
                  }
                });
              }, t.prototype.loadImage = function () {
                var t = this;
                return new Promise(function (e, r) {
                  var n = t._options,
                    o = new Image();
                  if (!n.image) return r("Image is not defined");
                  "string" == typeof n.imageOptions.crossOrigin && (o.crossOrigin = n.imageOptions.crossOrigin), t._image = o, o.onload = function () {
                    e();
                  }, o.src = n.image;
                });
              }, t.prototype.drawImage = function (t) {
                var e = t.width,
                  r = t.height,
                  n = t.count,
                  o = t.dotSize;
                return w(this, void 0, void 0, function () {
                  var t, i, a, s, h, c, l, d, f;
                  return y(this, function (g) {
                    switch (g.label) {
                      case 0:
                        return t = this._options, i = Math.floor((t.width - n * o) / 2), a = Math.floor((t.height - n * o) / 2), s = i + t.imageOptions.margin + (n * o - e) / 2, h = a + t.imageOptions.margin + (n * o - r) / 2, c = e - 2 * t.imageOptions.margin, l = r - 2 * t.imageOptions.margin, (d = document.createElementNS("http://www.w3.org/2000/svg", "image")).setAttribute("x", String(s)), d.setAttribute("y", String(h)), d.setAttribute("width", c + "px"), d.setAttribute("height", l + "px"), [4, u(t.image || "")];
                      case 1:
                        return f = g.sent(), d.setAttribute("href", f || ""), this._element.appendChild(d), [2];
                    }
                  });
                });
              }, t.prototype._createColor = function (t) {
                var e = t.options,
                  r = t.color,
                  n = t.additionalRotation,
                  o = t.x,
                  i = t.y,
                  a = t.height,
                  s = t.width,
                  u = t.name,
                  h = s > a ? s : a,
                  c = document.createElementNS("http://www.w3.org/2000/svg", "rect");
                if (c.setAttribute("x", String(o)), c.setAttribute("y", String(i)), c.setAttribute("height", String(a)), c.setAttribute("width", String(s)), c.setAttribute("clip-path", "url('#clip-path-" + u + "')"), e) {
                  var l;
                  if ("radial" === e.type) (l = document.createElementNS("http://www.w3.org/2000/svg", "radialGradient")).setAttribute("id", u), l.setAttribute("gradientUnits", "userSpaceOnUse"), l.setAttribute("fx", String(o + s / 2)), l.setAttribute("fy", String(i + a / 2)), l.setAttribute("cx", String(o + s / 2)), l.setAttribute("cy", String(i + a / 2)), l.setAttribute("r", String(h / 2));else {
                    var d = ((e.rotation || 0) + n) % (2 * Math.PI),
                      f = (d + 2 * Math.PI) % (2 * Math.PI),
                      g = o + s / 2,
                      p = i + a / 2,
                      v = o + s / 2,
                      w = i + a / 2;
                    f >= 0 && f <= .25 * Math.PI || f > 1.75 * Math.PI && f <= 2 * Math.PI ? (g -= s / 2, p -= a / 2 * Math.tan(d), v += s / 2, w += a / 2 * Math.tan(d)) : f > .25 * Math.PI && f <= .75 * Math.PI ? (p -= a / 2, g -= s / 2 / Math.tan(d), w += a / 2, v += s / 2 / Math.tan(d)) : f > .75 * Math.PI && f <= 1.25 * Math.PI ? (g += s / 2, p += a / 2 * Math.tan(d), v -= s / 2, w -= a / 2 * Math.tan(d)) : f > 1.25 * Math.PI && f <= 1.75 * Math.PI && (p += a / 2, g += s / 2 / Math.tan(d), w -= a / 2, v -= s / 2 / Math.tan(d)), (l = document.createElementNS("http://www.w3.org/2000/svg", "linearGradient")).setAttribute("id", u), l.setAttribute("gradientUnits", "userSpaceOnUse"), l.setAttribute("x1", String(Math.round(g))), l.setAttribute("y1", String(Math.round(p))), l.setAttribute("x2", String(Math.round(v))), l.setAttribute("y2", String(Math.round(w)));
                  }
                  e.colorStops.forEach(function (t) {
                    var e = t.offset,
                      r = t.color,
                      n = document.createElementNS("http://www.w3.org/2000/svg", "stop");
                    n.setAttribute("offset", 100 * e + "%"), n.setAttribute("stop-color", r), l.appendChild(n);
                  }), c.setAttribute("fill", "url('#" + u + "')"), this._defs.appendChild(l);
                } else r && c.setAttribute("fill", r);
                this._element.appendChild(c);
              }, t;
            }(),
            x = "canvas";
          for (var S = {}, M = 0; M <= 40; M++) S[M] = M;
          const C = {
            type: x,
            shape: "square",
            width: 300,
            height: 300,
            data: "",
            margin: 0,
            qrOptions: {
              typeNumber: S[0],
              mode: void 0,
              errorCorrectionLevel: "Q"
            },
            imageOptions: {
              hideBackgroundDots: !0,
              imageSize: .4,
              crossOrigin: void 0,
              margin: 0
            },
            dotsOptions: {
              type: "square",
              color: "#000"
            },
            backgroundOptions: {
              round: 0,
              color: "#fff"
            }
          };
          var A = function () {
            return (A = Object.assign || function (t) {
              for (var e, r = 1, n = arguments.length; r < n; r++) for (var o in e = arguments[r]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
              return t;
            }).apply(this, arguments);
          };
          function k(t) {
            var e = A({}, t);
            if (!e.colorStops || !e.colorStops.length) throw "Field 'colorStops' is required in gradient";
            return e.rotation ? e.rotation = Number(e.rotation) : e.rotation = 0, e.colorStops = e.colorStops.map(function (t) {
              return A(A({}, t), {
                offset: Number(t.offset)
              });
            }), e;
          }
          function O(t) {
            var e = A({}, t);
            return e.width = Number(e.width), e.height = Number(e.height), e.margin = Number(e.margin), e.imageOptions = A(A({}, e.imageOptions), {
              hideBackgroundDots: Boolean(e.imageOptions.hideBackgroundDots),
              imageSize: Number(e.imageOptions.imageSize),
              margin: Number(e.imageOptions.margin)
            }), e.margin > Math.min(e.width, e.height) && (e.margin = Math.min(e.width, e.height)), e.dotsOptions = A({}, e.dotsOptions), e.dotsOptions.gradient && (e.dotsOptions.gradient = k(e.dotsOptions.gradient)), e.cornersSquareOptions && (e.cornersSquareOptions = A({}, e.cornersSquareOptions), e.cornersSquareOptions.gradient && (e.cornersSquareOptions.gradient = k(e.cornersSquareOptions.gradient))), e.cornersDotOptions && (e.cornersDotOptions = A({}, e.cornersDotOptions), e.cornersDotOptions.gradient && (e.cornersDotOptions.gradient = k(e.cornersDotOptions.gradient))), e.backgroundOptions && (e.backgroundOptions = A({}, e.backgroundOptions), e.backgroundOptions.gradient && (e.backgroundOptions.gradient = k(e.backgroundOptions.gradient))), e;
          }
          var D = r(192),
            P = r.n(D),
            z = function (t, e, r, n) {
              return new (r || (r = Promise))(function (o, i) {
                function a(t) {
                  try {
                    u(n.next(t));
                  } catch (t) {
                    i(t);
                  }
                }
                function s(t) {
                  try {
                    u(n.throw(t));
                  } catch (t) {
                    i(t);
                  }
                }
                function u(t) {
                  var e;
                  t.done ? o(t.value) : (e = t.value, e instanceof r ? e : new r(function (t) {
                    t(e);
                  })).then(a, s);
                }
                u((n = n.apply(t, e || [])).next());
              });
            },
            B = function (t, e) {
              var r,
                n,
                o,
                i,
                a = {
                  label: 0,
                  sent: function () {
                    if (1 & o[0]) throw o[1];
                    return o[1];
                  },
                  trys: [],
                  ops: []
                };
              return i = {
                next: s(0),
                throw: s(1),
                return: s(2)
              }, "function" == typeof Symbol && (i[Symbol.iterator] = function () {
                return this;
              }), i;
              function s(i) {
                return function (s) {
                  return function (i) {
                    if (r) throw new TypeError("Generator is already executing.");
                    for (; a;) try {
                      if (r = 1, n && (o = 2 & i[0] ? n.return : i[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, i[1])).done) return o;
                      switch (n = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                        case 0:
                        case 1:
                          o = i;
                          break;
                        case 4:
                          return a.label++, {
                            value: i[1],
                            done: !1
                          };
                        case 5:
                          a.label++, n = i[1], i = [0];
                          continue;
                        case 7:
                          i = a.ops.pop(), a.trys.pop();
                          continue;
                        default:
                          if (!((o = (o = a.trys).length > 0 && o[o.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                            a = 0;
                            continue;
                          }
                          if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                            a.label = i[1];
                            break;
                          }
                          if (6 === i[0] && a.label < o[1]) {
                            a.label = o[1], o = i;
                            break;
                          }
                          if (o && a.label < o[2]) {
                            a.label = o[2], a.ops.push(i);
                            break;
                          }
                          o[2] && a.ops.pop(), a.trys.pop();
                          continue;
                      }
                      i = e.call(t, a);
                    } catch (t) {
                      i = [6, t], n = 0;
                    } finally {
                      r = o = 0;
                    }
                    if (5 & i[0]) throw i[1];
                    return {
                      value: i[0] ? i[1] : void 0,
                      done: !0
                    };
                  }([i, s]);
                };
              }
            };
          const q = function () {
            function t(t) {
              this._options = t ? O(a(C, t)) : C, this.update();
            }
            return t._clearContainer = function (t) {
              t && (t.innerHTML = "");
            }, t.prototype._setupSvg = function () {
              var t = this;
              if (this._qr) {
                var e = new _(this._options);
                this._svg = e.getElement(), this._svgDrawingPromise = e.drawQR(this._qr).then(function () {
                  var r;
                  t._svg && (null === (r = t._extension) || void 0 === r || r.call(t, e.getElement(), t._options));
                });
              }
            }, t.prototype._setupCanvas = function () {
              var t,
                e = this;
              this._qr && (this._canvas = document.createElement("canvas"), this._canvas.width = this._options.width, this._canvas.height = this._options.height, this._setupSvg(), this._canvasDrawingPromise = null === (t = this._svgDrawingPromise) || void 0 === t ? void 0 : t.then(function () {
                if (e._svg) {
                  var t = e._svg,
                    r = new XMLSerializer().serializeToString(t),
                    n = "data:image/svg+xml;base64," + btoa(r),
                    o = new Image();
                  return new Promise(function (t) {
                    o.onload = function () {
                      var r, n;
                      null === (n = null === (r = e._canvas) || void 0 === r ? void 0 : r.getContext("2d")) || void 0 === n || n.drawImage(o, 0, 0), t();
                    }, o.src = n;
                  });
                }
              }));
            }, t.prototype._getElement = function (t) {
              return void 0 === t && (t = "png"), z(this, void 0, void 0, function () {
                return B(this, function (e) {
                  switch (e.label) {
                    case 0:
                      if (!this._qr) throw "QR code is empty";
                      return "svg" !== t.toLowerCase() ? [3, 2] : (this._svg && this._svgDrawingPromise || this._setupSvg(), [4, this._svgDrawingPromise]);
                    case 1:
                      return e.sent(), [2, this._svg];
                    case 2:
                      return this._canvas && this._canvasDrawingPromise || this._setupCanvas(), [4, this._canvasDrawingPromise];
                    case 3:
                      return e.sent(), [2, this._canvas];
                  }
                });
              });
            }, t.prototype.update = function (e) {
              t._clearContainer(this._container), this._options = e ? O(a(this._options, e)) : this._options, this._options.data && (this._qr = P()(this._options.qrOptions.typeNumber, this._options.qrOptions.errorCorrectionLevel), this._qr.addData(this._options.data, this._options.qrOptions.mode || function (t) {
                switch (!0) {
                  case /^[0-9]*$/.test(t):
                    return "Numeric";
                  case /^[0-9A-Z $%*+\-./:]*$/.test(t):
                    return "Alphanumeric";
                  default:
                    return "Byte";
                }
              }(this._options.data)), this._qr.make(), this._options.type === x ? this._setupCanvas() : this._setupSvg(), this.append(this._container));
            }, t.prototype.append = function (t) {
              if (t) {
                if ("function" != typeof t.appendChild) throw "Container should be a single DOM node";
                this._options.type === x ? this._canvas && t.appendChild(this._canvas) : this._svg && t.appendChild(this._svg), this._container = t;
              }
            }, t.prototype.applyExtension = function (t) {
              if (!t) throw "Extension function should be defined.";
              this._extension = t, this.update();
            }, t.prototype.deleteExtension = function () {
              this._extension = void 0, this.update();
            }, t.prototype.getRawData = function (t) {
              return void 0 === t && (t = "png"), z(this, void 0, void 0, function () {
                var e, r, n;
                return B(this, function (o) {
                  switch (o.label) {
                    case 0:
                      if (!this._qr) throw "QR code is empty";
                      return [4, this._getElement(t)];
                    case 1:
                      return (e = o.sent()) ? "svg" === t.toLowerCase() ? (r = new XMLSerializer(), n = r.serializeToString(e), [2, new Blob(['<?xml version="1.0" standalone="no"?>\r\n' + n], {
                        type: "image/svg+xml"
                      })]) : [2, new Promise(function (r) {
                        return e.toBlob(r, "image/" + t, 1);
                      })] : [2, null];
                  }
                });
              });
            }, t.prototype.download = function (t) {
              return z(this, void 0, void 0, function () {
                var e, r, n, o, i;
                return B(this, function (a) {
                  switch (a.label) {
                    case 0:
                      if (!this._qr) throw "QR code is empty";
                      return e = "png", r = "qr", "string" == typeof t ? (e = t, console.warn("Extension is deprecated as argument for 'download' method, please pass object { name: '...', extension: '...' } as argument")) : "object" == typeof t && null !== t && (t.name && (r = t.name), t.extension && (e = t.extension)), [4, this._getElement(e)];
                    case 1:
                      return (n = a.sent()) ? ("svg" === e.toLowerCase() ? (o = new XMLSerializer(), i = '<?xml version="1.0" standalone="no"?>\r\n' + (i = o.serializeToString(n)), s("data:image/svg+xml;charset=utf-8," + encodeURIComponent(i), r + ".svg")) : s(n.toDataURL("image/" + e), r + "." + e), [2]) : [2];
                  }
                });
              });
            }, t;
          }();
        }
      },
      e = {};
    function r(n) {
      if (e[n]) return e[n].exports;
      var o = e[n] = {
        exports: {}
      };
      return t[n](o, o.exports, r), o.exports;
    }
    return r.n = t => {
      var e = t && t.__esModule ? () => t.default : () => t;
      return r.d(e, {
        a: e
      }), e;
    }, r.d = (t, e) => {
      for (var n in e) r.o(e, n) && !r.o(t, n) && Object.defineProperty(t, n, {
        enumerable: !0,
        get: e[n]
      });
    }, r.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e), r(676);
  })().default;
});

/***/ }),

/***/ 9662:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isCallable = __webpack_require__(614);
var tryToString = __webpack_require__(6330);

var $TypeError = TypeError;

// `Assert: IsCallable(argument) is true`
module.exports = function (argument) {
  if (isCallable(argument)) return argument;
  throw $TypeError(tryToString(argument) + ' is not a function');
};


/***/ }),

/***/ 6077:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isCallable = __webpack_require__(614);

var $String = String;
var $TypeError = TypeError;

module.exports = function (argument) {
  if (typeof argument == 'object' || isCallable(argument)) return argument;
  throw $TypeError("Can't set " + $String(argument) + ' as a prototype');
};


/***/ }),

/***/ 5787:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isPrototypeOf = __webpack_require__(7976);

var $TypeError = TypeError;

module.exports = function (it, Prototype) {
  if (isPrototypeOf(Prototype, it)) return it;
  throw $TypeError('Incorrect invocation');
};


/***/ }),

/***/ 9670:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isObject = __webpack_require__(111);

var $String = String;
var $TypeError = TypeError;

// `Assert: Type(argument) is Object`
module.exports = function (argument) {
  if (isObject(argument)) return argument;
  throw $TypeError($String(argument) + ' is not an object');
};


/***/ }),

/***/ 1318:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var toIndexedObject = __webpack_require__(5656);
var toAbsoluteIndex = __webpack_require__(1400);
var lengthOfArrayLike = __webpack_require__(6244);

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = lengthOfArrayLike(O);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare -- NaN check
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare -- NaN check
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),

/***/ 3658:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__(9781);
var isArray = __webpack_require__(3157);

var $TypeError = TypeError;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Safari < 13 does not throw an error in this case
var SILENT_ON_NON_WRITABLE_LENGTH_SET = DESCRIPTORS && !function () {
  // makes no sense without proper strict mode support
  if (this !== undefined) return true;
  try {
    // eslint-disable-next-line es/no-object-defineproperty -- safe
    Object.defineProperty([], 'length', { writable: false }).length = 1;
  } catch (error) {
    return error instanceof TypeError;
  }
}();

module.exports = SILENT_ON_NON_WRITABLE_LENGTH_SET ? function (O, length) {
  if (isArray(O) && !getOwnPropertyDescriptor(O, 'length').writable) {
    throw $TypeError('Cannot set read only .length');
  } return O.length = length;
} : function (O, length) {
  return O.length = length;
};


/***/ }),

/***/ 4326:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var uncurryThis = __webpack_require__(1702);

var toString = uncurryThis({}.toString);
var stringSlice = uncurryThis(''.slice);

module.exports = function (it) {
  return stringSlice(toString(it), 8, -1);
};


/***/ }),

/***/ 648:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var TO_STRING_TAG_SUPPORT = __webpack_require__(1694);
var isCallable = __webpack_require__(614);
var classofRaw = __webpack_require__(4326);
var wellKnownSymbol = __webpack_require__(5112);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var $Object = Object;

// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = $Object(it), TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) == 'Object' && isCallable(O.callee) ? 'Arguments' : result;
};


/***/ }),

/***/ 9920:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var hasOwn = __webpack_require__(2597);
var ownKeys = __webpack_require__(3887);
var getOwnPropertyDescriptorModule = __webpack_require__(1236);
var definePropertyModule = __webpack_require__(3070);

module.exports = function (target, source, exceptions) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!hasOwn(target, key) && !(exceptions && hasOwn(exceptions, key))) {
      defineProperty(target, key, getOwnPropertyDescriptor(source, key));
    }
  }
};


/***/ }),

/***/ 8880:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(9781);
var definePropertyModule = __webpack_require__(3070);
var createPropertyDescriptor = __webpack_require__(9114);

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ 9114:
/***/ (function(module) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ 8052:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isCallable = __webpack_require__(614);
var definePropertyModule = __webpack_require__(3070);
var makeBuiltIn = __webpack_require__(6339);
var defineGlobalProperty = __webpack_require__(3072);

module.exports = function (O, key, value, options) {
  if (!options) options = {};
  var simple = options.enumerable;
  var name = options.name !== undefined ? options.name : key;
  if (isCallable(value)) makeBuiltIn(value, name, options);
  if (options.global) {
    if (simple) O[key] = value;
    else defineGlobalProperty(key, value);
  } else {
    try {
      if (!options.unsafe) delete O[key];
      else if (O[key]) simple = true;
    } catch (error) { /* empty */ }
    if (simple) O[key] = value;
    else definePropertyModule.f(O, key, {
      value: value,
      enumerable: false,
      configurable: !options.nonConfigurable,
      writable: !options.nonWritable
    });
  } return O;
};


/***/ }),

/***/ 3072:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(7854);

// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;

module.exports = function (key, value) {
  try {
    defineProperty(global, key, { value: value, configurable: true, writable: true });
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),

/***/ 9781:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var fails = __webpack_require__(7293);

// Detect IE8's incomplete defineProperty implementation
module.exports = !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});


/***/ }),

/***/ 4154:
/***/ (function(module) {

var documentAll = typeof document == 'object' && document.all;

// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot
// eslint-disable-next-line unicorn/no-typeof-undefined -- required for testing
var IS_HTMLDDA = typeof documentAll == 'undefined' && documentAll !== undefined;

module.exports = {
  all: documentAll,
  IS_HTMLDDA: IS_HTMLDDA
};


/***/ }),

/***/ 317:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(7854);
var isObject = __webpack_require__(111);

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),

/***/ 7207:
/***/ (function(module) {

var $TypeError = TypeError;
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF; // 2 ** 53 - 1 == 9007199254740991

module.exports = function (it) {
  if (it > MAX_SAFE_INTEGER) throw $TypeError('Maximum allowed index exceeded');
  return it;
};


/***/ }),

/***/ 3678:
/***/ (function(module) {

module.exports = {
  IndexSizeError: { s: 'INDEX_SIZE_ERR', c: 1, m: 1 },
  DOMStringSizeError: { s: 'DOMSTRING_SIZE_ERR', c: 2, m: 0 },
  HierarchyRequestError: { s: 'HIERARCHY_REQUEST_ERR', c: 3, m: 1 },
  WrongDocumentError: { s: 'WRONG_DOCUMENT_ERR', c: 4, m: 1 },
  InvalidCharacterError: { s: 'INVALID_CHARACTER_ERR', c: 5, m: 1 },
  NoDataAllowedError: { s: 'NO_DATA_ALLOWED_ERR', c: 6, m: 0 },
  NoModificationAllowedError: { s: 'NO_MODIFICATION_ALLOWED_ERR', c: 7, m: 1 },
  NotFoundError: { s: 'NOT_FOUND_ERR', c: 8, m: 1 },
  NotSupportedError: { s: 'NOT_SUPPORTED_ERR', c: 9, m: 1 },
  InUseAttributeError: { s: 'INUSE_ATTRIBUTE_ERR', c: 10, m: 1 },
  InvalidStateError: { s: 'INVALID_STATE_ERR', c: 11, m: 1 },
  SyntaxError: { s: 'SYNTAX_ERR', c: 12, m: 1 },
  InvalidModificationError: { s: 'INVALID_MODIFICATION_ERR', c: 13, m: 1 },
  NamespaceError: { s: 'NAMESPACE_ERR', c: 14, m: 1 },
  InvalidAccessError: { s: 'INVALID_ACCESS_ERR', c: 15, m: 1 },
  ValidationError: { s: 'VALIDATION_ERR', c: 16, m: 0 },
  TypeMismatchError: { s: 'TYPE_MISMATCH_ERR', c: 17, m: 1 },
  SecurityError: { s: 'SECURITY_ERR', c: 18, m: 1 },
  NetworkError: { s: 'NETWORK_ERR', c: 19, m: 1 },
  AbortError: { s: 'ABORT_ERR', c: 20, m: 1 },
  URLMismatchError: { s: 'URL_MISMATCH_ERR', c: 21, m: 1 },
  QuotaExceededError: { s: 'QUOTA_EXCEEDED_ERR', c: 22, m: 1 },
  TimeoutError: { s: 'TIMEOUT_ERR', c: 23, m: 1 },
  InvalidNodeTypeError: { s: 'INVALID_NODE_TYPE_ERR', c: 24, m: 1 },
  DataCloneError: { s: 'DATA_CLONE_ERR', c: 25, m: 1 }
};


/***/ }),

/***/ 8113:
/***/ (function(module) {

module.exports = typeof navigator != 'undefined' && String(navigator.userAgent) || '';


/***/ }),

/***/ 7392:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(7854);
var userAgent = __webpack_require__(8113);

var process = global.process;
var Deno = global.Deno;
var versions = process && process.versions || Deno && Deno.version;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  // in old Chrome, versions of V8 isn't V8 = Chrome / 10
  // but their correct versions are not interesting for us
  version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
}

// BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
// so check `userAgent` even if `.v8` exists, but 0
if (!version && userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = +match[1];
  }
}

module.exports = version;


/***/ }),

/***/ 748:
/***/ (function(module) {

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),

/***/ 1060:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var uncurryThis = __webpack_require__(1702);

var $Error = Error;
var replace = uncurryThis(''.replace);

var TEST = (function (arg) { return String($Error(arg).stack); })('zxcasd');
// eslint-disable-next-line redos/no-vulnerable -- safe
var V8_OR_CHAKRA_STACK_ENTRY = /\n\s*at [^:]*:[^\n]*/;
var IS_V8_OR_CHAKRA_STACK = V8_OR_CHAKRA_STACK_ENTRY.test(TEST);

module.exports = function (stack, dropEntries) {
  if (IS_V8_OR_CHAKRA_STACK && typeof stack == 'string' && !$Error.prepareStackTrace) {
    while (dropEntries--) stack = replace(stack, V8_OR_CHAKRA_STACK_ENTRY, '');
  } return stack;
};


/***/ }),

/***/ 2109:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(7854);
var getOwnPropertyDescriptor = (__webpack_require__(1236).f);
var createNonEnumerableProperty = __webpack_require__(8880);
var defineBuiltIn = __webpack_require__(8052);
var defineGlobalProperty = __webpack_require__(3072);
var copyConstructorProperties = __webpack_require__(9920);
var isForced = __webpack_require__(4705);

/*
  options.target         - name of the target object
  options.global         - target is the global object
  options.stat           - export as static methods of target
  options.proto          - export as prototype methods of target
  options.real           - real prototype method for the `pure` version
  options.forced         - export even if the native feature is available
  options.bind           - bind methods to the target, required for the `pure` version
  options.wrap           - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe         - use the simple assignment of property instead of delete + defineProperty
  options.sham           - add a flag to not completely full polyfills
  options.enumerable     - export as enumerable property
  options.dontCallGetSet - prevent calling a getter on target
  options.name           - the .name of the function if it does not match the key
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || defineGlobalProperty(TARGET, {});
  } else {
    target = (global[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.dontCallGetSet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty == typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    defineBuiltIn(target, key, sourceProperty, options);
  }
};


/***/ }),

/***/ 7293:
/***/ (function(module) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ 4374:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var fails = __webpack_require__(7293);

module.exports = !fails(function () {
  // eslint-disable-next-line es/no-function-prototype-bind -- safe
  var test = (function () { /* empty */ }).bind();
  // eslint-disable-next-line no-prototype-builtins -- safe
  return typeof test != 'function' || test.hasOwnProperty('prototype');
});


/***/ }),

/***/ 6916:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var NATIVE_BIND = __webpack_require__(4374);

var call = Function.prototype.call;

module.exports = NATIVE_BIND ? call.bind(call) : function () {
  return call.apply(call, arguments);
};


/***/ }),

/***/ 6530:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(9781);
var hasOwn = __webpack_require__(2597);

var FunctionPrototype = Function.prototype;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getDescriptor = DESCRIPTORS && Object.getOwnPropertyDescriptor;

var EXISTS = hasOwn(FunctionPrototype, 'name');
// additional protection from minified / mangled / dropped function names
var PROPER = EXISTS && (function something() { /* empty */ }).name === 'something';
var CONFIGURABLE = EXISTS && (!DESCRIPTORS || (DESCRIPTORS && getDescriptor(FunctionPrototype, 'name').configurable));

module.exports = {
  EXISTS: EXISTS,
  PROPER: PROPER,
  CONFIGURABLE: CONFIGURABLE
};


/***/ }),

/***/ 5668:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var uncurryThis = __webpack_require__(1702);
var aCallable = __webpack_require__(9662);

module.exports = function (object, key, method) {
  try {
    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
    return uncurryThis(aCallable(Object.getOwnPropertyDescriptor(object, key)[method]));
  } catch (error) { /* empty */ }
};


/***/ }),

/***/ 1702:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var NATIVE_BIND = __webpack_require__(4374);

var FunctionPrototype = Function.prototype;
var call = FunctionPrototype.call;
var uncurryThisWithBind = NATIVE_BIND && FunctionPrototype.bind.bind(call, call);

module.exports = NATIVE_BIND ? uncurryThisWithBind : function (fn) {
  return function () {
    return call.apply(fn, arguments);
  };
};


/***/ }),

/***/ 5005:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(7854);
var isCallable = __webpack_require__(614);

var aFunction = function (argument) {
  return isCallable(argument) ? argument : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(global[namespace]) : global[namespace] && global[namespace][method];
};


/***/ }),

/***/ 8173:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var aCallable = __webpack_require__(9662);
var isNullOrUndefined = __webpack_require__(8554);

// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
module.exports = function (V, P) {
  var func = V[P];
  return isNullOrUndefined(func) ? undefined : aCallable(func);
};


/***/ }),

/***/ 7854:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line es/no-global-this -- safe
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  // eslint-disable-next-line no-restricted-globals -- safe
  check(typeof self == 'object' && self) ||
  check(typeof __webpack_require__.g == 'object' && __webpack_require__.g) ||
  // eslint-disable-next-line no-new-func -- fallback
  (function () { return this; })() || this || Function('return this')();


/***/ }),

/***/ 2597:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var uncurryThis = __webpack_require__(1702);
var toObject = __webpack_require__(7908);

var hasOwnProperty = uncurryThis({}.hasOwnProperty);

// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
// eslint-disable-next-line es/no-object-hasown -- safe
module.exports = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty(toObject(it), key);
};


/***/ }),

/***/ 3501:
/***/ (function(module) {

module.exports = {};


/***/ }),

/***/ 4664:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(9781);
var fails = __webpack_require__(7293);
var createElement = __webpack_require__(317);

// Thanks to IE8 for its funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),

/***/ 8361:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var uncurryThis = __webpack_require__(1702);
var fails = __webpack_require__(7293);
var classof = __webpack_require__(4326);

var $Object = Object;
var split = uncurryThis(''.split);

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !$Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split(it, '') : $Object(it);
} : $Object;


/***/ }),

/***/ 9587:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isCallable = __webpack_require__(614);
var isObject = __webpack_require__(111);
var setPrototypeOf = __webpack_require__(7674);

// makes subclassing work correct for wrapped built-ins
module.exports = function ($this, dummy, Wrapper) {
  var NewTarget, NewTargetPrototype;
  if (
    // it can work only with native `setPrototypeOf`
    setPrototypeOf &&
    // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
    isCallable(NewTarget = dummy.constructor) &&
    NewTarget !== Wrapper &&
    isObject(NewTargetPrototype = NewTarget.prototype) &&
    NewTargetPrototype !== Wrapper.prototype
  ) setPrototypeOf($this, NewTargetPrototype);
  return $this;
};


/***/ }),

/***/ 2788:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var uncurryThis = __webpack_require__(1702);
var isCallable = __webpack_require__(614);
var store = __webpack_require__(5465);

var functionToString = uncurryThis(Function.toString);

// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (!isCallable(store.inspectSource)) {
  store.inspectSource = function (it) {
    return functionToString(it);
  };
}

module.exports = store.inspectSource;


/***/ }),

/***/ 9909:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var NATIVE_WEAK_MAP = __webpack_require__(4811);
var global = __webpack_require__(7854);
var isObject = __webpack_require__(111);
var createNonEnumerableProperty = __webpack_require__(8880);
var hasOwn = __webpack_require__(2597);
var shared = __webpack_require__(5465);
var sharedKey = __webpack_require__(6200);
var hiddenKeys = __webpack_require__(3501);

var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var TypeError = global.TypeError;
var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP || shared.state) {
  var store = shared.state || (shared.state = new WeakMap());
  /* eslint-disable no-self-assign -- prototype methods protection */
  store.get = store.get;
  store.has = store.has;
  store.set = store.set;
  /* eslint-enable no-self-assign -- prototype methods protection */
  set = function (it, metadata) {
    if (store.has(it)) throw TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    store.set(it, metadata);
    return metadata;
  };
  get = function (it) {
    return store.get(it) || {};
  };
  has = function (it) {
    return store.has(it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    if (hasOwn(it, STATE)) throw TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return hasOwn(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return hasOwn(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),

/***/ 3157:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var classof = __webpack_require__(4326);

// `IsArray` abstract operation
// https://tc39.es/ecma262/#sec-isarray
// eslint-disable-next-line es/no-array-isarray -- safe
module.exports = Array.isArray || function isArray(argument) {
  return classof(argument) == 'Array';
};


/***/ }),

/***/ 614:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var $documentAll = __webpack_require__(4154);

var documentAll = $documentAll.all;

// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
module.exports = $documentAll.IS_HTMLDDA ? function (argument) {
  return typeof argument == 'function' || argument === documentAll;
} : function (argument) {
  return typeof argument == 'function';
};


/***/ }),

/***/ 4705:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var fails = __webpack_require__(7293);
var isCallable = __webpack_require__(614);

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : isCallable(detection) ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),

/***/ 8554:
/***/ (function(module) {

// we can't use just `it == null` since of `document.all` special case
// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
module.exports = function (it) {
  return it === null || it === undefined;
};


/***/ }),

/***/ 111:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isCallable = __webpack_require__(614);
var $documentAll = __webpack_require__(4154);

var documentAll = $documentAll.all;

module.exports = $documentAll.IS_HTMLDDA ? function (it) {
  return typeof it == 'object' ? it !== null : isCallable(it) || it === documentAll;
} : function (it) {
  return typeof it == 'object' ? it !== null : isCallable(it);
};


/***/ }),

/***/ 1913:
/***/ (function(module) {

module.exports = false;


/***/ }),

/***/ 2190:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(5005);
var isCallable = __webpack_require__(614);
var isPrototypeOf = __webpack_require__(7976);
var USE_SYMBOL_AS_UID = __webpack_require__(3307);

var $Object = Object;

module.exports = USE_SYMBOL_AS_UID ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  var $Symbol = getBuiltIn('Symbol');
  return isCallable($Symbol) && isPrototypeOf($Symbol.prototype, $Object(it));
};


/***/ }),

/***/ 6244:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var toLength = __webpack_require__(7466);

// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
module.exports = function (obj) {
  return toLength(obj.length);
};


/***/ }),

/***/ 6339:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var uncurryThis = __webpack_require__(1702);
var fails = __webpack_require__(7293);
var isCallable = __webpack_require__(614);
var hasOwn = __webpack_require__(2597);
var DESCRIPTORS = __webpack_require__(9781);
var CONFIGURABLE_FUNCTION_NAME = (__webpack_require__(6530).CONFIGURABLE);
var inspectSource = __webpack_require__(2788);
var InternalStateModule = __webpack_require__(9909);

var enforceInternalState = InternalStateModule.enforce;
var getInternalState = InternalStateModule.get;
var $String = String;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;
var stringSlice = uncurryThis(''.slice);
var replace = uncurryThis(''.replace);
var join = uncurryThis([].join);

var CONFIGURABLE_LENGTH = DESCRIPTORS && !fails(function () {
  return defineProperty(function () { /* empty */ }, 'length', { value: 8 }).length !== 8;
});

var TEMPLATE = String(String).split('String');

var makeBuiltIn = module.exports = function (value, name, options) {
  if (stringSlice($String(name), 0, 7) === 'Symbol(') {
    name = '[' + replace($String(name), /^Symbol\(([^)]*)\)/, '$1') + ']';
  }
  if (options && options.getter) name = 'get ' + name;
  if (options && options.setter) name = 'set ' + name;
  if (!hasOwn(value, 'name') || (CONFIGURABLE_FUNCTION_NAME && value.name !== name)) {
    if (DESCRIPTORS) defineProperty(value, 'name', { value: name, configurable: true });
    else value.name = name;
  }
  if (CONFIGURABLE_LENGTH && options && hasOwn(options, 'arity') && value.length !== options.arity) {
    defineProperty(value, 'length', { value: options.arity });
  }
  try {
    if (options && hasOwn(options, 'constructor') && options.constructor) {
      if (DESCRIPTORS) defineProperty(value, 'prototype', { writable: false });
    // in V8 ~ Chrome 53, prototypes of some methods, like `Array.prototype.values`, are non-writable
    } else if (value.prototype) value.prototype = undefined;
  } catch (error) { /* empty */ }
  var state = enforceInternalState(value);
  if (!hasOwn(state, 'source')) {
    state.source = join(TEMPLATE, typeof name == 'string' ? name : '');
  } return value;
};

// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
// eslint-disable-next-line no-extend-native -- required
Function.prototype.toString = makeBuiltIn(function toString() {
  return isCallable(this) && getInternalState(this).source || inspectSource(this);
}, 'toString');


/***/ }),

/***/ 4758:
/***/ (function(module) {

var ceil = Math.ceil;
var floor = Math.floor;

// `Math.trunc` method
// https://tc39.es/ecma262/#sec-math.trunc
// eslint-disable-next-line es/no-math-trunc -- safe
module.exports = Math.trunc || function trunc(x) {
  var n = +x;
  return (n > 0 ? floor : ceil)(n);
};


/***/ }),

/***/ 6277:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var toString = __webpack_require__(1340);

module.exports = function (argument, $default) {
  return argument === undefined ? arguments.length < 2 ? '' : $default : toString(argument);
};


/***/ }),

/***/ 3070:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(9781);
var IE8_DOM_DEFINE = __webpack_require__(4664);
var V8_PROTOTYPE_DEFINE_BUG = __webpack_require__(3353);
var anObject = __webpack_require__(9670);
var toPropertyKey = __webpack_require__(4948);

var $TypeError = TypeError;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var $defineProperty = Object.defineProperty;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var ENUMERABLE = 'enumerable';
var CONFIGURABLE = 'configurable';
var WRITABLE = 'writable';

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? V8_PROTOTYPE_DEFINE_BUG ? function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPropertyKey(P);
  anObject(Attributes);
  if (typeof O === 'function' && P === 'prototype' && 'value' in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
    var current = $getOwnPropertyDescriptor(O, P);
    if (current && current[WRITABLE]) {
      O[P] = Attributes.value;
      Attributes = {
        configurable: CONFIGURABLE in Attributes ? Attributes[CONFIGURABLE] : current[CONFIGURABLE],
        enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
        writable: false
      };
    }
  } return $defineProperty(O, P, Attributes);
} : $defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPropertyKey(P);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return $defineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw $TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ 1236:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(9781);
var call = __webpack_require__(6916);
var propertyIsEnumerableModule = __webpack_require__(5296);
var createPropertyDescriptor = __webpack_require__(9114);
var toIndexedObject = __webpack_require__(5656);
var toPropertyKey = __webpack_require__(4948);
var hasOwn = __webpack_require__(2597);
var IE8_DOM_DEFINE = __webpack_require__(4664);

// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPropertyKey(P);
  if (IE8_DOM_DEFINE) try {
    return $getOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (hasOwn(O, P)) return createPropertyDescriptor(!call(propertyIsEnumerableModule.f, O, P), O[P]);
};


/***/ }),

/***/ 8006:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(6324);
var enumBugKeys = __webpack_require__(748);

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es/no-object-getownpropertynames -- safe
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),

/***/ 5181:
/***/ (function(__unused_webpack_module, exports) {

// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ 7976:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var uncurryThis = __webpack_require__(1702);

module.exports = uncurryThis({}.isPrototypeOf);


/***/ }),

/***/ 6324:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var uncurryThis = __webpack_require__(1702);
var hasOwn = __webpack_require__(2597);
var toIndexedObject = __webpack_require__(5656);
var indexOf = (__webpack_require__(1318).indexOf);
var hiddenKeys = __webpack_require__(3501);

var push = uncurryThis([].push);

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !hasOwn(hiddenKeys, key) && hasOwn(O, key) && push(result, key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (hasOwn(O, key = names[i++])) {
    ~indexOf(result, key) || push(result, key);
  }
  return result;
};


/***/ }),

/***/ 5296:
/***/ (function(__unused_webpack_module, exports) {

"use strict";

var $propertyIsEnumerable = {}.propertyIsEnumerable;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;


/***/ }),

/***/ 7674:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/* eslint-disable no-proto -- safe */
var uncurryThisAccessor = __webpack_require__(5668);
var anObject = __webpack_require__(9670);
var aPossiblePrototype = __webpack_require__(6077);

// `Object.setPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
// eslint-disable-next-line es/no-object-setprototypeof -- safe
module.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;
  try {
    setter = uncurryThisAccessor(Object.prototype, '__proto__', 'set');
    setter(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    anObject(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER) setter(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);


/***/ }),

/***/ 2140:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var call = __webpack_require__(6916);
var isCallable = __webpack_require__(614);
var isObject = __webpack_require__(111);

var $TypeError = TypeError;

// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
module.exports = function (input, pref) {
  var fn, val;
  if (pref === 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
  if (isCallable(fn = input.valueOf) && !isObject(val = call(fn, input))) return val;
  if (pref !== 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
  throw $TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ 3887:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(5005);
var uncurryThis = __webpack_require__(1702);
var getOwnPropertyNamesModule = __webpack_require__(8006);
var getOwnPropertySymbolsModule = __webpack_require__(5181);
var anObject = __webpack_require__(9670);

var concat = uncurryThis([].concat);

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;
};


/***/ }),

/***/ 4488:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isNullOrUndefined = __webpack_require__(8554);

var $TypeError = TypeError;

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (isNullOrUndefined(it)) throw $TypeError("Can't call method on " + it);
  return it;
};


/***/ }),

/***/ 6200:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var shared = __webpack_require__(2309);
var uid = __webpack_require__(9711);

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),

/***/ 5465:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(7854);
var defineGlobalProperty = __webpack_require__(3072);

var SHARED = '__core-js_shared__';
var store = global[SHARED] || defineGlobalProperty(SHARED, {});

module.exports = store;


/***/ }),

/***/ 2309:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var IS_PURE = __webpack_require__(1913);
var store = __webpack_require__(5465);

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.31.1',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2014-2023 Denis Pushkarev (zloirock.ru)',
  license: 'https://github.com/zloirock/core-js/blob/v3.31.1/LICENSE',
  source: 'https://github.com/zloirock/core-js'
});


/***/ }),

/***/ 6293:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/* eslint-disable es/no-symbol -- required for testing */
var V8_VERSION = __webpack_require__(7392);
var fails = __webpack_require__(7293);
var global = __webpack_require__(7854);

var $String = global.String;

// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  var symbol = Symbol();
  // Chrome 38 Symbol has incorrect toString conversion
  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
  // nb: Do not call `String` directly to avoid this being optimized out to `symbol+''` which will,
  // of course, fail.
  return !$String(symbol) || !(Object(symbol) instanceof Symbol) ||
    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && V8_VERSION && V8_VERSION < 41;
});


/***/ }),

/***/ 1400:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var toIntegerOrInfinity = __webpack_require__(9303);

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toIntegerOrInfinity(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),

/***/ 5656:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__(8361);
var requireObjectCoercible = __webpack_require__(4488);

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),

/***/ 9303:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var trunc = __webpack_require__(4758);

// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
module.exports = function (argument) {
  var number = +argument;
  // eslint-disable-next-line no-self-compare -- NaN check
  return number !== number || number === 0 ? 0 : trunc(number);
};


/***/ }),

/***/ 7466:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var toIntegerOrInfinity = __webpack_require__(9303);

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toIntegerOrInfinity(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),

/***/ 7908:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__(4488);

var $Object = Object;

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
module.exports = function (argument) {
  return $Object(requireObjectCoercible(argument));
};


/***/ }),

/***/ 7593:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var call = __webpack_require__(6916);
var isObject = __webpack_require__(111);
var isSymbol = __webpack_require__(2190);
var getMethod = __webpack_require__(8173);
var ordinaryToPrimitive = __webpack_require__(2140);
var wellKnownSymbol = __webpack_require__(5112);

var $TypeError = TypeError;
var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');

// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
module.exports = function (input, pref) {
  if (!isObject(input) || isSymbol(input)) return input;
  var exoticToPrim = getMethod(input, TO_PRIMITIVE);
  var result;
  if (exoticToPrim) {
    if (pref === undefined) pref = 'default';
    result = call(exoticToPrim, input, pref);
    if (!isObject(result) || isSymbol(result)) return result;
    throw $TypeError("Can't convert object to primitive value");
  }
  if (pref === undefined) pref = 'number';
  return ordinaryToPrimitive(input, pref);
};


/***/ }),

/***/ 4948:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var toPrimitive = __webpack_require__(7593);
var isSymbol = __webpack_require__(2190);

// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
module.exports = function (argument) {
  var key = toPrimitive(argument, 'string');
  return isSymbol(key) ? key : key + '';
};


/***/ }),

/***/ 1694:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(5112);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};

test[TO_STRING_TAG] = 'z';

module.exports = String(test) === '[object z]';


/***/ }),

/***/ 1340:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var classof = __webpack_require__(648);

var $String = String;

module.exports = function (argument) {
  if (classof(argument) === 'Symbol') throw TypeError('Cannot convert a Symbol value to a string');
  return $String(argument);
};


/***/ }),

/***/ 6330:
/***/ (function(module) {

var $String = String;

module.exports = function (argument) {
  try {
    return $String(argument);
  } catch (error) {
    return 'Object';
  }
};


/***/ }),

/***/ 9711:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var uncurryThis = __webpack_require__(1702);

var id = 0;
var postfix = Math.random();
var toString = uncurryThis(1.0.toString);

module.exports = function (key) {
  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString(++id + postfix, 36);
};


/***/ }),

/***/ 3307:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/* eslint-disable es/no-symbol -- required for testing */
var NATIVE_SYMBOL = __webpack_require__(6293);

module.exports = NATIVE_SYMBOL
  && !Symbol.sham
  && typeof Symbol.iterator == 'symbol';


/***/ }),

/***/ 3353:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(9781);
var fails = __webpack_require__(7293);

// V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334
module.exports = DESCRIPTORS && fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(function () { /* empty */ }, 'prototype', {
    value: 42,
    writable: false
  }).prototype != 42;
});


/***/ }),

/***/ 4811:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(7854);
var isCallable = __webpack_require__(614);

var WeakMap = global.WeakMap;

module.exports = isCallable(WeakMap) && /native code/.test(String(WeakMap));


/***/ }),

/***/ 5112:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(7854);
var shared = __webpack_require__(2309);
var hasOwn = __webpack_require__(2597);
var uid = __webpack_require__(9711);
var NATIVE_SYMBOL = __webpack_require__(6293);
var USE_SYMBOL_AS_UID = __webpack_require__(3307);

var Symbol = global.Symbol;
var WellKnownSymbolsStore = shared('wks');
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol['for'] || Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!hasOwn(WellKnownSymbolsStore, name)) {
    WellKnownSymbolsStore[name] = NATIVE_SYMBOL && hasOwn(Symbol, name)
      ? Symbol[name]
      : createWellKnownSymbol('Symbol.' + name);
  } return WellKnownSymbolsStore[name];
};


/***/ }),

/***/ 7658:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(2109);
var toObject = __webpack_require__(7908);
var lengthOfArrayLike = __webpack_require__(6244);
var setArrayLength = __webpack_require__(3658);
var doesNotExceedSafeInteger = __webpack_require__(7207);
var fails = __webpack_require__(7293);

var INCORRECT_TO_LENGTH = fails(function () {
  return [].push.call({ length: 0x100000000 }, 1) !== 4294967297;
});

// V8 and Safari <= 15.4, FF < 23 throws InternalError
// https://bugs.chromium.org/p/v8/issues/detail?id=12681
var properErrorOnNonWritableLength = function () {
  try {
    // eslint-disable-next-line es/no-object-defineproperty -- safe
    Object.defineProperty([], 'length', { writable: false }).push();
  } catch (error) {
    return error instanceof TypeError;
  }
};

var FORCED = INCORRECT_TO_LENGTH || !properErrorOnNonWritableLength();

// `Array.prototype.push` method
// https://tc39.es/ecma262/#sec-array.prototype.push
$({ target: 'Array', proto: true, arity: 1, forced: FORCED }, {
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  push: function push(item) {
    var O = toObject(this);
    var len = lengthOfArrayLike(O);
    var argCount = arguments.length;
    doesNotExceedSafeInteger(len + argCount);
    for (var i = 0; i < argCount; i++) {
      O[len] = arguments[i];
      len++;
    }
    setArrayLength(O, len);
    return len;
  }
});


/***/ }),

/***/ 2801:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(2109);
var global = __webpack_require__(7854);
var getBuiltIn = __webpack_require__(5005);
var createPropertyDescriptor = __webpack_require__(9114);
var defineProperty = (__webpack_require__(3070).f);
var hasOwn = __webpack_require__(2597);
var anInstance = __webpack_require__(5787);
var inheritIfRequired = __webpack_require__(9587);
var normalizeStringArgument = __webpack_require__(6277);
var DOMExceptionConstants = __webpack_require__(3678);
var clearErrorStack = __webpack_require__(1060);
var DESCRIPTORS = __webpack_require__(9781);
var IS_PURE = __webpack_require__(1913);

var DOM_EXCEPTION = 'DOMException';
var Error = getBuiltIn('Error');
var NativeDOMException = getBuiltIn(DOM_EXCEPTION);

var $DOMException = function DOMException() {
  anInstance(this, DOMExceptionPrototype);
  var argumentsLength = arguments.length;
  var message = normalizeStringArgument(argumentsLength < 1 ? undefined : arguments[0]);
  var name = normalizeStringArgument(argumentsLength < 2 ? undefined : arguments[1], 'Error');
  var that = new NativeDOMException(message, name);
  var error = Error(message);
  error.name = DOM_EXCEPTION;
  defineProperty(that, 'stack', createPropertyDescriptor(1, clearErrorStack(error.stack, 1)));
  inheritIfRequired(that, this, $DOMException);
  return that;
};

var DOMExceptionPrototype = $DOMException.prototype = NativeDOMException.prototype;

var ERROR_HAS_STACK = 'stack' in Error(DOM_EXCEPTION);
var DOM_EXCEPTION_HAS_STACK = 'stack' in new NativeDOMException(1, 2);

// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var descriptor = NativeDOMException && DESCRIPTORS && Object.getOwnPropertyDescriptor(global, DOM_EXCEPTION);

// Bun ~ 0.1.1 DOMException have incorrect descriptor and we can't redefine it
// https://github.com/Jarred-Sumner/bun/issues/399
var BUGGY_DESCRIPTOR = !!descriptor && !(descriptor.writable && descriptor.configurable);

var FORCED_CONSTRUCTOR = ERROR_HAS_STACK && !BUGGY_DESCRIPTOR && !DOM_EXCEPTION_HAS_STACK;

// `DOMException` constructor patch for `.stack` where it's required
// https://webidl.spec.whatwg.org/#es-DOMException-specialness
$({ global: true, constructor: true, forced: IS_PURE || FORCED_CONSTRUCTOR }, { // TODO: fix export logic
  DOMException: FORCED_CONSTRUCTOR ? $DOMException : NativeDOMException
});

var PolyfilledDOMException = getBuiltIn(DOM_EXCEPTION);
var PolyfilledDOMExceptionPrototype = PolyfilledDOMException.prototype;

if (PolyfilledDOMExceptionPrototype.constructor !== PolyfilledDOMException) {
  if (!IS_PURE) {
    defineProperty(PolyfilledDOMExceptionPrototype, 'constructor', createPropertyDescriptor(1, PolyfilledDOMException));
  }

  for (var key in DOMExceptionConstants) if (hasOwn(DOMExceptionConstants, key)) {
    var constant = DOMExceptionConstants[key];
    var constantName = constant.s;
    if (!hasOwn(PolyfilledDOMException, constantName)) {
      defineProperty(PolyfilledDOMException, constantName, createPropertyDescriptor(6, constant.c));
    }
  }
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		__webpack_require__.p = "";
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ entry_lib; }
});

;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
/* eslint-disable no-var */
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (false) { var getCurrentScript; }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/package/vue-qr-code-styling/index.vue?vue&type=template&id=ec5d0e78&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    ref: "qrCode",
    class: 'qr-code',
    style: {
      width: _vm.fixedWidth,
      height: _vm.fixedHeight
    }
  });
};
var staticRenderFns = [];

// EXTERNAL MODULE: ./node_modules/qr-code-styling/lib/qr-code-styling.js
var qr_code_styling = __webpack_require__(6251);
var qr_code_styling_default = /*#__PURE__*/__webpack_require__.n(qr_code_styling);
;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/package/vue-qr-code-styling/index.vue?vue&type=script&lang=ts&



/* harmony default export */ var vue_qr_code_stylingvue_type_script_lang_ts_ = ({
  name: 'QrCode',
  props: {
    value: {
      type: String,
      default: null,
    },
    logo: {
      type: String,
      default: null,
    },
    size: null,
    options: {
      type: Object,
      default: null,
    },
  },
  data: () => {
    const defaultOptions = {
      width: 100,
      height: 100,
      type: 'svg',// as DrawType,
      data: 'https://i-fis.cn/',
      // image: '/logo.png',
      image: null,
      margin: 0,
      qrOptions: {
        typeNumber: 0,// as TypeNumber,
        mode: 'Byte',// as Mode,
        errorCorrectionLevel: 'Q',// as ErrorCorrectionLevel
      },
      imageOptions: {
        hideBackgroundDots: true,
        imageSize: 0.4,
        margin: 1,
        crossOrigin: 'anonymous',
      },
      dotsOptions: {
        color: '#2e2d2e',
        // gradient: {
        //   type: 'linear', // 'radial'
        //   rotation: 0,
        //   colorStops: [{ offset: 0, color: '#8688B2' }, { offset: 1, color: '#77779C' }]
        // },
        type: 'dots',// as DotType
      },
      backgroundOptions: {
        color: '#ffffff',
        // gradient: {
        //   type: 'linear', // 'radial'
        //   rotation: 0,
        //   colorStops: [{ offset: 0, color: '#ededff' }, { offset: 1, color: '#e6e7ff' }]
        // },
      },
      cornersSquareOptions: {
        color: '#ad0303',
        type: 'extra-rounded',// as CornerSquareType,
        // gradient: {
        //   type: 'linear', // 'radial'
        //   rotation: 180,
        //   colorStops: [{ offset: 0, color: '#25456e' }, { offset: 1, color: '#4267b2' }]
        // },
      },
      cornersDotOptions: {
        color: '#ad0303',
        type: 'dot',// as CornerDotType,
        // gradient: {
        //   type: 'linear', // 'radial'
        //   rotation: 180,
        //   colorStops: [{ offset: 0, color: '#00266e' }, { offset: 1, color: '#4060b3' }]
        // },
      }
    };
    return {
      qrCode: null,
      defaultOptions,
      extension: 'svg',
      // qrCode: new QRCodeStyling(options)
    }
  },
  computed: {
    allOptions() {
      let options = {...this.defaultOptions, ...this.options}

      options.data = (this.value)?this.value:this.options.data
      options.width = (this.size)?this.size:this.options.width
      options.height = (this.size)?this.size:this.options.height

      if (this.logo) {
        options.image = this.logo
      }

      return options
    },

    fixedWidth() {
      let v = this.allOptions.width
      if (Number.isInteger(v)) {
        v += 'px'
      }

      return v
    },

    fixedHeight() {
      let v = this.allOptions.height
      if (Number.isInteger(v)) {
        v += 'px'
      }

      return v
    },
  },
  mounted : function() {
    this.$refs["qrCode"].style.width = this.fixedWidth
    this.$refs["qrCode"].style.height = this.fixedHeight

    this.qrCode = new (qr_code_styling_default())(this.allOptions)
    this.qrCode.append(this.$refs["qrCode"]);
  },
  methods: {
    download() {
      // this.qrCode.download({ extension: this.extension as Extension })
    }
  },
  watch:{
    "value":{
      immediate:true,
      handler(val){
        if (val && this.qrCode) {
          this.qrCode.update(this.allOptions);
        }
      }
    },
    "size":{
      immediate:true,
      handler(val){
        if (val && this.qrCode) {
          this.qrCode.update(this.allOptions);
        }
      }
    },
    "logo":{
      immediate:true,
      handler(val){
        if (val && this.qrCode) {
          this.qrCode.update(this.allOptions);
        }
      }
    },
    "options":{
      immediate:true,
      handler(val){
        if (val && this.qrCode) {
          this.qrCode.update(this.allOptions);
        }
      }
    },
  },
});

;// CONCATENATED MODULE: ./src/package/vue-qr-code-styling/index.vue?vue&type=script&lang=ts&
 /* harmony default export */ var package_vue_qr_code_stylingvue_type_script_lang_ts_ = (vue_qr_code_stylingvue_type_script_lang_ts_); 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/package/vue-qr-code-styling/index.vue?vue&type=style&index=0&id=ec5d0e78&prod&scoped=true&lang=css&
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/package/vue-qr-code-styling/index.vue?vue&type=style&index=0&id=ec5d0e78&prod&scoped=true&lang=css&

;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent(
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */,
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options =
    typeof scriptExports === 'function' ? scriptExports.options : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) {
    // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
          injectStyles.call(
            this,
            (options.functional ? this.parent : this).$root.$options.shadowRoot
          )
        }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

;// CONCATENATED MODULE: ./src/package/vue-qr-code-styling/index.vue



;


/* normalize component */

var component = normalizeComponent(
  package_vue_qr_code_stylingvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  null,
  "ec5d0e78",
  null
  
)

/* harmony default export */ var vue_qr_code_styling = (component.exports);
;// CONCATENATED MODULE: ./src/package/index.js

const coms = [vue_qr_code_styling];

// 批量组件注册
const install = function (Vue) {
  coms.forEach(com => {
    Vue.component(com.name, com);
  });
};
/* harmony default export */ var src_package = (install);
;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = (src_package);


}();
module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=vue-qr-code-styling.common.js.map