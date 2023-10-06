/**
 * Less - Leaner CSS v4.2.0
 * http://lesscss.org
 *
 * Copyright (c) 2009-2023, Alexis Sellier <self@cloudhead.net>
 * Licensed under the Apache-2.0 License.
 *
 * @license Apache-2.0
 */
!(function (e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define(t)
    : ((e = "undefined" != typeof globalThis ? globalThis : e || self).less =
        t());
})(this, function () {
  "use strict";
  function e(e) {
    return e
      .replace(/^[a-z-]+:\/+?[^/]+/, "")
      .replace(/[?&]livereload=\w+/, "")
      .replace(/^\//, "")
      .replace(/\.[a-zA-Z]+$/, "")
      .replace(/[^.\w-]+/g, "-")
      .replace(/\./g, ":");
  }
  function t(e, t) {
    if (t)
      for (var i in t.dataset)
        if (Object.prototype.hasOwnProperty.call(t.dataset, i))
          if (
            "env" === i ||
            "dumpLineNumbers" === i ||
            "rootpath" === i ||
            "errorReporting" === i
          )
            e[i] = t.dataset[i];
          else
            try {
              e[i] = JSON.parse(t.dataset[i]);
            } catch (e) {}
  }
  var i = function (t, i, n) {
      var r = n.href || "",
        s = "less:" + (n.title || e(r)),
        o = t.getElementById(s),
        a = !1,
        l = t.createElement("style");
      l.setAttribute("type", "text/css"),
        n.media && l.setAttribute("media", n.media),
        (l.id = s),
        l.styleSheet ||
          (l.appendChild(t.createTextNode(i)),
          (a =
            null !== o &&
            o.childNodes.length > 0 &&
            l.childNodes.length > 0 &&
            o.firstChild.nodeValue === l.firstChild.nodeValue));
      var u = t.getElementsByTagName("head")[0];
      if (null === o || !1 === a) {
        var c = (n && n.nextSibling) || null;
        c ? c.parentNode.insertBefore(l, c) : u.appendChild(l);
      }
      if ((o && !1 === a && o.parentNode.removeChild(o), l.styleSheet))
        try {
          l.styleSheet.cssText = i;
        } catch (e) {
          throw new Error("Couldn't reassign styleSheet.cssText.");
        }
    },
    n = function (e) {
      var t,
        i = e.document;
      return (
        i.currentScript || (t = i.getElementsByTagName("script"))[t.length - 1]
      );
    },
    r = {
      error: function (e) {
        this._fireEvent("error", e);
      },
      warn: function (e) {
        this._fireEvent("warn", e);
      },
      info: function (e) {
        this._fireEvent("info", e);
      },
      debug: function (e) {
        this._fireEvent("debug", e);
      },
      addListener: function (e) {
        this._listeners.push(e);
      },
      removeListener: function (e) {
        for (var t = 0; t < this._listeners.length; t++)
          if (this._listeners[t] === e)
            return void this._listeners.splice(t, 1);
      },
      _fireEvent: function (e, t) {
        for (var i = 0; i < this._listeners.length; i++) {
          var n = this._listeners[i][e];
          n && n(t);
        }
      },
      _listeners: []
    },
    s = (function () {
      function e(e, t) {
        (this.fileManagers = t || []), (e = e || {});
        for (
          var i = [],
            n = i.concat([
              "encodeBase64",
              "mimeLookup",
              "charsetLookup",
              "getSourceMapGenerator"
            ]),
            r = 0;
          r < n.length;
          r++
        ) {
          var s = n[r],
            o = e[s];
          o
            ? (this[s] = o.bind(e))
            : r < i.length &&
              this.warn("missing required function in environment - " + s);
        }
      }
      return (
        (e.prototype.getFileManager = function (e, t, i, n, s) {
          e ||
            r.warn(
              "getFileManager called with no filename.. Please report this issue. continuing."
            ),
            void 0 === t &&
              r.warn(
                "getFileManager called with null directory.. Please report this issue. continuing."
              );
          var o = this.fileManagers;
          i.pluginManager &&
            (o = [].concat(o).concat(i.pluginManager.getFileManagers()));
          for (var a = o.length - 1; a >= 0; a--) {
            var l = o[a];
            if (l[s ? "supportsSync" : "supports"](e, t, i, n)) return l;
          }
          return null;
        }),
        (e.prototype.addFileManager = function (e) {
          this.fileManagers.push(e);
        }),
        (e.prototype.clearFileManagers = function () {
          this.fileManagers = [];
        }),
        e
      );
    })(),
    o = {
      aliceblue: "#f0f8ff",
      antiquewhite: "#faebd7",
      aqua: "#00ffff",
      aquamarine: "#7fffd4",
      azure: "#f0ffff",
      beige: "#f5f5dc",
      bisque: "#ffe4c4",
      black: "#000000",
      blanchedalmond: "#ffebcd",
      blue: "#0000ff",
      blueviolet: "#8a2be2",
      brown: "#a52a2a",
      burlywood: "#deb887",
      cadetblue: "#5f9ea0",
      chartreuse: "#7fff00",
      chocolate: "#d2691e",
      coral: "#ff7f50",
      cornflowerblue: "#6495ed",
      cornsilk: "#fff8dc",
      crimson: "#dc143c",
      cyan: "#00ffff",
      darkblue: "#00008b",
      darkcyan: "#008b8b",
      darkgoldenrod: "#b8860b",
      darkgray: "#a9a9a9",
      darkgrey: "#a9a9a9",
      darkgreen: "#006400",
      darkkhaki: "#bdb76b",
      darkmagenta: "#8b008b",
      darkolivegreen: "#556b2f",
      darkorange: "#ff8c00",
      darkorchid: "#9932cc",
      darkred: "#8b0000",
      darksalmon: "#e9967a",
      darkseagreen: "#8fbc8f",
      darkslateblue: "#483d8b",
      darkslategray: "#2f4f4f",
      darkslategrey: "#2f4f4f",
      darkturquoise: "#00ced1",
      darkviolet: "#9400d3",
      deeppink: "#ff1493",
      deepskyblue: "#00bfff",
      dimgray: "#696969",
      dimgrey: "#696969",
      dodgerblue: "#1e90ff",
      firebrick: "#b22222",
      floralwhite: "#fffaf0",
      forestgreen: "#228b22",
      fuchsia: "#ff00ff",
      gainsboro: "#dcdcdc",
      ghostwhite: "#f8f8ff",
      gold: "#ffd700",
      goldenrod: "#daa520",
      gray: "#808080",
      grey: "#808080",
      green: "#008000",
      greenyellow: "#adff2f",
      honeydew: "#f0fff0",
      hotpink: "#ff69b4",
      indianred: "#cd5c5c",
      indigo: "#4b0082",
      ivory: "#fffff0",
      khaki: "#f0e68c",
      lavender: "#e6e6fa",
      lavenderblush: "#fff0f5",
      lawngreen: "#7cfc00",
      lemonchiffon: "#fffacd",
      lightblue: "#add8e6",
      lightcoral: "#f08080",
      lightcyan: "#e0ffff",
      lightgoldenrodyellow: "#fafad2",
      lightgray: "#d3d3d3",
      lightgrey: "#d3d3d3",
      lightgreen: "#90ee90",
      lightpink: "#ffb6c1",
      lightsalmon: "#ffa07a",
      lightseagreen: "#20b2aa",
      lightskyblue: "#87cefa",
      lightslategray: "#778899",
      lightslategrey: "#778899",
      lightsteelblue: "#b0c4de",
      lightyellow: "#ffffe0",
      lime: "#00ff00",
      limegreen: "#32cd32",
      linen: "#faf0e6",
      magenta: "#ff00ff",
      maroon: "#800000",
      mediumaquamarine: "#66cdaa",
      mediumblue: "#0000cd",
      mediumorchid: "#ba55d3",
      mediumpurple: "#9370d8",
      mediumseagreen: "#3cb371",
      mediumslateblue: "#7b68ee",
      mediumspringgreen: "#00fa9a",
      mediumturquoise: "#48d1cc",
      mediumvioletred: "#c71585",
      midnightblue: "#191970",
      mintcream: "#f5fffa",
      mistyrose: "#ffe4e1",
      moccasin: "#ffe4b5",
      navajowhite: "#ffdead",
      navy: "#000080",
      oldlace: "#fdf5e6",
      olive: "#808000",
      olivedrab: "#6b8e23",
      orange: "#ffa500",
      orangered: "#ff4500",
      orchid: "#da70d6",
      palegoldenrod: "#eee8aa",
      palegreen: "#98fb98",
      paleturquoise: "#afeeee",
      palevioletred: "#d87093",
      papayawhip: "#ffefd5",
      peachpuff: "#ffdab9",
      peru: "#cd853f",
      pink: "#ffc0cb",
      plum: "#dda0dd",
      powderblue: "#b0e0e6",
      purple: "#800080",
      rebeccapurple: "#663399",
      red: "#ff0000",
      rosybrown: "#bc8f8f",
      royalblue: "#4169e1",
      saddlebrown: "#8b4513",
      salmon: "#fa8072",
      sandybrown: "#f4a460",
      seagreen: "#2e8b57",
      seashell: "#fff5ee",
      sienna: "#a0522d",
      silver: "#c0c0c0",
      skyblue: "#87ceeb",
      slateblue: "#6a5acd",
      slategray: "#708090",
      slategrey: "#708090",
      snow: "#fffafa",
      springgreen: "#00ff7f",
      steelblue: "#4682b4",
      tan: "#d2b48c",
      teal: "#008080",
      thistle: "#d8bfd8",
      tomato: "#ff6347",
      turquoise: "#40e0d0",
      violet: "#ee82ee",
      wheat: "#f5deb3",
      white: "#ffffff",
      whitesmoke: "#f5f5f5",
      yellow: "#ffff00",
      yellowgreen: "#9acd32"
    },
    a = {
      length: {
        m: 1,
        cm: 0.01,
        mm: 0.001,
        in: 0.0254,
        px: 0.0254 / 96,
        pt: 0.0254 / 72,
        pc: (0.0254 / 72) * 12
      },
      duration: { s: 1, ms: 0.001 },
      angle: { rad: 1 / (2 * Math.PI), deg: 1 / 360, grad: 1 / 400, turn: 1 }
    },
    l = { colors: o, unitConversions: a },
    u = (function () {
      function e() {
        (this.parent = null),
          (this.visibilityBlocks = void 0),
          (this.nodeVisible = void 0),
          (this.rootNode = null),
          (this.parsed = null);
      }
      return (
        Object.defineProperty(e.prototype, "currentFileInfo", {
          get: function () {
            return this.fileInfo();
          },
          enumerable: !1,
          configurable: !0
        }),
        Object.defineProperty(e.prototype, "index", {
          get: function () {
            return this.getIndex();
          },
          enumerable: !1,
          configurable: !0
        }),
        (e.prototype.setParent = function (t, i) {
          function n(t) {
            t && t instanceof e && (t.parent = i);
          }
          Array.isArray(t) ? t.forEach(n) : n(t);
        }),
        (e.prototype.getIndex = function () {
          return this._index || (this.parent && this.parent.getIndex()) || 0;
        }),
        (e.prototype.fileInfo = function () {
          return (
            this._fileInfo || (this.parent && this.parent.fileInfo()) || {}
          );
        }),
        (e.prototype.isRulesetLike = function () {
          return !1;
        }),
        (e.prototype.toCSS = function (e) {
          var t = [];
          return (
            this.genCSS(e, {
              add: function (e, i, n) {
                t.push(e);
              },
              isEmpty: function () {
                return 0 === t.length;
              }
            }),
            t.join("")
          );
        }),
        (e.prototype.genCSS = function (e, t) {
          t.add(this.value);
        }),
        (e.prototype.accept = function (e) {
          this.value = e.visit(this.value);
        }),
        (e.prototype.eval = function () {
          return this;
        }),
        (e.prototype._operate = function (e, t, i, n) {
          switch (t) {
            case "+":
              return i + n;
            case "-":
              return i - n;
            case "*":
              return i * n;
            case "/":
              return i / n;
          }
        }),
        (e.prototype.fround = function (e, t) {
          var i = e && e.numPrecision;
          return i ? Number((t + 2e-16).toFixed(i)) : t;
        }),
        (e.compare = function (t, i) {
          if (t.compare && "Quoted" !== i.type && "Anonymous" !== i.type)
            return t.compare(i);
          if (i.compare) return -i.compare(t);
          if (t.type === i.type) {
            if (((t = t.value), (i = i.value), !Array.isArray(t)))
              return t === i ? 0 : void 0;
            if (t.length === i.length) {
              for (var n = 0; n < t.length; n++)
                if (0 !== e.compare(t[n], i[n])) return;
              return 0;
            }
          }
        }),
        (e.numericCompare = function (e, t) {
          return e < t ? -1 : e === t ? 0 : e > t ? 1 : void 0;
        }),
        (e.prototype.blocksVisibility = function () {
          return (
            void 0 === this.visibilityBlocks && (this.visibilityBlocks = 0),
            0 !== this.visibilityBlocks
          );
        }),
        (e.prototype.addVisibilityBlock = function () {
          void 0 === this.visibilityBlocks && (this.visibilityBlocks = 0),
            (this.visibilityBlocks = this.visibilityBlocks + 1);
        }),
        (e.prototype.removeVisibilityBlock = function () {
          void 0 === this.visibilityBlocks && (this.visibilityBlocks = 0),
            (this.visibilityBlocks = this.visibilityBlocks - 1);
        }),
        (e.prototype.ensureVisibility = function () {
          this.nodeVisible = !0;
        }),
        (e.prototype.ensureInvisibility = function () {
          this.nodeVisible = !1;
        }),
        (e.prototype.isVisible = function () {
          return this.nodeVisible;
        }),
        (e.prototype.visibilityInfo = function () {
          return {
            visibilityBlocks: this.visibilityBlocks,
            nodeVisible: this.nodeVisible
          };
        }),
        (e.prototype.copyVisibilityInfo = function (e) {
          e &&
            ((this.visibilityBlocks = e.visibilityBlocks),
            (this.nodeVisible = e.nodeVisible));
        }),
        e
      );
    })(),
    c = function (e, t, i) {
      var n = this;
      Array.isArray(e)
        ? (this.rgb = e)
        : e.length >= 6
        ? ((this.rgb = []),
          e.match(/.{2}/g).map(function (e, t) {
            t < 3
              ? n.rgb.push(parseInt(e, 16))
              : (n.alpha = parseInt(e, 16) / 255);
          }))
        : ((this.rgb = []),
          e.split("").map(function (e, t) {
            t < 3
              ? n.rgb.push(parseInt(e + e, 16))
              : (n.alpha = parseInt(e + e, 16) / 255);
          })),
        (this.alpha = this.alpha || ("number" == typeof t ? t : 1)),
        void 0 !== i && (this.value = i);
    };
  function h(e, t) {
    return Math.min(Math.max(e, 0), t);
  }
  function f(e) {
    return (
      "#" +
      e
        .map(function (e) {
          return ((e = h(Math.round(e), 255)) < 16 ? "0" : "") + e.toString(16);
        })
        .join("")
    );
  }
  (c.prototype = Object.assign(new u(), {
    type: "Color",
    luma: function () {
      var e = this.rgb[0] / 255,
        t = this.rgb[1] / 255,
        i = this.rgb[2] / 255;
      return (
        0.2126 *
          (e = e <= 0.03928 ? e / 12.92 : Math.pow((e + 0.055) / 1.055, 2.4)) +
        0.7152 *
          (t = t <= 0.03928 ? t / 12.92 : Math.pow((t + 0.055) / 1.055, 2.4)) +
        0.0722 *
          (i = i <= 0.03928 ? i / 12.92 : Math.pow((i + 0.055) / 1.055, 2.4))
      );
    },
    genCSS: function (e, t) {
      t.add(this.toCSS(e));
    },
    toCSS: function (e, t) {
      var i,
        n,
        r,
        s = e && e.compress && !t,
        o = [];
      if (((n = this.fround(e, this.alpha)), this.value))
        if (0 === this.value.indexOf("rgb")) n < 1 && (r = "rgba");
        else {
          if (0 !== this.value.indexOf("hsl")) return this.value;
          r = n < 1 ? "hsla" : "hsl";
        }
      else n < 1 && (r = "rgba");
      switch (r) {
        case "rgba":
          o = this.rgb
            .map(function (e) {
              return h(Math.round(e), 255);
            })
            .concat(h(n, 1));
          break;
        case "hsla":
          o.push(h(n, 1));
        case "hsl":
          (i = this.toHSL()),
            (o = [
              this.fround(e, i.h),
              this.fround(e, 100 * i.s) + "%",
              this.fround(e, 100 * i.l) + "%"
            ].concat(o));
      }
      if (r) return r + "(" + o.join("," + (s ? "" : " ")) + ")";
      if (((i = this.toRGB()), s)) {
        var a = i.split("");
        a[1] === a[2] &&
          a[3] === a[4] &&
          a[5] === a[6] &&
          (i = "#" + a[1] + a[3] + a[5]);
      }
      return i;
    },
    operate: function (e, t, i) {
      for (
        var n = new Array(3), r = this.alpha * (1 - i.alpha) + i.alpha, s = 0;
        s < 3;
        s++
      )
        n[s] = this._operate(e, t, this.rgb[s], i.rgb[s]);
      return new c(n, r);
    },
    toRGB: function () {
      return f(this.rgb);
    },
    toHSL: function () {
      var e,
        t,
        i = this.rgb[0] / 255,
        n = this.rgb[1] / 255,
        r = this.rgb[2] / 255,
        s = this.alpha,
        o = Math.max(i, n, r),
        a = Math.min(i, n, r),
        l = (o + a) / 2,
        u = o - a;
      if (o === a) e = t = 0;
      else {
        switch (((t = l > 0.5 ? u / (2 - o - a) : u / (o + a)), o)) {
          case i:
            e = (n - r) / u + (n < r ? 6 : 0);
            break;
          case n:
            e = (r - i) / u + 2;
            break;
          case r:
            e = (i - n) / u + 4;
        }
        e /= 6;
      }
      return { h: 360 * e, s: t, l: l, a: s };
    },
    toHSV: function () {
      var e,
        t,
        i = this.rgb[0] / 255,
        n = this.rgb[1] / 255,
        r = this.rgb[2] / 255,
        s = this.alpha,
        o = Math.max(i, n, r),
        a = Math.min(i, n, r),
        l = o,
        u = o - a;
      if (((t = 0 === o ? 0 : u / o), o === a)) e = 0;
      else {
        switch (o) {
          case i:
            e = (n - r) / u + (n < r ? 6 : 0);
            break;
          case n:
            e = (r - i) / u + 2;
            break;
          case r:
            e = (i - n) / u + 4;
        }
        e /= 6;
      }
      return { h: 360 * e, s: t, v: l, a: s };
    },
    toARGB: function () {
      return f([255 * this.alpha].concat(this.rgb));
    },
    compare: function (e) {
      return e.rgb &&
        e.rgb[0] === this.rgb[0] &&
        e.rgb[1] === this.rgb[1] &&
        e.rgb[2] === this.rgb[2] &&
        e.alpha === this.alpha
        ? 0
        : void 0;
    }
  })),
    (c.fromKeyword = function (e) {
      var t,
        i = e.toLowerCase();
      if (
        (o.hasOwnProperty(i)
          ? (t = new c(o[i].slice(1)))
          : "transparent" === i && (t = new c([0, 0, 0], 0)),
        t)
      )
        return (t.value = e), t;
    });
  var p = function (e) {
    this.value = e;
  };
  p.prototype = Object.assign(new u(), {
    type: "Paren",
    genCSS: function (e, t) {
      t.add("("), this.value.genCSS(e, t), t.add(")");
    },
    eval: function (e) {
      return new p(this.value.eval(e));
    }
  });
  var v = { "": !0, " ": !0, "|": !0 },
    d = function (e) {
      " " === e
        ? ((this.value = " "), (this.emptyOrWhitespace = !0))
        : ((this.value = e ? e.trim() : ""),
          (this.emptyOrWhitespace = "" === this.value));
    };
  d.prototype = Object.assign(new u(), {
    type: "Combinator",
    genCSS: function (e, t) {
      var i = e.compress || v[this.value] ? "" : " ";
      t.add(i + this.value + i);
    }
  });
  var m = function (e, t, i, n, r, s) {
    (this.combinator = e instanceof d ? e : new d(e)),
      (this.value = "string" == typeof t ? t.trim() : t || ""),
      (this.isVariable = i),
      (this._index = n),
      (this._fileInfo = r),
      this.copyVisibilityInfo(s),
      this.setParent(this.combinator, this);
  };
  m.prototype = Object.assign(new u(), {
    type: "Element",
    accept: function (e) {
      var t = this.value;
      (this.combinator = e.visit(this.combinator)),
        "object" == typeof t && (this.value = e.visit(t));
    },
    eval: function (e) {
      return new m(
        this.combinator,
        this.value.eval ? this.value.eval(e) : this.value,
        this.isVariable,
        this.getIndex(),
        this.fileInfo(),
        this.visibilityInfo()
      );
    },
    clone: function () {
      return new m(
        this.combinator,
        this.value,
        this.isVariable,
        this.getIndex(),
        this.fileInfo(),
        this.visibilityInfo()
      );
    },
    genCSS: function (e, t) {
      t.add(this.toCSS(e), this.fileInfo(), this.getIndex());
    },
    toCSS: function (e) {
      e = e || {};
      var t = this.value,
        i = e.firstSelector;
      return (
        t instanceof p && (e.firstSelector = !0),
        (t = t.toCSS ? t.toCSS(e) : t),
        (e.firstSelector = i),
        "" === t && "&" === this.combinator.value.charAt(0)
          ? ""
          : this.combinator.toCSS(e) + t
      );
    }
  });
  var g = { ALWAYS: 0, PARENS_DIVISION: 1, PARENS: 2 },
    y = 0,
    b = 1,
    w = 2;
  function x(e) {
    return Object.prototype.toString.call(e).slice(8, -1);
  }
  function S(e) {
    return "Array" === x(e);
  }
  function I(e, t) {
    return (
      void 0 === t && (t = {}),
      S(e)
        ? e.map(function (e) {
            return I(e, t);
          })
        : "Object" !== x((i = e)) ||
          i.constructor !== Object ||
          Object.getPrototypeOf(i) !== Object.prototype
        ? e
        : (function () {
            for (var e = 0, t = 0, i = arguments.length; t < i; t++)
              e += arguments[t].length;
            var n = Array(e),
              r = 0;
            for (t = 0; t < i; t++)
              for (var s = arguments[t], o = 0, a = s.length; o < a; o++, r++)
                n[r] = s[o];
            return n;
          })(
            Object.getOwnPropertyNames(e),
            Object.getOwnPropertySymbols(e)
          ).reduce(function (i, n) {
            return (
              (S(t.props) && !t.props.includes(n)) ||
                (function (e, t, i, n, r) {
                  var s = {}.propertyIsEnumerable.call(n, t)
                    ? "enumerable"
                    : "nonenumerable";
                  "enumerable" === s && (e[t] = i),
                    r &&
                      "nonenumerable" === s &&
                      Object.defineProperty(e, t, {
                        value: i,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                      });
                })(i, n, I(e[n], t), e, t.nonenumerable),
              i
            );
          }, {})
    );
    var i;
  }
  function C(e, t) {
    for (var i = e + 1, n = null, r = -1; --i >= 0 && "\n" !== t.charAt(i); )
      r++;
    return (
      "number" == typeof e && (n = (t.slice(0, e).match(/\n/g) || "").length),
      { line: n, column: r }
    );
  }
  function k(e) {
    var t,
      i = e.length,
      n = new Array(i);
    for (t = 0; t < i; t++) n[t] = e[t];
    return n;
  }
  function _(e) {
    var t = {};
    for (var i in e)
      Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
    return t;
  }
  function A(e, t) {
    var i = t || {};
    if (!t._defaults) {
      i = {};
      var n = I(e);
      i._defaults = n;
      var r = t ? I(t) : {};
      Object.assign(i, n, r);
    }
    return i;
  }
  function P(e, t) {
    if (t && t._defaults) return t;
    var i = A(e, t);
    if (
      (i.strictMath && (i.math = g.PARENS),
      i.relativeUrls && (i.rewriteUrls = w),
      "string" == typeof i.math)
    )
      switch (i.math.toLowerCase()) {
        case "always":
          i.math = g.ALWAYS;
          break;
        case "parens-division":
          i.math = g.PARENS_DIVISION;
          break;
        case "strict":
        case "parens":
          i.math = g.PARENS;
          break;
        default:
          i.math = g.PARENS;
      }
    if ("string" == typeof i.rewriteUrls)
      switch (i.rewriteUrls.toLowerCase()) {
        case "off":
          i.rewriteUrls = y;
          break;
        case "local":
          i.rewriteUrls = b;
          break;
        case "all":
          i.rewriteUrls = w;
      }
    return i;
  }
  function M(e, t) {
    void 0 === t && (t = []);
    for (var i = 0, n = e.length; i < n; i++) {
      var r = e[i];
      Array.isArray(r) ? M(r, t) : void 0 !== r && t.push(r);
    }
    return t;
  }
  function E(e) {
    return null == e;
  }
  var R = Object.freeze({
      __proto__: null,
      getLocation: C,
      copyArray: k,
      clone: _,
      defaults: A,
      copyOptions: P,
      merge: function (e, t) {
        for (var i in t)
          Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
        return e;
      },
      flattenArray: M,
      isNullOrUndefined: E
    }),
    O = /(<anonymous>|Function):(\d+):(\d+)/,
    V = function (e, t, i) {
      Error.call(this);
      var n = e.filename || i;
      if (((this.message = e.message), (this.stack = e.stack), t && n)) {
        var r = t.contents[n],
          s = C(e.index, r),
          o = s.line,
          a = s.column,
          l = e.call && C(e.call, r).line,
          u = r ? r.split("\n") : "";
        if (
          ((this.type = e.type || "Syntax"),
          (this.filename = n),
          (this.index = e.index),
          (this.line = "number" == typeof o ? o + 1 : null),
          (this.column = a),
          !this.line && this.stack)
        ) {
          var c = this.stack.match(O),
            h = new Function("a", "throw new Error()"),
            f = 0;
          try {
            h();
          } catch (e) {
            var p = e.stack.match(O);
            f = 1 - parseInt(p[2]);
          }
          c &&
            (c[2] && (this.line = parseInt(c[2]) + f),
            c[3] && (this.column = parseInt(c[3])));
        }
        (this.callLine = l + 1),
          (this.callExtract = u[l]),
          (this.extract = [u[this.line - 2], u[this.line - 1], u[this.line]]);
      }
    };
  if (void 0 === Object.create) {
    var F = function () {};
    (F.prototype = Error.prototype), (V.prototype = new F());
  } else V.prototype = Object.create(Error.prototype);
  (V.prototype.constructor = V),
    (V.prototype.toString = function (e) {
      e = e || {};
      var t = "",
        i = this.extract || [],
        n = [],
        r = function (e) {
          return e;
        };
      if (e.stylize) {
        var s = typeof e.stylize;
        if ("function" !== s)
          throw Error("options.stylize should be a function, got a " + s + "!");
        r = e.stylize;
      }
      if (null !== this.line) {
        if (
          ("string" == typeof i[0] &&
            n.push(r(this.line - 1 + " " + i[0], "grey")),
          "string" == typeof i[1])
        ) {
          var o = this.line + " ";
          i[1] &&
            (o +=
              i[1].slice(0, this.column) +
              r(
                r(
                  r(i[1].substr(this.column, 1), "bold") +
                    i[1].slice(this.column + 1),
                  "red"
                ),
                "inverse"
              )),
            n.push(o);
        }
        "string" == typeof i[2] &&
          n.push(r(this.line + 1 + " " + i[2], "grey")),
          (n = n.join("\n") + r("", "reset") + "\n");
      }
      return (
        (t += r(this.type + "Error: " + this.message, "red")),
        this.filename && (t += r(" in ", "red") + this.filename),
        this.line &&
          (t += r(
            " on line " + this.line + ", column " + (this.column + 1) + ":",
            "grey"
          )),
        (t += "\n" + n),
        this.callLine &&
          ((t += r("from ", "red") + (this.filename || "") + "/n"),
          (t += r(this.callLine, "grey") + " " + this.callExtract + "/n")),
        t
      );
    });
  var $ = { visitDeeper: !0 },
    L = !1;
  function j(e) {
    return e;
  }
  var N = (function () {
      function e(e) {
        (this._implementation = e),
          (this._visitInCache = {}),
          (this._visitOutCache = {}),
          L ||
            (!(function e(t, i) {
              var n, r;
              for (n in t)
                switch (typeof (r = t[n])) {
                  case "function":
                    r.prototype &&
                      r.prototype.type &&
                      (r.prototype.typeIndex = i++);
                    break;
                  case "object":
                    i = e(r, i);
                }
              return i;
            })(He, 1),
            (L = !0));
      }
      return (
        (e.prototype.visit = function (e) {
          if (!e) return e;
          var t = e.typeIndex;
          if (!t) return e.value && e.value.typeIndex && this.visit(e.value), e;
          var i,
            n = this._implementation,
            r = this._visitInCache[t],
            s = this._visitOutCache[t],
            o = $;
          if (
            ((o.visitDeeper = !0),
            r ||
              ((r = n[(i = "visit" + e.type)] || j),
              (s = n[i + "Out"] || j),
              (this._visitInCache[t] = r),
              (this._visitOutCache[t] = s)),
            r !== j)
          ) {
            var a = r.call(n, e, o);
            e && n.isReplacing && (e = a);
          }
          if (o.visitDeeper && e)
            if (e.length)
              for (var l = 0, u = e.length; l < u; l++)
                e[l].accept && e[l].accept(this);
            else e.accept && e.accept(this);
          return s != j && s.call(n, e), e;
        }),
        (e.prototype.visitArray = function (e, t) {
          if (!e) return e;
          var i,
            n = e.length;
          if (t || !this._implementation.isReplacing) {
            for (i = 0; i < n; i++) this.visit(e[i]);
            return e;
          }
          var r = [];
          for (i = 0; i < n; i++) {
            var s = this.visit(e[i]);
            void 0 !== s &&
              (s.splice ? s.length && this.flatten(s, r) : r.push(s));
          }
          return r;
        }),
        (e.prototype.flatten = function (e, t) {
          var i, n, r, s, o, a;
          for (t || (t = []), n = 0, i = e.length; n < i; n++)
            if (void 0 !== (r = e[n]))
              if (r.splice)
                for (o = 0, s = r.length; o < s; o++)
                  void 0 !== (a = r[o]) &&
                    (a.splice ? a.length && this.flatten(a, t) : t.push(a));
              else t.push(r);
          return t;
        }),
        e
      );
    })(),
    D = {},
    B = function (e, t, i) {
      if (e)
        for (var n = 0; n < i.length; n++)
          Object.prototype.hasOwnProperty.call(e, i[n]) && (t[i[n]] = e[i[n]]);
    },
    U = [
      "paths",
      "rewriteUrls",
      "rootpath",
      "strictImports",
      "insecure",
      "dumpLineNumbers",
      "compress",
      "syncImport",
      "chunkInput",
      "mime",
      "useFileCache",
      "processImports",
      "pluginManager"
    ];
  D.Parse = function (e) {
    B(e, this, U), "string" == typeof this.paths && (this.paths = [this.paths]);
  };
  var q = [
    "paths",
    "compress",
    "math",
    "strictUnits",
    "sourceMap",
    "importMultiple",
    "urlArgs",
    "javascriptEnabled",
    "pluginManager",
    "importantScope",
    "rewriteUrls"
  ];
  function T(e) {
    return !/^(?:[a-z-]+:|\/|#)/i.test(e);
  }
  function z(e) {
    return "." === e.charAt(0);
  }
  (D.Eval = function (e, t) {
    B(e, this, q),
      "string" == typeof this.paths && (this.paths = [this.paths]),
      (this.frames = t || []),
      (this.importantScope = this.importantScope || []);
  }),
    (D.Eval.prototype.enterCalc = function () {
      this.calcStack || (this.calcStack = []),
        this.calcStack.push(!0),
        (this.inCalc = !0);
    }),
    (D.Eval.prototype.exitCalc = function () {
      this.calcStack.pop(), this.calcStack.length || (this.inCalc = !1);
    }),
    (D.Eval.prototype.inParenthesis = function () {
      this.parensStack || (this.parensStack = []), this.parensStack.push(!0);
    }),
    (D.Eval.prototype.outOfParenthesis = function () {
      this.parensStack.pop();
    }),
    (D.Eval.prototype.inCalc = !1),
    (D.Eval.prototype.mathOn = !0),
    (D.Eval.prototype.isMathOn = function (e) {
      return (
        !!this.mathOn &&
        !!(
          "/" !== e ||
          this.math === g.ALWAYS ||
          (this.parensStack && this.parensStack.length)
        ) &&
        (!(this.math > g.PARENS_DIVISION) ||
          (this.parensStack && this.parensStack.length))
      );
    }),
    (D.Eval.prototype.pathRequiresRewrite = function (e) {
      return (this.rewriteUrls === b ? z : T)(e);
    }),
    (D.Eval.prototype.rewritePath = function (e, t) {
      var i;
      return (
        (t = t || ""),
        (i = this.normalizePath(t + e)),
        z(e) && T(t) && !1 === z(i) && (i = "./" + i),
        i
      );
    }),
    (D.Eval.prototype.normalizePath = function (e) {
      var t,
        i = e.split("/").reverse();
      for (e = []; 0 !== i.length; )
        switch ((t = i.pop())) {
          case ".":
            break;
          case "..":
            0 === e.length || ".." === e[e.length - 1] ? e.push(t) : e.pop();
            break;
          default:
            e.push(t);
        }
      return e.join("/");
    });
  var G = (function () {
      function e(e) {
        (this.imports = []),
          (this.variableImports = []),
          (this._onSequencerEmpty = e),
          (this._currentDepth = 0);
      }
      return (
        (e.prototype.addImport = function (e) {
          var t = this,
            i = { callback: e, args: null, isReady: !1 };
          return (
            this.imports.push(i),
            function () {
              (i.args = Array.prototype.slice.call(arguments, 0)),
                (i.isReady = !0),
                t.tryRun();
            }
          );
        }),
        (e.prototype.addVariableImport = function (e) {
          this.variableImports.push(e);
        }),
        (e.prototype.tryRun = function () {
          this._currentDepth++;
          try {
            for (;;) {
              for (; this.imports.length > 0; ) {
                var e = this.imports[0];
                if (!e.isReady) return;
                (this.imports = this.imports.slice(1)),
                  e.callback.apply(null, e.args);
              }
              if (0 === this.variableImports.length) break;
              var t = this.variableImports[0];
              (this.variableImports = this.variableImports.slice(1)), t();
            }
          } finally {
            this._currentDepth--;
          }
          0 === this._currentDepth &&
            this._onSequencerEmpty &&
            this._onSequencerEmpty();
        }),
        e
      );
    })(),
    W = function (e, t) {
      (this._visitor = new N(this)),
        (this._importer = e),
        (this._finish = t),
        (this.context = new D.Eval()),
        (this.importCount = 0),
        (this.onceFileDetectionMap = {}),
        (this.recursionDetector = {}),
        (this._sequencer = new G(this._onSequencerEmpty.bind(this)));
    };
  W.prototype = {
    isReplacing: !1,
    run: function (e) {
      try {
        this._visitor.visit(e);
      } catch (e) {
        this.error = e;
      }
      (this.isFinished = !0), this._sequencer.tryRun();
    },
    _onSequencerEmpty: function () {
      this.isFinished && this._finish(this.error);
    },
    visitImport: function (e, t) {
      var i = e.options.inline;
      if (!e.css || i) {
        var n = new D.Eval(this.context, k(this.context.frames)),
          r = n.frames[0];
        this.importCount++,
          e.isVariableImport()
            ? this._sequencer.addVariableImport(
                this.processImportNode.bind(this, e, n, r)
              )
            : this.processImportNode(e, n, r);
      }
      t.visitDeeper = !1;
    },
    processImportNode: function (e, t, i) {
      var n,
        r = e.options.inline;
      try {
        n = e.evalForImport(t);
      } catch (t) {
        t.filename ||
          ((t.index = e.getIndex()), (t.filename = e.fileInfo().filename)),
          (e.css = !0),
          (e.error = t);
      }
      if (!n || (n.css && !r))
        this.importCount--, this.isFinished && this._sequencer.tryRun();
      else {
        n.options.multiple && (t.importMultiple = !0);
        for (var s = void 0 === n.css, o = 0; o < i.rules.length; o++)
          if (i.rules[o] === e) {
            i.rules[o] = n;
            break;
          }
        var a = this.onImported.bind(this, n, t),
          l = this._sequencer.addImport(a);
        this._importer.push(n.getPath(), s, n.fileInfo(), n.options, l);
      }
    },
    onImported: function (e, t, i, n, r, s) {
      i &&
        (i.filename ||
          ((i.index = e.getIndex()), (i.filename = e.fileInfo().filename)),
        (this.error = i));
      var o = this,
        a = e.options.inline,
        l = e.options.isPlugin,
        u = e.options.optional,
        c = r || s in o.recursionDetector;
      if (
        (t.importMultiple ||
          (e.skip =
            !!c ||
            function () {
              return (
                s in o.onceFileDetectionMap ||
                ((o.onceFileDetectionMap[s] = !0), !1)
              );
            }),
        !s && u && (e.skip = !0),
        n &&
          ((e.root = n),
          (e.importedFilename = s),
          !a && !l && (t.importMultiple || !c)))
      ) {
        o.recursionDetector[s] = !0;
        var h = this.context;
        this.context = t;
        try {
          this._visitor.visit(n);
        } catch (i) {
          this.error = i;
        }
        this.context = h;
      }
      o.importCount--, o.isFinished && o._sequencer.tryRun();
    },
    visitDeclaration: function (e, t) {
      "DetachedRuleset" === e.value.type
        ? this.context.frames.unshift(e)
        : (t.visitDeeper = !1);
    },
    visitDeclarationOut: function (e) {
      "DetachedRuleset" === e.value.type && this.context.frames.shift();
    },
    visitAtRule: function (e, t) {
      this.context.frames.unshift(e);
    },
    visitAtRuleOut: function (e) {
      this.context.frames.shift();
    },
    visitMixinDefinition: function (e, t) {
      this.context.frames.unshift(e);
    },
    visitMixinDefinitionOut: function (e) {
      this.context.frames.shift();
    },
    visitRuleset: function (e, t) {
      this.context.frames.unshift(e);
    },
    visitRulesetOut: function (e) {
      this.context.frames.shift();
    },
    visitMedia: function (e, t) {
      this.context.frames.unshift(e.rules[0]);
    },
    visitMediaOut: function (e) {
      this.context.frames.shift();
    }
  };
  var J = (function () {
      function e(e) {
        this.visible = e;
      }
      return (
        (e.prototype.run = function (e) {
          this.visit(e);
        }),
        (e.prototype.visitArray = function (e) {
          if (!e) return e;
          var t,
            i = e.length;
          for (t = 0; t < i; t++) this.visit(e[t]);
          return e;
        }),
        (e.prototype.visit = function (e) {
          return e
            ? e.constructor === Array
              ? this.visitArray(e)
              : (!e.blocksVisibility ||
                  e.blocksVisibility() ||
                  (this.visible ? e.ensureVisibility() : e.ensureInvisibility(),
                  e.accept(this)),
                e)
            : e;
        }),
        e
      );
    })(),
    H = (function () {
      function e() {
        (this._visitor = new N(this)),
          (this.contexts = []),
          (this.allExtendsStack = [[]]);
      }
      return (
        (e.prototype.run = function (e) {
          return (
            ((e = this._visitor.visit(e)).allExtends = this.allExtendsStack[0]),
            e
          );
        }),
        (e.prototype.visitDeclaration = function (e, t) {
          t.visitDeeper = !1;
        }),
        (e.prototype.visitMixinDefinition = function (e, t) {
          t.visitDeeper = !1;
        }),
        (e.prototype.visitRuleset = function (e, t) {
          if (!e.root) {
            var i,
              n,
              r,
              s,
              o = [],
              a = e.rules,
              l = a ? a.length : 0;
            for (i = 0; i < l; i++)
              e.rules[i] instanceof He.Extend &&
                (o.push(a[i]), (e.extendOnEveryPath = !0));
            var u = e.paths;
            for (i = 0; i < u.length; i++) {
              var c = u[i],
                h = c[c.length - 1].extendList;
              for (
                (s = h ? k(h).concat(o) : o) &&
                  (s = s.map(function (e) {
                    return e.clone();
                  })),
                  n = 0;
                n < s.length;
                n++
              )
                (this.foundExtends = !0),
                  (r = s[n]).findSelfSelectors(c),
                  (r.ruleset = e),
                  0 === n && (r.firstExtendOnThisSelectorPath = !0),
                  this.allExtendsStack[this.allExtendsStack.length - 1].push(r);
            }
            this.contexts.push(e.selectors);
          }
        }),
        (e.prototype.visitRulesetOut = function (e) {
          e.root || (this.contexts.length = this.contexts.length - 1);
        }),
        (e.prototype.visitMedia = function (e, t) {
          (e.allExtends = []), this.allExtendsStack.push(e.allExtends);
        }),
        (e.prototype.visitMediaOut = function (e) {
          this.allExtendsStack.length = this.allExtendsStack.length - 1;
        }),
        (e.prototype.visitAtRule = function (e, t) {
          (e.allExtends = []), this.allExtendsStack.push(e.allExtends);
        }),
        (e.prototype.visitAtRuleOut = function (e) {
          this.allExtendsStack.length = this.allExtendsStack.length - 1;
        }),
        e
      );
    })(),
    Q = (function () {
      function e() {
        this._visitor = new N(this);
      }
      return (
        (e.prototype.run = function (e) {
          var t = new H();
          if (((this.extendIndices = {}), t.run(e), !t.foundExtends)) return e;
          (e.allExtends = e.allExtends.concat(
            this.doExtendChaining(e.allExtends, e.allExtends)
          )),
            (this.allExtendsStack = [e.allExtends]);
          var i = this._visitor.visit(e);
          return this.checkExtendsForNonMatched(e.allExtends), i;
        }),
        (e.prototype.checkExtendsForNonMatched = function (e) {
          var t = this.extendIndices;
          e.filter(function (e) {
            return !e.hasFoundMatches && 1 == e.parent_ids.length;
          }).forEach(function (e) {
            var i = "_unknown_";
            try {
              i = e.selector.toCSS({});
            } catch (e) {}
            t[e.index + " " + i] ||
              ((t[e.index + " " + i] = !0),
              r.warn("extend '" + i + "' has no matches"));
          });
        }),
        (e.prototype.doExtendChaining = function (e, t, i) {
          var n,
            r,
            s,
            o,
            a,
            l,
            u,
            c,
            h = [],
            f = this;
          for (i = i || 0, n = 0; n < e.length; n++)
            for (r = 0; r < t.length; r++)
              (l = e[n]),
                (u = t[r]),
                l.parent_ids.indexOf(u.object_id) >= 0 ||
                  ((a = [u.selfSelectors[0]]),
                  (s = f.findMatch(l, a)).length &&
                    ((l.hasFoundMatches = !0),
                    l.selfSelectors.forEach(function (e) {
                      var t = u.visibilityInfo();
                      (o = f.extendSelector(s, a, e, l.isVisible())),
                        ((c = new He.Extend(
                          u.selector,
                          u.option,
                          0,
                          u.fileInfo(),
                          t
                        )).selfSelectors = o),
                        (o[o.length - 1].extendList = [c]),
                        h.push(c),
                        (c.ruleset = u.ruleset),
                        (c.parent_ids = c.parent_ids.concat(
                          u.parent_ids,
                          l.parent_ids
                        )),
                        u.firstExtendOnThisSelectorPath &&
                          ((c.firstExtendOnThisSelectorPath = !0),
                          u.ruleset.paths.push(o));
                    })));
          if (h.length) {
            if ((this.extendChainCount++, i > 100)) {
              var p = "{unable to calculate}",
                v = "{unable to calculate}";
              try {
                (p = h[0].selfSelectors[0].toCSS()),
                  (v = h[0].selector.toCSS());
              } catch (e) {}
              throw {
                message:
                  "extend circular reference detected. One of the circular extends is currently:" +
                  p +
                  ":extend(" +
                  v +
                  ")"
              };
            }
            return h.concat(f.doExtendChaining(h, t, i + 1));
          }
          return h;
        }),
        (e.prototype.visitDeclaration = function (e, t) {
          t.visitDeeper = !1;
        }),
        (e.prototype.visitMixinDefinition = function (e, t) {
          t.visitDeeper = !1;
        }),
        (e.prototype.visitSelector = function (e, t) {
          t.visitDeeper = !1;
        }),
        (e.prototype.visitRuleset = function (e, t) {
          if (!e.root) {
            var i,
              n,
              r,
              s,
              o = this.allExtendsStack[this.allExtendsStack.length - 1],
              a = [],
              l = this;
            for (r = 0; r < o.length; r++)
              for (n = 0; n < e.paths.length; n++)
                if (((s = e.paths[n]), !e.extendOnEveryPath)) {
                  var u = s[s.length - 1].extendList;
                  (u && u.length) ||
                    ((i = this.findMatch(o[r], s)).length &&
                      ((o[r].hasFoundMatches = !0),
                      o[r].selfSelectors.forEach(function (e) {
                        var t;
                        (t = l.extendSelector(i, s, e, o[r].isVisible())),
                          a.push(t);
                      })));
                }
            e.paths = e.paths.concat(a);
          }
        }),
        (e.prototype.findMatch = function (e, t) {
          var i,
            n,
            r,
            s,
            o,
            a,
            l,
            u = e.selector.elements,
            c = [],
            h = [];
          for (i = 0; i < t.length; i++)
            for (n = t[i], r = 0; r < n.elements.length; r++)
              for (
                s = n.elements[r],
                  (e.allowBefore || (0 === i && 0 === r)) &&
                    c.push({
                      pathIndex: i,
                      index: r,
                      matched: 0,
                      initialCombinator: s.combinator
                    }),
                  a = 0;
                a < c.length;
                a++
              )
                (l = c[a]),
                  "" === (o = s.combinator.value) && 0 === r && (o = " "),
                  !this.isElementValuesEqual(u[l.matched].value, s.value) ||
                  (l.matched > 0 && u[l.matched].combinator.value !== o)
                    ? (l = null)
                    : l.matched++,
                  l &&
                    ((l.finished = l.matched === u.length),
                    l.finished &&
                      !e.allowAfter &&
                      (r + 1 < n.elements.length || i + 1 < t.length) &&
                      (l = null)),
                  l
                    ? l.finished &&
                      ((l.length = u.length),
                      (l.endPathIndex = i),
                      (l.endPathElementIndex = r + 1),
                      (c.length = 0),
                      h.push(l))
                    : (c.splice(a, 1), a--);
          return h;
        }),
        (e.prototype.isElementValuesEqual = function (e, t) {
          if ("string" == typeof e || "string" == typeof t) return e === t;
          if (e instanceof He.Attribute)
            return (
              e.op === t.op &&
              e.key === t.key &&
              (e.value && t.value
                ? (e = e.value.value || e.value) ===
                  (t = t.value.value || t.value)
                : !e.value && !t.value)
            );
          if (((e = e.value), (t = t.value), e instanceof He.Selector)) {
            if (
              !(t instanceof He.Selector) ||
              e.elements.length !== t.elements.length
            )
              return !1;
            for (var i = 0; i < e.elements.length; i++) {
              if (
                e.elements[i].combinator.value !==
                  t.elements[i].combinator.value &&
                (0 !== i ||
                  (e.elements[i].combinator.value || " ") !==
                    (t.elements[i].combinator.value || " "))
              )
                return !1;
              if (
                !this.isElementValuesEqual(
                  e.elements[i].value,
                  t.elements[i].value
                )
              )
                return !1;
            }
            return !0;
          }
          return !1;
        }),
        (e.prototype.extendSelector = function (e, t, i, n) {
          var r,
            s,
            o,
            a,
            l,
            u = 0,
            c = 0,
            h = [];
          for (r = 0; r < e.length; r++)
            (s = t[(a = e[r]).pathIndex]),
              (o = new He.Element(
                a.initialCombinator,
                i.elements[0].value,
                i.elements[0].isVariable,
                i.elements[0].getIndex(),
                i.elements[0].fileInfo()
              )),
              a.pathIndex > u &&
                c > 0 &&
                ((h[h.length - 1].elements = h[h.length - 1].elements.concat(
                  t[u].elements.slice(c)
                )),
                (c = 0),
                u++),
              (l = s.elements
                .slice(c, a.index)
                .concat([o])
                .concat(i.elements.slice(1))),
              u === a.pathIndex && r > 0
                ? (h[h.length - 1].elements =
                    h[h.length - 1].elements.concat(l))
                : (h = h.concat(t.slice(u, a.pathIndex))).push(
                    new He.Selector(l)
                  ),
              (u = a.endPathIndex),
              (c = a.endPathElementIndex) >= t[u].elements.length &&
                ((c = 0), u++);
          return (
            u < t.length &&
              c > 0 &&
              ((h[h.length - 1].elements = h[h.length - 1].elements.concat(
                t[u].elements.slice(c)
              )),
              u++),
            (h = (h = h.concat(t.slice(u, t.length))).map(function (e) {
              var t = e.createDerived(e.elements);
              return n ? t.ensureVisibility() : t.ensureInvisibility(), t;
            }))
          );
        }),
        (e.prototype.visitMedia = function (e, t) {
          var i = e.allExtends.concat(
            this.allExtendsStack[this.allExtendsStack.length - 1]
          );
          (i = i.concat(this.doExtendChaining(i, e.allExtends))),
            this.allExtendsStack.push(i);
        }),
        (e.prototype.visitMediaOut = function (e) {
          var t = this.allExtendsStack.length - 1;
          this.allExtendsStack.length = t;
        }),
        (e.prototype.visitAtRule = function (e, t) {
          var i = e.allExtends.concat(
            this.allExtendsStack[this.allExtendsStack.length - 1]
          );
          (i = i.concat(this.doExtendChaining(i, e.allExtends))),
            this.allExtendsStack.push(i);
        }),
        (e.prototype.visitAtRuleOut = function (e) {
          var t = this.allExtendsStack.length - 1;
          this.allExtendsStack.length = t;
        }),
        e
      );
    })(),
    K = (function () {
      function e() {
        (this.contexts = [[]]), (this._visitor = new N(this));
      }
      return (
        (e.prototype.run = function (e) {
          return this._visitor.visit(e);
        }),
        (e.prototype.visitDeclaration = function (e, t) {
          t.visitDeeper = !1;
        }),
        (e.prototype.visitMixinDefinition = function (e, t) {
          t.visitDeeper = !1;
        }),
        (e.prototype.visitRuleset = function (e, t) {
          var i,
            n = this.contexts[this.contexts.length - 1],
            r = [];
          this.contexts.push(r),
            e.root ||
              ((i = e.selectors) &&
                ((i = i.filter(function (e) {
                  return e.getIsOutput();
                })),
                (e.selectors = i.length ? i : (i = null)),
                i && e.joinSelectors(r, n, i)),
              i || (e.rules = null),
              (e.paths = r));
        }),
        (e.prototype.visitRulesetOut = function (e) {
          this.contexts.length = this.contexts.length - 1;
        }),
        (e.prototype.visitMedia = function (e, t) {
          var i = this.contexts[this.contexts.length - 1];
          e.rules[0].root = 0 === i.length || i[0].multiMedia;
        }),
        (e.prototype.visitAtRule = function (e, t) {
          var i = this.contexts[this.contexts.length - 1];
          e.rules &&
            e.rules.length &&
            (e.rules[0].root = e.isRooted || 0 === i.length || null);
        }),
        e
      );
    })(),
    Z = (function () {
      function e(e) {
        (this._visitor = new N(this)), (this._context = e);
      }
      return (
        (e.prototype.containsSilentNonBlockedChild = function (e) {
          var t;
          if (!e) return !1;
          for (var i = 0; i < e.length; i++)
            if (
              (t = e[i]).isSilent &&
              t.isSilent(this._context) &&
              !t.blocksVisibility()
            )
              return !0;
          return !1;
        }),
        (e.prototype.keepOnlyVisibleChilds = function (e) {
          e &&
            e.rules &&
            (e.rules = e.rules.filter(function (e) {
              return e.isVisible();
            }));
        }),
        (e.prototype.isEmpty = function (e) {
          return !e || !e.rules || 0 === e.rules.length;
        }),
        (e.prototype.hasVisibleSelector = function (e) {
          return !(!e || !e.paths) && e.paths.length > 0;
        }),
        (e.prototype.resolveVisibility = function (e) {
          if (!e.blocksVisibility()) {
            if (this.isEmpty(e)) return;
            return e;
          }
          var t = e.rules[0];
          if ((this.keepOnlyVisibleChilds(t), !this.isEmpty(t)))
            return e.ensureVisibility(), e.removeVisibilityBlock(), e;
        }),
        (e.prototype.isVisibleRuleset = function (e) {
          return (
            !!e.firstRoot ||
            (!this.isEmpty(e) && !(!e.root && !this.hasVisibleSelector(e)))
          );
        }),
        e
      );
    })(),
    X = function (e) {
      (this._visitor = new N(this)),
        (this._context = e),
        (this.utils = new Z(e));
    };
  X.prototype = {
    isReplacing: !0,
    run: function (e) {
      return this._visitor.visit(e);
    },
    visitDeclaration: function (e, t) {
      if (!e.blocksVisibility() && !e.variable) return e;
    },
    visitMixinDefinition: function (e, t) {
      e.frames = [];
    },
    visitExtend: function (e, t) {},
    visitComment: function (e, t) {
      if (!e.blocksVisibility() && !e.isSilent(this._context)) return e;
    },
    visitMedia: function (e, t) {
      var i = e.rules[0].rules;
      return (
        e.accept(this._visitor),
        (t.visitDeeper = !1),
        this.utils.resolveVisibility(e, i)
      );
    },
    visitImport: function (e, t) {
      if (!e.blocksVisibility()) return e;
    },
    visitAtRule: function (e, t) {
      return e.rules && e.rules.length
        ? this.visitAtRuleWithBody(e, t)
        : this.visitAtRuleWithoutBody(e, t);
    },
    visitAnonymous: function (e, t) {
      if (!e.blocksVisibility()) return e.accept(this._visitor), e;
    },
    visitAtRuleWithBody: function (e, t) {
      var i = (function (e) {
        var t = e.rules;
        return (function (e) {
          var t = e.rules;
          return 1 === t.length && (!t[0].paths || 0 === t[0].paths.length);
        })(e)
          ? t[0].rules
          : t;
      })(e);
      return (
        e.accept(this._visitor),
        (t.visitDeeper = !1),
        this.utils.isEmpty(e) || this._mergeRules(e.rules[0].rules),
        this.utils.resolveVisibility(e, i)
      );
    },
    visitAtRuleWithoutBody: function (e, t) {
      if (!e.blocksVisibility()) {
        if ("@charset" === e.name) {
          if (this.charset) {
            if (e.debugInfo) {
              var i = new He.Comment(
                "/* " + e.toCSS(this._context).replace(/\n/g, "") + " */\n"
              );
              return (i.debugInfo = e.debugInfo), this._visitor.visit(i);
            }
            return;
          }
          this.charset = !0;
        }
        return e;
      }
    },
    checkValidNodes: function (e, t) {
      if (e)
        for (var i = 0; i < e.length; i++) {
          var n = e[i];
          if (t && n instanceof He.Declaration && !n.variable)
            throw {
              message:
                "Properties must be inside selector blocks. They cannot be in the root",
              index: n.getIndex(),
              filename: n.fileInfo() && n.fileInfo().filename
            };
          if (n instanceof He.Call)
            throw {
              message: "Function '" + n.name + "' did not return a root node",
              index: n.getIndex(),
              filename: n.fileInfo() && n.fileInfo().filename
            };
          if (n.type && !n.allowRoot)
            throw {
              message:
                n.type + " node returned by a function is not valid here",
              index: n.getIndex(),
              filename: n.fileInfo() && n.fileInfo().filename
            };
        }
    },
    visitRuleset: function (e, t) {
      var i,
        n = [];
      if ((this.checkValidNodes(e.rules, e.firstRoot), e.root))
        e.accept(this._visitor), (t.visitDeeper = !1);
      else {
        this._compileRulesetPaths(e);
        for (var r = e.rules, s = r ? r.length : 0, o = 0; o < s; )
          (i = r[o]) && i.rules
            ? (n.push(this._visitor.visit(i)), r.splice(o, 1), s--)
            : o++;
        s > 0 ? e.accept(this._visitor) : (e.rules = null),
          (t.visitDeeper = !1);
      }
      return (
        e.rules &&
          (this._mergeRules(e.rules), this._removeDuplicateRules(e.rules)),
        this.utils.isVisibleRuleset(e) &&
          (e.ensureVisibility(), n.splice(0, 0, e)),
        1 === n.length ? n[0] : n
      );
    },
    _compileRulesetPaths: function (e) {
      e.paths &&
        (e.paths = e.paths.filter(function (e) {
          var t;
          for (
            " " === e[0].elements[0].combinator.value &&
              (e[0].elements[0].combinator = new He.Combinator("")),
              t = 0;
            t < e.length;
            t++
          )
            if (e[t].isVisible() && e[t].getIsOutput()) return !0;
          return !1;
        }));
    },
    _removeDuplicateRules: function (e) {
      if (e) {
        var t,
          i,
          n,
          r = {};
        for (n = e.length - 1; n >= 0; n--)
          if ((i = e[n]) instanceof He.Declaration)
            if (r[i.name]) {
              (t = r[i.name]) instanceof He.Declaration &&
                (t = r[i.name] = [r[i.name].toCSS(this._context)]);
              var s = i.toCSS(this._context);
              -1 !== t.indexOf(s) ? e.splice(n, 1) : t.push(s);
            } else r[i.name] = i;
      }
    },
    _mergeRules: function (e) {
      if (e) {
        for (var t = {}, i = [], n = 0; n < e.length; n++) {
          var r = e[n];
          if (r.merge) {
            var s = r.name;
            t[s] ? e.splice(n--, 1) : i.push((t[s] = [])), t[s].push(r);
          }
        }
        i.forEach(function (e) {
          if (e.length > 0) {
            var t = e[0],
              i = [],
              n = [new He.Expression(i)];
            e.forEach(function (e) {
              "+" === e.merge &&
                i.length > 0 &&
                n.push(new He.Expression((i = []))),
                i.push(e.value),
                (t.important = t.important || e.important);
            }),
              (t.value = new He.Value(n));
          }
        });
      }
    }
  };
  var Y = {
    Visitor: N,
    ImportVisitor: W,
    MarkVisibleSelectorsVisitor: J,
    ExtendVisitor: Q,
    JoinSelectorVisitor: K,
    ToCSSVisitor: X
  };
  var ee = function () {
    var e,
      t,
      i,
      n,
      r,
      s,
      o,
      a = [],
      l = {};
    function u(i) {
      for (
        var n,
          a,
          c,
          h = l.i,
          f = t,
          p = l.i - o,
          v = l.i + s.length - p,
          d = (l.i += i),
          m = e;
        l.i < v;
        l.i++
      ) {
        if (((n = m.charCodeAt(l.i)), l.autoCommentAbsorb && 47 === n)) {
          if ("/" === (a = m.charAt(l.i + 1))) {
            c = { index: l.i, isLineComment: !0 };
            var g = m.indexOf("\n", l.i + 2);
            g < 0 && (g = v),
              (l.i = g),
              (c.text = m.substr(c.index, l.i - c.index)),
              l.commentStore.push(c);
            continue;
          }
          if ("*" === a) {
            var y = m.indexOf("*/", l.i + 2);
            if (y >= 0) {
              (c = {
                index: l.i,
                text: m.substr(l.i, y + 2 - l.i),
                isLineComment: !1
              }),
                (l.i += c.text.length - 1),
                l.commentStore.push(c);
              continue;
            }
          }
          break;
        }
        if (32 !== n && 10 !== n && 9 !== n && 13 !== n) break;
      }
      if (((s = s.slice(i + l.i - d + p)), (o = l.i), !s.length)) {
        if (t < r.length - 1) return (s = r[++t]), u(0), !0;
        l.finished = !0;
      }
      return h !== l.i || f !== t;
    }
    return (
      (l.save = function () {
        (o = l.i), a.push({ current: s, i: l.i, j: t });
      }),
      (l.restore = function (e) {
        (l.i > i || (l.i === i && e && !n)) && ((i = l.i), (n = e));
        var r = a.pop();
        (s = r.current), (o = l.i = r.i), (t = r.j);
      }),
      (l.forget = function () {
        a.pop();
      }),
      (l.isWhitespace = function (t) {
        var i = l.i + (t || 0),
          n = e.charCodeAt(i);
        return 32 === n || 13 === n || 9 === n || 10 === n;
      }),
      (l.$re = function (e) {
        l.i > o && ((s = s.slice(l.i - o)), (o = l.i));
        var t = e.exec(s);
        return t
          ? (u(t[0].length),
            "string" == typeof t ? t : 1 === t.length ? t[0] : t)
          : null;
      }),
      (l.$char = function (t) {
        return e.charAt(l.i) !== t ? null : (u(1), t);
      }),
      (l.$peekChar = function (t) {
        return e.charAt(l.i) !== t ? null : t;
      }),
      (l.$str = function (t) {
        for (var i = t.length, n = 0; n < i; n++)
          if (e.charAt(l.i + n) !== t.charAt(n)) return null;
        return u(i), t;
      }),
      (l.$quoted = function (t) {
        var i = t || l.i,
          n = e.charAt(i);
        if ("'" === n || '"' === n) {
          for (var r = e.length, s = i, o = 1; o + s < r; o++) {
            switch (e.charAt(o + s)) {
              case "\\":
                o++;
                continue;
              case "\r":
              case "\n":
                break;
              case n:
                var a = e.substr(s, o + 1);
                return t || 0 === t ? [n, a] : (u(o + 1), a);
            }
          }
          return null;
        }
      }),
      (l.$parseUntil = function (t) {
        var i,
          n = "",
          r = null,
          s = !1,
          o = 0,
          a = [],
          c = [],
          h = e.length,
          f = l.i,
          p = l.i,
          v = l.i,
          d = !0;
        i =
          "string" == typeof t
            ? function (e) {
                return e === t;
              }
            : function (e) {
                return t.test(e);
              };
        do {
          var m = e.charAt(v);
          if (0 === o && i(m))
            (r = e.substr(p, v - p)) ? c.push(r) : c.push(" "),
              (r = c),
              u(v - f),
              (d = !1);
          else {
            if (s) {
              "*" === m && "/" === e.charAt(v + 1) && (v++, o--, (s = !1)), v++;
              continue;
            }
            switch (m) {
              case "\\":
                v++,
                  (m = e.charAt(v)),
                  c.push(e.substr(p, v - p + 1)),
                  (p = v + 1);
                break;
              case "/":
                "*" === e.charAt(v + 1) && (v++, (s = !0), o++);
                break;
              case "'":
              case '"':
                (n = l.$quoted(v))
                  ? (c.push(e.substr(p, v - p), n),
                    (p = (v += n[1].length - 1) + 1))
                  : (u(v - f), (r = m), (d = !1));
                break;
              case "{":
                a.push("}"), o++;
                break;
              case "(":
                a.push(")"), o++;
                break;
              case "[":
                a.push("]"), o++;
                break;
              case "}":
              case ")":
              case "]":
                var g = a.pop();
                m === g ? o-- : (u(v - f), (r = g), (d = !1));
            }
            ++v > h && (d = !1);
          }
        } while (d);
        return r || null;
      }),
      (l.autoCommentAbsorb = !0),
      (l.commentStore = []),
      (l.finished = !1),
      (l.peek = function (t) {
        if ("string" == typeof t) {
          for (var i = 0; i < t.length; i++)
            if (e.charAt(l.i + i) !== t.charAt(i)) return !1;
          return !0;
        }
        return t.test(s);
      }),
      (l.peekChar = function (t) {
        return e.charAt(l.i) === t;
      }),
      (l.currentChar = function () {
        return e.charAt(l.i);
      }),
      (l.prevChar = function () {
        return e.charAt(l.i - 1);
      }),
      (l.getInput = function () {
        return e;
      }),
      (l.peekNotNumeric = function () {
        var t = e.charCodeAt(l.i);
        return t > 57 || t < 43 || 47 === t || 44 === t;
      }),
      (l.start = function (n, a, c) {
        (e = n),
          (l.i = t = o = i = 0),
          (r = a
            ? (function (e, t) {
                var i,
                  n,
                  r,
                  s,
                  o,
                  a,
                  l,
                  u,
                  c,
                  h = e.length,
                  f = 0,
                  p = 0,
                  v = [],
                  d = 0;
                function m(t) {
                  var i = o - d;
                  (i < 512 && !t) ||
                    !i ||
                    (v.push(e.slice(d, o + 1)), (d = o + 1));
                }
                for (o = 0; o < h; o++)
                  if (!(((l = e.charCodeAt(o)) >= 97 && l <= 122) || l < 34))
                    switch (l) {
                      case 40:
                        p++, (n = o);
                        continue;
                      case 41:
                        if (--p < 0) return t("missing opening `(`", o);
                        continue;
                      case 59:
                        p || m();
                        continue;
                      case 123:
                        f++, (i = o);
                        continue;
                      case 125:
                        if (--f < 0) return t("missing opening `{`", o);
                        f || p || m();
                        continue;
                      case 92:
                        if (o < h - 1) {
                          o++;
                          continue;
                        }
                        return t("unescaped `\\`", o);
                      case 34:
                      case 39:
                      case 96:
                        for (c = 0, a = o, o += 1; o < h; o++)
                          if (!((u = e.charCodeAt(o)) > 96)) {
                            if (u == l) {
                              c = 1;
                              break;
                            }
                            if (92 == u) {
                              if (o == h - 1) return t("unescaped `\\`", o);
                              o++;
                            }
                          }
                        if (c) continue;
                        return t(
                          "unmatched `" + String.fromCharCode(l) + "`",
                          a
                        );
                      case 47:
                        if (p || o == h - 1) continue;
                        if (47 == (u = e.charCodeAt(o + 1)))
                          for (
                            o += 2;
                            o < h &&
                            (!((u = e.charCodeAt(o)) <= 13) ||
                              (10 != u && 13 != u));
                            o++
                          );
                        else if (42 == u) {
                          for (
                            r = a = o, o += 2;
                            o < h - 1 &&
                            (125 == (u = e.charCodeAt(o)) && (s = o),
                            42 != u || 47 != e.charCodeAt(o + 1));
                            o++
                          );
                          if (o == h - 1) return t("missing closing `*/`", a);
                          o++;
                        }
                        continue;
                      case 42:
                        if (o < h - 1 && 47 == e.charCodeAt(o + 1))
                          return t("unmatched `/*`", o);
                        continue;
                    }
                return 0 !== f
                  ? t(
                      r > i && s > r
                        ? "missing closing `}` or `*/`"
                        : "missing closing `}`",
                      i
                    )
                  : 0 !== p
                  ? t("missing closing `)`", n)
                  : (m(!0), v);
              })(n, c)
            : [n]),
          (s = r[0]),
          u(0);
      }),
      (l.end = function () {
        var t,
          r = l.i >= e.length;
        return (
          l.i < i && ((t = n), (l.i = i)),
          {
            isFinished: r,
            furthest: l.i,
            furthestPossibleErrorMessage: t,
            furthestReachedEnd: l.i >= e.length - 1,
            furthestChar: e[l.i]
          }
        );
      }),
      l
    );
  };
  var te = (function e(t) {
      return {
        _data: {},
        add: function (e, t) {
          (e = e.toLowerCase()),
            this._data.hasOwnProperty(e),
            (this._data[e] = t);
        },
        addMultiple: function (e) {
          var t = this;
          Object.keys(e).forEach(function (i) {
            t.add(i, e[i]);
          });
        },
        get: function (e) {
          return this._data[e] || (t && t.get(e));
        },
        getLocalFunctions: function () {
          return this._data;
        },
        inherit: function () {
          return e(this);
        },
        create: function (t) {
          return e(t);
        }
      };
    })(null),
    ie = { queryInParens: !0 },
    ne = { queryInParens: !0 },
    re = function e(t, i, n, r) {
      var s;
      r = r || 0;
      var o = ee();
      function a(e, t) {
        throw new V(
          { index: o.i, filename: n.filename, type: t || "Syntax", message: e },
          i
        );
      }
      function l(e, t) {
        var i = e instanceof Function ? e.call(s) : o.$re(e);
        if (i) return i;
        a(
          t ||
            ("string" == typeof e
              ? "expected '" + e + "' got '" + o.currentChar() + "'"
              : "unexpected token")
        );
      }
      function u(e, t) {
        if (o.$char(e)) return e;
        a(t || "expected '" + e + "' got '" + o.currentChar() + "'");
      }
      function c(e) {
        var t = n.filename;
        return { lineNumber: C(e, o.getInput()).line + 1, fileName: t };
      }
      return {
        parserInput: o,
        imports: i,
        fileInfo: n,
        parseNode: function (e, t, a) {
          var l,
            u = [],
            c = o;
          try {
            c.start(e, !1, function (e, t) {
              a({ message: e, index: t + r });
            });
            for (var h = 0, f = void 0; (f = t[h]); h++)
              (l = s[f]()), u.push(l || null);
            c.end().isFinished ? a(null, u) : a(!0, null);
          } catch (e) {
            throw new V(
              { index: e.index + r, message: e.message },
              i,
              n.filename
            );
          }
        },
        parse: function (r, l, u) {
          var c,
            h,
            f,
            p,
            v = null,
            d = "";
          if (
            (u &&
              u.disablePluginRule &&
              (s.plugin = function () {
                o.$re(/^@plugin?\s+/) &&
                  a(
                    "@plugin statements are not allowed when disablePluginRule is set to true"
                  );
              }),
            (h = u && u.globalVars ? e.serializeVars(u.globalVars) + "\n" : ""),
            (f = u && u.modifyVars ? "\n" + e.serializeVars(u.modifyVars) : ""),
            t.pluginManager)
          )
            for (
              var m = t.pluginManager.getPreProcessors(), g = 0;
              g < m.length;
              g++
            )
              r = m[g].process(r, { context: t, imports: i, fileInfo: n });
          (h || (u && u.banner)) &&
            ((d = (u && u.banner ? u.banner : "") + h),
            ((p = i.contentsIgnoredChars)[n.filename] = p[n.filename] || 0),
            (p[n.filename] += d.length)),
            (r =
              d + (r = r.replace(/\r\n?/g, "\n")).replace(/^\uFEFF/, "") + f),
            (i.contents[n.filename] = r);
          try {
            o.start(r, t.chunkInput, function (e, t) {
              throw new V(
                { index: t, type: "Parse", message: e, filename: n.filename },
                i
              );
            }),
              (He.Node.prototype.parse = this),
              (c = new He.Ruleset(null, this.parsers.primary())),
              (He.Node.prototype.rootNode = c),
              (c.root = !0),
              (c.firstRoot = !0),
              (c.functionRegistry = te.inherit());
          } catch (e) {
            return l(new V(e, i, n.filename));
          }
          var y = o.end();
          if (!y.isFinished) {
            var b = y.furthestPossibleErrorMessage;
            b ||
              ((b = "Unrecognised input"),
              "}" === y.furthestChar
                ? (b += ". Possibly missing opening '{'")
                : ")" === y.furthestChar
                ? (b += ". Possibly missing opening '('")
                : y.furthestReachedEnd &&
                  (b += ". Possibly missing something")),
              (v = new V(
                {
                  type: "Parse",
                  message: b,
                  index: y.furthest,
                  filename: n.filename
                },
                i
              ));
          }
          var w = function (e) {
            return (e = v || e || i.error)
              ? (e instanceof V || (e = new V(e, i, n.filename)), l(e))
              : l(null, c);
          };
          if (!1 === t.processImports) return w();
          new Y.ImportVisitor(i, w).run(c);
        },
        parsers: (s = {
          primary: function () {
            for (var e, t = this.mixin, i = []; ; ) {
              for (; (e = this.comment()); ) i.push(e);
              if (o.finished) break;
              if (o.peek("}")) break;
              if ((e = this.extendRule())) i = i.concat(e);
              else if (
                (e =
                  t.definition() ||
                  this.declaration() ||
                  t.call(!1, !1) ||
                  this.ruleset() ||
                  this.variableCall() ||
                  this.entities.call() ||
                  this.atrule())
              )
                i.push(e);
              else {
                for (var n = !1; o.$char(";"); ) n = !0;
                if (!n) break;
              }
            }
            return i;
          },
          comment: function () {
            if (o.commentStore.length) {
              var e = o.commentStore.shift();
              return new He.Comment(e.text, e.isLineComment, e.index + r, n);
            }
          },
          entities: {
            mixinLookup: function () {
              return s.mixin.call(!0, !0);
            },
            quoted: function (e) {
              var t,
                i = o.i,
                s = !1;
              if ((o.save(), o.$char("~"))) s = !0;
              else if (e) return void o.restore();
              if ((t = o.$quoted()))
                return (
                  o.forget(),
                  new He.Quoted(
                    t.charAt(0),
                    t.substr(1, t.length - 2),
                    s,
                    i + r,
                    n
                  )
                );
              o.restore();
            },
            keyword: function () {
              var e =
                o.$char("%") ||
                o.$re(
                  /^\[?(?:[\w-]|\\(?:[A-Fa-f0-9]{1,6} ?|[^A-Fa-f0-9]))+\]?/
                );
              if (e) return He.Color.fromKeyword(e) || new He.Keyword(e);
            },
            call: function () {
              var e,
                t,
                i,
                s = o.i;
              if (!o.peek(/^url\(/i))
                if ((o.save(), (e = o.$re(/^([\w-]+|%|~|progid:[\w.]+)\(/)))) {
                  if (
                    ((e = e[1]),
                    (i = this.customFuncCall(e)) && (t = i.parse()) && i.stop)
                  )
                    return o.forget(), t;
                  if (((t = this.arguments(t)), o.$char(")")))
                    return o.forget(), new He.Call(e, t, s + r, n);
                  o.restore("Could not parse call arguments or missing ')'");
                } else o.forget();
            },
            customFuncCall: function (e) {
              return { alpha: t(s.ieAlpha, !0), boolean: t(i), if: t(i) }[
                e.toLowerCase()
              ];
              function t(e, t) {
                return { parse: e, stop: t };
              }
              function i() {
                return [l(s.condition, "expected condition")];
              }
            },
            arguments: function (e) {
              var t,
                i,
                n = e || [],
                r = [];
              for (o.save(); ; ) {
                if (e) e = !1;
                else {
                  if (
                    !(i =
                      s.detachedRuleset() ||
                      this.assignment() ||
                      s.expression())
                  )
                    break;
                  i.value && 1 == i.value.length && (i = i.value[0]), n.push(i);
                }
                o.$char(",") ||
                  ((o.$char(";") || t) &&
                    ((t = !0),
                    (i = n.length < 1 ? n[0] : new He.Value(n)),
                    r.push(i),
                    (n = [])));
              }
              return o.forget(), t ? r : n;
            },
            literal: function () {
              return (
                this.dimension() ||
                this.color() ||
                this.quoted() ||
                this.unicodeDescriptor()
              );
            },
            assignment: function () {
              var e, t;
              if ((o.save(), (e = o.$re(/^\w+(?=\s?=)/i))))
                if (o.$char("=")) {
                  if ((t = s.entity()))
                    return o.forget(), new He.Assignment(e, t);
                  o.restore();
                } else o.restore();
              else o.restore();
            },
            url: function () {
              var e,
                t = o.i;
              if (((o.autoCommentAbsorb = !1), o.$str("url(")))
                return (
                  (e =
                    this.quoted() ||
                    this.variable() ||
                    this.property() ||
                    o.$re(/^(?:(?:\\[()'"])|[^()'"])+/) ||
                    ""),
                  (o.autoCommentAbsorb = !0),
                  u(")"),
                  new He.URL(
                    void 0 !== e.value ||
                    e instanceof He.Variable ||
                    e instanceof He.Property
                      ? e
                      : new He.Anonymous(e, t),
                    t + r,
                    n
                  )
                );
              o.autoCommentAbsorb = !0;
            },
            variable: function () {
              var e,
                t,
                i = o.i;
              if (
                (o.save(), "@" === o.currentChar() && (t = o.$re(/^@@?[\w-]+/)))
              ) {
                if (
                  "(" === (e = o.currentChar()) ||
                  ("[" === e && !o.prevChar().match(/^\s/))
                ) {
                  var a = s.variableCall(t);
                  if (a) return o.forget(), a;
                }
                return o.forget(), new He.Variable(t, i + r, n);
              }
              o.restore();
            },
            variableCurly: function () {
              var e,
                t = o.i;
              if ("@" === o.currentChar() && (e = o.$re(/^@\{([\w-]+)\}/)))
                return new He.Variable("@" + e[1], t + r, n);
            },
            property: function () {
              var e,
                t = o.i;
              if ("$" === o.currentChar() && (e = o.$re(/^\$[\w-]+/)))
                return new He.Property(e, t + r, n);
            },
            propertyCurly: function () {
              var e,
                t = o.i;
              if ("$" === o.currentChar() && (e = o.$re(/^\$\{([\w-]+)\}/)))
                return new He.Property("$" + e[1], t + r, n);
            },
            color: function () {
              var e;
              if (
                (o.save(),
                "#" === o.currentChar() &&
                  (e = o.$re(
                    /^#([A-Fa-f0-9]{8}|[A-Fa-f0-9]{6}|[A-Fa-f0-9]{3,4})([\w.#[])?/
                  )) &&
                  !e[2])
              )
                return o.forget(), new He.Color(e[1], void 0, e[0]);
              o.restore();
            },
            colorKeyword: function () {
              o.save();
              var e = o.autoCommentAbsorb;
              o.autoCommentAbsorb = !1;
              var t = o.$re(/^[_A-Za-z-][_A-Za-z0-9-]+/);
              if (((o.autoCommentAbsorb = e), t)) {
                o.restore();
                var i = He.Color.fromKeyword(t);
                return i ? (o.$str(t), i) : void 0;
              }
              o.forget();
            },
            dimension: function () {
              if (!o.peekNotNumeric()) {
                var e = o.$re(/^([+-]?\d*\.?\d+)(%|[a-z_]+)?/i);
                return e ? new He.Dimension(e[1], e[2]) : void 0;
              }
            },
            unicodeDescriptor: function () {
              var e;
              if ((e = o.$re(/^U\+[0-9a-fA-F?]+(-[0-9a-fA-F?]+)?/)))
                return new He.UnicodeDescriptor(e[0]);
            },
            javascript: function () {
              var e,
                t = o.i;
              o.save();
              var i = o.$char("~");
              if (o.$char("`")) {
                if ((e = o.$re(/^[^`]*`/)))
                  return (
                    o.forget(),
                    new He.JavaScript(
                      e.substr(0, e.length - 1),
                      Boolean(i),
                      t + r,
                      n
                    )
                  );
                o.restore("invalid javascript definition");
              } else o.restore();
            }
          },
          variable: function () {
            var e;
            if ("@" === o.currentChar() && (e = o.$re(/^(@[\w-]+)\s*:/)))
              return e[1];
          },
          variableCall: function (e) {
            var t,
              i = o.i,
              r = !!e,
              a = e;
            if (
              (o.save(),
              a ||
                ("@" === o.currentChar() &&
                  (a = o.$re(/^(@[\w-]+)(\(\s*\))?/))))
            ) {
              if (
                !(t = this.mixin.ruleLookups()) &&
                ((r && "()" !== o.$str("()")) || "()" !== a[2])
              )
                return void o.restore(
                  "Missing '[...]' lookup in variable call"
                );
              r || (a = a[1]);
              var l = new He.VariableCall(a, i, n);
              return !r && s.end()
                ? (o.forget(), l)
                : (o.forget(), new He.NamespaceValue(l, t, i, n));
            }
            o.restore();
          },
          extend: function (e) {
            var t,
              i,
              s,
              u,
              c,
              h = o.i;
            if (o.$str(e ? "&:extend(" : ":extend(")) {
              do {
                for (
                  s = null, t = null;
                  !(s = o.$re(/^(all)(?=\s*(\)|,))/)) && (i = this.element());

                )
                  t ? t.push(i) : (t = [i]);
                (s = s && s[1]),
                  t || a("Missing target selector for :extend()."),
                  (c = new He.Extend(new He.Selector(t), s, h + r, n)),
                  u ? u.push(c) : (u = [c]);
              } while (o.$char(","));
              return l(/^\)/), e && l(/^;/), u;
            }
          },
          extendRule: function () {
            return this.extend(!0);
          },
          mixin: {
            call: function (e, t) {
              var i,
                a,
                l,
                c,
                h = o.currentChar(),
                f = !1,
                p = o.i;
              if ("." === h || "#" === h) {
                if ((o.save(), (a = this.elements()))) {
                  if (
                    (o.$char("(") &&
                      ((l = this.args(!0).args), u(")"), (c = !0)),
                    !1 !== t && (i = this.ruleLookups()),
                    !0 === t && !i)
                  )
                    return void o.restore();
                  if (e && !i && !c) return void o.restore();
                  if ((!e && s.important() && (f = !0), e || s.end())) {
                    o.forget();
                    var v = new He.mixin.Call(a, l, p + r, n, !i && f);
                    return i ? new He.NamespaceValue(v, i) : v;
                  }
                }
                o.restore();
              }
            },
            elements: function () {
              for (
                var e,
                  t,
                  i,
                  s,
                  a,
                  l = /^[#.](?:[\w-]|\\(?:[A-Fa-f0-9]{1,6} ?|[^A-Fa-f0-9]))+/;
                (a = o.i), (t = o.$re(l));

              )
                (s = new He.Element(i, t, !1, a + r, n)),
                  e ? e.push(s) : (e = [s]),
                  (i = o.$char(">"));
              return e;
            },
            args: function (e) {
              var t,
                i,
                n,
                r,
                l,
                u,
                c,
                h = s.entities,
                f = { args: null, variadic: !1 },
                p = [],
                v = [],
                d = [],
                m = !0;
              for (o.save(); ; ) {
                if (e) u = s.detachedRuleset() || s.expression();
                else {
                  if (((o.commentStore.length = 0), o.$str("..."))) {
                    (f.variadic = !0),
                      o.$char(";") && !t && (t = !0),
                      (t ? v : d).push({ variadic: !0 });
                    break;
                  }
                  u =
                    h.variable() ||
                    h.property() ||
                    h.literal() ||
                    h.keyword() ||
                    this.call(!0);
                }
                if (!u || !m) break;
                (r = null),
                  u.throwAwayComments && u.throwAwayComments(),
                  (l = u);
                var g = null;
                if (
                  (e
                    ? u.value && 1 == u.value.length && (g = u.value[0])
                    : (g = u),
                  g && (g instanceof He.Variable || g instanceof He.Property))
                )
                  if (o.$char(":")) {
                    if (
                      (p.length > 0 &&
                        (t && a("Cannot mix ; and , as delimiter types"),
                        (i = !0)),
                      !(l = s.detachedRuleset() || s.expression()))
                    ) {
                      if (!e) return o.restore(), (f.args = []), f;
                      a("could not understand value for named argument");
                    }
                    r = n = g.name;
                  } else if (o.$str("...")) {
                    if (!e) {
                      (f.variadic = !0),
                        o.$char(";") && !t && (t = !0),
                        (t ? v : d).push({ name: u.name, variadic: !0 });
                      break;
                    }
                    c = !0;
                  } else e || ((n = r = g.name), (l = null));
                l && p.push(l),
                  d.push({ name: r, value: l, expand: c }),
                  o.$char(",")
                    ? (m = !0)
                    : ((m = ";" === o.$char(";")) || t) &&
                      (i && a("Cannot mix ; and , as delimiter types"),
                      (t = !0),
                      p.length > 1 && (l = new He.Value(p)),
                      v.push({ name: n, value: l, expand: c }),
                      (n = null),
                      (p = []),
                      (i = !1));
              }
              return o.forget(), (f.args = t ? v : d), f;
            },
            definition: function () {
              var e,
                t,
                i,
                n,
                r = [],
                a = !1;
              if (
                !(
                  ("." !== o.currentChar() && "#" !== o.currentChar()) ||
                  o.peek(/^[^{]*\}/)
                )
              )
                if (
                  (o.save(),
                  (t = o.$re(
                    /^([#.](?:[\w-]|\\(?:[A-Fa-f0-9]{1,6} ?|[^A-Fa-f0-9]))+)\s*\(/
                  )))
                ) {
                  e = t[1];
                  var u = this.args(!1);
                  if (((r = u.args), (a = u.variadic), !o.$char(")")))
                    return void o.restore("Missing closing ')'");
                  if (
                    ((o.commentStore.length = 0),
                    o.$str("when") &&
                      (n = l(s.conditions, "expected condition")),
                    (i = s.block()))
                  )
                    return o.forget(), new He.mixin.Definition(e, r, i, n, a);
                  o.restore();
                } else o.restore();
            },
            ruleLookups: function () {
              var e,
                t = [];
              if ("[" === o.currentChar()) {
                for (;;) {
                  if ((o.save(), !(e = this.lookupValue()) && "" !== e)) {
                    o.restore();
                    break;
                  }
                  t.push(e), o.forget();
                }
                return t.length > 0 ? t : void 0;
              }
            },
            lookupValue: function () {
              if ((o.save(), o.$char("["))) {
                var e = o.$re(/^(?:[@$]{0,2})[_a-zA-Z0-9-]*/);
                if (o.$char("]"))
                  return e || "" === e ? (o.forget(), e) : void o.restore();
                o.restore();
              } else o.restore();
            }
          },
          entity: function () {
            var e = this.entities;
            return (
              this.comment() ||
              e.literal() ||
              e.variable() ||
              e.url() ||
              e.property() ||
              e.call() ||
              e.keyword() ||
              this.mixin.call(!0) ||
              e.javascript()
            );
          },
          end: function () {
            return o.$char(";") || o.peek("}");
          },
          ieAlpha: function () {
            var e;
            if (o.$re(/^opacity=/i))
              return (
                (e = o.$re(/^\d+/)) ||
                  (e =
                    "@{" +
                    (e = l(
                      s.entities.variable,
                      "Could not parse alpha"
                    )).name.slice(1) +
                    "}"),
                u(")"),
                new He.Quoted("", "alpha(opacity=" + e + ")")
              );
          },
          element: function () {
            var e,
              t,
              i,
              s = o.i;
            if (
              ((t = this.combinator()),
              (e =
                o.$re(/^(?:\d+\.\d+|\d+)%/) ||
                o.$re(
                  /^(?:[.#]?|:*)(?:[\w-]|[^\x00-\x9f]|\\(?:[A-Fa-f0-9]{1,6} ?|[^A-Fa-f0-9]))+/
                ) ||
                o.$char("*") ||
                o.$char("&") ||
                this.attribute() ||
                o.$re(/^\([^&()@]+\)/) ||
                o.$re(/^[.#:](?=@)/) ||
                this.entities.variableCurly()) ||
                (o.save(),
                o.$char("(")
                  ? (i = this.selector(!1)) && o.$char(")")
                    ? ((e = new He.Paren(i)), o.forget())
                    : o.restore("Missing closing ')'")
                  : o.forget()),
              e)
            )
              return new He.Element(t, e, e instanceof He.Variable, s + r, n);
          },
          combinator: function () {
            var e = o.currentChar();
            if ("/" === e) {
              o.save();
              var t = o.$re(/^\/[a-z]+\//i);
              if (t) return o.forget(), new He.Combinator(t);
              o.restore();
            }
            if (">" === e || "+" === e || "~" === e || "|" === e || "^" === e) {
              for (
                o.i++,
                  "^" === e && "^" === o.currentChar() && ((e = "^^"), o.i++);
                o.isWhitespace();

              )
                o.i++;
              return new He.Combinator(e);
            }
            return o.isWhitespace(-1)
              ? new He.Combinator(" ")
              : new He.Combinator(null);
          },
          selector: function (e) {
            var t,
              i,
              s,
              u,
              c,
              h,
              f,
              p = o.i;
            for (
              e = !1 !== e;
              ((e && (i = this.extend())) ||
                (e && (h = o.$str("when"))) ||
                (u = this.element())) &&
              (h
                ? (f = l(this.conditions, "expected condition"))
                : f
                ? a("CSS guard can only be used at the end of selector")
                : i
                ? (c = c ? c.concat(i) : i)
                : (c && a("Extend can only be used at the end of selector"),
                  (s = o.currentChar()),
                  t ? t.push(u) : (t = [u]),
                  (u = null)),
              "{" !== s && "}" !== s && ";" !== s && "," !== s && ")" !== s);

            );
            if (t) return new He.Selector(t, c, f, p + r, n);
            c &&
              a(
                "Extend must be used to extend a selector, it cannot be used on its own"
              );
          },
          selectors: function () {
            for (
              var e, t;
              (e = this.selector()) &&
              (t ? t.push(e) : (t = [e]),
              (o.commentStore.length = 0),
              e.condition &&
                t.length > 1 &&
                a("Guards are only currently allowed on a single selector."),
              o.$char(","));

            )
              e.condition &&
                a("Guards are only currently allowed on a single selector."),
                (o.commentStore.length = 0);
            return t;
          },
          attribute: function () {
            if (o.$char("[")) {
              var e,
                t,
                i,
                n,
                r = this.entities;
              return (
                (e = r.variableCurly()) ||
                  (e = l(/^(?:[_A-Za-z0-9-*]*\|)?(?:[_A-Za-z0-9-]|\\.)+/)),
                (i = o.$re(/^[|~*$^]?=/)) &&
                  (t =
                    r.quoted() ||
                    o.$re(/^[0-9]+%/) ||
                    o.$re(/^[\w-]+/) ||
                    r.variableCurly()) &&
                  (n = o.$re(/^[iIsS]/)),
                u("]"),
                new He.Attribute(e, i, t, n)
              );
            }
          },
          block: function () {
            var e;
            if (o.$char("{") && (e = this.primary()) && o.$char("}")) return e;
          },
          blockRuleset: function () {
            var e = this.block();
            return e && (e = new He.Ruleset(null, e)), e;
          },
          detachedRuleset: function () {
            var e, t, i;
            if (
              (o.save(),
              !o.$re(/^[.#]\(/) ||
                ((t = (e = this.mixin.args(!1)).args),
                (i = e.variadic),
                o.$char(")")))
            ) {
              var n = this.blockRuleset();
              if (n)
                return (
                  o.forget(),
                  t
                    ? new He.mixin.Definition(null, t, n, null, i)
                    : new He.DetachedRuleset(n)
                );
              o.restore();
            } else o.restore();
          },
          ruleset: function () {
            var e, i, n;
            if (
              (o.save(),
              t.dumpLineNumbers && (n = c(o.i)),
              (e = this.selectors()) && (i = this.block()))
            ) {
              o.forget();
              var r = new He.Ruleset(e, i, t.strictImports);
              return t.dumpLineNumbers && (r.debugInfo = n), r;
            }
            o.restore();
          },
          declaration: function () {
            var e,
              t,
              i,
              s,
              a,
              l,
              u = o.i,
              c = o.currentChar();
            if ("." !== c && "#" !== c && "&" !== c && ":" !== c)
              if ((o.save(), (e = this.variable() || this.ruleProperty()))) {
                if (
                  ((l = "string" == typeof e) &&
                    (t = this.detachedRuleset()) &&
                    (i = !0),
                  (o.commentStore.length = 0),
                  !t)
                ) {
                  if (
                    ((a = !l && e.length > 1 && e.pop().value),
                    (t =
                      e[0].value && "--" === e[0].value.slice(0, 2)
                        ? this.permissiveValue(/[;}]/)
                        : this.anonymousValue()))
                  )
                    return (
                      o.forget(), new He.Declaration(e, t, !1, a, u + r, n)
                    );
                  t || (t = this.value()),
                    t
                      ? (s = this.important())
                      : l && (t = this.permissiveValue());
                }
                if (t && (this.end() || i))
                  return o.forget(), new He.Declaration(e, t, s, a, u + r, n);
                o.restore();
              } else o.restore();
          },
          anonymousValue: function () {
            var e = o.i,
              t = o.$re(/^([^.#@$+/'"*`(;{}-]*);/);
            if (t) return new He.Anonymous(t[1], e + r);
          },
          permissiveValue: function (e) {
            var t,
              i,
              r,
              s,
              l = e || ";",
              u = o.i,
              c = [];
            function h() {
              var e = o.currentChar();
              return "string" == typeof l ? e === l : l.test(e);
            }
            if (!h()) {
              s = [];
              do {
                ((i = this.comment()) || (i = this.entity())) && s.push(i);
              } while (i);
              if (((r = h()), s.length > 0)) {
                if (((s = new He.Expression(s)), r)) return s;
                c.push(s),
                  " " === o.prevChar() && c.push(new He.Anonymous(" ", u));
              }
              if ((o.save(), (s = o.$parseUntil(l)))) {
                if (
                  ("string" == typeof s && a("Expected '" + s + "'", "Parse"),
                  1 === s.length && " " === s[0])
                )
                  return o.forget(), new He.Anonymous("", u);
                var f = void 0;
                for (t = 0; t < s.length; t++)
                  if (((f = s[t]), Array.isArray(f)))
                    c.push(new He.Quoted(f[0], f[1], !0, u, n));
                  else {
                    t === s.length - 1 && (f = f.trim());
                    var p = new He.Quoted("'", f, !0, u, n);
                    (p.variableRegex = /@([\w-]+)/g),
                      (p.propRegex = /\$([\w-]+)/g),
                      c.push(p);
                  }
                return o.forget(), new He.Expression(c, !0);
              }
              o.restore();
            }
          },
          import: function () {
            var e,
              t,
              i = o.i,
              s = o.$re(/^@import\s+/);
            if (s) {
              var l = (s ? this.importOptions() : null) || {};
              if ((e = this.entities.quoted() || this.entities.url()))
                return (
                  (t = this.mediaFeatures({})),
                  o.$char(";") ||
                    ((o.i = i),
                    a(
                      "missing semi-colon or unrecognised media features on import"
                    )),
                  (t = t && new He.Value(t)),
                  new He.Import(e, t, l, i + r, n)
                );
              (o.i = i), a("malformed import statement");
            }
          },
          importOptions: function () {
            var e,
              t,
              i,
              n = {};
            if (!o.$char("(")) return null;
            do {
              if ((e = this.importOption())) {
                switch (((i = !0), (t = e))) {
                  case "css":
                    (t = "less"), (i = !1);
                    break;
                  case "once":
                    (t = "multiple"), (i = !1);
                }
                if (((n[t] = i), !o.$char(","))) break;
              }
            } while (e);
            return u(")"), n;
          },
          importOption: function () {
            var e = o.$re(
              /^(less|css|multiple|once|inline|reference|optional)/
            );
            if (e) return e[1];
          },
          mediaFeature: function (e) {
            var t,
              i,
              s,
              l = this.entities,
              u = [];
            o.save();
            do {
              (t = l.keyword() || l.variable() || l.mixinLookup())
                ? u.push(t)
                : o.$char("(") &&
                  ((i = this.property()),
                  o.save(),
                  !i &&
                  e.queryInParens &&
                  o.$re(/^[0-9a-z-]*\s*([<>]=|<=|>=|[<>]|=)/)
                    ? (o.restore(),
                      (i = this.condition()),
                      o.save(),
                      (s = this.atomicCondition(null, i.rvalue)) || o.restore())
                    : (o.restore(), (t = this.value())),
                  o.$char(")")
                    ? i && !t
                      ? (u.push(
                          new He.Paren(
                            new He.QueryInParens(
                              i.op,
                              i.lvalue,
                              i.rvalue,
                              s ? s.op : null,
                              s ? s.rvalue : null,
                              i._index
                            )
                          )
                        ),
                        (t = i))
                      : i && t
                      ? u.push(
                          new He.Paren(
                            new He.Declaration(i, t, null, null, o.i + r, n, !0)
                          )
                        )
                      : t
                      ? u.push(new He.Paren(t))
                      : a("badly formed media feature definition")
                    : a("Missing closing ')'", "Parse"));
            } while (t);
            if ((o.forget(), u.length > 0)) return new He.Expression(u);
          },
          mediaFeatures: function (e) {
            var t,
              i = this.entities,
              n = [];
            do {
              if ((t = this.mediaFeature(e))) {
                if ((n.push(t), !o.$char(","))) break;
              } else if (
                (t = i.variable() || i.mixinLookup()) &&
                (n.push(t), !o.$char(","))
              )
                break;
            } while (t);
            return n.length > 0 ? n : null;
          },
          prepareAndGetNestableAtRule: function (e, i, s, l) {
            var u = this.mediaFeatures(l),
              c = this.block();
            c ||
              a(
                "media definitions require block statements after any features"
              ),
              o.forget();
            var h = new e(c, u, i + r, n);
            return t.dumpLineNumbers && (h.debugInfo = s), h;
          },
          nestableAtRule: function () {
            var e,
              i = o.i;
            if ((t.dumpLineNumbers && (e = c(i)), o.save(), o.$peekChar("@"))) {
              if (o.$str("@media"))
                return this.prepareAndGetNestableAtRule(He.Media, i, e, ie);
              if (o.$str("@container"))
                return this.prepareAndGetNestableAtRule(He.Container, i, e, ne);
            }
            o.restore();
          },
          plugin: function () {
            var e,
              t,
              i,
              s = o.i;
            if (o.$re(/^@plugin\s+/)) {
              if (
                ((i = (t = this.pluginArgs())
                  ? { pluginArgs: t, isPlugin: !0 }
                  : { isPlugin: !0 }),
                (e = this.entities.quoted() || this.entities.url()))
              )
                return (
                  o.$char(";") ||
                    ((o.i = s), a("missing semi-colon on @plugin")),
                  new He.Import(e, null, i, s + r, n)
                );
              (o.i = s), a("malformed @plugin statement");
            }
          },
          pluginArgs: function () {
            if ((o.save(), !o.$char("("))) return o.restore(), null;
            var e = o.$re(/^\s*([^);]+)\)\s*/);
            return e[1] ? (o.forget(), e[1].trim()) : (o.restore(), null);
          },
          atrule: function () {
            var e,
              i,
              s,
              l,
              u,
              h,
              f,
              p = o.i,
              v = !0,
              d = !0;
            if ("@" === o.currentChar()) {
              if ((i = this.import() || this.plugin() || this.nestableAtRule()))
                return i;
              if ((o.save(), (e = o.$re(/^@[a-z-]+/)))) {
                switch (
                  ((l = e),
                  "-" == e.charAt(1) &&
                    e.indexOf("-", 2) > 0 &&
                    (l = "@" + e.slice(e.indexOf("-", 2) + 1)),
                  l)
                ) {
                  case "@charset":
                    (u = !0), (v = !1);
                    break;
                  case "@namespace":
                    (h = !0), (v = !1);
                    break;
                  case "@keyframes":
                  case "@counter-style":
                    u = !0;
                    break;
                  case "@document":
                  case "@supports":
                    (f = !0), (d = !1);
                    break;
                  default:
                    f = !0;
                }
                if (
                  ((o.commentStore.length = 0),
                  u
                    ? (i = this.entity()) || a("expected " + e + " identifier")
                    : h
                    ? (i = this.expression()) ||
                      a("expected " + e + " expression")
                    : f &&
                      ((i = this.permissiveValue(/^[{;]/)),
                      (v = "{" === o.currentChar()),
                      i
                        ? i.value || (i = null)
                        : v ||
                          ";" === o.currentChar() ||
                          a(e + " rule is missing block or ending semi-colon")),
                  v && (s = this.blockRuleset()),
                  s || (!v && i && o.$char(";")))
                )
                  return (
                    o.forget(),
                    new He.AtRule(
                      e,
                      i,
                      s,
                      p + r,
                      n,
                      t.dumpLineNumbers ? c(p) : null,
                      d
                    )
                  );
                o.restore("at-rule options not recognised");
              }
            }
          },
          value: function () {
            var e,
              t = [],
              i = o.i;
            do {
              if ((e = this.expression()) && (t.push(e), !o.$char(","))) break;
            } while (e);
            if (t.length > 0) return new He.Value(t, i + r);
          },
          important: function () {
            if ("!" === o.currentChar()) return o.$re(/^! *important/);
          },
          sub: function () {
            var e, t;
            if ((o.save(), o.$char("(")))
              return (e = this.addition()) && o.$char(")")
                ? (o.forget(), ((t = new He.Expression([e])).parens = !0), t)
                : void o.restore("Expected ')'");
            o.restore();
          },
          multiplication: function () {
            var e, t, i, n, r;
            if ((e = this.operand())) {
              for (r = o.isWhitespace(-1); !o.peek(/^\/[*/]/); ) {
                if (
                  (o.save(),
                  !(i = o.$char("/") || o.$char("*") || o.$str("./")))
                ) {
                  o.forget();
                  break;
                }
                if (!(t = this.operand())) {
                  o.restore();
                  break;
                }
                o.forget(),
                  (e.parensInOp = !0),
                  (t.parensInOp = !0),
                  (n = new He.Operation(i, [n || e, t], r)),
                  (r = o.isWhitespace(-1));
              }
              return n || e;
            }
          },
          addition: function () {
            var e, t, i, n, r;
            if ((e = this.multiplication())) {
              for (
                r = o.isWhitespace(-1);
                (i =
                  o.$re(/^[-+]\s+/) ||
                  (!r && (o.$char("+") || o.$char("-")))) &&
                (t = this.multiplication());

              )
                (e.parensInOp = !0),
                  (t.parensInOp = !0),
                  (n = new He.Operation(i, [n || e, t], r)),
                  (r = o.isWhitespace(-1));
              return n || e;
            }
          },
          conditions: function () {
            var e,
              t,
              i,
              n = o.i;
            if ((e = this.condition(!0))) {
              for (
                ;
                o.peek(/^,\s*(not\s*)?\(/) &&
                o.$char(",") &&
                (t = this.condition(!0));

              )
                i = new He.Condition("or", i || e, t, n + r);
              return i || e;
            }
          },
          condition: function (e) {
            var t, i, n;
            if ((t = this.conditionAnd(e))) {
              if ((i = o.$str("or"))) {
                if (!(n = this.condition(e))) return;
                t = new He.Condition(i, t, n);
              }
              return t;
            }
          },
          conditionAnd: function (e) {
            var t,
              i,
              n,
              r,
              s = this;
            if (
              (t =
                (r = s.negatedCondition(e) || s.parenthesisCondition(e)) || e
                  ? r
                  : s.atomicCondition(e))
            ) {
              if ((i = o.$str("and"))) {
                if (!(n = this.conditionAnd(e))) return;
                t = new He.Condition(i, t, n);
              }
              return t;
            }
          },
          negatedCondition: function (e) {
            if (o.$str("not")) {
              var t = this.parenthesisCondition(e);
              return t && (t.negate = !t.negate), t;
            }
          },
          parenthesisCondition: function (e) {
            var t;
            if ((o.save(), o.$str("("))) {
              if (
                (t = (function (t) {
                  var i;
                  if ((o.save(), (i = t.condition(e)))) {
                    if (o.$char(")")) return o.forget(), i;
                    o.restore();
                  } else o.restore();
                })(this))
              )
                return o.forget(), t;
              if ((t = this.atomicCondition(e))) {
                if (o.$char(")")) return o.forget(), t;
                o.restore("expected ')' got '" + o.currentChar() + "'");
              } else o.restore();
            } else o.restore();
          },
          atomicCondition: function (e, t) {
            var i,
              n,
              s,
              l,
              u = this.entities,
              c = o.i,
              h = function () {
                return (
                  this.addition() ||
                  u.keyword() ||
                  u.quoted() ||
                  u.mixinLookup()
                );
              }.bind(this);
            if ((i = t || h()))
              return (
                o.$char(">")
                  ? (l = o.$char("=") ? ">=" : ">")
                  : o.$char("<")
                  ? (l = o.$char("=") ? "<=" : "<")
                  : o.$char("=") &&
                    (l = o.$char(">") ? "=>" : o.$char("<") ? "=<" : "="),
                l
                  ? (n = h())
                    ? (s = new He.Condition(l, i, n, c + r, !1))
                    : a("expected expression")
                  : t ||
                    (s = new He.Condition(
                      "=",
                      i,
                      new He.Keyword("true"),
                      c + r,
                      !1
                    )),
                s
              );
          },
          operand: function () {
            var e,
              t = this.entities;
            o.peek(/^-[@$(]/) && (e = o.$char("-"));
            var i =
              this.sub() ||
              t.dimension() ||
              t.color() ||
              t.variable() ||
              t.property() ||
              t.call() ||
              t.quoted(!0) ||
              t.colorKeyword() ||
              t.mixinLookup();
            return e && ((i.parensInOp = !0), (i = new He.Negative(i))), i;
          },
          expression: function () {
            var e,
              t,
              i = [],
              n = o.i;
            do {
              (e = this.comment())
                ? i.push(e)
                : ((e = this.addition() || this.entity()) instanceof
                    He.Comment && (e = null),
                  e &&
                    (i.push(e),
                    o.peek(/^\/[/*]/) ||
                      ((t = o.$char("/")) &&
                        i.push(new He.Anonymous(t, n + r)))));
            } while (e);
            if (i.length > 0) return new He.Expression(i);
          },
          property: function () {
            var e = o.$re(/^(\*?-?[_a-zA-Z0-9-]+)\s*:/);
            if (e) return e[1];
          },
          ruleProperty: function () {
            var e,
              t,
              i = [],
              s = [];
            o.save();
            var a = o.$re(/^([_a-zA-Z0-9-]+)\s*:/);
            if (a) return (i = [new He.Keyword(a[1])]), o.forget(), i;
            function l(e) {
              var t = o.i,
                n = o.$re(e);
              if (n) return s.push(t), i.push(n[1]);
            }
            for (l(/^(\*?)/); l(/^((?:[\w-]+)|(?:[@$]\{[\w-]+\}))/); );
            if (i.length > 1 && l(/^((?:\+_|\+)?)\s*:/)) {
              for (
                o.forget(), "" === i[0] && (i.shift(), s.shift()), t = 0;
                t < i.length;
                t++
              )
                (e = i[t]),
                  (i[t] =
                    "@" !== e.charAt(0) && "$" !== e.charAt(0)
                      ? new He.Keyword(e)
                      : "@" === e.charAt(0)
                      ? new He.Variable("@" + e.slice(2, -1), s[t] + r, n)
                      : new He.Property("$" + e.slice(2, -1), s[t] + r, n));
              return i;
            }
            o.restore();
          }
        })
      };
    };
  re.serializeVars = function (e) {
    var t = "";
    for (var i in e)
      if (Object.hasOwnProperty.call(e, i)) {
        var n = e[i];
        t +=
          ("@" === i[0] ? "" : "@") +
          i +
          ": " +
          n +
          (";" === String(n).slice(-1) ? "" : ";");
      }
    return t;
  };
  var se = function (e, t, i, n, r, s) {
    (this.extendList = t),
      (this.condition = i),
      (this.evaldCondition = !i),
      (this._index = n),
      (this._fileInfo = r),
      (this.elements = this.getElements(e)),
      (this.mixinElements_ = void 0),
      this.copyVisibilityInfo(s),
      this.setParent(this.elements, this);
  };
  se.prototype = Object.assign(new u(), {
    type: "Selector",
    accept: function (e) {
      this.elements && (this.elements = e.visitArray(this.elements)),
        this.extendList && (this.extendList = e.visitArray(this.extendList)),
        this.condition && (this.condition = e.visit(this.condition));
    },
    createDerived: function (e, t, i) {
      e = this.getElements(e);
      var n = new se(
        e,
        t || this.extendList,
        null,
        this.getIndex(),
        this.fileInfo(),
        this.visibilityInfo()
      );
      return (
        (n.evaldCondition = E(i) ? this.evaldCondition : i),
        (n.mediaEmpty = this.mediaEmpty),
        n
      );
    },
    getElements: function (e) {
      return e
        ? ("string" == typeof e &&
            new re(
              this.parse.context,
              this.parse.importManager,
              this._fileInfo,
              this._index
            ).parseNode(e, ["selector"], function (t, i) {
              if (t)
                throw new V(
                  { index: t.index, message: t.message },
                  this.parse.imports,
                  this._fileInfo.filename
                );
              e = i[0].elements;
            }),
          e)
        : [new m("", "&", !1, this._index, this._fileInfo)];
    },
    createEmptySelectors: function () {
      var e = new m("", "&", !1, this._index, this._fileInfo),
        t = [new se([e], null, null, this._index, this._fileInfo)];
      return (t[0].mediaEmpty = !0), t;
    },
    match: function (e) {
      var t,
        i,
        n = this.elements,
        r = n.length;
      if (0 === (t = (e = e.mixinElements()).length) || r < t) return 0;
      for (i = 0; i < t; i++) if (n[i].value !== e[i]) return 0;
      return t;
    },
    mixinElements: function () {
      if (this.mixinElements_) return this.mixinElements_;
      var e = this.elements
        .map(function (e) {
          return e.combinator.value + (e.value.value || e.value);
        })
        .join("")
        .match(/[,&#*.\w-]([\w-]|(\\.))*/g);
      return (
        e ? "&" === e[0] && e.shift() : (e = []), (this.mixinElements_ = e)
      );
    },
    isJustParentSelector: function () {
      return (
        !this.mediaEmpty &&
        1 === this.elements.length &&
        "&" === this.elements[0].value &&
        (" " === this.elements[0].combinator.value ||
          "" === this.elements[0].combinator.value)
      );
    },
    eval: function (e) {
      var t = this.condition && this.condition.eval(e),
        i = this.elements,
        n = this.extendList;
      return (
        (i =
          i &&
          i.map(function (t) {
            return t.eval(e);
          })),
        (n =
          n &&
          n.map(function (t) {
            return t.eval(e);
          })),
        this.createDerived(i, n, t)
      );
    },
    genCSS: function (e, t) {
      var i;
      for (
        (e && e.firstSelector) ||
          "" !== this.elements[0].combinator.value ||
          t.add(" ", this.fileInfo(), this.getIndex()),
          i = 0;
        i < this.elements.length;
        i++
      )
        this.elements[i].genCSS(e, t);
    },
    getIsOutput: function () {
      return this.evaldCondition;
    }
  });
  var oe = function (e) {
    if (!e) throw new Error("Value requires an array argument");
    Array.isArray(e) ? (this.value = e) : (this.value = [e]);
  };
  oe.prototype = Object.assign(new u(), {
    type: "Value",
    accept: function (e) {
      this.value && (this.value = e.visitArray(this.value));
    },
    eval: function (e) {
      return 1 === this.value.length
        ? this.value[0].eval(e)
        : new oe(
            this.value.map(function (t) {
              return t.eval(e);
            })
          );
    },
    genCSS: function (e, t) {
      var i;
      for (i = 0; i < this.value.length; i++)
        this.value[i].genCSS(e, t),
          i + 1 < this.value.length && t.add(e && e.compress ? "," : ", ");
    }
  });
  var ae = function (e) {
    this.value = e;
  };
  (ae.prototype = Object.assign(new u(), {
    type: "Keyword",
    genCSS: function (e, t) {
      if ("%" === this.value)
        throw { type: "Syntax", message: "Invalid % without number" };
      t.add(this.value);
    }
  })),
    (ae.True = new ae("true")),
    (ae.False = new ae("false"));
  var le = function (e, t, i, n, r, s) {
    (this.value = e),
      (this._index = t),
      (this._fileInfo = i),
      (this.mapLines = n),
      (this.rulesetLike = void 0 !== r && r),
      (this.allowRoot = !0),
      this.copyVisibilityInfo(s);
  };
  le.prototype = Object.assign(new u(), {
    type: "Anonymous",
    eval: function () {
      return new le(
        this.value,
        this._index,
        this._fileInfo,
        this.mapLines,
        this.rulesetLike,
        this.visibilityInfo()
      );
    },
    compare: function (e) {
      return e.toCSS && this.toCSS() === e.toCSS() ? 0 : void 0;
    },
    isRulesetLike: function () {
      return this.rulesetLike;
    },
    genCSS: function (e, t) {
      (this.nodeVisible = Boolean(this.value)),
        this.nodeVisible &&
          t.add(this.value, this._fileInfo, this._index, this.mapLines);
    }
  });
  var ue = g;
  var ce = function (e, t, i, n, r, s, o, a) {
    (this.name = e),
      (this.value = t instanceof u ? t : new oe([t ? new le(t) : null])),
      (this.important = i ? " " + i.trim() : ""),
      (this.merge = n),
      (this._index = r),
      (this._fileInfo = s),
      (this.inline = o || !1),
      (this.variable = void 0 !== a ? a : e.charAt && "@" === e.charAt(0)),
      (this.allowRoot = !0),
      this.setParent(this.value, this);
  };
  function he(e) {
    return (
      "/* line " +
      e.debugInfo.lineNumber +
      ", " +
      e.debugInfo.fileName +
      " */\n"
    );
  }
  function fe(e) {
    var t = e.debugInfo.fileName;
    return (
      /^[a-z]+:\/\//i.test(t) || (t = "file://" + t),
      "@media -sass-debug-info{filename{font-family:" +
        t.replace(/([.:/\\])/g, function (e) {
          return "\\" == e && (e = "/"), "\\" + e;
        }) +
        "}line{font-family:\\00003" +
        e.debugInfo.lineNumber +
        "}}\n"
    );
  }
  function pe(e, t, i) {
    var n = "";
    if (e.dumpLineNumbers && !e.compress)
      switch (e.dumpLineNumbers) {
        case "comments":
          n = he(t);
          break;
        case "mediaquery":
          n = fe(t);
          break;
        case "all":
          n = he(t) + (i || "") + fe(t);
      }
    return n;
  }
  ce.prototype = Object.assign(new u(), {
    type: "Declaration",
    genCSS: function (e, t) {
      t.add(
        this.name + (e.compress ? ":" : ": "),
        this.fileInfo(),
        this.getIndex()
      );
      try {
        this.value.genCSS(e, t);
      } catch (e) {
        throw (
          ((e.index = this._index), (e.filename = this._fileInfo.filename), e)
        );
      }
      t.add(
        this.important + (this.inline || (e.lastRule && e.compress) ? "" : ";"),
        this._fileInfo,
        this._index
      );
    },
    eval: function (e) {
      var t,
        i,
        n = !1,
        r = this.name,
        s = this.variable;
      "string" != typeof r &&
        ((r =
          1 === r.length && r[0] instanceof ae
            ? r[0].value
            : (function (e, t) {
                var i,
                  n = "",
                  r = t.length,
                  s = {
                    add: function (e) {
                      n += e;
                    }
                  };
                for (i = 0; i < r; i++) t[i].eval(e).genCSS(e, s);
                return n;
              })(e, r)),
        (s = !1)),
        "font" === r &&
          e.math === ue.ALWAYS &&
          ((n = !0), (t = e.math), (e.math = ue.PARENS_DIVISION));
      try {
        if (
          (e.importantScope.push({}),
          (i = this.value.eval(e)),
          !this.variable && "DetachedRuleset" === i.type)
        )
          throw {
            message: "Rulesets cannot be evaluated on a property.",
            index: this.getIndex(),
            filename: this.fileInfo().filename
          };
        var o = this.important,
          a = e.importantScope.pop();
        return (
          !o && a.important && (o = a.important),
          new ce(
            r,
            i,
            o,
            this.merge,
            this.getIndex(),
            this.fileInfo(),
            this.inline,
            s
          )
        );
      } catch (e) {
        throw (
          ("number" != typeof e.index &&
            ((e.index = this.getIndex()),
            (e.filename = this.fileInfo().filename)),
          e)
        );
      } finally {
        n && (e.math = t);
      }
    },
    makeImportant: function () {
      return new ce(
        this.name,
        this.value,
        "!important",
        this.merge,
        this.getIndex(),
        this.fileInfo(),
        this.inline
      );
    }
  });
  var ve = function (e, t, i, n) {
    (this.value = e),
      (this.isLineComment = t),
      (this._index = i),
      (this._fileInfo = n),
      (this.allowRoot = !0);
  };
  ve.prototype = Object.assign(new u(), {
    type: "Comment",
    genCSS: function (e, t) {
      this.debugInfo && t.add(pe(e, this), this.fileInfo(), this.getIndex()),
        t.add(this.value);
    },
    isSilent: function (e) {
      var t = e.compress && "!" !== this.value[2];
      return this.isLineComment || t;
    }
  });
  var de = {
      eval: function () {
        var e = this.value_,
          t = this.error_;
        if (t) throw t;
        if (!E(e)) return e ? ae.True : ae.False;
      },
      value: function (e) {
        this.value_ = e;
      },
      error: function (e) {
        this.error_ = e;
      },
      reset: function () {
        this.value_ = this.error_ = null;
      }
    },
    me = function (e, t, i, n) {
      (this.selectors = e),
        (this.rules = t),
        (this._lookups = {}),
        (this._variables = null),
        (this._properties = null),
        (this.strictImports = i),
        this.copyVisibilityInfo(n),
        (this.allowRoot = !0),
        this.setParent(this.selectors, this),
        this.setParent(this.rules, this);
    };
  me.prototype = Object.assign(new u(), {
    type: "Ruleset",
    isRuleset: !0,
    isRulesetLike: function () {
      return !0;
    },
    accept: function (e) {
      this.paths
        ? (this.paths = e.visitArray(this.paths, !0))
        : this.selectors && (this.selectors = e.visitArray(this.selectors)),
        this.rules &&
          this.rules.length &&
          (this.rules = e.visitArray(this.rules));
    },
    eval: function (e) {
      var t,
        i,
        n,
        r,
        s,
        o = !1;
      if (this.selectors && (i = this.selectors.length)) {
        for (
          t = new Array(i),
            de.error({
              type: "Syntax",
              message:
                "it is currently only allowed in parametric mixin guards,"
            }),
            r = 0;
          r < i;
          r++
        ) {
          n = this.selectors[r].eval(e);
          for (var a = 0; a < n.elements.length; a++)
            if (n.elements[a].isVariable) {
              s = !0;
              break;
            }
          (t[r] = n), n.evaldCondition && (o = !0);
        }
        if (s) {
          var l = new Array(i);
          for (r = 0; r < i; r++) (n = t[r]), (l[r] = n.toCSS(e));
          var c = t[0].getIndex(),
            h = t[0].fileInfo();
          new re(e, this.parse.importManager, h, c).parseNode(
            l.join(","),
            ["selectors"],
            function (e, i) {
              i && (t = M(i));
            }
          );
        }
        de.reset();
      } else o = !0;
      var f,
        p,
        v = this.rules ? k(this.rules) : null,
        d = new me(t, v, this.strictImports, this.visibilityInfo());
      (d.originalRuleset = this),
        (d.root = this.root),
        (d.firstRoot = this.firstRoot),
        (d.allowImports = this.allowImports),
        this.debugInfo && (d.debugInfo = this.debugInfo),
        o || (v.length = 0),
        (d.functionRegistry = (function (e) {
          for (var t, i = 0, n = e.length; i !== n; ++i)
            if ((t = e[i].functionRegistry)) return t;
          return te;
        })(e.frames).inherit());
      var m = e.frames;
      m.unshift(d);
      var g = e.selectors;
      g || (e.selectors = g = []),
        g.unshift(this.selectors),
        (d.root || d.allowImports || !d.strictImports) && d.evalImports(e);
      var y = d.rules;
      for (r = 0; (f = y[r]); r++) f.evalFirst && (y[r] = f.eval(e));
      var b = (e.mediaBlocks && e.mediaBlocks.length) || 0;
      for (r = 0; (f = y[r]); r++)
        "MixinCall" === f.type
          ? ((v = f.eval(e).filter(function (e) {
              return !(e instanceof ce && e.variable) || !d.variable(e.name);
            })),
            y.splice.apply(y, [r, 1].concat(v)),
            (r += v.length - 1),
            d.resetCache())
          : "VariableCall" === f.type &&
            ((v = f.eval(e).rules.filter(function (e) {
              return !(e instanceof ce && e.variable);
            })),
            y.splice.apply(y, [r, 1].concat(v)),
            (r += v.length - 1),
            d.resetCache());
      for (r = 0; (f = y[r]); r++)
        f.evalFirst || (y[r] = f = f.eval ? f.eval(e) : f);
      for (r = 0; (f = y[r]); r++)
        if (
          f instanceof me &&
          f.selectors &&
          1 === f.selectors.length &&
          f.selectors[0] &&
          f.selectors[0].isJustParentSelector()
        ) {
          y.splice(r--, 1);
          for (a = 0; (p = f.rules[a]); a++)
            p instanceof u &&
              (p.copyVisibilityInfo(f.visibilityInfo()),
              (p instanceof ce && p.variable) || y.splice(++r, 0, p));
        }
      if ((m.shift(), g.shift(), e.mediaBlocks))
        for (r = b; r < e.mediaBlocks.length; r++)
          e.mediaBlocks[r].bubbleSelectors(t);
      return d;
    },
    evalImports: function (e) {
      var t,
        i,
        n = this.rules;
      if (n)
        for (t = 0; t < n.length; t++)
          "Import" === n[t].type &&
            ((i = n[t].eval(e)) && (i.length || 0 === i.length)
              ? (n.splice.apply(n, [t, 1].concat(i)), (t += i.length - 1))
              : n.splice(t, 1, i),
            this.resetCache());
    },
    makeImportant: function () {
      return new me(
        this.selectors,
        this.rules.map(function (e) {
          return e.makeImportant ? e.makeImportant() : e;
        }),
        this.strictImports,
        this.visibilityInfo()
      );
    },
    matchArgs: function (e) {
      return !e || 0 === e.length;
    },
    matchCondition: function (e, t) {
      var i = this.selectors[this.selectors.length - 1];
      return (
        !!i.evaldCondition &&
        !(i.condition && !i.condition.eval(new D.Eval(t, t.frames)))
      );
    },
    resetCache: function () {
      (this._rulesets = null),
        (this._variables = null),
        (this._properties = null),
        (this._lookups = {});
    },
    variables: function () {
      return (
        this._variables ||
          (this._variables = this.rules
            ? this.rules.reduce(function (e, t) {
                if (
                  (t instanceof ce && !0 === t.variable && (e[t.name] = t),
                  "Import" === t.type && t.root && t.root.variables)
                ) {
                  var i = t.root.variables();
                  for (var n in i)
                    i.hasOwnProperty(n) && (e[n] = t.root.variable(n));
                }
                return e;
              }, {})
            : {}),
        this._variables
      );
    },
    properties: function () {
      return (
        this._properties ||
          (this._properties = this.rules
            ? this.rules.reduce(function (e, t) {
                if (t instanceof ce && !0 !== t.variable) {
                  var i =
                    1 === t.name.length && t.name[0] instanceof ae
                      ? t.name[0].value
                      : t.name;
                  e["$" + i] ? e["$" + i].push(t) : (e["$" + i] = [t]);
                }
                return e;
              }, {})
            : {}),
        this._properties
      );
    },
    variable: function (e) {
      var t = this.variables()[e];
      if (t) return this.parseValue(t);
    },
    property: function (e) {
      var t = this.properties()[e];
      if (t) return this.parseValue(t);
    },
    lastDeclaration: function () {
      for (var e = this.rules.length; e > 0; e--) {
        var t = this.rules[e - 1];
        if (t instanceof ce) return this.parseValue(t);
      }
    },
    parseValue: function (e) {
      var t = this;
      function i(e) {
        return e.value instanceof le && !e.parsed
          ? ("string" == typeof e.value.value
              ? new re(
                  this.parse.context,
                  this.parse.importManager,
                  e.fileInfo(),
                  e.value.getIndex()
                ).parseNode(
                  e.value.value,
                  ["value", "important"],
                  function (t, i) {
                    t && (e.parsed = !0),
                      i &&
                        ((e.value = i[0]),
                        (e.important = i[1] || ""),
                        (e.parsed = !0));
                  }
                )
              : (e.parsed = !0),
            e)
          : e;
      }
      if (Array.isArray(e)) {
        var n = [];
        return (
          e.forEach(function (e) {
            n.push(i.call(t, e));
          }),
          n
        );
      }
      return i.call(t, e);
    },
    rulesets: function () {
      if (!this.rules) return [];
      var e,
        t,
        i = [],
        n = this.rules;
      for (e = 0; (t = n[e]); e++) t.isRuleset && i.push(t);
      return i;
    },
    prependRule: function (e) {
      var t = this.rules;
      t ? t.unshift(e) : (this.rules = [e]), this.setParent(e, this);
    },
    find: function (e, t, i) {
      t = t || this;
      var n,
        r,
        s = [],
        o = e.toCSS();
      return o in this._lookups
        ? this._lookups[o]
        : (this.rulesets().forEach(function (o) {
            if (o !== t)
              for (var a = 0; a < o.selectors.length; a++)
                if ((n = e.match(o.selectors[a]))) {
                  if (e.elements.length > n) {
                    if (!i || i(o)) {
                      r = o.find(new se(e.elements.slice(n)), t, i);
                      for (var l = 0; l < r.length; ++l) r[l].path.push(o);
                      Array.prototype.push.apply(s, r);
                    }
                  } else s.push({ rule: o, path: [] });
                  break;
                }
          }),
          (this._lookups[o] = s),
          s);
    },
    genCSS: function (e, t) {
      var i,
        n,
        r,
        s,
        o,
        a = [];
      (e.tabLevel = e.tabLevel || 0), this.root || e.tabLevel++;
      var l,
        u = e.compress ? "" : Array(e.tabLevel + 1).join("  "),
        c = e.compress ? "" : Array(e.tabLevel).join("  "),
        h = 0,
        f = 0;
      for (i = 0; (s = this.rules[i]); i++)
        s instanceof ve
          ? (f === i && f++, a.push(s))
          : s.isCharset && s.isCharset()
          ? (a.splice(h, 0, s), h++, f++)
          : "Import" === s.type
          ? (a.splice(f, 0, s), f++)
          : a.push(s);
      if (((a = [].concat(a)), !this.root)) {
        (r = pe(e, this, c)) && (t.add(r), t.add(c));
        var p = this.paths,
          v = p.length,
          d = void 0;
        for (l = e.compress ? "," : ",\n" + c, i = 0; i < v; i++)
          if ((d = (o = p[i]).length))
            for (
              i > 0 && t.add(l),
                e.firstSelector = !0,
                o[0].genCSS(e, t),
                e.firstSelector = !1,
                n = 1;
              n < d;
              n++
            )
              o[n].genCSS(e, t);
        t.add((e.compress ? "{" : " {\n") + u);
      }
      for (i = 0; (s = a[i]); i++) {
        i + 1 === a.length && (e.lastRule = !0);
        var m = e.lastRule;
        s.isRulesetLike(s) && (e.lastRule = !1),
          s.genCSS ? s.genCSS(e, t) : s.value && t.add(s.value.toString()),
          (e.lastRule = m),
          !e.lastRule && s.isVisible()
            ? t.add(e.compress ? "" : "\n" + u)
            : (e.lastRule = !1);
      }
      this.root || (t.add(e.compress ? "}" : "\n" + c + "}"), e.tabLevel--),
        t.isEmpty() || e.compress || !this.firstRoot || t.add("\n");
    },
    joinSelectors: function (e, t, i) {
      for (var n = 0; n < i.length; n++) this.joinSelector(e, t, i[n]);
    },
    joinSelector: function (e, t, i) {
      function n(e, t) {
        var i, n;
        if (0 === e.length) i = new p(e[0]);
        else {
          var r = new Array(e.length);
          for (n = 0; n < e.length; n++)
            r[n] = new m(null, e[n], t.isVariable, t._index, t._fileInfo);
          i = new p(new se(r));
        }
        return i;
      }
      function r(e, t) {
        var i;
        return (
          (i = new m(null, e, t.isVariable, t._index, t._fileInfo)), new se([i])
        );
      }
      function s(e, t, i, n) {
        var r, s, o;
        if (
          ((r = []),
          e.length > 0
            ? ((s = (r = k(e)).pop()), (o = n.createDerived(k(s.elements))))
            : (o = n.createDerived([])),
          t.length > 0)
        ) {
          var a = i.combinator,
            l = t[0].elements[0];
          a.emptyOrWhitespace &&
            !l.combinator.emptyOrWhitespace &&
            (a = l.combinator),
            o.elements.push(
              new m(a, l.value, i.isVariable, i._index, i._fileInfo)
            ),
            (o.elements = o.elements.concat(t[0].elements.slice(1)));
        }
        if ((0 !== o.elements.length && r.push(o), t.length > 1)) {
          var u = t.slice(1);
          (u = u.map(function (e) {
            return e.createDerived(e.elements, []);
          })),
            (r = r.concat(u));
        }
        return r;
      }
      function o(e, t, i, n, r) {
        var o;
        for (o = 0; o < e.length; o++) {
          var a = s(e[o], t, i, n);
          r.push(a);
        }
        return r;
      }
      function a(e, t) {
        var i, n;
        if (0 !== e.length)
          if (0 !== t.length)
            for (i = 0; (n = t[i]); i++)
              n.length > 0
                ? (n[n.length - 1] = n[n.length - 1].createDerived(
                    n[n.length - 1].elements.concat(e)
                  ))
                : n.push(new se(e));
          else t.push([new se(e)]);
      }
      function l(e, t) {
        var i = t.createDerived(t.elements, t.extendList, t.evaldCondition);
        return i.copyVisibilityInfo(e), i;
      }
      var u, c;
      if (
        !(function e(t, i, l) {
          var u,
            c,
            h,
            f,
            v,
            d,
            g,
            y,
            b,
            w,
            x,
            S,
            I = !1;
          for (f = [], v = [[]], u = 0; (y = l.elements[u]); u++)
            if ("&" !== y.value) {
              var C =
                ((S = void 0),
                (x = y).value instanceof p && (S = x.value.value) instanceof se
                  ? S
                  : null);
              if (null !== C) {
                a(f, v);
                var k,
                  _ = [],
                  A = [];
                for (k = e(_, i, C), I = I || k, h = 0; h < _.length; h++) {
                  o(v, [r(n(_[h], y), y)], y, l, A);
                }
                (v = A), (f = []);
              } else f.push(y);
            } else {
              for (I = !0, d = [], a(f, v), c = 0; c < v.length; c++)
                if (((g = v[c]), 0 === i.length))
                  g.length > 0 &&
                    g[0].elements.push(
                      new m(
                        y.combinator,
                        "",
                        y.isVariable,
                        y._index,
                        y._fileInfo
                      )
                    ),
                    d.push(g);
                else
                  for (h = 0; h < i.length; h++) {
                    var P = s(g, i[h], y, l);
                    d.push(P);
                  }
              (v = d), (f = []);
            }
          for (a(f, v), u = 0; u < v.length; u++)
            (b = v[u].length) > 0 &&
              (t.push(v[u]),
              (w = v[u][b - 1]),
              (v[u][b - 1] = w.createDerived(w.elements, l.extendList)));
          return I;
        })((c = []), t, i)
      )
        if (t.length > 0)
          for (c = [], u = 0; u < t.length; u++) {
            var h = t[u].map(l.bind(this, i.visibilityInfo()));
            h.push(i), c.push(h);
          }
        else c = [[i]];
      for (u = 0; u < c.length; u++) e.push(c[u]);
    }
  });
  var ge = function (e, t, i, n, r, s, o, a) {
    var l;
    if (
      ((this.name = e),
      (this.value = t instanceof u ? t : t ? new le(t) : t),
      i)
    ) {
      for (
        Array.isArray(i)
          ? (this.rules = i)
          : ((this.rules = [i]),
            (this.rules[0].selectors = new se(
              [],
              null,
              null,
              n,
              r
            ).createEmptySelectors())),
          l = 0;
        l < this.rules.length;
        l++
      )
        this.rules[l].allowImports = !0;
      this.setParent(this.rules, this);
    }
    (this._index = n),
      (this._fileInfo = r),
      (this.debugInfo = s),
      (this.isRooted = o || !1),
      this.copyVisibilityInfo(a),
      (this.allowRoot = !0);
  };
  ge.prototype = Object.assign(new u(), {
    type: "AtRule",
    accept: function (e) {
      var t = this.value,
        i = this.rules;
      i && (this.rules = e.visitArray(i)), t && (this.value = e.visit(t));
    },
    isRulesetLike: function () {
      return this.rules || !this.isCharset();
    },
    isCharset: function () {
      return "@charset" === this.name;
    },
    genCSS: function (e, t) {
      var i = this.value,
        n = this.rules;
      t.add(this.name, this.fileInfo(), this.getIndex()),
        i && (t.add(" "), i.genCSS(e, t)),
        n ? this.outputRuleset(e, t, n) : t.add(";");
    },
    eval: function (e) {
      var t,
        i,
        n = this.value,
        r = this.rules;
      return (
        (t = e.mediaPath),
        (i = e.mediaBlocks),
        (e.mediaPath = []),
        (e.mediaBlocks = []),
        n && (n = n.eval(e)),
        r && ((r = [r[0].eval(e)])[0].root = !0),
        (e.mediaPath = t),
        (e.mediaBlocks = i),
        new ge(
          this.name,
          n,
          r,
          this.getIndex(),
          this.fileInfo(),
          this.debugInfo,
          this.isRooted,
          this.visibilityInfo()
        )
      );
    },
    variable: function (e) {
      if (this.rules) return me.prototype.variable.call(this.rules[0], e);
    },
    find: function () {
      if (this.rules) return me.prototype.find.apply(this.rules[0], arguments);
    },
    rulesets: function () {
      if (this.rules) return me.prototype.rulesets.apply(this.rules[0]);
    },
    outputRuleset: function (e, t, i) {
      var n,
        r = i.length;
      if (((e.tabLevel = 1 + (0 | e.tabLevel)), e.compress)) {
        for (t.add("{"), n = 0; n < r; n++) i[n].genCSS(e, t);
        return t.add("}"), void e.tabLevel--;
      }
      var s = "\n" + Array(e.tabLevel).join("  "),
        o = s + "  ";
      if (r) {
        for (t.add(" {" + o), i[0].genCSS(e, t), n = 1; n < r; n++)
          t.add(o), i[n].genCSS(e, t);
        t.add(s + "}");
      } else t.add(" {" + s + "}");
      e.tabLevel--;
    }
  });
  var ye = function (e, t) {
    (this.ruleset = e), (this.frames = t), this.setParent(this.ruleset, this);
  };
  ye.prototype = Object.assign(new u(), {
    type: "DetachedRuleset",
    evalFirst: !0,
    accept: function (e) {
      this.ruleset = e.visit(this.ruleset);
    },
    eval: function (e) {
      var t = this.frames || k(e.frames);
      return new ye(this.ruleset, t);
    },
    callEval: function (e) {
      return this.ruleset.eval(
        this.frames ? new D.Eval(e, this.frames.concat(e.frames)) : e
      );
    }
  });
  var be = function (e, t, i) {
    (this.numerator = e ? k(e).sort() : []),
      (this.denominator = t ? k(t).sort() : []),
      i ? (this.backupUnit = i) : e && e.length && (this.backupUnit = e[0]);
  };
  be.prototype = Object.assign(new u(), {
    type: "Unit",
    clone: function () {
      return new be(k(this.numerator), k(this.denominator), this.backupUnit);
    },
    genCSS: function (e, t) {
      var i = e && e.strictUnits;
      1 === this.numerator.length
        ? t.add(this.numerator[0])
        : !i && this.backupUnit
        ? t.add(this.backupUnit)
        : !i && this.denominator.length && t.add(this.denominator[0]);
    },
    toString: function () {
      var e,
        t = this.numerator.join("*");
      for (e = 0; e < this.denominator.length; e++)
        t += "/" + this.denominator[e];
      return t;
    },
    compare: function (e) {
      return this.is(e.toString()) ? 0 : void 0;
    },
    is: function (e) {
      return this.toString().toUpperCase() === e.toUpperCase();
    },
    isLength: function () {
      return RegExp(
        "^(px|em|ex|ch|rem|in|cm|mm|pc|pt|ex|vw|vh|vmin|vmax)$",
        "gi"
      ).test(this.toCSS());
    },
    isEmpty: function () {
      return 0 === this.numerator.length && 0 === this.denominator.length;
    },
    isSingular: function () {
      return this.numerator.length <= 1 && 0 === this.denominator.length;
    },
    map: function (e) {
      var t;
      for (t = 0; t < this.numerator.length; t++)
        this.numerator[t] = e(this.numerator[t], !1);
      for (t = 0; t < this.denominator.length; t++)
        this.denominator[t] = e(this.denominator[t], !0);
    },
    usedUnits: function () {
      var e,
        t,
        i,
        n = {};
      for (i in ((t = function (t) {
        return e.hasOwnProperty(t) && !n[i] && (n[i] = t), t;
      }),
      a))
        a.hasOwnProperty(i) && ((e = a[i]), this.map(t));
      return n;
    },
    cancel: function () {
      var e,
        t,
        i = {};
      for (t = 0; t < this.numerator.length; t++)
        i[(e = this.numerator[t])] = (i[e] || 0) + 1;
      for (t = 0; t < this.denominator.length; t++)
        i[(e = this.denominator[t])] = (i[e] || 0) - 1;
      for (e in ((this.numerator = []), (this.denominator = []), i))
        if (i.hasOwnProperty(e)) {
          var n = i[e];
          if (n > 0) for (t = 0; t < n; t++) this.numerator.push(e);
          else if (n < 0) for (t = 0; t < -n; t++) this.denominator.push(e);
        }
      this.numerator.sort(), this.denominator.sort();
    }
  });
  var we = function (e, t) {
    if (((this.value = parseFloat(e)), isNaN(this.value)))
      throw new Error("Dimension is not a number.");
    (this.unit = t && t instanceof be ? t : new be(t ? [t] : void 0)),
      this.setParent(this.unit, this);
  };
  we.prototype = Object.assign(new u(), {
    type: "Dimension",
    accept: function (e) {
      this.unit = e.visit(this.unit);
    },
    eval: function (e) {
      return this;
    },
    toColor: function () {
      return new c([this.value, this.value, this.value]);
    },
    genCSS: function (e, t) {
      if (e && e.strictUnits && !this.unit.isSingular())
        throw new Error(
          "Multiple units in dimension. Correct the units or use the unit function. Bad unit: " +
            this.unit.toString()
        );
      var i = this.fround(e, this.value),
        n = String(i);
      if (
        (0 !== i &&
          i < 1e-6 &&
          i > -1e-6 &&
          (n = i.toFixed(20).replace(/0+$/, "")),
        e && e.compress)
      ) {
        if (0 === i && this.unit.isLength()) return void t.add(n);
        i > 0 && i < 1 && (n = n.substr(1));
      }
      t.add(n), this.unit.genCSS(e, t);
    },
    operate: function (e, t, i) {
      var n = this._operate(e, t, this.value, i.value),
        r = this.unit.clone();
      if ("+" === t || "-" === t)
        if (0 === r.numerator.length && 0 === r.denominator.length)
          (r = i.unit.clone()),
            this.unit.backupUnit && (r.backupUnit = this.unit.backupUnit);
        else if (0 === i.unit.numerator.length && 0 === r.denominator.length);
        else {
          if (
            ((i = i.convertTo(this.unit.usedUnits())),
            e.strictUnits && i.unit.toString() !== r.toString())
          )
            throw new Error(
              "Incompatible units. Change the units or use the unit function. Bad units: '" +
                r.toString() +
                "' and '" +
                i.unit.toString() +
                "'."
            );
          n = this._operate(e, t, this.value, i.value);
        }
      else
        "*" === t
          ? ((r.numerator = r.numerator.concat(i.unit.numerator).sort()),
            (r.denominator = r.denominator.concat(i.unit.denominator).sort()),
            r.cancel())
          : "/" === t &&
            ((r.numerator = r.numerator.concat(i.unit.denominator).sort()),
            (r.denominator = r.denominator.concat(i.unit.numerator).sort()),
            r.cancel());
      return new we(n, r);
    },
    compare: function (e) {
      var t, i;
      if (e instanceof we) {
        if (this.unit.isEmpty() || e.unit.isEmpty()) (t = this), (i = e);
        else if (
          ((t = this.unify()), (i = e.unify()), 0 !== t.unit.compare(i.unit))
        )
          return;
        return u.numericCompare(t.value, i.value);
      }
    },
    unify: function () {
      return this.convertTo({ length: "px", duration: "s", angle: "rad" });
    },
    convertTo: function (e) {
      var t,
        i,
        n,
        r,
        s,
        o = this.value,
        l = this.unit.clone(),
        u = {};
      if ("string" == typeof e) {
        for (t in a) a[t].hasOwnProperty(e) && ((u = {})[t] = e);
        e = u;
      }
      for (i in ((s = function (e, t) {
        return n.hasOwnProperty(e)
          ? (t ? (o /= n[e] / n[r]) : (o *= n[e] / n[r]), r)
          : e;
      }),
      e))
        e.hasOwnProperty(i) && ((r = e[i]), (n = a[i]), l.map(s));
      return l.cancel(), new we(o, l);
    }
  });
  var xe = g,
    Se = function (e, t, i) {
      (this.op = e.trim()), (this.operands = t), (this.isSpaced = i);
    };
  Se.prototype = Object.assign(new u(), {
    type: "Operation",
    accept: function (e) {
      this.operands = e.visitArray(this.operands);
    },
    eval: function (e) {
      var t,
        i = this.operands[0].eval(e),
        n = this.operands[1].eval(e);
      if (e.isMathOn(this.op)) {
        if (
          ((t = "./" === this.op ? "/" : this.op),
          i instanceof we && n instanceof c && (i = i.toColor()),
          n instanceof we && i instanceof c && (n = n.toColor()),
          !i.operate || !n.operate)
        ) {
          if (
            (i instanceof Se || n instanceof Se) &&
            "/" === i.op &&
            e.math === xe.PARENS_DIVISION
          )
            return new Se(this.op, [i, n], this.isSpaced);
          throw { type: "Operation", message: "Operation on an invalid type" };
        }
        return i.operate(e, t, n);
      }
      return new Se(this.op, [i, n], this.isSpaced);
    },
    genCSS: function (e, t) {
      this.operands[0].genCSS(e, t),
        this.isSpaced && t.add(" "),
        t.add(this.op),
        this.isSpaced && t.add(" "),
        this.operands[1].genCSS(e, t);
    }
  });
  var Ie = function () {
    return (Ie =
      Object.assign ||
      function (e) {
        for (var t, i = 1, n = arguments.length; i < n; i++)
          for (var r in (t = arguments[i]))
            Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
        return e;
      }).apply(this, arguments);
  };
  var Ce = function (e, t) {
    if (((this.value = e), (this.noSpacing = t), !e))
      throw new Error("Expression requires an array parameter");
  };
  Ce.prototype = Object.assign(new u(), {
    type: "Expression",
    accept: function (e) {
      this.value = e.visitArray(this.value);
    },
    eval: function (e) {
      var t,
        i = e.isMathOn(),
        n = this.parens,
        r = !1;
      return (
        n && e.inParenthesis(),
        this.value.length > 1
          ? (t = new Ce(
              this.value.map(function (t) {
                return t.eval ? t.eval(e) : t;
              }),
              this.noSpacing
            ))
          : 1 === this.value.length
          ? (!this.value[0].parens ||
              this.value[0].parensInOp ||
              e.inCalc ||
              (r = !0),
            (t = this.value[0].eval(e)))
          : (t = this),
        n && e.outOfParenthesis(),
        !this.parens ||
          !this.parensInOp ||
          i ||
          r ||
          t instanceof we ||
          (t = new p(t)),
        t
      );
    },
    genCSS: function (e, t) {
      for (var i = 0; i < this.value.length; i++)
        this.value[i].genCSS(e, t),
          !this.noSpacing && i + 1 < this.value.length && t.add(" ");
    },
    throwAwayComments: function () {
      this.value = this.value.filter(function (e) {
        return !(e instanceof ve);
      });
    }
  });
  var ke = (function () {
      function e(e, t, i, n) {
        (this.name = e.toLowerCase()),
          (this.index = i),
          (this.context = t),
          (this.currentFileInfo = n),
          (this.func = t.frames[0].functionRegistry.get(this.name));
      }
      return (
        (e.prototype.isValid = function () {
          return Boolean(this.func);
        }),
        (e.prototype.call = function (e) {
          var t = this;
          Array.isArray(e) || (e = [e]);
          var i = this.func.evalArgs;
          !1 !== i &&
            (e = e.map(function (e) {
              return e.eval(t.context);
            }));
          var n = function (e) {
            return !("Comment" === e.type);
          };
          return (
            (e = e.filter(n).map(function (e) {
              if ("Expression" === e.type) {
                var t = e.value.filter(n);
                return 1 === t.length
                  ? e.parens && "/" === t[0].op
                    ? e
                    : t[0]
                  : new Ce(t);
              }
              return e;
            })),
            !1 === i
              ? this.func.apply(
                  this,
                  (function (e, t, i) {
                    if (i || 2 === arguments.length)
                      for (var n, r = 0, s = t.length; r < s; r++)
                        (!n && r in t) ||
                          (n || (n = Array.prototype.slice.call(t, 0, r)),
                          (n[r] = t[r]));
                    return e.concat(n || t);
                  })([this.context], e)
                )
              : this.func.apply(this, e)
          );
        }),
        e
      );
    })(),
    _e = function (e, t, i, n) {
      (this.name = e),
        (this.args = t),
        (this.calc = "calc" === e),
        (this._index = i),
        (this._fileInfo = n);
    };
  _e.prototype = Object.assign(new u(), {
    type: "Call",
    accept: function (e) {
      this.args && (this.args = e.visitArray(this.args));
    },
    eval: function (e) {
      var t = this,
        i = e.mathOn;
      (e.mathOn = !this.calc), (this.calc || e.inCalc) && e.enterCalc();
      var n,
        r = function () {
          (t.calc || e.inCalc) && e.exitCalc(), (e.mathOn = i);
        },
        s = new ke(this.name, e, this.getIndex(), this.fileInfo());
      if (s.isValid())
        try {
          (n = s.call(this.args)), r();
        } catch (e) {
          if (e.hasOwnProperty("line") && e.hasOwnProperty("column")) throw e;
          throw {
            type: e.type || "Runtime",
            message:
              "Error evaluating function `" +
              this.name +
              "`" +
              (e.message ? ": " + e.message : ""),
            index: this.getIndex(),
            filename: this.fileInfo().filename,
            line: e.lineNumber,
            column: e.columnNumber
          };
        }
      if (null != n)
        return (
          n instanceof u || (n = new le(n && !0 !== n ? n.toString() : null)),
          (n._index = this._index),
          (n._fileInfo = this._fileInfo),
          n
        );
      var o = this.args.map(function (t) {
        return t.eval(e);
      });
      return r(), new _e(this.name, o, this.getIndex(), this.fileInfo());
    },
    genCSS: function (e, t) {
      t.add(this.name + "(", this.fileInfo(), this.getIndex());
      for (var i = 0; i < this.args.length; i++)
        this.args[i].genCSS(e, t), i + 1 < this.args.length && t.add(", ");
      t.add(")");
    }
  });
  var Ae = function (e, t, i) {
    (this.name = e), (this._index = t), (this._fileInfo = i);
  };
  Ae.prototype = Object.assign(new u(), {
    type: "Variable",
    eval: function (e) {
      var t,
        i = this.name;
      if (
        (0 === i.indexOf("@@") &&
          (i =
            "@" +
            new Ae(i.slice(1), this.getIndex(), this.fileInfo()).eval(e).value),
        this.evaluating)
      )
        throw {
          type: "Name",
          message: "Recursive variable definition for " + i,
          filename: this.fileInfo().filename,
          index: this.getIndex()
        };
      if (
        ((this.evaluating = !0),
        (t = this.find(e.frames, function (t) {
          var n = t.variable(i);
          if (n) {
            if (n.important)
              e.importantScope[e.importantScope.length - 1].important =
                n.important;
            return e.inCalc
              ? new _e("_SELF", [n.value]).eval(e)
              : n.value.eval(e);
          }
        })))
      )
        return (this.evaluating = !1), t;
      throw {
        type: "Name",
        message: "variable " + i + " is undefined",
        filename: this.fileInfo().filename,
        index: this.getIndex()
      };
    },
    find: function (e, t) {
      for (var i = 0, n = void 0; i < e.length; i++)
        if ((n = t.call(e, e[i]))) return n;
      return null;
    }
  });
  var Pe = function (e, t, i) {
    (this.name = e), (this._index = t), (this._fileInfo = i);
  };
  Pe.prototype = Object.assign(new u(), {
    type: "Property",
    eval: function (e) {
      var t,
        i = this.name,
        n = e.pluginManager.less.visitors.ToCSSVisitor.prototype._mergeRules;
      if (this.evaluating)
        throw {
          type: "Name",
          message: "Recursive property reference for " + i,
          filename: this.fileInfo().filename,
          index: this.getIndex()
        };
      if (
        ((this.evaluating = !0),
        (t = this.find(e.frames, function (t) {
          var r,
            s = t.property(i);
          if (s) {
            for (var o = 0; o < s.length; o++)
              (r = s[o]),
                (s[o] = new ce(
                  r.name,
                  r.value,
                  r.important,
                  r.merge,
                  r.index,
                  r.currentFileInfo,
                  r.inline,
                  r.variable
                ));
            if ((n(s), (r = s[s.length - 1]).important))
              e.importantScope[e.importantScope.length - 1].important =
                r.important;
            return (r = r.value.eval(e));
          }
        })))
      )
        return (this.evaluating = !1), t;
      throw {
        type: "Name",
        message: "Property '" + i + "' is undefined",
        filename: this.currentFileInfo.filename,
        index: this.index
      };
    },
    find: function (e, t) {
      for (var i = 0, n = void 0; i < e.length; i++)
        if ((n = t.call(e, e[i]))) return n;
      return null;
    }
  });
  var Me = function (e, t, i, n) {
    (this.key = e), (this.op = t), (this.value = i), (this.cif = n);
  };
  Me.prototype = Object.assign(new u(), {
    type: "Attribute",
    eval: function (e) {
      return new Me(
        this.key.eval ? this.key.eval(e) : this.key,
        this.op,
        this.value && this.value.eval ? this.value.eval(e) : this.value,
        this.cif
      );
    },
    genCSS: function (e, t) {
      t.add(this.toCSS(e));
    },
    toCSS: function (e) {
      var t = this.key.toCSS ? this.key.toCSS(e) : this.key;
      return (
        this.op &&
          ((t += this.op),
          (t += this.value.toCSS ? this.value.toCSS(e) : this.value)),
        this.cif && (t = t + " " + this.cif),
        "[" + t + "]"
      );
    }
  });
  var Ee = function (e, t, i, n, r) {
    (this.escaped = void 0 === i || i),
      (this.value = t || ""),
      (this.quote = e.charAt(0)),
      (this._index = n),
      (this._fileInfo = r),
      (this.variableRegex = /@\{([\w-]+)\}/g),
      (this.propRegex = /\$\{([\w-]+)\}/g),
      (this.allowRoot = i);
  };
  Ee.prototype = Object.assign(new u(), {
    type: "Quoted",
    genCSS: function (e, t) {
      this.escaped || t.add(this.quote, this.fileInfo(), this.getIndex()),
        t.add(this.value),
        this.escaped || t.add(this.quote);
    },
    containsVariables: function () {
      return this.value.match(this.variableRegex);
    },
    eval: function (e) {
      var t = this,
        i = this.value;
      function n(e, t, i) {
        var n = e;
        do {
          (e = n.toString()), (n = e.replace(t, i));
        } while (e !== n);
        return n;
      }
      return (
        (i = n(i, this.variableRegex, function (i, n) {
          var r = new Ae("@" + n, t.getIndex(), t.fileInfo()).eval(e, !0);
          return r instanceof Ee ? r.value : r.toCSS();
        })),
        (i = n(i, this.propRegex, function (i, n) {
          var r = new Pe("$" + n, t.getIndex(), t.fileInfo()).eval(e, !0);
          return r instanceof Ee ? r.value : r.toCSS();
        })),
        new Ee(
          this.quote + i + this.quote,
          i,
          this.escaped,
          this.getIndex(),
          this.fileInfo()
        )
      );
    },
    compare: function (e) {
      return "Quoted" !== e.type || this.escaped || e.escaped
        ? e.toCSS && this.toCSS() === e.toCSS()
          ? 0
          : void 0
        : u.numericCompare(this.value, e.value);
    }
  });
  var Re = function (e, t, i, n) {
    (this.value = e),
      (this._index = t),
      (this._fileInfo = i),
      (this.isEvald = n);
  };
  Re.prototype = Object.assign(new u(), {
    type: "Url",
    accept: function (e) {
      this.value = e.visit(this.value);
    },
    genCSS: function (e, t) {
      t.add("url("), this.value.genCSS(e, t), t.add(")");
    },
    eval: function (e) {
      var t,
        i = this.value.eval(e);
      if (
        !this.isEvald &&
        ("string" == typeof (t = this.fileInfo() && this.fileInfo().rootpath) &&
        "string" == typeof i.value &&
        e.pathRequiresRewrite(i.value)
          ? (i.quote ||
              (t = t.replace(/[()'"\s]/g, function (e) {
                return "\\" + e;
              })),
            (i.value = e.rewritePath(i.value, t)))
          : (i.value = e.normalizePath(i.value)),
        e.urlArgs && !i.value.match(/^\s*data:/))
      ) {
        var n = (-1 === i.value.indexOf("?") ? "?" : "&") + e.urlArgs;
        -1 !== i.value.indexOf("#")
          ? (i.value = i.value.replace("#", n + "#"))
          : (i.value += n);
      }
      return new Re(i, this.getIndex(), this.fileInfo(), !0);
    }
  });
  var Oe = {
      isRulesetLike: function () {
        return !0;
      },
      accept: function (e) {
        this.features && (this.features = e.visit(this.features)),
          this.rules && (this.rules = e.visitArray(this.rules));
      },
      evalTop: function (e) {
        var t = this;
        if (e.mediaBlocks.length > 1) {
          var i = new se(
            [],
            null,
            null,
            this.getIndex(),
            this.fileInfo()
          ).createEmptySelectors();
          ((t = new me(i, e.mediaBlocks)).multiMedia = !0),
            t.copyVisibilityInfo(this.visibilityInfo()),
            this.setParent(t, this);
        }
        return delete e.mediaBlocks, delete e.mediaPath, t;
      },
      evalNested: function (e) {
        var t,
          i,
          n = e.mediaPath.concat([this]);
        for (t = 0; t < n.length; t++)
          (i =
            n[t].features instanceof oe ? n[t].features.value : n[t].features),
            (n[t] = Array.isArray(i) ? i : [i]);
        return (
          (this.features = new oe(
            this.permute(n).map(function (e) {
              for (
                e = e.map(function (e) {
                  return e.toCSS ? e : new le(e);
                }),
                  t = e.length - 1;
                t > 0;
                t--
              )
                e.splice(t, 0, new le("and"));
              return new Ce(e);
            })
          )),
          this.setParent(this.features, this),
          new me([], [])
        );
      },
      permute: function (e) {
        if (0 === e.length) return [];
        if (1 === e.length) return e[0];
        for (var t = [], i = this.permute(e.slice(1)), n = 0; n < i.length; n++)
          for (var r = 0; r < e[0].length; r++) t.push([e[0][r]].concat(i[n]));
        return t;
      },
      bubbleSelectors: function (e) {
        e &&
          ((this.rules = [new me(k(e), [this.rules[0]])]),
          this.setParent(this.rules, this));
      }
    },
    Ve = function (e, t, i, n, r) {
      (this._index = i), (this._fileInfo = n);
      var s = new se(
        [],
        null,
        null,
        this._index,
        this._fileInfo
      ).createEmptySelectors();
      (this.features = new oe(t)),
        (this.rules = [new me(s, e)]),
        (this.rules[0].allowImports = !0),
        this.copyVisibilityInfo(r),
        (this.allowRoot = !0),
        this.setParent(s, this),
        this.setParent(this.features, this),
        this.setParent(this.rules, this);
    };
  Ve.prototype = Object.assign(
    new ge(),
    Ie(Ie({ type: "Media" }, Oe), {
      genCSS: function (e, t) {
        t.add("@media ", this._fileInfo, this._index),
          this.features.genCSS(e, t),
          this.outputRuleset(e, t, this.rules);
      },
      eval: function (e) {
        e.mediaBlocks || ((e.mediaBlocks = []), (e.mediaPath = []));
        var t = new Ve(
          null,
          [],
          this._index,
          this._fileInfo,
          this.visibilityInfo()
        );
        return (
          this.debugInfo &&
            ((this.rules[0].debugInfo = this.debugInfo),
            (t.debugInfo = this.debugInfo)),
          (t.features = this.features.eval(e)),
          e.mediaPath.push(t),
          e.mediaBlocks.push(t),
          (this.rules[0].functionRegistry =
            e.frames[0].functionRegistry.inherit()),
          e.frames.unshift(this.rules[0]),
          (t.rules = [this.rules[0].eval(e)]),
          e.frames.shift(),
          e.mediaPath.pop(),
          0 === e.mediaPath.length ? t.evalTop(e) : t.evalNested(e)
        );
      }
    })
  );
  var Fe = function (e, t, i, n, r, s) {
    if (
      ((this.options = i),
      (this._index = n),
      (this._fileInfo = r),
      (this.path = e),
      (this.features = t),
      (this.allowRoot = !0),
      void 0 !== this.options.less || this.options.inline)
    )
      this.css = !this.options.less || this.options.inline;
    else {
      var o = this.getPath();
      o && /[#.&?]css([?;].*)?$/.test(o) && (this.css = !0);
    }
    this.copyVisibilityInfo(s),
      this.setParent(this.features, this),
      this.setParent(this.path, this);
  };
  Fe.prototype = Object.assign(new u(), {
    type: "Import",
    accept: function (e) {
      this.features && (this.features = e.visit(this.features)),
        (this.path = e.visit(this.path)),
        this.options.isPlugin ||
          this.options.inline ||
          !this.root ||
          (this.root = e.visit(this.root));
    },
    genCSS: function (e, t) {
      this.css &&
        void 0 === this.path._fileInfo.reference &&
        (t.add("@import ", this._fileInfo, this._index),
        this.path.genCSS(e, t),
        this.features && (t.add(" "), this.features.genCSS(e, t)),
        t.add(";"));
    },
    getPath: function () {
      return this.path instanceof Re ? this.path.value.value : this.path.value;
    },
    isVariableImport: function () {
      var e = this.path;
      return (
        e instanceof Re && (e = e.value),
        !(e instanceof Ee) || e.containsVariables()
      );
    },
    evalForImport: function (e) {
      var t = this.path;
      return (
        t instanceof Re && (t = t.value),
        new Fe(
          t.eval(e),
          this.features,
          this.options,
          this._index,
          this._fileInfo,
          this.visibilityInfo()
        )
      );
    },
    evalPath: function (e) {
      var t = this.path.eval(e),
        i = this._fileInfo;
      if (!(t instanceof Re)) {
        var n = t.value;
        i && n && e.pathRequiresRewrite(n)
          ? (t.value = e.rewritePath(n, i.rootpath))
          : (t.value = e.normalizePath(t.value));
      }
      return t;
    },
    eval: function (e) {
      var t = this.doEval(e);
      return (
        (this.options.reference || this.blocksVisibility()) &&
          (t.length || 0 === t.length
            ? t.forEach(function (e) {
                e.addVisibilityBlock();
              })
            : t.addVisibilityBlock()),
        t
      );
    },
    doEval: function (e) {
      var t,
        i,
        n = this.features && this.features.eval(e);
      if (this.options.isPlugin) {
        if (this.root && this.root.eval)
          try {
            this.root.eval(e);
          } catch (e) {
            throw (
              ((e.message = "Plugin error during evaluation"),
              new V(e, this.root.imports, this.root.filename))
            );
          }
        return (
          (i = e.frames[0] && e.frames[0].functionRegistry) &&
            this.root &&
            this.root.functions &&
            i.addMultiple(this.root.functions),
          []
        );
      }
      if (
        this.skip &&
        ("function" == typeof this.skip && (this.skip = this.skip()), this.skip)
      )
        return [];
      if (this.options.inline) {
        var r = new le(
          this.root,
          0,
          {
            filename: this.importedFilename,
            reference: this.path._fileInfo && this.path._fileInfo.reference
          },
          !0,
          !0
        );
        return this.features ? new Ve([r], this.features.value) : [r];
      }
      if (this.css) {
        var s = new Fe(this.evalPath(e), n, this.options, this._index);
        if (!s.css && this.error) throw this.error;
        return s;
      }
      return this.root
        ? ((t = new me(null, k(this.root.rules))).evalImports(e),
          this.features ? new Ve(t.rules, this.features.value) : t.rules)
        : [];
    }
  });
  var $e = function () {};
  $e.prototype = Object.assign(new u(), {
    evaluateJavaScript: function (e, t) {
      var i,
        n = this,
        r = {};
      if (!t.javascriptEnabled)
        throw {
          message:
            "Inline JavaScript is not enabled. Is it set in your options?",
          filename: this.fileInfo().filename,
          index: this.getIndex()
        };
      e = e.replace(/@\{([\w-]+)\}/g, function (e, i) {
        return n.jsify(new Ae("@" + i, n.getIndex(), n.fileInfo()).eval(t));
      });
      try {
        e = new Function("return (" + e + ")");
      } catch (t) {
        throw {
          message:
            "JavaScript evaluation error: " + t.message + " from `" + e + "`",
          filename: this.fileInfo().filename,
          index: this.getIndex()
        };
      }
      var s = t.frames[0].variables();
      for (var o in s)
        s.hasOwnProperty(o) &&
          (r[o.slice(1)] = {
            value: s[o].value,
            toJS: function () {
              return this.value.eval(t).toCSS();
            }
          });
      try {
        i = e.call(r);
      } catch (e) {
        throw {
          message:
            "JavaScript evaluation error: '" +
            e.name +
            ": " +
            e.message.replace(/["]/g, "'") +
            "'",
          filename: this.fileInfo().filename,
          index: this.getIndex()
        };
      }
      return i;
    },
    jsify: function (e) {
      return Array.isArray(e.value) && e.value.length > 1
        ? "[" +
            e.value
              .map(function (e) {
                return e.toCSS();
              })
              .join(", ") +
            "]"
        : e.toCSS();
    }
  });
  var Le = function (e, t, i, n) {
    (this.escaped = t),
      (this.expression = e),
      (this._index = i),
      (this._fileInfo = n);
  };
  Le.prototype = Object.assign(new $e(), {
    type: "JavaScript",
    eval: function (e) {
      var t = this.evaluateJavaScript(this.expression, e),
        i = typeof t;
      return "number" !== i || isNaN(t)
        ? "string" === i
          ? new Ee('"' + t + '"', t, this.escaped, this._index)
          : Array.isArray(t)
          ? new le(t.join(", "))
          : new le(t)
        : new we(t);
    }
  });
  var je = function (e, t) {
    (this.key = e), (this.value = t);
  };
  je.prototype = Object.assign(new u(), {
    type: "Assignment",
    accept: function (e) {
      this.value = e.visit(this.value);
    },
    eval: function (e) {
      return this.value.eval ? new je(this.key, this.value.eval(e)) : this;
    },
    genCSS: function (e, t) {
      t.add(this.key + "="),
        this.value.genCSS ? this.value.genCSS(e, t) : t.add(this.value);
    }
  });
  var Ne = function (e, t, i, n, r) {
    (this.op = e.trim()),
      (this.lvalue = t),
      (this.rvalue = i),
      (this._index = n),
      (this.negate = r);
  };
  Ne.prototype = Object.assign(new u(), {
    type: "Condition",
    accept: function (e) {
      (this.lvalue = e.visit(this.lvalue)),
        (this.rvalue = e.visit(this.rvalue));
    },
    eval: function (e) {
      var t = (function (e, t, i) {
        switch (e) {
          case "and":
            return t && i;
          case "or":
            return t || i;
          default:
            switch (u.compare(t, i)) {
              case -1:
                return "<" === e || "=<" === e || "<=" === e;
              case 0:
                return "=" === e || ">=" === e || "=<" === e || "<=" === e;
              case 1:
                return ">" === e || ">=" === e;
              default:
                return !1;
            }
        }
      })(this.op, this.lvalue.eval(e), this.rvalue.eval(e));
      return this.negate ? !t : t;
    }
  });
  var De = function (e, t, i, n, r, s) {
    (this.op = e.trim()),
      (this.lvalue = t),
      (this.mvalue = i),
      (this.op2 = n ? n.trim() : null),
      (this.rvalue = r),
      (this._index = s);
  };
  De.prototype = Object.assign(new u(), {
    type: "QueryInParens",
    accept: function (e) {
      (this.lvalue = e.visit(this.lvalue)),
        (this.mvalue = e.visit(this.mvalue)),
        this.rvalue && (this.rvalue = e.visit(this.rvalue));
    },
    eval: function (e) {
      return (
        (this.lvalue = this.lvalue.eval(e)),
        (this.mvalue = this.mvalue.eval(e)),
        this.rvalue && (this.rvalue = this.rvalue.eval(e)),
        this
      );
    },
    genCSS: function (e, t) {
      this.lvalue.genCSS(e, t),
        t.add(" " + this.op + " "),
        this.mvalue.genCSS(e, t),
        this.rvalue && (t.add(" " + this.op2 + " "), this.rvalue.genCSS(e, t));
    }
  });
  var Be = function (e, t, i, n, r) {
    (this._index = i), (this._fileInfo = n);
    var s = new se(
      [],
      null,
      null,
      this._index,
      this._fileInfo
    ).createEmptySelectors();
    (this.features = new oe(t)),
      (this.rules = [new me(s, e)]),
      (this.rules[0].allowImports = !0),
      this.copyVisibilityInfo(r),
      (this.allowRoot = !0),
      this.setParent(s, this),
      this.setParent(this.features, this),
      this.setParent(this.rules, this);
  };
  Be.prototype = Object.assign(
    new ge(),
    Ie(Ie({ type: "Container" }, Oe), {
      genCSS: function (e, t) {
        t.add("@container ", this._fileInfo, this._index),
          this.features.genCSS(e, t),
          this.outputRuleset(e, t, this.rules);
      },
      eval: function (e) {
        e.mediaBlocks || ((e.mediaBlocks = []), (e.mediaPath = []));
        var t = new Be(
          null,
          [],
          this._index,
          this._fileInfo,
          this.visibilityInfo()
        );
        return (
          this.debugInfo &&
            ((this.rules[0].debugInfo = this.debugInfo),
            (t.debugInfo = this.debugInfo)),
          (t.features = this.features.eval(e)),
          e.mediaPath.push(t),
          e.mediaBlocks.push(t),
          (this.rules[0].functionRegistry =
            e.frames[0].functionRegistry.inherit()),
          e.frames.unshift(this.rules[0]),
          (t.rules = [this.rules[0].eval(e)]),
          e.frames.shift(),
          e.mediaPath.pop(),
          0 === e.mediaPath.length ? t.evalTop(e) : t.evalNested(e)
        );
      }
    })
  );
  var Ue = function (e) {
    this.value = e;
  };
  Ue.prototype = Object.assign(new u(), { type: "UnicodeDescriptor" });
  var qe = function (e) {
    this.value = e;
  };
  qe.prototype = Object.assign(new u(), {
    type: "Negative",
    genCSS: function (e, t) {
      t.add("-"), this.value.genCSS(e, t);
    },
    eval: function (e) {
      return e.isMathOn()
        ? new Se("*", [new we(-1), this.value]).eval(e)
        : new qe(this.value.eval(e));
    }
  });
  var Te = function (e, t, i, n, r) {
    switch (
      ((this.selector = e),
      (this.option = t),
      (this.object_id = Te.next_id++),
      (this.parent_ids = [this.object_id]),
      (this._index = i),
      (this._fileInfo = n),
      this.copyVisibilityInfo(r),
      (this.allowRoot = !0),
      t)
    ) {
      case "all":
        (this.allowBefore = !0), (this.allowAfter = !0);
        break;
      default:
        (this.allowBefore = !1), (this.allowAfter = !1);
    }
    this.setParent(this.selector, this);
  };
  (Te.prototype = Object.assign(new u(), {
    type: "Extend",
    accept: function (e) {
      this.selector = e.visit(this.selector);
    },
    eval: function (e) {
      return new Te(
        this.selector.eval(e),
        this.option,
        this.getIndex(),
        this.fileInfo(),
        this.visibilityInfo()
      );
    },
    clone: function (e) {
      return new Te(
        this.selector,
        this.option,
        this.getIndex(),
        this.fileInfo(),
        this.visibilityInfo()
      );
    },
    findSelfSelectors: function (e) {
      var t,
        i,
        n = [];
      for (t = 0; t < e.length; t++)
        (i = e[t].elements),
          t > 0 &&
            i.length &&
            "" === i[0].combinator.value &&
            (i[0].combinator.value = " "),
          (n = n.concat(e[t].elements));
      (this.selfSelectors = [new se(n)]),
        this.selfSelectors[0].copyVisibilityInfo(this.visibilityInfo());
    }
  })),
    (Te.next_id = 0);
  var ze = function (e, t, i) {
    (this.variable = e),
      (this._index = t),
      (this._fileInfo = i),
      (this.allowRoot = !0);
  };
  ze.prototype = Object.assign(new u(), {
    type: "VariableCall",
    eval: function (e) {
      var t,
        i = new Ae(this.variable, this.getIndex(), this.fileInfo()).eval(e),
        n = new V({
          message: "Could not evaluate variable call " + this.variable
        });
      if (!i.ruleset) {
        if (i.rules) t = i;
        else if (Array.isArray(i)) t = new me("", i);
        else {
          if (!Array.isArray(i.value)) throw n;
          t = new me("", i.value);
        }
        i = new ye(t);
      }
      if (i.ruleset) return i.callEval(e);
      throw n;
    }
  });
  var Ge = function (e, t, i, n) {
    (this.value = e),
      (this.lookups = t),
      (this._index = i),
      (this._fileInfo = n);
  };
  Ge.prototype = Object.assign(new u(), {
    type: "NamespaceValue",
    eval: function (e) {
      var t,
        i,
        n = this.value.eval(e);
      for (t = 0; t < this.lookups.length; t++) {
        if (
          ((i = this.lookups[t]),
          Array.isArray(n) && (n = new me([new se()], n)),
          "" === i)
        )
          n = n.lastDeclaration();
        else if ("@" === i.charAt(0)) {
          if (
            ("@" === i.charAt(1) &&
              (i = "@" + new Ae(i.substr(1)).eval(e).value),
            n.variables && (n = n.variable(i)),
            !n)
          )
            throw {
              type: "Name",
              message: "variable " + i + " not found",
              filename: this.fileInfo().filename,
              index: this.getIndex()
            };
        } else {
          if (
            ((i =
              "$@" === i.substring(0, 2)
                ? "$" + new Ae(i.substr(1)).eval(e).value
                : "$" === i.charAt(0)
                ? i
                : "$" + i),
            n.properties && (n = n.property(i)),
            !n)
          )
            throw {
              type: "Name",
              message: 'property "' + i.substr(1) + '" not found',
              filename: this.fileInfo().filename,
              index: this.getIndex()
            };
          n = n[n.length - 1];
        }
        n.value && (n = n.eval(e).value), n.ruleset && (n = n.ruleset.eval(e));
      }
      return n;
    }
  });
  var We = function (e, t, i, n, r, s, o) {
    (this.name = e || "anonymous mixin"),
      (this.selectors = [
        new se([new m(null, e, !1, this._index, this._fileInfo)])
      ]),
      (this.params = t),
      (this.condition = n),
      (this.variadic = r),
      (this.arity = t.length),
      (this.rules = i),
      (this._lookups = {});
    var a = [];
    (this.required = t.reduce(function (e, t) {
      return !t.name || (t.name && !t.value) ? e + 1 : (a.push(t.name), e);
    }, 0)),
      (this.optionalParameters = a),
      (this.frames = s),
      this.copyVisibilityInfo(o),
      (this.allowRoot = !0);
  };
  We.prototype = Object.assign(new me(), {
    type: "MixinDefinition",
    evalFirst: !0,
    accept: function (e) {
      this.params &&
        this.params.length &&
        (this.params = e.visitArray(this.params)),
        (this.rules = e.visitArray(this.rules)),
        this.condition && (this.condition = e.visit(this.condition));
    },
    evalParams: function (e, t, i, n) {
      var r,
        s,
        o,
        a,
        l,
        u,
        c,
        h,
        f = new me(null, null),
        p = k(this.params),
        v = 0;
      if (
        (t.frames &&
          t.frames[0] &&
          t.frames[0].functionRegistry &&
          (f.functionRegistry = t.frames[0].functionRegistry.inherit()),
        (t = new D.Eval(t, [f].concat(t.frames))),
        i)
      )
        for (v = (i = k(i)).length, o = 0; o < v; o++)
          if ((u = (s = i[o]) && s.name)) {
            for (c = !1, a = 0; a < p.length; a++)
              if (!n[a] && u === p[a].name) {
                (n[a] = s.value.eval(e)),
                  f.prependRule(new ce(u, s.value.eval(e))),
                  (c = !0);
                break;
              }
            if (c) {
              i.splice(o, 1), o--;
              continue;
            }
            throw {
              type: "Runtime",
              message:
                "Named argument for " +
                this.name +
                " " +
                i[o].name +
                " not found"
            };
          }
      for (h = 0, o = 0; o < p.length; o++)
        if (!n[o]) {
          if (((s = i && i[h]), (u = p[o].name)))
            if (p[o].variadic) {
              for (r = [], a = h; a < v; a++) r.push(i[a].value.eval(e));
              f.prependRule(new ce(u, new Ce(r).eval(e)));
            } else {
              if ((l = s && s.value))
                l = Array.isArray(l) ? new ye(new me("", l)) : l.eval(e);
              else {
                if (!p[o].value)
                  throw {
                    type: "Runtime",
                    message:
                      "wrong number of arguments for " +
                      this.name +
                      " (" +
                      v +
                      " for " +
                      this.arity +
                      ")"
                  };
                (l = p[o].value.eval(t)), f.resetCache();
              }
              f.prependRule(new ce(u, l)), (n[o] = l);
            }
          if (p[o].variadic && i)
            for (a = h; a < v; a++) n[a] = i[a].value.eval(e);
          h++;
        }
      return f;
    },
    makeImportant: function () {
      var e = this.rules
        ? this.rules.map(function (e) {
            return e.makeImportant ? e.makeImportant(!0) : e;
          })
        : this.rules;
      return new We(
        this.name,
        this.params,
        e,
        this.condition,
        this.variadic,
        this.frames
      );
    },
    eval: function (e) {
      return new We(
        this.name,
        this.params,
        this.rules,
        this.condition,
        this.variadic,
        this.frames || k(e.frames)
      );
    },
    evalCall: function (e, t, i) {
      var n,
        r,
        s = [],
        o = this.frames ? this.frames.concat(e.frames) : e.frames,
        a = this.evalParams(e, new D.Eval(e, o), t, s);
      return (
        a.prependRule(new ce("@arguments", new Ce(s).eval(e))),
        (n = k(this.rules)),
        ((r = new me(null, n)).originalRuleset = this),
        (r = r.eval(new D.Eval(e, [this, a].concat(o)))),
        i && (r = r.makeImportant()),
        r
      );
    },
    matchCondition: function (e, t) {
      return !(
        this.condition &&
        !this.condition.eval(
          new D.Eval(
            t,
            [
              this.evalParams(
                t,
                new D.Eval(
                  t,
                  this.frames ? this.frames.concat(t.frames) : t.frames
                ),
                e,
                []
              )
            ]
              .concat(this.frames || [])
              .concat(t.frames)
          )
        )
      );
    },
    matchArgs: function (e, t) {
      var i,
        n = (e && e.length) || 0,
        r = this.optionalParameters,
        s = e
          ? e.reduce(function (e, t) {
              return r.indexOf(t.name) < 0 ? e + 1 : e;
            }, 0)
          : 0;
      if (this.variadic) {
        if (s < this.required - 1) return !1;
      } else {
        if (s < this.required) return !1;
        if (n > this.params.length) return !1;
      }
      i = Math.min(s, this.arity);
      for (var o = 0; o < i; o++)
        if (
          !this.params[o].name &&
          !this.params[o].variadic &&
          e[o].value.eval(t).toCSS() != this.params[o].value.eval(t).toCSS()
        )
          return !1;
      return !0;
    }
  });
  var Je = function (e, t, i, n, r) {
    (this.selector = new se(e)),
      (this.arguments = t || []),
      (this._index = i),
      (this._fileInfo = n),
      (this.important = r),
      (this.allowRoot = !0),
      this.setParent(this.selector, this);
  };
  Je.prototype = Object.assign(new u(), {
    type: "MixinCall",
    accept: function (e) {
      this.selector && (this.selector = e.visit(this.selector)),
        this.arguments.length &&
          (this.arguments = e.visitArray(this.arguments));
    },
    eval: function (e) {
      var t,
        i,
        n,
        r,
        s,
        o,
        a,
        l,
        u,
        c,
        h,
        f,
        p,
        v,
        d,
        m = [],
        g = [],
        y = !1,
        b = [],
        w = [];
      function x(t, i) {
        var n, r, s;
        for (n = 0; n < 2; n++) {
          for (w[n] = !0, de.value(n), r = 0; r < i.length && w[n]; r++)
            (s = i[r]).matchCondition &&
              (w[n] = w[n] && s.matchCondition(null, e));
          t.matchCondition && (w[n] = w[n] && t.matchCondition(m, e));
        }
        return w[0] || w[1] ? (w[0] != w[1] ? (w[1] ? 1 : 2) : 0) : -1;
      }
      for (
        this.selector = this.selector.eval(e), o = 0;
        o < this.arguments.length;
        o++
      )
        if (
          ((s = (r = this.arguments[o]).value.eval(e)),
          r.expand && Array.isArray(s.value))
        )
          for (s = s.value, a = 0; a < s.length; a++) m.push({ value: s[a] });
        else m.push({ name: r.name, value: s });
      for (
        d = function (t) {
          return t.matchArgs(null, e);
        },
          o = 0;
        o < e.frames.length;
        o++
      )
        if ((t = e.frames[o].find(this.selector, null, d)).length > 0) {
          for (c = !0, a = 0; a < t.length; a++) {
            for (
              i = t[a].rule, n = t[a].path, u = !1, l = 0;
              l < e.frames.length;
              l++
            )
              if (
                !(i instanceof We) &&
                i === (e.frames[l].originalRuleset || e.frames[l])
              ) {
                u = !0;
                break;
              }
            u ||
              (i.matchArgs(m, e) &&
                (-1 !== (h = { mixin: i, group: x(i, n) }).group && b.push(h),
                (y = !0)));
          }
          for (de.reset(), p = [0, 0, 0], a = 0; a < b.length; a++)
            p[b[a].group]++;
          if (p[0] > 0) f = 2;
          else if (((f = 1), p[1] + p[2] > 1))
            throw {
              type: "Runtime",
              message:
                "Ambiguous use of `default()` found when matching for `" +
                this.format(m) +
                "`",
              index: this.getIndex(),
              filename: this.fileInfo().filename
            };
          for (a = 0; a < b.length; a++)
            if (0 === (h = b[a].group) || h === f)
              try {
                (i = b[a].mixin) instanceof We ||
                  ((v = i.originalRuleset || i),
                  ((i = new We(
                    "",
                    [],
                    i.rules,
                    null,
                    !1,
                    null,
                    v.visibilityInfo()
                  )).originalRuleset = v));
                var S = i.evalCall(e, m, this.important).rules;
                this._setVisibilityToReplacement(S),
                  Array.prototype.push.apply(g, S);
              } catch (e) {
                throw {
                  message: e.message,
                  index: this.getIndex(),
                  filename: this.fileInfo().filename,
                  stack: e.stack
                };
              }
          if (y) return g;
        }
      throw c
        ? {
            type: "Runtime",
            message:
              "No matching definition was found for `" + this.format(m) + "`",
            index: this.getIndex(),
            filename: this.fileInfo().filename
          }
        : {
            type: "Name",
            message: this.selector.toCSS().trim() + " is undefined",
            index: this.getIndex(),
            filename: this.fileInfo().filename
          };
    },
    _setVisibilityToReplacement: function (e) {
      var t;
      if (this.blocksVisibility())
        for (t = 0; t < e.length; t++) e[t].addVisibilityBlock();
    },
    format: function (e) {
      return (
        this.selector.toCSS().trim() +
        "(" +
        (e
          ? e
              .map(function (e) {
                var t = "";
                return (
                  e.name && (t += e.name + ":"),
                  e.value.toCSS ? (t += e.value.toCSS()) : (t += "???"),
                  t
                );
              })
              .join(", ")
          : "") +
        ")"
      );
    }
  });
  var He = {
      Node: u,
      Color: c,
      AtRule: ge,
      DetachedRuleset: ye,
      Operation: Se,
      Dimension: we,
      Unit: be,
      Keyword: ae,
      Variable: Ae,
      Property: Pe,
      Ruleset: me,
      Element: m,
      Attribute: Me,
      Combinator: d,
      Selector: se,
      Quoted: Ee,
      Expression: Ce,
      Declaration: ce,
      Call: _e,
      URL: Re,
      Import: Fe,
      Comment: ve,
      Anonymous: le,
      Value: oe,
      JavaScript: Le,
      Assignment: je,
      Condition: Ne,
      Paren: p,
      Media: Ve,
      Container: Be,
      QueryInParens: De,
      UnicodeDescriptor: Ue,
      Negative: qe,
      Extend: Te,
      VariableCall: ze,
      NamespaceValue: Ge,
      mixin: { Call: Je, Definition: We }
    },
    Qe = (function () {
      function e() {}
      return (
        (e.prototype.getPath = function (e) {
          var t = e.lastIndexOf("?");
          return (
            t > 0 && (e = e.slice(0, t)),
            (t = e.lastIndexOf("/")) < 0 && (t = e.lastIndexOf("\\")),
            t < 0 ? "" : e.slice(0, t + 1)
          );
        }),
        (e.prototype.tryAppendExtension = function (e, t) {
          return /(\.[a-z]*$)|([?;].*)$/.test(e) ? e : e + t;
        }),
        (e.prototype.tryAppendLessExtension = function (e) {
          return this.tryAppendExtension(e, ".less");
        }),
        (e.prototype.supportsSync = function () {
          return !1;
        }),
        (e.prototype.alwaysMakePathsAbsolute = function () {
          return !1;
        }),
        (e.prototype.isPathAbsolute = function (e) {
          return /^(?:[a-z-]+:|\/|\\|#)/i.test(e);
        }),
        (e.prototype.join = function (e, t) {
          return e ? e + t : t;
        }),
        (e.prototype.pathDiff = function (e, t) {
          var i,
            n,
            r,
            s,
            o = this.extractUrlParts(e),
            a = this.extractUrlParts(t),
            l = "";
          if (o.hostPart !== a.hostPart) return "";
          for (
            n = Math.max(a.directories.length, o.directories.length), i = 0;
            i < n && a.directories[i] === o.directories[i];
            i++
          );
          for (
            s = a.directories.slice(i), r = o.directories.slice(i), i = 0;
            i < s.length - 1;
            i++
          )
            l += "../";
          for (i = 0; i < r.length - 1; i++) l += r[i] + "/";
          return l;
        }),
        (e.prototype.extractUrlParts = function (e, t) {
          var i,
            n,
            r =
              /^((?:[a-z-]+:)?\/{2}(?:[^/?#]*\/)|([/\\]))?((?:[^/\\?#]*[/\\])*)([^/\\?#]*)([#?].*)?$/i,
            s = e.match(r),
            o = {},
            a = [],
            l = [];
          if (!s) throw new Error("Could not parse sheet href - '" + e + "'");
          if (t && (!s[1] || s[2])) {
            if (!(n = t.match(r)))
              throw new Error("Could not parse page url - '" + t + "'");
            (s[1] = s[1] || n[1] || ""), s[2] || (s[3] = n[3] + s[3]);
          }
          if (s[3])
            for (
              a = s[3].replace(/\\/g, "/").split("/"), i = 0;
              i < a.length;
              i++
            )
              ".." === a[i] ? l.pop() : "." !== a[i] && l.push(a[i]);
          return (
            (o.hostPart = s[1]),
            (o.directories = l),
            (o.rawPath = (s[1] || "") + a.join("/")),
            (o.path = (s[1] || "") + l.join("/")),
            (o.filename = s[4]),
            (o.fileUrl = o.path + (s[4] || "")),
            (o.url = o.fileUrl + (s[5] || "")),
            o
          );
        }),
        e
      );
    })(),
    Ke = (function () {
      function e() {
        this.require = function () {
          return null;
        };
      }
      return (
        (e.prototype.evalPlugin = function (e, t, i, n, r) {
          var s, o, a, l, u, c;
          (l = t.pluginManager),
            r && (u = "string" == typeof r ? r : r.filename);
          var h = new this.less.FileManager().extractUrlParts(u).filename;
          if (u && (o = l.get(u))) {
            if ((c = this.trySetOptions(o, u, h, n))) return c;
            try {
              o.use && o.use.call(this.context, o);
            } catch (e) {
              return (
                (e.message = e.message || "Error during @plugin call"),
                new V(e, i, u)
              );
            }
            return o;
          }
          (a = { exports: {}, pluginManager: l, fileInfo: r }),
            (s = te.create());
          try {
            new Function(
              "module",
              "require",
              "registerPlugin",
              "functions",
              "tree",
              "less",
              "fileInfo",
              e
            )(
              a,
              this.require(u),
              function (e) {
                o = e;
              },
              s,
              this.less.tree,
              this.less,
              r
            );
          } catch (e) {
            return new V(e, i, u);
          }
          if (
            (o || (o = a.exports),
            (o = this.validatePlugin(o, u, h)) instanceof V)
          )
            return o;
          if (!o) return new V({ message: "Not a valid plugin" }, i, u);
          if (
            ((o.imports = i),
            (o.filename = u),
            (!o.minVersion || this.compareVersion("3.0.0", o.minVersion) < 0) &&
              (c = this.trySetOptions(o, u, h, n)))
          )
            return c;
          if (
            (l.addPlugin(o, r.filename, s),
            (o.functions = s.getLocalFunctions()),
            (c = this.trySetOptions(o, u, h, n)))
          )
            return c;
          try {
            o.use && o.use.call(this.context, o);
          } catch (e) {
            return (
              (e.message = e.message || "Error during @plugin call"),
              new V(e, i, u)
            );
          }
          return o;
        }),
        (e.prototype.trySetOptions = function (e, t, i, n) {
          if (n && !e.setOptions)
            return new V({
              message:
                "Options have been provided but the plugin " +
                i +
                " does not support any options."
            });
          try {
            e.setOptions && e.setOptions(n);
          } catch (e) {
            return new V(e);
          }
        }),
        (e.prototype.validatePlugin = function (e, t, i) {
          return e
            ? ("function" == typeof e && (e = new e()),
              e.minVersion &&
              this.compareVersion(e.minVersion, this.less.version) < 0
                ? new V({
                    message:
                      "Plugin " +
                      i +
                      " requires version " +
                      this.versionToString(e.minVersion)
                  })
                : e)
            : null;
        }),
        (e.prototype.compareVersion = function (e, t) {
          "string" == typeof e &&
            (e = e.match(/^(\d+)\.?(\d+)?\.?(\d+)?/)).shift();
          for (var i = 0; i < e.length; i++)
            if (e[i] !== t[i]) return parseInt(e[i]) > parseInt(t[i]) ? -1 : 1;
          return 0;
        }),
        (e.prototype.versionToString = function (e) {
          for (var t = "", i = 0; i < e.length; i++) t += (t ? "." : "") + e[i];
          return t;
        }),
        (e.prototype.printUsage = function (e) {
          for (var t = 0; t < e.length; t++) {
            var i = e[t];
            i.printUsage && i.printUsage();
          }
        }),
        e
      );
    })();
  function Ze(e, t, i, n) {
    return t.eval(e) ? i.eval(e) : n ? n.eval(e) : new le();
  }
  function Xe(e, t) {
    try {
      return t.eval(e), ae.True;
    } catch (e) {
      return ae.False;
    }
  }
  (Ze.evalArgs = !1), (Xe.evalArgs = !1);
  var Ye,
    et = {
      isdefined: Xe,
      boolean: function (e) {
        return e ? ae.True : ae.False;
      },
      if: Ze
    };
  function tt(e) {
    return Math.min(1, Math.max(0, e));
  }
  function it(e, t) {
    var i = Ye.hsla(t.h, t.s, t.l, t.a);
    if (i)
      return (
        e.value && /^(rgb|hsl)/.test(e.value)
          ? (i.value = e.value)
          : (i.value = "rgb"),
        i
      );
  }
  function nt(e) {
    if (e.toHSL) return e.toHSL();
    throw new Error("Argument cannot be evaluated to a color");
  }
  function rt(e) {
    if (e.toHSV) return e.toHSV();
    throw new Error("Argument cannot be evaluated to a color");
  }
  function st(e) {
    if (e instanceof we)
      return parseFloat(e.unit.is("%") ? e.value / 100 : e.value);
    if ("number" == typeof e) return e;
    throw {
      type: "Argument",
      message: "color functions take numbers as parameters"
    };
  }
  var ot = (Ye = {
    rgb: function (e, t, i) {
      var n = 1;
      if (e instanceof Ce) {
        var r = e.value;
        if (((e = r[0]), (t = r[1]), (i = r[2]) instanceof Se)) {
          var s = i;
          (i = s.operands[0]), (n = s.operands[1]);
        }
      }
      var o = Ye.rgba(e, t, i, n);
      if (o) return (o.value = "rgb"), o;
    },
    rgba: function (e, t, i, n) {
      try {
        if (e instanceof c)
          return (n = t ? st(t) : e.alpha), new c(e.rgb, n, "rgba");
        var r = [e, t, i].map(function (e) {
          return (
            (i = 255),
            (t = e) instanceof we && t.unit.is("%")
              ? parseFloat((t.value * i) / 100)
              : st(t)
          );
          var t, i;
        });
        return (n = st(n)), new c(r, n, "rgba");
      } catch (e) {}
    },
    hsl: function (e, t, i) {
      var n = 1;
      if (e instanceof Ce) {
        var r = e.value;
        if (((e = r[0]), (t = r[1]), (i = r[2]) instanceof Se)) {
          var s = i;
          (i = s.operands[0]), (n = s.operands[1]);
        }
      }
      var o = Ye.hsla(e, t, i, n);
      if (o) return (o.value = "hsl"), o;
    },
    hsla: function (e, t, i, n) {
      var r, s;
      function o(e) {
        return 6 * (e = e < 0 ? e + 1 : e > 1 ? e - 1 : e) < 1
          ? r + (s - r) * e * 6
          : 2 * e < 1
          ? s
          : 3 * e < 2
          ? r + (s - r) * (2 / 3 - e) * 6
          : r;
      }
      try {
        if (e instanceof c)
          return (n = t ? st(t) : e.alpha), new c(e.rgb, n, "hsla");
        (e = (st(e) % 360) / 360),
          (t = tt(st(t))),
          (i = tt(st(i))),
          (n = tt(st(n))),
          (r = 2 * i - (s = i <= 0.5 ? i * (t + 1) : i + t - i * t));
        var a = [255 * o(e + 1 / 3), 255 * o(e), 255 * o(e - 1 / 3)];
        return (n = st(n)), new c(a, n, "hsla");
      } catch (e) {}
    },
    hsv: function (e, t, i) {
      return Ye.hsva(e, t, i, 1);
    },
    hsva: function (e, t, i, n) {
      var r, s;
      (e = ((st(e) % 360) / 360) * 360), (t = st(t)), (i = st(i)), (n = st(n));
      var o = [
          i,
          i * (1 - t),
          i * (1 - (s = e / 60 - (r = Math.floor((e / 60) % 6))) * t),
          i * (1 - (1 - s) * t)
        ],
        a = [
          [0, 3, 1],
          [2, 0, 1],
          [1, 0, 3],
          [1, 2, 0],
          [3, 1, 0],
          [0, 1, 2]
        ];
      return Ye.rgba(255 * o[a[r][0]], 255 * o[a[r][1]], 255 * o[a[r][2]], n);
    },
    hue: function (e) {
      return new we(nt(e).h);
    },
    saturation: function (e) {
      return new we(100 * nt(e).s, "%");
    },
    lightness: function (e) {
      return new we(100 * nt(e).l, "%");
    },
    hsvhue: function (e) {
      return new we(rt(e).h);
    },
    hsvsaturation: function (e) {
      return new we(100 * rt(e).s, "%");
    },
    hsvvalue: function (e) {
      return new we(100 * rt(e).v, "%");
    },
    red: function (e) {
      return new we(e.rgb[0]);
    },
    green: function (e) {
      return new we(e.rgb[1]);
    },
    blue: function (e) {
      return new we(e.rgb[2]);
    },
    alpha: function (e) {
      return new we(nt(e).a);
    },
    luma: function (e) {
      return new we(e.luma() * e.alpha * 100, "%");
    },
    luminance: function (e) {
      var t =
        (0.2126 * e.rgb[0]) / 255 +
        (0.7152 * e.rgb[1]) / 255 +
        (0.0722 * e.rgb[2]) / 255;
      return new we(t * e.alpha * 100, "%");
    },
    saturate: function (e, t, i) {
      if (!e.rgb) return null;
      var n = nt(e);
      return (
        void 0 !== i && "relative" === i.value
          ? (n.s += (n.s * t.value) / 100)
          : (n.s += t.value / 100),
        (n.s = tt(n.s)),
        it(e, n)
      );
    },
    desaturate: function (e, t, i) {
      var n = nt(e);
      return (
        void 0 !== i && "relative" === i.value
          ? (n.s -= (n.s * t.value) / 100)
          : (n.s -= t.value / 100),
        (n.s = tt(n.s)),
        it(e, n)
      );
    },
    lighten: function (e, t, i) {
      var n = nt(e);
      return (
        void 0 !== i && "relative" === i.value
          ? (n.l += (n.l * t.value) / 100)
          : (n.l += t.value / 100),
        (n.l = tt(n.l)),
        it(e, n)
      );
    },
    darken: function (e, t, i) {
      var n = nt(e);
      return (
        void 0 !== i && "relative" === i.value
          ? (n.l -= (n.l * t.value) / 100)
          : (n.l -= t.value / 100),
        (n.l = tt(n.l)),
        it(e, n)
      );
    },
    fadein: function (e, t, i) {
      var n = nt(e);
      return (
        void 0 !== i && "relative" === i.value
          ? (n.a += (n.a * t.value) / 100)
          : (n.a += t.value / 100),
        (n.a = tt(n.a)),
        it(e, n)
      );
    },
    fadeout: function (e, t, i) {
      var n = nt(e);
      return (
        void 0 !== i && "relative" === i.value
          ? (n.a -= (n.a * t.value) / 100)
          : (n.a -= t.value / 100),
        (n.a = tt(n.a)),
        it(e, n)
      );
    },
    fade: function (e, t) {
      var i = nt(e);
      return (i.a = t.value / 100), (i.a = tt(i.a)), it(e, i);
    },
    spin: function (e, t) {
      var i = nt(e),
        n = (i.h + t.value) % 360;
      return (i.h = n < 0 ? 360 + n : n), it(e, i);
    },
    mix: function (e, t, i) {
      i || (i = new we(50));
      var n = i.value / 100,
        r = 2 * n - 1,
        s = nt(e).a - nt(t).a,
        o = ((r * s == -1 ? r : (r + s) / (1 + r * s)) + 1) / 2,
        a = 1 - o,
        l = [
          e.rgb[0] * o + t.rgb[0] * a,
          e.rgb[1] * o + t.rgb[1] * a,
          e.rgb[2] * o + t.rgb[2] * a
        ],
        u = e.alpha * n + t.alpha * (1 - n);
      return new c(l, u);
    },
    greyscale: function (e) {
      return Ye.desaturate(e, new we(100));
    },
    contrast: function (e, t, i, n) {
      if (!e.rgb) return null;
      if (
        (void 0 === i && (i = Ye.rgba(255, 255, 255, 1)),
        void 0 === t && (t = Ye.rgba(0, 0, 0, 1)),
        t.luma() > i.luma())
      ) {
        var r = i;
        (i = t), (t = r);
      }
      return (n = void 0 === n ? 0.43 : st(n)), e.luma() < n ? i : t;
    },
    argb: function (e) {
      return new le(e.toARGB());
    },
    color: function (e) {
      if (
        e instanceof Ee &&
        /^#([A-Fa-f0-9]{8}|[A-Fa-f0-9]{6}|[A-Fa-f0-9]{3,4})$/i.test(e.value)
      ) {
        var t = e.value.slice(1);
        return new c(t, void 0, "#" + t);
      }
      if (e instanceof c || (e = c.fromKeyword(e.value)))
        return (e.value = void 0), e;
      throw {
        type: "Argument",
        message:
          "argument must be a color keyword or 3|4|6|8 digit hex e.g. #FFF"
      };
    },
    tint: function (e, t) {
      return Ye.mix(Ye.rgb(255, 255, 255), e, t);
    },
    shade: function (e, t) {
      return Ye.mix(Ye.rgb(0, 0, 0), e, t);
    }
  });
  function at(e, t, i) {
    var n,
      r,
      s,
      o,
      a = t.alpha,
      l = i.alpha,
      u = [];
    s = l + a * (1 - l);
    for (var h = 0; h < 3; h++)
      (o = e((n = t.rgb[h] / 255), (r = i.rgb[h] / 255))),
        s && (o = (l * r + a * (n - l * (n + r - o))) / s),
        (u[h] = 255 * o);
    return new c(u, s);
  }
  var lt = {
    multiply: function (e, t) {
      return e * t;
    },
    screen: function (e, t) {
      return e + t - e * t;
    },
    overlay: function (e, t) {
      return (e *= 2) <= 1 ? lt.multiply(e, t) : lt.screen(e - 1, t);
    },
    softlight: function (e, t) {
      var i = 1,
        n = e;
      return (
        t > 0.5 &&
          ((n = 1),
          (i = e > 0.25 ? Math.sqrt(e) : ((16 * e - 12) * e + 4) * e)),
        e - (1 - 2 * t) * n * (i - e)
      );
    },
    hardlight: function (e, t) {
      return lt.overlay(t, e);
    },
    difference: function (e, t) {
      return Math.abs(e - t);
    },
    exclusion: function (e, t) {
      return e + t - 2 * e * t;
    },
    average: function (e, t) {
      return (e + t) / 2;
    },
    negation: function (e, t) {
      return 1 - Math.abs(e + t - 1);
    }
  };
  for (var ut in lt) lt.hasOwnProperty(ut) && (at[ut] = at.bind(null, lt[ut]));
  var ct = function (e) {
      return Array.isArray(e.value) ? e.value : Array(e);
    },
    ht = {
      _SELF: function (e) {
        return e;
      },
      "~": function () {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        return 1 === e.length ? e[0] : new oe(e);
      },
      extract: function (e, t) {
        return (t = t.value - 1), ct(e)[t];
      },
      length: function (e) {
        return new we(ct(e).length);
      },
      range: function (e, t, i) {
        var n,
          r,
          s = 1,
          o = [];
        t ? ((r = t), (n = e.value), i && (s = i.value)) : ((n = 1), (r = e));
        for (var a = n; a <= r.value; a += s) o.push(new we(a, r.unit));
        return new Ce(o);
      },
      each: function (e, t) {
        var i,
          n,
          r = this,
          s = [],
          o = function (e) {
            return e instanceof u ? e.eval(r.context) : e;
          };
        n =
          !e.value || e instanceof Ee
            ? e.ruleset
              ? o(e.ruleset).rules
              : e.rules
              ? e.rules.map(o)
              : Array.isArray(e)
              ? e.map(o)
              : [o(e)]
            : Array.isArray(e.value)
            ? e.value.map(o)
            : [o(e.value)];
        var a = "@value",
          l = "@key",
          c = "@index";
        t.params
          ? ((a = t.params[0] && t.params[0].name),
            (l = t.params[1] && t.params[1].name),
            (c = t.params[2] && t.params[2].name),
            (t = t.rules))
          : (t = t.ruleset);
        for (var h = 0; h < n.length; h++) {
          var f = void 0,
            p = void 0,
            v = n[h];
          v instanceof ce
            ? ((f = "string" == typeof v.name ? v.name : v.name[0].value),
              (p = v.value))
            : ((f = new we(h + 1)), (p = v)),
            v instanceof ve ||
              ((i = t.rules.slice(0)),
              a &&
                i.push(new ce(a, p, !1, !1, this.index, this.currentFileInfo)),
              c &&
                i.push(
                  new ce(
                    c,
                    new we(h + 1),
                    !1,
                    !1,
                    this.index,
                    this.currentFileInfo
                  )
                ),
              l &&
                i.push(new ce(l, f, !1, !1, this.index, this.currentFileInfo)),
              s.push(
                new me(
                  [new se([new m("", "&")])],
                  i,
                  t.strictImports,
                  t.visibilityInfo()
                )
              ));
        }
        return new me(
          [new se([new m("", "&")])],
          s,
          t.strictImports,
          t.visibilityInfo()
        ).eval(this.context);
      }
    },
    ft = function (e, t, i) {
      if (!(i instanceof we))
        throw { type: "Argument", message: "argument must be a number" };
      return (
        null === t ? (t = i.unit) : (i = i.unify()),
        new we(e(parseFloat(i.value)), t)
      );
    },
    pt = {
      ceil: null,
      floor: null,
      sqrt: null,
      abs: null,
      tan: "",
      sin: "",
      cos: "",
      atan: "rad",
      asin: "rad",
      acos: "rad"
    };
  for (var vt in pt)
    pt.hasOwnProperty(vt) && (pt[vt] = ft.bind(null, Math[vt], pt[vt]));
  pt.round = function (e, t) {
    var i = void 0 === t ? 0 : t.value;
    return ft(
      function (e) {
        return e.toFixed(i);
      },
      null,
      e
    );
  };
  var dt = function (e, t) {
      var i,
        n,
        r,
        s,
        o,
        a,
        l,
        u,
        c = this;
      switch ((t = Array.prototype.slice.call(t)).length) {
        case 0:
          throw { type: "Argument", message: "one or more arguments required" };
      }
      var h = [],
        f = {};
      for (i = 0; i < t.length; i++)
        if ((r = t[i]) instanceof we)
          if (
            ((l =
              ("" !==
                (a =
                  "" ===
                    (s =
                      "" === r.unit.toString() && void 0 !== u
                        ? new we(r.value, u).unify()
                        : r.unify()).unit.toString() && void 0 !== l
                    ? l
                    : s.unit.toString()) &&
                void 0 === l) ||
              ("" !== a && "" === h[0].unify().unit.toString())
                ? a
                : l),
            (u = "" !== a && void 0 === u ? r.unit.toString() : u),
            void 0 !==
              (n = void 0 !== f[""] && "" !== a && a === l ? f[""] : f[a]))
          )
            (o =
              "" === h[n].unit.toString() && void 0 !== u
                ? new we(h[n].value, u).unify()
                : h[n].unify()),
              ((e && s.value < o.value) || (!e && s.value > o.value)) &&
                (h[n] = r);
          else {
            if (void 0 !== l && a !== l)
              throw { type: "Argument", message: "incompatible types" };
            (f[a] = h.length), h.push(r);
          }
        else
          Array.isArray(t[i].value) &&
            Array.prototype.push.apply(
              t,
              Array.prototype.slice.call(t[i].value)
            );
      return 1 == h.length
        ? h[0]
        : ((t = h
            .map(function (e) {
              return e.toCSS(c.context);
            })
            .join(this.context.compress ? "," : ", ")),
          new le((e ? "min" : "max") + "(" + t + ")"));
    },
    mt = {
      min: function () {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        try {
          return dt.call(this, !0, e);
        } catch (e) {}
      },
      max: function () {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        try {
          return dt.call(this, !1, e);
        } catch (e) {}
      },
      convert: function (e, t) {
        return e.convertTo(t.value);
      },
      pi: function () {
        return new we(Math.PI);
      },
      mod: function (e, t) {
        return new we(e.value % t.value, e.unit);
      },
      pow: function (e, t) {
        if ("number" == typeof e && "number" == typeof t)
          (e = new we(e)), (t = new we(t));
        else if (!(e instanceof we && t instanceof we))
          throw { type: "Argument", message: "arguments must be numbers" };
        return new we(Math.pow(e.value, t.value), e.unit);
      },
      percentage: function (e) {
        return ft(
          function (e) {
            return 100 * e;
          },
          "%",
          e
        );
      }
    },
    gt = {
      e: function (e) {
        return new Ee('"', e instanceof Le ? e.evaluated : e.value, !0);
      },
      escape: function (e) {
        return new le(
          encodeURI(e.value)
            .replace(/=/g, "%3D")
            .replace(/:/g, "%3A")
            .replace(/#/g, "%23")
            .replace(/;/g, "%3B")
            .replace(/\(/g, "%28")
            .replace(/\)/g, "%29")
        );
      },
      replace: function (e, t, i, n) {
        var r = e.value;
        return (
          (i = "Quoted" === i.type ? i.value : i.toCSS()),
          (r = r.replace(new RegExp(t.value, n ? n.value : ""), i)),
          new Ee(e.quote || "", r, e.escaped)
        );
      },
      "%": function (e) {
        for (
          var t = Array.prototype.slice.call(arguments, 1),
            i = e.value,
            n = function (e) {
              i = i.replace(/%[sda]/i, function (i) {
                var n =
                  "Quoted" === t[e].type && i.match(/s/i)
                    ? t[e].value
                    : t[e].toCSS();
                return i.match(/[A-Z]$/) ? encodeURIComponent(n) : n;
              });
            },
            r = 0;
          r < t.length;
          r++
        )
          n(r);
        return (i = i.replace(/%%/g, "%")), new Ee(e.quote || "", i, e.escaped);
      }
    },
    yt = function (e, t) {
      return e instanceof t ? ae.True : ae.False;
    },
    bt = function (e, t) {
      if (void 0 === t)
        throw {
          type: "Argument",
          message: "missing the required second argument to isunit."
        };
      if ("string" != typeof (t = "string" == typeof t.value ? t.value : t))
        throw {
          type: "Argument",
          message: "Second argument to isunit should be a unit or a string."
        };
      return e instanceof we && e.unit.is(t) ? ae.True : ae.False;
    },
    wt = {
      isruleset: function (e) {
        return yt(e, ye);
      },
      iscolor: function (e) {
        return yt(e, c);
      },
      isnumber: function (e) {
        return yt(e, we);
      },
      isstring: function (e) {
        return yt(e, Ee);
      },
      iskeyword: function (e) {
        return yt(e, ae);
      },
      isurl: function (e) {
        return yt(e, Re);
      },
      ispixel: function (e) {
        return bt(e, "px");
      },
      ispercentage: function (e) {
        return bt(e, "%");
      },
      isem: function (e) {
        return bt(e, "em");
      },
      isunit: bt,
      unit: function (e, t) {
        if (!(e instanceof we))
          throw {
            type: "Argument",
            message:
              "the first argument to unit must be a number" +
              (e instanceof Se ? ". Have you forgotten parenthesis?" : "")
          };
        return (
          (t = t ? (t instanceof ae ? t.value : t.toCSS()) : ""),
          new we(e.value, t)
        );
      },
      "get-unit": function (e) {
        return new le(e.unit);
      }
    },
    xt = function (e) {
      var t = { functionRegistry: te, functionCaller: ke };
      return (
        te.addMultiple(et),
        te.add("default", de.eval.bind(de)),
        te.addMultiple(ot),
        te.addMultiple(at),
        te.addMultiple(
          (function (e) {
            var t = function (e, t) {
              return new Re(t, e.index, e.currentFileInfo).eval(e.context);
            };
            return {
              "data-uri": function (i, n) {
                n || ((n = i), (i = null));
                var s = i && i.value,
                  o = n.value,
                  a = this.currentFileInfo,
                  l = a.rewriteUrls ? a.currentDirectory : a.entryPath,
                  u = o.indexOf("#"),
                  c = "";
                -1 !== u && ((c = o.slice(u)), (o = o.slice(0, u)));
                var h = _(this.context);
                h.rawBuffer = !0;
                var f = e.getFileManager(o, l, h, e, !0);
                if (!f) return t(this, n);
                var p = !1;
                if (i) p = /;base64$/.test(s);
                else {
                  if ("image/svg+xml" === (s = e.mimeLookup(o))) p = !1;
                  else {
                    var v = e.charsetLookup(s);
                    p = ["US-ASCII", "UTF-8"].indexOf(v) < 0;
                  }
                  p && (s += ";base64");
                }
                var d = f.loadFileSync(o, l, h, e);
                if (!d.contents)
                  return (
                    r.warn(
                      "Skipped data-uri embedding of " +
                        o +
                        " because file not found"
                    ),
                    t(this, n || i)
                  );
                var m = d.contents;
                if (p && !e.encodeBase64) return t(this, n);
                var g =
                  "data:" +
                  s +
                  "," +
                  (m = p ? e.encodeBase64(m) : encodeURIComponent(m)) +
                  c;
                return new Re(
                  new Ee(
                    '"' + g + '"',
                    g,
                    !1,
                    this.index,
                    this.currentFileInfo
                  ),
                  this.index,
                  this.currentFileInfo
                );
              }
            };
          })(e)
        ),
        te.addMultiple(ht),
        te.addMultiple(pt),
        te.addMultiple(mt),
        te.addMultiple(gt),
        te.addMultiple({
          "svg-gradient": function (e) {
            var t,
              i,
              n,
              r,
              s,
              o,
              a,
              l,
              u = "linear",
              h = 'x="0" y="0" width="1" height="1"',
              f = { compress: !1 },
              p = e.toCSS(f);
            function v() {
              throw {
                type: "Argument",
                message:
                  "svg-gradient expects direction, start_color [start_position], [color position,]..., end_color [end_position] or direction, color list"
              };
            }
            switch (
              (2 == arguments.length
                ? (arguments[1].value.length < 2 && v(),
                  (t = arguments[1].value))
                : arguments.length < 3
                ? v()
                : (t = Array.prototype.slice.call(arguments, 1)),
              p)
            ) {
              case "to bottom":
                i = 'x1="0%" y1="0%" x2="0%" y2="100%"';
                break;
              case "to right":
                i = 'x1="0%" y1="0%" x2="100%" y2="0%"';
                break;
              case "to bottom right":
                i = 'x1="0%" y1="0%" x2="100%" y2="100%"';
                break;
              case "to top right":
                i = 'x1="0%" y1="100%" x2="100%" y2="0%"';
                break;
              case "ellipse":
              case "ellipse at center":
                (u = "radial"),
                  (i = 'cx="50%" cy="50%" r="75%"'),
                  (h = 'x="-50" y="-50" width="101" height="101"');
                break;
              default:
                throw {
                  type: "Argument",
                  message:
                    "svg-gradient direction must be 'to bottom', 'to right', 'to bottom right', 'to top right' or 'ellipse at center'"
                };
            }
            for (
              n =
                '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1"><' +
                u +
                'Gradient id="g" ' +
                i +
                ">",
                r = 0;
              r < t.length;
              r += 1
            )
              t[r] instanceof Ce
                ? ((s = t[r].value[0]), (o = t[r].value[1]))
                : ((s = t[r]), (o = void 0)),
                (s instanceof c &&
                  (((0 === r || r + 1 === t.length) && void 0 === o) ||
                    o instanceof we)) ||
                  v(),
                (a = o ? o.toCSS(f) : 0 === r ? "0%" : "100%"),
                (l = s.alpha),
                (n +=
                  '<stop offset="' +
                  a +
                  '" stop-color="' +
                  s.toRGB() +
                  '"' +
                  (l < 1 ? ' stop-opacity="' + l + '"' : "") +
                  "/>");
            return (
              (n +=
                "</" + u + "Gradient><rect " + h + ' fill="url(#g)" /></svg>'),
              (n = encodeURIComponent(n)),
              new Re(
                new Ee(
                  "'" + (n = "data:image/svg+xml," + n) + "'",
                  n,
                  !1,
                  this.index,
                  this.currentFileInfo
                ),
                this.index,
                this.currentFileInfo
              )
            );
          }
        }),
        te.addMultiple(wt),
        t
      );
    };
  function St(e, t) {
    var i,
      n = (t = t || {}).variables,
      r = new D.Eval(t);
    "object" != typeof n ||
      Array.isArray(n) ||
      ((n = Object.keys(n).map(function (e) {
        var t = n[e];
        return (
          t instanceof He.Value ||
            (t instanceof He.Expression || (t = new He.Expression([t])),
            (t = new He.Value([t]))),
          new He.Declaration("@" + e, t, !1, null, 0)
        );
      })),
      (r.frames = [new He.Ruleset(null, n)]));
    var s,
      o,
      a = [
        new Y.JoinSelectorVisitor(),
        new Y.MarkVisibleSelectorsVisitor(!0),
        new Y.ExtendVisitor(),
        new Y.ToCSSVisitor({ compress: Boolean(t.compress) })
      ],
      l = [];
    if (t.pluginManager) {
      o = t.pluginManager.visitor();
      for (var u = 0; u < 2; u++)
        for (o.first(); (s = o.get()); )
          s.isPreEvalVisitor
            ? (0 !== u && -1 !== l.indexOf(s)) || (l.push(s), s.run(e))
            : (0 !== u && -1 !== a.indexOf(s)) ||
              (s.isPreVisitor ? a.unshift(s) : a.push(s));
    }
    i = e.eval(r);
    for (var c = 0; c < a.length; c++) a[c].run(i);
    if (t.pluginManager)
      for (o.first(); (s = o.get()); )
        -1 === a.indexOf(s) && -1 === l.indexOf(s) && s.run(i);
    return i;
  }
  var It,
    Ct = (function () {
      function e(e) {
        (this.less = e),
          (this.visitors = []),
          (this.preProcessors = []),
          (this.postProcessors = []),
          (this.installedPlugins = []),
          (this.fileManagers = []),
          (this.iterator = -1),
          (this.pluginCache = {}),
          (this.Loader = new e.PluginLoader(e));
      }
      return (
        (e.prototype.addPlugins = function (e) {
          if (e) for (var t = 0; t < e.length; t++) this.addPlugin(e[t]);
        }),
        (e.prototype.addPlugin = function (e, t, i) {
          this.installedPlugins.push(e),
            t && (this.pluginCache[t] = e),
            e.install &&
              e.install(
                this.less,
                this,
                i || this.less.functions.functionRegistry
              );
        }),
        (e.prototype.get = function (e) {
          return this.pluginCache[e];
        }),
        (e.prototype.addVisitor = function (e) {
          this.visitors.push(e);
        }),
        (e.prototype.addPreProcessor = function (e, t) {
          var i;
          for (
            i = 0;
            i < this.preProcessors.length &&
            !(this.preProcessors[i].priority >= t);
            i++
          );
          this.preProcessors.splice(i, 0, { preProcessor: e, priority: t });
        }),
        (e.prototype.addPostProcessor = function (e, t) {
          var i;
          for (
            i = 0;
            i < this.postProcessors.length &&
            !(this.postProcessors[i].priority >= t);
            i++
          );
          this.postProcessors.splice(i, 0, { postProcessor: e, priority: t });
        }),
        (e.prototype.addFileManager = function (e) {
          this.fileManagers.push(e);
        }),
        (e.prototype.getPreProcessors = function () {
          for (var e = [], t = 0; t < this.preProcessors.length; t++)
            e.push(this.preProcessors[t].preProcessor);
          return e;
        }),
        (e.prototype.getPostProcessors = function () {
          for (var e = [], t = 0; t < this.postProcessors.length; t++)
            e.push(this.postProcessors[t].postProcessor);
          return e;
        }),
        (e.prototype.getVisitors = function () {
          return this.visitors;
        }),
        (e.prototype.visitor = function () {
          var e = this;
          return {
            first: function () {
              return (e.iterator = -1), e.visitors[e.iterator];
            },
            get: function () {
              return (e.iterator += 1), e.visitors[e.iterator];
            }
          };
        }),
        (e.prototype.getFileManagers = function () {
          return this.fileManagers;
        }),
        e
      );
    })(),
    kt = function (e, t) {
      return (!t && It) || (It = new Ct(e)), It;
    };
  var _t,
    At,
    Pt = function (e) {
      var t = e.match(
        /^v(\d{1,2})\.(\d{1,2})\.(\d{1,2})(?:-([0-9A-Za-z-.]+))?(?:\+([0-9A-Za-z-.]+))?$/
      );
      if (!t) throw new Error("Unable to parse: " + e);
      return {
        major: parseInt(t[1], 10),
        minor: parseInt(t[2], 10),
        patch: parseInt(t[3], 10),
        pre: t[4] || "",
        build: t[5] || ""
      };
    };
  function Mt(e, t) {
    var i, n, o, a;
    (o = (function (e) {
      return (function () {
        function t(e, t) {
          (this.root = e), (this.imports = t);
        }
        return (
          (t.prototype.toCSS = function (t) {
            var i,
              n,
              s = {};
            try {
              i = St(this.root, t);
            } catch (e) {
              throw new V(e, this.imports);
            }
            try {
              var o = Boolean(t.compress);
              o &&
                r.warn(
                  "The compress option has been deprecated. We recommend you use a dedicated css minifier, for instance see less-plugin-clean-css."
                );
              var a = {
                compress: o,
                dumpLineNumbers: t.dumpLineNumbers,
                strictUnits: Boolean(t.strictUnits),
                numPrecision: 8
              };
              t.sourceMap
                ? ((n = new e(t.sourceMap)),
                  (s.css = n.toCSS(i, a, this.imports)))
                : (s.css = i.toCSS(a));
            } catch (e) {
              throw new V(e, this.imports);
            }
            if (t.pluginManager)
              for (
                var l = t.pluginManager.getPostProcessors(), u = 0;
                u < l.length;
                u++
              )
                s.css = l[u].process(s.css, {
                  sourceMap: n,
                  options: t,
                  imports: this.imports
                });
            for (var c in (t.sourceMap && (s.map = n.getExternalSourceMap()),
            (s.imports = []),
            this.imports.files))
              Object.prototype.hasOwnProperty.call(this.imports.files, c) &&
                c !== this.imports.rootFilename &&
                s.imports.push(c);
            return s;
          }),
          t
        );
      })();
    })(
      (n = (function (e, t) {
        return (function () {
          function i(e) {
            this.options = e;
          }
          return (
            (i.prototype.toCSS = function (t, i, n) {
              var r = new e({
                  contentsIgnoredCharsMap: n.contentsIgnoredChars,
                  rootNode: t,
                  contentsMap: n.contents,
                  sourceMapFilename: this.options.sourceMapFilename,
                  sourceMapURL: this.options.sourceMapURL,
                  outputFilename: this.options.sourceMapOutputFilename,
                  sourceMapBasepath: this.options.sourceMapBasepath,
                  sourceMapRootpath: this.options.sourceMapRootpath,
                  outputSourceFiles: this.options.outputSourceFiles,
                  sourceMapGenerator: this.options.sourceMapGenerator,
                  sourceMapFileInline: this.options.sourceMapFileInline,
                  disableSourcemapAnnotation:
                    this.options.disableSourcemapAnnotation
                }),
                s = r.toCSS(i);
              return (
                (this.sourceMap = r.sourceMap),
                (this.sourceMapURL = r.sourceMapURL),
                this.options.sourceMapInputFilename &&
                  (this.sourceMapInputFilename = r.normalizeFilename(
                    this.options.sourceMapInputFilename
                  )),
                void 0 !== this.options.sourceMapBasepath &&
                  void 0 !== this.sourceMapURL &&
                  (this.sourceMapURL = r.removeBasepath(this.sourceMapURL)),
                s + this.getCSSAppendage()
              );
            }),
            (i.prototype.getCSSAppendage = function () {
              var e = this.sourceMapURL;
              if (this.options.sourceMapFileInline) {
                if (void 0 === this.sourceMap) return "";
                e =
                  "data:application/json;base64," +
                  t.encodeBase64(this.sourceMap);
              }
              return this.options.disableSourcemapAnnotation
                ? ""
                : e
                ? "/*# sourceMappingURL=" + e + " */"
                : "";
            }),
            (i.prototype.getExternalSourceMap = function () {
              return this.sourceMap;
            }),
            (i.prototype.setExternalSourceMap = function (e) {
              this.sourceMap = e;
            }),
            (i.prototype.isInline = function () {
              return this.options.sourceMapFileInline;
            }),
            (i.prototype.getSourceMapURL = function () {
              return this.sourceMapURL;
            }),
            (i.prototype.getOutputFilename = function () {
              return this.options.sourceMapOutputFilename;
            }),
            (i.prototype.getInputFilename = function () {
              return this.sourceMapInputFilename;
            }),
            i
          );
        })();
      })(
        (i = (function (e) {
          return (function () {
            function t(t) {
              (this._css = []),
                (this._rootNode = t.rootNode),
                (this._contentsMap = t.contentsMap),
                (this._contentsIgnoredCharsMap = t.contentsIgnoredCharsMap),
                t.sourceMapFilename &&
                  (this._sourceMapFilename = t.sourceMapFilename.replace(
                    /\\/g,
                    "/"
                  )),
                (this._outputFilename = t.outputFilename),
                (this.sourceMapURL = t.sourceMapURL),
                t.sourceMapBasepath &&
                  (this._sourceMapBasepath = t.sourceMapBasepath.replace(
                    /\\/g,
                    "/"
                  )),
                t.sourceMapRootpath
                  ? ((this._sourceMapRootpath = t.sourceMapRootpath.replace(
                      /\\/g,
                      "/"
                    )),
                    "/" !==
                      this._sourceMapRootpath.charAt(
                        this._sourceMapRootpath.length - 1
                      ) && (this._sourceMapRootpath += "/"))
                  : (this._sourceMapRootpath = ""),
                (this._outputSourceFiles = t.outputSourceFiles),
                (this._sourceMapGeneratorConstructor =
                  e.getSourceMapGenerator()),
                (this._lineNumber = 0),
                (this._column = 0);
            }
            return (
              (t.prototype.removeBasepath = function (e) {
                return (
                  this._sourceMapBasepath &&
                    0 === e.indexOf(this._sourceMapBasepath) &&
                    (("\\" !==
                      (e = e.substring(this._sourceMapBasepath.length)).charAt(
                        0
                      ) &&
                      "/" !== e.charAt(0)) ||
                      (e = e.substring(1))),
                  e
                );
              }),
              (t.prototype.normalizeFilename = function (e) {
                return (
                  (e = e.replace(/\\/g, "/")),
                  (e = this.removeBasepath(e)),
                  (this._sourceMapRootpath || "") + e
                );
              }),
              (t.prototype.add = function (e, t, i, n) {
                if (e) {
                  var r, s, o, a, l;
                  if (t && t.filename) {
                    var u = this._contentsMap[t.filename];
                    if (
                      (this._contentsIgnoredCharsMap[t.filename] &&
                        ((i -= this._contentsIgnoredCharsMap[t.filename]) < 0 &&
                          (i = 0),
                        (u = u.slice(
                          this._contentsIgnoredCharsMap[t.filename]
                        ))),
                      void 0 === u)
                    )
                      return void this._css.push(e);
                    a = (s = (u = u.substring(0, i)).split("\n"))[s.length - 1];
                  }
                  if (
                    ((o = (r = e.split("\n"))[r.length - 1]), t && t.filename)
                  )
                    if (n)
                      for (l = 0; l < r.length; l++)
                        this._sourceMapGenerator.addMapping({
                          generated: {
                            line: this._lineNumber + l + 1,
                            column: 0 === l ? this._column : 0
                          },
                          original: {
                            line: s.length + l,
                            column: 0 === l ? a.length : 0
                          },
                          source: this.normalizeFilename(t.filename)
                        });
                    else
                      this._sourceMapGenerator.addMapping({
                        generated: {
                          line: this._lineNumber + 1,
                          column: this._column
                        },
                        original: { line: s.length, column: a.length },
                        source: this.normalizeFilename(t.filename)
                      });
                  1 === r.length
                    ? (this._column += o.length)
                    : ((this._lineNumber += r.length - 1),
                      (this._column = o.length)),
                    this._css.push(e);
                }
              }),
              (t.prototype.isEmpty = function () {
                return 0 === this._css.length;
              }),
              (t.prototype.toCSS = function (e) {
                if (
                  ((this._sourceMapGenerator =
                    new this._sourceMapGeneratorConstructor({
                      file: this._outputFilename,
                      sourceRoot: null
                    })),
                  this._outputSourceFiles)
                )
                  for (var t in this._contentsMap)
                    if (this._contentsMap.hasOwnProperty(t)) {
                      var i = this._contentsMap[t];
                      this._contentsIgnoredCharsMap[t] &&
                        (i = i.slice(this._contentsIgnoredCharsMap[t])),
                        this._sourceMapGenerator.setSourceContent(
                          this.normalizeFilename(t),
                          i
                        );
                    }
                if ((this._rootNode.genCSS(e, this), this._css.length > 0)) {
                  var n = void 0,
                    r = JSON.stringify(this._sourceMapGenerator.toJSON());
                  this.sourceMapURL
                    ? (n = this.sourceMapURL)
                    : this._sourceMapFilename && (n = this._sourceMapFilename),
                    (this.sourceMapURL = n),
                    (this.sourceMap = r);
                }
                return this._css.join("");
              }),
              t
            );
          })();
        })((e = new s(e, t)))),
        e
      ))
    )),
      (a = (function (e) {
        return (function () {
          function t(e, t, i) {
            (this.less = e),
              (this.rootFilename = i.filename),
              (this.paths = t.paths || []),
              (this.contents = {}),
              (this.contentsIgnoredChars = {}),
              (this.mime = t.mime),
              (this.error = null),
              (this.context = t),
              (this.queue = []),
              (this.files = {});
          }
          return (
            (t.prototype.push = function (t, i, n, s, o) {
              var a = this,
                l = this.context.pluginManager.Loader;
              this.queue.push(t);
              var u = function (e, i, n) {
                  a.queue.splice(a.queue.indexOf(t), 1);
                  var l = n === a.rootFilename;
                  s.optional && e
                    ? (o(null, { rules: [] }, !1, null),
                      r.info(
                        "The file " +
                          n +
                          " was skipped because it was not found and the import was marked optional."
                      ))
                    : (a.files[n] ||
                        s.inline ||
                        (a.files[n] = { root: i, options: s }),
                      e && !a.error && (a.error = e),
                      o(e, i, l, n));
                },
                c = {
                  rewriteUrls: this.context.rewriteUrls,
                  entryPath: n.entryPath,
                  rootpath: n.rootpath,
                  rootFilename: n.rootFilename
                },
                h = e.getFileManager(t, n.currentDirectory, this.context, e);
              if (h) {
                var f,
                  p,
                  v = function (e) {
                    var t,
                      i = e.filename,
                      r = e.contents.replace(/^\uFEFF/, "");
                    (c.currentDirectory = h.getPath(i)),
                      c.rewriteUrls &&
                        ((c.rootpath = h.join(
                          a.context.rootpath || "",
                          h.pathDiff(c.currentDirectory, c.entryPath)
                        )),
                        !h.isPathAbsolute(c.rootpath) &&
                          h.alwaysMakePathsAbsolute() &&
                          (c.rootpath = h.join(c.entryPath, c.rootpath))),
                      (c.filename = i);
                    var o = new D.Parse(a.context);
                    (o.processImports = !1),
                      (a.contents[i] = r),
                      (n.reference || s.reference) && (c.reference = !0),
                      s.isPlugin
                        ? (t = l.evalPlugin(
                            r,
                            o,
                            a,
                            s.pluginArgs,
                            c
                          )) instanceof V
                          ? u(t, null, i)
                          : u(null, t, i)
                        : s.inline
                        ? u(null, r, i)
                        : !a.files[i] ||
                          a.files[i].options.multiple ||
                          s.multiple
                        ? new re(o, a, c).parse(r, function (e, t) {
                            u(e, t, i);
                          })
                        : u(null, a.files[i].root, i);
                  },
                  d = _(this.context);
                i && (d.ext = s.isPlugin ? ".js" : ".less"),
                  s.isPlugin
                    ? ((d.mime = "application/javascript"),
                      d.syncImport
                        ? (f = l.loadPluginSync(t, n.currentDirectory, d, e, h))
                        : (p = l.loadPlugin(t, n.currentDirectory, d, e, h)))
                    : d.syncImport
                    ? (f = h.loadFileSync(t, n.currentDirectory, d, e))
                    : (p = h.loadFile(
                        t,
                        n.currentDirectory,
                        d,
                        e,
                        function (e, t) {
                          e ? u(e) : v(t);
                        }
                      )),
                  f ? (f.filename ? v(f) : u(f)) : p && p.then(v, u);
              } else u({ message: "Could not find a file-manager for " + t });
            }),
            t
          );
        })();
      })(e));
    var u,
      c = (function (e, t) {
        var i = function (e, n, r) {
          if (
            ("function" == typeof n
              ? ((r = n), (n = P(this.options, {})))
              : (n = P(this.options, n || {})),
            !r)
          ) {
            var s = this;
            return new Promise(function (t, r) {
              i.call(s, e, n, function (e, i) {
                e ? r(e) : t(i);
              });
            });
          }
          this.parse(e, n, function (e, i, n, s) {
            if (e) return r(e);
            var o;
            try {
              o = new t(i, n).toCSS(s);
            } catch (e) {
              return r(e);
            }
            r(null, o);
          });
        };
        return i;
      })(0, o),
      h = (function (e, t, i) {
        var n = function (e, t, r) {
          if (
            ("function" == typeof t
              ? ((r = t), (t = P(this.options, {})))
              : (t = P(this.options, t || {})),
            !r)
          ) {
            var s = this;
            return new Promise(function (i, r) {
              n.call(s, e, t, function (e, t) {
                e ? r(e) : i(t);
              });
            });
          }
          var o,
            a = void 0,
            l = new kt(this, !t.reUsePluginManager);
          if (((t.pluginManager = l), (o = new D.Parse(t)), t.rootFileInfo))
            a = t.rootFileInfo;
          else {
            var u = t.filename || "input",
              c = u.replace(/[^/\\]*$/, "");
            (a = {
              filename: u,
              rewriteUrls: o.rewriteUrls,
              rootpath: o.rootpath || "",
              currentDirectory: c,
              entryPath: c,
              rootFilename: u
            }).rootpath &&
              "/" !== a.rootpath.slice(-1) &&
              (a.rootpath += "/");
          }
          var h = new i(this, o, a);
          (this.importManager = h),
            t.plugins &&
              t.plugins.forEach(function (e) {
                var t, i;
                if (e.fileContent) {
                  if (
                    ((i = e.fileContent.replace(/^\uFEFF/, "")),
                    (t = l.Loader.evalPlugin(
                      i,
                      o,
                      h,
                      e.options,
                      e.filename
                    )) instanceof V)
                  )
                    return r(t);
                } else l.addPlugin(e);
              }),
            new re(o, h, a).parse(
              e,
              function (e, i) {
                if (e) return r(e);
                r(null, i, h, t);
              },
              t
            );
        };
        return n;
      })(0, 0, a),
      f = Pt("v4.2.0"),
      p = {
        version: [f.major, f.minor, f.patch],
        data: l,
        tree: He,
        Environment: s,
        AbstractFileManager: Qe,
        AbstractPluginLoader: Ke,
        environment: e,
        visitors: Y,
        Parser: re,
        functions: xt(e),
        contexts: D,
        SourceMapOutput: i,
        SourceMapBuilder: n,
        ParseTree: o,
        ImportManager: a,
        render: c,
        parse: h,
        LessError: V,
        transformTree: St,
        utils: R,
        PluginManager: kt,
        logger: r
      },
      v = function (e) {
        return function () {
          var t = Object.create(e.prototype);
          return e.apply(t, Array.prototype.slice.call(arguments, 0)), t;
        };
      },
      d = Object.create(p);
    for (var m in p.tree)
      if ("function" == typeof (u = p.tree[m])) d[m.toLowerCase()] = v(u);
      else
        for (var g in ((d[m] = Object.create(null)), u))
          d[m][g.toLowerCase()] = v(u[g]);
    return (p.parse = p.parse.bind(d)), (p.render = p.render.bind(d)), d;
  }
  var Et = {},
    Rt = function () {};
  Rt.prototype = Object.assign(new Qe(), {
    alwaysMakePathsAbsolute: function () {
      return !0;
    },
    join: function (e, t) {
      return e ? this.extractUrlParts(t, e).path : t;
    },
    doXHR: function (e, t, i, n) {
      var r = new XMLHttpRequest(),
        s = !_t.isFileProtocol || _t.fileAsync;
      function o(t, i, n) {
        t.status >= 200 && t.status < 300
          ? i(t.responseText, t.getResponseHeader("Last-Modified"))
          : "function" == typeof n && n(t.status, e);
      }
      "function" == typeof r.overrideMimeType && r.overrideMimeType("text/css"),
        At.debug("XHR: Getting '" + e + "'"),
        r.open("GET", e, s),
        r.setRequestHeader(
          "Accept",
          t || "text/x-less, text/css; q=0.9, */*; q=0.5"
        ),
        r.send(null),
        _t.isFileProtocol && !_t.fileAsync
          ? 0 === r.status || (r.status >= 200 && r.status < 300)
            ? i(r.responseText)
            : n(r.status, e)
          : s
          ? (r.onreadystatechange = function () {
              4 == r.readyState && o(r, i, n);
            })
          : o(r, i, n);
    },
    supports: function () {
      return !0;
    },
    clearFileCache: function () {
      Et = {};
    },
    loadFile: function (e, t, i) {
      t && !this.isPathAbsolute(e) && (e = t + e),
        (e = i.ext ? this.tryAppendExtension(e, i.ext) : e),
        (i = i || {});
      var n = this.extractUrlParts(e, window.location.href).url,
        r = this;
      return new Promise(function (e, t) {
        if (i.useFileCache && Et[n])
          try {
            var s = Et[n];
            return e({
              contents: s,
              filename: n,
              webInfo: { lastModified: new Date() }
            });
          } catch (e) {
            return t({
              filename: n,
              message: "Error loading file " + n + " error was " + e.message
            });
          }
        r.doXHR(
          n,
          i.mime,
          function (t, i) {
            (Et[n] = t),
              e({ contents: t, filename: n, webInfo: { lastModified: i } });
          },
          function (e, i) {
            t({
              type: "File",
              message: "'" + i + "' wasn't found (" + e + ")",
              href: n
            });
          }
        );
      });
    }
  });
  var Ot = function (e, t) {
      return (_t = e), (At = t), Rt;
    },
    Vt = function (e) {
      this.less = e;
    };
  Vt.prototype = Object.assign(new Ke(), {
    loadPlugin: function (e, t, i, n, r) {
      return new Promise(function (s, o) {
        r.loadFile(e, t, i, n).then(s).catch(o);
      });
    }
  });
  var Ft = function (t, n, r) {
      return {
        add: function (s, o) {
          r.errorReporting && "html" !== r.errorReporting
            ? "console" === r.errorReporting
              ? (function (e, t) {
                  var i = e.filename || t,
                    s = [],
                    o =
                      (e.type || "Syntax") +
                      "Error: " +
                      (e.message || "There is an error in your .less file") +
                      " in " +
                      i,
                    a = function (e, t, i) {
                      void 0 !== e.extract[t] &&
                        s.push(
                          "{line} {content}"
                            .replace(
                              /\{line\}/,
                              (parseInt(e.line, 10) || 0) + (t - 1)
                            )
                            .replace(/\{class\}/, i)
                            .replace(/\{content\}/, e.extract[t])
                        );
                    };
                  e.line &&
                    (a(e, 0, ""),
                    a(e, 1, "line"),
                    a(e, 2, ""),
                    (o +=
                      " on line " +
                      e.line +
                      ", column " +
                      (e.column + 1) +
                      ":\n" +
                      s.join("\n"))),
                    e.stack &&
                      (e.extract || r.logLevel >= 4) &&
                      (o += "\nStack Trace\n" + e.stack),
                    n.logger.error(o);
                })(s, o)
              : "function" == typeof r.errorReporting &&
                r.errorReporting("add", s, o)
            : (function (n, s) {
                var o,
                  a,
                  l = "less-error-message:" + e(s || ""),
                  u = t.document.createElement("div"),
                  c = [],
                  h = n.filename || s,
                  f = h.match(/([^/]+(\?.*)?)$/)[1];
                (u.id = l),
                  (u.className = "less-error-message"),
                  (a =
                    "<h3>" +
                    (n.type || "Syntax") +
                    "Error: " +
                    (n.message || "There is an error in your .less file") +
                    '</h3><p>in <a href="' +
                    h +
                    '">' +
                    f +
                    "</a> ");
                var p = function (e, t, i) {
                  void 0 !== e.extract[t] &&
                    c.push(
                      '<li><label>{line}</label><pre class="{class}">{content}</pre></li>'
                        .replace(
                          /\{line\}/,
                          (parseInt(e.line, 10) || 0) + (t - 1)
                        )
                        .replace(/\{class\}/, i)
                        .replace(/\{content\}/, e.extract[t])
                    );
                };
                n.line &&
                  (p(n, 0, ""),
                  p(n, 1, "line"),
                  p(n, 2, ""),
                  (a +=
                    "on line " +
                    n.line +
                    ", column " +
                    (n.column + 1) +
                    ":</p><ul>" +
                    c.join("") +
                    "</ul>")),
                  n.stack &&
                    (n.extract || r.logLevel >= 4) &&
                    (a +=
                      "<br/>Stack Trace</br />" +
                      n.stack.split("\n").slice(1).join("<br/>")),
                  (u.innerHTML = a),
                  i(
                    t.document,
                    [
                      ".less-error-message ul, .less-error-message li {",
                      "list-style-type: none;",
                      "margin-right: 15px;",
                      "padding: 4px 0;",
                      "margin: 0;",
                      "}",
                      ".less-error-message label {",
                      "font-size: 12px;",
                      "margin-right: 15px;",
                      "padding: 4px 0;",
                      "color: #cc7777;",
                      "}",
                      ".less-error-message pre {",
                      "color: #dd6666;",
                      "padding: 4px 0;",
                      "margin: 0;",
                      "display: inline-block;",
                      "}",
                      ".less-error-message pre.line {",
                      "color: #ff0000;",
                      "}",
                      ".less-error-message h3 {",
                      "font-size: 20px;",
                      "font-weight: bold;",
                      "padding: 15px 0 5px 0;",
                      "margin: 0;",
                      "}",
                      ".less-error-message a {",
                      "color: #10a",
                      "}",
                      ".less-error-message .error {",
                      "color: red;",
                      "font-weight: bold;",
                      "padding-bottom: 2px;",
                      "border-bottom: 1px dashed red;",
                      "}"
                    ].join("\n"),
                    { title: "error-message" }
                  ),
                  (u.style.cssText = [
                    "font-family: Arial, sans-serif",
                    "border: 1px solid #e00",
                    "background-color: #eee",
                    "border-radius: 5px",
                    "-webkit-border-radius: 5px",
                    "-moz-border-radius: 5px",
                    "color: #e00",
                    "padding: 15px",
                    "margin-bottom: 15px"
                  ].join(";")),
                  "development" === r.env &&
                    (o = setInterval(function () {
                      var e = t.document,
                        i = e.body;
                      i &&
                        (e.getElementById(l)
                          ? i.replaceChild(u, e.getElementById(l))
                          : i.insertBefore(u, i.firstChild),
                        clearInterval(o));
                    }, 10));
              })(s, o);
        },
        remove: function (i) {
          r.errorReporting && "html" !== r.errorReporting
            ? "console" === r.errorReporting ||
              ("function" == typeof r.errorReporting &&
                r.errorReporting("remove", i))
            : (function (i) {
                var n = t.document.getElementById("less-error-message:" + e(i));
                n && n.parentNode.removeChild(n);
              })(i);
        }
      };
    },
    $t = {
      javascriptEnabled: !1,
      depends: !1,
      compress: !1,
      lint: !1,
      paths: [],
      color: !0,
      strictImports: !1,
      insecure: !1,
      rootpath: "",
      rewriteUrls: !1,
      math: 1,
      strictUnits: !1,
      globalVars: null,
      modifyVars: null,
      urlArgs: ""
    };
  if (window.less)
    for (var Lt in window.less)
      Object.prototype.hasOwnProperty.call(window.less, Lt) &&
        ($t[Lt] = window.less[Lt]);
  !(function (e, i) {
    t(i, n(e)),
      void 0 === i.isFileProtocol &&
        (i.isFileProtocol =
          /^(file|(chrome|safari)(-extension)?|resource|qrc|app):/.test(
            e.location.protocol
          )),
      (i.async = i.async || !1),
      (i.fileAsync = i.fileAsync || !1),
      (i.poll = i.poll || (i.isFileProtocol ? 1e3 : 1500)),
      (i.env =
        i.env ||
        ("127.0.0.1" == e.location.hostname ||
        "0.0.0.0" == e.location.hostname ||
        "localhost" == e.location.hostname ||
        (e.location.port && e.location.port.length > 0) ||
        i.isFileProtocol
          ? "development"
          : "production"));
    var r = /!dumpLineNumbers:(comments|mediaquery|all)/.exec(e.location.hash);
    r && (i.dumpLineNumbers = r[1]),
      void 0 === i.useFileCache && (i.useFileCache = !0),
      void 0 === i.onReady && (i.onReady = !0),
      i.relativeUrls && (i.rewriteUrls = "all");
  })(window, $t),
    ($t.plugins = $t.plugins || []),
    window.LESS_PLUGINS &&
      ($t.plugins = $t.plugins.concat(window.LESS_PLUGINS));
  var jt,
    Nt,
    Dt,
    Bt = (function (e, n) {
      var r = e.document,
        s = Mt();
      s.options = n;
      var o = s.environment,
        a = Ot(n, s.logger),
        l = new a();
      o.addFileManager(l),
        (s.FileManager = a),
        (s.PluginLoader = Vt),
        (function (e, t) {
          (t.logLevel =
            void 0 !== t.logLevel
              ? t.logLevel
              : "development" === t.env
              ? 3
              : 1),
            t.loggers ||
              (t.loggers = [
                {
                  debug: function (e) {
                    t.logLevel >= 4 && console.log(e);
                  },
                  info: function (e) {
                    t.logLevel >= 3 && console.log(e);
                  },
                  warn: function (e) {
                    t.logLevel >= 2 && console.warn(e);
                  },
                  error: function (e) {
                    t.logLevel >= 1 && console.error(e);
                  }
                }
              ]);
          for (var i = 0; i < t.loggers.length; i++)
            e.logger.addListener(t.loggers[i]);
        })(s, n);
      var u = Ft(e, s, n),
        c = (s.cache =
          n.cache ||
          (function (e, t, i) {
            var n = null;
            if ("development" !== t.env)
              try {
                n = void 0 === e.localStorage ? null : e.localStorage;
              } catch (e) {}
            return {
              setCSS: function (e, t, r, s) {
                if (n) {
                  i.info("saving " + e + " to cache.");
                  try {
                    n.setItem(e, s),
                      n.setItem(e + ":timestamp", t),
                      r && n.setItem(e + ":vars", JSON.stringify(r));
                  } catch (t) {
                    i.error(
                      'failed to save "' + e + '" to local storage for caching.'
                    );
                  }
                }
              },
              getCSS: function (e, t, i) {
                var r = n && n.getItem(e),
                  s = n && n.getItem(e + ":timestamp"),
                  o = n && n.getItem(e + ":vars");
                if (
                  ((i = i || {}),
                  (o = o || "{}"),
                  s &&
                    t.lastModified &&
                    new Date(t.lastModified).valueOf() ===
                      new Date(s).valueOf() &&
                    JSON.stringify(i) === o)
                )
                  return r;
              }
            };
          })(e, n, s.logger));
      !(function () {
        function e() {
          throw {
            type: "Runtime",
            message:
              "Image size functions are not supported in browser version of less"
          };
        }
        var t = {
          "image-size": function (t) {
            return e(), -1;
          },
          "image-width": function (t) {
            return e(), -1;
          },
          "image-height": function (t) {
            return e(), -1;
          }
        };
        te.addMultiple(t);
      })(s.environment),
        n.functions && s.functions.functionRegistry.addMultiple(n.functions);
      var h = /^text\/(x-)?less$/;
      function f(e) {
        var t = {};
        for (var i in e)
          Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
        return t;
      }
      function p(e, t) {
        var i = Array.prototype.slice.call(arguments, 2);
        return function () {
          var n = i.concat(Array.prototype.slice.call(arguments, 0));
          return e.apply(t, n);
        };
      }
      function v(e) {
        for (
          var t, i = r.getElementsByTagName("style"), o = 0;
          o < i.length;
          o++
        )
          if ((t = i[o]).type.match(h)) {
            var a = f(n);
            a.modifyVars = e;
            var l = t.innerHTML || "";
            (a.filename = r.location.href.replace(/#.*$/, "")),
              s.render(
                l,
                a,
                p(
                  function (e, t, i) {
                    t
                      ? u.add(t, "inline")
                      : ((e.type = "text/css"),
                        e.styleSheet
                          ? (e.styleSheet.cssText = i.css)
                          : (e.innerHTML = i.css));
                  },
                  null,
                  t
                )
              );
          }
      }
      function d(e, i, r, a, h) {
        var p = f(n);
        t(p, e),
          (p.mime = e.type),
          h && (p.modifyVars = h),
          l
            .loadFile(e.href, null, p, o)
            .then(function (t) {
              !(function (t) {
                var n = t.contents,
                  o = t.filename,
                  h = t.webInfo,
                  f = {
                    currentDirectory: l.getPath(o),
                    filename: o,
                    rootFilename: o,
                    rewriteUrls: p.rewriteUrls
                  };
                if (
                  ((f.entryPath = f.currentDirectory),
                  (f.rootpath = p.rootpath || f.currentDirectory),
                  h)
                ) {
                  h.remaining = a;
                  var v = c.getCSS(o, h, p.modifyVars);
                  if (!r && v)
                    return (h.local = !0), void i(null, v, n, e, h, o);
                }
                u.remove(o),
                  (p.rootFileInfo = f),
                  s.render(n, p, function (t, r) {
                    t
                      ? ((t.href = o), i(t))
                      : (c.setCSS(e.href, h.lastModified, p.modifyVars, r.css),
                        i(null, r.css, n, e, h, o));
                  });
              })(t);
            })
            .catch(function (e) {
              console.log(e), i(e);
            });
      }
      function m(e, t, i) {
        for (var n = 0; n < s.sheets.length; n++)
          d(s.sheets[n], e, t, s.sheets.length - (n + 1), i);
      }
      return (
        (s.watch = function () {
          return (
            s.watchMode ||
              ((s.env = "development"),
              "development" === s.env &&
                (s.watchTimer = setInterval(function () {
                  s.watchMode &&
                    (l.clearFileCache(),
                    m(function (t, n, r, s, o) {
                      t ? u.add(t, t.href || s.href) : n && i(e.document, n, s);
                    }));
                }, n.poll))),
            (this.watchMode = !0),
            !0
          );
        }),
        (s.unwatch = function () {
          return clearInterval(s.watchTimer), (this.watchMode = !1), !1;
        }),
        (s.registerStylesheetsImmediately = function () {
          var e = r.getElementsByTagName("link");
          s.sheets = [];
          for (var t = 0; t < e.length; t++)
            ("stylesheet/less" === e[t].rel ||
              (e[t].rel.match(/stylesheet/) && e[t].type.match(h))) &&
              s.sheets.push(e[t]);
        }),
        (s.registerStylesheets = function () {
          return new Promise(function (e) {
            s.registerStylesheetsImmediately(), e();
          });
        }),
        (s.modifyVars = function (e) {
          return s.refresh(!0, e, !1);
        }),
        (s.refresh = function (t, n, r) {
          return (
            (t || r) && !1 !== r && l.clearFileCache(),
            new Promise(function (r, o) {
              var a, l, c, h;
              (a = l = new Date()),
                0 === (h = s.sheets.length)
                  ? ((l = new Date()),
                    (c = l - a),
                    s.logger.info(
                      "Less has finished and no sheets were loaded."
                    ),
                    r({
                      startTime: a,
                      endTime: l,
                      totalMilliseconds: c,
                      sheets: s.sheets.length
                    }))
                  : m(
                      function (t, n, f, p, v) {
                        if (t) return u.add(t, t.href || p.href), void o(t);
                        v.local
                          ? s.logger.info("Loading " + p.href + " from cache.")
                          : s.logger.info(
                              "Rendered " + p.href + " successfully."
                            ),
                          i(e.document, n, p),
                          s.logger.info(
                            "CSS for " +
                              p.href +
                              " generated in " +
                              (new Date() - l) +
                              "ms"
                          ),
                          0 === --h &&
                            ((c = new Date() - a),
                            s.logger.info(
                              "Less has finished. CSS generated in " + c + "ms"
                            ),
                            r({
                              startTime: a,
                              endTime: l,
                              totalMilliseconds: c,
                              sheets: s.sheets.length
                            })),
                          (l = new Date());
                      },
                      t,
                      n
                    ),
                v(n);
            })
          );
        }),
        (s.refreshStyles = v),
        s
      );
    })(window, $t);
  function Ut(e) {
    e.filename && console.warn(e), $t.async || Nt.removeChild(Dt);
  }
  return (
    (window.less = Bt),
    $t.onReady &&
      (/!watch/.test(window.location.hash) && Bt.watch(),
      $t.async ||
        ((jt = "body { display: none !important }"),
        (Nt = document.head || document.getElementsByTagName("head")[0]),
        ((Dt = document.createElement("style")).type = "text/css"),
        Dt.styleSheet
          ? (Dt.styleSheet.cssText = jt)
          : Dt.appendChild(document.createTextNode(jt)),
        Nt.appendChild(Dt)),
      Bt.registerStylesheetsImmediately(),
      (Bt.pageLoadFinished = Bt.refresh("development" === Bt.env).then(
        Ut,
        Ut
      ))),
    Bt
  );
});
//# sourceMappingURL=less.min.js.map
